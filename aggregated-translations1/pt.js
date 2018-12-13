'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _pt = require('react-intl/locale-data/pt');

var _pt2 = _interopRequireDefault(_pt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_pt2.default);

var messages = {
  "Terra.actionHeader.back": "Voltar",
  "Terra.actionHeader.close": "Fechar",
  "Terra.actionHeader.maximize": "Maximizar",
  "Terra.actionHeader.minimize": "Minimizar",
  "Terra.actionHeader.next": "Próximo",
  "Terra.actionHeader.previous": "Anterior",
  "Terra.ajax.error": "Falha ao carregar conteúdo.",
  "Terra.application.tabs.more": "Mais",
  "Terra.application.utility.back": "Voltar",
  "Terra.application.utility.button": "Botão utilidade",
  "Terra.application.utility.close": "Fechar",
  "Terra.application.utility.menu": "Menu utilidade",
  "Terra.ApplicationHeaderLayout.SkipToContent": "Pular para conteúdo",
  "Terra.applicationLayout.applicationHeader.menuToggleLabel": "Alternar menu",
  "Terra.applicationLayout.utilityDefaults.about": "Sobre",
  "Terra.applicationLayout.utilityDefaults.appearance": "Aparência",
  "Terra.applicationLayout.utilityDefaults.changePhoto": "Alterar foto",
  "Terra.applicationLayout.utilityDefaults.gettingStarted": "Primeiros passos",
  "Terra.applicationLayout.utilityDefaults.help": "Ajuda",
  "Terra.applicationLayout.utilityDefaults.logOut": "Logoff",
  "Terra.applicationLayout.utilityDefaults.menu": "Menu",
  "Terra.applicationLayout.utilityDefaults.security": "Segurança",
  "Terra.applicationLayout.utilityDefaults.settings": "Configurações",
  "Terra.applicationLayout.utilityDefaults.termsOfUse": "Termos de uso",
  "Terra.applicationLayout.utilityDefaults.userInformation": "Informações do usuário",
  "Terra.collapsibleMenuView.more": "Mais",
  "Terra.form.field.optional": "(opcional)",
  "Terra.form.select.add": "Adicionar \"{text}\"",
  "Terra.form.select.defaultDisplay": "- Selecione -",
  "Terra.form.select.noResults": "Não há resultados para \"{text}\"",
  "Terra.menu.back": "Voltar",
  "Terra.menu.close": "Fechar",
  "Terra.notification.dialog.alert": "Alerta",
  "Terra.notification.dialog.error": "Erro",
  "Terra.notification.dialog.info": "Informações",
  "Terra.notification.dialog.success": "Êxito",
  "Terra.notification.dialog.warning": "Advertência",
  "Terra.Overlay.loading": "Carregando...",
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
var locale = 'pt';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
