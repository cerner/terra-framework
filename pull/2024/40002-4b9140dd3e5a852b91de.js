"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[40002],{93065:function(e,t,n){var r=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(n(38416)),l=r(n(861)),a=r(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var a=c?Object.getOwnPropertyDescriptor(e,l):null;a&&(a.get||a.set)?Object.defineProperty(r,l,a):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n(67294)),u=n(55730),s=r(n(19782));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=s.default.cols,t=s.default.rows,n=(0,i.useState)(t),r=(0,a.default)(n,2),o=r[0],c=r[1],d=(0,i.useState)(e),f=(0,a.default)(d,2),b=f[0],m=f[1],w=(0,i.useCallback)((function(e){var t=(0,l.default)(o);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),c(t)}),[o]),O=(0,i.useCallback)((function(){var e=o.map((function(e){return p(p({},e),{},{isSelected:!0})}));c(e)}),[o]);return i.default.createElement("div",null,i.default.createElement("div",null,i.default.createElement("button",{type:"button",id:"delete-rows-button",onClick:function(){return c(o.filter((function(e){return!e.isSelected})))}},"Delete Rows"),i.default.createElement("button",{type:"button",id:"filter-rows-button",onClick:function(){return c(o.filter((function(e){return e.isSelected})))}},"Filter Rows")),i.default.createElement(u.WorklistDataGrid,{id:"worklist-data-grid-delete-rows",overflowColumns:b,rows:o,rowHeaderIndex:0,ariaLabel:"Worklist Data Grid Delete Rows",hasSelectableRows:!0,onRowSelect:w,onRowSelectAll:O,onColumnSelect:function(e){var t=b.findIndex((function(t){return t.id===e}));if(-1!==t){var n=(0,l.default)(b);n.splice(t,1);var r=(0,l.default)(o);r.forEach((function(e){var n=(0,l.default)(e.cells);n.splice(t,1),e.cells=n})),m(n),c(r)}}}))}},19782:function(e){e.exports=JSON.parse('{"cols":[{"id":"Column-0","displayName":"Vitals","isSelectable":false},{"id":"Column-1","displayName":"March 16"},{"id":"Column-2","displayName":"March 17"},{"id":"Column-3","displayName":"March 18"}],"rows":[{"id":"1","cells":[{"content":"Heart Rate Monitored (bpm)"},{"content":"68"},{"content":"66"},{"content":"67"}]},{"height":"150px","id":"2","cells":[{"content":"Temperature Oral (degC)"},{"content":"36.7","isMasked":true},{"content":"36.9","isMasked":true},{"content":"37","isMasked":true}]},{"id":"3","cells":[{"content":"Cardiac Index (L/min/m2)"},{"content":"2.25"},{"content":"2.28"},{"content":"2.8"}]},{"id":"4","cells":[{"content":"ICP (mmHg)","isMasked":true},{"content":"11"},{"content":"11"},{"content":"12"}]},{"id":"5","cells":[{"content":"CPP (mmHg)"},{"content":"63"},{"content":"47"},{"content":"48"}]},{"id":"6","cells":[{"content":"Oxygen Flow Rate (L/min)"},{"content":"2.0"},{"content":"6.5"},{"content":"7.2"}]},{"id":"7","cells":[{"content":"pCO2 Arterial (mmHg)"},{"content":"48.3"},{"content":"44.7","isMasked":true},{"content":"43.1"}]},{"id":"8","cells":[{"content":"Bicarbonate (mEq/L)"},{"content":"34.8"},{"content":"-27.6"},{"content":"32.3"}]},{"id":"9","cells":[{"content":"FIO2"},{"content":"45"},{"content":"43"},{"content":"44"}]},{"id":"10","cells":[{"content":"Weight (kg)"},{"content":"58.8"},{"content":"59"},{"content":"55.1"}]}]}')}}]);