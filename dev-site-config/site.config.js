// const componentConfig = require('./generatedComponentConfig');
// const navConfig = require('./navigation.config');
// const path = require('path');

const siteConfig = {
  // navConfig,

  // /* The component configuration path. */
  // // componentConfig,
  // // pagesConfig: componentConfig,
  // generatePages: {
  //   searchPatterns: [
  //     // path.resolve(path.join(process.cwd(), 'packages', '*', 'examples', '**', '*.{example,site-page}.{jsx,js}')),
  //   ],
  //   // types: ['component', 'test'],
  //   roots: [process.cwd()],
  //   entryPointDir: 'terra-dev-site',
  // },

  /* The markdown content to display on the home page. */
  // readMeContent: '../README.md',

  appConfig: {
    /* The title for the site header. */
    // title: 'Terra Framework',

    extensions: {
      gitHubUrl: 'https://github.com/cerner/terra-framework',
    },
  },
};

module.exports = siteConfig;
