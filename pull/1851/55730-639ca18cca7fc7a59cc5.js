"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[55730],{85630:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(38416)),a=n(r(67294)),o=n(r(45697)),u=n(r(47166)),i=n(r(99722)),d=n(r(99254)),c=r(28409),s=n(r(56323));function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,l.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=u.default.bind(s.default),p={ariaLabelledBy:o.default.string,ariaLabel:o.default.string,id:o.default.string.isRequired,rows:o.default.arrayOf(d.default),columns:o.default.arrayOf(c.columnShape),defaultColumnWidth:o.default.number,columnHeaderHeight:o.default.string,rowHeight:o.default.string,onCellSelect:o.default.func,onClearSelectedCells:o.default.func};function b(e){var t=e.id,r=e.ariaLabelledBy,n=e.ariaLabel,l=e.rows,o=e.columns,u=e.defaultColumnWidth,d=e.columnHeaderHeight,c=e.rowHeight,s=e.onCellSelect,f=e.onClearSelectedCells;return a.default.createElement("div",{className:w("flowsheet-data-grid-container")},a.default.createElement(i.default,{id:t,ariaLabel:n,ariaLabelledBy:r,rows:l,rowHeight:c,rowHeaderIndex:0,pinnedColumns:o.length?[m(m({},o[0]),{},{isResizable:!1})]:[],overflowColumns:o.length>1?o.slice(1).map((function(e){return m(m({},e),{},{isResizable:!1})})):[],defaultColumnWidth:u,columnHeaderHeight:d,onCellSelect:s,onClearSelectedCells:f}))}b.propTypes=p,b.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",rows:[],columns:[]};t.default=b},51415:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),o=n(r(27424)),u=v(r(67294)),i=n(r(45697)),d=r(25387),c=n(r(47166)),s=v(r(51051)),f=n(r(29270)),m=n(r(99254)),w=r(28409),p=n(r(98834)),b=n(r(29877)),g=n(r(99722)),h=r(18952);function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(C=function(e){return e?r:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=C(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}var y=c.default.bind(b.default),S={ariaLabelledBy:i.default.string,ariaLabel:i.default.string,id:i.default.string.isRequired,rows:i.default.arrayOf(m.default),pinnedColumns:i.default.arrayOf(w.columnShape),overflowColumns:i.default.arrayOf(w.columnShape),defaultColumnWidth:i.default.number,columnHeaderHeight:i.default.string,rowHeight:i.default.string,rowHeaderIndex:p.default,onColumnResize:i.default.func,onCellSelect:i.default.func,onRowSelect:i.default.func,onRowSelectAll:i.default.func,onColumnSelect:i.default.func,onClearSelectedRows:i.default.func,onClearSelectedCells:i.default.func,onDisableSelectableRows:i.default.func,onEnableRowSelection:i.default.func,hasSelectableRows:i.default.bool,intl:i.default.shape({formatMessage:i.default.func}).isRequired};function O(e){var t,r=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,i=e.rows,d=e.pinnedColumns,c=e.overflowColumns,m=e.onColumnResize,w=e.defaultColumnWidth,p=e.columnHeaderHeight,b=e.rowHeight,C=e.onColumnSelect,v=e.onCellSelect,S=e.onRowSelect,O=e.onRowSelectAll,k=e.onClearSelectedRows,H=e.onClearSelectedCells,R=e.onDisableSelectableRows,_=e.onEnableRowSelection,D=e.hasSelectableRows,P=e.intl,j=e.rowHeaderIndex,M=(0,u.useRef)(!1),E=(0,u.useRef)([]),I=(0,u.useState)(null),x=(0,o.default)(I,2),G=x[0],L=x[1],W=(0,u.useState)(null),T=(0,o.default)(W,2),B=T[0],K=T[1],F=(0,u.useRef)(!1),z=(0,u.useRef)({start:null,end:null}),Y=(0,u.useRef)(),q=(0,u.useRef)(!1),A=null===(t=document.getElementById("".concat(r,"-worklist-data-grid-container")))||void 0===t?void 0:t.contains(document.activeElement);(0,u.useEffect)((function(){if(M.current){if(D||(z.current={},E.current=[]),K(P.formatMessage({id:D?"Terra.worklistDataGrid.row-selection-mode-enabled":"Terra.worklistDataGrid.row-selection-mode-disabled"})),q.current){var e=Y.current.getFocusedCell();e={row:e.row,col:Math.max(e.col+(D?1:-1),0)},Y.current.setFocusedRowCol(e.row,e.col,A)}}else M.current=!0}),[D]),(0,u.useEffect)((function(){var e=(0,a.default)(E.current);if(E.current=i.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===E.current.length)L(P.formatMessage({id:"Terra.worklistDataGrid.all-rows-unselected"}));else if(E.current.length===i.length)L(P.formatMessage({id:"Terra.worklistDataGrid.all-rows-selected"}));else{var t=E.current.filter((function(t){return!e.includes(t)})),r=e.filter((function(e){return!E.current.includes(e)})),n="";if(1===t.length){var l=i.findIndex((function(e){return e.id===t[0]})),o=i[l].ariaLabel||l+2;n=P.formatMessage({id:"Terra.worklistDataGrid.row-selection-template"},{row:o})}else t.length>1&&(n=P.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-selected"},{rowCount:t.length}));if(1===r.length){var u=i.findIndex((function(e){return e.id===r[0]})),d=i[u].ariaLabel||u+2;n+=P.formatMessage({id:"Terra.worklistDataGrid.row-selection-cleared-template"},{row:d})}else r.length>1&&(n+=P.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-unselected"},{rowCount:r.length}));n&&L(n)}}),[P,i]);var N=(0,u.useCallback)((function(){D?(z.current={},i.some((function(e){return e.isSelected}))?k&&k():R&&R()):H&&H()}),[D,H,k,R,i]),U=(0,u.useCallback)((function(e){var t=[];return z.current.end?(z.current.start>z.current.end?e>z.current.end&&(t=i.slice(z.current.end-1,Math.min(e,z.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):z.current.start<z.current.end&&e<z.current.end&&(t=i.slice(Math.max(z.current.start,e),z.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[i]),J=(0,u.useCallback)((function(e){if(D||_(),S){var t=Math.min(z.current.start,e),r=Math.max(z.current.start,e),n=i.slice(t-1,r).map((function(e){return{id:e.id,selected:!0}}));n=n.concat(U(e)),S(n),z.current.end=e}}),[D,_,S,i,U]),Q=(0,u.useCallback)((function(e,t){var r=[];i[t-1].isSelected?(t===z.current.start&&(z.current={}),r.push({id:e,selected:!1})):(z.current={start:t,end:null},r.push({id:e,selected:!0})),S&&S(r)}),[S,i]),V=(0,u.useCallback)((function(e,t,r){var n=e;r===s.KEY_UP?0===(n-=1)&&(n=1):r===s.KEY_DOWN&&(n+=1),F.current||(F.current=!0,z.current={start:e,end:null}),J(n)}),[J]),X=(0,u.useCallback)((function(e){D?e.isShiftPressed&&z.current.start?J(e.rowIndex):Q(e.rowId,e.rowIndex):e.isShiftPressed&&(z.current={start:e.rowIndex,end:null},J(e.rowIndex))}),[D,J,Q]),Z=(0,u.useCallback)((function(e){D||e.isShiftPressed?X(e):e.isCellSelectable&&v&&v(e.rowId,e.columnId)}),[X,D,v]);return u.default.createElement("div",{id:"".concat(r,"-worklist-data-grid-container"),onKeyDown:function(e){if(e.keyCode===s.KEY_A)D&&(e.ctrlKey||e.metaKey)&&(O&&O(),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===s.KEY_SHIFT)F.current=!1},className:y("worklist-data-grid-container"),onFocus:q.current?void 0:function(){q.current=!0}},u.default.createElement(g.default,{id:r,ariaLabel:l,ariaLabelledBy:n,rows:i.map((function(e){return(0,h.mapDataGridRow)(e)})),rowHeight:b,rowHeaderIndex:j,pinnedColumns:d.map((function(e){return(0,h.mapDataGridColumn)(e)})),overflowColumns:c.map((function(e){return(0,h.mapDataGridColumn)(e)})),defaultColumnWidth:w,columnHeaderHeight:p,onColumnSelect:C,onColumnResize:m,onCellSelect:Z,onClearSelection:N,onRangeSelection:V,hasSelectableRows:D,ref:Y}),u.default.createElement(f.default,{"aria-live":"polite",text:B}),u.default.createElement(f.default,{"aria-live":"polite",text:G}))}O.propTypes=S,O.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=(0,d.injectIntl)(O)},55730:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FlowsheetDataGrid",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WorklistDataGrid",{enumerable:!0,get:function(){return l.default}});var l=n(r(51415)),a=n(r(85630))},56323:function(e,t,r){r.r(t),t.default={"flowsheet-data-grid-container":"FlowsheetDataGrid-module__flowsheet-data-grid-container___O1y8B"}},29877:function(e,t,r){r.r(t),t.default={"worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___IbMs4"}}}]);