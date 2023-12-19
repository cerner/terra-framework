"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[62347],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),o=n(a(45697)),r=n(a(47166)),d=n(a(17422)),i=r.default.bind(d.default),m={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var t=e.src,a=e.name,n=e.url,o=e.version,r=l.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},l.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(o))),d=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},r,d)};u.propTypes=m;var c=u;t.Z=c},49271:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var o=n(a(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var d=o?Object.getOwnPropertyDescriptor(e,r):null;d&&(d.get||d.set)?Object.defineProperty(n,r,d):n[r]=e[r]}n.default=e,a&&a.set(e,n);return n}(a(67294)),d=n(a(45697)),i=n(a(47166)),m=a(21538),u=n(a(33864)),c=n(a(23399)),s=a(51051),p=n(a(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var _=i.default.bind(p.default),x={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,d=e.description,i=e.isExpanded,p=(0,r.useState)(i),f=(0,o.default)(p,2),x=f[0],g=f[1],N=(0,r.useState)(!1),v=(0,o.default)(N,2),b=v[0],E=v[1],w=r.default.useContext(m.ThemeContext),T=void 0!==n,A=function(){E(!b),x&&g(!x)},C=function(){g(!x),b&&E(!b)},M=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:_("template",w.className)},r.default.createElement("div",{className:_("header")},l&&r.default.createElement("h2",{className:_("title")},l)),r.default.createElement("div",{className:_("content")},d&&r.default.createElement("div",{className:_("description")},d),t),r.default.createElement("div",{className:_("footer")},a?r.default.createElement("div",{className:_("button-container")},T&&r.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":b}),onClick:A,onKeyDown:function(e){return M(e,A)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:_("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(c.default,{className:_("chevron")})),r.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":x}),onClick:C,onKeyDown:function(e){return M(e,C)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:_("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(c.default,{className:_("chevron")}))):null,r.default.createElement("div",null,b&&r.default.createElement("div",{className:_("css")},n),x&&r.default.createElement("div",{className:_("code")},a))))};g.propTypes=x,g.defaultProps={isExpanded:!1};var N=g;t.Z=N},18945:function(e,t,a){a.r(t),a.d(t,{default:function(){return H}});var n=a(87462),l=a(44925),o=a(67294),r=a(81254),d=a(91802),i=a(78530),m=["components"],u={},c="wrapper";function s(e){var t=e.components,a=(0,l.Z)(e,m);return(0,r.mdx)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.ZP,{mdxType:"PropsTable"},(0,r.mdx)(i.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"accessory"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The accessory element to be displayed next to the title."))),(0,r.mdx)(i.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"title"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The title branding of the application name.")))))}s.isMDXComponent=!0;var p=a(54810),f=["components"],_={},x="wrapper";function h(e){var t=e.components,a=(0,l.Z)(e,f);return(0,r.mdx)(x,(0,n.Z)({},_,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ApplicationHeaderLayout from 'terra-application-header-layout';\nimport Image from 'terra-image';\nimport classNames from 'classnames';\nimport ThemeContext from 'terra-theme-context';\nimport classNamesBind from 'classnames/bind';\nimport Placeholder from 'terra-application-name/lib/terra-dev-site/doc/common/Placeholder';\nimport { ApplicationHeaderName } from 'terra-application-name';\nimport demoColors from '../../test/application-name/demoStyles.module.scss';\nimport styles from './ApplicationHeaderNameStandard.module.scss';\n\nconst cx = classNamesBind.bind(demoColors);\nconst cy = classNamesBind.bind(styles);\nconst ApplicationHeaderNameStandard = () => {\n  const theme = React.useContext(ThemeContext);\n  const demoClassName = classNames(cx(\n    'demo-background-color',\n    theme.className,\n  ));\n  return (\n    <ApplicationHeaderLayout\n      className={cy('demo-size')}\n      logo={(\n        <ApplicationHeaderName\n          title=\"App-Name\"\n          accessory={<Image alt=\"Terra Logo\" variant=\"rounded\" src=\"https://github.com/cerner/terra-framework/raw/main/terra.png\" className={cx('demo-image-container')} isFluid />}\n          className={demoClassName}\n        />\n      )}\n      extensions={<Placeholder text=\"Extensions\" type=\"header-extensions\" />}\n      navigation={<Placeholder text=\"Content\" type=\"default\" />}\n      utilities={<Placeholder text=\"Utiltities\" type=\"utiltities\" />}\n    />\n  );\n};\n\nexport default ApplicationHeaderNameStandard;\n\n")))}h.isMDXComponent=!0;var y=a(49271),g=["components"],N={},v="wrapper";function b(e){var t=e.components,a=(0,l.Z)(e,g);return(0,r.mdx)(v,(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '../../../clinical-lowlight-theme/demoStyles.module';\n@import '../../../orion-fusion-theme/demoStyles.module';\n\n:local {\n  .demo-background-color {\n    background-color: var(--terra-application-name-demo-background-color, #008000);\n  }\n\n  .demo-truncate-width {\n    width: 150px;\n  }\n\n  .demo-image-container {\n    height: 26px;\n    width: 26px;\n  }\n\n  .content-wrapper {\n    width: 100%;\n  }\n}\n\n")))}b.isMDXComponent=!0;var E=function(e){var t=e.title,a=e.description,n=e.isExpanded;return o.createElement(y.Z,{title:t||"Application Header Name Standard",description:a,example:o.createElement(p.Z,null),exampleCssSrc:o.createElement(b,null),exampleSrc:o.createElement(h,null),isExpanded:n})},w=a(67481),T=["components"],A={},C="wrapper";function M(e){var t=e.components,a=(0,l.Z)(e,T);return(0,r.mdx)(C,(0,n.Z)({},A,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Menu from 'terra-application-menu-layout';\nimport Image from 'terra-image';\nimport classNames from 'classnames';\nimport ThemeContext from 'terra-theme-context';\nimport classNamesBind from 'classnames/bind';\nimport Placeholder from 'terra-application-name/lib/terra-dev-site/doc/common/Placeholder';\nimport { ApplicationMenuName } from 'terra-application-name';\nimport demoColors from '../../test/application-name/demoStyles.module.scss';\nimport styles from './ApplicationMenuNameStandard.module.scss';\n\nconst cx = classNamesBind.bind(demoColors);\nconst cy = classNamesBind.bind(styles);\nconst ApplicationMenuNameStandard = () => {\n  const theme = React.useContext(ThemeContext);\n  const demoClassName = classNames(cx(\n    'demo-background-color',\n    theme.className,\n  ));\n\n  return (\n    <Menu\n      className={cy('demo-size')}\n      header={(\n        <ApplicationMenuName\n          title=\"App-Name\"\n          accessory={<Image alt=\"Terra Logo\" variant=\"rounded\" src=\"https://github.com/cerner/terra-framework/raw/main/terra.png\" className={cx('demo-image-container')} isFluid />}\n          className={demoClassName}\n        />\n      )}\n      extensions={<Placeholder text=\"Extensions\" type=\"menu-extensions\" />}\n      content={<Placeholder text=\"Content\" type=\"default\" />}\n      footer={<Placeholder text=\"Footer\" type=\"footer\" />}\n    />\n  );\n};\n\nexport default ApplicationMenuNameStandard;\n\n")))}M.isMDXComponent=!0;var P=function(e){var t=e.title,a=e.description,n=e.isExpanded;return o.createElement(y.Z,{title:t||"Application Menu Name Standard",description:a,example:o.createElement(w.Z,null),exampleCssSrc:o.createElement(b,null),exampleSrc:o.createElement(M,null),isExpanded:n})},S=["components"],k={},L="wrapper";function H(e){var t=e.components,a=(0,l.Z)(e,S);return(0,r.mdx)(L,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(d.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-application-name"},"Terra Application Name"),(0,r.mdx)("p",null,"Houses the title of the application, along with a logo. There are two versions - a header version and menu version. These should be used with the corresponding header and menu layouts."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-name"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(E,{title:"Application Header Name",mdxType:"ApplicationHeaderNameStandard"}),(0,r.mdx)(P,{title:"Application Menu Name",mdxType:"ApplicationMenuNameStandard"}),(0,r.mdx)("h2",{id:"application-name-props-table"},"Application name props table"),(0,r.mdx)(s,{mdxType:"ApplicationNamePropsTable"}))}H.isMDXComponent=!0},91802:function(e,t,a){a.d(t,{C:function(){return o}});var n=a(67294),l=a(22863),o=function(e){var t=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-name",name:"terra-application-name",version:"3.44.0",url:t})}},42947:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(10434)),o=n(a(70215)),r=n(a(67294)),d=n(a(45697)),i=n(a(94184)),m=n(a(47166)),u=n(a(47341)),c=a(25387),s=n(a(56583)),p=["extensions","logo","navigation","intl","toggle","utilities"],f=m.default.bind(s.default),_={extensions:d.default.element,logo:d.default.element,intl:d.default.shape({formatMessage:d.default.func}).isRequired,navigation:d.default.element,toggle:d.default.element,utilities:d.default.element},x=function(e){var t,a,n,d,m,c=e.extensions,s=e.logo,_=e.navigation,x=e.intl,h=e.toggle,y=e.utilities,g=(0,o.default)(e,p),N=r.default.useContext(u.default),v=(0,i.default)(f("header","fill",N.className),g.className);s&&(t=r.default.createElement("div",{className:f("fit","start","logo")},s)),_&&(a=r.default.createElement("nav",{role:"navigation",className:f("fill")},_)),c&&(n=r.default.createElement("div",{className:f("fit","end","extensions")},c)),y&&(d=r.default.createElement("div",{className:f("fit","end","utilities")},y)),h&&(m=r.default.createElement("div",{className:f("fit")},h));var b,E=r.default.createElement("div",{className:f("fill","header-inner")},a,n),w=r.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:f("skip-content")},x.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(E||t||d)&&(b=r.default.createElement("div",{className:f("fill","header-body")},t,E,d)),r.default.createElement("div",(0,l.default)({},g,{className:v}),w,m,b)};x.propTypes=_;t.default=(0,c.injectIntl)(x)},39058:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(10434)),o=n(a(70215)),r=n(a(67294)),d=n(a(45697)),i=n(a(47166)),m=n(a(84376)),u=["content","extensions","footer","header"],c=i.default.bind(m.default),s={content:d.default.element,extensions:d.default.element,footer:d.default.element,header:d.default.element},p=function(e){var t,a,n,d,i=e.content,m=e.extensions,s=e.footer,p=e.header,f=(0,o.default)(e,u),_=c(["menu","fill",f.className]);return p&&(t=r.default.createElement("div",{className:c(["fit","header"])},p)),i&&(a=r.default.createElement("div",{className:c(["fill","content"])},r.default.createElement("div",{className:c("normalizer")},i))),m&&(n=r.default.createElement("div",{className:c(["fit","widget"])},m)),s&&(d=r.default.createElement("div",{className:c(["fit","footer"])},s)),r.default.createElement("div",(0,l.default)({},f,{className:_}),t,r.default.createElement("div",{className:c(["fill","body"])},n,a),d)};p.propTypes=s;t.default=p},57920:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(10434)),o=n(a(70215)),r=n(a(67294)),d=n(a(45697)),i=n(a(94184)),m=n(a(47166)),u=n(a(47341)),c=n(a(54029)),s=["accessory","title"],p=m.default.bind(c.default),f={accessory:d.default.element,title:d.default.node},_=function(e){var t=e.accessory,a=e.title,n=(0,o.default)(e,s),d=r.default.useContext(u.default),m=(0,i.default)(p("application-header-name",d.className),n.className);return r.default.createElement("div",(0,l.default)({},n,{className:m}),t&&r.default.createElement("div",{className:p("accessory")},t),a&&r.default.createElement("div",{className:p("title")},a))};_.propTypes=f;t.default=_},13917:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(10434)),o=n(a(70215)),r=n(a(67294)),d=n(a(45697)),i=n(a(94184)),m=n(a(47166)),u=n(a(47341)),c=n(a(85808)),s=["accessory","title"],p=m.default.bind(c.default),f={accessory:d.default.element,title:d.default.node},_=function(e){var t=e.accessory,a=e.title,n=(0,o.default)(e,s),d=r.default.useContext(u.default),m=(0,i.default)(p("application-menu-name",d.className),n.className);return r.default.createElement("div",(0,l.default)({},n,{className:m}),t&&r.default.createElement("div",{className:p("accessory")},t),a&&r.default.createElement("div",{className:p("title")},a))};_.propTypes=f;t.default=_},73965:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationHeaderName",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"ApplicationMenuName",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var l=n(a(57920)),o=n(a(13917)),r={ApplicationHeaderName:l.default,ApplicationMenuName:o.default};t.default=r},35129:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),o=n(a(47166)),r=n(a(45697)),d=n(a(37715)),i=o.default.bind(d.default),m={text:r.default.string,type:r.default.string},u=function(e){var t=e.text,a=e.type;return l.default.createElement("div",{className:i("wrapper1-".concat(a))},l.default.createElement("div",{className:i("wrapper2")},l.default.createElement("div",{className:i("wrapper3")},l.default.createElement("h3",null,t))))};u.propTypes=m,u.defaultProps={text:"PlaceHolder",type:""};t.default=u},54810:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),o=n(a(42947)),r=n(a(86442)),d=n(a(94184)),i=n(a(47341)),m=n(a(47166)),u=n(a(35129)),c=a(73965),s=n(a(9620)),p=n(a(69400)),f=m.default.bind(s.default),_=m.default.bind(p.default);t.Z=function(){var e=l.default.useContext(i.default),t=(0,d.default)(f("demo-background-color",e.className));return l.default.createElement(o.default,{className:_("demo-size"),logo:l.default.createElement(c.ApplicationHeaderName,{title:"App-Name",accessory:l.default.createElement(r.default,{alt:"Terra Logo",variant:"rounded",src:"https://github.com/cerner/terra-framework/raw/main/terra.png",className:f("demo-image-container"),isFluid:!0}),className:t}),extensions:l.default.createElement(u.default,{text:"Extensions",type:"header-extensions"}),navigation:l.default.createElement(u.default,{text:"Content",type:"default"}),utilities:l.default.createElement(u.default,{text:"Utiltities",type:"utiltities"})})}},67481:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),o=n(a(39058)),r=n(a(86442)),d=n(a(94184)),i=n(a(47341)),m=n(a(47166)),u=n(a(35129)),c=a(73965),s=n(a(9620)),p=n(a(84769)),f=m.default.bind(s.default),_=m.default.bind(p.default);t.Z=function(){var e=l.default.useContext(i.default),t=(0,d.default)(f("demo-background-color",e.className));return l.default.createElement(o.default,{className:_("demo-size"),header:l.default.createElement(c.ApplicationMenuName,{title:"App-Name",accessory:l.default.createElement(r.default,{alt:"Terra Logo",variant:"rounded",src:"https://github.com/cerner/terra-framework/raw/main/terra.png",className:f("demo-image-container"),isFluid:!0}),className:t}),extensions:l.default.createElement(u.default,{text:"Extensions",type:"menu-extensions"}),content:l.default.createElement(u.default,{text:"Content",type:"default"}),footer:l.default.createElement(u.default,{text:"Footer",type:"footer"})})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},56583:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderLayout-module__clinical-lowlight-theme___-1bgb","orion-fusion-theme":"ApplicationHeaderLayout-module__orion-fusion-theme___ENqi+",fit:"ApplicationHeaderLayout-module__fit___KL7Uq",fill:"ApplicationHeaderLayout-module__fill___PAPf7",start:"ApplicationHeaderLayout-module__start___MX918",end:"ApplicationHeaderLayout-module__end___BgrVv","header-inner":"ApplicationHeaderLayout-module__header-inner___hLyff",logo:"ApplicationHeaderLayout-module__logo___Wzf7u",utilities:"ApplicationHeaderLayout-module__utilities___bkZso",extensions:"ApplicationHeaderLayout-module__extensions___85n-7","header-body":"ApplicationHeaderLayout-module__header-body___HLbvX","skip-content":"ApplicationHeaderLayout-module__skip-content___8eF4z"}},84376:function(e,t,a){a.r(t),t.default={fit:"ApplicationMenuLayout-module__fit___fJ-8H",fill:"ApplicationMenuLayout-module__fill___NpC9g",menu:"ApplicationMenuLayout-module__menu___+THcL",header:"ApplicationMenuLayout-module__header___kdgcp",footer:"ApplicationMenuLayout-module__footer___k9Yr3",body:"ApplicationMenuLayout-module__body___6HrKr",widgets:"ApplicationMenuLayout-module__widgets___-YRy1",content:"ApplicationMenuLayout-module__content___T7isC",normalizer:"ApplicationMenuLayout-module__normalizer___uQB7W"}},54029:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderName-module__clinical-lowlight-theme___cDdoY","orion-fusion-theme":"ApplicationHeaderName-module__orion-fusion-theme___JSra+","application-header-name":"ApplicationHeaderName-module__application-header-name___zlk-U",accessory:"ApplicationHeaderName-module__accessory___-89IO",title:"ApplicationHeaderName-module__title___tfg+E"}},85808:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ApplicationMenuName-module__clinical-lowlight-theme___9oXBZ","orion-fusion-theme":"ApplicationMenuName-module__orion-fusion-theme___zvqtZ","application-menu-name":"ApplicationMenuName-module__application-menu-name___v1tX4",accessory:"ApplicationMenuName-module__accessory___8KRdw",title:"ApplicationMenuName-module__title___oWESV"}},37715:function(e,t,a){a.r(t),t.default={"wrapper1-default":"Placeholder-module__wrapper1-default___KJ3a+","wrapper1-header-extensions":"Placeholder-module__wrapper1-header-extensions___vYE+F","wrapper1-utiltities":"Placeholder-module__wrapper1-utiltities___rOdEa","wrapper1-menu-extensions":"Placeholder-module__wrapper1-menu-extensions___rgi4C","wrapper1-footer":"Placeholder-module__wrapper1-footer___tkYYR",wrapper2:"Placeholder-module__wrapper2___q9dVT",wrapper3:"Placeholder-module__wrapper3___bfqER"}},69400:function(e,t,a){a.r(t),t.default={"demo-size":"ApplicationHeaderNameStandard-module__demo-size___sB9bw"}},84769:function(e,t,a){a.r(t),t.default={"demo-size":"ApplicationMenuNameStandard-module__demo-size___uD631"}},9620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"demoStyles-module__clinical-lowlight-theme___XT8Be","orion-fusion-theme":"demoStyles-module__orion-fusion-theme___K8nA4","demo-background-color":"demoStyles-module__demo-background-color___RQuTv","demo-truncate-width":"demoStyles-module__demo-truncate-width___yPHA+","demo-image-container":"demoStyles-module__demo-image-container___6c787","content-wrapper":"demoStyles-module__content-wrapper___xDQDx"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(a(67294)),l=o(a(99139));function o(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}var d=function(e){var t=r({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d}}]);