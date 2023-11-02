"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[12810],{87253:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(10434)),u=l(n(861)),o=l(n(38416)),i=l(n(27424)),d=O(n(67294)),s=l(n(45697)),c=n(25387),f=l(n(47166)),m=l(n(32018)),p=l(n(47341)),b=l(n(29270)),h=l(n(52075)),_=l(n(27876)),v=n(65602),g=l(n(412)),w=O(n(63127)),C=l(n(88846)),R=l(n(23902)),y=l(n(15821)),I=l(n(28255));function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(l,u,o):l[u]=e[u]}return l.default=e,n&&n.set(e,l),l}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=f.default.bind(I.default),P={id:s.default.string.isRequired,rows:s.default.arrayOf(R.default),ariaLabelledBy:s.default.string,ariaLabel:s.default.string,activeColumnIndex:s.default.number,isActiveColumnResizing:s.default.bool,columnResizeIncrement:s.default.number,pinnedColumns:s.default.arrayOf(v.columnShape),overflowColumns:s.default.arrayOf(v.columnShape),defaultColumnWidth:s.default.number,columnHeaderHeight:s.default.string,rowHeight:s.default.string,rowHeaderIndex:y.default,onColumnResize:s.default.func,onCellSelect:s.default.func,onRowSelect:s.default.func,onColumnSelect:s.default.func,onRowSelectionHeaderSelect:s.default.func,hasSelectableRows:s.default.bool,hasColumnHeaders:s.default.bool,isStriped:s.default.bool,intl:s.default.shape({formatMessage:s.default.func}).isRequired},H=(0,c.injectIntl)((function(e){var t=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,a=e.activeColumnIndex,o=e.isActiveColumnResizing,s=e.columnResizeIncrement,c=e.rows,f=e.pinnedColumns,v=e.overflowColumns,R=e.onColumnResize,y=e.defaultColumnWidth,I=e.columnHeaderHeight,E=e.rowHeight,O=e.onColumnSelect,x=e.onCellSelect,P=e.onRowSelect,H=e.onRowSelectionHeaderSelect,D=e.hasSelectableRows,j=e.hasColumnHeaders,k=e.isStriped,N=e.rowHeaderIndex,z=e.intl;0===f.length&&console.warn(g.default.PINNED_COLUMNS_UNDEFINED);var W=(0,d.useState)(0),T=(0,i.default)(W,2),A=T[0],L=T[1],q=(0,d.useState)(null),G=(0,i.default)(q,2),K=G[0],U=G[1],Y=(0,d.useRef)(0),X=(0,d.useRef)(200),F=(0,d.useRef)(0),B=(0,d.useState)([0]),J=(0,i.default)(B,2),Z=J[0],V=J[1],Q=(0,d.useRef)(),$=(0,d.useRef)(),ee=(0,d.useState)(!1),te=(0,i.default)(ee,2),ne=te[0],le=te[1],ae=(0,d.useContext)(p.default),re=(0,d.useContext)(w.default),ue=re.role===w.GridConstants.GRID,oe=(0,d.useRef)(!1),ie=(0,d.useRef)([]),de=(0,d.useState)(null),se=(0,i.default)(de,2),ce=se[0],fe=se[1],me=(0,d.useState)(null),pe=(0,i.default)(me,2),be=pe[0],he=pe[1],_e=(0,d.useState)(null),ve=(0,i.default)(_e,2),ge=ve[0],we=ve[1],Ce=(0,d.useMemo)((function(){return{pinnedColumnOffsets:Z,setColumnHeaderAriaLiveMessage:we}}),[Z]),Re=function(e){return S(S({},e),{},{width:e.width||y,minimumWidth:e.minimumWidth||60,maximumWidth:e.maximumWidth||300})},ye={id:"table-rowSelectionColumn",width:40,isSelectable:!!H,isResizable:!1},Ie=(D?[ye]:[]).concat(f).concat(v),Ee=(0,d.useState)(Ie.map((function(e){return Re(e)}))),Oe=(0,i.default)(Ee,2),xe=Oe[0],Se=Oe[1],Me=(0,d.useCallback)((function(e){ue||!P?x&&x(e):P(e.rowId)}),[ue,x,P]);(0,d.useImperativeHandle)(e.tableRefs,(function(){return{tableRef:$.current,containerRef:Q.current}}),[$,Q]),(0,d.useEffect)((function(){oe.current?(he(z.formatMessage({id:D?"Terra.table.row-selection-mode-enabled":"Terra.table.row-selection-mode-disabled"})),Se(Ie.map((function(e){return Re(e)})))):oe.current=!0}),[D]),(0,d.useEffect)((function(){var e=(0,u.default)(ie.current);if(ie.current=c.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===ie.current.length)fe(z.formatMessage({id:"Terra.table.all-rows-unselected"}));else if(ie.current.length===c.length)fe(z.formatMessage({id:"Terra.table.all-rows-selected"}));else{var t=ie.current.filter((function(t){return!e.includes(t)})),n=e.filter((function(e){return!ie.current.includes(e)})),l="";if(1===t.length){var a=c.findIndex((function(e){return e.id===t[0]})),r=c[a].ariaLabel||a+2;l=z.formatMessage({id:"Terra.table.row-selection-template"},{row:r})}else t.length>1&&(l=z.formatMessage({id:"Terra.table.multiple-rows-selected"},{rowCount:t.length}));if(1===n.length){var o=c.findIndex((function(e){return e.id===n[0]})),i=c[o].ariaLabel||o+2;l+=z.formatMessage({id:"Terra.table.row-selection-cleared-template"},{row:i})}else n.length>1&&(l+=z.formatMessage({id:"Terra.table.multiple-rows-unselected"},{rowCount:n.length}));l&&fe(l)}}),[z,c]),(0,d.useEffect)((function(){Se(Ie.map((function(e){return Re(e)})))}),[f,v]),(0,d.useEffect)((function(){var e,t=[],n=0;if(D&&0===f.length)return e=0,t.push(n),void V(t);f.length>0&&(t.push(n),e=D?f.length:f.length-1,xe.slice(0,e).forEach((function(e){n+=e.width,t.push(n)}))),V(t)}),[xe]),(0,d.useEffect)((function(){var e=new m.default((function(){L($.current.offsetHeight-1);var e=Q.current;le(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)}));return e.observe($.current),function(){e.disconnect()}}),[$]);var Pe=(0,d.useCallback)((function(e){e===ye.id?H&&H():O&&O(e)}),[O,H,ye.id]),He=(0,d.useCallback)((function(e,t,n){F.current=$.current.offsetWidth,Y.current=e.pageX,X.current=n,U(t)}),[]),De=function(){R&&R(xe[K].id,xe[K].width),U(null)},je=(0,d.useCallback)((function(e,t){var n=xe[e],l=n.minimumWidth,a=n.maximumWidth,r=n.width,o=Math.min(Math.max(r+t,l),a),i=(0,u.default)(xe);i[e].width=o,Se(i),$.current.style.width="".concat($.current.offsetWidth+t,"px"),R&&R(xe[e].id,xe[e].width)}),[xe,R]);return d.default.createElement("div",{ref:Q,className:M("table-container"),tabIndex:!ue&&ne?0:void 0},d.default.createElement("table",(0,r.default)({ref:$,id:t,role:re.role,"aria-labelledby":n,"aria-label":l,className:M("table",ae.className,{headerless:!j})},null!=K&&{onMouseUp:De,onMouseMove:function(e){if(null!=K){var t=e.pageX-Y.current,n=xe[K],l=n.minimumWidth,a=n.maximumWidth,r=Math.min(Math.max(X.current+t,l),a),o=(0,u.default)(xe);o[K].width=r,Se(o),$.current.style.width="".concat(F+(r-X.current),"px")}},onMouseLeave:De}),d.default.createElement(_.default.Provider,{value:Ce},d.default.createElement("colgroup",null,xe.map((function(e){return d.default.createElement("col",{key:e.id,style:{width:"".concat(e.width,"px")}})}))),d.default.createElement(h.default,{isActiveColumnResizing:o,activeColumnIndex:a,columns:xe,hasColumnHeaders:j,headerHeight:I,columnResizeIncrement:s,tableHeight:A,onResizeMouseDown:He,onColumnSelect:Pe,onResizeHandleChange:je}),d.default.createElement("tbody",null,c.map((function(e,t){return d.default.createElement(C.default,{rowIndex:t+1,key:e.id,height:E,id:e.id,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:D,displayedColumns:Ie,rowHeaderIndex:N,onCellSelect:ue||D?Me:void 0,isSelected:e.isSelected,isTableStriped:k})}))))),d.default.createElement(b.default,{"aria-live":"polite",text:be}),d.default.createElement(b.default,{"aria-live":"polite",text:ce}),d.default.createElement(b.default,{"aria-live":"polite","aria-atomic":"true",text:ge}))}));H.propTypes=P,H.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[],hasColumnHeaders:!0};t.default=d.default.memo((0,d.forwardRef)((function(e,t){return d.default.createElement(H,(0,r.default)({},e,{tableRefs:t}))})))},12810:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"GridConstants",{enumerable:!0,get:function(){return u.GridConstants}}),Object.defineProperty(t,"GridContext",{enumerable:!0,get:function(){return u.default}}),t.default=void 0;var r=l(n(87253)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,n&&n.set(e,l),l}(n(63127));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}t.default=r.default},98526:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(45697)),r=a.default.shape({content:a.default.node,isMasked:a.default.bool,maskedLabel:a.default.string,isSelectable:a.default.bool,isSelected:a.default.bool});t.default=r},65602:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var a=l(n(45697)),r=t.SortIndicators={ASCENDING:"ascending",DESCENDING:"descending"};t.columnShape=a.default.shape({id:a.default.string.isRequired,displayName:a.default.string,hasError:a.default.bool,isResizable:a.default.bool,isSelectable:a.default.bool,minimumWidth:a.default.number,maximumWidth:a.default.number,width:a.default.number,sortIndicator:a.default.oneOf(Object.values(r))})},23902:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(45697)),r=l(n(98526)),u=a.default.shape({id:a.default.string.isRequired,cells:a.default.arrayOf(r.default),isSelected:a.default.bool,ariaLabel:a.default.string});t.default=u},15821:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(412));t.default=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(a.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(a.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(a.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)}},4845:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(10434)),u=l(n(861)),o=l(n(27424)),i=w(n(67294)),d=w(n(51051)),s=l(n(47166)),c=l(n(54483)),f=n(25387),m=l(n(45697)),p=l(n(47341)),b=l(n(29270)),h=l(n(27876)),_=w(n(63127)),v=l(n(2981));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(l,u,o):l[u]=e[u]}return l.default=e,n&&n.set(e,l),l}var C=s.default.bind(v.default),R={intl:m.default.shape({formatMessage:m.default.func}).isRequired,rowId:m.default.string.isRequired,columnId:m.default.string.isRequired,rowIndex:m.default.number,columnIndex:m.default.number,children:m.default.node,isMasked:m.default.bool,maskedLabel:m.default.string,isSelectable:m.default.bool,isSelected:m.default.bool,ariaLabel:m.default.string,isRowHeader:m.default.bool,isHighlighted:m.default.bool,onCellSelect:m.default.func,height:m.default.string};function y(e){var t=e.rowId,n=e.columnId,l=e.rowIndex,a=e.columnIndex,s=e.ariaLabel,f=e.isMasked,m=e.maskedLabel,v=e.isRowHeader,g=e.isSelectable,w=e.isSelected,R=e.isHighlighted,y=e.children,I=e.onCellSelect,E=e.height,O=e.intl,x=(0,i.useRef)(),S=(0,i.useContext)(p.default),M=(0,i.useContext)(_.default),P=(0,i.useContext)(h.default),H=(0,i.useState)(!1),D=(0,o.default)(H,2),j=D[0],k=D[1],N=(0,i.useState)(!1),z=(0,o.default)(N,2),W=z[0],T=z[1],A=M.role===_.GridConstants.GRID,L=function(){return(0,u.default)(x.current.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")})).length>0};(0,i.useEffect)((function(){A&&k(L())}),[A]);var q,G=function(){T(!1),M.setCellAriaLiveMessage&&M.setCellAriaLiveMessage(O.formatMessage({id:"Terra.table.resume-navigation"}))};q=f?i.default.createElement("span",{className:C("no-data-cell",S.className)},m||O.formatMessage({id:"Terra.table.maskedCell"})):y||i.default.createElement("span",{className:C("no-data-cell",S.className)},O.formatMessage({id:"Terra.table.blank"}));var K=C("cell",{masked:f,pinned:a<P.pinnedColumnOffsets.length,selectable:g&&!f,selected:w&&!f,highlighted:R,blank:!y},S.className),U=a<P.pinnedColumnOffsets.length?P.pinnedColumnOffsets[a]:null,Y=v?"th":"td",X=i.default.createElement("div",{className:C("cell-content",S.className),style:{height:E}},q);return A&&(X=i.default.createElement(c.default,{active:W,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,escapeDeactivates:!1,onDeactivate:G}},X)),i.default.createElement(Y,(0,r.default)({ref:A?x:void 0,"aria-selected":w||void 0,"aria-label":s,tabIndex:A?-1:void 0,className:K},v&&{scope:"row",role:"rowheader"},{onMouseDown:I?function(e){W||I({rowId:t,columnId:n,rowIndex:l,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!f&&g})}:void 0,onKeyDown:function(e){var r=e.keyCode,u=e.target;if(W){if(r===d.KEY_ESCAPE)G();e.stopPropagation()}else switch(r){case d.KEY_RETURN:A&&L()&&(T(!0),M.setCellAriaLiveMessage&&M.setCellAriaLiveMessage(O.formatMessage({id:"Terra.table.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault());break;case d.KEY_SPACE:I&&I({rowId:t,columnId:n,rowIndex:l,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!f&&g}),function(e){var t=e.tagName;if("input"===t.toLowerCase()){var n=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(n)>=0}return["textarea","select"].indexOf(t.toLowerCase())>=0||!(!e.hasAttribute("contentEditable")||!1===e.getAttribute("contentEditable"))}(u)||e.preventDefault()}},style:{left:U}}),X,j&&i.default.createElement(b.default,{text:O.formatMessage({id:"Terra.table.cell-interactable"})}))}y.propTypes=R,y.defaultProps={isRowHeader:!1,isSelectable:!1,isMasked:!1};t.default=i.default.memo((0,f.injectIntl)(y))},52075:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(45697)),u=l(n(47166)),o=l(n(63043)),i=n(65602),d=l(n(59246)),s=u.default.bind(d.default),c={columns:r.default.arrayOf(i.columnShape).isRequired,headerHeight:r.default.string.isRequired,tableHeight:r.default.number,activeColumnIndex:r.default.number,isActiveColumnResizing:r.default.bool,columnResizeIncrement:r.default.number,onColumnSelect:r.default.func,onResizeMouseDown:r.default.func,onResizeHandleChange:r.default.func,hasColumnHeaders:r.default.bool},f=function(e){var t=e.activeColumnIndex,n=e.isActiveColumnResizing,l=e.columnResizeIncrement,r=e.columns,u=e.headerHeight,i=e.tableHeight,d=e.onColumnSelect,c=e.onResizeMouseDown,f=e.onResizeHandleChange,m=e.hasColumnHeaders;return a.default.createElement("thead",null,a.default.createElement("tr",{className:s("column-header-row",{hidden:!m}),height:m?u:void 0},r.map((function(e,r){return a.default.createElement(o.default,{key:e.id,id:e.id,rowIndex:0,columnIndex:r,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:u,isResizable:m&&e.isResizable,isSelectable:m&&e.isSelectable,tableHeight:i,isActive:t===r,isResizeActive:t===r&&n,columnResizeIncrement:l,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:d,onResizeMouseDown:c,onResizeHandleChange:f})}))))};f.propTypes=c,f.defaultProps={hasColumnHeaders:!0};t.default=a.default.memo(f)},63043:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(10434)),u=l(n(27424)),o=w(n(67294)),i=w(n(51051)),d=n(25387),s=l(n(47166)),c=l(n(45697)),f=n(34614),m=l(n(47341)),p=l(n(27876)),b=l(n(62225)),h=w(n(63127)),_=n(65602),v=l(n(23194));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(l,u,o):l[u]=e[u]}return l.default=e,n&&n.set(e,l),l}var C=s.default.bind(v.default),R={id:c.default.string.isRequired,headerHeight:c.default.string.isRequired,width:c.default.number.isRequired,displayName:c.default.string,sortIndicator:c.default.oneOf(Object.values(_.SortIndicators)),hasError:c.default.bool,minimumWidth:c.default.number,maximumWidth:c.default.number,isActive:c.default.bool,isSelectable:c.default.bool,isResizable:c.default.bool,tableHeight:c.default.number,isResizeActive:c.default.bool,columnResizeIncrement:c.default.number,rowIndex:c.default.number,columnIndex:c.default.number,onColumnSelect:c.default.func,onResizeMouseDown:c.default.func,onResizeMouseUp:c.default.func,onResizeHandleChange:c.default.func,intl:c.default.shape({formatMessage:c.default.func})},y=function(e){var t=e.id,n=e.displayName,l=e.sortIndicator,a=e.hasError,d=e.isActive,s=e.isResizable,c=e.isSelectable,v=e.tableHeight,g=e.isResizeActive,w=e.columnResizeIncrement,R=e.width,y=e.minimumWidth,I=e.maximumWidth,E=e.headerHeight,O=e.intl,x=e.columnIndex,S=e.onColumnSelect,M=e.onResizeMouseDown,P=e.onResizeHandleChange,H=e.rowIndex,D=(0,o.useContext)(p.default),j=(0,o.useContext)(h.default),k=(0,o.useContext)(m.default),N=(0,o.useRef)(),z=(0,o.useRef)(),W=(0,o.useState)(!1),T=(0,u.default)(W,2),A=T[0],L=T[1],q=j.role===h.GridConstants.GRID,G=(0,o.useCallback)((function(){return z.current?z.current:N.current}),[]);(0,o.useEffect)((function(){d?s&&g?L(!0):(G().focus(),L(!1)):L(!1)}),[G,d,s,g]);var K,U=(0,o.useCallback)((function(e){e.stopPropagation(),M&&M(e,x,N.current.offsetWidth)}),[x,M]),Y=(0,o.useCallback)((function(){G().focus(),L(!1)}),[G]),X=a&&o.default.createElement(f.IconError,{a11yLabel:O.formatMessage({id:"Terra.table.columnError"}),className:C("error-icon")});l===_.SortIndicators.ASCENDING?K=o.default.createElement(f.IconUp,null):l===_.SortIndicators.DESCENDING&&(K=o.default.createElement(f.IconDown,null));var F=x<D.pinnedColumnOffsets.length?D.pinnedColumnOffsets[x]:null,B=R-1,J=x===D.pinnedColumnOffsets.length-1?o.default.createElement("div",{className:C("pinned-columns-divider"),style:{height:v,left:B}}):null;return o.default.createElement("th",{ref:N,key:t,className:C("column-header",k.className,{selectable:c,pinned:x<D.pinnedColumnOffsets.length}),tabIndex:q?-1:void 0,role:"columnheader",scope:"col","aria-sort":l,onMouseDown:c&&S?function(e){S(t,{row:H,col:x},c),e.stopPropagation()}:void 0,onKeyDown:c||s?function(e){switch(e.keyCode){case i.KEY_SPACE:case i.KEY_RETURN:c&&S&&S(t,{row:H,col:x},c),e.stopPropagation(),e.preventDefault();break;case i.KEY_LEFT:s&&A&&(G().focus(),L(!1),e.stopPropagation(),e.preventDefault());break;case i.KEY_RIGHT:s&&!A&&(L(!0),e.stopPropagation(),e.preventDefault())}}:void 0,style:{height:E,left:F}},o.default.createElement("div",(0,r.default)({className:C("header-container")},c&&n&&{ref:z,tabIndex:"-1",role:"button"},{tabIndex:!q&&c?0:void 0}),X,o.default.createElement("span",null,n),K),s&&o.default.createElement(b.default,{columnIndex:x,columnText:n,columnWidth:R,height:v,columnResizeIncrement:w,isActive:A,setIsActive:L,minimumWidth:y,maximumWidth:I,onResizeMouseDown:U,onResizeMouseUp:Y,onResizeHandleChange:P}),J)};y.propTypes=R,y.defaultProps={hasError:!1,isSelectable:!1,isActive:!1,isResizable:!1,isResizeActive:!1};t.default=o.default.memo((0,d.injectIntl)(y))},62225:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(27424)),u=h(n(67294)),o=l(n(47166)),i=n(25387),d=h(n(51051)),s=l(n(45697)),c=l(n(47341)),f=l(n(27876)),m=h(n(63127)),p=l(n(68827));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(l,u,o):l[u]=e[u]}return l.default=e,n&&n.set(e,l),l}var _=o.default.bind(p.default),v={columnIndex:s.default.number,columnText:s.default.string.isRequired,columnWidth:s.default.number.isRequired,height:s.default.number.isRequired,columnResizeIncrement:s.default.number,isActive:s.default.bool,setIsActive:s.default.func,minimumWidth:s.default.number.isRequired,maximumWidth:s.default.number.isRequired,onResizeMouseDown:s.default.func.isRequired,onResizeMouseUp:s.default.func.isRequired,onResizeHandleChange:s.default.func,intl:s.default.shape({formatMessage:s.default.func}).isRequired},g=function(e){var t=e.columnIndex,n=e.columnResizeIncrement,l=e.columnText,a=e.columnWidth,o=e.height,i=e.intl,s=e.isActive,p=e.maximumWidth,b=e.minimumWidth,h=e.onResizeHandleChange,v=e.onResizeMouseDown,g=e.onResizeMouseUp,w=e.setIsActive,C=(0,u.useContext)(c.default),R=(0,u.useContext)(m.default),y=(0,u.useContext)(f.default),I=R.role===m.GridConstants.GRID,E=(0,u.useRef)(),O=(0,u.useState)(!1),x=(0,r.default)(O,2),S=x[0],M=x[1],P=(0,u.useState)(!1),H=(0,r.default)(P,2),D=H[0],j=H[1],k=(0,u.useState)(!0),N=(0,r.default)(k,2),z=N[0],W=N[1];(0,u.useEffect)((function(){s&&E.current.focus()}),[s]);var T=function(){E.current.style.height="".concat(o,"px"),M(!0)};return u.default.createElement("div",{ref:E,draggable:!0,role:z?null:"slider",tabIndex:I?-1:0,"aria-hidden":!s,"aria-valuemin":s?b:null,"aria-valuenow":s?a:null,"aria-valuemax":s?p:null,"aria-label":S?i.formatMessage({id:"Terra.table.resize-handle-template"},{columnText:l}):null,"aria-valuetext":D?i.formatMessage({id:"Terra.table.resize-handle-value-text"},{columnWidth:a}):null,style:{height:"".concat(o,"px")},onMouseDown:function(e){E.current.focus(),v(e),e.stopPropagation(),e.preventDefault()},onMouseUp:function(){g()},onMouseEnter:T,onMouseLeave:function(){document.activeElement!==E.current&&(E.current.style.height="100%")},onKeyDown:function(e){switch(e.keyCode){case d.KEY_SPACE:case d.KEY_RETURN:W(!1),E.current.focus(),M(!1),j(!0),y.setColumnHeaderAriaLiveMessage(i.formatMessage({id:"Terra.table.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault();break;case d.KEY_ESCAPE:j(!1),y.setColumnHeaderAriaLiveMessage(i.formatMessage({id:"Terra.table.resume-navigation"})),W(!0);break;case d.KEY_RIGHT:h&&!z&&h(t,n);break;case d.KEY_LEFT:h&&!z&&h(t,-n)}z||(e.stopPropagation(),e.preventDefault())},onClick:function(e){e.stopPropagation()},onFocus:T,onBlur:function(){W(!0),M(!1),w(!1)},className:_("resize-handle",C.className,{"resize-handle-selected":!z})})};g.propTypes=v,g.defaultProps={columnResizeIncrement:10};t.default=(0,i.injectIntl)(g)},88846:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(l,u,o):l[u]=e[u]}return l.default=e,n&&n.set(e,l),l}(n(67294)),o=l(n(47166)),i=l(n(45697)),d=l(n(47341)),s=l(n(4845)),c=l(n(98526)),f=n(65602),m=l(n(73077)),p=l(n(98194));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}var h=o.default.bind(p.default),_={id:i.default.string.isRequired,rowIndex:i.default.number,height:i.default.string,cells:i.default.arrayOf(c.default),isSelected:i.default.bool,isTableStriped:i.default.bool,ariaLabel:i.default.string,hasRowSelection:i.default.bool,displayedColumns:i.default.arrayOf(f.columnShape),onCellSelect:i.default.func,rowHeaderIndex:i.default.number};function v(e){var t=e.rowIndex,n=e.height,l=e.hasRowSelection,a=e.id,o=e.isSelected,i=e.isTableStriped,c=e.cells,f=e.ariaLabel,p=e.displayedColumns,b=e.rowHeaderIndex,_=e.onCellSelect,v=(0,u.useContext)(d.default),g=(0,u.useState)(!1),w=(0,r.default)(g,2),C=w[0],R=w[1],y=l?1:0;return u.default.createElement("tr",{className:h("row",{selected:o,selectable:l,"striped-table-row":i},v.className),style:{height:n},onMouseEnter:l?function(){R(!0)}:void 0,onMouseLeave:l?function(){R(!1)}:void 0},l&&u.default.createElement(m.default,{rowId:a,columnId:p[0].id,rowIndex:t,columnIndex:0,isSelected:o,ariaLabel:f,onCellSelect:_}),c.map((function(e,r){return u.default.createElement(s.default,{rowId:a,columnId:p[r].id,rowIndex:t,columnIndex:r+y,key:"".concat(a,"_").concat(p[r].id),isSelected:!l&&e.isSelected,isMasked:e.isMasked,maskedLabel:e.maskedLabel,isSelectable:e.isSelectable,isRowHeader:r===b,isHighlighted:C||o,onCellSelect:_,height:n},e.content)})))}v.propTypes=_,v.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};t.default=u.default.memo(v)},73077:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),u=l(n(47166)),o=n(25387),i=l(n(45697)),d=l(n(47341)),s=p(n(63127)),c=l(n(4845)),f=l(n(10852));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(l,u,o):l[u]=e[u]}return l.default=e,n&&n.set(e,l),l}var b=u.default.bind(f.default),h={columnId:i.default.string.isRequired,intl:i.default.shape({formatMessage:i.default.func}).isRequired,rowId:i.default.string.isRequired,rowIndex:i.default.number,columnIndex:i.default.number,isSelected:i.default.bool,ariaLabel:i.default.string,onCellSelect:i.default.func};function _(e){var t=e.rowId,n=e.columnId,l=e.rowIndex,a=e.columnIndex,u=e.isSelected,o=e.ariaLabel,i=e.onCellSelect,f=e.intl,m=(0,r.useContext)(d.default),p=(0,r.useContext)(s.default).role===s.GridConstants.GRID,h=f.formatMessage({id:"Terra.table.row-index"},{row:l+1}),_=r.default.createElement("input",{type:"checkbox","aria-label":o||h,readOnly:!0,tabIndex:p?-1:0,checked:u,className:b("input",m.className)});return r.default.createElement(c.default,{rowId:t,columnId:n,key:"".concat(t,"_").concat(n),rowIndex:l,columnIndex:a,isSelected:!1,onCellSelect:i},_)}_.propTypes=h;t.default=r.default.memo((0,o.injectIntl)(_))},27876:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)).default.createContext({pinnedColumnOffsets:[]});t.default=a},63127:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GridConstants=void 0;var a=l(n(67294)).default.createContext({role:"table",setCellAriaLiveMessage:void 0});t.GridConstants={GRID:"grid"},t.default=a},412:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"To be properly accessible, the row header column should be a pinned column. please set pinned columns"}},28255:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___G2b7R","orion-fusion-theme":"Table-module__orion-fusion-theme___iu+p1","table-container":"Table-module__table-container___g4Byi",table:"Table-module__table___wcFdg",headerless:"Table-module__headerless___eod6K"}},2981:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___JlIUL","orion-fusion-theme":"Cell-module__orion-fusion-theme___HW1Ki",cell:"Cell-module__cell___XID6c",selected:"Cell-module__selected___3WHxU",masked:"Cell-module__masked___yW7Cf",highlighted:"Cell-module__highlighted___4hj9T","cell-content":"Cell-module__cell-content___FhljD","no-data-cell":"Cell-module__no-data-cell___6er9D",pinned:"Cell-module__pinned___y2cJe",selectable:"Cell-module__selectable___BAIg5"}},59246:function(e,t,n){n.r(t),t.default={hidden:"ColumnHeader-module__hidden___I3b7-"}},23194:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___E4AJx","orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___LLv1A","column-header":"ColumnHeaderCell-module__column-header___oWlRh","header-container":"ColumnHeaderCell-module__header-container___Bvm2V","error-icon":"ColumnHeaderCell-module__error-icon___8bLJu",selectable:"ColumnHeaderCell-module__selectable___JFI4E",pinned:"ColumnHeaderCell-module__pinned___Qusyo","pinned-columns-divider":"ColumnHeaderCell-module__pinned-columns-divider___Kl7gb"}},68827:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___uvYEY","clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___MWieH","resize-handle":"ColumnResizeHandle-module__resize-handle___rckkL","resize-handle-selected":"ColumnResizeHandle-module__resize-handle-selected___-zzct"}},98194:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___LqsJk","orion-fusion-theme":"Row-module__orion-fusion-theme___uCwnV",row:"Row-module__row___kR-J-","striped-table-row":"Row-module__striped-table-row___0o1z0",selected:"Row-module__selected___ojIZP",selectable:"Row-module__selectable___r9jUT"}},10852:function(e,t,n){n.r(t),t.default={input:"RowSelectionCell-module__input___++BBM"}}}]);