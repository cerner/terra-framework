'use strict';

var loadArIntl = function loadArIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/ar.js');
  }, 'ar-intl-local');
};

var loadEnIntl = function loadEnIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/en.js');
  }, 'en-intl-local');
};

var loadEnUSIntl = function loadEnUSIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/en-US.js');
  }, 'en-US-intl-local');
};

var loadEnGBIntl = function loadEnGBIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/en-GB.js');
  }, 'en-GB-intl-local');
};

var loadEsIntl = function loadEsIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/es.js');
  }, 'es-intl-local');
};

var loadEsUSIntl = function loadEsUSIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/es-US.js');
  }, 'es-US-intl-local');
};

var loadEsESIntl = function loadEsESIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/es-ES.js');
  }, 'es-ES-intl-local');
};

var loadDeIntl = function loadDeIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/de.js');
  }, 'de-intl-local');
};

var loadFiFIIntl = function loadFiFIIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/fi-FI.js');
  }, 'fi-FI-intl-local');
};

var loadFrIntl = function loadFrIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/fr.js');
  }, 'fr-intl-local');
};

var loadFrFRIntl = function loadFrFRIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/fr-FR.js');
  }, 'fr-FR-intl-local');
};

var loadNlIntl = function loadNlIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/nl.js');
  }, 'nl-intl-local');
};

var loadNlBEIntl = function loadNlBEIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/nl-BE.js');
  }, 'nl-BE-intl-local');
};

var loadPtIntl = function loadPtIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/pt.js');
  }, 'pt-intl-local');
};

var loadPtBRIntl = function loadPtBRIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/pt-BR.js');
  }, 'pt-BR-intl-local');
};

var loadSvIntl = function loadSvIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/sv.js');
  }, 'sv-intl-local');
};

var loadSvSEIntl = function loadSvSEIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/sv-SE.js');
  }, 'sv-SE-intl-local');
};

var intlLoaders = {
  'ar': loadArIntl,
  'en': loadEnIntl,
  'en-US': loadEnUSIntl,
  'en-GB': loadEnGBIntl,
  'es': loadEsIntl,
  'es-US': loadEsUSIntl,
  'es-ES': loadEsESIntl,
  'de': loadDeIntl,
  'fi-FI': loadFiFIIntl,
  'fr': loadFrIntl,
  'fr-FR': loadFrFRIntl,
  'nl': loadNlIntl,
  'nl-BE': loadNlBEIntl,
  'pt': loadPtIntl,
  'pt-BR': loadPtBRIntl,
  'sv': loadSvIntl,
  'sv-SE': loadSvSEIntl
};

module.exports = intlLoaders;