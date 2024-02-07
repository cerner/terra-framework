"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[55730],{85630:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ColumnHighlightColor",{enumerable:!0,get:function(){return p.ColumnHighlightColor}}),t.default=void 0;var a=n(r(861)),o=n(r(38416)),u=n(r(27424)),i=g(r(67294)),c=n(r(45697)),d=r(25387),f=n(r(19845)),s=g(r(51051)),m=n(r(29270)),w=r(12810),p=g(r(99722)),b=n(r(56323));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=f.default.bind(b.default),O={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(w.rowShape),sections:c.default.arrayOf(w.sectionShape),columns:c.default.arrayOf(w.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowMinimumHeight:c.default.string,onCellSelect:c.default.func,onSectionSelect:c.default.func,onClearSelectedCells:c.default.func,onCellRangeSelect:c.default.func,onRowSelect:c.default.func,intl:c.default.shape({formatMessage:c.default.func}).isRequired,hasVisibleColumnHeaders:c.default.bool};function S(e){var t=e.id,r=e.ariaLabelledBy,n=e.ariaLabel,l=e.rows,o=e.sections,c=e.columns,d=e.defaultColumnWidth,f=e.columnHeaderHeight,w=e.rowHeight,b=e.onCellSelect,h=e.onSectionSelect,g=e.onClearSelectedCells,y=e.onCellRangeSelect,O=e.onRowSelect,S=e.intl,I=e.hasVisibleColumnHeaders,P=e.rowMinimumHeight,j=(0,i.useRef)(null),M=(0,i.useRef)([]),_=(0,i.useState)(null),H=(0,u.default)(_,2),k=H[0],R=H[1],E=(0,i.useRef)(!1),D=(0,i.useRef)(),x=(0,i.useMemo)((function(){return c.map((function(e){return C(C({},e),{},{isSelectable:!1,isResizable:!1})}))}),[c]),W=x.length?[x[0]]:[],L=x.length>1?x.slice(1):[],K=function(e){return null===e||""===e||"--"===e},T=(0,i.useMemo)((function(){var e=i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{"aria-hidden":!0},S.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),i.default.createElement(m.default,{text:S.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(l);return t.forEach((function(r,n){var l=(0,a.default)(r.cells);l.forEach((function(t,r){l[r].isSelectable=!0,K(t.content)&&0!==r&&(l[r].content=e)})),t[n].cells=l})),t}),[S,l]),G=(0,i.useMemo)((function(){if(!o)return null;var e=i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{"aria-hidden":!0},S.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),i.default.createElement(m.default,{text:S.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(o);return t.forEach((function(r,n){var l=(0,a.default)(r.rows);l.forEach((function(t,r){var n=(0,a.default)(t.cells);n.forEach((function(t,r){n[r].isSelectable=!1!==t.isSelectable,K(t.content)&&0!==r&&(n[r].content=e)})),l[r].cells=n})),t[n].rows=l})),t}),[S,o]),F=(0,i.useMemo)((function(){return G?G.flatMap((function(e){return e.rows.map((function(t){return C(C({},t),{},{sectionId:e.id})}))})):T}),[G,T]);(0,i.useEffect)((function(){var e=(0,a.default)(M.current),t=[];F.forEach((function(e){e.cells.forEach((function(r,n){r.isSelected&&t.push({rowId:e.id,columnId:c[n].id})}))})),M.current=[].concat(t),M.current.length||(j.current=null),e.length>0&&0===M.current.length?R(S.formatMessage({id:"Terra.flowsheetDataGrid.no-cells-selected"})):M.current.length&&R(S.formatMessage({id:"Terra.flowsheetDataGrid.cells-selected"},{cellCount:M.current.length}))}),[S,F,c,R]);var A=(0,i.useCallback)((function(e,t,r){if(null!==j.current){var n=F.findIndex((function(e){return e.id===j.current.rowId})),l=c.findIndex((function(e){return e.id===j.current.columnId})),a=F.findIndex((function(t){return t.id===e})),o=c.findIndex((function(e){return e.id===t})),u=Math.min(n,a),i=Math.max(n,a),d=Math.min(l,o),f=Math.max(l,o);if(G){var s=G.find((function(e){return e.id===r})),m=F.findIndex((function(e){return e.sectionId===r})),w=m+s.rows.length-1;u=n<=m?m:u,i=n>=w?w:i}for(var p=[],b=u;b<=i;b+=1)for(var h=F[b].id,g=d;g<=f;g+=1){var C=c[g].id;p.push({rowId:h,columnId:C,sectionId:r})}y&&y(p)}}),[F,G,c,y]),Y=(0,i.useCallback)((function(e){0===e.columnIndex?O&&O({rowId:e.rowId,sectionId:e.sectionId,isMetaPressed:e.isMetaPressed}):e.isShiftPressed&&null!==j.current?A(e.rowId,e.columnId,e.sectionId):b&&(j.current={rowId:e.rowId,columnId:e.columnId,sectionId:e.sectionId},b({rowId:e.rowId,columnId:e.columnId,sectionId:e.sectionId,isMetaPressed:e.isMetaPressed}))}),[b,O,A]),B=(0,i.useCallback)((function(e,t,r){if(!(t<=0)||E.current){var n=D.current.getGridRef(),l="";if(G)for(var a=e;a>0;a-=1){var o=n.rows[a].getAttribute("data-section-id");if(o){l=o;break}}E.current||(E.current=!0,null!==j.current||n.rows[e].hasAttribute("data-section-id")||(j.current={rowId:n.rows[e].getAttribute("data-row-id"),columnId:c[t].id,sectionId:l}));var u=e,i=t;switch(r){case s.KEY_UP:u-=1;break;case s.KEY_DOWN:u+=1;break;case s.KEY_LEFT:i-=1;break;case s.KEY_RIGHT:i+=1}u<=0?u=1:u>=n.rows.length&&(u=n.rows.length-1),i<=0?i=1:i>=c.length&&(i=c.length-1);var d=c[i].id,f=n.rows[u].getAttribute("data-row-id");if(!n.rows[u].hasAttribute("data-section-id")){for(var m="",w=u;w>0;w-=1){var p=n.rows[w].getAttribute("data-section-id");if(p){m=p;break}}A(f,d,m)}}}),[G,c,A]);return i.default.createElement("div",{className:v("flowsheet-data-grid-container"),onKeyUp:function(e){if(e.keyCode===s.KEY_SHIFT)E.current&&(E.current=!1,j.current=null)}},i.default.createElement(p.default,{id:t,ariaLabel:n,ariaLabelledBy:r,rows:T,sections:G,rowHeight:w,rowHeaderIndex:0,pinnedColumns:W,overflowColumns:L,defaultColumnWidth:d,columnHeaderHeight:f,onCellSelect:Y,onSectionSelect:h,onClearSelection:g,onCellRangeSelect:B,hasVisibleColumnHeaders:I,ref:D,rowMinimumHeight:P}),i.default.createElement(m.default,{"aria-live":"polite",text:k}))}S.propTypes=O,S.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowMinimumHeight:"2.5rem",rows:[],columns:[],hasVisibleColumnHeaders:!0};t.default=(0,d.injectIntl)(S)},51415:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(38416)),o=p(r(67294)),u=n(r(45697)),i=n(r(19845)),c=p(r(51051)),d=r(12810),f=n(r(29877)),s=n(r(99722)),m=n(r(86843));function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(w=function(e){return e?r:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=w(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=i.default.bind(f.default),y={ariaLabelledBy:u.default.string,ariaLabel:u.default.string,id:u.default.string.isRequired,rows:u.default.arrayOf(d.rowShape),pinnedColumns:u.default.arrayOf(d.columnShape),overflowColumns:u.default.arrayOf(d.columnShape),defaultColumnWidth:u.default.number,columnHeaderHeight:u.default.string,rowHeight:u.default.string,rowHeaderIndex:d.validateRowHeaderIndex,onColumnResize:u.default.func,onCellSelect:u.default.func,onRowSelect:u.default.func,onRowSelectAll:u.default.func,onColumnSelect:u.default.func,onClearSelectedRows:u.default.func,onClearSelectedCells:u.default.func,onDisableSelectableRows:u.default.func,onEnableRowSelection:u.default.func,hasSelectableRows:u.default.bool};function C(e){var t,r=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,a=e.rows,u=e.pinnedColumns,i=e.overflowColumns,d=e.onColumnResize,f=e.defaultColumnWidth,w=e.columnHeaderHeight,p=e.rowHeight,b=e.onColumnSelect,y=e.onCellSelect,C=e.onRowSelect,v=e.onRowSelectAll,O=e.onClearSelectedRows,S=e.onClearSelectedCells,I=e.onDisableSelectableRows,P=e.onEnableRowSelection,j=e.hasSelectableRows,M=e.rowHeaderIndex,_=(0,o.useRef)(!1),H=(0,o.useRef)({start:null,end:null}),k=(0,o.useRef)(),R=(0,o.useRef)(!1),E=null===(t=document.getElementById("".concat(r,"-worklist-data-grid-container")))||void 0===t?void 0:t.contains(document.activeElement),D=function(e){return e.map((function(e){return h(h({},e),{},{isResizable:!1!==e.isResizable,isSelectable:!1!==e.isSelectable})}))},x=(0,o.useMemo)((function(){return D(u)}),[u]),W=(0,o.useMemo)((function(){return D(i)}),[i]);(0,o.useEffect)((function(){if(j||(H.current={}),R.current){var e=k.current.getFocusedCell();e={row:e.row,col:Math.max(e.col+(j?1:-1),0)},k.current.setFocusedRowCol(e.row,e.col,E)}}),[j]);var L=(0,o.useCallback)((function(){j?(H.current={},a.some((function(e){return e.isSelected}))?O&&O():I&&I()):S&&S()}),[j,S,O,I,a]),K=(0,o.useCallback)((function(e){var t=[];return H.current.end?(H.current.start>H.current.end?e>H.current.end&&(t=a.slice(H.current.end-1,Math.min(e,H.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):H.current.start<H.current.end&&e<H.current.end&&(t=a.slice(Math.max(H.current.start,e),H.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[a]),T=(0,o.useCallback)((function(e){if(j||P(),C){var t=Math.min(H.current.start,e),r=Math.max(H.current.start,e),n=a.slice(t-1,r).map((function(e){return{id:e.id,selected:!0}}));n=n.concat(K(e)),C(n),H.current.end=e}}),[j,P,C,a,K]),G=(0,o.useCallback)((function(e,t){var r=[];a[t-1].isSelected?(t===H.current.start&&(H.current={}),r.push({id:e,selected:!1})):(H.current={start:t,end:null},r.push({id:e,selected:!0})),C&&C(r)}),[C,a]),F=(0,o.useCallback)((function(e,t,r){var n=e;r===c.KEY_UP?0===(n-=1)&&(n=1):r===c.KEY_DOWN&&(n+=1),_.current||(_.current=!0,H.current={start:e,end:null}),T(n)}),[T]),A=(0,o.useCallback)((function(e){j?e.isShiftPressed&&H.current.start?T(e.rowIndex):G(e.rowId,e.rowIndex):e.isShiftPressed&&(H.current={start:e.rowIndex,end:null},T(e.rowIndex))}),[j,T,G]),Y=(0,o.useCallback)((function(e){j||e.isShiftPressed?A(e):e.isCellSelectable&&y&&y(e.rowId,e.columnId)}),[A,j,y]),B=(0,o.useCallback)((function(){b(m.default.ROW_SELECTION_COLUMN.id)}),[b]);return o.default.createElement("div",{id:"".concat(r,"-worklist-data-grid-container"),onKeyDown:function(e){if(e.keyCode===c.KEY_A)j&&(e.ctrlKey||e.metaKey)&&(v&&v(),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===c.KEY_SHIFT)_.current=!1},className:g("worklist-data-grid-container"),onFocus:R.current?void 0:function(){R.current=!0}},o.default.createElement(s.default,{id:r,ariaLabel:l,ariaLabelledBy:n,rows:a,rowHeight:p,rowHeaderIndex:M,pinnedColumns:x,overflowColumns:W,defaultColumnWidth:f,columnHeaderHeight:w,onColumnSelect:b,onRowSelectionHeaderSelect:b?B:void 0,onColumnResize:d,onCellSelect:Y,onClearSelection:L,onRangeSelection:F,hasSelectableRows:j,ref:k}))}C.propTypes=y,C.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=C},55730:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ColumnHighlightColor",{enumerable:!0,get:function(){return o.ColumnHighlightColor}}),Object.defineProperty(t,"FlowsheetDataGrid",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"WorklistDataGrid",{enumerable:!0,get:function(){return a.default}});var a=n(r(51415)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=u(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(85630));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(u=function(e){return e?r:t})(e)}},56323:function(e,t,r){r.r(t),t.default={"flowsheet-data-grid-container":"FlowsheetDataGrid-module__flowsheet-data-grid-container___O1y8B"}},29877:function(e,t,r){r.r(t),t.default={"worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___IbMs4"}}}]);