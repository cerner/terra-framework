import siteConfig from 'x-site/src/app/config/site.config';
import Home from './Home';

const homeLink = [{
  path: '/site/home',
  text: 'Home',
  component: Home,
  isStatic: true,
}];

siteConfig.navigation.links = homeLink.concat(siteConfig.navigation.links);

export default siteConfig;
