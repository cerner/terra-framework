"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var ScreenDimensions = /*#__PURE__*/function () {
  function ScreenDimensions(options) {
    var browser = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, ScreenDimensions);
    var html = options.html,
      body = options.body,
      window = options.window;
    var isIOS = browser.isIOS;
    this.isIOS = isIOS;
    this.viewportWidth = window.innerWidth || html.clientWidth || 0;
    this.viewportHeight = window.innerHeight || html.clientHeight || 0;
    this.documentWidth = html.scrollWidth;
    this.documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    var screenMax = Math.max(window.screenWidth, window.screenHeight);
    var screenMin = Math.min(window.screenWidth, window.screenHeight);
    this.screenWidth = this.isLandscape() ? screenMax : screenMin;
    this.screenHeight = this.isLandscape() ? screenMin : screenMax;
    var innerMax = Math.max(window.innerWidth, window.innerHeight);
    var innerMin = Math.min(window.innerWidth, window.innerHeight);
    this.innerWidth = this.isLandscape() ? innerMax : innerMin;
    this.innerHeight = this.isLandscape() ? innerMin : innerMax;
    this.pixelRatio = window.pixelRatio;
    this.orientation = window.orientation;
    if (this.isIOS && this.isLandscape() && this.getViewportHeight() - 20 === this.getInnerHeight()) {
      // iOS 7 has a 20px bug in landscape mode
      this.viewportHeight = this.getInnerHeight();
    }
    if (this.isIOS && this.isLandscape() && this.getDocumentHeight() - 20 === this.getInnerHeight()) {
      // iOS 7 has a 20px bug in landscape mode
      this.documentHeight = this.getInnerHeight();
    }
  }
  (0, _createClass2.default)(ScreenDimensions, [{
    key: "getViewportWidth",
    value: function getViewportWidth() {
      return this.viewportWidth;
    }
  }, {
    key: "getViewportHeight",
    value: function getViewportHeight() {
      return this.viewportHeight;
    }
  }, {
    key: "isLandscape",
    value: function isLandscape() {
      return this.getViewportWidth() > this.getViewportHeight();
    }
  }, {
    key: "getDocumentWidth",
    value: function getDocumentWidth() {
      return this.documentWidth;
    }
  }, {
    key: "getDocumentHeight",
    value: function getDocumentHeight() {
      return this.documentHeight;
    }
  }, {
    key: "getScreenWidth",
    value: function getScreenWidth() {
      return this.screenWidth;
    }
  }, {
    key: "getScreenHeight",
    value: function getScreenHeight() {
      return this.screenHeight;
    }
  }, {
    key: "getInnerWidth",
    value: function getInnerWidth() {
      return this.innerWidth;
    }
  }, {
    key: "getInnerHeight",
    value: function getInnerHeight() {
      return this.innerHeight;
    }
  }, {
    key: "getPixelRatio",
    value: function getPixelRatio() {
      return this.pixelRatio;
    }
  }, {
    key: "getOrientation",
    value: function getOrientation() {
      return this.orientation;
    }
  }, {
    key: "getScale",
    value: function getScale() {
      if (this.isIOS) {
        return this.getScreenWidth() / this.getViewportWidth();
      }
      return 1;
    }
  }, {
    key: "applyScaleFactor",
    value: function applyScaleFactor(widthOrHeight) {
      return Math.round(widthOrHeight * this.getScale());
    }
  }]);
  return ScreenDimensions;
}();
module.exports = ScreenDimensions;