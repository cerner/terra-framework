"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[27521],{30323:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var a=n(58168),i=n(53986),o=n(96540),l=n(36665),r=n(20407),c=n(38654),m=["components"],p={};function u(e){var t=e.components,n=(0,i.A)(e,m);return(0,l.mdx)("wrapper",(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable react/prop-types */\nimport React, { useState } from 'react';\nimport IconSearch from 'terra-icon/lib/icon/IconSearch';\nimport IconPill from 'terra-icon/lib/icon/IconPill';\nimport IconVisualization from 'terra-icon/lib/icon/IconVisualization';\nimport IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';\nimport { Placeholder } from '@cerner/terra-docs';\nimport ExampleWrapper from './ExampleWrapper';\nimport ApplicationNavigation from '../../../ApplicationNavigation';\n\nconst titleConfig = {\n  title: 'Test Title',\n};\n\nconst userConfig = {\n  name: 'Test Name',\n  initials: 'TN',\n};\n\nconst extensionItems = [\n  {\n    icon: <IconSearch />,\n    key: 'item-a',\n    text: 'Item A',\n    metaData: {\n      test: 'a',\n    },\n  }, {\n    icon: <IconPill />,\n    key: 'item-b',\n    text: 'Item B',\n    metaData: {\n      test: 'b',\n    },\n  }, {\n    icon: <IconVisualization />,\n    key: 'item-c',\n    text: 'Item C',\n    metaData: {\n      test: 'c',\n    },\n  }, {\n    icon: <IconLightbulb />,\n    key: 'item-d',\n    text: 'Item D',\n    metaData: {\n      test: 'd',\n    },\n  },\n];\n\nconst navigationItems = [\n  {\n    key: '/page_1',\n    text: 'Page 1',\n    metaData: {\n      display: 'Page 1',\n    },\n  }, {\n    key: '/page_2',\n    text: 'Page 2',\n    metaData: {\n      display: 'Page 2',\n    },\n  }, {\n    key: '/page_3',\n    text: 'Page 3',\n    metaData: {\n      display: 'Page 3',\n    },\n  }, {\n    key: '/page_4',\n    text: 'Page 4',\n    metaData: {\n      display: 'Page 4',\n    },\n  }, {\n    key: '/page_5',\n    text: 'Page 5',\n    metaData: {\n      display: 'Page 5',\n    },\n  }, {\n    key: '/page_6',\n    text: 'Page 6',\n    metaData: {\n      display: 'Page 6',\n    },\n  }, {\n    key: '/page_7',\n    text: 'Page 7',\n    metaData: {\n      display: 'Page 7',\n    },\n  }, {\n    key: '/page_8',\n    text: 'Page 8',\n    metaData: {\n      display: 'Page 8',\n    },\n  },\n];\n\nconst utilityItems = [\n  {\n    icon: <IconSearch />,\n    key: 'item-a',\n    text: 'Item A',\n    metaData: {\n      test: 'a',\n    },\n  }, {\n    icon: <IconPill />,\n    key: 'item-b',\n    text: 'Item B',\n    metaData: {\n      test: 'b',\n    },\n  }, {\n    icon: <IconVisualization />,\n    key: 'item-c',\n    text: 'Item C',\n    metaData: {\n      test: 'c',\n    },\n  }, {\n    icon: <IconLightbulb />,\n    key: 'item-d',\n    text: 'Item D',\n    metaData: {\n      test: 'd',\n    },\n  },\n];\n\nconst ExampleApplication = ({ onAction }) => {\n  const [activeKey, setActiveKey] = useState(navigationItems[0].key);\n\n  return (\n    <ApplicationNavigation\n      titleConfig={titleConfig}\n      userConfig={userConfig}\n      extensionItems={extensionItems}\n      onSelectExtensionItem={onAction}\n      navigationItems={navigationItems}\n      activeNavigationItemKey={activeKey}\n      onSelectNavigationItem={key => setActiveKey(key)}\n      utilityItems={utilityItems}\n      onSelectUtilityItem={onAction}\n      onSelectSettings={() => onAction('settings')}\n      onSelectHelp={() => onAction('help')}\n      onSelectLogout={() => onAction('logout')}\n      id=\"example-application\"\n    >\n      <Placeholder title={activeKey} />\n    </ApplicationNavigation>\n  );\n};\n\nconst ExampleNavigation = () => (\n  <ExampleWrapper>\n    <ExampleApplication />\n  </ExampleWrapper>\n);\n\nexport default ExampleNavigation;\n\n")))}u.isMDXComponent=!0;var s=n(201),d=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(s.A,{title:t||"Example Application",description:n,example:o.createElement(c.A,null),exampleSrc:o.createElement(u,null),isExpanded:a})},f=["components"],g={},y="wrapper";function x(e){var t=e.components,n=(0,i.A)(e,f);return(0,l.mdx)(y,(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(r.E,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-application-navigation"},"Terra Application Navigation"),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(d,{mdxType:"ExampleApplication"}))}x.isMDXComponent=!0},20407:function(e,t,n){n.d(t,{E:function(){return o}});var a=n(96540),i=n(55713),o=function(e){var t=e.url;return a.createElement(i.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-navigation",name:"terra-application-navigation",version:"1.85.0",url:t})}},38654:function(e,t,n){var a=n(24994),i=n(73738);t.A=void 0;var o=a(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(96540)),r=a(n(98814)),c=a(n(26177)),m=a(n(86952)),p=a(n(94685)),u=n(74647),s=a(n(7395)),d=a(n(66883));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var g={title:"Test Title"},y={name:"Test Name",initials:"TN"},x=[{icon:l.default.createElement(r.default,null),key:"item-a",text:"Item A",metaData:{test:"a"}},{icon:l.default.createElement(c.default,null),key:"item-b",text:"Item B",metaData:{test:"b"}},{icon:l.default.createElement(m.default,null),key:"item-c",text:"Item C",metaData:{test:"c"}},{icon:l.default.createElement(p.default,null),key:"item-d",text:"Item D",metaData:{test:"d"}}],v=[{key:"/page_1",text:"Page 1",metaData:{display:"Page 1"}},{key:"/page_2",text:"Page 2",metaData:{display:"Page 2"}},{key:"/page_3",text:"Page 3",metaData:{display:"Page 3"}},{key:"/page_4",text:"Page 4",metaData:{display:"Page 4"}},{key:"/page_5",text:"Page 5",metaData:{display:"Page 5"}},{key:"/page_6",text:"Page 6",metaData:{display:"Page 6"}},{key:"/page_7",text:"Page 7",metaData:{display:"Page 7"}},{key:"/page_8",text:"Page 8",metaData:{display:"Page 8"}}],I=[{icon:l.default.createElement(r.default,null),key:"item-a",text:"Item A",metaData:{test:"a"}},{icon:l.default.createElement(c.default,null),key:"item-b",text:"Item B",metaData:{test:"b"}},{icon:l.default.createElement(m.default,null),key:"item-c",text:"Item C",metaData:{test:"c"}},{icon:l.default.createElement(p.default,null),key:"item-d",text:"Item D",metaData:{test:"d"}}],P=function(e){var t=e.onAction,n=(0,l.useState)(v[0].key),a=(0,o.default)(n,2),i=a[0],r=a[1];return l.default.createElement(d.default,{titleConfig:g,userConfig:y,extensionItems:x,onSelectExtensionItem:t,navigationItems:v,activeNavigationItemKey:i,onSelectNavigationItem:function(e){return r(e)},utilityItems:I,onSelectUtilityItem:t,onSelectSettings:function(){return t("settings")},onSelectHelp:function(){return t("help")},onSelectLogout:function(){return t("logout")},id:"example-application"},l.default.createElement(u.Placeholder,{title:i}))};t.A=function(){return l.default.createElement(s.default,null,l.default.createElement(P,null))}},7395:function(e,t,n){var a=n(24994),i=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(85715)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(96540)),r=a(n(67967)),c=a(n(92848));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var p=r.default.bind(c.default);t.default=function(e){var t=e.children,n=(0,l.useState)(null),a=(0,o.default)(n,2),i=a[0],r=a[1];function c(e){r("Current Action: ".concat(e))}return l.default.createElement("div",null,i,l.default.createElement("div",{className:p("wrapper")},l.default.Children.map(t,(function(e){return l.default.cloneElement(e,{onAction:c})}))))}},92848:function(e,t,n){n.r(t),t.default={wrapper:"ExampleWrapper-module__wrapper___PZadA"}}}]);