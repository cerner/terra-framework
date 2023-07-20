"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72095],{72095:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(10434)),o=r(l(861)),u=r(l(27424)),i=r(l(38416)),d=y(l(67294)),c=r(l(45697)),s=l(25387),f=r(l(47166)),m=r(l(47341)),p=y(l(51051)),w=r(l(15555)),b=r(l(74994)),h=r(l(80998)),_=r(l(72103)),g=r(l(54962)),v=r(l(37356));function S(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(S=function(e){return e?l:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=S(t);if(l&&l.has(e))return l.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}function R(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}var I=f.default.bind(_.default),C={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,columns:c.default.arrayOf(h.default.columnShape),rows:c.default.arrayOf(h.default.rowShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowHeaderIndex:c.default.number,onColumnResize:c.default.func,onCellSelect:c.default.func,onRowSelect:c.default.func,onRowSelectAll:c.default.func,onColumnSelect:c.default.func,onClearSelectedRows:c.default.func,onDisableSelectableRows:c.default.func,onEnableSelectableRows:c.default.func,hasSelectableRows:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired};function E(e){var t=e.id,l=e.ariaLabelledBy,r=e.ariaLabel,a=e.columns,c=e.rows,s=e.onColumnResize,f=e.defaultColumnWidth,h=e.columnHeaderHeight,_=e.rowHeight,S=e.onColumnSelect,y=e.onCellSelect,C=e.onRowSelect,E=e.onRowSelectAll,O=e.onClearSelectedRows,k=e.onDisableSelectableRows,M=e.onEnableSelectableRows,x=e.hasSelectableRows,j=e.intl,D=e.rowHeaderIndex,P=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?R(Object(l),!0).forEach((function(t){(0,i.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):R(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},e);return t.width=e.width||f,t.minimumWidth=e.minimumWidth||60,t.maximumWidth=e.maximumWidth||300,t},W=(x?[g.default.ROW_SELECTION_COLUMN]:[]).concat(a),T=(0,d.useState)(W.map((function(e){return P(e)}))),H=(0,u.default)(T,2),N=H[0],K=H[1],q=(0,d.useState)(0),z=(0,u.default)(q,2),L=z[0],G=z[1],Y=(0,d.useState)(null),A=(0,u.default)(Y,2),B=A[0],F=A[1],U=(0,d.useRef)(0),V=(0,d.useRef)(200),Q=(0,d.useRef)(0),X=(0,d.useRef)(),J=(0,d.useRef)(0),Z=(0,d.useRef)(0),$=(0,d.useRef)(null),ee=(0,d.useRef)(null),te=(0,d.useRef)(!1),le=(0,d.useState)(null),re=(0,u.default)(le,2),ae=re[0],ne=re[1],oe=(0,d.useState)(),ue=(0,u.default)(oe,2),ie=ue[0],de=ue[1],ce=(0,d.useContext)(m.default),se=function(e){return x&&e<W.length&&W[e].id===g.default.ROW_SELECTION_COLUMN.id},fe=(0,d.useCallback)((function(e){X.current=e,G(X.current.offsetHeight-1)}),[]),me=function(e,t){var l=X.current.rows[e].cells[t];l.tabIndex=-1,se(t)&&l.getElementsByTagName("input").length>0&&(l.getElementsByTagName("input")[0].tabIndex=-1)},pe=function(e,t,l){me(J.current,Z.current),J.current=e,Z.current=t;var r=X.current.rows[e].cells[t];if(se(t)&&r.getElementsByTagName("input").length>0){var a=r.getElementsByTagName("input");r=(0,u.default)(a,1)[0]}r.tabIndex=0,l&&r.focus&&r.focus()};(0,d.useEffect)((function(){var e={row:J.current,col:Z.current+(x?1:-1)};x&&0===J.current&&0===Z.current?e={row:1,col:0}:x||0!==Z.current||(e={row:J.current,col:0}),pe(e.row,e.col,!1),null!=ae&&ne(null),x||($.current=null,ee.current=null),te.current||de(j.formatMessage({id:x?"Terra.worklist-data-grid.row-selection-mode-enabled":"Terra.worklist-data-grid.row-selection-mode-disabled"})),te.current=!1,K(W.map((function(e){return P(e)})))}),[x]),(0,d.useEffect)((function(){K(W.map((function(e){return P(e)})))}),[a]);var we=function(){var e="";ee.current=null,c.find((function(e){return!0===e.isSelected}))?(e=j.formatMessage({id:"Terra.worklist-data-grid.all-rows-unselected"}),O&&O()):k&&($.current=null,e=j.formatMessage({id:"Terra.worklist-data-grid.row-selection-mode-disabled"}),k()),de(e)},be=function(e,t){if(M&&t){var l=Math.min(t.anchorRow,e),r=Math.max(t.anchorRow,e),a=c.slice(l-1,r).map((function(e){return e.id})),n=[];if(t.anchorRow>t.previousSelectionEndRow){if(e>t.previousSelectionEndRow)n=c.slice(t.previousSelectionEndRow-1,e).map((function(e){return e.id}))}else if(t.anchorRow<t.previousSelectionEndRow){if(e<t.previousSelectionEndRow)n=c.slice(e-1,t.previousSelectionEndRow).map((function(e){return e.id}))}de(x?"Multiselect mode enabled. Currently selected rows range from row ".concat(t.anchorRow," to row ").concat(e):"Row selection enabled. Currently selected rows range from row ".concat(t.anchorRow," to row ").concat(e)),M(a,n)}},he=function(e,t,l){var r,a="Terra.worklist-data-grid.all-rows-selected";if(ee.current=null,!e){var n=!c[l-1].isSelected;ee.current={anchorRow:l},a=n?"Terra.worklist-data-grid.row-selection-template":"Terra.worklist-data-grid.row-selection-cleared-template",r=c[l-1].ariaLabel||l+1}de(j.formatMessage({id:a},{row:r})),e&&E?E():C&&C(t)},_e=function(e,t,l){x||de(j.formatMessage({id:e?"Terra.worklist-data-grid.cell-selection-template":"Terra.worklist-data-grid.cell-selection-cleared"},{row:l.row+1,column:l.col+1})),pe(l.row,l.col,!0),e===(null==ae?void 0:ae.rowId)&&t===(null==ae?void 0:ae.columnId)||ne(e&&t?{rowId:e,columnId:t}:null)},ge=function(e,t){if(l=t.row,r=t.col,!ae||ae.rowId!==l||ae.columnId!==r){var l,r,a=function(e){return{row:e.row-1,col:e.col+(x?-1:0)}}(t),n=c[a.row].cells[a.col];!1===n.isSelectable||n.isMasked||(_e(e.rowId,e.columnId,t),y&&y(e.rowId,e.columnId))}},ve=function(e,t){ge(e,t)},Se=function(e,t,l,r,a){_e(null,null,l);var n=a?null==ee?void 0:ee.current:null==$?void 0:$.current;r?x?null!=n&&n.anchorRow?(be(t,n),n.previousSelectionEndRow=t):he(!1,e,t):a&&(te.current=!x,ee.current={anchorRow:t},be(t,ee.current),ee.current.previousSelectionEndRow=t):x&&he(!1,e,t)},ye=(0,d.useCallback)((function(e,t,l){Q.current=X.current.offsetWidth,U.current=e.pageX,V.current=l,F(t)}),[]),Re=function(){s&&s(N[B].id,N[B].width),F(null)};return d.default.createElement("div",{className:I("worklist-data-grid-container")},d.default.createElement("table",(0,n.default)({ref:fe,id:t,role:"grid","aria-labelledby":l,"aria-label":r,className:I("worklist-data-grid",ce.className),onKeyDown:function(e){var t,l,r,a={row:J.current,col:Z.current},n=a.row,o=a.col,u=!1;switch(e.keyCode){case p.KEY_UP:e.shiftKey&&(u=!0),n-=1;break;case p.KEY_DOWN:e.shiftKey&&(u=!0),n+=1;break;case p.KEY_SHIFT:0===a.row||null!=$&&null!==(t=$.current)&&void 0!==t&&t.anchorRow||($.current={anchorRow:a.row,previousSelectionEndRow:a.row});break;case p.KEY_LEFT:e.metaKey?(o=0,e.ctrlKey&&(n=g.default.FIRST_NON_HEADER_ROW)):o-=1;break;case p.KEY_RIGHT:e.metaKey?(o=W.length-1,e.ctrlKey&&(n=c.length)):o+=1;break;case p.KEY_HOME:o=0,e.ctrlKey&&(n=g.default.FIRST_NON_HEADER_ROW);break;case p.KEY_END:o=W.length-1,e.ctrlKey&&(n=c.length);break;case p.KEY_ESCAPE:x?we():_e(null,null,a),e.preventDefault();break;case p.KEY_A:return void(x&&(e.ctrlKey||e.metaKey)&&(he(!0,null,null),e.preventDefault()));default:return}(u&&(n>c.length?n=c.length:n<=0&&(n=1),te.current=!x,be(n,$.current),$.current.previousSelectionEndRow=n),n>c.length||o>=W.length)?e.preventDefault():(o<0||n<0||(r={row:n,col:o},me((l=a).row,l.col),pe(r.row,r.col,!0)),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===p.KEY_SHIFT)$.current=null}},null!=B&&{onMouseUp:Re,onMouseMove:function(e){if(null!=B){var t=e.pageX-U.current,l=N[B],r=l.minimumWidth,a=l.maximumWidth,n=Math.min(Math.max(V.current+t,r),a),u=(0,o.default)(N);u[B].width=n,K(u),X.current.style.width="".concat(Q+(n-V.current),"px")}},onMouseLeave:Re}),d.default.createElement(b.default,{columns:N,headerHeight:h,tableHeight:L,tabStopColumnIndex:0===J.current?Z.current:void 0,onColumnSelect:function(e,t){_e(null,null,t),!S||x&&0===t.col||S(e)},onResizeMouseDown:ye}),d.default.createElement("tbody",null,c.map((function(e,t){return function(e,t){return d.default.createElement(v.default,{rowIndex:t,key:e.id,height:_,id:e.id,isSelected:e.isSelected,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:x,displayedColumns:W,rowHeaderIndex:D,onCellSelect:ve,onRowSelect:Se,tabStopColumnIndex:J.current===t?Z.current:void 0,selectedCellColumnId:(null==ae?void 0:ae.rowId)===e.id?null==ae?void 0:ae.columnId:void 0})}(e,t+1)})))),d.default.createElement(w.default,{"aria-live":"polite",text:ie}))}E.propTypes=C,E.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem"};var O=(0,s.injectIntl)(E);t.default=O},67964:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},80998:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(55511)),n=r(l(33902)),o=l(9504),u={cellShape:n.default,columnShape:o.columnShape,rowShape:a.default,SortIndicators:o.SortIndicators};t.default=u},33902:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(45697)),n=a.default.shape({content:a.default.node,isMasked:a.default.bool,isSelectable:a.default.bool});t.default=n},9504:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var a=r(l(45697)),n={ASCENDING:"ascending",DESCENDING:"descending"};t.SortIndicators=n;var o=a.default.shape({id:a.default.string.isRequired,displayName:a.default.string,hasError:a.default.bool,isResizable:a.default.bool,isSelectable:a.default.bool,minimumWidth:a.default.number,maximumWidth:a.default.number,width:a.default.number,sortIndicator:a.default.oneOf(Object.values(n))});t.columnShape=o},55511:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(45697)),n=r(l(33902)),o=a.default.shape({id:a.default.string.isRequired,cells:a.default.arrayOf(n.default),isSelected:a.default.bool,ariaLabel:a.default.string});t.default=o},830:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(l(67294)),o=r(l(45697)),u=p(l(51051));l(67964);var i=l(25387),d=r(l(47166)),c=r(l(47341)),s=r(l(54962)),f=r(l(64710));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=m(t);if(l&&l.has(e))return l.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var w=d.default.bind(f.default),b={rowId:o.default.string.isRequired,columnId:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,children:o.default.node,isMasked:o.default.bool,isSelectable:o.default.bool,isTabStop:o.default.bool,isSelected:o.default.bool,ariaLabel:o.default.string,isRowHeader:o.default.bool,onCellSelect:o.default.func,height:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired};function h(e){var t=e.rowId,l=e.columnId,r=e.rowIndex,a=e.columnIndex,o=e.isTabStop,i=e.ariaLabel,d=e.isRowHeader,f=e.isSelected,m=e.isMasked,p=e.isSelectable,b=e.children,h=e.onCellSelect,_=e.height,g=e.intl,v=(0,n.useContext)(c.default),S=i;m?S=g.formatMessage({id:"Terra.worklistDataGrid.maskedCell"}):b||(S=g.formatMessage({id:"Terra.worklistDataGrid.blank"}));var y=w("worklist-data-grid-cell",{masked:m,selectable:p&&!m,selected:f&&!m,blank:!b},v.className),R=d?"th":"td";return n.default.createElement(R,{"aria-selected":f,"aria-label":S,tabIndex:o?0:-1,className:y,onMouseDown:function(e){m||!p?(e.stopPropagation(),e.preventDefault()):h&&(h({rowId:t,columnId:l},{row:r,col:a},!!e.shiftKey,!1),e.stopPropagation(),e.preventDefault())},onKeyDown:function(e){switch(e.keyCode){case u.KEY_SPACE:m||!p?(e.stopPropagation(),e.preventDefault()):h&&(h({rowId:t,columnId:l},{row:r,col:a},!!e.shiftKey,!0),e.stopPropagation(),e.preventDefault());break;case u.KEY_C:(e.ctrlKey||e.metaKey)&&s.default.writeToClipboard(e.target.textContent)}}},!m&&b&&n.default.createElement("div",{className:w("cell-content",v.className),style:{height:_}},b))}h.propTypes=b,h.defaultProps={isTabStop:!1,isRowHeader:!1,isSelected:!1,isSelectable:!0,isMasked:!1};var _=(0,i.injectIntl)(h);t.default=_},74994:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(67294)),n=r(l(45697)),o=r(l(80998)),u=r(l(14675)),i={columns:n.default.arrayOf(o.default.columnShape).isRequired,headerHeight:n.default.string.isRequired,tableHeight:n.default.number,tabStopColumnIndex:n.default.number,onColumnSelect:n.default.func,onResizeMouseDown:n.default.func},d=function(e){var t=e.columns,l=e.headerHeight,r=e.tableHeight,n=e.tabStopColumnIndex,o=e.onColumnSelect,i=e.onResizeMouseDown;return a.default.createElement("thead",null,a.default.createElement("tr",{className:"column-header-row",height:l},t.map((function(e,t){return function(e,t){return a.default.createElement(u.default,{key:e.id,id:e.id,rowIndex:0,columnIndex:t,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:l,isResizable:e.isResizable,isSelectable:e.isSelectable,tableHeight:r,isTabStop:n===t,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:o,onResizeMouseDown:i})}(e,t)}))))};d.propTypes=i;var c=d;t.default=c},14675:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=g(l(67294)),o=r(l(45697)),u=r(l(47166)),i=l(25387),d=r(l(47341)),c=r(l(85906)),s=r(l(11699)),f=r(l(94520)),m=g(l(51051)),p=r(l(80998)),w=r(l(25609)),b=r(l(54962)),h=r(l(94955));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(_=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=_(t);if(l&&l.has(e))return l.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var v=u.default.bind(w.default),S={id:o.default.string.isRequired,displayName:o.default.string,sortIndicator:o.default.oneOf(Object.values(p.default.SortIndicators)),hasError:o.default.bool,minimumWidth:o.default.number,maximumWidth:o.default.number,isSelectable:o.default.bool,isResizable:o.default.bool,tableHeight:o.default.number,width:o.default.number.isRequired,headerHeight:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,isTabStop:o.default.bool,onColumnSelect:o.default.func,onResizeMouseDown:o.default.func,intl:o.default.shape({formatMessage:o.default.func})},y=function(e){var t,l=e.id,r=e.displayName,a=e.sortIndicator,o=e.hasError,u=e.isSelectable,i=e.isResizable,w=e.tableHeight,_=e.width,g=e.minimumWidth,S=e.maximumWidth,y=e.headerHeight,R=e.onColumnSelect,I=e.intl,C=e.rowIndex,E=e.columnIndex,O=e.onResizeMouseDown,k=e.isTabStop,M=(0,n.useRef)(),x=(0,n.useCallback)((function(e){M.current=e}),[]),j=(0,n.useCallback)((function(e){O&&O(e,E,M.current.offsetWidth)}),[E,O]),D=o&&n.default.createElement(f.default,{a11yLabel:I.formatMessage({id:"Terra.worklistDataGrid.columnError"}),className:v("error-icon")});a===p.default.SortIndicators.ASCENDING?t=n.default.createElement(c.default,null):a===p.default.SortIndicators.DESCENDING&&(t=n.default.createElement(s.default,null));var P=(0,n.useContext)(d.default);return n.default.createElement("th",{ref:x,key:l,className:v("column-header",P.className,{selectable:u}),tabIndex:k?0:-1,role:"columnheader",scope:"col","aria-sort":a,onMouseDown:u&&R?function(e){R(l,{row:C,col:E}),e.stopPropagation()}:void 0,onKeyDown:u&&R?function(e){switch(e.keyCode){case m.KEY_SPACE:case m.KEY_RETURN:R(l,{row:C,col:E}),e.stopPropagation(),e.preventDefault();break;case m.KEY_C:(e.ctrlKey||e.metaKey)&&b.default.writeToClipboard(e.target.textContent)}}:void 0,style:{width:"".concat(_,"px"),height:y}},n.default.createElement("div",{className:v("header-container"),role:r&&"button"},D,n.default.createElement("span",null,r),t),i&&n.default.createElement(h.default,{columnIndex:E,columnText:r,columnWidth:_,height:w,minimumWidth:g,maximumWidth:S,onResizeMouseDown:j}))};y.propTypes=S,y.defaultProps={isTabStop:!1,hasError:!1,isSelectable:!0,isResizable:!0};var R=(0,i.injectIntl)(y);t.default=R},94955:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=f(t);if(l&&l.has(e))return l.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,l&&l.set(e,r);return r}(l(67294)),u=r(l(45697)),i=l(25387),d=r(l(47166)),c=r(l(47341)),s=r(l(12638));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(f=function(e){return e?l:t})(e)}var m=d.default.bind(s.default),p={columnText:u.default.string.isRequired,columnWidth:u.default.number.isRequired,height:u.default.number.isRequired,minimumWidth:u.default.number.isRequired,maximumWidth:u.default.number.isRequired,onResizeMouseDown:u.default.func.isRequired,intl:u.default.shape({formatMessage:u.default.func}).isRequired},w=function(e){var t=e.columnText,l=e.columnWidth,r=e.height,a=e.minimumWidth,u=e.maximumWidth,i=e.onResizeMouseDown,d=e.intl,s=(0,o.useState)(!1),f=(0,n.default)(s,2),p=f[0],w=f[1],b=(0,o.useContext)(c.default),h=(0,o.useRef)(),_=(0,o.useCallback)((function(e){h.current=e}),[]);return o.default.createElement("div",{ref:_,draggable:!0,role:"slider",tabIndex:-1,"aria-hidden":!p,"aria-valuemin":a,"aria-valuenow":l,"aria-valuemax":u,"aria-label":t,"aria-valuetext":d.formatMessage({id:"Terra.worklist-data-grid.resizeHandleValueText"},{columnWidth:l}),style:{height:"".concat(r,"px")},onMouseDown:function(e){h.current.focus(),i(e),e.stopPropagation(),e.preventDefault()},onFocus:function(){return w(!0)},onBlur:function(){return w(!1)},className:m("resize-handle",b.className)})};w.propTypes=p;var b=(0,i.injectIntl)(w);t.default=b},37356:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,l&&l.set(e,r);return r}(l(67294)),o=r(l(45697)),u=r(l(47341)),i=r(l(47166));l(67964);var d=r(l(51713)),c=r(l(81761)),s=r(l(830)),f=r(l(33902)),m=r(l(80998));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}var w=i.default.bind(d.default),b={id:o.default.string.isRequired,rowIndex:o.default.number,height:o.default.string,cells:o.default.arrayOf(f.default),isSelected:o.default.bool,ariaLabel:o.default.string,hasRowSelection:o.default.bool,onRowSelect:o.default.func,displayedColumns:o.default.arrayOf(m.default.columnShape),onCellSelect:o.default.func,rowHeaderIndex:o.default.number,selectedCellColumnId:o.default.string,tabStopColumnIndex:o.default.number};function h(e){var t=e.rowIndex,l=e.height,r=e.hasRowSelection,a=e.id,o=e.isSelected,i=e.cells,d=e.ariaLabel,f=e.displayedColumns,m=e.rowHeaderIndex,p=e.onRowSelect,b=e.onCellSelect,h=e.selectedCellColumnId,_=e.tabStopColumnIndex,g=(0,n.useContext)(u.default),v=r?1:0,S=function(e,l,a,n){r||a?p&&p(e.rowId,t,l,a,n):b&&b(e,l)},y=r?n.default.createElement(c.default,{rowId:a,columnId:f[0].id,rowIndex:t,columnIndex:0,isTabStop:0===_,isSelected:o,ariaLabel:d,onCellSelect:S}):null;return n.default.createElement("tr",{className:w([o?"row-selected":"worklist-data-grid-row",r?"selectable":null,g.className]),style:{height:l}},y,i.map((function(e,o){return function(e,t,a,o){var u=f[t].id,i=t===m+v;return n.default.createElement(s.default,{rowId:o,columnId:u,rowIndex:e,columnIndex:t,key:"".concat(o,"_").concat(u),isTabStop:_===t,isSelected:!r&&h===u,isMasked:a.isMasked,isSelectable:a.isSelectable,isRowHeader:i,onCellSelect:S,height:l},a.content)}(t,o+v,e,a)})))}h.propTypes=b,h.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};var _=h;t.default=_},81761:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(67294)),n=r(l(45697));l(67964);var o=l(25387),u=r(l(830)),i={rowId:n.default.string.isRequired,columnId:n.default.string.isRequired,rowIndex:n.default.number,columnIndex:n.default.number,isTabStop:n.default.bool,isSelected:n.default.bool,ariaLabel:n.default.string,onCellSelect:n.default.func,intl:n.default.shape({formatMessage:n.default.func}).isRequired};function d(e){var t=e.rowId,l=e.columnId,r=e.rowIndex,n=e.columnIndex,o=e.isTabStop,i=e.isSelected,d=e.ariaLabel,c=e.onCellSelect,s=e.intl.formatMessage({id:"Terra.worklist-data-grid.row-index"},{row:r}),f=a.default.createElement("input",{type:"checkbox","aria-label":d||s,"aria-checked":i,tabIndex:o?0:-1,checked:i});return a.default.createElement(u.default,{rowId:t,columnId:l,key:"".concat(t,"_").concat(l),rowIndex:r,columnIndex:n,isTabStop:!1,isSelected:!1,onCellSelect:c},f)}d.propTypes=i;var c=(0,o.injectIntl)(d);t.default=c},54962:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!1,isResizable:!1},FIRST_NON_HEADER_ROW:1,writeToClipboard:function(e){"clipboard"in navigator?navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}};t.default=l},72103:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___t0nx3","clinical-lowlight-theme":"WorklistDataGrid-module__clinical-lowlight-theme___BLIqI","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___aaS2w","worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___yhmS9"}},64710:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Cell-module__orion-fusion-theme___NWHS+","clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___BlGTz","worklist-data-grid-cell":"Cell-module__worklist-data-grid-cell___ERjGQ",selected:"Cell-module__selected___L4qWU",masked:"Cell-module__masked___NrbgT","cell-content":"Cell-module__cell-content___q4GT1",selectable:"Cell-module__selectable___RGht0"}},25609:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___+mPW0","clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___ZyF6A","column-header":"ColumnHeaderCell-module__column-header___oVf7Q","header-container":"ColumnHeaderCell-module__header-container___A1dFv","error-icon":"ColumnHeaderCell-module__error-icon___kES53",selectable:"ColumnHeaderCell-module__selectable___CmoIF"}},12638:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___sft4v","clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___3DSst","resize-handle":"ColumnResizeHandle-module__resize-handle___SB2vj"}},51713:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Row-module__orion-fusion-theme___nu9Mx","clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___ggHC1",selectable:"Row-module__selectable___yGB3p","worklist-data-grid-row":"Row-module__worklist-data-grid-row___a-6e7","row-selected":"Row-module__row-selected___VglJ4"}}}]);