"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[28900],{43562:function(e,t,n){var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(27424)),o=m(n(67294)),i=m(n(31915)),u=n(30210),c=n(34614),f=r(n(55281));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var s=function(){var e=(0,o.useState)(!1),t=(0,l.default)(e,2),n=t[0],r=t[1],a=function(){return r(!n)};return n?o.default.createElement(f.default,{variant:"utility",text:"Featured button",icon:o.default.createElement(c.IconFeatured,null),onClick:a}):o.default.createElement(f.default,{variant:"utility",text:"Featured off button",icon:o.default.createElement(c.IconFeaturedOff,null),onClick:a})},p=o.default.createElement(c.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),y=o.default.createElement(c.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),h=o.default.createElement(c.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),w=function(e){switch(e){case"enormous":return 5;case"huge":return 4;case"large":return 3;case"medium":return 2;default:return 1}},b=[{id:"row_1",cells:[{content:p},{content:"Discern Care Set (1)"},{content:o.default.createElement(s,null)}]},{id:"row_2",cells:[{content:p},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:o.default.createElement(s,null)}]},{id:"row_3",cells:[{content:y},{content:"Arterial Sheath Care (3)"},{content:o.default.createElement(s,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:o.default.createElement(s,null)}]},{id:"row_5",cells:[{content:h},{content:"Arterial Sheath Care (5)"},{content:o.default.createElement(s,null)}]}],v=[{id:"Column-0",displayName:"Icon",width:"60px",align:i.alignTypes.CENTER,maximumWidth:"10em",minimumWidth:"20px"},{id:"Column-1",displayName:"Service name",width:"200px",flexGrow:!0},{id:"Column-2",displayName:"Featured",width:"3em",minimumWidth:"1em",align:i.alignTypes.CENTER}];t.default=function(){var e=o.default.useContext(u.ActiveBreakpointContext);return o.default.createElement(i.default,{id:"inconsistent-width-units",ariaLabel:"Compact Interactive List",rows:b,columns:v,numberOfColumns:w(e),flowHorizontally:!0,columnMaximumWidth:"10em",columnMinimumWidth:"20em",rowHeaderIndex:1})}},15785:function(e,t,n){function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.d(t,{Z:function(){return a}})}}]);