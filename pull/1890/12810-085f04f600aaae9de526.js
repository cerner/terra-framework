"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[12810],{87253:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(10434)),o=l(n(861)),i=l(n(38416)),u=l(n(27424)),d=H(n(67294)),s=l(n(45697)),c=n(25387),f=n(55877),m=H(n(51051)),b=l(n(47166)),p=l(n(32018)),h=l(n(47341)),_=l(n(29270)),g=l(n(89152)),v=l(n(52075)),w=l(n(27876)),C=n(65602),I=l(n(412)),y=H(n(63127)),R=l(n(23902)),x=l(n(15821)),O=l(n(28255)),E=l(n(20318)),S=l(n(9462));function M(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(M=function(e){return e?n:t})(e)}function H(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=M(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=b.default.bind(O.default),k={id:s.default.string.isRequired,rows:s.default.arrayOf(R.default),sections:s.default.arrayOf(E.default),ariaLabelledBy:s.default.string,ariaLabel:s.default.string,activeColumnIndex:s.default.number,isActiveColumnResizing:s.default.bool,columnResizeIncrement:s.default.number,pinnedColumns:s.default.arrayOf(C.columnShape),overflowColumns:s.default.arrayOf(C.columnShape),defaultColumnWidth:s.default.number,columnHeaderHeight:s.default.string,rowHeight:s.default.string,rowHeaderIndex:x.default,onColumnResize:s.default.func,onCellSelect:s.default.func,onRowSelect:s.default.func,onColumnSelect:s.default.func,onSectionSelect:s.default.func,onRowSelectionHeaderSelect:s.default.func,hasSelectableRows:s.default.bool,hasColumnHeaders:s.default.bool,isStriped:s.default.bool,intl:s.default.shape({formatMessage:s.default.func}).isRequired};function N(e){var t=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,a=e.activeColumnIndex,i=e.isActiveColumnResizing,s=e.columnResizeIncrement,c=e.rows,b=e.sections,C=e.pinnedColumns,R=e.overflowColumns,x=e.onColumnResize,O=e.defaultColumnWidth,E=e.columnHeaderHeight,M=e.rowHeight,H=e.onColumnSelect,P=e.onCellSelect,k=e.onSectionSelect,N=e.onRowSelect,W=e.onRowSelectionHeaderSelect,z=e.hasSelectableRows,T=e.hasColumnHeaders,A=e.isStriped,L=e.rowHeaderIndex,q=e.intl;0===C.length&&console.warn(I.default.PINNED_COLUMNS_UNDEFINED);var G=(0,d.useState)(0),K=(0,u.default)(G,2),Y=K[0],U=K[1],X=(0,d.useState)(null),F=(0,u.default)(X,2),B=F[0],J=F[1],Q=(0,d.useRef)(0),V=(0,d.useRef)(200),Z=(0,d.useRef)(0),$=(0,d.useState)([0]),ee=(0,u.default)($,2),te=ee[0],ne=ee[1],le=(0,d.useRef)(),ae=(0,d.useRef)(),re=(0,d.useState)(!1),oe=(0,u.default)(re,2),ie=oe[0],ue=oe[1],de=(0,d.useContext)(h.default),se=(0,d.useContext)(y.default),ce=se.role===y.GridConstants.GRID,fe=(0,d.useRef)(!1),me=(0,d.useRef)([]),be=(0,d.useState)(null),pe=(0,u.default)(be,2),he=pe[0],_e=pe[1],ge=(0,d.useState)(null),ve=(0,u.default)(ge,2),we=ve[0],Ce=ve[1],Ie=(0,d.useState)(null),ye=(0,u.default)(Ie,2),Re=ye[0],xe=ye[1],Oe=(0,d.useMemo)((function(){return{pinnedColumnOffsets:te,setColumnHeaderAriaLiveMessage:xe}}),[te]),Ee=function(e){return j(j({},e),{},{width:e.width||O,minimumWidth:e.minimumWidth||60,maximumWidth:e.maximumWidth||300})},Se={id:"table-rowSelectionColumn",width:40,isSelectable:!!W,isResizable:!1},Me=(z?[Se]:[]).concat(C).concat(R),He=(0,d.useState)(Me.map((function(e){return Ee(e)}))),Pe=(0,u.default)(He,2),je=Pe[0],De=Pe[1],ke=(0,d.useRef)((0,f.v4)()),Ne=(0,d.useMemo)((function(){return b?(0,o.default)(b):[{id:ke.current,rows:c}]}),[c,b]),We=Ne.reduce((function(e,t){return t.id!==ke.current?(t.sectionRowIndex=e+1,e+t.rows.length+1):(t.sectionRowIndex=e,e+t.rows.length)}),1),ze=(0,d.useCallback)((function(e){ce||!N?P&&P(e):N(e.rowId)}),[ce,P,N]);(0,d.useEffect)((function(){fe.current?(Ce(q.formatMessage({id:z?"Terra.table.row-selection-mode-enabled":"Terra.table.row-selection-mode-disabled"})),De(Me.map((function(e){return Ee(e)})))):fe.current=!0}),[z]),(0,d.useEffect)((function(){var e=(0,o.default)(me.current),t=Ne.flatMap((function(e){return e.rows.map((function(e){return e}))}));if(me.current=t.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===me.current.length)_e(q.formatMessage({id:"Terra.table.all-rows-unselected"}));else if(me.current.length===t.length)_e(q.formatMessage({id:"Terra.table.all-rows-selected"}));else{var n=me.current.filter((function(t){return!e.includes(t)})),l=e.filter((function(e){return!me.current.includes(e)})),a="";if(1===n.length){var r=ae.current.querySelector("tr[data-row-id='".concat(n[0],"']")).getAttribute("aria-rowindex");a=q.formatMessage({id:"Terra.table.row-selection-template"},{row:r})}else n.length>1&&(a=q.formatMessage({id:"Terra.table.multiple-rows-selected"},{rowCount:n.length}));if(1===l.length){var i=ae.current.querySelector("tr[data-row-id='".concat(l[0],"']")).getAttribute("data-row-id");a+=q.formatMessage({id:"Terra.table.row-selection-cleared-template"},{row:i})}else l.length>1&&(a+=q.formatMessage({id:"Terra.table.multiple-rows-unselected"},{rowCount:l.length}));a&&_e(a)}}),[q,Ne]),(0,d.useEffect)((function(){De(Me.map((function(e){return Ee(e)})))}),[C,R]),(0,d.useEffect)((function(){var e,t=[],n=0;if(z&&0===C.length)return e=0,t.push(n),void ne(t);C.length>0&&(t.push(n),e=z?C.length:C.length-1,je.slice(0,e).forEach((function(e){n+=e.width,t.push(n)}))),ne(t)}),[je]),(0,d.useEffect)((function(){var e=new p.default((function(){U(ae.current.offsetHeight-1);var e=le.current;ue(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)}));return e.observe(ae.current),function(){e.disconnect()}}),[ae]);var Te=(0,d.useCallback)((function(e){se.tableRef&&(se.tableRef.current=e),ae.current=e}),[se.tableRef]),Ae=(0,d.useCallback)((function(e){se.tableContainerRef&&(se.tableContainerRef.current=e),le.current=e}),[se.tableContainerRef]),Le=(0,d.useCallback)((function(e){e===Se.id?W&&W():H&&H(e)}),[H,W,Se.id]),qe=(0,d.useCallback)((function(e,t,n){Z.current=ae.current.offsetWidth,Q.current=e.pageX,V.current=n,J(t)}),[]),Ge=function(){x&&x(je[B].id,je[B].width),J(null)},Ke=(0,d.useCallback)((function(e,t){var n=je[e],l=n.minimumWidth,a=n.maximumWidth,r=n.width,i=Math.min(Math.max(r+t,l),a),u=(0,o.default)(je);u[e].width=i,De(u),ae.current.style.width="".concat(ae.current.offsetWidth+(i-r),"px"),x&&x(je[e].id,je[e].width)}),[je,x]);return d.default.createElement("div",{ref:Ae,className:D("table-container"),tabIndex:!ce&&ie?0:void 0},d.default.createElement("table",(0,r.default)({ref:Te,id:t,role:se.role,"aria-labelledby":n,"aria-label":l,"aria-rowcount":We,className:D("table",de.className,{headerless:!T}),onKeyDown:ce?void 0:function(e){var t,n=e.target;e.keyCode!==m.KEY_TAB&&(function(e){if("input"===e.tagName.toLowerCase()){var t=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(t)>=0}return!1}(n)||["textarea","select"].indexOf(n.tagName.toLowerCase())>=0||n.hasAttribute("contentEditable")&&!1!==n.getAttribute("contentEditable"))||(e.keyCode===m.KEY_HOME?(t=(0,S.default)(ae.current))&&t[0].focus():e.keyCode===m.KEY_END&&(t=(0,S.default)(ae.current))&&t[t.length-1].focus())}},null!=B&&{onMouseUp:Ge,onMouseMove:function(e){if(null!=B){var t=e.pageX-Q.current,n=je[B],l=n.minimumWidth,a=n.maximumWidth,r=Math.min(Math.max(V.current+t,l),a),i=(0,o.default)(je);i[B].width=r,De(i),ae.current.style.width="".concat(Z+(r-V.current),"px")}},onMouseLeave:Ge}),d.default.createElement(w.default.Provider,{value:Oe},d.default.createElement("colgroup",null,je.map((function(e){return d.default.createElement("col",{key:e.id,style:{width:"".concat(e.width,"px")}})}))),d.default.createElement(v.default,{tableId:t,isActiveColumnResizing:i,activeColumnIndex:a,columns:je,hasColumnHeaders:T,headerHeight:E,columnResizeIncrement:s,tableHeight:Y,onResizeMouseDown:qe,onColumnSelect:Le,onResizeHandleChange:Ke}),Ne.map((function(e){return d.default.createElement(g.default,{id:e.id,tableId:t,key:e.id,sectionRowIndex:e.sectionRowIndex,isCollapsible:e.isCollapsible,isCollapsed:e.isCollapsed,isHidden:e.id===ke.current,isTableStriped:A,text:e.text,rows:e.rows,rowHeight:M,hasRowSelection:z,displayedColumns:Me,rowHeaderIndex:L,onCellSelect:ce||z?ze:void 0,onSectionSelect:k})})))),d.default.createElement(_.default,{"aria-live":"polite",text:we}),d.default.createElement(_.default,{"aria-live":"polite",text:he}),d.default.createElement(_.default,{"aria-live":"polite","aria-atomic":"true",text:Re}))}N.propTypes=k,N.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[],hasColumnHeaders:!0};t.default=d.default.memo((0,c.injectIntl)(N))},12810:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"GridConstants",{enumerable:!0,get:function(){return o.GridConstants}}),Object.defineProperty(t,"GridContext",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=l(n(87253)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(63127));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}t.default=r.default},98526:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(45697)),r=a.default.shape({content:a.default.node,isMasked:a.default.bool,maskedLabel:a.default.string,isSelectable:a.default.bool,isSelected:a.default.bool});t.default=r},65602:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var a=l(n(45697)),r=t.SortIndicators={ASCENDING:"ascending",DESCENDING:"descending"};t.columnShape=a.default.shape({id:a.default.string.isRequired,displayName:a.default.string,hasError:a.default.bool,isResizable:a.default.bool,isSelectable:a.default.bool,minimumWidth:a.default.number,maximumWidth:a.default.number,width:a.default.number,sortIndicator:a.default.oneOf(Object.values(r))})},23902:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(45697)),r=l(n(98526)),o=a.default.shape({id:a.default.string.isRequired,cells:a.default.arrayOf(r.default),isSelected:a.default.bool,ariaLabel:a.default.string});t.default=o},20318:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(45697)),r=l(n(23902)),o=a.default.shape({id:a.default.string.isRequired,isCollapsible:a.default.bool,isCollapsed:a.default.bool,text:a.default.string,rows:a.default.arrayOf(r.default)});t.default=o},15821:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(412));t.default=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(a.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(a.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(a.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)}},4845:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(10434)),o=l(n(27424)),i=w(n(67294)),u=w(n(51051)),d=l(n(47166)),s=l(n(54483)),c=n(25387),f=l(n(45697)),m=l(n(47341)),b=l(n(29270)),p=l(n(27876)),h=w(n(63127)),_=l(n(9462)),g=l(n(2981));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}var C=d.default.bind(g.default),I={intl:f.default.shape({formatMessage:f.default.func}).isRequired,rowId:f.default.string.isRequired,columnId:f.default.string.isRequired,rowIndex:f.default.number,columnIndex:f.default.number,sectionId:f.default.string,tableId:f.default.string.isRequired,children:f.default.node,isMasked:f.default.bool,maskedLabel:f.default.string,isSelectable:f.default.bool,isSelected:f.default.bool,ariaLabel:f.default.string,isRowHeader:f.default.bool,isHighlighted:f.default.bool,onCellSelect:f.default.func,height:f.default.string};function y(e){var t=e.rowId,n=e.columnId,l=e.rowIndex,a=e.columnIndex,d=e.sectionId,c=e.tableId,f=e.ariaLabel,g=e.isMasked,v=e.maskedLabel,w=e.isRowHeader,I=e.isSelectable,y=e.isSelected,R=e.isHighlighted,x=e.children,O=e.onCellSelect,E=e.height,S=e.intl,M=(0,i.useRef)(),H=(0,i.useContext)(m.default),P=(0,i.useContext)(h.default),j=(0,i.useContext)(p.default),D=(0,i.useState)(!1),k=(0,o.default)(D,2),N=k[0],W=k[1],z=(0,i.useState)(!1),T=(0,o.default)(z,2),A=T[0],L=T[1],q=P.role===h.GridConstants.GRID,G=function(){return(0,_.default)(M.current).length>0};(0,i.useEffect)((function(){q&&W(G())}),[q]);var K,Y=function(){L(!1),P.setCellAriaLiveMessage&&P.setCellAriaLiveMessage(S.formatMessage({id:"Terra.table.resume-navigation"}))};K=g?i.default.createElement("span",{className:C("no-data-cell",H.className)},v||S.formatMessage({id:"Terra.table.maskedCell"})):x||i.default.createElement("span",{className:C("no-data-cell",H.className)},S.formatMessage({id:"Terra.table.blank"}));var U=C("cell",{masked:g,pinned:a<j.pinnedColumnOffsets.length,selectable:I&&!g,selected:y&&!g,highlighted:R,blank:!x},H.className),X=a<j.pinnedColumnOffsets.length?j.pinnedColumnOffsets[a]:null,F=w?"th":"td",B=i.default.createElement("div",{className:C("cell-content",H.className),style:{height:E}},K);q&&(B=i.default.createElement(s.default,{active:A,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,escapeDeactivates:!1,onDeactivate:Y}},B));var J=d?"".concat(c,"-").concat(d," "):"",Q=w?"":"".concat(c,"-rowheader-").concat(t," "),V="".concat(c,"-").concat(n);return i.default.createElement(F,(0,r.default)({id:w?"".concat(c,"-rowheader-").concat(t):void 0,ref:q?M:void 0,"aria-selected":y||void 0,"aria-label":f,headers:"".concat(J).concat(Q).concat(V),tabIndex:q?-1:void 0,className:U},w&&{scope:"row",role:"rowheader"},{onMouseDown:O?function(e){A||O({sectionId:d,rowId:t,rowIndex:l-1,columnId:n,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!g&&I})}:void 0,onKeyDown:function(e){var r=e.keyCode,o=e.target;if(A){if(r===u.KEY_ESCAPE)Y();e.stopPropagation()}else switch(r){case u.KEY_RETURN:q&&G()&&(L(!0),P.setCellAriaLiveMessage&&P.setCellAriaLiveMessage(S.formatMessage({id:"Terra.table.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault());break;case u.KEY_SPACE:O&&O({sectionId:d,rowId:t,rowIndex:l-1,columnId:n,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!g&&I}),function(e){var t=e.tagName;if("input"===t.toLowerCase()){var n=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(n)>=0}return["textarea","select"].indexOf(t.toLowerCase())>=0||!(!e.hasAttribute("contentEditable")||!1===e.getAttribute("contentEditable"))}(o)||e.preventDefault()}},style:{left:X}}),B,N&&i.default.createElement(b.default,{text:S.formatMessage({id:"Terra.table.cell-interactable"})}))}y.propTypes=I,y.defaultProps={isRowHeader:!1,isSelectable:!1,isMasked:!1,sectionId:""};t.default=i.default.memo((0,c.injectIntl)(y))},52075:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(45697)),o=l(n(47166)),i=l(n(63043)),u=n(65602),d=l(n(59246)),s=o.default.bind(d.default),c={tableId:r.default.string.isRequired,columns:r.default.arrayOf(u.columnShape).isRequired,headerHeight:r.default.string.isRequired,tableHeight:r.default.number,activeColumnIndex:r.default.number,isActiveColumnResizing:r.default.bool,columnResizeIncrement:r.default.number,onColumnSelect:r.default.func,onResizeMouseDown:r.default.func,onResizeHandleChange:r.default.func,hasColumnHeaders:r.default.bool},f=function(e){var t=e.tableId,n=e.activeColumnIndex,l=e.isActiveColumnResizing,r=e.columnResizeIncrement,o=e.columns,u=e.headerHeight,d=e.tableHeight,c=e.onColumnSelect,f=e.onResizeMouseDown,m=e.onResizeHandleChange,b=e.hasColumnHeaders;return a.default.createElement("thead",null,a.default.createElement("tr",{"aria-rowindex":1,className:s("column-header-row",{hidden:!b}),"data-row-id":"table-header-row",height:b?u:void 0},o.map((function(e,o){return a.default.createElement(i.default,{key:e.id,id:e.id,tableId:t,rowIndex:0,columnIndex:o,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:u,isResizable:b&&e.isResizable,isSelectable:b&&e.isSelectable,tableHeight:d,isActive:n===o,isResizeActive:n===o&&l,columnResizeIncrement:r,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:c,onResizeMouseDown:f,onResizeHandleChange:m})}))))};f.propTypes=c,f.defaultProps={hasColumnHeaders:!0};t.default=a.default.memo(f)},63043:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(10434)),o=l(n(27424)),i=w(n(67294)),u=l(n(45697)),d=n(25387),s=w(n(51051)),c=l(n(47166)),f=l(n(47341)),m=n(34614),b=l(n(62225)),p=w(n(63127)),h=n(65602),_=l(n(27876)),g=l(n(23194));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}var C=c.default.bind(g.default),I={id:u.default.string.isRequired,tableId:u.default.string.isRequired,displayName:u.default.string,sortIndicator:u.default.oneOf(Object.values(h.SortIndicators)),hasError:u.default.bool,minimumWidth:u.default.number,maximumWidth:u.default.number,isActive:u.default.bool,isSelectable:u.default.bool,isResizable:u.default.bool,tableHeight:u.default.number,isResizeActive:u.default.bool,columnResizeIncrement:u.default.number,width:u.default.number.isRequired,headerHeight:u.default.string.isRequired,rowIndex:u.default.number,columnIndex:u.default.number,onColumnSelect:u.default.func,onResizeMouseDown:u.default.func,onResizeHandleChange:u.default.func,intl:u.default.shape({formatMessage:u.default.func})},y=function(e){var t=e.id,n=e.tableId,l=e.displayName,a=e.sortIndicator,u=e.hasError,d=e.isActive,c=e.isSelectable,g=e.isResizable,v=e.tableHeight,w=e.isResizeActive,I=e.columnResizeIncrement,y=e.width,R=e.minimumWidth,x=e.maximumWidth,O=e.headerHeight,E=e.onColumnSelect,S=e.intl,M=e.rowIndex,H=e.columnIndex,P=e.onResizeMouseDown,j=e.onResizeHandleChange,D=(0,i.useContext)(_.default),k=(0,i.useContext)(p.default),N=(0,i.useRef)(),W=(0,i.useState)(!1),z=(0,o.default)(W,2),T=z[0],A=z[1],L=k.role===p.GridConstants.GRID;(0,i.useEffect)((function(){d?g&&w?A(!0):(N.current.focus(),A(!1)):A(!1)}),[d,g,w]);var q,G=(0,i.useCallback)((function(e){e.stopPropagation(),P&&P(e,H,N.current.offsetWidth)}),[H,P]),K=(0,i.useCallback)((function(){N.current.focus(),A(!1)}),[]),Y=u&&i.default.createElement(m.IconError,{a11yLabel:S.formatMessage({id:"Terra.table.columnError"}),className:C("error-icon")});a===h.SortIndicators.ASCENDING?q=i.default.createElement(m.IconUp,null):a===h.SortIndicators.DESCENDING&&(q=i.default.createElement(m.IconDown,null));var U=(0,i.useContext)(f.default),X=H<D.pinnedColumnOffsets.length?D.pinnedColumnOffsets[H]:null,F=y-1,B=H===D.pinnedColumnOffsets.length-1?i.default.createElement("div",{className:C("pinned-columns-divider"),style:{height:v,left:F}}):null,J=c?0:void 0;L&&(J=c&&l?-1:void 0);var Q=c&&l;return i.default.createElement("th",{ref:Q?void 0:N,id:"".concat(n,"-").concat(t),key:t,className:C("column-header",U.className,{selectable:c,pinned:H<D.pinnedColumnOffsets.length}),tabIndex:L&&!Q?-1:void 0,role:"columnheader",scope:"col",title:l,"aria-sort":a,onMouseDown:c&&E?function(e){E(t,{row:M,col:H}),e.stopPropagation()}:void 0,onKeyDown:c||g?function(e){switch(e.keyCode){case s.KEY_SPACE:case s.KEY_RETURN:c&&E&&E(t,{row:M,col:H},c),e.stopPropagation(),e.preventDefault();break;case s.KEY_LEFT:g&&T&&L&&(N.current.focus(),A(!1),e.stopPropagation(),e.preventDefault());break;case s.KEY_RIGHT:g&&!T&&L&&(A(!0),e.stopPropagation(),e.preventDefault())}}:void 0,style:{width:"".concat(y,"px"),height:O,left:X}},i.default.createElement("div",(0,r.default)({className:C("header-container")},Q&&{ref:N,role:"button"},{tabIndex:J}),Y,i.default.createElement("span",null,l),q),g&&i.default.createElement(b.default,{columnIndex:H,columnText:l,columnWidth:y,columnResizeIncrement:I,isActive:T,setIsActive:A,height:v,minimumWidth:R,maximumWidth:x,onResizeMouseDown:G,onResizeMouseUp:K,onResizeHandleChange:j}),B)};y.propTypes=I,y.defaultProps={hasError:!1,isSelectable:!1,isActive:!1,isResizable:!1,isResizeActive:!1};t.default=i.default.memo((0,d.injectIntl)(y))},62225:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(27424)),o=h(n(67294)),i=l(n(47166)),u=n(25387),d=h(n(51051)),s=l(n(45697)),c=l(n(47341)),f=l(n(27876)),m=h(n(63127)),b=l(n(68827));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}var _=i.default.bind(b.default),g={columnIndex:s.default.number,columnText:s.default.string.isRequired,columnWidth:s.default.number.isRequired,height:s.default.number.isRequired,columnResizeIncrement:s.default.number,isActive:s.default.bool,setIsActive:s.default.func,minimumWidth:s.default.number.isRequired,maximumWidth:s.default.number.isRequired,onResizeMouseDown:s.default.func.isRequired,onResizeMouseUp:s.default.func.isRequired,onResizeHandleChange:s.default.func,intl:s.default.shape({formatMessage:s.default.func}).isRequired},v=function(e){var t=e.columnIndex,n=e.columnResizeIncrement,l=e.columnText,a=e.columnWidth,i=e.height,u=e.intl,s=e.isActive,b=e.maximumWidth,p=e.minimumWidth,h=e.onResizeHandleChange,g=e.onResizeMouseDown,v=e.onResizeMouseUp,w=e.setIsActive,C=(0,o.useContext)(c.default),I=(0,o.useContext)(m.default),y=(0,o.useContext)(f.default),R=I.role===m.GridConstants.GRID,x=(0,o.useRef)(),O=(0,o.useState)(!0),E=(0,r.default)(O,2),S=E[0],M=E[1];(0,o.useEffect)((function(){s&&x.current.focus()}),[s]);var H=function(){x.current.style.height="".concat(i,"px")};return o.default.createElement("div",{ref:x,draggable:!0,role:S?null:"slider",tabIndex:R?-1:0,"aria-hidden":!!R&&!s,"aria-valuemin":s?p:null,"aria-valuenow":s?a:null,"aria-valuemax":s?b:null,"aria-label":s&&S?u.formatMessage({id:"Terra.table.resize-handle-template"},{columnText:l}):null,"aria-valuetext":S?null:u.formatMessage({id:"Terra.table.resize-handle-value-text"},{columnWidth:a}),style:{height:"".concat(i,"px")},onMouseDown:function(e){x.current.focus(),g(e),e.stopPropagation(),e.preventDefault()},onMouseUp:function(){v()},onMouseEnter:H,onMouseLeave:function(){document.activeElement!==x.current&&(x.current.style.height="100%")},onKeyDown:function(e){switch(e.keyCode){case d.KEY_SPACE:case d.KEY_RETURN:M(!1),x.current.focus(),y.setColumnHeaderAriaLiveMessage(u.formatMessage({id:"Terra.table.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault();break;case d.KEY_ESCAPE:y.setColumnHeaderAriaLiveMessage(u.formatMessage({id:"Terra.table.resume-navigation"})),M(!0);break;case d.KEY_RIGHT:h&&!S&&h(t,n);break;case d.KEY_LEFT:h&&!S&&h(t,-n)}S||(e.stopPropagation(),e.preventDefault())},onClick:function(e){e.stopPropagation()},onFocus:H,onBlur:function(){M(!0),w(!1)},className:_("resize-handle",C.className,{"resize-handle-selected":!S})})};v.propTypes=g,v.defaultProps={columnResizeIncrement:10};t.default=(0,u.injectIntl)(v)},88846:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=l(n(47166)),u=l(n(45697)),d=l(n(47341)),s=l(n(4845)),c=l(n(98526)),f=n(65602),m=l(n(73077)),b=l(n(98194));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var h=i.default.bind(b.default),_={id:u.default.string.isRequired,tableId:u.default.string.isRequired,rowIndex:u.default.number,sectionId:u.default.string,height:u.default.string,cells:u.default.arrayOf(c.default),isSelected:u.default.bool,isTableStriped:u.default.bool,ariaLabel:u.default.string,hasRowSelection:u.default.bool,displayedColumns:u.default.arrayOf(f.columnShape),onCellSelect:u.default.func,rowHeaderIndex:u.default.number};function g(e){var t=e.rowIndex,n=e.height,l=e.hasRowSelection,a=e.id,i=e.tableId,u=e.sectionId,c=e.isSelected,f=e.isTableStriped,b=e.cells,p=e.ariaLabel,_=e.displayedColumns,g=e.rowHeaderIndex,v=e.onCellSelect,w=(0,o.useContext)(d.default),C=(0,o.useState)(!1),I=(0,r.default)(C,2),y=I[0],R=I[1],x=l?1:0;return o.default.createElement("tr",{"aria-rowindex":t,"data-row-id":a,className:h("row",{selected:c,selectable:l,"striped-table-row":f},w.className),style:{height:n},onMouseEnter:l?function(){R(!0)}:void 0,onMouseLeave:l?function(){R(!1)}:void 0},l&&o.default.createElement(m.default,{rowId:a,columnId:_[0].id,rowIndex:t,columnIndex:0,sectionId:u,tableId:i,isSelected:c,ariaLabel:p,onCellSelect:v}),b.map((function(e,r){var d=r+x,f=_[d].id;return o.default.createElement(s.default,{rowId:a,columnId:f,rowIndex:t,columnIndex:d,sectionId:u,tableId:i,key:"".concat(a,"_").concat(f),isSelected:!l&&e.isSelected,isMasked:e.isMasked,maskedLabel:e.maskedLabel,isSelectable:e.isSelectable,isRowHeader:d===g+x,isHighlighted:y||c,onCellSelect:v,height:n},e.content)})))}g.propTypes=_,g.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};t.default=o.default.memo(g)},73077:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=b(n(67294)),o=l(n(47166)),i=n(25387),u=l(n(45697)),d=l(n(47341)),s=b(n(63127)),c=l(n(4845)),f=l(n(10852));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}var p=o.default.bind(f.default),h={columnId:u.default.string.isRequired,tableId:u.default.string.isRequired,intl:u.default.shape({formatMessage:u.default.func}).isRequired,rowId:u.default.string.isRequired,rowIndex:u.default.number,columnIndex:u.default.number,sectionId:u.default.string,sectionIndex:u.default.number,isSelected:u.default.bool,ariaLabel:u.default.string,onCellSelect:u.default.func};function _(e){var t=e.rowId,n=e.columnId,l=e.tableId,a=e.rowIndex,o=e.columnIndex,i=e.sectionId,u=e.sectionIndex,f=e.isSelected,m=e.ariaLabel,b=e.onCellSelect,h=e.intl,_=(0,r.useContext)(d.default),g=(0,r.useContext)(s.default).role===s.GridConstants.GRID,v=h.formatMessage({id:"Terra.table.row-index"},{row:a+1}),w=r.default.createElement("input",{type:"checkbox","aria-label":m||v,readOnly:!0,tabIndex:g?-1:0,checked:f,className:p("input",_.className)});return r.default.createElement(c.default,{rowId:t,columnId:n,tableId:l,key:"".concat(t,"_").concat(n),rowIndex:a,columnIndex:o,sectionId:i,sectionIndex:u,isSelected:!1,onCellSelect:b},w)}_.propTypes=h;t.default=r.default.memo((0,i.injectIntl)(_))},89152:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(67294)),o=l(n(47166)),i=l(n(45697)),u=l(n(16772)),d=l(n(47341)),s=l(n(88846)),c=l(n(23902)),f=n(65602),m=l(n(85937));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}var p=o.default.bind(m.default),h={id:i.default.string.isRequired,tableId:i.default.string.isRequired,sectionRowIndex:i.default.number,isCollapsible:i.default.bool,isCollapsed:i.default.bool,isHidden:i.default.bool,text:i.default.string,rows:i.default.arrayOf(c.default),hasRowSelection:i.default.bool,displayedColumns:i.default.arrayOf(f.columnShape),onCellSelect:i.default.func,rowHeight:i.default.string,rowHeaderIndex:i.default.number,isTableStriped:i.default.bool,onSectionSelect:i.default.func};function _(e){var t=e.id,n=e.tableId,l=e.sectionRowIndex,a=e.isCollapsible,o=e.isCollapsed,i=e.isHidden,c=e.isTableStriped,f=e.text,m=e.hasRowSelection,b=e.displayedColumns,h=e.onCellSelect,_=e.rowHeight,g=e.rowHeaderIndex,v=e.rows,w=e.onSectionSelect,C=(0,r.useContext)(d.default);return r.default.createElement(r.default.Fragment,null,!i&&r.default.createElement("tr",{"aria-rowindex":l,className:p("header")},r.default.createElement("th",{id:"".concat(n,"-").concat(t),align:"left",colSpan:b.length,role:"columnheader",scope:"col"},r.default.createElement(u.default,{text:f,isOpen:!o,onClick:a&&w?function(e){w(t),e.stopPropagation()}:void 0}))),r.default.createElement("tbody",{className:p("section",{collapsed:o,collapsible:a},C.className)},v.map((function(e,a){return r.default.createElement(s.default,{rowIndex:l+(a+1),key:e.id,height:_,id:e.id,sectionId:i?void 0:t,tableId:n,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:m,displayedColumns:b,rowHeaderIndex:g,onCellSelect:h,isSelected:e.isSelected,isTableStriped:c})}))))}_.propTypes=h,_.defaultProps={isCollapsible:!1,isCollapsed:!1,isHidden:!1,rows:[]};t.default=r.default.memo(_)},27876:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)).default.createContext({pinnedColumnOffsets:[]});t.default=a},63127:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GridConstants=void 0;var a=l(n(67294)).default.createContext({role:"table",setCellAriaLiveMessage:void 0,tableRef:void 0,tableContainerRef:void 0});t.GridConstants={GRID:"grid"},t.default=a},412:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"To be properly accessible, the row header column should be a pinned column. please set pinned columns"}},9462:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(861));t.default=function(e){return(0,a.default)(e.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).visibility}))}},28255:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___G2b7R","orion-fusion-theme":"Table-module__orion-fusion-theme___iu+p1","table-container":"Table-module__table-container___g4Byi",table:"Table-module__table___wcFdg",headerless:"Table-module__headerless___eod6K"}},2981:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___JlIUL","orion-fusion-theme":"Cell-module__orion-fusion-theme___HW1Ki",cell:"Cell-module__cell___XID6c",selected:"Cell-module__selected___3WHxU",masked:"Cell-module__masked___yW7Cf",highlighted:"Cell-module__highlighted___4hj9T","cell-content":"Cell-module__cell-content___FhljD","no-data-cell":"Cell-module__no-data-cell___6er9D",pinned:"Cell-module__pinned___y2cJe",selectable:"Cell-module__selectable___BAIg5"}},59246:function(e,t,n){n.r(t),t.default={hidden:"ColumnHeader-module__hidden___I3b7-"}},23194:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___E4AJx","orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___LLv1A","column-header":"ColumnHeaderCell-module__column-header___oWlRh","header-container":"ColumnHeaderCell-module__header-container___Bvm2V","error-icon":"ColumnHeaderCell-module__error-icon___8bLJu",selectable:"ColumnHeaderCell-module__selectable___JFI4E",pinned:"ColumnHeaderCell-module__pinned___Qusyo","pinned-columns-divider":"ColumnHeaderCell-module__pinned-columns-divider___Kl7gb"}},68827:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___uvYEY","clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___MWieH","resize-handle":"ColumnResizeHandle-module__resize-handle___rckkL","resize-handle-selected":"ColumnResizeHandle-module__resize-handle-selected___-zzct"}},98194:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___LqsJk","orion-fusion-theme":"Row-module__orion-fusion-theme___uCwnV","striped-table-row":"Row-module__striped-table-row___0o1z0",row:"Row-module__row___kR-J-",selectable:"Row-module__selectable___r9jUT",selected:"Row-module__selected___ojIZP"}},10852:function(e,t,n){n.r(t),t.default={input:"RowSelectionCell-module__input___++BBM"}},85937:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Section-module__clinical-lowlight-theme___CmVbA","orion-fusion-theme":"Section-module__orion-fusion-theme___42iAO",section:"Section-module__section___Rf5QD",collapsed:"Section-module__collapsed___M5LcR",header:"Section-module__header___Q0nuu"}}}]);