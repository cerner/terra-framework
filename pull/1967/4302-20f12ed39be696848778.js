"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[4302],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),i=a(n(17422)),d=o.default.bind(i.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,i)};s.propTypes=u;var m=s;t.Z=m},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),d=a(n(47166)),u=n(21538),s=a(n(33864)),m=a(n(23399)),c=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(p.default),h={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,l.default)(p,2),h=f[0],b=f[1],y=(0,o.useState)(!1),g=(0,l.default)(y,2),E=g[0],N=g[1],S=o.default.useContext(u.ThemeContext),T=void 0!==a,w=function(){N(!E),h&&b(!h)},C=function(){b(!h),E&&N(!E)},D=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",S.className)},o.default.createElement("div",{className:x("header")},r&&o.default.createElement("h2",{className:x("title")},r)),o.default.createElement("div",{className:x("content")},i&&o.default.createElement("div",{className:x("description")},i),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},T&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":E}),onClick:w,onKeyDown:function(e){return D(e,w)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:C,onKeyDown:function(e){return D(e,C)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:x("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:x("css")},a),h&&o.default.createElement("div",{className:x("code")},n))))};b.propTypes=h,b.defaultProps={isExpanded:!1};var y=b;t.Z=y},70033:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a=n(87462),r=n(44925),l=n(67294),o=n(81254),i=n(94941),d=n(78530),u=["components"],s={},m="wrapper";function c(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.mdx)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(d.ZP,{mdxType:"PropsTable"},(0,o.mdx)(d.X2,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(d.O,{mdxType:"PropNameCell"},"items"),(0,o.mdx)(d.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"array\n"))),(0,o.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The array of components for the group. Only the last component is visible. The others are hidden but still mounted."))),(0,o.mdx)(d.X2,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(d.O,{mdxType:"PropNameCell"},"isAnimated"),(0,o.mdx)(d.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,o.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"When true, the transition between slides is animated.")))))}c.isMDXComponent=!0;var p=n(74254),f=["components"],x={};function h(e){var t=e.components,n=(0,r.Z)(e,f);return(0,o.mdx)("wrapper",(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nexport default SlideGroupDemo;\n\n")))}h.isMDXComponent=!0;var _=n(49271),v=["components"],b={};function y(e){var t=e.components,n=(0,r.Z)(e,v);return(0,o.mdx)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .container {\n    height: 250px;\n    overflow: hidden;\n    position: relative;\n    width: 400px;\n  }\n\n  .slide {\n    background-color: #add8e6;\n    height: 100%;\n    padding: 5px;\n  }\n\n  .content-wrapper {\n    height: 200px;\n    overflow: hidden;\n    position: relative;\n    width: 400px;\n  }\n\n  .button {\n    background-color: #d3d3d3;\n  }\n\n  .custom-slide {\n    height: 200px !important;\n  }\n}\n\n")))}y.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(_.Z,{title:t||"Slide Group Demo",description:n,example:l.createElement(p.Z,null),exampleCssSrc:l.createElement(y,null),exampleSrc:l.createElement(h,null),isExpanded:a})},E=n(11988),N=["components"],S={};function T(e){var t=e.components,n=(0,r.Z)(e,N);return(0,o.mdx)("wrapper",(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nconst AnimatedSlideGroup = () => (\n  <SlideGroupDemo isAnimated />\n);\nexport default AnimatedSlideGroup;\n\n")))}T.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(_.Z,{title:t||"Slide Group Demo Animated",description:n,example:l.createElement(E.Z,null),exampleCssSrc:l.createElement(y,null),exampleSrc:l.createElement(T,null),isExpanded:a})},C=["components"],D={},k="wrapper";function G(e){var t=e.components,n=(0,r.Z)(e,C);return(0,o.mdx)(k,(0,a.Z)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(i.C,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-slide-group"},"Terra Slide Group"),(0,o.mdx)("p",null,"The SlideGroup is a utility component that utilizes the ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-transition-group")," library to present a stack of components in an\nanimated fashion."),(0,o.mdx)("p",null,"The last component in the group is visible, and all others are hidden. While the hidden components are not visible and\nmarked with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"aria-hidden")," attribute, they are not actually unmounted."),(0,o.mdx)("p",null,"When a slide is disclosed, non-visible focus is assigned to the outermost slide container. Any component utilizing the SlideGroup will need to handle the keyboard accessibility of the content on each slide."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install with ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"npm install terra-slide-group"))))),(0,o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,o.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import SlideGroup from 'terra-slide-group';\n")),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(g,{title:"Non-Animated SlideGroup",mdxType:"SlideGroupDemo"}),(0,o.mdx)(w,{title:"Animated SlideGroup",mdxType:"SlideGroupDemoAnimated"}),(0,o.mdx)("h2",{id:"slide-group-props-table"},"Slide Group Props Table"),(0,o.mdx)(c,{mdxType:"SlideGroupPropsTable"}))}G.isMDXComponent=!0},94941:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-slide-group",name:"terra-slide-group",version:"4.34.0",url:t})}},74254:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(56690)),l=a(n(89728)),o=a(n(66115)),i=a(n(61655)),d=a(n(94993)),u=a(n(73808)),s=a(n(67294)),m=a(n(45697)),c=a(n(47166)),p=a(n(46829)),f=a(n(71534));function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var h=c.default.bind(f.default),_=function(e){(0,i.default)(n,e);var t=x(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).increment=a.increment.bind((0,o.default)(a)),a.decrement=a.decrement.bind((0,o.default)(a)),a.state={counter:1},a}return(0,l.default)(n,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(s.default.createElement("div",{key:"Slide ".concat(t),className:h("slide")},s.default.createElement("h2",null,"Slide",t),s.default.createElement("br",null),s.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?s.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return s.default.createElement("div",{className:h("container")},s.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),n}(s.default.Component);_.propTypes={isAnimated:m.default.bool};t.Z=_},11988:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(56690)),l=a(n(89728)),o=a(n(66115)),i=a(n(61655)),d=a(n(94993)),u=a(n(73808)),s=a(n(67294)),m=a(n(45697)),c=a(n(47166)),p=a(n(46829)),f=a(n(71534));function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var h=c.default.bind(f.default),_=function(e){(0,i.default)(n,e);var t=x(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).increment=a.increment.bind((0,o.default)(a)),a.decrement=a.decrement.bind((0,o.default)(a)),a.state={counter:1},a}return(0,l.default)(n,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(s.default.createElement("div",{key:"Slide ".concat(t),className:h("slide")},s.default.createElement("h2",null,"Slide",t),s.default.createElement("br",null),s.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?s.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return s.default.createElement("div",{className:h("container")},s.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),n}(s.default.Component);_.propTypes={isAnimated:m.default.bool};t.Z=function(){return s.default.createElement(_,{isAnimated:!0})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},71534:function(e,t,n){n.r(t),t.default={container:"SlideGroupDemo-module__container___ex4X+",slide:"SlideGroupDemo-module__slide___t5xgp","content-wrapper":"SlideGroupDemo-module__content-wrapper___QFHG8",button:"SlideGroupDemo-module__button___mNrAz","custom-slide":"SlideGroupDemo-module__custom-slide___zwZof"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);