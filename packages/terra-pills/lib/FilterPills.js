"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _keycodeJs = require("keycode-js");
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _resizeObserverPolyfill = _interopRequireDefault(require("resize-observer-polyfill"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _reactIntl = require("react-intl");
var _v = _interopRequireDefault(require("uuid/v4"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _PillsUtils = _interopRequireDefault(require("./PillsUtils"));
var _RollupPill = _interopRequireDefault(require("./subcomponents/_RollupPill"));
var _PillModule = _interopRequireDefault(require("./subcomponents/Pill.module.scss"));
var _excluded = ["ariaLabel", "ariaLabelledBy", "ariaDescribedBy", "children", "intl", "isCollapsible", "onRemove"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_PillModule.default);
var propTypes = {
  /**
   * The string that labels the collection of pills, used in cases where the text label is not visible on
   * the screen and required for minimum accessibility standards. Providing this prop adds the `aria-label`
   * attribute to the Pill List container element. (Required)
   */
  ariaLabel: _propTypes.default.string.isRequired,
  /**
   * If a visible text label is used with the collection of pills, provide a string of the ID for the html
   * element containing the visible text label. Supplying the 'ariaLabelledBy' prop will override the 'ariaLabel'
   * prop and adds the `aria-labelledby` attribute instead to the Pill List container element.
   *
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue) For best practices, ensure the visible text
   * in the html element `id` provided to the Pill List `ariaLabelledby` prop matches the text provided to the
   * `ariaLabel` prop, for consistency in the case of fallback or errors.
   */
  ariaLabelledBy: _propTypes.default.string,
  /**
   * If additional visible information text is used, provide a string containing the IDs for html elements that
   * help describe the intent of the group of pills.
   */
  ariaDescribedBy: _propTypes.default.string,
  /**
   * @private
   * The content to be shown in the pills container. Should only contain the sub-component `<Pills.Pill>`.
   */
  children: _propTypes.default.node,
  /**
   * Indicates if the Pills container is rolled up or not.
   */
  isCollapsible: _propTypes.default.bool,
  /**
   * Callback function to remove a pill, returns 'id' and 'metadata'.
   */
  onRemove: _propTypes.default.func,
  /**
   * @private
   * The intl object to be injected for translations.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired
};
var defaultProps = {
  isCollapsible: false
};
var FilterPills = function FilterPills(props) {
  var ariaLabel = props.ariaLabel,
    ariaLabelledBy = props.ariaLabelledBy,
    ariaDescribedBy = props.ariaDescribedBy,
    children = props.children,
    intl = props.intl,
    isCollapsible = props.isCollapsible,
    onRemove = props.onRemove,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var theme = _react.default.useContext(_terraThemeContext.default);
  var _useState = (0, _react.useState)('-1'),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    containerTabindex = _useState2[0],
    setContainerTabindex = _useState2[1];
  var _useState3 = (0, _react.useState)(_react.default.Children.count(children)),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    updatedCount = _useState4[0],
    setUpdatedCount = _useState4[1];
  var _useState5 = (0, _react.useState)(_react.default.Children.count(children)),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    rollUpCount = _useState6[0],
    setRollUpCount = _useState6[1];
  var _useState7 = (0, _react.useState)(isCollapsible),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    isCollapsed = _useState8[0],
    setIsCollapsed = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
    pillRemoved = _useState10[0],
    setIsPillRemoved = _useState10[1];
  var _useState11 = (0, _react.useState)(false),
    _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
    showRollupPillInteraction = _useState12[0],
    setShowRollupPillInteraction = _useState12[1];
  var currentPill = (0, _react.useRef)(); // ID of the pill that will receive focus
  var filterPillsRef = (0, _react.useRef)();
  var focusNode = (0, _react.useRef)(0); // index of the pill that will receive focus
  var isPillDeleted = (0, _react.useRef)(false);
  var isRollUpRemoved = (0, _react.useRef)(false);
  var removedLabel = (0, _react.useRef)();
  var containerHint = (0, _react.useRef)(ariaLabel);

  // Identifies the number of pills that needs to be hidden/rolled up
  var generateRollUp = (0, _react.useCallback)(function () {
    var startIndex = _PillsUtils.default.getRollUpIndex(filterPillsRef);
    if (isCollapsed) {
      setUpdatedCount(startIndex);
      setRollUpCount(_react.default.Children.count(children) - startIndex);
    } else if (startIndex === _react.default.Children.count(children)) {
      setRollUpCount(0);
    }
  }, [children, isCollapsed]);

  // Modifies the tabindex of the pill/rollup pill node
  var setTabIndex = function setTabIndex(val) {
    var currentNode = currentPill.current ? filterPillsRef.current.querySelector("#".concat(currentPill.current)) : null;
    if (currentNode) {
      currentNode.setAttribute('tabIndex', val);
    }
  };

  // Sets focus to the current pill/rollup pill with tabindex 0
  var focusCurrentNode = function focusCurrentNode() {
    var currentNode = currentPill.current ? filterPillsRef.current.querySelector("#".concat(currentPill.current)) : null;
    if (currentNode) {
      currentNode.focus();
    }
  };

  // sets focus to the pill container if there are Zero pills/all pill are deleted.
  var focusPillsContainer = function focusPillsContainer() {
    setContainerTabindex('0');
    filterPillsRef.current.focus();
  };

  // resets all pill nodes tabindex to -1, except for the one pill that receives focus.
  var resetTabIndex = (0, _react.useCallback)(function () {
    var pills = (0, _toConsumableArray2.default)(filterPillsRef.current.querySelectorAll('[data-terra-pill]'));
    var rollUpPill = filterPillsRef.current.querySelector('[data-terra-rollup-pill]');

    // if there is a roll Up pill, set tabindex to -1
    if (rollUpPill) {
      _PillsUtils.default.setRollUpPillTabIndex(rollUpPill, '-1');
    }
    if (pills.length > 0 && focusNode.current < pills.length) {
      _PillsUtils.default.setPillsTabIndex(pills, '-1');
      currentPill.current = pills[focusNode.current].id;
      setTabIndex('0');
    } else if (isCollapsible && isCollapsed && rollUpPill) {
      // if the first pill is rollUp pill, set rollUp pill tabindex 0
      currentPill.current = rollUpPill.getAttribute('id');
      setTabIndex('0');
    }
  }, [isCollapsed, isCollapsible]);
  var handleFocusOnRollUpTrigger = (0, _react.useCallback)(function () {
    var pills = (0, _toConsumableArray2.default)(filterPillsRef.current.querySelectorAll('[data-terra-pill]'));
    // To focus the immediate focusable pill after the rollUp pill is selected
    if (isCollapsible && !isCollapsed && pills.length > 0) {
      if (pills.length === _react.default.Children.count(children)) {
        setTabIndex('-1');
        currentPill.current = pills[focusNode.current].id;
        setTabIndex('0');
        if (isRollUpRemoved.current) {
          // if the rollup pill was triggered with keyboard focus the node
          focusCurrentNode();
          isRollUpRemoved.current = false;
        }
      }
    }
  }, [children, isCollapsed, isCollapsible]);
  var handlePillDeletion = (0, _react.useCallback)(function () {
    var pills = (0, _toConsumableArray2.default)(filterPillsRef.current.querySelectorAll('[data-terra-pill]'));
    var rollUpPill = filterPillsRef.current.querySelector('[data-terra-rollup-pill]');
    var startIndex = _PillsUtils.default.getRollUpIndex(filterPillsRef);
    if (isPillDeleted.current) {
      if (_react.default.Children.count(children) <= 0) {
        focusPillsContainer();
        return;
      }
      // if there is a roll Up pill, set tabindex to -1
      if (rollUpPill) {
        _PillsUtils.default.setRollUpPillTabIndex(rollUpPill, '-1');
      }
      if (pills.length > 0) {
        _PillsUtils.default.setPillsTabIndex(pills, '-1');
      }
      if (pills.length === startIndex) {
        currentPill.current = pills[focusNode.current].id;
      } else if (rollUpPill && startIndex >= 1) {
        currentPill.current = pills[focusNode.current].id;
      } else if (rollUpPill) {
        currentPill.current = rollUpPill.getAttribute('id');
      }
      setTabIndex('0');
      focusCurrentNode();
      isPillDeleted.current = false;
    }
  }, [children]);
  var handleResize = (0, _react.useCallback)(function (entries) {
    if (!Array.isArray(entries)) {
      return;
    }
    setUpdatedCount(_react.default.Children.count(children));
    setRollUpCount(_react.default.Children.count(children));
    if (isCollapsible) {
      generateRollUp();
    }
    resetTabIndex();
    handleFocusOnRollUpTrigger();
    handlePillDeletion();
  }, [children, isCollapsible, resetTabIndex, handleFocusOnRollUpTrigger, handlePillDeletion, generateRollUp]);
  (0, _react.useLayoutEffect)(function () {
    var observer = new _resizeObserverPolyfill.default(function (entries) {
      handleResize(entries);
    });
    observer.observe(filterPillsRef.current.parentNode);
    return function () {
      observer.disconnect();
      observer = null;
    };
  }, [children, handleResize]);
  var focusNextNode = function focusNextNode(pills, rollUpPill) {
    var rollUpPillId = rollUpPill ? rollUpPill.getAttribute('id') : null;
    if (focusNode.current + 1 <= pills.length) {
      setTabIndex('-1');
      // if the next pill is roll up pill, focus the roll up pill
      if (rollUpPill && focusNode.current + 1 === pills.length) {
        currentPill.current = rollUpPillId;
      } else if (focusNode.current + 1 < pills.length) {
        // focus the next available pill
        focusNode.current += 1;
        currentPill.current = children[focusNode.current].props.id;
      }
      setTabIndex('0');
      focusCurrentNode();
    }
  };
  var focusPreviousNode = function focusPreviousNode(pills, rollUpPill) {
    var rollUpPillId = rollUpPill ? rollUpPill.getAttribute('id') : null;
    if (currentPill.current === rollUpPillId || focusNode.current >= 1) {
      setTabIndex('-1');
      if (rollUpPill && currentPill.current === rollUpPillId) {
        // If rollup pill, then focus the roll up pill
        focusNode.current = pills.length - 1;
        currentPill.current = children[focusNode.current].props.id;
      } else {
        focusNode.current -= 1;
        currentPill.current = children[focusNode.current].props.id;
      }
      setTabIndex('0');
      focusCurrentNode();
    }
  };
  var focusNodeAfterDelete = function focusNodeAfterDelete(pills) {
    if (_react.default.Children.count(children) > 0 && pills.length - 1 < _react.default.Children.count(children)) {
      setIsPillRemoved(true);
      removedLabel.current = pills[focusNode.current].children[0].innerText;
      setTabIndex('-1');
      if (focusNode.current > 0) {
        focusNode.current -= 1;
      }
      setUpdatedCount(_react.default.Children.count(children));
      isPillDeleted.current = true;
    }
  };
  var handlePillListKeyDown = function handlePillListKeyDown(event) {
    var pills = (0, _toConsumableArray2.default)(filterPillsRef.current.querySelectorAll('[data-terra-pill]'));
    var rollUpPill = filterPillsRef.current.querySelector('[data-terra-rollup-pill]');
    setIsPillRemoved(false);
    setShowRollupPillInteraction(false);
    switch (event.keyCode) {
      case _keycodeJs.KEY_RIGHT:
        event.preventDefault();
        focusNextNode(pills, rollUpPill);
        break;
      case _keycodeJs.KEY_LEFT:
        event.preventDefault();
        focusPreviousNode(pills, rollUpPill);
        break;
      case _keycodeJs.KEY_BACK_SPACE || _keycodeJs.KEY_DELETE:
        event.preventDefault();
        focusNodeAfterDelete(pills);
        break;
      case _keycodeJs.KEY_HOME:
        event.preventDefault();
        setTabIndex('-1');
        focusNode.current = 0;
        currentPill.current = pills[focusNode.current].id;
        setTabIndex('0');
        focusCurrentNode();
        break;
      case _keycodeJs.KEY_END:
        event.preventDefault();
        setTabIndex('-1');
        focusNode.current = pills.length - 1;
        currentPill.current = pills[focusNode.current].id;
        setTabIndex('0');
        focusCurrentNode();
        break;
      default:
        break;
    }
  };
  var handleOnRemove = function handleOnRemove(id, metaData, event) {
    var pills = (0, _toConsumableArray2.default)(filterPillsRef.current.querySelectorAll('[data-terra-pill]'));
    var targetId = event.target.parentElement.getAttribute('id');
    var currentIndex = pills.findIndex(function (element) {
      return element.id === targetId;
    });
    if (event.type === 'click') {
      if (pills.length > 1) {
        setTabIndex('-1');
        if (currentIndex === 0) {
          focusNode.current = 0;
        } else {
          focusNode.current = currentIndex - 1;
        }
        setTabIndex('0');
      }
      setIsPillRemoved(true);
    }
    focusPillsContainer();
    if (onRemove) {
      onRemove(id, metaData);
    }
  };

  // set the focus to current pill if the pill is clicked with mouse
  var handleOnPillSelect = function handleOnPillSelect(pillRef) {
    if (pillRef.current && pillRef.current.children.length > 0) {
      removedLabel.current = pillRef.current.children[0].innerText;
    }
  };
  var handleOnSelectRollUp = function handleOnSelectRollUp(event) {
    var pills = (0, _toConsumableArray2.default)(filterPillsRef.current.querySelectorAll('[data-terra-pill]'));
    if (isCollapsible && isCollapsed) {
      if (event.type === 'keydown') {
        isRollUpRemoved.current = true;
        focusNode.current = pills.length;
      } else {
        setTabIndex('-1');
        focusNode.current = pills.length;
      }
    } else {
      setShowRollupPillInteraction(false);
    }
    setIsCollapsed(!isCollapsed);
  };
  var handlePillListOnblur = function handlePillListOnblur() {
    return setContainerTabindex('-1');
  };
  var filterPillsProps = {};
  filterPillsProps.onKeyDown = handlePillListKeyDown;
  filterPillsProps.onBlur = handlePillListOnblur;
  var pillListClassNames = (0, _classnames.default)(cx(['pills-group', theme.className]), customProps.className);
  var pillGroupInteractionHintID = "terra-pills-group-interaction-hint-".concat((0, _v.default)());
  var removedPillInteractionHint = '';
  var pillGroupAriaDescribedBy = ariaDescribedBy ? "".concat(ariaDescribedBy, " ").concat(pillGroupInteractionHintID) : pillGroupInteractionHintID;
  var pillGroupInteractionHint = intl.formatMessage({
    id: 'Terra.pills.hint.pillList'
  }, {
    numberOfPills: _react.default.Children.count(children)
  });
  if (isCollapsible && rollUpCount > 0 && isCollapsed) {
    pillGroupInteractionHint += ", ".concat(intl.formatMessage({
      id: 'Terra.pills.hint.rollupNotVisible'
    }, {
      pillsNotVisibleCount: rollUpCount
    }));
  } else if (isCollapsible && !isCollapsed && showRollupPillInteraction) {
    removedPillInteractionHint = intl.formatMessage({
      id: 'Terra.pills.hint.rollupVisible'
    });
  }
  if (pillRemoved) {
    removedPillInteractionHint = intl.formatMessage({
      id: 'Terra.pills.hint.wasRemoved'
    }, {
      pillLabelName: removedLabel.current
    });
  }
  var renderChildren = function renderChildren(items) {
    var pills = _react.default.Children.map(items, function (pill) {
      if ( /*#__PURE__*/_react.default.isValidElement(pill)) {
        return /*#__PURE__*/_react.default.cloneElement(pill, {
          onRemove: handleOnRemove,
          onSelect: handleOnPillSelect
        });
      }
      return undefined;
    });
    var reducedArray = pills.splice(0, updatedCount);
    return reducedArray;
  };
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, filterPillsProps, {
    "aria-live": "assertive",
    "aria-label": !ariaLabelledBy ? "".concat(removedPillInteractionHint, " ").concat(containerHint.current) : undefined,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": pillGroupAriaDescribedBy,
    className: pillListClassNames,
    ref: filterPillsRef,
    role: "list",
    tabIndex: containerTabindex
  }), /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
    "aria-live": "polite",
    id: pillGroupInteractionHintID,
    text: pillGroupInteractionHint,
    "aria-hidden": "true"
  }), children ? renderChildren(children) : [], isCollapsible && rollUpCount > 0 && /*#__PURE__*/_react.default.createElement(_RollupPill.default, {
    isCollapsed: isCollapsed,
    onSelectRollUp: handleOnSelectRollUp,
    rollupCount: rollUpCount
  }));
};
FilterPills.defaultProps = defaultProps;
FilterPills.propTypes = propTypes;
var _default = (0, _reactIntl.injectIntl)(FilterPills);
exports.default = _default;