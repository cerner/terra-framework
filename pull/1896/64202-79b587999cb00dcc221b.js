"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[64202],{76279:function(e,t,a){var n=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=u?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(n,l,d):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}(a(67294)),d=n(a(91986)),f=n(a(15185)),i=n(a(11817)),o=n(a(58312)),c=n(a(41577));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}t.default=function(){var e=(0,l.useState)(""),t=(0,u.default)(e,2),a=t[0],n=t[1],r=(0,l.useState)(!1),s=(0,u.default)(r,2),p=s[0],m=s[1],g=(0,l.useState)(!1),v=(0,u.default)(g,2),y=v[0],h=v[1],b=(0,l.useState)("optional"),E=(0,u.default)(b,2),C=E[0],_=E[1],k=(0,l.useState)("month-day-year"),O=(0,u.default)(k,2),w=O[0],T=O[1],j=(0,l.useState)("Anniversary"),P=(0,u.default)(j,2),L=P[0],M=P[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement("h1",{"aria-hidden":!0},"Component Under Test"),l.default.createElement(d.default,{a11yLabel:L,name:"date-of-birth",value:a,onChange:function(e,t){return n(t)},isInvalid:y,displayFormat:w,disabled:p,isIncomplete:C.includes("incomplete"),required:C.includes("required")}),l.default.createElement("div",{"aria-hidden":"true"},l.default.createElement("h1",null,"Test Settings"),l.default.createElement(o.default,{legend:"Props"},l.default.createElement(f.default,{id:"disabled",labelText:"disabled",onChange:function(){return m((function(e){return!e}))}}),l.default.createElement(f.default,{id:"isInvalid",labelText:"isInvalid",onChange:function(){return h((function(e){return!e}))}})),l.default.createElement(i.default,{type:"text",label:"A11YLabel:",inputId:"a11yLabel",value:L,onChange:function(e){return M(e.currentTarget.value)}}),l.default.createElement(c.default,{fieldLegend:"Mutually Exclusive",name:"mutex",options:["optional","required","required-incomplete"],onChange:function(e){return _(e.currentTarget.value)}}),l.default.createElement(c.default,{fieldLegend:"Format",name:"format",options:["month-day-year","day-month-year"],onChange:function(e){return T(e.currentTarget.value)}})))}},41577:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(67294)),u=n(a(79029)),l=n(a(56931)),d=n(a(45697)),f={fieldLegend:d.default.string,name:d.default.string,options:d.default.array,onChange:d.default.func};function i(e){return r.default.createElement(l.default,{legend:e.fieldLegend},e.options.map((function(t,a){return r.default.createElement(u.default,{key:t,name:e.name,id:t,defaultChecked:0===a,labelText:t,value:t,onChange:e.onChange})})))}i.propTypes=f;t.default=i}}]);