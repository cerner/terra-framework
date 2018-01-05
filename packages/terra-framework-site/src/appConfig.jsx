import routeConfiguration from '../../x-site/src/app/configureApp';

import componentConfig from './generatedComponentConfig';
import siteConfig from './siteConfig';

const { routeConfig, navigation } = routeConfiguration(siteConfig, componentConfig);


const routes = Object.freeze(routeConfig);

export { routes, navigation };
