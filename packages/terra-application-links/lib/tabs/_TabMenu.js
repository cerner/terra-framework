"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _reactRouterDom = require("react-router-dom");
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _reactIntl = require("react-intl");
var _TabMenuList = _interopRequireDefault(require("./_TabMenuList"));
var _TabMenuDisplay = _interopRequireDefault(require("./_TabMenuDisplay"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var propTypes = {
  /**
   * Child tabs to be placed in the tab menu.
   */
  children: _propTypes.default.array,
  /**
   * Should the menu be hidden, set to true if there are no hidden items.
   */
  isHidden: _propTypes.default.bool,
  /**
   * @private
   * Object containing intl APIs
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }),
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: _propTypes.default.object.isRequired
};
var TabMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TabMenu, _React$Component);
  var _super = _createSuper(TabMenu);
  function TabMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, TabMenu);
    _this = _super.call(this, props);
    _this.handleOnRequestClose = _this.handleOnRequestClose.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnClick = _this.handleOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnKeyDown = _this.handleOnKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.getTargetRef = _this.getTargetRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.setTargetRef = _this.setTargetRef.bind((0, _assertThisInitialized2.default)(_this));
    _this.createDisplay = _this.createDisplay.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      isOpen: false
    };
    _this.shouldResetFocus = false;
    return _this;
  }
  (0, _createClass2.default)(TabMenu, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.location !== this.props.location) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          isOpen: false
        });
      }
      if (this.shouldResetFocus && this.targetRef) {
        this.targetRef.focus();
        this.shouldResetFocus = this.targetRef !== document.activeElement;
      }
    }
  }, {
    key: "handleOnRequestClose",
    value: function handleOnRequestClose() {
      if (this.state.isOpen) {
        this.shouldResetFocus = true;
        this.setState({
          isOpen: false
        });
      }
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick() {
      if (!this.state.isOpen) {
        this.setState({
          isOpen: true
        });
      }
    }
  }, {
    key: "handleOnKeyDown",
    value: function handleOnKeyDown(event) {
      if ((event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) && !this.state.isOpen) {
        this.setState({
          isOpen: true
        });
      }
    }
  }, {
    key: "getTargetRef",
    value: function getTargetRef() {
      return this.targetRef;
    }
  }, {
    key: "setTargetRef",
    value: function setTargetRef(node) {
      this.targetRef = node;
    }
  }, {
    key: "createDisplay",
    value: function createDisplay(popup) {
      var location = this.props.location;
      var icon;
      var isSelected = false;
      var childText;
      var childArray = this.props.children;
      var count = childArray.length;
      for (var i = 0; i < count; i += 1) {
        var child = childArray[i];
        if ((0, _reactRouterDom.matchPath)(location.pathname, {
          path: child.props.path
        })) {
          childText = child.props.text;
          icon = child.props.icon;
          isSelected = true;
          break;
        }
      }
      return /*#__PURE__*/_react.default.createElement(_TabMenuDisplay.default, {
        onClick: this.handleOnClick,
        onKeyDown: this.handleOnKeyDown,
        popup: popup,
        refCallback: this.setTargetRef,
        isHidden: this.props.isHidden,
        text: childText || this.props.intl.formatMessage({
          id: 'Terra.application.tabs.more'
        }),
        ariaLabel: this.props.intl.formatMessage({
          id: 'Terra.application.tabs.moreButtonDescription'
        }),
        isSelected: isSelected,
        icon: icon,
        key: "application-tab-more",
        "data-application-tabs-more": true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var isOpen = this.state.isOpen;
      var popup;
      if (isOpen) {
        var extraChildProps = {
          onTabClick: this.handleOnRequestClose
        };
        popup = /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
          contentHeight: "auto",
          contentWidth: "240",
          onRequestClose: this.handleOnRequestClose,
          targetRef: this.getTargetRef,
          isOpen: isOpen,
          isArrowDisplayed: true
        }, /*#__PURE__*/_react.default.createElement(_TabMenuList.default, {
          title: this.props.intl.formatMessage({
            id: 'Terra.application.tabs.moreMenuHeaderTitle'
          })
        }, _react.default.Children.map(children, function (child) {
          return /*#__PURE__*/_react.default.cloneElement(child, extraChildProps);
        })));
      }
      return this.createDisplay(popup);
    }
  }]);
  return TabMenu;
}(_react.default.Component);
TabMenu.propTypes = propTypes;
var _default = (0, _reactIntl.injectIntl)(TabMenu);
exports.default = _default;