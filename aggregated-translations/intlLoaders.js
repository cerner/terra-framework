'use strict';

var loadEnIntl = function loadEnIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/en.js');
  }, 'en-intl-local');
};

var loadEnAUIntl = function loadEnAUIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/en-AU.js');
  }, 'en-AU-intl-local');
};

var loadEnCAIntl = function loadEnCAIntl() {
  return require.ensure([], function (require) {
    return require('intl/locale-data/jsonp/en-CA.js');
  }, 'en-CA-intl-local');
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
  'en': loadEnIntl,
  'en-AU': loadEnAUIntl,
  'en-CA': loadEnCAIntl,
  'en-US': loadEnUSIntl,
  'en-GB': loadEnGBIntl,
  'es': loadEsIntl,
  'es-US': loadEsUSIntl,
  'es-ES': loadEsESIntl,
  'de': loadDeIntl,
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