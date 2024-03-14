"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[57947],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var o=a(n(96540)),r=a(n(5556)),l=a(n(67967)),i=a(n(25642)),u=l.default.bind(i.default),m={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,l=o.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},o.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),o.default.createElement("span",{className:u("badge-version")},"v".concat(r))),i=t?o.default.createElement("a",{className:u("badge"),href:t},o.default.createElement("span",{className:u("badge-name")},"github"),o.default.createElement("span",{className:u("badge-version")},"source")):void 0;return o.default.createElement("div",{className:u("badge-container")},l,i)};c.propTypes=m;t.A=c},201:function(e,t,n){var a=n(24994),o=n(73738);t.A=void 0;var r=a(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=a(n(5556)),u=a(n(67967)),m=n(92912),c=a(n(49558)),p=a(n(53665)),s=n(25966),d=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=u.default.bind(d.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,i=e.description,u=e.isExpanded,d=(0,l.useState)(u),f=(0,r.default)(d,2),g=f[0],_=f[1],y=(0,l.useState)(!1),E=(0,r.default)(y,2),w=E[0],x=E[1],P=l.default.useContext(m.ThemeContext),F=void 0!==a,N=function(){x(!w),g&&_(!g)},C=function(){_(!g),w&&x(!w)},S=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:v("template",P.className)},l.default.createElement("div",{className:v("header")},o&&l.default.createElement("h2",{className:v("title")},o)),l.default.createElement("div",{className:v("content")},i&&l.default.createElement("div",{className:v("description")},i),t),l.default.createElement("div",{className:v("footer")},n?l.default.createElement("div",{className:v("button-container")},F&&l.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":w}),onClick:N,onKeyDown:function(e){return S(e,N)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:v("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(p.default,{className:v("chevron")})),l.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":g}),onClick:C,onKeyDown:function(e){return S(e,C)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:v("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(p.default,{className:v("chevron")}))):null,l.default.createElement("div",null,w&&l.default.createElement("div",{className:v("css")},a),g&&l.default.createElement("div",{className:v("code")},n))))};_.propTypes=g,_.defaultProps={isExpanded:!1};t.A=_},57947:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(58168),o=n(53986),r=n(96540),l=n(36665),i=n(5147),u=n(57531),m=["components"],c={};function p(e){var t=e.components,n=(0,o.A)(e,m);return(0,l.mdx)("wrapper",(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title, ariaLabel }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        aria-label={ariaLabel}\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n  ariaLabel: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n  const [activePrompts, setActivePrompts] = useState([]);\n\n  function onSwitchForm(formKey) {\n    setActiveForm(formKey);\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n        onPromptChange={(prompts) => {\n          setActivePrompts(prompts);\n        }}\n      >\n        <Form title={activeForm} key={activeForm} ariaLabel={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n\n")))}p.isMDXComponent=!0;var s=n(201),d=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(s.A,{title:t||"Implementation Guide Part 2",description:n,example:r.createElement(u.A,null),exampleSrc:r.createElement(p,null),isExpanded:a})},f=["components"],v={},g="wrapper";function h(e){var t=e.components,n=(0,o.A)(e,f);return(0,l.mdx)(g,(0,a.A)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(i.E,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-navigation-prompt---implementation-guide"},"Terra Navigation Prompt - Implementation Guide"),(0,l.mdx)("h2",{id:"part-3---implementing-a-custom-prompt-solution"},"Part 3 - Implementing a Custom Prompt Solution"),(0,l.mdx)("p",null,"At this point, we realize that we do not want to ",(0,l.mdx)("strong",{parentName:"p"},"ever")," allow users to navigate away from a Form with unsaved state. We can do that by using the NavigationPromptCheckpoint's ",(0,l.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," prop."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-diff"},"- import React, { useState, useRef } from 'react';\n+ import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n+ const [activePrompts, setActivePrompts] = useState([]);\n\n  function onSwitchForm(formKey) {\n-   formCheckpointRef.current.resolvePrompts({\n-     title: 'Descriptive Notification Prompt Title',\n-     startMessage: 'Descriptive Notification Prompt Message',\n-     rejectButtonText: `Descriptive Reject Button Action`,\n-     acceptButtonText: 'Descriptive Accept Button Action',\n-     buttonOrder: 'acceptFirst',\n-   }).then(() => {\n      setActiveForm(formKey);\n-   });\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n-     <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>\n+     <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>\n      <button\n        type=\"button\"\n-       disabled={activeForm === 'Form 1'}\n+       disabled={activeForm === 'Form 1' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n-       disabled={activeForm === 'Form 2'}\n+       disabled={activeForm === 'Form 2' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n-       ref={formCheckpointRef}\n+       onPromptChange={(prompts) => {\n+         setActivePrompts(prompts);\n+       }}\n      >\n        <Form title={activeForm} key={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n")),(0,l.mdx)("p",null,"We remove the ",(0,l.mdx)("inlineCode",{parentName:"p"},"ref")," from the NavigationPromptCheckpoint and instead implement ",(0,l.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," to store the currently rendered NavigationPrompt's in the FormSwitcher's state. We disable the 'Switch to' buttons altogether if a NavigationPrompt is detected. We could also use this state to control other navigation-capable components, like client-side routers."),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(d,{title:"Part 2 - Implementing a Custom Prompt Handler",mdxType:"ImplementationGuidePart2"}))}h.isMDXComponent=!0},5147:function(e,t,n){n.d(t,{E:function(){return r}});var a=n(96540),o=n(55713),r=function(e){var t=e.url;return a.createElement(o.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-prompt",name:"terra-navigation-prompt",version:"1.87.0",url:t})}},57531:function(e,t,n){var a=n(24994),o=n(73738);t.A=void 0;var r=a(n(85715)),l=c(n(96540)),i=a(n(5556)),u=c(n(95447));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=r?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}var p=function(e){var t=e.title,n=e.ariaLabel,a=(0,l.useState)(""),o=(0,r.default)(a,2),i=o[0],m=o[1];return l.default.createElement("div",null,l.default.createElement("p",null,t),i.length?l.default.createElement(u.default,{description:t}):void 0,l.default.createElement("input",{type:"text","aria-label":n,onChange:function(e){m(e.target.value)},value:i}),l.default.createElement("button",{type:"button",onClick:function(){m("")}},"Submit"))};p.propTypes={title:i.default.string,ariaLabel:i.default.string};t.A=function(){var e=(0,l.useState)("Form 1"),t=(0,r.default)(e,2),n=t[0],a=t[1],o=(0,l.useState)([]),i=(0,r.default)(o,2),m=i[0],c=i[1];function s(e){a(e)}return l.default.createElement("div",null,l.default.createElement("h2",null,"Form Switcher"),l.default.createElement("p",null,"Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present."),l.default.createElement("button",{type:"button",disabled:"Form 1"===n||m.length,onClick:s.bind(null,"Form 1")},"Switch to Form 1"),l.default.createElement("button",{type:"button",disabled:"Form 2"===n||m.length,onClick:s.bind(null,"Form 2")},"Switch to Form 2"),l.default.createElement(u.NavigationPromptCheckpoint,{onPromptChange:function(e){c(e)}},l.default.createElement(p,{title:n,key:n,ariaLabel:n})))}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(96540)),o=r(n(25365));function r(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return a.default.createElement(o.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{A:function(){return a}})}}]);