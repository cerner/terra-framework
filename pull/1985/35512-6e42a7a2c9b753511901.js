"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[35512],{28096:function(e,t,l){var a=l(22411),n=l(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(l(97936)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=c(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(a,r,o):a[r]=e[r]}return a.default=e,l&&l.set(e,a),a}(l(11504)),o=a(l(17884)),u=a(l(13260));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(c=function(e){return e?l:t})(e)}t.default=function(){var e=(0,r.useState)(!1),t=(0,i.default)(e,2),l=t[0],a=t[1],n=r.default.createElement("button",{type:"button","aria-label":"Alert",onClick:function(){a(!0)}},"Alert"),c=r.default.createElement("input",{id:"input-cell",type:"text","aria-label":"Text Input",style:{width:"100px",height:"25px",display:"inline"}}),d=r.default.createElement("input",{type:"text","aria-label":"Text Input",style:{width:"100px",height:"25px",display:"inline"}}),s=r.default.createElement("a",{href:"https://www.oracle.com/","aria-label":"Visit Oracle"},"Visit Oracle"),f=r.default.createElement("textarea",{id:"textarea-cell",name:"textArea","aria-label":"Text Area",rows:"1",cols:"15",value:"Text Area"}),b=r.default.createElement("select",{name:"specialties",id:"specialties","aria-label":"Select Specialty"},r.default.createElement("option",{value:"ambulatory"},"Ambulatory"),r.default.createElement("option",{value:"cardiology"},"Cardiology"),r.default.createElement("option",{value:"radiology"},"Radiology"),r.default.createElement("option",{value:"neurology"},"Neurology")),p={cols:[{id:"Column-0",displayName:"Patient",isSelectable:!0,isResizable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0,isResizable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0,isResizable:!0},{id:"Column-3",displayName:"Visit",isSelectable:!0,isResizable:!0}],rows:[{id:"1",cells:[{content:"Fleck, Arthur",isSelectable:!0},{content:n,isSelectable:!0},{content:c,isSelectable:!0},{content:s,isSelectable:!0}]},{id:"2",cells:[{content:"Wayne, Bruce",isSelectable:!0},{content:r.default.createElement("div",null,n,d),isSelectable:!0},{content:b,isSelectable:!0},{content:f,isSelectable:!0}]}]},m=p.cols,y=p.rows;return r.default.createElement(r.default.Fragment,null,l&&r.default.createElement(u.default,{variant:"hazard-low",dialogTitle:"Button from Focusable Cell",startMessage:"Button Selected",acceptAction:{text:"OK",onClick:function(){a(!1)}}}),r.default.createElement("button",{id:"previous-focus-button",type:"button","aria-label":"Previous Element"},"Test Previous"),r.default.createElement("div",{style:{display:"none"}},r.default.createElement("button",{id:"hidden-button",type:"button"},"Hidden")),r.default.createElement("div",{style:{visibility:"hidden"}},r.default.createElement("button",{id:"hidden-button2",type:"button"},"Hidden2")),r.default.createElement("div",{inert:""},r.default.createElement("button",{id:"inert-child-button",type:"button"},"Inert Child")),r.default.createElement("div",{style:{margin:"10px"}},r.default.createElement(o.default,{id:"default-terra-data-grid-focusable-cell",overflowColumns:m,defaultColumnWidth:170,rows:y,rowHeaderIndex:0,ariaLabel:"Data Grid"})),r.default.createElement("button",{id:"next-focus-button",type:"button","aria-label":"Next Element"},"Test Next"))}}}]);