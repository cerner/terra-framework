"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[86240],{54761:function(t,e,n){var o=n(24994),c=n(73738);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=o(n(41132)),a=o(n(85715)),l=function(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=c(t)&&"function"!=typeof t)return{default:t};var n=r(e);if(n&&n.has(t))return n.get(t);var o={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&{}.hasOwnProperty.call(t,a)){var l=i?Object.getOwnPropertyDescriptor(t,a):null;l&&(l.get||l.set)?Object.defineProperty(o,a,l):o[a]=t[a]}return o.default=t,n&&n.set(t,o),o}(n(96540)),s=o(n(83264));function r(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(r=function(t){return t?n:e})(t)}var u={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",text:"Test Section",subsections:[{id:"subsection-0",text:"Test SubSection",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"subsection-1",text:"Test SubSection #2",rows:[{id:"3",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"4",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"5",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"6",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};e.default=function(){var t=(0,l.useState)(u.sections),e=(0,a.default)(t,2),n=e[0],o=e[1];return l.default.createElement(s.default,{id:"table-with-sub-sections",pinnedColumns:u.cols.slice(0,2),overflowColumns:u.cols.slice(2),sections:n,onSectionSelect:function(t){var e=(0,i.default)(n),c=e.findIndex((function(e){return e.id===t}));c>-1&&(e[c].isCollapsed=!e[c].isCollapsed),o(e)}})}}}]);