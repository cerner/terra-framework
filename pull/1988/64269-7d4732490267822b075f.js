"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[64269,43089,37703],{92648:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(87462),a=n(44925),o=(n(67294),n(81254)),l=n(21165),i=["components"],c={},d="wrapper";function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"pinned-columns-with-row-selection"},"Pinned Columns with Row Selection"),(0,o.mdx)("h3",{id:"description"},"Description"),(0,o.mdx)("p",null,"This example demonstrates a ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1988/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," that supports both ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1988/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/cell-selection"},"Pinned Columns")," and ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1988/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/row-selection"},"Row Selection")," features.\nIt is important to note that when Row Selection mode is turned on, the Worklist Data Grid treats row selection cell column as a pinned column."),(0,o.mdx)("h3",{id:"properties-required"},"Properties required"),(0,o.mdx)("p",null,"Refer to the properties specified in ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1988/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/cell-selection"},"Pinned Columns")," and ",(0,o.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1988/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/examples/row-selection"},"Row Selection")," examples for details."),(0,o.mdx)(l.Z,{title:"Worklist Data Grid with Pinned Columns and Row Selection",mdxType:"PinnedColumnsWithRowSelection"}))}s.isMDXComponent=!0},21165:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(861)),l=r(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n(67294)),c=n(55730);function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var s=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],u=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.Z=function(){var e=(0,i.useRef)(),t=s,n=u,r=(0,i.useState)(n),a=(0,l.default)(r,2),d=a[0],m=a[1],p=(0,i.useState)(!1),f=(0,l.default)(p,2),w=f[0],h=f[1],k=(0,i.useCallback)((function(){var e=(0,o.default)(d);e.forEach((function(e){return e.isSelected=!1})),m(e)}),[d]),y=(0,i.useCallback)((function(){e.current.checked=!1,h(!1),k()}),[k]),b=(0,i.useCallback)((function(e){var t=(0,o.default)(d);e.forEach((function(e){var n=t.find((function(t){return t.id===e.id}));n&&(n.isSelected=e.selected)})),m(t)}),[d]),C=(0,i.useCallback)((function(){var e=(0,o.default)(d);e.forEach((function(e){return e.isSelected=!0})),m(e)}),[d]),g=(0,i.useCallback)((function(){e.current.checked||(e.current.checked=!0),h(!0)}),[]);return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"rowSelectionMode"},i.default.createElement("b",null,"Row Selection Mode")),i.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:function(e){e.target.checked||k(),h(e.target.checked)}})),i.default.createElement(c.WorklistDataGrid,{id:"pinned-columns-with-row-selection",pinnedColumns:t.slice(0,3),overflowColumns:t.slice(3),rows:d,rowHeaderIndex:0,defaultColumnWidth:180,ariaLabel:"Worklist Data Grid with Pinned Columns and Row Selection",hasSelectableRows:w,onRowSelect:b,onRowSelectAll:C,onClearSelectedRows:k,onDisableSelectableRows:y,onEnableRowSelection:g}))}},87462:function(e,t,n){function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},44925:function(e,t,n){function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return r}})}}]);