"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[59361],{59361:function(e,a,l){var t=l(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=t(l(67294)),u=t(l(19270));a.default=function(){return r.default.createElement(u.default,{isDisabled:!0,minimumValue:0,maximumValue:100,labelName:"Label",value:"50",defaultValue:50})}},19270:function(e,a,l){var t=l(64836),r=l(18698);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var u=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=m(a);if(l&&l.has(e))return l.get(e);var t={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var i=u?Object.getOwnPropertyDescriptor(e,n):null;i&&(i.get||i.set)?Object.defineProperty(t,n,i):t[n]=e[n]}t.default=e,l&&l.set(e,t);return t}(l(67294)),n=t(l(45697)),i=t(l(47166)),d=t(l(47341)),s=t(l(86495));function m(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:a})(e)}var o=i.default.bind(s.default),f={labelName:n.default.string.isRequired,minimumValue:n.default.number.isRequired,maximumValue:n.default.number.isRequired,defaultValue:n.default.number.isRequired,isDisabled:n.default.bool,minimumLabel:n.default.string,maximumLabel:n.default.string,onChange:n.default.func},c=function(e){var a=e.isDisabled,l=e.minimumValue,t=e.maximumValue,r=e.defaultValue,n=e.labelName,i=e.minimumLabel,s=e.maximumLabel,m=e.onChange,f=(0,u.useRef)();(0,u.useEffect)((function(){f.current.style.setProperty("--terra-slider-progress-status","".concat(f.current.value,"%"))}),[]);var c=u.default.useContext(d.default),b=o(["slider",c.className]),_=i||l,p=s||t;return u.default.createElement("div",{className:b},u.default.createElement("label",{className:o("label"),id:"sliderLabel"},n),u.default.createElement("span",{className:o("min-label")},_),u.default.createElement("input",{className:o("input-range"),type:"range",ref:f,"aria-labelledby":"sliderLabel","aria-valuemin":l,"aria-valuemax":t,"aria-valuenow":r,defaultValue:r,disabled:a,min:l,max:t,onChange:function(e){e.currentTarget.style.setProperty("--terra-slider-progress-status","".concat(e.currentTarget.value,"%")),e.currentTarget.setAttribute("aria-valuenow","".concat(e.currentTarget.value)),m&&m(e)}}),u.default.createElement("span",{className:o("max-label")},p))};c.propTypes=f,c.defaultProps={isDisabled:!1};a.default=c},86495:function(e,a,l){l.r(a),a.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___8lFzi","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___ou4Xa",slider:"Slider-module__slider___p5WX-",label:"Slider-module__label___9ub6Z","min-label":"Slider-module__min-label___Z5RAB","max-label":"Slider-module__max-label___JESok","input-range":"Slider-module__input-range___9Lrsz"}}}]);