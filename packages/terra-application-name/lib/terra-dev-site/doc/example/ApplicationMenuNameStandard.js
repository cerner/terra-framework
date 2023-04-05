"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraApplicationMenuLayout = _interopRequireDefault(require("terra-application-menu-layout"));
var _terraImage = _interopRequireDefault(require("terra-image"));
var _classnames = _interopRequireDefault(require("classnames"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _Placeholder = _interopRequireDefault(require("terra-application-name/lib/terra-dev-site/doc/common/Placeholder"));
var _terraApplicationName = require("terra-application-name");
var _demoStylesModule = _interopRequireDefault(require("../../test/application-name/demoStyles.module.scss"));
var _ApplicationMenuNameStandardModule = _interopRequireDefault(require("./ApplicationMenuNameStandard.module.scss"));
var cx = _bind.default.bind(_demoStylesModule.default);
var cy = _bind.default.bind(_ApplicationMenuNameStandardModule.default);
var ApplicationMenuNameStandard = function ApplicationMenuNameStandard() {
  var theme = _react.default.useContext(_terraThemeContext.default);
  var demoClassName = (0, _classnames.default)(cx('demo-background-color', theme.className));
  return /*#__PURE__*/_react.default.createElement(_terraApplicationMenuLayout.default, {
    className: cy('demo-size'),
    header: /*#__PURE__*/_react.default.createElement(_terraApplicationName.ApplicationMenuName, {
      title: "App-Name",
      accessory: /*#__PURE__*/_react.default.createElement(_terraImage.default, {
        alt: "Terra Logo",
        variant: "rounded",
        src: "https://github.com/cerner/terra-framework/raw/main/terra.png",
        className: cx('demo-image-container'),
        isFluid: true
      }),
      className: demoClassName
    }),
    extensions: /*#__PURE__*/_react.default.createElement(_Placeholder.default, {
      text: "Extensions",
      type: "menu-extensions"
    }),
    content: /*#__PURE__*/_react.default.createElement(_Placeholder.default, {
      text: "Content",
      type: "default"
    }),
    footer: /*#__PURE__*/_react.default.createElement(_Placeholder.default, {
      text: "Footer",
      type: "footer"
    })
  });
};
var _default = ApplicationMenuNameStandard;
exports.default = _default;