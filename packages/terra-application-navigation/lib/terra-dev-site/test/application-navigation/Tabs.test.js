"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ApplicationNavigation = _interopRequireDefault(require("../../../ApplicationNavigation"));
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
}, {
  key: '/page_9',
  text: 'Page 9',
  metaData: {
    test: '9'
  }
}, {
  key: '/page_10',
  text: 'Page 10',
  metaData: {
    test: '10'
  }
}, {
  key: '/page_11',
  text: 'Page 11',
  metaData: {
    test: '11'
  }
}];

/* eslint-disable no-alert */
var handleItemSelection = function handleItemSelection(key, metaData) {
  alert("itemKey: ".concat(key, ", metaData: ").concat(metaData.test));
};
/* eslint-enable no-alert */

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
var TabsTest = function TabsTest() {
  return /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    navigationItems: navigationItems,
    activeNavigationItemKey: "/page_1",
    onSelectNavigationItem: handleItemSelection
  });
};
var _default = TabsTest;
exports.default = _default;