"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraSlidePanel = _interopRequireWildcard(require("terra-slide-panel"));
var _SlidePanelMainContent = _interopRequireDefault(require("./common/SlidePanelMainContent"));
var _SlidePanelPanelContent = _interopRequireDefault(require("./common/SlidePanelPanelContent"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var SlidePanelFullscreen = function SlidePanelFullscreen() {
  return /*#__PURE__*/_react.default.createElement(_terraSlidePanel.default, {
    mainContent: /*#__PURE__*/_react.default.createElement(_SlidePanelMainContent.default, null),
    panelContent: /*#__PURE__*/_react.default.createElement(_SlidePanelPanelContent.default, null),
    panelBehavior: "overlay",
    panelPosition: _terraSlidePanel.SlidePanelPositions.END,
    panelSize: "small",
    isOpen: true,
    isFullscreen: true
  });
};
var _default = SlidePanelFullscreen;
exports.default = _default;