(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[66001],{49271:function(e,t,n){"use strict";var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var m=o?Object.getOwnPropertyDescriptor(e,r):null;m&&(m.get||m.set)?Object.defineProperty(a,r,m):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),m=a(n(45697)),u=a(n(19845)),d=n(21538),i=a(n(33864)),p=a(n(23399)),s=n(51051),c=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=u.default.bind(c.default),y={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,m=e.description,u=e.isExpanded,c=(0,r.useState)(u),f=(0,o.default)(c,2),y=f[0],b=f[1],_=(0,r.useState)(!1),E=(0,o.default)(_,2),N=E[0],v=E[1],T=r.default.useContext(d.ThemeContext),C=void 0!==a,w=function(){v(!N),y&&b(!y)},M=function(){b(!y),N&&v(!N)},D=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:x("template",T.className)},r.default.createElement("div",{className:x("header")},l&&r.default.createElement("h2",{className:x("title")},l)),r.default.createElement("div",{className:x("content")},m&&r.default.createElement("div",{className:x("description")},m),t),r.default.createElement("div",{className:x("footer")},n?r.default.createElement("div",{className:x("button-container")},C&&r.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":N}),onClick:w,onKeyDown:function(e){return D(e,w)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(i.default,{className:x("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(p.default,{className:x("chevron")})),r.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:M,onKeyDown:function(e){return D(e,M)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(i.default,{className:x("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(p.default,{className:x("chevron")}))):null,r.default.createElement("div",null,N&&r.default.createElement("div",{className:x("css")},a),y&&r.default.createElement("div",{className:x("code")},n))))};b.propTypes=y,b.defaultProps={isExpanded:!1};var _=b;t.Z=_},22574:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Z}});var a=n(87462),l=n(44925),o=n(67294),r=n(81254),m=n(23219),u=n(78530),d=["components"],i={},p="wrapper";function s(e){var t=e.components,n=(0,l.Z)(e,d);return(0,r.mdx)(p,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(u.ZP,{mdxType:"PropsTable"},(0,r.mdx)(u.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(u.O,{mdxType:"PropNameCell"},"header"),(0,r.mdx)(u.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(u.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(u.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(u.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Element to be placed within the header section of the layout."))),(0,r.mdx)(u.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(u.O,{mdxType:"PropNameCell"},"menu"),(0,r.mdx)(u.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(u.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(u.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(u.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Element to be placed within the menu section of the layout. If not set, Layout-provided menu controls will be hidden."))),(0,r.mdx)(u.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(u.O,{mdxType:"PropNameCell"},"menuText"),(0,r.mdx)(u.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(u.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(u.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(u.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String used to decorate menu hover control."))),(0,r.mdx)(u.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(u.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(u.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(u.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(u.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(u.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Element to be placed within the main content section of the layout.")))))}s.isMDXComponent=!0;var c=n(40250),f=["components"],x={};function y(e){var t=e.components,n=(0,l.Z)(e,f);return(0,r.mdx)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Layout from 'terra-layout';\nimport classNames from 'classnames/bind';\nimport ContentExample from '../common/ContentExample';\nimport MenuExample from '../common/MenuExample';\nimport ToolbarExample from '../common/ToolbarExample';\nimport styles from './LayoutDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst layout = () => (\n  <Layout\n    header={<ToolbarExample />}\n    menu={<MenuExample />}\n    menuText=\"Menu\"\n    className={cx('layout-example')}\n  >\n    <ContentExample />\n  </Layout>\n);\n\nexport default layout;\n\n")))}y.isMDXComponent=!0;var h=n(49271),g=["components"],b={};function _(e){var t=e.components,n=(0,l.Z)(e,g);return(0,r.mdx)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .layout-example {\n    height: 400px;\n    width: 100%;\n  }\n}\n\n")))}_.isMDXComponent=!0;var E=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(h.Z,{title:t||"Layout Standard",description:n,example:o.createElement(c.Z,null),exampleCssSrc:o.createElement(_,null),exampleSrc:o.createElement(y,null),isExpanded:a})},N=n(2242),v=["components"],T={};function C(e){var t=e.components,n=(0,l.Z)(e,v);return(0,r.mdx)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Layout from 'terra-layout';\nimport classNames from 'classnames/bind';\nimport ContentExample from '../common/ContentExample';\nimport ToolbarExample from '../common/ToolbarExample';\nimport styles from './LayoutDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst layout = () => (\n  <Layout\n    header={<ToolbarExample />}\n    className={cx('layout-example')}\n  >\n    <ContentExample />\n  </Layout>\n);\n\nexport default layout;\n\n")))}C.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(h.Z,{title:t||"Layout Menu Disabled",description:n,example:o.createElement(N.Z,null),exampleCssSrc:o.createElement(_,null),exampleSrc:o.createElement(C,null),isExpanded:a})},M=n(70273),D=["components"],L={};function P(e){var t=e.components,n=(0,l.Z)(e,D);return(0,r.mdx)("wrapper",(0,a.Z)({},L,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Layout from 'terra-layout';\nimport classNames from 'classnames/bind';\nimport ContentExample from '../common/ContentExample';\nimport MenuExample from '../common/MenuExample';\nimport styles from './LayoutDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst layout = () => (\n  <Layout\n    menu={<MenuExample />}\n    menuText=\"Menu\"\n    className={cx('layout-example')}\n  >\n    <ContentExample />\n  </Layout>\n);\n\nexport default layout;\n\n")))}P.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(h.Z,{title:t||"Layout No Header",description:n,example:o.createElement(M.Z,null),exampleCssSrc:o.createElement(_,null),exampleSrc:o.createElement(P,null),isExpanded:a})},S=["components"],O={},j="wrapper";function Z(e){var t=e.components,n=(0,l.Z)(e,S);return(0,r.mdx)(j,(0,a.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(m.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-layout"},"Terra Layout"),(0,r.mdx)("p",null,"The Layout component provides a responsive starting point for the positioning of application components."),(0,r.mdx)("p",null,"The Layout is responsive at the following breakpoints (as defined by the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/blob/main/packages/terra-responsive-element/src/breakpoints.module.scss"},"terra-responsive-element"),"):"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Desktop ","[",(0,r.mdx)("inlineCode",{parentName:"li"},"medium"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"large"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"huge"),"]"," - The menu is pinned open and not dismissable. The content region is resized to account for the menu, and the menu is presented under the header content."),(0,r.mdx)("li",{parentName:"ul"},"Tablet ","[",(0,r.mdx)("inlineCode",{parentName:"li"},"small"),"]"," - The menu is disclosed by a programatic toggle provided to the header content. The header content must adhere to a Layout-specific prop API and properly display a toggle button if necessary. The header is overlaid by the menu when open, and the menu is dismissed by clicking in the negative overlay space."),(0,r.mdx)("li",{parentName:"ul"},"Phone ","[",(0,r.mdx)("inlineCode",{parentName:"li"},"tiny"),"]"," - This breakpoint's behavior is similar to that of Tablet, with the only difference being the menu size. The menu is presented as nearly full-screen, leaving only enough negative space to allow for dismissal.")),(0,r.mdx)("p",null,"To facilitate communication between the Layout and its content, the Layout provides a ",(0,r.mdx)("inlineCode",{parentName:"p"},"layoutConfig")," prop to the components in its various regions. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"layoutConfig")," is an object that contains the various properties:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"size")," - The current responsive size of the layout as rendered. Components can render based on this size rather than implement their own resize observers."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"toggleMenu")," - A function that will toggle the current menu state open/closed. This function is provided only when the breakpoint is ",(0,r.mdx)("inlineCode",{parentName:"li"},"tiny")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},"small"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"menuIsOpen")," - A boolean flag indicating whether or not the menu is currently displayed."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"togglePin")," - A function that will toggle the current menu's pinned state. This function is provied only to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"menu")," component and only when the breakpoint size is ",(0,r.mdx)("inlineCode",{parentName:"li"},"medium"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"menuIsPinned")," - A boolean flag indicating whether or not the menu is currently pinned. This flag is provied only to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"menu")," component and only when the breakpoint size is ",(0,r.mdx)("inlineCode",{parentName:"li"},"medium"),".")),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-layout"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-router-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^5.0.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Layout from 'terra-layout';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(E,{title:"Layout - Standard",mdxType:"LayoutStandard"}),(0,r.mdx)(w,{title:"Layout - No Menu",mdxType:"LayoutMenuDisabled"}),(0,r.mdx)(k,{title:"Layout - No Header",mdxType:"LayoutNoHeader"}),(0,r.mdx)("h2",{id:"layout-props-table"},"Layout Props Table"),(0,r.mdx)(s,{mdxType:"LayoutPropsTable"}))}Z.isMDXComponent=!0},23219:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var a=n(67294),l=n(22863),o=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-layout",name:"terra-layout",version:"4.39.0",url:t})}},22061:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),o=a(n(45697)),r=a(n(19845)),m=a(n(87553)),u=r.default.bind(m.default),d=function(e){var t=e.layoutConfig;return l.default.createElement("div",{className:u("content-wrapper1")},l.default.createElement("div",{className:u("content-wrapper2")},l.default.createElement("h2",{className:u("content-text")},"Content"),t.toggleMenu&&l.default.createElement("button",{type:"button",className:u("button"),onClick:t.toggleMenu},"Toggle Menu")))};d.propTypes={layoutConfig:o.default.shape({toggleMenu:o.default.func})};t.default=d},6355:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),o=a(n(45697)),r=a(n(19845)),m=a(n(87553)),u=r.default.bind(m.default),d=function(e){var t=e.layoutConfig;return l.default.createElement("div",{className:u("content-wrapper1")},l.default.createElement("div",{className:u("content-wrapper2")},l.default.createElement("h2",{className:u("content-text")},"Menu"),t.toggleMenu&&l.default.createElement("button",{type:"button",className:u("button"),onClick:t.toggleMenu},"Toggle Menu"),t.togglePin&&!t.menuIsPinned&&l.default.createElement("button",{type:"button",className:u("button"),onClick:t.togglePin},"Pin"),t.togglePin&&t.menuIsPinned&&l.default.createElement("button",{type:"button",className:u("button"),onClick:t.togglePin},"Unpin")))};d.propTypes={layoutConfig:o.default.shape({toggleMenu:o.default.func,togglePin:o.default.func,menuIsPinned:o.default.bool})};t.default=d},36883:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),o=a(n(45697)),r=a(n(19845)),m=a(n(60992)),u=r.default.bind(m.default),d={layoutConfig:o.default.object},i=function(e){var t=e.layoutConfig;return l.default.createElement("div",{className:u("content-wrapper1")},l.default.createElement("div",{className:u("content-wrapper2")},l.default.createElement("h2",{className:u("content-text")},"Header"),t.toggleMenu&&l.default.createElement("button",{type:"button",className:u("button"),onClick:t.toggleMenu},"Toggle Menu")))};i.propTypes=d;t.default=i},2242:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(4546)),r=a(n(19845)),m=a(n(22061)),u=a(n(36883)),d=a(n(29521)),i=r.default.bind(d.default);t.Z=function(){return l.default.createElement(o.default,{header:l.default.createElement(u.default,null),className:i("layout-example")},l.default.createElement(m.default,null))}},70273:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(4546)),r=a(n(19845)),m=a(n(22061)),u=a(n(6355)),d=a(n(29521)),i=r.default.bind(d.default);t.Z=function(){return l.default.createElement(o.default,{menu:l.default.createElement(u.default,null),menuText:"Menu",className:i("layout-example")},l.default.createElement(m.default,null))}},40250:function(e,t,n){"use strict";var a=n(64836);t.Z=void 0;var l=a(n(67294)),o=a(n(4546)),r=a(n(19845)),m=a(n(22061)),u=a(n(6355)),d=a(n(36883)),i=a(n(29521)),p=r.default.bind(i.default);t.Z=function(){return l.default.createElement(o.default,{header:l.default.createElement(d.default,null),menu:l.default.createElement(u.default,null),menuText:"Menu",className:p("layout-example")},l.default.createElement(m.default,null))}},53560:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},87553:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper1":"LayoutDocCommon-module__content-wrapper1___oJTcg","content-wrapper2":"LayoutDocCommon-module__content-wrapper2___8QgQE","content-text":"LayoutDocCommon-module__content-text___OgDt+",button:"LayoutDocCommon-module__button___WArH6"}},60992:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper1":"ToolbarExample-module__content-wrapper1___9lB53","content-wrapper2":"ToolbarExample-module__content-wrapper2___zbeYH","content-text":"ToolbarExample-module__content-text___z+c57",button:"ToolbarExample-module__button___3doYU"}},29521:function(e,t,n){"use strict";n.r(t),t.default={"layout-example":"LayoutDocExampleCommon-module__layout-example___lwA5J"}},33864:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),l=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var m=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=m},15059:function(e){var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=t.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function l(e,t){t=t||{};var l,r,m,i=[],p=[],s=e.querySelectorAll(n);for(t.includeContainer&&a.call(e,n)&&(s=Array.prototype.slice.apply(s)).unshift(e),l=0;l<s.length;l++)o(r=s[l])&&(0===(m=u(r))?i.push(r):p.push({documentOrder:l,tabIndex:m,node:r}));return p.sort(d).map((function(e){return e.node})).concat(i)}function o(e){return!(!r(e)||function(e){return function(e){return i(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(t);return!n||n===e}(e)}(e)||u(e)<0)}function r(e){return!(e.disabled||function(e){return i(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}l.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,n)&&o(e)},l.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,m)&&r(e)};var m=t.concat("iframe").join(",");function u(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function i(e){return"INPUT"===e.tagName}e.exports=l}}]);