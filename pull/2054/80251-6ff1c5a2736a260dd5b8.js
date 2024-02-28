"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[80251],{52531:function(e,t,l){var a=l(24994),r=l(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(85715)),o=y(l(96540)),u=a(l(5556)),d=a(l(67967)),f=l(8604),i=l(68414),c=y(l(25966)),s=a(l(82941)),m=a(l(23986)),p=a(l(6740)),_=l(33049),v=a(l(16524)),b=a(l(64050)),h=a(l(53888));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(g=function(e){return e?l:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=g(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var E=d.default.bind(h.default),w={children:u.default.node,headerLevel:u.default.number,title:u.default.string.isRequired,onExpandAll:u.default.func,onCollapseAll:u.default.func,intl:u.default.shape({formatMessage:u.default.func}).isRequired},T=function(e){var t=e.children,l=e.headerLevel,a=e.title,r=e.onExpandAll,u=e.onCollapseAll,d=e.intl,f=(0,o.useState)(""),h=(0,n.default)(f,2),g=h[0],y=h[1],w=(0,o.useState)([]),T=(0,n.default)(w,2),k=T[0],M=T[1],I="folder-tree-".concat((0,i.v4)()),x=(0,o.useRef)(),O=function(e){return Array.prototype.slice.call(e).filter((function(e){for(var t=e.parentNode;t&&t!==x.current;){if(t.hasAttribute("hidden"))return!1;t=t.parentNode}return!0}))};return(0,o.useEffect)((function(){x.current.querySelectorAll("[data-item-show-focus=true]")[0].tabIndex=0}),[]),(0,o.useEffect)((function(){var e=x.current.querySelectorAll("[data-item-show-focus=true]"),l=O(e);l.length!==k.length&&(l.length===t.length?y(d.formatMessage({id:"Terra.folder-tree.button.collapse-all-announcement"})):l.length===e.length&&y(d.formatMessage({id:"Terra.folder-tree.button.expand-all-announcement"})))}),[t.length,d,k]),o.default.createElement("div",{className:"folder-tree-container"},o.default.createElement(s.default,{text:a,level:l}),o.default.createElement(p.default,{align:"end",ariaControls:a,ariaLabel:a},o.default.createElement(m.default,{title:d.formatMessage({id:"Terra.folder-tree.button.expand-all"}),text:d.formatMessage({id:"Terra.folder-tree.button.expand-all-instructions"}),variant:"utility",icon:o.default.createElement(_.IconExpandRow,null),onClick:function(){if(r){r();var e=x.current.querySelectorAll("[data-item-show-focus=true]"),t=O(e);M(t)}},"aria-controls":I}),o.default.createElement(m.default,{title:d.formatMessage({id:"Terra.folder-tree.button.collapse-all"}),text:d.formatMessage({id:"Terra.folder-tree.button.collapse-all-instructions"}),variant:"utility",icon:o.default.createElement(_.IconCollapseRow,null),onClick:function(){if(u){u();var e=x.current.querySelectorAll("[data-item-show-focus=true]"),t=O(e);M(t)}},"aria-controls":I})),o.default.createElement("ul",{id:I,className:E("folder-tree"),role:"tree","aria-label":a,ref:x,onKeyDown:function(e){var t=x.current.querySelectorAll("[data-item-show-focus=true]"),l=O(t),a=Array.from(l).indexOf(e.target),r=l.length-1,n=function(){return b.default.handleMoveFocus(l[a],l[0])},o=function(){return b.default.handleMoveFocus(l[a],l[r])};switch(e.keyCode){case c.KEY_END:e.preventDefault(),o();break;case c.KEY_HOME:e.preventDefault(),n();break;case c.KEY_UP:e.preventDefault();var u=a-1;b.default.handleMoveFocus(l[a],l[u]);break;case c.KEY_DOWN:e.preventDefault();var d=a+1;b.default.handleMoveFocus(l[a],l[d]);break;case c.KEY_LEFT:if(e.preventDefault(),e.metaKey){n();break}break;case c.KEY_RIGHT:if(e.preventDefault(),e.metaKey){o();break}}}},t),o.default.createElement(v.default,{"aria-live":"polite",text:g}))};T.propTypes=w,T.defaultProps={headerLevel:3};t.default=(0,f.injectIntl)(T)},64050:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={handleMoveFocus:function(e,t){e&&t&&(e.tabIndex=-1,t.tabIndex=0,t.focus())}};t.default=l},80251:function(e,t,l){var a=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(52531)),n=a(l(27299));r.default.Item=n.default;t.default=r.default},27299:function(e,t,l){var a=l(24994),r=l(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(94634)),o=g(l(96540)),u=a(l(5556)),d=a(l(67967)),f=l(8604),i=g(l(25966)),c=a(l(68550)),s=a(l(39496)),m=l(33049),p=a(l(16524)),_=a(l(23695)),v=a(l(64050)),b=a(l(63376));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(h=function(e){return e?l:t})(e)}function g(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=h(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var y=d.default.bind(b.default),E={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isExpanded:u.default.bool,isSelectable:u.default.bool,isSelected:u.default.bool,onSelect:u.default.func,onToggle:u.default.func,level:u.default.number,parentRef:u.default.oneOfType([u.default.func,u.default.shape({current:u.default.instanceOf(Element)})]),intl:u.default.shape({formatMessage:u.default.func}).isRequired},w=function e(t){var l=t.icon,a=t.isExpanded,r=t.isSelectable,u=t.isSelected,f=t.label,b=t.level,h=t.onSelect,g=t.onToggle,E=t.subfolderItems,w=t.parentRef,T=t.intl,k=(0,o.useContext)(_.default),M=(null==E?void 0:E.length)>0,I=(0,o.useRef)(),x=(0,o.useRef)(),O=r?T.formatMessage({id:"Terra.folder-tree.item.selectable-announcement"}):T.formatMessage({id:"Terra.folder-tree.item.nonselectable-announcement"}),F=M?o.default.createElement("ul",{className:y("subfolder"),role:"group",hidden:!a,ref:x},E.map((function(t){return o.default.createElement(e,(0,n.default)({},t.props,{intl:T,level:b+1,parentRef:I}))}))):null,j=F?o.default.createElement(m.IconFolder,{a11yLabel:T.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,P=a?o.default.createElement(m.IconCaretDown,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}):o.default.createElement(m.IconCaretRight,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}),K=r?o.default.createElement("input",{type:"radio",checked:u,onChange:h,"aria-hidden":!0,tabIndex:-1,className:y("radio","radio-container")}):null,R=(0,d.default)(y("folder-tree-item",{selected:r?u:null},k.className)),D=function(e){"INPUT"!==e.target.nodeName&&g&&g()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:R,role:"treeitem","aria-expanded":M?a:null,"aria-selected":r&&u,onClick:M?D:function(){r&&h&&h()},onKeyDown:function(e){switch(e.keyCode){case i.KEY_RETURN:e.preventDefault(),r&&h(e);break;case i.KEY_LEFT:if(e.preventDefault(),e.metaKey)break;M&&a?D(e):v.default.handleMoveFocus(I.current,null==w?void 0:w.current);break;case i.KEY_RIGHT:if(e.preventDefault(),e.metaKey)break;if(a){if(M){var t=x.current.querySelector("[data-item-show-focus=true]");v.default.handleMoveFocus(I.current,t)}}else D(e)}},"data-item-show-focus":!0,tabIndex:-1,ref:I},K,o.default.createElement("span",{className:y(!r&&"non-selectable"),style:{marginLeft:"".concat(14*b,"px")}},o.default.createElement(s.default,{fitStart:o.default.createElement(c.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},M?o.default.createElement(c.default,{paddingRight:"small",isInlineBlock:!0},P):null,j),fill:o.default.createElement("span",null,f,o.default.createElement(p.default,{text:", ".concat(O)})),alignFitStart:"center"}))),F)};w.propTypes=E,w.defaultProps={isExpanded:!1,isSelectable:!0,isSelected:!1,level:0};t.default=(0,f.injectIntl)(w)},53888:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH","folder-tree-container":"FolderTree-module__folder-tree-container___z6ElC"}},63376:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ","non-selectable":"FolderTreeItem-module__non-selectable___T7duq",radio:"FolderTreeItem-module__radio___PUHKG","radio-container":"FolderTreeItem-module__radio-container___bjvz1"}}}]);