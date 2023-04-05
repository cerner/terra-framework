"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _IconBriefcase = _interopRequireDefault(require("terra-icon/lib/icon/IconBriefcase"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _IconBookmark = _interopRequireDefault(require("terra-icon/lib/icon/IconBookmark"));
var _IconCalendar = _interopRequireDefault(require("terra-icon/lib/icon/IconCalendar"));
var _terraTabs = _interopRequireDefault(require("terra-tabs"));
var _TabContentTemplate = _interopRequireDefault(require("./TabContentTemplate"));
var _TabExampleModule = _interopRequireDefault(require("./common/TabExample.module.scss"));
var propTypes = {
  responsiveTo: _propTypes.default.string
};
var cx = _bind.default.bind(_TabExampleModule.default);
var IconOnlyTabs = function IconOnlyTabs(props) {
  var searchTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Search",
    icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null),
    isIconOnly: true,
    key: "Search"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Search"
  }));
  var briefcaseTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Briefcase",
    icon: /*#__PURE__*/_react.default.createElement(_IconBriefcase.default, null),
    isIconOnly: true,
    key: "Briefcase"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Briefcase"
  }));
  var bookmarkTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Bookmark",
    icon: /*#__PURE__*/_react.default.createElement(_IconBookmark.default, null),
    isIconOnly: true,
    key: "Bookmark"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Bookmark"
  }));
  var calendarTab = /*#__PURE__*/_react.default.createElement(_terraTabs.default.Pane, {
    label: "Calendar",
    icon: /*#__PURE__*/_react.default.createElement(_IconCalendar.default, null),
    isIconOnly: true,
    key: "Calendar"
  }, /*#__PURE__*/_react.default.createElement(_TabContentTemplate.default, {
    label: "Calendar"
  }));
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraTabs.default, {
    responsiveTo: props.responsiveTo
  }, searchTab, briefcaseTab, bookmarkTab, calendarTab));
};
IconOnlyTabs.propTypes = propTypes;
var _default = IconOnlyTabs;
exports.default = _default;