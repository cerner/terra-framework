import homeReadMe from '../README.md';
import componentConfig from './generatedComponentConfig';

const siteConfig = {
  /* The component configuration path. */
  componentConfig,

  /* The markdown content to display on the home page. */
  readMeContent: homeReadMe,

  appConfig: {
    /* The title for the site header. */
    title: 'Terra Framework',

    extensions: {
      gitHubUrl: 'https://github.com/cerner/terra-framework',
    },
  },
};

export default siteConfig;
