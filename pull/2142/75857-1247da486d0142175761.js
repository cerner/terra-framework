"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[75857],{201:function(e,t,n){var l=n(24994),r=n(73738);t.A=void 0;var a=l(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(l,o,c):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(96540)),c=l(n(5556)),i=l(n(67967)),u=n(92912),f=l(n(49558)),s=l(n(53665)),m=n(25966),d=l(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var _=i.default.bind(d.default),v={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,r=e.title,c=e.description,i=e.isExpanded,d=(0,o.useState)(i),p=(0,a.default)(d,2),v=p[0],b=p[1],g=(0,o.useState)(!1),x=(0,a.default)(g,2),E=x[0],O=x[1],k=o.default.useContext(u.ThemeContext),j=void 0!==l,T=function(){O(!E),v&&b(!v)},A=function(){b(!v),E&&O(!E)},S=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",k.className)},o.default.createElement("div",{className:_("header")},r&&o.default.createElement("h2",{className:_("title")},r)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},j&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":E}),onClick:T,onKeyDown:function(e){return S(e,T)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(f.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:A,onKeyDown:function(e){return S(e,A)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(f.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:_("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:_("css")},l),v&&o.default.createElement("div",{className:_("code")},n))))};b.propTypes=v,b.defaultProps={isExpanded:!1};t.A=b},41301:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var l=n(58168),r=n(53986),a=(n(96540),n(36665)),o=n(43527),c=["components"],i={},u="wrapper";function f(e){var t=e.components,n=(0,r.A)(e,c);return(0,a.mdx)(u,(0,l.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.A,{mdxType:"DefaultFilePath"}))}f.isMDXComponent=!0},43527:function(e,t,n){n.d(t,{A:function(){return m}});var l=n(96540),r=n(93865),a=n(58168),o=n(53986),c=n(36665),i=["components"],u={};function f(e){var t=e.components,n=(0,o.A)(e,i);return(0,c.mdx)("wrapper",(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport FilePath from 'terra-file-path';\n\nconst items = [\n  {\n    key: 'home',\n    text: 'Home',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-1',\n    text: 'Level 1',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-2',\n    text: 'Level 2',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-3',\n    text: 'Level 3',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-4',\n    text: 'Level 4',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-5',\n    text: 'Level 5',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-6',\n    text: 'Level 6',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-7',\n    text: 'Level 7',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-8',\n    text: 'Level 8',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-9',\n    text: 'Level 9',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-10',\n    text: 'Level 10',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-11',\n    text: 'Level 11',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-12',\n    text: 'Level 12',\n    href: 'https://oracle.com',\n  },\n];\n\nconst DefaultFilePath = () => (\n  <FilePath items={items} />\n);\n\nexport default DefaultFilePath;\n\n")))}f.isMDXComponent=!0;var s=n(201),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(s.A,{title:t||"Default File Path",description:n,example:l.createElement(r.A,null),exampleSrc:l.createElement(f,null),isExpanded:a})}},6929:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(5556)),o=n(8604),c=l(n(26714)),i={items:a.default.arrayOf(a.default.shape({key:a.default.string,text:a.default.string,title:a.default.string,href:a.default.string,onClick:a.default.func})),intl:a.default.shape({formatMessage:a.default.func}).isRequired},u=function(e){var t=e.items,n=e.intl,l=t.slice(0,t.length-1),a=t[t.length-1];return r.default.createElement("nav",{"aria-label":"".concat(n.formatMessage({id:"Terra.file-path.ariaLabel"}),", ").concat(n.formatMessage({id:"Terra.file-path.ariaLabel-current-location"})," ").concat(a.text)},r.default.createElement(c.default,{isReversedChildrenOrder:!0,useHorizontalIcon:!0,isStartAligned:!0,menuIconText:n.formatMessage({id:"Terra.file-path.icon.text"})},l.map((function(e){return[r.default.createElement(c.default.Hyperlink,{key:e.key,text:e.text,title:e.title,href:e.href,onClick:e.onClick}),r.default.createElement(c.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(e.key)})]})).flat(),r.default.createElement(c.default.Item,{isTextOnly:!0,text:a.text,key:a.key})))};u.propTypes=i;t.default=(0,o.injectIntl)(u)},93865:function(e,t,n){var l=n(24994);t.A=void 0;var r=l(n(96540)),a=l(n(6929)),o=[{key:"home",text:"Home",href:"https://oracle.com"},{key:"level-1",text:"Level 1",href:"https://oracle.com"},{key:"level-2",text:"Level 2",href:"https://oracle.com"},{key:"level-3",text:"Level 3",href:"https://oracle.com"},{key:"level-4",text:"Level 4",href:"https://oracle.com"},{key:"level-5",text:"Level 5",href:"https://oracle.com"},{key:"level-6",text:"Level 6",href:"https://oracle.com"},{key:"level-7",text:"Level 7",href:"https://oracle.com"},{key:"level-8",text:"Level 8",href:"https://oracle.com"},{key:"level-9",text:"Level 9",href:"https://oracle.com"},{key:"level-10",text:"Level 10",href:"https://oracle.com"},{key:"level-11",text:"Level 11",href:"https://oracle.com"},{key:"level-12",text:"Level 12",href:"https://oracle.com"}];t.A=function(){return r.default.createElement(a.default,{items:o})}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},39496:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=u(n(96540)),a=u(n(5556)),o=u(n(67967)),c=u(n(92420)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){var r;return r=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var _=o.default.bind(c.default),v={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},h=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,a=e.align,o=e.alignFitStart,c=e.alignFill,u=e.alignFitEnd,s=e.fitStartAttributes,d=e.fillAttributes,v=e.fitEndAttributes,h=p(e,i),y=m({},s),b=m({},d),g=m({},v);return r.default.createElement("span",f({},h,{className:_("arrange",h.className)}),r.default.createElement("span",f({},y,{className:_("fit",a||o,y.className,"fit-block")}),t),r.default.createElement("span",f({},b,{className:_("fill",a||c,b.className,"fill-block")}),n),r.default.createElement("span",f({},g,{className:_("fit",a||u,g.className)}),l))};h.propTypes=v;t.default=h},58168:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{A:function(){return l}})},53986:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{A:function(){return l}})}}]);