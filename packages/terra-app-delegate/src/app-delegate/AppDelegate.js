import PropTypes from 'prop-types';
import {
  registerComponentForDisclosure,
  getComponentForDisclosure,
} from '../disclosure-component-registry/DisclosureComponentRegistry';

const supportedAttributes = [
  'disclose', 'dismiss', 'closeDisclosure', 'goBack', 'maximize', 'minimize', 'requestFocus', 'releaseFocus', 'registerDismissCheck',
];

const appDelegateFactory = (data) => {
  const newInstance = {};
  supportedAttributes.forEach((attribute) => {
    if (data[attribute]) {
      newInstance[attribute] = data[attribute];
    }
  });

  return Object.freeze(newInstance);
};

const create = data => (
  appDelegateFactory(data)
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

const AppDelegate = {
  propType: PropTypes.objectOf((propValue, key, componentName, location, propFullName) => {
    if (typeof propValue !== 'object') {
      return new Error(`Invalid '${propFullName}' prop supplied to ${componentName}. An Object was expected. Validation failed.`);
    }

    const keys = Object.keys(propValue);

    for (let i = 0, length = keys.length; i < length; i += 1) {
      if (supportedAttributes.indexOf(keys[i]) < 0) {
        return new Error(`Invalid key '${keys[i]}' supplied to ${componentName}'s '${propFullName}' prop. Validation failed.`);
      }
    }

    return true;
  }),
  create,
  clone,
  isEqual,
  registerComponentForDisclosure,
  getComponentForDisclosure,
};

export default AppDelegate;
