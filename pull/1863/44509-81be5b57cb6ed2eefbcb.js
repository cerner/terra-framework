"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[44509],{66541:function(e,t,a){var l=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}return l.default=e,a&&a.set(e,l),l}(a(67294)),o=l(a(99722)),u=l(a(850));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}t.default=function(){var e=(0,i.useState)(!1),t=(0,r.default)(e,2),a=t[0],l=t[1],n=i.default.createElement("button",{type:"button","aria-label":"Alert",onClick:function(){l(!0)}},"Alert"),d=i.default.createElement("input",{id:"input-cell",type:"text","aria-label":"Text Input",style:{width:"100px",height:"25px",display:"inline"}}),c=i.default.createElement("input",{type:"text","aria-label":"Text Input",style:{width:"100px",height:"25px",display:"inline"}}),f=i.default.createElement("a",{href:"https://www.oracle.com/","aria-label":"Visit Oracle"},"Visit Oracle"),s=i.default.createElement("textarea",{id:"textarea-cell",name:"textArea","aria-label":"Text Area",rows:"1",cols:"15",value:"Text Area"}),p=i.default.createElement("select",{name:"specialties",id:"specialties","aria-label":"Select Specialty"},i.default.createElement("option",{value:"ambulatory"},"Ambulatory"),i.default.createElement("option",{value:"cardiology"},"Cardiology"),i.default.createElement("option",{value:"radiology"},"Radiology"),i.default.createElement("option",{value:"neurology"},"Neurology")),m={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:n},{content:d},{content:f}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:i.default.createElement("div",null,n,c)},{content:p},{content:s}]}]},y=m.cols,b=m.rows;return i.default.createElement(i.default.Fragment,null,a&&i.default.createElement(u.default,{variant:"hazard-low",dialogTitle:"Button from Focusable Cell",startMessage:"Button Selected",acceptAction:{text:"OK",onClick:function(){l(!1)}}}),i.default.createElement("button",{id:"previous-focus-button",type:"button","aria-label":"Previous Element"},"Test Previous"),i.default.createElement("div",{style:{display:"none"}},i.default.createElement("button",{id:"hidden-button",type:"button"},"Hidden")),i.default.createElement("div",{style:{visibility:"hidden"}},i.default.createElement("button",{id:"hidden-button2",type:"button"},"Hidden2")),i.default.createElement("div",{inert:""},i.default.createElement("button",{id:"inert-child-button",type:"button"},"Inert Child")),i.default.createElement("div",{style:{margin:"10px"}},i.default.createElement(o.default,{id:"default-terra-data-grid-focusable-cell",overflowColumns:y,defaultColumnWidth:170,rows:b,rowHeaderIndex:0,ariaLabel:"Data Grid"})),i.default.createElement("button",{id:"next-focus-button",type:"button","aria-label":"Next Element"},"Test Next"))}}}]);