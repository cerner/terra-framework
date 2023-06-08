"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[78100],{78100:function(t,e,n){var o=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=o(n(67294)),a=o(n(72095)),l=o(n(81128)),r=function(){var t=l.default.cols,e=l.default.rows;return c.default.createElement(c.default.Fragment,null,c.default.createElement(a.default,{id:"default-terra-worklist-data-grid",columns:t,rows:e,rowHeaderIndex:0,rowHeight:"50px",columnWidth:"50px",columnHeaderHeight:"50px",ariaLabel:"Worklist Data Grid"}))};e.default=r},72095:function(t,e,n){var o=n(64836),c=n(18698);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=o(n(10434)),l=p(n(67294)),r=o(n(45697)),d=o(n(47166)),i=o(n(47341)),u=p(n(51051)),s=o(n(80998));n(67964);var f=o(n(72103));function m(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(m=function(t){return t?n:e})(t)}function p(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==c(t)&&"function"!=typeof t)return{default:t};var n=m(e);if(n&&n.has(t))return n.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in t)if("default"!==l&&Object.prototype.hasOwnProperty.call(t,l)){var r=a?Object.getOwnPropertyDescriptor(t,l):null;r&&(r.get||r.set)?Object.defineProperty(o,l,r):o[l]=t[l]}return o.default=t,n&&n.set(t,o),o}var h=d.default.bind(f.default),g={ariaLabelledby:r.default.string,ariaLabel:r.default.string,id:r.default.string.isRequired,columns:r.default.arrayOf(s.default.columnShape),rows:r.default.arrayOf(s.default.rowShape),columnWidth:r.default.string,columnHeaderHeight:r.default.string,rowHeight:r.default.string,rowHeaderIndex:r.default.number};function w(t){var e=t.id,n=t.ariaLabelledby,o=t.ariaLabel,c=t.columns,r=t.rows,d=(0,l.useRef)(0),s=(0,l.useRef)(0),f=(0,l.useRef)(),m=(0,l.useCallback)((function(t){f.current=t,f.current.rows[d.current].cells[s.current].tabIndex=0}),[]),p=function(e){var n=t.rowHeight;return l.default.createElement("tr",{key:e.id,className:h("worklist-data-grid-row"),style:{height:n}},e.cells.map((function(e,n){return function(e,n){var o={tabIndex:"-1"};return t.rowHeaderIndex===n?l.default.createElement("th",(0,a.default)({key:n},o,{className:h("worklist-data-grid-row-header")}),e.content):l.default.createElement("td",(0,a.default)({key:n},o,{className:h("worklist-data-grid-cell-data")}),e.content)}(e,n)})))},g=(0,l.useContext)(i.default),w=h("worklist-data-grid",g.className);return l.default.createElement("table",{ref:m,id:e,role:"grid","aria-labelledby":n,"aria-label":o,className:w,onClick:function(t){var e=t.target.closest("td,th")||document.activeElement.closest("td,th");e&&(f.current.rows[d.current].cells[s.current].tabIndex=-1,d.current=e.parentElement.rowIndex,s.current=e.cellIndex,e.tabIndex=0,e.focus(),t.preventDefault())},onKeyDown:function(e){var n=e.target.parentElement.rowIndex,o=e.target.cellIndex,c=n,a=o;switch(e.keyCode){case u.KEY_UP:c-=1;break;case u.KEY_DOWN:c+=1;break;case u.KEY_LEFT:a-=1;break;case u.KEY_RIGHT:a+=1;break;case u.KEY_HOME:a=0,e.ctrlKey&&(c=1);break;case u.KEY_END:a=t.rows[0].cells.length-1,e.ctrlKey&&(c=t.rows.length);break;default:return}if(c>=f.current.rows.length||a>=f.current.rows[0].cells.length)e.preventDefault();else if(a<0||c<0)e.preventDefault();else{f.current.rows[n].cells[o].tabIndex=-1,d.current=c,s.current=a;var l=f.current.rows[c].cells[a];l.tabIndex=0,l.focus(),e.preventDefault()}}},l.default.createElement("tbody",null,function(e){if((null==e?void 0:e.length)>0)return l.default.createElement("tr",{height:t.columnHeaderHeight},e.map((function(e){return function(e){var n=e.width||t.columnWidth,o=t.columnHeaderHeight;return l.default.createElement("th",{key:e.id,className:h("worklist-data-grid-column-header"),tabIndex:"-1",style:{width:n,height:o}},e.displayName)}(e)})))}(c),r.map((function(t){return p(t)}))))}w.propTypes=g,w.defaultProps={rowHeaderIndex:0};var _=w;e.default=_},67964:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(t){var e=this;do{if(e.matches(t))return e;e=e.parentElement||e.parentNode}while(null!==e&&1===e.nodeType);return null}))},80998:function(t,e,n){var o=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=o(n(55511)),a=o(n(33902)),l=o(n(9504)),r={cellShape:a.default,columnShape:l.default,rowShape:c.default};e.default=r},33902:function(t,e,n){var o=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=o(n(45697)),a=c.default.shape({content:c.default.string});e.default=a},9504:function(t,e,n){var o=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=o(n(45697)),a=c.default.shape({id:c.default.string.isRequired,displayName:c.default.string,acceptsFocus:c.default.bool});e.default=a},55511:function(t,e,n){var o=n(64836);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=o(n(45697)),a=o(n(33902)),l=c.default.shape({id:c.default.string.isRequired,cells:c.default.arrayOf(a.default)});e.default=l},72103:function(t,e,n){n.r(e),e.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___t0nx3","clinical-lowlight-theme":"WorklistDataGrid-module__clinical-lowlight-theme___BLIqI","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___aaS2w","worklist-data-grid-column-header":"WorklistDataGrid-module__worklist-data-grid-column-header___768Z2","worklist-data-grid-row-header":"WorklistDataGrid-module__worklist-data-grid-row-header___LoIzh","worklist-data-grid-cell-data":"WorklistDataGrid-module__worklist-data-grid-cell-data___-O+Sg","worklist-data-grid-row":"WorklistDataGrid-module__worklist-data-grid-row___-L8mS"}},81128:function(t){t.exports=JSON.parse('{"cols":[{"id":"Column-0","displayName":" Vitals"},{"id":"Column-1","displayName":"March 16"},{"id":"Column-2","displayName":"March 17"},{"id":"Column-3","displayName":"March 18"},{"id":"Column-4","displayName":"March 19"},{"id":"Column-5","displayName":"March 20"},{"id":"Column-6","displayName":"March 21"},{"id":"Column-7","displayName":"March 22"},{"id":"Column-8","displayName":"March 23"},{"id":"Column-9","displayName":"March 24"}],"rows":[{"id":"1","cells":[{"content":"Heart Rate Monitored (bpm)"},{"content":"68"},{"content":"66"},{"content":"67"},{"content":"120"},{"content":"69"},{"content":"52"},{"content":"67"},{"content":"72"},{"content":"70"}]},{"id":"2","cells":[{"content":"Temperature Oral (degC)"},{"content":"36.7"},{"content":"36.9"},{"content":"37"},{"content":"35.2"},{"content":"35"},{"content":"36"},{"content":"35.8"},{"content":"36.7"},{"content":"35.6"}]},{"id":"3","cells":[{"content":"Cardiac Index (L/min/m2)"},{"content":"2.25"},{"content":"2.28"},{"content":"2.8"},{"content":"3.0"},{"content":"2.25"},{"content":"3.1"},{"content":"2.9"},{"content":"2.8"},{"content":"3.1"}]},{"id":"4","cells":[{"content":"ICP (mmHg)"},{"content":"11"},{"content":"11"},{"content":"12"},{"content":"13"},{"content":"14"},{"content":"12.5"},{"content":"11.2"},{"content":"12.8"},{"content":"10.9"}]},{"id":"5","cells":[{"content":"CPP (mmHg)"},{"content":"63"},{"content":"47"},{"content":"48"},{"content":"49"},{"content":"50"},{"content":"51"},{"content":"51"},{"content":"53"},{"content":"54"}]},{"id":"6","cells":[{"content":"Oxygen Flow Rate (L/min)"},{"content":"2.0"},{"content":"6.5"},{"content":"7.2"},{"content":"2.3"},{"content":"8.4"},{"content":"--"},{"content":"9.9"},{"content":"11.0"},{"content":"2.5"}]},{"id":"7","cells":[{"content":"SpO2 (%)"},{"content":"97"},{"content":"97.2"},{"content":"96.3"},{"content":"97.4"},{"content":"98.5"},{"content":"97.6"},{"content":"96.7"},{"content":"97.8"},{"content":"96.9"}]},{"id":"8","cells":[{"content":"FIO2 (%)"},{"content":"45"},{"content":"43"},{"content":"44"},{"content":"45"},{"content":"44"},{"content":"43"},{"content":"42"},{"content":"44"},{"content":"45"}]},{"id":"9","cells":[{"content":"pO2 Arterial (mmHg)"},{"content":"92.3"},{"content":"91.5"},{"content":"92.4"},{"content":"93.5"},{"content":"92.6"},{"content":"91.5"},{"content":"92.5"},{"content":"91.6"},{"content":"92.5"}]},{"id":"10","cells":[{"content":"pCO2 Arterial(mmHg)"},{"content":"48.3"},{"content":"44.7"},{"content":"43.1"},{"content":"46.4"},{"content":"49.1"},{"content":"42.7"},{"content":"45.8"},{"content":"48.4"},{"content":"45.3"}]},{"id":"11","cells":[{"content":"pH Arterial(mmHg)"},{"content":"7.33"},{"content":"7.36"},{"content":"7.24"},{"content":"7.47"},{"content":"7.89"},{"content":"7.56"},{"content":"7.37"},{"content":"7.43"},{"content":"7.59"}]},{"id":"12","cells":[{"content":"Bicarbonate(mEq/L)"},{"content":"34.8"},{"content":"-27.6"},{"content":"32.3"},{"content":"31.8"},{"content":"33.5"},{"content":"34.4"},{"content":"35.9"},{"content":"33.7"},{"content":"32.8"}]},{"id":"13","cells":[{"content":"Lactate (mmol/L)"},{"content":"0.1"},{"content":"0.3"},{"content":"0.7"},{"content":"0.2"},{"content":"0.5"},{"content":"0.9"},{"content":"0.3"},{"content":"0.6"},{"content":"0.8"}]},{"id":"14","cells":[{"content":"Weight (kg)"},{"content":"58.8"},{"content":"59"},{"content":"55.1"},{"content":"52.6"},{"content":"57"},{"content":"59.5"},{"content":"53.2"},{"content":"56"},{"content":"55.7"}]},{"id":"15","cells":[{"content":"Hemoglobin (g/dL)"},{"content":"18"},{"content":"--"},{"content":"--"},{"content":"19"},{"content":"17"},{"content":"21"},{"content":"18"},{"content":"--"},{"content":"20"}]},{"id":"16","cells":[{"content":"Platelets (billion/L)"},{"content":"461"},{"content":"475"},{"content":"--"},{"content":"412"},{"content":"392"},{"content":"421"},{"content":"418"},{"content":"428"},{"content":"418"}]},{"id":"17","cells":[{"content":"WBCs (billion/L)"},{"content":"12.2"},{"content":"11.9"},{"content":"--"},{"content":"12"},{"content":"10.8"},{"content":"11.2"},{"content":"12.1"},{"content":"11.7"},{"content":"12.1"}]},{"id":"18","cells":[{"content":"C-Reactive Protein  (mg/L)"},{"content":"120"},{"content":"98"},{"content":"--"},{"content":"108"},{"content":"103"},{"content":"112"},{"content":"121"},{"content":"117"},{"content":"121"}]},{"id":"19","cells":[{"content":"Activated PTT  (seconds)"},{"content":"101"},{"content":"97"},{"content":"--"},{"content":"94"},{"content":"85"},{"content":"100"},{"content":"95"},{"content":"98"},{"content":"102"}]},{"id":"20","cells":[{"content":"INR"},{"content":"1.97"},{"content":"--"},{"content":"--"},{"content":"2.34"},{"content":"--"},{"content":"--"},{"content":"2.09"},{"content":"--"},{"content":"1.95"}]},{"id":"21","cells":[{"content":"Creatinine mg/dL"},{"content":"0.76"},{"content":"--"},{"content":"--"},{"content":"0.78"},{"content":"--"},{"content":"--"},{"content":"0.73"},{"content":"--"},{"content":"0/85"}]},{"id":"22","cells":[{"content":"Potassium mEq/L"},{"content":"4.5"},{"content":"--"},{"content":"--"},{"content":"4.5"},{"content":"--"},{"content":"4.9"},{"content":"--"},{"content":"--"},{"content":"4.6"}]},{"id":"23","cells":[{"content":"Troponin ng/mL"},{"content":"0.03"},{"content":"--"},{"content":"--"},{"content":"0.04"},{"content":"--"},{"content":"--"},{"content":"0.04"},{"content":"--"},{"content":"0.03"}]},{"id":"24","cells":[{"content":"Glucose mg/dL"},{"content":"161"},{"content":"--"},{"content":"--"},{"content":"162"},{"content":"--"},{"content":"179"},{"content":"--"},{"content":"--"},{"content":"176"}]}]}')}}]);