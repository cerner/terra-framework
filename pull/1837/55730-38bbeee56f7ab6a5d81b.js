"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[55730],{81031:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(67294)),a=n(r(45697)),o=n(r(47166)),u=n(r(99722)),i=n(r(99254)),d=r(28409),c=n(r(32699)),f=r(31429),s=o.default.bind(c.default),m={ariaLabelledBy:a.default.string,ariaLabel:a.default.string,id:a.default.string.isRequired,rows:a.default.arrayOf(i.default),columns:a.default.arrayOf(d.columnShape),defaultColumnWidth:a.default.number,columnHeaderHeight:a.default.string,rowHeight:a.default.string,fitContentRowHight:a.default.bool,hideColumnHeader:a.default.bool,zebraPatternOn:a.default.bool,numberOfColumns:a.default.number},w=function(e){var t=e.id,r=e.ariaLabelledBy,n=e.ariaLabel,a=e.rows,o=e.columns,i=e.defaultColumnWidth,d=e.columnHeaderHeight,c=e.numberOfColumns,m=e.rowHeight,w=e.fitContentRowHight,b=e.hideColumnHeader,g=e.zebraPatternOn;return l.default.createElement("div",{className:s("compact-intercative-list-container")},l.default.createElement(u.default,{id:t,ariaLabel:n,ariaLabelledBy:r,rows:(0,f.getRows)(a,c),rowHeight:m,rowHeaderIndex:0,overflowColumns:(0,f.getColumns)(o,c),defaultColumnWidth:i,columnHeaderHeight:d,hideColumnHeader:b,fitContentRowHight:w,hasSelectableRows:!1,zebraPatternOn:g}))};w.propTypes=m,w.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",rows:[],columns:[],fitContentRowHight:!0,hideColumnHeader:!0,numberOfColumns:1};t.default=w},85630:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(38416)),a=n(r(67294)),o=n(r(45697)),u=n(r(47166)),i=n(r(99722)),d=n(r(99254)),c=r(28409),f=n(r(56323));function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,l.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=u.default.bind(f.default),b={ariaLabelledBy:o.default.string,ariaLabel:o.default.string,id:o.default.string.isRequired,rows:o.default.arrayOf(d.default),columns:o.default.arrayOf(c.columnShape),defaultColumnWidth:o.default.number,columnHeaderHeight:o.default.string,rowHeight:o.default.string,onCellSelect:o.default.func,onClearSelectedCells:o.default.func};function g(e){var t=e.id,r=e.ariaLabelledBy,n=e.ariaLabel,l=e.rows,o=e.columns,u=e.defaultColumnWidth,d=e.columnHeaderHeight,c=e.rowHeight,f=e.onCellSelect,s=e.onClearSelectedCells;return a.default.createElement("div",{className:w("flowsheet-data-grid-container")},a.default.createElement(i.default,{id:t,ariaLabel:n,ariaLabelledBy:r,rows:l,rowHeight:c,rowHeaderIndex:0,pinnedColumns:o.length?[m(m({},o[0]),{},{isResizable:!1})]:[],overflowColumns:o.length>1?o.slice(1).map((function(e){return m(m({},e),{},{isResizable:!1})})):[],defaultColumnWidth:u,columnHeaderHeight:d,onCellSelect:f,onClearSelectedCells:s}))}g.propTypes=b,g.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",rows:[],columns:[]};t.default=g},51415:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),o=n(r(27424)),u=C(r(67294)),i=n(r(45697)),d=r(25387),c=n(r(47166)),f=C(r(51051)),s=n(r(29270)),m=n(r(99254)),w=r(28409),b=n(r(98834)),g=n(r(29877)),p=n(r(99722));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}var v=c.default.bind(g.default),y={ariaLabelledBy:i.default.string,ariaLabel:i.default.string,id:i.default.string.isRequired,rows:i.default.arrayOf(m.default),pinnedColumns:i.default.arrayOf(w.columnShape),overflowColumns:i.default.arrayOf(w.columnShape),defaultColumnWidth:i.default.number,columnHeaderHeight:i.default.string,rowHeight:i.default.string,rowHeaderIndex:b.default,onColumnResize:i.default.func,onCellSelect:i.default.func,onRowSelect:i.default.func,onRowSelectAll:i.default.func,onColumnSelect:i.default.func,onClearSelectedRows:i.default.func,onClearSelectedCells:i.default.func,onDisableSelectableRows:i.default.func,onEnableRowSelection:i.default.func,hasSelectableRows:i.default.bool,intl:i.default.shape({formatMessage:i.default.func}).isRequired};function O(e){var t,r=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,i=e.rows,d=e.pinnedColumns,c=e.overflowColumns,m=e.onColumnResize,w=e.defaultColumnWidth,b=e.columnHeaderHeight,g=e.rowHeight,h=e.onColumnSelect,C=e.onCellSelect,y=e.onRowSelect,O=e.onRowSelectAll,H=e.onClearSelectedRows,S=e.onClearSelectedCells,P=e.onDisableSelectableRows,R=e.onEnableRowSelection,j=e.hasSelectableRows,k=e.intl,_=e.rowHeaderIndex,D=(0,u.useRef)(!1),E=(0,u.useRef)([]),M=(0,u.useState)(null),L=(0,o.default)(M,2),I=L[0],W=L[1],x=(0,u.useState)(null),G=(0,o.default)(x,2),T=G[0],B=G[1],z=(0,u.useRef)(!1),K=(0,u.useRef)({start:null,end:null}),F=(0,u.useRef)(),q=(0,u.useRef)(!1),N=null===(t=document.getElementById("".concat(r,"-worklist-data-grid-container")))||void 0===t?void 0:t.contains(document.activeElement);(0,u.useEffect)((function(){if(D.current){if(j||(K.current={},E.current=[]),B(k.formatMessage({id:j?"Terra.worklistDataGrid.row-selection-mode-enabled":"Terra.worklistDataGrid.row-selection-mode-disabled"})),q.current){var e=F.current.getFocusedCell();e={row:e.row,col:Math.max(e.col+(j?1:-1),0)},F.current.setFocusedRowCol(e.row,e.col,N)}}else D.current=!0}),[j]),(0,u.useEffect)((function(){var e=(0,a.default)(E.current);if(E.current=i.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===E.current.length)W(k.formatMessage({id:"Terra.worklistDataGrid.all-rows-unselected"}));else if(E.current.length===i.length)W(k.formatMessage({id:"Terra.worklistDataGrid.all-rows-selected"}));else{var t=E.current.filter((function(t){return!e.includes(t)})),r=e.filter((function(e){return!E.current.includes(e)})),n="";if(1===t.length){var l=i.findIndex((function(e){return e.id===t[0]})),o=i[l].ariaLabel||l+2;n=k.formatMessage({id:"Terra.worklistDataGrid.row-selection-template"},{row:o})}else t.length>1&&(n=k.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-selected"},{rowCount:t.length}));if(1===r.length){var u=i.findIndex((function(e){return e.id===r[0]})),d=i[u].ariaLabel||u+2;n+=k.formatMessage({id:"Terra.worklistDataGrid.row-selection-cleared-template"},{row:d})}else r.length>1&&(n+=k.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-unselected"},{rowCount:r.length}));n&&W(n)}}),[k,i]);var Y=(0,u.useCallback)((function(){j?(K.current={},i.some((function(e){return e.isSelected}))?H&&H():P&&P()):S&&S()}),[j,S,H,P,i]),A=(0,u.useCallback)((function(e){var t=[];return K.current.end?(K.current.start>K.current.end?e>K.current.end&&(t=i.slice(K.current.end-1,Math.min(e,K.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):K.current.start<K.current.end&&e<K.current.end&&(t=i.slice(Math.max(K.current.start,e),K.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[i]),U=(0,u.useCallback)((function(e){if(j||R(),y){var t=Math.min(K.current.start,e),r=Math.max(K.current.start,e),n=i.slice(t-1,r).map((function(e){return{id:e.id,selected:!0}}));n=n.concat(A(e)),y(n),K.current.end=e}}),[j,R,y,i,A]),J=(0,u.useCallback)((function(e,t){var r=[];i[t-1].isSelected?(t===K.current.start&&(K.current={}),r.push({id:e,selected:!1})):(K.current={start:t,end:null},r.push({id:e,selected:!0})),y&&y(r)}),[y,i]),Q=(0,u.useCallback)((function(e,t,r){var n=e;r===f.KEY_UP?0===(n-=1)&&(n=1):r===f.KEY_DOWN&&(n+=1),z.current||(z.current=!0,K.current={start:e,end:null}),U(n)}),[U]),V=(0,u.useCallback)((function(e){j?e.isShiftPressed&&K.current.start?U(e.rowIndex):J(e.rowId,e.rowIndex):e.isShiftPressed&&(K.current={start:e.rowIndex,end:null},U(e.rowIndex))}),[j,U,J]),X=(0,u.useCallback)((function(e){j||e.isShiftPressed?V(e):e.isCellSelectable&&C&&C(e.rowId,e.columnId)}),[V,j,C]);return u.default.createElement("div",{id:"".concat(r,"-worklist-data-grid-container"),onKeyDown:function(e){if(e.keyCode===f.KEY_A)j&&(e.ctrlKey||e.metaKey)&&(O&&O(),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===f.KEY_SHIFT)z.current=!1},className:v("worklist-data-grid-container"),onFocus:!q.current&&function(){q.current=!0}},u.default.createElement(p.default,{id:r,ariaLabel:l,ariaLabelledBy:n,rows:i,rowHeight:g,rowHeaderIndex:_,pinnedColumns:d,overflowColumns:c,defaultColumnWidth:w,columnHeaderHeight:b,onColumnSelect:h,onColumnResize:m,onCellSelect:X,onClearSelection:Y,onRangeSelection:Q,hasSelectableRows:j,ref:F}),u.default.createElement(s.default,{"aria-live":"polite",text:T}),u.default.createElement(s.default,{"aria-live":"polite",text:I}))}O.propTypes=y,O.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=(0,d.injectIntl)(O)},55730:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"CompactInteractiveList",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"FlowsheetDataGrid",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WorklistDataGrid",{enumerable:!0,get:function(){return l.default}});var l=n(r(51415)),a=n(r(85630)),o=n(r(81031))},31429:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.getRows=t.getColumns=void 0;var l=n(r(861)),a=n(r(38416));function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.getColumns=function(e,t){for(var r=[],n=function(t){e.map((function(e,n){return r.push(u(u({},e),{},{id:"visual-column".concat(t,"-semantic-column-").concat(n+1)}))}))},l=1;l<=t;l+=1)n(l);return r},t.getRows=function(e,t){var r=[],n=1,a=[];return e.forEach((function(o,u){var i;(i=a).push.apply(i,(0,l.default)(o.cells)),((n+=1)>t||u===e.length-1)&&(r.push({cells:a,id:u}),a=[],n=1)})),r}},56323:function(e,t,r){r.r(t),t.default={"flowsheet-data-grid-container":"FlowsheetDataGrid-module__flowsheet-data-grid-container___O1y8B"}},29877:function(e,t,r){r.r(t),t.default={"worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___IbMs4"}}}]);