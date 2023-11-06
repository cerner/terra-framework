"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99722],{99722:function(e,t,n){var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(10434)),o=r(n(861)),u=r(n(27424)),i=r(n(38416)),d=C(n(67294)),c=r(n(45697)),f=n(25387),s=r(n(47166)),m=C(n(51051)),b=C(n(12810)),p=r(n(29270)),E=r(n(99254)),_=n(28409),g=r(n(86843)),h=r(n(98834)),w=r(n(36199));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(11710);var S=s.default.bind(w.default),R={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(E.default),pinnedColumns:c.default.arrayOf(_.columnShape),overflowColumns:c.default.arrayOf(_.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,columnResizeIncrement:c.default.number,rowHeight:c.default.string,rowHeaderIndex:h.default,onColumnResize:c.default.func,onCellSelect:c.default.func,onColumnSelect:c.default.func,onClearSelection:c.default.func,onRangeSelection:c.default.func,hasSelectableRows:c.default.bool},N=(0,f.injectIntl)((function(e){var t=e.id,n=e.ariaLabelledBy,r=e.ariaLabel,a=e.rows,l=e.pinnedColumns,i=e.overflowColumns,c=e.onColumnResize,f=e.defaultColumnWidth,s=e.columnHeaderHeight,E=e.columnResizeIncrement,_=e.rowHeight,h=e.onColumnSelect,w=e.onCellSelect,v=e.onClearSelection,C=e.onRangeSelection,O=e.hasSelectableRows,R=e.rowHeaderIndex,N=(O?[g.default.ROW_SELECTION_COLUMN]:[]).concat(l).concat(i),I=a.map((function(e){return y(y({},e),{},{cells:e.cells.map((function(e){return y(y({},e),{},{isSelectable:!1!==e.isSelectable})}))})})),D=(0,d.useRef)(),H=(0,d.useRef)(),x=(0,d.useRef)(),P=(0,d.useRef)(!0),k=(0,d.useState)(!1),L=(0,u.default)(k,2),j=L[0],T=L[1],A=(0,d.useState)(0),M=(0,u.default)(A,2),W=M[0],K=M[1],B=(0,d.useState)(0),G=(0,u.default)(B,2),z=G[0],Y=G[1],U=(0,d.useState)(!1),X=(0,u.default)(U,2),F=X[0],q=X[1],Z=(0,d.useState)(null),J=(0,u.default)(Z,2),Q=J[0],V=J[1],$=(0,d.useState)(null),ee=(0,u.default)($,2),te=ee[0],ne=ee[1],re=function(e,t,n){ne(null),K(e),Y(t);var r,a=D.current.rows[e].cells[t];if(r=t,O&&r<N.length&&N[r].id===g.default.ROW_SELECTION_COLUMN.id&&a.getElementsByTagName("input").length>0){var l=a.getElementsByTagName("input");a=(0,u.default)(l,1)[0]}n&&a.focus()};(0,d.useImperativeHandle)(e.focusFuncRef,(function(){return{setFocusedRowCol:re,getFocusedCell:function(){return{row:W,col:z}}}}),[z,W]);var ae=(0,d.useCallback)((function(e){var t=N.findIndex((function(t){return t.id===e}));Y(t),h&&h(e)}),[h,N]),le=(0,d.useCallback)((function(){Y(0),K(0),h&&h(g.default.TABLE_ROW_SELECTION_COLUMN.id)}),[h]),oe=(0,d.useCallback)((function(e){K(e.rowIndex),Y(e.columnIndex),w&&w(e)}),[w]);return d.default.createElement("div",{tabIndex:0,ref:H,onKeyDown:function(e){var n={row:W,col:z},r=n.row,u=n.col;T(!1);var i=e.target;if(e.keyCode===m.KEY_TAB||!(function(e){if("input"===e.tagName.toLowerCase()){var t=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(t)>=0}return!1}(i)||["textarea","select"].indexOf(i.tagName.toLowerCase())>=0||i.hasAttribute("contentEditable")&&!1!==i.getAttribute("contentEditable"))){switch(e.keyCode){case m.KEY_UP:r-=1;break;case m.KEY_DOWN:r+=1;break;case m.KEY_LEFT:e.metaKey?(u=0,e.ctrlKey&&(r=1)):(u-=1,T(0===n.row));break;case m.KEY_RIGHT:e.metaKey?(u=N.length-1,e.ctrlKey&&(r=a.length)):u+=1;break;case m.KEY_HOME:u=0,e.ctrlKey&&(r=1);break;case m.KEY_END:u=N.length-1,e.ctrlKey&&(r=a.length);break;case m.KEY_ESCAPE:return v&&v(),void e.preventDefault();case m.KEY_TAB:return function(e){var n=(0,o.default)(document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)||"hidden"===window.getComputedStyle(e).visibility||null!==e.closest("[inert]")||e.id!==t&&H.current.contains(e))})),r=n.indexOf(H.current);if(r>-1){var a,l=e?1:-1;r+l<n.length?a=n[r+l]:n[0].id!==t&&(a=n[0]),a&&a.focus()}}(!e.shiftKey),void e.preventDefault();default:return}C&&e.shiftKey&&(e.keyCode===m.KEY_UP||e.keyCode===m.KEY_DOWN)&&C(n.row,n.col,e.keyCode),r>a.length||u>=N.length||u<0||r<0||function(e,t){var n=x.current.getBoundingClientRect(),r=D.current.rows[0].cells[t.col].getBoundingClientRect(),a=D.current.rows[t.row].cells[t.col].getBoundingClientRect();if(a.right>n.right)x.current.scrollBy(a.right-n.right,0);else{var o=0,u=O?1:0,i=l.length-1+u;if(i>=0){if(t.col>i){var d=D.current.rows[t.row].cells[i].getBoundingClientRect();o=a.left-d.right}}else o=a.left-n.left;o<0&&x.current.scrollBy(o,0)}var c=a.top-r.bottom;c<0&&x.current.scrollBy(0,c),re(t.row,t.col,!0)}(0,{row:r,col:u}),e.preventDefault()}},onMouseDown:function(){P.current=!1},onFocus:function(e){e.currentTarget.contains(e.relatedTarget)||P.current&&(re(W,z,!0),q(!0)),P.current=!0},onBlur:function(e){e.currentTarget.contains(e.relatedTarget)||q(!1)},id:t,className:S("data-grid-container")},d.default.createElement(b.GridContext.Provider,{value:{role:b.GridConstants.GRID,setCellAriaLiveMessage:ne,setColumnHeaderAriaLiveMessage:V}},d.default.createElement(b.default,{id:"".concat(t,"-table"),rows:I,ariaLabelledBy:n,ariaLabel:r,activeColumnIndex:F&&0===W?z:void 0,isActiveColumnResizing:0===W&&j,columnResizeIncrement:E,pinnedColumns:l,overflowColumns:i,defaultColumnWidth:f,columnHeaderHeight:s,rowHeight:_,rowHeaderIndex:R,onColumnResize:c,onColumnSelect:ae,onCellSelect:oe,onRowSelectionHeaderSelect:le,hasSelectableRows:O,isStriped:!0,gridRef:D,gridContainerRef:x})),d.default.createElement(p.default,{"aria-live":"polite","aria-atomic":"true",text:Q}),d.default.createElement(p.default,{"aria-live":"polite","aria-atomic":"true",text:te}))}));N.propTypes=R,N.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=(0,d.forwardRef)((function(e,t){return d.default.createElement(N,(0,l.default)({},e,{focusFuncRef:t}))}))},11710:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},90442:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(45697)),l=a.default.shape({content:a.default.node,isMasked:a.default.bool,isSelectable:a.default.bool,isSelected:a.default.bool});t.default=l},28409:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var a=r(n(45697)),l=t.SortIndicators={ASCENDING:"ascending",DESCENDING:"descending"};t.columnShape=a.default.shape({id:a.default.string.isRequired,displayName:a.default.string,hasError:a.default.bool,isResizable:a.default.bool,isSelectable:a.default.bool,minimumWidth:a.default.number,maximumWidth:a.default.number,width:a.default.number,sortIndicator:a.default.oneOf(Object.values(l))})},99254:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(45697)),l=r(n(90442)),o=a.default.shape({id:a.default.string.isRequired,cells:a.default.arrayOf(l.default),isSelected:a.default.bool,ariaLabel:a.default.string});t.default=o},98834:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(21545));t.default=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(a.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(a.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(a.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)}},86843:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1},TABLE_ROW_SELECTION_COLUMN:{id:"table-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1}};t.default=n},21545:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"To be properly accessible, the row header column should be a pinned column. please set pinned columns"};t.default=n},36199:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"DataGrid-module__orion-fusion-theme___yhybH","clinical-lowlight-theme":"DataGrid-module__clinical-lowlight-theme___OufgK","data-grid-container":"DataGrid-module__data-grid-container___4LJj1"}}}]);