"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var mockData = function () {
  var items = [];
  for (var i = 0; i < 100; i += 1) {
    items.push({
      title: "Item ".concat(i),
      key: "unique-".concat(i)
    });
  }
  return items;
}();
var _default = mockData;
exports.default = _default;