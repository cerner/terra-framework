"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[52316],{49271:function(e,t,n){var l=n(64836),r=n(18698);t.Z=void 0;var a=l(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=_(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(l,o,c):l[o]=e[o]}l.default=e,n&&n.set(e,l);return l}(n(67294)),c=l(n(45697)),u=l(n(47166)),i=n(21538),d=l(n(33864)),s=l(n(23399)),f=n(51051),m=l(n(53560));function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(_=function(e){return e?n:t})(e)}var p=u.default.bind(m.default),y={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,r=e.title,c=e.description,u=e.isExpanded,m=(0,o.useState)(u),_=(0,a.default)(m,2),y=_[0],v=_[1],E=(0,o.useState)(!1),j=(0,a.default)(E,2),h=j[0],x=j[1],S=o.default.useContext(i.ThemeContext),k=void 0!==l,O=function(){x(!h),y&&v(!y)},T=function(){v(!y),h&&x(!h)},I=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:p("template",S.className)},o.default.createElement("div",{className:p("header")},r&&o.default.createElement("h2",{className:p("title")},r)),o.default.createElement("div",{className:p("content")},c&&o.default.createElement("div",{className:p("description")},c),t),o.default.createElement("div",{className:p("footer")},n?o.default.createElement("div",{className:p("button-container")},k&&o.default.createElement("button",{type:"button",className:p("css-toggle","item",{"is-selected":h}),onClick:O,onKeyDown:function(e){return I(e,O)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:p("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:p("chevron")})),o.default.createElement("button",{type:"button",className:p("code-toggle","item",{"is-selected":y}),onClick:T,onKeyDown:function(e){return I(e,T)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:p("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:p("chevron")}))):null,o.default.createElement("div",null,h&&o.default.createElement("div",{className:p("css")},l),y&&o.default.createElement("div",{className:p("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var E=v;t.Z=E},52316:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(87462),r=n(44925),a=(n(67294),n(81254)),o=n(27822),c=["components"],u={},i="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,a.mdx)(i,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.Z,{mdxType:"BasicFolderTree"}))}d.isMDXComponent=!0},4745:function(e,t,n){n.d(t,{Z:function(){return i}});var l=n(87462),r=n(44925),a=(n(67294),n(81254)),o=["components"],c={},u="wrapper";function i(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.mdx)(u,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    position: relative;\n    width: 300px;\n  }\n}\n\n")))}i.isMDXComponent=!0},27822:function(e,t,n){n.d(t,{Z:function(){return m}});var l=n(67294),r=n(68550),a=n(87462),o=n(44925),c=n(81254),u=["components"],i={};function d(e){var t=e.components,n=(0,o.Z)(e,u);return(0,c.mdx)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\n\nimport { IconDocuments } from 'terra-icon';\nimport FolderTree from 'terra-folder-tree';\n\nimport styles from './BasicFolderTree.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst BasicFolderTree = () => {\n  const [selectedKey, setSelectedKey] = React.useState('info');\n\n  return (\n    <div className={cx('content-wrapper')}>\n      <FolderTree\n        title=\"Documents\"\n        key=\"documents\"\n      >\n        <FolderTree.Item\n          label=\"info.txt\"\n          icon={<IconDocuments />}\n          key=\"info\"\n          isSelected={selectedKey === 'info'}\n          onClick={() => { setSelectedKey('info'); }}\n        />\n        <FolderTree.Item\n          label=\"projects_2023.txt\"\n          icon={<IconDocuments />}\n          key=\"projects_2023\"\n          isSelected={selectedKey === 'projects_2023'}\n          onClick={() => { setSelectedKey('projects_2023'); }}\n        />\n        <FolderTree.Item\n          label=\"Projects\"\n          key=\"projects\"\n          isSelected={selectedKey === 'projects'}\n          onClick={() => { setSelectedKey('projects'); }}\n          subfolderItems={[\n            (<FolderTree.Item\n              label=\"project_data1.txt\"\n              icon={<IconDocuments />}\n              key=\"project_data1\"\n              isSelected={selectedKey === 'project_data1'}\n              onClick={() => { setSelectedKey('project_data1'); }}\n            />),\n            (<FolderTree.Item\n              label=\"project_data2.txt\"\n              icon={<IconDocuments />}\n              key=\"project_data2\"\n              isSelected={selectedKey === 'project_data2'}\n              onClick={() => { setSelectedKey('project_data2'); }}\n            />),\n            (<FolderTree.Item\n              label=\"Tests\"\n              key=\"tests\"\n              isSelected={selectedKey === 'tests'}\n              onClick={() => { setSelectedKey('tests'); }}\n              icon={<IconDocuments />}\n              subfolderItems={[\n                (<FolderTree.Item\n                  label=\"very_very_very_very_very_very_very_long_name_test.txt\"\n                  icon={<IconDocuments />}\n                  key=\"long-name-test\"\n                  isSelected={selectedKey === 'long-name-test'}\n                  onClick={() => { setSelectedKey('long-name-test'); }}\n                />),\n                (<FolderTree.Item\n                  label=\"test.txt\"\n                  icon={<IconDocuments />}\n                  key=\"test\"\n                  isSelected={selectedKey === 'test'}\n                  onClick={() => { setSelectedKey('test'); }}\n                />),\n                (<FolderTree.Item\n                  label=\"even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt\"\n                  icon={<IconDocuments />}\n                  key=\"longer-name-test\"\n                  isSelected={selectedKey === 'longer-name-test'}\n                  onClick={() => { setSelectedKey('longer-name-test'); }}\n                />),\n              ]}\n            />),\n          ]}\n        />\n      </FolderTree>\n    </div>\n  );\n};\n\nexport default BasicFolderTree;\n\n")))}d.isMDXComponent=!0;var s=n(49271),f=n(4745),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(s.Z,{title:t||"Basic Folder Tree",description:n,example:l.createElement(r.Z,null),exampleCssSrc:l.createElement(f.Z,null),exampleSrc:l.createElement(d,null),isExpanded:a})}},91683:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(45697)),o=l(n(47166)),c=l(n(17092)),u=l(n(20395)),i=o.default.bind(u.default),d={children:a.default.node.isRequired,title:a.default.string.isRequired,headerLevel:a.default.number},s=function(e){var t=e.children,n=e.title,l=e.headerLevel;return r.default.createElement(r.default.Fragment,null,r.default.createElement(c.default,{text:n,level:l}),r.default.createElement("ul",{className:i("folder-tree"),role:"tree"},t))};s.propTypes=d,s.defaultProps={headerLevel:3};t.default=s},38655:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(91683)),a=l(n(41261));r.default.Item=a.default;t.default=r.default},41261:function(e,t,n){var l=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),o=l(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=a?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(l,o,c):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(67294)),u=l(n(45697)),i=l(n(47166)),d=n(25387),s=l(n(7017)),f=l(n(78490)),m=n(34614),_=l(n(47341)),p=l(n(23259));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}var b=i.default.bind(p.default),g={label:u.default.string.isRequired,icon:u.default.element,subfolderItems:u.default.arrayOf(u.default.element),isSelected:u.default.bool,onClick:u.default.func,level:u.default.number,intl:u.default.shape({formatMessage:u.default.func}).isRequired},v=function e(t){var n=t.icon,l=t.label,r=t.subfolderItems,u=t.isSelected,d=t.onClick,p=t.level,y=t.intl,g=(0,c.useContext)(_.default),v=(0,c.useState)(!1),E=(0,o.default)(v,2),j=E[0],h=E[1],x=(null==r?void 0:r.length)>0,S=x?c.default.createElement("ul",{className:b("subfolder"),role:"group",hidden:!j},r.map((function(t){return c.default.createElement(e,(0,a.default)({},t.props,{intl:y,level:p+1}))}))):null,k=S?c.default.createElement(m.IconFolder,{a11yLabel:y.formatMessage({id:"Terra.folder-tree.folder-icon"})}):n,O=j?c.default.createElement(m.IconCaretDown,{height:"8px",width:"8px"}):c.default.createElement(m.IconCaretRight,{height:"8px",width:"8px"}),T=function(){h(!j)},I=(0,i.default)(b("folder-tree-item",{selected:u},{folder:x},g.className));return c.default.createElement(c.default.Fragment,null,c.default.createElement("li",{className:I,role:"treeitem","aria-expanded":x?j:null,"aria-selected":u,onClick:T,onKeyDown:T},c.default.createElement("input",{type:"radio",checked:u,onClick:d}),c.default.createElement("span",{style:{paddingLeft:"".concat(p,"rem")}},c.default.createElement(f.default,{fitStart:c.default.createElement(c.default.Fragment,null,c.default.createElement(s.default,{paddingLeft:"medium",paddingRight:"medium",isInlineBlock:!0},x?c.default.createElement(s.default,{paddingRight:"small",isInlineBlock:!0},O):null,k)),fill:l,alignFitStart:"center"}))),S)};v.propTypes=g,v.defaultProps={isSelected:!1,level:0};t.default=(0,d.injectIntl)(v)},68550:function(e,t,n){var l=n(64836);t.Z=void 0;var r=l(n(27424)),a=l(n(67294)),o=l(n(47166)),c=n(34614),u=l(n(38655)),i=l(n(44917)),d=o.default.bind(i.default);t.Z=function(){var e=a.default.useState("info"),t=(0,r.default)(e,2),n=t[0],l=t[1];return a.default.createElement("div",{className:d("content-wrapper")},a.default.createElement(u.default,{title:"Documents",key:"documents"},a.default.createElement(u.default.Item,{label:"info.txt",icon:a.default.createElement(c.IconDocuments,null),key:"info",isSelected:"info"===n,onClick:function(){l("info")}}),a.default.createElement(u.default.Item,{label:"projects_2023.txt",icon:a.default.createElement(c.IconDocuments,null),key:"projects_2023",isSelected:"projects_2023"===n,onClick:function(){l("projects_2023")}}),a.default.createElement(u.default.Item,{label:"Projects",key:"projects",isSelected:"projects"===n,onClick:function(){l("projects")},subfolderItems:[a.default.createElement(u.default.Item,{label:"project_data1.txt",icon:a.default.createElement(c.IconDocuments,null),key:"project_data1",isSelected:"project_data1"===n,onClick:function(){l("project_data1")}}),a.default.createElement(u.default.Item,{label:"project_data2.txt",icon:a.default.createElement(c.IconDocuments,null),key:"project_data2",isSelected:"project_data2"===n,onClick:function(){l("project_data2")}}),a.default.createElement(u.default.Item,{label:"Tests",key:"tests",isSelected:"tests"===n,onClick:function(){l("tests")},icon:a.default.createElement(c.IconDocuments,null),subfolderItems:[a.default.createElement(u.default.Item,{label:"very_very_very_very_very_very_very_long_name_test.txt",icon:a.default.createElement(c.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===n,onClick:function(){l("long-name-test")}}),a.default.createElement(u.default.Item,{label:"test.txt",icon:a.default.createElement(c.IconDocuments,null),key:"test",isSelected:"test"===n,onClick:function(){l("test")}}),a.default.createElement(u.default.Item,{label:"even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:a.default.createElement(c.IconDocuments,null),key:"longer-name-test",isSelected:"longer-name-test"===n,onClick:function(){l("longer-name-test")}})]})]})))}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},20395:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"FolderTree-module__orion-fusion-theme___fXhZ1","clinical-lowlight-theme":"FolderTree-module__clinical-lowlight-theme___-PNN8","folder-tree":"FolderTree-module__folder-tree___LAcUH"}},23259:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"FolderTreeItem-module__clinical-lowlight-theme___zIByE","orion-fusion-theme":"FolderTreeItem-module__orion-fusion-theme___jxKiJ","folder-tree-item":"FolderTreeItem-module__folder-tree-item___KIv1r",folder:"FolderTreeItem-module__folder___KRwMk",selected:"FolderTreeItem-module__selected___4KAt4",subfolder:"FolderTreeItem-module__subfolder___jGfBJ"}},44917:function(e,t,n){n.r(t),t.default={"content-wrapper":"BasicFolderTree-module__content-wrapper___oiYHU"}},78490:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=i(n(67294)),a=i(n(45697)),o=i(n(47166)),c=i(n(66633)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function i(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var p=o.default.bind(c.default),y={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},b=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,a=e.align,o=e.alignFitStart,c=e.alignFill,i=e.alignFitEnd,s=e.fitStartAttributes,m=e.fillAttributes,y=e.fitEndAttributes,b=_(e,u),g=f({},s),v=f({},m),E=f({},y);return r.default.createElement("span",d({},b,{className:p("arrange",b.className)}),r.default.createElement("span",d({},g,{className:p("fit",a||o,g.className,"fit-block")}),t),r.default.createElement("span",d({},v,{className:p("fill",a||c,v.className,"fill-block")}),n),r.default.createElement("span",d({},E,{className:p("fit",a||i,E.className)}),l))};b.propTypes=y;t.default=b},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return l}})}}]);