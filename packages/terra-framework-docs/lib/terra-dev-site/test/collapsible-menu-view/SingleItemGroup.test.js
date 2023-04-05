"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraCollapsibleMenuView = _interopRequireDefault(require("terra-collapsible-menu-view"));
var locales = ['en', 'en-AU', 'en-CA', 'en-US', 'en-GB', 'es', 'es-US', 'es-ES', 'de', 'fr', 'fr-FR', 'nl', 'nl-BE', 'pt', 'pt-BR', 'sv', 'sv-SE'];
var CollapsibleMenuViewSingleItem = function CollapsibleMenuViewSingleItem() {
  var items = [];
  items.push( /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.ItemGroup, {
    key: "locale"
  }, locales.map(function (locale) {
    return /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default.Item, {
      text: locale,
      key: locale
    });
  })));
  return /*#__PURE__*/_react.default.createElement(_terraCollapsibleMenuView.default, {
    key: "menu"
  }, items);
};
var _default = CollapsibleMenuViewSingleItem;
exports.default = _default;