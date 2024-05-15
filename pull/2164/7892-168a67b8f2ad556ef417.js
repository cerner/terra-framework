"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[7892],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),r=a(n(5556)),m=a(n(67967)),o=a(n(25642)),d=m.default.bind(o.default),c={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,m=l.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(r))),o=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},m,o)};u.propTypes=c;t.A=u},201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var r=a(n(85715)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&{}.hasOwnProperty.call(e,m)){var o=r?Object.getOwnPropertyDescriptor(e,m):null;o&&(o.get||o.set)?Object.defineProperty(a,m,o):a[m]=e[m]}return a.default=e,n&&n.set(e,a),a}(n(96540)),o=a(n(5556)),d=a(n(67967)),c=n(92912),u=a(n(49558)),i=a(n(53665)),s=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=d.default.bind(p.default),x={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,o=e.description,d=e.isExpanded,p=(0,m.useState)(d),f=(0,r.default)(p,2),x=f[0],v=f[1],b=(0,m.useState)(!1),N=(0,r.default)(b,2),E=N[0],T=N[1],y=m.default.useContext(c.ThemeContext),C=void 0!==a,w=function(){T(!E),x&&v(!x)},k=function(){v(!x),E&&T(!E)},A=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return m.default.createElement("div",{className:h("template",y.className)},m.default.createElement("div",{className:h("header")},l&&m.default.createElement("h2",{className:h("title")},l)),m.default.createElement("div",{className:h("content")},o&&m.default.createElement("div",{className:h("description")},o),t),m.default.createElement("div",{className:h("footer")},n?m.default.createElement("div",{className:h("button-container")},C&&m.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":E}),onClick:w,onKeyDown:function(e){return A(e,w)},onBlur:_,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(u.default,{className:h("chevron")}),m.default.createElement("span",null,"CSS"),m.default.createElement(i.default,{className:h("chevron")})),m.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":x}),onClick:k,onKeyDown:function(e){return A(e,k)},onBlur:_,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(u.default,{className:h("chevron")}),m.default.createElement("span",null,"Code"),m.default.createElement(i.default,{className:h("chevron")}))):null,m.default.createElement("div",null,E&&m.default.createElement("div",{className:h("css")},a),x&&m.default.createElement("div",{className:h("code")},n))))};v.propTypes=x,v.defaultProps={isExpanded:!1};t.A=v},7892:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(58168),l=n(53986),r=n(96540),m=n(36665),o=n(90883),d=(n(86433),n(22623)),c=["components"],u={};function i(e){var t=e.components,n=(0,l.A)(e,c);return(0,m.mdx)("wrapper",(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\n\nimport styles from './ThemedComponent.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Themed = () => {\n  const theme = React.useContext(ThemeContext);\n  return (\n    <div className={cx('themed', theme.className, theme.density)}>\n      <h1>\n        {`Theme Name: ${theme.name}`}\n      </h1>\n      <h1>\n        {`Theme Density: ${theme.density || ''}`}\n      </h1>\n      <div className={cx('themed-block')} />\n    </div>\n  );\n};\n\nexport default Themed;\n\n")))}i.isMDXComponent=!0;var s=n(201),p=["components"],f={};function h(e){var t=e.components,n=(0,l.A)(e,p);return(0,m.mdx)("wrapper",(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},"//Themes\n@import './ThemedComponent.clinical-lowlight-theme.module';\n@import './ThemedComponent.orion-fusion-theme.module';\n@import './ThemedComponent.test-theme.module';\n\n:local {\n  .themed {\n    height: 100%;\n    overflow: auto;\n    padding: 24px;\n    position: relative;\n  }\n\n  .themed-block {\n    background-color: var(--terra-framework-docs-terra-theme-context-themed-component-block-background-color, #0079be);\n    height: var(--terra-framework-docs-terra-theme-context-themed-component-block-height, 24px);\n  }\n\n  .compact {\n    --terra-framework-docs-terra-theme-context-themed-component-block-height: 16px;\n  }\n}\n\n")))}h.isMDXComponent=!0;var x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(s.A,{title:t||"Themed Component",description:n,example:r.createElement(d.default,null),exampleCssSrc:r.createElement(h,null),exampleSrc:r.createElement(i,null),isExpanded:a})},_=["components"],g={},v="wrapper";function b(e){var t=e.components,n=(0,l.A)(e,_);return(0,m.mdx)(v,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)(o.E,{mdxType:"Badge"}),(0,m.mdx)("h1",{id:"terra-theme-context"},"Terra Theme Context"),(0,m.mdx)("p",null,"A React context to provide the current theme. This package is intended to be used by Terra components only. Any terra consumers or custom Terra components should consume the context from the ",(0,m.mdx)("inlineCode",{parentName:"p"},"terra-application")," package."),(0,m.mdx)("p",null,"This context can be used to apply any theme related changes to a component."),(0,m.mdx)("p",null,"The most common use would be to apply a theme class to the root tag of the component to apply theme variables. See below for an example."),(0,m.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Install with ",(0,m.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"npm install terra-theme-context"))))),(0,m.mdx)("h2",{id:"usage"},"Usage"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ThemeContext from 'terra-theme-context';\n")),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)(x,{title:"A component using the theme context",mdxType:"ThemedComponent"}),(0,m.mdx)("h2",{id:"context-value"},"Context Value"),(0,m.mdx)("p",null,"The ThemeContext provides an object with the following values:"),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,m.mdx)("th",{parentName:"tr",align:null},"Type"),(0,m.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,m.mdx)("th",{parentName:"tr",align:null},"DefaultValue"),(0,m.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"name")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"optional"),(0,m.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current application theme name. This field requires use of the terra-functional-testing webpack config.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"className")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"optional"),(0,m.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current application theme className. The default theme is indicated as undefined or empty string.")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},(0,m.mdx)("inlineCode",{parentName:"td"},"density")),(0,m.mdx)("td",{parentName:"tr",align:null},"String"),(0,m.mdx)("td",{parentName:"tr",align:null},"optional"),(0,m.mdx)("td",{parentName:"tr",align:null},"undefined"),(0,m.mdx)("td",{parentName:"tr",align:null},"The current application theme density.")))))}b.isMDXComponent=!0},86433:function(e,t,n){n.d(t,{A:function(){return s}});var a=n(96540),l=n(83764),r=n(58168),m=n(53986),o=n(36665),d=["components"],c={};function u(e){var t=e.components,n=(0,m.A)(e,d);return(0,o.mdx)("wrapper",(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n\nimport ThemedComponent from './ThemedComponent';\n\nconst ThemeContextProviderExample = () => (\n  <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme', density: 'compact' }}>\n    <ThemedComponent />\n  </ThemeContextProvider>\n);\n\nexport default ThemeContextProviderExample;\n\n")))}u.isMDXComponent=!0;var i=n(201),s=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(i.A,{title:t||"Theme Context Provider Example",description:n,example:a.createElement(l.A,null),exampleSrc:a.createElement(u,null),isExpanded:r})}},90883:function(e,t,n){n.d(t,{E:function(){return r}});var a=n(96540),l=n(55713),r=function(e){var t=e.url;return a.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-context",name:"terra-theme-context",version:"1.9.0",url:t})}},83764:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),r=a(n(50126)),m=a(n(22623));t.A=function(){return l.default.createElement(r.default,{theme:{name:"test-theme",className:"test-theme",density:"compact"}},l.default.createElement(m.default,null))}},22623:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(96540)),r=a(n(67967)),m=a(n(23695)),o=a(n(9268)),d=r.default.bind(o.default);t.default=function(){var e=l.default.useContext(m.default);return l.default.createElement("div",{className:d("themed",e.className,e.density)},l.default.createElement("h1",null,"Theme Name: ".concat(e.name)),l.default.createElement("h1",null,"Theme Density: ".concat(e.density||"")),l.default.createElement("div",{className:d("themed-block")}))}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},9268:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ThemedComponent-module__clinical-lowlight-theme___LXe19","orion-fusion-theme":"ThemedComponent-module__orion-fusion-theme___6wTNK","test-theme":"ThemedComponent-module__test-theme___wmvmt",themed:"ThemedComponent-module__themed___g-PF2","themed-block":"ThemedComponent-module__themed-block___Ncdee",compact:"ThemedComponent-module__compact___cleOE"}},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(96540)),l=r(n(25365));function r(e){return e&&e.__esModule?e:{default:e}}var m=function(e){var t=Object.assign({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=m},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,{A:function(){return a}})}}]);