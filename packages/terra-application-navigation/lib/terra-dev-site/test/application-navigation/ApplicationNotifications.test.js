"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _IconPill = _interopRequireDefault(require("terra-icon/lib/icon/IconPill"));
var _IconVisualization = _interopRequireDefault(require("terra-icon/lib/icon/IconVisualization"));
var _IconLightbulb = _interopRequireDefault(require("terra-icon/lib/icon/IconLightbulb"));
var _ApplicationNavigation = _interopRequireDefault(require("../../../ApplicationNavigation"));
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
  key: 'item-e',
  text: 'Item E',
  metaData: {
    test: 'e'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconPill.default, null),
  key: 'item-f',
  text: 'Item F',
  metaData: {
    test: 'f'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconVisualization.default, null),
  key: 'item-g',
  text: 'Item G',
  metaData: {
    test: 'g'
  }
}, {
  icon: /*#__PURE__*/_react.default.createElement(_IconLightbulb.default, null),
  key: 'item-h',
  text: 'Item H',
  metaData: {
    test: 'h'
  }
}];
var notifications = {
  '/page_2': 5,
  'item-b': 10,
  '/page_8': 4
};

/* eslint-disable no-alert */
var handleItemSelection = function handleItemSelection(key, metaData) {
  alert("itemKey: ".concat(key, ", metaData: ").concat(metaData.test));
};
/* eslint-enable no-alert */

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
var ApplicationNotificationsTest = function ApplicationNotificationsTest() {
  return /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    titleConfig: titleConfig,
    userConfig: userConfig,
    notifications: notifications,
    extensionItems: extensionItems,
    onSelectExtensionItem: handleItemSelection,
    navigationItems: navigationItems,
    activeNavigationItemKey: "/page_1",
    onSelectNavigationItem: handleItemSelection,
    utilityItems: utilityItems,
    onSelectUtilityItem: handleItemSelection,
    onSelectSettings: function onSelectSettings() {
      return alert('Settings Selected');
    } // eslint-disable-line no-alert
    ,
    onSelectHelp: function onSelectHelp() {
      return alert('Help Selected');
    } // eslint-disable-line no-alert
    ,
    onSelectLogout: function onSelectLogout() {
      return alert('Logout Selected');
    } // eslint-disable-line no-alert
  });
};
var _default = ApplicationNotificationsTest;
exports.default = _default;