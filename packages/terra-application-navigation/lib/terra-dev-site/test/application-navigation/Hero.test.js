"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ApplicationNavigation = _interopRequireDefault(require("../../../ApplicationNavigation"));
var _terraDocs = require("@cerner/terra-docs");
/* eslint-disable */

var hero = /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
  title: "Test Hero"
});

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
var HeroTest = function HeroTest() {
  return /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    hero: hero
  });
};
var _default = HeroTest;
exports.default = _default;