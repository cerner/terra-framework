"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApplicationLinksPropType = void 0;
Object.defineProperty(exports, "ApplicationTabs", {
  enumerable: true,
  get: function get() {
    return _ApplicationTabs.default;
  }
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _ApplicationTabs = _interopRequireDefault(require("./tabs/ApplicationTabs"));
var ApplicationLinksPropType = _propTypes.default.shape({
  /**
   * Alignment of the navigational tabs. ( e.g start, center, end )
   */
  alignment: _propTypes.default.oneOf(['start', 'center', 'end']),
  /**
   * Navigational links that will generate tabs that will update the path. These paths are matched with react-router to selection.
   */
  links: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
     * The id to append to the link.
     */
    id: _propTypes.default.string,
    /**
     * The path to push to the route.
     */
    path: _propTypes.default.string.isRequired,
    /**
     * The display text for the link.
     */
    text: _propTypes.default.string.isRequired,
    /**
     * The display icon for the link
     */
    icon: _propTypes.default.node
  }))
});
exports.ApplicationLinksPropType = ApplicationLinksPropType;
var ApplicationLinks = {
  ApplicationTabs: _ApplicationTabs.default,
  ApplicationLinksPropType: ApplicationLinksPropType
};
var _default = ApplicationLinks;
exports.default = _default;