import breakpoints from 'terra-responsive-element/lib/breakpoints.scss';

const { small, medium, large, huge } = breakpoints;

const getBreakpointSize = (queryWidth) => {
  const width = queryWidth || window.innerWidth;
  if (width >= huge) {
    return 'huge';
  } else if (width >= large) {
    return 'large';
  } else if (width >= medium) {
    return 'medium';
  } else if (width >= small) {
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
