"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[55344,37068],{82768:function(e,t,l){var a=l(22411),n=l(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(97936)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=i(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}(l(11504)),u=a(l(36276)),c=a(l(13260));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(i=function(e){return e?l:t})(e)}t.default=function(){var e=(0,o.useState)(!1),t=(0,r.default)(e,2),l=t[0],a=t[1],n=o.default.createElement("button",{type:"button","aria-label":"Alert",onClick:function(){a(!0)}},"Alert"),i=o.default.createElement("input",{type:"text","aria-label":"Text Input",style:{width:"100px",height:"25px",display:"inline"}}),d=o.default.createElement("a",{href:"https://www.oracle.com/","aria-label":"Visit Oracle"},"Visit Oracle"),f=o.default.createElement("textarea",{name:"textArea","aria-label":"Text Area",rows:"1",cols:"15"}),s=o.default.createElement("select",{name:"specialties",id:"specialties","aria-label":"Select Specialty"},o.default.createElement("option",{value:"ambulatory"},"Ambulatory"),o.default.createElement("option",{value:"cardiology"},"Cardiology"),o.default.createElement("option",{value:"radiology"},"Radiology"),o.default.createElement("option",{value:"neurology"},"Neurology")),p={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Column 1"},{id:"Column-2",displayName:"Column 2"},{id:"Column-3",displayName:"Column 3"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:o.default.createElement(o.default.Fragment,null,n,o.default.createElement("div",null,"Non-Focusable Text"))},{content:i},{content:d}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:o.default.createElement("div",null,n,i)},{content:s},{content:f}]}]},m=p.cols,y=p.rows;return o.default.createElement(o.default.Fragment,null,l&&o.default.createElement(c.default,{variant:"hazard-low",dialogTitle:"Button from Focusable Cell",startMessage:"Button Selected",acceptAction:{text:"OK",onClick:function(){a(!1)}}}),o.default.createElement(u.default,{id:"table-focusable-cell",overflowColumns:m,rows:y,ariaLabel:"Table with Focusable Elements"}))}}}]);