"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraFormRadio = _interopRequireDefault(require("terra-form-radio"));
var _RadioField = _interopRequireDefault(require("terra-form-radio/lib/RadioField"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var propTypes = {
  // The text of the legend tag.
  fieldLegend: _propTypes.default.string,
  // The name of every Radio.
  name: _propTypes.default.string,
  // A list of strings to serve as the key, id, labelText, and value of every Radio.
  options: _propTypes.default.array,
  // The change event callback for every radio.
  onChange: _propTypes.default.func
};

/**
 * Use this generator to pump out tedious RadioField + Radios.
 * @returns A <RadioField>.
 */
function RadioFieldGenerator(props) {
  return /*#__PURE__*/_react.default.createElement(_RadioField.default, {
    legend: props.fieldLegend
  }, props.options.map(function (opt, index) {
    return /*#__PURE__*/_react.default.createElement(_terraFormRadio.default
    // https://reactjs.org/docs/lists-and-keys.html#keys
    , {
      key: opt,
      name: props.name,
      id: opt,
      defaultChecked: index === 0,
      labelText: opt,
      value: opt,
      onChange: props.onChange
    });
  }));
}
RadioFieldGenerator.propTypes = propTypes;
var _default = RadioFieldGenerator;
exports.default = _default;