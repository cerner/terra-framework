"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _excluded = ["disclosureManager", "children"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var propTypes = {
  /**
   * DisclosureManagerDelegate instance automatically provided by a DisclosureManagerProvider.
   */
  disclosureManager: _terraDisclosureManager.disclosureManagerShape,
  /**
   * The utility menu to be wrapped.
   */
  children: _propTypes.default.node.isRequired
};

/**
 * The UtilityMenuWrapper handles the plumbing between its disclosureManager and the
 * utility menu dismissal requests.
 */
var UtilityMenuWrapper = function UtilityMenuWrapper(_ref) {
  var disclosureManager = _ref.disclosureManager,
    children = _ref.children,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.cloneElement(children, _objectSpread(_objectSpread({}, customProps), {}, {
    onRequestClose: disclosureManager.dismiss,
    isHeightBounded: true
  }));
};
UtilityMenuWrapper.propTypes = propTypes;
var _default = (0, _terraDisclosureManager.withDisclosureManager)(UtilityMenuWrapper);
exports.default = _default;