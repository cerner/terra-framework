"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraDocs = require("@cerner/terra-docs");
var _terraPills = _interopRequireWildcard(require("@cerner/terra-pills"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _FilterPillsCommonModule = _interopRequireDefault(require("./FilterPillsCommon.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_FilterPillsCommonModule.default);
var BasicLabelExample = function BasicLabelExample() {
  var theme = _react.default.useContext(_terraThemeContext.default);
  var pillsData = [{
    label: 'Asthma',
    id: 'terra-filter-pills-asthma'
  }, {
    label: 'Bronchitis',
    id: 'terra-filter-pills-bronchitis'
  }, {
    label: 'Fibro',
    id: 'terra-filter-pills-fibro'
  }];
  var _useState = (0, _react.useState)(pillsData),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    pills = _useState2[0],
    setPills = _useState2[1];
  var isResetButtonDisabled = pills.length === pillsData.length;
  var handleOnRemove = function handleOnRemove(id, metaData) {
    var pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills((0, _toConsumableArray2.default)(pillsArray));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_terraPills.default, {
    ariaLabel: "Demonstration example of Filter Pills with basic labels",
    onRemove: handleOnRemove
  }, pills.map(function (pill, index) {
    return /*#__PURE__*/_react.default.createElement(_terraPills.Pill, {
      label: pill.label,
      labelCategory: pill.labelCategory,
      id: pill.id,
      key: pill.id,
      metaData: {
        index: index
      }
    });
  })), /*#__PURE__*/_react.default.createElement(_terraDocs.Button, {
    "aria-disabled": isResetButtonDisabled,
    className: cx(['terra-docs-example-reset-button', {
      'is-disabled': isResetButtonDisabled
    }, theme.className]),
    disabled: isResetButtonDisabled,
    onClick: function onClick() {
      return setPills(pillsData);
    }
  }, "Reset Example"));
};
BasicLabelExample.contextType = _terraThemeContext.default;
var _default = BasicLabelExample;
exports.default = _default;