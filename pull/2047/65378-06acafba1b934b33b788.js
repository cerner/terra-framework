"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[65378],{45275:function(e,t,n){var l=n(24994),r=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(85715)),c=l(n(43693)),i=l(n(41132)),o=p(n(96540)),u=p(n(79943)),d=n(33049),f=l(n(23986)),s=l(n(19992));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var i=a?Object.getOwnPropertyDescriptor(e,c):null;i&&(i.get||i.set)?Object.defineProperty(l,c,i):l[c]=e[c]}return l.default=e,n&&n.set(e,l),l}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,c.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=o.default.createElement(f.default,{text:"Learn more"}),h=o.default.createElement(s.default,{href:"https://www.cerner.com",text:"Documents"}),v=o.default.createElement(d.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),O=o.default.createElement(d.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),g=o.default.createElement(d.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),C=function(e,t,n){var l=t.findIndex((function(e){return(null==n?void 0:n.columnId)===e.id}));return(0,i.default)(e.map((function(e){return w(w({},e),{},{cells:(0,i.default)(e.cells.map((function(t,r){var a=!!((null==n?void 0:n.rowId)===e.id&&r===l)&&!t.isSelected;return w(w({},t),{},{isSelected:a})})))})})))},E=function(){var e=(0,o.useState)(!1),t=(0,a.default)(e,2),n=t[0],l=t[1],r=function(){return l(!n)};return n?o.default.createElement(f.default,{variant:"utility",text:"Unfavorite item",icon:o.default.createElement(d.IconFeatured,null),onClick:r}):o.default.createElement(f.default,{variant:"utility",text:"Favorite item",icon:o.default.createElement(d.IconFeaturedOff,null),onClick:r})},S=[{id:"row_1",cells:[{content:v},{content:"Discern Care Set (1)"},{content:y},{content:o.default.createElement(E,null)}]},{id:"row_2",cells:[{content:v},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:h},{content:o.default.createElement(E,null)}]},{id:"row_3",cells:[{content:O},{content:"Arterial Sheath Care (3)"},{content:h},{content:o.default.createElement(E,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:y},{content:o.default.createElement(E,null)}]},{id:"row_5",cells:[{content:g},{content:"Arterial Sheath Care (5)"},{content:h},{content:o.default.createElement(E,null)}]}],j=[{id:"Column-0",displayName:"Icon",width:"50px",align:u.alignTypes.CENTER,isSelectable:!0},{id:"Column-1",displayName:"Service name",width:"250px",flexGrow:!0,maximumWidth:"350px",minimumWidth:"100px",isSelectable:!0},{id:"Column-2",displayName:"Details",width:"150px",align:u.alignTypes.RIGHT,isSelectable:!0},{id:"Column-3",displayName:"Featured",width:"50px",align:u.alignTypes.CENTER,isSelectable:!0}];t.default=function(){var e=(0,o.useState)(S),t=(0,a.default)(e,2),n=t[0],l=t[1],r=(0,o.useCallback)((function(e){var t=e.rowId,r=e.columnId;l(C(n,j,{rowId:t,columnId:r}))}),[n]),c=(0,o.useCallback)((function(){l(C(n,j))}),[n]);return o.default.createElement(u.default,{id:"compact-interactive-list-cell-content",ariaLabel:"Compact Interactive List",rows:n,columns:j,numberOfColumns:2,columnMinimumWidth:"234px",onCellSelect:r,onClearSelection:c,rowHeaderIndex:1})}}}]);