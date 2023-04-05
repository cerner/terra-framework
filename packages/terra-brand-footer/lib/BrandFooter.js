"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _BrandFooterModule = _interopRequireDefault(require("./BrandFooter.module.scss"));
var _excluded = ["sections", "isVertical", "contentLeft", "contentRight", "contentBottom"];
var cx = _bind.default.bind(_BrandFooterModule.default);
var propTypes = {
  /**
  * A set of navigation links to be displayed with optional headers.
  *
  * ```
  * Array structured like:
  * [
  *   {
  *     headerText: string,
  *     links: [
  *       text: required string,
  *       href: required string,
  *       target: string,
  *     ],
  *   },
  * ]
  * ```
  */
  sections: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
    * The optional text to display as a header
    */
    headerText: _propTypes.default.string,
    /**
    * An array of navigation links with each element specifying text, href and target keys with appropriate values.
    */
    links: _propTypes.default.arrayOf(_propTypes.default.shape({
      /**
      * Text to be displayed as navigational link.
      */
      text: _propTypes.default.string.isRequired,
      /**
      * URL of the navigational link.
      */
      href: _propTypes.default.string.isRequired,
      /**
      * Attribute to open on same or different tab on clicking the navigational link.
      */
      target: _propTypes.default.string
    }))
  })),
  /**
  * If true link sections will be laid out from top to bottom, then left to right if the max width is reached
  */
  isVertical: _propTypes.default.bool,
  /**
  * The content to be displayed in left side area of the footer.
  */
  contentLeft: _propTypes.default.node,
  /**
  * The content to be displayed in right side area of the footer.
  */
  contentRight: _propTypes.default.node,
  /**
  * The content to be displayed in bottom area of the footer.
  */
  contentBottom: _propTypes.default.node
};
var defaultProps = {
  sections: [],
  isVertical: false,
  contentLeft: null,
  contentRight: null,
  contentBottom: null
};
var BrandFooter = function BrandFooter(_ref) {
  var sections = _ref.sections,
    isVertical = _ref.isVertical,
    contentLeft = _ref.contentLeft,
    contentRight = _ref.contentRight,
    contentBottom = _ref.contentBottom,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var BrandFooterClassNames = (0, _classnames.default)(cx('brand-footer', theme.className), customProps.className);
  var processedSections = sections;

  // Assign ids to use as keys
  for (var i = 0; i < processedSections.length; i += 1) {
    processedSections[i].id = i;
  }
  var containsASectionHeader = processedSections.some(function (linkGroup) {
    return linkGroup.headerText;
  });
  var navigation;
  if (processedSections.length > 0) {
    navigation = /*#__PURE__*/_react.default.createElement("nav", {
      className: cx('nav', isVertical ? 'nav-vertical' : 'nav-horizontal')
    }, processedSections.map(function (linkGroup) {
      return /*#__PURE__*/_react.default.createElement("section", {
        className: cx('navigation-section'),
        key: linkGroup.id
      },
      // When displaying vertically if one column has a header all columns are aligned as if they have a header
      (containsASectionHeader && isVertical || linkGroup.headerText) && /*#__PURE__*/_react.default.createElement("h3", {
        className: cx('list-header'),
        key: linkGroup.headerText
      },
      // Insert a zero width space to act as a placeholder section header that doesn't display but takes vertical space
      linkGroup.headerText || "\u200B"), /*#__PURE__*/_react.default.createElement("ul", {
        className: cx('menu')
      }, linkGroup.links && linkGroup.links.map(function (link, index) {
        var spreadTarget = link.target !== undefined ? {
          target: link.target
        } : {};
        var separator = !isVertical && index >= 1 ? /*#__PURE__*/_react.default.createElement("span", {
          className: cx('separator'),
          "aria-hidden": true
        }, "/") : '';
        return /*#__PURE__*/_react.default.createElement("li", {
          className: cx('list-item'),
          key: link.text + link.href
        }, separator, /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
          className: cx('link'),
          href: link.href
        }, spreadTarget), link.text));
      })));
    }));
  }
  return /*#__PURE__*/_react.default.createElement("footer", (0, _extends2.default)({
    role: "contentinfo"
  }, customProps, {
    className: BrandFooterClassNames
  }), navigation, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('footer-content')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-top')
  }, contentLeft, contentRight), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-bottom')
  }, contentBottom)));
};
BrandFooter.propTypes = propTypes;
BrandFooter.defaultProps = defaultProps;
var _default = BrandFooter;
exports.default = _default;