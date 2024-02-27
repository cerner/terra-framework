"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[32249],{58912:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(58168),i=n(53986),l=n(96540),o=n(36665),r=n(49879),d=n(37382),m=["components"],u={};function s(e){var t=e.components,n=(0,i.A)(e,m);return(0,o.mdx)("wrapper",(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport DateTimePicker from 'terra-date-time-picker';\nimport DateTimeUtils from 'terra-date-time-picker/lib/DateTimeUtils';\n\nconst DateTimePickerEvents = () => {\n  const [blurCount, setBlurCount] = useState(0);\n  const [focusCount, setFocusCount] = useState(0);\n  const [onRequestCloseCount, setonRequestCloseCount] = useState(0);\n  const [changeValue, setChangeValue] = useState('');\n  const [changeRawValue, setChangeRawValue] = useState('');\n  const [selectValue, setSelectValue] = useState('');\n\n  const handleBlur = () => {\n    setBlurCount(blurCount + 1);\n  };\n\n  const handleFocus = () => {\n    setFocusCount(focusCount + 1);\n  };\n\n  const handleChange = (event, value) => {\n    setChangeValue(value);\n  };\n\n  const handleChangeRaw = (event, value) => {\n    setChangeRawValue(value);\n  };\n\n  const handleSelect = (event, value) => {\n    setSelectValue(value);\n  };\n\n  const handleOnRequestClose = () => {\n    setonRequestCloseCount(onRequestCloseCount + 1);\n  };\n\n  return (\n    <div>\n      <p>\n        onFocus Trigger Count:\n        {' '}\n        <span id=\"onFocus-count\">{focusCount}</span>\n        <br />\n        <br />\n        onBlur Trigger Count:\n        {' '}\n        <span id=\"onBlur-count\">{blurCount}</span>\n        <br />\n        <br />\n        onRequestClose Trigger Count:\n        {' '}\n        <span id=\"onRequestClose-count\">{onRequestCloseCount}</span>\n        <br />\n        <br />\n        onChangeRaw Triggered:\n        {' '}\n        <span id=\"onChangeRaw\">{changeRawValue}</span>\n        <br />\n        <br />\n        onChange Triggered:\n        {' '}\n        <span id=\"onChange\">{changeValue}</span>\n        <br />\n        <br />\n        onSelect Triggered:\n        {' '}\n        <span id=\"onSelect\">{selectValue}</span>\n      </p>\n      <DateTimePicker\n        name=\"date-time-picker-events\"\n        onBlur={handleBlur}\n        onFocus={handleFocus}\n        onChange={handleChange}\n        onChangeRaw={handleChangeRaw}\n        onSelect={handleSelect}\n        onRequestClose={handleOnRequestClose}\n        timeVariant={DateTimeUtils.FORMAT_12_HOUR}\n        showSeconds\n      />\n    </div>\n  );\n};\n\nexport default DateTimePickerEvents;\n\n")))}s.isMDXComponent=!0;var h=n(201),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(h.A,{title:t||"Date Time Picker Events",description:n,example:l.createElement(d.A,null),exampleSrc:l.createElement(s,null),isExpanded:a})},c=["components"],f={},x="wrapper";function g(e){var t=e.components,n=(0,i.A)(e,c);return(0,o.mdx)(x,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(r.E,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-date-time-picker"},"Terra Date Time Picker"),(0,o.mdx)("h2",{id:"events"},"Events"),(0,o.mdx)("p",null,"terra-date-time-picker has several callback events that are slightly different in behavior from the native counterparts."),(0,o.mdx)("h3",{id:"onblur"},"onBlur"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onBlur")," callback prop is triggered only when the entire component loses focus. If the focus is moved from the date input to the time input, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onBlur")," event will not be triggered since the focus is still within the DateTime Picker component. The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onBlur")," event would be triggered when the focus is moved to any element that is not a child node of the DateTime Picker."),(0,o.mdx)("li",{parentName:"ul"},"There are two paramters in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onBlur")," callback prop. The first parameter is the ",(0,o.mdx)("inlineCode",{parentName:"li"},"event")," object representing the blur event. The second parameter is the ",(0,o.mdx)("inlineCode",{parentName:"li"},"options")," object that contains the following attributes to describe the current state of the input values at the time when the component loses focus.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"iSO")," - The date/time value in the ISO format. This attribute would be empty if the date/time value is either empty or is not a complete date time. That is, the ISO string is available only if the isCompleteValue attribute is true."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"inputValue")," - The face up value in the date and time inputs. If both the date and time have a value, these values will be separated by an white space."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"dateValue")," - The face up value in the date input."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"timeValue")," - The face up value in the time input."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isAmbiguousHour")," - A boolean to indicate whether or not both the date and time values correspond to an ambiguous hour. If this boolean is true, the date and time correspond to an ambiguous hour."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isCompleteValue")," - A boolean to indicate whether or not both the date and time values are filled out and conforms to the date/time format. If this boolean is false, the iSO attribute would be empty."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isValidValue")," - A boolean to indicate whether or not the complete date/time value is within the range of the minDate and maxDate props and is not an excluded date.")))),(0,o.mdx)("h3",{id:"onchange"},"onChange"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChange")," callback prop is triggered only when both a valid date and time that conform to the format is entered directly in the date and time inputs or selected from the date picker. The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChange")," callback prop would not be triggered if the entered or selected date meets one of the following criteria.")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"An exlcuded date in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"excludeDates")," prop."),(0,o.mdx)("li",{parentName:"ul"},"A date that is filtered by the ",(0,o.mdx)("inlineCode",{parentName:"li"},"filterDate")," prop."),(0,o.mdx)("li",{parentName:"ul"},"Not an included date in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"includeDates")," prop."),(0,o.mdx)("li",{parentName:"ul"},"Not within the range of the ",(0,o.mdx)("inlineCode",{parentName:"li"},"minDate")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"maxDate")," props.")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"There are three parameters in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChange")," callback prop. The first parameter is the ",(0,o.mdx)("inlineCode",{parentName:"li"},"event")," object. The second parameter is the ",(0,o.mdx)("inlineCode",{parentName:"li"},"date and time")," value. The third parameter is the ",(0,o.mdx)("inlineCode",{parentName:"li"},"options")," object that contains the following attributes to describe the current state of the input values at the time when the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChange")," callback is triggered.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"iSO")," - The date/time value in the ISO format. This attribute would be empty if the date/time value is either empty or is not a complete date time. That is, the ISO string is available only if the isCompleteValue attribute is true."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"inputValue")," - The face up value in the date and time inputs. If both the date and time have a value, these values will be separated by an white space."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"dateValue")," - The face up value in the date input."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"timeValue")," - The face up value in the time input."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isAmbiguousHour")," - A boolean to indicate whether or not both the date and time values correspond to an ambiguous hour. If this boolean is true, the date and time correspond to an ambiguous hour."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isCompleteValue")," - A boolean to indicate whether or not both the date and time values are filled out and conforms to the date/time format. If this boolean is false, the iSO attribute would be empty."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isValidValue")," - A boolean to indicate whether or not the complete date/time value is within the range of the minDate and maxDate props and is not an excluded date.")))),(0,o.mdx)("h3",{id:"onchangeraw"},"onChangeRaw"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChangeRaw")," callback prop is triggered whenever any key is entered in the date input. If the entered value happens to be a valid date and time, both the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChangeRaw")," and ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChange")," events will be triggered. The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChangeRaw")," event would be triggered first followed by the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChange")," event."),(0,o.mdx)("li",{parentName:"ul"},"There are three parameters in the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChangeRaw")," callback prop. The first parameter is the ",(0,o.mdx)("inlineCode",{parentName:"li"},"event")," object. The second parameter is ",(0,o.mdx)("inlineCode",{parentName:"li"},"either the date or time")," value, which ever was changed. The third parameter is the ",(0,o.mdx)("inlineCode",{parentName:"li"},"options")," object that contains the following attributes to describe the current state of the input values at the time when the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChangeRaw")," callback is triggered.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"iSO")," - The date/time value in the ISO format. This attribute would be empty if the date/time value is either empty or is not a complete date time. That is, the ISO string is available only if the isCompleteValue attribute is true."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"inputValue")," - The face up value in the date and time inputs. If both the date and time have a value, these values will be separated by an white space."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"dateValue")," - The face up value in the date input."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"timeValue")," - The face up value in the time input."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isAmbiguousHour")," - A boolean to indicate whether or not both the date and time values correspond to an ambiguous hour. If this boolean is true, the date and time correspond to an ambiguous hour."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isCompleteValue")," - A boolean to indicate whether or not both the date and time values are filled out and conforms to the date/time format. If this boolean is false, the iSO attribute would be empty."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"isValidValue")," - A boolean to indicate whether or not the complete date/time value is within the range of the minDate and maxDate props and is not an excluded date.")))),(0,o.mdx)("h3",{id:"onrequestclose"},"onRequestClose"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onRequestClose")," callback prop is triggered when dismissing the datepicker.")),(0,o.mdx)("h3",{id:"onfocus"},"onFocus"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onFocus")," callback prop is triggered when the component initially gains focus. If the focus is moved from the date input to the time input, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onFocus")," event will not be triggered since the focus is still within the DateTime Picker component. Similar to the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onBlur")," event, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onFocus")," event does not get triggered when the focus is moved from one child node of the DateTime Picker component to another child node of the same DateTime Picker component.")),(0,o.mdx)("h3",{id:"onselect"},"onSelect"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The ",(0,o.mdx)("inlineCode",{parentName:"li"},"onSelect")," callback prop is triggered when a date is selected from the date picker. Once a date is selected, the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onChange")," event will be triggered first (if the newly selected is different from the previous date) followed by the ",(0,o.mdx)("inlineCode",{parentName:"li"},"onSelect")," event.")),(0,o.mdx)("h2",{id:"event-trigger-order"},"Event Trigger Order"),(0,o.mdx)("p",null,"When these actions are taken, the events are triggered in the following order."),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Manual date entry ",(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"onChangeRaw"),(0,o.mdx)("li",{parentName:"ol"},"onChange (if the entered date and time are valid.)"))),(0,o.mdx)("li",{parentName:"ul"},"Selection from the picker",(0,o.mdx)("ol",{parentName:"li"},(0,o.mdx)("li",{parentName:"ol"},"onSelect"),(0,o.mdx)("li",{parentName:"ol"},"onChange (if the existing time is valid which now forms a complete date time value.)")))),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(p,{title:"Date Picker Event Triggers",mdxType:"DateTimePickerEvents"}))}g.isMDXComponent=!0},49879:function(e,t,n){n.d(t,{E:function(){return l}});var a=n(96540),i=n(55713),l=function(e){var t=e.url;return a.createElement(i.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-time-picker",name:"terra-date-time-picker",version:"4.107.0",url:t})}},37382:function(e,t,n){var a=n(24994),i=n(73738);t.A=void 0;var l=a(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=l?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),r=a(n(81364)),d=a(n(19449));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}t.A=function(){var e=(0,o.useState)(0),t=(0,l.default)(e,2),n=t[0],a=t[1],i=(0,o.useState)(0),m=(0,l.default)(i,2),u=m[0],s=m[1],h=(0,o.useState)(0),p=(0,l.default)(h,2),c=p[0],f=p[1],x=(0,o.useState)(""),g=(0,l.default)(x,2),C=g[0],b=g[1],v=(0,o.useState)(""),N=(0,l.default)(v,2),w=N[0],T=N[1],k=(0,o.useState)(""),S=(0,l.default)(k,2),y=S[0],R=S[1];return o.default.createElement("div",null,o.default.createElement("p",null,"onFocus Trigger Count:"," ",o.default.createElement("span",{id:"onFocus-count"},u),o.default.createElement("br",null),o.default.createElement("br",null),"onBlur Trigger Count:"," ",o.default.createElement("span",{id:"onBlur-count"},n),o.default.createElement("br",null),o.default.createElement("br",null),"onRequestClose Trigger Count:"," ",o.default.createElement("span",{id:"onRequestClose-count"},c),o.default.createElement("br",null),o.default.createElement("br",null),"onChangeRaw Triggered:"," ",o.default.createElement("span",{id:"onChangeRaw"},w),o.default.createElement("br",null),o.default.createElement("br",null),"onChange Triggered:"," ",o.default.createElement("span",{id:"onChange"},C),o.default.createElement("br",null),o.default.createElement("br",null),"onSelect Triggered:"," ",o.default.createElement("span",{id:"onSelect"},y)),o.default.createElement(r.default,{name:"date-time-picker-events",onBlur:function(){a(n+1)},onFocus:function(){s(u+1)},onChange:function(e,t){b(t)},onChangeRaw:function(e,t){T(t)},onSelect:function(e,t){R(t)},onRequestClose:function(){f(c+1)},timeVariant:d.default.FORMAT_12_HOUR,showSeconds:!0}))}}}]);