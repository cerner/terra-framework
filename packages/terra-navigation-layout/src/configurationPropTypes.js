import PropTypes from 'prop-types';

const supportedComponentBreakpoints = ['tiny', 'small', 'medium', 'large', 'huge'];

/**
 * PropType definition for component definitions in the NavigationLayout's configuration object.
 * It is an Object that is keyed by a String breakpoint value (or `default`) and has Object values that
 * represent Components.
 *
 * Example:
 *   {
 *     default: {
 *       componentClass: DefaultComponent,
 *       props: {
 *         prop1: 'Value',
 *         prop2: 'Other value',
 *       },
 *     },
 *     small: {
 *       componentClass: SmallComponent,
 *       // props are optional
 *     },
 *     huge: {
 *       // The same component can be rendered with different prop values at different breakpoints
 *       componentClass: DefaultComponent,
 *       props: {
 *         prop1: 'Huge Value for prop1',
 *       },
 *     },
 *   }
 */
const componentConfigPropType = PropTypes.objectOf((propValue, key, componentName, location, propFullName) => {
  const validKey = key === 'default' || supportedComponentBreakpoints.indexOf(key) >= 0;

  if (!validKey) {
    return new Error(`Invalid prop '${propFullName}' supplied to '${componentName}'. Validation failed.`);
  }

  const value = propValue[key];

  let validValue = true;
  if (value !== null) {
    if (typeof (value) !== 'object') {
      validValue = false;
    } else if (!value.componentClass || (typeof (value.props) !== 'object' && value.props !== null && value.props !== undefined)) {
      validValue = false;
    }
  }

  if (!validValue) {
    return new Error(`Invalid prop '${propFullName}' supplied to '${componentName}'. Validation failed.`);
  }

  return true;
});

/**
 * PropType definition for routes definitions in the NavigationLayout's configuration object.
 * It is an Object that contains a path and a component to render for that path.
 * The path must start with a forward slash.
 *
 * Example:
 *   {
 *     path: '/a',
 *     component: {...}, // [componentConfigPropType]
 *   }
 */
const routePropType = PropTypes.shape({
  path: (props, propName, componentName) => {
    if (!/\/.*/.test(props[propName])) {
      return new Error(
        `Invalid prop \`${propName}\` supplied to` +
        ` \`${componentName}\`. Validation failed. ${propName} must start with a forward slash (/).`,
      );
    }
    return true;
  },
  component: componentConfigPropType.isRequired,
});

const routeConfigPropType = PropTypes.objectOf(routePropType);

/**
 * PropType definition for the configuration Object used by the NavigationLayout.
 * It is an Object containing routing configurations for the header, menu, and content layout areas.
 *
 * Example:
 *   {
 *     header: {...}, [routeConfigPropType]
 *     menu: {...},    [routeConfigPropType]
 *     content: {...}, [routeConfigPropType]
 *   }
 */
const navigationLayoutConfigPropType = PropTypes.shape({
  header: routeConfigPropType,
  menu: routeConfigPropType,
  content: routeConfigPropType,
});


/**
 * PropType definition for the processed configuration array created by the NavigationLayout and utilized
 * by the NavigationLayoutContent and RoutingStack. It is an Array containing Objects with data neccessary for the
 * creation of routes.
 *
 * Example:
 *   [{
 *     path: '/a/b/c',
 *     componentClass: CComponentClass,
 *     componentProps: {
 *       propName: 'prop value',
 *     },
 *   }, {
 *     path: '/a/b',
 *     componentClass: BComponentClass,
 *   }, {
 *     path: '/a',
 *     componentClass: AComponentClass,
 *   }]
 */
const processedRoutesPropType = PropTypes.arrayOf(PropTypes.shape({
  path: PropTypes.string,
  componentClass: PropTypes.func,
  componentProps: PropTypes.object,
}));

export { navigationLayoutConfigPropType, routeConfigPropType, routePropType, componentConfigPropType, processedRoutesPropType, supportedComponentBreakpoints };
