"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72095],{72095:function(e,t,l){var a=l(64836),r=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(10434)),o=a(l(861)),u=a(l(27424)),i=a(l(38416)),d=S(l(67294)),c=a(l(45697)),s=l(25387),f=a(l(47166)),m=a(l(47341)),p=S(l(51051)),b=a(l(15555)),w=a(l(74994)),h=a(l(80998)),_=a(l(72103)),g=a(l(54962)),v=a(l(37356));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(y=function(e){return e?l:t})(e)}function S(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=y(t);if(l&&l.has(e))return l.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}function I(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}var C=f.default.bind(_.default),O={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,columns:c.default.arrayOf(h.default.columnShape),rows:c.default.arrayOf(h.default.rowShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowHeaderIndex:c.default.number,onColumnResize:c.default.func,onCellSelect:c.default.func,onRowSelect:c.default.func,onRowSelectAll:c.default.func,onColumnSelect:c.default.func,onClearSelectedRows:c.default.func,onDisableSelectableRows:c.default.func,hasSelectableRows:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired};function R(e){var t=e.id,l=e.ariaLabelledBy,a=e.ariaLabel,r=e.columns,c=e.rows,s=e.onColumnResize,f=e.defaultColumnWidth,h=e.columnHeaderHeight,_=e.rowHeight,y=e.onColumnSelect,S=e.onCellSelect,O=e.onRowSelect,R=e.onRowSelectAll,k=e.onClearSelectedRows,E=e.onDisableSelectableRows,x=e.hasSelectableRows,M=e.intl,j=e.rowHeaderIndex,P=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?I(Object(l),!0).forEach((function(t){(0,i.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):I(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},e);return t.width=e.width||f,t.minimumWidth=e.minimumWidth||60,t.maximumWidth=e.maximumWidth||300,t},W=(x?[g.default.ROW_SELECTION_COLUMN]:[]).concat(r),D=(0,d.useState)(W.map((function(e){return P(e)}))),T=(0,u.default)(D,2),N=T[0],H=T[1],K=(0,d.useState)(0),q=(0,u.default)(K,2),z=q[0],L=q[1],G=(0,d.useState)(null),A=(0,u.default)(G,2),Y=A[0],B=A[1],F=(0,d.useRef)(0),U=(0,d.useRef)(200),V=(0,d.useRef)(0),Q=(0,d.useRef)(),X=(0,d.useRef)(0),J=(0,d.useRef)(0),Z=(0,d.useRef)(),$=(0,d.useState)(null),ee=(0,u.default)($,2),te=ee[0],le=ee[1],ae=(0,d.useState)(),re=(0,u.default)(ae,2)[1],ne=(0,d.useContext)(m.default),oe=function(e){return x&&e<W.length&&W[e].id===g.default.ROW_SELECTION_COLUMN.id},ue=(0,d.useCallback)((function(e){Q.current=e,L(Q.current.offsetHeight-1)}),[]),ie=function(e,t){var l=Q.current.rows[e].cells[t];l.tabIndex=-1,oe(t)&&l.getElementsByTagName("input").length>0&&(l.getElementsByTagName("input")[0].tabIndex=-1)},de=function(e,t,l){ie(X.current,J.current),X.current=e,J.current=t;var a=Q.current.rows[e].cells[t];if(oe(t)&&a.getElementsByTagName("input").length>0){var r=a.getElementsByTagName("input");a=(0,u.default)(r,1)[0]}a.tabIndex=0,l&&a.focus&&a.focus()};(0,d.useEffect)((function(){var e={row:X.current,col:J.current+(x?1:-1)};x&&0===X.current&&0===J.current?e={row:1,col:0}:x||0!==J.current||(e={row:X.current,col:0}),de(e.row,e.col,!1),null!=te&&le(null),Z.current=M.formatMessage({id:x?"Terra.worklist-data-grid.row-selection-mode-enabled":"Terra.worklist-data-grid.row-selection-mode-disabled"}),re(Z.current),H(W.map((function(e){return P(e)})))}),[x]),(0,d.useEffect)((function(){H(W.map((function(e){return P(e)})))}),[r]);var ce=function(){Z.current="",c.find((function(e){return!0===e.isSelected}))?(Z.current=M.formatMessage({id:"Terra.worklist-data-grid.all-rows-unselected"}),k&&k()):E&&(Z.current=M.formatMessage({id:"Terra.worklist-data-grid.row-selection-mode-disabled"}),E())},se=function(e,t,l){var a,r="Terra.worklist-data-grid.all-rows-selected";e||(r=!c[l-1].isSelected?"Terra.worklist-data-grid.row-selection-template":"Terra.worklist-data-grid.row-selection-cleared-template",a=c[l-1].ariaLabel||l+1);Z.current=M.formatMessage({id:r},{row:a}),e&&R?R():O&&O(t)},fe=function(e,t,l){x||(Z.current=M.formatMessage({id:e?"Terra.worklist-data-grid.cell-selection-template":"Terra.worklist-data-grid.cell-selection-cleared"},{row:l.row+1,column:l.col+1})),de(l.row,l.col,!0),e===(null==te?void 0:te.rowId)&&t===(null==te?void 0:te.columnId)||le(e&&t?{rowId:e,columnId:t}:null)},me=function(e,t){if(l=t.row,a=t.col,!te||te.rowId!==l||te.columnId!==a){var l,a,r=function(e){return{row:e.row-1,col:e.col+(x?-1:0)}}(t),n=c[r.row].cells[r.col];!1===n.isSelectable||n.isMasked||(fe(e.rowId,e.columnId,t),S&&S(e.rowId,e.columnId))}},pe=function(e,t){me(e,t)},be=function(e,t,l){fe(null,null,l),se(!1,e,t)},we=(0,d.useCallback)((function(e,t,l){V.current=Q.current.offsetWidth,F.current=e.pageX,U.current=l,B(t)}),[]),he=function(){s&&s(N[Y].id,N[Y].width),B(null)};return d.default.createElement("div",{className:C("worklist-data-grid-container")},d.default.createElement("table",(0,n.default)({ref:ue,id:t,role:"grid","aria-labelledby":l,"aria-label":a,className:C("worklist-data-grid",ne.className),onKeyDown:function(e){var t,l,a={row:X.current,col:J.current},r=a.row,n=a.col;switch(e.keyCode){case p.KEY_UP:r-=1;break;case p.KEY_DOWN:r+=1;break;case p.KEY_LEFT:e.metaKey?(n=0,e.ctrlKey&&(r=g.default.FIRST_NON_HEADER_ROW)):n-=1;break;case p.KEY_RIGHT:e.metaKey?(n=W.length-1,e.ctrlKey&&(r=c.length)):n+=1;break;case p.KEY_HOME:n=0,e.ctrlKey&&(r=g.default.FIRST_NON_HEADER_ROW);break;case p.KEY_END:n=W.length-1,e.ctrlKey&&(r=c.length);break;case p.KEY_ESCAPE:x?ce():fe(null,null,a),e.preventDefault();break;case p.KEY_A:return void(x&&(e.ctrlKey||e.metaKey)&&(se(!0,null,null),e.preventDefault()));default:return}r>c.length||n>=W.length?e.preventDefault():(n<0||r<0||(l={row:r,col:n},ie((t=a).row,t.col),de(l.row,l.col,!0)),e.preventDefault())}},null!=Y&&{onMouseUp:he,onMouseMove:function(e){if(null!=Y){var t=e.pageX-F.current,l=N[Y],a=l.minimumWidth,r=l.maximumWidth,n=Math.min(Math.max(U.current+t,a),r),u=(0,o.default)(N);u[Y].width=n,H(u),Q.current.style.width="".concat(V+(n-U.current),"px")}},onMouseLeave:he}),d.default.createElement(w.default,{columns:N,headerHeight:h,tableHeight:z,tabStopColumnIndex:0===X.current?J.current:void 0,onColumnSelect:function(e,t){fe(null,null,t),!y||x&&0===t.col||y(e)},onResizeMouseDown:we}),d.default.createElement("tbody",null,c.map((function(e,t){return function(e,t){return d.default.createElement(v.default,{rowIndex:t,key:e.id,height:_,id:e.id,isSelected:e.isSelected,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:x,displayedColumns:W,rowHeaderIndex:j,onCellSelect:pe,onRowSelect:be,tabStopColumnIndex:X.current===t?J.current:void 0,selectedCellColumnId:(null==te?void 0:te.rowId)===e.id?null==te?void 0:te.columnId:void 0})}(e,t+1)})))),d.default.createElement(b.default,{"aria-live":"polite",text:Z.current}))}R.propTypes=O,R.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem"};var k=(0,s.injectIntl)(R);t.default=k},67964:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},80998:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(55511)),n=a(l(33902)),o=l(9504),u={cellShape:n.default,columnShape:o.columnShape,rowShape:r.default,SortIndicators:o.SortIndicators};t.default=u},33902:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(45697)),n=r.default.shape({content:r.default.node,isMasked:r.default.bool,isSelectable:r.default.bool});t.default=n},9504:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var r=a(l(45697)),n={ASCENDING:"ascending",DESCENDING:"descending"};t.SortIndicators=n;var o=r.default.shape({id:r.default.string.isRequired,displayName:r.default.string,hasError:r.default.bool,isResizable:r.default.bool,isSelectable:r.default.bool,minimumWidth:r.default.number,maximumWidth:r.default.number,width:r.default.number,sortIndicator:r.default.oneOf(Object.values(n))});t.columnShape=o},55511:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(45697)),n=a(l(33902)),o=r.default.shape({id:r.default.string.isRequired,cells:r.default.arrayOf(n.default),isSelected:r.default.bool,ariaLabel:r.default.string});t.default=o},830:function(e,t,l){var a=l(64836),r=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(l(67294)),o=a(l(45697)),u=p(l(51051));l(67964);var i=l(25387),d=a(l(47166)),c=a(l(47341)),s=a(l(54962)),f=a(l(64710));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=m(t);if(l&&l.has(e))return l.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var b=d.default.bind(f.default),w={rowId:o.default.string.isRequired,columnId:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,children:o.default.node,isMasked:o.default.bool,isSelectable:o.default.bool,isTabStop:o.default.bool,isSelected:o.default.bool,ariaLabel:o.default.string,isRowHeader:o.default.bool,onCellSelect:o.default.func,height:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired};function h(e){var t=e.rowId,l=e.columnId,a=e.rowIndex,r=e.columnIndex,o=e.isTabStop,i=e.ariaLabel,d=e.isRowHeader,f=e.isSelected,m=e.isMasked,p=e.isSelectable,w=e.children,h=e.onCellSelect,_=e.height,g=e.intl,v=(0,n.useContext)(c.default),y=i;m?y=g.formatMessage({id:"Terra.worklistDataGrid.maskedCell"}):w||(y=g.formatMessage({id:"Terra.worklistDataGrid.blank"}));var S=b("worklist-data-grid-cell",{masked:m,selectable:p&&!m,selected:f&&!m,blank:!w},v.className),I=d?"th":"td";return n.default.createElement(I,{"aria-selected":f,"aria-label":y,tabIndex:o?0:-1,className:S,onMouseDown:function(e){m||!p?(e.stopPropagation(),e.preventDefault()):h&&(h({rowId:t,columnId:l},{row:a,col:r}),e.stopPropagation())},onKeyDown:function(e){switch(e.keyCode){case u.KEY_SPACE:m||!p?(e.stopPropagation(),e.preventDefault()):h&&(h({rowId:t,columnId:l},{row:a,col:r}),e.stopPropagation(),e.preventDefault());break;case u.KEY_C:(e.ctrlKey||e.metaKey)&&s.default.writeToClipboard(e.target.textContent)}}},!m&&w&&n.default.createElement("div",{className:b("cell-content",v.className),style:{height:_}},w))}h.propTypes=w,h.defaultProps={isTabStop:!1,isRowHeader:!1,isSelected:!1,isSelectable:!0,isMasked:!1};var _=(0,i.injectIntl)(h);t.default=_},74994:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(67294)),n=a(l(45697)),o=a(l(80998)),u=a(l(14675)),i={columns:n.default.arrayOf(o.default.columnShape).isRequired,headerHeight:n.default.string.isRequired,tableHeight:n.default.number,tabStopColumnIndex:n.default.number,onColumnSelect:n.default.func,onResizeMouseDown:n.default.func},d=function(e){var t=e.columns,l=e.headerHeight,a=e.tableHeight,n=e.tabStopColumnIndex,o=e.onColumnSelect,i=e.onResizeMouseDown;return r.default.createElement("thead",null,r.default.createElement("tr",{className:"column-header-row",height:l},t.map((function(e,t){return function(e,t){return r.default.createElement(u.default,{key:e.id,id:e.id,rowIndex:0,columnIndex:t,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:l,isResizable:e.isResizable,isSelectable:e.isSelectable,tableHeight:a,isTabStop:n===t,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:o,onResizeMouseDown:i})}(e,t)}))))};d.propTypes=i;var c=d;t.default=c},14675:function(e,t,l){var a=l(64836),r=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=g(l(67294)),o=a(l(45697)),u=a(l(47166)),i=l(25387),d=a(l(47341)),c=a(l(85906)),s=a(l(11699)),f=a(l(94520)),m=g(l(51051)),p=a(l(80998)),b=a(l(25609)),w=a(l(54962)),h=a(l(94955));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(_=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=_(t);if(l&&l.has(e))return l.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var v=u.default.bind(b.default),y={id:o.default.string.isRequired,displayName:o.default.string,sortIndicator:o.default.oneOf(Object.values(p.default.SortIndicators)),hasError:o.default.bool,minimumWidth:o.default.number,maximumWidth:o.default.number,isSelectable:o.default.bool,isResizable:o.default.bool,tableHeight:o.default.number,width:o.default.number.isRequired,headerHeight:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,isTabStop:o.default.bool,onColumnSelect:o.default.func,onResizeMouseDown:o.default.func,intl:o.default.shape({formatMessage:o.default.func})},S=function(e){var t,l=e.id,a=e.displayName,r=e.sortIndicator,o=e.hasError,u=e.isSelectable,i=e.isResizable,b=e.tableHeight,_=e.width,g=e.minimumWidth,y=e.maximumWidth,S=e.headerHeight,I=e.onColumnSelect,C=e.intl,O=e.rowIndex,R=e.columnIndex,k=e.onResizeMouseDown,E=e.isTabStop,x=(0,n.useRef)(),M=(0,n.useCallback)((function(e){x.current=e}),[]),j=(0,n.useCallback)((function(e){k&&k(e,R,x.current.offsetWidth)}),[R,k]),P=o&&n.default.createElement(f.default,{a11yLabel:C.formatMessage({id:"Terra.worklistDataGrid.columnError"}),className:v("error-icon")});r===p.default.SortIndicators.ASCENDING?t=n.default.createElement(c.default,null):r===p.default.SortIndicators.DESCENDING&&(t=n.default.createElement(s.default,null));var W=(0,n.useContext)(d.default);return n.default.createElement("th",{ref:M,key:l,className:v("column-header",W.className,{selectable:u}),tabIndex:E?0:-1,role:"columnheader",scope:"col","aria-sort":r,onMouseDown:u&&I?function(e){I(l,{row:O,col:R}),e.stopPropagation()}:void 0,onKeyDown:u&&I?function(e){switch(e.keyCode){case m.KEY_SPACE:case m.KEY_RETURN:I(l,{row:O,col:R}),e.stopPropagation(),e.preventDefault();break;case m.KEY_C:(e.ctrlKey||e.metaKey)&&w.default.writeToClipboard(e.target.textContent)}}:void 0,style:{width:"".concat(_,"px"),height:S}},n.default.createElement("div",{className:v("header-container"),role:a&&"button"},P,n.default.createElement("span",null,a),t),i&&n.default.createElement(h.default,{columnIndex:R,columnText:a,columnWidth:_,height:b,minimumWidth:g,maximumWidth:y,onResizeMouseDown:j}))};S.propTypes=y,S.defaultProps={isTabStop:!1,hasError:!1,isSelectable:!0,isResizable:!0};var I=(0,i.injectIntl)(S);t.default=I},94955:function(e,t,l){var a=l(64836),r=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=f(t);if(l&&l.has(e))return l.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,l&&l.set(e,a);return a}(l(67294)),u=a(l(45697)),i=l(25387),d=a(l(47166)),c=a(l(47341)),s=a(l(12638));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(f=function(e){return e?l:t})(e)}var m=d.default.bind(s.default),p={columnText:u.default.string.isRequired,columnWidth:u.default.number.isRequired,height:u.default.number.isRequired,minimumWidth:u.default.number.isRequired,maximumWidth:u.default.number.isRequired,onResizeMouseDown:u.default.func.isRequired,intl:u.default.shape({formatMessage:u.default.func}).isRequired},b=function(e){var t=e.columnText,l=e.columnWidth,a=e.height,r=e.minimumWidth,u=e.maximumWidth,i=e.onResizeMouseDown,d=e.intl,s=(0,o.useState)(!1),f=(0,n.default)(s,2),p=f[0],b=f[1],w=(0,o.useContext)(c.default),h=(0,o.useRef)(),_=(0,o.useCallback)((function(e){h.current=e}),[]);return o.default.createElement("div",{ref:_,draggable:!0,role:"slider",tabIndex:-1,"aria-hidden":!p,"aria-valuemin":r,"aria-valuenow":l,"aria-valuemax":u,"aria-label":t,"aria-valuetext":d.formatMessage({id:"Terra.worklist-data-grid.resizeHandleValueText"},{columnWidth:l}),style:{height:"".concat(a,"px")},onMouseDown:function(e){h.current.focus(),i(e),e.stopPropagation(),e.preventDefault()},onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},className:m("resize-handle",w.className)})};b.propTypes=p;var w=(0,i.injectIntl)(b);t.default=w},37356:function(e,t,l){var a=l(64836),r=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,l&&l.set(e,a);return a}(l(67294)),o=a(l(45697)),u=a(l(47341)),i=a(l(47166));l(67964);var d=a(l(51713)),c=a(l(81761)),s=a(l(830)),f=a(l(33902)),m=a(l(80998));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}var b=i.default.bind(d.default),w={id:o.default.string.isRequired,rowIndex:o.default.number,height:o.default.string,cells:o.default.arrayOf(f.default),isSelected:o.default.bool,ariaLabel:o.default.string,hasRowSelection:o.default.bool,onRowSelect:o.default.func,displayedColumns:o.default.arrayOf(m.default.columnShape),onCellSelect:o.default.func,rowHeaderIndex:o.default.number,selectedCellColumnId:o.default.string,tabStopColumnIndex:o.default.number};function h(e){var t=e.rowIndex,l=e.height,a=e.hasRowSelection,r=e.id,o=e.isSelected,i=e.cells,d=e.ariaLabel,f=e.displayedColumns,m=e.rowHeaderIndex,p=e.onRowSelect,w=e.onCellSelect,h=e.selectedCellColumnId,_=e.tabStopColumnIndex,g=(0,n.useContext)(u.default),v=a?1:0,y=function(e,l){a?p&&p(e.rowId,t,l):w&&w(e,l)},S=a?n.default.createElement(c.default,{rowId:r,columnId:f[0].id,rowIndex:t,columnIndex:0,isTabStop:0===_,isSelected:o,ariaLabel:d,onCellSelect:y}):null;return n.default.createElement("tr",{className:b([o?"row-selected":"worklist-data-grid-row",g.className]),style:{height:l}},S,i.map((function(e,o){return function(e,t,r,o){var u=f[t].id,i=t===m+v;return n.default.createElement(s.default,{rowId:o,columnId:u,rowIndex:e,columnIndex:t,key:"".concat(o,"_").concat(u),isTabStop:_===t,isSelected:!a&&h===u,isMasked:r.isMasked,isSelectable:r.isSelectable,isRowHeader:i,onCellSelect:y,height:l},r.content)}(t,o+v,e,r)})))}h.propTypes=w,h.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};var _=h;t.default=_},81761:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(67294)),n=a(l(45697));l(67964);var o=l(25387),u=a(l(830)),i={rowId:n.default.string.isRequired,columnId:n.default.string.isRequired,rowIndex:n.default.number,columnIndex:n.default.number,isTabStop:n.default.bool,isSelected:n.default.bool,ariaLabel:n.default.string,onCellSelect:n.default.func,intl:n.default.shape({formatMessage:n.default.func}).isRequired};function d(e){var t=e.rowId,l=e.columnId,a=e.rowIndex,n=e.columnIndex,o=e.isTabStop,i=e.isSelected,d=e.ariaLabel,c=e.onCellSelect,s=e.intl.formatMessage({id:"Terra.worklist-data-grid.row-index"},{row:a}),f=r.default.createElement("input",{type:"checkbox","aria-label":d||s,"aria-checked":i,tabIndex:o?0:-1,checked:i});return r.default.createElement(u.default,{rowId:t,columnId:l,key:"".concat(t,"_").concat(l),rowIndex:a,columnIndex:n,isTabStop:!1,isSelected:!1,onCellSelect:c},f)}d.propTypes=i;var c=(0,o.injectIntl)(d);t.default=c},54962:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!1,isResizable:!1},FIRST_NON_HEADER_ROW:1,writeToClipboard:function(e){"clipboard"in navigator?navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}};t.default=l},72103:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___t0nx3","clinical-lowlight-theme":"WorklistDataGrid-module__clinical-lowlight-theme___BLIqI","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___aaS2w","worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___yhmS9"}},64710:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Cell-module__orion-fusion-theme___NWHS+","clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___BlGTz","worklist-data-grid-cell":"Cell-module__worklist-data-grid-cell___ERjGQ",selected:"Cell-module__selected___L4qWU",masked:"Cell-module__masked___NrbgT","cell-content":"Cell-module__cell-content___q4GT1",selectable:"Cell-module__selectable___RGht0"}},25609:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___+mPW0","clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___ZyF6A","column-header":"ColumnHeaderCell-module__column-header___oVf7Q","header-container":"ColumnHeaderCell-module__header-container___A1dFv","error-icon":"ColumnHeaderCell-module__error-icon___kES53",selectable:"ColumnHeaderCell-module__selectable___CmoIF"}},12638:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___sft4v","clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___3DSst","resize-handle":"ColumnResizeHandle-module__resize-handle___SB2vj"}},51713:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Row-module__orion-fusion-theme___nu9Mx","clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___ggHC1","worklist-data-grid-row":"Row-module__worklist-data-grid-row___a-6e7","row-selected":"Row-module__row-selected___VglJ4"}}}]);