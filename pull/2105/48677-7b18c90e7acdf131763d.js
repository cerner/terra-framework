"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[48677],{201:function(e,t,a){var l=a(24994),n=a(73738);t.A=void 0;var r=l(a(85715)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}(a(96540)),i=l(a(5556)),o=l(a(67967)),d=a(92912),m=l(a(49558)),s=l(a(53665)),c=a(25966),f=l(a(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=o.default.bind(f.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},E=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,i=e.description,o=e.isExpanded,f=(0,u.useState)(o),p=(0,r.default)(f,2),b=p[0],E=p[1],g=(0,u.useState)(!1),y=(0,r.default)(g,2),h=y[0],w=y[1],T=u.default.useContext(d.ThemeContext),O=void 0!==l,S=function(){w(!h),b&&E(!b)},N=function(){E(!b),h&&w(!h)},j=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:_("template",T.className)},u.default.createElement("div",{className:_("header")},n&&u.default.createElement("h2",{className:_("title")},n)),u.default.createElement("div",{className:_("content")},i&&u.default.createElement("div",{className:_("description")},i),t),u.default.createElement("div",{className:_("footer")},a?u.default.createElement("div",{className:_("button-container")},O&&u.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":h}),onClick:S,onKeyDown:function(e){return j(e,S)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(m.default,{className:_("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(s.default,{className:_("chevron")})),u.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:N,onKeyDown:function(e){return j(e,N)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(m.default,{className:_("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(s.default,{className:_("chevron")}))):null,u.default.createElement("div",null,h&&u.default.createElement("div",{className:_("css")},l),b&&u.default.createElement("div",{className:_("code")},a))))};E.propTypes=b,E.defaultProps={isExpanded:!1};t.A=E},71058:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var l=a(58168),n=a(53986),r=(a(96540),a(36665)),u=a(83784),i=["components"],o={},d="wrapper";function m(e){var t=e.components,a=(0,n.A)(e,i);return(0,r.mdx)(d,(0,l.A)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"default-slider"},"Default Slider"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a default ",(0,r.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2105/components/cerner-terra-framework-docs/slider/about"},"slider")," that uses the following required properties: label, minimumValue, maximumValue, and value."),(0,r.mdx)(u.A,{mdxType:"DefaultSlider"}))}m.isMDXComponent=!0},83784:function(e,t,a){a.d(t,{A:function(){return c}});var l=a(96540),n=a(55506),r=a(58168),u=a(53986),i=a(36665),o=["components"],d={};function m(e){var t=e.components,a=(0,u.A)(e,o);return(0,i.mdx)("wrapper",(0,r.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Slider from 'terra-slider';\n\nconst DefaultSlider = () => (\n  <Slider\n    minimumValue={0}\n    maximumValue={100}\n    label=\"Size\"\n    value={50}\n  />\n);\n\nexport default DefaultSlider;\n\n")))}m.isMDXComponent=!0;var s=a(201),c=function(e){var t=e.title,a=e.description,r=e.isExpanded;return l.createElement(s.A,{title:t||"Default Slider",description:a,example:l.createElement(n.A,null),exampleSrc:l.createElement(m,null),isExpanded:r})}},55506:function(e,t,a){var l=a(24994);t.A=void 0;var n=l(a(96540)),r=l(a(20992));t.A=function(){return n.default.createElement(r.default,{minimumValue:0,maximumValue:100,label:"Size",value:50})}},20992:function(e,t,a){var l=a(24994),n=a(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(85715)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}(a(96540)),i=l(a(5556)),o=l(a(67967)),d=l(a(23695)),m=l(a(16524)),s=a(8604),c=a(68414),f=l(a(41241));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=o.default.bind(f.default),b={label:i.default.string.isRequired,minimumValue:i.default.number.isRequired,maximumValue:i.default.number.isRequired,value:i.default.number.isRequired,isDisabled:i.default.bool,minimumLabel:i.default.string,maximumLabel:i.default.string,onChange:i.default.func,intl:i.default.shape({formatMessage:i.default.func}).isRequired},v=function(e){var t=e.isDisabled,a=e.intl,l=e.minimumValue,n=e.maximumValue,i=e.label,o=e.minimumLabel,s=e.maximumLabel,f=e.onChange,p=e.value,b=(0,u.useContext)(d.default),v=_(["slider",b.className]),x=(0,u.useRef)(),E=o||l,g=s||n,y=o&&s?a.formatMessage({id:"Terra.slider.ariaDescribedByTextWithLabels"},{minimumLabel:o,maximumLabel:s,minimumValue:l,maximumValue:n}):a.formatMessage({id:"Terra.slider.ariaDescribedByTextWithoutLabels"},{minimumValue:l,maximumValue:n}),h=(0,c.v4)(),w=(0,u.useState)(p),T=(0,r.default)(w,2),O=T[0],S=T[1];(0,u.useEffect)((function(){S(p)}),[p]);return u.default.createElement("div",{style:{"--terra-slider-progress-status":"".concat(O,"%")},className:v},u.default.createElement("span",{className:_("label"),"aria-hidden":"true"},i),u.default.createElement("span",{className:_("slider-label","slider-min-label"),"aria-hidden":"true"},E),u.default.createElement("input",{className:_("input-range"),type:"range",ref:x,"aria-label":i,"aria-describedby":h,value:O,disabled:t,min:l,max:n,onChange:function(e){S(e.currentTarget.value),f&&f(e.currentTarget.value)}}),u.default.createElement("span",{className:_("slider-label","slider-max-label"),"aria-hidden":"true"},g),u.default.createElement(m.default,{id:h,text:y}))};v.propTypes=b,v.defaultProps={isDisabled:!1};t.default=(0,s.injectIntl)(v)},89986:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},41241:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___8lFzi","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___ou4Xa",slider:"Slider-module__slider___p5WX-",label:"Slider-module__label___9ub6Z","slider-label":"Slider-module__slider-label___fdXlu","slider-min-label":"Slider-module__slider-min-label___zedNZ","slider-max-label":"Slider-module__slider-max-label___6gGpy","input-range":"Slider-module__input-range___9Lrsz"}},49558:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(96540)),n=r(a(25365));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var i=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},58168:function(e,t,a){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},l.apply(this,arguments)}a.d(t,{A:function(){return l}})},53986:function(e,t,a){function l(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,{A:function(){return l}})}}]);