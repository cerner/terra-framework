"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[32292],{49271:function(e,t,a){var l=a(64836),n=a(18698);t.Z=void 0;var r=l(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(l,u,o):l[u]=e[u]}l.default=e,a&&a.set(e,l);return l}(a(67294)),o=l(a(45697)),i=l(a(47166)),d=a(21538),s=l(a(33864)),c=l(a(23399)),m=a(51051),f=l(a(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=i.default.bind(f.default),v={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,o=e.description,i=e.isExpanded,f=(0,u.useState)(i),p=(0,r.default)(f,2),v=p[0],x=p[1],E=(0,u.useState)(!1),y=(0,r.default)(E,2),g=y[0],w=y[1],C=u.default.useContext(d.ThemeContext),O=void 0!==l,S=function(){w(!g),v&&x(!v)},T=function(){x(!v),g&&w(!g)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:_("template",C.className)},u.default.createElement("div",{className:_("header")},n&&u.default.createElement("h2",{className:_("title")},n)),u.default.createElement("div",{className:_("content")},o&&u.default.createElement("div",{className:_("description")},o),t),u.default.createElement("div",{className:_("footer")},a?u.default.createElement("div",{className:_("button-container")},O&&u.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":g}),onClick:S,onKeyDown:function(e){return N(e,S)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(s.default,{className:_("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(c.default,{className:_("chevron")})),u.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:T,onKeyDown:function(e){return N(e,T)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(s.default,{className:_("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(c.default,{className:_("chevron")}))):null,u.default.createElement("div",null,g&&u.default.createElement("div",{className:_("css")},l),v&&u.default.createElement("div",{className:_("code")},a))))};x.propTypes=v,x.defaultProps={isExpanded:!1};var E=x;t.Z=E},32292:function(e,t,a){a.r(t),a.d(t,{default:function(){return s}});var l=a(87462),n=a(44925),r=(a(67294),a(81254)),u=a(63518),o=["components"],i={},d="wrapper";function s(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.mdx)(d,(0,l.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(u.Z,{mdxType:"CustomSlider"}))}s.isMDXComponent=!0},63518:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(67294),n=a(80795),r=a(87462),u=a(44925),o=a(81254),i=["components"],d={};function s(e){var t=e.components,a=(0,u.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Slider from \'terra-slider\';\n\nconst CustomSlider = () => (\n  <Slider\n    minimumValue={0}\n    maximumValue={100}\n    label="Zoom"\n    minimumLabel="0%"\n    maximumLabel="100%"\n    value={20}\n  />\n);\n\nexport default CustomSlider;\n\n')))}s.isMDXComponent=!0;var c=a(49271),m=function(e){var t=e.title,a=e.description,r=e.isExpanded;return l.createElement(c.Z,{title:t||"Custom Slider",description:a,example:l.createElement(n.Z,null),exampleSrc:l.createElement(s,null),isExpanded:r})}},80795:function(e,t,a){var l=a(64836);t.Z=void 0;var n=l(a(67294)),r=l(a(19270));t.Z=function(){return n.default.createElement(r.default,{minimumValue:0,maximumValue:100,label:"Zoom",minimumLabel:"0%",maximumLabel:"100%",value:20})}},19270:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(56690)),r=l(a(89728)),u=l(a(66115)),o=l(a(61655)),i=l(a(94993)),d=l(a(73808)),s=l(a(67294)),c=l(a(45697)),m=l(a(47166)),f=l(a(47341)),p=l(a(86495)),_=l(a(29270)),v=a(55877);function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=(0,d.default)(e);if(t){var n=(0,d.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,i.default)(this,a)}}var h=m.default.bind(p.default),x={label:c.default.string.isRequired,minimumValue:c.default.number.isRequired,maximumValue:c.default.number.isRequired,value:c.default.number.isRequired,isDisabled:c.default.bool,minimumLabel:c.default.string,maximumLabel:c.default.string,onChange:c.default.func},E=function(e){(0,o.default)(a,e);var t=b(a);function a(e){var l;return(0,n.default)(this,a),(l=t.call(this,e)).state={value:l.props.value},l.handleOnChange=l.handleOnChange.bind((0,u.default)(l)),l.sliderRef=s.default.createRef(),l}return(0,r.default)(a,[{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&this.setState({value:this.props.value})}},{key:"handleOnChange",value:function(e){this.setState({value:e.currentTarget.value}),this.props.onChange&&this.props.onChange(e)}},{key:"render",value:function(){var e=this.props,t=e.isDisabled,a=e.minimumValue,l=e.maximumValue,n=e.label,r=e.minimumLabel,u=e.maximumLabel,o=this.context,i=h(["slider",o.className]),d=r||a,c=u||l,m=r||u?"Adjust slider to select a value between ".concat(r," (").concat(a,") and ").concat(u," (").concat(l,")"):"Adjust slider to select a value between ".concat(a," and ").concat(l),f=(0,v.v4)();return s.default.createElement("div",{style:{"--terra-slider-progress-status":"".concat(this.state.value,"%")},className:i},s.default.createElement("span",{className:h("label"),"aria-hidden":"true"},n),s.default.createElement("span",{className:h("slider-label","slider-min-label"),"aria-hidden":"true"},d),s.default.createElement("input",{className:h("input-range"),type:"range",ref:this.sliderRef,"aria-label":n,"aria-describedby":f,value:this.state.value,disabled:t,min:a,max:l,onChange:this.handleOnChange}),s.default.createElement("span",{className:h("slider-label","slider-max-label"),"aria-hidden":"true"},c),s.default.createElement(_.default,{id:f,text:m}))}}]),a}(s.default.Component);E.propTypes=x,E.defaultProps={isDisabled:!1,onChange:null},E.contextType=f.default;t.default=E},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},86495:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___8lFzi","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___ou4Xa",slider:"Slider-module__slider___p5WX-",label:"Slider-module__label___9ub6Z","slider-label":"Slider-module__slider-label___fdXlu","slider-min-label":"Slider-module__slider-min-label___zedNZ","slider-max-label":"Slider-module__slider-max-label___6gGpy","input-range":"Slider-module__input-range___9Lrsz"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(67294)),n=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},87462:function(e,t,a){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},l.apply(this,arguments)}a.d(t,{Z:function(){return l}})},44925:function(e,t,a){function l(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,{Z:function(){return l}})}}]);