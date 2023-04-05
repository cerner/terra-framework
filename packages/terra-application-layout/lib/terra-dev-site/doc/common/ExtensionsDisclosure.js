"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ApplicationLayoutDocCommonModule = _interopRequireDefault(require("./ApplicationLayoutDocCommon.module.scss"));
var cx = _bind.default.bind(_ApplicationLayoutDocCommonModule.default);
var propTypes = {
  name: _propTypes.default.string,
  disclosureManager: _terraDisclosureManager.disclosureManagerShape
};
var ExtensionsDisclosure = function ExtensionsDisclosure(_ref) {
  var name = _ref.name,
    disclosureManager = _ref.disclosureManager;
  return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
    fill: true,
    header: /*#__PURE__*/_react.default.createElement(_terraActionHeader.default, {
      title: name.charAt(0).toUpperCase() + name.slice(1),
      onClose: disclosureManager.closeDisclosure,
      onBack: disclosureManager.goBack,
      onMaximize: disclosureManager.maximize,
      onMinimize: disclosureManager.minimize
    })
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, "Content for extension:", name));
};
ExtensionsDisclosure.propTypes = propTypes;
var _default = (0, _terraDisclosureManager.withDisclosureManager)(ExtensionsDisclosure);
exports.default = _default;