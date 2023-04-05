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
var _ApplicationNavigation = _interopRequireDefault(require("../../../ApplicationNavigation"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
    test: '1'
  }
}, {
  key: '/page_2',
  text: 'Page 2',
  metaData: {
    test: '2'
  }
}, {
  key: '/page_3',
  text: 'Page 3',
  metaData: {
    test: '3'
  }
}, {
  key: '/page_4',
  text: 'Page 4',
  metaData: {
    test: '4'
  }
}, {
  key: '/page_5',
  text: 'Page 5',
  metaData: {
    test: '5'
  }
}, {
  key: '/page_6',
  text: 'Page 6',
  metaData: {
    test: '6'
  }
}, {
  key: '/page_7',
  text: 'Page 7',
  metaData: {
    test: '7'
  }
}, {
  key: '/page_8',
  text: 'Page 8',
  metaData: {
    test: '8'
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

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
function ApplicationNavigationTest() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isDrawerOpen = _useState2[0],
    setDrawerOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(''),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    functionType = _useState4[0],
    setFunctionType = _useState4[1];

  /* eslint-disable no-alert */
  var handleItemSelection = function handleItemSelection(key, metaData) {
    alert("itemKey: ".concat(key, ", metaData: ").concat(metaData.test));
  };
  /* eslint-enable no-alert */

  var handleOnDrawerMenuStateChange = function handleOnDrawerMenuStateChange(value) {
    setDrawerOpen(value);
  };
  return /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    titleConfig: titleConfig,
    userConfig: userConfig,
    extensionItems: extensionItems,
    onSelectExtensionItem: handleItemSelection,
    navigationItems: navigationItems,
    activeNavigationItemKey: "/page_1",
    onSelectNavigationItem: handleItemSelection,
    utilityItems: utilityItems,
    onSelectUtilityItem: handleItemSelection,
    onSelectSettings: function onSelectSettings() {
      return setFunctionType('onSelectSettings was called');
    },
    onSelectHelp: function onSelectHelp() {
      return setFunctionType('onSelectHelp was called');
    },
    onSelectLogout: function onSelectLogout() {
      return setFunctionType('onSelectLogout was called');
    },
    onDrawerMenuStateChange: handleOnDrawerMenuStateChange
  }, isDrawerOpen ? /*#__PURE__*/_react.default.createElement("div", null, " The drawer is open") : null, /*#__PURE__*/_react.default.createElement("p", null, functionType));
}
var _default = ApplicationNavigationTest;
exports.default = _default;