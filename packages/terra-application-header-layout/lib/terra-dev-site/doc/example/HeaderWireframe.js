"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraResponsiveElement = _interopRequireDefault(require("terra-responsive-element"));
var _terraApplicationHeaderLayout = _interopRequireDefault(require("terra-application-header-layout"));
var _ExtensionsExample = _interopRequireDefault(require("terra-application-header-layout/lib/terra-dev-site/doc/common/ExtensionsExample"));
var _LogoExample = _interopRequireDefault(require("terra-application-header-layout/lib/terra-dev-site/doc/common/LogoExample"));
var _NavigationExample = _interopRequireDefault(require("terra-application-header-layout/lib/terra-dev-site/doc/common/NavigationExample"));
var _ToggleExample = _interopRequireDefault(require("terra-application-header-layout/lib/terra-dev-site/doc/common/ToggleExample"));
var _UtilitiesExample = _interopRequireDefault(require("terra-application-header-layout/lib/terra-dev-site/doc/common/UtilitiesExample"));
var _HeaderWireframeModule = _interopRequireDefault(require("./HeaderWireframe.module.scss"));
var cx = _bind.default.bind(_HeaderWireframeModule.default);
var HeaderWireframe = function HeaderWireframe() {
  var tinyHeader = /*#__PURE__*/_react.default.createElement(_terraApplicationHeaderLayout.default, {
    logo: /*#__PURE__*/_react.default.createElement(_LogoExample.default, {
      size: "tiny"
    }),
    utilities: /*#__PURE__*/_react.default.createElement(_UtilitiesExample.default, {
      size: "tiny"
    }),
    extensions: /*#__PURE__*/_react.default.createElement(_ExtensionsExample.default, {
      size: "tiny"
    }),
    navigation: /*#__PURE__*/_react.default.createElement(_NavigationExample.default, {
      size: "tiny"
    }),
    toggle: /*#__PURE__*/_react.default.createElement(_ToggleExample.default, {
      size: "tiny"
    })
  });
  var mediumHeader = /*#__PURE__*/_react.default.createElement(_terraApplicationHeaderLayout.default, {
    logo: /*#__PURE__*/_react.default.createElement(_LogoExample.default, {
      size: "small"
    }),
    utilities: /*#__PURE__*/_react.default.createElement(_UtilitiesExample.default, {
      size: "small"
    }),
    extensions: /*#__PURE__*/_react.default.createElement(_ExtensionsExample.default, {
      size: "small"
    }),
    navigation: /*#__PURE__*/_react.default.createElement(_NavigationExample.default, {
      size: "small"
    }),
    toggle: /*#__PURE__*/_react.default.createElement(_ToggleExample.default, {
      size: "small"
    })
  });
  var largeHeader = /*#__PURE__*/_react.default.createElement(_terraApplicationHeaderLayout.default, {
    logo: /*#__PURE__*/_react.default.createElement(_LogoExample.default, {
      size: "medium"
    }),
    utilities: /*#__PURE__*/_react.default.createElement(_UtilitiesExample.default, {
      size: "medium"
    }),
    extensions: /*#__PURE__*/_react.default.createElement(_ExtensionsExample.default, {
      size: "medium"
    }),
    navigation: /*#__PURE__*/_react.default.createElement(_NavigationExample.default, {
      size: "medium"
    }),
    toggle: /*#__PURE__*/_react.default.createElement(_ToggleExample.default, {
      size: "medium"
    })
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('responsive-element-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraResponsiveElement.default, {
    tiny: tinyHeader,
    medium: mediumHeader,
    large: largeHeader
  })));
};
var _default = HeaderWireframe;
exports.default = _default;