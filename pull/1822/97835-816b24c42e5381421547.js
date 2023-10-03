"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[97835],{49271:function(e,t,a){var l=a(64836),n=a(18698);t.Z=void 0;var r=l(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(l,u,o):l[u]=e[u]}l.default=e,a&&a.set(e,l);return l}(a(67294)),o=l(a(45697)),i=l(a(47166)),d=a(21538),m=l(a(33864)),c=l(a(23399)),s=a(51051),f=l(a(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=i.default.bind(f.default),b={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},E=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,o=e.description,i=e.isExpanded,f=(0,u.useState)(i),p=(0,r.default)(f,2),b=p[0],x=p[1],y=(0,u.useState)(!1),g=(0,r.default)(y,2),h=g[0],w=g[1],O=u.default.useContext(d.ThemeContext),N=void 0!==l,T=function(){w(!h),b&&x(!b)},S=function(){x(!b),h&&w(!h)},j=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:_("template",O.className)},u.default.createElement("div",{className:_("header")},n&&u.default.createElement("h2",{className:_("title")},n)),u.default.createElement("div",{className:_("content")},o&&u.default.createElement("div",{className:_("description")},o),t),u.default.createElement("div",{className:_("footer")},a?u.default.createElement("div",{className:_("button-container")},N&&u.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":h}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:v,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(m.default,{className:_("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(c.default,{className:_("chevron")})),u.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:S,onKeyDown:function(e){return j(e,S)},onBlur:v,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(m.default,{className:_("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(c.default,{className:_("chevron")}))):null,u.default.createElement("div",null,h&&u.default.createElement("div",{className:_("css")},l),b&&u.default.createElement("div",{className:_("code")},a))))};x.propTypes=b,x.defaultProps={isExpanded:!1};var y=x;t.Z=y},97835:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(87462),n=a(44925),r=(a(67294),a(81254)),u=a(8982),o=["components"],i={},d="wrapper";function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,r.mdx)(d,(0,l.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(u.Z,{mdxType:"DefaultSlider"}))}m.isMDXComponent=!0},8982:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(67294),n=a(38734),r=a(87462),u=a(44925),o=a(81254),i=["components"],d={};function m(e){var t=e.components,a=(0,u.Z)(e,i);return(0,o.mdx)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Slider from 'terra-slider';\n\nconst DefaultSlider = () => (\n  <Slider minimumValue={0} maximumValue={100} labelName=\"Label\" defaultValue={50} />\n);\n\nexport default DefaultSlider;\n\n")))}m.isMDXComponent=!0;var c=a(49271),s=function(e){var t=e.title,a=e.description,r=e.isExpanded;return l.createElement(c.Z,{title:t||"Default Slider",description:a,example:l.createElement(n.Z,null),exampleSrc:l.createElement(m,null),isExpanded:r})}},38734:function(e,t,a){var l=a(64836);t.Z=void 0;var n=l(a(67294)),r=l(a(19270));t.Z=function(){return n.default.createElement(r.default,{minimumValue:0,maximumValue:100,labelName:"Label",defaultValue:50})}},19270:function(e,t,a){var l=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(l,u,o):l[u]=e[u]}l.default=e,a&&a.set(e,l);return l}(a(67294)),u=l(a(45697)),o=l(a(47166)),i=l(a(47341)),d=l(a(86495));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}var c=o.default.bind(d.default),s={labelName:u.default.string.isRequired,minimumValue:u.default.number.isRequired,maximumValue:u.default.number.isRequired,defaultValue:u.default.number.isRequired,isDisabled:u.default.bool,minimumLabel:u.default.string,maximumLabel:u.default.string,onChange:u.default.func},f=function(e){var t=e.isDisabled,a=e.minimumValue,l=e.maximumValue,n=e.defaultValue,u=e.labelName,o=e.minimumLabel,d=e.maximumLabel,m=e.onChange,s=(0,r.useRef)();(0,r.useEffect)((function(){s.current.style.setProperty("--terra-slider-progress-status","".concat(s.current.value,"%"))}),[]);var f=r.default.useContext(i.default),p=c(["slider",f.className]),_=o||a,b=d||l;return r.default.createElement("div",{className:p},r.default.createElement("label",{className:c("label"),id:"sliderLabel"},u),r.default.createElement("span",{className:c("min-label")},_),r.default.createElement("input",{className:c("input-range"),type:"range",ref:s,"aria-labelledby":"sliderLabel","aria-valuemin":a,"aria-valuemax":l,"aria-valuenow":n,defaultValue:n,disabled:t,min:a,max:l,onChange:function(e){e.currentTarget.style.setProperty("--terra-slider-progress-status","".concat(e.currentTarget.value,"%")),e.currentTarget.setAttribute("aria-valuenow","".concat(e.currentTarget.value)),m&&m(e)}}),r.default.createElement("span",{className:c("max-label")},b))};f.propTypes=s,f.defaultProps={isDisabled:!1};t.default=f},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},86495:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___8lFzi","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___ou4Xa",slider:"Slider-module__slider___p5WX-",label:"Slider-module__label___9ub6Z","min-label":"Slider-module__min-label___Z5RAB","max-label":"Slider-module__max-label___JESok","input-range":"Slider-module__input-range___9Lrsz"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(67294)),n=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},87462:function(e,t,a){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},l.apply(this,arguments)}a.d(t,{Z:function(){return l}})},44925:function(e,t,a){function l(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,{Z:function(){return l}})}}]);