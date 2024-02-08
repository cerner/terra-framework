"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[33849],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),r=a(n(45697)),o=a(n(19845)),m=a(n(17422)),d=o.default.bind(m.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,o=l.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(r))),m=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},o,m)};u.propTypes=c;t.Z=u},49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var m=r?Object.getOwnPropertyDescriptor(e,o):null;m&&(m.get||m.set)?Object.defineProperty(a,o,m):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),m=a(n(45697)),d=a(n(19845)),c=n(21538),u=a(n(33864)),i=a(n(23399)),s=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=d.default.bind(p.default),x={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,m=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,r.default)(p,2),x=f[0],v=f[1],b=(0,o.useState)(!1),N=(0,r.default)(b,2),T=N[0],E=N[1],y=o.default.useContext(c.ThemeContext),C=void 0!==a,w=function(){E(!T),x&&v(!x)},k=function(){v(!x),T&&E(!T)},j=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",y.className)},o.default.createElement("div",{className:h("header")},l&&o.default.createElement("h2",{className:h("title")},l)),o.default.createElement("div",{className:h("content")},m&&o.default.createElement("div",{className:h("description")},m),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},C&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":T}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:_,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(u.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(i.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":x}),onClick:k,onKeyDown:function(e){return j(e,k)},onBlur:_,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(u.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(i.default,{className:h("chevron")}))):null,o.default.createElement("div",null,T&&o.default.createElement("div",{className:h("css")},a),x&&o.default.createElement("div",{className:h("code")},n))))};v.propTypes=x,v.defaultProps={isExpanded:!1};t.Z=v},33849:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(87462),l=n(44925),r=n(67294),o=n(81254),m=n(67264),d=(n(87981),n(97542)),c=["components"],u={};function i(e){var t=e.components,n=(0,l.Z)(e,c);return(0,o.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\n\nimport styles from './ThemedComponent.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Themed = () => {\n  const theme = React.useContext(ThemeContext);\n  return (\n    <div className={cx('themed', theme.className, theme.density)}>\n      <h1>\n        {`Theme Name: ${theme.name}`}\n      </h1>\n      <h1>\n        {`Theme Density: ${theme.density || ''}`}\n      </h1>\n      <div className={cx('themed-block')} />\n    </div>\n  );\n};\n\nexport default Themed;\n\n")))}i.isMDXComponent=!0;var s=n(49271),p=["components"],f={};function h(e){var t=e.components,n=(0,l.Z)(e,p);return(0,o.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},"//Themes\n@import './ThemedComponent.clinical-lowlight-theme.module';\n@import './ThemedComponent.orion-fusion-theme.module';\n@import './ThemedComponent.test-theme.module';\n\n:local {\n  .themed {\n    height: 100%;\n    overflow: auto;\n    padding: 24px;\n    position: relative;\n  }\n\n  .themed-block {\n    background-color: var(--terra-framework-docs-terra-theme-context-themed-component-block-background-color, #0079be);\n    height: var(--terra-framework-docs-terra-theme-context-themed-component-block-height, 24px);\n  }\n\n  .compact {\n    --terra-framework-docs-terra-theme-context-themed-component-block-height: 16px;\n  }\n}\n\n")))}h.isMDXComponent=!0;var x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(s.Z,{title:t||"Themed Component",description:n,example:r.createElement(d.default,null),exampleCssSrc:r.createElement(h,null),exampleSrc:r.createElement(i,null),isExpanded:a})},_=["components"],g={},v="wrapper";function b(e){var t=e.components,n=(0,l.Z)(e,_);return(0,o.mdx)(v,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(m.C,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-theme-context"},"Terra Theme Context"),(0,o.mdx)("p",null,"A React context to provide the current theme. This package is intended to be used by Terra components only. Any terra consumers or custom Terra components should consume the context from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application")," package."),(0,o.mdx)("p",null,"This context can be used to apply any theme related changes to a component."),(0,o.mdx)("p",null,"The most common use would be to apply a theme class to the root tag of the component to apply theme variables. See below for an example."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install with ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"npm install terra-theme-context"))))),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ThemeContext from 'terra-theme-context';\n")),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(x,{title:"A component using the theme context",mdxType:"ThemedComponent"}),(0,o.mdx)("h2",{id:"context-value"},"Context Value"),(0,o.mdx)("p",null,"The ThemeContext provides an object with the following values:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,o.mdx)("th",{parentName:"tr",align:null},"Type"),(0,o.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,o.mdx)("th",{parentName:"tr",align:null},"DefaultValue"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"name")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"optional"),(0,o.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,o.mdx)("td",{parentName:"tr",align:null},"The current application theme name. This field requires use of the terra-functional-testing webpack config.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"className")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"optional"),(0,o.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,o.mdx)("td",{parentName:"tr",align:null},"The current application theme className. The default theme is indicated as undefined or empty string.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"density")),(0,o.mdx)("td",{parentName:"tr",align:null},"String"),(0,o.mdx)("td",{parentName:"tr",align:null},"optional"),(0,o.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,o.mdx)("td",{parentName:"tr",align:null},"The current application theme density.")))))}b.isMDXComponent=!0},87981:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(67294),l=n(52535),r=n(87462),o=n(44925),m=n(81254),d=["components"],c={};function u(e){var t=e.components,n=(0,o.Z)(e,d);return(0,m.mdx)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n\nimport ThemedComponent from './ThemedComponent';\n\nconst ThemeContextProviderExample = () => (\n  <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme', density: 'compact' }}>\n    <ThemedComponent />\n  </ThemeContextProvider>\n);\n\nexport default ThemeContextProviderExample;\n\n")))}u.isMDXComponent=!0;var i=n(49271),s=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(i.Z,{title:t||"Theme Context Provider Example",description:n,example:a.createElement(l.Z,null),exampleSrc:a.createElement(u,null),isExpanded:r})}},67264:function(e,t,n){n.d(t,{C:function(){return r}});var a=n(67294),l=n(22863),r=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-context",name:"terra-theme-context",version:"1.9.0",url:t})}},52535:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),r=a(n(58502)),o=a(n(97542));t.Z=function(){return l.default.createElement(r.default,{theme:{name:"test-theme",className:"test-theme",density:"compact"}},l.default.createElement(o.default,null))}},97542:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),r=a(n(19845)),o=a(n(47341)),m=a(n(46665)),d=r.default.bind(m.default);t.default=function(){var e=l.default.useContext(o.default);return l.default.createElement("div",{className:d("themed",e.className,e.density)},l.default.createElement("h1",null,"Theme Name: ".concat(e.name)),l.default.createElement("h1",null,"Theme Density: ".concat(e.density||"")),l.default.createElement("div",{className:d("themed-block")}))}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},46665:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ThemedComponent-module__clinical-lowlight-theme___LXe19","orion-fusion-theme":"ThemedComponent-module__orion-fusion-theme___6wTNK","test-theme":"ThemedComponent-module__test-theme___wmvmt",themed:"ThemedComponent-module__themed___g-PF2","themed-block":"ThemedComponent-module__themed-block___Ncdee",compact:"ThemedComponent-module__compact___cleOE"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var m=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=m},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{Z:function(){return a}})}}]);