"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[80348],{4312:function(e,t,n){var l=n(22411),a=n(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(97936)),i=f(n(11504)),u=f(n(61120)),o=n(95324),c=l(n(58848));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=r?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(l,i,u):l[i]=e[i]}return l.default=e,n&&n.set(e,l),l}var s=function(){var e=(0,i.useState)(!1),t=(0,r.default)(e,2),n=t[0],l=t[1],a=function(){return l(!n)};return n?i.default.createElement(c.default,{variant:"utility",text:"Featured button",icon:i.default.createElement(o.IconFeatured,null),onClick:a}):i.default.createElement(c.default,{variant:"utility",text:"Featured off button",icon:i.default.createElement(o.IconFeaturedOff,null),onClick:a})},m=i.default.createElement(o.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),p=i.default.createElement(o.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),h=i.default.createElement(o.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),w=[{id:"row_1",cells:[{content:m},{content:"Discern Care Set (1)"},{content:i.default.createElement(s,null)}]},{id:"row_2",cells:[{content:m},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:i.default.createElement(s,null)}]},{id:"row_3",cells:[{content:p},{content:"Arterial Sheath Care (3)"},{content:i.default.createElement(s,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:i.default.createElement(s,null)}]},{id:"row_5",cells:[{content:h},{content:"Arterial Sheath Care (5)"},{content:i.default.createElement(s,null)}]}],y=[{id:"Column-0",displayName:"Icon",width:"60px",align:u.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"350px"},{id:"Column-2",displayName:"Featured",width:"60px",align:u.alignTypes.CENTER}];t.default=function(){return i.default.createElement(u.default,{id:"compact-interactive-list-fixed-width-columns",ariaLabel:"Compact Interactive List",rows:w,columns:y,numberOfColumns:2,columnMinimumWidth:"20px",columnMaximumWidth:"200px",rowHeaderIndex:1})}}}]);