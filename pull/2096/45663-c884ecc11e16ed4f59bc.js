"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[45663],{6432:function(e,t,n){var r=n(24994),o=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ColumnHighlightColor",{enumerable:!0,get:function(){return w.ColumnHighlightColor}}),t.default=void 0;var l=r(n(41132)),a=r(n(43693)),u=r(n(85715)),i=g(n(96540)),c=r(n(5556)),d=n(8604),s=r(n(67967)),f=g(n(25966)),b=r(n(16524)),m=n(83264),w=g(n(62227)),h=r(n(3321));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var u=l?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=s.default.bind(h.default),O={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(m.rowShape),sections:c.default.arrayOf(m.sectionShape),columns:c.default.arrayOf(m.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowMinimumHeight:c.default.string,onCellSelect:c.default.func,onSectionSelect:c.default.func,onClearSelectedCells:c.default.func,onCellRangeSelect:c.default.func,onRowSelect:c.default.func,intl:c.default.shape({formatMessage:c.default.func}).isRequired,hasVisibleColumnHeaders:c.default.bool,isAutoFocusEnabled:c.default.bool};function S(e){var t,n=e.id,r=e.ariaLabelledBy,o=e.ariaLabel,a=e.rows,c=e.sections,d=e.columns,s=e.defaultColumnWidth,m=e.columnHeaderHeight,h=e.rowHeight,p=e.onCellSelect,g=e.onSectionSelect,v=e.onClearSelectedCells,O=e.onCellRangeSelect,S=e.onRowSelect,I=e.intl,E=e.hasVisibleColumnHeaders,P=e.rowMinimumHeight,_=e.isAutoFocusEnabled,M=(0,i.useRef)(null),R=(0,i.useRef)([]),j=(0,i.useState)(null),k=(0,u.default)(j,2),H=k[0],x=k[1],D=(0,i.useRef)(!1),W=(0,i.useRef)(),A=(0,i.useMemo)((function(){return d.map((function(e){return C(C({},e),{},{isSelectable:!1,isResizable:!1})}))}),[d]),L=A.length?[A[0]]:[],T=A.length>1?A.slice(1):[],F=function(e){return null===e||""===e||"--"===e},K=(0,i.useMemo)((function(){var e=i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{"aria-hidden":!0},I.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),i.default.createElement(b.default,{text:I.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,l.default)(a);return t.forEach((function(n,r){var o=(0,l.default)(n.cells);o.forEach((function(t,n){o[n].isSelectable=!0,F(t.content)&&0!==n&&(o[n].content=e)})),t[r].cells=o})),t}),[I,a]),G=(0,i.useMemo)((function(){if(!c)return null;var e=i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{"aria-hidden":!0},I.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),i.default.createElement(b.default,{text:I.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,l.default)(c);return t.forEach((function(n,r){if(n.rows){var o=(0,l.default)(n.rows);o.forEach((function(t,n){var r=(0,l.default)(t.cells);r.forEach((function(t,n){r[n].isSelectable=!1!==t.isSelectable,F(t.content)&&0!==n&&(r[n].content=e)})),o[n].cells=r})),t[r].rows=o}if(n.subsections){var a=(0,l.default)(n.subsections);a.forEach((function(t,n){var r=(0,l.default)(t.rows);r.forEach((function(t,n){var o=(0,l.default)(t.cells);o.forEach((function(t,n){o[n].isSelectable=!1!==t.isSelectable,F(t.content)&&0!==n&&(o[n].content=e)})),r[n].cells=o})),a[n].rows=r}))}})),t}),[I,c]),B=(0,i.useMemo)((function(){return G?G.flatMap((function(e){return e.rows?e.rows.map((function(t){return C(C({},t),{},{sectionId:e.id})})):e.subsections.flatMap((function(t){return t.rows.map((function(n){return C(C({},n),{},{sectionId:e.id,subsectionId:t.id})}))}))})):K}),[G,K]);(0,i.useEffect)((function(){var e=(0,l.default)(R.current),n=[];t=W.current.getTableBodyColumnsRef(),B.forEach((function(e){e.cells.forEach((function(r,o){r.isSelected&&n.push({rowId:e.id,columnId:t[o].id,columnSpanIndex:t[o].columnSpanIndex})}))})),R.current=[].concat(n),R.current.length||(M.current=null),e.length>0&&0===R.current.length?x(I.formatMessage({id:"Terra.flowsheetDataGrid.no-cells-selected"})):R.current.length&&x(I.formatMessage({id:"Terra.flowsheetDataGrid.cells-selected"},{cellCount:R.current.length}))}),[I,B,x]);var Y=(0,i.useCallback)((function(e,n,r,o,l){if(null!==M.current){var a=B.findIndex((function(e){return e.id===M.current.rowId})),u=M.current.columnIndex,i=B.findIndex((function(t){return t.id===e}));t=W.current.getTableBodyColumnsRef();var c=Math.min(a,i),d=Math.max(a,i),s=Math.min(u,r),f=Math.max(u,r);if(G){var b=G.find((function(e){return e.id===o})),m=0,w=0;if(l){var h=b.subsections.find((function(e){return e.id===l}));w=(m=B.findIndex((function(e){return e.subsectionId===l})))+h.rows.length-1}else w=(m=B.findIndex((function(e){return e.sectionId===o})))+b.rows.length-1;c=a<=m?m:c,d=a>=w?w:d}for(var p=[],g=c;g<=d;g+=1)for(var v=B[g].id,C=s;C<=f;C+=1){var y=t[C].id;p.push({rowId:v,columnId:y,columnIndex:C,sectionId:o})}O&&O(p)}}),[B,G,O]),N=(0,i.useCallback)((function(e,t){0===e.columnIndex?S&&S({rowId:e.rowId,sectionId:e.sectionId,isMetaPressed:e.isMetaPressed}):e.isShiftPressed&&null!==M.current?Y(e.rowId,e.columnId,e.columnIndex,e.sectionId,e.subsectionId):p&&(M.current={rowId:e.rowId,columnId:e.columnId,columnIndex:e.columnIndex,sectionId:e.sectionId},p({rowId:e.rowId,columnId:e.columnId,columnIndex:e.columnIndex,sectionId:e.sectionId,subsectionId:e.subsectionId,isMetaPressed:e.isMetaPressed},t))}),[p,S,Y]),z=(0,i.useCallback)((function(e,n,r){if(!(n<=0)||D.current){var o=W.current.getGridRef();t=W.current.getTableBodyColumnsRef();var l="";if(G)for(var a=e;a>0;a-=1){var u=o.rows[a].getAttribute("data-section-id");if(u){l=u;break}}D.current||(D.current=!0,null!==M.current||o.rows[e].hasAttribute("data-section-id")||(M.current={rowId:o.rows[e].getAttribute("data-row-id"),columnId:t[n].id,columnIndex:n,sectionId:l}));var i=e,c=n;switch(r){case f.KEY_UP:i-=1;break;case f.KEY_DOWN:i+=1;break;case f.KEY_LEFT:c-=1;break;case f.KEY_RIGHT:c+=1}i<=0?i=1:i>=o.rows.length&&(i=o.rows.length-1),c<=0?c=1:c>=t.length&&(c=t.length-1);var d=t[c].id,s=o.rows[i].getAttribute("data-row-id");if(!o.rows[i].hasAttribute("data-section-id")&&!o.rows[i].hasAttribute("data-subsection-id")){for(var b="",m="",w=i;w>0;w-=1){if(o.rows[w].hasAttribute("data-section-id")){b=o.rows[w].getAttribute("data-section-id");break}if(o.rows[w].hasAttribute("data-subsection-id")){m=o.rows[w].getAttribute("data-subsection-id"),b=o.rows[w].getAttribute("data-subsection-section-id");break}}Y(s,d,c,b,m)}}}),[G,Y]);return i.default.createElement("div",{className:y("flowsheet-data-grid-container"),onKeyUp:function(e){if(e.keyCode===f.KEY_SHIFT)D.current&&(D.current=!1,M.current=null)}},i.default.createElement(w.default,{id:n,ariaLabel:o,ariaLabelledBy:r,rows:K,sections:G,rowHeight:h,rowHeaderIndex:0,pinnedColumns:L,overflowColumns:T,defaultColumnWidth:s,columnHeaderHeight:m,onCellSelect:N,onSectionSelect:g,onClearSelection:v,onCellRangeSelect:z,hasVisibleColumnHeaders:E,ref:W,rowMinimumHeight:P,isAutoFocusEnabled:_}),i.default.createElement(b.default,{"aria-live":"polite",text:H}))}S.propTypes=O,S.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rows:[],columns:[],hasVisibleColumnHeaders:!0};t.default=(0,d.injectIntl)(S)},44034:function(e,t,n){var r=n(24994),o=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(43693)),a=w(n(96540)),u=r(n(5556)),i=r(n(67967)),c=w(n(25966)),d=n(83264),s=r(n(8247)),f=r(n(62227)),b=r(n(78323));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var u=l?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=i.default.bind(s.default),v={ariaLabelledBy:u.default.string,ariaLabel:u.default.string,id:u.default.string.isRequired,rows:u.default.arrayOf(d.rowShape),pinnedColumns:u.default.arrayOf(d.columnShape),overflowColumns:u.default.arrayOf(d.columnShape),defaultColumnWidth:u.default.number,columnHeaderHeight:u.default.string,rowHeight:u.default.string,rowHeaderIndex:d.validateRowHeaderIndex,onColumnResize:u.default.func,onCellSelect:u.default.func,onRowSelect:u.default.func,onRowSelectAll:u.default.func,onColumnSelect:u.default.func,onClearSelectedRows:u.default.func,onClearSelectedCells:u.default.func,onDisableSelectableRows:u.default.func,onEnableRowSelection:u.default.func,hasSelectableRows:u.default.bool,isAutoFocusEnabled:u.default.bool};function C(e){var t,n=e.id,r=e.ariaLabelledBy,o=e.ariaLabel,l=e.rows,u=e.pinnedColumns,i=e.overflowColumns,d=e.onColumnResize,s=e.defaultColumnWidth,m=e.columnHeaderHeight,w=e.rowHeight,h=e.onColumnSelect,v=e.onCellSelect,C=e.onRowSelect,y=e.onRowSelectAll,O=e.onClearSelectedRows,S=e.onClearSelectedCells,I=e.onDisableSelectableRows,E=e.onEnableRowSelection,P=e.hasSelectableRows,_=e.rowHeaderIndex,M=e.isAutoFocusEnabled,R=(0,a.useRef)(!1),j=(0,a.useRef)({start:null,end:null}),k=(0,a.useRef)(),H=(0,a.useRef)(!1),x=null===(t=document.getElementById("".concat(n,"-worklist-data-grid-container")))||void 0===t?void 0:t.contains(document.activeElement),D=function(e){return e.map((function(e){return p(p({},e),{},{isResizable:!1!==e.isResizable,isSelectable:!1!==e.isSelectable})}))},W=(0,a.useMemo)((function(){return D(u)}),[u]),A=(0,a.useMemo)((function(){return D(i)}),[i]);(0,a.useEffect)((function(){if(P||(j.current={}),H.current){var e=k.current.getFocusedCell();e={row:e.row,col:Math.max(e.col+(P?1:-1),0)},k.current.setFocusedRowCol(e.row,e.col,x)}}),[P]);var L=(0,a.useCallback)((function(){P?(j.current={},l.some((function(e){return e.isSelected}))?O&&O():I&&I()):S&&S()}),[P,S,O,I,l]),T=(0,a.useCallback)((function(e){var t=[];return j.current.end?(j.current.start>j.current.end?e>j.current.end&&(t=l.slice(j.current.end-1,Math.min(e,j.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):j.current.start<j.current.end&&e<j.current.end&&(t=l.slice(Math.max(j.current.start,e),j.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[l]),F=(0,a.useCallback)((function(e){if(P||E(),C){var t=Math.min(j.current.start,e),n=Math.max(j.current.start,e),r=l.slice(t-1,n).map((function(e){return{id:e.id,selected:!0}}));r=r.concat(T(e)),C(r),j.current.end=e}}),[P,E,C,l,T]),K=(0,a.useCallback)((function(e,t){var n=[];l[t-1].isSelected?(t===j.current.start&&(j.current={}),n.push({id:e,selected:!1})):(j.current={start:t,end:null},n.push({id:e,selected:!0})),C&&C(n)}),[C,l]),G=(0,a.useCallback)((function(e,t,n){var r=e;n===c.KEY_UP?0===(r-=1)&&(r=1):n===c.KEY_DOWN&&(r+=1),R.current||(R.current=!0,j.current={start:e,end:null}),F(r)}),[F]),B=(0,a.useCallback)((function(e){P?e.isShiftPressed&&j.current.start?F(e.rowIndex):K(e.rowId,e.rowIndex):e.isShiftPressed&&(j.current={start:e.rowIndex,end:null},F(e.rowIndex))}),[P,F,K]),Y=(0,a.useCallback)((function(e,t){P||e.isShiftPressed?B(e):e.isCellSelectable&&v&&v(e.rowId,e.columnId,t)}),[B,P,v]),N=(0,a.useCallback)((function(){h(b.default.ROW_SELECTION_COLUMN.id)}),[h]);return a.default.createElement("div",{id:"".concat(n,"-worklist-data-grid-container"),onKeyDown:function(e){if(e.keyCode===c.KEY_A)P&&(e.ctrlKey||e.metaKey)&&(y&&y(),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===c.KEY_SHIFT)R.current=!1},className:g("worklist-data-grid-container"),onFocus:H.current?void 0:function(){H.current=!0}},a.default.createElement(f.default,{id:n,ariaLabel:o,ariaLabelledBy:r,rows:l,rowHeight:w,rowHeaderIndex:_,pinnedColumns:W,overflowColumns:A,defaultColumnWidth:s,columnHeaderHeight:m,onColumnSelect:h,onRowSelectionHeaderSelect:h?N:void 0,onColumnResize:d,onCellSelect:Y,onClearSelection:L,onRangeSelection:G,hasSelectableRows:P,isAutoFocusEnabled:M,ref:k}))}C.propTypes=v,C.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=C},45663:function(e,t,n){var r=n(24994),o=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ColumnHighlightColor",{enumerable:!0,get:function(){return a.ColumnHighlightColor}}),Object.defineProperty(t,"FlowsheetDataGrid",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WorklistDataGrid",{enumerable:!0,get:function(){return l.default}});var l=r(n(44034)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var i=l?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(6432));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}},78323:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1}};t.default=n},3321:function(e,t,n){n.r(t),t.default={"flowsheet-data-grid-container":"FlowsheetDataGrid-module__flowsheet-data-grid-container___O1y8B"}},8247:function(e,t,n){n.r(t),t.default={"worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___IbMs4"}}}]);