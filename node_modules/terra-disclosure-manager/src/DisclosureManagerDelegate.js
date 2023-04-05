import PropTypes from 'prop-types';

const supportedAttributes = [
  'disclose',
  'dismiss',
  'closeDisclosure',
  'goBack',
  'maximize',
  'minimize',
  'requestFocus',
  'releaseFocus',
  'registerDismissCheck',
];

class DisclosureManagerDelegateInstance {
  constructor(data) {
    supportedAttributes.forEach((attribute) => {
      if (data[attribute]) {
        this[attribute] = data[attribute];
      }
    });
  }
}

const create = data => (
  Object.freeze(new DisclosureManagerDelegateInstance(data))
);

const clone = (delegate, data) => {
  const ancestorDelegate = delegate || {};

  const mergedData = {};
  supportedAttributes.forEach((attribute) => {
    mergedData[attribute] = data[attribute] || ancestorDelegate[attribute];
  });

  return create(mergedData);
};

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

const DisclosureManagerDelegate = {
  propType: PropTypes.objectOf((propValue, key, componentName, location, propFullName) => {
    if (supportedAttributes.indexOf(key) < 0) {
      return new Error(`Invalid key '${key}' supplied to ${componentName}'s '${propFullName}' prop. Validation failed.`);
    }

    return true;
  }),
  create,
  clone,
  isEqual,
};

export default DisclosureManagerDelegate;
