"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[31224,37068],{74888:function(e,t,n){var o=n(22411),a=n(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(n(25724)),i=o(n(97936)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var c=l?Object.getOwnPropertyDescriptor(e,i):null;c&&(c.get||c.set)?Object.defineProperty(o,i,c):o[i]=e[i]}return o.default=e,n&&n.set(e,o),o}(n(11504)),r=o(n(36276));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var u={cols:[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,isCollapsed:!1,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",isCollapsible:!0,isCollapsed:!1,text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};t.default=function(){var e=(0,c.useState)(u.sections),t=(0,i.default)(e,2),n=t[0],o=t[1];return c.default.createElement(r.default,{id:"table-with-sections",overflowColumns:u.cols,sections:n,onSectionSelect:function(e){var t=(0,l.default)(n),a=t.findIndex((function(t){return t.id===e}));a>-1&&(t[a].isCollapsed=!t[a].isCollapsed),o(t)}})}}}]);