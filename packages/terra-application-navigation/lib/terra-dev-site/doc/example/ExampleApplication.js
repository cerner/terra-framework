"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _IconPill = _interopRequireDefault(require("terra-icon/lib/icon/IconPill"));
var _IconVisualization = _interopRequireDefault(require("terra-icon/lib/icon/IconVisualization"));
var _IconLightbulb = _interopRequireDefault(require("terra-icon/lib/icon/IconLightbulb"));
var _terraDocs = require("@cerner/terra-docs");
var _ExampleWrapper = _interopRequireDefault(require("./ExampleWrapper"));
var _ApplicationNavigation = _interopRequireDefault(require("../../../ApplicationNavigation"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
/* eslint-disable react/prop-types */

var titleConfig = {
  title: 'Test Title'
};
var userConfig = {
  name: 'Test Name',
  initials: 'TN'
};
var extensionItems = [{
  icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null),
  key: 'item-a',
  text: 'Item A',
  metaData: {
    test: 'a'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconPill.default, null),
  key: 'item-b',
  text: 'Item B',
  metaData: {
    test: 'b'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconVisualization.default, null),
  key: 'item-c',
  text: 'Item C',
  metaData: {
    test: 'c'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconLightbulb.default, null),
  key: 'item-d',
  text: 'Item D',
  metaData: {
    test: 'd'
  }
}];
var navigationItems = [{
  key: '/page_1',
  text: 'Page 1',
  metaData: {
    display: 'Page 1'
  }
}, {
  key: '/page_2',
  text: 'Page 2',
  metaData: {
    display: 'Page 2'
  }
}, {
  key: '/page_3',
  text: 'Page 3',
  metaData: {
    display: 'Page 3'
  }
}, {
  key: '/page_4',
  text: 'Page 4',
  metaData: {
    display: 'Page 4'
  }
}, {
  key: '/page_5',
  text: 'Page 5',
  metaData: {
    display: 'Page 5'
  }
}, {
  key: '/page_6',
  text: 'Page 6',
  metaData: {
    display: 'Page 6'
  }
}, {
  key: '/page_7',
  text: 'Page 7',
  metaData: {
    display: 'Page 7'
  }
}, {
  key: '/page_8',
  text: 'Page 8',
  metaData: {
    display: 'Page 8'
  }
}];
var utilityItems = [{
  icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null),
  key: 'item-a',
  text: 'Item A',
  metaData: {
    test: 'a'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconPill.default, null),
  key: 'item-b',
  text: 'Item B',
  metaData: {
    test: 'b'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconVisualization.default, null),
  key: 'item-c',
  text: 'Item C',
  metaData: {
    test: 'c'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconLightbulb.default, null),
  key: 'item-d',
  text: 'Item D',
  metaData: {
    test: 'd'
  }
}];
var ExampleApplication = function ExampleApplication(_ref) {
  var onAction = _ref.onAction;
  var _useState = (0, _react.useState)(navigationItems[0].key),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  return /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    titleConfig: titleConfig,
    userConfig: userConfig,
    extensionItems: extensionItems,
    onSelectExtensionItem: onAction,
    navigationItems: navigationItems,
    activeNavigationItemKey: activeKey,
    onSelectNavigationItem: function onSelectNavigationItem(key) {
      return setActiveKey(key);
    },
    utilityItems: utilityItems,
    onSelectUtilityItem: onAction,
    onSelectSettings: function onSelectSettings() {
      return onAction('settings');
    },
    onSelectHelp: function onSelectHelp() {
      return onAction('help');
    },
    onSelectLogout: function onSelectLogout() {
      return onAction('logout');
    },
    id: "example-application"
  }, /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
    title: activeKey
  }));
};
var ExampleNavigation = function ExampleNavigation() {
  return /*#__PURE__*/_react.default.createElement(_ExampleWrapper.default, null, /*#__PURE__*/_react.default.createElement(ExampleApplication, null));
};
var _default = ExampleNavigation;
exports.default = _default;