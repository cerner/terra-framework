"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireWildcard(require("terra-infinite-list/lib/index"));
var _terraDocs = require("@cerner/terra-docs");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _mockSection = _interopRequireDefault(require("./mock-data/mock-section"));
var _MyExampleContainer = _interopRequireDefault(require("../common/MyExampleContainer"));
var _InfiniteListDocExampleCommonModule = _interopRequireDefault(require("../example/InfiniteListDocExampleCommon.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_InfiniteListDocExampleCommonModule.default);
var createListItem = function createListItem(itemData) {
  return /*#__PURE__*/_react.default.createElement(_index.Item, {
    key: itemData.key
  }, /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
    title: itemData.title,
    className: cx('placeholder')
  }));
};
var createSection = function createSection(sectionData) {
  var section = [/*#__PURE__*/_react.default.createElement(_index.SectionHeader, {
    key: sectionData.key,
    title: sectionData.title
  })];
  sectionData.childItems.forEach(function (childItem) {
    return section.push(createListItem(childItem));
  });
  return section;
};
var createSections = function createSections(data) {
  return data.map(function (section) {
    return createSection(section);
  });
};
var InfiniteListSection = function InfiniteListSection() {
  return /*#__PURE__*/_react.default.createElement(_MyExampleContainer.default, null, /*#__PURE__*/_react.default.createElement(_index.default, {
    dividerStyle: "standard",
    isFinishedLoading: true,
    ariaLabel: "Section"
  }, createSections(_mockSection.default)));
};
var _default = InfiniteListSection;
exports.default = _default;