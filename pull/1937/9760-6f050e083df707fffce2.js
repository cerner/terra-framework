"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[9760],{91683:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(67294)),a=r(l(45697)),o=r(l(47166)),i=r(l(17092)),u=r(l(20395)),f=o.default.bind(u.default),d={children:a.default.node,title:a.default.string.isRequired,headerLevel:a.default.number},c=function(e){var t=e.children,l=e.title,r=e.headerLevel;return n.default.createElement(n.default.Fragment,null,n.default.createElement(i.default,{text:l,level:r}),n.default.createElement("ul",{className:f("folder-tree"),role:"tree","aria-label":l},t))};c.propTypes=d,c.defaultProps={headerLevel:3};t.default=c},38655:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(91683)),a=r(l(41261));n.default.Item=a.default;t.default=n.default},41261:function(e,t,l){var r=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(10434)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}(l(67294)),i=r(l(45697)),u=r(l(47166)),f=l(25387),d=r(l(7017)),c=r(l(78490)),s=l(34614),m=r(l(47341)),_=r(l(23259));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}var b=u.default.bind(_.default),g={label:i.default.string.isRequired,icon:i.default.element,subfolderItems:i.default.arrayOf(i.default.element),isExpanded:i.default.bool,isSelected:i.default.bool,onClick:i.default.func,onToggle:i.default.func,level:i.default.number,intl:i.default.shape({formatMessage:i.default.func}).isRequired},y=function e(t){var l=t.icon,r=t.isExpanded,n=t.isSelected,i=t.label,f=t.level,_=t.onClick,p=t.onToggle,g=t.subfolderItems,y=t.intl,v=(0,o.useContext)(m.default),h=(null==g?void 0:g.length)>0,O=h?o.default.createElement("ul",{className:b("subfolder"),role:"group",hidden:!r},g.map((function(t){return o.default.createElement(e,(0,a.default)({},t.props,{intl:y,level:f+1}))}))):null,E=O?o.default.createElement(s.IconFolder,{a11yLabel:y.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,j=r?o.default.createElement(s.IconCaretDown,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}):o.default.createElement(s.IconCaretRight,{height:"8px",width:"8px",style:{verticalAlign:"baseline"}}),w=(0,u.default)(b("folder-tree-item",{selected:n},v.className));return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:w,role:"treeitem","aria-expanded":h?r:null,"aria-selected":n,onClick:h?p:_,onKeyDown:h?p:_},o.default.createElement("input",{type:"radio",checked:n,onChange:_,onClick:function(e){e.stopPropagation(),_()},"aria-hidden":!0,tabIndex:-1,className:b("radio")}),o.default.createElement("span",{style:{paddingLeft:"".concat(f,"rem")}},o.default.createElement(c.default,{fitStart:o.default.createElement(d.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},h?o.default.createElement(d.default,{paddingRight:"small",isInlineBlock:!0},j):null,E),fill:o.default.createElement("span",null,i),alignFitStart:"center"}))),O)};y.propTypes=g,y.defaultProps={isExpanded:!1,isSelected:!1,level:0};t.default=(0,f.injectIntl)(y)},51910:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(27424)),a=r(l(67294)),o=r(l(47166)),i=l(34614),u=r(l(38655)),f=r(l(85248)),d=o.default.bind(f.default);t.default=function(){var e=a.default.useState(""),t=(0,n.default)(e,2),l=t[0],r=t[1];return a.default.createElement("div",{id:"wrapped-label-folder-tree",className:d("folder-tree-container")},a.default.createElement(u.default,{title:"Documents",key:"documents"},a.default.createElement(u.default.Item,{label:"long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:a.default.createElement(i.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===l,onClick:function(){r("long-name-test")}})))}},66633:function(e,t,l){l.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ",radio:"FolderTreeItem-module__radio___PUHKG"}},85248:function(e,t,l){l.r(t),t.default={"folder-tree-container":"FolderTreeCommon-module__folder-tree-container___GI0MG"}},78490:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var n=f(l(67294)),a=f(l(45697)),o=f(l(47166)),i=f(l(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){m(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function m(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function _(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=o.default.bind(i.default),b={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},g=function(e){var t=e.fitStart,l=e.fill,r=e.fitEnd,a=e.align,o=e.alignFitStart,i=e.alignFill,f=e.alignFitEnd,c=e.fitStartAttributes,m=e.fillAttributes,b=e.fitEndAttributes,g=_(e,u),y=s({},c),v=s({},m),h=s({},b);return n.default.createElement("span",d({},g,{className:p("arrange",g.className)}),n.default.createElement("span",d({},y,{className:p("fit",a||o,y.className,"fit-block")}),t),n.default.createElement("span",d({},v,{className:p("fill",a||i,v.className,"fill-block")}),l),n.default.createElement("span",d({},h,{className:p("fit",a||f,h.className)}),r))};g.propTypes=b;t.default=g}}]);