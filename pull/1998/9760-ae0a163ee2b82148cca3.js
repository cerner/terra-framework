"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[9760],{91683:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=v(l(67294)),o=r(l(45697)),u=r(l(19845)),i=l(25387),f=l(55877),d=v(l(51051)),c=r(l(17092)),s=r(l(55281)),m=r(l(4959)),_=l(34614),p=r(l(85542)),b=r(l(20395));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(g=function(e){return e?l:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=g(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var y=u.default.bind(b.default),h={children:o.default.node,headerLevel:o.default.number,title:o.default.string.isRequired,onExpandAll:o.default.func,onCollapseAll:o.default.func,intl:o.default.shape({formatMessage:o.default.func}).isRequired},O=function(e){var t=e.children,l=e.headerLevel,r=e.title,a=e.onExpandAll,o=e.onCollapseAll,u=e.intl,i="folder-tree-".concat((0,f.v4)()),b=(0,n.useRef)();return(0,n.useEffect)((function(){b.current.querySelectorAll("[data-item-show-focus=true]")[0].tabIndex=0}),[]),n.default.createElement("div",{className:"folder-tree-container"},n.default.createElement(c.default,{text:r,level:l}),n.default.createElement(m.default,{align:"end",ariaControls:r,ariaLabel:r},n.default.createElement(s.default,{title:u.formatMessage({id:"Terra.folder-tree.button.expand-all"}),text:u.formatMessage({id:"Terra.folder-tree.button.expand-all-instructions"}),variant:"utility",icon:n.default.createElement(_.IconExpandRow,null),onClick:a,"aria-controls":i}),n.default.createElement(s.default,{title:u.formatMessage({id:"Terra.folder-tree.button.collapse-all"}),text:u.formatMessage({id:"Terra.folder-tree.button.collapse-all-instructions"}),variant:"utility",icon:n.default.createElement(_.IconCollapseRow,null),onClick:o,"aria-controls":i})),n.default.createElement("ul",{id:i,className:y("folder-tree"),role:"tree","aria-label":r,ref:b,onKeyDown:function(e){var t=b.current.querySelectorAll("[data-item-show-focus=true]"),l=Array.prototype.slice.call(t).filter((function(e){for(var t=e.parentNode;t&&t!==b.current;){if(t.hasAttribute("hidden"))return!1;t=t.parentNode}return!0})),r=Array.from(l).indexOf(e.target),a=l.length-1,n=function(){return p.default.handleMoveFocus(l[r],l[0])},o=function(){return p.default.handleMoveFocus(l[r],l[a])};switch(e.keyCode){case d.KEY_END:e.preventDefault(),o();break;case d.KEY_HOME:e.preventDefault(),n();break;case d.KEY_UP:e.preventDefault();var u=r-1;p.default.handleMoveFocus(l[r],l[u]);break;case d.KEY_DOWN:e.preventDefault();var i=r+1;p.default.handleMoveFocus(l[r],l[i]);break;case d.KEY_LEFT:if(e.preventDefault(),e.metaKey){n();break}break;case d.KEY_RIGHT:if(e.preventDefault(),e.metaKey){o();break}}}},t))};O.propTypes=h,O.defaultProps={headerLevel:3};t.default=(0,i.injectIntl)(O)},85542:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l={handleMoveFocus:function(e,t){e&&t&&(e.tabIndex=-1,t.tabIndex=0,t.focus())}};t.default=l},38655:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(91683)),n=r(l(41261));a.default.Item=n.default;t.default=a.default},41261:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(10434)),o=v(l(67294)),u=r(l(45697)),i=r(l(19845)),f=l(25387),d=v(l(51051)),c=r(l(7017)),s=r(l(78490)),m=l(34614),_=r(l(47341)),p=r(l(85542)),b=r(l(23259));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(g=function(e){return e?l:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=g(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}var y=i.default.bind(b.default),h={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isExpanded:u.default.bool,isSelected:u.default.bool,onClick:u.default.func,onToggle:u.default.func,level:u.default.number,parentRef:u.default.oneOfType([u.default.func,u.default.shape({current:u.default.instanceOf(Element)})]),intl:u.default.shape({formatMessage:u.default.func}).isRequired},O=function e(t){var l=t.icon,r=t.isExpanded,a=t.isSelected,u=t.label,f=t.level,b=t.onClick,g=t.onToggle,v=t.subfolderItems,h=t.parentRef,O=t.intl,E=(0,o.useContext)(_.default),j=(null==v?void 0:v.length)>0,w=(0,o.useRef)(),T=(0,o.useRef)(),k=j?o.default.createElement("ul",{className:y("subfolder"),role:"group",hidden:!r,ref:T},v.map((function(t){return o.default.createElement(e,(0,n.default)({},t.props,{intl:O,level:f+1,parentRef:w}))}))):null,P=k?o.default.createElement(m.IconFolder,{a11yLabel:O.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,M=r?o.default.createElement(m.IconCaretDown,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}):o.default.createElement(m.IconCaretRight,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}),S=(0,i.default)(y("folder-tree-item",{selected:a},E.className)),A=function(e){"INPUT"!==e.target.nodeName&&g&&g()};return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:S,role:"treeitem","aria-expanded":j?r:null,"aria-selected":a,onClick:j?A:b,onKeyDown:function(e){switch(e.keyCode){case d.KEY_RETURN:e.preventDefault(),b(e);break;case d.KEY_LEFT:if(e.preventDefault(),e.metaKey)break;j&&r?A(e):p.default.handleMoveFocus(w.current,null==h?void 0:h.current);break;case d.KEY_RIGHT:if(e.preventDefault(),e.metaKey)break;if(r){if(j){var t=T.current.querySelector("[data-item-show-focus=true]");p.default.handleMoveFocus(w.current,t)}}else A(e)}},"data-item-show-focus":!0,tabIndex:-1,ref:w},o.default.createElement("input",{type:"radio",checked:a,onChange:b,"aria-hidden":!0,tabIndex:-1,className:y("radio")}),o.default.createElement("span",{style:{paddingLeft:"".concat(f,"rem")}},o.default.createElement(s.default,{fitStart:o.default.createElement(c.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},j?o.default.createElement(c.default,{paddingRight:"small",isInlineBlock:!0},M):null,P),fill:o.default.createElement("span",null,u),alignFitStart:"center"}))),k)};O.propTypes=h,O.defaultProps={isExpanded:!1,isSelected:!1,level:0};t.default=(0,f.injectIntl)(O)},51910:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(27424)),n=r(l(67294)),o=r(l(19845)),u=l(34614),i=r(l(38655)),f=r(l(85248)),d=o.default.bind(f.default);t.default=function(){var e=n.default.useState(""),t=(0,a.default)(e,2),l=t[0],r=t[1];return n.default.createElement("div",{id:"wrapped-label-folder-tree",className:d("content-wrapper")},n.default.createElement(i.default,{title:"Documents",key:"documents"},n.default.createElement(i.default.Item,{label:"long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:n.default.createElement(u.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===l,onClick:function(){r("long-name-test")}})))}},66633:function(e,t,l){l.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},41241:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH","folder-tree-container":"FolderTree-module__folder-tree-container___z6ElC"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ",radio:"FolderTreeItem-module__radio___PUHKG"}},85248:function(e,t,l){l.r(t),t.default={"content-wrapper":"FolderTreeCommon-module__content-wrapper___-Qod9"}},78490:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=f(l(67294)),n=f(l(45697)),o=f(l(19845)),u=f(l(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){m(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function m(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var a=l.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function _(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=o.default.bind(u.default),b={fitStart:n.default.element,fill:n.default.element.isRequired,fitEnd:n.default.element,align:n.default.oneOf(["center","bottom","stretch"]),alignFitStart:n.default.oneOf(["center","bottom","stretch"]),alignFitEnd:n.default.oneOf(["center","bottom","stretch"]),alignFill:n.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:n.default.object,fillAttributes:n.default.object,fitEndAttributes:n.default.object},g=function(e){var t=e.fitStart,l=e.fill,r=e.fitEnd,n=e.align,o=e.alignFitStart,u=e.alignFill,f=e.alignFitEnd,c=e.fitStartAttributes,m=e.fillAttributes,b=e.fitEndAttributes,g=_(e,i),v=s({},c),y=s({},m),h=s({},b);return a.default.createElement("span",d({},g,{className:p("arrange",g.className)}),a.default.createElement("span",d({},v,{className:p("fit",n||o,v.className,"fit-block")}),t),a.default.createElement("span",d({},y,{className:p("fill",n||u,y.className,"fill-block")}),l),a.default.createElement("span",d({},h,{className:p("fit",n||f,h.className)}),r))};g.propTypes=b;t.default=g},4959:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(l(67294)),a=d(l(45697)),n=d(l(93967)),o=d(l(19845)),u=d(l(47341)),i=d(l(41241)),f=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var m=o.default.bind(i.default),_={align:a.default.oneOf(["start","end","center"]),ariaControls:a.default.string,ariaLabel:a.default.string,ariaLabelledBy:a.default.string,children:a.default.node},p=function(e){var t=e.align,l=e.ariaControls,a=e.ariaLabel,o=e.ariaLabelledBy,i=e.children,d=s(e,f),_=r.default.useContext(u.default),p=(0,n.default)(m("toolbar","".concat(t,"-align"),_.className),d.className),b=r.default.Children.map(i,(function(e){return e?r.default.createElement("div",{className:m("item")},e):e}));return r.default.createElement("div",c({},d,{"aria-controls":l,"aria-label":o?void 0:a,"aria-labelledby":o,className:p,role:"toolbar"}),b)};p.propTypes=_,p.defaultProps={align:"start"};t.default=p}}]);