"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _objectDestructuringEmpty2 = _interopRequireDefault(require("@babel/runtime/helpers/objectDestructuringEmpty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _require = require('@cerner/terra-cli'),
  Logger = _require.Logger;
var which = require('which');
var _require2 = require('./jimp'),
  jimp = (0, _extends2.default)({}, ((0, _objectDestructuringEmpty2.default)(_require2), _require2));
var _require3 = require('./gm'),
  gm = (0, _extends2.default)({}, ((0, _objectDestructuringEmpty2.default)(_require3), _require3));
var logger = new Logger({
  prefix: '[wdio-visual-regression-service:image]'
});
var gmInstalled = false;
try {
  gmInstalled = !!which.sync('gm');
} catch (e) {
  // do nothing
}
logger.verbose("Use image processing library: ".concat(gmInstalled ? 'GraphicsMagick' : 'Jimp'));
var _ref = gmInstalled ? gm : jimp,
  cropImage = _ref.cropImage,
  mergeImages = _ref.mergeImages,
  scaleImage = _ref.scaleImage;
module.exports = {
  cropImage: cropImage,
  scaleImage: scaleImage,
  mergeImages: mergeImages
};