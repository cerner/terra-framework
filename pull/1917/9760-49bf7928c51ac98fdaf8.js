"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[9760],{91683:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(67294)),a=r(l(45697)),o=r(l(47166)),u=r(l(17092)),i=r(l(41261)),f=r(l(20395)),d=o.default.bind(f.default),c={children:a.default.node.isRequired,title:a.default.string.isRequired,headerLevel:a.default.number},s=function(e){var t=e.children,l=e.title,r=e.headerLevel;return n.default.createElement(n.default.Fragment,null,n.default.createElement(u.default,{text:l,level:r}),n.default.createElement("ul",{className:d("folder-tree"),role:"tree"},t))};s.propTypes=c,s.defaultProps={headerLevel:3},s.Item=i.default;t.default=s},41261:function(e,t,l){var r=l(64836),n=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(l(10434)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=b(t);if(l&&l.has(e))return l.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,l&&l.set(e,r),r}(l(67294)),u=r(l(45697)),i=r(l(47166)),f=l(25387),d=r(l(7017)),c=r(l(78490)),s=l(34614),m=r(l(47341)),_=r(l(23259));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(b=function(e){return e?l:t})(e)}var p=i.default.bind(_.default),g={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isSelected:u.default.bool,onClick:u.default.func,level:u.default.number,intl:u.default.shape({formatMessage:u.default.func}).isRequired},y=function e(t){var l=t.icon,r=t.label,n=t.subfolderItems,u=t.isSelected,f=t.onClick,_=t.level,b=t.intl,g=(0,o.useContext)(m.default),y=(null==n?void 0:n.length)>0?o.default.createElement("ul",{className:p("subfolder"),role:"group"},n.map((function(t){return o.default.createElement(e,(0,a.default)({},t.props,{intl:b,level:_+1}))}))):null,v=y?o.default.createElement(s.IconFolder,{a11yLabel:b.formatMessage({id:"Terra.folder-tree.folder-icon"})}):l,O=(0,i.default)(p("folder-tree-item",{selected:u},g.className));return o.default.createElement(o.default.Fragment,null,o.default.createElement("li",{className:O,role:"treeitem","aria-selected":u},o.default.createElement("input",{type:"radio",checked:u,onClick:f}),o.default.createElement("span",{style:{paddingLeft:"".concat(_,"rem")}},o.default.createElement(c.default,{fitStart:o.default.createElement(d.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},v),fill:r,alignFitStart:"center"}))),y)};y.propTypes=g,y.defaultProps={isSelected:!1,level:0};t.default=(0,f.injectIntl)(y)},51910:function(e,t,l){var r=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(l(27424)),a=r(l(67294)),o=r(l(47166)),u=l(34614),i=r(l(91683)),f=r(l(85248)),d=o.default.bind(f.default);t.default=function(){var e=a.default.useState(""),t=(0,n.default)(e,2),l=t[0],r=t[1];return a.default.createElement("div",{id:"wrapped-label-folder-tree",className:d("folder-tree-container")},a.default.createElement(i.default,{title:"Documents",key:"documents"},a.default.createElement(i.default.Item,{label:"long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:a.default.createElement(u.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===l,onClick:function(){r("long-name-test")}})))}},66633:function(e,t,l){l.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},20395:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH"}},23259:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ"}},85248:function(e,t,l){l.r(t),t.default={"folder-tree-container":"FolderTreeCommon-module__folder-tree-container___GI0MG"}},78490:function(e,t,l){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var n=f(l(67294)),a=f(l(45697)),o=f(l(47166)),u=f(l(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function f(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},d.apply(this,arguments)}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,r)}return l}function s(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){m(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function m(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function _(e,t){if(null==e)return{};var l,r,n=function(e,t){if(null==e)return{};var l,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)l=a[r],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=o.default.bind(u.default),p={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},g=function(e){var t=e.fitStart,l=e.fill,r=e.fitEnd,a=e.align,o=e.alignFitStart,u=e.alignFill,f=e.alignFitEnd,c=e.fitStartAttributes,m=e.fillAttributes,p=e.fitEndAttributes,g=_(e,i),y=s({},c),v=s({},m),O=s({},p);return n.default.createElement("span",d({},g,{className:b("arrange",g.className)}),n.default.createElement("span",d({},y,{className:b("fit",a||o,y.className,"fit-block")}),t),n.default.createElement("span",d({},v,{className:b("fill",a||u,v.className,"fill-block")}),l),n.default.createElement("span",d({},O,{className:b("fit",a||f,O.className)}),r))};g.propTypes=p;t.default=g}}]);