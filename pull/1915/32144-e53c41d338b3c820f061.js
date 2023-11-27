"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[32144],{49271:function(e,t,n){var l=n(64836),r=n(18698);t.Z=void 0;var a=l(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(l,o,c):l[o]=e[o]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(45697)),u=l(n(47166)),i=n(21538),d=l(n(33864)),s=l(n(23399)),f=n(51051),m=l(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var _=u.default.bind(m.default),b={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,r=e.title,c=e.description,u=e.isExpanded,m=(0,o.useState)(u),p=(0,a.default)(m,2),b=p[0],g=p[1],E=(0,o.useState)(!1),j=(0,a.default)(E,2),h=j[0],O=j[1],x=o.default.useContext(i.ThemeContext),T=void 0!==l,S=function(){O(!h),b&&g(!b)},k=function(){g(!b),h&&O(!h)},w=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",x.className)},o.default.createElement("div",{className:_("header")},r&&o.default.createElement("h2",{className:_("title")},r)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},T&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":h}),onClick:S,onKeyDown:function(e){return w(e,S)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:k,onKeyDown:function(e){return w(e,k)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:_("chevron")}))):null,o.default.createElement("div",null,h&&o.default.createElement("div",{className:_("css")},l),b&&o.default.createElement("div",{className:_("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var E=g;t.Z=E},32144:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var l=n(87462),r=n(44925),a=n(67294),o=n(81254),c=n(5688),u=["components"],i={};function d(e){var t=e.components,n=(0,r.Z)(e,u);return(0,o.mdx)("wrapper",(0,l.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\n\nimport FolderTree from 'terra-folder-tree';\n\nimport styles from './BasicFolderTree.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ExpandCollapseFolderTree = () => {\n  const [selectedKey, setSelectedKey] = React.useState('info');\n\n  return (\n    <div className={cx('content-wrapper')}>\n      <FolderTree\n        title=\"Documents\"\n        key=\"documents\"\n      >\n        <FolderTree.Item\n          label=\"Projects\"\n          key=\"projects\"\n          isSelected={selectedKey === 'projects'}\n          onClick={() => { setSelectedKey('projects'); }}\n          subfolderItems={[\n            <FolderTree.Item\n            label=\"Projects 2\"\n            key=\"projects-2\"\n            isSelected={selectedKey === 'projects-2'}\n            onClick={() => { setSelectedKey('projects-2'); }}\n            subfolderItems={[\n              <FolderTree.Item\n              label=\"Projects 3\"\n              key=\"projects-3\"\n              isSelected={selectedKey === 'projects-3'}\n              onClick={() => { setSelectedKey('projects-3'); }}\n              subfolderItems={[\n                <FolderTree.Item\n                label=\"Projects 4\"\n                key=\"projects-4\"\n                isSelected={selectedKey === 'projects-4'}\n                onClick={() => { setSelectedKey('projects-4'); }}\n                subfolderItems={[\n                  <FolderTree.Item\n                  label=\"Important Document\"\n                  key=\"important-document\"\n                  isSelected={selectedKey === 'important-document'}\n                  onClick={() => { setSelectedKey('important-document'); }}\n                />\n                ]}\n              />\n              ]}\n            />\n            ]}\n          />\n          ]}\n        />\n      </FolderTree>\n    </div>\n  );\n};\n\nexport default ExpandCollapseFolderTree;\n\n")))}d.isMDXComponent=!0;var s=n(49271),f=n(4745),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(s.Z,{title:t||"Expand Collapse Folder Tree",description:n,example:a.createElement(c.Z,null),exampleCssSrc:a.createElement(f.Z,null),exampleSrc:a.createElement(d,null),isExpanded:l})},p=["components"],_={},b="wrapper";function y(e){var t=e.components,n=(0,r.Z)(e,p);return(0,o.mdx)(b,(0,l.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(m,{mdxType:"ExpandCollapseFolderTree"}))}y.isMDXComponent=!0},4745:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(87462),r=n(44925),a=(n(67294),n(81254)),o=["components"],c={},u="wrapper";function i(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.mdx)(u,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    position: relative;\n    width: 300px;\n  }\n}\n\n")))}i.isMDXComponent=!0},91683:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(45697)),o=l(n(47166)),c=l(n(17092)),u=l(n(41261)),i=l(n(20395)),d=o.default.bind(i.default),s={children:a.default.node.isRequired,title:a.default.string.isRequired,headerLevel:a.default.number},f=function(e){var t=e.children,n=e.title,l=e.headerLevel;return r.default.createElement(r.default.Fragment,null,r.default.createElement(c.default,{text:n,level:l}),r.default.createElement("ul",{className:d("folder-tree"),role:"tree"},t))};f.propTypes=s,f.defaultProps={headerLevel:3},f.Item=u.default;t.default=f},41261:function(e,t,n){var l=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),o=l(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(l,o,c):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(67294)),u=l(n(45697)),i=l(n(47166)),d=n(25387),s=l(n(7017)),f=l(n(78490)),m=n(34614),p=l(n(47341)),_=l(n(23259));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}var y=i.default.bind(_.default),v={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isSelected:u.default.bool,onClick:u.default.func,level:u.default.number,intl:u.default.shape({formatMessage:u.default.func}).isRequired},g=function e(t){var n=t.icon,l=t.label,r=t.subfolderItems,u=t.isSelected,d=t.onClick,_=t.level,b=t.intl,v=(0,c.useContext)(p.default),g=(0,c.useState)(!1),E=(0,o.default)(g,2),j=E[0],h=E[1],O=(null==r?void 0:r.length)>0,x=O?c.default.createElement("ul",{className:y("subfolder"),role:"group",hidden:!j},r.map((function(t){return c.default.createElement(e,(0,a.default)({},t.props,{intl:b,level:_+1}))}))):null,T=x?c.default.createElement(m.IconFolder,{a11yLabel:b.formatMessage({id:"Terra.folder-tree.folder-icon"})}):n,S=j?c.default.createElement(m.IconCaretDown,{height:"8px",width:"8px"}):c.default.createElement(m.IconCaretRight,{height:"8px",width:"8px"}),k=function(){h(!j)},w=(0,i.default)(y("folder-tree-item",{selected:u},{folder:O},v.className));return c.default.createElement(c.default.Fragment,null,c.default.createElement("li",{className:w,role:"treeitem","aria-expanded":O?j:null,"aria-selected":u,onClick:k,onKeyDown:k},c.default.createElement("input",{type:"radio",checked:u,onClick:d}),c.default.createElement("span",{style:{paddingLeft:"".concat(_,"rem")}},c.default.createElement(f.default,{fitStart:c.default.createElement(c.default.Fragment,null,c.default.createElement(s.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},O?c.default.createElement(s.default,{paddingRight:"small",isInlineBlock:!0},S):null,T)),fill:l,alignFitStart:"center"}))),x)};g.propTypes=v,g.defaultProps={isSelected:!1,level:0};t.default=(0,d.injectIntl)(g)},5688:function(e,t,n){var l=n(64836);t.Z=void 0;var r=l(n(27424)),a=l(n(67294)),o=l(n(47166)),c=l(n(91683)),u=l(n(44917)),i=o.default.bind(u.default);t.Z=function(){var e=a.default.useState("info"),t=(0,r.default)(e,2),n=t[0],l=t[1];return a.default.createElement("div",{className:i("content-wrapper")},a.default.createElement(c.default,{title:"Documents",key:"documents"},a.default.createElement(c.default.Item,{label:"Projects",key:"projects",isSelected:"projects"===n,onClick:function(){l("projects")},subfolderItems:[a.default.createElement(c.default.Item,{label:"Projects 2",key:"projects-2",isSelected:"projects-2"===n,onClick:function(){l("projects-2")},subfolderItems:[a.default.createElement(c.default.Item,{label:"Projects 3",key:"projects-3",isSelected:"projects-3"===n,onClick:function(){l("projects-3")},subfolderItems:[a.default.createElement(c.default.Item,{label:"Projects 4",key:"projects-4",isSelected:"projects-4"===n,onClick:function(){l("projects-4")},subfolderItems:[a.default.createElement(c.default.Item,{label:"Important Document",key:"important-document",isSelected:"important-document"===n,onClick:function(){l("important-document")}})]})]})]})]})))}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},20395:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH"}},23259:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",folder:"FolderTreeItem-module__folder___KRwMk",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ"}},44917:function(e,t,n){n.r(t),t.default={"content-wrapper":"BasicFolderTree-module__content-wrapper___oiYHU"}},78490:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=i(n(67294)),a=i(n(45697)),o=i(n(47166)),c=i(n(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function i(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var _=o.default.bind(c.default),b={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},y=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,a=e.align,o=e.alignFitStart,c=e.alignFill,i=e.alignFitEnd,s=e.fitStartAttributes,m=e.fillAttributes,b=e.fitEndAttributes,y=p(e,u),v=f({},s),g=f({},m),E=f({},b);return r.default.createElement("span",d({},y,{className:_("arrange",y.className)}),r.default.createElement("span",d({},v,{className:_("fit",a||o,v.className,"fit-block")}),t),r.default.createElement("span",d({},g,{className:_("fill",a||c,g.className,"fill-block")}),n),r.default.createElement("span",d({},E,{className:_("fit",a||i,E.className)}),l))};y.propTypes=b;t.default=y},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return l}})}}]);