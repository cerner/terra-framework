"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[93152],{50102:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var l=n(87462),r=n(44925),o=(n(67294),n(81254)),a=n(32876),c=["components"],f={},i="wrapper";function s(e){var t=e.components,n=(0,r.Z)(e,c);return(0,o.mdx)(i,(0,l.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(a.Z,{mdxType:"DefaultFilePath"}))}s.isMDXComponent=!0},32876:function(e,t,n){n.d(t,{Z:function(){return h}});var l=n(67294),r=n(38835),o=n(87462),a=n(44925),c=n(81254),f=["components"],i={};function s(e){var t=e.components,n=(0,a.Z)(e,f);return(0,c.mdx)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport FilePath from 'terra-file-path';\n\nconst items = [\n  {\n    key: 'home',\n    text: 'Home',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-1',\n    text: 'Level 1',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-2',\n    text: 'Level 2',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-3',\n    text: 'Level 3',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-4',\n    text: 'Level 4',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-5',\n    text: 'Level 5',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-6',\n    text: 'Level 6',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-7',\n    text: 'Level 7',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-8',\n    text: 'Level 8',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-9',\n    text: 'Level 9',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-10',\n    text: 'Level 10',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-11',\n    text: 'Level 11',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-12',\n    text: 'Level 12',\n    href: 'https://oracle.com',\n  },\n];\n\nconst DefaultFilePath = () => (\n  <FilePath items={items} />\n);\n\nexport default DefaultFilePath;\n\n")))}s.isMDXComponent=!0;var u=n(49271),h=function(e){var t=e.title,n=e.description,o=e.isExpanded;return l.createElement(u.Z,{title:t||"Default File Path",description:n,example:l.createElement(r.Z,null),exampleSrc:l.createElement(s,null),isExpanded:o})}},82457:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),o=l(n(45697)),a=n(25387),c=l(n(57927)),f={items:o.default.arrayOf(o.default.shape({key:o.default.string,text:o.default.string,title:o.default.string,href:o.default.string,onClick:o.default.func})),intl:o.default.shape({formatMessage:o.default.func}).isRequired},i=function(e){var t=e.items,n=e.intl,l=t.slice(0,t.length-1),o=t[t.length-1];return r.default.createElement(c.default,{isReversedChildrenOrder:!0,useHorizontalIcon:!0,isStartAligned:!0,menuIconText:n.formatMessage({id:"Terra.file-path.icon.text"})},l.map((function(e){return[r.default.createElement(c.default.Hyperlink,{key:e.key,text:e.text,title:e.title,href:e.href,onClick:e.onClick}),r.default.createElement(c.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(e.key)})]})).flat(),r.default.createElement(c.default.Item,{isTextOnly:!0,text:o.text,key:o.key}))};i.propTypes=f;t.default=(0,a.injectIntl)(i)},38835:function(e,t,n){var l=n(64836);t.Z=void 0;var r=l(n(67294)),o=l(n(82457)),a=[{key:"home",text:"Home",href:"https://oracle.com"},{key:"level-1",text:"Level 1",href:"https://oracle.com"},{key:"level-2",text:"Level 2",href:"https://oracle.com"},{key:"level-3",text:"Level 3",href:"https://oracle.com"},{key:"level-4",text:"Level 4",href:"https://oracle.com"},{key:"level-5",text:"Level 5",href:"https://oracle.com"},{key:"level-6",text:"Level 6",href:"https://oracle.com"},{key:"level-7",text:"Level 7",href:"https://oracle.com"},{key:"level-8",text:"Level 8",href:"https://oracle.com"},{key:"level-9",text:"Level 9",href:"https://oracle.com"},{key:"level-10",text:"Level 10",href:"https://oracle.com"},{key:"level-11",text:"Level 11",href:"https://oracle.com"},{key:"level-12",text:"Level 12",href:"https://oracle.com"}];t.Z=function(){return r.default.createElement(o.default,{items:a})}},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,{Z:function(){return l}})}}]);