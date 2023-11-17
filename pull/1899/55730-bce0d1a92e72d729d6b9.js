"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[55730],{85630:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),o=n(r(38416)),u=n(r(27424)),c=g(r(67294)),i=n(r(45697)),d=r(25387),s=n(r(47166)),f=g(r(51051)),m=n(r(29270)),w=r(12810),h=n(r(99722)),p=n(r(56323));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(b=function(e){return e?r:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=b(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=s.default.bind(p.default),y={ariaLabelledBy:i.default.string,ariaLabel:i.default.string,id:i.default.string.isRequired,rows:i.default.arrayOf(w.rowShape),sections:i.default.arrayOf(w.sectionShape),columns:i.default.arrayOf(w.columnShape),defaultColumnWidth:i.default.number,columnHeaderHeight:i.default.string,rowHeight:i.default.string,onCellSelect:i.default.func,onSectionSelect:i.default.func,onClearSelectedCells:i.default.func,onCellRangeSelect:i.default.func,intl:i.default.shape({formatMessage:i.default.func}).isRequired,hasVisibleColumnHeaders:i.default.bool};function O(e){var t=e.id,r=e.ariaLabelledBy,n=e.ariaLabel,l=e.rows,o=e.sections,i=e.columns,d=e.defaultColumnWidth,s=e.columnHeaderHeight,w=e.rowHeight,p=e.onCellSelect,b=e.onSectionSelect,g=e.onClearSelectedCells,C=e.onCellRangeSelect,y=e.intl,O=e.hasVisibleColumnHeaders,k=(0,c.useRef)(null),E=(0,c.useRef)([]),I=(0,c.useState)(null),j=(0,u.default)(I,2),R=j[0],_=j[1],M=(0,c.useRef)(!1),P=(0,c.useMemo)((function(){return i.map((function(e){return v(v({},e),{},{isSelectable:!1,isResizable:!1})}))}),[i]),H=P.length?[P[0]]:[],D=P.length>1?P.slice(1):[],x=function(e){return null===e||""===e||"--"===e},T=(0,c.useMemo)((function(){var e=c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{"aria-hidden":!0},y.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),c.default.createElement(m.default,{text:y.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(l);return t.forEach((function(r,n){var l=(0,a.default)(r.cells);l.forEach((function(t,r){l[r].isSelectable=!0,x(t.content)&&0!==r&&(l[r].content=e)})),t[n].cells=l})),t}),[y,l]),G=(0,c.useMemo)((function(){if(!o)return null;var e=c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{"aria-hidden":!0},y.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),c.default.createElement(m.default,{text:y.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(o);return t.forEach((function(r,n){var l=(0,a.default)(r.rows);l.forEach((function(t,r){var n=(0,a.default)(t.cells);n.forEach((function(t,r){n[r].isSelectable=!1!==t.isSelectable,x(t.content)&&0!==r&&(n[r].content=e)})),l[r].cells=n})),t[n].rows=l})),t}),[y,o]);(0,c.useEffect)((function(){var e=(0,a.default)(E.current),t=[];l.forEach((function(e){e.cells.forEach((function(r,n){r.isSelected&&t.push({rowId:e.id,columnId:i[n].id})}))})),E.current=[].concat(t),E.current.length||(k.current=null),e.length>0&&0===E.current.length?_(y.formatMessage({id:"Terra.flowsheetDataGrid.no-cells-selected"})):E.current.length&&_(y.formatMessage({id:"Terra.flowsheetDataGrid.cells-selected"},{cellCount:E.current.length}))}),[y,l,i,_]);var W=(0,c.useCallback)((function(e,t){for(var r=l.findIndex((function(e){return e.id===k.current.rowId})),n=i.findIndex((function(e){return e.id===k.current.columnId})),a=Math.min(r,e-1),o=Math.max(r,e-1),u=Math.min(n,t),c=Math.max(n,t),d=[],s=a;s<=o;s+=1)for(var f=l[s].id,m=u;m<=c;m+=1){var w=i[m].id;d.push({rowId:f,columnId:w})}C&&C(d)}),[l,i,C]),L=(0,c.useCallback)((function(e){0!==e.columnIndex&&(e.isShiftPressed&&null!==k.current?W(e.rowIndex,e.columnIndex):p&&(k.current={rowId:e.rowId,columnId:e.columnId},p(e.rowId,e.columnId)))}),[p,W]),K=(0,c.useCallback)((function(e,t,r){if(!(t<=0)||M.current){M.current||(M.current=!0,null===k.current&&(k.current={rowId:l[e-1].id,columnId:i[t].id}));var n=e,a=t;switch(r){case f.KEY_UP:n-=1;break;case f.KEY_DOWN:n+=1;break;case f.KEY_LEFT:a-=1;break;case f.KEY_RIGHT:a+=1}n<=0?n=1:n>l.length&&(n=l.length),a<=0?a=1:a>=i.length&&(a=i.length-1),W(n,a)}}),[l,i,W]);return c.default.createElement("div",{className:S("flowsheet-data-grid-container"),onKeyUp:function(e){if(e.keyCode===f.KEY_SHIFT)M.current&&(M.current=!1,k.current=null)}},c.default.createElement(h.default,{id:t,ariaLabel:n,ariaLabelledBy:r,rows:T,sections:G,rowHeight:w,rowHeaderIndex:0,pinnedColumns:H,overflowColumns:D,defaultColumnWidth:d,columnHeaderHeight:s,onCellSelect:L,onSectionSelect:b,onClearSelection:g,onCellRangeSelect:K,hasVisibleColumnHeaders:O}),c.default.createElement(m.default,{"aria-live":"polite",text:R}))}O.propTypes=y,O.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",rows:[],columns:[],hasVisibleColumnHeaders:!0};t.default=(0,d.injectIntl)(O)},51415:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),o=n(r(38416)),u=n(r(27424)),c=C(r(67294)),i=n(r(45697)),d=r(25387),s=n(r(47166)),f=C(r(51051)),m=n(r(29270)),w=r(12810),h=n(r(29877)),p=n(r(99722)),b=n(r(86843));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=s.default.bind(h.default),O={ariaLabelledBy:i.default.string,ariaLabel:i.default.string,id:i.default.string.isRequired,rows:i.default.arrayOf(w.rowShape),pinnedColumns:i.default.arrayOf(w.columnShape),overflowColumns:i.default.arrayOf(w.columnShape),defaultColumnWidth:i.default.number,columnHeaderHeight:i.default.string,rowHeight:i.default.string,rowHeaderIndex:w.validateRowHeaderIndex,onColumnResize:i.default.func,onCellSelect:i.default.func,onRowSelect:i.default.func,onRowSelectAll:i.default.func,onColumnSelect:i.default.func,onClearSelectedRows:i.default.func,onClearSelectedCells:i.default.func,onDisableSelectableRows:i.default.func,onEnableRowSelection:i.default.func,hasSelectableRows:i.default.bool,intl:i.default.shape({formatMessage:i.default.func}).isRequired};function k(e){var t,r=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,o=e.rows,i=e.pinnedColumns,d=e.overflowColumns,s=e.onColumnResize,w=e.defaultColumnWidth,h=e.columnHeaderHeight,g=e.rowHeight,C=e.onColumnSelect,v=e.onCellSelect,O=e.onRowSelect,k=e.onRowSelectAll,E=e.onClearSelectedRows,I=e.onClearSelectedCells,j=e.onDisableSelectableRows,R=e.onEnableRowSelection,_=e.hasSelectableRows,M=e.intl,P=e.rowHeaderIndex,H=(0,c.useRef)(!1),D=(0,c.useRef)([]),x=(0,c.useState)(null),T=(0,u.default)(x,2),G=T[0],W=T[1],L=(0,c.useState)(null),K=(0,u.default)(L,2),F=K[0],Y=K[1],B=(0,c.useRef)(!1),z=(0,c.useRef)({start:null,end:null}),N=(0,c.useRef)(),U=(0,c.useRef)(!1),q=null===(t=document.getElementById("".concat(r,"-worklist-data-grid-container")))||void 0===t?void 0:t.contains(document.activeElement),V=function(e){return e.map((function(e){return S(S({},e),{},{isResizable:!1!==e.isResizable,isSelectable:!1!==e.isSelectable})}))},A=V(i),J=V(d);(0,c.useEffect)((function(){if(H.current){if(_||(z.current={},D.current=[]),Y(M.formatMessage({id:_?"Terra.worklistDataGrid.row-selection-mode-enabled":"Terra.worklistDataGrid.row-selection-mode-disabled"})),U.current){var e=N.current.getFocusedCell();e={row:e.row,col:Math.max(e.col+(_?1:-1),0)},N.current.setFocusedRowCol(e.row,e.col,q)}}else H.current=!0}),[_]),(0,c.useEffect)((function(){var e=(0,a.default)(D.current);if(D.current=o.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===D.current.length)W(M.formatMessage({id:"Terra.worklistDataGrid.all-rows-unselected"}));else if(D.current.length===o.length)W(M.formatMessage({id:"Terra.worklistDataGrid.all-rows-selected"}));else{var t=D.current.filter((function(t){return!e.includes(t)})),r=e.filter((function(e){return!D.current.includes(e)})),n="";if(1===t.length){var l=o.findIndex((function(e){return e.id===t[0]})),u=o[l].ariaLabel||l+2;n=M.formatMessage({id:"Terra.worklistDataGrid.row-selection-template"},{row:u})}else t.length>1&&(n=M.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-selected"},{rowCount:t.length}));if(1===r.length){var c=o.findIndex((function(e){return e.id===r[0]})),i=o[c].ariaLabel||c+2;n+=M.formatMessage({id:"Terra.worklistDataGrid.row-selection-cleared-template"},{row:i})}else r.length>1&&(n+=M.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-unselected"},{rowCount:r.length}));n&&W(n)}}),[M,o]);var Q=(0,c.useCallback)((function(){_?(z.current={},o.some((function(e){return e.isSelected}))?E&&E():j&&j()):I&&I()}),[_,I,E,j,o]),X=(0,c.useCallback)((function(e){var t=[];return z.current.end?(z.current.start>z.current.end?e>z.current.end&&(t=o.slice(z.current.end-1,Math.min(e,z.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):z.current.start<z.current.end&&e<z.current.end&&(t=o.slice(Math.max(z.current.start,e),z.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[o]),Z=(0,c.useCallback)((function(e){if(_||R(),O){var t=Math.min(z.current.start,e),r=Math.max(z.current.start,e),n=o.slice(t-1,r).map((function(e){return{id:e.id,selected:!0}}));n=n.concat(X(e)),O(n),z.current.end=e}}),[_,R,O,o,X]),$=(0,c.useCallback)((function(e,t){var r=[];o[t-1].isSelected?(t===z.current.start&&(z.current={}),r.push({id:e,selected:!1})):(z.current={start:t,end:null},r.push({id:e,selected:!0})),O&&O(r)}),[O,o]),ee=(0,c.useCallback)((function(e,t,r){var n=e;r===f.KEY_UP?0===(n-=1)&&(n=1):r===f.KEY_DOWN&&(n+=1),B.current||(B.current=!0,z.current={start:e,end:null}),Z(n)}),[Z]),te=(0,c.useCallback)((function(e){_?e.isShiftPressed&&z.current.start?Z(e.rowIndex):$(e.rowId,e.rowIndex):e.isShiftPressed&&(z.current={start:e.rowIndex,end:null},Z(e.rowIndex))}),[_,Z,$]),re=(0,c.useCallback)((function(e){_||e.isShiftPressed?te(e):e.isCellSelectable&&v&&v(e.rowId,e.columnId)}),[te,_,v]),ne=(0,c.useCallback)((function(e){C(e)}),[C]),le=(0,c.useCallback)((function(){C(b.default.ROW_SELECTION_COLUMN.id)}),[C]);return c.default.createElement("div",{id:"".concat(r,"-worklist-data-grid-container"),onKeyDown:function(e){if(e.keyCode===f.KEY_A)_&&(e.ctrlKey||e.metaKey)&&(k&&k(),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===f.KEY_SHIFT)B.current=!1},className:y("worklist-data-grid-container"),onFocus:U.current?void 0:function(){U.current=!0}},c.default.createElement(p.default,{id:r,ariaLabel:l,ariaLabelledBy:n,rows:o,rowHeight:g,rowHeaderIndex:P,pinnedColumns:A,overflowColumns:J,defaultColumnWidth:w,columnHeaderHeight:h,onColumnSelect:C?ne:void 0,onRowSelectionHeaderSelect:C?le:void 0,onColumnResize:s,onCellSelect:re,onClearSelection:Q,onRangeSelection:ee,hasSelectableRows:_,ref:N}),c.default.createElement(m.default,{"aria-live":"polite",text:F}),c.default.createElement(m.default,{"aria-live":"polite",text:G}))}k.propTypes=O,k.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=(0,d.injectIntl)(k)},55730:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FlowsheetDataGrid",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WorklistDataGrid",{enumerable:!0,get:function(){return l.default}});var l=n(r(51415)),a=n(r(85630))},56323:function(e,t,r){r.r(t),t.default={"flowsheet-data-grid-container":"FlowsheetDataGrid-module__flowsheet-data-grid-container___O1y8B"}},29877:function(e,t,r){r.r(t),t.default={"worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___IbMs4"}}}]);