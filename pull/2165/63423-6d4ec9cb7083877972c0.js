"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[63423,6796],{201:function(e,t,a){var l=a(24994),n=a(73738);t.A=void 0;var r=l(a(85715)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}(a(96540)),i=l(a(5556)),o=l(a(67967)),m=a(92912),d=l(a(49558)),s=l(a(53665)),c=a(25966),f=l(a(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=o.default.bind(f.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},E=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,i=e.description,o=e.isExpanded,f=(0,u.useState)(o),p=(0,r.default)(f,2),b=p[0],E=p[1],h=(0,u.useState)(!1),g=(0,r.default)(h,2),y=g[0],w=g[1],T=u.default.useContext(m.ThemeContext),N=void 0!==l,O=function(){w(!y),b&&E(!b)},S=function(){E(!b),y&&w(!y)},C=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:_("template",T.className)},u.default.createElement("div",{className:_("header")},n&&u.default.createElement("h2",{className:_("title")},n)),u.default.createElement("div",{className:_("content")},i&&u.default.createElement("div",{className:_("description")},i),t),u.default.createElement("div",{className:_("footer")},a?u.default.createElement("div",{className:_("button-container")},N&&u.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":y}),onClick:O,onKeyDown:function(e){return C(e,O)},onBlur:x,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(d.default,{className:_("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(s.default,{className:_("chevron")})),u.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:S,onKeyDown:function(e){return C(e,S)},onBlur:x,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(d.default,{className:_("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(s.default,{className:_("chevron")}))):null,u.default.createElement("div",null,y&&u.default.createElement("div",{className:_("css")},l),b&&u.default.createElement("div",{className:_("code")},a))))};E.propTypes=b,E.defaultProps={isExpanded:!1};t.A=E},63423:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(58168),n=a(53986),r=a(96540),u=a(36665),i=a(60230),o=["components"],m={};function d(e){var t=e.components,a=(0,n.A)(e,o);return(0,u.mdx)("wrapper",(0,l.A)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Slider from \'terra-slider\';\n\nconst CustomSlider = () => (\n  <Slider\n    minimumValue={0}\n    maximumValue={100}\n    label="Zoom"\n    minimumLabel="0%"\n    maximumLabel="100%"\n    value={20}\n  />\n);\n\nexport default CustomSlider;\n\n')))}d.isMDXComponent=!0;var s=a(201),c=function(e){var t=e.title,a=e.description,l=e.isExpanded;return r.createElement(s.A,{title:t||"Custom Slider",description:a,example:r.createElement(i.A,null),exampleSrc:r.createElement(d,null),isExpanded:l})},f=["components"],p={},_="wrapper";function b(e){var t=e.components,a=(0,n.A)(e,f);return(0,u.mdx)(_,(0,l.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,u.mdx)("h1",{id:"custom-slider"},"Custom Slider"),(0,u.mdx)("h3",{id:"description"},"Description"),(0,u.mdx)("p",null,"This example demonstrates a ",(0,u.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2165/components/cerner-terra-framework-docs/slider/about"},"slider")," with a custom label and minimum and maximum labels. The minimumLabel and maximumLabel properties are used to set custom labels. These labels are also used to construct the hidden text that assists screen reader users. "),(0,u.mdx)(c,{mdxType:"CustomSlider"}))}b.isMDXComponent=!0},60230:function(e,t,a){var l=a(24994);t.A=void 0;var n=l(a(96540)),r=l(a(20992));t.A=function(){return n.default.createElement(r.default,{minimumValue:0,maximumValue:100,label:"Zoom",minimumLabel:"0%",maximumLabel:"100%",value:20})}},20992:function(e,t,a){var l=a(24994),n=a(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(85715)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}(a(96540)),i=l(a(5556)),o=l(a(67967)),m=l(a(23695)),d=l(a(16524)),s=a(8604),c=a(68414),f=l(a(41241));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=o.default.bind(f.default),b={label:i.default.string.isRequired,minimumValue:i.default.number.isRequired,maximumValue:i.default.number.isRequired,value:i.default.number.isRequired,isDisabled:i.default.bool,minimumLabel:i.default.string,maximumLabel:i.default.string,onChange:i.default.func,intl:i.default.shape({formatMessage:i.default.func}).isRequired},x=function(e){var t=e.isDisabled,a=e.intl,l=e.minimumValue,n=e.maximumValue,i=e.label,o=e.minimumLabel,s=e.maximumLabel,f=e.onChange,p=e.value,b=(0,u.useContext)(m.default),x=_(["slider",b.className]),v=(0,u.useRef)(),E=o||l,h=s||n,g=o&&s?a.formatMessage({id:"Terra.slider.ariaDescribedByTextWithLabels"},{minimumLabel:o,maximumLabel:s,minimumValue:l,maximumValue:n}):a.formatMessage({id:"Terra.slider.ariaDescribedByTextWithoutLabels"},{minimumValue:l,maximumValue:n}),y=(0,c.v4)(),w=(0,u.useState)(p),T=(0,r.default)(w,2),N=T[0],O=T[1];(0,u.useEffect)((function(){O(p)}),[p]);return u.default.createElement("div",{style:{"--terra-slider-progress-status":"".concat(N,"%")},className:x},u.default.createElement("span",{className:_("label"),"aria-hidden":"true"},i),u.default.createElement("span",{className:_("slider-label","slider-min-label"),"aria-hidden":"true"},E),u.default.createElement("input",{className:_("input-range"),type:"range",ref:v,"aria-label":i,"aria-describedby":y,value:N,disabled:t,min:l,max:n,onChange:function(e){O(e.currentTarget.value),f&&f(e.currentTarget.value)}}),u.default.createElement("span",{className:_("slider-label","slider-max-label"),"aria-hidden":"true"},h),u.default.createElement(d.default,{id:y,text:g}))};x.propTypes=b,x.defaultProps={isDisabled:!1};t.default=(0,s.injectIntl)(x)},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},41241:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___8lFzi","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___ou4Xa",slider:"Slider-module__slider___p5WX-",label:"Slider-module__label___9ub6Z","slider-label":"Slider-module__slider-label___fdXlu","slider-min-label":"Slider-module__slider-min-label___zedNZ","slider-max-label":"Slider-module__slider-max-label___6gGpy","input-range":"Slider-module__input-range___9Lrsz"}},49558:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(96540)),n=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}var u=function(e){var t=Object.assign({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},58168:function(e,t,a){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},l.apply(this,arguments)}a.d(t,{A:function(){return l}})},53986:function(e,t,a){function l(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;a[l]=e[l]}return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,{A:function(){return l}})}}]);