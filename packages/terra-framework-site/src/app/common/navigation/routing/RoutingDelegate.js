import PropTypes from 'prop-types';

const BREAKPOINTS = [
  'tiny',
  'small',
  'medium',
  'large',
  'huge',
];

const RoutingDelegate = {
  propType: PropTypes.shape({
    size: PropTypes.oneOf(BREAKPOINTS).isRequired,
    routeConfig: PropTypes.object,
    navigationConfig: PropTypes.object,
    location: PropTypes.object,
    browserLocation: PropTypes.object,
  }),
  clone: (source, overrides) => (
    Object.assign({}, source, overrides)
  ),
};

export default RoutingDelegate;
