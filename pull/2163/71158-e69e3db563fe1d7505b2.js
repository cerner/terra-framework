"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[71158],{201:function(e,t,n){var a=n(24994),o=n(73738);t.A=void 0;var l=a(n(85715)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var r=l?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}(n(96540)),r=a(n(5556)),c=a(n(67967)),s=n(92912),d=a(n(49558)),u=a(n(53665)),m=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(p.default),y={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,o=e.title,r=e.description,c=e.isExpanded,p=(0,i.useState)(c),f=(0,l.default)(p,2),y=f[0],x=f[1],C=(0,i.useState)(!1),v=(0,l.default)(C,2),b=v[0],N=v[1],E=i.default.useContext(s.ThemeContext),k=void 0!==a,w=function(){N(!b),y&&x(!y)},A=function(){x(!y),b&&N(!b)},D=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:h("template",E.className)},i.default.createElement("div",{className:h("header")},o&&i.default.createElement("h2",{className:h("title")},o)),i.default.createElement("div",{className:h("content")},r&&i.default.createElement("div",{className:h("description")},r),t),i.default.createElement("div",{className:h("footer")},n?i.default.createElement("div",{className:h("button-container")},k&&i.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":b}),onClick:w,onKeyDown:function(e){return D(e,w)},onBlur:_,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(d.default,{className:h("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(u.default,{className:h("chevron")})),i.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":y}),onClick:A,onKeyDown:function(e){return D(e,A)},onBlur:_,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(d.default,{className:h("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(u.default,{className:h("chevron")}))):null,i.default.createElement("div",null,b&&i.default.createElement("div",{className:h("css")},a),y&&i.default.createElement("div",{className:h("code")},n))))};x.propTypes=y,x.defaultProps={isExpanded:!1};t.A=x},59606:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(58168),o=n(53986),l=n(96540),i=n(36665),r=n(67459),c=["components"],s={};function d(e){var t=e.components,n=(0,o.A)(e,c);return(0,i.mdx)("wrapper",(0,a.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable no-param-reassign */\nimport React from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\nimport { DisclosureManagerContext } from 'terra-disclosure-manager';\nimport DisclosureComponent from './disclosure/DisclosureComponent';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' }, // column action prop is added later inside the component\n    { id: 'Column-1', displayName: 'Location' }, // column action prop is added later inside the component\n    { id: 'Column-2', displayName: 'Illness Severity' }, // column action prop is added later inside the component\n    { id: 'Column-3', displayName: 'Visit' }, // column action prop is added later inside the component\n    { id: 'Column-4', displayName: 'Allergy' }, // column action prop is added later inside the component\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst ColumnActions = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  // Add actions props to first 5 columns\n  cols.forEach((col, columnIndex) => {\n    if (columnIndex < 5) {\n      col.action = {\n        label: `${col.displayName} action`,\n        onClick: () => disclosureManager.disclose({\n          preferredType: 'panel',\n          size: 'small',\n          content: {\n            component: (\n              <DisclosureComponent\n                columnHeader={col.displayName}\n                rowHeader=\"Detailed Info\"\n                content=\"According to the Journal of Healthcare Management/American College of Healthcare Executives, a 500-bed hospital loses over $4 million annually due to clinical communication inefficiencies. A unified clinical communication strategy can help health systems begin to close the gap.\"\n                name={col.displayName}\n              />\n            ),\n          },\n        }),\n      };\n    }\n  });\n\n  return (\n    <WorklistDataGrid\n      id=\"worklist-data-grid-with-column-actions\"\n      pinnedColumns={cols.slice(0, 3)}\n      overflowColumns={cols.slice(3)}\n      rows={rows}\n      rowHeaderIndex={rowHeaderIndex}\n      defaultColumnWidth={180}\n      ariaLabel=\"Worklist Data Grid with Column Actions\"\n    />\n  );\n};\n\nexport default ColumnActions;\n\n")))}d.isMDXComponent=!0;var u=n(201),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(u.A,{title:t||"Column Actions",description:n,example:l.createElement(r.A,null),exampleSrc:l.createElement(d,null),isExpanded:a})},p=["components"],f={},h="wrapper";function y(e){var t=e.components,n=(0,o.A)(e,p);return(0,i.mdx)(h,(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"column-actions"},"Column Actions"),(0,i.mdx)("h3",{id:"description"},"Description"),(0,i.mdx)("p",null,"This example demonstrates a ",(0,i.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2163/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," that supports Column Actions."),(0,i.mdx)("h4",{id:"required-properties"},"Required Properties"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("strong",{parentName:"p"},(0,i.mdx)("a",{parentName:"strong",href:"/terra-framework/pull/2163/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"action")," property")," requires the following properties:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"label")," property: The label for the action button. "),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("strong",{parentName:"li"},"onClick")," callback property: When the user clicks on an action button, this callback is requested.")),(0,i.mdx)(m,{mdxType:"ColumnActions"}))}y.isMDXComponent=!0},67459:function(e,t,n){var a=n(24994);t.A=void 0;var o=a(n(96540)),l=n(45663),i=n(12643),r=a(n(27578)),c=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],s=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.A=function(){var e=c,t=s,n=o.default.useContext(i.DisclosureManagerContext);return e.forEach((function(e,t){t<5&&(e.action={label:"".concat(e.displayName," action"),onClick:function(){return n.disclose({preferredType:"panel",size:"small",content:{component:o.default.createElement(r.default,{columnHeader:e.displayName,rowHeader:"Detailed Info",content:"According to the Journal of Healthcare Management/American College of Healthcare Executives, a 500-bed hospital loses over $4 million annually due to clinical communication inefficiencies. A unified clinical communication strategy can help health systems begin to close the gap.",name:e.displayName})}})}})})),o.default.createElement(l.WorklistDataGrid,{id:"worklist-data-grid-with-column-actions",pinnedColumns:e.slice(0,3),overflowColumns:e.slice(3),rows:t,rowHeaderIndex:0,defaultColumnWidth:180,ariaLabel:"Worklist Data Grid with Column Actions"})}},27578:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(17383)),l=a(n(34579)),i=a(n(28452)),r=a(n(63072)),c=a(n(29511)),s=a(n(96540)),d=a(n(5556)),u=a(n(67967)),m=a(n(23986)),p=a(n(54495)),f=a(n(82941)),h=n(12643),y=a(n(25871));function _(e,t,n){return t=(0,r.default)(t),(0,i.default)(e,g()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var x=u.default.bind(y.default),C={name:d.default.string,content:d.default.string,rowHeader:d.default.string,columnHeader:d.default.string,disclosureManager:h.disclosureManagerShape},v=function(e){function t(e){var n;return(0,o.default)(this,t),(n=_(this,t,[e])).checkLockState=n.checkLockState.bind(n),n.state={text:void 0},n}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.disclosureManager;e&&e.registerDismissCheck&&e.registerDismissCheck(this.checkLockState)}},{key:"checkLockState",value:function(){var e=this;return this.state.text&&this.state.text.length?new Promise((function(t,n){confirm("".concat(e.props.name," has unsaved changes that will be lost. Do you wish to continue?"))?t():n()})):Promise.resolve()}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.name,a=e.content,o=e.rowHeader,l=e.columnHeader;return s.default.createElement(p.default,{fill:!0,header:s.default.createElement(f.default,{title:"Disclosure - ".concat(n),onClose:t.closeDisclosure})},s.default.createElement("div",{className:x("content-wrapper")},s.default.createElement("h3",null,"".concat(o," - ").concat(l)),s.default.createElement("p",null,a),s.default.createElement(m.default,{text:"Dismiss",onClick:function(){t.dismiss().catch((function(){console.log("Dismiss failed. A lock must be in place.")}))}})))}}])}(s.default.Component);v.propTypes=C,v.defaultProps={name:"Disclosure Component"};var b=(0,h.withDisclosureManager)(v);t.default=b},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},25871:function(e,t,n){n.r(t),t.default={"content-wrapper":"DisclosureComponent-module__content-wrapper___2tYpZ"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;n[a]=e[a]}return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{A:function(){return a}})}}]);