"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _MenuContent = _interopRequireDefault(require("./_MenuContent"));
var _MenuItem = _interopRequireDefault(require("./MenuItem"));
var _MenuItemGroup = _interopRequireDefault(require("./MenuItemGroup"));
var _MenuDivider = _interopRequireDefault(require("./MenuDivider"));
var _MenuModule = _interopRequireDefault(require("./Menu.module.scss"));
var _excluded = ["boundingRef", "classNameArrow", "classNameContent", "classNameOverlay", "onRequestClose", "isOpen", "children", "targetRef", "isArrowDisplayed", "contentWidth"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_MenuModule.default);
var propTypes = {
  /**
   * List of Menu.Item(s)/Menu.ItemGroup(s)/Menu.Divider(s) to be displayed as content within the Menu.
   */
  children: _propTypes.default.node.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: _propTypes.default.func.isRequired,
  /**
   * Target element for the menu to anchor to.
   */
  targetRef: _propTypes.default.func.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: _propTypes.default.func,
  /**
   * CSS classnames that are append to the arrow.
   */
  classNameArrow: _propTypes.default.string,
  /**
   * CSS classnames that are append to the menu content inner.
   */
  classNameContent: _propTypes.default.string,
  /**
   * CSS classnames that are append to the overlay.
   */
  classNameOverlay: _propTypes.default.string,
  /**
   * Should the menu be presented as open.
   */
  isOpen: _propTypes.default.bool,
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760 or auto
   */
  contentWidth: _propTypes.default.oneOf(['160', '240', '320', '640', '960', '1280', '1760', 'auto']),
  /**
   * Indicates if the menu should have an center aligned arrow displayed on dropdown.
   * Otherwise, the menu will display without an arrow and right aligned.
   */
  isArrowDisplayed: _propTypes.default.bool,
  /**
   * Header Title for main-menu(first-tier).
   * Header Title will only be visible if the main-menu contains at least one sub-menu.
   */
  headerTitle: _propTypes.default.string
};
var defaultProps = {
  isArrowDisplayed: false,
  isOpen: false,
  contentWidth: '240',
  headerTitle: ''
};
var Menu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(Menu, _React$Component);
  var _super = _createSuper(Menu);
  function Menu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, Menu);
    _this = _super.call(this, props);
    _this.setPageDimensions = _this.setPageDimensions.bind((0, _assertThisInitialized2.default)(_this));
    _this.push = _this.push.bind((0, _assertThisInitialized2.default)(_this));
    _this.pop = _this.pop.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      stack: [(0, _assertThisInitialized2.default)(_this)]
    };
    return _this;
  }
  (0, _createClass2.default)(Menu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.isOpen && prevProps.isOpen || this.props.children.length !== prevProps.children.length) {
        /* eslint-disable react/no-did-update-set-state */
        this.setState({
          stack: [this]
        });
      }
    }
  }, {
    key: "setPageDimensions",
    value: function setPageDimensions(node) {
      if (node) {
        this.pageHeight = node.clientHeight;
        if (this.props.contentWidth === 'auto') {
          this.pageWidth = node.clientWidth;
        }
      } else {
        this.pageHeight = undefined;
        this.pageWidth = undefined;
      }
    }
  }, {
    key: "pop",
    value: function pop() {
      if (this.state.stack.length > 1) {
        this.setState(function (prevState) {
          var newStack = prevState.stack.slice();
          newStack.pop();
          return {
            stack: newStack
          };
        });
      }
    }
  }, {
    key: "push",
    value: function push(item) {
      this.setState(function (prevState) {
        var newStack = prevState.stack.slice();
        newStack.push(item);
        return {
          stack: newStack
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        boundingRef = _this$props.boundingRef,
        classNameArrow = _this$props.classNameArrow,
        classNameContent = _this$props.classNameContent,
        classNameOverlay = _this$props.classNameOverlay,
        onRequestClose = _this$props.onRequestClose,
        isOpen = _this$props.isOpen,
        children = _this$props.children,
        targetRef = _this$props.targetRef,
        isArrowDisplayed = _this$props.isArrowDisplayed,
        contentWidth = _this$props.contentWidth,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var arrowClass = cx(['arrow', {
        submenu: this.state.stack.length > 1
      }, classNameArrow]);
      var visiblePage = this.state.stack.length - 1;
      var slides = this.state.stack.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement(_MenuContent.default
        // eslint-disable-next-line react/no-array-index-key
        , {
          key: "MenuPage-".concat(index),
          title: item.props.text,
          onRequestNext: _this2.push,
          onRequestBack: _this2.pop,
          onRequestClose: _this2.props.onRequestClose,
          isHidden: index !== visiblePage,
          fixedHeight: _this2.pageHeight,
          fixedWidth: _this2.pageWidth,
          contentWidth: _terraPopup.default.Opts.widths[contentWidth],
          refCallback: visiblePage === 0 ? _this2.setPageDimensions : null,
          index: index,
          boundingRef: boundingRef,
          isFocused: index === visiblePage,
          headerTitle: _this2.props.headerTitle
        }, item.props.children || item.props.subMenuItems);
      });
      return /*#__PURE__*/_react.default.createElement(_terraPopup.default, (0, _extends2.default)({}, customProps, {
        boundingRef: boundingRef,
        isArrowDisplayed: isArrowDisplayed,
        attachmentBehavior: "flip",
        contentAttachment: isArrowDisplayed ? 'top center' : 'top right',
        contentHeight: "auto",
        contentWidth: this.props.contentWidth,
        classNameArrow: arrowClass,
        classNameContent: classNameContent,
        classNameOverlay: classNameOverlay,
        isOpen: isOpen,
        onRequestClose: onRequestClose,
        targetRef: targetRef,
        isHeaderDisabled: true,
        isContentFocusDisabled: true
      }), slides);
    }
  }]);
  return Menu;
}(_react.default.Component);
Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.Item = _MenuItem.default;
Menu.ItemGroup = _MenuItemGroup.default;
Menu.Divider = _MenuDivider.default;
Menu.Opts = {
  widths: _terraPopup.default.Opts.widths
};
var _default = Menu;
exports.default = _default;