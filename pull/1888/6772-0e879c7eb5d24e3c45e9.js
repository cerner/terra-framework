"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[6772],{91683:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),r=n(l(45697)),o=n(l(47166)),u=n(l(17092)),d=n(l(41261)),c=n(l(20395)),f=o.default.bind(c.default),i={children:r.default.node.isRequired,title:r.default.string.isRequired,headerLevel:r.default.number},s=function(e){var t=e.children,l=e.title,n=e.headerLevel;return a.default.createElement(a.default.Fragment,null,a.default.createElement(u.default,{text:l,level:n}),a.default.createElement("ul",{className:f("folder-tree"),role:"tree"},t))};s.propTypes=i,s.defaultProps={headerLevel:3},s.Item=d.default;t.default=s},41261:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(l(10434)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}(l(67294)),u=n(l(45697)),d=n(l(47166)),c=l(25387),f=n(l(7017)),i=n(l(78490)),s=l(34614),m=n(l(47341)),_=n(l(23259));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}var g=d.default.bind(_.default),v={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isSelected:u.default.bool,onClick:u.default.func,level:u.default.number,intl:u.default.shape({formatMessage:u.default.func}).isRequired},b=function e(t){var l=t.icon,n=t.label,a=t.subfolderItems,u=t.isSelected,c=t.onClick,_=t.level,p=t.intl,v=(0,o.useContext)(m.default),b=(null==a?void 0:a.length)>0?o.default.createElement("ul",{className:g("subfolder"),role:"group"},a.map((function(t){return o.default.createElement(e,(0,r.default)({},t.props,{intl:p,level:_+1}))}))):null,y=b?o.default.createElement(s.IconFolder,{a11yLabel:p.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,k=(0,d.default)(g("folder-tree-item",{selected:u},v.className));return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:k,role:"treeitem","aria-selected":u},o.default.createElement("input",{type:"radio",checked:u,onClick:c}),o.default.createElement("span",{style:{paddingLeft:"".concat(_,"rem")}},o.default.createElement(i.default,{fitStart:o.default.createElement(f.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},y),fill:n,alignFitStart:"center"}))),b)};b.propTypes=v,b.defaultProps={isSelected:!1,level:0};t.default=(0,c.injectIntl)(b)},19827:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(27424)),r=n(l(67294)),o=l(34614),u=n(l(91683));t.default=function(){var e=r.default.useState(""),t=(0,a.default)(e,2),l=t[0],n=t[1];return r.default.createElement("div",{id:"basic-folder-tree"},r.default.createElement(u.default,{title:"Documents",key:"documents"},r.default.createElement(u.default.Item,{label:"info.txt",icon:r.default.createElement(o.IconDocuments,null),key:"info",isSelected:"info"===l,onClick:function(){n("info")}}),r.default.createElement(u.default.Item,{label:"projects_2023.txt",icon:r.default.createElement(o.IconDocuments,null),key:"projects_2023",isSelected:"projects_2023"===l,onClick:function(){n("projects_2023")}}),r.default.createElement(u.default.Item,{label:"Projects",key:"projects",isSelected:"projects"===l,onClick:function(){n("projects")},subfolderItems:[r.default.createElement(u.default.Item,{label:"project_data1.txt",icon:r.default.createElement(o.IconDocuments,null),key:"project_data1",isSelected:"project_data1"===l,onClick:function(){n("project_data1")}}),r.default.createElement(u.default.Item,{label:"project_data2.txt",icon:r.default.createElement(o.IconDocuments,null),key:"project_data2",isSelected:"project_data2"===l,onClick:function(){n("project_data2")}}),r.default.createElement(u.default.Item,{label:"Tests",key:"tests",isSelected:"tests"===l,onClick:function(){n("tests")},icon:r.default.createElement(o.IconDocuments,null),subfolderItems:[r.default.createElement(u.default.Item,{label:"very_very_very_very_very_very_very_long_name_test.txt",icon:r.default.createElement(o.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===l,onClick:function(){n("long-name-test")}}),r.default.createElement(u.default.Item,{label:"test.txt",icon:r.default.createElement(o.IconDocuments,null),key:"test",isSelected:"test"===l,onClick:function(){n("test")}}),r.default.createElement(u.default.Item,{label:"even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:r.default.createElement(o.IconDocuments,null),key:"longer-name-test",isSelected:"longer-name-test"===l,onClick:function(){n("longer-name-test")}})]})]})))}},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ"}}}]);