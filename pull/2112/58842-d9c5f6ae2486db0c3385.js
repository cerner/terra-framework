"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[58842],{56601:function(e,t,n){var a=n(24994),l=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(41132)),o=a(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),c=n(45663);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var s=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],d=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.default=function(){var e=(0,r.useRef)(),t=s,n=d,a=(0,r.useState)(n),l=(0,o.default)(a,2),u=l[0],f=l[1],m=(0,r.useState)(!0),p=(0,o.default)(m,2),y=p[0],C=p[1],b=(0,r.useCallback)((function(){var e=(0,i.default)(u);e.forEach((function(e){return e.isSelected=!1})),f(e)}),[u]),h=(0,r.useCallback)((function(){e.current.checked=!1,C(!1),b()}),[b]),w=(0,r.useCallback)((function(e){var t=(0,i.default)(u);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),f(t)}),[u]),k=(0,r.useCallback)((function(){var e=(0,i.default)(u);e.forEach((function(e){return e.isSelected=!0})),f(e)}),[u]);return r.default.createElement(c.WorklistDataGrid,{id:"pinned-columns-with-row-selection",pinnedColumns:t.slice(0,3),overflowColumns:t.slice(3),rows:u,rowHeaderIndex:0,defaultColumnWidth:180,ariaLabel:"Worklist Data Grid with Pinned Columns and Row Selection",hasSelectableRows:y,onRowSelect:w,onRowSelectAll:k,onClearSelectedRows:b,onDisableSelectableRows:h})}}}]);