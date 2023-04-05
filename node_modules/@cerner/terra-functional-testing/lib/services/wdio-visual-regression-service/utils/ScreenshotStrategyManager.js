"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _require = require('@cerner/terra-cli'),
  Logger = _require.Logger;
var MergeViewportStrategy = require('./strategies/MergeScreenshotStrategy');
var _require2 = require('./strategies/TrimAndMergeScreenshotStrategy'),
  TrimAndMergeScreenshotStrategy = _require2.TrimAndMergeScreenshotStrategy;
var logger = new Logger({
  prefix: '[wdio-visual-regression-service:ScreenshotStrategyManager]'
});
var ScreenshotStrategyManager = /*#__PURE__*/function () {
  function ScreenshotStrategyManager() {
    (0, _classCallCheck2.default)(this, ScreenshotStrategyManager);
  }
  (0, _createClass2.default)(ScreenshotStrategyManager, null, [{
    key: "getStrategy",
    value: function getStrategy(browser, screenDimensions) {
      var isIOS = browser.isIOS;
      if (isIOS) {
        logger.verbose('use iOS Trim and Merge viewport strategy');
        return new TrimAndMergeScreenshotStrategy(screenDimensions);
      }
      logger.verbose('use merge viewport strategy');
      return new MergeViewportStrategy(screenDimensions);
    }
  }]);
  return ScreenshotStrategyManager;
}();
module.exports = ScreenshotStrategyManager;