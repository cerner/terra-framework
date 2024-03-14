"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[42673],{29976:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(58168),a=n(53986),o=(n(96540),n(36665)),i=n(3011),l=["components"],c={},d="wrapper";function s(e){var t=e.components,n=(0,a.A)(e,l);return(0,o.mdx)(d,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"pinned-columns-with-row-selection"},"Pinned Columns with Row Selection"),(0,o.mdx)("h3",{id:"description"},"Description"),(0,o.mdx)("p",null,"This example demonstrates a ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," that supports both ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/cell-selection"},"Pinned Columns")," and ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/row-selection"},"Row Selection")," features.\nIt is important to note that when Row Selection mode is turned on, the Worklist Data Grid treats row selection cell column as a pinned column."),(0,o.mdx)("h3",{id:"properties-required"},"Properties required"),(0,o.mdx)("p",null,"Refer to the properties specified in ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/cell-selection"},"Pinned Columns")," and ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/row-selection"},"Row Selection")," examples for details."),(0,o.mdx)(i.A,{title:"Worklist Data Grid with Pinned Columns and Row Selection",mdxType:"PinnedColumnsWithRowSelection"}))}s.isMDXComponent=!0},3011:function(e,t,n){var r=n(24994),a=n(73738);t.A=void 0;var o=r(n(41132)),i=r(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(96540)),c=n(45663);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var s=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],u=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.A=function(){var e=(0,l.useRef)(),t=s,n=u,r=(0,l.useState)(n),a=(0,i.default)(r,2),d=a[0],m=a[1],f=(0,l.useState)(!1),p=(0,i.default)(f,2),w=p[0],h=p[1],k=(0,l.useCallback)((function(){var e=(0,o.default)(d);e.forEach((function(e){return e.isSelected=!1})),m(e)}),[d]),y=(0,l.useCallback)((function(){e.current.checked=!1,h(!1),k()}),[k]),b=(0,l.useCallback)((function(e){var t=(0,o.default)(d);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),m(t)}),[d]),C=(0,l.useCallback)((function(){var e=(0,o.default)(d);e.forEach((function(e){return e.isSelected=!0})),m(e)}),[d]),g=(0,l.useCallback)((function(){e.current.checked||(e.current.checked=!0),h(!0)}),[]);return l.default.createElement(l.default.Fragment,null,l.default.createElement("div",null,l.default.createElement("label",{htmlFor:"rowSelectionMode"},l.default.createElement("b",null,"Row Selection Mode")),l.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:function(e){e.target.checked||k(),h(e.target.checked)}})),l.default.createElement(c.WorklistDataGrid,{id:"pinned-columns-with-row-selection",pinnedColumns:t.slice(0,3),overflowColumns:t.slice(3),rows:d,rowHeaderIndex:0,defaultColumnWidth:180,ariaLabel:"Worklist Data Grid with Pinned Columns and Row Selection",hasSelectableRows:w,onRowSelect:b,onRowSelectAll:C,onClearSelectedRows:k,onDisableSelectableRows:y,onEnableRowSelection:g}))}},58168:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{A:function(){return r}})},53986:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{A:function(){return r}})}}]);