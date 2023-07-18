"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99732],{49271:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,a&&a.set(e,n);return n}(a(67294)),o=n(a(45697)),d=n(a(47166)),m=a(21538),p=n(a(33864)),u=n(a(23399)),c=a(51051),s=n(a(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var x=d.default.bind(s.default),h={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,o=e.description,d=e.isExpanded,s=(0,i.useState)(d),f=(0,r.default)(s,2),h=f[0],g=f[1],_=(0,i.useState)(!1),b=(0,r.default)(_,2),T=b[0],E=b[1],N=i.default.useContext(m.ThemeContext),w=void 0!==n,C=function(){E(!T),h&&g(!h)},O=function(){g(!h),T&&E(!T)},k=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:x("template",N.className)},i.default.createElement("div",{className:x("header")},l&&i.default.createElement("h2",{className:x("title")},l)),i.default.createElement("div",{className:x("content")},o&&i.default.createElement("div",{className:x("description")},o),t),i.default.createElement("div",{className:x("footer")},a?i.default.createElement("div",{className:x("button-container")},w&&i.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":T}),onClick:C,onKeyDown:function(e){return k(e,C)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(p.default,{className:x("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(u.default,{className:x("chevron")})),i.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:O,onKeyDown:function(e){return k(e,O)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(p.default,{className:x("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(u.default,{className:x("chevron")}))):null,i.default.createElement("div",null,T&&i.default.createElement("div",{className:x("css")},n),h&&i.default.createElement("div",{className:x("code")},a))))};g.propTypes=h,g.defaultProps={isExpanded:!1};var _=g;t.Z=_},96379:function(e,t,a){a.r(t),a.d(t,{default:function(){return P}});var n=a(87462),l=a(44925),r=a(67294),i=a(81254),o=a(91756),d=a(59909),m=["components"],p={};function u(e){var t=e.components,a=(0,l.Z)(e,m);return(0,i.mdx)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ApplicationTabs } from 'terra-application-links';\nimport ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinkConfig';\nimport demoStyles from './demoStyles.module.scss';\n\nconst ApplicationTabsExample = () => (\n  <div className={demoStyles['demo-header']}>\n    <ApplicationTabs alignment=\"center\" links={ApplicationLinkConfig} />\n  </div>\n);\n\nexport default ApplicationTabsExample;\n\n")))}u.isMDXComponent=!0;var c=a(49271),s=["components"],f={};function x(e){var t=e.components,a=(0,l.Z)(e,s);return(0,i.mdx)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .demo-header {\n    background-color: var(--terra-application-links-demo-header-background-color, #1c5f92);\n    height: 49px;\n    position: relative;\n    width: 100%;\n  }\n\n  .demo-header-with-icons {\n    height: 72px;\n  }\n}\n\n")))}x.isMDXComponent=!0;var h=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(c.Z,{title:t||"Application Tabs Example",description:a,example:r.createElement(d.Z,null),exampleCssSrc:r.createElement(x,null),exampleSrc:r.createElement(u,null),isExpanded:n})},v=a(10752),y=["components"],g={};function _(e){var t=e.components,a=(0,l.Z)(e,y);return(0,i.mdx)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ApplicationTabs } from 'terra-application-links';\nimport ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinksWithIconsConfig';\nimport classNames from 'classnames/bind';\nimport styles from './demoStyles.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ApplicationTabsExample = () => (\n  <div className={cx(['demo-header', 'demo-header-with-icons'])}>\n    <ApplicationTabs alignment=\"center\" links={ApplicationLinkConfig} />\n  </div>\n);\n\nexport default ApplicationTabsExample;\n\n")))}_.isMDXComponent=!0;var b=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(c.Z,{title:t||"Application Tabs With Icons Example",description:a,example:r.createElement(v.Z,null),exampleCssSrc:r.createElement(x,null),exampleSrc:r.createElement(_,null),isExpanded:n})},T=a(78530),E=["components"],N={},w="wrapper";function C(e){var t=e.components,a=(0,l.Z)(e,E);return(0,i.mdx)(w,(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(T.ZP,{mdxType:"PropsTable"},(0,i.mdx)(T.X2,{key:"ROW1",mdxType:"Row"},(0,i.mdx)(T.O,{mdxType:"PropNameCell"},"alignment"),(0,i.mdx)(T.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'start'\n  'center'\n  'end'\n],\n"))),(0,i.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"'center'\n"))),(0,i.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Alignment of the navigational tabs. ( e.g start, center, end )"))),(0,i.mdx)(T.X2,{key:"ROW2",mdxType:"Row"},(0,i.mdx)(T.O,{mdxType:"PropNameCell"},"links"),(0,i.mdx)(T.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    id: {\n      type: 'string',\n      description: 'The id to append to the link.',\n    },\n    path: {\n      type: 'string',\n      required: true,\n      description: 'The path to push to the route.',\n    },\n    text: {\n      type: 'string',\n      required: true,\n      description: 'The display text for the link.',\n    },\n    icon: {\n      type: 'custom',\n    },\n  },\n}],\n"))),(0,i.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,i.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Navigational links that will generate tabs that will update the path. These paths are matched with react-router to selection."))),(0,i.mdx)(T.X2,{key:"ROW3",mdxType:"Row"},(0,i.mdx)(T.O,{mdxType:"PropNameCell"},"location"),(0,i.mdx)(T.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,i.mdx)(T.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,i.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"The location as provided by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))),(0,i.mdx)(T.X2,{key:"ROW4",mdxType:"Row"},(0,i.mdx)(T.O,{mdxType:"PropNameCell"},"match"),(0,i.mdx)(T.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,i.mdx)(T.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,i.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"The match as provided by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))),(0,i.mdx)(T.X2,{key:"ROW5",mdxType:"Row"},(0,i.mdx)(T.O,{mdxType:"PropNameCell"},"history"),(0,i.mdx)(T.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,i.mdx)(T.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,i.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"The history as provided by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))),(0,i.mdx)(T.X2,{key:"ROW6",mdxType:"Row"},(0,i.mdx)(T.O,{mdxType:"PropNameCell"},"staticContext"),(0,i.mdx)(T.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,i.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"The staticContext as provided by the ",(0,i.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC. This will only be provided when\nwithin a StaticRouter."))),(0,i.mdx)(T.X2,{key:"ROW7",mdxType:"Row"},(0,i.mdx)(T.O,{mdxType:"PropNameCell"},"hasIcons"),(0,i.mdx)(T.Di,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,i.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(T.Ex,{mdxType:"DescriptionCell"}))))}C.isMDXComponent=!0;var O=["components"],k={},j="wrapper";function P(e){var t=e.components,a=(0,l.Z)(e,O);return(0,i.mdx)(j,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(o.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"terra-application-links"},"Terra Application Links"),(0,i.mdx)("p",null,"This packages contains a list and tab form of ApplicationLinks, to be used in horizontal and vertical display styles. Selection is managed by react-router."),(0,i.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Install with ",(0,i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-links"))))),(0,i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,i.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,i.mdx)("td",{parentName:"tr",align:null},"^2.8.0")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-router-dom"),(0,i.mdx)("td",{parentName:"tr",align:null},"^5.0.0")))),(0,i.mdx)("h2",{id:"component-features"},"Component Features"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)(h,{title:"Tabs Example",mdxType:"ApplicationTabsExample"}),(0,i.mdx)(b,{title:"Tabs With Icons Example",mdxType:"ApplicationTabsWithIconsExample"}),(0,i.mdx)("h2",{id:"application-links-props-table"},"Application Links Props table"),(0,i.mdx)(C,{mdxType:"ApplicationLinksPropTable"}))}P.isMDXComponent=!0},91756:function(e,t,a){a.d(t,{C:function(){return r}});var n=a(67294),l=a(22863),r=function(e){var t=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-links",name:"terra-application-links",version:"6.66.0",url:t})}},57287:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.ApplicationLinksPropType=void 0,Object.defineProperty(t,"ApplicationTabs",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var l=n(a(45697)),r=n(a(67456)),i=l.default.shape({alignment:l.default.oneOf(["start","center","end"]),links:l.default.arrayOf(l.default.shape({id:l.default.string,path:l.default.string.isRequired,text:l.default.string.isRequired,icon:l.default.node}))});t.ApplicationLinksPropType=i;var o={ApplicationTabs:r.default,ApplicationLinksPropType:i};t.default=o},96520:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=[{path:"/item1",text:"Item 1"},{path:"/item23",text:"Item 23"},{path:"/item45",text:"Item 45"},{path:"/item67",text:"Very very very very long long item 67"},{path:"/item89",text:"Item 89"},{path:"/item0",text:"Item 0"},{path:"/item11",text:"Item 11"},{path:"/item22",text:"Super super super super very very long long item 22"},{path:"/item3",text:"Item 3"},{path:"/item444",text:"Item 444"},{path:"/item55",text:"Item 55"},{path:"/item6666",text:"Item 6666"}];t.default=a},25300:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(2396)),i=n(a(94809)),o=n(a(50826)),d=n(a(87491)),m=n(a(56657)),p=n(a(41623)),u=n(a(34540)),c=[{path:"/item1",text:"Item 1",icon:l.default.createElement(r.default,null)},{path:"/item23",text:"Item 23",icon:l.default.createElement(i.default,null)},{path:"/item45",text:"Item 45",icon:l.default.createElement(o.default,null)},{path:"/item67",text:"Very very very very long long item 67",icon:l.default.createElement(d.default,null)},{path:"/item89",text:"Item 89",icon:l.default.createElement(m.default,null)},{path:"/item0",text:"Item 0",icon:l.default.createElement(p.default,null)},{path:"/item11",text:"Item 11",icon:l.default.createElement(u.default,null)},{path:"/item22",text:"Super super super super very very long long item 22",icon:l.default.createElement(r.default,null)},{path:"/item3",text:"Item 3",icon:l.default.createElement(i.default,null)},{path:"/item444",text:"Item 444",icon:l.default.createElement(o.default,null)},{path:"/item55",text:"Item 55",icon:l.default.createElement(d.default,null)},{path:"/item6666",text:"Item 6666",icon:l.default.createElement(m.default,null)}];t.default=c},59909:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=a(57287),i=n(a(96520)),o=n(a(70195)),d=function(){return l.default.createElement("div",{className:o.default["demo-header"]},l.default.createElement(r.ApplicationTabs,{alignment:"center",links:i.default}))};t.Z=d},10752:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=a(57287),i=n(a(25300)),o=n(a(47166)),d=n(a(70195)),m=o.default.bind(d.default),p=function(){return l.default.createElement("div",{className:m(["demo-header","demo-header-with-icons"])},l.default.createElement(r.ApplicationTabs,{alignment:"center",links:i.default}))};t.Z=p},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},70195:function(e,t,a){a.r(t),t.default={"demo-header":"demoStyles-module__demo-header___4+5kt","demo-header-with-icons":"demoStyles-module__demo-header-with-icons___eyJIU"}},56657:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M43.9 40.6c-.5 0-.9.1-1.3.2l-8.5-8.5c1.5-1.9 2.6-4.2 2.8-6.8h2l.3.3c1 1 2.6 1 3.7 0s1-2.6 0-3.7-2.6-1-3.7 0l-.3.3h-2c-.3-2.6-1.3-4.8-2.8-6.8l2.3-2.3c.6.3 1.3.5 2 .5 2.6 0 4.6-2.1 4.6-4.6s-2.1-4.6-4.6-4.6c-2.6 0-4.6 2.1-4.6 4.6 0 .7.2 1.4.5 2L32 13.4c-1.9-1.5-4.2-2.6-6.8-2.8V4.7l.3-.3c1-1 1-2.6 0-3.7s-2.6-1-3.7 0-1 2.6 0 3.7l.3.3v5.9c-2.6.3-4.8 1.3-6.8 2.8L7.2 5.2c.2-.4.2-.8.2-1.3 0-2-1.6-3.7-3.7-3.7S.1 2 .1 4s1.6 3.7 3.7 3.7c.5 0 .9-.1 1.3-.2l8.5 8.5c-1.5 1.9-2.6 4.2-2.8 6.8H9c-.6-1.8-2.3-3.2-4.3-3.2C2.2 19.4.2 21.5.2 24s2.1 4.6 4.6 4.6c2 0 3.8-1.3 4.3-3.2h1.6c.3 2.6 1.3 4.8 2.8 6.8l-5 5h-.4c-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6v-.4l5-5c1.9 1.5 4.2 2.6 6.8 2.8v1.6c-1.8.6-3.2 2.3-3.2 4.3 0 2.6 2.1 4.6 4.6 4.6s4.6-2.1 4.6-4.6c0-2-1.3-3.8-3.2-4.3v-1.6c2.6-.3 4.8-1.3 6.8-2.8l8.5 8.5c-.2.4-.2.8-.2 1.3 0 2 1.6 3.7 3.7 3.7s3.7-1.6 3.7-3.7c.1-1.9-1.8-3.6-3.9-3.6z"}))};o.displayName="IconAllergy",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var d=o;t.default=d},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=o;t.default=d},34540:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M.7 20.1a2.47 2.47 0 01-.7-1.5c0-.7.5-1.2 1.6-1.4L16.1 15l6.5-13.8C22.9.4 23.4 0 24 0s1 .4 1.4 1.2L31.9 15l14.5 2.2c1.1.2 1.6.6 1.6 1.4a2.75 2.75 0 01-.8 1.5L36.8 30.8l2.5 15.1v.6a2 2 0 01-.3 1.1 1 1 0 01-.9.4 1.92 1.92 0 01-1.2-.4l-13-7.1-13 7.1a2.84 2.84 0 01-1.2.4 1 1 0 01-.9-.4 2 2 0 01-.3-1.1 1.76 1.76 0 01.1-.6l2.5-15.1z"}))};o.displayName="IconFeatured",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=o;t.default=d},94809:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M45.8 12c1.2 0 2.2 1 2.2 2.2v26.7c0 1.2-1 2.2-2.2 2.2H2.2C1 43 0 42 0 40.8V7.2C0 6 1 5 2.2 5H15c1.4.1 2.7.6 3.7 1.6l3.8 3.9c1 1 2.3 1.5 3.7 1.6l19.4-.1h.2z"}))};o.displayName="IconFolder",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var d=o;t.default=d},41623:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M38.8 20H35v-9a11 11 0 00-22 0v9H9.2A2.22 2.22 0 007 22.2v23.7A2.2 2.2 0 009.2 48h29.7a2.22 2.22 0 002.2-2.2V22.2a2.38 2.38 0 00-2.3-2.2zM26 33.5V40h-4v-6.5a3.26 3.26 0 01-1-2.3 3 3 0 013-3 3.08 3.08 0 013 3 3.26 3.26 0 01-1 2.3zm6-14.9V20H16v-9a8 8 0 0116 0z"}))};o.displayName="IconPadlock",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=o;t.default=d},87491:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};o.displayName="IconPrinter",o.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};var d=o;t.default=d},2396:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M42.1 4H28V2a2 2 0 00-2-2h-4a2 2 0 00-2 2v2H5.9L5 11h38zM38 14H8.1l3.7 32a2.26 2.26 0 002.2 2h20a2.26 2.26 0 002.2-2l3.7-32z"}))};o.displayName="IconTrash",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=o;t.default=d}}]);