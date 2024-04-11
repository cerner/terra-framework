"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[62227],{62227:function(e,t,n){var r=n(24994),o=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ColumnHighlightColor",{enumerable:!0,get:function(){return f.ColumnHighlightColor}}),t.default=void 0;var l=r(n(41132)),a=r(n(85715)),u=r(n(43693)),i=g(n(96540)),c=r(n(5556)),d=r(n(67967)),s=g(n(25966)),f=g(n(83264)),m=r(n(30881)),b=r(n(16524)),w=r(n(78323)),h=r(n(7520));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&{}.hasOwnProperty.call(e,a)){var u=l?Object.getOwnPropertyDescriptor(e,a):null;u&&(u.get||u.set)?Object.defineProperty(r,a,u):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,u.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(35875);var y=d.default.bind(h.default),S={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(f.rowShape),sections:c.default.arrayOf(f.sectionShape),pinnedColumns:c.default.arrayOf(f.columnShape),overflowColumns:c.default.arrayOf(f.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,columnResizeIncrement:c.default.number,rowHeight:c.default.string,rowHeaderIndex:f.validateRowHeaderIndex,onColumnResize:c.default.func,onCellSelect:c.default.func,onSectionSelect:c.default.func,onColumnSelect:c.default.func,onClearSelection:c.default.func,onRangeSelection:c.default.func,onRowSelectionHeaderSelect:c.default.func,onCellRangeSelect:c.default.func,hasSelectableRows:c.default.bool,hasVisibleColumnHeaders:c.default.bool,rowMinimumHeight:c.default.string,isAutoFocusEnabled:c.default.bool},E=(0,i.forwardRef)((function(e,t){var n,r=e.ariaLabel,o=e.ariaLabelledBy,u=e.columnHeaderHeight,c=e.columnResizeIncrement,d=e.defaultColumnWidth,h=e.hasVisibleColumnHeaders,p=e.hasSelectableRows,g=e.id,v=e.onCellRangeSelect,S=e.onCellSelect,E=e.onClearSelection,O=e.onColumnResize,R=e.onColumnSelect,_=e.onRangeSelection,x=e.onRowSelectionHeaderSelect,H=e.onSectionSelect,I=e.overflowColumns,k=e.pinnedColumns,K=e.rowHeaderIndex,M=e.rowHeight,P=e.rows,j=e.sections,A=e.rowMinimumHeight,D=e.isAutoFocusEnabled,L=(p?[w.default.ROW_SELECTION_COLUMN]:[]).concat(k).concat(I),Y=(0,i.useMemo)((function(){var e=0,t=[];return L.forEach((function(n,r){if(n.columnSpan>1){t[e]=C(C({},n),{},{columnSpanIndex:0,columnHeaderIndex:r}),e+=1;for(var o=n.columnSpan;o>1;o-=1)t[e]=C(C({},n),{},{columnSpanIndex:"".concat(n.columnSpan-o+1),columnHeaderIndex:r}),e+=1}else t[e]=C(C({},n),{},{columnHeaderIndex:r}),e+=1})),t}),[L]),T=(0,i.useMemo)((function(){return P.map((function(e){return C(C({},e),{},{cells:e.cells.map((function(e){return C(C({},e),{},{isSelectable:!1!==e.isSelectable})}))})}))}),[P]),W=(0,i.useRef)(),N=(0,i.useRef)(),B=(0,i.useRef)(),F=(0,i.useRef)(!0),G=(0,i.useRef)({rowId:"",columnId:""}),z=(0,i.useState)(!1),q=(0,a.default)(z,2),U=q[0],V=q[1],J=(0,f.hasColumnActions)(k)||(0,f.hasColumnActions)(I),Q=h?0:1,X=(0,i.useState)(Q),Z=(0,a.default)(X,2),$=Z[0],ee=Z[1],te=(0,i.useState)(0),ne=(0,a.default)(te,2),re=ne[0],oe=ne[1],le=(0,i.useState)(null),ae=(0,a.default)(le,2),ue=ae[0],ie=ae[1],ce=(0,i.useMemo)((function(){return{role:f.GridConstants.GRID,setCellAriaLiveMessage:ie,tableRef:W,tableContainerRef:B,isAutoFocusEnabled:D}}),[W,D,B]),de=(0,i.useCallback)((function(e){return p&&e<Y.length&&Y[e].id===w.default.ROW_SELECTION_COLUMN.id}),[Y,p]),se=(0,i.useCallback)((function(e){return W.current.rows[e].hasAttribute("data-section-id")}),[]),fe=(0,i.useCallback)((function(e,t,n){var r;if(ie(null),ee(e),oe(t),t<Y.length&&(G.current={rowId:W.current.rows[e].getAttribute("data-row-id"),columnId:Y[t].id}),n){var o,l;if(se(e))return(o=(0,a.default)(W.current.rows[e].cells,1)[0]).hasAttribute("tabindex")||(o=W.current.rows[e].querySelector("button")),void(null===(l=o)||void 0===l||l.focus());if(o=W.current.rows[e].cells[t],(0,m.default)(o).length>1){var u;null===(u=o)||void 0===u||u.focus()}else{var i=0===e||J&&1===e,c=o.querySelector("a, button");if(i&&!o.hasAttribute("tabindex")||D&&c){var d;null===(d=o=o.querySelector('a, button, [role="button"]'))||void 0===d||d.focus()}else{var s,f=o.querySelector("input");if(de(t)&&f)null===(s=o=f)||void 0===s||s.focus();else null===(r=o)||void 0===r||r.focus()}}}}),[Y,se,J,D,de]);(0,i.useImperativeHandle)(t,(function(){return{setFocusedRowCol:fe,getFocusedCell:function(){return{row:$,col:re}},getGridRef:function(){return W.current}}}),[re,$]);var me=(0,i.useCallback)((function(){return fe($,re,!0)}),[fe,$,re]),be=null===(n=W.current)||void 0===n?void 0:n.contains(document.activeElement),we=0===$||J&&1===$;return i.default.createElement("div",{tabIndex:0,ref:N,onKeyDown:function(e){var t={row:$,col:re},n=t.row,r=t.col;V(!1);var o=e.target,a=e.keyCode;if(a===s.KEY_TAB||!(function(e){if("input"===e.tagName.toLowerCase()){var t=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(t)>=0}return!1}(o)||["textarea","select"].indexOf(o.tagName.toLowerCase())>=0||o.hasAttribute("contentEditable")&&!1!==o.getAttribute("contentEditable")))if(a!==s.KEY_RIGHT&&a!==s.KEY_LEFT||!se(t.row)){var u=W.current.rows.length;switch(a){case s.KEY_UP:(0===(n-=1)||J&&1===n)&&(r=Y[r].columnHeaderIndex);break;case s.KEY_DOWN:if(n+=1,0===t.row||J&&1===t.row){for(var i=0,c=0;c<t.col;c+=1)i+=L[c].columnSpan||1;r=i}break;case s.KEY_LEFT:e.metaKey?(r=0,e.ctrlKey&&(n=1)):(r-=1,V(0===t.row||J&&1===t.row));break;case s.KEY_RIGHT:e.metaKey?(r=Y.length-1,e.ctrlKey&&(n=u-1)):r+=1;break;case s.KEY_HOME:r=0,e.ctrlKey&&(n=1);break;case s.KEY_END:r=Y.length-1,e.ctrlKey&&(n=u-1);break;case s.KEY_ESCAPE:return E&&E(),void e.preventDefault();case s.KEY_TAB:return function(e){var t=(0,l.default)(document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)||"hidden"===window.getComputedStyle(e).visibility||null!==e.closest("[inert]")||e.id!==g&&N.current.contains(e))})),n=t.indexOf(N.current);if(n>-1){var r,o=e?1:-1;n+o<t.length?r=t[n+o]:t[0].id!==g&&(r=t[0]),r&&r.focus()}}(!e.shiftKey),void e.preventDefault();default:return}var d=new Set([s.KEY_UP,s.KEY_DOWN]),f=new Set([s.KEY_UP,s.KEY_DOWN,s.KEY_LEFT,s.KEY_RIGHT]);_&&e.shiftKey&&d.has(e.keyCode)&&_(t.row,t.col,e.keyCode),v&&e.shiftKey&&f.has(e.keyCode)&&v(t.row,t.col,e.keyCode),n>=u||r>=Y.length||r<0||n<Q||function(e,t){if(!se(t.row)){var n=B.current.getBoundingClientRect(),r=W.current.rows[0].getBoundingClientRect(),o=W.current.rows[t.row].cells[t.col].getBoundingClientRect();if(o.right>n.right)B.current.scrollBy(o.right-n.right,0);else{var l=0,a=p?1:0,u=k.length-1+a;if(u>=0){if(t.col>u){var i=W.current.rows[t.row].cells[u].getBoundingClientRect();l=o.left-i.right}}else l=o.left-n.left;l<0&&B.current.scrollBy(l,0)}var c=o.top-r.bottom;c<0&&B.current.scrollBy(0,c)}fe(t.row,t.col,!0)}(0,{row:n,col:r}),e.preventDefault()}else e.preventDefault()},onMouseDown:function(e){var t=e.target.closest("td, th");t&&(F.current=!1,V(!1),fe(t.parentElement.rowIndex,t.cellIndex))},onFocus:function(e){if(!e.currentTarget.contains(e.relatedTarget)&&F.current){var t=$,n=re;G.current.rowId&&(t=-1===(t=(0,l.default)(W.current.rows).findIndex((function(e){return e.getAttribute("data-row-id")===G.current.rowId})))?Math.min($,W.current.rows.length-1):t),G.current.columnId&&(n=-1===(n=Y.findIndex((function(e){return e.id===G.current.columnId})))?Math.min(re,Y.length-1):n),fe(t,n,!0)}F.current=!0},id:g,className:y("data-grid-container")},i.default.createElement(f.GridContext.Provider,{value:ce},i.default.createElement(f.default,{id:"".concat(g,"-table"),rows:T,sections:j,ariaLabelledBy:o,ariaLabel:r,activeColumnIndex:be&&(0===$||J&&1===$)?re:void 0,focusedRowIndex:$,triggerFocus:me,isActiveColumnResizing:we&&U,columnResizeIncrement:c,pinnedColumns:k,overflowColumns:I,defaultColumnWidth:d,columnHeaderHeight:u,rowHeight:M,rowHeaderIndex:K,onColumnResize:O,onColumnSelect:R,onSectionSelect:H,onRowSelectionHeaderSelect:x,onCellSelect:S,rowSelectionMode:p?"multiple":void 0,hasVisibleColumnHeaders:h,isStriped:!0,rowMinimumHeight:A})),i.default.createElement(b.default,{"aria-live":"polite","aria-atomic":"true",text:ue}))}));E.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[],hasVisibleColumnHeaders:!0},E.propTypes=S;t.default=E},35875:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},78323:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1}};t.default=n},7520:function(e,t,n){n.r(t),t.default={"data-grid-container":"DataGrid-module__data-grid-container___4LJj1"}}}]);