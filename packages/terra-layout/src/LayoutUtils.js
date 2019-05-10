import breakpoints from 'terra-breakpoints';

const {
  medium, large, huge, enormous,
} = breakpoints;

const getBreakpointSize = (queryWidth) => {
  const width = queryWidth || window.innerWidth;
  if (width >= enormous) {
    return 'enormous';
  } if (width >= huge) {
    return 'huge';
  } if (width >= large) {
    return 'large';
  } if (width >= medium) {
    return 'medium';
  }
  return 'small';
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
