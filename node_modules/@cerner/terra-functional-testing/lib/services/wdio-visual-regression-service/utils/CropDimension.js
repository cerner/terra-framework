"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var CropDimension = /*#__PURE__*/function () {
  function CropDimension(width, height, x, y) {
    var top = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
    var rotation = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    (0, _classCallCheck2.default)(this, CropDimension);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.top = top;
    this.rotation = rotation;
  }
  (0, _createClass2.default)(CropDimension, [{
    key: "getWidth",
    value: function getWidth() {
      return this.width;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.height;
    }
  }, {
    key: "getX",
    value: function getX() {
      return this.x;
    }
  }, {
    key: "getY",
    value: function getY() {
      return this.y;
    }
  }, {
    key: "getGravity",
    value: function getGravity() {
      return this.top ? 'NorthWest' : 'SouthWest';
    }
  }, {
    key: "getRotation",
    value: function getRotation() {
      return this.rotation;
    }
  }]);
  return CropDimension;
}();
module.exports = CropDimension;