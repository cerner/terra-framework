'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _nl = require('react-intl/locale-data/nl');

var _nl2 = _interopRequireDefault(_nl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_nl2.default);

var messages = {
  "Terra.actionHeader.back": "Terug",
  "Terra.actionHeader.close": "Sluiten",
  "Terra.actionHeader.maximize": "Maximalisatie",
  "Terra.actionHeader.minimize": "Minimaliseren",
  "Terra.actionHeader.next": "Volgende",
  "Terra.actionHeader.previous": "Vorige",
  "Terra.ajax.error": "Deze inhoud kon niet worden geladen.",
  "Terra.application.tabs.more": "Meer",
  "Terra.application.utility.back": "Terug",
  "Terra.application.utility.button": "Hulpprogrammaknop",
  "Terra.application.utility.close": "Sluiten",
  "Terra.application.utility.menu": "Menu Hulpprogramma's",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Doorgaan naar content",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menu",
  "Terra.applicationLayout.utilityDefaults.about": "Over",
  "Terra.applicationLayout.utilityDefaults.appearance": "Uiterlijk",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Foto wijzigen",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Aan de slag",
  "Terra.applicationLayout.utilityDefaults.help": "Help",
  "Terra.applicationLayout.utilityDefaults.logOut": "Afmelden",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Beveiliging",
  "Terra.applicationLayout.utilityDefaults.settings": "Instellingen",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Gebruiksvoorwaarden",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Gebruikersinformatie",
  "Terra.collapsibleMenuView.more": "Meer",
  "Terra.form.field.optional": "(optioneel)",
  "Terra.form.select.add": "\"{text}\" toevoegen",
  "Terra.form.select.defaultDisplay": "- Selecteren -",
  "Terra.form.select.noResults": "Geen resultaten gevonden voor \"{text}\"",
  "Terra.menu.back": "Terug",
  "Terra.menu.close": "Sluiten",
  "Terra.notification.dialog.alert": "Waarschuwing",
  "Terra.notification.dialog.error": "Fout",
  "Terra.notification.dialog.info": "Informatie",
  "Terra.notification.dialog.success": "Succes",
  "Terra.notification.dialog.warning": "Waarschuwing",
  "Terra.Overlay.loading": "Bezig met laden",
  "Terra.timeInput.am": "AM",
  "Terra.timeInput.display.meridiem": "",
  "Terra.timeInput.hh": "uu",
  "Terra.timeInput.hours": "Uren",
  "Terra.timeInput.minutes": "Minuten",
  "Terra.timeInput.mm": "mm",
  "Terra.timeInput.pm": "PM",
  "Terra.timeInput.select.meridiem": ""
};
var areTranslationsLoaded = true;
var locale = 'nl';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
