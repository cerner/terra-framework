"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[32951],{43338:function(e,t,n){var l=n(24994),r=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=l(n(41132)),a=l(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var o=c?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}return l.default=e,n&&n.set(e,l),l}(n(96540)),i=n(45663);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.default=function(){var e=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:null}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:null},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:null},{content:"48"}]}],n=(0,o.useState)(t),l=(0,a.default)(n,2),r=l[0],d=l[1],u=(0,o.useCallback)((function(t){if(t.rowId&&t.columnId){for(var n=r.findIndex((function(e){return e.id===t.rowId})),l=e.findIndex((function(e){return e.id===t.columnId})),a=!1,o=(0,c.default)(r),i=0;i<r.length;i+=1)for(var u=0;u<r[i].cells.length;u+=1){var f=r[i].cells[u];!f.isSelected||i===n&&u===l||t.isMetaPressed||(f.isSelected=!1,a=!0)}o[n].cells[l].isSelected=!r[n].cells[l].isSelected||a,d(o)}}),[e,r]),f=(0,o.useCallback)((function(){for(var e=(0,c.default)(r),t=0;t<r.length;t+=1)for(var n=0;n<r[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;d(e)}),[r]),s=(0,o.useCallback)((function(t){for(var n=(0,c.default)(r),l=0;l<r.length;l+=1)for(var a=0;a<r[l].cells.length;a+=1)n[l].cells[a].isSelected=!1;t.forEach((function(t){var l=r.findIndex((function(e){return e.id===t.rowId})),c=e.findIndex((function(e){return e.id===t.columnId}));n[l].cells[c].isSelected=!0})),d(n)}),[e,r]);return o.default.createElement(i.FlowsheetDataGrid,{id:"terra-flowsheet-data-grid-cell-selection",columns:e,rows:r,ariaLabel:"Flowsheet Data Grid",onCellSelect:u,onClearSelectedCells:f,onCellRangeSelect:s})}}}]);