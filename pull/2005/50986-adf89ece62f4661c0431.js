"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[50986],{49194:function(e,t,n){var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(27424)),u=s(n(67294)),o=s(n(31915)),i=n(30210),c=n(34614),d=r(n(55281));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(r,u,o):r[u]=e[u]}return r.default=e,n&&n.set(e,r),r}var m=function(){var e=(0,u.useState)(!1),t=(0,l.default)(e,2),n=t[0],r=t[1],a=function(){return r(!n)};return n?u.default.createElement(d.default,{variant:"utility",text:"Featured button",icon:u.default.createElement(c.IconFeatured,null),onClick:a}):u.default.createElement(d.default,{variant:"utility",text:"Featured off button",icon:u.default.createElement(c.IconFeaturedOff,null),onClick:a})},p=u.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),h=u.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),w=u.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),y=function(e){switch(e){case"enormous":return 5;case"huge":return 4;case"large":return 3;case"medium":return 2;default:return 1}},v=[{id:"row_1",cells:[{content:p},{content:"Discern Care Set (1)"},{content:u.default.createElement(m,null)}]},{id:"row_2",cells:[{content:p},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:u.default.createElement(m,null)}]},{id:"row_3",cells:[{content:h},{content:"Arterial Sheath Care (3)"},{content:u.default.createElement(m,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:u.default.createElement(m,null)}]},{id:"row_5",cells:[{content:w},{content:"Arterial Sheath Care (5)"},{content:u.default.createElement(m,null)}]}],b=[{id:"Column-0",displayName:"Icon",width:"60px",align:o.alignTypes.CENTER},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"60px",align:o.alignTypes.CENTER}];t.default=function(){var e=u.default.useContext(i.ActiveBreakpointContext);return u.default.createElement(o.default,{id:"with-breakpoints",ariaLabel:"Compact Interactive List",rows:v,columns:b,numberOfColumns:y(e),rowHeaderIndex:1})}}}]);