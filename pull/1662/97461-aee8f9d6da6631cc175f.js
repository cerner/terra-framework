"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[97461],{76313:function(e,t,r){var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(38416)),d=a(r(10434)),i=a(r(70215)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=O(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=l?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(a,d,i):a[d]=e[d]}a.default=e,r&&r.set(e,a);return a}(r(67294)),o=a(r(45697)),s=r(25387),c=a(r(94184)),f=a(r(47166)),p=a(r(47341)),m=r(21614),b=a(r(51331)),_=a(r(29270)),g=a(r(91986)),h=a(r(91417)),y=a(r(40873)),v=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"];function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(O=function(e){return e?r:t})(e)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,l.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F=f.default.bind(y.default),w={legend:o.default.string.isRequired,name:o.default.string.isRequired,dayAttributes:o.default.object,disabled:o.default.bool,displayFormat:o.default.string,error:o.default.node,help:o.default.node,hideRequired:o.default.bool,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLegendHidden:o.default.bool,intl:o.default.shape({formatMessage:o.default.func}),legendAttributes:o.default.object,monthAttributes:o.default.object,maxWidth:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,required:o.default.bool,showOptional:o.default.bool,value:o.default.string,yearAttributes:o.default.object},D={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},E=function(e){var t=e.dayAttributes,r=e.disabled,a=e.displayFormat,n=e.error,l=e.help,o=e.hideRequired,s=e.isIncomplete,f=e.isInline,y=e.isInvalid,O=e.isLegendHidden,I=e.intl,w=e.legend,D=e.legendAttributes,E=e.monthAttributes,P=(e.maxWidth,e.name),q=e.onBlur,A=e.onChange,k=e.onFocus,N=e.required,x=e.showOptional,M=e.value,C=e.yearAttributes,W=(0,i.default)(e,v),R=(0,u.useRef)((0,m.v4)()),B=u.default.useContext(p.default),L=(0,c.default)(F("date-input-field",{"is-inline":f},B.className),W.className),H=(0,c.default)(F("legend",B.className),D.className),S="terra-date-input-field-description-help-".concat(R.current),T="terra-date-input-field-description-error-".concat(R.current),z=S;n&&y&&(z="".concat(T," ").concat(S));var Y=E&&E["aria-describedby"],Q=t&&t["aria-describedby"],U=C&&C["aria-describedby"],V=Y?"".concat(z," ").concat(Y):z,Z=Q?"".concat(z," ").concat(Q):z,G=U?"".concat(z," ").concat(U):z,J=u.default.createElement("legend",{className:F(["legend-group",{"legend-group-hidden":O}])},u.default.createElement("div",(0,d.default)({},D,{className:H}),y&&u.default.createElement("span",{className:F("error-icon")},u.default.createElement(b.default,null)),N&&(y||!o)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{"aria-hidden":"true",className:F("required")},"*"),u.default.createElement(_.default,{text:I.formatMessage({id:"Terra.date.input.required"})})),w,N&&!y&&o&&u.default.createElement("span",{className:F("required-hidden")},"*"),x&&!N&&u.default.createElement("span",{className:F("optional")},I.formatMessage({id:"Terra.date.input.optional"})),!y&&u.default.createElement("span",{className:F("error-icon-hidden")}))),K=h.default.getDateFormat({displayFormat:a,intl:I});return u.default.createElement("fieldset",(0,d.default)({},W,{className:L}),J,l&&u.default.createElement(_.default,{text:l}),u.default.createElement(g.default,{a11yLabel:w,dayAttributes:j(j({},t),{"aria-describedby":Z}),disabled:r,displayFormat:a,isA11yControlled:!0,isIncomplete:s,isInvalid:y,monthAttributes:j(j({},E),{"aria-describedby":V}),name:P,onBlur:q,onChange:A,onFocus:k,required:N,useExternalFormatMask:!0,value:M,yearAttributes:j(j({},C),{"aria-describedby":G})}),y&&n&&u.default.createElement("div",{id:T,className:F("error-text")},n),u.default.createElement("div",{"aria-hidden":!0,className:F("help-text")},l?"".concat(K," ").concat(l):K))};E.propTypes=w,E.defaultProps=D;var P=(0,s.injectIntl)(E);t.default=P},25048:function(e,t,r){var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=l?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(a,d,i):a[d]=e[d]}a.default=e,r&&r.set(e,a);return a}(r(67294)),i=a(r(76313));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}var o=function(){var e=(0,d.useState)(""),t=(0,l.default)(e,2),r=t[0],a=t[1],n=(0,d.useState)(!1),u=(0,l.default)(n,2),o=u[0],s=u[1];return d.default.createElement("div",null,d.default.createElement(i.default,{legend:"Legend text",name:"date-input",value:r,onChange:function(e,t){return a(t)},displayFormat:"day-month-year",error:"Error message",help:"Help message",isInvalid:o}),d.default.createElement("p",null,"DateInputField Value: ".concat(r)),d.default.createElement("button",{type:"button",onClick:function(){return s((function(e){return!e}))}},"Toggle isInvalid"))};t.default=o},40873:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}}}]);