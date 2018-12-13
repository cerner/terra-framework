'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _es = require('react-intl/locale-data/es');

var _es2 = _interopRequireDefault(_es);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_es2.default);

var messages = {
  "Terra.actionHeader.back": "Retroceder",
  "Terra.actionHeader.close": "Cerrar",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.minimize": "Minimizar",
  "Terra.actionHeader.next": "Siguiente",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Error al cargar el contenido.",
  "Terra.application.tabs.more": "Más",
  "Terra.application.utility.back": "Atrás",
  "Terra.application.utility.button": "Botón de utilidades",
  "Terra.application.utility.close": "Cerrar",
  "Terra.application.utility.menu": "Menú de utilidades",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Saltar al contenido",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Menú de alternancia",
  "Terra.applicationLayout.utilityDefaults.about": "Acerca de",
  "Terra.applicationLayout.utilityDefaults.appearance": "Apariencia",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Cambiar foto",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Introducción",
  "Terra.applicationLayout.utilityDefaults.help": "Ayuda",
  "Terra.applicationLayout.utilityDefaults.logOut": "Cerrar sesión",
  "Terra.applicationLayout.utilityDefaults.menu": "Menú",
  "Terra.applicationLayout.utilityDefaults.security": "Seguridad",
  "Terra.applicationLayout.utilityDefaults.settings": "Configuración",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Condiciones de uso",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Información de usuario",
  "Terra.collapsibleMenuView.more": "Más",
  "Terra.form.field.optional": "(opcional)",
  "Terra.form.select.add": "Agregar \"{text}\"",
  "Terra.form.select.defaultDisplay": "- Predeterminado -",
  "Terra.form.select.noResults": "No se encontró ningún resultado que coincida para \"{text}\"",
  "Terra.menu.back": "Retroceder",
  "Terra.menu.close": "Cerrar",
  "Terra.notification.dialog.alert": "Alerta",
  "Terra.notification.dialog.error": "Error",
  "Terra.notification.dialog.info": "Información",
  "Terra.notification.dialog.success": "Éxito",
  "Terra.notification.dialog.warning": "Advertencia",
  "Terra.Overlay.loading": "Cargando...",
  "Terra.timeInput.am": "",
  "Terra.timeInput.display.meridiem": "",
  "Terra.timeInput.hh": "HH",
  "Terra.timeInput.hours": "Horas",
  "Terra.timeInput.minutes": "Minutos",
  "Terra.timeInput.mm": "mm",
  "Terra.timeInput.pm": "",
  "Terra.timeInput.select.meridiem": ""
};
var areTranslationsLoaded = true;
var locale = 'es';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
