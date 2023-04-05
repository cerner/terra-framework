const postcss = require('postcss');
const fancyLog = require('fancy-log');
const humanSize = require('human-size');
const webpackSources = require('webpack-sources');

const pluginName = 'PostCSSAssetsPlugin';

module.exports = class PostCSSAssetsPlugin {
  constructor({ test = /\.css$/, plugins = [], log = true } = {}) {
    this.test = test;
    this.plugins = plugins;

    this.log = log ? fancyLog : () => {};
  }

  run(assets) {
    if (Object.keys(assets).length === 0) {
      return Promise.resolve();
    }

    this.log('PostCSSAssetsPlugin: Starting...');

    return Promise.all(Object.keys(assets).reduce((result, name) => {
      if (!this.test.test(name)) {
        return result;
      }

      const asset = assets[name];
      const originalCss = asset.source();

      const mapName = originalCss.match(/\/\*# sourceMappingURL=(.{1,200}).*\*\/$|$/)[1];

      const inlineMap = mapName ? mapName.search(/^data:/) === 0 : false;
      if (inlineMap) {
        this.log('PostCSSAssetsPlugin: Found inline source map');
      }

      const mapAsset = mapName && !inlineMap ? assets[mapName] : null;
      const externalMap = mapAsset ? mapAsset.source() : undefined;
      if (externalMap) {
        this.log('PostCSSAssetsPlugin: Found external source map');
      }

      const processOptions = {
        from: name,
        to: name,
        map: (inlineMap || externalMap) ? {
          inline: inlineMap,
          sourcesContent: true,
          prev: externalMap,
        } : false,
      };

      this.log(`PostCSSAssetsPlugin: Processing ${name}...`);

      result.push(
        postcss(this.plugins)
          .process(originalCss, processOptions)
          .then((postcssResult) => {
            const processedCss = postcssResult.css;
            const warnings = postcssResult.warnings();

            if (warnings && warnings.length) {
              this.log('PostCSSAssetsPlugin:', warnings.join('\n'));
            }

            assets[name] = new webpackSources.RawSource(processedCss);

            if (mapAsset) {
              assets[mapName] = new webpackSources.RawSource(JSON.stringify(postcssResult.map));
            }

            this.log(
              'PostCSSAssetsPlugin:',
              `Processed ${name}. Size before: ${humanSize(originalCss.length, 3)},`,
              `size after: ${humanSize(processedCss.length, 2)}`,
            );
          })
          .catch((error) => {
            this.log('PostCSSAssetsPlugin:', `Error processing file: ${name}`, error);

            throw error;
          }),
      );

      return result;
    }, []))
      .then(() => {
        this.log('PostCSSAssetsPlugin: Done.');
      });
  }

  apply(compiler) {
    const stage = compiler.createCompilation().constructor.PROCESS_ASSETS_STAGE_OPTIMIZE;

    if (stage) {
      compiler.hooks.compilation.tap(pluginName, (compilation) => {
        const stageSettings = { name: pluginName, stage };
        compilation.hooks.processAssets.tapPromise(stageSettings, (assets) => {
          return this.run(assets || compilation.assets);
        });
      });
    } else {
      compiler.hooks.emit.tapPromise(pluginName, ({assets}) => this.run(assets));
    }
  }
};
