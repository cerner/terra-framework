"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[51905],{91683:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=v(l(67294)),o=n(l(45697)),u=n(l(47166)),c=l(25387),f=l(61334),d=v(l(51051)),i=n(l(17092)),s=n(l(55281)),m=n(l(4959)),p=l(34614),_=n(l(20395));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(b=function(e){return e?l:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=b(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var g=u.default.bind(_.default),y={children:o.default.node,headerLevel:o.default.number,title:o.default.string.isRequired,onExpandAll:o.default.func,onCollapseAll:o.default.func,intl:o.default.shape({formatMessage:o.default.func}).isRequired},E=function(e){var t=e.children,l=e.headerLevel,n=e.title,a=e.onExpandAll,o=e.onCollapseAll,u=e.intl,c="folder-tree-".concat((0,f.v4)()),_=(0,r.useRef)();return r.default.createElement("div",{className:"folder-tree-container"},r.default.createElement(i.default,{text:n,level:l}),r.default.createElement(m.default,{align:"end",ariaControls:n,ariaLabel:n},r.default.createElement(s.default,{title:u.formatMessage({id:"Terra.folder-tree.button.expand-all"}),text:u.formatMessage({id:"Terra.folder-tree.button.expand-all-instructions"}),variant:"utility",icon:r.default.createElement(p.IconExpandRow,null),onClick:a,"aria-controls":c}),r.default.createElement(s.default,{title:u.formatMessage({id:"Terra.folder-tree.button.collapse-all"}),text:u.formatMessage({id:"Terra.folder-tree.button.collapse-all-instructions"}),variant:"utility",icon:r.default.createElement(p.IconCollapseRow,null),onClick:o,"aria-controls":c})),r.default.createElement("ul",{id:c,className:g("folder-tree"),role:"tree","aria-label":n,ref:function(e){_=e},onKeyDown:function(e){var t=_.querySelectorAll("[data-item-show-focus=true]"),l=Array.prototype.slice.call(t).filter((function(e){for(var t=e.parentNode;t&&t!==_;){if(t.hasAttribute("hidden"))return!1;t=t.parentNode}return!0})),n=Array.from(l).indexOf(e.target),a=l.length-1,r=function(){return l[0].focus()},o=function(){return l[a].focus()};switch(e.nativeEvent.keyCode){case d.KEY_END:e.preventDefault(),o();break;case d.KEY_HOME:e.preventDefault(),r();break;case d.KEY_UP:var u;e.preventDefault(),null===(u=l[n-1])||void 0===u||u.focus();break;case d.KEY_DOWN:var c;e.preventDefault(),null===(c=l[n+1])||void 0===c||c.focus();break;case d.KEY_LEFT:if(e.preventDefault(),e.metaKey){r();break}break;case d.KEY_RIGHT:if(e.preventDefault(),e.metaKey){o();break}}}},t))};E.propTypes=y,E.defaultProps={headerLevel:3};t.default=(0,c.injectIntl)(E)},38655:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(91683)),r=n(l(41261));a.default.Item=r.default;t.default=a.default},41261:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(10434)),o=v(l(67294)),u=n(l(45697)),c=n(l(47166)),f=l(25387),d=v(l(51051)),i=n(l(7017)),s=n(l(78490)),m=l(34614),p=n(l(47341)),_=n(l(23259));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(b=function(e){return e?l:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=b(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var g=c.default.bind(_.default),y={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isExpanded:u.default.bool,isSelected:u.default.bool,onClick:u.default.func,onToggle:u.default.func,level:u.default.number,parentRef:u.default.number,intl:u.default.shape({formatMessage:u.default.func}).isRequired},E=function e(t){var l=t.icon,n=t.isExpanded,a=t.isSelected,u=t.label,f=t.level,_=t.onClick,b=t.onToggle,v=t.subfolderItems,y=t.parentRef,E=t.intl,h=(0,o.useContext)(p.default),k=(null==v?void 0:v.length)>0,j=(0,o.useRef)(),I=(0,o.useRef)(),O=k?o.default.createElement("ul",{className:g("subfolder"),role:"group",hidden:!n,ref:I},v.map((function(t){return o.default.createElement(e,(0,r.default)({},t.props,{intl:E,level:f+1,parentRef:j}))}))):null,w=O?o.default.createElement(m.IconFolder,{a11yLabel:E.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,x=n?o.default.createElement(m.IconCaretDown,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}):o.default.createElement(m.IconCaretRight,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}),D=(0,c.default)(g("folder-tree-item",{selected:a},h.className)),P=function(e){"INPUT"!==e.target.nodeName&&b&&b()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:D,role:"treeitem","aria-expanded":k?n:null,"aria-selected":a,onClick:k?P:_,onKeyDown:function(e){switch(e.nativeEvent.keyCode){case d.KEY_RETURN:case d.KEY_SPACE:e.preventDefault(),k?P(e):_(e);break;case d.KEY_LEFT:if(e.preventDefault(),e.metaKey)break;k&&n?P(e):y.current.focus();break;case d.KEY_RIGHT:if(e.preventDefault(),e.metaKey)break;if(n){if(k){var t=I.current.querySelector("[data-item-show-focus=true]");null==t||t.focus()}}else P(e)}},"data-item-show-focus":!0,tabIndex:0,ref:j},o.default.createElement("input",{type:"radio",checked:a,onChange:_,"aria-hidden":!0,tabIndex:-1,className:g("radio")}),o.default.createElement("span",{style:{paddingLeft:"".concat(f,"rem")}},o.default.createElement(s.default,{fitStart:o.default.createElement(i.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},k?o.default.createElement(i.default,{paddingRight:"small",isInlineBlock:!0},x):null,w),fill:o.default.createElement("span",null,u),alignFitStart:"center"}))),O)};E.propTypes=y,E.defaultProps={isExpanded:!1,isSelected:!1,level:0};t.default=(0,f.injectIntl)(E)},19827:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(38416)),r=n(l(27424)),o=n(l(67294)),u=l(34614),c=n(l(38655));function f(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function d(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?f(Object(l),!0).forEach((function(t){(0,a.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):f(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}t.default=function(){var e=o.default.useState(""),t=(0,r.default)(e,2),l=t[0],n=t[1],f=o.default.useState({projects:!1,tests:!1}),i=(0,r.default)(f,2),s=i[0],m=i[1],p=function(e){var t=d(d({},s),{},(0,a.default)({},e,!s[e]));m(t)};return o.default.createElement("div",{id:"basic-folder-tree"},o.default.createElement(c.default,{title:"Documents",key:"documents",onExpandAll:function(){var e=d({},s);Object.keys(e).forEach((function(t){e[t]=!0})),m(e)},onCollapseAll:function(){var e=d({},s);Object.keys(e).forEach((function(t){e[t]=!1})),m(e)}},o.default.createElement(c.default.Item,{label:"info.txt",icon:o.default.createElement(u.IconDocuments,null),key:"info",isSelected:"info"===l,onClick:function(){n("info")}}),o.default.createElement(c.default.Item,{label:"projects_2023.txt",icon:o.default.createElement(u.IconDocuments,null),key:"projects_2023",isSelected:"projects_2023"===l,onClick:function(){n("projects_2023")}}),o.default.createElement(c.default.Item,{label:"Projects",key:"projects",isSelected:"projects"===l,isExpanded:s.projects,onClick:function(){n("projects")},onToggle:function(){p("projects")},subfolderItems:[o.default.createElement(c.default.Item,{label:"project_data1.txt",icon:o.default.createElement(u.IconDocuments,null),key:"project_data1",isSelected:"project_data1"===l,onClick:function(){n("project_data1")}}),o.default.createElement(c.default.Item,{label:"project_data2.txt",icon:o.default.createElement(u.IconDocuments,null),key:"project_data2",isSelected:"project_data2"===l,onClick:function(){n("project_data2")}}),o.default.createElement(c.default.Item,{label:"Tests",key:"tests",isSelected:"tests"===l,isExpanded:s.tests,onClick:function(){n("tests")},onToggle:function(){p("tests")},icon:o.default.createElement(u.IconDocuments,null),subfolderItems:[o.default.createElement(c.default.Item,{label:"very_very_very_very_very_very_very_long_name_test.txt",icon:o.default.createElement(u.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===l,onClick:function(){n("long-name-test")}}),o.default.createElement(c.default.Item,{label:"test.txt",icon:o.default.createElement(u.IconDocuments,null),key:"test",isSelected:"test"===l,onClick:function(){n("test")}}),o.default.createElement(c.default.Item,{label:"even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:o.default.createElement(u.IconDocuments,null),key:"longer-name-test",isSelected:"longer-name-test"===l,onClick:function(){n("longer-name-test")}})]})]})))}},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH","folder-tree-container":"FolderTree-module__folder-tree-container___z6ElC"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ",radio:"FolderTreeItem-module__radio___PUHKG"}}}]);