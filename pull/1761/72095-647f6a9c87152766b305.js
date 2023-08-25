"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72095],{72095:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(10434)),o=a(l(861)),i=a(l(38416)),d=a(l(27424)),u=C(l(67294)),c=a(l(45697)),s=l(25387),f=a(l(47166)),m=C(l(51051)),w=a(l(32018)),h=a(l(47341)),p=a(l(15555)),b=a(l(74994)),_=a(l(37356)),g=a(l(80998)),v=a(l(54962)),S=a(l(8672)),R=a(l(93127)),y=a(l(72103)),E=a(l(73365));function I(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(I=function(e){return e?l:t})(e)}function C(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=I(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}function O(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}var x=f.default.bind(y.default),k={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(g.default.rowShape),pinnedColumns:c.default.arrayOf(g.default.columnShape),overflowColumns:c.default.arrayOf(g.default.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowHeaderIndex:R.default,onColumnResize:c.default.func,onCellSelect:c.default.func,onRowSelect:c.default.func,onRowSelectAll:c.default.func,onColumnSelect:c.default.func,onClearSelectedRows:c.default.func,onClearSelectedCells:c.default.func,onDisableSelectableRows:c.default.func,onEnableRowSelection:c.default.func,hasSelectableRows:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired};function M(e){var t=e.id,l=e.ariaLabelledBy,a=e.ariaLabel,n=e.rows,c=e.pinnedColumns,s=e.overflowColumns,f=e.onColumnResize,g=e.defaultColumnWidth,R=e.columnHeaderHeight,y=e.rowHeight,I=e.onColumnSelect,C=e.onCellSelect,k=e.onRowSelect,M=e.onRowSelectAll,D=e.onClearSelectedRows,N=e.onClearSelectedCells,P=e.onDisableSelectableRows,H=e.onEnableRowSelection,W=e.hasSelectableRows,T=e.intl,j=e.rowHeaderIndex;0===c.length&&console.warn(E.default.PINNED_COLUMNS_UNDEFINED);var L=(0,u.useState)([0]),K=(0,d.default)(L,2),A=K[0],q=K[1],U=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?O(Object(l),!0).forEach((function(t){(0,i.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):O(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},e);return t.width=e.width||g,t.minimumWidth=e.minimumWidth||60,t.maximumWidth=e.maximumWidth||300,t},z=(W?[v.default.ROW_SELECTION_COLUMN]:[]).concat(c).concat(s),G=(0,u.useState)(z.map((function(e){return U(e)}))),F=(0,d.default)(G,2),B=F[0],Y=F[1],X=(0,u.useState)(0),Q=(0,d.default)(X,2),Z=Q[0],V=Q[1],J=(0,u.useState)(null),$=(0,d.default)(J,2),ee=$[0],te=$[1],le=(0,u.useRef)(0),ae=(0,u.useRef)(200),ne=(0,u.useRef)(0),re=(0,u.useRef)(),oe=(0,u.useRef)(!0),ie=(0,u.useState)(0),de=(0,d.default)(ie,2),ue=de[0],ce=de[1],se=(0,u.useState)(0),fe=(0,d.default)(se,2),me=fe[0],we=fe[1],he=(0,u.useState)(null),pe=(0,d.default)(he,2),be=pe[0],_e=pe[1],ge=(0,u.useState)(null),ve=(0,d.default)(ge,2),Se=ve[0],Re=ve[1],ye=(0,u.useRef)({isRowSelectionModeToggledByGrid:!1}),Ee=(0,u.useMemo)((function(){return{pinnedColumnOffsets:A,setCellAriaLiveMessage:Re}}),[A]),Ie=(0,u.useContext)(h.default),Ce=function(e,t,l){Re(null),ce(e),we(t);var a,n=re.current.rows[e].cells[t];if(a=t,W&&a<z.length&&z[a].id===v.default.ROW_SELECTION_COLUMN.id&&n.getElementsByTagName("input").length>0){var r=n.getElementsByTagName("input");n=(0,d.default)(r,1)[0]}l&&n.focus()},Oe=(0,u.useCallback)((function(e){e&&(re.current=e,new w.default((function(){V(re.current.offsetHeight-1)})).observe(e))}),[]);(0,u.useEffect)((function(){var e={row:ue,col:me+(W?1:-1)};W&&0===ue&&0===me?e={row:1,col:0}:W||0!==me||(e={row:ue,col:0}),Ce(e.row,e.col,!1),W||(ye.current.rangeUsingFocusedRow=null,ye.current.rangeUsingLastIndividuallySelectedRow=null),ye.current.isRowSelectionModeToggledByGrid||_e(T.formatMessage({id:W?"Terra.worklist-data-grid.row-selection-mode-enabled":"Terra.worklist-data-grid.row-selection-mode-disabled"})),ye.current.isRowSelectionModeToggledByGrid=!1,Y(z.map((function(e){return U(e)})))}),[W]),(0,u.useEffect)((function(){Y(z.map((function(e){return U(e)})))}),[c,s]),(0,u.useEffect)((function(){var e,t=[],l=0;if(W&&0===c.length)return e=0,t.push(l),void q(t);c.length>0&&(t.push(l),e=W?c.length:c.length-1,B.slice(0,e).map((function(e){l+=e.width,t.push(l)}))),q(t)}),[B]);var xe=function(){ye.current.rangeUsingLastIndividuallySelectedRow=null,n.find((function(e){return!0===e.isSelected}))?(_e(T.formatMessage({id:"Terra.worklist-data-grid.all-rows-unselected"})),D&&D()):P&&(ye.current.rangeUsingFocusedRow=null,_e(T.formatMessage({id:"Terra.worklist-data-grid.row-selection-mode-disabled"})),P())},ke=(0,u.useCallback)((function(e,t){if(k&&t){W||H();var l=Math.min(t.anchorRow,e),a=Math.max(t.anchorRow,e),r=n.slice(l-1,a).map((function(e){return e.id})),o=[];t.anchorRow>t.previousSelectionEndRow?e>t.previousSelectionEndRow&&(o=n.slice(t.previousSelectionEndRow-1,Math.min(e,t.anchorRow)).map((function(e){return e.id}))):t.anchorRow<t.previousSelectionEndRow&&e<t.previousSelectionEndRow&&(o=n.slice(Math.max(t.anchorRow,e),t.previousSelectionEndRow).map((function(e){return e.id})));var i=T.formatMessage({id:W?"Terra.worklist-data-grid.row-selection-multiple-rows-selected":"Terra.worklist-data-grid.row-selection-mode-enabled"});i+=" ".concat(T.formatMessage({id:1===r.length?"Terra.worklist-data-grid.row-selection-template":"Terra.worklist-data-grid.row-selection-selected-rows-range"},{row:t.anchorRow,endRow:e})),_e(i),k(r,o)}}),[W,T,H,k,n]),Me=(0,u.useCallback)((function(e,t){var l=[],a=[];ye.current.rangeUsingLastIndividuallySelectedRow={anchorRow:t};var r=n[t-1].ariaLabel||t+1;n[t-1].isSelected?(_e(T.formatMessage({id:"Terra.worklist-data-grid.row-selection-cleared-template"},{row:r})),a.push(e)):(_e(T.formatMessage({id:"Terra.worklist-data-grid.row-selection-template"},{row:r})),l.push(e)),k&&k(l,a)}),[T,k,n]),De=(0,u.useCallback)((function(e,t){W||_e(T.formatMessage({id:"Terra.worklist-data-grid.cell-selection-cleared"})),ce(t.row),we(t.col),I&&I(e)}),[W,T,I]),Ne=(0,u.useCallback)((function(e){!W&&e.isCellSelectable&&_e(T.formatMessage({id:"Terra.worklist-data-grid.cell-selection-template"},{row:e.rowIndex+1,column:e.columnIndex+1})),ce(e.rowIndex),we(e.columnIndex),e.isCellSelectable&&C&&C(e.rowId,e.columnId)}),[W,T,C]),Pe=(0,u.useCallback)((function(e){var t;ce(e.rowIndex),we(e.columnIndex);var l=e.selectedByKeyboard?ye.current.rangeUsingLastIndividuallySelectedRow:null==ye||null===(t=ye.current)||void 0===t?void 0:t.rangeUsingFocusedRow;e.multiSelect?W?null!=l&&l.anchorRow?(ke(e.rowIndex,l),l.previousSelectionEndRow=e.rowIndex):Me(e.rowId,e.rowIndex):e.selectedByKeyboard?(ye.current.isRowSelectionModeToggledByGrid=!W,ye.current.rangeUsingLastIndividuallySelectedRow={anchorRow:e.rowIndex},ke(e.rowIndex,ye.current.rangeUsingLastIndividuallySelectedRow),ye.current.rangeUsingLastIndividuallySelectedRow.previousSelectionEndRow=e.rowIndex):(ye.current.isRowSelectionModeToggledByGrid=!W,ke(e.rowIndex,l),l.previousSelectionEndRow=e.rowIndex):W&&Me(e.rowId,e.rowIndex)}),[W,ke,Me]),He=(0,u.useCallback)((function(e,t,l){ne.current=re.current.offsetWidth,le.current=e.pageX,ae.current=l,te(t)}),[]),We=function(){f&&f(B[ee].id,B[ee].width),te(null)};return u.default.createElement("div",{className:x("worklist-data-grid-container")},u.default.createElement("table",(0,r.default)({ref:Oe,id:t,role:"grid","aria-labelledby":l,"aria-label":a,className:x("worklist-data-grid",Ie.className),onKeyDown:function(e){var l,a,r={row:ue,col:me},i=r.row,d=r.col,u=!1;switch(e.keyCode){case m.KEY_UP:e.shiftKey&&(u=!0),i-=1;break;case m.KEY_DOWN:e.shiftKey&&(u=!0),i+=1;break;case m.KEY_SHIFT:0===r.row||null!==(l=ye.current)&&void 0!==l&&null!==(l=l.rangeUsingFocusedRow)&&void 0!==l&&l.anchorRow||(ye.current.rangeUsingFocusedRow={anchorRow:r.row,previousSelectionEndRow:r.row});break;case m.KEY_LEFT:e.metaKey?(d=0,e.ctrlKey&&(i=v.default.FIRST_NON_HEADER_ROW)):d-=1;break;case m.KEY_RIGHT:e.metaKey?(d=z.length-1,e.ctrlKey&&(i=n.length)):d+=1;break;case m.KEY_HOME:d=0,e.ctrlKey&&(i=v.default.FIRST_NON_HEADER_ROW);break;case m.KEY_END:d=z.length-1,e.ctrlKey&&(i=n.length);break;case m.KEY_ESCAPE:return W?xe():(W||_e(T.formatMessage({id:"Terra.worklist-data-grid.cell-selection-cleared"})),N&&N(),ce(r.row),we(r.col)),void e.preventDefault();case m.KEY_A:return void(W&&(e.ctrlKey||e.metaKey)&&(_e(T.formatMessage({id:"Terra.worklist-data-grid.all-rows-selected"})),M&&M(),e.preventDefault()));case m.KEY_TAB:return function(e){var l=(0,o.default)(document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")||e.id!==t&&re.current.contains(e))})),a=l.indexOf(re.current);if(a>-1){var n=l[a+(e?1:-1)];n&&n.focus()}}(!e.shiftKey),void e.preventDefault();default:return}(u&&(i>n.length?i=n.length:i<=0&&(i=1),ye.current.isRowSelectionModeToggledByGrid=!W,ke(i,ye.current.rangeUsingFocusedRow),ye.current.rangeUsingFocusedRow.previousSelectionEndRow=i),i>n.length||d>=z.length)?e.preventDefault():(d<0||i<0||Ce((a={row:i,col:d}).row,a.col,!0),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===m.KEY_SHIFT)ye.current.rangeUsingFocusedRow=null},onFocus:function(e){e.currentTarget.contains(e.relatedTarget)||oe.current&&Ce(ue,me,!0),oe.current=!0},onMouseDown:function(){oe.current=!1},tabIndex:0},null!=ee&&{onMouseUp:We,onMouseMove:function(e){if(null!=ee){var t=e.pageX-le.current,l=B[ee],a=l.minimumWidth,n=l.maximumWidth,r=Math.min(Math.max(ae.current+t,a),n),i=(0,o.default)(B);i[ee].width=r,Y(i),re.current.style.width="".concat(ne+(r-ae.current),"px")}},onMouseLeave:We}),u.default.createElement(S.default.Provider,{value:Ee},u.default.createElement(b.default,{columns:B,headerHeight:R,tableHeight:Z,onColumnSelect:De,onResizeMouseDown:He}),u.default.createElement("tbody",null,n.map((function(e,t){return function(e,t){return u.default.createElement(_.default,{rowIndex:t,key:e.id,height:y,id:e.id,isSelected:e.isSelected,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:W,displayedColumns:z,rowHeaderIndex:j,onCellSelect:Ne,onRowSelect:Pe})}(e,t+1)}))))),u.default.createElement(p.default,{"aria-live":"polite",text:be}),u.default.createElement(p.default,{"aria-live":"polite","aria-atomic":"true",text:Se}))}M.propTypes=k,M.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[]};var D=(0,s.injectIntl)(M);t.default=D},80998:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(55511)),r=a(l(33902)),o=l(9504),i={cellShape:r.default,columnShape:o.columnShape,rowShape:n.default,SortIndicators:o.SortIndicators};t.default=i},33902:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(45697)),r=n.default.shape({content:n.default.node,isMasked:n.default.bool,isSelectable:n.default.bool,isSelected:n.default.bool});t.default=r},9504:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var n=a(l(45697)),r={ASCENDING:"ascending",DESCENDING:"descending"};t.SortIndicators=r;var o=n.default.shape({id:n.default.string.isRequired,displayName:n.default.string,hasError:n.default.bool,isResizable:n.default.bool,isSelectable:n.default.bool,minimumWidth:n.default.number,maximumWidth:n.default.number,width:n.default.number,sortIndicator:n.default.oneOf(Object.values(r))});t.columnShape=o},55511:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(45697)),r=a(l(33902)),o=n.default.shape({id:n.default.string.isRequired,cells:n.default.arrayOf(r.default),isSelected:n.default.bool,ariaLabel:n.default.string});t.default=o},93127:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(73365)),r=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(n.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(n.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(n.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)};t.default=r},830:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(10434)),o=a(l(861)),i=a(l(27424)),d=g(l(67294)),u=a(l(45697)),c=l(25387),s=g(l(51051)),f=a(l(47166)),m=a(l(15555)),w=a(l(47341)),h=a(l(54483)),p=a(l(64710)),b=a(l(8672));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(_=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=_(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var v=f.default.bind(p.default),S={rowId:u.default.string.isRequired,columnId:u.default.string.isRequired,rowIndex:u.default.number,columnIndex:u.default.number,children:u.default.node,isMasked:u.default.bool,isSelectable:u.default.bool,isSelected:u.default.bool,ariaLabel:u.default.string,isRowHeader:u.default.bool,onCellSelect:u.default.func,height:u.default.string,intl:u.default.shape({formatMessage:u.default.func}).isRequired};function R(e){var t=e.rowId,l=e.columnId,a=e.rowIndex,n=e.columnIndex,u=e.ariaLabel,c=e.isMasked,f=e.isRowHeader,p=e.isSelectable,_=e.isSelected,g=e.children,S=e.onCellSelect,R=e.height,y=e.intl,E=(0,d.useRef)(),I=(0,d.useState)(!1),C=(0,i.default)(I,2),O=C[0],x=C[1],k=(0,d.useState)(!1),M=(0,i.default)(k,2),D=M[0],N=M[1],P=(0,d.useContext)(w.default),H=(0,d.useContext)(b.default),W=function(){return(0,o.default)(E.current.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")})).length>0};(0,d.useEffect)((function(){N(W())}),[]);var T,j=function(){x(!1),H.setCellAriaLiveMessage(y.formatMessage({id:"Terra.worklist-data-grid.resume-navigation"}))};T=c?d.default.createElement("span",{className:v("no-data-cell",P.className)},y.formatMessage({id:"Terra.worklistDataGrid.maskedCell"})):g||d.default.createElement("span",{className:v("no-data-cell",P.className)},y.formatMessage({id:"Terra.worklistDataGrid.blank"}));var L=v("worklist-data-grid-cell",{masked:c,pinned:n<H.pinnedColumnOffsets.length,selectable:p&&!c,selected:_&&!c,blank:!g},P.className),K=n<H.pinnedColumnOffsets.length?H.pinnedColumnOffsets[n]:null,A=f?"th":"td";return d.default.createElement(A,(0,r.default)({ref:E,"aria-selected":_,"aria-label":u,tabIndex:-1,className:L},f&&{scope:"row",role:"rowheader"},{onMouseDown:S?function(e){O||S({rowId:t,columnId:l,rowIndex:a,columnIndex:n,multiSelect:e.shiftKey,selectedByKeyboard:!1,isCellSelectable:!c&&p})}:void 0,onKeyDown:function(e){var r=e.keyCode;if(O){if(r===s.KEY_ESCAPE)j();e.stopPropagation()}else switch(r){case s.KEY_RETURN:W()&&(x(!0),H.setCellAriaLiveMessage(y.formatMessage({id:"Terra.worklist-data-grid.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault());break;case s.KEY_SPACE:S&&S({rowId:t,columnId:l,rowIndex:a,columnIndex:n,multiSelect:e.shiftKey,selectedByKeyboard:!0,isCellSelectable:!c&&p}),e.preventDefault()}},style:{left:K}}),d.default.createElement(h.default,{active:O,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,escapeDeactivates:!1,onDeactivate:j}},d.default.createElement("div",{className:v("cell-content",P.className),style:{height:R}},T)),D&&d.default.createElement(m.default,{text:y.formatMessage({id:"Terra.worklist-data-grid.cell-interactable"})}))}R.propTypes=S,R.defaultProps={isRowHeader:!1,isSelected:!1,isSelectable:!0,isMasked:!1};var y=d.default.memo((0,c.injectIntl)(R));t.default=y},74994:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(67294)),r=a(l(45697)),o=a(l(80998)),i=a(l(14675)),d={columns:r.default.arrayOf(o.default.columnShape).isRequired,headerHeight:r.default.string.isRequired,tableHeight:r.default.number,onColumnSelect:r.default.func,onResizeMouseDown:r.default.func},u=function(e){var t=e.columns,l=e.headerHeight,a=e.tableHeight,r=e.onColumnSelect,o=e.onResizeMouseDown;return n.default.createElement("thead",null,n.default.createElement("tr",{className:"column-header-row",height:l},t.map((function(e,t){return function(e,t){return n.default.createElement(i.default,{key:e.id,id:e.id,rowIndex:0,columnIndex:t,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:l,isResizable:e.isResizable,isSelectable:e.isSelectable,tableHeight:a,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:r,onResizeMouseDown:o})}(e,t)}))))};u.propTypes=d;var c=n.default.memo(u);t.default=c},14675:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(l(67294)),o=a(l(45697)),i=l(25387),d=g(l(51051)),u=a(l(47166)),c=a(l(47341)),s=a(l(85906)),f=a(l(11699)),m=a(l(94520)),w=a(l(94955)),h=a(l(80998)),p=a(l(8672)),b=a(l(25609));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(_=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=_(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var v=u.default.bind(b.default),S={id:o.default.string.isRequired,displayName:o.default.string,sortIndicator:o.default.oneOf(Object.values(h.default.SortIndicators)),hasError:o.default.bool,minimumWidth:o.default.number,maximumWidth:o.default.number,isSelectable:o.default.bool,isResizable:o.default.bool,tableHeight:o.default.number,width:o.default.number.isRequired,headerHeight:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,onColumnSelect:o.default.func,onResizeMouseDown:o.default.func,intl:o.default.shape({formatMessage:o.default.func})},R=function(e){var t,l=e.id,a=e.displayName,n=e.sortIndicator,o=e.hasError,i=e.isSelectable,u=e.isResizable,b=e.tableHeight,_=e.width,g=e.minimumWidth,S=e.maximumWidth,R=e.headerHeight,y=e.onColumnSelect,E=e.intl,I=e.rowIndex,C=e.columnIndex,O=e.onResizeMouseDown,x=(0,r.useContext)(p.default),k=(0,r.useRef)(),M=(0,r.useCallback)((function(e){k.current=e}),[]),D=(0,r.useCallback)((function(e){O&&O(e,C,k.current.offsetWidth)}),[C,O]),N=o&&r.default.createElement(m.default,{a11yLabel:E.formatMessage({id:"Terra.worklistDataGrid.columnError"}),className:v("error-icon")});n===h.default.SortIndicators.ASCENDING?t=r.default.createElement(s.default,null):n===h.default.SortIndicators.DESCENDING&&(t=r.default.createElement(f.default,null));var P=(0,r.useContext)(c.default),H=C<x.pinnedColumnOffsets.length?x.pinnedColumnOffsets[C]:null,W=_-1,T=C===x.pinnedColumnOffsets.length-1?r.default.createElement("div",{className:v("pinned-columns-divider"),style:{height:b,left:W}}):null;return r.default.createElement("th",{ref:M,key:l,className:v("column-header",P.className,{selectable:i,pinned:C<x.pinnedColumnOffsets.length}),tabIndex:-1,role:"columnheader",scope:"col","aria-sort":n,onMouseDown:i&&y?function(e){y(l,{row:I,col:C}),e.stopPropagation()}:void 0,onKeyDown:i&&y?function(e){switch(e.keyCode){case d.KEY_SPACE:case d.KEY_RETURN:y(l,{row:I,col:C}),e.stopPropagation(),e.preventDefault()}}:void 0,style:{width:"".concat(_,"px"),height:R,left:H}},r.default.createElement("div",{className:v("header-container"),role:a&&"button"},N,r.default.createElement("span",null,a),t),u&&r.default.createElement(w.default,{columnIndex:C,columnText:a,columnWidth:_,height:b,minimumWidth:g,maximumWidth:S,onResizeMouseDown:D}),T)};R.propTypes=S,R.defaultProps={hasError:!1,isSelectable:!0,isResizable:!0};var y=r.default.memo((0,i.injectIntl)(R));t.default=y},94955:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=f(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,l&&l.set(e,a);return a}(l(67294)),i=a(l(45697)),d=l(25387),u=a(l(47166)),c=a(l(47341)),s=a(l(12638));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(f=function(e){return e?l:t})(e)}var m=u.default.bind(s.default),w={columnText:i.default.string.isRequired,columnWidth:i.default.number.isRequired,height:i.default.number.isRequired,minimumWidth:i.default.number.isRequired,maximumWidth:i.default.number.isRequired,onResizeMouseDown:i.default.func.isRequired,intl:i.default.shape({formatMessage:i.default.func}).isRequired},h=function(e){var t=e.columnText,l=e.columnWidth,a=e.height,n=e.minimumWidth,i=e.maximumWidth,d=e.onResizeMouseDown,u=e.intl,s=(0,o.useState)(!1),f=(0,r.default)(s,2),w=f[0],h=f[1],p=(0,o.useContext)(c.default),b=(0,o.useRef)(),_=(0,o.useCallback)((function(e){b.current=e}),[]);return o.default.createElement("div",{ref:_,draggable:!0,role:"slider",tabIndex:-1,"aria-hidden":!w,"aria-valuemin":n,"aria-valuenow":l,"aria-valuemax":i,"aria-label":t,"aria-valuetext":u.formatMessage({id:"Terra.worklist-data-grid.resizeHandleValueText"},{columnWidth:l}),style:{height:"".concat(a,"px")},onMouseDown:function(e){b.current.focus(),d(e),e.stopPropagation(),e.preventDefault()},onFocus:function(){return h(!0)},onBlur:function(){return h(!1)},className:m("resize-handle",p.className)})};h.propTypes=w;var p=(0,d.injectIntl)(h);t.default=p},37356:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=w(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,l&&l.set(e,a);return a}(l(67294)),o=a(l(45697)),i=a(l(47341)),d=a(l(47166)),u=a(l(51713)),c=a(l(81761)),s=a(l(830)),f=a(l(33902)),m=a(l(80998));function w(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(w=function(e){return e?l:t})(e)}var h=d.default.bind(u.default),p={id:o.default.string.isRequired,rowIndex:o.default.number,height:o.default.string,cells:o.default.arrayOf(f.default),isSelected:o.default.bool,ariaLabel:o.default.string,hasRowSelection:o.default.bool,onRowSelect:o.default.func,displayedColumns:o.default.arrayOf(m.default.columnShape),onCellSelect:o.default.func,rowHeaderIndex:o.default.number};function b(e){var t=e.rowIndex,l=e.height,a=e.hasRowSelection,n=e.id,o=e.isSelected,d=e.cells,u=e.ariaLabel,f=e.displayedColumns,m=e.rowHeaderIndex,w=e.onRowSelect,p=e.onCellSelect,b=(0,r.useContext)(i.default),_=a?1:0,g=(0,r.useCallback)((function(e){a||e.multiSelect?w&&w(e):p&&p(e)}),[a,p,w]),v=a?r.default.createElement(c.default,{rowId:n,columnId:f[0].id,rowIndex:t,columnIndex:0,isSelected:o,ariaLabel:u,onCellSelect:g}):null;return r.default.createElement("tr",{className:h("worklist-data-grid-row",{selected:o,selectable:a},b.className),style:{height:l}},v,d.map((function(e,o){return function(e,t,n,o){var i=f[t].id,d=t===m+_;return r.default.createElement(s.default,{rowId:o,columnId:i,rowIndex:e,columnIndex:t,key:"".concat(o,"_").concat(i),isSelected:!a&&n.isSelected,isMasked:n.isMasked,isSelectable:n.isSelectable,isRowHeader:d,onCellSelect:g,height:l},n.content)}(t,o+_,e,n)})))}b.propTypes=p,b.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};var _=r.default.memo(b);t.default=_},81761:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(67294)),r=a(l(45697)),o=l(25387),i=a(l(830)),d={rowId:r.default.string.isRequired,columnId:r.default.string.isRequired,rowIndex:r.default.number,columnIndex:r.default.number,isSelected:r.default.bool,ariaLabel:r.default.string,onCellSelect:r.default.func,intl:r.default.shape({formatMessage:r.default.func}).isRequired};function u(e){var t=e.rowId,l=e.columnId,a=e.rowIndex,r=e.columnIndex,o=e.isSelected,d=e.ariaLabel,u=e.onCellSelect,c=e.intl.formatMessage({id:"Terra.worklist-data-grid.row-index"},{row:a}),s=n.default.createElement("input",{type:"checkbox","aria-label":d||c,"aria-checked":o,tabIndex:-1,checked:o});return n.default.createElement(i.default,{rowId:t,columnId:l,key:"".concat(t,"_").concat(l),rowIndex:a,columnIndex:r,isSelected:!1,onCellSelect:u},s)}u.propTypes=d;var c=n.default.memo((0,o.injectIntl)(u));t.default=c},8672:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(67294)).default.createContext({pinnedColumnOffsets:[]});t.default=n},54962:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1},FIRST_NON_HEADER_ROW:1};t.default=l},73365:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"to be properly accessible, the row header column should be a pinned column. please set pinned columns"},a=l;t.default=a},72103:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___t0nx3","clinical-lowlight-theme":"WorklistDataGrid-module__clinical-lowlight-theme___BLIqI","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___aaS2w","worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___yhmS9"}},64710:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Cell-module__orion-fusion-theme___NWHS+","clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___BlGTz","worklist-data-grid-cell":"Cell-module__worklist-data-grid-cell___ERjGQ",selected:"Cell-module__selected___L4qWU",masked:"Cell-module__masked___NrbgT","cell-content":"Cell-module__cell-content___q4GT1","no-data-cell":"Cell-module__no-data-cell___B67Nl",pinned:"Cell-module__pinned___0bEYC",selectable:"Cell-module__selectable___RGht0"}},25609:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___+mPW0","clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___ZyF6A","column-header":"ColumnHeaderCell-module__column-header___oVf7Q","header-container":"ColumnHeaderCell-module__header-container___A1dFv","error-icon":"ColumnHeaderCell-module__error-icon___kES53",selectable:"ColumnHeaderCell-module__selectable___CmoIF",pinned:"ColumnHeaderCell-module__pinned___Qip4n","pinned-columns-divider":"ColumnHeaderCell-module__pinned-columns-divider___maaPH"}},12638:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___sft4v","clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___3DSst","resize-handle":"ColumnResizeHandle-module__resize-handle___SB2vj"}},51713:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Row-module__orion-fusion-theme___nu9Mx","clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___ggHC1","worklist-data-grid-row":"Row-module__worklist-data-grid-row___a-6e7",selectable:"Row-module__selectable___yGB3p",selected:"Row-module__selected___2u32k"}}}]);