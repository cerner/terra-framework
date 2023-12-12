"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[67492],{22863:function(e,t,a){var l=a(64836);t.Z=void 0;var n=l(a(67294)),r=l(a(45697)),d=l(a(47166)),m=l(a(17422)),i=d.default.bind(m.default),o={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var t=e.src,a=e.name,l=e.url,r=e.version,d=n.default.createElement("a",{className:i("badge"),href:l||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},n.default.createElement("span",{className:i("badge-name")},l?"package":"npm"),n.default.createElement("span",{className:i("badge-version")},"v".concat(r))),m=t?n.default.createElement("a",{className:i("badge"),href:t},n.default.createElement("span",{className:i("badge-name")},"github"),n.default.createElement("span",{className:i("badge-version")},"source")):void 0;return n.default.createElement("div",{className:i("badge-container")},d,m)};u.propTypes=o;var p=u;t.Z=p},40996:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=o(a(67294)),n=o(a(45697)),r=o(a(47166)),d=o(a(47341)),m=o(a(66983)),i=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.default.bind(m.default),c=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:n.default.string},y=function(e){var t=e.children,a=p(e,i),n=l.default.useContext(d.default),m=(0,r.default)(s(["button",n.className]),a.className);return l.default.createElement("button",u({},a,{type:"button",className:m,onBlur:c,onMouseDown:x,"data-focus-styles-enabled":!0}),t)};y.propTypes=f;t.default=y},59278:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(67294)),n=i(a(45697)),r=i(a(47166)),d=i(a(47341)),m=i(a(30866));function i(e){return e&&e.__esModule?e:{default:e}}var o=r.default.bind(m.default),u={ariaLevel:n.default.oneOf(["2","3","4","5","6"]),children:n.default.node,variant:n.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},p=function(e){var t=e.ariaLevel,a=e.variant,n=e.children,r=l.default.useContext(d.default);return l.default.createElement("div",{className:o("notice",a,r.className)},l.default.createElement("div",{className:o("accessory"),"aria-hidden":"true",focusable:"false"}),l.default.createElement("div",{role:"heading",className:o("title"),"aria-level":t},l.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),l.default.createElement("div",{className:o("children")},function(e){return"not-supported"===e?l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{className:o("paragraph")},"This component was designed and tested according to the documented implementation."),l.default.createElement("p",{className:o("paragraph")},"Using the component incorrectly:",l.default.createElement("ul",{className:o("list")},l.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),l.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),l.default.createElement("li",null,l.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),l.default.Children.map(n,(function(e){return"string"==typeof e?l.default.createElement("p",null,e):e}))))};p.propTypes=u,p.defaultProps={ariaLevel:"2",variant:"important"};t.default=p},47306:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(a(67294)),n=u(a(45697)),r=u(a(94184)),d=u(a(47166)),m=u(a(47341)),i=u(a(42620)),o=["title"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=d.default.bind(i.default),x={title:n.default.string},f=function(e){var t=e.title,a=s(e,o),n=l.default.useContext(m.default),d=(0,r.default)(c(["placeholder",n.className]),a.className),i=c(["inner"]);return l.default.createElement("div",p({},a,{className:d}),l.default.createElement("div",{className:i},l.default.createElement("p",{className:c("title")},t)))};f.propTypes=x,f.defaultProps={title:""};t.default=f},34261:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return n.default}});var l=d(a(59278)),n=d(a(47306)),r=d(a(40996));function d(e){return e&&e.__esModule?e:{default:e}}},85891:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(87462),n=a(44925),r=(a(67294),a(81254)),d=a(34261),m=(a(33615),a(78530)),i=["components"],o={},u="wrapper";function p(e){var t=e.components,a=(0,n.Z)(e,i);return(0,r.mdx)(u,(0,l.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(m.ZP,{mdxType:"PropsTable"},(0,r.mdx)(m.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"id"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(m.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that will be used to identify the table. If multiple tables are on the same page, each table should have\na unique id."))),(0,r.mdx)(m.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that identifies the element (or elements) that labels the table."))),(0,r.mdx)(m.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that labels the table for accessibility. If ariaLabelledBy is specified, ariaLabel will not be used."))),(0,r.mdx)(m.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"columns"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Data for columns."))),(0,r.mdx)(m.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"rows"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Data for rows (list items) content."))),(0,r.mdx)(m.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"rowHeight"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Row height should be a valid css string with height in px, em, or rem units."))),(0,r.mdx)(m.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"numberOfColumns"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"1\n"))),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A number of visual columns. Defaults to 1. Number of visual rows is calculated as the number of items divided by the number of columns, rounded up."))),(0,r.mdx)(m.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"flowHorizontally"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"By default the items go from top to bottom, then break to the next column.\nIf flowHorizontally prop is set to true, items will flow left to right, then break to the next row."))),(0,r.mdx)(m.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"width"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'100%'\n"))),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A string for container's width. Any valid css string. Defaults to '100%'.\nIn case when all the columns has their widths explicitly set to a number, the width of the list will be determined by the width of it's columns unless the flexGrow prop would allow them grow."))),(0,r.mdx)(m.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"onCellSelect"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function that is called when a selectable cell is selected. Parameters:\n@param {string} rowId rowId\n@param {string} columnId columnId"))),(0,r.mdx)(m.X2,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"onClearSelection"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function that is called when all selected cells need to be unselected. Parameters: none."))),(0,r.mdx)(m.X2,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"columnMinimumWidth"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Columns minimum width should be a valid css string in value in px, em, or rem units."))),(0,r.mdx)(m.X2,{key:"ROW13",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"columnMaximumWidth"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Columns maximum width should be a valid css string in value in px, em, or rem units."))),(0,r.mdx)(m.X2,{key:"ROW14",mdxType:"Row"},(0,r.mdx)(m.O,{mdxType:"PropNameCell"},"rowHeaderIndex"),(0,r.mdx)(m.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(m.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(m.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"0\n"))),(0,r.mdx)(m.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A zero-based index indicating which column represents the row header.")))))}p.isMDXComponent=!0;var s=["components"],c={},x="wrapper";function f(e){var t=e.components,a=(0,n.Z)(e,s);return(0,r.mdx)(x,(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"terra-compactinteractivelist"},"Terra CompactInteractiveList"),(0,r.mdx)(d.Notice,{variant:"caution",ariaLevel:"2",mdxType:"Notice"},"Terra Compact Interactive List is currently under alpha release. There may be breaking changes between releases until it is stable with the 1.0 release."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-compact-interactive-list")," component  provides users a way to render a collection of interactive data in a list format into a single tab stop. The list can be arranged in columns to fit wide space, and the user can navigate between them with the arrow keys."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-compact-interactive-list"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"compact-interactive-list-props-table"},"Compact Interactive List Props Table"),(0,r.mdx)(p,{mdxType:"CompactInteractiveListPropsTable"}))}f.isMDXComponent=!0},33615:function(e,t,a){a.d(t,{C:function(){return r}});var l=a(67294),n=a(22863),r=function(e){var t=e.url;return l.createElement(n.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-file-path",name:"terra-file-path",version:"1.1.0",url:t})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66983:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);