"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72095],{72095:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(10434)),o=a(l(27424)),u=a(l(38416)),i=y(l(67294)),d=a(l(45697)),c=l(25387),s=a(l(47166)),f=a(l(47341)),m=y(l(51051)),p=a(l(15555)),b=a(l(74994)),w=a(l(80998)),h=a(l(72103)),_=a(l(54962)),g=a(l(37356));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(v=function(e){return e?l:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=v(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}function S(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function R(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?S(Object(l),!0).forEach((function(t){(0,u.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):S(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var C=s.default.bind(h.default),I={ariaLabelledBy:d.default.string,ariaLabel:d.default.string,id:d.default.string.isRequired,columns:d.default.arrayOf(w.default.columnShape),rows:d.default.arrayOf(w.default.rowShape),defaultColumnWidth:d.default.number,columnHeaderHeight:d.default.string,columnResizeIncrement:d.default.number,rowHeight:d.default.string,rowHeaderIndex:d.default.number,onColumnResize:d.default.func,onCellSelect:d.default.func,onRowSelect:d.default.func,onRowSelectAll:d.default.func,onColumnSelect:d.default.func,onClearSelectedRows:d.default.func,onDisableSelectableRows:d.default.func,hasSelectableRows:d.default.bool,intl:d.default.shape({formatMessage:d.default.func}).isRequired};function k(e){var t=e.id,l=e.ariaLabelledBy,a=e.ariaLabel,n=e.columns,u=e.rows,d=e.onColumnResize,c=e.defaultColumnWidth,s=e.columnHeaderHeight,w=e.columnResizeIncrement,h=e.rowHeight,v=e.onColumnSelect,y=e.onCellSelect,S=e.onRowSelect,I=e.onRowSelectAll,k=e.onClearSelectedRows,O=e.onDisableSelectableRows,E=e.hasSelectableRows,M=e.intl,x=e.rowHeaderIndex,P=function(){var e={};e.hasSelectableRows=E;var t=n.map((function(e){return function(e){var t=R({},e);return t.width=e.width||c,t.minimumWidth=e.minimumWidth||100,t.maximumWidth=e.maximumWidth||500,t}(e)}));return E&&t.unshift(_.default.ROW_SELECTION_COLUMN),e.columns=t,e},j=(0,i.useState)(P()),W=(0,o.default)(j,2),D=W[0],T=W[1],z=(0,i.useState)(null),H=(0,o.default)(z,2),N=H[0],K=H[1],L=(0,i.useRef)(0),q=(0,i.useRef)(200),A=(0,i.useRef)(0),Y=(0,i.useRef)(),G=(0,i.useState)(""),F=(0,o.default)(G,2),B=F[0],U=F[1],Q=(0,i.useState)({row:0,col:0}),V=(0,o.default)(Q,2),X=V[0],J=V[1],Z=(0,i.useState)(null),$=(0,o.default)(Z,2),ee=$[0],te=$[1],le=(0,i.useContext)(f.default);(0,i.useEffect)((function(){var e={row:X.row,col:X.col+(E?1:-1)};E&&0===X.row&&0===X.col?e={row:1,col:0}:E||0!==X.col||(e={row:X.row,col:0}),J(e),te(null),U(M.formatMessage({id:E?"Terra.worklist-data-grid.row-selection-mode-enabled":"Terra.worklist-data-grid.row-selection-mode-disabled"})),T(P())}),[E]),(0,i.useEffect)((function(){T(P())}),[n]);var ae=function(){u.find((function(e){return e.isSelected}))?(U(M.formatMessage({id:"Terra.worklist-data-grid.all-rows-unselected"})),k&&k()):O&&(U(M.formatMessage({id:"Terra.worklist-data-grid.row-selection-mode-disabled"})),O())},ne=(0,i.useCallback)((function(){U(M.formatMessage({id:"Terra.worklist-data-grid.all-rows-selected"})),I&&I()}),[M,I]),re=(0,i.useCallback)((function(e,t){var l=!u[t-1],a=l.isSelected?"Terra.worklist-data-grid.row-selection-template":"Terra.worklist-data-grid.row-selection-cleared-template",n=l.ariaLabel||t+1;U(M.formatMessage({id:a},{row:n})),S&&S(e)}),[M,S,u]),oe=(0,i.useCallback)((function(e,t){U(M.formatMessage({id:"Terra.worklist-data-grid.cell-selection-template"},{row:t.row+1,column:t.col+1})),Y.current.rows[t.row].cells[t.col].focus(),J(t),te({rowId:e.rowId,columnId:e.columnId}),y&&y(e.rowId,e.columnId)}),[M,y]),ue=(0,i.useCallback)((function(e,t){U(M.formatMessage({id:"Terra.worklist-data-grid.cell-selection-cleared"})),Y.current.rows[0].cells[t.col].focus(),J(t),te(null),v&&v(e)}),[M,v]),ie=(0,i.useCallback)((function(e,t){U(M.formatMessage({id:"Terra.worklist-data-grid.cell-selection-cleared"})),Y.current.rows[t.row].cells[t.col].focus(),J(t),te(null),re(e,t.row)}),[M,re]),de=(0,i.useCallback)((function(e,t,l){A.current=Y.current.offsetWidth,L.current=e.pageX,q.current=l,U(M.formatMessage({id:"Terra.worklist-data-grid.cell-selection-cleared"})),J({row:0,col:t,checkResizable:!0}),te(null),K(t)}),[M]),ce=(0,i.useCallback)((function(e,t){var l=D.columns[e],a=l.minimumWidth,n=l.maximumWidth,r=l.width,o=Math.min(Math.max(r+t,a),n),u=R({},D);u.columns[e].width=o,T(u),Y.current.style.width="".concat(Y.current.offsetWidth+t,"px"),d&&d(D.columns[e].id,D.columns[e].width)}),[D,d]),se=function(){d&&d(D[N].id,D[N].width),J({row:0,col:N,checkResizable:!1}),K(null)};return i.default.createElement("div",{className:C("worklist-data-grid-container")},i.default.createElement("table",(0,r.default)({ref:Y,id:t,role:"grid","aria-labelledby":l,"aria-label":a,className:C("worklist-data-grid",le.className),onKeyDown:function(e){var t={row:X.row,col:X.col},l=t.row,a=t.col,n=!1;switch(e.keyCode){case m.KEY_UP:l-=1;break;case m.KEY_DOWN:l+=1;break;case m.KEY_LEFT:e.metaKey?(a=0,e.ctrlKey&&(l=_.default.FIRST_NON_HEADER_ROW)):(a-=1,n=0===t.row);break;case m.KEY_RIGHT:e.metaKey?(a=D.columns.length-1,e.ctrlKey&&(l=u.length)):a+=1;break;case m.KEY_HOME:a=0,e.ctrlKey&&(l=_.default.FIRST_NON_HEADER_ROW);break;case m.KEY_END:a=D.columns.length-1,e.ctrlKey&&(l=u.length);break;case m.KEY_ESCAPE:E?ae():(Y.current.rows[t.row].cells[t.col].focus(),J(t),te(null)),e.preventDefault();break;case m.KEY_A:return void(E&&(e.ctrlKey||e.metaKey)&&(ne(),e.preventDefault()));default:return}l>u.length||a>=D.columns.length||a<0||l<0||(Y.current.rows[l].cells[a].focus(),J({row:l,col:a,checkResizable:n})),e.preventDefault()}},null!=N&&{onMouseUp:se,onMouseMove:function(e){if(null!=N){var t=e.pageX-L.current,l=D.columns[N],a=l.minimumWidth,n=l.maximumWidth,r=Math.min(Math.max(q.current+t,a),n),o=R({},D);o.columns[N].width=r,T(o),Y.current.style.width="".concat(A+(r-q.current),"px")}},onMouseLeave:se}),i.default.createElement(b.default,{columns:D.columns,headerHeight:s,activeColumnIndex:0===X.row?X.col:void 0,activeColumnResizing:0===X.row&&X.checkResizable,columnResizeIncrement:w,onColumnSelect:ue,onResizeMouseDown:de,onResizeHandleChange:ce}),i.default.createElement("tbody",null,u.map((function(e,t){return function(e,t){return i.default.createElement(g.default,{rowIndex:t,key:e.id,height:h,id:e.id,isSelected:e.isSelected,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:D.hasSelectableRows,displayedColumns:D.columns,rowHeaderIndex:x,onCellSelect:oe,onRowSelect:ie,tabStopColumnIndex:X.row===t?X.col:void 0,selectedCellColumnId:(null==ee?void 0:ee.rowId)===e.id?null==ee?void 0:ee.columnId:void 0})}(e,t+1)})))),i.default.createElement(p.default,{"aria-live":"polite",text:B}))}k.propTypes=I,k.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem"};var O=(0,c.injectIntl)(k);t.default=O},67964:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},80998:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(55511)),r=a(l(33902)),o=l(9504),u={cellShape:r.default,columnShape:o.columnShape,rowShape:n.default,SortIndicators:o.SortIndicators};t.default=u},33902:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(45697)),r=n.default.shape({content:n.default.node,isMasked:n.default.bool,isSelectable:n.default.bool});t.default=r},9504:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var n=a(l(45697)),r={ASCENDING:"ascending",DESCENDING:"descending"};t.SortIndicators=r;var o=n.default.shape({id:n.default.string.isRequired,displayName:n.default.string,hasError:n.default.bool,isResizable:n.default.bool,isSelectable:n.default.bool,minimumWidth:n.default.number,maximumWidth:n.default.number,width:n.default.number,sortIndicator:n.default.oneOf(Object.values(r))});t.columnShape=o},55511:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(45697)),r=a(l(33902)),o=n.default.shape({id:n.default.string.isRequired,cells:n.default.arrayOf(r.default),isSelected:n.default.bool,ariaLabel:n.default.string});t.default=o},830:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(l(67294)),o=a(l(45697)),u=p(l(51051)),i=l(25387),d=a(l(47166)),c=a(l(47341)),s=a(l(54962)),f=a(l(64710));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=m(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var b=d.default.bind(f.default),w={rowId:o.default.string.isRequired,columnId:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,children:o.default.node,isMasked:o.default.bool,isSelectable:o.default.bool,isTabStop:o.default.bool,isSelected:o.default.bool,ariaLabel:o.default.string,isRowHeader:o.default.bool,onCellSelect:o.default.func,onFocus:o.default.func,height:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired};function h(e){var t,l=e.rowId,a=e.columnId,n=e.rowIndex,o=e.columnIndex,i=e.isTabStop,d=e.ariaLabel,f=e.isRowHeader,m=e.isSelected,p=e.isMasked,w=e.isSelectable,h=e.children,_=e.onCellSelect,g=e.height,v=e.onFocus,y=e.intl,S=(0,r.useContext)(c.default),R=(0,r.useCallback)((function(){_({rowId:l,columnId:a},{row:n,col:o})}),[a,o,l,n,_]);t=p?r.default.createElement("span",{className:b("no-data-cell",S.className)},y.formatMessage({id:"Terra.worklistDataGrid.maskedCell"})):h||r.default.createElement("span",{className:b("no-data-cell",S.className)},y.formatMessage({id:"Terra.worklistDataGrid.blank"}));var C=b("worklist-data-grid-cell",{masked:p,selectable:w&&!p,selected:m&&!p,blank:!h},S.className),I=f?"th":"td";return r.default.createElement(I,{"aria-selected":m,"aria-label":d,tabIndex:i?0:-1,className:C,onClick:!p&&w&&_?R:void 0,onFocus:v,onKeyDown:function(e){switch(e.keyCode){case u.KEY_SPACE:!p&&w&&_&&_({rowId:l,columnId:a},{row:n,col:o}),e.preventDefault();break;case u.KEY_C:(e.ctrlKey||e.metaKey)&&s.default.writeToClipboard(e.target.textContent)}}},r.default.createElement("div",{className:b("cell-content",S.className),style:{height:g}},t))}h.propTypes=w,h.defaultProps={isTabStop:!1,isRowHeader:!1,isSelected:!1,isSelectable:!0,isMasked:!1};var _=r.default.memo((0,i.injectIntl)(h));t.default=_},74994:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(67294)),r=a(l(45697)),o=a(l(80998)),u=a(l(14675)),i={columns:r.default.arrayOf(o.default.columnShape).isRequired,headerHeight:r.default.string.isRequired,activeColumnIndex:r.default.number,activeColumnResizing:r.default.bool,columnResizeIncrement:r.default.number,onColumnSelect:r.default.func,onResizeMouseDown:r.default.func,onResizeHandleChange:r.default.func},d=function(e){var t=e.columns,l=e.headerHeight,a=e.activeColumnIndex,r=e.activeColumnResizing,o=e.columnResizeIncrement,i=e.onColumnSelect,d=e.onResizeMouseDown,c=e.onResizeHandleChange;return n.default.createElement("thead",null,n.default.createElement("tr",{className:"column-header-row",height:l},t.map((function(e,t){return function(e,t){return n.default.createElement(u.default,{key:e.id,id:e.id,rowIndex:0,columnIndex:t,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:l,isResizable:e.isResizable,isSelectable:e.isSelectable,isTabStop:a===t,isResizeActive:a===t&&r,columnResizeIncrement:o,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:i,onResizeMouseDown:d,onResizeHandleChange:c})}(e,t)}))))};d.propTypes=i;var c=n.default.memo(d);t.default=c},14675:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(27424)),o=v(l(67294)),u=a(l(45697)),i=a(l(47166)),d=l(25387),c=a(l(47341)),s=a(l(85906)),f=a(l(11699)),m=a(l(94520)),p=v(l(51051)),b=a(l(80998)),w=a(l(25609)),h=a(l(54962)),_=a(l(94955));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(g=function(e){return e?l:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=g(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var y=i.default.bind(w.default),S={id:u.default.string.isRequired,displayName:u.default.string,sortIndicator:u.default.oneOf(Object.values(b.default.SortIndicators)),hasError:u.default.bool,minimumWidth:u.default.number,maximumWidth:u.default.number,isSelectable:u.default.bool,isResizable:u.default.bool,isResizeActive:u.default.bool,columnResizeIncrement:u.default.number,width:u.default.number.isRequired,headerHeight:u.default.string.isRequired,rowIndex:u.default.number,columnIndex:u.default.number,isTabStop:u.default.bool,onColumnSelect:u.default.func,onResizeMouseDown:u.default.func,onResizeHandleChange:u.default.func,intl:u.default.shape({formatMessage:u.default.func})},R=function(e){var t=e.id,l=e.displayName,a=e.sortIndicator,n=e.hasError,u=e.isSelectable,i=e.isResizable,d=e.isResizeActive,w=e.columnResizeIncrement,g=e.width,v=e.minimumWidth,S=e.maximumWidth,R=e.headerHeight,C=e.onColumnSelect,I=e.intl,k=e.rowIndex,O=e.columnIndex,E=e.onResizeMouseDown,M=e.onResizeHandleChange,x=e.isTabStop,P=(0,o.useState)(!1),j=(0,r.default)(P,2),W=j[0],D=j[1],T=(0,o.useRef)();(0,o.useEffect)((function(){x?d&&D(!0):D(!1)}),[O,d,x]);var z,H=(0,o.useCallback)((function(e){E&&E(e,O,T.current.offsetWidth)}),[O,E]),N=n&&o.default.createElement(m.default,{a11yLabel:I.formatMessage({id:"Terra.worklistDataGrid.columnError"}),className:y("error-icon")});a===b.default.SortIndicators.ASCENDING?z=o.default.createElement(s.default,null):a===b.default.SortIndicators.DESCENDING&&(z=o.default.createElement(f.default,null));var K=(0,o.useContext)(c.default);return o.default.createElement("th",{ref:T,key:t,className:y("column-header",K.className,{selectable:u}),tabIndex:x&&!W?0:-1,role:"columnheader",scope:"col","aria-sort":a,onMouseDown:u&&C?function(){C(t,{row:k,col:O})}:void 0,onKeyDown:u||i?function(e){switch(e.keyCode){case p.KEY_SPACE:case p.KEY_RETURN:u&&C&&C(t,{row:k,col:O}),e.stopPropagation(),e.preventDefault();break;case p.KEY_LEFT:i&&W&&(T.current.focus(),D(!1),e.stopPropagation(),e.preventDefault());break;case p.KEY_RIGHT:i&&!W&&(D(!0),e.stopPropagation(),e.preventDefault());break;case p.KEY_C:(e.ctrlKey||e.metaKey)&&h.default.writeToClipboard(e.target.textContent)}}:void 0,style:{width:"".concat(g,"px"),height:R}},o.default.createElement("div",{className:y("header-container"),role:l&&"button"},N,o.default.createElement("span",null,l),z),i&&o.default.createElement(_.default,{columnIndex:O,columnText:l,columnWidth:g,columnResizeIncrement:w,isActive:W,minimumWidth:v,maximumWidth:S,onResizeMouseDown:H,onResizeHandleChange:M}))};R.propTypes=S,R.defaultProps={isTabStop:!1,hasError:!1,isSelectable:!0,isResizable:!0};var C=o.default.memo((0,d.injectIntl)(R));t.default=C},94955:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(27424)),o=p(l(67294)),u=a(l(45697)),i=l(25387),d=p(l(51051)),c=a(l(47166)),s=a(l(47341));l(67964);var f=a(l(12638));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=m(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var b=c.default.bind(f.default),w={columnIndex:u.default.number,columnText:u.default.string.isRequired,columnWidth:u.default.number.isRequired,columnResizeIncrement:u.default.number,isActive:u.default.bool,minimumWidth:u.default.number.isRequired,maximumWidth:u.default.number.isRequired,onResizeMouseDown:u.default.func.isRequired,onResizeHandleChange:u.default.func,intl:u.default.shape({formatMessage:u.default.func}).isRequired},h=function(e){var t=e.columnIndex,l=e.columnText,a=e.columnWidth,n=e.columnResizeIncrement,u=e.isActive,i=e.minimumWidth,c=e.maximumWidth,f=e.onResizeMouseDown,m=e.onResizeHandleChange,p=e.intl,w=(0,o.useContext)(s.default),h=(0,o.useRef)(),_=(0,o.useState)(!0),g=(0,r.default)(_,2),v=g[0],y=g[1];(0,o.useEffect)((function(){u?h.current.focus():h.current.blur()}),[u]);var S=function(){var e=h.current.closest("table");e&&(h.current.style.height="".concat(e.offsetHeight,"px"))};return o.default.createElement("div",{ref:h,draggable:!0,role:"slider",tabIndex:u?0:-1,"aria-hidden":!u,"aria-valuemin":i,"aria-valuenow":a,"aria-valuemax":c,"aria-label":p.formatMessage({id:"Terra.worklist-data-grid.resize-handle-template"},{columnText:l}),onMouseDown:function(e){h.current.focus(),f(e),e.stopPropagation(),e.preventDefault()},onMouseEnter:S,onMouseLeave:function(){document.activeElement!==h.current&&(h.current.style.height="100%")},onKeyDown:function(e){switch(e.keyCode){case d.KEY_SPACE:case d.KEY_RETURN:h.current.focus(),y(!1),e.stopPropagation(),e.preventDefault();break;case d.KEY_ESCAPE:y(!0);break;case d.KEY_RIGHT:m&&!v&&m(t,n);break;case d.KEY_LEFT:m&&!v&&m(t,-n)}v||(e.stopPropagation(),e.preventDefault())},onClick:function(e){e.stopPropagation()},onFocus:S,onBlur:function(){y(!0)},className:b("resize-handle",w.className)})};h.propTypes=w,h.defaultProps={columnResizeIncrement:10};var _=(0,i.injectIntl)(h);t.default=_},37356:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,l&&l.set(e,a);return a}(l(67294)),o=a(l(45697)),u=a(l(47341)),i=a(l(47166));l(67964);var d=a(l(51713)),c=a(l(81761)),s=a(l(830)),f=a(l(33902)),m=a(l(80998));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}var b=i.default.bind(d.default),w={id:o.default.string.isRequired,rowIndex:o.default.number,height:o.default.string,cells:o.default.arrayOf(f.default),isSelected:o.default.bool,ariaLabel:o.default.string,hasRowSelection:o.default.bool,onRowSelect:o.default.func,displayedColumns:o.default.arrayOf(m.default.columnShape),onCellSelect:o.default.func,rowHeaderIndex:o.default.number,selectedCellColumnId:o.default.string,tabStopColumnIndex:o.default.number};function h(e){var t=e.rowIndex,l=e.height,a=e.hasRowSelection,n=e.id,o=e.isSelected,i=e.cells,d=e.ariaLabel,f=e.displayedColumns,m=e.rowHeaderIndex,p=e.onRowSelect,w=e.onCellSelect,h=e.selectedCellColumnId,_=e.tabStopColumnIndex,g=(0,r.useContext)(u.default),v=a?1:0,y=(0,r.useCallback)((function(e,t){a?p&&p(e.rowId,t):w&&w(e,t)}),[a,w,p]),S=a?r.default.createElement(c.default,{rowId:n,columnId:f[0].id,rowIndex:t,columnIndex:0,isTabStop:0===_,isSelected:o,ariaLabel:d,onCellSelect:y}):null;return r.default.createElement("tr",{className:b([o?"row-selected":"worklist-data-grid-row",g.className]),style:{height:l}},S,i.map((function(e,o){return function(e,t,n,o){var u=f[t].id,i=t===m+v;return r.default.createElement(s.default,{rowId:o,columnId:u,rowIndex:e,columnIndex:t,key:"".concat(o,"_").concat(u),isTabStop:_===t,isSelected:!a&&h===u,isMasked:n.isMasked,isSelectable:n.isSelectable,isRowHeader:i,onCellSelect:y,height:l},n.content)}(t,o+v,e,n)})))}h.propTypes=w,h.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};var _=r.default.memo(h);t.default=_},81761:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=d(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,l&&l.set(e,a);return a}(l(67294)),o=a(l(45697));l(67964);var u=l(25387),i=a(l(830));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(d=function(e){return e?l:t})(e)}var c={rowId:o.default.string.isRequired,columnId:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,isTabStop:o.default.bool,isSelected:o.default.bool,ariaLabel:o.default.string,onCellSelect:o.default.func,intl:o.default.shape({formatMessage:o.default.func}).isRequired};function s(e){var t=e.rowId,l=e.columnId,a=e.rowIndex,n=e.columnIndex,o=e.isTabStop,u=e.isSelected,d=e.ariaLabel,c=e.onCellSelect,s=e.intl,f=(0,r.useRef)(),m=(0,r.useCallback)((function(){f.current.focus()}),[]),p=r.default.createElement("input",{ref:f,type:"checkbox","aria-label":d||s.formatMessage({id:"Terra.worklist-data-grid.row-index"},{row:a}),"aria-checked":u,readOnly:!0,tabIndex:o?0:-1,checked:u});return r.default.createElement(i.default,{rowId:t,columnId:l,key:"".concat(t,"_").concat(l),rowIndex:a,columnIndex:n,isTabStop:!1,isSelected:!1,onCellSelect:c,onFocus:m},p)}s.propTypes=c;var f=r.default.memo((0,u.injectIntl)(s));t.default=f},54962:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!1,isResizable:!1},FIRST_NON_HEADER_ROW:1,writeToClipboard:function(e){"clipboard"in navigator?navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}};t.default=l},72103:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___t0nx3","clinical-lowlight-theme":"WorklistDataGrid-module__clinical-lowlight-theme___BLIqI","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___aaS2w","worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___yhmS9"}},64710:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Cell-module__orion-fusion-theme___NWHS+","clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___BlGTz","worklist-data-grid-cell":"Cell-module__worklist-data-grid-cell___ERjGQ",selected:"Cell-module__selected___L4qWU",masked:"Cell-module__masked___NrbgT","cell-content":"Cell-module__cell-content___q4GT1","no-data-cell":"Cell-module__no-data-cell___B67Nl",selectable:"Cell-module__selectable___RGht0"}},25609:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___+mPW0","clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___ZyF6A","column-header":"ColumnHeaderCell-module__column-header___oVf7Q","header-container":"ColumnHeaderCell-module__header-container___A1dFv","error-icon":"ColumnHeaderCell-module__error-icon___kES53",selectable:"ColumnHeaderCell-module__selectable___CmoIF"}},12638:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___sft4v","clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___3DSst","resize-handle":"ColumnResizeHandle-module__resize-handle___SB2vj"}},51713:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Row-module__orion-fusion-theme___nu9Mx","clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___ggHC1","worklist-data-grid-row":"Row-module__worklist-data-grid-row___a-6e7","row-selected":"Row-module__row-selected___VglJ4"}}}]);