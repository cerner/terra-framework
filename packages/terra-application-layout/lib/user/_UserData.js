"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _UserDataModule = _interopRequireDefault(require("./UserData.module.scss"));
var _excluded = ["userDetail", "userName", "userPhoto"];
var cx = _bind.default.bind(_UserDataModule.default);
var propTypes = {
  /**
   * More information about the user.
   * Displayed next to the userPhoto and below the userName.
   */
  userDetail: _propTypes.default.string,
  /**
   * The name to be displayed next to the userPhoto.
   */
  userName: _propTypes.default.string,
  /**
   * The photo to be displayed next to the userName and userDetail.
   */
  userPhoto: _propTypes.default.element
};
var UserData = function UserData(_ref) {
  var userDetail = _ref.userDetail,
    userName = _ref.userName,
    userPhoto = _ref.userPhoto,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var userClassNames = (0, _classnames.default)(cx('user-data', theme.className), customProps.className);
  var userInfo;
  if (userName || userDetail) {
    userInfo = /*#__PURE__*/_react.default.createElement("div", {
      className: cx('user-info')
    }, !!userName && /*#__PURE__*/_react.default.createElement("div", {
      className: cx('name')
    }, userName), !!userDetail && /*#__PURE__*/_react.default.createElement("div", {
      className: cx('detail')
    }, userDetail));
  }
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, {
    className: userClassNames
  }), !!userPhoto && /*#__PURE__*/_react.default.cloneElement(userPhoto, {
    className: cx('photo')
  }), userInfo);
};
UserData.propTypes = propTypes;
var _default = UserData;
exports.default = _default;