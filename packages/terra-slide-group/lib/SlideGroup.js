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
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _TransitionGroup = _interopRequireDefault(require("react-transition-group/TransitionGroup"));
var _CSSTransition = _interopRequireDefault(require("react-transition-group/CSSTransition"));
var _Slide = _interopRequireDefault(require("./Slide"));
var _SlideModule = _interopRequireDefault(require("./Slide.module.scss"));
var _excluded = ["items", "isAnimated"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_SlideModule.default);
var propTypes = {
  /**
   * The array of components for the group. Only the last component is visible. The others are hidden but still mounted.
   */
  items: _propTypes.default.array,
  /**
   * When true, the transition between slides is animated.
   */
  isAnimated: _propTypes.default.bool
};
var defaultProps = {
  isAnimated: false
};
var SlideGroup = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SlideGroup, _React$Component);
  var _super = _createSuper(SlideGroup);
  function SlideGroup(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SlideGroup);
    _this = _super.call(this, props);
    _this.setContainer = _this.setContainer.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(SlideGroup, [{
    key: "setContainer",
    value: function setContainer(node) {
      if (!node) {
        return;
      } // Ref callbacks happen on mount and unmount, element is null on unmount
      this.slideGroup = node;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        items = _this$props.items,
        isAnimated = _this$props.isAnimated,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      // We don't want to render the transition group when no children exist. Doing so will cause the first child to
      // animate into place, which in most cases we do not want.
      if (!items || !items.length) {
        return null;
      }

      // We use the key from the first child as the key for the transition group. This will cause the transition group to
      // rerender when the root child changes and subsequently prevent that child from animating into position.
      var transitionGroupKey = items[0].key;
      var itemCount = items.length - 1;
      var transitionNames = {
        enter: _SlideModule.default.enter,
        enterActive: _SlideModule.default['enter-active'],
        exit: _SlideModule.default.exit,
        exitActive: _SlideModule.default['exit-active']
      };
      var theme = this.context;
      var slideGroupClass = (0, _classnames.default)(cx('slide-group', theme.className), customProps.className);
      return /*#__PURE__*/_react.default.createElement(_TransitionGroup.default, (0, _extends2.default)({}, customProps, {
        ref: this.setContainer,
        className: slideGroupClass,
        key: transitionGroupKey
      }), items.map(function (item, index) {
        return /*#__PURE__*/_react.default.createElement(_CSSTransition.default, {
          classNames: transitionNames,
          enter: isAnimated,
          onEntered: SlideGroup.hidePreviousSlide,
          exit: isAnimated,
          onExit: SlideGroup.showPreviousSlide,
          timeout: 300,
          key: item.key,
          id: "shmmoop"
        }, /*#__PURE__*/_react.default.createElement(_Slide.default, {
          isHidden: index !== itemCount
        }, item));
      }));
    }
  }], [{
    key: "hidePreviousSlide",
    value: function hidePreviousSlide(enteredElement) {
      if (enteredElement.previousSibling) {
        enteredElement.previousSibling.setAttribute('aria-hidden', true);
      }
    }
  }, {
    key: "showPreviousSlide",
    value: function showPreviousSlide(exitingElement) {
      if (exitingElement.previousSibling) {
        exitingElement.previousSibling.removeAttribute('aria-hidden');
      }
    }
  }]);
  return SlideGroup;
}(_react.default.Component);
SlideGroup.propTypes = propTypes;
SlideGroup.defaultProps = defaultProps;
SlideGroup.contextType = _terraThemeContext.default;
var _default = SlideGroup;
exports.default = _default;