(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[63625],{22863:function(e,t,a){"use strict";var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=n(a(45697)),d=n(a(47166)),m=n(a(17422)),s=d.default.bind(m.default),u={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},p=function(e){var t=e.src,a=e.name,n=e.url,r=e.version,d=l.default.createElement("a",{className:s("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},l.default.createElement("span",{className:s("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:s("badge-version")},"v".concat(r))),m=t?l.default.createElement("a",{className:s("badge"),href:t},l.default.createElement("span",{className:s("badge-name")},"github"),l.default.createElement("span",{className:s("badge-version")},"source")):void 0;return l.default.createElement("div",{className:s("badge-container")},d,m)};p.propTypes=u;var o=p;t.Z=o},49271:function(e,t,a){"use strict";var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=x(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}n.default=e,a&&a.set(e,n);return n}(a(67294)),m=n(a(45697)),s=n(a(47166)),u=a(21538),p=n(a(33864)),o=n(a(23399)),i=a(51051),c=n(a(53560));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:t})(e)}var f=s.default.bind(c.default),y={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},j=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,m=e.description,s=e.isExpanded,c=(0,d.useState)(s),x=(0,r.default)(c,2),y=x[0],h=x[1],v=(0,d.useState)(!1),b=(0,r.default)(v,2),T=b[0],N=b[1],_=d.default.useContext(u.ThemeContext),C=void 0!==n,D=function(){N(!T),y&&h(!y)},E=function(){h(!y),T&&N(!T)},k=function(e,t){e.nativeEvent.keyCode!==i.KEY_SPACE&&e.nativeEvent.keyCode!==i.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:f("template",_.className)},d.default.createElement("div",{className:f("header")},l&&d.default.createElement("h2",{className:f("title")},l)),d.default.createElement("div",{className:f("content")},m&&d.default.createElement("div",{className:f("description")},m),t),d.default.createElement("div",{className:f("footer")},a?d.default.createElement("div",{className:f("button-container")},C&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":T}),onClick:D,onKeyDown:function(e){return k(e,D)},onBlur:g,onMouseDown:j,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(o.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:E,onKeyDown:function(e){return k(e,E)},onBlur:g,onMouseDown:j,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(o.default,{className:f("chevron")}))):null,d.default.createElement("div",null,T&&d.default.createElement("div",{className:f("css")},n),y&&d.default.createElement("div",{className:f("code")},a))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var v=h;t.Z=v},66614:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return S}});var n=a(87462),l=a(44925),r=a(67294),d=a(81254),m=a(69460),s=a(78530),u=["components"],p={},o="wrapper";function i(e){var t=e.components,a=(0,l.Z)(e,u);return(0,d.mdx)(o,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(s.ZP,{mdxType:"PropsTable"},(0,d.mdx)(s.X2,{key:"ROW1",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"a11yLabel"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"An identifier used by assistive technologies like screen readers to briefly describe this time input to users.\nThe label is not rendered visually."),(0,d.mdx)("p",null,(0,d.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"  ",(0,d.mdx)("strong",{parentName:"p"},"BEST PRACTICE FOR ACCESSIBILITY"),": you ",(0,d.mdx)("em",{parentName:"p"},"SHOULD")," set this to match whatever visible label you give in your UI.\nCurrently this is optional for passivity reasons, but it will become mandatory in a future major version."))),(0,d.mdx)(s.X2,{key:"ROW2",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"name"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(s.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Name of the date input. This name should be unique."))),(0,d.mdx)(s.X2,{key:"ROW3",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"dayAttributes"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Custom input attributes to apply to the day input"))),(0,d.mdx)(s.X2,{key:"ROW4",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"disabled"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether the date input should be disabled."))),(0,d.mdx)(s.X2,{key:"ROW5",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"displayFormat"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'month-day-year'\n  'day-month-year'\n],\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Can be used to set the display format. One of ",(0,d.mdx)("inlineCode",{parentName:"p"},"month-day-year")," or ",(0,d.mdx)("inlineCode",{parentName:"p"},"day-month-year"),".\nOverrides default locale display format."))),(0,d.mdx)(s.X2,{key:"ROW6",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether the input displays as Incomplete. Use when no value has been provided. ",(0,d.mdx)("em",{parentName:"p"},"(usage note: ",(0,d.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,d.mdx)(s.X2,{key:"ROW7",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"isInvalid"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether the input displays as Invalid. Use when value does not meet validation pattern."))),(0,d.mdx)(s.X2,{key:"ROW8",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"monthAttributes"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Custom input attributes to apply to the month select"))),(0,d.mdx)(s.X2,{key:"ROW9",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"onBlur"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"A callback function to execute when the entire date input component loses focus.\nThis event does not get triggered when the focus is moved from one input to another within the date input component because the focus is still within the main date input component."))),(0,d.mdx)(s.X2,{key:"ROW10",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"onChange"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"A callback function to execute when a date is entered.\nThe first parameter is the event. The second parameter is the changed date value."))),(0,d.mdx)(s.X2,{key:"ROW11",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"onFocus"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"A callback function triggered when the day, month, or year input receives focus."))),(0,d.mdx)(s.X2,{key:"ROW12",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"refCallback"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback ref to access date input containing DOM element."))),(0,d.mdx)(s.X2,{key:"ROW13",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"required"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Whether is the date input is required"))),(0,d.mdx)(s.X2,{key:"ROW14",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"value"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"An date string representation of the date value used for the component. This should be in ISO 8601 format: YYYY-MM-DD."))),(0,d.mdx)(s.X2,{key:"ROW15",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"yearAttributes"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(s.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Custom input attributes to apply to the year input")))))}i.isMDXComponent=!0;var c=a(51986),x=["components"],f={};function y(e){var t=e.components,a=(0,l.Z)(e,x);return(0,d.mdx)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}y.isMDXComponent=!0;var g=a(49271),j=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(g.Z,{title:t||"Default Date Input",description:a,example:r.createElement(c.Z,null),exampleSrc:r.createElement(y,null),isExpanded:n})},h=a(65960),v=["components"],b={};function T(e){var t=e.components,a=(0,l.Z)(e,v);return(0,d.mdx)("wrapper",(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n        displayFormat=\"month-day-year\"\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}T.isMDXComponent=!0;var N=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(g.Z,{title:t||"Month Day Year Date Input",description:a,example:r.createElement(h.Z,null),exampleSrc:r.createElement(T,null),isExpanded:n})},_=a(19624),C=["components"],D={};function E(e){var t=e.components,a=(0,l.Z)(e,C);return(0,d.mdx)("wrapper",(0,n.Z)({},D,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n        displayFormat=\"day-month-year\"\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}E.isMDXComponent=!0;var k=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(g.Z,{title:t||"Day Month Year Date Input",description:a,example:r.createElement(_.Z,null),exampleSrc:r.createElement(E,null),isExpanded:n})},w=["components"],O={},R="wrapper";function S(e){var t=e.components,a=(0,l.Z)(e,w);return(0,d.mdx)(R,(0,n.Z)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(m.C,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"terra-date-input"},"Terra Date Input"),(0,d.mdx)("p",null,"The DateInput allows for easy data entry of known dates like birthdays, anniversaries, etc. The display of the DateInput is localized based on the locale but can be customized via the ",(0,d.mdx)("inlineCode",{parentName:"p"},"displayFormat")," prop. The DateInput uses the ISO 8601 format for date values (YYYY-MM-DD)."),(0,d.mdx)("p",null,"Additional functionality for quick date entry is available with specific ",(0,d.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1968/components/cerner-terra-framework-docs/date-input/keyboard-shortcuts"},"keyboard shortcuts"),"."),(0,d.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Install with ",(0,d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"npm install terra-date-input"))))),(0,d.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,d.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,d.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,d.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,d.mdx)("h2",{id:"component-features"},"Component Features"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,d.mdx)("h2",{id:"examples"},"Examples"),(0,d.mdx)(j,{title:"Default DateInput",mdxType:"DefaultDateInput"}),(0,d.mdx)(N,{title:"Month Day Year Display Format DateInput",mdxType:"MonthDayYearDateInput"}),(0,d.mdx)(k,{title:"Day Month Year Display Format DateInput",mdxType:"DayMonthYearDateInput"}),(0,d.mdx)("h2",{id:"date-input-props-table"},"Date Input props table"),(0,d.mdx)(i,{mdxType:"DateInputPropsTable"}),(0,d.mdx)("h2",{id:"testing"},"Testing"),(0,d.mdx)("p",null,"Date Input uses ",(0,d.mdx)("inlineCode",{parentName:"p"},"uuid")," which changes the component's description id dynamically. To mock the return value with the Jest testing library, ",(0,d.mdx)("inlineCode",{parentName:"p"},"jest.spyOn")," can be used."),(0,d.mdx)("p",null,"If Enzyme ",(0,d.mdx)("inlineCode",{parentName:"p"},"shallow")," rendering is being used for the tests then the mock may not be required. However, if ",(0,d.mdx)("inlineCode",{parentName:"p"},"mount")," is used then ",(0,d.mdx)("inlineCode",{parentName:"p"},"uuid")," should be mocked as shown below:"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-js"},"import { v4 as uuidv4 } from 'uuid';\n\nlet mockSpyUuid;\n\n// using a variable may result in failures. For best results, mock return value.\nbeforeAll(() => {\n  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');\n});\n\n// restore the mock\nafterAll(() => {\n  mockSpyUuid.mockRestore();\n});\n\n")))}S.isMDXComponent=!0},69460:function(e,t,a){"use strict";a.d(t,{C:function(){return r}});var n=a(67294),l=a(22863),r=function(e){var t=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-input",name:"terra-date-input",version:"1.48.0",url:t})}},19624:function(e,t,a){"use strict";var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(67294)),m=n(a(91986));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}t.Z=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.default,{name:"date-input-value",value:a,onChange:function(e,t){return n(t)},displayFormat:"day-month-year"}),d.default.createElement("p",null,"DateInput Value: ".concat(a)))}},51986:function(e,t,a){"use strict";var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(67294)),m=n(a(91986));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}t.Z=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.default,{name:"date-input-value",value:a,onChange:function(e,t){return n(t)}}),d.default.createElement("p",null,"DateInput Value: ".concat(a)))}},65960:function(e,t,a){"use strict";var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(n,d,m):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(67294)),m=n(a(91986));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}t.Z=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement(m.default,{name:"date-input-value",value:a,onChange:function(e,t){return n(t)},displayFormat:"month-day-year"}),d.default.createElement("p",null,"DateInput Value: ".concat(a)))}},17422:function(e,t,a){"use strict";a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,a){"use strict";a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},46700:function(e,t,a){var n={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":47762,"./pa-in.js":47762,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":14126,"./uz-latn.js":14126,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=46700},33864:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var m=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=m}}]);