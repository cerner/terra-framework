"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[74685],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var r=a(n(96540)),o=a(n(5556)),l=a(n(67967)),i=a(n(25642)),u=l.default.bind(i.default),m={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,l=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(o))),i=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},l,i)};c.propTypes=m;t.A=c},201:function(e,t,n){var a=n(24994),r=n(73738);t.A=void 0;var o=a(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=a(n(5556)),u=a(n(67967)),m=n(92912),c=a(n(49558)),s=a(n(53665)),d=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=u.default.bind(p.default),_={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,u=e.isExpanded,p=(0,l.useState)(u),f=(0,o.default)(p,2),_=f[0],h=f[1],y=(0,l.useState)(!1),w=(0,o.default)(y,2),E=w[0],x=w[1],F=l.default.useContext(m.ThemeContext),T=void 0!==a,k=function(){x(!E),_&&h(!_)},N=function(){h(!_),E&&x(!E)},S=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:v("template",F.className)},l.default.createElement("div",{className:v("header")},r&&l.default.createElement("h2",{className:v("title")},r)),l.default.createElement("div",{className:v("content")},i&&l.default.createElement("div",{className:v("description")},i),t),l.default.createElement("div",{className:v("footer")},n?l.default.createElement("div",{className:v("button-container")},T&&l.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":E}),onClick:k,onKeyDown:function(e){return S(e,k)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:v("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(s.default,{className:v("chevron")})),l.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":_}),onClick:N,onKeyDown:function(e){return S(e,N)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:v("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(s.default,{className:v("chevron")}))):null,l.default.createElement("div",null,E&&l.default.createElement("div",{className:v("css")},a),_&&l.default.createElement("div",{className:v("code")},n))))};h.propTypes=_,h.defaultProps={isExpanded:!1};t.A=h},74685:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(58168),r=n(53986),o=n(96540),l=n(36665),i=n(5147),u=n(21949),m=["components"],c={};function s(e){var t=e.components,n=(0,r.A)(e,m);return(0,l.mdx)("wrapper",(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\n\nconst Form = ({ title, ariaLabel }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      <input\n        aria-label={ariaLabel}\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n  ariaLabel: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n\n  function onSwitchForm(formKey) {\n    setActiveForm(formKey);\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>The NavigationPrompt is not implemented, so no prompting occurs.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1'}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2'}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <Form title={activeForm} key={activeForm} ariaLabel={activeForm} />\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n\n")))}s.isMDXComponent=!0;var d=n(201),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(d.A,{title:t||"Implementation Guide Part 0",description:n,example:o.createElement(u.A,null),exampleSrc:o.createElement(s,null),isExpanded:a})},f=["components"],v={},_="wrapper";function b(e){var t=e.components,n=(0,r.A)(e,f);return(0,l.mdx)(_,(0,a.A)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(i.E,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-navigation-prompt---implementation-guide"},"Terra Navigation Prompt - Implementation Guide"),(0,l.mdx)("p",null,"Assume we have built a simple component, the FormSwitcher, that toggles between showing two different stateful components, Form 1 and Form 2. Users of the FormSwitcher have recently complained that they can switch between forms before submitting their in progress form, losing their data in the process. We want to implement the NavigationPrompt and NavigationPromptCheckpoint to give our users more control over the FormSwitcher's navigation."),(0,l.mdx)("blockquote",null,(0,l.mdx)("p",{parentName:"blockquote"},"Note: This implementation guide features examples and use cases for the various APIs provided by the NavigationPrompt and NavigationPromptCheckpoint.\n!! Please review your individual requirements to see which APIs are necessary for your specific needs.")),(0,l.mdx)("h2",{id:"part-0---reviewing-the-initial-formswitcher-implementation"},"Part 0 - Reviewing the Initial FormSwitcher Implementation"),(0,l.mdx)("p",null,"The FormSwitcher renders two buttons that allow users to toggle between showing Form 1 and Form 2. Form 1 and Form 2 are unique instances of the Form component."),(0,l.mdx)("p",null,"The Form component renders a text input element and keeps the input's value in state. When the Submit button is pressed, the value is reset to simulate a mock submission."),(0,l.mdx)("p",null,"If we enter text into Form 1's input, switch to Form 2, and then switch back to Form 1, we will notice our previously entered value is gone. This is not good, because that data in Form 1 could be ",(0,l.mdx)("em",{parentName:"p"},"very")," important to our users."),(0,l.mdx)("h2",{id:"example"},"Example"),(0,l.mdx)(p,{title:"Part 0 - Reviewing the Initial FormSwitcher Implementation",mdxType:"ImplementationGuidePart0"}))}b.isMDXComponent=!0},5147:function(e,t,n){n.d(t,{E:function(){return o}});var a=n(96540),r=n(55713),o=function(e){var t=e.url;return a.createElement(r.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-prompt",name:"terra-navigation-prompt",version:"1.90.0",url:t})}},21949:function(e,t,n){var a=n(24994),r=n(73738);t.A=void 0;var o=a(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=a(n(5556));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var m=function(e){var t=e.title,n=e.ariaLabel,a=(0,l.useState)(""),r=(0,o.default)(a,2),i=r[0],u=r[1];return l.default.createElement("div",null,l.default.createElement("p",null,t),l.default.createElement("input",{"aria-label":n,type:"text",onChange:function(e){u(e.target.value)},value:i}),l.default.createElement("button",{type:"button",onClick:function(){u("")}},"Submit"))};m.propTypes={title:i.default.string,ariaLabel:i.default.string};t.A=function(){var e=(0,l.useState)("Form 1"),t=(0,o.default)(e,2),n=t[0],a=t[1];function r(e){a(e)}return l.default.createElement("div",null,l.default.createElement("h2",null,"Form Switcher"),l.default.createElement("p",null,"The NavigationPrompt is not implemented, so no prompting occurs."),l.default.createElement("button",{type:"button",disabled:"Form 1"===n,onClick:r.bind(null,"Form 1")},"Switch to Form 1"),l.default.createElement("button",{type:"button",disabled:"Form 2"===n,onClick:r.bind(null,"Form 2")},"Switch to Form 2"),l.default.createElement(m,{title:n,key:n,ariaLabel:n}))}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(96540)),r=o(n(25365));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{A:function(){return a}})}}]);