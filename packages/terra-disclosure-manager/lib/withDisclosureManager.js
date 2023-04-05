"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireDefault(require("react"));
var _DisclosureManagerContext = _interopRequireDefault(require("./DisclosureManagerContext"));
var getDisplayName = function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
};
var withDisclosureManager = function withDisclosureManager(WrappedComponent) {
  var WithDisclosureManagerComp = function WithDisclosureManagerComp(props) {
    return /*#__PURE__*/_react.default.createElement(_DisclosureManagerContext.default.Consumer, null, function (disclosureManager) {
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, (0, _extends2.default)({}, props, {
        disclosureManager: disclosureManager
      }));
    });
  };
  WithDisclosureManagerComp.displayName = "withDisclosureManager(".concat(getDisplayName(WrappedComponent), ")");
  WithDisclosureManagerComp.WrappedComponent = WrappedComponent;
  return WithDisclosureManagerComp;
};
var _default = withDisclosureManager;
exports.default = _default;