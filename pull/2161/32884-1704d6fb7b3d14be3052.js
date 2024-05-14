"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[32884],{84911:function(e,t,n){var o=n(24994),c=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(43693)),i=o(n(41132)),s=o(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=c(e)&&"function"!=typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}(n(96540)),u=n(45663);function a(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={cols:[{id:"Column-0",displayName:"Patient",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",text:"Test Section",subsections:[{id:"subsection-0",text:"Test SubSection",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"subsection-1",text:"Test SubSection #2",rows:[{id:"3",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"4",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"5",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"6",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};t.default=function(){var e=(0,l.useState)(p.sections),t=(0,s.default)(e,2),n=t[0],o=t[1],c=(0,l.useCallback)((function(e){return n.map((function(t){return f(f({},t),{},{rows:t.rows?t.rows.map((function(t){return f(f({},t),{},{cells:t.cells.map((function(t){return f(f({},t),{},{isSelected:!!e&&t.isSelected})}))})})):void 0,subsections:t.subsections?t.subsections.map((function(t){return f(f({},t),{},{rows:t.rows.map((function(t){return f(f({},t),{},{cells:t.cells.map((function(t){return f(f({},t),{},{isSelected:!!e&&t.isSelected})}))})}))})})):void 0})}))}),[n]),r=(0,l.useCallback)((function(e){var t=n.find((function(t){return t.id===e.sectionId})),r=t.subsections?t.subsections.find((function(t){return t.id===e.subsectionId})):void 0,i=r?r.rows.findIndex((function(t){return t.id===e.rowId})):t.rows.findIndex((function(t){return t.id===e.rowId})),s=p.cols.findIndex((function(t){return t.id===e.columnId})),l=r?r.rows[i].cells[s]:t.rows[i].cells[s],u=c(e.isMetaPressed);(t=u.find((function(t){return t.id===e.sectionId}))).subsections?(r=t.subsections.find((function(t){return t.id===e.subsectionId}))).rows[i].cells[s].isSelected=!l.isSelected:t.rows[i].cells[s].isSelected=!l.isSelected,o(u)}),[n,c]),a=(0,l.useCallback)((function(e){var t=new Set(e.map((function(e){return e.columnId})).map((function(e){return p.cols.findIndex((function(t){return t.id===e}))}))),n=new Set(e.map((function(e){return e.rowId}))),r=c(),i=r.find((function(t){return t.id===e[0].sectionId}));i.subsections?i.subsections=i.subsections.map((function(e){return f(f({},e),{},{rows:e.rows.map((function(e){return f(f({},e),{},{cells:e.cells.map((function(o,c){return f(f({},o),{},{isSelected:t.has(c)&&n.has(e.id)})}))})}))})})):i.rows=i.rows.map((function(e){return f(f({},e),{},{cells:e.cells.map((function(o,c){return f(f({},o),{},{isSelected:t.has(c)&&n.has(e.id)})}))})})),o(r)}),[c]);return l.default.createElement(u.FlowsheetDataGrid,{id:"flowsheet-with-subsections",columns:p.cols,sections:n,ariaLabel:"Flowsheet Data Grid with Subsections",onSectionSelect:function(e){var t=(0,i.default)(n),c=t.findIndex((function(t){return t.id===e})),r=t.find((function(t){return t.id===e}));r.rows=r.rows.map((function(e){return f(f({},e),{},{cells:e.cells.map((function(e){return f(f({},e),{},{isSelected:!1})}))})})),c>-1&&(t[c].isCollapsed=!t[c].isCollapsed),o(t)},onCellRangeSelect:a,onCellSelect:r,onClearSelectedCells:function(){o(c())}})}}}]);