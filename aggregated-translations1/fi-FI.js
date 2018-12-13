'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _fi = require('react-intl/locale-data/fi');

var _fi2 = _interopRequireDefault(_fi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_fi2.default);

var messages = {
  "Terra.actionHeader.back": "Takaisin",
  "Terra.actionHeader.close": "Kiinni",
  "Terra.actionHeader.maximize": "Maksimoida",
  "Terra.actionHeader.minimize": "Minimoida",
  "Terra.actionHeader.next": "Seuraava",
  "Terra.actionHeader.previous": "Edellinen",
  "Terra.ajax.error": "This content failed to load.n9KZ Pi~",
  "Terra.application.tabs.more": "More",
  "Terra.application.utility.back": "Back",
  "Terra.application.utility.button": "Utility Button",
  "Terra.application.utility.close": "Close",
  "Terra.application.utility.menu": "Utility Menu",
  "Terra.ApplicationHeaderLayout.SkipToContent": "skiiippp~~~",
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
  "Terra.form.field.optional": "(optional)2384932**",
  "Terra.form.select.add": "Add \"{text}\"",
  "Terra.form.select.defaultDisplay": "- Select -",
  "Terra.form.select.noResults": "No matching results for \"{text}\"",
  "Terra.menu.back": "Takaisin",
  "Terra.menu.close": "Kiinni",
  "Terra.notification.dialog.alert": "Benachrichtigung~n9KZ Pi",
  "Terra.notification.dialog.error": "Erreur~n9KZ Pi",
  "Terra.notification.dialog.info": "Informações~n9KZ Pi",
  "Terra.notification.dialog.success": "Erfolgreich~n9KZ Pi",
  "Terra.notification.dialog.warning": "Avertissement~n9KZ Pi.",
  "Terra.Overlay.loading": "Lataamalla...",
  "Terra.timeInput.am": "a.m.",
  "Terra.timeInput.display.meridiem": "",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.hours": "Tuntia",
  "Terra.timeInput.minutes": "Minuuttia",
  "Terra.timeInput.mm": "mm",
  "Terra.timeInput.pm": "p.m.",
  "Terra.timeInput.select.meridiem": ""
};
var areTranslationsLoaded = true;
var locale = 'fi-FI';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
