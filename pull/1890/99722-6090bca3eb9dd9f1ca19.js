"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99722],{99722:function(e,t,n){var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=r(n(861)),u=r(n(27424)),i=r(n(38416)),d=C(n(67294)),c=r(n(45697)),f=n(25387),s=r(n(47166)),b=C(n(51051)),m=C(n(12810)),p=r(n(29270)),E=r(n(99254)),h=n(28409),g=r(n(86843)),w=r(n(98834)),_=r(n(36199));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(11710);var S=s.default.bind(_.default),R={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(E.default),pinnedColumns:c.default.arrayOf(h.columnShape),overflowColumns:c.default.arrayOf(h.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,columnResizeIncrement:c.default.number,rowHeight:c.default.string,rowHeaderIndex:w.default,onColumnResize:c.default.func,onCellSelect:c.default.func,onColumnSelect:c.default.func,onClearSelection:c.default.func,onRangeSelection:c.default.func,onRowSelectionHeaderSelect:c.default.func,onCellRangeSelect:c.default.func,hasSelectableRows:c.default.bool,hasVisibleColumnHeaders:c.default.bool},I=(0,f.injectIntl)((function(e){var t=e.ariaLabel,n=e.ariaLabelledBy,r=e.columnHeaderHeight,a=e.columnResizeIncrement,l=e.defaultColumnWidth,i=e.hasVisibleColumnHeaders,c=e.hasSelectableRows,f=e.id,s=e.onCellRangeSelect,E=e.onCellSelect,h=e.onClearSelection,w=e.onColumnResize,_=e.onColumnSelect,v=e.onRangeSelection,C=e.onRowSelectionHeaderSelect,y=e.overflowColumns,R=e.pinnedColumns,I=e.rowHeaderIndex,N=e.rowHeight,H=e.rows,D=(c?[g.default.ROW_SELECTION_COLUMN]:[]).concat(R).concat(y),x=H.map((function(e){return O(O({},e),{},{cells:e.cells.map((function(e){return O(O({},e),{},{isSelectable:!1!==e.isSelectable})}))})})),P=(0,d.useRef)(),k=(0,d.useRef)(),j=(0,d.useRef)(),K=(0,d.useRef)(!0),M=(0,d.useRef)(),T=(0,d.useRef)(),A=(0,d.useState)(!1),W=(0,u.default)(A,2),L=W[0],B=W[1],Y=(0,d.useState)(i?0:1),G=(0,u.default)(Y,2),z=G[0],F=G[1],U=(0,d.useState)(0),X=(0,u.default)(U,2),q=X[0],V=X[1],Z=(0,d.useState)(!1),J=(0,u.default)(Z,2),Q=J[0],$=J[1],ee=(0,d.useState)(null),te=(0,u.default)(ee,2),ne=te[0],re=te[1],ae=(0,d.useMemo)((function(){return{role:m.GridConstants.GRID,setCellAriaLiveMessage:re,tableRef:P,tableContainerRef:j}}),[P,j]),le=(0,d.useCallback)((function(e){return c&&e<D.length&&D[e].id===g.default.ROW_SELECTION_COLUMN.id}),[D,c]),oe=(0,d.useCallback)((function(e,t,n){if(re(null),F(e),V(t),M.current=P.current.rows[e].getAttribute("data-row-id"),T.current=D[t].id,n){var r,a=P.current.rows[e].cells[t];if(le(t)&&a.getElementsByTagName("input").length>0){var l=a.getElementsByTagName("input");a=(0,u.default)(l,1)[0]}0!==e||a.hasAttribute("tabindex")||(a=a.querySelector('[role="button"]')),null===(r=a)||void 0===r||r.focus()}}),[le,D]);(0,d.useImperativeHandle)(e.focusFuncRef,(function(){return{setFocusedRowCol:oe,getFocusedCell:function(){return{row:z,col:q}}}}),[q,z]);var ue=(0,d.useCallback)((function(e){var t=D.findIndex((function(t){return t.id===e}));oe(z,t),_&&_(e)}),[_,D,z,oe]),ie=(0,d.useCallback)((function(){oe(0,0),C&&C()}),[C,oe]),de=(0,d.useCallback)((function(e){var t=e.columnIndex,n=e.rowIndex;oe(n,t),E&&E(e)}),[E,oe]);return d.default.createElement("div",{tabIndex:0,ref:k,onKeyDown:function(e){var t={row:z,col:q},n=t.row,r=t.col;B(!1);var a=e.target;if(e.keyCode===b.KEY_TAB||!(function(e){if("input"===e.tagName.toLowerCase()){var t=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(t)>=0}return!1}(a)||["textarea","select"].indexOf(a.tagName.toLowerCase())>=0||a.hasAttribute("contentEditable")&&!1!==a.getAttribute("contentEditable"))){switch(e.keyCode){case b.KEY_UP:n-=1;break;case b.KEY_DOWN:n+=1;break;case b.KEY_LEFT:e.metaKey?(r=0,e.ctrlKey&&(n=1)):(r-=1,B(0===t.row));break;case b.KEY_RIGHT:e.metaKey?(r=D.length-1,e.ctrlKey&&(n=H.length)):r+=1;break;case b.KEY_HOME:r=0,e.ctrlKey&&(n=1);break;case b.KEY_END:r=D.length-1,e.ctrlKey&&(n=H.length);break;case b.KEY_ESCAPE:return h&&h(),void e.preventDefault();case b.KEY_TAB:return function(e){var t=(0,o.default)(document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)||"hidden"===window.getComputedStyle(e).visibility||null!==e.closest("[inert]")||e.id!==f&&k.current.contains(e))})),n=t.indexOf(k.current);if(n>-1){var r,a=e?1:-1;n+a<t.length?r=t[n+a]:t[0].id!==f&&(r=t[0]),r&&r.focus()}}(!e.shiftKey),void e.preventDefault();default:return}var l=new Set([b.KEY_UP,b.KEY_DOWN]),u=new Set([b.KEY_UP,b.KEY_DOWN,b.KEY_LEFT,b.KEY_RIGHT]);v&&e.shiftKey&&l.has(e.keyCode)&&v(t.row,t.col,e.keyCode),s&&e.shiftKey&&u.has(e.keyCode)&&s(t.row,t.col,e.keyCode),n>H.length||r>=D.length||r<0||n<(i?0:1)||function(e,t){var n=j.current.getBoundingClientRect(),r=P.current.rows[0].cells[t.col].getBoundingClientRect(),a=P.current.rows[t.row].cells[t.col].getBoundingClientRect();if(a.right>n.right)j.current.scrollBy(a.right-n.right,0);else{var l=0,o=c?1:0,u=R.length-1+o;if(u>=0){if(t.col>u){var i=P.current.rows[t.row].cells[u].getBoundingClientRect();l=a.left-i.right}}else l=a.left-n.left;l<0&&j.current.scrollBy(l,0)}var d=a.top-r.bottom;d<0&&j.current.scrollBy(0,d),oe(t.row,t.col,!0)}(0,{row:n,col:r}),e.preventDefault()}},onMouseDown:function(){K.current=!1},onFocus:function(e){if(!e.currentTarget.contains(e.relatedTarget)&&K.current){if(M.current&&T.current){var t=x.findIndex((function(e){return e.id===M.current})),n=D.findIndex((function(e){return e.id===T.current}));t=-1===t?Math.min(z,x.length):t+1,n=-1===n?Math.min(q,D.length-1):n,oe(t,n,!0)}else oe(z,q,!0);$(!0)}K.current=!0},onBlur:function(e){e.currentTarget.contains(e.relatedTarget)||$(!1)},id:f,className:S("data-grid-container")},d.default.createElement(m.GridContext.Provider,{value:ae},d.default.createElement(m.default,{id:"".concat(f,"-table"),rows:x,ariaLabelledBy:n,ariaLabel:t,activeColumnIndex:Q&&0===z?q:void 0,isActiveColumnResizing:0===z&&L,columnResizeIncrement:a,pinnedColumns:R,overflowColumns:y,defaultColumnWidth:l,columnHeaderHeight:r,rowHeight:N,rowHeaderIndex:I,onColumnResize:w,onColumnSelect:ue,onCellSelect:de,onRowSelectionHeaderSelect:ie,hasSelectableRows:c,hasVisibleColumnHeaders:i,isStriped:!0})),d.default.createElement(p.default,{"aria-live":"polite","aria-atomic":"true",text:ne}))}));I.propTypes=R,I.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[],hasVisibleColumnHeaders:!0};t.default=(0,d.forwardRef)((function(e,t){return d.default.createElement(I,(0,l.default)({},e,{focusFuncRef:t}))}))},11710:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},90442:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(45697)),l=a.default.shape({content:a.default.node,isMasked:a.default.bool,isSelectable:a.default.bool,isSelected:a.default.bool});t.default=l},28409:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var a=r(n(45697)),l=t.SortIndicators={ASCENDING:"ascending",DESCENDING:"descending"};t.columnShape=a.default.shape({id:a.default.string.isRequired,displayName:a.default.string,hasError:a.default.bool,isResizable:a.default.bool,isSelectable:a.default.bool,minimumWidth:a.default.number,maximumWidth:a.default.number,width:a.default.number,sortIndicator:a.default.oneOf(Object.values(l))})},99254:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(45697)),l=r(n(90442)),o=a.default.shape({id:a.default.string.isRequired,cells:a.default.arrayOf(l.default),isSelected:a.default.bool,ariaLabel:a.default.string});t.default=o},98834:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(21545));t.default=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(a.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(a.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(a.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)}},86843:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1}};t.default=n},21545:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"To be properly accessible, the row header column should be a pinned column. please set pinned columns"};t.default=n},36199:function(e,t,n){n.r(t),t.default={"data-grid-container":"DataGrid-module__data-grid-container___4LJj1"}}}]);