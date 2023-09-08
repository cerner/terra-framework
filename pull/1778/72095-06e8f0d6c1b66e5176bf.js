"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72095],{72095:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(10434)),u=n(l(861)),o=n(l(38416)),i=n(l(27424)),d=I(l(67294)),c=n(l(45697)),s=l(25387),f=n(l(47166)),m=I(l(51051)),h=n(l(32018)),b=n(l(47341)),_=n(l(15555)),p=n(l(74994)),w=n(l(37356)),g=n(l(80998)),v=n(l(54962)),S=n(l(8672)),E=n(l(93127)),C=n(l(72103)),y=n(l(73365));function O(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(O=function(e){return e?l:t})(e)}function I(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=O(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,l&&l.set(e,n),n}function R(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}var x=f.default.bind(C.default),k={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(g.default.rowShape),pinnedColumns:c.default.arrayOf(g.default.columnShape),overflowColumns:c.default.arrayOf(g.default.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowHeaderIndex:E.default,onColumnResize:c.default.func,onCellSelect:c.default.func,onRowSelect:c.default.func,onRowSelectAll:c.default.func,onColumnSelect:c.default.func,onClearSelectedRows:c.default.func,onClearSelectedCells:c.default.func,onDisableSelectableRows:c.default.func,onEnableRowSelection:c.default.func,hasSelectableRows:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired};function M(e){var t=e.id,l=e.ariaLabelledBy,n=e.ariaLabel,a=e.rows,c=e.pinnedColumns,s=e.overflowColumns,f=e.onColumnResize,g=e.defaultColumnWidth,E=e.columnHeaderHeight,C=e.rowHeight,O=e.onColumnSelect,I=e.onCellSelect,k=e.onRowSelect,M=e.onRowSelectAll,D=e.onClearSelectedRows,N=e.onClearSelectedCells,P=e.onDisableSelectableRows,H=e.onEnableRowSelection,W=e.hasSelectableRows,j=e.intl,T=e.rowHeaderIndex;0===c.length&&console.warn(y.default.PINNED_COLUMNS_UNDEFINED);var L=(0,d.useState)([0]),A=(0,i.default)(L,2),K=A[0],q=A[1],z=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?R(Object(l),!0).forEach((function(t){(0,o.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):R(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},e);return t.width=e.width||g,t.minimumWidth=e.minimumWidth||60,t.maximumWidth=e.maximumWidth||300,t},G=(W?[v.default.ROW_SELECTION_COLUMN]:[]).concat(c).concat(s),B=(0,d.useState)(G.map((function(e){return z(e)}))),Y=(0,i.default)(B,2),F=Y[0],U=Y[1],X=(0,d.useState)(0),Q=(0,i.default)(X,2),Z=Q[0],V=Q[1],J=(0,d.useState)(null),$=(0,i.default)(J,2),ee=$[0],te=$[1],le=(0,d.useRef)(0),ne=(0,d.useRef)(200),ae=(0,d.useRef)(0),re=(0,d.useRef)(),ue=(0,d.useRef)(),oe=(0,d.useRef)(!1),ie=(0,d.useRef)(!0),de=(0,d.useRef)([]),ce=(0,d.useState)(0),se=(0,i.default)(ce,2),fe=se[0],me=se[1],he=(0,d.useState)(0),be=(0,i.default)(he,2),_e=be[0],pe=be[1],we=(0,d.useState)(null),ge=(0,i.default)(we,2),ve=ge[0],Se=ge[1],Ee=(0,d.useState)(null),Ce=(0,i.default)(Ee,2),ye=Ce[0],Oe=Ce[1],Ie=(0,d.useState)(null),Re=(0,i.default)(Ie,2),xe=Re[0],ke=Re[1],Me=(0,d.useRef)(!1),De=(0,d.useRef)({start:null,end:null}),Ne=(0,d.useMemo)((function(){return{pinnedColumnOffsets:K,setCellAriaLiveMessage:ke}}),[K]),Pe=(0,d.useContext)(b.default),He=function(e,t,l){ke(null),me(e),pe(t);var n,a=re.current.rows[e].cells[t];if(n=t,W&&n<G.length&&G[n].id===v.default.ROW_SELECTION_COLUMN.id&&a.getElementsByTagName("input").length>0){var r=a.getElementsByTagName("input");a=(0,i.default)(r,1)[0]}l&&a.focus()},We=(0,d.useCallback)((function(e){e&&(re.current=e,new h.default((function(){V(re.current.offsetHeight-1)})).observe(e))}),[]);(0,d.useEffect)((function(){var e={row:fe,col:_e+(W?1:-1)};W&&0===fe&&0===_e?e={row:1,col:0}:W||(0===_e&&(e={row:fe,col:0}),de.current=[]),He(e.row,e.col,!1),W||(De.current={}),oe.current?(Oe(j.formatMessage({id:W?"Terra.worklist-data-grid.row-selection-mode-enabled":"Terra.worklist-data-grid.row-selection-mode-disabled"})),U(G.map((function(e){return z(e)})))):oe.current=!0}),[W]),(0,d.useEffect)((function(){U(G.map((function(e){return z(e)})))}),[c,s]),(0,d.useEffect)((function(){var e,t=[],l=0;if(W&&0===c.length)return e=0,t.push(l),void q(t);c.length>0&&(t.push(l),e=W?c.length:c.length-1,F.slice(0,e).map((function(e){l+=e.width,t.push(l)}))),q(t)}),[F]),(0,d.useEffect)((function(){var e=(0,u.default)(de.current);if(de.current=a.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===de.current.length)Se(j.formatMessage({id:"Terra.worklist-data-grid.all-rows-unselected"}));else if(de.current.length===a.length)Se(j.formatMessage({id:"Terra.worklist-data-grid.all-rows-selected"}));else{var t=de.current.filter((function(t){return!e.includes(t)})),l=e.filter((function(e){return!de.current.includes(e)})),n="";if(1===t.length){var r=a.findIndex((function(e){return e.id===t[0]})),o=a[r].ariaLabel||r+1;n=j.formatMessage({id:"Terra.worklist-data-grid.row-selection-template"},{row:o})}else t.length>1&&(n=j.formatMessage({id:"Terra.worklist-data-grid.multiple-rows-selected"},{rowCount:t.length}));if(1===l.length){var i=a.findIndex((function(e){return e.id===l[0]})),d=a[i].ariaLabel||i+1;n+=j.formatMessage({id:"Terra.worklist-data-grid.row-selection-cleared-template"},{row:d})}else l.length>1&&(n+=j.formatMessage({id:"Terra.worklist-data-grid.multiple-rows-unselected"},{rowCount:l.length}));n&&Se(n)}}),[j,a]);var je=function(){De.current={},a.find((function(e){return!0===e.isSelected}))?D&&D():P&&P()},Te=(0,d.useCallback)((function(e){var t=[];return De.current.end?(De.current.start>De.current.end?e>De.current.end&&(t=a.slice(De.current.end-1,Math.min(e,De.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):De.current.start<De.current.end&&e<De.current.end&&(t=a.slice(Math.max(De.current.start,e),De.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[a]),Le=(0,d.useCallback)((function(e){if(W||H(),k){var t=Math.min(De.current.start,e),l=Math.max(De.current.start,e),n=a.slice(t-1,l).map((function(e){return{id:e.id,selected:!0}}));n=n.concat(Te(e)),k(n),De.current.end=e}}),[W,H,k,a,Te]),Ae=(0,d.useCallback)((function(e,t){var l=[];a[t-1].isSelected?(t===De.current.start&&(De.current={}),l.push({id:e,selected:!1})):(De.current={start:t,end:null},l.push({id:e,selected:!0})),k&&k(l)}),[k,a]),Ke=(0,d.useCallback)((function(e,t){me(t.row),pe(t.col),O&&O(e)}),[O]),qe=(0,d.useCallback)((function(e){me(e.rowIndex),pe(e.columnIndex),e.isCellSelectable&&I&&I(e.rowId,e.columnId)}),[I]),ze=(0,d.useCallback)((function(e){me(e.rowIndex),pe(e.columnIndex),W?e.isShiftPressed&&De.current.start?Le(e.rowIndex):Ae(e.rowId,e.rowIndex):e.isShiftPressed&&(De.current={start:e.rowIndex,end:null},Le(e.rowIndex))}),[W,Le,Ae]),Ge=(0,d.useCallback)((function(e,t,l){ae.current=re.current.offsetWidth,le.current=e.pageX,ne.current=l,te(t)}),[]),Be=function(){f&&f(F[ee].id,F[ee].width),te(null)};return d.default.createElement("div",{ref:ue,className:x("worklist-data-grid-container")},d.default.createElement("table",(0,r.default)({ref:We,id:t,role:"grid","aria-labelledby":l,"aria-label":n,className:x("worklist-data-grid",Pe.className),onKeyDown:function(e){var l={row:fe,col:_e},n=l.row,r=l.col,o=!1;switch(e.keyCode){case m.KEY_UP:e.shiftKey&&(o=!0),n-=1;break;case m.KEY_DOWN:e.shiftKey&&(o=!0),n+=1;break;case m.KEY_LEFT:e.metaKey?(r=0,e.ctrlKey&&(n=v.default.FIRST_NON_HEADER_ROW)):r-=1;break;case m.KEY_RIGHT:e.metaKey?(r=G.length-1,e.ctrlKey&&(n=a.length)):r+=1;break;case m.KEY_HOME:r=0,e.ctrlKey&&(n=v.default.FIRST_NON_HEADER_ROW);break;case m.KEY_END:r=G.length-1,e.ctrlKey&&(n=a.length);break;case m.KEY_ESCAPE:return W?je():(N&&N(),me(l.row),pe(l.col)),void e.preventDefault();case m.KEY_A:return void(W&&(e.ctrlKey||e.metaKey)&&(M&&M(),e.preventDefault()));case m.KEY_TAB:return function(e){var l=(0,u.default)(document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")||e.id!==t&&re.current.contains(e))})),n=l.indexOf(re.current);if(n>-1){var a=l[n+(e?1:-1)];a&&a.focus()}}(!e.shiftKey),void e.preventDefault();default:return}o&&(n>a.length?n=a.length:n<=0&&(n=1),Me.current||(Me.current=!0,De.current={start:l.row,end:null}),Le(n)),n>a.length||r>=G.length||r<0||n<0||function(e,t){var l=ue.current.getBoundingClientRect(),n=re.current.rows[0].cells[t.col].getBoundingClientRect(),a=re.current.rows[t.row].cells[t.col].getBoundingClientRect();if(a.right>l.right)ue.current.scrollBy(a.right-l.right,0);else{var r=0;if(K.length>0){if(t.col>K.length-1){var u=re.current.rows[t.row].cells[K.length-1].getBoundingClientRect();r=a.left-u.right}}else r=a.left-l.left;r<0&&ue.current.scrollBy(r,0)}var o=a.top-n.bottom;o<0&&ue.current.scrollBy(0,o),He(t.row,t.col,!0)}(0,{row:n,col:r}),e.preventDefault()},onKeyUp:function(e){if(e.keyCode===m.KEY_SHIFT)Me.current=!1},onFocus:function(e){e.currentTarget.contains(e.relatedTarget)||ie.current&&He(fe,_e,!0),ie.current=!0},onMouseDown:function(){ie.current=!1},tabIndex:0},null!=ee&&{onMouseUp:Be,onMouseMove:function(e){if(null!=ee){var t=e.pageX-le.current,l=F[ee],n=l.minimumWidth,a=l.maximumWidth,r=Math.min(Math.max(ne.current+t,n),a),o=(0,u.default)(F);o[ee].width=r,U(o),re.current.style.width="".concat(ae+(r-ne.current),"px")}},onMouseLeave:Be}),d.default.createElement(S.default.Provider,{value:Ne},d.default.createElement(p.default,{columns:F,headerHeight:E,tableHeight:Z,onColumnSelect:Ke,onResizeMouseDown:Ge}),d.default.createElement("tbody",null,a.map((function(e,t){return function(e,t){return d.default.createElement(w.default,{rowIndex:t,key:e.id,height:C,id:e.id,isSelected:e.isSelected,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:W,displayedColumns:G,rowHeaderIndex:T,onCellSelect:qe,onRowSelect:ze})}(e,t+1)}))))),d.default.createElement(_.default,{"aria-live":"polite",text:ye}),d.default.createElement(_.default,{"aria-live":"polite",text:ve}),d.default.createElement(_.default,{"aria-live":"polite","aria-atomic":"true",text:xe}))}M.propTypes=k,M.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[]};var D=(0,s.injectIntl)(M);t.default=D},80998:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(55511)),r=n(l(33902)),u=l(9504),o={cellShape:r.default,columnShape:u.columnShape,rowShape:a.default,SortIndicators:u.SortIndicators};t.default=o},33902:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(45697)),r=a.default.shape({content:a.default.node,isMasked:a.default.bool,isSelectable:a.default.bool,isSelected:a.default.bool});t.default=r},9504:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var a=n(l(45697)),r={ASCENDING:"ascending",DESCENDING:"descending"};t.SortIndicators=r;var u=a.default.shape({id:a.default.string.isRequired,displayName:a.default.string,hasError:a.default.bool,isResizable:a.default.bool,isSelectable:a.default.bool,minimumWidth:a.default.number,maximumWidth:a.default.number,width:a.default.number,sortIndicator:a.default.oneOf(Object.values(r))});t.columnShape=u},55511:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(45697)),r=n(l(33902)),u=a.default.shape({id:a.default.string.isRequired,cells:a.default.arrayOf(r.default),isSelected:a.default.bool,ariaLabel:a.default.string});t.default=u},93127:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(73365)),r=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(a.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(a.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(a.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)};t.default=r},830:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(10434)),u=n(l(861)),o=n(l(27424)),i=g(l(67294)),d=n(l(45697)),c=l(25387),s=g(l(51051)),f=n(l(47166)),m=n(l(15555)),h=n(l(47341)),b=n(l(54483)),_=n(l(64710)),p=n(l(8672));function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(w=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=w(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,l&&l.set(e,n),n}var v=f.default.bind(_.default),S={rowId:d.default.string.isRequired,columnId:d.default.string.isRequired,rowIndex:d.default.number,columnIndex:d.default.number,children:d.default.node,isMasked:d.default.bool,isSelectable:d.default.bool,isSelected:d.default.bool,ariaLabel:d.default.string,isRowHeader:d.default.bool,isHighlighted:d.default.bool,onCellSelect:d.default.func,height:d.default.string,intl:d.default.shape({formatMessage:d.default.func}).isRequired};function E(e){var t=e.rowId,l=e.columnId,n=e.rowIndex,a=e.columnIndex,d=e.ariaLabel,c=e.isMasked,f=e.isRowHeader,_=e.isSelectable,w=e.isSelected,g=e.isHighlighted,S=e.children,E=e.onCellSelect,C=e.height,y=e.intl,O=(0,i.useRef)(),I=(0,i.useState)(!1),R=(0,o.default)(I,2),x=R[0],k=R[1],M=(0,i.useState)(!1),D=(0,o.default)(M,2),N=D[0],P=D[1],H=(0,i.useContext)(h.default),W=(0,i.useContext)(p.default),j=function(){return(0,u.default)(O.current.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")})).length>0};(0,i.useEffect)((function(){P(j())}),[]);var T,L=function(){k(!1),W.setCellAriaLiveMessage(y.formatMessage({id:"Terra.worklist-data-grid.resume-navigation"}))};T=c?i.default.createElement("span",{className:v("no-data-cell",H.className)},y.formatMessage({id:"Terra.worklistDataGrid.maskedCell"})):S||i.default.createElement("span",{className:v("no-data-cell",H.className)},y.formatMessage({id:"Terra.worklistDataGrid.blank"}));var A=v("worklist-data-grid-cell",{masked:c,pinned:a<W.pinnedColumnOffsets.length,selectable:_&&!c,selected:w&&!c,highlighted:g,blank:!S},H.className),K=a<W.pinnedColumnOffsets.length?W.pinnedColumnOffsets[a]:null,q=f?"th":"td";return i.default.createElement(q,(0,r.default)({ref:O,"aria-selected":w,"aria-label":d,tabIndex:-1,className:A},f&&{scope:"row",role:"rowheader"},{onMouseDown:E?function(e){x||E({rowId:t,columnId:l,rowIndex:n,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!c&&_})}:void 0,onKeyDown:function(e){var r=e.keyCode;if(x){if(r===s.KEY_ESCAPE)L();e.stopPropagation()}else switch(r){case s.KEY_RETURN:j()&&(k(!0),W.setCellAriaLiveMessage(y.formatMessage({id:"Terra.worklist-data-grid.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault());break;case s.KEY_SPACE:E&&E({rowId:t,columnId:l,rowIndex:n,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!c&&_}),e.preventDefault()}},style:{left:K}}),i.default.createElement(b.default,{active:x,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,escapeDeactivates:!1,onDeactivate:L}},i.default.createElement("div",{className:v("cell-content",H.className),style:{height:C}},T)),N&&i.default.createElement(m.default,{text:y.formatMessage({id:"Terra.worklist-data-grid.cell-interactable"})}))}E.propTypes=S,E.defaultProps={isRowHeader:!1,isSelected:!1,isSelectable:!0,isMasked:!1};var C=i.default.memo((0,c.injectIntl)(E));t.default=C},74994:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),r=n(l(45697)),u=n(l(80998)),o=n(l(14675)),i={columns:r.default.arrayOf(u.default.columnShape).isRequired,headerHeight:r.default.string.isRequired,tableHeight:r.default.number,onColumnSelect:r.default.func,onResizeMouseDown:r.default.func},d=function(e){var t=e.columns,l=e.headerHeight,n=e.tableHeight,r=e.onColumnSelect,u=e.onResizeMouseDown;return a.default.createElement("thead",null,a.default.createElement("tr",{className:"column-header-row",height:l},t.map((function(e,t){return function(e,t){return a.default.createElement(o.default,{key:e.id,id:e.id,rowIndex:0,columnIndex:t,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:l,isResizable:e.isResizable,isSelectable:e.isSelectable,tableHeight:n,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:r,onResizeMouseDown:u})}(e,t)}))))};d.propTypes=i;var c=a.default.memo(d);t.default=c},14675:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(l(67294)),u=n(l(45697)),o=l(25387),i=g(l(51051)),d=n(l(47166)),c=n(l(47341)),s=n(l(85906)),f=n(l(11699)),m=n(l(94520)),h=n(l(94955)),b=n(l(80998)),_=n(l(8672)),p=n(l(25609));function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(w=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=w(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}return n.default=e,l&&l.set(e,n),n}var v=d.default.bind(p.default),S={id:u.default.string.isRequired,displayName:u.default.string,sortIndicator:u.default.oneOf(Object.values(b.default.SortIndicators)),hasError:u.default.bool,minimumWidth:u.default.number,maximumWidth:u.default.number,isSelectable:u.default.bool,isResizable:u.default.bool,tableHeight:u.default.number,width:u.default.number.isRequired,headerHeight:u.default.string.isRequired,rowIndex:u.default.number,columnIndex:u.default.number,onColumnSelect:u.default.func,onResizeMouseDown:u.default.func,intl:u.default.shape({formatMessage:u.default.func})},E=function(e){var t,l=e.id,n=e.displayName,a=e.sortIndicator,u=e.hasError,o=e.isSelectable,d=e.isResizable,p=e.tableHeight,w=e.width,g=e.minimumWidth,S=e.maximumWidth,E=e.headerHeight,C=e.onColumnSelect,y=e.intl,O=e.rowIndex,I=e.columnIndex,R=e.onResizeMouseDown,x=(0,r.useContext)(_.default),k=(0,r.useRef)(),M=(0,r.useCallback)((function(e){k.current=e}),[]),D=(0,r.useCallback)((function(e){R&&R(e,I,k.current.offsetWidth)}),[I,R]),N=u&&r.default.createElement(m.default,{a11yLabel:y.formatMessage({id:"Terra.worklistDataGrid.columnError"}),className:v("error-icon")});a===b.default.SortIndicators.ASCENDING?t=r.default.createElement(s.default,null):a===b.default.SortIndicators.DESCENDING&&(t=r.default.createElement(f.default,null));var P=(0,r.useContext)(c.default),H=I<x.pinnedColumnOffsets.length?x.pinnedColumnOffsets[I]:null,W=w-1,j=I===x.pinnedColumnOffsets.length-1?r.default.createElement("div",{className:v("pinned-columns-divider"),style:{height:p,left:W}}):null;return r.default.createElement("th",{ref:M,key:l,className:v("column-header",P.className,{selectable:o,pinned:I<x.pinnedColumnOffsets.length}),tabIndex:-1,role:"columnheader",scope:"col","aria-sort":a,onMouseDown:o&&C?function(e){C(l,{row:O,col:I}),e.stopPropagation()}:void 0,onKeyDown:o&&C?function(e){switch(e.keyCode){case i.KEY_SPACE:case i.KEY_RETURN:C(l,{row:O,col:I}),e.stopPropagation(),e.preventDefault()}}:void 0,style:{width:"".concat(w,"px"),height:E,left:H}},r.default.createElement("div",{className:v("header-container"),role:n&&"button"},N,r.default.createElement("span",null,n),t),d&&r.default.createElement(h.default,{columnIndex:I,columnText:n,columnWidth:w,height:p,minimumWidth:g,maximumWidth:S,onResizeMouseDown:D}),j)};E.propTypes=S,E.defaultProps={hasError:!1,isSelectable:!0,isResizable:!0};var C=r.default.memo((0,o.injectIntl)(E));t.default=C},94955:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=f(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}n.default=e,l&&l.set(e,n);return n}(l(67294)),o=n(l(45697)),i=l(25387),d=n(l(47166)),c=n(l(47341)),s=n(l(12638));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(f=function(e){return e?l:t})(e)}var m=d.default.bind(s.default),h={columnText:o.default.string.isRequired,columnWidth:o.default.number.isRequired,height:o.default.number.isRequired,minimumWidth:o.default.number.isRequired,maximumWidth:o.default.number.isRequired,onResizeMouseDown:o.default.func.isRequired,intl:o.default.shape({formatMessage:o.default.func}).isRequired},b=function(e){var t=e.columnText,l=e.columnWidth,n=e.height,a=e.minimumWidth,o=e.maximumWidth,i=e.onResizeMouseDown,d=e.intl,s=(0,u.useState)(!1),f=(0,r.default)(s,2),h=f[0],b=f[1],_=(0,u.useContext)(c.default),p=(0,u.useRef)(),w=(0,u.useCallback)((function(e){p.current=e}),[]);return u.default.createElement("div",{ref:w,draggable:!0,role:"slider",tabIndex:-1,"aria-hidden":!h,"aria-valuemin":a,"aria-valuenow":l,"aria-valuemax":o,"aria-label":t,"aria-valuetext":d.formatMessage({id:"Terra.worklist-data-grid.resizeHandleValueText"},{columnWidth:l}),style:{height:"".concat(n,"px")},onMouseDown:function(e){p.current.focus(),i(e),e.stopPropagation(),e.preventDefault()},onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},className:m("resize-handle",_.className)})};b.propTypes=h;var _=(0,i.injectIntl)(b);t.default=_},37356:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=b(t);if(l&&l.has(e))return l.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=r?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}n.default=e,l&&l.set(e,n);return n}(l(67294)),o=n(l(45697)),i=n(l(47341)),d=n(l(47166)),c=n(l(51713)),s=n(l(81761)),f=n(l(830)),m=n(l(33902)),h=n(l(80998));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(b=function(e){return e?l:t})(e)}var _=d.default.bind(c.default),p={id:o.default.string.isRequired,rowIndex:o.default.number,height:o.default.string,cells:o.default.arrayOf(m.default),isSelected:o.default.bool,ariaLabel:o.default.string,hasRowSelection:o.default.bool,onRowSelect:o.default.func,displayedColumns:o.default.arrayOf(h.default.columnShape),onCellSelect:o.default.func,rowHeaderIndex:o.default.number};function w(e){var t=e.rowIndex,l=e.height,n=e.hasRowSelection,a=e.id,o=e.isSelected,d=e.cells,c=e.ariaLabel,m=e.displayedColumns,h=e.rowHeaderIndex,b=e.onRowSelect,p=e.onCellSelect,w=(0,u.useContext)(i.default),g=(0,u.useState)(!1),v=(0,r.default)(g,2),S=v[0],E=v[1],C=n?1:0,y=(0,u.useCallback)((function(e){n||e.isShiftPressed?b&&b(e):p&&p(e)}),[n,p,b]),O=n?u.default.createElement(s.default,{rowId:a,columnId:m[0].id,rowIndex:t,columnIndex:0,isSelected:o,ariaLabel:c,onCellSelect:y}):null;return u.default.createElement("tr",{className:_("worklist-data-grid-row",{selected:o,selectable:n},w.className),style:{height:l},onMouseEnter:n?function(){E(!0)}:null,onMouseLeave:n?function(){E(!1)}:null},O,d.map((function(e,r){return function(e,t,a,r){var i=m[t].id,d=t===h+C;return u.default.createElement(f.default,{rowId:r,columnId:i,rowIndex:e,columnIndex:t,key:"".concat(r,"_").concat(i),isSelected:!n&&a.isSelected,isMasked:a.isMasked,isSelectable:a.isSelectable,isRowHeader:d,isHighlighted:S||o,onCellSelect:y,height:l},a.content)}(t,r+C,e,a)})))}w.propTypes=p,w.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};var g=u.default.memo(w);t.default=g},81761:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),r=n(l(45697)),u=l(25387),o=n(l(830)),i={rowId:r.default.string.isRequired,columnId:r.default.string.isRequired,rowIndex:r.default.number,columnIndex:r.default.number,isSelected:r.default.bool,ariaLabel:r.default.string,onCellSelect:r.default.func,intl:r.default.shape({formatMessage:r.default.func}).isRequired};function d(e){var t=e.rowId,l=e.columnId,n=e.rowIndex,r=e.columnIndex,u=e.isSelected,i=e.ariaLabel,d=e.onCellSelect,c=e.intl.formatMessage({id:"Terra.worklist-data-grid.row-index"},{row:n}),s=a.default.createElement("input",{type:"checkbox","aria-label":i||c,readOnly:!0,tabIndex:-1,checked:u});return a.default.createElement(o.default,{rowId:t,columnId:l,key:"".concat(t,"_").concat(l),rowIndex:n,columnIndex:r,isSelected:!1,onCellSelect:d},s)}d.propTypes=i;var c=a.default.memo((0,u.injectIntl)(d));t.default=c},8672:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)).default.createContext({pinnedColumnOffsets:[]});t.default=a},54962:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1},FIRST_NON_HEADER_ROW:1};t.default=l},73365:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"to be properly accessible, the row header column should be a pinned column. please set pinned columns"},n=l;t.default=n},72103:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___t0nx3","clinical-lowlight-theme":"WorklistDataGrid-module__clinical-lowlight-theme___BLIqI","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___aaS2w","worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___yhmS9"}},64710:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Cell-module__orion-fusion-theme___NWHS+","clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___BlGTz","worklist-data-grid-cell":"Cell-module__worklist-data-grid-cell___ERjGQ",selected:"Cell-module__selected___L4qWU",masked:"Cell-module__masked___NrbgT",highlighted:"Cell-module__highlighted___YtxBb","cell-content":"Cell-module__cell-content___q4GT1","no-data-cell":"Cell-module__no-data-cell___B67Nl",pinned:"Cell-module__pinned___0bEYC",selectable:"Cell-module__selectable___RGht0"}},25609:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___+mPW0","clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___ZyF6A","column-header":"ColumnHeaderCell-module__column-header___oVf7Q","header-container":"ColumnHeaderCell-module__header-container___A1dFv","error-icon":"ColumnHeaderCell-module__error-icon___kES53",selectable:"ColumnHeaderCell-module__selectable___CmoIF",pinned:"ColumnHeaderCell-module__pinned___Qip4n","pinned-columns-divider":"ColumnHeaderCell-module__pinned-columns-divider___maaPH"}},12638:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___sft4v","clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___3DSst","resize-handle":"ColumnResizeHandle-module__resize-handle___SB2vj"}},51713:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Row-module__orion-fusion-theme___nu9Mx","clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___ggHC1","worklist-data-grid-row":"Row-module__worklist-data-grid-row___a-6e7",selectable:"Row-module__selectable___yGB3p",selected:"Row-module__selected___2u32k"}}}]);