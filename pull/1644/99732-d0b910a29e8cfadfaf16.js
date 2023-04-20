"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99732],{49271:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=x(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var i=r?Object.getOwnPropertyDescriptor(e,m):null;i&&(i.get||i.set)?Object.defineProperty(n,m,i):n[m]=e[m]}n.default=e,a&&a.set(e,n);return n}(a(67294)),i=n(a(45697)),d=n(a(47166)),o=a(21538),p=n(a(33864)),u=n(a(23399)),c=a(51051),s=n(a(53560));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:t})(e)}var f=d.default.bind(s.default),h={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},T=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,i=e.description,d=e.isExpanded,s=(0,m.useState)(d),x=(0,r.default)(s,2),h=x[0],g=x[1],v=(0,m.useState)(!1),_=(0,r.default)(v,2),b=_[0],N=_[1],E=m.default.useContext(o.ThemeContext),C=void 0!==n,k=function(){N(!b),h&&g(!h)},w=function(){g(!h),b&&N(!b)},D=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return m.default.createElement("div",{className:f("template",E.className)},m.default.createElement("div",{className:f("header")},l&&m.default.createElement("h2",{className:f("title")},l)),m.default.createElement("div",{className:f("content")},i&&m.default.createElement("div",{className:f("description")},i),t),m.default.createElement("div",{className:f("footer")},a?m.default.createElement("div",{className:f("button-container")},C&&m.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":b}),onClick:k,onKeyDown:function(e){return D(e,k)},onBlur:y,onMouseDown:T,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(p.default,{className:f("chevron")}),m.default.createElement("span",null,"CSS"),m.default.createElement(u.default,{className:f("chevron")})),m.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":h}),onClick:w,onKeyDown:function(e){return D(e,w)},onBlur:y,onMouseDown:T,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(p.default,{className:f("chevron")}),m.default.createElement("span",null,"Code"),m.default.createElement(u.default,{className:f("chevron")}))):null,m.default.createElement("div",null,b&&m.default.createElement("div",{className:f("css")},n),h&&m.default.createElement("div",{className:f("code")},a))))};g.propTypes=h,g.defaultProps={isExpanded:!1};var v=g;t.Z=v},96379:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var n=a(87462),l=a(44925),r=a(67294),m=a(81254),i=a(91756),d=a(59909),o=["components"],p={},u="wrapper";function c(e){var t=e.components,a=(0,l.Z)(e,o);return(0,m.mdx)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ApplicationTabs } from 'terra-application-links';\nimport ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinkConfig';\nimport demoStyles from './demoStyles.module.scss';\n\nconst ApplicationTabsExample = () => (\n  <div className={demoStyles['demo-header']}>\n    <ApplicationTabs alignment=\"center\" links={ApplicationLinkConfig} />\n  </div>\n);\n\nexport default ApplicationTabsExample;\n\n")))}c.isMDXComponent=!0;var s=a(49271),x=["components"],f={},h="wrapper";function y(e){var t=e.components,a=(0,l.Z)(e,x);return(0,m.mdx)(h,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .demo-header {\n    background-color: var(--terra-application-links-demo-header-background-color, #1c5f92);\n    height: 49px;\n    position: relative;\n    width: 100%;\n  }\n\n  .demo-header-with-icons {\n    height: 72px;\n  }\n}\n\n")))}y.isMDXComponent=!0;var T=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(s.Z,{title:t||"Application Tabs Example",description:a,example:r.createElement(d.Z,null),exampleCssSrc:r.createElement(y,null),exampleSrc:r.createElement(c,null),isExpanded:n})},g=a(10752),v=["components"],_={},b="wrapper";function N(e){var t=e.components,a=(0,l.Z)(e,v);return(0,m.mdx)(b,(0,n.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ApplicationTabs } from 'terra-application-links';\nimport ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinksWithIconsConfig';\nimport classNames from 'classnames/bind';\nimport styles from './demoStyles.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ApplicationTabsExample = () => (\n  <div className={cx(['demo-header', 'demo-header-with-icons'])}>\n    <ApplicationTabs alignment=\"center\" links={ApplicationLinkConfig} />\n  </div>\n);\n\nexport default ApplicationTabsExample;\n\n")))}N.isMDXComponent=!0;var E=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(s.Z,{title:t||"Application Tabs With Icons Example",description:a,example:r.createElement(g.Z,null),exampleCssSrc:r.createElement(y,null),exampleSrc:r.createElement(N,null),isExpanded:n})},C=a(78530),k=["components"],w={},D="wrapper";function R(e){var t=e.components,a=(0,l.Z)(e,k);return(0,m.mdx)(D,(0,n.Z)({},w,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)(C.ZP,{mdxType:"PropsTable"},(0,m.mdx)(C.X2,{key:"ROW1",mdxType:"Row"},(0,m.mdx)(C.O,{mdxType:"PropNameCell"},"alignment"),(0,m.mdx)(C.Di,{mdxType:"TypeCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'start'\n  'center'\n  'end'\n],\n"))),(0,m.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,m.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"'center'\n"))),(0,m.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,m.mdx)("p",null,"Alignment of the navigational tabs. ( e.g start, center, end )"))),(0,m.mdx)(C.X2,{key:"ROW2",mdxType:"Row"},(0,m.mdx)(C.O,{mdxType:"PropNameCell"},"links"),(0,m.mdx)(C.Di,{mdxType:"TypeCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    id: {\n      type: 'string',\n      description: 'The id to append to the link.',\n    },\n    path: {\n      type: 'string',\n      required: true,\n      description: 'The path to push to the route.',\n    },\n    text: {\n      type: 'string',\n      required: true,\n      description: 'The display text for the link.',\n    },\n    icon: {\n      type: 'custom',\n    },\n  },\n}],\n"))),(0,m.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,m.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,m.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,m.mdx)("p",null,"Navigational links that will generate tabs that will update the path. These paths are matched with react-router to selection."))),(0,m.mdx)(C.X2,{key:"ROW3",mdxType:"Row"},(0,m.mdx)(C.O,{mdxType:"PropNameCell"},"location"),(0,m.mdx)(C.Di,{mdxType:"TypeCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,m.mdx)(C.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,m.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,m.mdx)("p",null,"none")),(0,m.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,m.mdx)("p",null,"The location as provided by the ",(0,m.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))),(0,m.mdx)(C.X2,{key:"ROW4",mdxType:"Row"},(0,m.mdx)(C.O,{mdxType:"PropNameCell"},"match"),(0,m.mdx)(C.Di,{mdxType:"TypeCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,m.mdx)(C.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,m.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,m.mdx)("p",null,"none")),(0,m.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,m.mdx)("p",null,"The match as provided by the ",(0,m.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))),(0,m.mdx)(C.X2,{key:"ROW5",mdxType:"Row"},(0,m.mdx)(C.O,{mdxType:"PropNameCell"},"history"),(0,m.mdx)(C.Di,{mdxType:"TypeCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,m.mdx)(C.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,m.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,m.mdx)("p",null,"none")),(0,m.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,m.mdx)("p",null,"The history as provided by the ",(0,m.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))),(0,m.mdx)(C.X2,{key:"ROW6",mdxType:"Row"},(0,m.mdx)(C.O,{mdxType:"PropNameCell"},"staticContext"),(0,m.mdx)(C.Di,{mdxType:"TypeCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,m.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,m.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,m.mdx)("p",null,"none")),(0,m.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,m.mdx)("p",null,"The staticContext as provided by the ",(0,m.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC. This will only be provided when\nwithin a StaticRouter."))),(0,m.mdx)(C.X2,{key:"ROW7",mdxType:"Row"},(0,m.mdx)(C.O,{mdxType:"PropNameCell"},"hasIcons"),(0,m.mdx)(C.Di,{mdxType:"TypeCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,m.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,m.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,m.mdx)("p",null,"none")),(0,m.mdx)(C.Ex,{mdxType:"DescriptionCell"}))))}R.isMDXComponent=!0;var S=["components"],O={},A="wrapper";function j(e){var t=e.components,a=(0,l.Z)(e,S);return(0,m.mdx)(A,(0,n.Z)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)(i.C,{mdxType:"Badge"}),(0,m.mdx)("h1",{id:"terra-application-links"},"Terra Application Links"),(0,m.mdx)("p",null,"This packages contains a list and tab form of ApplicationLinks, to be used in horizontal and vertical display styles. Selection is managed by react-router."),(0,m.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Install with ",(0,m.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-links"))))),(0,m.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,m.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,m.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"react"),(0,m.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,m.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,m.mdx)("td",{parentName:"tr",align:null},"^2.8.0")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"react-router-dom"),(0,m.mdx)("td",{parentName:"tr",align:null},"^5.0.0")))),(0,m.mdx)("h2",{id:"component-features"},"Component Features"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)(T,{title:"Tabs Example",mdxType:"ApplicationTabsExample"}),(0,m.mdx)(E,{title:"Tabs With Icons Example",mdxType:"ApplicationTabsWithIconsExample"}),(0,m.mdx)("h2",{id:"application-links-props-table"},"Application Links Props table"),(0,m.mdx)(R,{mdxType:"ApplicationLinksPropTable"}))}j.isMDXComponent=!0},91756:function(e,t,a){a.d(t,{C:function(){return r}});var n=a(67294),l=a(22863),r=function(e){var t=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-links",name:"terra-application-links",version:"6.63.0",url:t})}},57287:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.ApplicationLinksPropType=void 0,Object.defineProperty(t,"ApplicationTabs",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var l=n(a(45697)),r=n(a(67456)),m=l.default.shape({alignment:l.default.oneOf(["start","center","end"]),links:l.default.arrayOf(l.default.shape({id:l.default.string,path:l.default.string.isRequired,text:l.default.string.isRequired,icon:l.default.node}))});t.ApplicationLinksPropType=m;var i={ApplicationTabs:r.default,ApplicationLinksPropType:m};t.default=i},96520:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{path:"/item1",text:"Item 1"},{path:"/item23",text:"Item 23"},{path:"/item45",text:"Item 45"},{path:"/item67",text:"Very very very very long long item 67"},{path:"/item89",text:"Item 89"},{path:"/item0",text:"Item 0"},{path:"/item11",text:"Item 11"},{path:"/item22",text:"Super super super super very very long long item 22"},{path:"/item3",text:"Item 3"},{path:"/item444",text:"Item 444"},{path:"/item55",text:"Item 55"},{path:"/item6666",text:"Item 6666"}];t.default=a},25300:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(65111)),m=n(a(68616)),i=n(a(97865)),d=n(a(78241)),o=n(a(75610)),p=n(a(42153)),u=n(a(8085)),c=[{path:"/item1",text:"Item 1",icon:l.default.createElement(r.default,null)},{path:"/item23",text:"Item 23",icon:l.default.createElement(m.default,null)},{path:"/item45",text:"Item 45",icon:l.default.createElement(i.default,null)},{path:"/item67",text:"Very very very very long long item 67",icon:l.default.createElement(d.default,null)},{path:"/item89",text:"Item 89",icon:l.default.createElement(o.default,null)},{path:"/item0",text:"Item 0",icon:l.default.createElement(p.default,null)},{path:"/item11",text:"Item 11",icon:l.default.createElement(u.default,null)},{path:"/item22",text:"Super super super super very very long long item 22",icon:l.default.createElement(r.default,null)},{path:"/item3",text:"Item 3",icon:l.default.createElement(m.default,null)},{path:"/item444",text:"Item 444",icon:l.default.createElement(i.default,null)},{path:"/item55",text:"Item 55",icon:l.default.createElement(d.default,null)},{path:"/item6666",text:"Item 6666",icon:l.default.createElement(o.default,null)}];t.default=c},59909:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=a(57287),m=n(a(96520)),i=n(a(70195)),d=function(){return l.default.createElement("div",{className:i.default["demo-header"]},l.default.createElement(r.ApplicationTabs,{alignment:"center",links:m.default}))};t.Z=d},10752:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=a(57287),m=n(a(25300)),i=n(a(47166)),d=n(a(70195)),o=i.default.bind(d.default),p=function(){return l.default.createElement("div",{className:o(["demo-header","demo-header-with-icons"])},l.default.createElement(r.ApplicationTabs,{alignment:"center",links:m.default}))};t.Z=p},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},70195:function(e,t,a){a.r(t),t.default={"demo-header":"demoStyles-module__demo-header___4+5kt","demo-header-with-icons":"demoStyles-module__demo-header-with-icons___eyJIU"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m.apply(this,arguments)}var i=function(e){var t=m({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=i;t.default=d}}]);