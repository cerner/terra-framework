"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[96258],{78464:function(e,t,n){var r=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(38416)),a=r(n(861)),i=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=c?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(67294)),u=r(n(12810)),s=r(n(45925));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.default=function(){var e=(0,l.useState)(s.default.cols),t=(0,i.default)(e,2),n=t[0],r=t[1],o=(0,l.useState)(s.default.rows),d=(0,i.default)(o,2),p=d[0],b=d[1];return l.default.createElement(u.default,{id:"sortable-table",overflowColumns:n,rows:p,onColumnSelect:function(e){var t=(0,a.default)(n).map((function(t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t);return e===t.id?n.sortIndicator="ascending"===t.sortIndicator?"descending":"ascending":n.sortIndicator=void 0,n})),o=(0,a.default)(p),i=t.findIndex((function(t){return t.id===e}));if(i>-1){var l=t[i].sortIndicator;o.sort((function(e,t){var n=e.cells[i].content||"",r=t.cells[i].content||"";return"ascending"===l?n.localeCompare(r):r.localeCompare(n)}))}r(t),b(o)}})}},45925:function(e){e.exports=JSON.parse('{"cols":[{"id":"Column-0","displayName":"Vitals","isSelectable":true,"sortIndicator":"ascending"},{"id":"Column-1","displayName":"March 16","isSelectable":true},{"id":"Column-2","displayName":"March 17"},{"id":"Column-3","displayName":"March 18"}],"rows":[{"id":"1","cells":[{"content":"Heart Rate Monitored (bpm)"},{"content":"68"},{"content":"66"},{"content":"67"}]},{"height":"150px","id":"2","cells":[{"content":"Temperature Oral (degC)"},{"content":"36.7","isMasked":true},{"content":"36.9","isMasked":true},{"content":"37","isMasked":true}]},{"id":"3","cells":[{"content":"Cardiac Index (L/min/m2)"},{"content":"2.25"},{"content":"2.28"},{"content":"2.8"}]},{"id":"4","cells":[{"content":"ICP (mmHg)","isMasked":true},{"content":"11"},{"content":"11"},{"content":"12"}]},{"id":"5","cells":[{"content":"CPP (mmHg)"},{"content":"63"},{"content":"47"},{"content":"48"}]}]}')}}]);