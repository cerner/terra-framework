"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[66614],{49271:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=x(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}n.default=e,a&&a.set(e,n);return n}(a(67294)),m=n(a(45697)),p=n(a(47166)),u=a(21538),o=n(a(33864)),i=n(a(23399)),s=a(51051),c=n(a(53560));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:t})(e)}var f=p.default.bind(c.default),y={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,m=e.description,p=e.isExpanded,c=(0,d.useState)(p),x=(0,r.default)(c,2),y=x[0],g=x[1],T=(0,d.useState)(!1),N=(0,r.default)(T,2),C=N[0],b=N[1],D=d.default.useContext(u.ThemeContext),_=void 0!==n,E=function(){b(!C),y&&g(!y)},w=function(){g(!y),C&&b(!C)},R=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:f("template",D.className)},d.default.createElement("div",{className:f("header")},l&&d.default.createElement("h2",{className:f("title")},l)),d.default.createElement("div",{className:f("content")},m&&d.default.createElement("div",{className:f("description")},m),t),d.default.createElement("div",{className:f("footer")},a?d.default.createElement("div",{className:f("button-container")},_&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":C}),onClick:E,onKeyDown:function(e){return R(e,E)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(o.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(i.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return R(e,w)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(o.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(i.default,{className:f("chevron")}))):null,d.default.createElement("div",null,C&&d.default.createElement("div",{className:f("css")},n),y&&d.default.createElement("div",{className:f("code")},a))))};g.propTypes=y,g.defaultProps={isExpanded:!1};var T=g;t.Z=T},66614:function(e,t,a){a.r(t),a.d(t,{default:function(){return S}});var n=a(87462),l=a(44925),r=a(67294),d=a(81254),m=a(69460),p=a(78530),u=["components"],o={},i="wrapper";function s(e){var t=e.components,a=(0,l.Z)(e,u);return(0,d.mdx)(i,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(p.ZP,{mdxType:"PropsTable"},(0,d.mdx)(p.X2,{key:"ROW1",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"a11yLabel"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"An identifier used by assistive technologies like screen readers to briefly describe this time input to users.\nThe label is not rendered visually."),(0,d.mdx)("p",null,(0,d.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"  ",(0,d.mdx)("strong",{parentName:"p"},"BEST PRACTICE FOR ACCESSIBILITY"),": you ",(0,d.mdx)("em",{parentName:"p"},"SHOULD")," set this to match whatever visible label you give in your UI.\nCurrently this is optional for passivity reasons, but it will become mandatory in a future major version."))),(0,d.mdx)(p.X2,{key:"ROW2",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"name"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(p.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Name of the date input. This name should be unique."))),(0,d.mdx)(p.X2,{key:"ROW3",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"dayAttributes"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Custom input attributes to apply to the day input"))),(0,d.mdx)(p.X2,{key:"ROW4",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"disabled"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether the date input should be disabled."))),(0,d.mdx)(p.X2,{key:"ROW5",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"displayFormat"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'month-day-year'\n  'day-month-year'\n],\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Can be used to set the display format. One of ",(0,d.mdx)("inlineCode",{parentName:"p"},"month-day-year")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"day-month-year"),".\nOverrides default locale display format."))),(0,d.mdx)(p.X2,{key:"ROW6",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether the input displays as Incomplete. Use when no value has been provided. ",(0,d.mdx)("em",{parentName:"p"},"(usage note: ",(0,d.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,d.mdx)(p.X2,{key:"ROW7",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"isInvalid"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether the input displays as Invalid. Use when value does not meet validation pattern."))),(0,d.mdx)(p.X2,{key:"ROW8",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"monthAttributes"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Custom input attributes to apply to the month select"))),(0,d.mdx)(p.X2,{key:"ROW9",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"onBlur"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"A callback function to execute when the entire date input component loses focus.\nThis event does not get triggered when the focus is moved from one input to another within the date input component because the focus is still within the main date input component."))),(0,d.mdx)(p.X2,{key:"ROW10",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"onChange"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"A callback function to execute when a date is entered.\nThe first parameter is the event. The second parameter is the changed date value."))),(0,d.mdx)(p.X2,{key:"ROW11",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"onFocus"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"A callback function triggered when the day, month, or year input receives focus."))),(0,d.mdx)(p.X2,{key:"ROW12",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"refCallback"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback ref to access date input containing DOM element."))),(0,d.mdx)(p.X2,{key:"ROW13",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"required"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether is the date input is required"))),(0,d.mdx)(p.X2,{key:"ROW14",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"value"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"An date string representation of the date value used for the component. This should be in ISO 8601 format: YYYY-MM-DD."))),(0,d.mdx)(p.X2,{key:"ROW15",mdxType:"Row"},(0,d.mdx)(p.O,{mdxType:"PropNameCell"},"yearAttributes"),(0,d.mdx)(p.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(p.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(p.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,d.mdx)(p.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Custom input attributes to apply to the year input")))))}s.isMDXComponent=!0;var c=a(51986),x=["components"],f={};function y(e){var t=e.components,a=(0,l.Z)(e,x);return(0,d.mdx)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}y.isMDXComponent=!0;var h=a(49271),v=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(h.Z,{title:t||"Default Date Input",description:a,example:r.createElement(c.Z,null),exampleSrc:r.createElement(y,null),isExpanded:n})},g=a(65960),T=["components"],N={};function C(e){var t=e.components,a=(0,l.Z)(e,T);return(0,d.mdx)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n        displayFormat=\"month-day-year\"\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}C.isMDXComponent=!0;var b=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(h.Z,{title:t||"Month Day Year Date Input",description:a,example:r.createElement(g.Z,null),exampleSrc:r.createElement(C,null),isExpanded:n})},D=a(19624),_=["components"],E={};function w(e){var t=e.components,a=(0,l.Z)(e,_);return(0,d.mdx)("wrapper",(0,n.Z)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n        displayFormat=\"day-month-year\"\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}w.isMDXComponent=!0;var R=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(h.Z,{title:t||"Day Month Year Date Input",description:a,example:r.createElement(D.Z,null),exampleSrc:r.createElement(w,null),isExpanded:n})},O=["components"],j={},k="wrapper";function S(e){var t=e.components,a=(0,l.Z)(e,O);return(0,d.mdx)(k,(0,n.Z)({},j,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(m.C,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"terra-date-input"},"Terra Date Input"),(0,d.mdx)("p",null,"The DateInput allows for easy data entry of known dates like birthdays, anniversaries, etc. The display of the DateInput is localized based on the locale but can be customized via the ",(0,d.mdx)("inlineCode",{parentName:"p"},"displayFormat")," prop. The DateInput uses the ISO 8601 format for date values (YYYY-MM-DD)."),(0,d.mdx)("p",null,"Additional functionality for quick date entry is available with specific ",(0,d.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1699/components/cerner-terra-framework-docs/date-input/keyboard-shortcuts"},"keyboard shortcuts"),"."),(0,d.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Install with ",(0,d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"npm install terra-date-input"))))),(0,d.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,d.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,d.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,d.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,d.mdx)("h2",{id:"component-features"},"Component Features"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,d.mdx)("h2",{id:"examples"},"Examples"),(0,d.mdx)(v,{title:"Default DateInput",mdxType:"DefaultDateInput"}),(0,d.mdx)(b,{title:"Month Day Year Display Format DateInput",mdxType:"MonthDayYearDateInput"}),(0,d.mdx)(R,{title:"Day Month Year Display Format DateInput",mdxType:"DayMonthYearDateInput"}),(0,d.mdx)("h2",{id:"date-input-props-table"},"Date Input props table"),(0,d.mdx)(s,{mdxType:"DateInputPropsTable"}),(0,d.mdx)("h2",{id:"testing"},"Testing"),(0,d.mdx)("p",null,"Date Input uses ",(0,d.mdx)("inlineCode",{parentName:"p"},"uuid")," which changes the component's description id dynamically. To mock it with the Jest testing library, ",(0,d.mdx)("inlineCode",{parentName:"p"},"jest.mock")," can be used."),(0,d.mdx)("p",null,"If Enzyme ",(0,d.mdx)("inlineCode",{parentName:"p"},"shallow")," rendering is being used for the tests then the mock may not be required. However, if ",(0,d.mdx)("inlineCode",{parentName:"p"},"mount")," is used then uuid should be mocked as shown below."),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"// using a variable may result in failures. For best results, hardcode the mock return value.\njest.mock('uuid', () => ({ v4: () => '00000000-0000-0000-0000-000000000000' }));\n\n")))}S.isMDXComponent=!0},69460:function(e,t,a){a.d(t,{C:function(){return r}});var n=a(67294),l=a(22863),r=function(e){var t=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-input",name:"terra-date-input",version:"1.40.0",url:t})}},19624:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}n.default=e,a&&a.set(e,n);return n}(a(67294)),m=n(a(91986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var u=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.default,{name:"date-input-value",value:a,onChange:function(e,t){return n(t)},displayFormat:"day-month-year"}),d.default.createElement("p",null,"DateInput Value: ".concat(a)))};t.Z=u},51986:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}n.default=e,a&&a.set(e,n);return n}(a(67294)),m=n(a(91986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var u=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.default,{name:"date-input-value",value:a,onChange:function(e,t){return n(t)}}),d.default.createElement("p",null,"DateInput Value: ".concat(a)))};t.Z=u},65960:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}n.default=e,a&&a.set(e,n);return n}(a(67294)),m=n(a(91986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var u=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.default,{name:"date-input-value",value:a,onChange:function(e,t){return n(t)},displayFormat:"month-day-year"}),d.default.createElement("p",null,"DateInput Value: ".concat(a)))};t.Z=u},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var m=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var p=m;t.default=p}}]);