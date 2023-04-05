"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var supportedAttributes = ['location', 'parentPaths', 'showParent', 'showRoot', 'show'];

/**
 * Creates a new RoutingStackDelegate Object instance based on the supportedAttributes.
 */
var create = function create(data) {
  var delegate = {};
  supportedAttributes.forEach(function (attribute) {
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
var isEqual = function isEqual(delegateA, delegateB) {
  if (delegateA === delegateB) {
    return true;
  }
  if (!delegateA || !delegateB) {
    return false;
  }
  return !supportedAttributes.some(function (attribute) {
    return delegateA[attribute] !== delegateB[attribute];
  });
};
var RoutingStackDelegate = {
  propType: _propTypes.default.shape({
    location: _propTypes.default.shape({
      pathname: _propTypes.default.string
    }),
    parentPaths: _propTypes.default.arrayOf(_propTypes.default.string),
    showParent: _propTypes.default.func,
    showRoot: _propTypes.default.func,
    show: _propTypes.default.func
  }),
  create: create,
  isEqual: isEqual
};
var _default = RoutingStackDelegate;
exports.default = _default;