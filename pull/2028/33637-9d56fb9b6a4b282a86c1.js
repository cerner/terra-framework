"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[33637],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var o=a(n(96540)),r=a(n(5556)),i=a(n(67967)),l=a(n(25642)),c=i.default.bind(l.default),u={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},m=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,i=o.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},o.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),o.default.createElement("span",{className:c("badge-version")},"v".concat(r))),l=t?o.default.createElement("a",{className:c("badge"),href:t},o.default.createElement("span",{className:c("badge-name")},"github"),o.default.createElement("span",{className:c("badge-version")},"source")):void 0;return o.default.createElement("div",{className:c("badge-container")},i,l)};m.propTypes=u;t.A=m},201:function(e,t,n){var a=n(24994),o=n(73738);t.A=void 0;var r=a(n(85715)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=r?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}(n(96540)),l=a(n(5556)),c=a(n(67967)),u=n(92912),m=a(n(49558)),p=a(n(53665)),s=n(25966),d=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(d.default),v={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,l=e.description,c=e.isExpanded,d=(0,i.useState)(c),f=(0,r.default)(d,2),v=f[0],_=f[1],w=(0,i.useState)(!1),y=(0,r.default)(w,2),x=y[0],N=y[1],E=i.default.useContext(u.ThemeContext),F=void 0!==a,P=function(){N(!x),v&&_(!v)},k=function(){_(!v),x&&N(!x)},T=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:h("template",E.className)},i.default.createElement("div",{className:h("header")},o&&i.default.createElement("h2",{className:h("title")},o)),i.default.createElement("div",{className:h("content")},l&&i.default.createElement("div",{className:h("description")},l),t),i.default.createElement("div",{className:h("footer")},n?i.default.createElement("div",{className:h("button-container")},F&&i.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":x}),onClick:P,onKeyDown:function(e){return T(e,P)},onBlur:g,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(m.default,{className:h("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(p.default,{className:h("chevron")})),i.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":v}),onClick:k,onKeyDown:function(e){return T(e,k)},onBlur:g,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(m.default,{className:h("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(p.default,{className:h("chevron")}))):null,i.default.createElement("div",null,x&&i.default.createElement("div",{className:h("css")},a),v&&i.default.createElement("div",{className:h("code")},n))))};_.propTypes=v,_.defaultProps={isExpanded:!1};t.A=_},33637:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(58168),o=n(53986),r=n(96540),i=n(36665),l=n(5147),c=n(88734),u=["components"],m={};function p(e){var t=e.components,n=(0,o.A)(e,u);return(0,i.mdx)("wrapper",(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title, ariaLabel }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        aria-label={ariaLabel}\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n  ariaLabel: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n  const formCheckpointRef = useRef();\n\n  function onSwitchForm(formKey) {\n    formCheckpointRef.current.resolvePrompts({\n      title: 'Descriptive Notification Prompt Title',\n      startMessage: 'Descriptive Notification Prompt Message',\n      rejectButtonText: 'Descriptive Reject Button Action',\n      acceptButtonText: 'Descriptive Accept Button Action',\n      buttonOrder: 'acceptFirst',\n    }).then(() => {\n      setActiveForm(formKey);\n    }).catch(() => {\n    });\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1'}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2'}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n        ref={formCheckpointRef}\n      >\n        <Form title={activeForm} key={activeForm} ariaLabel={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n\n")))}p.isMDXComponent=!0;var s=n(201),d=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(s.A,{title:t||"Implementation Guide Part 1",description:n,example:r.createElement(c.A,null),exampleSrc:r.createElement(p,null),isExpanded:a})},f=["components"],h={},v="wrapper";function g(e){var t=e.components,n=(0,o.A)(e,f);return(0,i.mdx)(v,(0,a.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(l.E,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"terra-navigation-prompt---implementation-guide"},"Terra Navigation Prompt - Implementation Guide"),(0,i.mdx)("h2",{id:"part-1---implementing-the-navigationprompt-and-navigationpromptcheckpoint"},"Part 1 - Implementing the NavigationPrompt and NavigationPromptCheckpoint"),(0,i.mdx)("p",null,"To better notify the user of the Form's transient state, we update the Form to render a NavigationPrompt."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"- import React, { useState } from 'react';\n+ import React, { useState, useRef } from 'react';\nimport PropTypes from 'prop-types';\n+ import NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n+     {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n")),(0,i.mdx)("p",null,"The Form renders the NavigationPrompt when the input has a non-empty value. If it were to render the NavigationPrompt at all times, the user would be prompted inappropriately when the input is empty."),(0,i.mdx)("p",null,"The Form provides its ",(0,i.mdx)("inlineCode",{parentName:"p"},"title")," prop as the NavigationPrompt's ",(0,i.mdx)("inlineCode",{parentName:"p"},"description")," prop to give it an identifying feature. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"description")," doesn't need to be unique across all rendered NavigationPrompts, but it should give our users a good idea of where the unsaved changes are at. For our purposes, the Form's ",(0,i.mdx)("inlineCode",{parentName:"p"},"title")," is sufficient."),(0,i.mdx)("p",null,"Now that the Form is rendering a NavigationPrompt, the FormSwitcher needs to render a NavigationPromptCheckpoint around the Form to detect that prompt."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"const FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n+ const formCheckpointRef = useRef();\n\n  function onSwitchForm(formKey) {\n+   formCheckpointRef.current.resolvePrompts({\n+     title: 'Descriptive Notification Prompt Title',\n+     startMessage: 'Descriptive Notification Prompt Message',\n+     rejectButtonText: `Descriptive Reject Button Action`,\n+     acceptButtonText: 'Descriptive Accept Button Action',\n+     buttonOrder: 'acceptFirst',\n+   }).then(() => {\n      setActiveForm(formKey);\n+   });\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n-     <p>The NavigationPrompt is not implemented, so no prompting occurs.</p>\n+     <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1'}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2'}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n+     <NavigationPromptCheckpoint\n+       ref={formCheckpointRef}\n+     >\n        <Form title={activeForm} key={activeForm} />\n+      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n")),(0,i.mdx)("p",null,"The FormSwitcher gets a ref to the NavigationPromptCheckpoint; this example uses the ",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#useref"},"useRef hook"),", but any of the supported ref retrieval methods would be sufficient. The FormSwitcher then uses this ref to call the ",(0,i.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," function when it wants to switch to a new Form."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," function is an instance function of the NavigationPromptCheckpoint. When ",(0,i.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," is called, the NavigationPromptCheckpoint will render a NotificationDialog and return a ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},"Promise"),". The Promise will be resolved immediately if no NavigationPrompts have been rendered below the checkpoint, so we don't need to check for the presence of any NavigationPrompts before we call it. The Promise will also resolve if a user presses the NotificationDialog's accept action button. The Promise will reject if a user presses the NotificationDialog's reject action button. In our example, we only update the FormSwitcher's state when the Promise is resolved."),(0,i.mdx)("p",null,"With those changes in place, the FormSwitcher will prompt the user for confirmation when they attempt to switch away from Forms with unsaved data."),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)(d,{title:"Part 1 - Implementing the NavigationPrompt and NavigationPromptCheckpoint",mdxType:"ImplementationGuidePart1"}))}g.isMDXComponent=!0},5147:function(e,t,n){n.d(t,{E:function(){return r}});var a=n(96540),o=n(55713),r=function(e){var t=e.url;return a.createElement(o.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-prompt",name:"terra-navigation-prompt",version:"1.82.0",url:t})}},88734:function(e,t,n){var a=n(24994),o=n(73738);t.A=void 0;var r=a(n(85715)),i=m(n(96540)),l=a(n(5556)),c=m(n(95447));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=r?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}var p=function(e){var t=e.title,n=e.ariaLabel,a=(0,i.useState)(""),o=(0,r.default)(a,2),l=o[0],u=o[1];return i.default.createElement("div",null,i.default.createElement("p",null,t),l.length?i.default.createElement(c.default,{description:t}):void 0,i.default.createElement("input",{type:"text","aria-label":n,onChange:function(e){u(e.target.value)},value:l}),i.default.createElement("button",{type:"button",onClick:function(){u("")}},"Submit"))};p.propTypes={title:l.default.string,ariaLabel:l.default.string};t.A=function(){var e=(0,i.useState)("Form 1"),t=(0,r.default)(e,2),n=t[0],a=t[1],o=(0,i.useRef)();function l(e){o.current.resolvePrompts({title:"Descriptive Notification Prompt Title",startMessage:"Descriptive Notification Prompt Message",rejectButtonText:"Descriptive Reject Button Action",acceptButtonText:"Descriptive Accept Button Action",buttonOrder:"acceptFirst"}).then((function(){a(e)})).catch((function(){}))}return i.default.createElement("div",null,i.default.createElement("h2",null,"Form Switcher"),i.default.createElement("p",null,"The user will be prompted with the provided messaging when Forms are switched with unsaved changes present."),i.default.createElement("button",{type:"button",disabled:"Form 1"===n,onClick:l.bind(null,"Form 1")},"Switch to Form 1"),i.default.createElement("button",{type:"button",disabled:"Form 2"===n,onClick:l.bind(null,"Form 2")},"Switch to Form 2"),i.default.createElement(c.NavigationPromptCheckpoint,{ref:o},i.default.createElement(p,{title:n,key:n,ariaLabel:n})))}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(96540)),o=r(n(25365));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var l=function(e){var t=i({},e);return a.default.createElement(o.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=l},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{A:function(){return a}})}}]);