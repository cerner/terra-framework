"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[90301],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var m=r?Object.getOwnPropertyDescriptor(e,o):null;m&&(m.get||m.set)?Object.defineProperty(a,o,m):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),m=a(n(45697)),d=a(n(47166)),i=n(21538),s=a(n(33864)),u=a(n(23399)),p=n(51051),c=a(n(53560));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}var f=d.default.bind(c.default),v={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,m=e.description,d=e.isExpanded,c=(0,o.useState)(d),h=(0,r.default)(c,2),v=h[0],_=h[1],T=(0,o.useState)(!1),C=(0,r.default)(T,2),g=C[0],E=C[1],w=o.default.useContext(i.ThemeContext),b=void 0!==a,N=function(){E(!g),v&&_(!v)},S=function(){_(!v),g&&E(!g)},D=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:f("template",w.className)},o.default.createElement("div",{className:f("header")},l&&o.default.createElement("h2",{className:f("title")},l)),o.default.createElement("div",{className:f("content")},m&&o.default.createElement("div",{className:f("description")},m),t),o.default.createElement("div",{className:f("footer")},n?o.default.createElement("div",{className:f("button-container")},b&&o.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":g}),onClick:N,onKeyDown:function(e){return D(e,N)},onBlur:x,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:f("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(u.default,{className:f("chevron")})),o.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":v}),onClick:S,onKeyDown:function(e){return D(e,S)},onBlur:x,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:f("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(u.default,{className:f("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:f("css")},a),v&&o.default.createElement("div",{className:f("code")},n))))};_.propTypes=v,_.defaultProps={isExpanded:!1};var T=_;t.Z=T},46223:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var a=n(87462),l=n(44925),r=n(67294),o=n(81254),m=n(81883),d=n(78530),i=["components"],s={},u="wrapper";function p(e){var t=e.components,n=(0,l.Z)(e,i);return(0,o.mdx)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(d.ZP,{mdxType:"PropsTable"},(0,o.mdx)(d.X2,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(d.O,{mdxType:"PropNameCell"},"children"),(0,o.mdx)(d.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,o.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The component(s) that will be wrapped by ",(0,o.mdx)("inlineCode",{parentName:"p"},"<ThemeProvider />")))),(0,o.mdx)(d.X2,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(d.O,{mdxType:"PropNameCell"},"themeName"),(0,o.mdx)(d.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Name of class for specified theme"))),(0,o.mdx)(d.X2,{key:"ROW3",mdxType:"Row"},(0,o.mdx)(d.O,{mdxType:"PropNameCell"},"density"),(0,o.mdx)(d.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"Name of class for specified density")))))}p.isMDXComponent=!0;var c=n(49699),h=["components"],f={};function v(e){var t=e.components,n=(0,l.Z)(e,h);return(0,o.mdx)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ThemeProvider from 'terra-theme-provider';\nimport MockThemeComponent from './MockThemeComponent';\nimport styles from './DefaultThemeProvider.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DefaultThemeProvider extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      theme: '',\n      density: '',\n    };\n    this.handleThemeChange = this.handleThemeChange.bind(this);\n    this.handleDensityChange = this.handleDensityChange.bind(this);\n  }\n\n  handleThemeChange(event) {\n    this.setState({ theme: event.target.value });\n  }\n\n  handleDensityChange(event) {\n    this.setState({ density: event.target.value });\n  }\n\n  render() {\n    let themeSwitcher;\n    let densitySwitcher;\n\n    function supportsCSSVars() {\n      // This eslint rule complains of the lack of .CSS support in IE, which is exactly what this line is intended to detect.\n      // eslint-disable-next-line compat/compat\n      return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');\n    }\n\n    if (supportsCSSVars()) {\n      themeSwitcher = (\n        <div className={cx('theme-switcher-wrapper')}>\n          <label htmlFor=\"theme\"> Theme: </label>\n          <select id=\"theme\" value={this.state.theme} onChange={this.handleThemeChange}>\n            <option value=\"\">Default</option>\n            <option value=\"cerner-mock-theme\">Mock Theme</option>\n          </select>\n        </div>\n      );\n\n      densitySwitcher = (\n        <div className={cx('theme-switcher-wrapper')}>\n          <label htmlFor=\"density\"> Density: </label>\n          <select id=\"density\" value={this.state.density} onChange={this.handleDensityChange}>\n            <option value=\"\">Default</option>\n            <option value=\"compact\">Compact</option>\n            <option value=\"comfortable\">Comfortable</option>\n            <option value=\"spacious\">Spacious</option>\n          </select>\n        </div>\n      );\n    } else {\n      themeSwitcher = (\n        <div />\n      );\n    }\n\n    return (\n      <div>\n        <div>{themeSwitcher}</div>\n        <div>{densitySwitcher}</div>\n        <ThemeProvider themeName={this.state.theme} density={this.state.density}>\n          <div>\n            <MockThemeComponent>Themable component</MockThemeComponent>\n          </div>\n        </ThemeProvider>\n      </div>\n    );\n  }\n}\n\nexport default DefaultThemeProvider;\n\n")))}v.isMDXComponent=!0;var x=n(49271),y=["components"],_={};function T(e){var t=e.components,n=(0,l.Z)(e,y);return(0,o.mdx)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .theme-switcher-wrapper {\n    margin-bottom: 1rem;\n  }\n}\n\n")))}T.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(x.Z,{title:t||"Default Theme Provider",description:n,example:r.createElement(c.Z,null),exampleCssSrc:r.createElement(T,null),exampleSrc:r.createElement(v,null),isExpanded:a})},g=["components"],E={},w="wrapper";function b(e){var t=e.components,n=(0,l.Z)(e,g);return(0,o.mdx)(w,(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(m.C,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-theme-provider"},"Terra Theme Provider"),(0,o.mdx)("p",null,"The theme provider component provides a theme to Terra UI components via CSS custom properties a.k.a CSS variables. This is accomplished by setting a CSS class, generated from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"themeName")," prop, which contains defined CSS custom properties for the specified theme on the ",(0,o.mdx)("inlineCode",{parentName:"p"},"html")," element."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Note:")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"The CSS custom properties applied via the theme provided only works in browsers which have native support for CSS custom properties.")),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install with ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"npm install terra-theme-provider"))))),(0,o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,o.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"import ThemeProvider from 'terra-theme-provider';\n")),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(C,{title:"Example Theme Provider",mdxType:"DefaultThemeProvider"}),(0,o.mdx)("h2",{id:"theme-provider-props-table"},"Theme Provider Props Table"),(0,o.mdx)(p,{mdxType:"ThemeProviderPropsTable"}))}b.isMDXComponent=!0},81883:function(e,t,n){n.d(t,{C:function(){return r}});var a=n(67294),l=n(22863),r=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-provider",name:"terra-theme-provider",version:"4.14.0",url:t})}},49699:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(56690)),r=a(n(89728)),o=a(n(66115)),m=a(n(61655)),d=a(n(94993)),i=a(n(73808)),s=a(n(67294)),u=a(n(47166)),p=a(n(43666)),c=a(n(99104)),h=a(n(68651));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,i.default)(e);if(t){var l=(0,i.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var v=u.default.bind(h.default),x=function(e){(0,m.default)(n,e);var t=f(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).state={theme:"",density:""},a.handleThemeChange=a.handleThemeChange.bind((0,o.default)(a)),a.handleDensityChange=a.handleDensityChange.bind((0,o.default)(a)),a}return(0,r.default)(n,[{key:"handleThemeChange",value:function(e){this.setState({theme:e.target.value})}},{key:"handleDensityChange",value:function(e){this.setState({density:e.target.value})}},{key:"render",value:function(){var e,t;return window.CSS&&window.CSS.supports&&window.CSS.supports("(--fake-var: 0)")?(e=s.default.createElement("div",{className:v("theme-switcher-wrapper")},s.default.createElement("label",{htmlFor:"theme"}," Theme: "),s.default.createElement("select",{id:"theme",value:this.state.theme,onChange:this.handleThemeChange},s.default.createElement("option",{value:""},"Default"),s.default.createElement("option",{value:"cerner-mock-theme"},"Mock Theme"))),t=s.default.createElement("div",{className:v("theme-switcher-wrapper")},s.default.createElement("label",{htmlFor:"density"}," Density: "),s.default.createElement("select",{id:"density",value:this.state.density,onChange:this.handleDensityChange},s.default.createElement("option",{value:""},"Default"),s.default.createElement("option",{value:"compact"},"Compact"),s.default.createElement("option",{value:"comfortable"},"Comfortable"),s.default.createElement("option",{value:"spacious"},"Spacious")))):e=s.default.createElement("div",null),s.default.createElement("div",null,s.default.createElement("div",null,e),s.default.createElement("div",null,t),s.default.createElement(p.default,{themeName:this.state.theme,density:this.state.density},s.default.createElement("div",null,s.default.createElement(c.default,null,"Themable component"))))}}]),n}(s.default.Component);t.Z=x},99104:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),r=a(n(70215)),o=a(n(67294)),m=a(n(45697)),d=a(n(47166)),i=a(n(38536));n(2890);var s=["children"],u=d.default.bind(i.default),p={children:m.default.node.isRequired},c=function(e){var t=e.children,n=(0,r.default)(e,s);return o.default.createElement("div",(0,l.default)({},n,{className:u("mock-theme-component",n.className)}),t)};c.propTypes=p;t.default=c},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},68651:function(e,t,n){n.r(t),t.default={"theme-switcher-wrapper":"DefaultThemeProvider-module__theme-switcher-wrapper___mXLjt"}},38536:function(e,t,n){n.r(t),t.default={"mock-theme-component":"MockThemeComponent-module__mock-theme-component___42Z5g"}},2890:function(e,t,n){n.r(t),t.default={}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var m=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=m}}]);