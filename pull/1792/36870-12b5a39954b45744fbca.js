"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[36870],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var m=o?Object.getOwnPropertyDescriptor(e,r):null;m&&(m.get||m.set)?Object.defineProperty(a,r,m):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),m=a(n(45697)),d=a(n(47166)),c=n(21538),i=a(n(33864)),u=a(n(23399)),p=n(51051),s=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(s.default),h={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},T=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,m=e.description,d=e.isExpanded,s=(0,r.useState)(d),f=(0,o.default)(s,2),h=f[0],T=f[1],E=(0,r.useState)(!1),y=(0,o.default)(E,2),C=y[0],g=y[1],b=r.default.useContext(c.ThemeContext),N=void 0!==a,w=function(){g(!C),h&&T(!h)},P=function(){T(!h),C&&g(!C)},k=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:x("template",b.className)},r.default.createElement("div",{className:x("header")},l&&r.default.createElement("h2",{className:x("title")},l)),r.default.createElement("div",{className:x("content")},m&&r.default.createElement("div",{className:x("description")},m),t),r.default.createElement("div",{className:x("footer")},n?r.default.createElement("div",{className:x("button-container")},N&&r.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":C}),onClick:w,onKeyDown:function(e){return k(e,w)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(i.default,{className:x("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:x("chevron")})),r.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:P,onKeyDown:function(e){return k(e,P)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(i.default,{className:x("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:x("chevron")}))):null,r.default.createElement("div",null,C&&r.default.createElement("div",{className:x("css")},a),h&&r.default.createElement("div",{className:x("code")},n))))};T.propTypes=h,T.defaultProps={isExpanded:!1};var E=T;t.Z=E},34341:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(87462),l=n(44925),o=(n(67294),n(81254)),r=n(67264),m=n(78530),d=["components"],c={},i="wrapper";function u(e){var t=e.components,n=(0,l.Z)(e,d);return(0,o.mdx)(i,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(m.ZP,{mdxType:"PropsTable"},(0,o.mdx)(m.X2,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(m.O,{mdxType:"PropNameCell"},"children"),(0,o.mdx)(m.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,o.mdx)(m.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The components to be rendered within the context of the ThemeContextProvider. Components rendered here are able to interact with ThemeContextProvider through the ThemeContext."))),(0,o.mdx)(m.X2,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(m.O,{mdxType:"PropNameCell"},"theme"),(0,o.mdx)(m.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n  name: {\n    type: 'string',\n  },\n  className: {\n    type: 'string',\n  },\n},\n"))),(0,o.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,o.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"An object containing the name and className of the selected theme.")))))}u.isMDXComponent=!0;var p=n(87981),s=["components"],f={},x="wrapper";function h(e){var t=e.components,n=(0,l.Z)(e,s);return(0,o.mdx)(x,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(r.C,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-theme-context"},"Terra Theme Context"),(0,o.mdx)("p",null,"A provider component for the terra theme context. This component is not intended for use outside of terra-application."),(0,o.mdx)("h2",{id:"how-does-this-relate-to-terra-theme-provider"},"How does this relate to terra-theme-provider"),(0,o.mdx)("p",null,"terra-theme-provider and terra-context/ThemeContextProvider work in concert to provide all aspects of terra themeing."),(0,o.mdx)("p",null,"The terra-theme-provider component is responsible for applying the theme class to the document element on the page. This will allow any non locally scoped theme classes to be applied throughout the application."),(0,o.mdx)("p",null,"This component sets the provided theme in react context so that react components can apply locally scoped theme classes to apply the theme variables directly."),(0,o.mdx)("p",null,"These components should be given the same theme name and will be orchestrated by terra-application."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install with ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"npm install terra-theme-context"))))),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n")),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(p.Z,{mdxType:"ThemeContextProviderExample"}),(0,o.mdx)("h2",{id:"props-table"},"Props Table"),(0,o.mdx)(u,{mdxType:"PropsTable"}))}h.isMDXComponent=!0},87981:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),l=n(52535),o=n(87462),r=n(44925),m=n(81254),d=["components"],c={};function i(e){var t=e.components,n=(0,r.Z)(e,d);return(0,m.mdx)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n\nimport ThemedComponent from './ThemedComponent';\n\nconst ThemeContextProviderExample = () => (\n  <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme' }}>\n    <ThemedComponent />\n  </ThemeContextProvider>\n);\n\nexport default ThemeContextProviderExample;\n\n")))}i.isMDXComponent=!0;var u=n(49271),p=function(e){var t=e.title,n=e.description,o=e.isExpanded;return a.createElement(u.Z,{title:t||"Theme Context Provider Example",description:n,example:a.createElement(l.Z,null),exampleSrc:a.createElement(i,null),isExpanded:o})}},67264:function(e,t,n){n.d(t,{C:function(){return o}});var a=n(67294),l=n(22863),o=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-context",name:"terra-theme-context",version:"1.8.0",url:t})}},52535:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(58502)),r=a(n(97542)),m=function(){return l.default.createElement(o.default,{theme:{name:"test-theme",className:"test-theme"}},l.default.createElement(r.default,null))};t.Z=m},97542:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),o=a(n(47166)),r=a(n(47341)),m=a(n(46665)),d=o.default.bind(m.default),c=function(){var e=l.default.useContext(r.default);return l.default.createElement("div",{className:d("themed",e.className)},l.default.createElement("h1",null,"Theme Name: ".concat(e.name)),l.default.createElement("div",{className:d("themed-block")}))};t.default=c},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},46665:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ThemedComponent-module__clinical-lowlight-theme___LXe19","orion-fusion-theme":"ThemedComponent-module__orion-fusion-theme___6wTNK","test-theme":"ThemedComponent-module__test-theme___wmvmt",themed:"ThemedComponent-module__themed___g-PF2","themed-block":"ThemedComponent-module__themed-block___Ncdee"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var m=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=m;t.default=d}}]);