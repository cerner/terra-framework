"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[37913,82032],{49271:function(e,t,a){var l=a(64836),n=a(18698);t.Z=void 0;var r=l(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}l.default=e,a&&a.set(e,l);return l}(a(67294)),i=l(a(45697)),o=l(a(19845)),d=a(21538),m=l(a(33864)),s=l(a(23399)),c=a(51051),f=l(a(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=o.default.bind(f.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},E=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,i=e.description,o=e.isExpanded,f=(0,u.useState)(o),p=(0,r.default)(f,2),b=p[0],E=p[1],y=(0,u.useState)(!1),g=(0,r.default)(y,2),h=g[0],w=g[1],T=u.default.useContext(d.ThemeContext),O=void 0!==l,S=function(){w(!h),b&&E(!b)},N=function(){E(!b),h&&w(!h)},D=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:_("template",T.className)},u.default.createElement("div",{className:_("header")},n&&u.default.createElement("h2",{className:_("title")},n)),u.default.createElement("div",{className:_("content")},i&&u.default.createElement("div",{className:_("description")},i),t),u.default.createElement("div",{className:_("footer")},a?u.default.createElement("div",{className:_("button-container")},O&&u.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":h}),onClick:S,onKeyDown:function(e){return D(e,S)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(m.default,{className:_("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(s.default,{className:_("chevron")})),u.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:N,onKeyDown:function(e){return D(e,N)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(m.default,{className:_("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(s.default,{className:_("chevron")}))):null,u.default.createElement("div",null,h&&u.default.createElement("div",{className:_("css")},l),b&&u.default.createElement("div",{className:_("code")},a))))};E.propTypes=b,E.defaultProps={isExpanded:!1};var y=E;t.Z=y},37913:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(87462),n=a(44925),r=a(67294),u=a(81254),i=a(6922),o=["components"],d={};function m(e){var t=e.components,a=(0,n.Z)(e,o);return(0,u.mdx)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Slider from 'terra-slider';\n\nconst DisabledSlider = () => (\n  <Slider\n    isDisabled\n    minimumValue={0}\n    maximumValue={100}\n    label=\"Size\"\n    value={50}\n  />\n);\n\nexport default DisabledSlider;\n\n")))}m.isMDXComponent=!0;var s=a(49271),c=function(e){var t=e.title,a=e.description,l=e.isExpanded;return r.createElement(s.Z,{title:t||"Disabled Slider",description:a,example:r.createElement(i.Z,null),exampleSrc:r.createElement(m,null),isExpanded:l})},f=["components"],p={},_="wrapper";function b(e){var t=e.components,a=(0,n.Z)(e,f);return(0,u.mdx)(_,(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,u.mdx)("h1",{id:"disabled-slider"},"Disabled Slider"),(0,u.mdx)("h3",{id:"description"},"Description"),(0,u.mdx)("p",null,"This example demonstrates a disabled ",(0,u.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1997/components/cerner-terra-framework-docs/slider/about"},"slider")," that uses the isDisabled property."),(0,u.mdx)(c,{mdxType:"DisabledSlider"}))}b.isMDXComponent=!0},6922:function(e,t,a){var l=a(64836);t.Z=void 0;var n=l(a(67294)),r=l(a(19270));t.Z=function(){return n.default.createElement(r.default,{isDisabled:!0,minimumValue:0,maximumValue:100,label:"Size",value:50})}},19270:function(e,t,a){var l=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}(a(67294)),i=l(a(45697)),o=l(a(19845)),d=l(a(47341)),m=l(a(29270)),s=a(25387),c=a(55877),f=l(a(86495));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=o.default.bind(f.default),b={label:i.default.string.isRequired,minimumValue:i.default.number.isRequired,maximumValue:i.default.number.isRequired,value:i.default.number.isRequired,isDisabled:i.default.bool,minimumLabel:i.default.string,maximumLabel:i.default.string,onChange:i.default.func,intl:i.default.shape({formatMessage:i.default.func}).isRequired},v=function(e){var t=e.isDisabled,a=e.intl,l=e.minimumValue,n=e.maximumValue,i=e.label,o=e.minimumLabel,s=e.maximumLabel,f=e.onChange,p=e.value,b=(0,u.useContext)(d.default),v=_(["slider",b.className]),x=(0,u.useRef)(),E=o||l,y=s||n,g=o&&s?a.formatMessage({id:"Terra.slider.ariaDescribedByTextWithLabels"},{minimumLabel:o,maximumLabel:s,minimumValue:l,maximumValue:n}):a.formatMessage({id:"Terra.slider.ariaDescribedByTextWithoutLabels"},{minimumValue:l,maximumValue:n}),h=(0,c.v4)(),w=(0,u.useState)(p),T=(0,r.default)(w,2),O=T[0],S=T[1];(0,u.useEffect)((function(){S(p)}),[p]);return u.default.createElement("div",{style:{"--terra-slider-progress-status":"".concat(O,"%")},className:v},u.default.createElement("span",{className:_("label"),"aria-hidden":"true"},i),u.default.createElement("span",{className:_("slider-label","slider-min-label"),"aria-hidden":"true"},E),u.default.createElement("input",{className:_("input-range"),type:"range",ref:x,"aria-label":i,"aria-describedby":h,value:O,disabled:t,min:l,max:n,onChange:function(e){S(e.currentTarget.value),f&&f(e.currentTarget.value)}}),u.default.createElement("span",{className:_("slider-label","slider-max-label"),"aria-hidden":"true"},y),u.default.createElement(m.default,{id:h,text:g}))};v.propTypes=b,v.defaultProps={isDisabled:!1};t.default=(0,s.injectIntl)(v)},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},86495:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___8lFzi","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___ou4Xa",slider:"Slider-module__slider___p5WX-",label:"Slider-module__label___9ub6Z","slider-label":"Slider-module__slider-label___fdXlu","slider-min-label":"Slider-module__slider-min-label___zedNZ","slider-max-label":"Slider-module__slider-max-label___6gGpy","input-range":"Slider-module__input-range___9Lrsz"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(67294)),n=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var i=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},87462:function(e,t,a){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},l.apply(this,arguments)}a.d(t,{Z:function(){return l}})},44925:function(e,t,a){function l(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,{Z:function(){return l}})}}]);