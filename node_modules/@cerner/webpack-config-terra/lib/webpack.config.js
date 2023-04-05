const Autoprefixer = require('autoprefixer');
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');
const PostCSSCustomProperties = require('postcss-custom-properties');
const path = require('path');
const rtl = require('@mjhenkes/postcss-rtl');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { mergeWithCustomize } = require('webpack-merge');
const DuplicatePackageCheckerPlugin = require('@cerner/duplicate-package-checker-webpack-plugin');
const aggregateTranslations = require('@cerner/terra-aggregate-translations');
const logging = require('webpack/lib/logging/runtime');

const ThemePlugin = require('./postcss/ThemePlugin');
const getThemeConfig = require('./utils/_getThemeConfig');
const ThemeAggregator = require('./aggregate-themes/theme-aggregator');
const getThemeWebpackPromise = require('./aggregate-themes/getThemeWebpackPromise');

const Logger = logging.getLogger('webpack-config-terra');

/**
 * Get the locales to be defined by the webpack build, also aggregates translations, but we should remove that in the future.
 * @param {object} env the env object
 * @param {string} rootPath root path of the package.
 */
const getLocales = ({ disableAggregateTranslations }, rootPath) => {
  if (!disableAggregateTranslations) {
    return aggregateTranslations({ baseDir: rootPath });
  }
  return undefined;
};

/**
 * Get an array of modules that need to be resolved to during the webpack build. Should be removed after aggregate translations is removed.
 * @param {object} env the env object
 */
const getResolveModules = ({ disableAggregateTranslations }) => (
  [
    'node_modules',
    ...disableAggregateTranslations ? [] : ['aggregated-translations'],
  ]
);

/**
 * Determines the correct theme config to usee of the three options. Precedence is. ENV, options config, terra-them.config.js
 * @param {object} env the env object
 * @param {object} options object containing the override config if provided.
 */
const determineThemeConfig = ({ defaultTheme }, { themeConfig: overrideThemeConfig }) => {
  const themeENV = process.env.THEME;

  if (themeENV) {
    Logger.warn(`The THEME ENV has been deprecated and will be removed in the next major version. Please use the default theme webpack env option instead, for example "webpack --env.defaultTheme=${themeENV}"`);
  }

  const aDefaultTheme = defaultTheme || themeENV;

  if (aDefaultTheme) {
    return { theme: aDefaultTheme };
  }
  if (overrideThemeConfig) {
    return overrideThemeConfig;
  }

  return getThemeConfig();
};

/**
 * Provides the webpack dev server options to disable hot reloading. I'm going to be honest, it doesn't alway work.
 * @param {object} env the env object containing the request to disable hot reloading.
 */
const getWebpackDevServerStaticOptions = ({ disableHotReloading }) => (
  {
    ...disableHotReloading && {
      hot: false,
      inline: false,
    },
  }
);

const getAggregateThemeFile = ({ env, themeConfig }) => {
  const { enableAggregateThemes } = env;
  if (enableAggregateThemes) {
    return ThemeAggregator.aggregate(
      null, // Set the default theme via the config.
      {
        config: themeConfig,
        aggregateDefaultThemeAsScopedTheme: true,
      },
    );
  }
  return undefined;
};

/**
 * The extendable webpack config for terra.
 * @param {object} env environment variables pass to webpack via --env.thing.
 * @param {object} argv webpack options from the command line arguments, no custom options here.
 * @param {object} options custom webpack options provided via a config override.
 */
const defaultWebpackConfig = (env = {}, argv = {}, options = {}) => {
  const processPath = process.cwd();

  const themeConfig = determineThemeConfig(env, options);
  const aggregateThemeFile = getAggregateThemeFile({ env, themeConfig, processPath });

  const production = argv.p || argv.mode === 'production';
  const fileNameStategy = production ? '[name]-[chunkhash]' : '[name]';
  const chunkFilename = argv['output-chunk-filename'] || fileNameStategy;
  const filename = argv['output-filename'] || fileNameStategy;
  const outputPath = argv['output-path'] || path.join(processPath, 'build');
  const publicPath = argv['output-public-path'] || '';
  const sourceMap = env.generateLoaderSourceMaps || !production;

  const devConfig = {
    mode: 'development',
    entry: {
      ...aggregateThemeFile && { theme: aggregateThemeFile },
    },
    module: {
      rules: [{
        oneOf: [{
          test: /\.(jsx|js)$/,
          exclude: (modulePath) => (
            /node_modules/.test(modulePath)
            && !/@cerner\/terra-polyfill\/lib\/index/.test(modulePath)
          ), // exclude everything in node modules except our core-js entry point to allow consumers the ability to customize what polyfills get pulled in.
          use: {
            loader: 'babel-loader',
            options: {
              rootMode: 'upward', // needed to correctly resolve babel's config root in mono-repos
            },
          },
        },
        {
          test: /\.(scss|css)$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            {
              loader: 'css-loader',
              options: {
                modules: {
                  mode: 'global',
                  localIdentName: '[name]__[local]___[hash:base64:5]',
                },
                sourceMap,
                importLoaders: 2,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap,
                postcssOptions: {
                  plugins: [
                    ThemePlugin(themeConfig),
                    rtl(),
                    Autoprefixer(),
                  ],
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap,
              },
            },
          ],
        },
        {
          test: /\.md$/,
          use: 'raw-loader',
        },
        {
          test: /\.(png|svg|jpg|gif|otf|eot|ttf|svg|woff|woff2)$/,
          use: 'file-loader',
        }],
      }],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: `${filename}.css`,
        chunkFilename: `${chunkFilename}.css`,
        ignoreOrder: true,
      }),
      new PostCSSAssetsPlugin({
        test: /\.css$/,
        log: false,
        plugins: [
          PostCSSCustomProperties({
            preserve: !env.disableCSSCustomProperties,
            // If we have a theme file, use the webpack promise to webpack it.  This promise will resolve to
            // an object with themeable variables and values. This will then be used to update the end state CSS
            // so that they are populated with values if variables aren't supported (e.g. IE10). This dance is
            // necessary when code splitting to ensure the variables and values are applied across all code split
            // css files
            ...aggregateThemeFile && { importFrom: [getThemeWebpackPromise(processPath, aggregateThemeFile, themeConfig)] },
          }),
        ],
      }),
      new DuplicatePackageCheckerPlugin({
        showHelp: false,
        alwaysEmitErrorsFor: [
          'react',
          'react-dom',
          'react-intl',
          'react-on-rails',
          'terra-application',
          'terra-breakpoints',
          'terra-disclosure-manager',
          'terra-navigation-prompt',
          'terra-theme-context',
        ],
      }),
      new webpack.DefinePlugin({
        CERNER_BUILD_TIMESTAMP: JSON.stringify(new Date(Date.now()).toISOString()),
        TERRA_AGGREGATED_LOCALES: JSON.stringify(getLocales(env, processPath)),
        TERRA_THEME_CONFIG: JSON.stringify(themeConfig),
      }),
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
      modules: getResolveModules(env),
      mainFields: ['browser', 'main'],
    },
    output: {
      filename: `${filename}.js`,
      chunkFilename: `${chunkFilename}.js`,
      path: outputPath,
      publicPath,
    },
    devServer: {
      ...getWebpackDevServerStaticOptions(env),
      host: '0.0.0.0',
      client: {
        overlay: false,
      },
      devMiddleware: {
        publicPath,
        stats: {
          colors: true,
          children: false,
        },
      },
    },
    devtool: 'eval-source-map',
    resolveLoader: {
      modules: [path.resolve(path.join(processPath, 'node_modules'))],
    },
    stats: { children: false },
  };

  if (!production) {
    return devConfig;
  }

  return mergeWithCustomize({
    devtool: 'replace',
  })(devConfig, {
    mode: 'production',
    devtool: false,
    plugins: [
      new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!stats.json'] }),
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap,
          terserOptions: {
            compress: {
              typeofs: false,
            },
          },
        }),
      ],
    },
  });
};

module.exports = defaultWebpackConfig;
