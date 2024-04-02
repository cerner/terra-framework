"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[75278],{90397:function(e,t,n){var a=n(24994),l=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(41132)),c=a(n(85715)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=o?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(a,c,i):a[c]=e[c]}return a.default=e,n&&n.set(e,a),a}(n(96540)),r=n(45663);function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],s=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.default=function(){var e=(0,i.useRef)(),t=d,n=s,a=(0,i.useState)(n),l=(0,c.default)(a,2),u=l[0],f=l[1],m=(0,i.useState)(!1),p=(0,c.default)(m,2),y=p[0],C=p[1];t.forEach((function(e,t){t<5&&(e.action={label:"".concat(e.displayName," action"),onClick:function(){return alert("Column action for ".concat(e.displayName," clicked"))}})}));var b=(0,i.useCallback)((function(){var e=(0,o.default)(u);e.forEach((function(e){return e.isSelected=!1})),f(e)}),[u]),h=(0,i.useCallback)((function(){e.current.checked=!1,C(!1),b()}),[b]),k=(0,i.useCallback)((function(e){var t=(0,o.default)(u);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),f(t)}),[u]),w=(0,i.useCallback)((function(){var e=(0,o.default)(u);e.forEach((function(e){return e.isSelected=!0})),f(e)}),[u]),S=(0,i.useCallback)((function(e){alert("Column selection header for ".concat(e," clicked"))}),[]),v=(0,i.useCallback)((function(){e.current.checked||(e.current.checked=!0),C(!0)}),[]);return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"rowSelectionMode"},i.default.createElement("b",null,"Row Selection Mode")),i.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:function(e){e.target.checked||b(),C(e.target.checked)}})),i.default.createElement(r.WorklistDataGrid,{id:"wdg-with-column-actions-and-row-selection",pinnedColumns:t.slice(0,3),overflowColumns:t.slice(3),rows:u,rowHeaderIndex:0,defaultColumnWidth:180,ariaLabel:"Worklist Data Grid with Column Actions and Row Selection",onColumnSelect:S,hasSelectableRows:y,onRowSelect:k,onRowSelectAll:w,onClearSelectedRows:b,onDisableSelectableRows:h,onEnableRowSelection:v}))}}}]);