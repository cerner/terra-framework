"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[29134],{29134:function(e,a,l){var t=l(64836),r=l(18698);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=t(l(27424)),i=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=d(a);if(l&&l.has(e))return l.get(e);var t={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var n=u?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,l&&l.set(e,t),t}(l(67294)),n=t(l(19270));function d(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,l=new WeakMap;return(d=function(e){return e?l:a})(e)}a.default=function(){var e=(0,i.useState)("20"),a=(0,u.default)(e,2),l=a[0],t=a[1],r="Slider value is: ".concat(l);return i.default.createElement("div",null,i.default.createElement(n.default,{minimumValue:0,maximumValue:100,label:"Zoom",value:l,onChange:function(e){t(e)}}),i.default.createElement("p",null,r))}},19270:function(e,a,l){var t=l(64836),r=l(18698);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=t(l(27424)),i=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=_(a);if(l&&l.has(e))return l.get(e);var t={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var n=u?Object.getOwnPropertyDescriptor(e,i):null;n&&(n.get||n.set)?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,l&&l.set(e,t),t}(l(67294)),n=t(l(45697)),d=t(l(19845)),s=t(l(47341)),f=t(l(29270)),o=l(25387),m=l(55877),c=t(l(86495));function _(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,l=new WeakMap;return(_=function(e){return e?l:a})(e)}var b=d.default.bind(c.default),p={label:n.default.string.isRequired,minimumValue:n.default.number.isRequired,maximumValue:n.default.number.isRequired,value:n.default.number.isRequired,isDisabled:n.default.bool,minimumLabel:n.default.string,maximumLabel:n.default.string,onChange:n.default.func,intl:n.default.shape({formatMessage:n.default.func}).isRequired},v=function(e){var a=e.isDisabled,l=e.intl,t=e.minimumValue,r=e.maximumValue,n=e.label,d=e.minimumLabel,o=e.maximumLabel,c=e.onChange,_=e.value,p=(0,i.useContext)(s.default),v=b(["slider",p.className]),g=(0,i.useRef)(),y=d||t,h=o||r,O=d&&o?l.formatMessage({id:"Terra.slider.ariaDescribedByTextWithLabels"},{minimumLabel:d,maximumLabel:o,minimumValue:t,maximumValue:r}):l.formatMessage({id:"Terra.slider.ariaDescribedByTextWithoutLabels"},{minimumValue:t,maximumValue:r}),w=(0,m.v4)(),x=(0,i.useState)(_),j=(0,u.default)(x,2),M=j[0],P=j[1];(0,i.useEffect)((function(){P(_)}),[_]);return i.default.createElement("div",{style:{"--terra-slider-progress-status":"".concat(M,"%")},className:v},i.default.createElement("span",{className:b("label"),"aria-hidden":"true"},n),i.default.createElement("span",{className:b("slider-label","slider-min-label"),"aria-hidden":"true"},y),i.default.createElement("input",{className:b("input-range"),type:"range",ref:g,"aria-label":n,"aria-describedby":w,value:M,disabled:a,min:t,max:r,onChange:function(e){P(e.currentTarget.value),c&&c(e.currentTarget.value)}}),i.default.createElement("span",{className:b("slider-label","slider-max-label"),"aria-hidden":"true"},h),i.default.createElement(f.default,{id:w,text:O}))};v.propTypes=p,v.defaultProps={isDisabled:!1};a.default=(0,o.injectIntl)(v)},86495:function(e,a,l){l.r(a),a.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___8lFzi","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___ou4Xa",slider:"Slider-module__slider___p5WX-",label:"Slider-module__label___9ub6Z","slider-label":"Slider-module__slider-label___fdXlu","slider-min-label":"Slider-module__slider-min-label___zedNZ","slider-max-label":"Slider-module__slider-max-label___6gGpy","input-range":"Slider-module__input-range___9Lrsz"}}}]);