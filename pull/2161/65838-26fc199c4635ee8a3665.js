"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[65838,40653],{201:function(e,t,n){var l=n(24994),o=n(73738);t.A=void 0;var a=l(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&{}.hasOwnProperty.call(e,r)){var i=a?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(96540)),i=l(n(5556)),c=l(n(67967)),s=n(92912),d=l(n(49558)),m=l(n(53665)),u=n(25966),f=l(n(89986));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var b=c.default.bind(f.default),_={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,o=e.title,i=e.description,c=e.isExpanded,f=(0,r.useState)(c),p=(0,a.default)(f,2),_=p[0],g=p[1],E=(0,r.useState)(!1),x=(0,a.default)(E,2),h=x[0],O=x[1],w=r.default.useContext(s.ThemeContext),j=void 0!==l,S=function(){O(!h),_&&g(!_)},T=function(){g(!_),h&&O(!h)},N=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:b("template",w.className)},r.default.createElement("div",{className:b("header")},o&&r.default.createElement("h2",{className:b("title")},o)),r.default.createElement("div",{className:b("content")},i&&r.default.createElement("div",{className:b("description")},i),t),r.default.createElement("div",{className:b("footer")},n?r.default.createElement("div",{className:b("button-container")},j&&r.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":h}),onClick:S,onKeyDown:function(e){return N(e,S)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:b("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(m.default,{className:b("chevron")})),r.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":_}),onClick:T,onKeyDown:function(e){return N(e,T)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:b("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(m.default,{className:b("chevron")}))):null,r.default.createElement("div",null,h&&r.default.createElement("div",{className:b("css")},l),_&&r.default.createElement("div",{className:b("code")},n))))};g.propTypes=_,g.defaultProps={isExpanded:!1};t.A=g},71566:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var l=n(58168),o=n(53986),a=n(96540),r=n(36665),i=n(18560),c=["components"],s={};function d(e){var t=e.components,n=(0,o.A)(e,c);return(0,r.mdx)("wrapper",(0,l.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\n\nimport { IconDocuments } from 'terra-icon';\nimport FolderTree from 'terra-folder-tree';\n\nimport styles from './BasicFolderTree.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst data = {\n  title: 'Documents',\n  items: [\n    { id: 'item-1-level-1', label: 'Information', icon: <IconDocuments /> },\n    {\n      id: 'item-2-level-1', label: 'Projects - 2023', icon: <IconDocuments />, isSelectable: false,\n    },\n    {\n      id: 'item-3-level-1',\n      label: 'Projects - 2023',\n      isSelectable: false,\n      items: [\n        { id: 'item-1-level-2-1', label: 'Project Data - October', icon: <IconDocuments /> },\n        { id: 'item-2-level-2-1', label: 'Project Data - November', icon: <IconDocuments /> },\n        { id: 'item-3-level-2-1', label: 'Project Data - December', icon: <IconDocuments /> },\n        {\n          id: 'item-4-level-2-1',\n          label: 'Tests',\n          isSelectable: false,\n          items: [\n            { id: 'item-1-level-3-1', label: 'Very Very Very Very Very Very Very Long Name Test', icon: <IconDocuments /> },\n            { id: 'item-2-level-3-1', label: 'Even Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger Name Test', icon: <IconDocuments /> },\n          ],\n        },\n      ],\n    },\n    { id: 'item-4-level-1', label: 'Projects - 2024', icon: <IconDocuments /> },\n    {\n      id: 'item-5-level-1',\n      label: 'Projects - 2024',\n      isSelectable: false,\n      items: [\n        { id: 'item-1-level-2-2', label: 'Project Data - January', icon: <IconDocuments /> },\n      ],\n    },\n  ],\n};\n\nconst folderExpandedState = {\n  'item-3-level-1': false,\n  'item-4-level-2-1': false,\n  'item-5-level-1': false,\n};\n\nconst FolderTreeSelection = () => {\n  const [selectedKey, setSelectedKey] = React.useState('');\n  const [expandedItems, setExpandedItems] = React.useState(folderExpandedState);\n\n  const handleExpandCollapseKeys = (key) => {\n    const newExpandedItems = {\n      ...expandedItems,\n      [key]: !expandedItems[key],\n    };\n    setExpandedItems(newExpandedItems);\n  };\n\n  const handleExpandAll = () => {\n    const newExpandedItems = {\n      ...expandedItems,\n    };\n    Object.keys(newExpandedItems).forEach(v => { newExpandedItems[v] = true; });\n\n    setExpandedItems(newExpandedItems);\n  };\n\n  const handleCollapseAll = () => {\n    const newExpandedItems = {\n      ...expandedItems,\n    };\n    Object.keys(newExpandedItems).forEach(v => { newExpandedItems[v] = false; });\n\n    setExpandedItems(newExpandedItems);\n  };\n\n  const buildFolderTreeItems = (items) => {\n    if (items) {\n      const elements = [];\n      items.forEach(item => {\n        elements.push(\n          <FolderTree.Item\n            key={item.id}\n            label={item.label}\n            icon={item.icon}\n            subfolderItems={buildFolderTreeItems(item.items)}\n            isExpanded={expandedItems[item.id]}\n            isSelectable={item.isSelectable}\n            isSelected={selectedKey === item.id}\n            onSelect={() => { setSelectedKey(item.id); }}\n            onToggle={() => { handleExpandCollapseKeys(item.id); }}\n          />,\n        );\n      });\n      return elements;\n    }\n\n    return null;\n  };\n\n  return (\n    <div className={cx('content-wrapper')}>\n      <FolderTree\n        title={data.title}\n        onExpandAll={handleExpandAll}\n        onCollapseAll={handleCollapseAll}\n      >\n        {buildFolderTreeItems(data.items)}\n      </FolderTree>\n    </div>\n  );\n};\n\nexport default FolderTreeSelection;\n\n")))}d.isMDXComponent=!0;var m=n(201),u=n(13151),f=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(m.A,{title:t||"Folder Tree Selection",description:n,example:a.createElement(i.A,null),exampleCssSrc:a.createElement(u.A,null),exampleSrc:a.createElement(d,null),isExpanded:l})},p=["components"],b={},_="wrapper";function y(e){var t=e.components,n=(0,o.A)(e,p);return(0,r.mdx)(_,(0,l.A)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"selection"},"Selection"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"The example below demonstrates row selection."),(0,r.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,r.mdx)("p",null,"The consuming component controls the selection state.\nThe following FolderTree.Item properties are required for row selection:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"../about#foldertreeitem-props-table"},"isSelectable"),":")," Specifies whether the FolderTree.Item can be selected.\nSelectable items display a radio button. Defaults to true."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"../about#foldertreeitem-props-table"},"isSelected"),":")," Specifies whether the FolderTree.Item is currently selected. "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"../about#foldertreeitem-props-table"},"onSelect"),":")," This callback is requested when selecting a row with one of the following methods:",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Mouse click:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Selecting anywhere on a row that does not contain ",(0,r.mdx)("inlineCode",{parentName:"li"},"subfolderItems"),"."),(0,r.mdx)("li",{parentName:"ul"},"Selecting the radio button on a row that contains ",(0,r.mdx)("inlineCode",{parentName:"li"},"subfolderItems"),"."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Keyboard:"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Pressing ENTER on an active row, including rows with ",(0,r.mdx)("inlineCode",{parentName:"li"},"subfolderItems"),".")))))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'// Selectable item\n<FolderTree.Item\n  key="row-item-1"\n  label="Projects"\n  icon={<IconDocuments />}\n  isSelected={selectedKey === "row-item-1"}\n  onSelect={() => {setSelectedKey("row-item-1")}}\n/>\n\n// Non-selectable item\n<FolderTree.Item\n  key="row-item-1"\n  label="Projects"\n  icon={<IconDocuments />}\n  isSelectable={false}\n/>\n')),(0,r.mdx)(f,{mdxType:"FolderTreeSelection"}))}y.isMDXComponent=!0},13151:function(e,t,n){n.d(t,{A:function(){return s}});var l=n(58168),o=n(53986),a=(n(96540),n(36665)),r=["components"],i={},c="wrapper";function s(e){var t=e.components,n=(0,o.A)(e,r);return(0,a.mdx)(c,(0,l.A)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    position: relative;\n  }\n}\n\n")))}s.isMDXComponent=!0},18560:function(e,t,n){var l=n(24994);t.A=void 0;var o=l(n(43693)),a=l(n(85715)),r=l(n(96540)),i=l(n(67967)),c=n(33049),s=l(n(80251)),d=l(n(35453));function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=i.default.bind(d.default),p={title:"Documents",items:[{id:"item-1-level-1",label:"Information",icon:r.default.createElement(c.IconDocuments,null)},{id:"item-2-level-1",label:"Projects - 2023",icon:r.default.createElement(c.IconDocuments,null),isSelectable:!1},{id:"item-3-level-1",label:"Projects - 2023",isSelectable:!1,items:[{id:"item-1-level-2-1",label:"Project Data - October",icon:r.default.createElement(c.IconDocuments,null)},{id:"item-2-level-2-1",label:"Project Data - November",icon:r.default.createElement(c.IconDocuments,null)},{id:"item-3-level-2-1",label:"Project Data - December",icon:r.default.createElement(c.IconDocuments,null)},{id:"item-4-level-2-1",label:"Tests",isSelectable:!1,items:[{id:"item-1-level-3-1",label:"Very Very Very Very Very Very Very Long Name Test",icon:r.default.createElement(c.IconDocuments,null)},{id:"item-2-level-3-1",label:"Even Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooonger Name Test",icon:r.default.createElement(c.IconDocuments,null)}]}]},{id:"item-4-level-1",label:"Projects - 2024",icon:r.default.createElement(c.IconDocuments,null)},{id:"item-5-level-1",label:"Projects - 2024",isSelectable:!1,items:[{id:"item-1-level-2-2",label:"Project Data - January",icon:r.default.createElement(c.IconDocuments,null)}]}]},b={"item-3-level-1":!1,"item-4-level-2-1":!1,"item-5-level-1":!1};t.A=function(){var e=r.default.useState(""),t=(0,a.default)(e,2),n=t[0],l=t[1],i=r.default.useState(b),c=(0,a.default)(i,2),d=c[0],m=c[1];return r.default.createElement("div",{className:f("content-wrapper")},r.default.createElement(s.default,{title:p.title,onExpandAll:function(){var e=u({},d);Object.keys(e).forEach((function(t){e[t]=!0})),m(e)},onCollapseAll:function(){var e=u({},d);Object.keys(e).forEach((function(t){e[t]=!1})),m(e)}},function e(t){if(t){var a=[];return t.forEach((function(t){a.push(r.default.createElement(s.default.Item,{key:t.id,label:t.label,icon:t.icon,subfolderItems:e(t.items),isExpanded:d[t.id],isSelectable:t.isSelectable,isSelected:n===t.id,onSelect:function(){l(t.id)},onToggle:function(){var e,n;e=t.id,n=u(u({},d),{},(0,o.default)({},e,!d[e])),m(n)}}))})),a}return null}(p.items)))}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},60288:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},35453:function(e,t,n){n.r(t),t.default={"content-wrapper":"BasicFolderTree-module__content-wrapper___oiYHU"}},39496:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var o=s(n(96540)),a=s(n(5556)),r=s(n(67967)),i=s(n(92420)),c=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function f(e,t,n){var o;return o=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(o)?o:o+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var b=r.default.bind(i.default),_={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},y=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,a=e.align,r=e.alignFitStart,i=e.alignFill,s=e.alignFitEnd,m=e.fitStartAttributes,f=e.fillAttributes,_=e.fitEndAttributes,y=p(e,c),v=u({},m),g=u({},f),E=u({},_);return o.default.createElement("span",d({},y,{className:b("arrange",y.className)}),o.default.createElement("span",d({},v,{className:b("fit",a||r,v.className,"fit-block")}),t),o.default.createElement("span",d({},g,{className:b("fill",a||i,g.className,"fill-block")}),n),o.default.createElement("span",d({},E,{className:b("fit",a||s,E.className)}),l))};y.propTypes=_;t.default=y},6740:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=d(n(96540)),o=d(n(5556)),a=d(n(46942)),r=d(n(67967)),i=d(n(23695)),c=d(n(60288)),s=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function d(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=r.default.bind(c.default),p={align:o.default.oneOf(["start","end","center"]),ariaControls:o.default.string,ariaLabel:o.default.string,ariaLabelledBy:o.default.string,children:o.default.node},b=function(e){var t=e.align,n=e.ariaControls,o=e.ariaLabel,r=e.ariaLabelledBy,c=e.children,d=u(e,s),p=l.default.useContext(i.default),b=(0,a.default)(f("toolbar","".concat(t,"-align"),p.className),d.className),_=l.default.Children.map(c,(function(e){return e?l.default.createElement("div",{className:f("item")},e):e}));return l.default.createElement("div",m({},d,{"aria-controls":n,"aria-label":r?void 0:o,"aria-labelledby":r,className:b,role:"toolbar"}),_)};b.propTypes=p,b.defaultProps={align:"start"};t.default=b},58168:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{A:function(){return l}})},53986:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n={};for(var l in e)if(Object.prototype.hasOwnProperty.call(e,l)){if(t.indexOf(l)>=0)continue;n[l]=e[l]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,{A:function(){return l}})}}]);