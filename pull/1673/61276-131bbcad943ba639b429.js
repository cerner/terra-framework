"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[61276],{76313:function(e,t,r){var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(38416)),l=a(r(10434)),d=a(r(70215)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=O(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=i?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(a,l,d):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(67294)),o=a(r(45697)),s=r(25387),c=a(r(94184)),f=a(r(47166)),p=a(r(47341)),m=r(21614),b=a(r(51331)),_=a(r(29270)),g=a(r(91986)),y=a(r(91417)),h=a(r(40873)),v=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"];function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(O=function(e){return e?r:t})(e)}function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=f.default.bind(h.default),F={legend:o.default.string.isRequired,name:o.default.string.isRequired,dayAttributes:o.default.object,disabled:o.default.bool,displayFormat:o.default.string,error:o.default.node,help:o.default.node,hideRequired:o.default.bool,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLegendHidden:o.default.bool,intl:o.default.shape({formatMessage:o.default.func}),legendAttributes:o.default.object,monthAttributes:o.default.object,maxWidth:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,required:o.default.bool,showOptional:o.default.bool,value:o.default.string,yearAttributes:o.default.object},w={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},E=function(e){var t=e.dayAttributes,r=e.disabled,a=e.displayFormat,n=e.error,i=e.help,o=e.hideRequired,s=e.isIncomplete,f=e.isInline,h=e.isInvalid,O=e.isLegendHidden,I=e.intl,F=e.legend,w=e.legendAttributes,E=e.monthAttributes,P=(e.maxWidth,e.name),A=e.onBlur,q=e.onChange,N=e.onFocus,k=e.required,x=e.showOptional,M=e.value,C=e.yearAttributes,W=(0,d.default)(e,v),R=(0,u.useRef)((0,m.v4)()),B=u.default.useContext(p.default),H=(0,c.default)(D("date-input-field",{"is-inline":f},B.className),W.className),L=(0,c.default)(D("legend",B.className),w.className),S="terra-date-input-field-description-help-".concat(R.current),z="terra-date-input-field-description-error-".concat(R.current),T=S;n&&h&&(T="".concat(z," ").concat(S));var Y=E&&E["aria-describedby"],Q=t&&t["aria-describedby"],U=C&&C["aria-describedby"],Z=Y?"".concat(T," ").concat(Y):T,G=Q?"".concat(T," ").concat(Q):T,J=U?"".concat(T," ").concat(U):T,K=u.default.createElement("legend",{className:D(["legend-group",{"legend-group-hidden":O}])},u.default.createElement("div",(0,l.default)({},w,{className:L}),h&&u.default.createElement("span",{className:D("error-icon")},u.default.createElement(b.default,null)),k&&(h||!o)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{"aria-hidden":"true",className:D("required")},"*"),u.default.createElement(_.default,{text:I.formatMessage({id:"Terra.date.input.required"})})),F,k&&!h&&o&&u.default.createElement("span",{className:D("required-hidden")},"*"),x&&!k&&u.default.createElement("span",{className:D("optional")},I.formatMessage({id:"Terra.date.input.optional"})),!h&&u.default.createElement("span",{className:D("error-icon-hidden")}))),V=y.default.getDateFormat({displayFormat:a,intl:I});return u.default.createElement("fieldset",(0,l.default)({},W,{className:H}),K,i&&u.default.createElement(_.default,{text:i}),u.default.createElement(g.default,{a11yLabel:F,dayAttributes:j(j({},t),{"aria-describedby":G}),disabled:r,displayFormat:a,isA11yControlled:!0,isIncomplete:s,isInvalid:h,monthAttributes:j(j({},E),{"aria-describedby":Z}),name:P,onBlur:A,onChange:q,onFocus:N,required:k,useExternalFormatMask:!0,value:M,yearAttributes:j(j({},C),{"aria-describedby":J})}),h&&n&&u.default.createElement("div",{id:z,className:D("error-text")},n),u.default.createElement("div",{"aria-hidden":!0,className:D("help-text")},i?"".concat(V," ").concat(i):V))};E.propTypes=F,E.defaultProps=w;var P=(0,s.injectIntl)(E);t.default=P},98739:function(e,t,r){var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(r(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=i?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(a,l,d):a[l]=e[l]}a.default=e,r&&r.set(e,a);return a}(r(67294)),d=a(r(76313));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}var o=function(){var e=(0,l.useState)(""),t=(0,i.default)(e,2),r=t[0],a=t[1];return l.default.createElement("div",null,l.default.createElement("div",{id:"primary-description"},"Description text provided by user for Primary Date Input"),l.default.createElement(d.default,{legend:"Primary Date Input",name:"date-input",value:r,onChange:function(e,t){return a(t)},error:"Error message.",help:"Help message.",dayAttributes:{"aria-describedby":"primary-description"},monthAttributes:{"aria-describedby":"primary-description"},yearAttributes:{"aria-describedby":"primary-description"}}),l.default.createElement(d.default,{legend:"Secondary Date Input",name:"date-input",value:r,onChange:function(e,t){return a(t)},error:"Error message.",help:"Help message.",isInvalid:!0}))};t.default=o},40873:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}}}]);