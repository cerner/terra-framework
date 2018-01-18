/* eslint-disable import/no-extraneous-dependencies */
import siteConfig from 'terra-site/lib/config/site.config';
import Home from './Home';

const homeLink = [{
  path: '/site/home',
  text: 'Home',
  component: Home,
  isStatic: true,
}];

siteConfig.appLogoSrc = 'https://github.com/cerner/terra-core/raw/master/terra.png';
siteConfig.navigation.index = homeLink[0].path;
siteConfig.navigation.links = homeLink.concat(siteConfig.navigation.links);

export default siteConfig;
