"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
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
var _terraDisclosureManager = require("terra-disclosure-manager");
var _reactRouterDom = require("react-router-dom");
var _terraButton = _interopRequireDefault(require("terra-button"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _ApplicationContentModule = _interopRequireDefault(require("./ApplicationContent.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationContentModule.default);
var DisclosureComponent = (0, _terraDisclosureManager.withDisclosureManager)(function (_ref) {
  var disclosureManager = _ref.disclosureManager;
  return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
    fill: true
  }, /*#__PURE__*/_react.default.createElement("p", null, "Hello World"), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    text: "Close Modal",
    onClick: disclosureManager.closeDisclosure
  }));
});
var dummyContent = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Lorem ipsum dolor sit amet"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh."), /*#__PURE__*/_react.default.createElement("p", null, "Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna."), /*#__PURE__*/_react.default.createElement("p", null, "Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci."), /*#__PURE__*/_react.default.createElement("h2", null, "Orci varius natoque penatibus et."), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh."), /*#__PURE__*/_react.default.createElement("p", null, "Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna."), /*#__PURE__*/_react.default.createElement("p", null, "Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci."), /*#__PURE__*/_react.default.createElement("h2", null, "Pellentesque et odio nibh. Donec."), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh."), /*#__PURE__*/_react.default.createElement("p", null, "Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna."), /*#__PURE__*/_react.default.createElement("p", null, "Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci."), /*#__PURE__*/_react.default.createElement("h2", null, "Lorem ipsum dolor sit amet"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh."), /*#__PURE__*/_react.default.createElement("p", null, "Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna."), /*#__PURE__*/_react.default.createElement("p", null, "Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci."), /*#__PURE__*/_react.default.createElement("h2", null, "Orci varius natoque penatibus et."), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh."), /*#__PURE__*/_react.default.createElement("p", null, "Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna."), /*#__PURE__*/_react.default.createElement("p", null, "Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci."), /*#__PURE__*/_react.default.createElement("h2", null, "Pellentesque et odio nibh. Donec."), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "Nullam ornare sapien at sapien aliquam commodo. Pellentesque auctor, metus consectetur elementum venenatis, lectus libero tristique leo, ac blandit nunc metus vitae sem. Nam finibus orci quis aliquet elementum. Duis in pretium dolor, ac commodo nibh."), /*#__PURE__*/_react.default.createElement("p", null, "Proin pellentesque lectus vitae risus imperdiet tempus. Sed ac justo luctus, iaculis quam in, cursus augue. In quis erat tincidunt, pellentesque velit in, pharetra ipsum. Praesent et tincidunt arcu. Ut imperdiet risus id leo eleifend vehicula. Maecenas non tempor arcu, nec posuere lectus. Pellentesque varius magna nunc, sit amet vehicula nisi fermentum et. Ut nibh sem, feugiat blandit lacus ut, mattis maximus libero. Ut tincidunt nibh in imperdiet finibus. Phasellus eu hendrerit justo. Aliquam ac dolor sit amet metus ornare tristique at viverra sem. Vivamus non erat enim. Praesent tempor lorem felis, in aliquam lacus aliquet in. Phasellus quam felis, porttitor eget dictum at, hendrerit in sem. Duis volutpat orci sed mauris pharetra, at mollis diam placerat. Phasellus sed leo dolor. Praesent leo risus, finibus elementum aliquam at, bibendum non eros. Nunc feugiat semper nisi nec sollicitudin. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam sed feugiat lectus. Proin tellus justo, rhoncus vel arcu eget, molestie placerat lacus. Aliquam diam urna, finibus nec nisi ultricies, egestas vulputate tellus. Suspendisse varius metus eget orci sollicitudin lacinia. Morbi ornare arcu leo, non auctor mauris finibus ac. Etiam placerat orci at dui iaculis, ornare sagittis augue euismod. Etiam in justo vel ex gravida placerat eget quis libero. Etiam sit amet nisl neque. Sed id fringilla elit. Vestibulum vitae varius enim, sed luctus magna."), /*#__PURE__*/_react.default.createElement("p", null, "Cras et ante blandit, tincidunt lacus non, tincidunt quam. Duis id eros gravida, eleifend leo non, mattis mi. Phasellus rutrum sapien at vehicula facilisis. Curabitur elementum, lacus vitae auctor interdum, sem turpis maximus urna, a vulputate sapien felis faucibus turpis. Pellentesque nec tempor libero. Nunc est augue, luctus non lorem quis, ultricies elementum tortor. Nam blandit lacus varius orci rutrum dignissim. Donec a vehicula odio. Nam lobortis metus vel nisi tincidunt, eget viverra quam tempor. Nam sed dictum metus. Ut laoreet ex eget dapibus condimentum. Sed quis bibendum ligula. Integer nec mollis urna, gravida pharetra massa. Sed nec tortor posuere, volutpat magna at, rhoncus orci."));
var ApplicationContent = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ApplicationContent, _React$Component);
  var _super = _createSuper(ApplicationContent);
  function ApplicationContent(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ApplicationContent);
    _this = _super.call(this, props);
    _this.handleMenuSelection = _this.handleMenuSelection.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      eventState: undefined
    };
    return _this;
  }
  (0, _createClass2.default)(ApplicationContent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('applicationMenu.itemSelected', this.handleMenuSelection);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('applicationMenu.itemSelected', this.handleMenuSelection);
    }
  }, {
    key: "handleMenuSelection",
    value: function handleMenuSelection(event) {
      this.setState({
        eventState: event.detail
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        layoutConfig = _this$props.layoutConfig,
        disclosureManager = _this$props.disclosureManager,
        basePath = _this$props.basePath,
        contentName = _this$props.contentName,
        noMenu = _this$props.noMenu,
        showDummyContent = _this$props.showDummyContent;
      var bodyContent;
      if (showDummyContent) {
        bodyContent = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Another Page?"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "These pages are here to demonstrate the responsive functionality of header navigation tabs. The tabs will collapse into a More tab as space is constrained."), dummyContent);
      } else {
        var dynamicContent;
        if (noMenu) {
          dynamicContent = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "No Menu? No Problem!"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "Components for the menu region are optional. The ApplicationLayout will still render a default menu at tiny and small breakpoints to ensure utilities/navigation items are accessible."));
        } else {
          dynamicContent = /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Nested Routing"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "The content and menu components will remain mounted as long as their associated path continues to match the current router location. Therefore, we can change what the content components render based on the presence of additional path segments."), /*#__PURE__*/_react.default.createElement("p", null, "For example, the displayed menu component will update the router location when its items are clicked. This content component will be notified of the location change and render the update below."), /*#__PURE__*/_react.default.createElement("p", null, "Menu item selected:", /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
            path: "".concat(basePath, "/*"),
            render: function render(_ref2) {
              var location = _ref2.location;
              return /*#__PURE__*/_react.default.createElement("b", null, location.pathname);
            }
          })), /*#__PURE__*/_react.default.createElement("h2", null, "Menu/Content Communication"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "Additionally, communication can occur through custom events or shared context."), /*#__PURE__*/_react.default.createElement("p", null, "Event detected:", /*#__PURE__*/_react.default.createElement("b", null, this.state.eventState)));
        }
        bodyContent = /*#__PURE__*/_react.default.createElement("div", null, dynamicContent, /*#__PURE__*/_react.default.createElement("h2", null, "Layout Control"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "Content and menu components will receive a prop named", /*#__PURE__*/_react.default.createElement("b", null, "layoutConfig"), ' ', "which contains APIs for manipulating the layout state. When the layout is tiny or small, the layoutConfig will include a function called `toggleMenu` which will present or dismiss the menu."), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
          text: "Toggle Menu",
          isDisabled: !layoutConfig.toggleMenu,
          onClick: function onClick() {
            layoutConfig.toggleMenu();
          }
        }), /*#__PURE__*/_react.default.createElement("h2", null, "Progressive Disclosure"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("p", null, "The ApplicationLayout includes ModalManager support by default. The ApplicationLayout can be wrapped in additional DisclosureManagers to provide additional disclosure capabilities."), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
          text: "Launch Modal",
          onClick: function onClick() {
            disclosureManager.disclose({
              preferredType: 'modal',
              size: 'medium',
              content: {
                key: 'MODAL_TEST',
                component: /*#__PURE__*/_react.default.createElement(DisclosureComponent, null)
              }
            });
          }
        }));
      }
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        fill: true
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement("h1", null, contentName), bodyContent));
    }
  }]);
  return ApplicationContent;
}(_react.default.Component);
ApplicationContent.propTypes = {
  layoutConfig: _propTypes.default.shape({
    toggleMenu: _propTypes.default.func
  }),
  disclosureManager: _terraDisclosureManager.disclosureManagerShape,
  basePath: _propTypes.default.string,
  contentName: _propTypes.default.string,
  noMenu: _propTypes.default.bool,
  showDummyContent: _propTypes.default.bool
};
var _default = (0, _terraDisclosureManager.withDisclosureManager)(ApplicationContent);
exports.default = _default;