import PropTypes from 'prop-types';

const supportedAttributes = [
  'location', 'parentPaths', 'showParent', 'showRoot', 'show',
];

/**
 * Creates a new RoutingStackDelegate Object instance based on the supportedAttributes.
 */
const create = (data) => {
  const delegate = {};
  supportedAttributes.forEach((attribute) => {
    if (data && data[attribute]) {
      delegate[attribute] = data[attribute];
    }
  });

  return Object.freeze(delegate);
};

/**
 * Performs a shallow equality on the supportedAttributes to determine the equality of two
 * RoutingStackDelegate Object instances.
 */
const isEqual = (delegateA, delegateB) => {
  if (delegateA === delegateB) {
    return true;
  }

  if (!delegateA || !delegateB) {
    return false;
  }

  return !supportedAttributes.some(attribute => (
    delegateA[attribute] !== delegateB[attribute]
  ));
};

const RoutingStackDelegate = {
  propType: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    parentPaths: PropTypes.arrayOf(PropTypes.string),
    showParent: PropTypes.func,
    showRoot: PropTypes.func,
    show: PropTypes.func,
  }),
  create,
  isEqual,
};

export default RoutingStackDelegate;
