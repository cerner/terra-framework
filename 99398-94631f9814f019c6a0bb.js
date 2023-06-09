"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99398],{76313:function(e,t,a){var r=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(38416)),d=r(a(10434)),i=r(a(70215)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=O(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=l?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(r,d,i):r[d]=e[d]}r.default=e,a&&a.set(e,r);return r}(a(67294)),o=r(a(45697)),s=a(25387),c=r(a(94184)),f=r(a(47166)),p=r(a(47341)),m=a(23234),b=r(a(51331)),_=r(a(29270)),g=r(a(91986)),h=r(a(91417)),y=r(a(40873)),v=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"];function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(O=function(e){return e?a:t})(e)}function I(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function j(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?I(Object(a),!0).forEach((function(t){(0,l.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):I(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var F=f.default.bind(y.default),E={legend:o.default.string.isRequired,name:o.default.string.isRequired,dayAttributes:o.default.object,disabled:o.default.bool,displayFormat:o.default.string,error:o.default.node,help:o.default.node,hideRequired:o.default.bool,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLegendHidden:o.default.bool,intl:o.default.shape({formatMessage:o.default.func}),legendAttributes:o.default.object,monthAttributes:o.default.object,maxWidth:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,required:o.default.bool,showOptional:o.default.bool,value:o.default.string,yearAttributes:o.default.object},w={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},D=function(e){var t=e.dayAttributes,a=e.disabled,r=e.displayFormat,n=e.error,l=e.help,o=e.hideRequired,s=e.isIncomplete,f=e.isInline,y=e.isInvalid,O=e.isLegendHidden,I=e.intl,E=e.legend,w=e.legendAttributes,D=e.monthAttributes,P=(e.maxWidth,e.name),q=e.onBlur,A=e.onChange,x=e.onFocus,N=e.required,k=e.showOptional,M=e.value,C=e.yearAttributes,W=(0,i.default)(e,v),L=(0,u.useRef)((0,m.v4)()),H=u.default.useContext(p.default),R=(0,c.default)(F("date-input-field",{"is-inline":f},H.className),W.className),B=(0,c.default)(F("legend",H.className),w.className),S="terra-date-input-field-description-help-".concat(L.current),V="terra-date-input-field-description-error-".concat(L.current),z=S;n&&y&&(z="".concat(V," ").concat(S));var T=D&&D["aria-describedby"],Y=t&&t["aria-describedby"],Q=C&&C["aria-describedby"],U=T?"".concat(z," ").concat(T):z,Z=Y?"".concat(z," ").concat(Y):z,G=Q?"".concat(z," ").concat(Q):z,J=u.default.createElement("legend",{className:F(["legend-group",{"legend-group-hidden":O}])},u.default.createElement("div",(0,d.default)({},w,{className:B}),y&&u.default.createElement("span",{className:F("error-icon")},u.default.createElement(b.default,null)),N&&(y||!o)&&u.default.createElement(u.default.Fragment,null,u.default.createElement("div",{"aria-hidden":"true",className:F("required")},"*"),u.default.createElement(_.default,{text:I.formatMessage({id:"Terra.date.input.required"})})),E,N&&!y&&o&&u.default.createElement("span",{className:F("required-hidden")},"*"),k&&!N&&u.default.createElement("span",{className:F("optional")},I.formatMessage({id:"Terra.date.input.optional"})),!y&&u.default.createElement("span",{className:F("error-icon-hidden")}))),K=h.default.getDateFormat({displayFormat:r,intl:I});return u.default.createElement("fieldset",(0,d.default)({},W,{className:R}),J,l&&u.default.createElement(_.default,{text:l}),u.default.createElement(g.default,{a11yLabel:E,dayAttributes:j(j({},t),{"aria-describedby":Z}),disabled:a,displayFormat:r,isA11yControlled:!0,isIncomplete:s,isInvalid:y,monthAttributes:j(j({},D),{"aria-describedby":U}),name:P,onBlur:q,onChange:A,onFocus:x,required:N,useExternalFormatMask:!0,value:M,yearAttributes:j(j({},C),{"aria-describedby":G})}),y&&n&&u.default.createElement("div",{id:V,className:F("error-text")},n),u.default.createElement("div",{"aria-hidden":!0,className:F("help-text")},l?"".concat(K," ").concat(l):K))};D.propTypes=E,D.defaultProps=w;var P=(0,s.injectIntl)(D);t.default=P},37354:function(e,t,a){var r=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=u(t);if(a&&a.has(e))return a.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=l?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(r,d,i):r[d]=e[d]}r.default=e,a&&a.set(e,r);return r}(a(67294)),i=r(a(76313));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(u=function(e){return e?a:t})(e)}var o=function(){var e=(0,d.useState)(""),t=(0,l.default)(e,2),a=t[0],r=t[1];return d.default.createElement("div",null,d.default.createElement(i.default,{legend:"Legend text",name:"date-input",value:a,onChange:function(e,t){return r(t)},error:"Error message",help:"Help message",disabled:!0}),d.default.createElement("p",null,"DateInputField Value: ".concat(a)),d.default.createElement(i.default,{legend:"Legend text",name:"date-input",value:a,onChange:function(e,t){return r(t)},error:"Error message",help:"Help message",isInvalid:!0,disabled:!0}),d.default.createElement("p",null,"DateInputField Value: ".concat(a)),d.default.createElement(i.default,{legend:"Legend text",name:"date-input",value:a,onChange:function(e,t){return r(t)},error:"Error message",help:"Help message",isIncomplete:!0,required:!0,disabled:!0}),d.default.createElement("p",null,"DateInputField Value: ".concat(a)))};t.default=o},40873:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}}}]);