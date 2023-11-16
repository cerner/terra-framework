"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[55730],{85630:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),u=n(r(38416)),o=n(r(27424)),i=C(r(67294)),c=n(r(45697)),d=r(25387),f=n(r(47166)),s=C(r(51051)),m=n(r(29270)),w=n(r(99722)),b=n(r(99254)),p=r(28409),h=n(r(56323));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=a?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=f.default.bind(h.default),S={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(b.default),columns:c.default.arrayOf(p.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,onCellSelect:c.default.func,onClearSelectedCells:c.default.func,onCellRangeSelect:c.default.func,intl:c.default.shape({formatMessage:c.default.func}).isRequired,hasVisibleColumnHeaders:c.default.bool};function k(e){var t=e.id,r=e.ariaLabelledBy,n=e.ariaLabel,l=e.rows,u=e.columns,c=e.defaultColumnWidth,d=e.columnHeaderHeight,f=e.rowHeight,b=e.onCellSelect,p=e.onClearSelectedCells,h=e.onCellRangeSelect,g=e.intl,C=e.hasVisibleColumnHeaders,v=(0,i.useRef)(null),S=(0,i.useRef)([]),k=(0,i.useState)(null),I=(0,o.default)(k,2),j=I[0],_=I[1],R=(0,i.useRef)(!1),P=(0,i.useMemo)((function(){return u.map((function(e){return y(y({},e),{},{isSelectable:!0,isResizable:!1})}))}),[u]),E=P.length?[P[0]]:[],H=P.length>1?P.slice(1):[],M=(0,i.useMemo)((function(){var e=i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{"aria-hidden":!0},g.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),i.default.createElement(m.default,{text:g.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(l);return t.forEach((function(r,n){var l=(0,a.default)(r.cells);l.forEach((function(t,r){var n;l[r].isSelectable=!0,null!==(n=t.content)&&""!==n&&"--"!==n||0===r||(l[r].content=e)})),t[n].cells=l})),t}),[g,l]);(0,i.useEffect)((function(){var e=(0,a.default)(S.current),t=[];l.forEach((function(e){e.cells.forEach((function(r,n){r.isSelected&&t.push({rowId:e.id,columnId:u[n].id})}))})),S.current=[].concat(t),S.current.length||(v.current=null),e.length>0&&0===S.current.length?_(g.formatMessage({id:"Terra.flowsheetDataGrid.no-cells-selected"})):S.current.length&&_(g.formatMessage({id:"Terra.flowsheetDataGrid.cells-selected"},{cellCount:S.current.length}))}),[g,l,u,_]);var D=(0,i.useCallback)((function(){p&&p()}),[p]),x=(0,i.useCallback)((function(e,t){if(null!==v.current){for(var r=l.findIndex((function(e){return e.id===v.current.rowId})),n=u.findIndex((function(e){return e.id===v.current.columnId})),a=Math.min(r,e-1),o=Math.max(r,e-1),i=Math.min(n,t),c=Math.max(n,t),d=[],f=a;f<=o;f+=1)for(var s=l[f].id,m=i;m<=c;m+=1){var w=u[m].id;d.push({rowId:s,columnId:w})}h&&h(d)}}),[l,u,h]),T=(0,i.useCallback)((function(e){e.isShiftPressed&&null!==v.current&&e.columnIndex>0?x(e.rowIndex,e.columnIndex):b&&(e.columnIndex>0&&(v.current={rowId:e.rowId,columnId:e.columnId}),b(e.rowId,e.columnId))}),[b,x]),W=(0,i.useCallback)((function(e,t,r){if(!(t<=0)||R.current){R.current||(R.current=!0,null===v.current&&(v.current={rowId:l[e-1].id,columnId:u[t].id}));var n=e,a=t;switch(r){case s.KEY_UP:n-=1;break;case s.KEY_DOWN:n+=1;break;case s.KEY_LEFT:a-=1;break;case s.KEY_RIGHT:a+=1}n<=0?n=1:n>l.length&&(n=l.length),a<=0?a=1:a>=u.length&&(a=u.length-1),x(n,a)}}),[l,u,x]);return i.default.createElement("div",{className:O("flowsheet-data-grid-container"),onKeyUp:function(e){if(e.keyCode===s.KEY_SHIFT)R.current&&(R.current=!1,v.current=null)}},i.default.createElement(w.default,{id:t,ariaLabel:n,ariaLabelledBy:r,rows:M,rowHeight:f,rowHeaderIndex:0,pinnedColumns:E,overflowColumns:H,defaultColumnWidth:c,columnHeaderHeight:d,onCellSelect:T,onClearSelection:D,onCellRangeSelect:W,hasVisibleColumnHeaders:C}),i.default.createElement(m.default,{"aria-live":"polite",text:j}))}k.propTypes=S,k.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",rows:[],columns:[],hasVisibleColumnHeaders:!0};t.default=(0,d.injectIntl)(k)},51415:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),u=n(r(38416)),o=n(r(27424)),i=y(r(67294)),c=n(r(45697)),d=r(25387),f=n(r(47166)),s=y(r(51051)),m=n(r(29270)),w=n(r(99254)),b=r(28409),p=n(r(98834)),h=n(r(29877)),g=n(r(99722)),C=n(r(86843));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=a?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,r&&r.set(e,n),n}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,u.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=f.default.bind(h.default),I={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(w.default),pinnedColumns:c.default.arrayOf(b.columnShape),overflowColumns:c.default.arrayOf(b.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowHeaderIndex:p.default,onColumnResize:c.default.func,onCellSelect:c.default.func,onRowSelect:c.default.func,onRowSelectAll:c.default.func,onColumnSelect:c.default.func,onClearSelectedRows:c.default.func,onClearSelectedCells:c.default.func,onDisableSelectableRows:c.default.func,onEnableRowSelection:c.default.func,hasSelectableRows:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired};function j(e){var t,r=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,u=e.rows,c=e.pinnedColumns,d=e.overflowColumns,f=e.onColumnResize,w=e.defaultColumnWidth,b=e.columnHeaderHeight,p=e.rowHeight,h=e.onColumnSelect,v=e.onCellSelect,y=e.onRowSelect,O=e.onRowSelectAll,I=e.onClearSelectedRows,j=e.onClearSelectedCells,_=e.onDisableSelectableRows,R=e.onEnableRowSelection,P=e.hasSelectableRows,E=e.intl,H=e.rowHeaderIndex,M=(0,i.useRef)(!1),D=(0,i.useRef)([]),x=(0,i.useState)(null),T=(0,o.default)(x,2),W=T[0],G=T[1],L=(0,i.useState)(null),K=(0,o.default)(L,2),F=K[0],Y=K[1],B=(0,i.useRef)(!1),z=(0,i.useRef)({start:null,end:null}),N=(0,i.useRef)(),U=(0,i.useRef)(!1),q=null===(t=document.getElementById("".concat(r,"-worklist-data-grid-container")))||void 0===t?void 0:t.contains(document.activeElement),V=function(e){return e.map((function(e){return S(S({},e),{},{isResizable:!1!==e.isResizable,isSelectable:!1!==e.isSelectable})}))},A=V(c),J=V(d);(0,i.useEffect)((function(){if(M.current){if(P||(z.current={},D.current=[]),Y(E.formatMessage({id:P?"Terra.worklistDataGrid.row-selection-mode-enabled":"Terra.worklistDataGrid.row-selection-mode-disabled"})),U.current){var e=N.current.getFocusedCell();e={row:e.row,col:Math.max(e.col+(P?1:-1),0)},N.current.setFocusedRowCol(e.row,e.col,q)}}else M.current=!0}),[P]),(0,i.useEffect)((function(){var e=(0,a.default)(D.current);if(D.current=u.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===D.current.length)G(E.formatMessage({id:"Terra.worklistDataGrid.all-rows-unselected"}));else if(D.current.length===u.length)G(E.formatMessage({id:"Terra.worklistDataGrid.all-rows-selected"}));else{var t=D.current.filter((function(t){return!e.includes(t)})),r=e.filter((function(e){return!D.current.includes(e)})),n="";if(1===t.length){var l=u.findIndex((function(e){return e.id===t[0]})),o=u[l].ariaLabel||l+2;n=E.formatMessage({id:"Terra.worklistDataGrid.row-selection-template"},{row:o})}else t.length>1&&(n=E.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-selected"},{rowCount:t.length}));if(1===r.length){var i=u.findIndex((function(e){return e.id===r[0]})),c=u[i].ariaLabel||i+2;n+=E.formatMessage({id:"Terra.worklistDataGrid.row-selection-cleared-template"},{row:c})}else r.length>1&&(n+=E.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-unselected"},{rowCount:r.length}));n&&G(n)}}),[E,u]);var Q=(0,i.useCallback)((function(){P?(z.current={},u.some((function(e){return e.isSelected}))?I&&I():_&&_()):j&&j()}),[P,j,I,_,u]),X=(0,i.useCallback)((function(e){var t=[];return z.current.end?(z.current.start>z.current.end?e>z.current.end&&(t=u.slice(z.current.end-1,Math.min(e,z.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):z.current.start<z.current.end&&e<z.current.end&&(t=u.slice(Math.max(z.current.start,e),z.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[u]),Z=(0,i.useCallback)((function(e){if(P||R(),y){var t=Math.min(z.current.start,e),r=Math.max(z.current.start,e),n=u.slice(t-1,r).map((function(e){return{id:e.id,selected:!0}}));n=n.concat(X(e)),y(n),z.current.end=e}}),[P,R,y,u,X]),$=(0,i.useCallback)((function(e,t){var r=[];u[t-1].isSelected?(t===z.current.start&&(z.current={}),r.push({id:e,selected:!1})):(z.current={start:t,end:null},r.push({id:e,selected:!0})),y&&y(r)}),[y,u]),ee=(0,i.useCallback)((function(e,t,r){var n=e;r===s.KEY_UP?0===(n-=1)&&(n=1):r===s.KEY_DOWN&&(n+=1),B.current||(B.current=!0,z.current={start:e,end:null}),Z(n)}),[Z]),te=(0,i.useCallback)((function(e){P?e.isShiftPressed&&z.current.start?Z(e.rowIndex):$(e.rowId,e.rowIndex):e.isShiftPressed&&(z.current={start:e.rowIndex,end:null},Z(e.rowIndex))}),[P,Z,$]),re=(0,i.useCallback)((function(e){P||e.isShiftPressed?te(e):e.isCellSelectable&&v&&v(e.rowId,e.columnId)}),[te,P,v]),ne=(0,i.useCallback)((function(e){h(e)}),[h]),le=(0,i.useCallback)((function(){h(C.default.ROW_SELECTION_COLUMN.id)}),[h]);return i.default.createElement("div",{id:"".concat(r,"-worklist-data-grid-container"),onKeyDown:function(e){if(e.keyCode===s.KEY_A)P&&(e.ctrlKey||e.metaKey)&&(O&&O(),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===s.KEY_SHIFT)B.current=!1},className:k("worklist-data-grid-container"),onFocus:U.current?void 0:function(){U.current=!0}},i.default.createElement(g.default,{id:r,ariaLabel:l,ariaLabelledBy:n,rows:u,rowHeight:p,rowHeaderIndex:H,pinnedColumns:A,overflowColumns:J,defaultColumnWidth:w,columnHeaderHeight:b,onColumnSelect:h?ne:void 0,onRowSelectionHeaderSelect:h?le:void 0,onColumnResize:f,onCellSelect:re,onClearSelection:Q,onRangeSelection:ee,hasSelectableRows:P,ref:N}),i.default.createElement(m.default,{"aria-live":"polite",text:F}),i.default.createElement(m.default,{"aria-live":"polite",text:W}))}j.propTypes=I,j.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=(0,d.injectIntl)(j)},55730:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FlowsheetDataGrid",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WorklistDataGrid",{enumerable:!0,get:function(){return l.default}});var l=n(r(51415)),a=n(r(85630))},56323:function(e,t,r){r.r(t),t.default={"flowsheet-data-grid-container":"FlowsheetDataGrid-module__flowsheet-data-grid-container___O1y8B"}},29877:function(e,t,r){r.r(t),t.default={"worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___IbMs4"}}}]);