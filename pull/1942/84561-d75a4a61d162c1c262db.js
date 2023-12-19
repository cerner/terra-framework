"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[84561],{91683:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=v(l(67294)),o=r(l(45697)),u=r(l(47166)),d=l(25387),f=l(61334),i=v(l(51051)),c=r(l(17092)),s=r(l(55281)),m=r(l(4959)),_=l(34614),p=r(l(20395));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(g=function(e){return e?l:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=g(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var b=u.default.bind(p.default),h={children:o.default.node,headerLevel:o.default.number,title:o.default.string.isRequired,onExpandAll:o.default.func,onCollapseAll:o.default.func,intl:o.default.shape({formatMessage:o.default.func}).isRequired},E=function(e){var t=e.children,l=e.headerLevel,r=e.title,a=e.onExpandAll,o=e.onCollapseAll,u=e.intl,d="folder-tree-".concat((0,f.v4)()),p=(0,n.useRef)();return n.default.createElement("div",{className:"folder-tree-container"},n.default.createElement(c.default,{text:r,level:l}),n.default.createElement(m.default,{align:"end",ariaControls:r,ariaLabel:r},n.default.createElement(s.default,{title:u.formatMessage({id:"Terra.folder-tree.button.expand-all"}),text:u.formatMessage({id:"Terra.folder-tree.button.expand-all-instructions"}),variant:"utility",icon:n.default.createElement(_.IconExpandRow,null),onClick:a,"aria-controls":d}),n.default.createElement(s.default,{title:u.formatMessage({id:"Terra.folder-tree.button.collapse-all"}),text:u.formatMessage({id:"Terra.folder-tree.button.collapse-all-instructions"}),variant:"utility",icon:n.default.createElement(_.IconCollapseRow,null),onClick:o,"aria-controls":d})),n.default.createElement("ul",{id:d,className:b("folder-tree"),role:"tree","aria-label":r,ref:p,onKeyDown:function(e){var t=p.current.querySelectorAll("[data-item-show-focus=true]"),l=Array.prototype.slice.call(t).filter((function(e){for(var t=e.parentNode;t&&t!==p.current;){if(t.hasAttribute("hidden"))return!1;t=t.parentNode}return!0})),r=Array.from(l).indexOf(e.target),a=l.length-1,n=function(){return l[0].focus()},o=function(){return l[a].focus()};switch(e.keyCode){case i.KEY_END:e.preventDefault(),o();break;case i.KEY_HOME:e.preventDefault(),n();break;case i.KEY_UP:var u;e.preventDefault(),null===(u=l[r-1])||void 0===u||u.focus();break;case i.KEY_DOWN:var d;e.preventDefault(),null===(d=l[r+1])||void 0===d||d.focus();break;case i.KEY_LEFT:if(e.preventDefault(),e.metaKey){n();break}break;case i.KEY_RIGHT:if(e.preventDefault(),e.metaKey){o();break}}}},t))};E.propTypes=h,E.defaultProps={headerLevel:3};t.default=(0,d.injectIntl)(E)},38655:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(91683)),n=r(l(41261));a.default.Item=n.default;t.default=a.default},41261:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(10434)),o=v(l(67294)),u=r(l(45697)),d=r(l(47166)),f=l(25387),i=v(l(51051)),c=r(l(7017)),s=r(l(78490)),m=l(34614),_=r(l(47341)),p=r(l(23259));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(g=function(e){return e?l:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=g(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var b=d.default.bind(p.default),h={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isExpanded:u.default.bool,isSelected:u.default.bool,onClick:u.default.func,onToggle:u.default.func,level:u.default.number,parentRef:u.default.number,intl:u.default.shape({formatMessage:u.default.func}).isRequired},E=function e(t){var l=t.icon,r=t.isExpanded,a=t.isSelected,u=t.label,f=t.level,p=t.onClick,g=t.onToggle,v=t.subfolderItems,h=t.parentRef,E=t.intl,y=(0,o.useContext)(_.default),k=(null==v?void 0:v.length)>0,w=(0,o.useRef)(),I=(0,o.useRef)(),T=k?o.default.createElement("ul",{className:b("subfolder"),role:"group",hidden:!r,ref:I},v.map((function(t){return o.default.createElement(e,(0,n.default)({},t.props,{intl:E,level:f+1,parentRef:w}))}))):null,O=T?o.default.createElement(m.IconFolder,{a11yLabel:E.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,x=r?o.default.createElement(m.IconCaretDown,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}):o.default.createElement(m.IconCaretRight,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}),j=(0,d.default)(b("folder-tree-item",{selected:a},y.className)),C=function(e){"INPUT"!==e.target.nodeName&&g&&g()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:j,role:"treeitem","aria-expanded":k?r:null,"aria-selected":a,onClick:k?C:p,onKeyDown:function(e){switch(e.keyCode){case i.KEY_RETURN:e.preventDefault(),p(e);break;case i.KEY_LEFT:if(e.preventDefault(),e.metaKey)break;k&&r?C(e):null==h||h.current.focus();break;case i.KEY_RIGHT:if(e.preventDefault(),e.metaKey)break;if(r){if(k){var t=I.current.querySelector("[data-item-show-focus=true]");null==t||t.focus()}}else C(e)}},"data-item-show-focus":!0,tabIndex:0,ref:w},o.default.createElement("input",{type:"radio",checked:a,onChange:p,"aria-hidden":!0,tabIndex:-1,className:b("radio")}),o.default.createElement("span",{style:{paddingLeft:"".concat(f,"rem")}},o.default.createElement(s.default,{fitStart:o.default.createElement(c.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},k?o.default.createElement(c.default,{paddingRight:"small",isInlineBlock:!0},x):null,O),fill:o.default.createElement("span",null,u),alignFitStart:"center"}))),T)};E.propTypes=h,E.defaultProps={isExpanded:!1,isSelected:!1,level:0};t.default=(0,f.injectIntl)(E)},51910:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(27424)),n=r(l(67294)),o=r(l(47166)),u=l(34614),d=r(l(38655)),f=r(l(85248)),i=o.default.bind(f.default);t.default=function(){var e=n.default.useState(""),t=(0,a.default)(e,2),l=t[0],r=t[1];return n.default.createElement("div",{id:"wrapped-label-folder-tree",className:i("content-wrapper")},n.default.createElement(d.default,{title:"Documents",key:"documents"},n.default.createElement(d.default.Item,{label:"long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:n.default.createElement(u.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===l,onClick:function(){r("long-name-test")}})))}},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH","folder-tree-container":"FolderTree-module__folder-tree-container___z6ElC"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ",radio:"FolderTreeItem-module__radio___PUHKG"}},85248:function(e,t,l){l.r(t),t.default={"content-wrapper":"FolderTreeCommon-module__content-wrapper___-Qod9"}}}]);