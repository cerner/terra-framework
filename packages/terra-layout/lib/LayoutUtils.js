"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomProps = exports.getBreakpointSize = void 0;
var breakpoints = {
  tiny: 544,
  small: 768,
  medium: 992,
  large: 1216,
  huge: 1440
};
var small = breakpoints.small,
  medium = breakpoints.medium,
  large = breakpoints.large,
  huge = breakpoints.huge;
var getBreakpointSize = function getBreakpointSize(queryWidth) {
  var width = queryWidth || window.innerWidth;
  if (width >= huge) {
    return 'huge';
  }
  if (width >= large) {
    return 'large';
  }
  if (width >= medium) {
    return 'medium';
  }
  if (width >= small) {
    return 'small';
  }
  return 'tiny';
};
exports.getBreakpointSize = getBreakpointSize;
var getCustomProps = function getCustomProps(props, validPropTypes) {
  return Object.keys(props).filter(function (key) {
    return !Object.keys(validPropTypes).includes(key);
  }).reduce(function (customProps, key) {
    customProps[key] = props[key]; // eslint-disable-line no-param-reassign
    return customProps;
  }, {});
};
exports.getCustomProps = getCustomProps;