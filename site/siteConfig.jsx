import siteConfig from 'terra-site/src/config/site.config';
import Home from './Home';

const homeLink = [{
  path: '/site/home',
  text: 'Home',
  component: Home,
  isStatic: true,
}];

siteConfig.navigation.index = homeLink[0].path;
siteConfig.navigation.links = homeLink.concat(siteConfig.navigation.links);

export default siteConfig;
