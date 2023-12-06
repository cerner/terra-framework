"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[55730],{85630:function(e,t,n){var r=n(64836),l=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(861)),o=r(n(38416)),u=r(n(27424)),c=g(n(67294)),i=r(n(45697)),d=n(25387),f=r(n(47166)),s=g(n(51051)),m=r(n(29270)),w=n(12810),b=r(n(99722)),p=r(n(56323));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S=f.default.bind(p.default),y={ariaLabelledBy:i.default.string,ariaLabel:i.default.string,id:i.default.string.isRequired,rows:i.default.arrayOf(w.rowShape),sections:i.default.arrayOf(w.sectionShape),columns:i.default.arrayOf(w.columnShape),defaultColumnWidth:i.default.number,columnHeaderHeight:i.default.string,rowHeight:i.default.string,onCellSelect:i.default.func,onSectionSelect:i.default.func,onClearSelectedCells:i.default.func,onCellRangeSelect:i.default.func,onRowSelect:i.default.func,intl:i.default.shape({formatMessage:i.default.func}).isRequired,hasVisibleColumnHeaders:i.default.bool};function O(e){var t=e.id,n=e.ariaLabelledBy,r=e.ariaLabel,l=e.rows,o=e.sections,i=e.columns,d=e.defaultColumnWidth,f=e.columnHeaderHeight,w=e.rowHeight,p=e.onCellSelect,h=e.onSectionSelect,g=e.onClearSelectedCells,v=e.onCellRangeSelect,y=e.onRowSelect,O=e.intl,I=e.hasVisibleColumnHeaders,R=(0,c.useRef)(null),_=(0,c.useRef)([]),j=(0,c.useState)(null),E=(0,u.default)(j,2),k=E[0],P=E[1],H=(0,c.useRef)(!1),M=(0,c.useMemo)((function(){return i.map((function(e){return C(C({},e),{},{isSelectable:!1,isResizable:!1})}))}),[i]),D=M.length?[M[0]]:[],x=M.length>1?M.slice(1):[],W=function(e){return null===e||""===e||"--"===e},L=(0,c.useMemo)((function(){var e=c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{"aria-hidden":!0},O.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),c.default.createElement(m.default,{text:O.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(l);return t.forEach((function(n,r){var l=(0,a.default)(n.cells);l.forEach((function(t,n){l[n].isSelectable=!0,W(t.content)&&0!==n&&(l[n].content=e)})),t[r].cells=l})),t}),[O,l]),K=(0,c.useMemo)((function(){if(!o)return null;var e=c.default.createElement(c.default.Fragment,null,c.default.createElement("span",{"aria-hidden":!0},O.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),c.default.createElement(m.default,{text:O.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(o);return t.forEach((function(n,r){var l=(0,a.default)(n.rows);l.forEach((function(t,n){var r=(0,a.default)(t.cells);r.forEach((function(t,n){r[n].isSelectable=!1!==t.isSelectable,W(t.content)&&0!==n&&(r[n].content=e)})),l[n].cells=r})),t[r].rows=l})),t}),[O,o]);(0,c.useEffect)((function(){var e=(0,a.default)(_.current),t=[];l.forEach((function(e){e.cells.forEach((function(n,r){n.isSelected&&t.push({rowId:e.id,columnId:i[r].id})}))})),_.current=[].concat(t),_.current.length||(R.current=null),e.length>0&&0===_.current.length?P(O.formatMessage({id:"Terra.flowsheetDataGrid.no-cells-selected"})):_.current.length&&P(O.formatMessage({id:"Terra.flowsheetDataGrid.cells-selected"},{cellCount:_.current.length}))}),[O,l,i,P]);var T=(0,c.useCallback)((function(e,t,n){var r,a;if(null!==R.current){var o=null!==(r=null==K||null===(a=K.find((function(e){return e.id===n})))||void 0===a?void 0:a.rows)&&void 0!==r?r:l,u=o.findIndex((function(e){return e.id===R.current.rowId})),c=i.findIndex((function(e){return e.id===R.current.columnId})),d=o.findIndex((function(t){return t.id===e})),f=i.findIndex((function(e){return e.id===t})),s=Math.min(u,d),m=Math.max(u,d),w=Math.min(c,f),b=Math.max(c,f);if(K){var p=K.find((function(e){return e.id===R.current.sectionId})),h=K.find((function(e){return e.id===n}));if(p.id!==h.id){var g=(null==p?void 0:p.sectionRowIndex)<=(null==h?void 0:h.sectionRowIndex);s=g?0:d,m=g?d:o.length-1,R.current={rowId:g?o[s].id:o[m].id,columnId:R.current.columnId,sectionId:n}}}for(var C=[],S=s;S<=m;S+=1)for(var y=o[S].id,O=w;O<=b;O+=1){var I=i[O].id;C.push({rowId:y,columnId:I,sectionId:n})}v&&v(C)}}),[K,l,i,v]),G=(0,c.useCallback)((function(e){0===e.columnIndex?y&&y({rowId:e.rowId,sectionId:e.sectionId}):e.isShiftPressed&&null!==R.current?T(e.rowId,e.columnId,e.sectionId):p&&(R.current={rowId:e.rowId,columnId:e.columnId,sectionId:e.sectionId},p(e.rowId,e.columnId,e.sectionId))}),[p,y,T]),F=(0,c.useCallback)((function(e,t,n){var r;if(!(t<=0)||H.current){H.current||(H.current=!0,null===R.current&&(R.current={rowId:l[e-1].id,columnId:i[t].id}));var a=e,u=t;switch(n){case s.KEY_UP:a-=1;break;case s.KEY_DOWN:a+=1;break;case s.KEY_LEFT:u-=1;break;case s.KEY_RIGHT:u+=1}a<=0?a=1:a>l.length&&(a=l.length),u<=0?u=1:u>=i.length&&(u=i.length-1);var c=null===(r=l[a])||void 0===r?void 0:r.id,d="";if(o)for(var f=function(){var e=o[m],t=null==e?void 0:e.sectionRowIndex,n=e.rows.find((function(e,n){return n+t===a}));if(n)return c=n.id,d=e.id,1},m=0;m<o.length&&!f();m+=1);var w=i[u].id;T(c,w,d)}}),[l,o,i,T]);return c.default.createElement("div",{className:S("flowsheet-data-grid-container"),onKeyUp:function(e){if(e.keyCode===s.KEY_SHIFT)H.current&&(H.current=!1,R.current=null)}},c.default.createElement(b.default,{id:t,ariaLabel:r,ariaLabelledBy:n,rows:L,sections:K,rowHeight:w,rowHeaderIndex:0,pinnedColumns:D,overflowColumns:x,defaultColumnWidth:d,columnHeaderHeight:f,onCellSelect:G,onSectionSelect:h,onClearSelection:g,onCellRangeSelect:F,hasVisibleColumnHeaders:I}),c.default.createElement(m.default,{"aria-live":"polite",text:k}))}O.propTypes=y,O.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",rows:[],columns:[],hasVisibleColumnHeaders:!0};t.default=(0,d.injectIntl)(O)},51415:function(e,t,n){var r=n(64836),l=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(38416)),o=b(n(67294)),u=r(n(45697)),c=r(n(47166)),i=b(n(51051)),d=n(12810),f=r(n(29877)),s=r(n(99722)),m=r(n(86843));function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(w=function(e){return e?n:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=w(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=c.default.bind(f.default),v={ariaLabelledBy:u.default.string,ariaLabel:u.default.string,id:u.default.string.isRequired,rows:u.default.arrayOf(d.rowShape),pinnedColumns:u.default.arrayOf(d.columnShape),overflowColumns:u.default.arrayOf(d.columnShape),defaultColumnWidth:u.default.number,columnHeaderHeight:u.default.string,rowHeight:u.default.string,rowHeaderIndex:d.validateRowHeaderIndex,onColumnResize:u.default.func,onCellSelect:u.default.func,onRowSelect:u.default.func,onRowSelectAll:u.default.func,onColumnSelect:u.default.func,onClearSelectedRows:u.default.func,onClearSelectedCells:u.default.func,onDisableSelectableRows:u.default.func,onEnableRowSelection:u.default.func,hasSelectableRows:u.default.bool};function C(e){var t,n=e.id,r=e.ariaLabelledBy,l=e.ariaLabel,a=e.rows,u=e.pinnedColumns,c=e.overflowColumns,d=e.onColumnResize,f=e.defaultColumnWidth,w=e.columnHeaderHeight,b=e.rowHeight,p=e.onColumnSelect,v=e.onCellSelect,C=e.onRowSelect,S=e.onRowSelectAll,y=e.onClearSelectedRows,O=e.onClearSelectedCells,I=e.onDisableSelectableRows,R=e.onEnableRowSelection,_=e.hasSelectableRows,j=e.rowHeaderIndex,E=(0,o.useRef)(!1),k=(0,o.useRef)({start:null,end:null}),P=(0,o.useRef)(),H=(0,o.useRef)(!1),M=null===(t=document.getElementById("".concat(n,"-worklist-data-grid-container")))||void 0===t?void 0:t.contains(document.activeElement),D=function(e){return e.map((function(e){return h(h({},e),{},{isResizable:!1!==e.isResizable,isSelectable:!1!==e.isSelectable})}))},x=D(u),W=D(c);(0,o.useEffect)((function(){if(_||(k.current={}),H.current){var e=P.current.getFocusedCell();e={row:e.row,col:Math.max(e.col+(_?1:-1),0)},P.current.setFocusedRowCol(e.row,e.col,M)}}),[_]);var L=(0,o.useCallback)((function(){_?(k.current={},a.some((function(e){return e.isSelected}))?y&&y():I&&I()):O&&O()}),[_,O,y,I,a]),K=(0,o.useCallback)((function(e){var t=[];return k.current.end?(k.current.start>k.current.end?e>k.current.end&&(t=a.slice(k.current.end-1,Math.min(e,k.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):k.current.start<k.current.end&&e<k.current.end&&(t=a.slice(Math.max(k.current.start,e),k.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[a]),T=(0,o.useCallback)((function(e){if(_||R(),C){var t=Math.min(k.current.start,e),n=Math.max(k.current.start,e),r=a.slice(t-1,n).map((function(e){return{id:e.id,selected:!0}}));r=r.concat(K(e)),C(r),k.current.end=e}}),[_,R,C,a,K]),G=(0,o.useCallback)((function(e,t){var n=[];a[t-1].isSelected?(t===k.current.start&&(k.current={}),n.push({id:e,selected:!1})):(k.current={start:t,end:null},n.push({id:e,selected:!0})),C&&C(n)}),[C,a]),F=(0,o.useCallback)((function(e,t,n){var r=e;n===i.KEY_UP?0===(r-=1)&&(r=1):n===i.KEY_DOWN&&(r+=1),E.current||(E.current=!0,k.current={start:e,end:null}),T(r)}),[T]),Y=(0,o.useCallback)((function(e){_?e.isShiftPressed&&k.current.start?T(e.rowIndex):G(e.rowId,e.rowIndex):e.isShiftPressed&&(k.current={start:e.rowIndex,end:null},T(e.rowIndex))}),[_,T,G]),B=(0,o.useCallback)((function(e){_||e.isShiftPressed?Y(e):e.isCellSelectable&&v&&v(e.rowId,e.columnId)}),[Y,_,v]),z=(0,o.useCallback)((function(e){p(e)}),[p]),N=(0,o.useCallback)((function(){p(m.default.ROW_SELECTION_COLUMN.id)}),[p]);return o.default.createElement("div",{id:"".concat(n,"-worklist-data-grid-container"),onKeyDown:function(e){if(e.keyCode===i.KEY_A)_&&(e.ctrlKey||e.metaKey)&&(S&&S(),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===i.KEY_SHIFT)E.current=!1},className:g("worklist-data-grid-container"),onFocus:H.current?void 0:function(){H.current=!0}},o.default.createElement(s.default,{id:n,ariaLabel:l,ariaLabelledBy:r,rows:a,rowHeight:b,rowHeaderIndex:j,pinnedColumns:x,overflowColumns:W,defaultColumnWidth:f,columnHeaderHeight:w,onColumnSelect:p?z:void 0,onRowSelectionHeaderSelect:p?N:void 0,onColumnResize:d,onCellSelect:B,onClearSelection:L,onRangeSelection:F,hasSelectableRows:_,ref:P}))}C.propTypes=v,C.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=C},55730:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FlowsheetDataGrid",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WorklistDataGrid",{enumerable:!0,get:function(){return l.default}});var l=r(n(51415)),a=r(n(85630))},56323:function(e,t,n){n.r(t),t.default={"flowsheet-data-grid-container":"FlowsheetDataGrid-module__flowsheet-data-grid-container___O1y8B"}},29877:function(e,t,n){n.r(t),t.default={"worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___IbMs4"}}}]);