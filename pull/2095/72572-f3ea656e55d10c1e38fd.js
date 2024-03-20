"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72572],{201:function(e,t,a){var n=a(24994),l=a(73738);t.A=void 0;var r=n(a(85715)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=r?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(n,d,o):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(96540)),o=n(a(5556)),i=n(a(67967)),m=a(92912),p=n(a(49558)),u=n(a(53665)),c=a(25966),s=n(a(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var x=i.default.bind(s.default),h={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,o=e.description,i=e.isExpanded,s=(0,d.useState)(i),f=(0,r.default)(s,2),h=f[0],g=f[1],_=(0,d.useState)(!1),b=(0,r.default)(_,2),T=b[0],N=b[1],E=d.default.useContext(m.ThemeContext),w=void 0!==n,C=function(){N(!T),h&&g(!h)},k=function(){g(!h),T&&N(!T)},O=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:x("template",E.className)},d.default.createElement("div",{className:x("header")},l&&d.default.createElement("h2",{className:x("title")},l)),d.default.createElement("div",{className:x("content")},o&&d.default.createElement("div",{className:x("description")},o),t),d.default.createElement("div",{className:x("footer")},a?d.default.createElement("div",{className:x("button-container")},w&&d.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":T}),onClick:C,onKeyDown:function(e){return O(e,C)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:x("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(u.default,{className:x("chevron")})),d.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:k,onKeyDown:function(e){return O(e,k)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:x("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(u.default,{className:x("chevron")}))):null,d.default.createElement("div",null,T&&d.default.createElement("div",{className:x("css")},n),h&&d.default.createElement("div",{className:x("code")},a))))};g.propTypes=h,g.defaultProps={isExpanded:!1};t.A=g},57412:function(e,t,a){a.r(t),a.d(t,{default:function(){return j}});var n=a(58168),l=a(53986),r=a(96540),d=a(36665),o=a(42300),i=a(41579),m=["components"],p={};function u(e){var t=e.components,a=(0,l.A)(e,m);return(0,d.mdx)("wrapper",(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ApplicationTabs } from 'terra-application-links';\nimport ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinkConfig';\nimport demoStyles from './demoStyles.module.scss';\n\nconst ApplicationTabsExample = () => (\n  <div className={demoStyles['demo-header']}>\n    <ApplicationTabs alignment=\"center\" links={ApplicationLinkConfig} />\n  </div>\n);\n\nexport default ApplicationTabsExample;\n\n")))}u.isMDXComponent=!0;var c=a(201),s=["components"],f={};function x(e){var t=e.components,a=(0,l.A)(e,s);return(0,d.mdx)("wrapper",(0,n.A)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .demo-header {\n    background-color: var(--terra-application-links-demo-header-background-color, #1c5f92);\n    height: 49px;\n    position: relative;\n    width: 100%;\n  }\n\n  .demo-header-with-icons {\n    height: 72px;\n  }\n}\n\n")))}x.isMDXComponent=!0;var h=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(c.A,{title:t||"Application Tabs Example",description:a,example:r.createElement(i.A,null),exampleCssSrc:r.createElement(x,null),exampleSrc:r.createElement(u,null),isExpanded:n})},v=a(40065),y=["components"],g={};function _(e){var t=e.components,a=(0,l.A)(e,y);return(0,d.mdx)("wrapper",(0,n.A)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ApplicationTabs } from 'terra-application-links';\nimport ApplicationLinkConfig from 'terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinksWithIconsConfig';\nimport classNames from 'classnames/bind';\nimport styles from './demoStyles.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ApplicationTabsExample = () => (\n  <div className={cx(['demo-header', 'demo-header-with-icons'])}>\n    <ApplicationTabs alignment=\"center\" links={ApplicationLinkConfig} />\n  </div>\n);\n\nexport default ApplicationTabsExample;\n\n")))}_.isMDXComponent=!0;var b=function(e){var t=e.title,a=e.description,n=e.isExpanded;return r.createElement(c.A,{title:t||"Application Tabs With Icons Example",description:a,example:r.createElement(v.A,null),exampleCssSrc:r.createElement(x,null),exampleSrc:r.createElement(_,null),isExpanded:n})},T=a(12883),N=["components"],E={},w="wrapper";function C(e){var t=e.components,a=(0,l.A)(e,N);return(0,d.mdx)(w,(0,n.A)({},E,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(T.Ay,{mdxType:"PropsTable"},(0,d.mdx)(T.fI,{key:"ROW1",mdxType:"Row"},(0,d.mdx)(T.dt,{mdxType:"PropNameCell"},"alignment"),(0,d.mdx)(T.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'start'\n  'center'\n  'end'\n],\n"))),(0,d.mdx)(T.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(T.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"'center'\n"))),(0,d.mdx)(T.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Alignment of the navigational tabs. ( e.g start, center, end )"))),(0,d.mdx)(T.fI,{key:"ROW2",mdxType:"Row"},(0,d.mdx)(T.dt,{mdxType:"PropNameCell"},"links"),(0,d.mdx)(T.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    id: {\n      type: 'string',\n      description: 'The id to append to the link.',\n    },\n    path: {\n      type: 'string',\n      required: true,\n      description: 'The path to push to the route.',\n    },\n    text: {\n      type: 'string',\n      required: true,\n      description: 'The display text for the link.',\n    },\n    icon: {\n      type: 'custom',\n    },\n  },\n}],\n"))),(0,d.mdx)(T.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(T.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,d.mdx)(T.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Navigational links that will generate tabs that will update the path. These paths are matched with react-router to selection."))),(0,d.mdx)(T.fI,{key:"ROW3",mdxType:"Row"},(0,d.mdx)(T.dt,{mdxType:"PropNameCell"},"location"),(0,d.mdx)(T.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(T.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(T.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(T.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The location as provided by the ",(0,d.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))),(0,d.mdx)(T.fI,{key:"ROW4",mdxType:"Row"},(0,d.mdx)(T.dt,{mdxType:"PropNameCell"},"match"),(0,d.mdx)(T.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(T.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(T.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(T.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The match as provided by the ",(0,d.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))),(0,d.mdx)(T.fI,{key:"ROW5",mdxType:"Row"},(0,d.mdx)(T.dt,{mdxType:"PropNameCell"},"history"),(0,d.mdx)(T.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(T.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(T.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(T.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The history as provided by the ",(0,d.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC."))),(0,d.mdx)(T.fI,{key:"ROW6",mdxType:"Row"},(0,d.mdx)(T.dt,{mdxType:"PropNameCell"},"staticContext"),(0,d.mdx)(T.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,d.mdx)(T.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(T.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(T.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The staticContext as provided by the ",(0,d.mdx)("inlineCode",{parentName:"p"},"withRouter()")," HOC. This will only be provided when\nwithin a StaticRouter."))),(0,d.mdx)(T.fI,{key:"ROW7",mdxType:"Row"},(0,d.mdx)(T.dt,{mdxType:"PropNameCell"},"hasIcons"),(0,d.mdx)(T.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(T.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(T.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(T.Hd,{mdxType:"DescriptionCell"}))))}C.isMDXComponent=!0;var k=["components"],O={},A="wrapper";function j(e){var t=e.components,a=(0,l.A)(e,k);return(0,d.mdx)(A,(0,n.A)({},O,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(o.E,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"terra-application-links"},"Terra Application Links"),(0,d.mdx)("p",null,"This packages contains a list and tab form of ApplicationLinks, to be used in horizontal and vertical display styles. Selection is managed by react-router."),(0,d.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Install with ",(0,d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-links"))))),(0,d.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,d.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,d.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,d.mdx)("td",{parentName:"tr",align:null},"^2.8.0")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-router-dom"),(0,d.mdx)("td",{parentName:"tr",align:null},"^5.0.0")))),(0,d.mdx)("h2",{id:"component-features"},"Component Features"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,d.mdx)("h2",{id:"examples"},"Examples"),(0,d.mdx)(h,{title:"Tabs Example",mdxType:"ApplicationTabsExample"}),(0,d.mdx)(b,{title:"Tabs With Icons Example",mdxType:"ApplicationTabsWithIconsExample"}),(0,d.mdx)("h2",{id:"application-links-props-table"},"Application Links Props table"),(0,d.mdx)(C,{mdxType:"ApplicationLinksPropTable"}))}j.isMDXComponent=!0},42300:function(e,t,a){a.d(t,{E:function(){return r}});var n=a(96540),l=a(55713),r=function(e){var t=e.url;return n.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-links",name:"terra-application-links",version:"6.78.0",url:t})}},64699:function(e,t,a){var n=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.ApplicationLinksPropType=void 0,Object.defineProperty(t,"ApplicationTabs",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var l=n(a(5556)),r=n(a(62177)),d=t.ApplicationLinksPropType=l.default.shape({alignment:l.default.oneOf(["start","center","end"]),links:l.default.arrayOf(l.default.shape({id:l.default.string,path:l.default.string.isRequired,text:l.default.string.isRequired,icon:l.default.node}))}),o={ApplicationTabs:r.default,ApplicationLinksPropType:d};t.default=o},1046:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{path:"/item1",text:"Item 1"},{path:"/item23",text:"Item 23"},{path:"/item45",text:"Item 45"},{path:"/item67",text:"Very very very very long long item 67"},{path:"/item89",text:"Item 89"},{path:"/item0",text:"Item 0"},{path:"/item11",text:"Item 11"},{path:"/item22",text:"Super super super super very very long long item 22"},{path:"/item3",text:"Item 3"},{path:"/item444",text:"Item 444"},{path:"/item55",text:"Item 55"},{path:"/item6666",text:"Item 6666"}]},88499:function(e,t,a){var n=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(96540)),r=n(a(31042)),d=n(a(47194)),o=n(a(98814)),i=n(a(38008)),m=n(a(15800)),p=n(a(99906)),u=n(a(69484)),c=[{path:"/item1",text:"Item 1",icon:l.default.createElement(r.default,null)},{path:"/item23",text:"Item 23",icon:l.default.createElement(d.default,null)},{path:"/item45",text:"Item 45",icon:l.default.createElement(o.default,null)},{path:"/item67",text:"Very very very very long long item 67",icon:l.default.createElement(i.default,null)},{path:"/item89",text:"Item 89",icon:l.default.createElement(m.default,null)},{path:"/item0",text:"Item 0",icon:l.default.createElement(p.default,null)},{path:"/item11",text:"Item 11",icon:l.default.createElement(u.default,null)},{path:"/item22",text:"Super super super super very very long long item 22",icon:l.default.createElement(r.default,null)},{path:"/item3",text:"Item 3",icon:l.default.createElement(d.default,null)},{path:"/item444",text:"Item 444",icon:l.default.createElement(o.default,null)},{path:"/item55",text:"Item 55",icon:l.default.createElement(i.default,null)},{path:"/item6666",text:"Item 6666",icon:l.default.createElement(m.default,null)}];t.default=c},41579:function(e,t,a){var n=a(24994);t.A=void 0;var l=n(a(96540)),r=a(64699),d=n(a(1046)),o=n(a(7423));t.A=function(){return l.default.createElement("div",{className:o.default["demo-header"]},l.default.createElement(r.ApplicationTabs,{alignment:"center",links:d.default}))}},40065:function(e,t,a){var n=a(24994);t.A=void 0;var l=n(a(96540)),r=a(64699),d=n(a(88499)),o=n(a(67967)),i=n(a(7423)),m=o.default.bind(i.default);t.A=function(){return l.default.createElement("div",{className:m(["demo-header","demo-header-with-icons"])},l.default.createElement(r.ApplicationTabs,{alignment:"center",links:d.default}))}},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},7423:function(e,t,a){a.r(t),t.default={"demo-header":"demoStyles-module__demo-header___4+5kt","demo-header-with-icons":"demoStyles-module__demo-header-with-icons___eyJIU"}},15800:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M43.9 40.6c-.5 0-.9.1-1.3.2l-8.5-8.5c1.5-1.9 2.6-4.2 2.8-6.8h2l.3.3c1 1 2.6 1 3.7 0s1-2.6 0-3.7-2.6-1-3.7 0l-.3.3h-2c-.3-2.6-1.3-4.8-2.8-6.8l2.3-2.3c.6.3 1.3.5 2 .5 2.6 0 4.6-2.1 4.6-4.6s-2.1-4.6-4.6-4.6c-2.6 0-4.6 2.1-4.6 4.6 0 .7.2 1.4.5 2L32 13.4c-1.9-1.5-4.2-2.6-6.8-2.8V4.7l.3-.3c1-1 1-2.6 0-3.7s-2.6-1-3.7 0-1 2.6 0 3.7l.3.3v5.9c-2.6.3-4.8 1.3-6.8 2.8L7.2 5.2c.2-.4.2-.8.2-1.3 0-2-1.6-3.7-3.7-3.7S.1 2 .1 4s1.6 3.7 3.7 3.7c.5 0 .9-.1 1.3-.2l8.5 8.5c-1.5 1.9-2.6 4.2-2.8 6.8H9c-.6-1.8-2.3-3.2-4.3-3.2C2.2 19.4.2 21.5.2 24s2.1 4.6 4.6 4.6c2 0 3.8-1.3 4.3-3.2h1.6c.3 2.6 1.3 4.8 2.8 6.8l-5 5h-.4c-1.4 0-2.6 1.2-2.6 2.6 0 1.4 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6v-.4l5-5c1.9 1.5 4.2 2.6 6.8 2.8v1.6c-1.8.6-3.2 2.3-3.2 4.3 0 2.6 2.1 4.6 4.6 4.6s4.6-2.1 4.6-4.6c0-2-1.3-3.8-3.2-4.3v-1.6c2.6-.3 4.8-1.3 6.8-2.8l8.5 8.5c-.2.4-.2.8-.2 1.3 0 2 1.6 3.7 3.7 3.7s3.7-1.6 3.7-3.7c.1-1.9-1.8-3.6-3.9-3.6z"}))};o.displayName="IconAllergy",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},49558:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},69484:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M.7 20.1a2.47 2.47 0 0 1-.7-1.5c0-.7.5-1.2 1.6-1.4L16.1 15l6.5-13.8C22.9.4 23.4 0 24 0s1 .4 1.4 1.2L31.9 15l14.5 2.2c1.1.2 1.6.6 1.6 1.4a2.75 2.75 0 0 1-.8 1.5L36.8 30.8l2.5 15.1v.6a2 2 0 0 1-.3 1.1 1 1 0 0 1-.9.4 1.92 1.92 0 0 1-1.2-.4l-13-7.1-13 7.1a2.84 2.84 0 0 1-1.2.4 1 1 0 0 1-.9-.4 2 2 0 0 1-.3-1.1 1.76 1.76 0 0 1 .1-.6l2.5-15.1z"}))};o.displayName="IconFeatured",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},47194:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M45.8 12c1.2 0 2.2 1 2.2 2.2v26.7c0 1.2-1 2.2-2.2 2.2H2.2C1 43 0 42 0 40.8V7.2C0 6 1 5 2.2 5H15c1.4.1 2.7.6 3.7 1.6l3.8 3.9c1 1 2.3 1.5 3.7 1.6l19.4-.1h.2z"}))};o.displayName="IconFolder",o.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},99906:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M38.8 20H35v-9a11 11 0 0 0-22 0v9H9.2A2.22 2.22 0 0 0 7 22.2v23.7A2.2 2.2 0 0 0 9.2 48h29.7a2.22 2.22 0 0 0 2.2-2.2V22.2a2.38 2.38 0 0 0-2.3-2.2zM26 33.5V40h-4v-6.5a3.26 3.26 0 0 1-1-2.3 3 3 0 0 1 3-3 3.08 3.08 0 0 1 3 3 3.26 3.26 0 0 1-1 2.3zm6-14.9V20H16v-9a8 8 0 0 1 16 0z"}))};o.displayName="IconPadlock",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},38008:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M39.8 12H35V1.7c0-.9-.8-1.7-1.7-1.7H8.7C7.8 0 7 .8 7 1.7V12H2.2C1 12 0 13 0 14.2v19.7C.1 35.1 1 36 2.2 36H7v10.3c0 .9.8 1.7 1.7 1.7h24.6c.9 0 1.7-.8 1.7-1.7V36h4.8c1.2 0 2.2-1 2.2-2.2V14.2c0-1.2-1-2.2-2.2-2.2zM10 3h22v9H10V3zm22 42H10V29.9h22V45zm3.2-24C34 21 33 20 33 18.8s1-2.2 2.2-2.2 2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"}))};o.displayName="IconPrinter",o.defaultProps={viewBox:"0 0 42 48",xmlns:"http://www.w3.org/2000/svg"};t.default=o},31042:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(96540)),l=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M42.1 4H28V2a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H5.9L5 11h38zM38 14H8.1l3.7 32a2.26 2.26 0 0 0 2.2 2h20a2.26 2.26 0 0 0 2.2-2l3.7-32z"}))};o.displayName="IconTrash",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o}}]);