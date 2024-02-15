"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[91500],{22400:function(e,t,n){var l=n(22411),r=n(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(25724)),c=l(n(97936)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var o=a?Object.getOwnPropertyDescriptor(e,c):null;o&&(o.get||o.set)?Object.defineProperty(l,c,o):l[c]=e[c]}return l.default=e,n&&n.set(e,l),l}(n(11504)),i=n(15920);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.default=function(){var e=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:null}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:null},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:null},{content:"48"}]}],n=(0,o.useState)(t),l=(0,c.default)(n,2),r=l[0],d=l[1];e.forEach((function(t,n){n<3&&(t.action={label:"".concat(t.displayName," action"),onClick:function(){return alert("".concat(e[n].displayName," action called"))}})}));var u=(0,o.useCallback)((function(t){if(t.rowId&&t.columnId){for(var n=r.findIndex((function(e){return e.id===t.rowId})),l=e.findIndex((function(e){return e.id===t.columnId})),c=!1,o=(0,a.default)(r),i=0;i<r.length;i+=1)for(var u=0;u<r[i].cells.length;u+=1){var f=r[i].cells[u];!f.isSelected||i===n&&u===l||(f.isSelected=!1,c=!0)}o[n].cells[l].isSelected=!r[n].cells[l].isSelected||c,d(o)}}),[e,r]),f=(0,o.useCallback)((function(){for(var e=(0,a.default)(r),t=0;t<r.length;t+=1)for(var n=0;n<r[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;d(e)}),[r]),s=(0,o.useCallback)((function(t){for(var n=(0,a.default)(r),l=0;l<r.length;l+=1)for(var c=0;c<r[l].cells.length;c+=1)n[l].cells[c].isSelected=!1;t.forEach((function(t){var l=r.findIndex((function(e){return e.id===t.rowId})),a=e.findIndex((function(e){return e.id===t.columnId}));n[l].cells[a].isSelected=!0})),d(n)}),[e,r]);return o.default.createElement(i.FlowsheetDataGrid,{id:"terra-flowsheet-data-grid-no-column-headers",columns:e,rows:r,ariaLabel:"Flowsheet Data Grid",onCellSelect:u,onClearSelectedCells:f,onCellRangeSelect:s,hasVisibleColumnHeaders:!1})}}}]);