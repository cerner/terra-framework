"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[88434],{201:function(e,t,a){var n=a(24994),l=a(73738);t.A=void 0;var r=n(a(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var d=r?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(n,o,d):n[o]=e[o]}return n.default=e,a&&a.set(e,n),n}(a(96540)),d=n(a(5556)),m=n(a(67967)),u=a(92912),p=n(a(49558)),i=n(a(53665)),c=a(25966),s=n(a(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var x=m.default.bind(s.default),_={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,d=e.description,m=e.isExpanded,s=(0,o.useState)(m),f=(0,r.default)(s,2),_=f[0],v=f[1],N=(0,o.useState)(!1),E=(0,r.default)(N,2),T=E[0],b=E[1],g=o.default.useContext(u.ThemeContext),w=void 0!==n,C=function(){b(!T),_&&v(!_)},M=function(){v(!_),T&&b(!T)},A=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",g.className)},o.default.createElement("div",{className:x("header")},l&&o.default.createElement("h2",{className:x("title")},l)),o.default.createElement("div",{className:x("content")},d&&o.default.createElement("div",{className:x("description")},d),t),o.default.createElement("div",{className:x("footer")},a?o.default.createElement("div",{className:x("button-container")},w&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":T}),onClick:C,onKeyDown:function(e){return A(e,C)},onBlur:y,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(i.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":_}),onClick:M,onKeyDown:function(e){return A(e,M)},onBlur:y,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(i.default,{className:x("chevron")}))):null,o.default.createElement("div",null,T&&o.default.createElement("div",{className:x("css")},n),_&&o.default.createElement("div",{className:x("code")},a))))};v.propTypes=_,v.defaultProps={isExpanded:!1};t.A=v},97426:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(58168),l=a(53986),r=a(96540),o=a(36665),d=a(38011),m=a(12883),u=["components"],p={},i="wrapper";function c(e){var t=e.components,a=(0,l.A)(e,u);return(0,o.mdx)(i,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(m.Ay,{mdxType:"PropsTable"},(0,o.mdx)(m.fI,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(m.dt,{mdxType:"PropNameCell"},"content"),(0,o.mdx)(m.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,o.mdx)(m.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(m.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(m.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Content element to be placed within the fill area of the header."))),(0,o.mdx)(m.fI,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(m.dt,{mdxType:"PropNameCell"},"extensions"),(0,o.mdx)(m.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,o.mdx)(m.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(m.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(m.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Extensions element to be placed before the end of the header."))),(0,o.mdx)(m.fI,{key:"ROW3",mdxType:"Row"},(0,o.mdx)(m.dt,{mdxType:"PropNameCell"},"footer"),(0,o.mdx)(m.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,o.mdx)(m.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(m.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(m.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Footer element to be placed at the end of the header."))),(0,o.mdx)(m.fI,{key:"ROW4",mdxType:"Row"},(0,o.mdx)(m.dt,{mdxType:"PropNameCell"},"header"),(0,o.mdx)(m.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,o.mdx)(m.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(m.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(m.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Header element to be placed at the start of the header.")))))}c.isMDXComponent=!0;var s=a(96539),f=["components"],x={};function _(e){var t=e.components,a=(0,l.A)(e,f);return(0,o.mdx)("wrapper",(0,n.A)({},x,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport classNames from \'classnames/bind\';\nimport ApplicationMenuLayout from \'terra-application-menu-layout\';\nimport PlaceHolder from \'terra-application-menu-layout/lib/terra-dev-site/doc/common/Placeholder\';\nimport styles from \'./MenuWireframe.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst Menu = () => (\n  <div className={cx(\'content-wrapper\')}>\n    <ApplicationMenuLayout\n      header={<PlaceHolder text="Header" type="header" />}\n      footer={<PlaceHolder text="Footer" type="footer" />}\n      extensions={<PlaceHolder text="Extensions" type="extensions" />}\n      content={<PlaceHolder text="Content" />}\n    />\n  </div>\n);\n\nexport default Menu;\n\n')))}_.isMDXComponent=!0;var y=a(201),h=["components"],v={};function N(e){var t=e.components,a=(0,l.A)(e,h);return(0,o.mdx)("wrapper",(0,n.A)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    height: 450px;\n    width: 300px;\n  }\n}\n\n")))}N.isMDXComponent=!0;var E=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(y.A,{title:t||"Menu Wireframe",description:a,example:r.createElement(s.A,null),exampleCssSrc:r.createElement(N,null),exampleSrc:r.createElement(_,null),isExpanded:n})},T=["components"],b={},g="wrapper";function w(e){var t=e.components,a=(0,l.A)(e,T);return(0,o.mdx)(g,(0,n.A)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(d.E,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-application-menu-layout"},"Terra Application Menu Layout"),(0,o.mdx)("p",null,"This component renders an application menu layout. To be used with terra-layout or terra-navigation-layout."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install with ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-menu-layout"))))),(0,o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,o.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,o.mdx)("h2",{id:"component-features"},"Component Features"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(E,{mdxType:"MenuWireframe"}),(0,o.mdx)("h2",{id:"application-menu-layout-props-table"},"Application menu layout props table"),(0,o.mdx)(c,{mdxType:"MenuLayoutPropsTable"}))}w.isMDXComponent=!0},38011:function(e,t,a){a.d(t,{E:function(){return r}});var n=a(96540),l=a(55713),r=function(e){var t=e.url;return n.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-menu-layout",name:"terra-application-menu-layout",version:"3.33.1",url:t})}},25108:function(e,t,a){var n=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(94634)),r=n(a(91847)),o=n(a(96540)),d=n(a(5556)),m=n(a(67967)),u=n(a(56429)),p=["content","extensions","footer","header"],i=m.default.bind(u.default),c={content:d.default.element,extensions:d.default.element,footer:d.default.element,header:d.default.element},s=function(e){var t,a,n,d,m=e.content,u=e.extensions,c=e.footer,s=e.header,f=(0,r.default)(e,p),x=i(["menu","fill",f.className]);return s&&(t=o.default.createElement("div",{className:i(["fit","header"])},s)),m&&(a=o.default.createElement("div",{className:i(["fill","content"])},o.default.createElement("div",{className:i("normalizer")},m))),u&&(n=o.default.createElement("div",{className:i(["fit","widget"])},u)),c&&(d=o.default.createElement("div",{className:i(["fit","footer"])},c)),o.default.createElement("div",(0,l.default)({},f,{className:x}),t,o.default.createElement("div",{className:i(["fill","body"])},n,a),d)};s.propTypes=c;t.default=s},51550:function(e,t,a){var n=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(96540)),r=n(a(67967)),o=n(a(5556)),d=n(a(58555)),m=r.default.bind(d.default),u={text:o.default.string,type:o.default.string},p=function(e){var t=e.text,a=e.type;return l.default.createElement("div",{className:m("wrapper1-".concat(a))},l.default.createElement("div",{className:m("wrapper2")},l.default.createElement("div",{className:m("wrapper3")},l.default.createElement("h3",null,t))))};p.propTypes=u,p.defaultProps={text:"PlaceHolder",type:"default"};t.default=p},96539:function(e,t,a){var n=a(24994);t.A=void 0;var l=n(a(96540)),r=n(a(67967)),o=n(a(25108)),d=n(a(51550)),m=n(a(45336)),u=r.default.bind(m.default);t.A=function(){return l.default.createElement("div",{className:u("content-wrapper")},l.default.createElement(o.default,{header:l.default.createElement(d.default,{text:"Header",type:"header"}),footer:l.default.createElement(d.default,{text:"Footer",type:"footer"}),extensions:l.default.createElement(d.default,{text:"Extensions",type:"extensions"}),content:l.default.createElement(d.default,{text:"Content"})}))}},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},56429:function(e,t,a){a.r(t),t.default={fit:"ApplicationMenuLayout-module__fit___fJ-8H",fill:"ApplicationMenuLayout-module__fill___NpC9g",menu:"ApplicationMenuLayout-module__menu___+THcL",header:"ApplicationMenuLayout-module__header___kdgcp",footer:"ApplicationMenuLayout-module__footer___k9Yr3",body:"ApplicationMenuLayout-module__body___6HrKr",widgets:"ApplicationMenuLayout-module__widgets___-YRy1",content:"ApplicationMenuLayout-module__content___T7isC",normalizer:"ApplicationMenuLayout-module__normalizer___uQB7W"}},58555:function(e,t,a){a.r(t),t.default={"wrapper1-default":"Placeholder-module__wrapper1-default___fYLpJ","wrapper1-header":"Placeholder-module__wrapper1-header___V+iWv","wrapper1-footer":"Placeholder-module__wrapper1-footer___Hps9x","wrapper1-extensions":"Placeholder-module__wrapper1-extensions___6RcGl",wrapper2:"Placeholder-module__wrapper2___c9RCJ",wrapper3:"Placeholder-module__wrapper3___jfoDU"}},45336:function(e,t,a){a.r(t),t.default={"content-wrapper":"MenuWireframe-module__content-wrapper___WcxCX"}},49558:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o}}]);