"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[82472],{12297:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(861)),r=l(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(l,r,o):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),c=n(55730);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],u=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.default=function(){var e=d,t=(0,o.useState)([]),n=(0,r.default)(t,2),l=n[0],a=n[1];(0,o.useEffect)((function(){a(u)}),[]);var s=(0,o.useCallback)((function(t,n){if(t&&n){for(var r=l.findIndex((function(e){return e.id===t})),o=e.findIndex((function(e){return e.id===n})),c=(0,i.default)(l),s=0;s<l.length;s+=1)for(var d=0;d<l[s].cells.length;d+=1){var u=l[s].cells[d];!u.isSelected||s===r&&d===o||(u.isSelected=!1)}c[r].cells[o].isSelected=!l[r].cells[o].isSelected,a(c)}}),[e,l]),f=(0,o.useCallback)((function(){for(var e=(0,i.default)(l),t=0;t<l.length;t+=1)for(var n=0;n<l[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;a(e)}),[l]);return o.default.createElement(c.WorklistDataGrid,{id:"pinned-columns",pinnedColumns:e.slice(0,3),overflowColumns:e.slice(3),rows:l,rowHeaderIndex:0,onCellSelect:s,onClearSelectedCells:f,ariaLabel:"Worklist Data Grid"})}}}]);