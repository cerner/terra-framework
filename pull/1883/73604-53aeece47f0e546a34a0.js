"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[73604],{48838:function(e,t,n){var o=n(64836),c=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(861)),r=o(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=c(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=a?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(o,r,l):o[r]=e[r]}return o.default=e,n&&n.set(e,o),o}(n(67294)),i=n(55730),u=o(n(19782));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}t.default=function(){var e=u.default.cols,t=u.default.rows,n=(0,l.useState)(t),o=(0,r.default)(n,2),c=o[0],s=o[1],d=(0,l.useState)(!0),f=(0,r.default)(d,2),p=f[0],m=f[1],w=(0,l.useCallback)((function(){var e=(0,a.default)(c);e.forEach((function(e){return e.isSelected=!1})),s(e)}),[c]),k=(0,l.useCallback)((function(e){var t=(0,a.default)(c);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),s(t)}),[c]),b=(0,l.useCallback)((function(){var e=(0,a.default)(c);e.forEach((function(e){return e.isSelected=!0})),s(e)}),[c]);return l.default.createElement(i.WorklistDataGrid,{id:"default-terra-worklist-data-grid",overflowColumns:e,rows:c,rowHeaderIndex:0,ariaLabel:"Worklist Data Grid",hasSelectableRows:p,onRowSelect:k,onRowSelectAll:b,onClearSelectedRows:w,onDisableSelectableRows:function(){m(!1),w()},onEnableRowSelection:function(){m(!0)}})}},19782:function(e){e.exports=JSON.parse('{"cols":[{"id":"Column-0","displayName":"Vitals","isSelectable":false},{"id":"Column-1","displayName":"March 16"},{"id":"Column-2","displayName":"March 17"},{"id":"Column-3","displayName":"March 18"}],"rows":[{"id":"1","cells":[{"content":"Heart Rate Monitored (bpm)"},{"content":"68"},{"content":"66"},{"content":"67"}]},{"height":"150px","id":"2","cells":[{"content":"Temperature Oral (degC)"},{"content":"36.7","isMasked":true},{"content":"36.9","isMasked":true},{"content":"37","isMasked":true}]},{"id":"3","cells":[{"content":"Cardiac Index (L/min/m2)"},{"content":"2.25"},{"content":"2.28"},{"content":"2.8"}]},{"id":"4","cells":[{"content":"ICP (mmHg)","isMasked":true},{"content":"11"},{"content":"11"},{"content":"12"}]},{"id":"5","cells":[{"content":"CPP (mmHg)"},{"content":"63"},{"content":"47"},{"content":"48"}]},{"id":"6","cells":[{"content":"Oxygen Flow Rate (L/min)"},{"content":"2.0"},{"content":"6.5"},{"content":"7.2"}]},{"id":"7","cells":[{"content":"pCO2 Arterial (mmHg)"},{"content":"48.3"},{"content":"44.7","isMasked":true},{"content":"43.1"}]},{"id":"8","cells":[{"content":"Bicarbonate (mEq/L)"},{"content":"34.8"},{"content":"-27.6"},{"content":"32.3"}]},{"id":"9","cells":[{"content":"FIO2"},{"content":"45"},{"content":"43"},{"content":"44"}]},{"id":"10","cells":[{"content":"Weight (kg)"},{"content":"58.8"},{"content":"59"},{"content":"55.1"}]}]}')}}]);