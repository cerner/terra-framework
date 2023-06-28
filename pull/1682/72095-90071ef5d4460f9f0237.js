"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72095],{32096:function(e,t,a){var r=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(10434)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,a&&a.set(e,r);return r}(a(67294)),u=r(a(45697)),d=r(a(47166)),i=a(25387),c=r(a(47341)),s=r(a(85906)),f=r(a(11699)),m=r(a(94520)),_=r(a(80998));a(67964);var p=r(a(73621));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}var b=d.default.bind(p.default),w={column:_.default.columnShape.isRequired,width:u.default.string.isRequired,headerHeight:u.default.string.isRequired,onColumnSelect:u.default.func,intl:u.default.shape({formatMessage:u.default.func})},g=function(e){var t,a,r=e.column,l=e.width,u=e.headerHeight,d=e.onColumnSelect,i=e.intl;r.hasError&&(a=o.default.createElement(m.default,{a11yLabel:i.formatMessage({id:"Terra.worklistDataGrid.columnError"})})),r.sortIndicator===_.default.SortIndicators.ASCENDING?t=o.default.createElement(s.default,null):r.sortIndicator===_.default.SortIndicators.DESCENDING&&(t=o.default.createElement(f.default,null));var p=(0,o.useContext)(c.default);return o.default.createElement("th",(0,n.default)({key:r.id,className:b("column-header",p.className,{selectable:!(!1===r.isSelectable)}),tabIndex:"-1",role:"columnheader",scope:"col","aria-sort":r.sortIndicator},!(!1===r.isSelectable)&&d&&{onClick:function(){d(r.id)}},{style:{width:l,height:u}}),o.default.createElement("div",{className:b("header-container")},a,o.default.createElement("span",{role:"button"},r.displayName),t))};g.propTypes=w;var v=(0,i.injectIntl)(g);t.default=v},72095:function(e,t,a){var r=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(10434)),o=h(a(67294)),u=r(a(45697)),d=r(a(47166)),i=r(a(47341)),c=a(25387),s=h(a(51051)),f=r(a(32096)),m=r(a(80998));a(67964);var _=r(a(72103));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var r={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,a&&a.set(e,r),r}var b=d.default.bind(_.default),w={ariaLabelledby:u.default.string,ariaLabel:u.default.string,id:u.default.string.isRequired,columns:u.default.arrayOf(m.default.columnShape),rows:u.default.arrayOf(m.default.rowShape),columnWidth:u.default.string,columnHeaderHeight:u.default.string,rowHeight:u.default.string,rowHeaderIndex:u.default.number,onColumnSelect:u.default.func,intl:u.default.shape({formatMessage:u.default.func})};function g(e){var t=e.id,a=e.ariaLabelledby,r=e.ariaLabel,l=e.columns,u=e.rows,d=e.columnHeaderHeight,c=e.onColumnSelect,m=e.intl,_=(0,o.useRef)(0),p=(0,o.useRef)(0),h=(0,o.useRef)(),w=(0,o.useCallback)((function(e){h.current=e,h.current.rows[_.current].cells[p.current].tabIndex=0}),[]),g=function(t){var a=e.rowHeight;return o.default.createElement("tr",{key:t.id,className:b("worklist-data-grid-row"),style:{height:a}},t.cells.map((function(t,a){return function(t,a){var r,l=e.rowHeaderIndex===a?"th":"td";return t.isMasked?r=m.formatMessage({id:"Terra.worklistDataGrid.maskedCell"}):t.content||(r=m.formatMessage({id:"Terra.worklistDataGrid.blank"})),o.default.createElement(l,(0,n.default)({key:a},{tabIndex:"-1"},{className:b("worklist-data-grid-cell",{masked:t.isMasked,selectable:!(t.isMasked||!1===t.isSelectable),blank:!t.content}),"aria-label":r}),!t.isMasked&&t.content&&o.default.createElement("div",{className:b("cell-content")},t.content))}(t,a)})))},v=(0,o.useContext)(i.default),k=b("worklist-data-grid",v.className);return o.default.createElement("table",{ref:w,id:t,role:"grid","aria-labelledby":a,"aria-label":r,className:k,onClick:function(e){var t=e.target.closest("td,th")||document.activeElement.closest("td,th");t&&(h.current.rows[_.current].cells[p.current].tabIndex=-1,_.current=t.parentElement.rowIndex,p.current=t.cellIndex,t.tabIndex=0,t.focus(),e.preventDefault())},onKeyDown:function(t){var a=t.target.parentElement.rowIndex,r=t.target.cellIndex,l=a,n=r;switch(t.keyCode){case s.KEY_UP:l-=1;break;case s.KEY_DOWN:l+=1;break;case s.KEY_LEFT:n-=1;break;case s.KEY_RIGHT:n+=1;break;case s.KEY_HOME:n=0,t.ctrlKey&&(l=1);break;case s.KEY_END:n=e.rows[0].cells.length-1,t.ctrlKey&&(l=e.rows.length);break;default:return}if(l>=h.current.rows.length||n>=h.current.rows[0].cells.length)t.preventDefault();else if(n<0||l<0)t.preventDefault();else{h.current.rows[a].cells[r].tabIndex=-1,_.current=l,p.current=n;var o=h.current.rows[l].cells[n];o.tabIndex=0,o.focus(),t.preventDefault()}}},o.default.createElement("tbody",null,function(t){if((null==t?void 0:t.length)>0)return o.default.createElement("tr",{height:e.columnHeaderHeight},t.map((function(t){return function(t){return o.default.createElement(f.default,{column:t,width:t.width||e.columnWidth,headerHeight:d,onColumnSelect:c})}(t)})))}(l),u.map((function(e){return g(e)}))))}g.propTypes=w,g.defaultProps={rowHeaderIndex:0};var v=(0,c.injectIntl)(g);t.default=v},67964:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},80998:function(e,t,a){var r=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(55511)),n=r(a(33902)),o=a(9504),u={cellShape:n.default,columnShape:o.columnShape,rowShape:l.default,SortIndicators:o.SortIndicators};t.default=u},33902:function(e,t,a){var r=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(45697)),n=l.default.shape({content:l.default.string,isMasked:l.default.bool,isSelectable:l.default.bool});t.default=n},9504:function(e,t,a){var r=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var l=r(a(45697)),n={ASCENDING:"ascending",DESCENDING:"descending"};t.SortIndicators=n;var o=l.default.shape({id:l.default.string.isRequired,displayName:l.default.string,sortIndicator:l.default.oneOf(Object.values(n)),hasError:l.default.bool,isSelectable:l.default.bool});t.columnShape=o},55511:function(e,t,a){var r=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(45697)),n=r(a(33902)),o=l.default.shape({id:l.default.string.isRequired,cells:l.default.arrayOf(n.default)});t.default=o},73621:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___kCuVY","clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___+z258","column-header":"ColumnHeaderCell-module__column-header___qg1gV","header-container":"ColumnHeaderCell-module__header-container___PwqED",selectable:"ColumnHeaderCell-module__selectable___9ga6w"}},72103:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___t0nx3","clinical-lowlight-theme":"WorklistDataGrid-module__clinical-lowlight-theme___BLIqI","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___aaS2w","worklist-data-grid-cell":"WorklistDataGrid-module__worklist-data-grid-cell___53lpz","worklist-data-grid-row":"WorklistDataGrid-module__worklist-data-grid-row___-L8mS",selectable:"WorklistDataGrid-module__selectable___1U92x","cell-content":"WorklistDataGrid-module__cell-content___ZGi1I",masked:"WorklistDataGrid-module__masked___rxJzP"}}}]);