"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[76875],{26366:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var l=t(87462),a=t(44925),i=(t(67294),t(81254)),r=t(70775),c=["components"],o={},u="wrapper";function v(e){var n=e.components,t=(0,a.Z)(e,c);return(0,i.mdx)(u,(0,l.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(r.Z,{mdxType:"OnClickFilePath"}))}v.isMDXComponent=!0},70775:function(e,n,t){t.d(n,{Z:function(){return f}});var l=t(67294),a=t(29344),i=t(87462),r=t(44925),c=t(81254),o=["components"],u={},v="wrapper";function k(e){var n=e.components,t=(0,r.Z)(e,o);return(0,c.mdx)(v,(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,c.mdx)("pre",null,(0,c.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable react/forbid-dom-props */\nimport React, { useState } from 'react';\nimport FilePath from 'terra-file-path';\n\nconst DefaultFilePath = () => {\n  const [displayText, setDisplayText] = useState('Nothing');\n\n  const handleOnClick = (text) => () => {\n    setDisplayText(text);\n  };\n\n  const items = [\n    {\n      key: 'home',\n      text: 'Home',\n      onClick: handleOnClick('Home'),\n    },\n    {\n      key: 'level-1',\n      text: 'Level 1',\n      onClick: handleOnClick('Level 1'),\n    },\n    {\n      key: 'level-2',\n      text: 'Level 2',\n      onClick: handleOnClick('Level 2'),\n    },\n    {\n      key: 'level-3',\n      text: 'Level 3',\n      onClick: handleOnClick('Level 3'),\n    },\n    {\n      key: 'level-4',\n      text: 'Level 4',\n      onClick: handleOnClick('Level 4'),\n    },\n    {\n      key: 'level-5',\n      text: 'Level 5',\n      onClick: handleOnClick('Level 5'),\n    },\n    {\n      key: 'level-6',\n      text: 'Level 6',\n      onClick: handleOnClick('Level 6'),\n    },\n    {\n      key: 'level-7',\n      text: 'Level 7',\n      onClick: handleOnClick('Level 7'),\n    },\n    {\n      key: 'level-8',\n      text: 'Level 8',\n      onClick: handleOnClick('Level 8'),\n    },\n    {\n      key: 'level-9',\n      text: 'Level 9',\n      onClick: handleOnClick('Level 9'),\n    },\n    {\n      key: 'level-10',\n      text: 'Level 10',\n      onClick: handleOnClick('Level 10'),\n    },\n    {\n      key: 'level-11',\n      text: 'Level 11',\n      onClick: handleOnClick('Level 11'),\n    },\n    {\n      key: 'level-12',\n      text: 'Level 12',\n      onClick: handleOnClick('Level 12'),\n    },\n  ];\n\n  return (\n    <>\n      <FilePath items={items} />\n      <h1 style={{ textAlign: 'right' }}>{`${displayText} clicked!`}</h1>\n    </>\n  );\n};\n\nexport default DefaultFilePath;\n\n")))}k.isMDXComponent=!0;var d=t(49271),f=function(e){var n=e.title,t=e.description,i=e.isExpanded;return l.createElement(d.Z,{title:n||"On Click File Path",description:t,example:l.createElement(a.Z,null),exampleSrc:l.createElement(k,null),isExpanded:i})}},82457:function(e,n,t){var l=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(67294)),i=l(t(45697)),r=t(25387),c=l(t(57927)),o={items:i.default.arrayOf(i.default.shape({key:i.default.string,text:i.default.string,title:i.default.string,href:i.default.string,onClick:i.default.func})),intl:i.default.shape({formatMessage:i.default.func}).isRequired},u=function(e){var n=e.items,t=e.intl,l=n.slice(0,n.length-1),i=n[n.length-1];return a.default.createElement("nav",{"aria-label":"".concat(t.formatMessage({id:"Terra.file-path.ariaLabel"}),", ").concat(t.formatMessage({id:"Terra.file-path.ariaLabel-current-location"})," ").concat(i.text)},a.default.createElement(c.default,{isReversedChildrenOrder:!0,useHorizontalIcon:!0,isStartAligned:!0,menuIconText:t.formatMessage({id:"Terra.file-path.icon.text"})},l.map((function(e){return[a.default.createElement(c.default.Hyperlink,{key:e.key,text:e.text,title:e.title,href:e.href,onClick:e.onClick}),a.default.createElement(c.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(e.key)})]})).flat(),a.default.createElement(c.default.Item,{isTextOnly:!0,text:i.text,key:i.key})))};u.propTypes=o;n.default=(0,r.injectIntl)(u)},29344:function(e,n,t){var l=t(64836),a=t(18698);n.Z=void 0;var i=l(t(27424)),r=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var t=o(n);if(t&&t.has(e))return t.get(e);var l={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=i?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,t&&t.set(e,l),l}(t(67294)),c=l(t(82457));function o(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(o=function(e){return e?t:n})(e)}n.Z=function(){var e=(0,r.useState)("Nothing"),n=(0,i.default)(e,2),t=n[0],l=n[1],a=function(e){return function(){l(e)}},o=[{key:"home",text:"Home",onClick:a("Home")},{key:"level-1",text:"Level 1",onClick:a("Level 1")},{key:"level-2",text:"Level 2",onClick:a("Level 2")},{key:"level-3",text:"Level 3",onClick:a("Level 3")},{key:"level-4",text:"Level 4",onClick:a("Level 4")},{key:"level-5",text:"Level 5",onClick:a("Level 5")},{key:"level-6",text:"Level 6",onClick:a("Level 6")},{key:"level-7",text:"Level 7",onClick:a("Level 7")},{key:"level-8",text:"Level 8",onClick:a("Level 8")},{key:"level-9",text:"Level 9",onClick:a("Level 9")},{key:"level-10",text:"Level 10",onClick:a("Level 10")},{key:"level-11",text:"Level 11",onClick:a("Level 11")},{key:"level-12",text:"Level 12",onClick:a("Level 12")}];return r.default.createElement(r.default.Fragment,null,r.default.createElement(c.default,{items:o}),r.default.createElement("h1",{style:{textAlign:"right"}},"".concat(t," clicked!")))}}}]);