"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[74320],{49271:function(e,t,l){var a=l(64836),n=l(18698);t.Z=void 0;var r=a(l(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,l&&l.set(e,a);return a}(l(67294)),u=a(l(45697)),d=a(l(47166)),i=l(21538),c=a(l(33864)),f=a(l(23399)),s=l(51051),m=a(l(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}var _=d.default.bind(m.default),v={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},E=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,l=e.exampleSrc,a=e.exampleCssSrc,n=e.title,u=e.description,d=e.isExpanded,m=(0,o.useState)(d),p=(0,r.default)(m,2),v=p[0],h=p[1],g=(0,o.useState)(!1),y=(0,r.default)(g,2),x=y[0],T=y[1],w=o.default.useContext(i.ThemeContext),k=void 0!==a,N=function(){T(!x),v&&h(!v)},C=function(){h(!v),x&&T(!x)},O=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",w.className)},o.default.createElement("div",{className:_("header")},n&&o.default.createElement("h2",{className:_("title")},n)),o.default.createElement("div",{className:_("content")},u&&o.default.createElement("div",{className:_("description")},u),t),o.default.createElement("div",{className:_("footer")},l?o.default.createElement("div",{className:_("button-container")},k&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":x}),onClick:N,onKeyDown:function(e){return O(e,N)},onBlur:E,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(f.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":v}),onClick:C,onKeyDown:function(e){return O(e,C)},onBlur:E,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(f.default,{className:_("chevron")}))):null,o.default.createElement("div",null,x&&o.default.createElement("div",{className:_("css")},a),v&&o.default.createElement("div",{className:_("code")},l))))};h.propTypes=v,h.defaultProps={isExpanded:!1};var g=h;t.Z=g},4745:function(e,t,l){l.d(t,{Z:function(){return i}});var a=l(87462),n=l(44925),r=(l(67294),l(81254)),o=["components"],u={},d="wrapper";function i(e){var t=e.components,l=(0,n.Z)(e,o);return(0,r.mdx)(d,(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    position: relative;\n    width: 300px;\n  }\n}\n\n")))}i.isMDXComponent=!0},91683:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=E(l(67294)),o=a(l(45697)),u=a(l(47166)),d=l(25387),i=l(61334),c=E(l(51051)),f=a(l(17092)),s=a(l(55281)),m=a(l(4959)),p=l(34614),_=a(l(20395));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(v=function(e){return e?l:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=v(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var b=u.default.bind(_.default),h={children:o.default.node,headerLevel:o.default.number,title:o.default.string.isRequired,onExpandAll:o.default.func,onCollapseAll:o.default.func,intl:o.default.shape({formatMessage:o.default.func}).isRequired},g=function(e){var t=e.children,l=e.headerLevel,a=e.title,n=e.onExpandAll,o=e.onCollapseAll,u=e.intl,d="folder-tree-".concat((0,i.v4)()),_=(0,r.useRef)();return r.default.createElement("div",{className:"folder-tree-container"},r.default.createElement(f.default,{text:a,level:l}),r.default.createElement(m.default,{align:"end",ariaControls:a,ariaLabel:a},r.default.createElement(s.default,{title:u.formatMessage({id:"Terra.folder-tree.button.expand-all"}),text:u.formatMessage({id:"Terra.folder-tree.button.expand-all-instructions"}),variant:"utility",icon:r.default.createElement(p.IconExpandRow,null),onClick:n,"aria-controls":d}),r.default.createElement(s.default,{title:u.formatMessage({id:"Terra.folder-tree.button.collapse-all"}),text:u.formatMessage({id:"Terra.folder-tree.button.collapse-all-instructions"}),variant:"utility",icon:r.default.createElement(p.IconCollapseRow,null),onClick:o,"aria-controls":d})),r.default.createElement("ul",{id:d,className:b("folder-tree"),role:"tree","aria-label":a,ref:_,onKeyDown:function(e){var t=_.current.querySelectorAll("[data-item-show-focus=true]"),l=Array.prototype.slice.call(t).filter((function(e){for(var t=e.parentNode;t&&t!==_.current;){if(t.hasAttribute("hidden"))return!1;t=t.parentNode}return!0})),a=Array.from(l).indexOf(e.target),n=l.length-1,r=function(){return l[0].focus()},o=function(){return l[n].focus()};switch(e.nativeEvent.keyCode){case c.KEY_END:e.preventDefault(),o();break;case c.KEY_HOME:e.preventDefault(),r();break;case c.KEY_UP:var u;e.preventDefault(),null===(u=l[a-1])||void 0===u||u.focus();break;case c.KEY_DOWN:var d;e.preventDefault(),null===(d=l[a+1])||void 0===d||d.focus();break;case c.KEY_LEFT:if(e.preventDefault(),e.metaKey){r();break}break;case c.KEY_RIGHT:if(e.preventDefault(),e.metaKey){o();break}}}},t))};g.propTypes=h,g.defaultProps={headerLevel:3};t.default=(0,d.injectIntl)(g)},38655:function(e,t,l){var a=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(l(91683)),r=a(l(41261));n.default.Item=r.default;t.default=n.default},41261:function(e,t,l){var a=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(l(10434)),o=E(l(67294)),u=a(l(45697)),d=a(l(47166)),i=l(25387),c=E(l(51051)),f=a(l(7017)),s=a(l(78490)),m=l(34614),p=a(l(47341)),_=a(l(23259));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(v=function(e){return e?l:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=v(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}var b=d.default.bind(_.default),h={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isExpanded:u.default.bool,isSelected:u.default.bool,onClick:u.default.func,onToggle:u.default.func,level:u.default.number,parentRef:u.default.number,intl:u.default.shape({formatMessage:u.default.func}).isRequired},g=function e(t){var l=t.icon,a=t.isExpanded,n=t.isSelected,u=t.label,i=t.level,_=t.onClick,v=t.onToggle,E=t.subfolderItems,h=t.parentRef,g=t.intl,y=(0,o.useContext)(p.default),x=(null==E?void 0:E.length)>0,T=(0,o.useRef)(),w=(0,o.useRef)(),k=x?o.default.createElement("ul",{className:b("subfolder"),role:"group",hidden:!a,ref:w},E.map((function(t){return o.default.createElement(e,(0,r.default)({},t.props,{intl:g,level:i+1,parentRef:T}))}))):null,N=k?o.default.createElement(m.IconFolder,{a11yLabel:g.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,C=a?o.default.createElement(m.IconCaretDown,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}):o.default.createElement(m.IconCaretRight,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}),O=(0,d.default)(b("folder-tree-item",{selected:n},y.className)),D=function(e){"INPUT"!==e.target.nodeName&&v&&v()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:O,role:"treeitem","aria-expanded":x?a:null,"aria-selected":n,onClick:x?D:_,onKeyDown:function(e){switch(e.nativeEvent.keyCode){case c.KEY_RETURN:case c.KEY_SPACE:e.preventDefault(),x?D(e):_(e);break;case c.KEY_LEFT:if(e.preventDefault(),e.metaKey)break;x&&a?D(e):null==h||h.current.focus();break;case c.KEY_RIGHT:if(e.preventDefault(),e.metaKey)break;if(a){if(x){var t=w.current.querySelector("[data-item-show-focus=true]");null==t||t.focus()}}else D(e)}},"data-item-show-focus":!0,tabIndex:0,ref:T},o.default.createElement("input",{type:"radio",checked:n,onChange:_,"aria-hidden":!0,tabIndex:-1,className:b("radio")}),o.default.createElement("span",{style:{paddingLeft:"".concat(i,"rem")}},o.default.createElement(s.default,{fitStart:o.default.createElement(f.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},x?o.default.createElement(f.default,{paddingRight:"small",isInlineBlock:!0},C):null,N),fill:o.default.createElement("span",null,u),alignFitStart:"center"}))),k)};g.propTypes=h,g.defaultProps={isExpanded:!1,isSelected:!1,level:0};t.default=(0,i.injectIntl)(g)},53560:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH","folder-tree-container":"FolderTree-module__folder-tree-container___z6ElC"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ",radio:"FolderTreeItem-module__radio___PUHKG"}},44917:function(e,t,l){l.r(t),t.default={"content-wrapper":"BasicFolderTree-module__content-wrapper___oiYHU"}}}]);