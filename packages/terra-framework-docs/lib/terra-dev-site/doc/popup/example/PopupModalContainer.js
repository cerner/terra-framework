"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraDisclosureManager = require("terra-disclosure-manager");
var _PopupModalContent = _interopRequireDefault(require("./PopupModalContent"));
function ModalContainer(props) {
  var disclose = function disclose() {
    props.disclosureManager.disclose({
      preferredType: 'modal',
      size: '',
      content: {
        key: 'PopupModalContent',
        component: /*#__PURE__*/_react.default.createElement(_PopupModalContent.default, null)
      }
    });
  };
  return /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    className: "disclose",
    text: "Disclose Modal",
    onClick: disclose
  });
}
ModalContainer.propTypes = {
  disclosureManager: _terraDisclosureManager.disclosureManagerShape
};
var _default = (0, _terraDisclosureManager.withDisclosureManager)(ModalContainer);
exports.default = _default;