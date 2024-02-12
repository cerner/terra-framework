"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99722],{99722:function(e,t,n){var r=n(64836),o=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(861)),a=r(n(27424)),i=r(n(38416)),u=p(n(67294)),c=r(n(45697)),d=r(n(19845)),s=p(n(51051)),f=p(n(12810)),m=r(n(29270)),b=p(n(86843)),w=r(n(36199));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=l?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(11710);var v=d.default.bind(w.default),y={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(f.rowShape),sections:c.default.arrayOf(f.sectionShape),pinnedColumns:c.default.arrayOf(f.columnShape),overflowColumns:c.default.arrayOf(f.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,columnResizeIncrement:c.default.number,rowHeight:c.default.string,rowHeaderIndex:f.validateRowHeaderIndex,onColumnResize:c.default.func,onCellSelect:c.default.func,onSectionSelect:c.default.func,onColumnSelect:c.default.func,onClearSelection:c.default.func,onRangeSelection:c.default.func,onRowSelectionHeaderSelect:c.default.func,onCellRangeSelect:c.default.func,hasSelectableRows:c.default.bool,hasVisibleColumnHeaders:c.default.bool,rowMinimumHeight:c.default.string},S=(0,u.forwardRef)((function(e,t){var n,r=e.ariaLabel,o=e.ariaLabelledBy,i=e.columnHeaderHeight,c=e.columnResizeIncrement,d=e.defaultColumnWidth,w=e.hasVisibleColumnHeaders,h=e.hasSelectableRows,p=e.id,g=e.onCellRangeSelect,y=e.onCellSelect,S=e.onClearSelection,E=e.onColumnResize,O=e.onColumnSelect,R=e.onRangeSelection,_=e.onRowSelectionHeaderSelect,H=e.onSectionSelect,k=e.overflowColumns,x=e.pinnedColumns,I=e.rowHeaderIndex,K=e.rowHeight,M=e.rows,P=e.sections,j=e.rowMinimumHeight,A=(h?[b.default.ROW_SELECTION_COLUMN]:[]).concat(x).concat(k),D=(0,u.useMemo)((function(){return M.map((function(e){return C(C({},e),{},{cells:e.cells.map((function(e){return C(C({},e),{},{isSelectable:!1!==e.isSelectable})}))})}))}),[M]),L=(0,u.useRef)(),T=(0,u.useRef)(),Y=(0,u.useRef)(),N=(0,u.useRef)(!0),W=(0,u.useRef)({rowId:"",columnId:""}),B=(0,u.useState)(!1),F=(0,a.default)(B,2),G=F[0],z=F[1],U=(0,b.checkForColumnActions)(x)||(0,b.checkForColumnActions)(k),q=w?0:U?2:1,V=(0,u.useState)(q),J=(0,a.default)(V,2),Q=J[0],X=J[1],Z=(0,u.useState)(0),$=(0,a.default)(Z,2),ee=$[0],te=$[1],ne=(0,u.useState)(null),re=(0,a.default)(ne,2),oe=re[0],le=re[1],ae=(0,u.useMemo)((function(){return{role:f.GridConstants.GRID,setCellAriaLiveMessage:le,tableRef:L,tableContainerRef:Y}}),[L,Y]),ie=(0,u.useCallback)((function(e){return h&&e<A.length&&A[e].id===b.default.ROW_SELECTION_COLUMN.id}),[A,h]),ue=(0,u.useCallback)((function(e){return L.current.rows[e].hasAttribute("data-section-id")}),[]),ce=(0,u.useCallback)((function(e,t,n){if(le(null),X(e),te(t),W.current={rowId:L.current.rows[e].getAttribute("data-row-id"),columnId:A[t].id},n){var r,o;if(ue(e)){(o=(0,a.default)(L.current.rows[e].cells,1)[0]).hasAttribute("tabindex")||(o=L.current.rows[e].querySelector("button"))}else{if(o=L.current.rows[e].cells[t],ie(t)&&o.getElementsByTagName("input").length>0){var l=o.getElementsByTagName("input");o=(0,a.default)(l,1)[0]}0!==e||o.hasAttribute("tabindex")||(o=o.querySelector('[role="button"]'))}null===(r=o)||void 0===r||r.focus()}}),[A,ue,ie]);(0,u.useImperativeHandle)(t,(function(){return{setFocusedRowCol:ce,getFocusedCell:function(){return{row:Q,col:ee}},getGridRef:function(){return L.current}}}),[ee,Q]);var de=null===(n=L.current)||void 0===n?void 0:n.contains(document.activeElement),se=0===Q||U&&1===Q;return u.default.createElement("div",{tabIndex:0,ref:T,onKeyDown:function(e){var t={row:Q,col:ee},n=t.row,r=t.col;z(!1);var o=e.target,a=e.keyCode;if(a===s.KEY_TAB||!(function(e){if("input"===e.tagName.toLowerCase()){var t=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(t)>=0}return!1}(o)||["textarea","select"].indexOf(o.tagName.toLowerCase())>=0||o.hasAttribute("contentEditable")&&!1!==o.getAttribute("contentEditable")))if(a!==s.KEY_RIGHT&&a!==s.KEY_LEFT||!ue(t.row)){var i=L.current.rows.length;switch(a){case s.KEY_UP:n-=1;break;case s.KEY_DOWN:n+=1;break;case s.KEY_LEFT:e.metaKey?(r=0,e.ctrlKey&&(n=1)):(r-=1,z(0===t.row||U&&1===t.row));break;case s.KEY_RIGHT:e.metaKey?(r=A.length-1,e.ctrlKey&&(n=i-1)):r+=1;break;case s.KEY_HOME:r=0,e.ctrlKey&&(n=1);break;case s.KEY_END:r=A.length-1,e.ctrlKey&&(n=i-1);break;case s.KEY_ESCAPE:return S&&S(),void e.preventDefault();case s.KEY_TAB:return function(e){var t=(0,l.default)(document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)||"hidden"===window.getComputedStyle(e).visibility||null!==e.closest("[inert]")||e.id!==p&&T.current.contains(e))})),n=t.indexOf(T.current);if(n>-1){var r,o=e?1:-1;n+o<t.length?r=t[n+o]:t[0].id!==p&&(r=t[0]),r&&r.focus()}}(!e.shiftKey),void e.preventDefault();default:return}var u=new Set([s.KEY_UP,s.KEY_DOWN]),c=new Set([s.KEY_UP,s.KEY_DOWN,s.KEY_LEFT,s.KEY_RIGHT]);R&&e.shiftKey&&u.has(e.keyCode)&&R(t.row,t.col,e.keyCode),g&&e.shiftKey&&c.has(e.keyCode)&&g(t.row,t.col,e.keyCode),n>=i||r>=A.length||r<0||n<q||function(e,t){if(!ue(t.row)){var n=Y.current.getBoundingClientRect(),r=L.current.rows[0].cells[t.col].getBoundingClientRect(),o=L.current.rows[t.row].cells[t.col].getBoundingClientRect();if(o.right>n.right)Y.current.scrollBy(o.right-n.right,0);else{var l=0,a=h?1:0,i=x.length-1+a;if(i>=0){if(t.col>i){var u=L.current.rows[t.row].cells[i].getBoundingClientRect();l=o.left-u.right}}else l=o.left-n.left;l<0&&Y.current.scrollBy(l,0)}var c=o.top-r.bottom;c<0&&Y.current.scrollBy(0,c)}ce(t.row,t.col,!0)}(0,{row:n,col:r}),e.preventDefault()}else e.preventDefault()},onMouseDown:function(e){var t=e.target.closest("td, th");t&&(N.current=!1,z(!1),ce(t.parentElement.rowIndex,t.cellIndex))},onFocus:function(e){if(!e.currentTarget.contains(e.relatedTarget)&&N.current){var t=Q,n=ee;W.current.rowId&&(t=-1===(t=(0,l.default)(L.current.rows).findIndex((function(e){return e.getAttribute("data-row-id")===W.current.rowId})))?Math.min(Q,L.current.rows.length-1):t),W.current.columnId&&(n=-1===(n=A.findIndex((function(e){return e.id===W.current.columnId})))?Math.min(ee,A.length-1):n),ce(t,n,!0)}N.current=!0},id:p,className:v("data-grid-container")},u.default.createElement(f.GridContext.Provider,{value:ae},u.default.createElement(f.default,{id:"".concat(p,"-table"),rows:D,sections:P,ariaLabelledBy:o,ariaLabel:r,activeColumnIndex:de&&0===Q?ee:void 0,isActiveColumnResizing:se&&G,columnResizeIncrement:c,pinnedColumns:x,overflowColumns:k,defaultColumnWidth:d,columnHeaderHeight:i,rowHeight:K,rowHeaderIndex:I,onColumnResize:E,onColumnSelect:O,onSectionSelect:H,onRowSelectionHeaderSelect:_,onCellSelect:y,rowSelectionMode:h?"multiple":void 0,hasVisibleColumnHeaders:w,hasColumnHeaderActions:U,isStriped:!0,rowMinimumHeight:j})),u.default.createElement(m.default,{"aria-live":"polite","aria-atomic":"true",text:oe}))}));S.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[],hasVisibleColumnHeaders:!0},S.propTypes=y;t.default=S},11710:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},86843:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.checkForColumnActions=void 0;var n={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1}};t.checkForColumnActions=function(e){return e.find((function(e){var t,n;return(null===(t=e.action)||void 0===t?void 0:t.label)&&(null===(n=e.action)||void 0===n?void 0:n.onCall)&&"function"==typeof e.action.onCall}))},t.default=n},36199:function(e,t,n){n.r(t),t.default={"data-grid-container":"DataGrid-module__data-grid-container___4LJj1"}}}]);