"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[48885],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),i=a(n(45697)),r=a(n(47166)),o=a(n(17422)),d=r.default.bind(o.default),u={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},m=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,r=l.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},l.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(i))),o=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},r,o)};m.propTypes=u;var s=m;t.Z=s},49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var i=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(45697)),d=a(n(47166)),u=n(21538),m=a(n(33864)),s=a(n(23399)),c=n(51051),p=a(n(53560));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}var f=d.default.bind(p.default),g={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,o=e.description,d=e.isExpanded,p=(0,r.useState)(d),h=(0,i.default)(p,2),g=h[0],v=h[1],C=(0,r.useState)(!1),N=(0,i.default)(C,2),_=N[0],w=N[1],T=r.default.useContext(u.ThemeContext),E=void 0!==a,y=function(){w(!_),g&&v(!g)},k=function(){v(!g),_&&w(!_)},S=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:f("template",T.className)},r.default.createElement("div",{className:f("header")},l&&r.default.createElement("h2",{className:f("title")},l)),r.default.createElement("div",{className:f("content")},o&&r.default.createElement("div",{className:f("description")},o),t),r.default.createElement("div",{className:f("footer")},n?r.default.createElement("div",{className:f("button-container")},E&&r.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":_}),onClick:y,onKeyDown:function(e){return S(e,y)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(m.default,{className:f("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(s.default,{className:f("chevron")})),r.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":g}),onClick:k,onKeyDown:function(e){return S(e,k)},onBlur:b,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(m.default,{className:f("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(s.default,{className:f("chevron")}))):null,r.default.createElement("div",null,_&&r.default.createElement("div",{className:f("css")},a),g&&r.default.createElement("div",{className:f("code")},n))))};v.propTypes=g,v.defaultProps={isExpanded:!1};var C=v;t.Z=C},42791:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(87462),l=n(44925),i=n(67294),r=n(81254),o=n(10362),d=n(41836),u=["components"],m={};function s(e){var t=e.components,n=(0,l.Z)(e,u);return(0,r.mdx)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport DateTimePicker from 'terra-date-time-picker';\nimport DateTimeUtils from 'terra-date-time-picker/lib/DateTimeUtils';\n\nconst DateTimePickerEvents = () => {\n  const [blurCount, setBlurCount] = useState(0);\n  const [focusCount, setFocusCount] = useState(0);\n  const [onRequestCloseCount, setonRequestCloseCount] = useState(0);\n  const [changeValue, setChangeValue] = useState('');\n  const [changeRawValue, setChangeRawValue] = useState('');\n  const [selectValue, setSelectValue] = useState('');\n\n  const handleBlur = () => {\n    setBlurCount(blurCount + 1);\n  };\n\n  const handleFocus = () => {\n    setFocusCount(focusCount + 1);\n  };\n\n  const handleChange = (event, value) => {\n    setChangeValue(value);\n  };\n\n  const handleChangeRaw = (event, value) => {\n    setChangeRawValue(value);\n  };\n\n  const handleSelect = (event, value) => {\n    setSelectValue(value);\n  };\n\n  const handleOnRequestClose = () => {\n    setonRequestCloseCount(onRequestCloseCount + 1);\n  };\n\n  return (\n    <div>\n      <p>\n        onFocus Trigger Count:\n        {' '}\n        <span id=\"onFocus-count\">{focusCount}</span>\n        <br />\n        <br />\n        onBlur Trigger Count:\n        {' '}\n        <span id=\"onBlur-count\">{blurCount}</span>\n        <br />\n        <br />\n        onRequestClose Trigger Count:\n        {' '}\n        <span id=\"onRequestClose-count\">{onRequestCloseCount}</span>\n        <br />\n        <br />\n        onChangeRaw Triggered:\n        {' '}\n        <span id=\"onChangeRaw\">{changeRawValue}</span>\n        <br />\n        <br />\n        onChange Triggered:\n        {' '}\n        <span id=\"onChange\">{changeValue}</span>\n        <br />\n        <br />\n        onSelect Triggered:\n        {' '}\n        <span id=\"onSelect\">{selectValue}</span>\n      </p>\n      <DateTimePicker\n        name=\"date-time-picker-events\"\n        onBlur={handleBlur}\n        onFocus={handleFocus}\n        onChange={handleChange}\n        onChangeRaw={handleChangeRaw}\n        onSelect={handleSelect}\n        onRequestClose={handleOnRequestClose}\n        timeVariant={DateTimeUtils.FORMAT_12_HOUR}\n        showSeconds\n      />\n    </div>\n  );\n};\n\nexport default DateTimePickerEvents;\n\n")))}s.isMDXComponent=!0;var c=n(49271),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.createElement(c.Z,{title:t||"Date Time Picker Events",description:n,example:i.createElement(d.Z,null),exampleSrc:i.createElement(s,null),isExpanded:a})},h=["components"],f={},g="wrapper";function b(e){var t=e.components,n=(0,l.Z)(e,h);return(0,r.mdx)(g,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-date-time-picker"},"Terra Date Time Picker"),(0,r.mdx)("h2",{id:"events"},"Events"),(0,r.mdx)("p",null,"terra-date-time-picker has several callback events that are slightly different in behavior from the native counterparts."),(0,r.mdx)("h3",{id:"onblur"},"onBlur"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"onBlur")," callback prop is triggered only when the entire component loses focus. If the focus is moved from the date input to the time input, the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onBlur")," event will not be triggered since the focus is still within the DateTime Picker component. The ",(0,r.mdx)("inlineCode",{parentName:"li"},"onBlur")," event would be triggered when the focus is moved to any element that is not a child node of the DateTime Picker."),(0,r.mdx)("li",{parentName:"ul"},"There are two paramters in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onBlur")," callback prop. The first parameter is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"event")," object representing the blur event. The second parameter is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"options")," object that contains the following attributes to describe the current state of the input values at the time when the component loses focus.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"iSO")," - The date/time value in the ISO format. This attribute would be empty if the date/time value is either empty or is not a complete date time. That is, the ISO string is available only if the isCompleteValue attribute is true."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"inputValue")," - The face up value in the date and time inputs. If both the date and time have a value, these values will be separated by an white space."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"dateValue")," - The face up value in the date input."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"timeValue")," - The face up value in the time input."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isAmbiguousHour")," - A boolean to indicate whether or not both the date and time values correspond to an ambiguous hour. If this boolean is true, the date and time correspond to an ambiguous hour."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isCompleteValue")," - A boolean to indicate whether or not both the date and time values are filled out and conforms to the date/time format. If this boolean is false, the iSO attribute would be empty."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isValidValue")," - A boolean to indicate whether or not the complete date/time value is within the range of the minDate and maxDate props and is not an excluded date.")))),(0,r.mdx)("h3",{id:"onchange"},"onChange"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChange")," callback prop is triggered only when both a valid date and time that conform to the format is entered directly in the date and time inputs or selected from the date picker. The ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChange")," callback prop would not be triggered if the entered or selected date meets one of the following criteria.")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"An exlcuded date in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"excludeDates")," prop."),(0,r.mdx)("li",{parentName:"ul"},"A date that is filtered by the ",(0,r.mdx)("inlineCode",{parentName:"li"},"filterDate")," prop."),(0,r.mdx)("li",{parentName:"ul"},"Not an included date in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"includeDates")," prop."),(0,r.mdx)("li",{parentName:"ul"},"Not within the range of the ",(0,r.mdx)("inlineCode",{parentName:"li"},"minDate")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"maxDate")," props.")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"There are three parameters in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChange")," callback prop. The first parameter is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"event")," object. The second parameter is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"date and time")," value. The third parameter is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"options")," object that contains the following attributes to describe the current state of the input values at the time when the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChange")," callback is triggered.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"iSO")," - The date/time value in the ISO format. This attribute would be empty if the date/time value is either empty or is not a complete date time. That is, the ISO string is available only if the isCompleteValue attribute is true."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"inputValue")," - The face up value in the date and time inputs. If both the date and time have a value, these values will be separated by an white space."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"dateValue")," - The face up value in the date input."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"timeValue")," - The face up value in the time input."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isAmbiguousHour")," - A boolean to indicate whether or not both the date and time values correspond to an ambiguous hour. If this boolean is true, the date and time correspond to an ambiguous hour."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isCompleteValue")," - A boolean to indicate whether or not both the date and time values are filled out and conforms to the date/time format. If this boolean is false, the iSO attribute would be empty."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isValidValue")," - A boolean to indicate whether or not the complete date/time value is within the range of the minDate and maxDate props and is not an excluded date.")))),(0,r.mdx)("h3",{id:"onchangeraw"},"onChangeRaw"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChangeRaw")," callback prop is triggered whenever any key is entered in the date input. If the entered value happens to be a valid date and time, both the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChangeRaw")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChange")," events will be triggered. The ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChangeRaw")," event would be triggered first followed by the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChange")," event."),(0,r.mdx)("li",{parentName:"ul"},"There are three parameters in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChangeRaw")," callback prop. The first parameter is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"event")," object. The second parameter is ",(0,r.mdx)("inlineCode",{parentName:"li"},"either the date or time")," value, which ever was changed. The third parameter is the ",(0,r.mdx)("inlineCode",{parentName:"li"},"options")," object that contains the following attributes to describe the current state of the input values at the time when the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChangeRaw")," callback is triggered.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"iSO")," - The date/time value in the ISO format. This attribute would be empty if the date/time value is either empty or is not a complete date time. That is, the ISO string is available only if the isCompleteValue attribute is true."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"inputValue")," - The face up value in the date and time inputs. If both the date and time have a value, these values will be separated by an white space."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"dateValue")," - The face up value in the date input."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"timeValue")," - The face up value in the time input."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isAmbiguousHour")," - A boolean to indicate whether or not both the date and time values correspond to an ambiguous hour. If this boolean is true, the date and time correspond to an ambiguous hour."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isCompleteValue")," - A boolean to indicate whether or not both the date and time values are filled out and conforms to the date/time format. If this boolean is false, the iSO attribute would be empty."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"isValidValue")," - A boolean to indicate whether or not the complete date/time value is within the range of the minDate and maxDate props and is not an excluded date.")))),(0,r.mdx)("h3",{id:"onrequestclose"},"onRequestClose"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"onRequestClose")," callback prop is triggered when dismissing the datepicker.")),(0,r.mdx)("h3",{id:"onfocus"},"onFocus"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"onFocus")," callback prop is triggered when the component initially gains focus. If the focus is moved from the date input to the time input, the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onFocus")," event will not be triggered since the focus is still within the DateTime Picker component. Similar to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onBlur")," event, the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onFocus")," event does not get triggered when the focus is moved from one child node of the DateTime Picker component to another child node of the same DateTime Picker component.")),(0,r.mdx)("h3",{id:"onselect"},"onSelect"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"onSelect")," callback prop is triggered when a date is selected from the date picker. Once a date is selected, the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onChange")," event will be triggered first (if the newly selected is different from the previous date) followed by the ",(0,r.mdx)("inlineCode",{parentName:"li"},"onSelect")," event.")),(0,r.mdx)("h2",{id:"event-trigger-order"},"Event Trigger Order"),(0,r.mdx)("p",null,"When these actions are taken, the events are triggered in the following order."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Manual date entry ",(0,r.mdx)("ol",{parentName:"li"},(0,r.mdx)("li",{parentName:"ol"},"onChangeRaw"),(0,r.mdx)("li",{parentName:"ol"},"onChange (if the entered date and time are valid.)"))),(0,r.mdx)("li",{parentName:"ul"},"Selection from the picker",(0,r.mdx)("ol",{parentName:"li"},(0,r.mdx)("li",{parentName:"ol"},"onSelect"),(0,r.mdx)("li",{parentName:"ol"},"onChange (if the existing time is valid which now forms a complete date time value.)")))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(p,{title:"Date Picker Event Triggers",mdxType:"DateTimePickerEvents"}))}b.isMDXComponent=!0},10362:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),l=n(22863),i=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-time-picker",name:"terra-date-time-picker",version:"4.89.0",url:t})}},41836:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var i=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(44887)),d=a(n(77947));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var m=function(){var e=(0,r.useState)(0),t=(0,i.default)(e,2),n=t[0],a=t[1],l=(0,r.useState)(0),u=(0,i.default)(l,2),m=u[0],s=u[1],c=(0,r.useState)(0),p=(0,i.default)(c,2),h=p[0],f=p[1],g=(0,r.useState)(""),b=(0,i.default)(g,2),x=b[0],v=b[1],C=(0,r.useState)(""),N=(0,i.default)(C,2),_=N[0],w=N[1],T=(0,r.useState)(""),E=(0,i.default)(T,2),y=E[0],k=E[1];return r.default.createElement("div",null,r.default.createElement("p",null,"onFocus Trigger Count:"," ",r.default.createElement("span",{id:"onFocus-count"},m),r.default.createElement("br",null),r.default.createElement("br",null),"onBlur Trigger Count:"," ",r.default.createElement("span",{id:"onBlur-count"},n),r.default.createElement("br",null),r.default.createElement("br",null),"onRequestClose Trigger Count:"," ",r.default.createElement("span",{id:"onRequestClose-count"},h),r.default.createElement("br",null),r.default.createElement("br",null),"onChangeRaw Triggered:"," ",r.default.createElement("span",{id:"onChangeRaw"},_),r.default.createElement("br",null),r.default.createElement("br",null),"onChange Triggered:"," ",r.default.createElement("span",{id:"onChange"},x),r.default.createElement("br",null),r.default.createElement("br",null),"onSelect Triggered:"," ",r.default.createElement("span",{id:"onSelect"},y)),r.default.createElement(o.default,{name:"date-time-picker-events",onBlur:function(){a(n+1)},onFocus:function(){s(m+1)},onChange:function(e,t){v(t)},onChangeRaw:function(e,t){w(t)},onSelect:function(e,t){k(t)},onRequestClose:function(){f(h+1)},timeVariant:d.default.FORMAT_12_HOUR,showSeconds:!0}))};t.Z=m},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),l=i(n(99139));function i(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var o=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=o;t.default=d},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);