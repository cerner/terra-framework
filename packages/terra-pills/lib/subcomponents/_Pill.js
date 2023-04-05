"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _keycodeJs = require("keycode-js");
var _reactIntl = require("react-intl");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _PillModule = _interopRequireDefault(require("./Pill.module.scss"));
var _excluded = ["label", "labelCategory", "id", "intl", "metaData", "onRemove", "title", "onSelect"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_PillModule.default);
var propTypes = {
  /**
    * The html 'id' attribute for the pill, needed for proper keyboard interactions. (Required & must be unique).
    */
  id: _propTypes.default.string.isRequired,
  /**
   * The label text for the pill. (Required).
   */
  label: _propTypes.default.string.isRequired,
  /**
   * Secondary label text for the pill that displays a filter category.
   */
  labelCategory: _propTypes.default.string,
  /**
   * The associated metaData to be returned in the onRemove callback.
   */
  metaData: _propTypes.default.object,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired,
  /**
   *
   * A callback function to execute when the pill is removed. Returns id, metadata.
   */
  onRemove: _propTypes.default.func,
  /**
   * @private
   * Tooltip to display if the pill label does not have enough space to display and will show as truncated,
   * to be used in addition with a popup.
   */
  title: _propTypes.default.string
};
var Pill = function Pill(props) {
  var label = props.label,
    labelCategory = props.labelCategory,
    id = props.id,
    intl = props.intl,
    metaData = props.metaData,
    onRemove = props.onRemove,
    title = props.title,
    onSelect = props.onSelect,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var pillRef = (0, _react.useRef)();
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    isTruncated = _useState2[0],
    setIsTruncated = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    popupOpen = _useState4[0],
    setPopupOpen = _useState4[1];
  var basicPillTruncation = (0, _react.useCallback)(function () {
    if (pillRef.current.firstElementChild.scrollWidth > pillRef.current.firstElementChild.clientWidth) {
      setIsTruncated(true);
    } else {
      setIsTruncated(false);
    }
  }, []);
  var handleResize = (0, _react.useCallback)(function (entries) {
    if (!Array.isArray(entries)) {
      return;
    }
    basicPillTruncation();
  }, [basicPillTruncation]);
  (0, _react.useLayoutEffect)(function () {
    var observer = new _resizeObserverPolyfill.default(function (entries) {
      handleResize(entries);
    });
    observer.observe(pillRef.current.parentNode);
    return function () {
      observer.disconnect();
      observer = null;
    };
  }, [basicPillTruncation, handleResize]);
  var handleOnRemove = function handleOnRemove(event) {
    event.preventDefault();
    event.stopPropagation();
    onRemove(id, metaData, event);
  };
  var handleOnClick = function handleOnClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (isTruncated) {
      setPopupOpen(true);
      pillRef.current.setAttribute('aria-expanded', true);
    }
  };
  var handleOnRequestClose = function handleOnRequestClose() {
    setPopupOpen(false);
    pillRef.current.setAttribute('aria-expanded', false);
  };
  var handleOnKeyDown = function handleOnKeyDown(event) {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
    if (event.keyCode === _keycodeJs.KEY_RETURN || event.keyCode === _keycodeJs.KEY_SPACE) {
      event.preventDefault();
      if (isTruncated) {
        setPopupOpen(true);
      }
    } else if (event.keyCode === _keycodeJs.KEY_DELETE || event.keyCode === _keycodeJs.KEY_BACK_SPACE) {
      event.preventDefault();
      if (onRemove) {
        onRemove(id, metaData, event);
      }
    }
  };
  var handleOnMouseDown = function handleOnMouseDown(event) {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'false');
    onSelect(pillRef, event);
  };
  var handleOnBlur = function handleOnBlur() {
    pillRef.current.setAttribute('data-terra-pills-show-focus-styles', 'true');
  };
  var getPillRef = function getPillRef() {
    return pillRef.current;
  };
  var pillInteraction = {};
  pillInteraction.isSelectable = isTruncated;
  pillInteraction.isRemovable = onRemove;
  pillInteraction.isSelectableAndRemovable = onRemove && isTruncated;
  var pillProps = {};
  var categoryAndLabel = labelCategory ? "".concat(labelCategory, ": ").concat(label) : label;
  pillProps.title = title || (isTruncated ? categoryAndLabel : undefined);
  if (pillInteraction.isSelectable || pillInteraction.isRemovable) {
    pillProps.tabIndex = '0';
    pillProps.onKeyDown = handleOnKeyDown;
    pillProps.onMouseDown = handleOnMouseDown;
    pillProps.onBlur = handleOnBlur;
  }
  var pillButtonProps = {};
  if (pillInteraction.isSelectable) {
    pillButtonProps.onClick = handleOnClick;
  }
  var removeButtonProps = {};
  if (onRemove) {
    removeButtonProps.onClick = handleOnRemove;
  }
  var pillInteractionHint;
  if (pillInteraction.isSelectableAndRemovable) {
    pillInteractionHint = ", ".concat(intl.formatMessage({
      id: 'Terra.pills.hint.selectableAndRemovable'
    }));
  } else if (pillInteraction.isSelectable) {
    pillInteractionHint = ", ".concat(intl.formatMessage({
      id: 'Terra.pills.hint.selectable'
    }));
  } else if (pillInteraction.isRemovable) {
    pillInteractionHint = ", ".concat(intl.formatMessage({
      id: 'Terra.pills.hint.removable'
    }));
  }
  var pillLabelClassNames = (0, _classnames.default)(cx(['pill-label', {
    'is-focusable': pillInteraction.isSelectable || pillInteraction.isRemovable
  }, {
    'is-removable': pillInteraction.isRemovable && !pillInteraction.isSelectableAndRemovable
  }, {
    'is-selectable-and-removable': pillInteraction.isSelectableAndRemovable
  }, theme.className]), customProps.className);
  var pillClassNames = (0, _classnames.default)(cx(['pill', 'is-focusable', theme.className]), customProps.className);
  var renderTruncatedLabelPopup = function renderTruncatedLabelPopup() {
    return /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
      isOpen: popupOpen,
      isArrowDisplayed: true,
      targetRef: getPillRef,
      onRequestClose: handleOnRequestClose,
      contentHeight: "auto",
      contentWidth: "auto"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: cx(['popup-content-pill-label', theme.className])
    }, labelCategory ? /*#__PURE__*/_react.default.createElement("span", {
      className: cx(['popup-content-pill-category', theme.className])
    }, "".concat(labelCategory, ": ")) : undefined, /*#__PURE__*/_react.default.createElement("span", null, label)));
  };
  var renderRemoveButton = function renderRemoveButton() {
    return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({}, removeButtonProps, {
      className: cx('pill-remove-button'),
      tabIndex: "-1",
      type: "button",
      "aria-label": intl.formatMessage({
        id: 'Terra.pills.label.delete'
      }, {
        pillLabelName: label
      })
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: cx('clear-icon')
    }));
  };
  var renderSelectablePill = function renderSelectablePill() {
    var categoryLabel = labelCategory || '';
    var visuallyHiddenTextHint = " ".concat(categoryLabel, " ").concat(label, " ").concat(pillInteractionHint);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, pillProps, pillButtonProps, {
      "aria-haspopup": pillInteraction.isSelectable ? 'dialog' : undefined,
      id: id,
      className: pillClassNames,
      ref: pillRef,
      role: "listitem",
      "aria-label": visuallyHiddenTextHint,
      "data-terra-pills-show-focus-styles": true,
      "data-terra-pill": true
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: pillLabelClassNames
    }, labelCategory ? /*#__PURE__*/_react.default.createElement("span", {
      className: cx('pill-category')
    }, "".concat(labelCategory, ": ")) : undefined, /*#__PURE__*/_react.default.createElement("span", null, label)), pillInteraction.isRemovable && renderRemoveButton()), isTruncated && renderTruncatedLabelPopup());
  };
  var renderBasicPill = function renderBasicPill() {
    var categoryLabel = labelCategory || '';
    var visuallyHiddenTextHint = " ".concat(categoryLabel, " ").concat(label, " ").concat(pillInteractionHint);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, pillProps, {
      id: id,
      className: pillClassNames,
      ref: pillRef,
      role: "listitem",
      "aria-label": visuallyHiddenTextHint,
      "data-terra-pills-show-focus-styles": true,
      "data-terra-pill": true
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: pillLabelClassNames
    }, labelCategory ? /*#__PURE__*/_react.default.createElement("span", {
      className: cx('pill-category')
    }, "".concat(labelCategory, ": ")) : undefined, /*#__PURE__*/_react.default.createElement("span", null, label)), pillInteraction.isRemovable && renderRemoveButton()));
  };
  return pillInteraction.isSelectable ? renderSelectablePill() : renderBasicPill();
};
Pill.propTypes = propTypes;
var _default = (0, _reactIntl.injectIntl)(Pill);
exports.default = _default;