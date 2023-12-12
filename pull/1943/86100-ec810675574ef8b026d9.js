"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[86100],{22863:function(e,t,a){var l=a(64836);t.Z=void 0;var n=l(a(67294)),r=l(a(45697)),d=l(a(47166)),m=l(a(17422)),i=d.default.bind(m.default),o={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},p=function(e){var t=e.src,a=e.name,l=e.url,r=e.version,d=n.default.createElement("a",{className:i("badge"),href:l||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},n.default.createElement("span",{className:i("badge-name")},l?"package":"npm"),n.default.createElement("span",{className:i("badge-version")},"v".concat(r))),m=t?n.default.createElement("a",{className:i("badge"),href:t},n.default.createElement("span",{className:i("badge-name")},"github"),n.default.createElement("span",{className:i("badge-version")},"source")):void 0;return n.default.createElement("div",{className:i("badge-container")},d,m)};p.propTypes=o;var u=p;t.Z=u},40996:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(67294)),n=o(a(45697)),r=o(a(47166)),d=o(a(47341)),m=o(a(66983)),i=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.default.bind(m.default),c=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g={children:n.default.string},h=function(e){var t=e.children,a=u(e,i),n=l.default.useContext(d.default),m=(0,r.default)(s(["button",n.className]),a.className);return l.default.createElement("button",p({},a,{type:"button",className:m,onBlur:c,onMouseDown:x,"data-focus-styles-enabled":!0}),t)};h.propTypes=g;t.default=h},59278:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(67294)),n=i(a(45697)),r=i(a(47166)),d=i(a(47341)),m=i(a(30866));function i(e){return e&&e.__esModule?e:{default:e}}var o=r.default.bind(m.default),p={ariaLevel:n.default.oneOf(["2","3","4","5","6"]),children:n.default.node,variant:n.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},u=function(e){var t=e.ariaLevel,a=e.variant,n=e.children,r=l.default.useContext(d.default);return l.default.createElement("div",{className:o("notice",a,r.className)},l.default.createElement("div",{className:o("accessory"),"aria-hidden":"true",focusable:"false"}),l.default.createElement("div",{role:"heading",className:o("title"),"aria-level":t},l.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),l.default.createElement("div",{className:o("children")},function(e){return"not-supported"===e?l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{className:o("paragraph")},"This component was designed and tested according to the documented implementation."),l.default.createElement("p",{className:o("paragraph")},"Using the component incorrectly:",l.default.createElement("ul",{className:o("list")},l.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),l.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),l.default.createElement("li",null,l.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),l.default.Children.map(n,(function(e){return"string"==typeof e?l.default.createElement("p",null,e):e}))))};u.propTypes=p,u.defaultProps={ariaLevel:"2",variant:"important"};t.default=u},47306:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=p(a(67294)),n=p(a(45697)),r=p(a(94184)),d=p(a(47166)),m=p(a(47341)),i=p(a(42620)),o=["title"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=d.default.bind(i.default),x={title:n.default.string},g=function(e){var t=e.title,a=s(e,o),n=l.default.useContext(m.default),d=(0,r.default)(c(["placeholder",n.className]),a.className),i=c(["inner"]);return l.default.createElement("div",u({},a,{className:d}),l.default.createElement("div",{className:i},l.default.createElement("p",{className:c("title")},t)))};g.propTypes=x,g.defaultProps={title:""};t.default=g},34261:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return n.default}});var l=d(a(59278)),n=d(a(47306)),r=d(a(40996));function d(e){return e&&e.__esModule?e:{default:e}}},22933:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(87462),n=a(44925),r=a(67294),d=a(81254),m=(a(34261),a(22863)),i=function(e){var t=e.url;return r.createElement(m.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-grid",name:"terra-grid",version:"6.35.0",url:t})},o=a(78530),p=["components"],u={},s="wrapper";function c(e){var t=e.components,a=(0,n.Z)(e,p);return(0,d.mdx)(s,(0,l.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(o.ZP,{mdxType:"PropsTable"},(0,d.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that identifies the element (or elements) that labels the grid."))),(0,d.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that labels the grid for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used."))),(0,d.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"id"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(o.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that will be used to identify the Grid. If multiple grids are on the same page, each grid should have\na unique id."))),(0,d.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"rows"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Data for content in the body of the Grid. Rows will be rendered in the order given. The first cell in each row will be the row header."))),(0,d.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"sections"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Data for content in the body of the table. Sections will be rendered in the order given."))),(0,d.mdx)(o.X2,{key:"ROW6",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"columns"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Data for columns. Columns will be presented in the order given.\nThe first column, pinned to the leftmost side of the grid, will contain row headers.\nThe remaining columns will be rendered in the horizontal overflow."))),(0,d.mdx)(o.X2,{key:"ROW7",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"defaultColumnWidth"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"200\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis."))),(0,d.mdx)(o.X2,{key:"ROW8",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"columnHeaderHeight"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"'2.5rem'\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that specifies the column height. Any valid CSS height value is accepted."))),(0,d.mdx)(o.X2,{key:"ROW9",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"rowHeight"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"'2.5rem'\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that specifies the height for the rows in the grid. Any valid CSS value is accepted."))),(0,d.mdx)(o.X2,{key:"ROW10",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"onCellSelect"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback function that is called when a selectable cell is selected. Parameters:\n@param {string} rowId rowId\n@param {string} columnId columnId"))),(0,d.mdx)(o.X2,{key:"ROW11",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"onSectionSelect"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Function that is called when a collapsible section is selected. Parameters: ",(0,d.mdx)("inlineCode",{parentName:"p"},"onSectionSelect(sectionId)")))),(0,d.mdx)(o.X2,{key:"ROW12",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"onClearSelectedCells"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback function that is called when all selected cells need to be unselected. Parameters: none."))),(0,d.mdx)(o.X2,{key:"ROW13",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"onCellRangeSelect"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback function that is called when a range of selectable cells is selected. Parameters:\n@param {array} cells - Array of cells each containing a rowId and columnId, both as strings."))),(0,d.mdx)(o.X2,{key:"ROW14",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"onRowSelect"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback function that is called when a row header cell is selected. Parameters:\n@param {object} rowToSelect object containing rowId and sectionId, both as strings."))),(0,d.mdx)(o.X2,{key:"ROW15",mdxType:"Row"},(0,d.mdx)(o.O,{mdxType:"PropNameCell"},"hasVisibleColumnHeaders"),(0,d.mdx)(o.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,d.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Boolean to show/hide column headers. By default, it is set to ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," and column headers are visible.")))))}c.isMDXComponent=!0;var x=["components"],g={},h="wrapper";function f(e){var t=e.components,a=(0,n.Z)(e,x);return(0,d.mdx)(h,(0,l.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(i,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"terra-flowsheetdatagrid"},"Terra FlowsheetDataGrid"),(0,d.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Install with ",(0,d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"npm install terra-data-grid"))))),(0,d.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,d.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,d.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,d.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,d.mdx)("h2",{id:"usage"},"Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { FlowsheetDataGrid } from 'terra-data-grid';\n")),(0,d.mdx)("h2",{id:"component-features"},"Component Features"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,d.mdx)("h2",{id:"examples"},"Examples"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Link to Example"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/1943/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/basic-flowsheet-data-grid"},"BasicFlowsheetDataGrid")),(0,d.mdx)("td",{parentName:"tr",align:null},"An example of the Flowsheet Data Grid with basic keyboard interactions.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/1943/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/no-result-cells"},"NoResultsCells")),(0,d.mdx)("td",{parentName:"tr",align:null},'An example containing "No result" cells.')),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/1943/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/cell-selection"},"CellSelection")),(0,d.mdx)("td",{parentName:"tr",align:null},"An example demonstrating the ability to select a single cell or range of cells.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/1943/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/column-headers-hidden"},"ColumnHeadersHidden")),(0,d.mdx)("td",{parentName:"tr",align:null},"An example containing visually hidden column headers.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/1943/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/row-selection"},"RowSelection")),(0,d.mdx)("td",{parentName:"tr",align:null},"An example demonstrating the ability to select a row of cells.")))),(0,d.mdx)("h2",{id:"grid-props-table"},"Grid props table"),(0,d.mdx)(c,{mdxType:"FlowsheetDataGridPropsTable"}),(0,d.mdx)("h3",{id:"column"},"Column"),(0,d.mdx)("p",null,"A column specifies the data to render a cell in the header row of the Flowsheet Data Grid."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("span",{style:{color:"#d53040"}},"required")),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"An identifier to uniquely identify the column within the grid.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"displayName")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"String of text to render within the column header cell.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"hasError")),(0,d.mdx)("td",{parentName:"tr",align:null},"bool"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean value indicating whether or not the column has an error in the data.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"width")),(0,d.mdx)("td",{parentName:"tr",align:null},"number"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"A number (in px) specifying the width of the column. If not provided, the Data Grid's default column width will be used.")))),(0,d.mdx)("h3",{id:"rows"},"Rows"),(0,d.mdx)("p",null,"Rows define the cells rendered within the row as well as the row's selection properties.\nThe order in which the rows are provided will be the order in which they are rendered."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"required"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"An identifier for the row. This identifier should be unique across the set of rows provided to the Grid.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"ariaLabel")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"A string identifier used to describe the row contents. This value will be used for accessibilty when announcing the row that is selected or deselected.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"isSelectable")),(0,d.mdx)("td",{parentName:"tr",align:null},"bool"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the row is selectable.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"isSelected")),(0,d.mdx)("td",{parentName:"tr",align:null},"bool"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the row should render as selected.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"cells")),(0,d.mdx)("td",{parentName:"tr",align:null},"array"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"[]"),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of cell objects that define the content to be rendered in the row. The order in which the cells are rendered is determined by the order in which they are provided.")))),(0,d.mdx)("h3",{id:"cells"},"Cells"),(0,d.mdx)("p",null,"Cells define the content rendered in a given row, and column. Cells will be rendered in the order given and are expected to be in the same order as the column."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"content")),(0,d.mdx)("td",{parentName:"tr",align:null},"content"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"The content to render within the cell.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"isSelected")),(0,d.mdx)("td",{parentName:"tr",align:null},"bool"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether or not the cell is selected.")))))}f.isMDXComponent=!0},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66983:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);