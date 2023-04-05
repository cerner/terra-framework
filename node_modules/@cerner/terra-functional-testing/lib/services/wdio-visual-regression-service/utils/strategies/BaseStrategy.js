"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var CropDimension = require('../CropDimension');
var BaseStrategy = /*#__PURE__*/function () {
  function BaseStrategy(screenDimensions) {
    (0, _classCallCheck2.default)(this, BaseStrategy);
    this.screenDimensions = screenDimensions;
    this.index = {
      x: 0,
      y: 0
    };
    this.setScrollArea(0, 0, this.screenDimensions.getDocumentWidth(), this.screenDimensions.getDocumentHeight());
  }
  (0, _createClass2.default)(BaseStrategy, [{
    key: "setScrollArea",
    value: function setScrollArea(startX, startY, endX, endY) {
      var documentWidth = this.screenDimensions.getDocumentWidth();
      var documentHeight = this.screenDimensions.getDocumentHeight();

      // Capture what is visible if the element is rendered partially off the screen.
      // Capture the entire viewable screen dimension if it is rendered completely off the screen.
      var adjustedStartX = startX > documentWidth || startX < 0 ? 0 : startX;
      var adjustedStartY = startY > documentHeight || startY < 0 ? 0 : startY;
      var adjustedEndX = endX > documentWidth || endX < 0 ? documentWidth : endX;
      var adjustedEndY = endY > documentHeight || endY < 0 ? documentHeight : endY;
      this.area = {
        startX: adjustedStartX,
        startY: adjustedStartY,
        endX: adjustedEndX,
        endY: adjustedEndY
      };
    }
  }, {
    key: "moveToNextScrollPosition",
    value: function moveToNextScrollPosition() {
      if (this.hasNextHorizontalScrollPosition()) {
        this.index.x += 1;
      } else if (this.hasNextVerticalScrollPosition()) {
        this.index.x = 0;
        this.index.y += 1;
      }
    }
  }, {
    key: "hasNextScrollPosition",
    value: function hasNextScrollPosition() {
      return this.hasNextHorizontalScrollPosition() || this.hasNextVerticalScrollPosition();
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "hasNextHorizontalScrollPosition",
    value: function hasNextHorizontalScrollPosition() {
      throw new Error('not implemented, override it');
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "hasNextVerticalScrollPosition",
    value: function hasNextVerticalScrollPosition() {
      throw new Error('not implemented, override it');
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "getScrollPosition",
    value: function getScrollPosition() {
      throw new Error('not implemented, override it');
    }

    // eslint-disable-next-line class-methods-use-this
  }, {
    key: "getCropDimensions",
    value: function getCropDimensions() {
      throw new Error('not implemented, override it');
    }
  }, {
    key: "createCropDimensions",
    value: function createCropDimensions(width, height, x, y, top, rotation) {
      var adjustedWidth = this.screenDimensions.applyScaleFactor(width);
      var adjustedHeight = this.screenDimensions.applyScaleFactor(height);
      return new CropDimension(adjustedWidth, adjustedHeight, x, y, top, rotation);
    }
  }]);
  return BaseStrategy;
}();
module.exports = BaseStrategy;