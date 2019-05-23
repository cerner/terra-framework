const breakpoints = {
  tiny: 544,
  small: 768,
  medium: 992,
  large: 1216,
  huge: 1440,
};

const {
  small, medium, large, huge,
} = breakpoints;

const getBreakpointSize = (queryWidth) => {
  const width = queryWidth || window.innerWidth;
  if (width >= huge) {
    return 'huge';
  } if (width >= large) {
    return 'large';
  } if (width >= medium) {
    return 'medium';
  } if (width >= small) {
    return 'small';
  }
  return 'tiny';
};

const getCustomProps = (props, validPropTypes) => (
  Object.keys(props)
    .filter(key => !Object.keys(validPropTypes).includes(key))
    .reduce((customProps, key) => {
      customProps[key] = props[key]; // eslint-disable-line no-param-reassign
      return customProps;
    }, {})
);

export {
  getBreakpointSize,
  getCustomProps,
};
