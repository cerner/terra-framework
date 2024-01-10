"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[12587],{40996:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(r(67294)),n=i(r(45697)),l=i(r(19845)),d=i(r(47341)),o=i(r(66983)),m=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.default.bind(o.default),c=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},f={children:n.default.string},h=function(e){var t=e.children,r=u(e,m),n=a.default.useContext(d.default),o=(0,l.default)(s(["button",n.className]),r.className);return a.default.createElement("button",p({},r,{type:"button",className:o,onBlur:c,onMouseDown:x,"data-focus-styles-enabled":!0}),t)};h.propTypes=f;t.default=h},59278:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(r(67294)),n=m(r(45697)),l=m(r(19845)),d=m(r(47341)),o=m(r(30866));function m(e){return e&&e.__esModule?e:{default:e}}var i=l.default.bind(o.default),p={ariaLevel:n.default.oneOf(["2","3","4","5","6"]),children:n.default.node,variant:n.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},u=function(e){var t=e.ariaLevel,r=e.variant,n=e.children,l=a.default.useContext(d.default);return a.default.createElement("div",{className:i("notice",r,l.className)},a.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:i("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(r))),a.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:i("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(r),a.default.Children.map(n,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};u.propTypes=p,u.defaultProps={ariaLevel:"2",variant:"important"};t.default=u},47306:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(r(67294)),n=p(r(45697)),l=p(r(93967)),d=p(r(19845)),o=p(r(47341)),m=p(r(42620)),i=["title"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=d.default.bind(m.default),x={title:n.default.string},f=function(e){var t=e.title,r=s(e,i),n=a.default.useContext(o.default),d=(0,l.default)(c(["placeholder",n.className]),r.className),m=c(["inner"]);return a.default.createElement("div",u({},r,{className:d}),a.default.createElement("div",{className:m},a.default.createElement("p",{className:c("title")},t)))};f.propTypes=x,f.defaultProps={title:""};t.default=f},34261:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return n.default}});var a=d(r(59278)),n=d(r(47306)),l=d(r(40996));function d(e){return e&&e.__esModule?e:{default:e}}},33644:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});var a=r(87462),n=r(44925),l=(r(67294),r(81254)),d=(r(34261),r(33145)),o=r(78530),m=["components"],i={},p="wrapper";function u(e){var t=e.components,r=(0,n.Z)(e,m);return(0,l.mdx)(p,(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(o.ZP,{mdxType:"PropsTable"},(0,l.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"List of items to be displayed as content within the Folder Tree component."))),(0,l.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"headerLevel"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"3\n"))),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The heading level for the title of the folder tree."))),(0,l.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"title"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(o.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The title of the folder tree."))),(0,l.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"onExpandAll"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Callback function for expand all event."))),(0,l.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"onCollapseAll"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Callback function for collapse all event.")))))}u.isMDXComponent=!0;var s=["components"],c={},x="wrapper";function f(e){var t=e.components,r=(0,n.Z)(e,s);return(0,l.mdx)(x,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(o.ZP,{mdxType:"PropsTable"},(0,l.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"label"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(o.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The label for the folder tree item."))),(0,l.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"icon"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The icon to display to the left of the name."))),(0,l.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"subfolderItems"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'element',\n}],\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"List of items to display in a subfolder when it is clicked. This makes the item expandable and collapsible. It also makes the item's icon a Folder, overriding anything given as the icon prop."))),(0,l.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"isExpanded"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the item is expanded. Only items with subfolderItems can be expanded."))),(0,l.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"isSelected"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the item is selected. Since this component has the appearance of a radio button group, only one item should be selected at a time."))),(0,l.mdx)(o.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"onClick"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Callback function for click event."))),(0,l.mdx)(o.X2,{key:"ROW7",mdxType:"Row"},(0,l.mdx)(o.O,{mdxType:"PropNameCell"},"onToggle"),(0,l.mdx)(o.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Callback function for expand/collapse toggle event.")))))}f.isMDXComponent=!0;var h=r(27822),y=["components"],N={},b="wrapper";function g(e){var t=e.components,r=(0,n.Z)(e,y);return(0,l.mdx)(b,(0,a.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(d.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-folder-tree"},"Terra Folder Tree"),(0,l.mdx)("h2",{id:"table-of-contents"},"Table of Contents"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/about"},"Overview")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/about"},"Design Decisions")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/about"},"Examples")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/about"},"Accessibility")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/about"},"Implementation")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/about"},"Terra Standards")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/about"},"Properties"))),(0,l.mdx)("h2",{id:"overview"},"Overview"),(0,l.mdx)("p",null,"Folder Tree is an accessible ",(0,l.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/treeview/"},"tree view")," component that allows the user to display data in a hierarchical tree-like structure of nested rows."),(0,l.mdx)("p",null,"Folder Tree displays an action header containing the title of the folder tree, a toolbar\nwith buttons to expand or collapse all items in the folder tree, and zero or more rows which\nmay or may not include nested subrows.\nThe component contains only one tab stop with the arrow keys used for primary navigation.\nSee ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/about"},"keyboard interactions")," for all supported keys.\nOther key features of the component are listed in the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/about"},"Features")," section."),(0,l.mdx)(h.Z,{mdxType:"BasicFolderTree"}),(0,l.mdx)("h3",{id:"features"},"Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/about"},"Keyboard Navigation")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-selection"},"Selection")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-expand-collapse"},"Expand/Collapse")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-expand-collapse-all"},"Expand/Collapse All"))),(0,l.mdx)("h2",{id:"design-decisions"},"Design Decisions"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Folder Tree does not maintain consumer data state. Expanded/collapsed and selection state of rows\nmust be maintained by the consumer.")),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Link to Example"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/examples/basic-folder-tree"},"Basic Folder Tree")),(0,l.mdx)("td",{parentName:"tr",align:null},"An example of a basic folder tree.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-selection"},"Selection")),(0,l.mdx)("td",{parentName:"tr",align:null},"An example of implementing row selection for a folder tree.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-expand-collapse"},"Expand/Collapse")),(0,l.mdx)("td",{parentName:"tr",align:null},"An example of implementing expand/collapse behavior for a folder tree.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("a",{parentName:"td",href:"/terra-framework/pull/1973/components/cerner-terra-framework-docs/folder-tree/examples/folder-tree-expand-collapse-all"},"Expand/Collapse All")),(0,l.mdx)("td",{parentName:"tr",align:null},"An example of implementing expand/collapse all behavior for a folder tree.")))),(0,l.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,l.mdx)("h3",{id:"keyboard-interactions"},"Keyboard Interactions"),(0,l.mdx)("p",null,"Folder Tree supports the following keyboard interactions based on the ",(0,l.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/ARIA/apg/patterns/treeview/#keyboardinteraction"},"tree view keyboard interactions")," outlined by the ARIA Authoring Practices Guide (APG):"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Key interactions"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Right Arrow"),(0,l.mdx)("td",{parentName:"tr",align:null},"When focus is on a closed node, opens the node, and focus does not move.",(0,l.mdx)("br",null),"When focus is on an open node, moves focus to the first child node.",(0,l.mdx)("br",null),"When focus is on an end node (node with no children), does nothing.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Left Arrow"),(0,l.mdx)("td",{parentName:"tr",align:null},"When focus is on an open node, closes the node.",(0,l.mdx)("br",null),"When focus is on a child node that is also either an end node or a closed node, moves focus to the parent node.",(0,l.mdx)("br",null),"When focus is on a closed node with children, does nothing.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Down Arrow"),(0,l.mdx)("td",{parentName:"tr",align:null},"Moves focus to the next node that is focusable without opening or closing the node.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Up Arrow"),(0,l.mdx)("td",{parentName:"tr",align:null},"Moves focus to the previous node that is focusable without opening or closing a node.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Home (Windows)",(0,l.mdx)("br",null),"or",(0,l.mdx)("br",null),"Command + Left Arrow (Mac)"),(0,l.mdx)("td",{parentName:"tr",align:null},"Moves focus to the first node in the tree without opening or closing it.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"End (Windows)",(0,l.mdx)("br",null),"or",(0,l.mdx)("br",null),"Command + Right Arrow (Mac)"),(0,l.mdx)("td",{parentName:"tr",align:null},"Moves focus to the last node in the tree that is focusable without opening the node.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"Enter"),(0,l.mdx)("td",{parentName:"tr",align:null},"Performs the default action of the currently focused node. For parent nodes, it opens or closes the node. In single select trees, if the node has no children the current node is selected if not already selected (which is the default action).")))),(0,l.mdx)("h3",{id:"assistive-technology-support"},"Assistive Technology Support"),(0,l.mdx)("h4",{id:"wai-aria-roles-and-states"},"WAI ARIA Roles and States"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-label"},"aria-label"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"The value of the ",(0,l.mdx)("inlineCode",{parentName:"li"},"title")," prop is used as the ",(0,l.mdx)("inlineCode",{parentName:"li"},"aria-label")," for the folder tree.")))),(0,l.mdx)("h2",{id:"implementation"},"Implementation"),(0,l.mdx)("h3",{id:"installation"},"Installation"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-folder-tree"))))),(0,l.mdx)("h3",{id:"dependencies"},"Dependencies"),(0,l.mdx)("h4",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,l.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,l.mdx)("h2",{id:"properties"},"Properties"),(0,l.mdx)("h3",{id:"foldertree-props-table"},"FolderTree Props Table"),(0,l.mdx)(u,{mdxType:"FolderTreePropsTable"}),(0,l.mdx)("h3",{id:"foldertreeitem-props-table"},"FolderTreeItem Props Table"),(0,l.mdx)(f,{mdxType:"FolderTreeItemPropsTable"}),(0,l.mdx)("h2",{id:"terra-standards"},"Terra Standards"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,l.mdx)("h2",{id:"testing"},"Testing"),(0,l.mdx)("p",null,"Folder Tree uses ",(0,l.mdx)("inlineCode",{parentName:"p"},"uuid")," which changes the component's description id dynamically. To mock the return value with the Jest testing library, ",(0,l.mdx)("inlineCode",{parentName:"p"},"jest.spyOn")," can be used."),(0,l.mdx)("p",null,"If Enzyme ",(0,l.mdx)("inlineCode",{parentName:"p"},"shallow")," rendering is being used for the tests then the mock may not be required. However, if ",(0,l.mdx)("inlineCode",{parentName:"p"},"mount")," is used then ",(0,l.mdx)("inlineCode",{parentName:"p"},"uuid")," should be mocked as shown below:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-js"},"import { v4 as uuidv4 } from 'uuid';\n\nlet mockSpyUuid;\n\n// using a variable may result in failures. For best results, mock return value.\nbeforeAll(() => {\n  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');\n});\n\n// restore the mock\nafterAll(() => {\n  mockSpyUuid.mockRestore();\n});\n\n")))}g.isMDXComponent=!0},33145:function(e,t,r){r.d(t,{C:function(){return l}});var a=r(67294),n=r(22863),l=function(e){var t=e.url;return a.createElement(n.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-folder-tree",name:"terra-folder-tree",version:"1.0.0-alpha.4",url:t})}},66983:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);