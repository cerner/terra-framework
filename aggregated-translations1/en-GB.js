'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_en2.default);

var messages = {
  "Terra.actionHeader.back": "Back",
  "Terra.actionHeader.close": "Close",
  "Terra.actionHeader.maximize": "Maximise",
  "Terra.actionHeader.minimize": "Minimise",
  "Terra.actionHeader.next": "Next",
  "Terra.actionHeader.previous": "Previous",
  "Terra.ajax.error": "This content failed to load.",
  "Terra.application.tabs.more": "More",
  "Terra.application.utility.back": "Back",
  "Terra.application.utility.button": "Utility Button",
  "Terra.application.utility.close": "Close",
  "Terra.application.utility.menu": "Utility Menu",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Skip to Content",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Toggle Menu",
  "Terra.applicationLayout.utilityDefaults.about": "About",
  "Terra.applicationLayout.utilityDefaults.appearance": "Appearance",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Change Photo",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Getting Started",
  "Terra.applicationLayout.utilityDefaults.help": "Help",
  "Terra.applicationLayout.utilityDefaults.logOut": "Log Out",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Security",
  "Terra.applicationLayout.utilityDefaults.settings": "Settings",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Terms of Use",
  "Terra.applicationLayout.utilityDefaults.userInformation": "User Information",
  "Terra.collapsibleMenuView.more": "More",
  "Terra.form.field.optional": "(optional)",
  "Terra.form.select.add": "Add \"{text}\"",
  "Terra.form.select.defaultDisplay": "- Select -",
  "Terra.form.select.noResults": "No matching results for \"{text}\"",
  "Terra.menu.back": "Back",
  "Terra.menu.close": "Close",
  "Terra.notification.dialog.alert": "Alert",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.info": "Information",
  "Terra.notification.dialog.success": "Success",
  "Terra.notification.dialog.warning": "Warning",
  "Terra.Overlay.loading": "Loading...",
  "Terra.timeInput.am": "",
  "Terra.timeInput.display.meridiem": "",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.hours": "Hours",
  "Terra.timeInput.minutes": "Minutes",
  "Terra.timeInput.mm": "mm",
  "Terra.timeInput.pm": "",
  "Terra.timeInput.select.meridiem": ""
};
var areTranslationsLoaded = true;
var locale = 'en-GB';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
