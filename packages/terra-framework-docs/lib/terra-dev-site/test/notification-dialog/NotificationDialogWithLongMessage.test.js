"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraNotificationDialog = _interopRequireDefault(require("terra-notification-dialog"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nMaecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.\nInteger congue feugiat ultricies.\nNunc non mauris sed tellus cursus vestibulum nec quis ipsum.\nVivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.\nCras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.\nDonec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.\nNam vehicula, arcu vitae egestas porttitor,\nturpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nMaecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.\nInteger congue feugiat ultricies.\nNunc non mauris sed tellus cursus vestibulum nec quis ipsum.\nVivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.\nCras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.\nDonec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.\nNam vehicula, arcu vitae egestas porttitor,\nturpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nMaecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.\nInteger congue feugiat ultricies.\nNunc non mauris sed tellus cursus vestibulum nec quis ipsum.\nVivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.\nCras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.\nDonec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.\nNam vehicula, arcu vitae egestas porttitor\nturpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nMaecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.\nInteger congue feugiat ultricies.\nNunc non mauris sed tellus cursus vestibulum nec quis ipsum.\nVivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.\nCras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.\nDonec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.\nNam vehicula, arcu vitae egestas porttitor,\nturpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nMaecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.\nInteger congue feugiat ultricies.\nNunc non mauris sed tellus cursus vestibulum nec quis ipsum.\nVivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.\nCras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.\nDonec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.\nNam vehicula, arcu vitae egestas porttitor,\nturpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.\nInteger congue feugiat ultricies.\nNunc non mauris sed tellus cursus vestibulum nec quis ipsum.\nVivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.\nCras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.\nDonec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.\nNam vehicula, arcu vitae egestas porttitor,\nturpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nMaecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.\nInteger congue feugiat ultricies.\nNunc non mauris sed tellus cursus vestibulum nec quis ipsum.\nVivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.\nCras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.\nDonec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.\nNam vehicula, arcu vitae egestas porttitor\nturpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nMaecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.\nInteger congue feugiat ultricies.\nNunc non mauris sed tellus cursus vestibulum nec quis ipsum.\nVivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.\nCras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.\nDonec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.\nNam vehicula, arcu vitae egestas porttitor,\nturpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.\nLorem ipsum dolor sit amet, consectetur adipiscing elit.\nMaecenas molestie in lorem vel facilisis. Quisque ac enim nec lectus malesuada faucibus.\nInteger congue feugiat ultricies.\nNunc non mauris sed tellus cursus vestibulum nec quis ipsum.\nVivamus ornare magna justo, et volutpat tortor congue ut. Nulla facilisi.\nCras in venenatis turpis. Nullam id odio justo. Etiam vehicula lectus vel purus consectetur cursus id sit amet diam.\nDonec facilisis dui non orci hendrerit pharetra. Suspendisse blandit dictum turpis, in consectetur ipsum hendrerit eget.\nNam vehicula, arcu vitae egestas porttitor,\nturpis nisi pulvinar neque, ut lacinia urna purus sit amet elit.";
var CompleteNotificationDialogWithLongMessage = function CompleteNotificationDialogWithLongMessage() {
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var handleOpenModal = function handleOpenModal() {
    setIsOpen(true);
  };
  var handleCloseModal = function handleCloseModal() {
    setIsOpen(false);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isOpen && /*#__PURE__*/_react.default.createElement(_terraNotificationDialog.default, {
    variant: "hazard-high",
    dialogTitle: "This is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the titleThis is the title",
    startMessage: message,
    acceptAction: {
      text: 'accept',
      onClick: handleCloseModal
    },
    rejectAction: {
      text: 'reject',
      onClick: handleCloseModal
    },
    buttonOrder: "acceptFirst",
    emphasizedAction: "accept"
  }), /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    id: "trigger-notification-dialog",
    text: "Trigger NotificationDialog",
    onClick: handleOpenModal
  }));
};
var _default = CompleteNotificationDialogWithLongMessage;
exports.default = _default;