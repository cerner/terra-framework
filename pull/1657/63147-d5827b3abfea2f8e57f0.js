"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[63147],{76313:function(e,t,a){var n=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(38416)),d=n(a(10434)),u=n(a(70215)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=O(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var u=l?Object.getOwnPropertyDescriptor(e,d):null;u&&(u.get||u.set)?Object.defineProperty(n,d,u):n[d]=e[d]}n.default=e,a&&a.set(e,n);return n}(a(67294)),o=n(a(45697)),f=a(25387),s=n(a(94184)),c=n(a(47166)),p=n(a(47341)),m=n(a(71171)),g=n(a(51331)),b=n(a(29270)),h=n(a(91986)),_=n(a(91417)),y=n(a(40873)),v=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"];function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(O=function(e){return e?a:t})(e)}function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){(0,l.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var w=c.default.bind(y.default),j={legend:o.default.string.isRequired,name:o.default.string.isRequired,dayAttributes:o.default.object,disabled:o.default.bool,displayFormat:o.default.string,error:o.default.node,help:o.default.node,hideRequired:o.default.bool,isIncomplete:o.default.bool,isInline:o.default.bool,isInvalid:o.default.bool,isLegendHidden:o.default.bool,intl:o.default.shape({formatMessage:o.default.func}),legendAttributes:o.default.object,monthAttributes:o.default.object,maxWidth:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,required:o.default.bool,showOptional:o.default.bool,value:o.default.string,yearAttributes:o.default.object},F={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},q=function(e){var t=e.dayAttributes,a=e.disabled,n=e.displayFormat,r=e.error,l=e.help,o=e.hideRequired,f=e.isIncomplete,c=e.isInline,y=e.isInvalid,O=e.isLegendHidden,E=e.intl,j=e.legend,F=e.legendAttributes,q=e.monthAttributes,D=(e.maxWidth,e.name),x=e.onBlur,P=e.onChange,C=e.onFocus,A=e.required,M=e.showOptional,k=e.value,N=e.yearAttributes,T=(0,u.default)(e,v),S=(0,i.useRef)((0,m.default)()),L=i.default.useContext(p.default),R=(0,s.default)(w("date-input-field",{"is-inline":c},L.className),T.className),W=(0,s.default)(w("legend",L.className),F.className),H="terra-date-input-field-description-help-".concat(S.current),B="terra-date-input-field-description-error-".concat(S.current),U=H;r&&y&&(U="".concat(B," ").concat(H));var z=q&&q["aria-describedby"],Y=t&&t["aria-describedby"],Q=N&&N["aria-describedby"],Z=z?"".concat(U," ").concat(z):U,G=Y?"".concat(U," ").concat(Y):U,J=Q?"".concat(U," ").concat(Q):U,K=i.default.createElement("legend",{className:w(["legend-group",{"legend-group-hidden":O}])},i.default.createElement("div",(0,d.default)({},F,{className:W}),y&&i.default.createElement("span",{className:w("error-icon")},i.default.createElement(g.default,null)),A&&(y||!o)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:w("required")},"*"),i.default.createElement(b.default,{text:E.formatMessage({id:"Terra.date.input.required"})})),j,A&&!y&&o&&i.default.createElement("span",{className:w("required-hidden")},"*"),M&&!A&&i.default.createElement("span",{className:w("optional")},E.formatMessage({id:"Terra.date.input.optional"})),!y&&i.default.createElement("span",{className:w("error-icon-hidden")}))),V=_.default.getDateFormat({displayFormat:n,intl:E});return i.default.createElement("fieldset",(0,d.default)({},T,{className:R}),K,l&&i.default.createElement(b.default,{text:l}),i.default.createElement(h.default,{a11yLabel:j,dayAttributes:I(I({},t),{"aria-describedby":G}),disabled:a,displayFormat:n,isA11yControlled:!0,isIncomplete:f,isInvalid:y,monthAttributes:I(I({},q),{"aria-describedby":Z}),name:D,onBlur:x,onChange:P,onFocus:C,required:A,useExternalFormatMask:!0,value:k,yearAttributes:I(I({},N),{"aria-describedby":J})}),y&&r&&i.default.createElement("div",{id:B,className:w("error-text")},r),i.default.createElement("div",{"aria-hidden":!0,className:w("help-text")},l?"".concat(V," ").concat(l):V))};q.propTypes=j,q.defaultProps=F;var D=(0,f.injectIntl)(q);t.default=D},65517:function(e,t,a){var n=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var u=l?Object.getOwnPropertyDescriptor(e,d):null;u&&(u.get||u.set)?Object.defineProperty(n,d,u):n[d]=e[d]}n.default=e,a&&a.set(e,n);return n}(a(67294)),u=n(a(76313)),i=n(a(15185)),o=n(a(11817)),f=n(a(58312)),s=n(a(41577));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}var p=function(){var e=(0,d.useState)(""),t=(0,l.default)(e,2),a=t[0],n=t[1],r=(0,d.useState)(!1),c=(0,l.default)(r,2),p=c[0],m=c[1],g=(0,d.useState)(!1),b=(0,l.default)(g,2),h=b[0],_=b[1],y=(0,d.useState)(!1),v=(0,l.default)(y,2),O=v[0],E=v[1],I=(0,d.useState)("optional"),w=(0,l.default)(I,2),j=w[0],F=w[1],q=(0,d.useState)("month-day-year"),D=(0,l.default)(q,2),x=D[0],P=D[1],C=(0,d.useState)("Helpful text."),A=(0,l.default)(C,2),M=A[0],k=A[1],N=(0,d.useState)("Something went wrong."),T=(0,l.default)(N,2),S=T[0],L=T[1],R=(0,d.useState)("Date of birth"),W=(0,l.default)(R,2),H=W[0],B=W[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement("h1",null,"Component Under Test"),d.default.createElement(u.default,{id:"componentUnderTest",legend:H,name:"date-of-birth-field",value:a,onChange:function(e,t){return n(t)},error:S,help:M,isInvalid:h,isLegendHidden:O,disabled:p,displayFormat:x,isIncomplete:j.includes("incomplete"),required:j.includes("required"),showOptional:j.includes("showOptional"),hideRequired:j.includes("hideRequired")}),d.default.createElement("div",null,d.default.createElement("h1",null,"Test Settings"),d.default.createElement(f.default,{legend:"Props"},d.default.createElement(i.default,{id:"disabled",labelText:"disabled",onChange:function(){return m((function(e){return!e}))}}),d.default.createElement(i.default,{id:"isInvalid",labelText:"isInvalid",onChange:function(){return _((function(e){return!e}))}}),d.default.createElement(i.default,{id:"isLegendHidden",labelText:"isLegendHidden",onChange:function(){return E((function(e){return!e}))}})),d.default.createElement(o.default,{type:"text",label:"Legend:",inputId:"legend",value:H,onChange:function(e){return B(e.currentTarget.value)}}),d.default.createElement(o.default,{type:"text",label:"Error Message:",inputId:"error",value:S,placeholder:"Message to show when invalid",onChange:function(e){return L(e.currentTarget.value)}}),d.default.createElement(o.default,{type:"text",label:"Help Message:",inputId:"help",value:M,placeholder:"Message to provide more detailed help",onChange:function(e){return k(e.currentTarget.value)}}),d.default.createElement(s.default,{fieldLegend:"Mutually Exclusive",name:"mutex",options:["optional","optional-showOptional","required","required-hideRequired","required-incomplete","required-incomplete-hideRequired"],onChange:function(e){return F(e.currentTarget.value)}}),d.default.createElement(s.default,{fieldLegend:"Format",name:"format",options:["month-day-year","day-month-year"],onChange:function(e){return P(e.currentTarget.value)}})))};t.default=p},41577:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),l=n(a(79029)),d=n(a(56931)),u=n(a(45697)),i={fieldLegend:u.default.string,name:u.default.string,options:u.default.array,onChange:u.default.func};function o(e){return r.default.createElement(d.default,{legend:e.fieldLegend},e.options.map((function(t,a){return r.default.createElement(l.default,{key:t,name:e.name,id:t,defaultChecked:0===a,labelText:t,value:t,onChange:e.onChange})})))}o.propTypes=i;var f=o;t.default=f},40873:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}}}]);