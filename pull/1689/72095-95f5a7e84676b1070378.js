"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72095],{32096:function(e,t,r){var a=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,r&&r.set(e,a);return a}(r(67294)),o=a(r(45697)),u=a(r(47166)),d=r(25387),i=a(r(47341)),c=a(r(85906)),s=a(r(11699)),f=a(r(94520)),m=a(r(80998));r(67964);var _=a(r(73621));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}var h=u.default.bind(_.default),b={column:m.default.columnShape.isRequired,width:o.default.string.isRequired,headerHeight:o.default.string.isRequired,onColumnSelect:o.default.func,intl:o.default.shape({formatMessage:o.default.func})},w=function(e){var t,r,a=e.column,l=e.width,o=e.headerHeight,u=e.onColumnSelect,d=e.intl;a.hasError&&(r=n.default.createElement(f.default,{a11yLabel:d.formatMessage({id:"Terra.worklistDataGrid.columnError"}),className:h("error-icon")})),a.sortIndicator===m.default.SortIndicators.ASCENDING?t=n.default.createElement(c.default,null):a.sortIndicator===m.default.SortIndicators.DESCENDING&&(t=n.default.createElement(s.default,null));var _=(0,n.useContext)(i.default);return n.default.createElement("th",{key:a.id,className:h("column-header",_.className,{selectable:!(!1===a.isSelectable)}),tabIndex:"-1",role:"columnheader",scope:"col","aria-sort":a.sortIndicator,onClick:!1!==a.isSelectable&&u?function(){u(a.id)}:void 0,style:{width:l,height:o}},n.default.createElement("div",{className:h("header-container")},r,n.default.createElement("span",{role:"button"},a.displayName),t))};w.propTypes=b;var g=(0,d.injectIntl)(w);t.default=g},72095:function(e,t,r){var a=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(10434)),o=h(r(67294)),u=a(r(45697)),d=a(r(47166)),i=a(r(47341)),c=r(25387),s=h(r(51051)),f=a(r(32096)),m=a(r(80998));r(67964);var _=a(r(72103));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}var b=d.default.bind(_.default),w={ariaLabelledby:u.default.string,ariaLabel:u.default.string,id:u.default.string.isRequired,columns:u.default.arrayOf(m.default.columnShape),rows:u.default.arrayOf(m.default.rowShape),columnWidth:u.default.string,columnHeaderHeight:u.default.string,rowHeight:u.default.string,rowHeaderIndex:u.default.number,onColumnSelect:u.default.func,intl:u.default.shape({formatMessage:u.default.func})};function g(e){var t=e.id,r=e.ariaLabelledby,a=e.ariaLabel,l=e.columns,u=e.rows,d=e.columnHeaderHeight,c=e.onColumnSelect,m=e.intl,_=(0,o.useRef)(0),p=(0,o.useRef)(0),h=(0,o.useRef)(),w=(0,o.useCallback)((function(e){h.current=e,h.current.rows[_.current].cells[p.current].tabIndex=0}),[]),g=function(t){var r=e.rowHeight;return o.default.createElement("tr",{key:t.id,className:b("worklist-data-grid-row"),style:{height:r}},t.cells.map((function(t,r){return function(t,r){var a,l=e.rowHeaderIndex===r?"th":"td";return t.isMasked?a=m.formatMessage({id:"Terra.worklistDataGrid.maskedCell"}):t.content||(a=m.formatMessage({id:"Terra.worklistDataGrid.blank"})),o.default.createElement(l,(0,n.default)({key:r},{tabIndex:"-1"},{className:b("worklist-data-grid-cell",{masked:t.isMasked,selectable:!(t.isMasked||!1===t.isSelectable),blank:!t.content}),"aria-label":a}),!t.isMasked&&t.content&&o.default.createElement("div",{className:b("cell-content")},t.content))}(t,r)})))},v=(0,o.useContext)(i.default),k=b("worklist-data-grid",v.className);return o.default.createElement("table",{ref:w,id:t,role:"grid","aria-labelledby":r,"aria-label":a,className:k,onClick:function(e){var t=e.target.closest("td,th")||document.activeElement.closest("td,th");t&&(h.current.rows[_.current].cells[p.current].tabIndex=-1,_.current=t.parentElement.rowIndex,p.current=t.cellIndex,t.tabIndex=0,t.focus(),e.preventDefault())},onKeyDown:function(t){var r=t.target.parentElement.rowIndex,a=t.target.cellIndex,l=r,n=a;switch(t.keyCode){case s.KEY_UP:l-=1;break;case s.KEY_DOWN:l+=1;break;case s.KEY_LEFT:n-=1;break;case s.KEY_RIGHT:n+=1;break;case s.KEY_HOME:n=0,t.ctrlKey&&(l=1);break;case s.KEY_END:n=e.rows[0].cells.length-1,t.ctrlKey&&(l=e.rows.length);break;default:return}if(l>=h.current.rows.length||n>=h.current.rows[0].cells.length)t.preventDefault();else if(n<0||l<0)t.preventDefault();else{h.current.rows[r].cells[a].tabIndex=-1,_.current=l,p.current=n;var o=h.current.rows[l].cells[n];o.tabIndex=0,o.focus(),t.preventDefault()}}},o.default.createElement("tbody",null,function(t){if((null==t?void 0:t.length)>0)return o.default.createElement("tr",{height:e.columnHeaderHeight},t.map((function(t){return function(t){return o.default.createElement(f.default,{column:t,width:t.width||e.columnWidth,headerHeight:d,onColumnSelect:c})}(t)})))}(l),u.map((function(e){return g(e)}))))}g.propTypes=w,g.defaultProps={rowHeaderIndex:0};var v=(0,c.injectIntl)(g);t.default=v},67964:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},80998:function(e,t,r){var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(55511)),n=a(r(33902)),o=r(9504),u={cellShape:n.default,columnShape:o.columnShape,rowShape:l.default,SortIndicators:o.SortIndicators};t.default=u},33902:function(e,t,r){var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(45697)),n=l.default.shape({content:l.default.string,isMasked:l.default.bool,isSelectable:l.default.bool});t.default=n},9504:function(e,t,r){var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var l=a(r(45697)),n={ASCENDING:"ascending",DESCENDING:"descending"};t.SortIndicators=n;var o=l.default.shape({id:l.default.string.isRequired,displayName:l.default.string,sortIndicator:l.default.oneOf(Object.values(n)),hasError:l.default.bool,isSelectable:l.default.bool});t.columnShape=o},55511:function(e,t,r){var a=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(r(45697)),n=a(r(33902)),o=l.default.shape({id:l.default.string.isRequired,cells:l.default.arrayOf(n.default)});t.default=o},73621:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___kCuVY","clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___+z258","column-header":"ColumnHeaderCell-module__column-header___qg1gV","header-container":"ColumnHeaderCell-module__header-container___PwqED","error-icon":"ColumnHeaderCell-module__error-icon___+0isr",selectable:"ColumnHeaderCell-module__selectable___9ga6w"}},72103:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___t0nx3","clinical-lowlight-theme":"WorklistDataGrid-module__clinical-lowlight-theme___BLIqI","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___aaS2w","worklist-data-grid-cell":"WorklistDataGrid-module__worklist-data-grid-cell___53lpz","worklist-data-grid-row":"WorklistDataGrid-module__worklist-data-grid-row___-L8mS",selectable:"WorklistDataGrid-module__selectable___1U92x","cell-content":"WorklistDataGrid-module__cell-content___ZGi1I",masked:"WorklistDataGrid-module__masked___rxJzP"}}}]);