"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[39484],{32389:function(e,t,n){var l=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=l(n(861)),a=l(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=c?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=n(55730);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.default=function(){var e=[{id:"Column-0",displayName:"Vitals"},{id:"Column-1",displayName:"March 16"},{id:"Column-2",displayName:"March 17"},{id:"Column-3",displayName:"March 18"}],t=[{id:"1",cells:[{content:"Heart Rate Monitored (bpm)"},{content:"68"},{content:"66"},{content:"67"}]},{id:"2",cells:[{content:"Temperature Oral (degC)"},{content:"36.7"},{content:"36.9"},{content:"37"}]},{id:"3",cells:[{content:"Cardiac Index (L/min/m2)"},{content:"2.25"},{content:"2.28"},{content:"2.8"}]},{id:"4",cells:[{content:"ICP (mmHg)"},{content:"11"},{content:"11"},{content:"12"}]},{id:"5",cells:[{content:"CPP (mmHg)"},{content:"63"},{content:"47"},{content:"48"}]}],n=(0,o.useState)(t),l=(0,a.default)(n,2),r=l[0],d=l[1],u=(0,o.useState)(void 0),f=(0,a.default)(u,2),s=f[0],p=f[1],v=(0,o.useCallback)((function(){s&&p(void 0)}),[s]),m=(0,o.useCallback)((function(e){var t=e.rowId;if(t){for(var n=r.findIndex((function(e){return e.id===t})),l=(0,c.default)(r),a=0;a<r.length;a+=1){l[a].isSelected=!1;for(var o=0;o<r[a].cells.length;o+=1)l[a].cells[o].isSelected=!1}s!==t?(l[n].isSelected=!0,p(t)):(l[n].isSelected=!1,v()),d(l)}}),[v,r,s]),h=(0,o.useCallback)((function(t,n){if(t&&n){for(var l=r.findIndex((function(e){return e.id===t})),a=e.findIndex((function(e){return e.id===n})),o=!1,i=(0,c.default)(r),u=0;u<r.length;u+=1){i[u].isSelected=!1;for(var f=0;f<r[u].cells.length;f+=1){var s=r[u].cells[f];!s.isSelected||u===l&&f===a||(s.isSelected=!1,o=!0)}}i[l].cells[a].isSelected=!r[l].cells[a].isSelected||o,v(),d(i)}}),[v,e,r]),C=(0,o.useCallback)((function(){for(var e=(0,c.default)(r),t=0;t<r.length;t+=1)for(var n=0;n<r[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;v(),d(e)}),[v,r]),S=(0,o.useCallback)((function(t){for(var n=(0,c.default)(r),l=0;l<r.length;l+=1){n[l].isSelected=!1;for(var a=0;a<r[l].cells.length;a+=1)n[l].cells[a].isSelected=!1}t.forEach((function(t){var l=r.findIndex((function(e){return e.id===t.rowId})),c=e.findIndex((function(e){return e.id===t.columnId}));n[l].cells[c].isSelected=!0})),v(),d(n)}),[v,e,r]);return o.default.createElement(i.FlowsheetDataGrid,{id:"terra-flowsheet-data-grid-row-selection",columns:e,rows:r,ariaLabel:"Flowsheet Data Grid",onCellSelect:h,onClearSelectedCells:C,onCellRangeSelect:S,onRowSelect:m})}}}]);