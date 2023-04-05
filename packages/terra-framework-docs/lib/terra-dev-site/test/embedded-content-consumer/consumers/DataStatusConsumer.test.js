"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _xfc = require("xfc");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraEmbeddedContentConsumer = _interopRequireDefault(require("terra-embedded-content-consumer"));
var _ConsumerModule = _interopRequireDefault(require("./Consumer.module.scss"));
var cx = _bind.default.bind(_ConsumerModule.default);
_xfc.Consumer.init();
var createListItem = function createListItem(itemName) {
  var listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(itemName));
  return listItem;
};
var appendLifeCycleStatuses = function appendLifeCycleStatuses(statuses) {
  var frame = document.getElementById('data-embedded-consumer-data-status');
  if (!frame) {
    return;
  }
  var frameContent = frame.contentWindow.document.getElementById('DataStatus-LifeCycleStatuses');
  if (frameContent) {
    statuses.forEach(function (status) {
      frameContent.appendChild(createListItem(status));
    });
  }
};
var options = {
  secret: 'OAuth Secret',
  iframeAttrs: {
    title: 'Embedded application lifecycle example',
    id: 'data-embedded-consumer-data-status'
  }
};
var onMount = function onMount() {
  setTimeout(function () {
    appendLifeCycleStatuses(['Mounted']);
  }, 2000);
};
var onLaunch = function onLaunch() {
  setTimeout(function () {
    appendLifeCycleStatuses(['Launched']);
  }, 3000);
};
var onAuthorize = function onAuthorize() {
  setTimeout(function () {
    appendLifeCycleStatuses(['Authorized']);
  }, 4000);
};
var DataStatusConsumer = function DataStatusConsumer() {
  return /*#__PURE__*/_react.default.createElement(_terraEmbeddedContentConsumer.default, {
    className: cx('iframe'),
    src: "/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/data-status-provider",
    onMount: onMount,
    onLaunch: onLaunch,
    onAuthorize: onAuthorize,
    options: options
  });
};
var _default = DataStatusConsumer;
exports.default = _default;