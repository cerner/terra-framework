"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[70316],{32560:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(11504)),n=i(a(3268)),l=i(a(74824)),d=i(a(7804)),m=i(a(48728)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=l.default.bind(m.default),c=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:n.default.string},f=function(e){var t=e.children,a=p(e,o),n=r.default.useContext(d.default),m=(0,l.default)(u(["button",n.className]),a.className);return r.default.createElement("button",s({},a,{type:"button",className:m,onBlur:c,onMouseDown:x,"data-focus-styles-enabled":!0}),t)};f.propTypes=h;t.default=f},27428:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(11504)),n=o(a(3268)),l=o(a(74824)),d=o(a(7804)),m=o(a(50987));function o(e){return e&&e.__esModule?e:{default:e}}var i=l.default.bind(m.default),s={ariaLevel:n.default.oneOf(["2","3","4","5","6"]),children:n.default.node,variant:n.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},p=function(e){var t=e.ariaLevel,a=e.variant,n=e.children,l=r.default.useContext(d.default);return r.default.createElement("div",{className:i("notice",a,l.className)},r.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:i("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),r.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:i("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),r.default.Children.map(n,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};p.propTypes=s,p.defaultProps={ariaLevel:"2",variant:"important"};t.default=p},72936:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(a(11504)),n=s(a(3268)),l=s(a(82084)),d=s(a(74824)),m=s(a(7804)),o=s(a(4620)),i=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=d.default.bind(o.default),x={title:n.default.string},h=function(e){var t=e.title,a=u(e,i),n=r.default.useContext(m.default),d=(0,l.default)(c(["placeholder",n.className]),a.className),o=c(["inner"]);return r.default.createElement("div",p({},a,{className:d}),r.default.createElement("div",{className:o},r.default.createElement("p",{className:c("title")},t)))};h.propTypes=x,h.defaultProps={title:""};t.default=h},31236:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return n.default}});var r=d(a(27428)),n=d(a(72936)),l=d(a(32560));function d(e){return e&&e.__esModule?e:{default:e}}},13520:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var r=a(45072),n=a(52822),l=a(11504),d=a(69788),m=a(31236),o=a(11416),i=function(e){var t=e.url;return l.createElement(o.c,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-grid",name:"terra-grid",version:"6.35.0",url:t})},s=a(28744),p=["components"],u={},c="wrapper";function x(e){var t=e.components,a=(0,n.c)(e,p);return(0,d.mdx)(c,(0,r.c)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(s.cp,{mdxType:"PropsTable"},(0,d.mdx)(s.WA,{key:"ROW1",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that identifies the element (or elements) that labels the grid."))),(0,d.mdx)(s.WA,{key:"ROW2",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"ariaLabel"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that labels the grid for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used."))),(0,d.mdx)(s.WA,{key:"ROW3",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"id"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(s.Ke,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that will be used to identify the Grid. If multiple grids are on the same page, each grid should have\na unique id."))),(0,d.mdx)(s.WA,{key:"ROW4",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"rows"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Data for content in the body of the Grid. Rows will be rendered in the order given. The first cell in each row will be the row header."))),(0,d.mdx)(s.WA,{key:"ROW5",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"sections"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Data for content in the body of the table. Sections will be rendered in the order given."))),(0,d.mdx)(s.WA,{key:"ROW6",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"columns"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Data for columns. Columns will be presented in the order given.\nThe first column, pinned to the leftmost side of the grid, will contain row headers.\nThe remaining columns will be rendered in the horizontal overflow."))),(0,d.mdx)(s.WA,{key:"ROW7",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"defaultColumnWidth"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"200\n"))),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Number indicating the default column width in px. This value will be used if no overriding width value is provided on a per-column basis."))),(0,d.mdx)(s.WA,{key:"ROW8",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"columnHeaderHeight"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"'2.5rem'\n"))),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that specifies the column height. Any valid CSS height value is accepted."))),(0,d.mdx)(s.WA,{key:"ROW9",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"rowHeight"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that specifies the height for the rows in the grid. Any valid CSS value is accepted."))),(0,d.mdx)(s.WA,{key:"ROW10",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"rowMinimumHeight"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"String that specifies the minimum height for the rows on the table. rowHeight takes precedence if valid CSS value is passed.\nWith this property the height of the cell will grow to fit the cell content."))),(0,d.mdx)(s.WA,{key:"ROW11",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"onCellSelect"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback function that is called when a selectable cell is selected. Parameters:\n@param {object} selectedCell object containing rowId, columnId and sectionId, all as strings."))),(0,d.mdx)(s.WA,{key:"ROW12",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"onSectionSelect"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Function that is called when a collapsible section is selected. Parameters:\n@param {string} sectionId sectionId"))),(0,d.mdx)(s.WA,{key:"ROW13",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"onClearSelectedCells"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback function that is called when all selected cells need to be unselected. Parameters: none."))),(0,d.mdx)(s.WA,{key:"ROW14",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"onCellRangeSelect"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback function that is called when a range of selectable cells is selected. Parameters:\n@param {array} cells - Array of cells each containing a rowId, columnId, and sectionId, all as strings."))),(0,d.mdx)(s.WA,{key:"ROW15",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"onRowSelect"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Callback function that is called when a row header cell is selected. Parameters:\n@param {object} rowToSelect object containing rowId and sectionId, both as strings.\n@param {boolean} isMetaPressed isMetaPressed"))),(0,d.mdx)(s.WA,{key:"ROW16",mdxType:"Row"},(0,d.mdx)(s.qe,{mdxType:"PropNameCell"},"hasVisibleColumnHeaders"),(0,d.mdx)(s.aI,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,d.mdx)(s.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,d.mdx)(s._w,{mdxType:"DefaultValueCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,d.mdx)(s.uC,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"Boolean to show/hide column headers. By default, it is set to ",(0,d.mdx)("inlineCode",{parentName:"p"},"true")," and column headers are visible.")))))}x.isMDXComponent=!0;var h=["components"],f={},g="wrapper";function N(e){var t=e.components,a=(0,n.c)(e,h);return(0,d.mdx)(g,(0,r.c)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(i,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"terra-flowsheetdatagrid"},"Terra FlowsheetDataGrid"),(0,d.mdx)("h2",{id:"table-of-contents"},"Table of Contents"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Overview")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Examples")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Accessibility")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Implementation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Properties")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"Terra Standards"))),(0,d.mdx)("h2",{id:"overview"},"Overview"),(0,d.mdx)(m.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},"Due to poor support in Apple VoiceOver for spanned grid headings, the use of sections in the Flowsheet Data Grid is not currently recommended for applications used on Apple devices."),(0,d.mdx)("p",null,"The Flowsheet Data Grid is an ",(0,d.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/grid/"},"accessible grid")," component that allows you to display data in a table-like structure of rows and columns."),(0,d.mdx)("p",null,"The Flowsheet Data Grid displays a header row and one or more rows of data.\nThe component contains only one tab stop with the arrow keys used for primary navigation.\nSee ",(0,d.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"keyboard interactions")," for all supported keys."),(0,d.mdx)("h3",{id:"features"},"Features"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/basic-flowsheet-data-grid"},"Navigation")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/no-result-cells"},"No Results Cells")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/cell-selection"},"Cell selection")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/row-selection"},"Row selection")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/flowsheet-with-sections"},"Sections")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/column-headers-hidden"},"Headerless Flowsheet"))),(0,d.mdx)("h2",{id:"examples"},"Examples"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Link to Example"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/basic-flowsheet-data-grid"},"BasicFlowsheetDataGrid")),(0,d.mdx)("td",{parentName:"tr",align:null},"An example of the Flowsheet Data Grid with basic keyboard interactions.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/no-result-cells"},"NoResultsCells")),(0,d.mdx)("td",{parentName:"tr",align:null},"An example containing ",(0,d.mdx)("em",{parentName:"td"},"No result")," cells.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/cell-selection"},"CellSelection")),(0,d.mdx)("td",{parentName:"tr",align:null},"An example demonstrating the ability to select a single cell or range of cells.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/column-headers-hidden"},"ColumnHeadersHidden")),(0,d.mdx)("td",{parentName:"tr",align:null},"An example containing visually hidden column headers.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/row-selection"},"RowSelection")),(0,d.mdx)("td",{parentName:"tr",align:null},"An example demonstrating the ability to select a row of cells.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("a",{parentName:"td",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/examples/flowsheet-with-sections"},"Flowsheet Data Grid with Sections")),(0,d.mdx)("td",{parentName:"tr",align:null},"An example demonstrating how to create a Flowsheet Data Grid with sections.")))),(0,d.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,d.mdx)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),(0,d.mdx)("p",null,"The keyboard interactions supported by Flowsheet Data Grid is similar to the ",(0,d.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/grid/"},"keyboard interactions for data grids"),", as outlined by the ARIA Authoring Practices Guide (APG)."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Key interactions"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Up Arrow"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moves focus one cell up. If focus is on the top cell in the column, focus does not move.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Down Arrow"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moves focus one cell down. If focus is on the bottom cell in the column, focus does not move.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Right Arrow"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moves focus one cell to the right. If focus is on the furthest right cell in the row, focus does not move.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Left Arrow"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moves focus one cell to the left. If focus is on the furthest left cell in the row, focus does not move.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Home"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moves focus to the first cell in the row that contains focus.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"End"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moves focus to the last cell in the row that contains focus.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Control + Home (Windows) ",(0,d.mdx)("br",null)," or ",(0,d.mdx)("br",null)," Ctrl + Command + Left Arrow (Mac)"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moves focus to the first cell in the first nonheader row.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Control + End (Windows) ",(0,d.mdx)("br",null)," or ",(0,d.mdx)("br",null)," Ctrl + Command + Right Arrow (Mac)"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moves focus to the last cell in the last row.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Tab"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moves focus out of the grid to the next focusable element in the tab sequence. If grid navigation is disabled thereby trapping the focus in a single grid cell, tab moves focus circularly amongst the focusable elements in the grid cell where focus is trapped.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Shift + Tab"),(0,d.mdx)("td",{parentName:"tr",align:null},"Moves focus out of the grid to the previous focusable element in the tab sequence. If grid navigation is disabled thereby trapping focus in a single grid cell, tab moves focus circularly amongst the focusable elements in the grid cell where focus is trapped.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Space"),(0,d.mdx)("td",{parentName:"tr",align:null},"Selects the focused cell when row selection mode is off or selects the focused row when row selection mode is on.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Enter"),(0,d.mdx)("td",{parentName:"tr",align:null},"Disables grid navigation and allows navigation in the focused cell. If the cell contains focusable content, focus moves to the first focusable element in the cell. Pressing Escape restores grid navigation.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Escape"),(0,d.mdx)("td",{parentName:"tr",align:null},"Removes all cell selections.",(0,d.mdx)("br",null)," When grid navigation is off, pressing Escape restores the grid navigation.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Shift + Up"),(0,d.mdx)("td",{parentName:"tr",align:null},"Extends cell selection one row up. The selection does not extend beyond the first nonheader row.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Shift + Down"),(0,d.mdx)("td",{parentName:"tr",align:null},"Extends cell selection one row down. The selection does not extend beyond the last row.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Shift + Left"),(0,d.mdx)("td",{parentName:"tr",align:null},"Extends cell selection one column to the left. The selection does not extend to the row header column.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Shift + Right"),(0,d.mdx)("td",{parentName:"tr",align:null},"Extends cell selection one column to the right. The selection does not extend beyond the last column.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"Shift + Space"),(0,d.mdx)("td",{parentName:"tr",align:null},"Selects the entire range of rows and columns between the starting and selected cells.")))),(0,d.mdx)("h3",{id:"assistive-technology-support"},"Assistive Technology Support"),(0,d.mdx)("h4",{id:"wai-aria-roles-and-states"},"WAI ARIA Roles and States"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"},"aria-label"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"Flowsheet Data Grid"),": When the ",(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"ariaLabel")," property is specified, the screen reader uses the aria-labeled value as the ",(0,d.mdx)("a",{parentName:"li",href:"https://w3c.github.io/accname/#dfn-accessible-name"},"accessible name")," for the grid."),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"Row"),": When the ",(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"ariaLabel")," property is specified, the screen reader uses the aria-labeled value as the ",(0,d.mdx)("a",{parentName:"li",href:"https://w3c.github.io/accname/#dfn-accessible-name"},"accessible name")," to announce interactions with the row."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby"},"aria-labelledby"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("strong",{parentName:"li"},"Flowsheet Data Grid"),": When the ",(0,d.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2034/components/cerner-terra-framework-docs/data-grid/flowsheet-data-grid/about"},"ariaLabelledBy")," property is specified, the screen reader uses the aria-labeled value to determine the ",(0,d.mdx)("a",{parentName:"li",href:"https://w3c.github.io/accname/#dfn-accessible-name"},"accessible name")," for the grid.")))),(0,d.mdx)("h2",{id:"implementation"},"Implementation"),(0,d.mdx)("h3",{id:"installation"},"Installation"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Install with ",(0,d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("inlineCode",{parentName:"li"},"npm install terra-data-grid"))))),(0,d.mdx)("h4",{id:"peer-dependencies"},"Peer Dependencies"),(0,d.mdx)("p",null,"This component requires the following peer dependencies to be installed in your app for the component to properly function."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,d.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,d.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,d.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,d.mdx)("h2",{id:"usage"},"Usage"),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { FlowsheetDataGrid } from 'terra-data-grid';\n")),(0,d.mdx)("h2",{id:"properties"},"Properties"),(0,d.mdx)(m.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},"When making changes to the columns, section, rows, or cells, the Flowsheet Data Grid component requires you to pass new objects so that React can detect the changes. In addition, ensure that you memoize callback functions using methods such as the useCallback hook to prevent unnecessary rerenders of components."),(0,d.mdx)("h3",{id:"flowsheet-data-grid-property-table"},"Flowsheet Data Grid Property Table"),(0,d.mdx)(x,{mdxType:"FlowsheetDataGridPropsTable"}),(0,d.mdx)("h3",{id:"column"},"Column"),(0,d.mdx)("p",null,"A column specifies the data to render a cell in the header row of the Flowsheet Data Grid."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("span",{style:{color:"#d53040"}},"required")),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"An identifier to uniquely identify the column in the grid.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"displayName")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"String of text to render in the column header cell.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"hasError")),(0,d.mdx)("td",{parentName:"tr",align:null},"bool"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"Boolean value indicating whether the column has an error in the data.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"width")),(0,d.mdx)("td",{parentName:"tr",align:null},"number"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"A number (in px) specifying the width of the column. If not provided, the Data Grid's default column width is used.")))),(0,d.mdx)("h3",{id:"rows"},"Rows"),(0,d.mdx)("p",null,"Rows define the cells rendered in the row and the row's selection properties.\nThe order in which the rows are provided is the order in which they are rendered."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"id")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"required"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"An identifier for the row. This identifier should be unique across the set of rows provided to the Grid.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"ariaLabel")),(0,d.mdx)("td",{parentName:"tr",align:null},"string"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"A string identifier used to describe the row contents. This value is used for accessibilty when announcing the row that is selected or deselected.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"isSelectable")),(0,d.mdx)("td",{parentName:"tr",align:null},"bool"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether the row is selectable.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"isSelected")),(0,d.mdx)("td",{parentName:"tr",align:null},"bool"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether the row should render as selected.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"cells")),(0,d.mdx)("td",{parentName:"tr",align:null},"array"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"[]"),(0,d.mdx)("td",{parentName:"tr",align:null},"An array of cell objects that define the content to be rendered in the row. The order in which the cells are rendered is determined by the order in which they are provided.")))),(0,d.mdx)("h3",{id:"cells"},"Cells"),(0,d.mdx)("p",null,"Cells define the content rendered in a given row and column. Cells are rendered in the order given and are expected to be in the same order as the column."),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",{parentName:"tr",align:null},"Name"),(0,d.mdx)("th",{parentName:"tr",align:null},"Type"),(0,d.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,d.mdx)("th",{parentName:"tr",align:null},"Default Value"),(0,d.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"content")),(0,d.mdx)("td",{parentName:"tr",align:null},"content"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"The content to render in the cell.")),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",{parentName:"tr",align:null},(0,d.mdx)("strong",{parentName:"td"},"isSelected")),(0,d.mdx)("td",{parentName:"tr",align:null},"bool"),(0,d.mdx)("td",{parentName:"tr",align:null},"optional"),(0,d.mdx)("td",{parentName:"tr",align:null},"none"),(0,d.mdx)("td",{parentName:"tr",align:null},"A boolean indicating whether the cell is selected.")))),(0,d.mdx)("h2",{id:"terra-standards"},"Terra Standards"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))))}N.isMDXComponent=!0},48728:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},50987:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},4620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);