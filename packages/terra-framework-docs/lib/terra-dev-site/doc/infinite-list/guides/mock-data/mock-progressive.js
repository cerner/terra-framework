"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var mockData = function mockData(pageKey) {
  var isFinalPage = false;
  var nextPageKey = (pageKey >= 0 ? pageKey : 0) + 1;
  if (nextPageKey > 9) {
    isFinalPage = true;
  }
  var items = [];
  for (var i = 0; i < 10; i += 1) {
    items.push({
      title: "Item ".concat(pageKey * 10 + i),
      key: "unique-".concat(pageKey * 10 + i)
    });
  }
  return {
    nextPageKey: nextPageKey,
    items: items,
    isFinalPage: isFinalPage
  };
};
var mockRequest = function mockRequest(pageKey) {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      resolve(mockData(pageKey));
    }, 2000);
  });
};
var _default = mockRequest;
exports.default = _default;