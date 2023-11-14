"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[12810],{87253:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(10434)),o=n(l(861)),i=n(l(38416)),u=n(l(27424)),d=E(l(67294)),s=n(l(45697)),c=l(25387),f=l(55877),m=n(l(47166)),b=n(l(32018)),p=n(l(47341)),h=n(l(29270)),_=n(l(89152)),g=n(l(52075)),v=n(l(27876)),w=l(65602),C=n(l(412)),I=E(l(63127)),R=n(l(23902)),y=n(l(15821)),x=n(l(28255)),O=n(l(20318));function S(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(S=function(e){return e?l:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=S(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}function M(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function P(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?M(Object(l),!0).forEach((function(t){(0,i.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):M(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var H=m.default.bind(x.default),j={id:s.default.string.isRequired,rows:s.default.arrayOf(R.default),sections:s.default.arrayOf(O.default),ariaLabelledBy:s.default.string,ariaLabel:s.default.string,activeColumnIndex:s.default.number,isActiveColumnResizing:s.default.bool,columnResizeIncrement:s.default.number,pinnedColumns:s.default.arrayOf(w.columnShape),overflowColumns:s.default.arrayOf(w.columnShape),defaultColumnWidth:s.default.number,columnHeaderHeight:s.default.string,rowHeight:s.default.string,rowHeaderIndex:y.default,onColumnResize:s.default.func,onCellSelect:s.default.func,onRowSelect:s.default.func,onColumnSelect:s.default.func,onSectionSelect:s.default.func,onRowSelectionHeaderSelect:s.default.func,hasSelectableRows:s.default.bool,hasVisibleColumnHeaders:s.default.bool,isStriped:s.default.bool,intl:s.default.shape({formatMessage:s.default.func}).isRequired};function D(e){var t=e.id,l=e.ariaLabelledBy,n=e.ariaLabel,a=e.activeColumnIndex,i=e.isActiveColumnResizing,s=e.columnResizeIncrement,c=e.rows,m=e.sections,w=e.pinnedColumns,R=e.overflowColumns,y=e.onColumnResize,x=e.defaultColumnWidth,O=e.columnHeaderHeight,S=e.rowHeight,E=e.onColumnSelect,M=e.onCellSelect,j=e.onSectionSelect,D=e.onRowSelect,k=e.onRowSelectionHeaderSelect,N=e.hasSelectableRows,W=e.hasVisibleColumnHeaders,z=e.isStriped,T=e.rowHeaderIndex,A=e.intl;0===w.length&&console.warn(C.default.PINNED_COLUMNS_UNDEFINED);var L=(0,d.useState)(0),q=(0,u.default)(L,2),G=q[0],K=q[1],U=(0,d.useState)(null),Y=(0,u.default)(U,2),X=Y[0],F=Y[1],V=(0,d.useRef)(0),B=(0,d.useRef)(200),J=(0,d.useRef)(0),Q=(0,d.useState)([0]),Z=(0,u.default)(Q,2),$=Z[0],ee=Z[1],te=(0,d.useRef)(),le=(0,d.useRef)(),ne=(0,d.useState)(!1),ae=(0,u.default)(ne,2),re=ae[0],oe=ae[1],ie=(0,d.useContext)(p.default),ue=(0,d.useContext)(I.default),de=ue.role===I.GridConstants.GRID,se=(0,d.useRef)(!1),ce=(0,d.useRef)([]),fe=(0,d.useState)(null),me=(0,u.default)(fe,2),be=me[0],pe=me[1],he=(0,d.useState)(null),_e=(0,u.default)(he,2),ge=_e[0],ve=_e[1],we=(0,d.useState)(null),Ce=(0,u.default)(we,2),Ie=Ce[0],Re=Ce[1],ye=(0,d.useMemo)((function(){return{pinnedColumnOffsets:$,setColumnHeaderAriaLiveMessage:Re}}),[$]),xe=function(e){return P(P({},e),{},{width:e.width||x,minimumWidth:e.minimumWidth||60,maximumWidth:e.maximumWidth||300})},Oe={id:"table-rowSelectionColumn",width:40,isSelectable:!!k,isResizable:!1},Se=(N?[Oe]:[]).concat(w).concat(R),Ee=(0,d.useState)(Se.map((function(e){return xe(e)}))),Me=(0,u.default)(Ee,2),Pe=Me[0],He=Me[1],je=(0,d.useRef)((0,f.v4)()),De=(0,d.useMemo)((function(){return m?(0,o.default)(m):[{id:je.current,rows:c}]}),[c,m]),ke=De.reduce((function(e,t){return t.id!==je.current?(t.sectionRowIndex=e+1,e+t.rows.length+1):(t.sectionRowIndex=0,e+t.rows.length)}),1),Ne=(0,d.useCallback)((function(e){de||!D?M&&M(e):D(e.rowId)}),[de,M,D]);(0,d.useEffect)((function(){se.current?(ve(A.formatMessage({id:N?"Terra.table.row-selection-mode-enabled":"Terra.table.row-selection-mode-disabled"})),He(Se.map((function(e){return xe(e)})))):se.current=!0}),[N]),(0,d.useEffect)((function(){var e=(0,o.default)(ce.current),t=De.flatMap((function(e){return e.rows.map((function(e){return e}))}));if(ce.current=t.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===ce.current.length)pe(A.formatMessage({id:"Terra.table.all-rows-unselected"}));else if(ce.current.length===t.length)pe(A.formatMessage({id:"Terra.table.all-rows-selected"}));else{var l=ce.current.filter((function(t){return!e.includes(t)})),n=e.filter((function(e){return!ce.current.includes(e)})),a="";if(1===l.length){var r=le.current.querySelector("tr[data-row-id='".concat(l[0],"']")).getAttribute("aria-rowindex");a=A.formatMessage({id:"Terra.table.row-selection-template"},{row:r})}else l.length>1&&(a=A.formatMessage({id:"Terra.table.multiple-rows-selected"},{rowCount:l.length}));if(1===n.length){var i=le.current.querySelector("tr[data-row-id='".concat(n[0],"']")).getAttribute("data-row-id");a+=A.formatMessage({id:"Terra.table.row-selection-cleared-template"},{row:i})}else n.length>1&&(a+=A.formatMessage({id:"Terra.table.multiple-rows-unselected"},{rowCount:n.length}));a&&pe(a)}}),[A,De]),(0,d.useEffect)((function(){He(Se.map((function(e){return xe(e)})))}),[w,R]),(0,d.useEffect)((function(){var e,t=[],l=0;if(N&&0===w.length)return e=0,t.push(l),void ee(t);w.length>0&&(t.push(l),e=N?w.length:w.length-1,Pe.slice(0,e).forEach((function(e){l+=e.width,t.push(l)}))),ee(t)}),[Pe]),(0,d.useEffect)((function(){var e=new b.default((function(){K(le.current.offsetHeight-1);var e=te.current;oe(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)}));return e.observe(le.current),function(){e.disconnect()}}),[le]);var We=(0,d.useCallback)((function(e){ue.tableRef&&(ue.tableRef.current=e),le.current=e}),[ue.tableRef]),ze=(0,d.useCallback)((function(e){ue.tableContainerRef&&(ue.tableContainerRef.current=e),te.current=e}),[ue.tableContainerRef]),Te=(0,d.useCallback)((function(e){e===Oe.id?k&&k():E&&E(e)}),[E,k,Oe.id]),Ae=(0,d.useCallback)((function(e,t,l){J.current=le.current.offsetWidth,V.current=e.pageX,B.current=l,F(t)}),[]),Le=function(){y&&y(Pe[X].id,Pe[X].width),F(null)},qe=(0,d.useCallback)((function(e,t){var l=Pe[e],n=l.minimumWidth,a=l.maximumWidth,r=l.width,i=Math.min(Math.max(r+t,n),a),u=(0,o.default)(Pe);u[e].width=i,He(u),le.current.style.width="".concat(le.current.offsetWidth+(i-r),"px"),y&&y(Pe[e].id,Pe[e].width)}),[Pe,y]);return d.default.createElement("div",{ref:ze,className:H("table-container"),tabIndex:!de&&re?0:void 0},d.default.createElement("table",(0,r.default)({ref:We,id:t,role:ue.role,"aria-labelledby":l,"aria-label":n,"aria-rowcount":ke,className:H("table",ie.className,{headerless:!W})},null!=X&&{onMouseUp:Le,onMouseMove:function(e){if(null!=X){var t=e.pageX-V.current,l=Pe[X],n=l.minimumWidth,a=l.maximumWidth,r=Math.min(Math.max(B.current+t,n),a),i=(0,o.default)(Pe);i[X].width=r,He(i),le.current.style.width="".concat(J+(r-B.current),"px")}},onMouseLeave:Le}),d.default.createElement(v.default.Provider,{value:ye},d.default.createElement("colgroup",null,Pe.map((function(e){return d.default.createElement("col",{key:e.id,style:{width:"".concat(e.width,"px")}})}))),d.default.createElement(g.default,{tableId:t,isActiveColumnResizing:i,activeColumnIndex:a,columns:Pe,hasVisibleColumnHeaders:W,headerHeight:O,columnResizeIncrement:s,tableHeight:G,onResizeMouseDown:Ae,onColumnSelect:Te,onResizeHandleChange:qe}),De.map((function(e){return d.default.createElement(_.default,{id:e.id,tableId:t,key:e.id,sectionRowIndex:e.sectionRowIndex,isCollapsible:e.isCollapsible,isCollapsed:e.isCollapsed,isHidden:e.id===je.current,isTableStriped:z,text:e.text,rows:e.rows,rowHeight:S,hasRowSelection:N,displayedColumns:Se,rowHeaderIndex:T,onCellSelect:de||N?Ne:void 0,onSectionSelect:j})})))),d.default.createElement(h.default,{"aria-live":"polite",text:ge}),d.default.createElement(h.default,{"aria-live":"polite",text:be}),d.default.createElement(h.default,{"aria-live":"polite","aria-atomic":"true",text:Ie}))}D.propTypes=j,D.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[],hasVisibleColumnHeaders:!0};t.default=d.default.memo((0,c.injectIntl)(D))},12810:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"GridConstants",{enumerable:!0,get:function(){return o.GridConstants}}),Object.defineProperty(t,"GridContext",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=n(l(87253)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=i(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}(l(63127));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(i=function(e){return e?l:t})(e)}t.default=r.default},98526:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(45697)),r=a.default.shape({content:a.default.node,isMasked:a.default.bool,maskedLabel:a.default.string,isSelectable:a.default.bool,isSelected:a.default.bool});t.default=r},65602:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var a=n(l(45697)),r=t.SortIndicators={ASCENDING:"ascending",DESCENDING:"descending"};t.columnShape=a.default.shape({id:a.default.string.isRequired,displayName:a.default.string,hasError:a.default.bool,isResizable:a.default.bool,isSelectable:a.default.bool,minimumWidth:a.default.number,maximumWidth:a.default.number,width:a.default.number,sortIndicator:a.default.oneOf(Object.values(r))})},23902:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(45697)),r=n(l(98526)),o=a.default.shape({id:a.default.string.isRequired,cells:a.default.arrayOf(r.default),isSelected:a.default.bool,ariaLabel:a.default.string});t.default=o},20318:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(45697)),r=n(l(23902)),o=a.default.shape({id:a.default.string.isRequired,isCollapsible:a.default.bool,isCollapsed:a.default.bool,text:a.default.string,rows:a.default.arrayOf(r.default)});t.default=o},15821:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(412));t.default=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(a.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(a.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(a.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)}},4845:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(10434)),o=n(l(861)),i=n(l(27424)),u=w(l(67294)),d=w(l(51051)),s=n(l(47166)),c=n(l(54483)),f=l(25387),m=n(l(45697)),b=n(l(47341)),p=n(l(29270)),h=n(l(27876)),_=w(l(63127)),g=n(l(2981));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(v=function(e){return e?l:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=v(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var C=s.default.bind(g.default),I={intl:m.default.shape({formatMessage:m.default.func}).isRequired,rowId:m.default.string.isRequired,columnId:m.default.string.isRequired,rowIndex:m.default.number,columnIndex:m.default.number,sectionId:m.default.string,tableId:m.default.string.isRequired,children:m.default.node,isMasked:m.default.bool,maskedLabel:m.default.string,isSelectable:m.default.bool,isSelected:m.default.bool,ariaLabel:m.default.string,isRowHeader:m.default.bool,isHighlighted:m.default.bool,onCellSelect:m.default.func,height:m.default.string};function R(e){var t=e.rowId,l=e.columnId,n=e.rowIndex,a=e.columnIndex,s=e.sectionId,f=e.tableId,m=e.ariaLabel,g=e.isMasked,v=e.maskedLabel,w=e.isRowHeader,I=e.isSelectable,R=e.isSelected,y=e.isHighlighted,x=e.children,O=e.onCellSelect,S=e.height,E=e.intl,M=(0,u.useRef)(),P=(0,u.useContext)(b.default),H=(0,u.useContext)(_.default),j=(0,u.useContext)(h.default),D=(0,u.useState)(!1),k=(0,i.default)(D,2),N=k[0],W=k[1],z=(0,u.useState)(!1),T=(0,i.default)(z,2),A=T[0],L=T[1],q=H.role===_.GridConstants.GRID,G=function(){return(0,o.default)(M.current.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")})).length>0};(0,u.useEffect)((function(){q&&W(G())}),[q]);var K,U=function(){L(!1),H.setCellAriaLiveMessage&&H.setCellAriaLiveMessage(E.formatMessage({id:"Terra.table.resume-navigation"}))};K=g?u.default.createElement("span",{className:C("no-data-cell",P.className)},v||E.formatMessage({id:"Terra.table.maskedCell"})):x||u.default.createElement("span",{className:C("no-data-cell",P.className)},E.formatMessage({id:"Terra.table.blank"}));var Y=C("cell",{masked:g,pinned:a<j.pinnedColumnOffsets.length,selectable:I&&!g,selected:R&&!g,highlighted:y,blank:!x},P.className),X=a<j.pinnedColumnOffsets.length?j.pinnedColumnOffsets[a]:null,F=w?"th":"td",V=u.default.createElement("div",{className:C("cell-content",P.className),style:{height:S}},K);q&&(V=u.default.createElement(c.default,{active:A,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,escapeDeactivates:!1,onDeactivate:U}},V));var B=s?"".concat(f,"-").concat(s):"",J=w?"":"".concat(f,"-rowheader-").concat(t),Q="".concat(f,"-").concat(l);return u.default.createElement(F,(0,r.default)({id:w?"".concat(f,"-rowheader-").concat(t):void 0,ref:q?M:void 0,"aria-selected":R||void 0,"aria-label":m,headers:"".concat(B," ").concat(J," ").concat(Q),tabIndex:q?-1:void 0,className:Y},w&&{scope:"row",role:"rowheader"},{onMouseDown:O?function(e){A||O({sectionId:s,rowId:t,rowIndex:n,columnId:l,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!g&&I})}:void 0,onKeyDown:function(e){var r=e.keyCode,o=e.target;if(A){if(r===d.KEY_ESCAPE)U();e.stopPropagation()}else switch(r){case d.KEY_RETURN:q&&G()&&(L(!0),H.setCellAriaLiveMessage&&H.setCellAriaLiveMessage(E.formatMessage({id:"Terra.table.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault());break;case d.KEY_SPACE:O&&O({sectionId:s,rowId:t,rowIndex:n,columnId:l,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!g&&I}),function(e){var t=e.tagName;if("input"===t.toLowerCase()){var l=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(l)>=0}return["textarea","select"].indexOf(t.toLowerCase())>=0||!(!e.hasAttribute("contentEditable")||!1===e.getAttribute("contentEditable"))}(o)||e.preventDefault()}},style:{left:X}}),V,N&&u.default.createElement(p.default,{text:E.formatMessage({id:"Terra.table.cell-interactable"})}))}R.propTypes=I,R.defaultProps={isRowHeader:!1,isSelectable:!1,isMasked:!1,sectionId:""};t.default=u.default.memo((0,f.injectIntl)(R))},52075:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),r=n(l(45697)),o=n(l(47166)),i=n(l(63043)),u=l(65602),d=n(l(59246)),s=o.default.bind(d.default),c={tableId:r.default.string.isRequired,columns:r.default.arrayOf(u.columnShape).isRequired,headerHeight:r.default.string.isRequired,tableHeight:r.default.number,activeColumnIndex:r.default.number,isActiveColumnResizing:r.default.bool,columnResizeIncrement:r.default.number,onColumnSelect:r.default.func,onResizeMouseDown:r.default.func,onResizeHandleChange:r.default.func,hasVisibleColumnHeaders:r.default.bool},f=function(e){var t=e.tableId,l=e.activeColumnIndex,n=e.isActiveColumnResizing,r=e.columnResizeIncrement,o=e.columns,u=e.headerHeight,d=e.tableHeight,c=e.onColumnSelect,f=e.onResizeMouseDown,m=e.onResizeHandleChange,b=e.hasVisibleColumnHeaders;return a.default.createElement("thead",null,a.default.createElement("tr",{className:s("column-header-row",{hidden:!b}),height:b?u:void 0},o.map((function(e,o){return a.default.createElement(i.default,{key:e.id,id:e.id,tableId:t,rowIndex:0,columnIndex:o,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:u,isResizable:b&&e.isResizable,isSelectable:b&&e.isSelectable,tableHeight:d,isActive:l===o,isResizeActive:l===o&&n,columnResizeIncrement:r,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:c,onResizeMouseDown:f,onResizeHandleChange:m})}))))};f.propTypes=c,f.defaultProps={hasVisibleColumnHeaders:!0};t.default=a.default.memo(f)},63043:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(10434)),o=n(l(27424)),i=w(l(67294)),u=n(l(45697)),d=l(25387),s=w(l(51051)),c=n(l(47166)),f=n(l(47341)),m=l(34614),b=n(l(62225)),p=w(l(63127)),h=l(65602),_=n(l(27876)),g=n(l(23194));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(v=function(e){return e?l:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=v(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var C=c.default.bind(g.default),I={id:u.default.string.isRequired,tableId:u.default.string.isRequired,displayName:u.default.string,sortIndicator:u.default.oneOf(Object.values(h.SortIndicators)),hasError:u.default.bool,minimumWidth:u.default.number,maximumWidth:u.default.number,isActive:u.default.bool,isSelectable:u.default.bool,isResizable:u.default.bool,tableHeight:u.default.number,isResizeActive:u.default.bool,columnResizeIncrement:u.default.number,width:u.default.number.isRequired,headerHeight:u.default.string.isRequired,rowIndex:u.default.number,columnIndex:u.default.number,onColumnSelect:u.default.func,onResizeMouseDown:u.default.func,onResizeHandleChange:u.default.func,intl:u.default.shape({formatMessage:u.default.func})},R=function(e){var t=e.id,l=e.tableId,n=e.displayName,a=e.sortIndicator,u=e.hasError,d=e.isActive,c=e.isSelectable,g=e.isResizable,v=e.tableHeight,w=e.isResizeActive,I=e.columnResizeIncrement,R=e.width,y=e.minimumWidth,x=e.maximumWidth,O=e.headerHeight,S=e.onColumnSelect,E=e.intl,M=e.rowIndex,P=e.columnIndex,H=e.onResizeMouseDown,j=e.onResizeHandleChange,D=(0,i.useContext)(_.default),k=(0,i.useContext)(p.default),N=(0,i.useRef)(),W=(0,i.useState)(!1),z=(0,o.default)(W,2),T=z[0],A=z[1],L=k.role===p.GridConstants.GRID;(0,i.useEffect)((function(){d?g&&w?A(!0):(N.current.focus(),A(!1)):A(!1)}),[d,g,w]);var q,G=(0,i.useCallback)((function(e){e.stopPropagation(),H&&H(e,P,N.current.offsetWidth)}),[P,H]),K=(0,i.useCallback)((function(){N.current.focus(),A(!1)}),[]),U=u&&i.default.createElement(m.IconError,{a11yLabel:E.formatMessage({id:"Terra.table.columnError"}),className:C("error-icon")});a===h.SortIndicators.ASCENDING?q=i.default.createElement(m.IconUp,null):a===h.SortIndicators.DESCENDING&&(q=i.default.createElement(m.IconDown,null));var Y=(0,i.useContext)(f.default),X=P<D.pinnedColumnOffsets.length?D.pinnedColumnOffsets[P]:null,F=R-1,V=P===D.pinnedColumnOffsets.length-1?i.default.createElement("div",{className:C("pinned-columns-divider"),style:{height:v,left:F}}):null,B=c?0:void 0;L&&(B=c&&n?-1:void 0);var J=c&&n;return i.default.createElement("th",{ref:J?void 0:N,id:"".concat(l,"-").concat(t),key:t,className:C("column-header",Y.className,{selectable:c,pinned:P<D.pinnedColumnOffsets.length}),tabIndex:L&&!J?-1:void 0,role:"columnheader",scope:"col",title:n,"aria-sort":a,onMouseDown:c&&S?function(e){S(t,{row:M,col:P}),e.stopPropagation()}:void 0,onKeyDown:c||g?function(e){switch(e.keyCode){case s.KEY_SPACE:case s.KEY_RETURN:c&&S&&S(t,{row:M,col:P},c),e.stopPropagation(),e.preventDefault();break;case s.KEY_LEFT:g&&T&&L&&(N.current.focus(),A(!1),e.stopPropagation(),e.preventDefault());break;case s.KEY_RIGHT:g&&!T&&L&&(A(!0),e.stopPropagation(),e.preventDefault())}}:void 0,style:{width:"".concat(R,"px"),height:O,left:X}},i.default.createElement("div",(0,r.default)({className:C("header-container")},J&&{ref:N,role:"button"},{tabIndex:B}),U,i.default.createElement("span",null,n),q),g&&i.default.createElement(b.default,{columnIndex:P,columnText:n,columnWidth:R,columnResizeIncrement:I,isActive:T,setIsActive:A,height:v,minimumWidth:y,maximumWidth:x,onResizeMouseDown:G,onResizeMouseUp:K,onResizeHandleChange:j}),V)};R.propTypes=I,R.defaultProps={hasError:!1,isSelectable:!1,isActive:!1,isResizable:!1,isResizeActive:!1};t.default=i.default.memo((0,d.injectIntl)(R))},62225:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(27424)),o=h(l(67294)),i=n(l(47166)),u=l(25387),d=h(l(51051)),s=n(l(45697)),c=n(l(47341)),f=n(l(27876)),m=h(l(63127)),b=n(l(68827));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var _=i.default.bind(b.default),g={columnIndex:s.default.number,columnText:s.default.string.isRequired,columnWidth:s.default.number.isRequired,height:s.default.number.isRequired,columnResizeIncrement:s.default.number,isActive:s.default.bool,setIsActive:s.default.func,minimumWidth:s.default.number.isRequired,maximumWidth:s.default.number.isRequired,onResizeMouseDown:s.default.func.isRequired,onResizeMouseUp:s.default.func.isRequired,onResizeHandleChange:s.default.func,intl:s.default.shape({formatMessage:s.default.func}).isRequired},v=function(e){var t=e.columnIndex,l=e.columnResizeIncrement,n=e.columnText,a=e.columnWidth,i=e.height,u=e.intl,s=e.isActive,b=e.maximumWidth,p=e.minimumWidth,h=e.onResizeHandleChange,g=e.onResizeMouseDown,v=e.onResizeMouseUp,w=e.setIsActive,C=(0,o.useContext)(c.default),I=(0,o.useContext)(m.default),R=(0,o.useContext)(f.default),y=I.role===m.GridConstants.GRID,x=(0,o.useRef)(),O=(0,o.useState)(!0),S=(0,r.default)(O,2),E=S[0],M=S[1];(0,o.useEffect)((function(){s&&x.current.focus()}),[s]);var P=function(){x.current.style.height="".concat(i,"px")};return o.default.createElement("div",{ref:x,draggable:!0,role:E?null:"slider",tabIndex:y?-1:0,"aria-hidden":!!y&&!s,"aria-valuemin":s?p:null,"aria-valuenow":s?a:null,"aria-valuemax":s?b:null,"aria-label":s&&E?u.formatMessage({id:"Terra.table.resize-handle-template"},{columnText:n}):null,"aria-valuetext":E?null:u.formatMessage({id:"Terra.table.resize-handle-value-text"},{columnWidth:a}),style:{height:"".concat(i,"px")},onMouseDown:function(e){x.current.focus(),g(e),e.stopPropagation(),e.preventDefault()},onMouseUp:function(){v()},onMouseEnter:P,onMouseLeave:function(){document.activeElement!==x.current&&(x.current.style.height="100%")},onKeyDown:function(e){switch(e.keyCode){case d.KEY_SPACE:case d.KEY_RETURN:M(!1),x.current.focus(),R.setColumnHeaderAriaLiveMessage(u.formatMessage({id:"Terra.table.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault();break;case d.KEY_ESCAPE:R.setColumnHeaderAriaLiveMessage(u.formatMessage({id:"Terra.table.resume-navigation"})),M(!0);break;case d.KEY_RIGHT:h&&!E&&h(t,l);break;case d.KEY_LEFT:h&&!E&&h(t,-l)}E||(e.stopPropagation(),e.preventDefault())},onClick:function(e){e.stopPropagation()},onFocus:P,onBlur:function(){M(!0),w(!1)},className:_("resize-handle",C.className,{"resize-handle-selected":!E})})};v.propTypes=g,v.defaultProps={columnResizeIncrement:10};t.default=(0,u.injectIntl)(v)},88846:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}(l(67294)),i=n(l(47166)),u=n(l(45697)),d=n(l(47341)),s=n(l(4845)),c=n(l(98526)),f=l(65602),m=n(l(73077)),b=n(l(98194));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}var h=i.default.bind(b.default),_={id:u.default.string.isRequired,tableId:u.default.string.isRequired,rowIndex:u.default.number,sectionId:u.default.string,height:u.default.string,cells:u.default.arrayOf(c.default),isSelected:u.default.bool,isTableStriped:u.default.bool,ariaLabel:u.default.string,hasRowSelection:u.default.bool,displayedColumns:u.default.arrayOf(f.columnShape),onCellSelect:u.default.func,rowHeaderIndex:u.default.number};function g(e){var t=e.rowIndex,l=e.height,n=e.hasRowSelection,a=e.id,i=e.tableId,u=e.sectionId,c=e.isSelected,f=e.isTableStriped,b=e.cells,p=e.ariaLabel,_=e.displayedColumns,g=e.rowHeaderIndex,v=e.onCellSelect,w=(0,o.useContext)(d.default),C=(0,o.useState)(!1),I=(0,r.default)(C,2),R=I[0],y=I[1],x=n?1:0;return o.default.createElement("tr",{"aria-rowindex":t,"data-row-id":a,className:h("row",{selected:c,selectable:n,"striped-table-row":f},w.className),style:{height:l},onMouseEnter:n?function(){y(!0)}:void 0,onMouseLeave:n?function(){y(!1)}:void 0},n&&o.default.createElement(m.default,{rowId:a,columnId:_[0].id,rowIndex:t,columnIndex:0,sectionId:u,tableId:i,isSelected:c,ariaLabel:p,onCellSelect:v}),b.map((function(e,r){var d=r+x,f=_[d].id;return o.default.createElement(s.default,{rowId:a,columnId:f,rowIndex:t,columnIndex:d,sectionId:u,tableId:i,key:"".concat(a,"_").concat(f),isSelected:!n&&e.isSelected,isMasked:e.isMasked,maskedLabel:e.maskedLabel,isSelectable:e.isSelectable,isRowHeader:d===g+x,isHighlighted:R||c,onCellSelect:v,height:l},e.content)})))}g.propTypes=_,g.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};t.default=o.default.memo(g)},73077:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=b(l(67294)),o=n(l(47166)),i=l(25387),u=n(l(45697)),d=n(l(47341)),s=b(l(63127)),c=n(l(4845)),f=n(l(10852));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=m(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var p=o.default.bind(f.default),h={columnId:u.default.string.isRequired,tableId:u.default.string.isRequired,intl:u.default.shape({formatMessage:u.default.func}).isRequired,rowId:u.default.string.isRequired,rowIndex:u.default.number,columnIndex:u.default.number,sectionId:u.default.string,sectionIndex:u.default.number,isSelected:u.default.bool,ariaLabel:u.default.string,onCellSelect:u.default.func};function _(e){var t=e.rowId,l=e.columnId,n=e.tableId,a=e.rowIndex,o=e.columnIndex,i=e.sectionId,u=e.sectionIndex,f=e.isSelected,m=e.ariaLabel,b=e.onCellSelect,h=e.intl,_=(0,r.useContext)(d.default),g=(0,r.useContext)(s.default).role===s.GridConstants.GRID,v=h.formatMessage({id:"Terra.table.row-index"},{row:a+1}),w=r.default.createElement("input",{type:"checkbox","aria-label":m||v,readOnly:!0,tabIndex:g?-1:0,checked:f,className:p("input",_.className)});return r.default.createElement(c.default,{rowId:t,columnId:l,tableId:n,key:"".concat(t,"_").concat(l),rowIndex:a,columnIndex:o,sectionId:i,sectionIndex:u,isSelected:!1,onCellSelect:b},w)}_.propTypes=h;t.default=r.default.memo((0,i.injectIntl)(_))},89152:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=b(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}(l(67294)),o=n(l(47166)),i=n(l(45697)),u=n(l(16772)),d=n(l(47341)),s=n(l(88846)),c=n(l(23902)),f=l(65602),m=n(l(85937));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(b=function(e){return e?l:t})(e)}var p=o.default.bind(m.default),h={id:i.default.string.isRequired,tableId:i.default.string.isRequired,sectionRowIndex:i.default.number,isCollapsible:i.default.bool,isCollapsed:i.default.bool,isHidden:i.default.bool,text:i.default.string,rows:i.default.arrayOf(c.default),hasRowSelection:i.default.bool,displayedColumns:i.default.arrayOf(f.columnShape),onCellSelect:i.default.func,rowHeight:i.default.string,rowHeaderIndex:i.default.number,isTableStriped:i.default.bool,onSectionSelect:i.default.func};function _(e){var t=e.id,l=e.tableId,n=e.sectionRowIndex,a=e.isCollapsible,o=e.isCollapsed,i=e.isHidden,c=e.isTableStriped,f=e.text,m=e.hasRowSelection,b=e.displayedColumns,h=e.onCellSelect,_=e.rowHeight,g=e.rowHeaderIndex,v=e.rows,w=e.onSectionSelect,C=(0,r.useContext)(d.default);return r.default.createElement(r.default.Fragment,null,!i&&r.default.createElement("tr",{"aria-rowindex":n,className:p("header")},r.default.createElement("th",{id:"".concat(l,"-").concat(t),align:"left",colSpan:b.length,role:"columnheader",scope:"col"},r.default.createElement(u.default,{text:f,isOpen:!o,onClick:a&&w?function(e){w(t),e.stopPropagation()}:void 0}))),r.default.createElement("tbody",{className:p("section",{collapsed:o,collapsible:a},C.className)},v.map((function(e,a){return r.default.createElement(s.default,{rowIndex:n+(a+1),key:e.id,height:_,id:e.id,sectionId:i?void 0:t,tableId:l,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:m,displayedColumns:b,rowHeaderIndex:g,onCellSelect:h,isSelected:e.isSelected,isTableStriped:c})}))))}_.propTypes=h,_.defaultProps={isCollapsible:!1,isCollapsed:!1,isHidden:!1,rows:[]};t.default=r.default.memo(_)},27876:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)).default.createContext({pinnedColumnOffsets:[]});t.default=a},63127:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GridConstants=void 0;var a=n(l(67294)).default.createContext({role:"table",setCellAriaLiveMessage:void 0,tableRef:void 0,tableContainerRef:void 0});t.GridConstants={GRID:"grid"},t.default=a},412:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"To be properly accessible, the row header column should be a pinned column. please set pinned columns"}},28255:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___G2b7R","orion-fusion-theme":"Table-module__orion-fusion-theme___iu+p1","table-container":"Table-module__table-container___g4Byi",table:"Table-module__table___wcFdg",headerless:"Table-module__headerless___eod6K"}},2981:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___JlIUL","orion-fusion-theme":"Cell-module__orion-fusion-theme___HW1Ki",cell:"Cell-module__cell___XID6c",selected:"Cell-module__selected___3WHxU",masked:"Cell-module__masked___yW7Cf",highlighted:"Cell-module__highlighted___4hj9T","cell-content":"Cell-module__cell-content___FhljD","no-data-cell":"Cell-module__no-data-cell___6er9D",pinned:"Cell-module__pinned___y2cJe",selectable:"Cell-module__selectable___BAIg5"}},59246:function(e,t,l){l.r(t),t.default={hidden:"ColumnHeader-module__hidden___I3b7-"}},23194:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___E4AJx","orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___LLv1A","column-header":"ColumnHeaderCell-module__column-header___oWlRh","header-container":"ColumnHeaderCell-module__header-container___Bvm2V","error-icon":"ColumnHeaderCell-module__error-icon___8bLJu",selectable:"ColumnHeaderCell-module__selectable___JFI4E",pinned:"ColumnHeaderCell-module__pinned___Qusyo","pinned-columns-divider":"ColumnHeaderCell-module__pinned-columns-divider___Kl7gb"}},68827:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___uvYEY","clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___MWieH","resize-handle":"ColumnResizeHandle-module__resize-handle___rckkL","resize-handle-selected":"ColumnResizeHandle-module__resize-handle-selected___-zzct"}},98194:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___LqsJk","orion-fusion-theme":"Row-module__orion-fusion-theme___uCwnV","striped-table-row":"Row-module__striped-table-row___0o1z0",row:"Row-module__row___kR-J-",selectable:"Row-module__selectable___r9jUT",selected:"Row-module__selected___ojIZP"}},10852:function(e,t,l){l.r(t),t.default={input:"RowSelectionCell-module__input___++BBM"}},85937:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Section-module__clinical-lowlight-theme___CmVbA","orion-fusion-theme":"Section-module__orion-fusion-theme___42iAO",section:"Section-module__section___Rf5QD",collapsed:"Section-module__collapsed___M5LcR",header:"Section-module__header___Q0nuu"}}}]);