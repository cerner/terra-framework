"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _propTypes = _interopRequireDefault(require("prop-types"));
var KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  BACK_SPACE: 8,
  TAB: 9
};
var LOCATIONS = {
  BODY: 'body',
  FOOTER: 'footer'
};
var VARIANTS = {
  HEADER: 'header',
  MENU: 'menu'
};
var itemShape = _propTypes.default.shape({
  /**
   * Array containing the keys of each child item of this item.
   */
  childKeys: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * The component associated with this item.
   */
  content: _propTypes.default.object,
  /**
   * The location to place the item. One of Utils.LOCATIONS.BODY, Utils.LOCATIONS.FOOTER.
   */
  contentLocation: _propTypes.default.oneOf([LOCATIONS.BODY, LOCATIONS.FOOTER]),
  /**
   * Boolean indicating if the item is read-only. Takes precedence over isSelected/Selectable.
   */
  isReadOnly: _propTypes.default.bool,
  /**
   * Boolean indicating if the item is selected.
   */
  isSelected: _propTypes.default.bool,
  /**
   * Boolean indicating if the item is selectable.
   */
  isSelectable: _propTypes.default.bool,
  /**
   * The unique key associated with this item.
   */
  key: _propTypes.default.string.isRequired,
  /**
   * Optional meta data to be returned along with the item key within the onChange.
   */
  metaData: _propTypes.default.object,
  /**
   * The text associated with this item.
   */
  title: _propTypes.default.string
});
var Utils = {
  KEY_CODES: KEY_CODES,
  LOCATIONS: LOCATIONS,
  VARIANTS: VARIANTS,
  itemShape: itemShape
};
var _default = Utils;
exports.default = _default;