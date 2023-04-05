/* eslint-disable no-param-reassign */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { DefinePlugin } = require('webpack');
const fs = require('fs');
const logging = require('webpack/lib/logging/runtime');
const chalk = require('chalk');
// const https = require('https');
// const http = require('http');

const DirectorySwitcherPlugin = require('./resolve/DirectorySwitcherPlugin');
const LocalPackageAliasPlugin = require('./resolve/LocalPackageAliasPlugin');
const { babelLoader, getMdxLoader } = require('./siteLoaderUtils');
const getNewRelicJS = require('../new-relic/getNewRelicJS');

const logger = logging.getLogger('terra-dev-site');

// Singletons
let oneTimeSetupComplete = false;
let siteRegistry = {};
const processPath = process.cwd();
const isLernaMonoRepo = fs.existsSync(path.join(processPath, 'lerna.json'));
const entryLoaderData = {};
const generatedBootstrapData = {};
const urlQueue = [];

/**
 * Updates the webpack options with defaults that terra-dev-site requires.
 */
class SitePlugin {
  constructor({
    entry,
    config,
  }) {
    // Apply defaults to the config.
    this.siteConfig = config;
    const { pathPrefix, titleConfig } = this.siteConfig;
    this.entry = entry;

    if (pathPrefix) {
      this.entryKey = `${pathPrefix}/index`;
      this.resourceQuery = `?terra-entry-${pathPrefix}`;
      this.htmlFileName = `${pathPrefix}/index.html`;
      this.url = `/${pathPrefix}/`;
    } else {
      this.entryKey = 'index';
      this.resourceQuery = '?terra-entry';
      this.htmlFileName = 'index.html';
      this.url = '/';
    }

    if (siteRegistry[pathPrefix]) {
      throw Error('The PathPrefix must be unique per TerraDevSite Plugin');
    }
    // Register each application instance with the siteRegistry
    siteRegistry[pathPrefix] = {
      path: pathPrefix,
      url: this.url,
      title: titleConfig.title,
      entry: this.entryKey,
    };
  }

  static applyOneTimeSetup({
    compiler,
    sourceFolder,
    distributionFolder,
    basename,
    isWebpack5,
  }) {
    if (oneTimeSetupComplete) {
      return;
    }
    oneTimeSetupComplete = true;
    const mdxLoader = getMdxLoader({
      publicPath: compiler.options.output.publicPath,
      urlInspectCallback: (url) => {
        // this callback notifies us of all the urls used in md or mdx files.
        urlQueue.push(url);
      },
    });

    // If a mono repo, update the rootDirectories to include all the packages.
    const rootDirectories = [
      ...isLernaMonoRepo ? [path.resolve(processPath, 'packages', '*')] : [processPath],
    ];

    let webpackConfig = {
      entry: {
        rewriteHistory: '@cerner/terra-dev-site/lib/browser-router-redirect/rewriteHistory',
        redirect: '@cerner/terra-dev-site/lib/browser-router-redirect/redirect',
      },
      module: {
        rules: [{
          // Drop loaders in a 'one of' block to avoid the original loaders applying on top of the new loaders.
          // Only the first loader will apply and no others.
          oneOf: [{
            test: /\.mdx$/,
            use: [
              babelLoader,
              mdxLoader,
            ],
          }, {
            test: /\.md$/,
            oneOf: [
              {
                // Use MDX to import any md files imported from an mdx file.
                issuer: [
                  /\.mdx?$/,
                  /entry\.template$/,
                ],
                use: [
                  babelLoader,
                  mdxLoader,
                ],
              },
              {
                use: 'raw-loader',
              },
            ],
          }, {
            resourceQuery: '?dev-site-codeblock',
            // this bypasses the default json loader
            type: 'javascript/auto',
            use: [
              babelLoader,
              mdxLoader,
              {
                loader: 'devSiteCodeblock',
                options: {
                  resolveExtensions: compiler.options.resolve.extensions,
                },
              },
            ],
          }, {
            resourceQuery: '?dev-site-example',
            use: [
              babelLoader,
              'devSiteExample',
            ],
          }, {
            test: /\.json$/,
            // this bypasses the default json loader
            type: 'javascript/auto',
            resourceQuery: '?dev-site-package',
            use: [
              babelLoader,
              'devSitePackage',
            ],
          }, {
            resourceQuery: '?dev-site-props-table',
            use: [
              babelLoader,
              mdxLoader,
              {
                loader: 'devSitePropsTable',
                options: {
                  resolveExtensions: compiler.options.resolve.extensions,
                },
              },
            ],
          }, {
            // This loader generates the entrypoint and sets up the config template path and resource query.
            resourceQuery: /\?terra-entry/,
            use: [
              babelLoader,
              {
                loader: 'devSiteEntry',
                options: {
                  entryLoaderData,
                },
              },
            ],
          },
          ],
        }],
      },
      resolve: {
        plugins: [
          ...compiler.options.mode !== 'production' && sourceFolder !== distributionFolder
            ? [
              // Switch between source and distribution files.
              new DirectorySwitcherPlugin({
                source: sourceFolder,
                distribution: distributionFolder,
                rootDirectories,
              }),
            ]
            : [],
          // Alias the local package to allow imports to reference the file as if it was imported from node modules.
          new LocalPackageAliasPlugin({
            rootDirectories,
          }),
        ],
      },
      // add the path to search for dev site loaders
      resolveLoader: {
        modules: [
          path.resolve(__dirname, '..', 'loaders'),
          'node_modules',
        ],
      },
      devServer: {
        // Setting this to enable browser routing
        historyApiFallback: true,
      },
    };

    // If this plugin is used with webpack 5 we must normalize the webpack config.
    if (isWebpack5) {
      webpackConfig = compiler.webpack.config.getNormalizedWebpackOptions(webpackConfig);
    }

    // Remove once we no longer support webpack 4
    delete compiler.options.entry.terraDevSiteDummy;

    // ENTRY
    compiler.options.entry = {
      ...compiler.options.entry,
      ...webpackConfig.entry,
    };

    // MODULE
    webpackConfig.module.rules[0].oneOf = webpackConfig.module.rules[0].oneOf.concat(compiler.options.module.rules);
    compiler.options.module.rules = webpackConfig.module.rules;

    // RESOLVE
    compiler.options.resolve.plugins = (compiler.options.resolve.plugins || []).concat(webpackConfig.resolve.plugins);

    // RESOLVE LOADER
    compiler.options.resolveLoader.modules = webpackConfig.resolveLoader.modules;

    // generate the 404 page.
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: path.join(__dirname, '..', 'templates', '404.html'),
      inject: 'head',
      chunks: ['redirect'],
    }).apply(compiler);

    // WEBPACK DEV SERVER
    if (compiler.options.devServer) {
      // Setting this to enable browser routing
      compiler.options.devServer.historyApiFallback = webpackConfig.devServer.historyApiFallback;
    }

    new DefinePlugin({
      // Base name is used to namespace terra-dev-site this is used in redirect.js which is only used in the 404 page.
      TERRA_DEV_SITE_BASENAME: JSON.stringify(basename),
    }).apply(compiler);
  }

  static getPublicPath({ compiler }) {
    if (process.env.TERRA_DEV_SITE_PUBLIC_PATH) {
      compiler.options.output.publicPath = process.env.TERRA_DEV_SITE_PUBLIC_PATH;
      // if we don't have a default or the default is auto, set the public path to /;
    } else if (!compiler.options.output || !compiler.options.output.publicPath || compiler.options.output.publicPath === 'auto') {
      compiler.options.output.publicPath = '/';
    }

    return compiler.options.output.publicPath;
  }

  apply(compiler) {
    const isWebpack5 = compiler.webpack && compiler.webpack.version.startsWith('5');

    const publicPath = SitePlugin.getPublicPath({ compiler });

    // Strip the trailing / from the public path.
    let basename = publicPath.slice(0, -1);

    const { sourceFolder, distributionFolder } = this.siteConfig;

    // Since there can be multiple dev site plugins this config we only want to do once for all of them.
    SitePlugin.applyOneTimeSetup({
      compiler,
      sourceFolder,
      distributionFolder,
      basename,
      isWebpack5,
    });

    // Get the list of apps excluding this current app.
    const filteredSites = Object.values(siteRegistry).filter(site => site.path !== this.siteConfig.pathPrefix);

    // Map to what we want to send to site config
    const otherSites = filteredSites.map((site) => ({
      path: site.path,
      title: site.title,
      url: `${basename}${site.url}`,
    }));

    // if there is a path prefix we want to update the react router basename to include the prefix.
    if (this.siteConfig.pathPrefix) {
      basename = [basename, this.siteConfig.pathPrefix].join('/');
    }

    entryLoaderData[this.resourceQuery] = {
      entryPath: this.entry,
      siteConfig: this.siteConfig,
      sites: otherSites,
      basename,
      resolveExtensions: compiler.options.resolve.extensions,
      isLernaMonoRepo,
      contentDirectory: this.siteConfig.contentDirectory,
      dataCallback: (data) => {
        // this data callback allows us to pull information back out of the loader.
        generatedBootstrapData[this.resourceQuery] = data.relativeUrls;
      },
    };

    let webpackConfig = {
      entry: {
        [this.entryKey]: `@cerner/terra-dev-site/lib/webpack/templates/entry.template${this.resourceQuery}`,
      },
    };

    // If this plugin is used with webpack 5 we must normalize the webpack config.
    if (isWebpack5) {
      webpackConfig = compiler.webpack.config.getNormalizedWebpackOptions(webpackConfig);
    }

    // ENTRY
    compiler.options.entry = {
      ...compiler.options.entry,
      ...webpackConfig.entry,
    };

    // Generate the index.html file for the site.
    new HtmlWebpackPlugin({
      title: this.siteConfig.titleConfig.title,
      publicPath,
      filename: this.htmlFileName,
      template: path.join(__dirname, '..', 'templates', 'index.html'),
      favicon: this.siteConfig.faviconFilePath,
      headHtml: [getNewRelicJS()].concat(this.siteConfig.headHtml),
      excludeChunks: ['rewriteHistory', 'redirect', ...Object.values(filteredSites).map(site => site.entry), ...this.siteConfig.excludeChunks],
    }).apply(compiler);

    // Clean up the singletons after plugins are applied.
    compiler.hooks.afterPlugins.tap('terra-dev-site-site-plugin', () => {
      oneTimeSetupComplete = false;
      siteRegistry = {};
    });

    // Evaluate all URLS found in the site for correctness.
    compiler.hooks.done.tap('terra-dev-site-plugin', () => {
      // Convert generated links for all sites into a single list.
      const validRelativeUrls = Object.values(generatedBootstrapData).reduce((acc, urls) => acc.concat(urls), []);
      // add the favicon since it's valid too.
      validRelativeUrls.push(`${publicPath.slice(0, -1)}/favicon.ico`);

      // Log formatting
      const invalidUrlLog = (url) => `${chalk.blue(url.url)} in:\n ${chalk.yellow(url.file.history[0].replace(url.file.cwd, ''))} at line ${url.node.position.start.line}`;

      // Create a promise array to allow all logs to happen at the same time.
      const resultPromises = [];
      const queueLength = urlQueue.length;
      for (let index = 0; index < queueLength; index += 1) {
        const url = urlQueue.shift();

        if (url.url.startsWith('/')) {
          // for relative urls check against the know list of valid relative urls.
          // Remove query params or hash links from the end of the url.
          const urlWithoutHash = url.url.replace(/[#?].*$/, '');
          if (!validRelativeUrls.includes(urlWithoutHash)) {
            resultPromises.push(Promise.resolve(`${chalk.red('[Broken Link]')} ${invalidUrlLog(url)}`));
          }
        } else if (url.url.startsWith('https')) {
          // required to not assume https urls are invalid.
          // We cannot validate engineering.cerner.com urls without additional work because they use the 404 status to redirect.
          // resultPromises.push(new Promise((resolve) => {
          //   https.get(url.url, (response) => {
          //     if (response.statusCode >= 400) {
          //       resolve( `${chalk.red('[Broken Link]')} ${chalk.blue(url.url)} in:\n ${chalk.yellow(url.file.history[0].replace(url.file.cwd, ''))} at line ${url.node.position.start.line}`);
          //     } else {
          //       resolve();
          //     }
          //   });
          // }));
        } else if (url.url.startsWith('http')) {
          // required to not assume http urls are invalid.
          // resultPromises.push(new Promise((resolve) => {
          //   http.get(url.url, (response) => {
          //     if (response.statusCode >= 400) {
          //       resolve(`${chalk.red('[Broken Link]')} ${chalk.blue(url.url)} in:\n ${chalk.yellow(url.file.history[0].replace(url.file.cwd, ''))} at line ${url.node.position.start.line}`);
          //     } else {
          //       resolve();
          //     }
          //   });
          // }));
        } else if (url.url.startsWith('#')) {
          // Assume anchors are fine.
          // We could check the document for an id to ensure the anchor link will take you somewhere but thats beyond the initial scope.
        } else if (url.url.startsWith('.')) {
          // To validate these we'd have to know the url for the current document. doable, but may need some duplicate logic.
        } else {
          // Catchall for oddball links, mailtos, and anything else unexpected.
          resultPromises.push(Promise.resolve(`${chalk.red('[Unexpected Link]')} ${invalidUrlLog(url)}`));
        }
      }
      // Resolve all promises and log results. this would matter more if we were verifying external urls.
      Promise.all(resultPromises).then((values) => {
        values.forEach((value) => {
          if (value) {
            logger.warn(value);
          }
        });
      });
    });
  }
}

module.exports = SitePlugin;
