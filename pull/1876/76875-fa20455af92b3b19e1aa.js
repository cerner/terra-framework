"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[76875],{26366:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var l=t(87462),r=t(44925),i=(t(67294),t(81254)),a=t(70775),o=["components"],c={},u="wrapper";function v(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.mdx)(u,(0,l.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(a.Z,{mdxType:"OnClickFilePath"}))}v.isMDXComponent=!0},70775:function(e,n,t){t.d(n,{Z:function(){return k}});var l=t(67294),r=t(29344),i=t(87462),a=t(44925),o=t(81254),c=["components"],u={};function v(e){var n=e.components,t=(0,a.Z)(e,c);return(0,o.mdx)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable react/forbid-dom-props */\nimport React, { useState } from 'react';\nimport FilePath from 'terra-file-path';\n\nconst DefaultFilePath = () => {\n  const [displayText, setDisplayText] = useState('Nothing');\n\n  const handleOnClick = (text) => () => {\n    setDisplayText(text);\n  };\n\n  const items = [\n    {\n      key: 'home',\n      text: 'Home',\n      onClick: handleOnClick('Home'),\n    },\n    {\n      key: 'level-1',\n      text: 'Level 1',\n      onClick: handleOnClick('Level 1'),\n    },\n    {\n      key: 'level-2',\n      text: 'Level 2',\n      onClick: handleOnClick('Level 2'),\n    },\n    {\n      key: 'level-3',\n      text: 'Level 3',\n      onClick: handleOnClick('Level 3'),\n    },\n    {\n      key: 'level-4',\n      text: 'Level 4',\n      onClick: handleOnClick('Level 4'),\n    },\n    {\n      key: 'level-5',\n      text: 'Level 5',\n      onClick: handleOnClick('Level 5'),\n    },\n    {\n      key: 'level-6',\n      text: 'Level 6',\n      onClick: handleOnClick('Level 6'),\n    },\n    {\n      key: 'level-7',\n      text: 'Level 7',\n      onClick: handleOnClick('Level 7'),\n    },\n    {\n      key: 'level-8',\n      text: 'Level 8',\n      onClick: handleOnClick('Level 8'),\n    },\n    {\n      key: 'level-9',\n      text: 'Level 9',\n      onClick: handleOnClick('Level 9'),\n    },\n    {\n      key: 'level-10',\n      text: 'Level 10',\n      onClick: handleOnClick('Level 10'),\n    },\n    {\n      key: 'level-11',\n      text: 'Level 11',\n      onClick: handleOnClick('Level 11'),\n    },\n    {\n      key: 'level-12',\n      text: 'Level 12',\n      onClick: handleOnClick('Level 12'),\n    },\n  ];\n\n  return (\n    <>\n      <FilePath items={items} />\n      <h1 style={{ textAlign: 'right' }}>{`${displayText} clicked!`}</h1>\n    </>\n  );\n};\n\nexport default DefaultFilePath;\n\n")))}v.isMDXComponent=!0;var f=t(49271),k=function(e){var n=e.title,t=e.description,i=e.isExpanded;return l.createElement(f.Z,{title:n||"On Click File Path",description:t,example:l.createElement(r.Z,null),exampleSrc:l.createElement(v,null),isExpanded:i})}},82457:function(e,n,t){var l=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=l(t(67294)),i=l(t(45697)),a=t(25387),o=l(t(57927)),c={items:i.default.arrayOf(i.default.shape({key:i.default.string,text:i.default.string,title:i.default.string,href:i.default.string,onClick:i.default.func})),intl:i.default.shape({formatMessage:i.default.func}).isRequired},u=function(e){var n=e.items,t=e.intl,l=n.slice(0,n.length-1),i=n[n.length-1];return r.default.createElement(o.default,{isReversedChildrenOrder:!0,useHorizontalIcon:!0,isStartAligned:!0,iconText:t.formatMessage({id:"Terra.file-path.icon.text"})},l.map((function(e){return[r.default.createElement(o.default.Hyperlink,{key:e.key,text:e.text,title:e.title,href:e.href,onClick:e.onClick}),r.default.createElement(o.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(e.key)})]})).flat(),r.default.createElement(o.default.Item,{isTextOnly:!0,text:i.text,key:i.key}))};u.propTypes=c;n.default=(0,a.injectIntl)(u)},29344:function(e,n,t){var l=t(64836),r=t(18698);n.Z=void 0;var i=l(t(27424)),a=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var l={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=i?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}return l.default=e,t&&t.set(e,l),l}(t(67294)),o=l(t(82457));function c(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}n.Z=function(){var e=(0,a.useState)("Nothing"),n=(0,i.default)(e,2),t=n[0],l=n[1],r=function(e){return function(){l(e)}},c=[{key:"home",text:"Home",onClick:r("Home")},{key:"level-1",text:"Level 1",onClick:r("Level 1")},{key:"level-2",text:"Level 2",onClick:r("Level 2")},{key:"level-3",text:"Level 3",onClick:r("Level 3")},{key:"level-4",text:"Level 4",onClick:r("Level 4")},{key:"level-5",text:"Level 5",onClick:r("Level 5")},{key:"level-6",text:"Level 6",onClick:r("Level 6")},{key:"level-7",text:"Level 7",onClick:r("Level 7")},{key:"level-8",text:"Level 8",onClick:r("Level 8")},{key:"level-9",text:"Level 9",onClick:r("Level 9")},{key:"level-10",text:"Level 10",onClick:r("Level 10")},{key:"level-11",text:"Level 11",onClick:r("Level 11")},{key:"level-12",text:"Level 12",onClick:r("Level 12")}];return a.default.createElement(a.default.Fragment,null,a.default.createElement(o.default,{items:c}),a.default.createElement("h1",{style:{textAlign:"right"}},"".concat(t," clicked!")))}},87462:function(e,n,t){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},l.apply(this,arguments)}t.d(n,{Z:function(){return l}})},44925:function(e,n,t){function l(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},i=Object.keys(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)t=i[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}t.d(n,{Z:function(){return l}})}}]);