"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[59361],{59361:function(e,a,l){var t=l(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(l(67294)),i=t(l(19270));a.default=function(){return r.default.createElement(i.default,{isDisabled:!0,minimumValue:0,maximumValue:100,label:"Label",value:50})}},19270:function(e,a,l){var t=l(64836),r=l(18698);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=t(l(27424)),u=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=_(a);if(l&&l.has(e))return l.get(e);var t={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var n=i?Object.getOwnPropertyDescriptor(e,u):null;n&&(n.get||n.set)?Object.defineProperty(t,u,n):t[u]=e[u]}return t.default=e,l&&l.set(e,t),t}(l(67294)),n=t(l(45697)),d=t(l(47166)),m=t(l(47341)),s=t(l(29270)),f=l(25387),o=l(55877),c=t(l(86495));function _(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,l=new WeakMap;return(_=function(e){return e?l:a})(e)}var b=d.default.bind(c.default),p={label:n.default.string.isRequired,minimumValue:n.default.number.isRequired,maximumValue:n.default.number.isRequired,value:n.default.number.isRequired,isDisabled:n.default.bool,minimumLabel:n.default.string,maximumLabel:n.default.string,onChange:n.default.func,intl:n.default.shape({formatMessage:n.default.func,locale:n.default.string})},g={isDisabled:!1,onChange:void 0},v=function(e){var a=e.isDisabled,l=e.intl,t=e.minimumValue,r=e.maximumValue,n=e.label,d=e.minimumLabel,f=e.maximumLabel,c=(0,u.useContext)(m.default),_=b(["slider",c.className]),p=(0,u.useRef)(),g=d||t,v=f||r,h=d&&f?l.formatMessage({id:"Terra.slider.ariaDescribedByTextWithLabels"},{minimumLabel:d,maximumLabel:f,minimumValue:t,maximumValue:r}):l.formatMessage({id:"Terra.slider.ariaDescribedByTextWithoutLabels"},{minimumValue:t,maximumValue:r}),y=(0,o.v4)(),x=(0,u.useState)(e.value),w=(0,i.default)(x,2),L=w[0],O=w[1];return u.default.createElement("div",{style:{"--terra-slider-progress-status":"".concat(L,"%")},className:_},u.default.createElement("span",{className:b("label"),"aria-hidden":"true"},n),u.default.createElement("span",{className:b("slider-label","slider-min-label"),"aria-hidden":"true"},g),u.default.createElement("input",{className:b("input-range"),type:"range",ref:p,"aria-label":n,"aria-describedby":y,value:L,disabled:a,min:t,max:r,onChange:function(a){O(a.currentTarget.value),e.onChange&&e.onChange(a)}}),u.default.createElement("span",{className:b("slider-label","slider-max-label"),"aria-hidden":"true"},v),u.default.createElement(s.default,{id:y,text:h}))};v.propTypes=p,v.defaultProps=g;a.default=(0,f.injectIntl)(v)},86495:function(e,a,l){l.r(a),a.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___8lFzi","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___ou4Xa",slider:"Slider-module__slider___p5WX-",label:"Slider-module__label___9ub6Z","slider-label":"Slider-module__slider-label___fdXlu","slider-min-label":"Slider-module__slider-min-label___zedNZ","slider-max-label":"Slider-module__slider-max-label___6gGpy","input-range":"Slider-module__input-range___9Lrsz"}}}]);