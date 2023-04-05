"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _IconBriefcase = _interopRequireDefault(require("terra-icon/lib/icon/IconBriefcase"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _IconBookmark = _interopRequireDefault(require("terra-icon/lib/icon/IconBookmark"));
var _IconCalendar = _interopRequireDefault(require("terra-icon/lib/icon/IconCalendar"));
var _terraTabs = _interopRequireDefault(require("terra-tabs"));
var _TabContentTemplate = _interopRequireDefault(require("./TabContentTemplate"));
var IconOnlyTabs = function IconOnlyTabs() {
  var searchTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Search",
    icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null),
    isIconOnly: true,
    key: "Search",
    id: "search"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Search",
    id: "searchContent"
  }));
  var briefcaseTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Briefcase",
    icon: /*#__PURE__*/_react.default.createElement(_IconBriefcase.default, null),
    isIconOnly: true,
    key: "Briefcase",
    id: "briefcase"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Briefcase",
    id: "briefcaseContent"
  }));
  var bookmarkTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Bookmark",
    icon: /*#__PURE__*/_react.default.createElement(_IconBookmark.default, null),
    isIconOnly: true,
    key: "Bookmark",
    id: "bookmark"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Bookmark",
    id: "bookmarkContent"
  }));
  var calendarTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Calendar",
    icon: /*#__PURE__*/_react.default.createElement(_IconCalendar.default, null),
    isIconOnly: true,
    key: "Calendar",
    id: "calendar"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Calendar",
    id: "calendarContent"
  }));
  return /*#__PURE__*/_react.default.createElement(_terraTabs.default, {
    id: "iconOnlyTabs"
  }, searchTab, briefcaseTab, bookmarkTab, calendarTab);
};
var _default = IconOnlyTabs;
exports.default = _default;