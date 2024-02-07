"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99722],{99722:function(e,t,n){var r=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(861)),a=r(n(27424)),i=r(n(38416)),u=g(n(67294)),c=r(n(45697)),d=r(n(19845)),s=g(n(51051)),f=g(n(12810)),m=r(n(29270)),b=r(n(86843)),w=r(n(36199));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=l?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(11710);var C=d.default.bind(w.default),v={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(f.rowShape),sections:c.default.arrayOf(f.sectionShape),pinnedColumns:c.default.arrayOf(f.columnShape),overflowColumns:c.default.arrayOf(f.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,columnResizeIncrement:c.default.number,rowHeight:c.default.string,rowHeaderIndex:f.validateRowHeaderIndex,onColumnResize:c.default.func,onCellSelect:c.default.func,onSectionSelect:c.default.func,onColumnSelect:c.default.func,onClearSelection:c.default.func,onRangeSelection:c.default.func,onRowSelectionHeaderSelect:c.default.func,onCellRangeSelect:c.default.func,hasSelectableRows:c.default.bool,hasVisibleColumnHeaders:c.default.bool,rowMinimumHeight:c.default.string},S=(0,u.forwardRef)((function(e,t){var n,r=e.ariaLabel,o=e.ariaLabelledBy,i=e.columnHeaderHeight,c=e.columnResizeIncrement,d=e.defaultColumnWidth,w=e.hasVisibleColumnHeaders,p=e.hasSelectableRows,g=e.id,h=e.onCellRangeSelect,v=e.onCellSelect,S=e.onClearSelection,E=e.onColumnResize,O=e.onColumnSelect,R=e.onRangeSelection,_=e.onRowSelectionHeaderSelect,H=e.onSectionSelect,x=e.overflowColumns,I=e.pinnedColumns,k=e.rowHeaderIndex,K=e.rowHeight,M=e.rows,P=e.sections,j=e.rowMinimumHeight,D=(p?[b.default.ROW_SELECTION_COLUMN]:[]).concat(I).concat(x),L=(0,u.useMemo)((function(){return M.map((function(e){return y(y({},e),{},{cells:e.cells.map((function(e){return y(y({},e),{},{isSelectable:!1!==e.isSelectable})}))})}))}),[M]),T=(0,u.useRef)(),Y=(0,u.useRef)(),N=(0,u.useRef)(),A=(0,u.useRef)(!0),W=(0,u.useRef)({rowId:"",columnId:""}),B=(0,u.useState)(!1),G=(0,a.default)(B,2),z=G[0],F=G[1],U=(0,u.useState)(w?0:1),q=(0,a.default)(U,2),V=q[0],J=q[1],Q=(0,u.useState)(0),X=(0,a.default)(Q,2),Z=X[0],$=X[1],ee=(0,u.useState)(null),te=(0,a.default)(ee,2),ne=te[0],re=te[1],oe=(0,u.useMemo)((function(){return{role:f.GridConstants.GRID,setCellAriaLiveMessage:re,tableRef:T,tableContainerRef:N}}),[T,N]),le=(0,u.useCallback)((function(e){return p&&e<D.length&&D[e].id===b.default.ROW_SELECTION_COLUMN.id}),[D,p]),ae=(0,u.useCallback)((function(e){return T.current.rows[e].hasAttribute("data-section-id")}),[]),ie=(0,u.useCallback)((function(e,t,n){if(re(null),J(e),$(t),W.current={rowId:T.current.rows[e].getAttribute("data-row-id"),columnId:D[t].id},n){var r,o;if(ae(e)){(o=(0,a.default)(T.current.rows[e].cells,1)[0]).hasAttribute("tabindex")||(o=T.current.rows[e].querySelector("button"))}else{if(o=T.current.rows[e].cells[t],le(t)&&o.getElementsByTagName("input").length>0){var l=o.getElementsByTagName("input");o=(0,a.default)(l,1)[0]}0!==e||o.hasAttribute("tabindex")||(o=o.querySelector('[role="button"]'))}null===(r=o)||void 0===r||r.focus()}}),[D,ae,le]);(0,u.useImperativeHandle)(t,(function(){return{setFocusedRowCol:ie,getFocusedCell:function(){return{row:V,col:Z}},getGridRef:function(){return T.current}}}),[Z,V]);var ue=null===(n=T.current)||void 0===n?void 0:n.contains(document.activeElement);return u.default.createElement("div",{tabIndex:0,ref:Y,onKeyDown:function(e){var t={row:V,col:Z},n=t.row,r=t.col;F(!1);var o=e.target,a=e.keyCode;if(a===s.KEY_TAB||!(function(e){if("input"===e.tagName.toLowerCase()){var t=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(t)>=0}return!1}(o)||["textarea","select"].indexOf(o.tagName.toLowerCase())>=0||o.hasAttribute("contentEditable")&&!1!==o.getAttribute("contentEditable")))if(a!==s.KEY_RIGHT&&a!==s.KEY_LEFT||!ae(t.row)){var i=T.current.rows.length;switch(a){case s.KEY_UP:n-=1;break;case s.KEY_DOWN:n+=1;break;case s.KEY_LEFT:e.metaKey?(r=0,e.ctrlKey&&(n=1)):(r-=1,F(0===t.row));break;case s.KEY_RIGHT:e.metaKey?(r=D.length-1,e.ctrlKey&&(n=i-1)):r+=1;break;case s.KEY_HOME:r=0,e.ctrlKey&&(n=1);break;case s.KEY_END:r=D.length-1,e.ctrlKey&&(n=i-1);break;case s.KEY_ESCAPE:return S&&S(),void e.preventDefault();case s.KEY_TAB:return function(e){var t=(0,l.default)(document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)||"hidden"===window.getComputedStyle(e).visibility||null!==e.closest("[inert]")||e.id!==g&&Y.current.contains(e))})),n=t.indexOf(Y.current);if(n>-1){var r,o=e?1:-1;n+o<t.length?r=t[n+o]:t[0].id!==g&&(r=t[0]),r&&r.focus()}}(!e.shiftKey),void e.preventDefault();default:return}var u=new Set([s.KEY_UP,s.KEY_DOWN]),c=new Set([s.KEY_UP,s.KEY_DOWN,s.KEY_LEFT,s.KEY_RIGHT]);R&&e.shiftKey&&u.has(e.keyCode)&&R(t.row,t.col,e.keyCode),h&&e.shiftKey&&c.has(e.keyCode)&&h(t.row,t.col,e.keyCode),n>=i||r>=D.length||r<0||n<(w?0:1)||function(e,t){if(!ae(t.row)){var n=N.current.getBoundingClientRect(),r=T.current.rows[0].cells[t.col].getBoundingClientRect(),o=T.current.rows[t.row].cells[t.col].getBoundingClientRect();if(o.right>n.right)N.current.scrollBy(o.right-n.right,0);else{var l=0,a=p?1:0,i=I.length-1+a;if(i>=0){if(t.col>i){var u=T.current.rows[t.row].cells[i].getBoundingClientRect();l=o.left-u.right}}else l=o.left-n.left;l<0&&N.current.scrollBy(l,0)}var c=o.top-r.bottom;c<0&&N.current.scrollBy(0,c)}ie(t.row,t.col,!0)}(0,{row:n,col:r}),e.preventDefault()}else e.preventDefault()},onMouseDown:function(e){var t=e.target.closest("td, th");t&&(A.current=!1,F(!1),ie(t.parentElement.rowIndex,t.cellIndex))},onFocus:function(e){if(!e.currentTarget.contains(e.relatedTarget)&&A.current){var t=V,n=Z;W.current.rowId&&(t=-1===(t=(0,l.default)(T.current.rows).findIndex((function(e){return e.getAttribute("data-row-id")===W.current.rowId})))?Math.min(V,T.current.rows.length-1):t),W.current.columnId&&(n=-1===(n=D.findIndex((function(e){return e.id===W.current.columnId})))?Math.min(Z,D.length-1):n),ie(t,n,!0)}A.current=!0},id:g,className:C("data-grid-container")},u.default.createElement(f.GridContext.Provider,{value:oe},u.default.createElement(f.default,{id:"".concat(g,"-table"),rows:L,sections:P,ariaLabelledBy:o,ariaLabel:r,activeColumnIndex:ue&&0===V?Z:void 0,isActiveColumnResizing:0===V&&z,columnResizeIncrement:c,pinnedColumns:I,overflowColumns:x,defaultColumnWidth:d,columnHeaderHeight:i,rowHeight:K,rowHeaderIndex:k,onColumnResize:E,onColumnSelect:O,onSectionSelect:H,onRowSelectionHeaderSelect:_,onCellSelect:v,rowSelectionMode:p?"multiple":void 0,hasVisibleColumnHeaders:w,isStriped:!0,rowMinimumHeight:j})),u.default.createElement(m.default,{"aria-live":"polite","aria-atomic":"true",text:ne}))}));S.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[],hasVisibleColumnHeaders:!0,rowMinimumHeight:"2.5rem"},S.propTypes=v;t.default=S},11710:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},86843:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1}};t.default=n},36199:function(e,t,n){n.r(t),t.default={"data-grid-container":"DataGrid-module__data-grid-container___4LJj1"}}}]);