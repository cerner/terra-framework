"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[46444],{97066:function(e,t,n){var i=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(861)),l=i(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var i={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(i,l,r):i[l]=e[l]}i.default=e,n&&n.set(e,i);return i}(n(67294)),c=i(n(72095));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],s=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}],f=function(){var e=(0,r.useRef)(),t=d,n=s,i=(0,r.useState)([]),a=(0,l.default)(i,2),u=a[0],f=a[1],p=(0,r.useState)(!1),m=(0,l.default)(p,2),y=m[0],h=m[1],w=function(e,t){if(!t)return[];var n=[];return e?n=t:u.includes(t[0])?n=u.filter((function(e){return e!==t[0]})):(n=n.concat(u)).push(t[0]),n},C=function(){n.forEach((function(e){e.isSelected&&(e.isSelected=!1)})),f([])};return r.default.createElement(c.default,{id:"default-terra-worklist-data-grid",pinnedColumns:t.slice(0,3),overflowColumns:t.slice(3),rows:(0,o.default)(n),rowHeaderIndex:0,defaultColumnWidth:180,ariaLabel:"Worklist Data Grid with Pinned Columns and Row Selection",hasSelectableRows:y,onRowSelect:function(e){var t=[],i=n.find((function(t){return t.id===e}));i.isSelected=!i.isSelected,n.forEach((function(e){e.isSelected&&t.push(e.id)})),f(w(!1,t))},onRowSelectAll:function(){var e=[];n.forEach((function(t){t.isSelected=!0,e.push(t.id)})),f(w(!0,e))},onClearSelectedRows:function(){C()},onDisableSelectableRows:function(){e.current.checked=!1,h(!1),C()}})};t.default=f}}]);