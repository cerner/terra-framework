"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[27494],{86159:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(96540)),l=i(a(5556)),n=i(a(67967)),d=i(a(23695)),o=i(a(36605)),m=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.default.bind(o.default),c=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:l.default.string},h=function(e){var t=e.children,a=u(e,m),l=r.default.useContext(d.default),o=(0,n.default)(s(["button",l.className]),a.className);return r.default.createElement("button",p({},a,{type:"button",className:o,onBlur:c,onMouseDown:x,"data-focus-styles-enabled":!0}),t)};h.propTypes=f;t.default=h},20999:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(a(96540)),l=m(a(5556)),n=m(a(67967)),d=m(a(23695)),o=m(a(17269));function m(e){return e&&e.__esModule?e:{default:e}}var i=n.default.bind(o.default),p={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},u=function(e){var t=e.ariaLevel,a=e.variant,l=e.children,n=r.default.useContext(d.default);return r.default.createElement("div",{className:i("notice",a,n.className)},r.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:i("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(a))),r.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:i("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(a),r.default.Children.map(l,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};u.propTypes=p,u.defaultProps={ariaLevel:"2",variant:"important"};t.default=u},18778:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(a(96540)),l=p(a(5556)),n=p(a(46942)),d=p(a(67967)),o=p(a(23695)),m=p(a(16576)),i=["title"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=d.default.bind(m.default),x={title:l.default.string},f=function(e){var t=e.title,a=s(e,i),l=r.default.useContext(o.default),d=(0,n.default)(c(["placeholder",l.className]),a.className),m=c(["inner"]);return r.default.createElement("div",u({},a,{className:d}),r.default.createElement("div",{className:m},r.default.createElement("p",{className:c("title")},t)))};f.propTypes=x,f.defaultProps={title:""};t.default=f},74647:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var r=d(a(20999)),l=d(a(18778)),n=d(a(86159));function d(e){return e&&e.__esModule?e:{default:e}}},38463:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var r=a(58168),l=a(53986),n=(a(96540),a(36665)),d=(a(74647),a(80607)),o=a(12883),m=["components"],i={},p="wrapper";function u(e){var t=e.components,a=(0,l.A)(e,m);return(0,n.mdx)(p,(0,r.A)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(o.Ay,{mdxType:"PropsTable"},(0,n.mdx)(o.fI,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The list of items to be displayed as content in the Folder Tree component."))),(0,n.mdx)(o.fI,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"headerLevel"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"3\n"))),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The heading level for the title of the folder tree."))),(0,n.mdx)(o.fI,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"title"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(o.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The title of the folder tree."))),(0,n.mdx)(o.fI,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"onExpandAll"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The callback function for expand all event."))),(0,n.mdx)(o.fI,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"onCollapseAll"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The callback function for collapse all event.")))))}u.isMDXComponent=!0;var s=["components"],c={},x="wrapper";function f(e){var t=e.components,a=(0,l.A)(e,s);return(0,n.mdx)(x,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(o.Ay,{mdxType:"PropsTable"},(0,n.mdx)(o.fI,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"label"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(o.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The label for the folder tree item."))),(0,n.mdx)(o.fI,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"icon"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The icon to display to the left of the name."))),(0,n.mdx)(o.fI,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"subfolderItems"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'element',\n}],\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The list of items to display in a subfolder when it is selected. This property makes the item expandable and collapsible. The item's icon also becomes a folder, overriding anything given as the icon property."))),(0,n.mdx)(o.fI,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"isExpanded"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Indicates whether the item is expanded. Only items with subfolderItems can be expanded."))),(0,n.mdx)(o.fI,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"isSelectable"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Indicates whether the item can be selected. Selectable items will display with a radio button."))),(0,n.mdx)(o.fI,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"isSelected"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Indicates whether the item is selected. Because this component has the appearance of a radio button group, only one item should be selected at a time."))),(0,n.mdx)(o.fI,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"onSelect"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The callback function for a click event."))),(0,n.mdx)(o.fI,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(o.dt,{mdxType:"PropNameCell"},"onToggle"),(0,n.mdx)(o.$d,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(o.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(o.NZ,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(o.Hd,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The callback function for an expand or collapse toggle event.")))))}f.isMDXComponent=!0;var h=a(61834),y=["components"],N={},b="wrapper";function g(e){var t=e.components,a=(0,l.A)(e,y);return(0,n.mdx)(b,(0,r.A)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(d.E,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-folder-tree"},"Terra Folder Tree"),(0,n.mdx)("h2",{id:"table-of-contents"},"Table of Contents"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/about"},"Overview")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/about"},"Design Decisions")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/about"},"Examples")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/about"},"Accessibility")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/about"},"Implementation")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/about"},"Terra Standards")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/about"},"Properties"))),(0,n.mdx)("h2",{id:"overview"},"Overview"),(0,n.mdx)("p",null,"The Folder Tree component is an accessible ",(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/treeview/"},"tree view")," that allows the user to navigate a folder structure in a hierarchical view of collapsible, nested rows."),(0,n.mdx)("p",null,"The Folder Tree component displays an action header containing the title of the folder tree, a toolbar\nwith buttons to expand or collapse all items in the folder tree, and zero or more rows that\nmay include nested subrows.\nThe tree part of the component contains only one tab stop and the arrow keys are used for primary navigation.\nSee ",(0,n.mdx)("a",{parentName:"p",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/about"},"Keyboard Interactions")," for all supported keys."),(0,n.mdx)(h.A,{mdxType:"BasicFolderTree"}),(0,n.mdx)("h3",{id:"features"},"Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/about"},"Keyboard Navigation")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-selection"},"Selection")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-expand-collapse"},"Expand and Collapse")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-expand-collapse-all"},"Expand and Collapse All"))),(0,n.mdx)("h2",{id:"design-decisions"},"Design Decisions"),(0,n.mdx)("p",null,"The Folder Tree component does not manage the state of consumer data. The consumer must manage the expanded, collapsed, and selection state of rows."),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Link to Example"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/examples/basic-folder-tree"},"Basic Folder Tree")),(0,n.mdx)("td",{parentName:"tr",align:null},"An example of a basic folder tree.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-selection"},"Selection")),(0,n.mdx)("td",{parentName:"tr",align:null},"An example of implementing single row selection for a folder tree.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-expand-collapse"},"Expand/Collapse")),(0,n.mdx)("td",{parentName:"tr",align:null},"An example of implementing expand and collapse behavior for a folder tree.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("a",{parentName:"td",href:"/terra-framework/pull/2149/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-expand-collapse-all"},"Expand/Collapse All")),(0,n.mdx)("td",{parentName:"tr",align:null},"An example of implementing expand and collapse all behavior for a folder tree.")))),(0,n.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,n.mdx)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),(0,n.mdx)("p",null,"The Folder Tree component supports the following keyboard interactions based on the ",(0,n.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/treeview/#keyboardinteraction"},"tree view keyboard interactions")," outlined by the ARIA Authoring Practices Guide (APG):"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Keys"),(0,n.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"RIGHT ARROW"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("ul",null,(0,n.mdx)("li",null,"When a collapsed row is active, the items expand, and the active row does not change."),(0,n.mdx)("li",null,"When an expanded row is active, the first subrow becomes active."),(0,n.mdx)("li",null,"When a row with no subrows is active, no action is performed.")))),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"LEFT ARROW"),(0,n.mdx)("td",{parentName:"tr",align:null},(0,n.mdx)("ul",null,(0,n.mdx)("li",null,"When an expanded row is active, the items collapse."),(0,n.mdx)("li",null,"When a collapsed subrow or a subrow with no further nested items is active, the main row becomes active."),(0,n.mdx)("li",null,"When a collapsed row with subrows is active, no action is performed.")))),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"DOWN ARROW"),(0,n.mdx)("td",{parentName:"tr",align:null},"Selects the row below the currently active row without expanding or collapsing any items.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"UP ARROW"),(0,n.mdx)("td",{parentName:"tr",align:null},"Selects the row above the currently active row without expanding or collapsing any items.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"HOME (Microsoft Windows)",(0,n.mdx)("br",null),"or",(0,n.mdx)("br",null),"COMMAND + LEFT ARROW (Apple Mac)"),(0,n.mdx)("td",{parentName:"tr",align:null},"Selects the first row in the tree without expanding or collapsing any items.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"END (Microsoft Windows)",(0,n.mdx)("br",null),"or",(0,n.mdx)("br",null),"COMMAND + RIGHT ARROW (Apple Mac)"),(0,n.mdx)("td",{parentName:"tr",align:null},"Selects the last row in the tree without expanding any items.")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"ENTER"),(0,n.mdx)("td",{parentName:"tr",align:null},"Performs the default action of the currently active row. For main rows, items are expanded or collapsed. In single select trees, if the row has no nested items, the current item is selected if not already selected by default.")))),(0,n.mdx)("h3",{id:"assistive-technology-support"},"Assistive Technology Support"),(0,n.mdx)("h4",{id:"wai-aria-roles-and-states"},"WAI ARIA Roles and States"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"},"aria-label"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"The value of the ",(0,n.mdx)("inlineCode",{parentName:"li"},"title")," property is used as the ",(0,n.mdx)("inlineCode",{parentName:"li"},"aria-label")," for the folder tree.")))),(0,n.mdx)("h2",{id:"implementation"},"Implementation"),(0,n.mdx)("h3",{id:"installation"},"Installation"),(0,n.mdx)("p",null,"Install with ",(0,n.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs"),":\n",(0,n.mdx)("inlineCode",{parentName:"p"},"npm install terra-folder-tree")),(0,n.mdx)("h3",{id:"dependencies"},"Dependencies"),(0,n.mdx)("h4",{id:"peer-dependencies"},"Peer Dependencies"),(0,n.mdx)("p",null,"Ensure that the following peer dependencies are installed in your application for the component to properly function:"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,n.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react"),(0,n.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,n.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,n.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,n.mdx)("h2",{id:"properties"},"Properties"),(0,n.mdx)("h3",{id:"foldertree-props-table"},"FolderTree Props Table"),(0,n.mdx)(u,{mdxType:"FolderTreePropsTable"}),(0,n.mdx)("h3",{id:"foldertreeitem-props-table"},"FolderTree.Item Props Table"),(0,n.mdx)(f,{mdxType:"FolderTreeItemPropsTable"}),(0,n.mdx)("h2",{id:"terra-standards"},"Terra Standards"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,n.mdx)("h2",{id:"testing"},"Testing"),(0,n.mdx)("p",null,"The Folder Tree component uses ",(0,n.mdx)("inlineCode",{parentName:"p"},"uuid"),", which changes the component's description ID dynamically. To mock the return value with the Jest testing library, you can use ",(0,n.mdx)("inlineCode",{parentName:"p"},"jest.spyOn"),"."),(0,n.mdx)("p",null,"If you are using Enzyme ",(0,n.mdx)("inlineCode",{parentName:"p"},"shallow")," rendering for the tests, then the mock may not be required. However, if ",(0,n.mdx)("inlineCode",{parentName:"p"},"mount")," is used, then ",(0,n.mdx)("inlineCode",{parentName:"p"},"uuid")," should be mocked as shown in the following example:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-js"},"import { v4 as uuidv4 } from 'uuid';\n\nlet mockSpyUuid;\n\n// using a variable may result in failures. For best results, mock return value.\nbeforeAll(() => {\n  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');\n});\n\n// restore the mock\nafterAll(() => {\n  mockSpyUuid.mockRestore();\n});\n\n")))}g.isMDXComponent=!0},80607:function(e,t,a){a.d(t,{E:function(){return n}});var r=a(96540),l=a(55713),n=function(e){var t=e.url;return r.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-folder-tree",name:"terra-folder-tree",version:"1.3.0",url:t})}},36605:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},17269:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},16576:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);