"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var supportedAttributes = ['disclose', 'dismiss', 'closeDisclosure', 'goBack', 'maximize', 'minimize', 'requestFocus', 'releaseFocus', 'registerDismissCheck'];
var DisclosureManagerDelegateInstance = /*#__PURE__*/(0, _createClass2.default)(function DisclosureManagerDelegateInstance(data) {
  var _this = this;
  (0, _classCallCheck2.default)(this, DisclosureManagerDelegateInstance);
  supportedAttributes.forEach(function (attribute) {
    if (data[attribute]) {
      _this[attribute] = data[attribute];
    }
  });
});
var create = function create(data) {
  return Object.freeze(new DisclosureManagerDelegateInstance(data));
};
var clone = function clone(delegate, data) {
  var ancestorDelegate = delegate || {};
  var mergedData = {};
  supportedAttributes.forEach(function (attribute) {
    mergedData[attribute] = data[attribute] || ancestorDelegate[attribute];
  });
  return create(mergedData);
};
var isEqual = function isEqual(delegateA, delegateB) {
  if (!delegateA || !delegateB) {
    return false;
  }
  if (delegateA === delegateB) {
    return true;
  }
  return !supportedAttributes.some(function (attribute) {
    return delegateA[attribute] !== delegateB[attribute];
  });
};
var DisclosureManagerDelegate = {
  propType: _propTypes.default.objectOf(function (propValue, key, componentName, location, propFullName) {
    if (supportedAttributes.indexOf(key) < 0) {
      return new Error("Invalid key '".concat(key, "' supplied to ").concat(componentName, "'s '").concat(propFullName, "' prop. Validation failed."));
    }
    return true;
  }),
  create: create,
  clone: clone,
  isEqual: isEqual
};
var _default = DisclosureManagerDelegate;
exports.default = _default;