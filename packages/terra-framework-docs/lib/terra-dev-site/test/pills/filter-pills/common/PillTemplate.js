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
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraPills = _interopRequireWildcard(require("@cerner/terra-pills"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  /**
  * Aria label for pills container
  */
  ariaLabel: _propTypes.default.string,
  /**
  * Additional styling
  */
  className: _propTypes.default.string,
  /**
   * Pills to be rendered
   */
  data: _propTypes.default.array,
  /**
   * Whether or not the rollup is shown
   */
  isCollapsible: _propTypes.default.bool
};
var defaultProps = {
  isCollapsible: false
};
var PillTemplate = function PillTemplate(_ref) {
  var data = _ref.data,
    ariaLabel = _ref.ariaLabel,
    className = _ref.className,
    isCollapsible = _ref.isCollapsible;
  var _useState = (0, _react.useState)(data),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    pills = _useState2[0],
    setPills = _useState2[1];
  var _useState3 = (0, _react.useState)(0),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    counter = _useState4[0],
    setCounter = _useState4[1];
  var handleOnRemove = function handleOnRemove(id, metaData) {
    var pillsArray = pills;
    pillsArray.splice(metaData.index, 1);
    setPills((0, _toConsumableArray2.default)(pillsArray));
  };
  var handleAddPills = function handleAddPills() {
    var oldPills = pills;
    var pill = {
      label: "test-pill- ".concat(counter),
      id: "test-filter-pills-test-".concat(counter)
    };
    setCounter(function (newCounter) {
      return newCounter + 1;
    });
    oldPills.push(pill);
    setPills(oldPills);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_terraPills.default, {
    ariaLabel: ariaLabel,
    onRemove: handleOnRemove,
    className: className,
    isCollapsible: isCollapsible
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
  })), pills.length <= 0 && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      return setPills(data);
    }
  }, "Show Pills"), isCollapsible && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: handleAddPills
  }, " Add more pills"));
};
PillTemplate.propTypes = propTypes;
PillTemplate.defaultProps = defaultProps;
var _default = PillTemplate;
exports.default = _default;