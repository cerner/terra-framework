"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[40196],{91683:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(67294)),a=r(l(45697)),o=r(l(47166)),u=r(l(17092)),i=r(l(20395)),f=o.default.bind(i.default),d={children:a.default.node,title:a.default.string.isRequired,headerLevel:a.default.number},c=function(e){var t=e.children,l=e.title,r=e.headerLevel;return n.default.createElement(n.default.Fragment,null,n.default.createElement(u.default,{text:l,level:r}),n.default.createElement("ul",{className:f("folder-tree"),role:"tree"},t))};c.propTypes=d,c.defaultProps={headerLevel:3};t.default=c},38655:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(91683)),a=r(l(41261));n.default.Item=a.default;t.default=n.default},41261:function(e,t,l){var r=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(10434)),o=r(l(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=b(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}(l(67294)),i=r(l(45697)),f=r(l(47166)),d=l(25387),c=r(l(7017)),s=r(l(78490)),m=l(34614),p=r(l(47341)),_=r(l(23259));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(b=function(e){return e?l:t})(e)}var g=f.default.bind(_.default),y={label:i.default.string.isRequired,icon:i.default.element,subfolderItems:i.default.arrayOf(i.default.element),isSelected:i.default.bool,onClick:i.default.func,level:i.default.number,intl:i.default.shape({formatMessage:i.default.func}).isRequired},v=function e(t){var l=t.icon,r=t.label,n=t.subfolderItems,i=t.isSelected,d=t.onClick,_=t.level,b=t.intl,y=(0,u.useContext)(p.default),v=(0,u.useState)(!1),h=(0,o.default)(v,2),j=h[0],O=h[1],E=(null==n?void 0:n.length)>0,S=E?u.default.createElement("ul",{className:g("subfolder"),role:"group",hidden:!j},n.map((function(t){return u.default.createElement(e,(0,a.default)({},t.props,{intl:b,level:_+1}))}))):null,k=S?u.default.createElement(m.IconFolder,{a11yLabel:b.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,P=j?u.default.createElement(m.IconCaretDown,{height:"8px",width:"8px"}):u.default.createElement(m.IconCaretRight,{height:"8px",width:"8px"}),w=function(){O(!j)},I=(0,f.default)(g("folder-tree-item",{selected:i},{folder:E},y.className));return u.default.createElement(u.default.Fragment,null,u.default.createElement("li",{className:I,role:"treeitem","aria-expanded":E?j:null,"aria-selected":i,onClick:w,onKeyDown:w},u.default.createElement("input",{type:"radio",checked:i,onClick:d}),u.default.createElement("span",{style:{paddingLeft:"".concat(_,"rem")}},u.default.createElement(s.default,{fitStart:u.default.createElement(u.default.Fragment,null,u.default.createElement(c.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},E?u.default.createElement(c.default,{paddingRight:"small",isInlineBlock:!0},P):null,k)),fill:r,alignFitStart:"center"}))),S)};v.propTypes=y,v.defaultProps={isSelected:!1,level:0};t.default=(0,d.injectIntl)(v)},571:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(27424)),a=r(l(67294)),o=r(l(38655));t.default=function(){var e=a.default.useState(""),t=(0,n.default)(e,2),l=t[0],r=t[1];return a.default.createElement("div",{id:"expand-collapse-folder-tree"},a.default.createElement(o.default,{title:"Documents",key:"documents"},a.default.createElement(o.default.Item,{label:"Projects - Level 1",key:"projects",isSelected:"projects"===l,onClick:function(){r("projects")},subfolderItems:[a.default.createElement(o.default.Item,{label:"Projects - Level 2",key:"projects-2",isSelected:"projects-2"===l,onClick:function(){r("projects-2")},subfolderItems:[a.default.createElement(o.default.Item,{label:"Projects - Level 3",key:"projects-3",isSelected:"projects-3"===l,onClick:function(){r("projects-3")},subfolderItems:[a.default.createElement(o.default.Item,{label:"Projects - Level 4",key:"projects-4",isSelected:"projects-4"===l,onClick:function(){r("projects-4")},subfolderItems:[a.default.createElement(o.default.Item,{label:"Important Document",key:"important-document",isSelected:"important-document"===l,onClick:function(){r("important-document")}})]})]})]})]})))}},66633:function(e,t,l){l.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",folder:"FolderTreeItem-module__folder___KRwMk",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ"}},78490:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var n=f(l(67294)),a=f(l(45697)),o=f(l(47166)),u=f(l(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){m(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function m(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function p(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var _=o.default.bind(u.default),b={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},g=function(e){var t=e.fitStart,l=e.fill,r=e.fitEnd,a=e.align,o=e.alignFitStart,u=e.alignFill,f=e.alignFitEnd,c=e.fitStartAttributes,m=e.fillAttributes,b=e.fitEndAttributes,g=p(e,i),y=s({},c),v=s({},m),h=s({},b);return n.default.createElement("span",d({},g,{className:_("arrange",g.className)}),n.default.createElement("span",d({},y,{className:_("fit",a||o,y.className,"fit-block")}),t),n.default.createElement("span",d({},v,{className:_("fill",a||u,v.className,"fill-block")}),l),n.default.createElement("span",d({},h,{className:_("fit",a||f,h.className)}),r))};g.propTypes=b;t.default=g}}]);