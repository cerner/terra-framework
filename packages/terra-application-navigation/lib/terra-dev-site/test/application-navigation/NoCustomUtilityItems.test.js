"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ApplicationNavigation = _interopRequireDefault(require("../../../ApplicationNavigation"));
// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
var NoCustomUtilityItemsTest = function NoCustomUtilityItemsTest() {
  return /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    onSelectSettings: function onSelectSettings() {
      return alert('Settings Selected');
    } // eslint-disable-line no-alert
    ,
    onSelectHelp: function onSelectHelp() {
      return alert('Help Selected');
    } // eslint-disable-line no-alert
    ,
    onSelectLogout: function onSelectLogout() {
      return alert('Logout Selected');
    } // eslint-disable-line no-alert
  });
};
var _default = NoCustomUtilityItemsTest;
exports.default = _default;