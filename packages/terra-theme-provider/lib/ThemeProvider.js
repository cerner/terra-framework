"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  /**
   * The component(s) that will be wrapped by `<ThemeProvider />`
   */
  children: _propTypes.default.node.isRequired,
  /**
   * Name of class for specified theme
   */
  themeName: _propTypes.default.string
};
var ThemeProvider = function ThemeProvider(_ref) {
  var children = _ref.children,
    themeName = _ref.themeName;
  (0, _react.useEffect)(function () {
    if (themeName) {
      document.documentElement.classList.add(themeName);
    }
    return function () {
      if (themeName) {
        document.documentElement.classList.remove(themeName);
      }
    };
  }, [themeName]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
};
ThemeProvider.propTypes = propTypes;
var _default = ThemeProvider;
exports.default = _default;