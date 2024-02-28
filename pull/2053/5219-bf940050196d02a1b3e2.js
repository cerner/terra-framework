(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[5219],{201:function(e,t,a){"use strict";var n=a(24994),l=a(73738);t.A=void 0;var r=n(a(85715)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=x(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(96540)),m=n(a(5556)),u=n(a(67967)),s=a(92912),p=n(a(49558)),o=n(a(53665)),i=a(25966),c=n(a(89986));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:t})(e)}var f=u.default.bind(c.default),y={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},j=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,m=e.description,u=e.isExpanded,c=(0,d.useState)(u),x=(0,r.default)(c,2),y=x[0],g=x[1],v=(0,d.useState)(!1),T=(0,r.default)(v,2),b=T[0],N=T[1],C=d.default.useContext(s.ThemeContext),_=void 0!==n,D=function(){N(!b),y&&g(!y)},k=function(){g(!y),b&&N(!b)},w=function(e,t){e.nativeEvent.keyCode!==i.KEY_SPACE&&e.nativeEvent.keyCode!==i.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:f("template",C.className)},d.default.createElement("div",{className:f("header")},l&&d.default.createElement("h2",{className:f("title")},l)),d.default.createElement("div",{className:f("content")},m&&d.default.createElement("div",{className:f("description")},m),t),d.default.createElement("div",{className:f("footer")},a?d.default.createElement("div",{className:f("button-container")},_&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":b}),onClick:D,onKeyDown:function(e){return w(e,D)},onBlur:j,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(o.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:k,onKeyDown:function(e){return w(e,k)},onBlur:j,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(o.default,{className:f("chevron")}))):null,d.default.createElement("div",null,b&&d.default.createElement("div",{className:f("css")},n),y&&d.default.createElement("div",{className:f("code")},a))))};g.propTypes=y,g.defaultProps={isExpanded:!1};t.A=g},89606:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return I}});var n=a(58168),l=a(53986),r=a(96540),d=a(36665),m=a(74481),u=a(12883),s=["components"],p={},o="wrapper";function i(e){var t=e.components,a=(0,l.A)(e,s);return(0,d.mdx)(o,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(u.Ay,{mdxType:"PropsTable"},(0,d.mdx)(u.fI,{key:"ROW1",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"a11yLabel"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"An identifier used by assistive technologies like screen readers to briefly describe this time input to users.\nThe label is not rendered visually."),(0,d.mdx)("p",null,(0,d.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"  ",(0,d.mdx)("strong",{parentName:"p"},"BEST PRACTICE FOR ACCESSIBILITY"),": you ",(0,d.mdx)("em",{parentName:"p"},"SHOULD")," set this to match whatever visible label you give in your UI.\nCurrently this is optional for passivity reasons, but it will become mandatory in a future major version."))),(0,d.mdx)(u.fI,{key:"ROW2",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"name"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(u.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Name of the date input. This name should be unique."))),(0,d.mdx)(u.fI,{key:"ROW3",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"dayAttributes"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Custom input attributes to apply to the day input"))),(0,d.mdx)(u.fI,{key:"ROW4",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"disabled"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether the date input should be disabled."))),(0,d.mdx)(u.fI,{key:"ROW5",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"displayFormat"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'month-day-year'\n  'day-month-year'\n],\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Can be used to set the display format. One of ",(0,d.mdx)("inlineCode",{parentName:"p"},"month-day-year")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"day-month-year"),".\nOverrides default locale display format."))),(0,d.mdx)(u.fI,{key:"ROW6",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"isIncomplete"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether the input displays as Incomplete. Use when no value has been provided. ",(0,d.mdx)("em",{parentName:"p"},"(usage note: ",(0,d.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,d.mdx)(u.fI,{key:"ROW7",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"isInvalid"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether the input displays as Invalid. Use when value does not meet validation pattern."))),(0,d.mdx)(u.fI,{key:"ROW8",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"monthAttributes"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Custom input attributes to apply to the month select"))),(0,d.mdx)(u.fI,{key:"ROW9",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"onBlur"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"A callback function to execute when the entire date input component loses focus.\nThis event does not get triggered when the focus is moved from one input to another within the date input component because the focus is still within the main date input component."))),(0,d.mdx)(u.fI,{key:"ROW10",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"onChange"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"A callback function to execute when a date is entered.\nThe first parameter is the event. The second parameter is the changed date value."))),(0,d.mdx)(u.fI,{key:"ROW11",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"onFocus"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"A callback function triggered when the day, month, or year input receives focus."))),(0,d.mdx)(u.fI,{key:"ROW12",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"refCallback"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback ref to access date input containing DOM element."))),(0,d.mdx)(u.fI,{key:"ROW13",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"required"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether is the date input is required"))),(0,d.mdx)(u.fI,{key:"ROW14",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"value"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"An date string representation of the date value used for the component. This should be in ISO 8601 format: YYYY-MM-DD."))),(0,d.mdx)(u.fI,{key:"ROW15",mdxType:"Row"},(0,d.mdx)(u.dt,{mdxType:"PropNameCell"},"yearAttributes"),(0,d.mdx)(u.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,d.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Custom input attributes to apply to the year input")))))}i.isMDXComponent=!0;var c=a(84854),x=["components"],f={};function y(e){var t=e.components,a=(0,l.A)(e,x);return(0,d.mdx)("wrapper",(0,n.A)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}y.isMDXComponent=!0;var j=a(201),h=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(j.A,{title:t||"Default Date Input",description:a,example:r.createElement(c.A,null),exampleSrc:r.createElement(y,null),isExpanded:n})},g=a(57242),v=["components"],T={};function b(e){var t=e.components,a=(0,l.A)(e,v);return(0,d.mdx)("wrapper",(0,n.A)({},T,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n        displayFormat=\"month-day-year\"\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}b.isMDXComponent=!0;var N=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(j.A,{title:t||"Month Day Year Date Input",description:a,example:r.createElement(g.A,null),exampleSrc:r.createElement(b,null),isExpanded:n})},C=a(69322),_=["components"],D={};function k(e){var t=e.components,a=(0,l.A)(e,_);return(0,d.mdx)("wrapper",(0,n.A)({},D,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n        displayFormat=\"day-month-year\"\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}k.isMDXComponent=!0;var w=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(j.A,{title:t||"Day Month Year Date Input",description:a,example:r.createElement(C.A,null),exampleSrc:r.createElement(k,null),isExpanded:n})},E=["components"],R={},O="wrapper";function I(e){var t=e.components,a=(0,l.A)(e,E);return(0,d.mdx)(O,(0,n.A)({},R,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(m.E,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"terra-date-input"},"Terra Date Input"),(0,d.mdx)("p",null,"The DateInput allows for easy data entry of known dates like birthdays, anniversaries, etc. The display of the DateInput is localized based on the locale but can be customized via the ",(0,d.mdx)("inlineCode",{parentName:"p"},"displayFormat")," prop. The DateInput uses the ISO 8601 format for date values (YYYY-MM-DD)."),(0,d.mdx)("p",null,"Additional functionality for quick date entry is available with specific ",(0,d.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2053/components/cerner-terra-framework-docs/date-input/keyboard-shortcuts"},"keyboard shortcuts"),"."),(0,d.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Install with ",(0,d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"npm install terra-date-input"))))),(0,d.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,d.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,d.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,d.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,d.mdx)("h2",{id:"component-features"},"Component Features"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,d.mdx)("h2",{id:"examples"},"Examples"),(0,d.mdx)(h,{title:"Default DateInput",mdxType:"DefaultDateInput"}),(0,d.mdx)(N,{title:"Month Day Year Display Format DateInput",mdxType:"MonthDayYearDateInput"}),(0,d.mdx)(w,{title:"Day Month Year Display Format DateInput",mdxType:"DayMonthYearDateInput"}),(0,d.mdx)("h2",{id:"date-input-props-table"},"Date Input props table"),(0,d.mdx)(i,{mdxType:"DateInputPropsTable"}),(0,d.mdx)("h2",{id:"testing"},"Testing"),(0,d.mdx)("p",null,"Date Input uses ",(0,d.mdx)("inlineCode",{parentName:"p"},"uuid")," which changes the component's description id dynamically. To mock the return value with the Jest testing library, ",(0,d.mdx)("inlineCode",{parentName:"p"},"jest.spyOn")," can be used."),(0,d.mdx)("p",null,"If Enzyme ",(0,d.mdx)("inlineCode",{parentName:"p"},"shallow")," rendering is being used for the tests then the mock may not be required. However, if ",(0,d.mdx)("inlineCode",{parentName:"p"},"mount")," is used then ",(0,d.mdx)("inlineCode",{parentName:"p"},"uuid")," should be mocked as shown below:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"import { v4 as uuidv4 } from 'uuid';\n\nlet mockSpyUuid;\n\n// using a variable may result in failures. For best results, mock return value.\nbeforeAll(() => {\n  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');\n});\n\n// restore the mock\nafterAll(() => {\n  mockSpyUuid.mockRestore();\n});\n\n")))}I.isMDXComponent=!0},74481:function(e,t,a){"use strict";a.d(t,{E:function(){return r}});var n=a(96540),l=a(55713),r=function(e){var t=e.url;return n.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-input",name:"terra-date-input",version:"1.52.0",url:t})}},69322:function(e,t,a){"use strict";var n=a(24994),l=a(73738);t.A=void 0;var r=n(a(85715)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(96540)),m=n(a(78053));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}t.A=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.default,{name:"date-input-value",value:a,onChange:function(e,t){return n(t)},displayFormat:"day-month-year"}),d.default.createElement("p",null,"DateInput Value: ".concat(a)))}},84854:function(e,t,a){"use strict";var n=a(24994),l=a(73738);t.A=void 0;var r=n(a(85715)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(96540)),m=n(a(78053));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}t.A=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.default,{name:"date-input-value",value:a,onChange:function(e,t){return n(t)}}),d.default.createElement("p",null,"DateInput Value: ".concat(a)))}},57242:function(e,t,a){"use strict";var n=a(24994),l=a(73738);t.A=void 0;var r=n(a(85715)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(96540)),m=n(a(78053));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}t.A=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.default,{name:"date-input-value",value:a,onChange:function(e,t){return n(t)},displayFormat:"month-day-year"}),d.default.createElement("p",null,"DateInput Value: ".concat(a)))}},89986:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},35358:function(e,t,a){var n={"./af":25177,"./af.js":25177,"./ar":61509,"./ar-dz":41488,"./ar-dz.js":41488,"./ar-kw":58676,"./ar-kw.js":58676,"./ar-ly":42353,"./ar-ly.js":42353,"./ar-ma":24496,"./ar-ma.js":24496,"./ar-ps":6947,"./ar-ps.js":6947,"./ar-sa":82682,"./ar-sa.js":82682,"./ar-tn":89756,"./ar-tn.js":89756,"./ar.js":61509,"./az":95533,"./az.js":95533,"./be":28959,"./be.js":28959,"./bg":47777,"./bg.js":47777,"./bm":54903,"./bm.js":54903,"./bn":61290,"./bn-bd":17357,"./bn-bd.js":17357,"./bn.js":61290,"./bo":31545,"./bo.js":31545,"./br":11470,"./br.js":11470,"./bs":44429,"./bs.js":44429,"./ca":7306,"./ca.js":7306,"./cs":56464,"./cs.js":56464,"./cv":73635,"./cv.js":73635,"./cy":64226,"./cy.js":64226,"./da":93601,"./da.js":93601,"./de":77853,"./de-at":26111,"./de-at.js":26111,"./de-ch":54697,"./de-ch.js":54697,"./de.js":77853,"./dv":60708,"./dv.js":60708,"./el":54691,"./el.js":54691,"./en-au":53872,"./en-au.js":53872,"./en-ca":28298,"./en-ca.js":28298,"./en-gb":56195,"./en-gb.js":56195,"./en-ie":66584,"./en-ie.js":66584,"./en-il":65543,"./en-il.js":65543,"./en-in":9033,"./en-in.js":9033,"./en-nz":79402,"./en-nz.js":79402,"./en-sg":43004,"./en-sg.js":43004,"./eo":10553,"./eo.js":10553,"./es":97650,"./es-do":20838,"./es-do.js":20838,"./es-mx":17730,"./es-mx.js":17730,"./es-us":56575,"./es-us.js":56575,"./es.js":97650,"./et":3035,"./et.js":3035,"./eu":3508,"./eu.js":3508,"./fa":119,"./fa.js":119,"./fi":90527,"./fi.js":90527,"./fil":95995,"./fil.js":95995,"./fo":52477,"./fo.js":52477,"./fr":85498,"./fr-ca":26435,"./fr-ca.js":26435,"./fr-ch":37892,"./fr-ch.js":37892,"./fr.js":85498,"./fy":37071,"./fy.js":37071,"./ga":41734,"./ga.js":41734,"./gd":70217,"./gd.js":70217,"./gl":77329,"./gl.js":77329,"./gom-deva":32124,"./gom-deva.js":32124,"./gom-latn":93383,"./gom-latn.js":93383,"./gu":95050,"./gu.js":95050,"./he":11713,"./he.js":11713,"./hi":43861,"./hi.js":43861,"./hr":26308,"./hr.js":26308,"./hu":90609,"./hu.js":90609,"./hy-am":17160,"./hy-am.js":17160,"./id":74063,"./id.js":74063,"./is":89374,"./is.js":89374,"./it":88383,"./it-ch":21827,"./it-ch.js":21827,"./it.js":88383,"./ja":23827,"./ja.js":23827,"./jv":89722,"./jv.js":89722,"./ka":41794,"./ka.js":41794,"./kk":27088,"./kk.js":27088,"./km":96870,"./km.js":96870,"./kn":84451,"./kn.js":84451,"./ko":63164,"./ko.js":63164,"./ku":98174,"./ku-kmr":6181,"./ku-kmr.js":6181,"./ku.js":98174,"./ky":78474,"./ky.js":78474,"./lb":79680,"./lb.js":79680,"./lo":15867,"./lo.js":15867,"./lt":45766,"./lt.js":45766,"./lv":69532,"./lv.js":69532,"./me":58076,"./me.js":58076,"./mi":41848,"./mi.js":41848,"./mk":30306,"./mk.js":30306,"./ml":73739,"./ml.js":73739,"./mn":99053,"./mn.js":99053,"./mr":86169,"./mr.js":86169,"./ms":73386,"./ms-my":92297,"./ms-my.js":92297,"./ms.js":73386,"./mt":77075,"./mt.js":77075,"./my":72264,"./my.js":72264,"./nb":22274,"./nb.js":22274,"./ne":8235,"./ne.js":8235,"./nl":92572,"./nl-be":43784,"./nl-be.js":43784,"./nl.js":92572,"./nn":54566,"./nn.js":54566,"./oc-lnc":69330,"./oc-lnc.js":69330,"./pa-in":29849,"./pa-in.js":29849,"./pl":94418,"./pl.js":94418,"./pt":79834,"./pt-br":48303,"./pt-br.js":48303,"./pt.js":79834,"./ro":24457,"./ro.js":24457,"./ru":82271,"./ru.js":82271,"./sd":1221,"./sd.js":1221,"./se":33478,"./se.js":33478,"./si":17538,"./si.js":17538,"./sk":5784,"./sk.js":5784,"./sl":46637,"./sl.js":46637,"./sq":86794,"./sq.js":86794,"./sr":45719,"./sr-cyrl":3322,"./sr-cyrl.js":3322,"./sr.js":45719,"./ss":56e3,"./ss.js":56e3,"./sv":41011,"./sv.js":41011,"./sw":40748,"./sw.js":40748,"./ta":11025,"./ta.js":11025,"./te":11885,"./te.js":11885,"./tet":28861,"./tet.js":28861,"./tg":86571,"./tg.js":86571,"./th":55802,"./th.js":55802,"./tk":59527,"./tk.js":59527,"./tl-ph":29231,"./tl-ph.js":29231,"./tlh":31052,"./tlh.js":31052,"./tr":85096,"./tr.js":85096,"./tzl":79846,"./tzl.js":79846,"./tzm":81765,"./tzm-latn":97711,"./tzm-latn.js":97711,"./tzm.js":81765,"./ug-cn":48414,"./ug-cn.js":48414,"./uk":16618,"./uk.js":16618,"./ur":57777,"./ur.js":57777,"./uz":57609,"./uz-latn":72475,"./uz-latn.js":72475,"./uz.js":57609,"./vi":21135,"./vi.js":21135,"./x-pseudo":64051,"./x-pseudo.js":64051,"./yo":82218,"./yo.js":82218,"./zh-cn":52648,"./zh-cn.js":52648,"./zh-hk":1632,"./zh-hk.js":1632,"./zh-mo":31541,"./zh-mo.js":31541,"./zh-tw":50304,"./zh-tw.js":50304};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=35358},49558:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var m=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=m}}]);