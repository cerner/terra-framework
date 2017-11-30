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
  const keyIsValid = key === 'default' || supportedComponentBreakpoints.indexOf(key) >= 0;

  if (!keyIsValid) {
    return new Error(`Invalid prop '${propFullName}' supplied to '${componentName}'. Validation failed.`);
  }

  const value = propValue[key];

  let valueIsValid = true;
  if (value !== null) {
    if (typeof (value) !== 'object') {
      valueIsValid = false;
    } else if (!value.componentClass || (typeof (value.props) !== 'object' && value.props !== null && value.props !== undefined)) {
      valueIsValid = false;
    }
  }

  if (!valueIsValid) {
    return new Error(`Invalid prop '${propFullName}' supplied to '${componentName}'. Validation failed.`);
  }

  return true;
});

/**
 * PropType definition for routes definitions in the NavigationLayout's configuration object.
 * It is an Object that contains a path, a component to render for that path, and the route attributes (strict/exact).
 * The path must start with a forward slash.
 *
 * Example:
 *   {
 *     path: '/a',
 *     strict: false,
 *     exact: true,
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
  strict: PropTypes.bool,
  exact: PropTypes.bool,
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

export { navigationLayoutConfigPropType, routeConfigPropType, routePropType, componentConfigPropType, supportedComponentBreakpoints };
