"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[60154],{49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),d=r(n(47166)),u=n(21538),m=r(n(33864)),s=r(n(23399)),c=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(p.default),h={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,l.default)(p,2),h=f[0],v=f[1],b=(0,o.useState)(!1),E=(0,l.default)(b,2),g=E[0],S=E[1],N=o.default.useContext(u.ThemeContext),T=void 0!==r,C=function(){S(!g),h&&v(!h)},D=function(){v(!h),g&&S(!g)},w=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",N.className)},o.default.createElement("div",{className:x("header")},a&&o.default.createElement("h2",{className:x("title")},a)),o.default.createElement("div",{className:x("content")},i&&o.default.createElement("div",{className:x("description")},i),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},T&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":g}),onClick:C,onKeyDown:function(e){return w(e,C)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(m.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:D,onKeyDown:function(e){return w(e,D)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(m.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:x("chevron")}))):null,o.default.createElement("div",null,g&&o.default.createElement("div",{className:x("css")},r),h&&o.default.createElement("div",{className:x("code")},n))))};v.propTypes=h,v.defaultProps={isExpanded:!1};var b=v;t.Z=b},70033:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(87462),a=n(44925),l=n(67294),o=n(81254),i=n(94941),d=n(78530),u=["components"],m={},s="wrapper";function c(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.mdx)(s,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(d.ZP,{mdxType:"PropsTable"},(0,o.mdx)(d.X2,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(d.O,{mdxType:"PropNameCell"},"items"),(0,o.mdx)(d.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"array\n"))),(0,o.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The array of components for the group. Only the last component is visible. The others are hidden but still mounted."))),(0,o.mdx)(d.X2,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(d.O,{mdxType:"PropNameCell"},"isAnimated"),(0,o.mdx)(d.Di,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,o.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,o.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"When true, the transition between slides is animated.")))))}c.isMDXComponent=!0;var p=n(74254),f=["components"],x={};function h(e){var t=e.components,n=(0,a.Z)(e,f);return(0,o.mdx)("wrapper",(0,r.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nexport default SlideGroupDemo;\n\n")))}h.isMDXComponent=!0;var _=n(49271),y=["components"],v={};function b(e){var t=e.components,n=(0,a.Z)(e,y);return(0,o.mdx)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .container {\n    height: 250px;\n    overflow: hidden;\n    position: relative;\n    width: 400px;\n  }\n\n  .slide {\n    background-color: #add8e6;\n    height: 100%;\n    padding: 5px;\n  }\n\n  .content-wrapper {\n    height: 200px;\n    overflow: hidden;\n    position: relative;\n    width: 400px;\n  }\n\n  .button {\n    background-color: #d3d3d3;\n  }\n\n  .custom-slide {\n    height: 200px !important;\n  }\n}\n\n")))}b.isMDXComponent=!0;var E=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(_.Z,{title:t||"Slide Group Demo",description:n,example:l.createElement(p.Z,null),exampleCssSrc:l.createElement(b,null),exampleSrc:l.createElement(h,null),isExpanded:r})},g=n(11988),S=["components"],N={};function T(e){var t=e.components,n=(0,a.Z)(e,S);return(0,o.mdx)("wrapper",(0,r.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nconst AnimatedSlideGroup = () => (\n  <SlideGroupDemo isAnimated />\n);\nexport default AnimatedSlideGroup;\n\n")))}T.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(_.Z,{title:t||"Slide Group Demo Animated",description:n,example:l.createElement(g.Z,null),exampleCssSrc:l.createElement(b,null),exampleSrc:l.createElement(T,null),isExpanded:r})},D=["components"],w={},k="wrapper";function G(e){var t=e.components,n=(0,a.Z)(e,D);return(0,o.mdx)(k,(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(i.C,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-slide-group"},"Terra Slide Group"),(0,o.mdx)("p",null,"The SlideGroup is a utility component that utilizes the ",(0,o.mdx)("inlineCode",{parentName:"p"},"react-transition-group")," library to present a stack of components in an\nanimated fashion."),(0,o.mdx)("p",null,"The last component in the group is visible, and all others are hidden. While the hidden components are not visible and\nmarked with the ",(0,o.mdx)("inlineCode",{parentName:"p"},"aria-hidden")," attribute, they are not actually unmounted."),(0,o.mdx)("p",null,"When a slide is disclosed, non-visible focus is assigned to the outermost slide container. Any component utilizing the SlideGroup will need to handle the keyboard accessibility of the content on each slide."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install with ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"npm install terra-slide-group"))))),(0,o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,o.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,o.mdx)("h2",{id:"usage"},"Usage"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import SlideGroup from 'terra-slide-group';\n")),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(E,{title:"Non-Animated SlideGroup",mdxType:"SlideGroupDemo"}),(0,o.mdx)(C,{title:"Animated SlideGroup",mdxType:"SlideGroupDemoAnimated"}),(0,o.mdx)("h2",{id:"slide-group-props-table"},"Slide Group Props Table"),(0,o.mdx)(c,{mdxType:"SlideGroupPropsTable"}))}G.isMDXComponent=!0},94941:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-slide-group",name:"terra-slide-group",version:"4.34.0",url:t})}},74254:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(56690)),l=r(n(89728)),o=r(n(66115)),i=r(n(61655)),d=r(n(94993)),u=r(n(73808)),m=r(n(67294)),s=r(n(45697)),c=r(n(47166)),p=r(n(46829)),f=r(n(71534));function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var h=c.default.bind(f.default),_=function(e){(0,i.default)(n,e);var t=x(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).increment=r.increment.bind((0,o.default)(r)),r.decrement=r.decrement.bind((0,o.default)(r)),r.state={counter:1},r}return(0,l.default)(n,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(m.default.createElement("div",{key:"Slide ".concat(t),className:h("slide")},m.default.createElement("h2",null,"Slide",t),m.default.createElement("br",null),m.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?m.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return m.default.createElement("div",{className:h("container")},m.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),n}(m.default.Component);_.propTypes={isAnimated:s.default.bool};t.Z=_},11988:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(56690)),l=r(n(89728)),o=r(n(66115)),i=r(n(61655)),d=r(n(94993)),u=r(n(73808)),m=r(n(67294)),s=r(n(45697)),c=r(n(47166)),p=r(n(46829)),f=r(n(71534));function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var h=c.default.bind(f.default),_=function(e){(0,i.default)(n,e);var t=x(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).increment=r.increment.bind((0,o.default)(r)),r.decrement=r.decrement.bind((0,o.default)(r)),r.state={counter:1},r}return(0,l.default)(n,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(m.default.createElement("div",{key:"Slide ".concat(t),className:h("slide")},m.default.createElement("h2",null,"Slide",t),m.default.createElement("br",null),m.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?m.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return m.default.createElement("div",{className:h("container")},m.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),n}(m.default.Component);_.propTypes={isAnimated:s.default.bool};t.Z=function(){return m.default.createElement(_,{isAnimated:!0})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},71534:function(e,t,n){n.r(t),t.default={container:"SlideGroupDemo-module__container___ex4X+",slide:"SlideGroupDemo-module__slide___t5xgp","content-wrapper":"SlideGroupDemo-module__content-wrapper___QFHG8",button:"SlideGroupDemo-module__button___mNrAz","custom-slide":"SlideGroupDemo-module__custom-slide___zwZof"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);