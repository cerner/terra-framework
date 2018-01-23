const fs = require('fs');

const homeReadMe = fs.readFileSync('./README.md', 'utf-8');

module.exports = {
  /** The comopnent configuration. When provided, the generate-component-configureApp
    * script will not run.
    */
  componentConfig: './site/generatedComponentConfig.js',

  /* If enabled, the xfc Provider will be used. */
  // hasIframes: false,
  placeholderSrc: 'https://github.com/cerner/terra-core/raw/master/terra.png',

  readMeContent: homeReadMe,

  appConfig: {
    /* The loge the site header should display. */
    logoSrc: 'https://github.com/cerner/terra-core/raw/master/terra.png', // maps to appLogoSrc

    /* The title the site header should display. */
    title: 'Terra', // maps to appTitle

    /* The subtitle the site header should display. */
    subtitle: 'Framework', // maps to appSubtitle
  },
};
