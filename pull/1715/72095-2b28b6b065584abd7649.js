"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72095],{72095:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(10434)),o=a(l(861)),u=a(l(38416)),i=a(l(27424)),d=I(l(67294)),c=a(l(45697)),s=l(25387),f=a(l(47166)),m=I(l(51051)),p=a(l(47341)),_=a(l(15555)),b=a(l(74994)),h=a(l(37356)),w=a(l(80998)),g=a(l(54962)),v=a(l(8672)),S=a(l(93127)),E=a(l(72103)),C=a(l(73365));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(y=function(e){return e?l:t})(e)}function I(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=y(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}function O(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}var R=f.default.bind(E.default),k={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(w.default.rowShape),pinnedColumns:c.default.arrayOf(w.default.columnShape),overflowColumns:c.default.arrayOf(w.default.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowHeaderIndex:S.default,onColumnResize:c.default.func,onCellSelect:c.default.func,onRowSelect:c.default.func,onRowSelectAll:c.default.func,onColumnSelect:c.default.func,onClearSelectedRows:c.default.func,onDisableSelectableRows:c.default.func,hasSelectableRows:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired};function x(e){var t=e.id,l=e.ariaLabelledBy,a=e.ariaLabel,n=e.rows,c=e.pinnedColumns,s=e.overflowColumns,f=e.onColumnResize,w=e.defaultColumnWidth,S=e.columnHeaderHeight,E=e.rowHeight,y=e.onColumnSelect,I=e.onCellSelect,k=e.onRowSelect,x=e.onRowSelectAll,M=e.onClearSelectedRows,N=e.onDisableSelectableRows,D=e.hasSelectableRows,P=e.intl,T=e.rowHeaderIndex;0===c.length&&console.warn(C.default.PINNED_COLUMNS_UNDEFINED);var H=(0,d.useState)([0]),W=(0,i.default)(H,2),j=W[0],L=W[1],A=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?O(Object(l),!0).forEach((function(t){(0,u.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):O(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},e);return t.width=e.width||w,t.minimumWidth=e.minimumWidth||60,t.maximumWidth=e.maximumWidth||300,t},K=(D?[g.default.ROW_SELECTION_COLUMN]:[]).concat(c).concat(s),q=(0,d.useState)(K.map((function(e){return A(e)}))),z=(0,i.default)(q,2),G=z[0],Y=z[1],U=(0,d.useState)(0),B=(0,i.default)(U,2),F=B[0],X=B[1],Q=(0,d.useState)(null),V=(0,i.default)(Q,2),Z=V[0],J=V[1],$=(0,d.useRef)(0),ee=(0,d.useRef)(200),te=(0,d.useRef)(0),le=(0,d.useRef)(),ae=(0,d.useState)(0),ne=(0,i.default)(ae,2),re=ne[0],oe=ne[1],ue=(0,d.useState)(0),ie=(0,i.default)(ue,2),de=ie[0],ce=ie[1],se=(0,d.useState)(null),fe=(0,i.default)(se,2),me=fe[0],pe=fe[1],_e=(0,d.useState)(null),be=(0,i.default)(_e,2),he=be[0],we=be[1],ge=(0,d.useState)(null),ve=(0,i.default)(ge,2),Se=ve[0],Ee=ve[1],Ce=(0,d.useContext)(p.default),ye=function(e){return D&&e<K.length&&K[e].id===g.default.ROW_SELECTION_COLUMN.id},Ie=function(e,t){var l=le.current.rows[e].cells[t];l.tabIndex=-1,ye(t)&&l.getElementsByTagName("input").length>0&&(l.getElementsByTagName("input")[0].tabIndex=-1),we(null)},Oe=function(e,t,l){Ie(re,de),oe(e),ce(t);var a=le.current.rows[e].cells[t];if(ye(t)&&a.getElementsByTagName("input").length>0){var n=a.getElementsByTagName("input");a=(0,i.default)(n,1)[0]}a.tabIndex=0,l&&a.focus&&a.focus()},Re=(0,d.useCallback)((function(e){le.current=e,X(le.current.offsetHeight-1)}),[]);(0,d.useEffect)((function(){var e={row:re,col:de+(D?1:-1)};D&&0===re&&0===de?e={row:1,col:0}:D||0!==de||(e={row:re,col:0}),Oe(e.row,e.col,!1),null!=Se&&Ee(null),pe(P.formatMessage({id:D?"Terra.worklist-data-grid.row-selection-mode-enabled":"Terra.worklist-data-grid.row-selection-mode-disabled"})),Y(K.map((function(e){return A(e)})))}),[D]),(0,d.useEffect)((function(){Y(K.map((function(e){return A(e)})))}),[c,s]),(0,d.useEffect)((function(){var e,t=[],l=0;if(D&&0===c.length)return e=0,t.push(l),void L(t);c.length>0&&(t.push(l),e=D?c.length:c.length-1,G.slice(0,e).map((function(e){l+=e.width,t.push(l)}))),L(t)}),[G]);var ke=function(){n.find((function(e){return!0===e.isSelected}))?(pe(P.formatMessage({id:"Terra.worklist-data-grid.all-rows-unselected"})),M&&M()):N&&(pe(P.formatMessage({id:"Terra.worklist-data-grid.row-selection-mode-disabled"})),N())},xe=function(e,t,l){var a,r="Terra.worklist-data-grid.all-rows-selected";e||(r=!n[l-1].isSelected?"Terra.worklist-data-grid.row-selection-template":"Terra.worklist-data-grid.row-selection-cleared-template",a=n[l-1].ariaLabel||l+1);pe(P.formatMessage({id:r},{row:a})),e&&x?x():k&&k(t)},Me=function(e,t,l){D||pe(P.formatMessage({id:e?"Terra.worklist-data-grid.cell-selection-template":"Terra.worklist-data-grid.cell-selection-cleared"},{row:l.row+1,column:l.col+1})),Oe(l.row,l.col,!0),e===(null==Se?void 0:Se.rowId)&&t===(null==Se?void 0:Se.columnId)||Ee(e&&t?{rowId:e,columnId:t}:null)},Ne=function(e,t){if(l=t.row,a=t.col,!Se||Se.rowId!==l||Se.columnId!==a){var l,a,r=function(e){return{row:e.row-1,col:e.col+(D?-1:0)}}(t),o=n[r.row].cells[r.col];!1===o.isSelectable||o.isMasked?Oe(t.row,t.col,!0):(Me(e.rowId,e.columnId,t),I&&I(e.rowId,e.columnId))}},De=function(e,t){Ne(e,t)},Pe=function(e,t,l){Me(null,null,l),xe(!1,e,t)},Te=(0,d.useCallback)((function(e,t,l){te.current=le.current.offsetWidth,$.current=e.pageX,ee.current=l,J(t)}),[]),He=function(){f&&f(G[Z].id,G[Z].width),J(null)};return d.default.createElement("div",{className:R("worklist-data-grid-container")},d.default.createElement("table",(0,r.default)({ref:Re,id:t,role:"grid","aria-labelledby":l,"aria-label":a,className:R("worklist-data-grid",Ce.className),onKeyDown:function(e){var t,l,a={row:re,col:de},r=a.row,o=a.col;switch(e.keyCode){case m.KEY_UP:r-=1;break;case m.KEY_DOWN:r+=1;break;case m.KEY_LEFT:e.metaKey?(o=0,e.ctrlKey&&(r=g.default.FIRST_NON_HEADER_ROW)):o-=1;break;case m.KEY_RIGHT:e.metaKey?(o=K.length-1,e.ctrlKey&&(r=n.length)):o+=1;break;case m.KEY_HOME:o=0,e.ctrlKey&&(r=g.default.FIRST_NON_HEADER_ROW);break;case m.KEY_END:o=K.length-1,e.ctrlKey&&(r=n.length);break;case m.KEY_ESCAPE:D?ke():Me(null,null,a),e.preventDefault();break;case m.KEY_A:return void(D&&(e.ctrlKey||e.metaKey)&&(xe(!0,null,null),e.preventDefault()));default:return}r>n.length||o>=K.length?e.preventDefault():(o<0||r<0||(l={row:r,col:o},Ie((t=a).row,t.col),Oe(l.row,l.col,!0)),e.preventDefault())}},null!=Z&&{onMouseUp:He,onMouseMove:function(e){if(null!=Z){var t=e.pageX-$.current,l=G[Z],a=l.minimumWidth,n=l.maximumWidth,r=Math.min(Math.max(ee.current+t,a),n),u=(0,o.default)(G);u[Z].width=r,Y(u),le.current.style.width="".concat(te+(r-ee.current),"px")}},onMouseLeave:He}),d.default.createElement(v.default.Provider,{value:{pinnedColumnOffsets:j,setCellAriaLiveMessage:we}},d.default.createElement(b.default,{columns:G,headerHeight:S,tableHeight:F,tabStopColumnIndex:0===re?de:void 0,onColumnSelect:function(e,t){Me(null,null,t),!y||D&&0===t.col||y(e)},onResizeMouseDown:Te}),d.default.createElement("tbody",null,n.map((function(e,t){return function(e,t){return d.default.createElement(h.default,{rowIndex:t,key:e.id,height:E,id:e.id,isSelected:e.isSelected,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:D,displayedColumns:K,rowHeaderIndex:T,onCellSelect:De,onRowSelect:Pe,tabStopColumnIndex:re===t?de:void 0,selectedCellColumnId:(null==Se?void 0:Se.rowId)===e.id?null==Se?void 0:Se.columnId:void 0})}(e,t+1)}))))),d.default.createElement(_.default,{"aria-live":"polite",text:me}),he&&d.default.createElement(_.default,{"aria-live":"polite","aria-relevant":"all","aria-atomic":"true",text:he}))}x.propTypes=k,x.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[]};var M=(0,s.injectIntl)(x);t.default=M},67964:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},80998:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(55511)),r=a(l(33902)),o=l(9504),u={cellShape:r.default,columnShape:o.columnShape,rowShape:n.default,SortIndicators:o.SortIndicators};t.default=u},33902:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(45697)),r=n.default.shape({content:n.default.node,isMasked:n.default.bool,isSelectable:n.default.bool});t.default=r},9504:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var n=a(l(45697)),r={ASCENDING:"ascending",DESCENDING:"descending"};t.SortIndicators=r;var o=n.default.shape({id:n.default.string.isRequired,displayName:n.default.string,hasError:n.default.bool,isResizable:n.default.bool,isSelectable:n.default.bool,minimumWidth:n.default.number,maximumWidth:n.default.number,width:n.default.number,sortIndicator:n.default.oneOf(Object.values(r))});t.columnShape=o},55511:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(45697)),r=a(l(33902)),o=n.default.shape({id:n.default.string.isRequired,cells:n.default.arrayOf(r.default),isSelected:n.default.bool,ariaLabel:n.default.string});t.default=o},93127:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(73365)),r=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(n.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(n.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(n.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)};t.default=r},830:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(10434)),o=a(l(861)),u=a(l(27424)),i=g(l(67294)),d=a(l(45697)),c=l(25387),s=g(l(51051)),f=a(l(47166)),m=a(l(47341)),p=a(l(54483)),_=a(l(54962)),b=a(l(64710)),h=a(l(8672));function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(w=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=w(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var v=f.default.bind(b.default),S={rowId:d.default.string.isRequired,columnId:d.default.string.isRequired,rowIndex:d.default.number,columnIndex:d.default.number,children:d.default.node,isMasked:d.default.bool,isSelectable:d.default.bool,isTabStop:d.default.bool,isSelected:d.default.bool,ariaLabel:d.default.string,isRowHeader:d.default.bool,onCellSelect:d.default.func,height:d.default.string,intl:d.default.shape({formatMessage:d.default.func}).isRequired};function E(e){var t=e.rowId,l=e.columnId,a=e.rowIndex,n=e.columnIndex,d=e.isTabStop,c=e.ariaLabel,f=e.isMasked,b=e.isRowHeader,w=e.isSelectable,g=e.isSelected,S=e.children,E=e.onCellSelect,C=e.height,y=e.intl,I=(0,i.useRef)(),O=(0,i.useState)(!1),R=(0,u.default)(O,2),k=R[0],x=R[1],M=(0,i.useContext)(m.default),N=(0,i.useContext)(h.default),D=function(){return(0,o.default)(I.current.querySelectorAll('a[href], button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])')).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")})).length>0};(0,i.useEffect)((function(){d&&D()&&N.setCellAriaLiveMessage(y.formatMessage({id:"Terra.worklist-data-grid.cell-interactable"}))}),[y,d]);var P,T=(0,i.useCallback)((function(){k||E({rowId:t,columnId:l},{row:a,col:n})}),[k,E,t,l,a,n]),H=function(){x(!1),N.setCellAriaLiveMessage(y.formatMessage({id:"Terra.worklist-data-grid.resume-navigation"}))};P=f?i.default.createElement("span",{className:v("no-data-cell",M.className)},y.formatMessage({id:"Terra.worklistDataGrid.maskedCell"})):S||i.default.createElement("span",{className:v("no-data-cell",M.className)},y.formatMessage({id:"Terra.worklistDataGrid.blank"}));var W=v("worklist-data-grid-cell",{masked:f,pinned:n<N.pinnedColumnOffsets.length,selectable:w&&!f,selected:g&&!f,blank:!S},M.className),j=n<N.pinnedColumnOffsets.length?N.pinnedColumnOffsets[n]:null,L=b?"th":"td";return i.default.createElement(L,(0,r.default)({ref:I,"aria-selected":g,"aria-label":c,tabIndex:d?0:-1,className:W},b&&{scope:"row",role:"rowheader"},{onClick:E?T:void 0,onKeyDown:function(e){var r=e.keyCode;if(k){if(r===s.KEY_ESCAPE)H();e.stopPropagation()}else switch(r){case s.KEY_RETURN:D()&&(x(!0),N.setCellAriaLiveMessage(y.formatMessage({id:"Terra.worklist-data-grid.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault());break;case s.KEY_SPACE:!f&&w&&E&&E({rowId:t,columnId:l},{row:a,col:n}),e.preventDefault();break;case s.KEY_C:(e.ctrlKey||e.metaKey)&&_.default.writeToClipboard(e.target.textContent)}},style:{left:j}}),i.default.createElement(p.default,{active:k,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,escapeDeactivates:!1,onDeactivate:H}},i.default.createElement("div",{className:v("cell-content",M.className),style:{height:C}},P)))}E.propTypes=S,E.defaultProps={isTabStop:!1,isRowHeader:!1,isSelected:!1,isSelectable:!0,isMasked:!1};var C=(0,c.injectIntl)(E);t.default=C},74994:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(67294)),r=a(l(45697)),o=a(l(80998)),u=a(l(14675)),i={columns:r.default.arrayOf(o.default.columnShape).isRequired,headerHeight:r.default.string.isRequired,tableHeight:r.default.number,tabStopColumnIndex:r.default.number,onColumnSelect:r.default.func,onResizeMouseDown:r.default.func},d=function(e){var t=e.columns,l=e.headerHeight,a=e.tableHeight,r=e.tabStopColumnIndex,o=e.onColumnSelect,i=e.onResizeMouseDown;return n.default.createElement("thead",null,n.default.createElement("tr",{className:"column-header-row",height:l},t.map((function(e,t){return function(e,t){return n.default.createElement(u.default,{key:e.id,id:e.id,rowIndex:0,columnIndex:t,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:l,isResizable:e.isResizable,isSelectable:e.isSelectable,tableHeight:a,isTabStop:r===t,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:o,onResizeMouseDown:i})}(e,t)}))))};d.propTypes=i;var c=d;t.default=c},14675:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=v(l(67294)),o=a(l(45697)),u=l(25387),i=v(l(51051)),d=a(l(47166)),c=a(l(47341)),s=a(l(85906)),f=a(l(11699)),m=a(l(94520)),p=a(l(94955)),_=a(l(80998)),b=a(l(54962)),h=a(l(8672)),w=a(l(25609));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(g=function(e){return e?l:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=g(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var S=d.default.bind(w.default),E={id:o.default.string.isRequired,displayName:o.default.string,sortIndicator:o.default.oneOf(Object.values(_.default.SortIndicators)),hasError:o.default.bool,minimumWidth:o.default.number,maximumWidth:o.default.number,isSelectable:o.default.bool,isResizable:o.default.bool,tableHeight:o.default.number,width:o.default.number.isRequired,headerHeight:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,isTabStop:o.default.bool,onColumnSelect:o.default.func,onResizeMouseDown:o.default.func,intl:o.default.shape({formatMessage:o.default.func})},C=function(e){var t,l=e.id,a=e.displayName,n=e.sortIndicator,o=e.hasError,u=e.isSelectable,d=e.isResizable,w=e.tableHeight,g=e.width,v=e.minimumWidth,E=e.maximumWidth,C=e.headerHeight,y=e.onColumnSelect,I=e.intl,O=e.rowIndex,R=e.columnIndex,k=e.onResizeMouseDown,x=e.isTabStop,M=(0,r.useContext)(h.default),N=(0,r.useRef)(),D=(0,r.useCallback)((function(e){N.current=e}),[]),P=(0,r.useCallback)((function(e){k&&k(e,R,N.current.offsetWidth)}),[R,k]),T=o&&r.default.createElement(m.default,{a11yLabel:I.formatMessage({id:"Terra.worklistDataGrid.columnError"}),className:S("error-icon")});n===_.default.SortIndicators.ASCENDING?t=r.default.createElement(s.default,null):n===_.default.SortIndicators.DESCENDING&&(t=r.default.createElement(f.default,null));var H=(0,r.useContext)(c.default),W=R<M.pinnedColumnOffsets.length?M.pinnedColumnOffsets[R]:null,j=g-1,L=R===M.pinnedColumnOffsets.length-1?r.default.createElement("div",{className:S("pinned-columns-divider"),style:{height:w,left:j}}):null;return r.default.createElement("th",{ref:D,key:l,className:S("column-header",H.className,{selectable:u,pinned:R<M.pinnedColumnOffsets.length}),tabIndex:x?0:-1,role:"columnheader",scope:"col","aria-sort":n,onMouseDown:u&&y?function(e){y(l,{row:O,col:R}),e.stopPropagation()}:void 0,onKeyDown:u&&y?function(e){switch(e.keyCode){case i.KEY_SPACE:case i.KEY_RETURN:y(l,{row:O,col:R}),e.stopPropagation(),e.preventDefault();break;case i.KEY_C:(e.ctrlKey||e.metaKey)&&b.default.writeToClipboard(e.target.textContent)}}:void 0,style:{width:"".concat(g,"px"),height:C,left:W}},r.default.createElement("div",{className:S("header-container"),role:a&&"button"},T,r.default.createElement("span",null,a),t),d&&r.default.createElement(p.default,{columnIndex:R,columnText:a,columnWidth:g,height:w,minimumWidth:v,maximumWidth:E,onResizeMouseDown:P}),L)};C.propTypes=E,C.defaultProps={isTabStop:!1,hasError:!1,isSelectable:!0,isResizable:!0};var y=(0,u.injectIntl)(C);t.default=y},94955:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=f(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,l&&l.set(e,a);return a}(l(67294)),u=a(l(45697)),i=l(25387),d=a(l(47166)),c=a(l(47341)),s=a(l(12638));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(f=function(e){return e?l:t})(e)}var m=d.default.bind(s.default),p={columnText:u.default.string.isRequired,columnWidth:u.default.number.isRequired,height:u.default.number.isRequired,minimumWidth:u.default.number.isRequired,maximumWidth:u.default.number.isRequired,onResizeMouseDown:u.default.func.isRequired,intl:u.default.shape({formatMessage:u.default.func}).isRequired},_=function(e){var t=e.columnText,l=e.columnWidth,a=e.height,n=e.minimumWidth,u=e.maximumWidth,i=e.onResizeMouseDown,d=e.intl,s=(0,o.useState)(!1),f=(0,r.default)(s,2),p=f[0],_=f[1],b=(0,o.useContext)(c.default),h=(0,o.useRef)(),w=(0,o.useCallback)((function(e){h.current=e}),[]);return o.default.createElement("div",{ref:w,draggable:!0,role:"slider",tabIndex:-1,"aria-hidden":!p,"aria-valuemin":n,"aria-valuenow":l,"aria-valuemax":u,"aria-label":t,"aria-valuetext":d.formatMessage({id:"Terra.worklist-data-grid.resizeHandleValueText"},{columnWidth:l}),style:{height:"".concat(a,"px")},onMouseDown:function(e){h.current.focus(),i(e),e.stopPropagation(),e.preventDefault()},onFocus:function(){return _(!0)},onBlur:function(){return _(!1)},className:m("resize-handle",b.className)})};_.propTypes=p;var b=(0,i.injectIntl)(_);t.default=b},37356:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,l&&l.set(e,a);return a}(l(67294)),o=a(l(45697)),u=a(l(47341)),i=a(l(47166));l(67964);var d=a(l(51713)),c=a(l(81761)),s=a(l(830)),f=a(l(33902)),m=a(l(80998));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}var _=i.default.bind(d.default),b={id:o.default.string.isRequired,rowIndex:o.default.number,height:o.default.string,cells:o.default.arrayOf(f.default),isSelected:o.default.bool,ariaLabel:o.default.string,hasRowSelection:o.default.bool,onRowSelect:o.default.func,displayedColumns:o.default.arrayOf(m.default.columnShape),onCellSelect:o.default.func,rowHeaderIndex:o.default.number,selectedCellColumnId:o.default.string,tabStopColumnIndex:o.default.number};function h(e){var t=e.rowIndex,l=e.height,a=e.hasRowSelection,n=e.id,o=e.isSelected,i=e.cells,d=e.ariaLabel,f=e.displayedColumns,m=e.rowHeaderIndex,p=e.onRowSelect,b=e.onCellSelect,h=e.selectedCellColumnId,w=e.tabStopColumnIndex,g=(0,r.useContext)(u.default),v=a?1:0,S=function(e,l){a?p&&p(e.rowId,t,l):b&&b(e,l)},E=a?r.default.createElement(c.default,{rowId:n,columnId:f[0].id,rowIndex:t,columnIndex:0,isTabStop:0===w,isSelected:o,ariaLabel:d,onCellSelect:S}):null;return r.default.createElement("tr",{className:_([o?"row-selected":"worklist-data-grid-row",g.className]),style:{height:l}},E,i.map((function(e,o){return function(e,t,n,o){var u=f[t].id,i=t===m+v;return r.default.createElement(s.default,{rowId:o,columnId:u,rowIndex:e,columnIndex:t,key:"".concat(o,"_").concat(u),isTabStop:w===t,isSelected:!a&&h===u,isMasked:n.isMasked,isSelectable:n.isSelectable,isRowHeader:i,onCellSelect:S,height:l},n.content)}(t,o+v,e,n)})))}h.propTypes=b,h.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};var w=h;t.default=w},81761:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(67294)),r=a(l(45697)),o=l(25387),u=a(l(830)),i={rowId:r.default.string.isRequired,columnId:r.default.string.isRequired,rowIndex:r.default.number,columnIndex:r.default.number,isTabStop:r.default.bool,isSelected:r.default.bool,ariaLabel:r.default.string,onCellSelect:r.default.func,intl:r.default.shape({formatMessage:r.default.func}).isRequired};function d(e){var t=e.rowId,l=e.columnId,a=e.rowIndex,r=e.columnIndex,o=e.isTabStop,i=e.isSelected,d=e.ariaLabel,c=e.onCellSelect,s=e.intl.formatMessage({id:"Terra.worklist-data-grid.row-index"},{row:a}),f=n.default.createElement("input",{type:"checkbox","aria-label":d||s,"aria-checked":i,tabIndex:o?0:-1,checked:i});return n.default.createElement(u.default,{rowId:t,columnId:l,key:"".concat(t,"_").concat(l),rowIndex:a,columnIndex:r,isTabStop:!1,isSelected:!1,onCellSelect:c},f)}d.propTypes=i;var c=(0,o.injectIntl)(d);t.default=c},8672:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(67294)).default.createContext({pinnedColumnOffsets:[]});t.default=n},54962:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!1,isResizable:!1},FIRST_NON_HEADER_ROW:1,writeToClipboard:function(e){"clipboard"in navigator?navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}};t.default=l},73365:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"to be properly accessible, the row header column should be a pinned column. please set pinned columns"},a=l;t.default=a},72103:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___t0nx3","clinical-lowlight-theme":"WorklistDataGrid-module__clinical-lowlight-theme___BLIqI","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___aaS2w","worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___yhmS9"}},64710:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Cell-module__orion-fusion-theme___NWHS+","clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___BlGTz","worklist-data-grid-cell":"Cell-module__worklist-data-grid-cell___ERjGQ",selected:"Cell-module__selected___L4qWU",masked:"Cell-module__masked___NrbgT","cell-content":"Cell-module__cell-content___q4GT1","no-data-cell":"Cell-module__no-data-cell___B67Nl",pinned:"Cell-module__pinned___0bEYC",selectable:"Cell-module__selectable___RGht0"}},25609:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___+mPW0","clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___ZyF6A","column-header":"ColumnHeaderCell-module__column-header___oVf7Q","header-container":"ColumnHeaderCell-module__header-container___A1dFv","error-icon":"ColumnHeaderCell-module__error-icon___kES53",selectable:"ColumnHeaderCell-module__selectable___CmoIF",pinned:"ColumnHeaderCell-module__pinned___Qip4n","pinned-columns-divider":"ColumnHeaderCell-module__pinned-columns-divider___maaPH"}},12638:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___sft4v","clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___3DSst","resize-handle":"ColumnResizeHandle-module__resize-handle___SB2vj"}},51713:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Row-module__orion-fusion-theme___nu9Mx","clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___ggHC1","worklist-data-grid-row":"Row-module__worklist-data-grid-row___a-6e7","row-selected":"Row-module__row-selected___VglJ4"}}}]);