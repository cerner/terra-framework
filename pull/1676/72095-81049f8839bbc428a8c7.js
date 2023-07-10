"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72095],{72095:function(e,t,l){var a=l(64836),r=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(l(27424)),n=h(l(67294));l(67964);var d=a(l(45697)),u=l(25387),i=a(l(47166)),c=a(l(47341)),s=h(l(51051)),f=a(l(15555)),m=a(l(72103)),p=a(l(54962)),w=a(l(80998)),b=a(l(37356)),_=a(l(14675));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(g=function(e){return e?l:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=g(t);if(l&&l.has(e))return l.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var d=o?Object.getOwnPropertyDescriptor(e,n):null;d&&(d.get||d.set)?Object.defineProperty(a,n,d):a[n]=e[n]}return a.default=e,l&&l.set(e,a),a}var v=i.default.bind(m.default),S={ariaLabelledby:d.default.string,ariaLabel:d.default.string,id:d.default.string.isRequired,columns:d.default.arrayOf(w.default.columnShape),rows:d.default.arrayOf(w.default.rowShape),columnWidth:d.default.string,columnHeaderHeight:d.default.string,rowHeight:d.default.string,rowHeaderIndex:d.default.number,onCellSelect:d.default.func,onRowSelect:d.default.func,onRowSelectAll:d.default.func,onColumnSelect:d.default.func,onClearSelectedRows:d.default.func,onDisableSelectableRows:d.default.func,hasSelectableRows:d.default.bool,intl:d.default.shape({formatMessage:d.default.func}).isRequired};function y(e){var t=e.id,l=e.ariaLabelledby,a=e.ariaLabel,r=e.columns,d=e.rows,u=e.columnHeaderHeight,i=e.onColumnSelect,m=e.onCellSelect,w=e.onRowSelect,g=e.onRowSelectAll,h=e.onClearSelectedRows,S=e.onDisableSelectableRows,y=e.hasSelectableRows,I=e.intl,C=e.rowHeaderIndex,k=(0,n.useRef)(),E=(0,n.useRef)(0),O=(0,n.useRef)(0),R=(0,n.useRef)(),M=(0,n.useState)(null),x=(0,o.default)(M,2),T=x[0],N=x[1],P=(0,n.useState)(),j=(0,o.default)(P,2)[1],D=(y?[p.default.ROW_SELECTION_COLUMN]:[]).concat(r),H=(0,n.useContext)(c.default),W=function(e){return y&&e<D.length&&D[e].id===p.default.ROW_SELECTION_COLUMN.id},K=function(e,t){var l=k.current.rows[e].cells[t];l.tabIndex=-1,W(t)&&l.getElementsByTagName("input").length>0&&(l.getElementsByTagName("input")[0].tabIndex=-1)},L=function(e,t,l){K(E.current,O.current),E.current=e,O.current=t,function(e,t,l){var a=k.current.rows[e].cells[t];if(W(t)&&a.getElementsByTagName("input").length>0){var r=a.getElementsByTagName("input");a=(0,o.default)(r,1)[0]}a.tabIndex=0,l&&a.focus&&a.focus()}(e,t,l)};(0,n.useEffect)((function(){var e={row:E.current,col:O.current+(y?1:-1)};y&&0===E.current&&0===O.current?e={row:1,col:0}:y||0!==O.current||(e={row:E.current,col:0}),L(e.row,e.col,!1),null!=T&&N(null),R.current=I.formatMessage({id:y?"Terra.worklist-data-grid.row-selection-mode-enabled":"Terra.worklist-data-grid.row-selection-mode-disabled"}),j(R.current)}),[y]);var q=function(){R.current="",d.find((function(e){return!0===e.isSelected}))?(R.current=I.formatMessage({id:"Terra.worklist-data-grid.all-rows-unselected"}),h&&h()):S&&(R.current=I.formatMessage({id:"Terra.worklist-data-grid.row-selection-mode-disabled"}),S())},G=function(e,t,l){var a,r="Terra.worklist-data-grid.all-rows-selected";e||(r=!d[l-1].isSelected?"Terra.worklist-data-grid.row-selection-template":"Terra.worklist-data-grid.row-selection-cleared-template",a=d[l-1].ariaLabel||l);R.current=I.formatMessage({id:r},{row:a}),e&&g?g():w&&w(t)},A=function(e,t,l){y||(R.current=I.formatMessage({id:e?"Terra.worklist-data-grid.cell-selection-template":"Terra.worklist-data-grid.cell-selection-cleared"},{row:l.row,column:l.col})),L(l.row,l.col,!0),e===(null==T?void 0:T.rowId)&&t===(null==T?void 0:T.columnId)||N(e&&t?{rowId:e,columnId:t}:null)},Y=function(e,t){if(l=t.row,a=t.col,!T||T.rowId!==l||T.columnId!==a){var l,a,r=function(e){return{row:e.row-1,col:e.col+(y?-1:0)}}(t),o=d[r.row].cells[r.col];!1===o.isSelectable||o.isMasked||(A(e.rowId,e.columnId,t),m&&m(e.rowId,e.columnId))}},F=function(e,t){A(null,null,t),!i||y&&0===t.col||i(e)},B=function(e,t){Y(e,t)},U=function(e,t,l){A(null,null,l),G(!1,e,t)},Q=v("worklist-data-grid",H.className);return n.default.createElement(n.default.Fragment,null,n.default.createElement("table",{ref:k,id:t,role:"grid","aria-labelledby":l,"aria-label":a,className:Q,onKeyDown:function(e){var t,l,a={row:E.current,col:O.current},r=a.row,o=a.col;switch(e.keyCode){case s.KEY_UP:r-=1;break;case s.KEY_DOWN:r+=1;break;case s.KEY_LEFT:e.metaKey?(o=0,e.ctrlKey&&(r=p.default.FIRST_NON_HEADER_ROW)):o-=1;break;case s.KEY_RIGHT:e.metaKey?(o=D.length-1,e.ctrlKey&&(r=d.length)):o+=1;break;case s.KEY_HOME:o=0,e.ctrlKey&&(r=p.default.FIRST_NON_HEADER_ROW);break;case s.KEY_END:o=D.length-1,e.ctrlKey&&(r=d.length);break;case s.KEY_ESCAPE:y?q():A(null,null,a),e.preventDefault();break;case s.KEY_A:return void(y&&(e.ctrlKey||e.metaKey)&&(G(!0,null,null),e.preventDefault()));default:return}r>d.length||o>=D.length?e.preventDefault():(o<0||r<0||(l={row:r,col:o},K((t=a).row,t.col),L(l.row,l.col,!0)),e.preventDefault())}},n.default.createElement("tbody",null,function(t){if((null==t?void 0:t.length)>0)return n.default.createElement("tr",{height:e.columnHeaderHeight},t.map((function(t,l){return function(t,l){return n.default.createElement(_.default,{key:t.id,id:t.id,displayName:t.displayName,sortIndicator:t.sortIndicator,hasError:t.hasError,isSelectable:t.isSelectable,width:t.width||e.columnWidth,headerHeight:u,onColumnSelect:F,rowIndex:0,columnIndex:l,isTabStop:0===E.current&&O.current===l})}(t,l)})))}(D),d.map((function(t,l){return function(t,l){return n.default.createElement(b.default,{rowIndex:l,key:t.id,height:e.rowHeight,id:t.id,isSelected:t.isSelected,cells:t.cells,ariaLabel:t.ariaLabel,hasRowSelection:y,displayedColumns:D,rowHeaderIndex:C,onCellSelect:B,onRowSelect:U,tabStopColumnIndex:E.current===l?O.current:void 0,selectedCellColumnId:(null==T?void 0:T.rowId)===t.id?null==T?void 0:T.columnId:void 0})}(t,l+1)})))),n.default.createElement(f.default,{"aria-live":"polite",text:R.current}))}y.propTypes=S,y.defaultProps={rowHeaderIndex:0};var I=(0,u.injectIntl)(y);t.default=I},67964:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},80998:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(55511)),o=a(l(33902)),n=l(9504),d={cellShape:o.default,columnShape:n.columnShape,rowShape:r.default,SortIndicators:n.SortIndicators};t.default=d},33902:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(45697)),o=r.default.shape({content:r.default.node,isMasked:r.default.bool,isSelectable:r.default.bool});t.default=o},9504:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var r=a(l(45697)),o={ASCENDING:"ascending",DESCENDING:"descending"};t.SortIndicators=o;var n=r.default.shape({id:r.default.string.isRequired,displayName:r.default.string,sortIndicator:r.default.oneOf(Object.values(o)),hasError:r.default.bool,isSelectable:r.default.bool,width:r.default.string});t.columnShape=n},55511:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(45697)),o=a(l(33902)),n=r.default.shape({id:r.default.string.isRequired,cells:r.default.arrayOf(o.default),isSelected:r.default.bool,ariaLabel:r.default.string});t.default=n},830:function(e,t,l){var a=l(64836),r=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(l(67294)),n=a(l(45697)),d=p(l(51051));l(67964);var u=l(25387),i=a(l(47166)),c=a(l(47341)),s=a(l(54962)),f=a(l(64710));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(m=function(e){return e?l:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=m(t);if(l&&l.has(e))return l.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var d=o?Object.getOwnPropertyDescriptor(e,n):null;d&&(d.get||d.set)?Object.defineProperty(a,n,d):a[n]=e[n]}return a.default=e,l&&l.set(e,a),a}var w=i.default.bind(f.default),b={rowId:n.default.string.isRequired,columnId:n.default.string.isRequired,rowIndex:n.default.number,columnIndex:n.default.number,children:n.default.node,isMasked:n.default.bool,isSelectable:n.default.bool,isTabStop:n.default.bool,isSelected:n.default.bool,ariaLabel:n.default.string,isRowHeader:n.default.bool,onCellSelect:n.default.func,intl:n.default.shape({formatMessage:n.default.func}).isRequired};function _(e){var t=e.rowId,l=e.columnId,a=e.rowIndex,r=e.columnIndex,n=e.isTabStop,u=e.ariaLabel,i=e.isRowHeader,f=e.isSelected,m=e.isMasked,p=e.isSelectable,b=e.children,_=e.onCellSelect,g=e.intl,h=(0,o.useContext)(c.default),v=u;m?v=g.formatMessage({id:"Terra.worklistDataGrid.maskedCell"}):b||(v=g.formatMessage({id:"Terra.worklistDataGrid.blank"}));var S=w("worklist-data-grid-cell",{masked:m,selectable:p&&!m,selected:f&&!m,blank:!b},h.className),y=i?"th":"td";return o.default.createElement(y,{"aria-selected":f,"aria-label":v,tabIndex:n?0:-1,className:S,onMouseDown:function(e){m||!p?(e.stopPropagation(),e.preventDefault()):_&&(_({rowId:t,columnId:l},{row:a,col:r}),e.stopPropagation())},onKeyDown:function(e){switch(e.keyCode){case d.KEY_SPACE:m||!p?(e.stopPropagation(),e.preventDefault()):_&&(_({rowId:t,columnId:l},{row:a,col:r}),e.stopPropagation(),e.preventDefault());break;case d.KEY_C:(e.ctrlKey||e.metaKey)&&s.default.writeToClipboard(e.target.textContent)}}},!m&&b&&o.default.createElement("div",{className:w("cell-content",h.className)},b))}_.propTypes=b,_.defaultProps={isTabStop:!1,isRowHeader:!1,isSelected:!1,isSelectable:!0,isMasked:!1};var g=(0,u.injectIntl)(_);t.default=g},14675:function(e,t,l){var a=l(64836),r=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=g(l(67294)),n=a(l(45697)),d=a(l(47166)),u=l(25387),i=a(l(47341)),c=a(l(85906)),s=a(l(11699)),f=a(l(94520)),m=g(l(51051)),p=a(l(80998));l(67964);var w=a(l(25609)),b=a(l(54962));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(_=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=_(t);if(l&&l.has(e))return l.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var d=o?Object.getOwnPropertyDescriptor(e,n):null;d&&(d.get||d.set)?Object.defineProperty(a,n,d):a[n]=e[n]}return a.default=e,l&&l.set(e,a),a}var h=d.default.bind(w.default),v={id:n.default.string.isRequired,displayName:n.default.string,sortIndicator:n.default.oneOf(Object.values(p.default.SortIndicators)),hasError:n.default.bool,isSelectable:n.default.bool,width:n.default.string.isRequired,headerHeight:n.default.string.isRequired,onColumnSelect:n.default.func,rowIndex:n.default.number,columnIndex:n.default.number,isTabStop:n.default.bool,intl:n.default.shape({formatMessage:n.default.func})},S=function(e){var t,l,a=e.id,r=e.displayName,n=e.sortIndicator,d=e.hasError,u=e.isSelectable,w=e.width,_=e.headerHeight,g=e.onColumnSelect,v=e.intl,S=e.rowIndex,y=e.columnIndex,I=e.isTabStop;d&&(l=o.default.createElement(f.default,{a11yLabel:v.formatMessage({id:"Terra.worklistDataGrid.columnError"}),className:h("error-icon")})),n===p.default.SortIndicators.ASCENDING?t=o.default.createElement(c.default,null):n===p.default.SortIndicators.DESCENDING&&(t=o.default.createElement(s.default,null));var C=(0,o.useContext)(i.default);return o.default.createElement("th",{key:a,className:h("column-header",C.className,{selectable:u}),tabIndex:I?0:-1,role:"columnheader",scope:"col","aria-sort":n,onMouseDown:u&&g?function(e){g(a,{row:S,col:y}),e.stopPropagation()}:void 0,onKeyDown:u&&g?function(e){switch(e.keyCode){case m.KEY_SPACE:g&&(g(a,{row:S,col:y}),e.stopPropagation(),e.preventDefault());break;case m.KEY_C:(e.ctrlKey||e.metaKey)&&b.default.writeToClipboard(e.target.textContent)}}:void 0,style:{width:w,height:_}},o.default.createElement("div",{className:h("header-container")},l,o.default.createElement("span",{role:r&&"button"},r),t))};S.propTypes=v,S.defaultProps={isTabStop:!1,hasError:!1,isSelectable:!0};var y=(0,u.injectIntl)(S);t.default=y},37356:function(e,t,l){var a=l(64836),r=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var d=o?Object.getOwnPropertyDescriptor(e,n):null;d&&(d.get||d.set)?Object.defineProperty(a,n,d):a[n]=e[n]}a.default=e,l&&l.set(e,a);return a}(l(67294)),n=a(l(45697)),d=a(l(47341)),u=a(l(47166));l(67964);var i=a(l(51713)),c=a(l(81761)),s=a(l(830)),f=a(l(33902)),m=a(l(80998));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}var w=u.default.bind(i.default),b={id:n.default.string.isRequired,rowIndex:n.default.number,height:n.default.string,cells:n.default.arrayOf(f.default),isSelected:n.default.bool,ariaLabel:n.default.string,hasRowSelection:n.default.bool,onRowSelect:n.default.func,displayedColumns:n.default.arrayOf(m.default.columnShape),onCellSelect:n.default.func,rowHeaderIndex:n.default.number,selectedCellColumnId:n.default.string,tabStopColumnIndex:n.default.number};function _(e){var t=e.rowIndex,l=e.height,a=e.hasRowSelection,r=e.id,n=e.isSelected,u=e.cells,i=e.ariaLabel,f=e.displayedColumns,m=e.rowHeaderIndex,p=e.onRowSelect,b=e.onCellSelect,_=e.selectedCellColumnId,g=e.tabStopColumnIndex,h=(0,o.useContext)(d.default),v=a?1:0,S=function(e,l){a?p&&p(e.rowId,t,l):b&&b(e,l)},y=a?o.default.createElement(c.default,{rowId:r,columnId:f[0].id,rowIndex:t,columnIndex:0,isTabStop:0===g,isSelected:n,ariaLabel:i,onCellSelect:S}):null;return o.default.createElement("tr",{className:w([n?"row-selected":"worklist-data-grid-row",h.className]),style:{height:l}},y,u.map((function(e,l){return function(e,t,l,r){var n=f[t].id,d=t===m+v;return o.default.createElement(s.default,{rowId:r,columnId:n,rowIndex:e,columnIndex:t,key:"".concat(r,"_").concat(n),isTabStop:g===t,isSelected:!a&&_===n,isMasked:l.isMasked,isSelectable:l.isSelectable,isRowHeader:d,onCellSelect:S},l.content)}(t,l+v,e,r)})))}_.propTypes=b,_.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};var g=_;t.default=g},81761:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(67294)),o=a(l(45697));l(67964);var n=l(25387),d=a(l(830)),u={rowId:o.default.string.isRequired,columnId:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,isTabStop:o.default.bool,isSelected:o.default.bool,ariaLabel:o.default.string,onCellSelect:o.default.func,intl:o.default.shape({formatMessage:o.default.func}).isRequired};function i(e){var t=e.rowId,l=e.columnId,a=e.rowIndex,o=e.columnIndex,n=e.isTabStop,u=e.isSelected,i=e.ariaLabel,c=e.onCellSelect,s=e.intl.formatMessage({id:"Terra.worklist-data-grid.row-index"},{row:a}),f=r.default.createElement("input",{type:"checkbox","aria-label":i||s,"aria-checked":u,tabIndex:n?0:-1,checked:u});return r.default.createElement(d.default,{rowId:t,columnId:l,key:"".concat(t,"_").concat(l),rowIndex:a,columnIndex:o,isTabStop:!1,isSelected:!1,onCellSelect:c},f)}i.propTypes=u;var c=(0,n.injectIntl)(i);t.default=c},54962:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:"40px",isSelectable:!1},FIRST_NON_HEADER_ROW:1,writeToClipboard:function(e){"clipboard"in navigator?navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}};t.default=l},72103:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___t0nx3","clinical-lowlight-theme":"WorklistDataGrid-module__clinical-lowlight-theme___BLIqI","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___aaS2w"}},64710:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Cell-module__orion-fusion-theme___NWHS+","clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___BlGTz","worklist-data-grid-cell":"Cell-module__worklist-data-grid-cell___ERjGQ",selected:"Cell-module__selected___L4qWU",masked:"Cell-module__masked___NrbgT","cell-content":"Cell-module__cell-content___q4GT1",selectable:"Cell-module__selectable___RGht0"}},25609:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___+mPW0","clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___ZyF6A","column-header":"ColumnHeaderCell-module__column-header___oVf7Q","header-container":"ColumnHeaderCell-module__header-container___A1dFv","error-icon":"ColumnHeaderCell-module__error-icon___kES53",selectable:"ColumnHeaderCell-module__selectable___CmoIF"}},51713:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"Row-module__orion-fusion-theme___nu9Mx","clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___ggHC1","worklist-data-grid-row":"Row-module__worklist-data-grid-row___a-6e7","row-selected":"Row-module__row-selected___VglJ4"}}}]);