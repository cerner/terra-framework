"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[55767],{201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var o=a(n(85715)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&{}.hasOwnProperty.call(e,m)){var r=o?Object.getOwnPropertyDescriptor(e,m):null;r&&(r.get||r.set)?Object.defineProperty(a,m,r):a[m]=e[m]}return a.default=e,n&&n.set(e,a),a}(n(96540)),r=a(n(5556)),d=a(n(67967)),c=n(92912),i=a(n(49558)),u=a(n(53665)),s=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=d.default.bind(p.default),x={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},T=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,r=e.description,d=e.isExpanded,p=(0,m.useState)(d),f=(0,o.default)(p,2),x=f[0],T=f[1],y=(0,m.useState)(!1),E=(0,o.default)(y,2),C=E[0],g=E[1],b=m.default.useContext(c.ThemeContext),N=void 0!==a,w=function(){g(!C),x&&T(!x)},P=function(){T(!x),C&&g(!C)},k=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return m.default.createElement("div",{className:h("template",b.className)},m.default.createElement("div",{className:h("header")},l&&m.default.createElement("h2",{className:h("title")},l)),m.default.createElement("div",{className:h("content")},r&&m.default.createElement("div",{className:h("description")},r),t),m.default.createElement("div",{className:h("footer")},n?m.default.createElement("div",{className:h("button-container")},N&&m.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":C}),onClick:w,onKeyDown:function(e){return k(e,w)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(i.default,{className:h("chevron")}),m.default.createElement("span",null,"CSS"),m.default.createElement(u.default,{className:h("chevron")})),m.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":x}),onClick:P,onKeyDown:function(e){return k(e,P)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(i.default,{className:h("chevron")}),m.default.createElement("span",null,"Code"),m.default.createElement(u.default,{className:h("chevron")}))):null,m.default.createElement("div",null,C&&m.default.createElement("div",{className:h("css")},a),x&&m.default.createElement("div",{className:h("code")},n))))};T.propTypes=x,T.defaultProps={isExpanded:!1};t.A=T},9781:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(58168),l=n(53986),o=(n(96540),n(36665)),m=n(90883),r=n(12883),d=["components"],c={},i="wrapper";function u(e){var t=e.components,n=(0,l.A)(e,d);return(0,o.mdx)(i,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(r.Ay,{mdxType:"PropsTable"},(0,o.mdx)(r.fI,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(r.dt,{mdxType:"PropNameCell"},"children"),(0,o.mdx)(r.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,o.mdx)(r.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(r.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(r.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The components to be rendered within the context of the ThemeContextProvider. Components rendered here are able to interact with ThemeContextProvider through the ThemeContext."))),(0,o.mdx)(r.fI,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(r.dt,{mdxType:"PropNameCell"},"theme"),(0,o.mdx)(r.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n  name: {\n    type: 'string',\n  },\n  className: {\n    type: 'string',\n  },\n  density: {\n    type: 'string',\n  },\n},\n"))),(0,o.mdx)(r.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(r.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,o.mdx)(r.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"An object containing the name, className, and density of the selected theme.")))))}u.isMDXComponent=!0;var s=n(86433),p=["components"],f={},h="wrapper";function x(e){var t=e.components,n=(0,l.A)(e,p);return(0,o.mdx)(h,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(m.E,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-theme-context"},"Terra Theme Context"),(0,o.mdx)("p",null,"A provider component for the terra theme context. This component is not intended for use outside of terra-application."),(0,o.mdx)("h2",{id:"how-does-this-relate-to-terra-theme-provider"},"How does this relate to terra-theme-provider"),(0,o.mdx)("p",null,"terra-theme-provider and terra-context/ThemeContextProvider work in concert to provide all aspects of terra themeing."),(0,o.mdx)("p",null,"The terra-theme-provider component is responsible for applying the theme class to the document element on the page. This will allow any non locally scoped theme classes to be applied throughout the application."),(0,o.mdx)("p",null,"This component sets the provided theme in react context so that react components can apply locally scoped theme classes to apply the theme variables directly."),(0,o.mdx)("p",null,"These components should be given the same theme name and will be orchestrated by terra-application."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install with ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"npm install terra-theme-context"))))),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n")),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(s.A,{mdxType:"ThemeContextProviderExample"}),(0,o.mdx)("h2",{id:"props-table"},"Props Table"),(0,o.mdx)(u,{mdxType:"PropsTable"}))}x.isMDXComponent=!0},86433:function(e,t,n){n.d(t,{A:function(){return s}});var a=n(96540),l=n(83764),o=n(58168),m=n(53986),r=n(36665),d=["components"],c={};function i(e){var t=e.components,n=(0,m.A)(e,d);return(0,r.mdx)("wrapper",(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n\nimport ThemedComponent from './ThemedComponent';\n\nconst ThemeContextProviderExample = () => (\n  <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme', density: 'compact' }}>\n    <ThemedComponent />\n  </ThemeContextProvider>\n);\n\nexport default ThemeContextProviderExample;\n\n")))}i.isMDXComponent=!0;var u=n(201),s=function(e){var t=e.title,n=e.description,o=e.isExpanded;return a.createElement(u.A,{title:t||"Theme Context Provider Example",description:n,example:a.createElement(l.A,null),exampleSrc:a.createElement(i,null),isExpanded:o})}},90883:function(e,t,n){n.d(t,{E:function(){return o}});var a=n(96540),l=n(55713),o=function(e){var t=e.url;return a.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-context",name:"terra-theme-context",version:"1.10.0",url:t})}},83764:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(96540)),o=a(n(50126)),m=a(n(22623));t.A=function(){return l.default.createElement(o.default,{theme:{name:"test-theme",className:"test-theme",density:"compact"}},l.default.createElement(m.default,null))}},22623:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(96540)),o=a(n(67967)),m=a(n(23695)),r=a(n(9268)),d=o.default.bind(r.default);t.default=function(){var e=l.default.useContext(m.default);return l.default.createElement("div",{className:d("themed",e.className,e.density)},l.default.createElement("h1",null,"Theme Name: ".concat(e.name)),l.default.createElement("h1",null,"Theme Density: ".concat(e.density||"")),l.default.createElement("div",{className:d("themed-block")}))}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},9268:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ThemedComponent-module__clinical-lowlight-theme___LXe19","orion-fusion-theme":"ThemedComponent-module__orion-fusion-theme___6wTNK","test-theme":"ThemedComponent-module__test-theme___wmvmt",themed:"ThemedComponent-module__themed___g-PF2","themed-block":"ThemedComponent-module__themed-block___Ncdee",compact:"ThemedComponent-module__compact___cleOE"}},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(96540)),l=o(n(25365));function o(e){return e&&e.__esModule?e:{default:e}}var m=function(e){var t=Object.assign({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=m}}]);