"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _DateTimeUtils = _interopRequireDefault(require("terra-date-time-picker/lib/DateTimeUtils"));
var _DateTimePickerExampleTemplate = _interopRequireDefault(require("../common/DateTimePickerExampleTemplate"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var resetOnTouchStart;
var DateTimePickerDisabled12HourMobile = function DateTimePickerDisabled12HourMobile() {
  (0, _react.useEffect)(function () {
    if (!window.ontouchstart) {
      resetOnTouchStart = true;
      window.ontouchstart = 'true';
    }
    return function () {
      if (resetOnTouchStart) {
        delete window.ontouchstart;
      }
    };
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h3", {
    id: "titleWithDateTimeValue"
  }, "Disabled Date-Time-Picker"), /*#__PURE__*/_react.default.createElement(_DateTimePickerExampleTemplate.default, {
    id: "disabledDatetimeValueProvided",
    disabled: true,
    value: "2019-04-10T15:23:00-05:00",
    timeVariant: _DateTimeUtils.default.FORMAT_12_HOUR
  }));
};
var _default = DateTimePickerDisabled12HourMobile;
exports.default = _default;