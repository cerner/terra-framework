"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[55730],{85630:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),o=n(r(38416)),u=n(r(27424)),c=p(r(67294)),i=n(r(45697)),d=r(25387),s=n(r(19845)),f=p(r(51051)),w=n(r(29270)),m=r(12810),h=n(r(99722)),b=n(r(56323));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=s.default.bind(b.default),y={ariaLabelledBy:i.default.string,ariaLabel:i.default.string,id:i.default.string.isRequired,rows:i.default.arrayOf(m.rowShape),sections:i.default.arrayOf(m.sectionShape),columns:i.default.arrayOf(m.columnShape),defaultColumnWidth:i.default.number,columnHeaderHeight:i.default.string,rowHeight:i.default.string,onCellSelect:i.default.func,onSectionSelect:i.default.func,onClearSelectedCells:i.default.func,onCellRangeSelect:i.default.func,onRowSelect:i.default.func,intl:i.default.shape({formatMessage:i.default.func}).isRequired,hasVisibleColumnHeaders:i.default.bool,columnHighlightId:i.default.string,colorHighlightColor:i.default.oneOf(["orange","green"])};function O(e){var t=e.id,r=e.ariaLabelledBy,n=e.ariaLabel,l=e.rows,o=e.sections,i=e.columns,d=e.defaultColumnWidth,s=e.columnHeaderHeight,m=e.rowHeight,b=e.onCellSelect,g=e.onSectionSelect,p=e.onClearSelectedCells,C=e.onCellRangeSelect,y=e.onRowSelect,O=e.intl,I=e.hasVisibleColumnHeaders,H=e.columnHighlightId,P=e.colorHighlightColor,R=(0,c.useRef)(null),_=(0,c.useRef)([]),j=(0,c.useState)(null),k=(0,u.default)(j,2),E=k[0],M=k[1],D=(0,c.useRef)(!1),x=(0,c.useRef)(),W=(0,c.useMemo)((function(){return i.map((function(e){return v(v({},e),{},{isSelectable:!1,isResizable:!1})}))}),[i]),L=W.length?[W[0]]:[],K=W.length>1?W.slice(1):[],T=function(e){return null===e||""===e||"--"===e},G=(0,c.useMemo)((function(){var e=c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{"aria-hidden":!0},O.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),c.default.createElement(w.default,{text:O.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(l);return t.forEach((function(r,n){var l=(0,a.default)(r.cells);l.forEach((function(t,r){l[r].isSelectable=!0,T(t.content)&&0!==r&&(l[r].content=e)})),t[n].cells=l})),t}),[O,l]),F=(0,c.useMemo)((function(){if(!o)return null;var e=c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{"aria-hidden":!0},O.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),c.default.createElement(w.default,{text:O.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(o);return t.forEach((function(r,n){var l=(0,a.default)(r.rows);l.forEach((function(t,r){var n=(0,a.default)(t.cells);n.forEach((function(t,r){n[r].isSelectable=!1!==t.isSelectable,T(t.content)&&0!==r&&(n[r].content=e)})),l[r].cells=n})),t[n].rows=l})),t}),[O,o]),A=(0,c.useMemo)((function(){return F?F.flatMap((function(e){return e.rows.map((function(t){return v(v({},t),{},{sectionId:e.id})}))})):G}),[F,G]);(0,c.useEffect)((function(){var e=(0,a.default)(_.current),t=[];A.forEach((function(e){e.cells.forEach((function(r,n){r.isSelected&&t.push({rowId:e.id,columnId:i[n].id})}))})),_.current=[].concat(t),_.current.length||(R.current=null),e.length>0&&0===_.current.length?M(O.formatMessage({id:"Terra.flowsheetDataGrid.no-cells-selected"})):_.current.length&&M(O.formatMessage({id:"Terra.flowsheetDataGrid.cells-selected"},{cellCount:_.current.length}))}),[O,A,i,M]);var Y=(0,c.useCallback)((function(e,t,r){if(null!==R.current){var n=A.findIndex((function(e){return e.id===R.current.rowId})),l=i.findIndex((function(e){return e.id===R.current.columnId})),a=A.findIndex((function(t){return t.id===e})),o=i.findIndex((function(e){return e.id===t})),u=Math.min(n,a),c=Math.max(n,a),d=Math.min(l,o),s=Math.max(l,o);if(F){var f=F.find((function(e){return e.id===r})),w=A.findIndex((function(e){return e.sectionId===r})),m=w+f.rows.length-1;u=n<=w?w:u,c=n>=m?m:c}for(var h=[],b=u;b<=c;b+=1)for(var g=A[b].id,p=d;p<=s;p+=1){var v=i[p].id;h.push({rowId:g,columnId:v,sectionId:r})}C&&C(h)}}),[A,F,i,C]),B=(0,c.useCallback)((function(e){0===e.columnIndex?y&&y({rowId:e.rowId,sectionId:e.sectionId,isMetaPressed:e.isMetaPressed}):e.isShiftPressed&&null!==R.current?Y(e.rowId,e.columnId,e.sectionId):b&&(R.current={rowId:e.rowId,columnId:e.columnId,sectionId:e.sectionId},b({rowId:e.rowId,columnId:e.columnId,sectionId:e.sectionId,isMetaPressed:e.isMetaPressed}))}),[b,y,Y]),z=(0,c.useCallback)((function(e,t,r){if(!(t<=0)||D.current){var n=x.current.getGridRef(),l="";if(F)for(var a=e;a>0;a-=1){var o=n.rows[a].getAttribute("data-section-id");if(o){l=o;break}}D.current||(D.current=!0,null!==R.current||n.rows[e].hasAttribute("data-section-id")||(R.current={rowId:n.rows[e].getAttribute("data-row-id"),columnId:i[t].id,sectionId:l}));var u=e,c=t;switch(r){case f.KEY_UP:u-=1;break;case f.KEY_DOWN:u+=1;break;case f.KEY_LEFT:c-=1;break;case f.KEY_RIGHT:c+=1}u<=0?u=1:u>=n.rows.length&&(u=n.rows.length-1),c<=0?c=1:c>=i.length&&(c=i.length-1);var d=i[c].id,s=n.rows[u].getAttribute("data-row-id");if(!n.rows[u].hasAttribute("data-section-id")){for(var w="",m=u;m>0;m-=1){var h=n.rows[m].getAttribute("data-section-id");if(h){w=h;break}}Y(s,d,w)}}}),[F,i,Y]);return c.default.createElement("div",{className:S("flowsheet-data-grid-container"),onKeyUp:function(e){if(e.keyCode===f.KEY_SHIFT)D.current&&(D.current=!1,R.current=null)}},c.default.createElement(h.default,{id:t,ariaLabel:n,ariaLabelledBy:r,rows:G,sections:F,rowHeight:m,rowHeaderIndex:0,pinnedColumns:L,overflowColumns:K,defaultColumnWidth:d,columnHeaderHeight:s,onCellSelect:B,onSectionSelect:g,onClearSelection:p,onCellRangeSelect:z,hasVisibleColumnHeaders:I,ref:x,columnHighlightId:H,colorHighlightColor:P}),c.default.createElement(w.default,{"aria-live":"polite",text:E}))}O.propTypes=y,O.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",rows:[],columns:[],hasVisibleColumnHeaders:!0,colorHighlightColor:"orange"};t.default=(0,d.injectIntl)(O)},51415:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(38416)),o=h(r(67294)),u=n(r(45697)),c=n(r(19845)),i=h(r(51051)),d=r(12810),s=n(r(29877)),f=n(r(99722)),w=n(r(86843));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,a.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=c.default.bind(s.default),C={ariaLabelledBy:u.default.string,ariaLabel:u.default.string,id:u.default.string.isRequired,rows:u.default.arrayOf(d.rowShape),pinnedColumns:u.default.arrayOf(d.columnShape),overflowColumns:u.default.arrayOf(d.columnShape),defaultColumnWidth:u.default.number,columnHeaderHeight:u.default.string,rowHeight:u.default.string,rowHeaderIndex:d.validateRowHeaderIndex,onColumnResize:u.default.func,onCellSelect:u.default.func,onRowSelect:u.default.func,onRowSelectAll:u.default.func,onColumnSelect:u.default.func,onClearSelectedRows:u.default.func,onClearSelectedCells:u.default.func,onDisableSelectableRows:u.default.func,onEnableRowSelection:u.default.func,hasSelectableRows:u.default.bool};function v(e){var t,r=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,a=e.rows,u=e.pinnedColumns,c=e.overflowColumns,d=e.onColumnResize,s=e.defaultColumnWidth,m=e.columnHeaderHeight,h=e.rowHeight,b=e.onColumnSelect,C=e.onCellSelect,v=e.onRowSelect,S=e.onRowSelectAll,y=e.onClearSelectedRows,O=e.onClearSelectedCells,I=e.onDisableSelectableRows,H=e.onEnableRowSelection,P=e.hasSelectableRows,R=e.rowHeaderIndex,_=(0,o.useRef)(!1),j=(0,o.useRef)({start:null,end:null}),k=(0,o.useRef)(),E=(0,o.useRef)(!1),M=null===(t=document.getElementById("".concat(r,"-worklist-data-grid-container")))||void 0===t?void 0:t.contains(document.activeElement),D=function(e){return e.map((function(e){return g(g({},e),{},{isResizable:!1!==e.isResizable,isSelectable:!1!==e.isSelectable})}))},x=(0,o.useMemo)((function(){return D(u)}),[u]),W=(0,o.useMemo)((function(){return D(c)}),[c]);(0,o.useEffect)((function(){if(P||(j.current={}),E.current){var e=k.current.getFocusedCell();e={row:e.row,col:Math.max(e.col+(P?1:-1),0)},k.current.setFocusedRowCol(e.row,e.col,M)}}),[P]);var L=(0,o.useCallback)((function(){P?(j.current={},a.some((function(e){return e.isSelected}))?y&&y():I&&I()):O&&O()}),[P,O,y,I,a]),K=(0,o.useCallback)((function(e){var t=[];return j.current.end?(j.current.start>j.current.end?e>j.current.end&&(t=a.slice(j.current.end-1,Math.min(e,j.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):j.current.start<j.current.end&&e<j.current.end&&(t=a.slice(Math.max(j.current.start,e),j.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[a]),T=(0,o.useCallback)((function(e){if(P||H(),v){var t=Math.min(j.current.start,e),r=Math.max(j.current.start,e),n=a.slice(t-1,r).map((function(e){return{id:e.id,selected:!0}}));n=n.concat(K(e)),v(n),j.current.end=e}}),[P,H,v,a,K]),G=(0,o.useCallback)((function(e,t){var r=[];a[t-1].isSelected?(t===j.current.start&&(j.current={}),r.push({id:e,selected:!1})):(j.current={start:t,end:null},r.push({id:e,selected:!0})),v&&v(r)}),[v,a]),F=(0,o.useCallback)((function(e,t,r){var n=e;r===i.KEY_UP?0===(n-=1)&&(n=1):r===i.KEY_DOWN&&(n+=1),_.current||(_.current=!0,j.current={start:e,end:null}),T(n)}),[T]),A=(0,o.useCallback)((function(e){P?e.isShiftPressed&&j.current.start?T(e.rowIndex):G(e.rowId,e.rowIndex):e.isShiftPressed&&(j.current={start:e.rowIndex,end:null},T(e.rowIndex))}),[P,T,G]),Y=(0,o.useCallback)((function(e){P||e.isShiftPressed?A(e):e.isCellSelectable&&C&&C(e.rowId,e.columnId)}),[A,P,C]),B=(0,o.useCallback)((function(){b(w.default.ROW_SELECTION_COLUMN.id)}),[b]);return o.default.createElement("div",{id:"".concat(r,"-worklist-data-grid-container"),onKeyDown:function(e){if(e.keyCode===i.KEY_A)P&&(e.ctrlKey||e.metaKey)&&(S&&S(),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===i.KEY_SHIFT)_.current=!1},className:p("worklist-data-grid-container"),onFocus:E.current?void 0:function(){E.current=!0}},o.default.createElement(f.default,{id:r,ariaLabel:l,ariaLabelledBy:n,rows:a,rowHeight:h,rowHeaderIndex:R,pinnedColumns:x,overflowColumns:W,defaultColumnWidth:s,columnHeaderHeight:m,onColumnSelect:b,onRowSelectionHeaderSelect:b?B:void 0,onColumnResize:d,onCellSelect:Y,onClearSelection:L,onRangeSelection:F,hasSelectableRows:P,ref:k}))}v.propTypes=C,v.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=v},55730:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FlowsheetDataGrid",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WorklistDataGrid",{enumerable:!0,get:function(){return l.default}});var l=n(r(51415)),a=n(r(85630))},56323:function(e,t,r){r.r(t),t.default={"flowsheet-data-grid-container":"FlowsheetDataGrid-module__flowsheet-data-grid-container___O1y8B"}},29877:function(e,t,r){r.r(t),t.default={"worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___IbMs4"}}}]);