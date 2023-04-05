"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraNavigationPrompt = _interopRequireWildcard(require("terra-navigation-prompt"));
var _NavigationPromptExampleModule = _interopRequireDefault(require("./NavigationPromptExample.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_NavigationPromptExampleModule.default);
var exampleTitle = 'Descriptive Notification Prompt Title';
var exampleMessage = 'A Notification Prompt usually has an introductory warning instructing the user that there are unsaved changes or that there is a similar situation that warrants capturing the user\'s attention and requires that they take action before continuing.\n\nIt is good practice to include details about the originating source (page name, side-panel title, modal header title, etc.) and location description (form name, title from the section of the page, general position, etc.) to provide the user a contextual reference as to where they have an area needing attention: e.g. where data is about to be lost, the window about to be closed, the section about to be removed. Following the initial details, it is helpful to include a detailed description educating the user about any danger or caution as to what will happen to the current items about to be lost (form data, page content, etc.) if the user chooses each of the two actions provided in the notification prompt message.';
var exampleRejectButtonText = 'Descriptive Reject Button Action';
var exampleAcceptButtonText = 'Descriptive Accept Button Action';
var exampleButtonOrder = 'acceptFirst';

/**
 * The Input is a stateful component that renders a NavigationPrompt based upon its current input element value.
 * It provides its NavigationPrompt with a description and a metaData object containing its current value.
 */
var Input = function Input(_ref) {
  var title = _ref.title,
    ariaLabel = _ref.ariaLabel;
  var _useState = (0, _react.useState)(''),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];
  var promptMetaData = (0, _react.useRef)({
    value: ''
  });

  /**
   * The Input renders a NavigationPrompt when it wants to communicate the presence of its unresolved
   * state.
   */
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('input-content-wrapper')
  }, inputValue && inputValue.length ? /*#__PURE__*/_react.default.createElement(_terraNavigationPrompt.default, {
    description: title,
    metaData: promptMetaData.current
  }) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: cx('title')
  }, title), inputValue && inputValue.length ? /*#__PURE__*/_react.default.createElement("span", {
    className: cx('prompt-text-wrapper')
  }, "(Unsaved value is present and NavigationPrompt is rendered)") : null), /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    className: cx('input-text-box'),
    "aria-label": ariaLabel,
    onChange: function onChange(event) {
      promptMetaData.current = {
        value: event.target.value
      };
      setInputValue(event.target.value);
    }
  }));
};
Input.propTypes = {
  title: _propTypes.default.string,
  ariaLabel: _propTypes.default.string
};

/**
 * The Form renders two Input components to demonstrate the the registration logic of multiple concurrent NavigationPrompts.
 * The Form also renders a NavigationPromptCheckpoint around those Inputs in order to demonstrate the NavigationPromptCheckpoint's ability to
 * render a custom title/message during prompt resolution.
 *
 * Before the Form's Reset action can occur, the Form resolves the prompts below its checkpoint with a custom title and message featuring the
 * registered prompts' descriptions and metaData. If the user confirms the Reset, the Input components are unmounted and replaced with new instances
 * that have no unsaved changes (and thus render no NavigationPrompts). If the user denies the Reset, no action is taken.
 *
 * The Form's Submit action does not prompt the user before clearing the Input values, demonstrating that the onus is on the Form, not the Input, to trigger
 * the prompt resolver when necessary.
 */
var Form = function Form(_ref2) {
  var title = _ref2.title;
  var _useState3 = (0, _react.useState)(Date.now()),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    timeStamp = _useState4[0],
    setTimeStamp = _useState4[1];
  var inputCheckpointRef = (0, _react.useRef)();
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('form-content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_terraNavigationPrompt.NavigationPromptCheckpoint, {
    ref: inputCheckpointRef
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
    key: timeStamp
  }, /*#__PURE__*/_react.default.createElement("h3", null, title), /*#__PURE__*/_react.default.createElement("p", null, "The Form renders a NavigationPromptCheckpoint around its child Input components. If NavigationPrompts are rendered by any child components, the Form will resolve those prompts before resetting the Input values."), /*#__PURE__*/_react.default.createElement("p", null, "Last Updated:", ' ', new Date(timeStamp).toLocaleString()), /*#__PURE__*/_react.default.createElement(Input, {
    title: "Text Input A",
    ariaLabel: "Text Input A"
  }), /*#__PURE__*/_react.default.createElement(Input, {
    title: "Text Input B",
    ariaLabel: "Text Input B"
  }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      inputCheckpointRef.current.resolvePrompts({
        title: exampleTitle,
        startMessage: exampleMessage,
        rejectButtonText: exampleRejectButtonText,
        acceptButtonText: exampleAcceptButtonText,
        buttonOrder: exampleButtonOrder
      }).then(function () {
        setTimeStamp(Date.now());
      }).catch(function () {
        // User prevented navigation.
      });
    }
  }, "Reset"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: function onClick() {
      setTimeStamp(Date.now());
    }
  }, "Submit"))));
};
Form.propTypes = {
  title: _propTypes.default.string
};

/**
 * The FormSwitcher toggles between two versions a Form to demonstrate the functionality of nested NavigationPromptCheckpoints.
 * Any NavigationPrompt registered to the Form's checkpoint will also be registered to the FormSwitcher's checkpoint.
 *
 * Before the FormSwitcher changes the Form type, the FormSwitcher resolves the prompts below its checkpoint with the default prompt title and message.
 * If the user confirms the switch, the Form component is unmounted and replace with a new version containing no unsaved changes. If the user denies the switch,
 * no action is taken.
 */
var FormSwitcher = function FormSwitcher() {
  var _useState5 = (0, _react.useState)('Form 1'),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    activeForm = _useState6[0],
    setActiveForm = _useState6[1];
  var formCheckpointRef = (0, _react.useRef)();
  function onSwitchForm(formKey) {
    formCheckpointRef.current.resolvePrompts({
      title: exampleTitle,
      startMessage: exampleMessage,
      rejectButtonText: exampleRejectButtonText,
      acceptButtonText: exampleAcceptButtonText,
      buttonOrder: exampleButtonOrder
    }).then(function () {
      setActiveForm(formKey);
    }).catch(function () {
      // User prevented form switch.
    });
  }
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, "Form Switcher"), /*#__PURE__*/_react.default.createElement("p", null, "The FormSwitcher is an example component that uses the NavigationPrompt and NavigationPromptCheckpoint. If NavigationPrompts are rendered by any child components, the FormSwitcher will resolve those prompts before rendering a different Form."), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    disabled: activeForm === 'Form 1',
    onClick: onSwitchForm.bind(null, 'Form 1')
  }, "Switch to Form 1"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    disabled: activeForm === 'Form 2',
    onClick: onSwitchForm.bind(null, 'Form 2')
  }, "Switch to Form 2"), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_terraNavigationPrompt.NavigationPromptCheckpoint, {
    ref: formCheckpointRef
  }, /*#__PURE__*/_react.default.createElement(Form, {
    title: activeForm,
    key: activeForm
  })));
};

/**
 * The NavigationPromptExample renders a NavigationPromptCheckpoint around the FormSwitcher to demonstrate the
 * functionality of the onPromptChange callback. onPromptChange receives the current set of prompts as its first argument,
 * and it executes whenever a NavigationPrompt registers or unregisters with a NavigationPromptCheckpoint.
 */
var NavigationPromptExample = function NavigationPromptExample() {
  var _useState7 = (0, _react.useState)([]),
    _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
    prompts = _useState8[0],
    setPrompts = _useState8[1];
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('example-content-wrapper')
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: cx('title')
  }, "Registered Prompts: "), prompts.length ? /*#__PURE__*/_react.default.createElement("span", null, prompts.map(function (prompt) {
    return "".concat(prompt.description, " (").concat(prompt.metaData.value, ")");
  }).join(', ')) : null, /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement(_terraNavigationPrompt.NavigationPromptCheckpoint, {
    onPromptChange: function onPromptChange(newPrompts) {
      setPrompts(newPrompts);
    }
  }, /*#__PURE__*/_react.default.createElement(FormSwitcher, null)));
};
var _default = NavigationPromptExample;
exports.default = _default;