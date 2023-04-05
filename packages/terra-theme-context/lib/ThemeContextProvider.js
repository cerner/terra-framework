"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ThemeContext = _interopRequireDefault(require("./ThemeContext"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  /**
   * The components to be rendered within the context of the ThemeContextProvider. Components rendered here are able to interact with ThemeContextProvider through the ThemeContext.
   */
  children: _propTypes.default.element.isRequired,
  /**
   * An object containing the name and className of the selected theme.
   */
  theme: _propTypes.default.shape({
    name: _propTypes.default.string,
    className: _propTypes.default.string
  })
};
var defaultProps = {
  theme: {}
};
var ThemeContextProvider = function ThemeContextProvider(_ref) {
  var theme = _ref.theme,
    children = _ref.children;
  var contextValue = (0, _react.useMemo)(function () {
    return {
      name: theme.name,
      className: theme.className
    };
  }, [theme.name, theme.className]);
  return /*#__PURE__*/_react.default.createElement(_ThemeContext.default.Provider, {
    value: contextValue
  }, children);
};
ThemeContextProvider.propTypes = propTypes;
ThemeContextProvider.defaultProps = defaultProps;
var _default = ThemeContextProvider;
exports.default = _default;