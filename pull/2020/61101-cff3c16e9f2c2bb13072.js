"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[61101],{4745:function(e,t,l){l.d(t,{Z:function(){return f}});var r=l(87462),a=l(44925),n=(l(67294),l(81254)),o=["components"],u={},d="wrapper";function f(e){var t=e.components,l=(0,a.Z)(e,o);return(0,n.mdx)(d,(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    position: relative;\n    width: 300px;\n  }\n}\n\n")))}f.isMDXComponent=!0},91683:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(27424)),o=y(l(67294)),u=r(l(45697)),d=r(l(19845)),f=l(25387),i=l(55877),c=y(l(51051)),s=r(l(17092)),p=r(l(55281)),m=r(l(4959)),_=l(34614),v=r(l(29270)),h=r(l(85542)),b=r(l(20395));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(g=function(e){return e?l:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=g(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var E=d.default.bind(b.default),w={children:u.default.node,headerLevel:u.default.number,title:u.default.string.isRequired,onExpandAll:u.default.func,onCollapseAll:u.default.func,intl:u.default.shape({formatMessage:u.default.func}).isRequired},k=function(e){var t=e.children,l=e.headerLevel,r=e.title,a=e.onExpandAll,u=e.onCollapseAll,d=e.intl,f=(0,o.useState)(""),b=(0,n.default)(f,2),g=b[0],y=b[1],w=(0,o.useState)([]),k=(0,n.default)(w,2),x=k[0],M=k[1],T="folder-tree-".concat((0,i.v4)()),I=(0,o.useRef)(),O=function(e){return Array.prototype.slice.call(e).filter((function(e){for(var t=e.parentNode;t&&t!==I.current;){if(t.hasAttribute("hidden"))return!1;t=t.parentNode}return!0}))};return(0,o.useEffect)((function(){I.current.querySelectorAll("[data-item-show-focus=true]")[0].tabIndex=0}),[]),(0,o.useEffect)((function(){var e=I.current.querySelectorAll("[data-item-show-focus=true]"),l=O(e);l.length!==x.length&&(l.length===t.length?y(d.formatMessage({id:"Terra.folder-tree.button.collapse-all-announcement"})):l.length===e.length&&y(d.formatMessage({id:"Terra.folder-tree.button.expand-all-announcement"})))}),[t.length,d,x]),o.default.createElement("div",{className:"folder-tree-container"},o.default.createElement(s.default,{text:r,level:l}),o.default.createElement(m.default,{align:"end",ariaControls:r,ariaLabel:r},o.default.createElement(p.default,{title:d.formatMessage({id:"Terra.folder-tree.button.expand-all"}),text:d.formatMessage({id:"Terra.folder-tree.button.expand-all-instructions"}),variant:"utility",icon:o.default.createElement(_.IconExpandRow,null),onClick:function(){if(a){a();var e=I.current.querySelectorAll("[data-item-show-focus=true]"),t=O(e);M(t)}},"aria-controls":T}),o.default.createElement(p.default,{title:d.formatMessage({id:"Terra.folder-tree.button.collapse-all"}),text:d.formatMessage({id:"Terra.folder-tree.button.collapse-all-instructions"}),variant:"utility",icon:o.default.createElement(_.IconCollapseRow,null),onClick:function(){if(u){u();var e=I.current.querySelectorAll("[data-item-show-focus=true]"),t=O(e);M(t)}},"aria-controls":T})),o.default.createElement("ul",{id:T,className:E("folder-tree"),role:"tree","aria-label":r,ref:I,onKeyDown:function(e){var t=I.current.querySelectorAll("[data-item-show-focus=true]"),l=O(t),r=Array.from(l).indexOf(e.target),a=l.length-1,n=function(){return h.default.handleMoveFocus(l[r],l[0])},o=function(){return h.default.handleMoveFocus(l[r],l[a])};switch(e.keyCode){case c.KEY_END:e.preventDefault(),o();break;case c.KEY_HOME:e.preventDefault(),n();break;case c.KEY_UP:e.preventDefault();var u=r-1;h.default.handleMoveFocus(l[r],l[u]);break;case c.KEY_DOWN:e.preventDefault();var d=r+1;h.default.handleMoveFocus(l[r],l[d]);break;case c.KEY_LEFT:if(e.preventDefault(),e.metaKey){n();break}break;case c.KEY_RIGHT:if(e.preventDefault(),e.metaKey){o();break}}}},t),o.default.createElement(v.default,{"aria-live":"polite",text:g}))};k.propTypes=w,k.defaultProps={headerLevel:3};t.default=(0,f.injectIntl)(k)},85542:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={handleMoveFocus:function(e,t){e&&t&&(e.tabIndex=-1,t.tabIndex=0,t.focus())}};t.default=l},38655:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(91683)),n=r(l(41261));a.default.Item=n.default;t.default=a.default},41261:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(10434)),o=b(l(67294)),u=r(l(45697)),d=r(l(19845)),f=l(25387),i=b(l(51051)),c=r(l(7017)),s=r(l(78490)),p=l(34614),m=r(l(47341)),_=r(l(85542)),v=r(l(23259));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(h=function(e){return e?l:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=h(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var g=d.default.bind(v.default),y={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isExpanded:u.default.bool,isSelected:u.default.bool,onClick:u.default.func,onToggle:u.default.func,level:u.default.number,parentRef:u.default.oneOfType([u.default.func,u.default.shape({current:u.default.instanceOf(Element)})]),intl:u.default.shape({formatMessage:u.default.func}).isRequired},E=function e(t){var l=t.icon,r=t.isExpanded,a=t.isSelected,u=t.label,f=t.level,v=t.onClick,h=t.onToggle,b=t.subfolderItems,y=t.parentRef,E=t.intl,w=(0,o.useContext)(m.default),k=(null==b?void 0:b.length)>0,x=(0,o.useRef)(),M=(0,o.useRef)(),T=k?o.default.createElement("ul",{className:g("subfolder"),role:"group",hidden:!r,ref:M},b.map((function(t){return o.default.createElement(e,(0,n.default)({},t.props,{intl:E,level:f+1,parentRef:x}))}))):null,I=T?o.default.createElement(p.IconFolder,{a11yLabel:E.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,O=r?o.default.createElement(p.IconCaretDown,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}):o.default.createElement(p.IconCaretRight,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}),F=(0,d.default)(g("folder-tree-item",{selected:a},w.className)),j=function(e){"INPUT"!==e.target.nodeName&&h&&h()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:F,role:"treeitem","aria-expanded":k?r:null,"aria-selected":a,onClick:k?j:v,onKeyDown:function(e){switch(e.keyCode){case i.KEY_RETURN:e.preventDefault(),v(e);break;case i.KEY_LEFT:if(e.preventDefault(),e.metaKey)break;k&&r?j(e):_.default.handleMoveFocus(x.current,null==y?void 0:y.current);break;case i.KEY_RIGHT:if(e.preventDefault(),e.metaKey)break;if(r){if(k){var t=M.current.querySelector("[data-item-show-focus=true]");_.default.handleMoveFocus(x.current,t)}}else j(e)}},"data-item-show-focus":!0,tabIndex:-1,ref:x},o.default.createElement("input",{type:"radio",checked:a,onChange:v,"aria-hidden":!0,tabIndex:-1,className:g("radio")}),o.default.createElement("span",{style:{paddingLeft:"".concat(f,"rem")}},o.default.createElement(s.default,{fitStart:o.default.createElement(c.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},k?o.default.createElement(c.default,{paddingRight:"small",isInlineBlock:!0},O):null,I),fill:o.default.createElement("span",null,u),alignFitStart:"center"}))),T)};E.propTypes=y,E.defaultProps={isExpanded:!1,isSelected:!1,level:0};t.default=(0,f.injectIntl)(E)},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH","folder-tree-container":"FolderTree-module__folder-tree-container___z6ElC"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ",radio:"FolderTreeItem-module__radio___PUHKG"}},44917:function(e,t,l){l.r(t),t.default={"content-wrapper":"BasicFolderTree-module__content-wrapper___oiYHU"}}}]);