"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[23683],{23683:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var l=n(58168),r=n(53986),a=(n(96540),n(36665)),i=n(74647),o=n(36060),c=n(12883),d=["components"],p={},m="wrapper";function s(e){var t=e.components,n=(0,r.A)(e,d);return(0,a.mdx)(m,(0,l.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(c.Ay,{mdxType:"PropsTable"},(0,a.mdx)(c.fI,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(c.dt,{mdxType:"PropNameCell"},"items"),(0,a.mdx)(c.$d,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    key: {\n      type: 'string',\n      description: 'The unique key for the link.',\n    },\n    text: {\n      type: 'string',\n      description: 'The content to display inside link.',\n    },\n    title: {\n      type: 'string',\n      description: 'Additional information to display as a native tooltip on hover per hyperlink.',\n    },\n    href: {\n      type: 'string',\n      description: '![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)\nSets the href of the link. href is required for hyperlinks and should be ignored when `onClick` callback is used.',\n    },\n    onClick: {\n      type: 'func',\n      description: '![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)\nCallback function triggered when clicked. onClick is required to render hyperlink as a button.\n`onClick` should be ignored when `href` is provided.',\n    },\n  },\n}],\n"))),(0,a.mdx)(c.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(c.NZ,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(c.Hd,{mdxType:"DescriptionCell"}))))}s.isMDXComponent=!0;var u=n(43527),h=n(584),x=["components"],f={},v="wrapper";function k(e){var t=e.components,n=(0,r.A)(e,x);return(0,a.mdx)(v,(0,l.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.E,{mdxType:"Badge"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/tree/main/packages/terra-dialog-modal#readme"},(0,a.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,a.mdx)("h1",{id:"terra-filepath"},"Terra FilePath"),(0,a.mdx)(i.Notice,{variant:"deprecation",mdxType:"Notice"},(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"terra-file-path")," has been deprecated and is only intended for the fusion passthrough effort.")),(0,a.mdx)(i.Notice,{variant:"caution",ariaLevel:"2",mdxType:"Notice"},"Terra File Path is currently under alpha release. There may be breaking changes between releases until it is stable with the 1.0 release."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"terra-file-path")," component displays the current location within a hierarchy. The last item is considered the current location and is not interactable."),(0,a.mdx)("p",null,"Each location is rendered as a ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/hyperlink/about"},(0,a.mdx)("inlineCode",{parentName:"a"},"terra-hyperlink")),"."),(0,a.mdx)("p",null,"The component is fully responsive -- links will be displayed face-up and flex based on the space available. Any items that can not fit in the available space will be rolled into an ellipsis menu."),(0,a.mdx)("p",null,"Consumers are responsible for maintaining the state of the component."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-file-path"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(u.A,{mdxType:"DefaultFilePath"}),(0,a.mdx)(h.A,{mdxType:"OnClickFilePath"}),(0,a.mdx)("h2",{id:"filepath-props-table"},"FilePath props table"),(0,a.mdx)(s,{mdxType:"FilePathPropsTable"}))}k.isMDXComponent=!0},43527:function(e,t,n){n.d(t,{A:function(){return s}});var l=n(96540),r=n(93865),a=n(58168),i=n(53986),o=n(36665),c=["components"],d={};function p(e){var t=e.components,n=(0,i.A)(e,c);return(0,o.mdx)("wrapper",(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport FilePath from 'terra-file-path';\n\nconst items = [\n  {\n    key: 'home',\n    text: 'Home',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-1',\n    text: 'Level 1',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-2',\n    text: 'Level 2',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-3',\n    text: 'Level 3',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-4',\n    text: 'Level 4',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-5',\n    text: 'Level 5',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-6',\n    text: 'Level 6',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-7',\n    text: 'Level 7',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-8',\n    text: 'Level 8',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-9',\n    text: 'Level 9',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-10',\n    text: 'Level 10',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-11',\n    text: 'Level 11',\n    href: 'https://oracle.com',\n  },\n  {\n    key: 'level-12',\n    text: 'Level 12',\n    href: 'https://oracle.com',\n  },\n];\n\nconst DefaultFilePath = () => (\n  <FilePath items={items} />\n);\n\nexport default DefaultFilePath;\n\n")))}p.isMDXComponent=!0;var m=n(201),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(m.A,{title:t||"Default File Path",description:n,example:l.createElement(r.A,null),exampleSrc:l.createElement(p,null),isExpanded:a})}},584:function(e,t,n){n.d(t,{A:function(){return s}});var l=n(96540),r=n(42671),a=n(58168),i=n(53986),o=n(36665),c=["components"],d={};function p(e){var t=e.components,n=(0,i.A)(e,c);return(0,o.mdx)("wrapper",(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable react/forbid-dom-props */\nimport React, { useState } from 'react';\nimport FilePath from 'terra-file-path';\n\nconst DefaultFilePath = () => {\n  const [displayText, setDisplayText] = useState('Nothing');\n\n  const handleOnClick = (text) => () => {\n    setDisplayText(text);\n  };\n\n  const items = [\n    {\n      key: 'home',\n      text: 'Home',\n      onClick: handleOnClick('Home'),\n    },\n    {\n      key: 'level-1',\n      text: 'Level 1',\n      onClick: handleOnClick('Level 1'),\n    },\n    {\n      key: 'level-2',\n      text: 'Level 2',\n      onClick: handleOnClick('Level 2'),\n    },\n    {\n      key: 'level-3',\n      text: 'Level 3',\n      onClick: handleOnClick('Level 3'),\n    },\n    {\n      key: 'level-4',\n      text: 'Level 4',\n      onClick: handleOnClick('Level 4'),\n    },\n    {\n      key: 'level-5',\n      text: 'Level 5',\n      onClick: handleOnClick('Level 5'),\n    },\n    {\n      key: 'level-6',\n      text: 'Level 6',\n      onClick: handleOnClick('Level 6'),\n    },\n    {\n      key: 'level-7',\n      text: 'Level 7',\n      onClick: handleOnClick('Level 7'),\n    },\n    {\n      key: 'level-8',\n      text: 'Level 8',\n      onClick: handleOnClick('Level 8'),\n    },\n    {\n      key: 'level-9',\n      text: 'Level 9',\n      onClick: handleOnClick('Level 9'),\n    },\n    {\n      key: 'level-10',\n      text: 'Level 10',\n      onClick: handleOnClick('Level 10'),\n    },\n    {\n      key: 'level-11',\n      text: 'Level 11',\n      onClick: handleOnClick('Level 11'),\n    },\n    {\n      key: 'level-12',\n      text: 'Level 12',\n      onClick: handleOnClick('Level 12'),\n    },\n  ];\n\n  return (\n    <>\n      <FilePath items={items} />\n      <h1 style={{ textAlign: 'right' }}>{`${displayText} clicked!`}</h1>\n    </>\n  );\n};\n\nexport default DefaultFilePath;\n\n")))}p.isMDXComponent=!0;var m=n(201),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(m.A,{title:t||"On Click File Path",description:n,example:l.createElement(r.A,null),exampleSrc:l.createElement(p,null),isExpanded:a})}},36060:function(e,t,n){n.d(t,{E:function(){return a}});var l=n(96540),r=n(55713),a=function(e){var t=e.url;return l.createElement(r.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-file-path",name:"terra-file-path",version:"1.21.0",url:t})}},6929:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(96540)),a=l(n(5556)),i=n(8604),o=l(n(26714)),c={items:a.default.arrayOf(a.default.shape({key:a.default.string,text:a.default.string,title:a.default.string,href:a.default.string,onClick:a.default.func})),intl:a.default.shape({formatMessage:a.default.func}).isRequired},d=function(e){var t=e.items,n=e.intl,l=t.slice(0,t.length-1),a=t[t.length-1];return r.default.createElement("nav",{"aria-label":"".concat(n.formatMessage({id:"Terra.file-path.ariaLabel"}),", ").concat(n.formatMessage({id:"Terra.file-path.ariaLabel-current-location"})," ").concat(a.text)},r.default.createElement(o.default,{isReversedChildrenOrder:!0,useHorizontalIcon:!0,isStartAligned:!0,menuIconText:n.formatMessage({id:"Terra.file-path.icon.text"})},l.map((function(e){return[r.default.createElement(o.default.Hyperlink,{key:e.key,text:e.text,title:e.title,href:e.href,onClick:e.onClick}),r.default.createElement(o.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(e.key)})]})).flat(),r.default.createElement(o.default.Item,{isTextOnly:!0,text:a.text,key:a.key})))};d.propTypes=c;t.default=(0,i.injectIntl)(d)},93865:function(e,t,n){var l=n(24994);t.A=void 0;var r=l(n(96540)),a=l(n(6929)),i=[{key:"home",text:"Home",href:"https://oracle.com"},{key:"level-1",text:"Level 1",href:"https://oracle.com"},{key:"level-2",text:"Level 2",href:"https://oracle.com"},{key:"level-3",text:"Level 3",href:"https://oracle.com"},{key:"level-4",text:"Level 4",href:"https://oracle.com"},{key:"level-5",text:"Level 5",href:"https://oracle.com"},{key:"level-6",text:"Level 6",href:"https://oracle.com"},{key:"level-7",text:"Level 7",href:"https://oracle.com"},{key:"level-8",text:"Level 8",href:"https://oracle.com"},{key:"level-9",text:"Level 9",href:"https://oracle.com"},{key:"level-10",text:"Level 10",href:"https://oracle.com"},{key:"level-11",text:"Level 11",href:"https://oracle.com"},{key:"level-12",text:"Level 12",href:"https://oracle.com"}];t.A=function(){return r.default.createElement(a.default,{items:i})}},42671:function(e,t,n){var l=n(24994),r=n(73738);t.A=void 0;var a=l(n(85715)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}return l.default=e,n&&n.set(e,l),l}(n(96540)),o=l(n(6929));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}t.A=function(){var e=(0,i.useState)("Nothing"),t=(0,a.default)(e,2),n=t[0],l=t[1],r=function(e){return function(){l(e)}},c=[{key:"home",text:"Home",onClick:r("Home")},{key:"level-1",text:"Level 1",onClick:r("Level 1")},{key:"level-2",text:"Level 2",onClick:r("Level 2")},{key:"level-3",text:"Level 3",onClick:r("Level 3")},{key:"level-4",text:"Level 4",onClick:r("Level 4")},{key:"level-5",text:"Level 5",onClick:r("Level 5")},{key:"level-6",text:"Level 6",onClick:r("Level 6")},{key:"level-7",text:"Level 7",onClick:r("Level 7")},{key:"level-8",text:"Level 8",onClick:r("Level 8")},{key:"level-9",text:"Level 9",onClick:r("Level 9")},{key:"level-10",text:"Level 10",onClick:r("Level 10")},{key:"level-11",text:"Level 11",onClick:r("Level 11")},{key:"level-12",text:"Level 12",onClick:r("Level 12")}];return i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,{items:c}),i.default.createElement("h1",{style:{textAlign:"right"}},"".concat(n," clicked!")))}}}]);