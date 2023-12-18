"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[51351],{91683:function(e,t,l){var r=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=v(l(67294)),o=r(l(45697)),u=r(l(47166)),c=l(25387),d=l(61334),i=v(l(51051)),f=r(l(17092)),s=r(l(55281)),p=r(l(4959)),m=l(34614),b=r(l(20395));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(_=function(e){return e?l:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=_(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var E=u.default.bind(b.default),y={children:o.default.node,headerLevel:o.default.number,title:o.default.string.isRequired,onExpandAll:o.default.func,onCollapseAll:o.default.func,intl:o.default.shape({formatMessage:o.default.func}).isRequired},j=function(e){var t=e.children,l=e.headerLevel,r=e.title,n=e.onExpandAll,o=e.onCollapseAll,u=e.intl,c="folder-tree-".concat((0,d.v4)()),b=(0,a.useRef)();return a.default.createElement("div",{className:"folder-tree-container"},a.default.createElement(f.default,{text:r,level:l}),a.default.createElement(p.default,{align:"end",ariaControls:r,ariaLabel:r},a.default.createElement(s.default,{title:u.formatMessage({id:"Terra.folder-tree.button.expand-all"}),text:u.formatMessage({id:"Terra.folder-tree.button.expand-all-instructions"}),variant:"utility",icon:a.default.createElement(m.IconExpandRow,null),onClick:n,"aria-controls":c}),a.default.createElement(s.default,{title:u.formatMessage({id:"Terra.folder-tree.button.collapse-all"}),text:u.formatMessage({id:"Terra.folder-tree.button.collapse-all-instructions"}),variant:"utility",icon:a.default.createElement(m.IconCollapseRow,null),onClick:o,"aria-controls":c})),a.default.createElement("ul",{id:c,className:E("folder-tree"),role:"tree","aria-label":r,ref:b,onKeyDown:function(e){var t=b.current.querySelectorAll("[data-item-show-focus=true]"),l=Array.prototype.slice.call(t).filter((function(e){for(var t=e.parentNode;t&&t!==b.current;){if(t.hasAttribute("hidden"))return!1;t=t.parentNode}return!0})),r=Array.from(l).indexOf(e.target),n=l.length-1,a=function(){return l[0].focus()},o=function(){return l[n].focus()};switch(e.nativeEvent.keyCode){case i.KEY_END:e.preventDefault(),o();break;case i.KEY_HOME:e.preventDefault(),a();break;case i.KEY_UP:var u;e.preventDefault(),null===(u=l[r-1])||void 0===u||u.focus();break;case i.KEY_DOWN:var c;e.preventDefault(),null===(c=l[r+1])||void 0===c||c.focus();break;case i.KEY_LEFT:if(e.preventDefault(),e.metaKey){a();break}break;case i.KEY_RIGHT:if(e.preventDefault(),e.metaKey){o();break}}}},t))};j.propTypes=y,j.defaultProps={headerLevel:3};t.default=(0,c.injectIntl)(j)},38655:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(91683)),a=r(l(41261));n.default.Item=a.default;t.default=n.default},41261:function(e,t,l){var r=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(10434)),o=v(l(67294)),u=r(l(45697)),c=r(l(47166)),d=l(25387),i=v(l(51051)),f=r(l(7017)),s=r(l(78490)),p=l(34614),m=r(l(47341)),b=r(l(23259));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(_=function(e){return e?l:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=_(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var E=c.default.bind(b.default),y={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isExpanded:u.default.bool,isSelected:u.default.bool,onClick:u.default.func,onToggle:u.default.func,level:u.default.number,parentRef:u.default.number,intl:u.default.shape({formatMessage:u.default.func}).isRequired},j=function e(t){var l=t.icon,r=t.isExpanded,n=t.isSelected,u=t.label,d=t.level,b=t.onClick,_=t.onToggle,v=t.subfolderItems,y=t.parentRef,j=t.intl,g=(0,o.useContext)(m.default),h=(null==v?void 0:v.length)>0,k=(0,o.useRef)(),I=(0,o.useRef)(),O=h?o.default.createElement("ul",{className:E("subfolder"),role:"group",hidden:!r,ref:I},v.map((function(t){return o.default.createElement(e,(0,a.default)({},t.props,{intl:j,level:d+1,parentRef:k}))}))):null,w=O?o.default.createElement(p.IconFolder,{a11yLabel:j.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,x=r?o.default.createElement(p.IconCaretDown,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}):o.default.createElement(p.IconCaretRight,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}),P=(0,c.default)(E("folder-tree-item",{selected:n},g.className)),T=function(e){"INPUT"!==e.target.nodeName&&_&&_()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:P,role:"treeitem","aria-expanded":h?r:null,"aria-selected":n,onClick:h?T:b,onKeyDown:function(e){switch(e.nativeEvent.keyCode){case i.KEY_RETURN:e.preventDefault(),h?T(e):b(e);break;case i.KEY_LEFT:if(e.preventDefault(),e.metaKey)break;h&&r?T(e):null==y||y.current.focus();break;case i.KEY_RIGHT:if(e.preventDefault(),e.metaKey)break;if(r){if(h){var t=I.current.querySelector("[data-item-show-focus=true]");null==t||t.focus()}}else T(e)}},"data-item-show-focus":!0,tabIndex:0,ref:k},o.default.createElement("input",{type:"radio",checked:n,onChange:b,"aria-hidden":!0,tabIndex:-1,className:E("radio")}),o.default.createElement("span",{style:{paddingLeft:"".concat(d,"rem")}},o.default.createElement(s.default,{fitStart:o.default.createElement(f.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},h?o.default.createElement(f.default,{paddingRight:"small",isInlineBlock:!0},x):null,w),fill:o.default.createElement("span",null,u),alignFitStart:"center"}))),O)};j.propTypes=y,j.defaultProps={isExpanded:!1,isSelected:!1,level:0};t.default=(0,d.injectIntl)(j)},571:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(38416)),a=r(l(27424)),o=r(l(67294)),u=r(l(38655));function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function d(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){(0,n.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}t.default=function(){var e=o.default.useState(""),t=(0,a.default)(e,2),l=t[0],r=t[1],c=o.default.useState({projects:!1,"projects-2":!1,"projects-3":!1,"projects-4":!1}),i=(0,a.default)(c,2),f=i[0],s=i[1],p=function(e){r(e)},m=function(e){var t=d(d({},f),{},(0,n.default)({},e,!f[e]));s(t)};return o.default.createElement("div",{id:"expand-collapse-folder-tree"},o.default.createElement(u.default,{title:"Documents",key:"documents",onExpandAll:function(){var e=d({},f);Object.keys(e).forEach((function(t){e[t]=!0})),s(e)},onCollapseAll:function(){var e=d({},f);Object.keys(e).forEach((function(t){e[t]=!1})),s(e)}},o.default.createElement(u.default.Item,{label:"Projects - Level 1",key:"projects",isSelected:"projects"===l,isExpanded:f.projects,onClick:function(){p("projects")},onToggle:function(){m("projects")},subfolderItems:[o.default.createElement(u.default.Item,{label:"Important Document 1",key:"important-document-1",isSelected:"important-document-1"===l,isExpanded:f.projects,onClick:function(){r("important-document-1")}}),o.default.createElement(u.default.Item,{label:"Projects - Level 2",key:"projects-2",isSelected:"projects-2"===l,isExpanded:f["projects-2"],onClick:function(){p("projects-2")},onToggle:function(){m("projects-2")},subfolderItems:[o.default.createElement(u.default.Item,{label:"Projects - Level 3",key:"projects-3",isSelected:"projects-3"===l,isExpanded:f["projects-3"],onClick:function(){p("projects-3")},onToggle:function(){m("projects-3")},subfolderItems:[o.default.createElement(u.default.Item,{label:"Projects - Level 4",key:"projects-4",isSelected:"projects-4"===l,isExpanded:f["projects-4"],onClick:function(){p("projects-4")},onToggle:function(){m("projects-4")},subfolderItems:[o.default.createElement(u.default.Item,{label:"Important Document 4",key:"important-document-4",isSelected:"important-document-4"===l,isExpanded:f.projects,onClick:function(){r("important-document-4")}}),o.default.createElement(u.default.Item,{label:"Important Document 5",key:"important-document-5",isSelected:"important-document-5"===l,isExpanded:f.projects,onClick:function(){r("important-document-5")}})]}),o.default.createElement(u.default.Item,{label:"Important Document 3",key:"important-document-3",isSelected:"important-document-3"===l,isExpanded:f.projects,onClick:function(){r("important-document-3")}})]}),o.default.createElement(u.default.Item,{label:"Important Document 2",key:"important-document-2",isSelected:"important-document-2"===l,isExpanded:f.projects,onClick:function(){r("important-document-2")}})]})]})))}},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH","folder-tree-container":"FolderTree-module__folder-tree-container___z6ElC"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ",radio:"FolderTreeItem-module__radio___PUHKG"}}}]);