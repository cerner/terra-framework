"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[38655],{91683:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(67294)),n=r(l(45697)),o=r(l(47166)),i=l(25387),u=r(l(17092)),f=r(l(55281)),d=r(l(4959)),c=l(34614),s=r(l(20395)),m=o.default.bind(s.default),_={children:n.default.node,headerLevel:n.default.number,title:n.default.string.isRequired,onExpandAll:n.default.func,onCollapseAll:n.default.func,intl:n.default.shape({formatMessage:n.default.func}).isRequired},b=function(e){var t=e.children,l=e.headerLevel,r=e.title,n=e.onExpandAll,o=e.onCollapseAll,i=e.intl;return a.default.createElement(a.default.Fragment,null,a.default.createElement(u.default,{text:r,level:l}),a.default.createElement(d.default,{align:"end",ariaControls:r,ariaLabel:r},a.default.createElement(f.default,{text:i.formatMessage({id:"Terra.folder-tree.button.expand-all"}),variant:"utility",icon:a.default.createElement(c.IconExpandRow,null),onClick:n}),a.default.createElement(f.default,{text:i.formatMessage({id:"Terra.folder-tree.button.collapse-all"}),variant:"utility",icon:a.default.createElement(c.IconCollapseRow,null),onClick:o})),a.default.createElement("ul",{className:m("folder-tree"),role:"tree","aria-label":r},t))};b.propTypes=_,b.defaultProps={headerLevel:3};t.default=(0,i.injectIntl)(b)},38655:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(91683)),n=r(l(41261));a.default.Item=n.default;t.default=a.default},41261:function(e,t,l){var r=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(10434)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=b(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=n?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}(l(67294)),i=r(l(45697)),u=r(l(47166)),f=l(25387),d=r(l(7017)),c=r(l(78490)),s=l(34614),m=r(l(47341)),_=r(l(23259));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(b=function(e){return e?l:t})(e)}var p=u.default.bind(_.default),g={label:i.default.string.isRequired,icon:i.default.element,subfolderItems:i.default.arrayOf(i.default.element),isExpanded:i.default.bool,isSelected:i.default.bool,onClick:i.default.func,onToggle:i.default.func,level:i.default.number,intl:i.default.shape({formatMessage:i.default.func}).isRequired},y=function e(t){var l=t.icon,r=t.isExpanded,a=t.isSelected,i=t.label,f=t.level,_=t.onClick,b=t.onToggle,g=t.subfolderItems,y=t.intl,h=(0,o.useContext)(m.default),v=(null==g?void 0:g.length)>0,O=v?o.default.createElement("ul",{className:p("subfolder"),role:"group",hidden:!r},g.map((function(t){return o.default.createElement(e,(0,n.default)({},t.props,{intl:y,level:f+1}))}))):null,E=O?o.default.createElement(s.IconFolder,{a11yLabel:y.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,j=r?o.default.createElement(s.IconCaretDown,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}):o.default.createElement(s.IconCaretRight,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}),w=(0,u.default)(p("folder-tree-item",{selected:a},h.className));return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:w,role:"treeitem","aria-expanded":v?r:null,"aria-selected":a,onClick:v?function(e){"INPUT"!==e.target.nodeName&&b&&b()}:_},o.default.createElement("input",{type:"radio",checked:a,onChange:_,"aria-hidden":!0,tabIndex:-1,className:p("radio")}),o.default.createElement("span",{style:{paddingLeft:"".concat(f,"rem")}},o.default.createElement(c.default,{fitStart:o.default.createElement(d.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},v?o.default.createElement(d.default,{paddingRight:"small",isInlineBlock:!0},j):null,E),fill:o.default.createElement("span",null,i),alignFitStart:"center"}))),O)};y.propTypes=g,y.defaultProps={isExpanded:!1,isSelected:!1,level:0};t.default=(0,f.injectIntl)(y)},66633:function(e,t,l){l.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},41241:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ",radio:"FolderTreeItem-module__radio___PUHKG"}},78490:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=f(l(67294)),n=f(l(45697)),o=f(l(47166)),i=f(l(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){m(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function m(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var a=l.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function _(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=o.default.bind(i.default),p={fitStart:n.default.element,fill:n.default.element.isRequired,fitEnd:n.default.element,align:n.default.oneOf(["center","bottom","stretch"]),alignFitStart:n.default.oneOf(["center","bottom","stretch"]),alignFitEnd:n.default.oneOf(["center","bottom","stretch"]),alignFill:n.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:n.default.object,fillAttributes:n.default.object,fitEndAttributes:n.default.object},g=function(e){var t=e.fitStart,l=e.fill,r=e.fitEnd,n=e.align,o=e.alignFitStart,i=e.alignFill,f=e.alignFitEnd,c=e.fitStartAttributes,m=e.fillAttributes,p=e.fitEndAttributes,g=_(e,u),y=s({},c),h=s({},m),v=s({},p);return a.default.createElement("span",d({},g,{className:b("arrange",g.className)}),a.default.createElement("span",d({},y,{className:b("fit",n||o,y.className,"fit-block")}),t),a.default.createElement("span",d({},h,{className:b("fill",n||i,h.className,"fill-block")}),l),a.default.createElement("span",d({},v,{className:b("fit",n||f,v.className)}),r))};g.propTypes=p;t.default=g},4959:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(l(67294)),a=d(l(45697)),n=d(l(94184)),o=d(l(47166)),i=d(l(47341)),u=d(l(41241)),f=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,r,a=function(e,t){if(null==e)return{};var l,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)l=n[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var m=o.default.bind(u.default),_={align:a.default.oneOf(["start","end","center"]),ariaControls:a.default.string,ariaLabel:a.default.string,ariaLabelledBy:a.default.string,children:a.default.node},b=function(e){var t=e.align,l=e.ariaControls,a=e.ariaLabel,o=e.ariaLabelledBy,u=e.children,d=s(e,f),_=r.default.useContext(i.default),b=(0,n.default)(m("toolbar","".concat(t,"-align"),_.className),d.className),p=r.default.Children.map(u,(function(e){return e?r.default.createElement("div",{className:m("item")},e):e}));return r.default.createElement("div",c({},d,{"aria-controls":l,"aria-label":o?void 0:a,"aria-labelledby":o,className:b,role:"toolbar"}),p)};b.propTypes=_,b.defaultProps={align:"start"};t.default=b}}]);