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
var _IconManufacturer = _interopRequireDefault(require("terra-icon/lib/icon/IconManufacturer"));
var _IconVisualization = _interopRequireDefault(require("terra-icon/lib/icon/IconVisualization"));
var _IconScratchPad = _interopRequireDefault(require("terra-icon/lib/icon/IconScratchPad"));
var _IconSave = _interopRequireDefault(require("terra-icon/lib/icon/IconSave"));
var _IconPrinter = _interopRequireDefault(require("terra-icon/lib/icon/IconPrinter"));
var _IconBookmark = _interopRequireDefault(require("terra-icon/lib/icon/IconBookmark"));
var _IconAttachment = _interopRequireDefault(require("terra-icon/lib/icon/IconAttachment"));
var _PageContent = _interopRequireDefault(require("../common/PageContent"));
var _ApplicationNavigation = _interopRequireDefault(require("../../../ApplicationNavigation"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var titleConfig = {
  title: 'My Application'
};
var userConfig = {
  name: 'My Name',
  initials: 'MN'
};
var extensionItems = [{
  icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null),
  key: 'search',
  text: 'Search',
  metaData: {
    test: 'search'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconManufacturer.default, null),
  key: 'manufacturer',
  text: 'View Manufacturers',
  metaData: {
    test: 'manufacturers'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconVisualization.default, null),
  key: 'trends',
  text: 'View Trends',
  metaData: {
    test: 'trends'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconScratchPad.default, null),
  key: 'inbox',
  text: 'View Inbox',
  metaData: {
    test: 'inbox'
  }
}];
var navigationItems = [{
  key: '/home',
  text: 'Home',
  metaData: {
    display: 'Home'
  }
}, {
  key: '/products',
  text: 'Products',
  metaData: {
    display: 'Products'
  }
}, {
  key: '/management',
  text: 'Management',
  metaData: {
    display: 'Management'
  }
}, {
  key: '/documentation',
  text: 'Documentation',
  metaData: {
    display: 'Documentation'
  }
}, {
  key: '/continuing_education',
  text: 'Continuing Education',
  metaData: {
    display: 'Continuing Education'
  }
}, {
  key: '/support',
  text: 'Support',
  metaData: {
    display: 'Support'
  }
}, {
  key: '/resources',
  text: 'Resources',
  metaData: {
    display: 'Resources'
  }
}, {
  key: '/archives',
  text: 'Archives',
  metaData: {
    display: 'Archives'
  }
}];
var utilityItems = [{
  icon: /*#__PURE__*/_react.default.createElement(_IconSave.default, null),
  key: 'save',
  text: 'Save',
  metaData: {
    test: 'save'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconPrinter.default, null),
  key: 'print',
  text: 'Print',
  metaData: {
    test: 'print'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconBookmark.default, null),
  key: 'bookmark',
  text: 'Bookmark',
  metaData: {
    test: 'bookmark'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconAttachment.default, null),
  key: 'attachment',
  text: 'Add Attachment',
  metaData: {
    test: 'attachment'
  }
}];

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
var StatedDemo = function StatedDemo() {
  var _useState = (0, _react.useState)(navigationItems[0].key),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    lastActionKey = _useState4[0],
    setLastActionKey = _useState4[1];
  function handleItemSelection(key) {
    setLastActionKey("Current Action: ".concat(key));
  }
  return /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    titleConfig: titleConfig,
    userConfig: userConfig,
    extensionItems: extensionItems,
    onSelectExtensionItem: handleItemSelection,
    navigationItems: navigationItems,
    activeNavigationItemKey: activeKey,
    onSelectNavigationItem: function onSelectNavigationItem(key) {
      return setActiveKey(key);
    },
    utilityItems: utilityItems,
    onSelectUtilityItem: handleItemSelection,
    onSelectSettings: function onSelectSettings() {
      return handleItemSelection('settings');
    },
    onSelectHelp: function onSelectHelp() {
      return handleItemSelection('help');
    },
    onSelectLogout: function onSelectLogout() {
      return handleItemSelection('logout');
    }
  }, /*#__PURE__*/_react.default.createElement(_PageContent.default, {
    title: activeKey,
    subtitle: lastActionKey
  }));
};
var _default = StatedDemo;
exports.default = _default;