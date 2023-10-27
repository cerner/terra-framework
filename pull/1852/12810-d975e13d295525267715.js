"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[12810],{87253:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(10434)),o=n(l(861)),u=n(l(38416)),i=n(l(27424)),d=R(l(67294)),s=n(l(45697)),f=l(25387),c=n(l(47166)),m=n(l(32018)),p=n(l(47341)),b=n(l(88846)),_=n(l(89152)),h=n(l(29270)),w=n(l(52075)),v=n(l(27876)),g=l(65602),C=n(l(412)),y=R(l(63127)),I=n(l(23902)),O=n(l(15821)),S=n(l(28255)),x=n(l(20318));function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(E=function(e){return e?l:t})(e)}function R(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=E(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}function M(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function P(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?M(Object(l),!0).forEach((function(t){(0,u.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):M(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}var j=c.default.bind(S.default),H={id:s.default.string.isRequired,rows:s.default.arrayOf(I.default),sections:s.default.arrayOf(x.default),ariaLabelledBy:s.default.string,ariaLabel:s.default.string,pinnedColumns:s.default.arrayOf(g.columnShape),overflowColumns:s.default.arrayOf(g.columnShape),defaultColumnWidth:s.default.number,columnHeaderHeight:s.default.string,rowHeight:s.default.string,rowHeaderIndex:O.default,onColumnResize:s.default.func,onCellSelect:s.default.func,onRowSelect:s.default.func,onColumnSelect:s.default.func,onSectionSelect:s.default.func,onRowSelectionHeaderSelect:s.default.func,hasSelectableRows:s.default.bool,hasColumnHeaders:s.default.bool,isStriped:s.default.bool,intl:s.default.shape({formatMessage:s.default.func}).isRequired};function D(e){var t=e.id,l=e.ariaLabelledBy,n=e.ariaLabel,a=e.rows,u=e.sections,s=e.pinnedColumns,f=e.overflowColumns,c=e.onColumnResize,g=e.defaultColumnWidth,I=e.columnHeaderHeight,O=e.rowHeight,S=e.onColumnSelect,x=e.onCellSelect,E=e.onSectionSelect,R=e.onRowSelect,M=e.onRowSelectionHeaderSelect,H=e.hasSelectableRows,D=e.hasColumnHeaders,N=e.isStriped,k=e.rowHeaderIndex,W=e.intl;0===s.length&&console.warn(C.default.PINNED_COLUMNS_UNDEFINED);var T=(0,d.useState)(0),L=(0,i.default)(T,2),A=L[0],z=L[1],q=(0,d.useState)(null),G=(0,i.default)(q,2),K=G[0],U=G[1],X=(0,d.useRef)(0),B=(0,d.useRef)(200),J=(0,d.useRef)(0),F=(0,d.useState)([0]),V=(0,i.default)(F,2),Y=V[0],Q=V[1],Z=(0,d.useRef)(),$=(0,d.useRef)(),ee=(0,d.useState)(!1),te=(0,i.default)(ee,2),le=te[0],ne=te[1],ae=(0,d.useContext)(p.default),re=(0,d.useContext)(y.default),oe=re.role===y.GridConstants.GRID,ue=(0,d.useRef)(!1),ie=(0,d.useRef)([]),de=(0,d.useState)(null),se=(0,i.default)(de,2),fe=se[0],ce=se[1],me=(0,d.useState)(null),pe=(0,i.default)(me,2),be=pe[0],_e=pe[1],he=(0,d.useMemo)((function(){return{pinnedColumnOffsets:Y}}),[Y]),we=function(e){return P(P({},e),{},{width:e.width||g,minimumWidth:e.minimumWidth||60,maximumWidth:e.maximumWidth||300})},ve={id:"table-rowSelectionColumn",width:40,isSelectable:!!M,isResizable:!1},ge=(H?[ve]:[]).concat(s).concat(f),Ce=(0,d.useState)(ge.map((function(e){return we(e)}))),ye=(0,i.default)(Ce,2),Ie=ye[0],Oe=ye[1],Se=(0,d.useCallback)((function(e){oe||!R?x&&x(e):R(e.rowId)}),[oe,x,R]);(0,d.useEffect)((function(){ue.current?(_e(W.formatMessage({id:H?"Terra.table.row-selection-mode-enabled":"Terra.table.row-selection-mode-disabled"})),Oe(ge.map((function(e){return we(e)})))):ue.current=!0}),[H]),(0,d.useEffect)((function(){var e=(0,o.default)(ie.current);if(ie.current=a.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===ie.current.length)ce(W.formatMessage({id:"Terra.table.all-rows-unselected"}));else if(ie.current.length===a.length)ce(W.formatMessage({id:"Terra.table.all-rows-selected"}));else{var t=ie.current.filter((function(t){return!e.includes(t)})),l=e.filter((function(e){return!ie.current.includes(e)})),n="";if(1===t.length){var r=a.findIndex((function(e){return e.id===t[0]})),u=a[r].ariaLabel||r+2;n=W.formatMessage({id:"Terra.table.row-selection-template"},{row:u})}else t.length>1&&(n=W.formatMessage({id:"Terra.table.multiple-rows-selected"},{rowCount:t.length}));if(1===l.length){var i=a.findIndex((function(e){return e.id===l[0]})),d=a[i].ariaLabel||i+2;n+=W.formatMessage({id:"Terra.table.row-selection-cleared-template"},{row:d})}else l.length>1&&(n+=W.formatMessage({id:"Terra.table.multiple-rows-unselected"},{rowCount:l.length}));n&&ce(n)}}),[W,a]),(0,d.useEffect)((function(){Oe(ge.map((function(e){return we(e)})))}),[s,f]),(0,d.useEffect)((function(){var e,t=[],l=0;if(H&&0===s.length)return e=0,t.push(l),void Q(t);s.length>0&&(t.push(l),e=H?s.length:s.length-1,Ie.slice(0,e).forEach((function(e){l+=e.width,t.push(l)}))),Q(t)}),[Ie]),(0,d.useEffect)((function(){var e=new m.default((function(){z($.current.offsetHeight-1);var e=Z.current;ne(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)}));return e.observe($.current),function(){e.disconnect()}}),[$]);var xe=(0,d.useCallback)((function(e){e===ve.id?M&&M():S&&S(e)}),[S,M,ve.id]),Ee=(0,d.useCallback)((function(e,t,l){J.current=$.current.offsetWidth,X.current=e.pageX,B.current=l,U(t)}),[]),Re=function(){c&&c(Ie[K].id,Ie[K].width),U(null)};return d.default.createElement("div",{ref:Z,className:j("table-container"),tabIndex:!oe&&le?0:void 0},d.default.createElement("table",(0,r.default)({ref:$,id:t,role:re.role,"aria-labelledby":l,"aria-label":n,className:j("table",ae.className,{headerless:!D})},null!=K&&{onMouseUp:Re,onMouseMove:function(e){if(null!=K){var t=e.pageX-X.current,l=Ie[K],n=l.minimumWidth,a=l.maximumWidth,r=Math.min(Math.max(B.current+t,n),a),u=(0,o.default)(Ie);u[K].width=r,Oe(u),$.current.style.width="".concat(J+(r-B.current),"px")}},onMouseLeave:Re}),d.default.createElement(v.default.Provider,{value:he},d.default.createElement("colgroup",null,Ie.map((function(e){return d.default.createElement("col",{key:e.id,style:{width:"".concat(e.width,"px")}})}))),d.default.createElement(w.default,{columns:Ie,hasColumnHeaders:D,headerHeight:I,tableHeight:A,onResizeMouseDown:Ee,onColumnSelect:xe}),u?u.map((function(e,t){return d.default.createElement(_.default,{id:e.id,key:e.id,sectionIndex:t+1,isCollapsible:e.isCollapsible,isCollapsed:e.isCollapsed,isTableStriped:N,text:e.text,rows:e.rows,rowHeight:O,hasRowSelection:H,displayedColumns:ge,rowHeaderIndex:k,onCellSelect:oe||H?Se:void 0,onSectionSelect:E})})):d.default.createElement("tbody",null,a.map((function(e,t){return d.default.createElement(b.default,{rowIndex:t+1,key:e.id,height:O,id:e.id,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:H,displayedColumns:ge,rowHeaderIndex:k,onCellSelect:oe||H?Se:void 0,isSelected:e.isSelected,isTableStriped:N})}))))),d.default.createElement(h.default,{"aria-live":"polite",text:be}),d.default.createElement(h.default,{"aria-live":"polite",text:fe}))}D.propTypes=H,D.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[],hasColumnHeaders:!0};t.default=d.default.memo((0,f.injectIntl)(D))},12810:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"GridContext",{enumerable:!0,get:function(){return r.default}}),t.default=void 0;var a=n(l(87253)),r=n(l(63127));t.default=a.default},98526:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(45697)),r=a.default.shape({content:a.default.node,isMasked:a.default.bool,maskedLabel:a.default.string,isSelectable:a.default.bool,isSelected:a.default.bool});t.default=r},65602:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var a=n(l(45697)),r=t.SortIndicators={ASCENDING:"ascending",DESCENDING:"descending"};t.columnShape=a.default.shape({id:a.default.string.isRequired,displayName:a.default.string,hasError:a.default.bool,isResizable:a.default.bool,isSelectable:a.default.bool,minimumWidth:a.default.number,maximumWidth:a.default.number,width:a.default.number,sortIndicator:a.default.oneOf(Object.values(r))})},23902:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(45697)),r=n(l(98526)),o=a.default.shape({id:a.default.string.isRequired,cells:a.default.arrayOf(r.default),isSelected:a.default.bool,ariaLabel:a.default.string});t.default=o},20318:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(45697)),r=n(l(23902)),o=a.default.shape({id:a.default.string.isRequired,isCollapsible:a.default.bool,isCollapsed:a.default.bool,text:a.default.string,rows:a.default.arrayOf(r.default)});t.default=o},15821:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(412));t.default=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(a.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(a.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(a.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)}},4845:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(10434)),o=n(l(861)),u=n(l(27424)),i=g(l(67294)),d=g(l(51051)),s=n(l(47166)),f=n(l(54483)),c=l(25387),m=n(l(45697)),p=n(l(47341)),b=n(l(29270)),_=n(l(27876)),h=g(l(63127)),w=n(l(2981));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(v=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=v(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var C=s.default.bind(w.default),y={intl:m.default.shape({formatMessage:m.default.func}).isRequired,rowId:m.default.string.isRequired,columnId:m.default.string.isRequired,rowIndex:m.default.number,columnIndex:m.default.number,sectionId:m.default.string,sectionIndex:m.default.number,children:m.default.node,isMasked:m.default.bool,maskedLabel:m.default.string,isSelectable:m.default.bool,isSelected:m.default.bool,ariaLabel:m.default.string,isRowHeader:m.default.bool,isHighlighted:m.default.bool,onCellSelect:m.default.func,height:m.default.string};function I(e){var t=e.rowId,l=e.columnId,n=e.rowIndex,a=e.columnIndex,s=e.sectionId,c=e.sectionIndex,m=e.ariaLabel,w=e.isMasked,v=e.maskedLabel,g=e.isRowHeader,y=e.isSelectable,I=e.isSelected,O=e.isHighlighted,S=e.children,x=e.onCellSelect,E=e.height,R=e.intl,M=(0,i.useRef)(),P=(0,i.useContext)(p.default),j=(0,i.useContext)(h.default),H=(0,i.useContext)(_.default),D=(0,i.useState)(!1),N=(0,u.default)(D,2),k=N[0],W=N[1],T=(0,i.useState)(!1),L=(0,u.default)(T,2),A=L[0],z=L[1],q=j.role===h.GridConstants.GRID,G=function(){return(0,o.default)(M.current.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")})).length>0};(0,i.useEffect)((function(){q&&W(G())}),[q]);var K,U=function(){z(!1),j.setCellAriaLiveMessage&&j.setCellAriaLiveMessage(R.formatMessage({id:"Terra.table.resume-navigation"}))};K=w?i.default.createElement("span",{className:C("no-data-cell",P.className)},v||R.formatMessage({id:"Terra.table.maskedCell"})):S||i.default.createElement("span",{className:C("no-data-cell",P.className)},R.formatMessage({id:"Terra.table.blank"}));var X=C("cell",{masked:w,pinned:a<H.pinnedColumnOffsets.length,selectable:y&&!w,selected:I&&!w,highlighted:O,blank:!S},P.className),B=a<H.pinnedColumnOffsets.length?H.pinnedColumnOffsets[a]:null,J=g?"th":"td",F=i.default.createElement("div",{className:C("cell-content",P.className),style:{height:E}},K);return q&&(F=i.default.createElement(f.default,{active:A,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,escapeDeactivates:!1,onDeactivate:U}},F)),i.default.createElement(J,(0,r.default)({ref:q?M:void 0,"aria-selected":I||void 0,"aria-label":m,tabIndex:q?-1:void 0,className:X},g&&{scope:"row",role:"rowheader"},{onMouseDown:x?function(e){A||x({sectionId:s,sectionIndex:c,rowId:t,rowIndex:n,columnId:l,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!w&&y})}:void 0,onKeyDown:function(e){var r=e.keyCode,o=e.target;if(A){if(r===d.KEY_ESCAPE)U();e.stopPropagation()}else switch(r){case d.KEY_RETURN:q&&G()&&(z(!0),j.setCellAriaLiveMessage&&j.setCellAriaLiveMessage(R.formatMessage({id:"Terra.table.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault());break;case d.KEY_SPACE:x&&x({sectionId:s,sectionIndex:c,rowId:t,rowIndex:n,columnId:l,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!w&&y}),function(e){var t=e.tagName;if("input"===t.toLowerCase()){var l=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(l)>=0}return["textarea","select"].indexOf(t.toLowerCase())>=0||!(!e.hasAttribute("contentEditable")||!1===e.getAttribute("contentEditable"))}(o)||e.preventDefault()}},style:{left:B}}),F,k&&i.default.createElement(b.default,{text:R.formatMessage({id:"Terra.table.cell-interactable"})}))}I.propTypes=y,I.defaultProps={isRowHeader:!1,isSelectable:!1,isMasked:!1,sectionId:""};t.default=i.default.memo((0,c.injectIntl)(I))},52075:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),r=n(l(45697)),o=n(l(47166)),u=n(l(63043)),i=l(65602),d=n(l(59246)),s=o.default.bind(d.default),f={columns:r.default.arrayOf(i.columnShape).isRequired,headerHeight:r.default.string.isRequired,tableHeight:r.default.number,onColumnSelect:r.default.func,onResizeMouseDown:r.default.func,hasColumnHeaders:r.default.bool},c=function(e){var t=e.columns,l=e.headerHeight,n=e.tableHeight,r=e.onColumnSelect,o=e.onResizeMouseDown,i=e.hasColumnHeaders;return a.default.createElement("thead",null,a.default.createElement("tr",{className:s("column-header-row",{hidden:!i}),height:i?l:void 0},t.map((function(e,t){return a.default.createElement(u.default,{key:e.id,id:e.id,rowIndex:0,columnIndex:t,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:l,isResizable:i&&e.isResizable,isSelectable:i&&e.isSelectable,tableHeight:n,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:r,onResizeMouseDown:o})}))))};c.propTypes=f,c.defaultProps={hasColumnHeaders:!0};t.default=a.default.memo(c)},63043:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(l(67294)),o=g(l(51051)),u=l(25387),i=n(l(47166)),d=n(l(45697)),s=n(l(84784)),f=n(l(51331)),c=n(l(33710)),m=n(l(47341)),p=n(l(27876)),b=n(l(62225)),_=g(l(63127)),h=l(65602),w=n(l(23194));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(v=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=v(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var C=i.default.bind(w.default),y={id:d.default.string.isRequired,headerHeight:d.default.string.isRequired,width:d.default.number.isRequired,displayName:d.default.string,sortIndicator:d.default.oneOf(Object.values(h.SortIndicators)),hasError:d.default.bool,minimumWidth:d.default.number,maximumWidth:d.default.number,isSelectable:d.default.bool,isResizable:d.default.bool,tableHeight:d.default.number,rowIndex:d.default.number,columnIndex:d.default.number,onColumnSelect:d.default.func,onResizeMouseDown:d.default.func,intl:d.default.shape({formatMessage:d.default.func})},I=function(e){var t,l=e.id,n=e.displayName,a=e.sortIndicator,u=e.hasError,i=e.isResizable,d=e.isSelectable,w=e.tableHeight,v=e.width,g=e.minimumWidth,y=e.maximumWidth,I=e.headerHeight,O=e.intl,S=e.columnIndex,x=e.onColumnSelect,E=e.onResizeMouseDown,R=e.rowIndex,M=(0,r.useContext)(p.default),P=(0,r.useContext)(_.default),j=(0,r.useContext)(m.default),H=(0,r.useRef)(),D=P.role===_.GridConstants.GRID,N=(0,r.useCallback)((function(e){E&&E(e,S,H.current.offsetWidth)}),[S,E]),k=u&&r.default.createElement(f.default,{a11yLabel:O.formatMessage({id:"Terra.table.columnError"}),className:C("error-icon")});a===h.SortIndicators.ASCENDING?t=r.default.createElement(c.default,null):a===h.SortIndicators.DESCENDING&&(t=r.default.createElement(s.default,null));var W=S<M.pinnedColumnOffsets.length?M.pinnedColumnOffsets[S]:null,T=v-1,L=S===M.pinnedColumnOffsets.length-1?r.default.createElement("div",{className:C("pinned-columns-divider"),style:{height:w,left:T}}):null,A=d?0:void 0;return D&&(A=-1),r.default.createElement("th",{ref:H,key:l,className:C("column-header",j.className,{selectable:d,pinned:S<M.pinnedColumnOffsets.length}),tabIndex:A,role:"columnheader",scope:"col","aria-sort":a,onMouseDown:d&&x?function(e){x(l,{row:R,col:S}),e.stopPropagation()}:void 0,onKeyDown:d&&x?function(e){switch(e.keyCode){case o.KEY_SPACE:case o.KEY_RETURN:x(l,{row:R,col:S}),e.stopPropagation(),e.preventDefault()}}:void 0,style:{height:I,left:W}},r.default.createElement("div",{className:C("header-container"),role:n&&"button"},k,r.default.createElement("span",null,n),t),i&&r.default.createElement(b.default,{columnIndex:S,columnText:n,columnWidth:v,height:w,minimumWidth:g,maximumWidth:y,onResizeMouseDown:N}),L)};I.propTypes=y,I.defaultProps={hasError:!1,isSelectable:!1,isResizable:!1};t.default=r.default.memo((0,u.injectIntl)(I))},62225:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(27424)),o=p(l(67294)),u=n(l(47166)),i=l(25387),d=n(l(45697)),s=n(l(47341)),f=p(l(63127)),c=n(l(68827));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=m(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var b=u.default.bind(c.default),_={columnText:d.default.string.isRequired,columnWidth:d.default.number.isRequired,height:d.default.number.isRequired,minimumWidth:d.default.number.isRequired,maximumWidth:d.default.number.isRequired,onResizeMouseDown:d.default.func.isRequired,intl:d.default.shape({formatMessage:d.default.func}).isRequired},h=function(e){var t=e.columnText,l=e.columnWidth,n=e.height,a=e.minimumWidth,u=e.maximumWidth,i=e.onResizeMouseDown,d=e.intl,c=(0,o.useContext)(s.default),m=(0,o.useContext)(f.default).role===f.GridConstants.GRID,p=(0,o.useState)(!1),_=(0,r.default)(p,2),h=_[0],w=_[1],v=(0,o.useRef)();return o.default.createElement("div",{ref:v,draggable:!0,role:"slider",tabIndex:m?-1:0,"aria-hidden":!h,"aria-valuemin":a,"aria-valuenow":l,"aria-valuemax":u,"aria-label":t,"aria-valuetext":d.formatMessage({id:"Terra.table.resizeHandleValueText"},{columnWidth:l}),style:{height:"".concat(n,"px")},onMouseDown:function(e){v.current.focus(),i(e),e.stopPropagation(),e.preventDefault()},onFocus:function(){return w(!0)},onBlur:function(){return w(!1)},className:b("resize-handle",c.className)})};h.propTypes=_;t.default=(0,i.injectIntl)(h)},88846:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=b(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}(l(67294)),u=n(l(47166)),i=n(l(45697)),d=n(l(47341)),s=n(l(4845)),f=n(l(98526)),c=l(65602),m=n(l(73077)),p=n(l(98194));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(b=function(e){return e?l:t})(e)}var _=u.default.bind(p.default),h={id:i.default.string.isRequired,rowIndex:i.default.number,sectionId:i.default.string,sectionIndex:i.default.number,height:i.default.string,cells:i.default.arrayOf(f.default),isSelected:i.default.bool,isTableStriped:i.default.bool,ariaLabel:i.default.string,hasRowSelection:i.default.bool,displayedColumns:i.default.arrayOf(c.columnShape),onCellSelect:i.default.func,rowHeaderIndex:i.default.number};function w(e){var t=e.rowIndex,l=e.height,n=e.hasRowSelection,a=e.id,u=e.sectionId,i=e.sectionIndex,f=e.isSelected,c=e.isTableStriped,p=e.cells,b=e.ariaLabel,h=e.displayedColumns,w=e.rowHeaderIndex,v=e.onCellSelect,g=(0,o.useContext)(d.default),C=(0,o.useState)(!1),y=(0,r.default)(C,2),I=y[0],O=y[1],S=n?1:0;return o.default.createElement("tr",{className:_("row",{selected:f,selectable:n,"striped-table-row":c},g.className),style:{height:l},onMouseEnter:n?function(){O(!0)}:void 0,onMouseLeave:n?function(){O(!1)}:void 0},n&&o.default.createElement(m.default,{rowId:a,columnId:h[0].id,rowIndex:t,columnIndex:0,sectionId:u,sectionIndex:i,isSelected:f,ariaLabel:b,onCellSelect:v}),p.map((function(e,r){return o.default.createElement(s.default,{rowId:a,columnId:h[r].id,rowIndex:t,columnIndex:r+S,sectionId:u,sectionIndex:i,key:"".concat(a,"_").concat(h[r].id),isSelected:!n&&e.isSelected,isMasked:e.isMasked,maskedLabel:e.maskedLabel,isSelectable:e.isSelectable,isRowHeader:r===w,isHighlighted:I||f,onCellSelect:v,height:l},e.content)})))}w.propTypes=h,w.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};t.default=o.default.memo(w)},73077:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(l(67294)),o=n(l(47166)),u=l(25387),i=n(l(45697)),d=n(l(47341)),s=p(l(63127)),f=n(l(4845)),c=n(l(10852));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=m(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var b=o.default.bind(c.default),_={columnId:i.default.string.isRequired,intl:i.default.shape({formatMessage:i.default.func}).isRequired,rowId:i.default.string.isRequired,rowIndex:i.default.number,columnIndex:i.default.number,sectionId:i.default.string,sectionIndex:i.default.number,isSelected:i.default.bool,ariaLabel:i.default.string,onCellSelect:i.default.func};function h(e){var t=e.rowId,l=e.columnId,n=e.rowIndex,a=e.columnIndex,o=e.sectionId,u=e.sectionIndex,i=e.isSelected,c=e.ariaLabel,m=e.onCellSelect,p=e.intl,_=(0,r.useContext)(d.default),h=(0,r.useContext)(s.default).role===s.GridConstants.GRID,w=p.formatMessage({id:"Terra.table.row-index"},{row:n+1}),v=r.default.createElement("input",{type:"checkbox","aria-label":c||w,readOnly:!0,tabIndex:h?-1:0,checked:i,className:b("input",_.className)});return r.default.createElement(f.default,{rowId:t,columnId:l,key:"".concat(t,"_").concat(l),rowIndex:n,columnIndex:a,sectionId:o,sectionIndex:u,isSelected:!1,onCellSelect:m},v)}h.propTypes=_;t.default=r.default.memo((0,u.injectIntl)(h))},89152:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=_(l(67294)),o=n(l(47166)),u=n(l(45697)),i=n(l(16772)),d=n(l(47341)),s=_(l(63127)),f=n(l(88846)),c=n(l(23902)),m=l(65602),p=n(l(85937));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(b=function(e){return e?l:t})(e)}function _(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=b(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var h=o.default.bind(p.default),w={id:u.default.string.isRequired,sectionIndex:u.default.number,isCollapsible:u.default.bool,isCollapsed:u.default.bool,text:u.default.string,rows:u.default.arrayOf(c.default),hasRowSelection:u.default.bool,displayedColumns:u.default.arrayOf(m.columnShape),onCellSelect:u.default.func,rowHeight:u.default.string,rowHeaderIndex:u.default.number,isTableStriped:u.default.bool,onSectionSelect:u.default.func};function v(e){var t=e.id,l=e.sectionIndex,n=e.isCollapsible,a=e.isCollapsed,o=e.isTableStriped,u=e.text,c=e.hasRowSelection,m=e.displayedColumns,p=e.onCellSelect,b=e.rowHeight,_=e.rowHeaderIndex,w=e.rows,v=e.onSectionSelect,g=(0,r.useContext)(d.default),C=(0,r.useContext)(s.default).role===s.GridConstants.GRID;return r.default.createElement("tbody",{className:h("section",{collapsed:a,collapsible:n},g.className)},r.default.createElement("tr",{className:h("header",{visible:u||n})},r.default.createElement("th",{align:"left",colSpan:m.length,role:"columnheader",scope:"col"},r.default.createElement(i.default,{text:u,isOpen:!a,onClick:n&&v?function(e){v(t),e.stopPropagation()}:void 0}))),w.map((function(e,t){return r.default.createElement(f.default,{rowIndex:l+(t+1),key:e.id,height:b,id:e.id,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:c,displayedColumns:m,rowHeaderIndex:_,onCellSelect:C?p:void 0,isSelected:e.isSelected,isTableStriped:o})})))}v.propTypes=w,v.defaultProps={isCollapsible:!1,isCollapsed:!1,rows:[]};t.default=r.default.memo(v)},27876:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)).default.createContext({pinnedColumnOffsets:[]});t.default=a},63127:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GridConstants=void 0;var a=n(l(67294)).default.createContext({role:"table",setCellAriaLiveMessage:void 0});t.GridConstants={GRID:"grid"},t.default=a},412:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"To be properly accessible, the row header column should be a pinned column. please set pinned columns"}},28255:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___G2b7R","orion-fusion-theme":"Table-module__orion-fusion-theme___iu+p1","table-container":"Table-module__table-container___g4Byi",table:"Table-module__table___wcFdg",headerless:"Table-module__headerless___eod6K"}},2981:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___JlIUL","orion-fusion-theme":"Cell-module__orion-fusion-theme___HW1Ki",cell:"Cell-module__cell___XID6c",selected:"Cell-module__selected___3WHxU",masked:"Cell-module__masked___yW7Cf",highlighted:"Cell-module__highlighted___4hj9T","cell-content":"Cell-module__cell-content___FhljD","no-data-cell":"Cell-module__no-data-cell___6er9D",pinned:"Cell-module__pinned___y2cJe",selectable:"Cell-module__selectable___BAIg5"}},59246:function(e,t,l){l.r(t),t.default={hidden:"ColumnHeader-module__hidden___I3b7-"}},23194:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___E4AJx","orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___LLv1A","column-header":"ColumnHeaderCell-module__column-header___oWlRh","header-container":"ColumnHeaderCell-module__header-container___Bvm2V","error-icon":"ColumnHeaderCell-module__error-icon___8bLJu",selectable:"ColumnHeaderCell-module__selectable___JFI4E",pinned:"ColumnHeaderCell-module__pinned___Qusyo","pinned-columns-divider":"ColumnHeaderCell-module__pinned-columns-divider___Kl7gb"}},68827:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___MWieH","orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___uvYEY","resize-handle":"ColumnResizeHandle-module__resize-handle___rckkL"}},98194:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___LqsJk","orion-fusion-theme":"Row-module__orion-fusion-theme___uCwnV",row:"Row-module__row___kR-J-",selectable:"Row-module__selectable___r9jUT","striped-table-row":"Row-module__striped-table-row___0o1z0",selected:"Row-module__selected___ojIZP"}},10852:function(e,t,l){l.r(t),t.default={input:"RowSelectionCell-module__input___++BBM"}},85937:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Section-module__clinical-lowlight-theme___CmVbA","orion-fusion-theme":"Section-module__orion-fusion-theme___42iAO",section:"Section-module__section___Rf5QD",collapsed:"Section-module__collapsed___M5LcR",header:"Section-module__header___Q0nuu",visible:"Section-module__visible___NKsjJ"}},84784:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(67294)),a=r(l(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"m47.9 24.5-3.8-3.8L27 37.4V0h-6v37.4L3.9 20.7.1 24.5 24 48z"}))};u.displayName="IconDown",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u},33710:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(67294)),a=r(l(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return n.default.createElement(a.default,t,n.default.createElement("path",{d:"M24 0 .1 23.5l3.8 3.8L21 10.6V48h6V10.6l17.1 16.7 3.8-3.8z"}))};u.displayName="IconUp",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);