"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[55730],{85630:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),o=n(r(38416)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(67294)),i=n(r(45697)),c=r(25387),d=n(r(47166)),f=n(r(29270)),s=n(r(99722)),w=n(r(99254)),m=r(28409),p=n(r(56323));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=d.default.bind(p.default),y={ariaLabelledBy:i.default.string,ariaLabel:i.default.string,id:i.default.string.isRequired,rows:i.default.arrayOf(w.default),columns:i.default.arrayOf(m.columnShape),defaultColumnWidth:i.default.number,columnHeaderHeight:i.default.string,rowHeight:i.default.string,onCellSelect:i.default.func,onClearSelectedCells:i.default.func,intl:i.default.shape({formatMessage:i.default.func}).isRequired};function C(e){var t=e.id,r=e.ariaLabelledBy,n=e.ariaLabel,l=e.rows,o=e.columns,i=e.defaultColumnWidth,c=e.columnHeaderHeight,d=e.rowHeight,w=e.onCellSelect,m=e.onClearSelectedCells,p=e.intl,b=(0,u.useMemo)((function(){return o.map((function(e){return h(h({},e),{},{isSelectable:!1!==e.isSelectable,isResizable:!1})}))}),[o]),g=b.length?[b[0]]:[],y=b.length>1?b.slice(1):[],C=(0,u.useMemo)((function(){var e=u.default.createElement(u.default.Fragment,null,u.default.createElement("span",{"aria-hidden":!0},p.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),u.default.createElement(f.default,{text:p.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(l);return t.forEach((function(r,n){var l=(0,a.default)(r.cells);l.forEach((function(t,r){var n;l[r].isSelectable=!1!==t.isSelectable,null!==(n=t.content)&&""!==n&&"--"!==n||0===r||(l[r].content=e)})),t[n].cells=l})),t}),[p,l]);return u.default.createElement("div",{className:O("flowsheet-data-grid-container")},u.default.createElement(s.default,{id:t,ariaLabel:n,ariaLabelledBy:r,rows:C,rowHeight:d,rowHeaderIndex:0,pinnedColumns:g,overflowColumns:y,defaultColumnWidth:i,columnHeaderHeight:c,onCellSelect:w,onClearSelectedCells:m}))}C.propTypes=y,C.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",rows:[],columns:[]};t.default=(0,c.injectIntl)(C)},51415:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),o=n(r(38416)),u=n(r(27424)),i=C(r(67294)),c=n(r(45697)),d=r(25387),f=n(r(47166)),s=C(r(51051)),w=n(r(29270)),m=n(r(99254)),p=r(28409),b=n(r(98834)),g=n(r(29877)),h=n(r(99722)),O=n(r(86843));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=f.default.bind(g.default),k={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(m.default),pinnedColumns:c.default.arrayOf(p.columnShape),overflowColumns:c.default.arrayOf(p.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowHeaderIndex:b.default,onColumnResize:c.default.func,onCellSelect:c.default.func,onRowSelect:c.default.func,onRowSelectAll:c.default.func,onColumnSelect:c.default.func,onClearSelectedRows:c.default.func,onClearSelectedCells:c.default.func,onDisableSelectableRows:c.default.func,onEnableRowSelection:c.default.func,hasSelectableRows:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired};function _(e){var t,r=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,o=e.rows,c=e.pinnedColumns,d=e.overflowColumns,f=e.onColumnResize,m=e.defaultColumnWidth,p=e.columnHeaderHeight,b=e.rowHeight,g=e.onColumnSelect,y=e.onCellSelect,C=e.onRowSelect,v=e.onRowSelectAll,k=e.onClearSelectedRows,_=e.onClearSelectedCells,P=e.onDisableSelectableRows,R=e.onEnableRowSelection,M=e.hasSelectableRows,D=e.intl,E=e.rowHeaderIndex,H=(0,i.useRef)(!1),I=(0,i.useRef)([]),L=(0,i.useState)(null),W=(0,u.default)(L,2),x=W[0],T=W[1],G=(0,i.useState)(null),B=(0,u.default)(G,2),K=B[0],F=B[1],N=(0,i.useRef)(!1),z=(0,i.useRef)({start:null,end:null}),q=(0,i.useRef)(),A=(0,i.useRef)(!1),U=null===(t=document.getElementById("".concat(r,"-worklist-data-grid-container")))||void 0===t?void 0:t.contains(document.activeElement),Y=function(e){return e.map((function(e){return S(S({},e),{},{isResizable:!1!==e.isResizable,isSelectable:!1!==e.isSelectable})}))},J=Y(c),Q=Y(d);(0,i.useEffect)((function(){if(H.current){if(M||(z.current={},I.current=[]),F(D.formatMessage({id:M?"Terra.worklistDataGrid.row-selection-mode-enabled":"Terra.worklistDataGrid.row-selection-mode-disabled"})),A.current){var e=q.current.getFocusedCell();e={row:e.row,col:Math.max(e.col+(M?1:-1),0)},q.current.setFocusedRowCol(e.row,e.col,U)}}else H.current=!0}),[M]),(0,i.useEffect)((function(){var e=(0,a.default)(I.current);if(I.current=o.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===I.current.length)T(D.formatMessage({id:"Terra.worklistDataGrid.all-rows-unselected"}));else if(I.current.length===o.length)T(D.formatMessage({id:"Terra.worklistDataGrid.all-rows-selected"}));else{var t=I.current.filter((function(t){return!e.includes(t)})),r=e.filter((function(e){return!I.current.includes(e)})),n="";if(1===t.length){var l=o.findIndex((function(e){return e.id===t[0]})),u=o[l].ariaLabel||l+2;n=D.formatMessage({id:"Terra.worklistDataGrid.row-selection-template"},{row:u})}else t.length>1&&(n=D.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-selected"},{rowCount:t.length}));if(1===r.length){var i=o.findIndex((function(e){return e.id===r[0]})),c=o[i].ariaLabel||i+2;n+=D.formatMessage({id:"Terra.worklistDataGrid.row-selection-cleared-template"},{row:c})}else r.length>1&&(n+=D.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-unselected"},{rowCount:r.length}));n&&T(n)}}),[D,o]);var V=(0,i.useCallback)((function(){M?(z.current={},o.some((function(e){return e.isSelected}))?k&&k():P&&P()):_&&_()}),[M,_,k,P,o]),X=(0,i.useCallback)((function(e){var t=[];return z.current.end?(z.current.start>z.current.end?e>z.current.end&&(t=o.slice(z.current.end-1,Math.min(e,z.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):z.current.start<z.current.end&&e<z.current.end&&(t=o.slice(Math.max(z.current.start,e),z.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[o]),Z=(0,i.useCallback)((function(e){if(M||R(),C){var t=Math.min(z.current.start,e),r=Math.max(z.current.start,e),n=o.slice(t-1,r).map((function(e){return{id:e.id,selected:!0}}));n=n.concat(X(e)),C(n),z.current.end=e}}),[M,R,C,o,X]),$=(0,i.useCallback)((function(e,t){var r=[];o[t-1].isSelected?(t===z.current.start&&(z.current={}),r.push({id:e,selected:!1})):(z.current={start:t,end:null},r.push({id:e,selected:!0})),C&&C(r)}),[C,o]),ee=(0,i.useCallback)((function(e,t,r){var n=e;r===s.KEY_UP?0===(n-=1)&&(n=1):r===s.KEY_DOWN&&(n+=1),N.current||(N.current=!0,z.current={start:e,end:null}),Z(n)}),[Z]),te=(0,i.useCallback)((function(e){M?e.isShiftPressed&&z.current.start?Z(e.rowIndex):$(e.rowId,e.rowIndex):e.isShiftPressed&&(z.current={start:e.rowIndex,end:null},Z(e.rowIndex))}),[M,Z,$]),re=(0,i.useCallback)((function(e){M||e.isShiftPressed?te(e):e.isCellSelectable&&y&&y(e.rowId,e.columnId)}),[te,M,y]),ne=(0,i.useCallback)((function(e){e===O.default.TABLE_ROW_SELECTION_COLUMN.id?g(O.default.ROW_SELECTION_COLUMN.id):g(e)}),[g]);return i.default.createElement("div",{id:"".concat(r,"-worklist-data-grid-container"),onKeyDown:function(e){if(e.keyCode===s.KEY_A)M&&(e.ctrlKey||e.metaKey)&&(v&&v(),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===s.KEY_SHIFT)N.current=!1},className:j("worklist-data-grid-container"),onFocus:A.current?void 0:function(){A.current=!0}},i.default.createElement(h.default,{id:r,ariaLabel:l,ariaLabelledBy:n,rows:o,rowHeight:b,rowHeaderIndex:E,pinnedColumns:J,overflowColumns:Q,defaultColumnWidth:m,columnHeaderHeight:p,onColumnSelect:g?ne:void 0,onColumnResize:f,onCellSelect:re,onClearSelection:V,onRangeSelection:ee,hasSelectableRows:M,ref:q}),i.default.createElement(w.default,{"aria-live":"polite",text:K}),i.default.createElement(w.default,{"aria-live":"polite",text:x}))}_.propTypes=k,_.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=(0,d.injectIntl)(_)},55730:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FlowsheetDataGrid",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WorklistDataGrid",{enumerable:!0,get:function(){return l.default}});var l=n(r(51415)),a=n(r(85630))},56323:function(e,t,r){r.r(t),t.default={"flowsheet-data-grid-container":"FlowsheetDataGrid-module__flowsheet-data-grid-container___O1y8B"}},29877:function(e,t,r){r.r(t),t.default={"worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___IbMs4"}}}]);