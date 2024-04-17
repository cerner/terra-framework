"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[48201,87288],{50854:function(e,t,n){var l=n(24994),i=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(41132)),o=l(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var r=a?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(l,o,r):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(96540)),c=n(45663);function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d={cols:[{id:"Column-0",displayName:"Patient",action:{label:"Patient action",onClick:function(){return alert("Patient action called")}}},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity",action:{label:"Illness Severity action",onClick:function(){return alert("Illness Severity action called")}}},{id:"Column-3",displayName:"Visit",action:{label:"Visit action",onClick:function(){return alert("Visit action called")}}},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}]};t.default=function(){var e=d.cols,t=(0,r.useState)([]),n=(0,o.default)(t,2),l=n[0],i=n[1];(0,r.useEffect)((function(){i(d.rows)}),[]);var s=(0,r.useCallback)((function(t,n){if(t&&n){for(var o=l.findIndex((function(e){return e.id===t})),r=e.findIndex((function(e){return e.id===n})),c=(0,a.default)(l),s=0;s<l.length;s+=1)for(var d=0;d<l[s].cells.length;d+=1){var u=l[s].cells[d];!u.isSelected||s===o&&d===r||(u.isSelected=!1)}c[o].cells[r].isSelected=!l[o].cells[r].isSelected,i(c)}}),[e,l]),u=(0,r.useCallback)((function(){for(var e=(0,a.default)(l),t=0;t<l.length;t+=1)for(var n=0;n<l[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;i(e)}),[l]);return r.default.createElement(c.WorklistDataGrid,{id:"column-actions-pinned-columns-worklist-data-grid",pinnedColumns:e.slice(0,3),overflowColumns:e.slice(3),rows:l,rowHeaderIndex:0,onCellSelect:s,onClearSelectedCells:u,ariaLabel:"Worklist Data Grid"})}}}]);