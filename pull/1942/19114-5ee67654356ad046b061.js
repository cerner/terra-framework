"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[19114],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),r=a(n(45697)),m=a(n(47166)),o=a(n(17422)),d=m.default.bind(o.default),i={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,m=l.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(r))),o=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},m,o)};u.propTypes=i;var s=u;t.Z=s},49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var o=r?Object.getOwnPropertyDescriptor(e,m):null;o&&(o.get||o.set)?Object.defineProperty(a,m,o):a[m]=e[m]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(45697)),d=a(n(47166)),i=n(21538),u=a(n(33864)),s=a(n(23399)),c=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=d.default.bind(p.default),v={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,o=e.description,d=e.isExpanded,p=(0,m.useState)(d),f=(0,r.default)(p,2),v=f[0],g=f[1],T=(0,m.useState)(!1),b=(0,r.default)(T,2),y=b[0],E=b[1],N=m.default.useContext(i.ThemeContext),w=void 0!==a,C=function(){E(!y),v&&g(!v)},S=function(){g(!v),y&&E(!y)},k=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return m.default.createElement("div",{className:h("template",N.className)},m.default.createElement("div",{className:h("header")},l&&m.default.createElement("h2",{className:h("title")},l)),m.default.createElement("div",{className:h("content")},o&&m.default.createElement("div",{className:h("description")},o),t),m.default.createElement("div",{className:h("footer")},n?m.default.createElement("div",{className:h("button-container")},w&&m.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":y}),onClick:C,onKeyDown:function(e){return k(e,C)},onBlur:x,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(u.default,{className:h("chevron")}),m.default.createElement("span",null,"CSS"),m.default.createElement(s.default,{className:h("chevron")})),m.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":v}),onClick:S,onKeyDown:function(e){return k(e,S)},onBlur:x,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(u.default,{className:h("chevron")}),m.default.createElement("span",null,"Code"),m.default.createElement(s.default,{className:h("chevron")}))):null,m.default.createElement("div",null,y&&m.default.createElement("div",{className:h("css")},a),v&&m.default.createElement("div",{className:h("code")},n))))};g.propTypes=v,g.defaultProps={isExpanded:!1};var T=g;t.Z=T},46223:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(87462),l=n(44925),r=n(67294),m=n(81254),o=n(81883),d=n(78530),i=["components"],u={},s="wrapper";function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,m.mdx)(s,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)(d.ZP,{mdxType:"PropsTable"},(0,m.mdx)(d.X2,{key:"ROW1",mdxType:"Row"},(0,m.mdx)(d.O,{mdxType:"PropNameCell"},"children"),(0,m.mdx)(d.Di,{mdxType:"TypeCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,m.mdx)(d.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,m.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,m.mdx)("p",null,"none")),(0,m.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,m.mdx)("p",null,"The component(s) that will be wrapped by ",(0,m.mdx)("inlineCode",{parentName:"p"},"<ThemeProvider />")))),(0,m.mdx)(d.X2,{key:"ROW2",mdxType:"Row"},(0,m.mdx)(d.O,{mdxType:"PropNameCell"},"themeName"),(0,m.mdx)(d.Di,{mdxType:"TypeCell"},(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,m.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,m.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,m.mdx)("p",null,"none")),(0,m.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,m.mdx)("p",null,"Name of class for specified theme")))))}c.isMDXComponent=!0;var p=n(49699),f=["components"],h={};function v(e){var t=e.components,n=(0,l.Z)(e,f);return(0,m.mdx)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ThemeProvider from 'terra-theme-provider';\nimport MockThemeComponent from './MockThemeComponent';\nimport styles from './DefaultThemeProvider.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DefaultThemeProvider extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      theme: '',\n    };\n    this.handleThemeChange = this.handleThemeChange.bind(this);\n  }\n\n  handleThemeChange(e) {\n    this.setState({ theme: e.target.value });\n  }\n\n  render() {\n    let themeSwitcher;\n\n    function supportsCSSVars() {\n      // This eslint rule complains of the lack of .CSS support in IE, which is exactly what this line is intended to detect.\n      // eslint-disable-next-line compat/compat\n      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');\n    }\n\n    if (supportsCSSVars()) {\n      themeSwitcher = (\n        <div className={cx('theme-switcher-wrapper')}>\n          <label htmlFor=\"theme\"> Theme: </label>\n          <select id=\"theme\" value={this.state.theme} onChange={this.handleThemeChange}>\n            <option value=\"\">Default</option>\n            <option value=\"cerner-mock-theme\">Mock Theme</option>\n          </select>\n        </div>\n      );\n    } else {\n      themeSwitcher = (\n        <div />\n      );\n    }\n\n    return (\n      <div>\n        <div>{themeSwitcher}</div>\n        <ThemeProvider themeName={this.state.theme}>\n          <div>\n            <MockThemeComponent>Themable component</MockThemeComponent>\n          </div>\n        </ThemeProvider>\n      </div>\n    );\n  }\n}\n\nexport default DefaultThemeProvider;\n\n")))}v.isMDXComponent=!0;var x=n(49271),_=["components"],g={};function T(e){var t=e.components,n=(0,l.Z)(e,_);return(0,m.mdx)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .theme-switcher-wrapper {\n    margin-bottom: 1rem;\n  }\n}\n\n")))}T.isMDXComponent=!0;var b=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(x.Z,{title:t||"Default Theme Provider",description:n,example:r.createElement(p.Z,null),exampleCssSrc:r.createElement(T,null),exampleSrc:r.createElement(v,null),isExpanded:a})},y=["components"],E={},N="wrapper";function w(e){var t=e.components,n=(0,l.Z)(e,y);return(0,m.mdx)(N,(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)(o.C,{mdxType:"Badge"}),(0,m.mdx)("h1",{id:"terra-theme-provider"},"Terra Theme Provider"),(0,m.mdx)("p",null,"The theme provider component provides a theme to Terra UI components via CSS custom properties a.k.a CSS variables. This is accomplished by setting a CSS class, generated from the ",(0,m.mdx)("inlineCode",{parentName:"p"},"themeName")," prop, which contains defined CSS custom properties for the specified theme on the ",(0,m.mdx)("inlineCode",{parentName:"p"},"html")," element."),(0,m.mdx)("p",null,(0,m.mdx)("strong",{parentName:"p"},"Note:")),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"The CSS custom properties applied via the theme provided only works in browsers which have native support for CSS custom properties.")),(0,m.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Install with ",(0,m.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("inlineCode",{parentName:"li"},"npm install terra-theme-provider"))))),(0,m.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,m.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,m.mdx)("table",null,(0,m.mdx)("thead",{parentName:"table"},(0,m.mdx)("tr",{parentName:"thead"},(0,m.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,m.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,m.mdx)("tbody",{parentName:"table"},(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"react"),(0,m.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,m.mdx)("tr",{parentName:"tbody"},(0,m.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,m.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,m.mdx)("h2",{id:"usage"},"Usage"),(0,m.mdx)("pre",null,(0,m.mdx)("code",{parentName:"pre",className:"language-js"},"import ThemeProvider from 'terra-theme-provider';\n")),(0,m.mdx)("h2",{id:"examples"},"Examples"),(0,m.mdx)(b,{title:"Example Theme Provider",mdxType:"DefaultThemeProvider"}),(0,m.mdx)("h2",{id:"theme-provider-props-table"},"Theme Provider Props Table"),(0,m.mdx)(c,{mdxType:"ThemeProviderPropsTable"}))}w.isMDXComponent=!0},81883:function(e,t,n){n.d(t,{C:function(){return r}});var a=n(67294),l=n(22863),r=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-provider",name:"terra-theme-provider",version:"4.13.0",url:t})}},49699:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(56690)),r=a(n(89728)),m=a(n(66115)),o=a(n(61655)),d=a(n(94993)),i=a(n(73808)),u=a(n(67294)),s=a(n(47166)),c=a(n(43666)),p=a(n(99104)),f=a(n(68651));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,i.default)(e);if(t){var l=(0,i.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var v=s.default.bind(f.default),x=function(e){(0,o.default)(n,e);var t=h(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).state={theme:""},a.handleThemeChange=a.handleThemeChange.bind((0,m.default)(a)),a}return(0,r.default)(n,[{key:"handleThemeChange",value:function(e){this.setState({theme:e.target.value})}},{key:"render",value:function(){var e;return e=window.CSS&&window.CSS.supports&&window.CSS.supports("(--fake-var: 0)")?u.default.createElement("div",{className:v("theme-switcher-wrapper")},u.default.createElement("label",{htmlFor:"theme"}," Theme: "),u.default.createElement("select",{id:"theme",value:this.state.theme,onChange:this.handleThemeChange},u.default.createElement("option",{value:""},"Default"),u.default.createElement("option",{value:"cerner-mock-theme"},"Mock Theme"))):u.default.createElement("div",null),u.default.createElement("div",null,u.default.createElement("div",null,e),u.default.createElement(c.default,{themeName:this.state.theme},u.default.createElement("div",null,u.default.createElement(p.default,null,"Themable component"))))}}]),n}(u.default.Component);t.Z=x},99104:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),r=a(n(70215)),m=a(n(67294)),o=a(n(45697)),d=a(n(47166)),i=a(n(38536));n(2890);var u=["children"],s=d.default.bind(i.default),c={children:o.default.node.isRequired},p=function(e){var t=e.children,n=(0,r.default)(e,u);return m.default.createElement("div",(0,l.default)({},n,{className:s("mock-theme-component",n.className)}),t)};p.propTypes=c;t.default=p},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},68651:function(e,t,n){n.r(t),t.default={"theme-switcher-wrapper":"DefaultThemeProvider-module__theme-switcher-wrapper___mXLjt"}},38536:function(e,t,n){n.r(t),t.default={"mock-theme-component":"MockThemeComponent-module__mock-theme-component___42Z5g"}},2890:function(e,t,n){n.r(t),t.default={}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}var o=function(e){var t=m({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o}}]);