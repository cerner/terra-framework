'use strict';

var loadEnTranslations = function loadEnTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./en.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'en-translations');
};

var loadEnAUTranslations = function loadEnAUTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./en-AU.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'en-AU-translations');
};

var loadEnCATranslations = function loadEnCATranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./en-CA.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'en-CA-translations');
};

var loadEnUSTranslations = function loadEnUSTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./en-US.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'en-US-translations');
};

var loadEnGBTranslations = function loadEnGBTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./en-GB.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'en-GB-translations');
};

var loadEsTranslations = function loadEsTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./es.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'es-translations');
};

var loadEsUSTranslations = function loadEsUSTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./es-US.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'es-US-translations');
};

var loadEsESTranslations = function loadEsESTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./es-ES.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'es-ES-translations');
};

var loadDeTranslations = function loadDeTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./de.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'de-translations');
};

var loadFrTranslations = function loadFrTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./fr.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'fr-translations');
};

var loadFrFRTranslations = function loadFrFRTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./fr-FR.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'fr-FR-translations');
};

var loadNlTranslations = function loadNlTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./nl.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'nl-translations');
};

var loadNlBETranslations = function loadNlBETranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./nl-BE.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'nl-BE-translations');
};

var loadPtTranslations = function loadPtTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./pt.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'pt-translations');
};

var loadPtBRTranslations = function loadPtBRTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./pt-BR.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'pt-BR-translations');
};

var loadSvTranslations = function loadSvTranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./sv.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'sv-translations');
};

var loadSvSETranslations = function loadSvSETranslations(callback, scope) {
  return require.ensure([], function (require) {
    // eslint-disable-next-line
    var i18n = require('./sv-SE.js');
    callback.call(scope, i18n);
    return i18n;
  }, 'sv-SE-translations');
};

var translationsLoaders = {
  'en': loadEnTranslations,
  'en-AU': loadEnAUTranslations,
  'en-CA': loadEnCATranslations,
  'en-US': loadEnUSTranslations,
  'en-GB': loadEnGBTranslations,
  'es': loadEsTranslations,
  'es-US': loadEsUSTranslations,
  'es-ES': loadEsESTranslations,
  'de': loadDeTranslations,
  'fr': loadFrTranslations,
  'fr-FR': loadFrFRTranslations,
  'nl': loadNlTranslations,
  'nl-BE': loadNlBETranslations,
  'pt': loadPtTranslations,
  'pt-BR': loadPtBRTranslations,
  'sv': loadSvTranslations,
  'sv-SE': loadSvSETranslations
};

module.exports = translationsLoaders;