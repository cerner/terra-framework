"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ExampleWrapperModule = _interopRequireDefault(require("./ExampleWrapper.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react/prop-types */

var cx = _bind.default.bind(_ExampleWrapperModule.default);
var ExampleApplication = function ExampleApplication(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)(null),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    lastActionKey = _useState2[0],
    setLastActionKey = _useState2[1];
  function handleOnAction(key) {
    setLastActionKey("Current Action: ".concat(key));
  }
  return /*#__PURE__*/_react.default.createElement("div", null, lastActionKey, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('wrapper')
  }, _react.default.Children.map(children, function (child) {
    return /*#__PURE__*/_react.default.cloneElement(child, {
      onAction: handleOnAction
    });
  })));
};
var _default = ExampleApplication;
exports.default = _default;