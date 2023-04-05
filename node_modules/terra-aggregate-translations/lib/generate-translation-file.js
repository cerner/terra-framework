const sortMessages = (messages) => {
  const sortedKeys = Object.keys(messages).sort((a, b) => {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();
    if (lowerA === lowerB) {
      return 0;
    }
    return lowerA < lowerB ? -1 : 1;
  });

  const sortedMessages = {};
  sortedKeys.forEach((messageKey) => {
    sortedMessages[messageKey] = messages[messageKey];
    return undefined;
  });
  return sortedMessages;
};

const translationFile = (locale, baseLocale, messages) => (
  `'use strict';\n
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messages = exports.locale = exports.areTranslationsLoaded = undefined;

var _reactIntl = require('react-intl');

var _${baseLocale} = require('react-intl/locale-data/${baseLocale}');

var _${baseLocale}2 = _interopRequireDefault(_${baseLocale});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _reactIntl.addLocaleData)(_${baseLocale}2.default);

var messages = ${JSON.stringify(messages, null, 2)};
var areTranslationsLoaded = true;
var locale = '${locale}';
exports.areTranslationsLoaded = areTranslationsLoaded;
exports.locale = locale;
exports.messages = messages;
`);

const v5TranslationFile = (messages) => (
  `'use strict';\n
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = void 0;

  var _default = ${JSON.stringify(messages, null, 2)};
  exports.default = _default;
`);

const generateTranslationFile = (locale, messages, isReactIntlV5) => {
  const sortedMessages = sortMessages(messages);
  const baseLocale = locale.split('-')[0];
  if (isReactIntlV5) {
    return v5TranslationFile(sortedMessages);
  }
  return translationFile(locale, baseLocale, sortedMessages);
};

module.exports = generateTranslationFile;
