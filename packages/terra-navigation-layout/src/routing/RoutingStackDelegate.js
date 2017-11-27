import PropTypes from 'prop-types';

const supportedAttributes = [
  'location', 'stackLocation', 'parentPaths', 'goBack', 'goToRoot',
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
 * Clones an existing RoutingStackDelegate Object instance and overrides any given attributes.
 */
const clone = (delegate, data) => {
  const ancestorDelegate = delegate || {};

  const mergedData = {};
  supportedAttributes.forEach((attribute) => {
    mergedData[attribute] = data[attribute] || ancestorDelegate[attribute];
  });

  return create(mergedData);
};

/**
 * Performs a shallow equality on the supportedAttributes to determine the equality of two
 * RoutingStackDelegate Object instances.
 */
const isEqual = (delegateA, delegateB) => {
  if (!delegateA || !delegateB) {
    return false;
  }

  if (delegateA === delegateB) {
    return true;
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
    stackLocation: PropTypes.shape({
      pathname: PropTypes.string,
    }),
    parentPaths: PropTypes.arrayOf(PropTypes.string),
    goBack: PropTypes.func,
    goToRoot: PropTypes.func,
  }),
  create,
  clone,
  isEqual,
};

export default RoutingStackDelegate;
