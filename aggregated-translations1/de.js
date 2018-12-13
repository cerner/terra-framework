'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _de = require('react-intl/locale-data/de');

var _de2 = _interopRequireDefault(_de);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_de2.default);

var messages = {
  "Terra.actionHeader.back": "Zurück",
  "Terra.actionHeader.close": "Schließen",
  "Terra.actionHeader.maximize": "Maximieren",
  "Terra.actionHeader.minimize": "Minimieren",
  "Terra.actionHeader.next": "Nächste",
  "Terra.actionHeader.previous": "Vorherige",
  "Terra.ajax.error": "Inhalt konnte nicht geladen werden.",
  "Terra.application.tabs.more": "Mehr",
  "Terra.application.utility.back": "Zurück",
  "Terra.application.utility.button": "Schaltfläche „Dienstprogramm“",
  "Terra.application.utility.close": "Schließen",
  "Terra.application.utility.menu": "Menü „Dienstprogramm“",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Zum Inhalt",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menü ein-/ausblenden",
  "Terra.applicationLayout.utilityDefaults.about": "Info über",
  "Terra.applicationLayout.utilityDefaults.appearance": "Erscheinungsbild",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Foto ändern",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Erste Schritte",
  "Terra.applicationLayout.utilityDefaults.help": "Hilfe",
  "Terra.applicationLayout.utilityDefaults.logOut": "Abmelden",
  "Terra.applicationLayout.utilityDefaults.menu": "Menü",
  "Terra.applicationLayout.utilityDefaults.security": "Berechtigung",
  "Terra.applicationLayout.utilityDefaults.settings": "Einstellungen",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Nutzungsbestimmungen",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Benutzerdaten",
  "Terra.collapsibleMenuView.more": "Mehr",
  "Terra.form.field.optional": "(Optional)",
  "Terra.form.select.add": "\"{text}\" hinzufügen",
  "Terra.form.select.defaultDisplay": "- Auswählen -",
  "Terra.form.select.noResults": "Keine Übereinstimmungen für \"{text}\"",
  "Terra.menu.back": "Zurück",
  "Terra.menu.close": "Schließen",
  "Terra.notification.dialog.alert": "Benachrichtigung",
  "Terra.notification.dialog.error": "Fehler",
  "Terra.notification.dialog.info": "Informationen",
  "Terra.notification.dialog.success": "Erfolgreich",
  "Terra.notification.dialog.warning": "Warnung",
  "Terra.Overlay.loading": "Ladevorgang...",
  "Terra.timeInput.am": "",
  "Terra.timeInput.display.meridiem": "",
  "Terra.timeInput.hh": "hh",
  "Terra.timeInput.hours": "Stunden",
  "Terra.timeInput.minutes": "Minuten",
  "Terra.timeInput.mm": "mm",
  "Terra.timeInput.pm": "",
  "Terra.timeInput.select.meridiem": ""
};
var areTranslationsLoaded = true;
var locale = 'de';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
