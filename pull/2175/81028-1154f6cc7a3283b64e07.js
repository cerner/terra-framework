"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[81028],{201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var d=a(n(85715)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var r=d?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}(n(96540)),r=a(n(5556)),s=a(n(67967)),m=n(92912),u=a(n(49558)),o=a(n(53665)),p=n(25966),c=a(n(89986));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}var y=s.default.bind(c.default),h={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,r=e.description,s=e.isExpanded,c=(0,i.useState)(s),x=(0,d.default)(c,2),h=x[0],g=x[1],v=(0,i.useState)(!1),N=(0,d.default)(v,2),C=N[0],_=N[1],T=i.default.useContext(m.ThemeContext),E=void 0!==a,k=function(){_(!C),h&&g(!h)},D=function(){g(!h),C&&_(!C)},M=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:y("template",T.className)},i.default.createElement("div",{className:y("header")},l&&i.default.createElement("h2",{className:y("title")},l)),i.default.createElement("div",{className:y("content")},r&&i.default.createElement("div",{className:y("description")},r),t),i.default.createElement("div",{className:y("footer")},n?i.default.createElement("div",{className:y("button-container")},E&&i.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":C}),onClick:k,onKeyDown:function(e){return M(e,k)},onBlur:f,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(u.default,{className:y("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(o.default,{className:y("chevron")})),i.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":h}),onClick:D,onKeyDown:function(e){return M(e,D)},onBlur:f,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(u.default,{className:y("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(o.default,{className:y("chevron")}))):null,i.default.createElement("div",null,C&&i.default.createElement("div",{className:y("css")},a),h&&i.default.createElement("div",{className:y("code")},n))))};g.propTypes=h,g.defaultProps={isExpanded:!1};t.A=g},9580:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(58168),l=n(53986),d=n(96540),i=n(36665),r=n(49264),s=n(12883),m=["components"],u={},o="wrapper";function p(e){var t=e.components,n=(0,l.A)(e,m);return(0,i.mdx)(o,(0,a.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(s.Ay,{mdxType:"PropsTable"},(0,i.mdx)(s.fI,{key:"ROW1",mdxType:"Row"},(0,i.mdx)(s.dt,{mdxType:"PropNameCell"},"ariaLabel"),(0,i.mdx)(s.$d,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,i.mdx)(s.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"String that labels the navigation menu for screen readers."))),(0,i.mdx)(s.fI,{key:"ROW2",mdxType:"Row"},(0,i.mdx)(s.dt,{mdxType:"PropNameCell"},"headerLevel"),(0,i.mdx)(s.$d,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,i.mdx)(s.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"3\n"))),(0,i.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"The heading level for the title of the menu."))),(0,i.mdx)(s.fI,{key:"ROW3",mdxType:"Row"},(0,i.mdx)(s.dt,{mdxType:"PropNameCell"},"menuItems"),(0,i.mdx)(s.$d,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    childKeys: {\n      arrayOf: [{\n        type: 'string',\n      }],\n    },\n    hasSubMenu: {\n      type: 'bool',\n      description: 'Used to match visual style of a menuItem with children on an item without children.',\n    },\n    isRootMenu: {\n      type: 'bool',\n      description: 'Whether or not the menu is the primary navigation links in small form factor.',\n    },\n    id: {\n      type: 'string',\n      description: 'ID to be applied to the menu item div.',\n    },\n    metaData: {\n      type: 'object',\n      description: 'Optional meta data to be returned along with the item key within the onChange.',\n    },\n    key: {\n      type: 'string',\n      required: true,\n      description: 'Unique identifier that will be returned in the onChange callback when an endpoint is reached.',\n    },\n    text: {\n      type: 'string',\n      required: true,\n      description: 'Text for the menu row and header title when selected.',\n    },\n    isDisabled: {\n      type: 'bool',\n      description: 'Indicates if item should be disabled',\n    },\n    icon: {\n      type: 'element',\n      description: 'The icon to display to the left for the menu item when variant is 'drill-in'',\n    },\n    customStatusDisplay: {\n      type: 'node',\n      description: 'A custom status display for menu item with no children. Component will fallback to status-view with no results.',\n    },\n    isLoading: {\n      type: 'bool',\n      description: 'Indicates if items are loaded.',\n    },\n  },\n}],\n"))),(0,i.mdx)(s.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,i.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"An array of configuration for each menu item."))),(0,i.mdx)(s.fI,{key:"ROW4",mdxType:"Row"},(0,i.mdx)(s.dt,{mdxType:"PropNameCell"},"onChange"),(0,i.mdx)(s.$d,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,i.mdx)(s.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,i.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Callback function when a menu endpoint is reached.\nreturns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})"))),(0,i.mdx)(s.fI,{key:"ROW5",mdxType:"Row"},(0,i.mdx)(s.dt,{mdxType:"PropNameCell"},"routingStackBack"),(0,i.mdx)(s.$d,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,i.mdx)(s.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Delegate prop showParent function that is provided by the terra-navigation-layout."))),(0,i.mdx)(s.fI,{key:"ROW6",mdxType:"Row"},(0,i.mdx)(s.dt,{mdxType:"PropNameCell"},"selectedChildKey"),(0,i.mdx)(s.$d,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,i.mdx)(s.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Key of the currently selected child item on the selected menu page.\nThis is used when traveling back up the menu stack or when the child is an end point."))),(0,i.mdx)(s.fI,{key:"ROW7",mdxType:"Row"},(0,i.mdx)(s.dt,{mdxType:"PropNameCell"},"selectedMenuKey"),(0,i.mdx)(s.$d,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,i.mdx)(s.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,i.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Key of the currently selected menu page."))),(0,i.mdx)(s.fI,{key:"ROW8",mdxType:"Row"},(0,i.mdx)(s.dt,{mdxType:"PropNameCell"},"toolbar"),(0,i.mdx)(s.$d,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,i.mdx)(s.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,i.mdx)("p",null,"none")),(0,i.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"An optional toolbar to display below the side menu action header"))),(0,i.mdx)(s.fI,{key:"ROW9",mdxType:"Row"},(0,i.mdx)(s.dt,{mdxType:"PropNameCell"},"variant"),(0,i.mdx)(s.$d,{mdxType:"TypeCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  VARIANTS.NAVIGATION_SIDE_MENU\n  VARIANTS.DRILL_IN\n],\n"))),(0,i.mdx)(s.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,i.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},"VARIANTS.NAVIGATION_SIDE_MENU\n"))),(0,i.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,i.mdx)("p",null,"Renders either Navigation Side Menu or Drill-IN")))))}p.isMDXComponent=!0;var c=n(45254),x=["components"],y={};function h(e){var t=e.components,n=(0,l.A)(e,x);return(0,i.mdx)("wrapper",(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NavigationSideMenu from 'terra-navigation-side-menu';\n\nimport styles from './NavigationSideMenuExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass NavigationSideMenuDefault extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.handleOnChange = this.handleOnChange.bind(this);\n\n    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };\n  }\n\n  handleOnChange(event, changeData) {\n    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });\n  }\n\n  render() {\n    const content = (\n      <NavigationSideMenu\n        id=\"test-menu\"\n        menuItems={[\n          { key: 'menu', text: 'Hospital Details', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },\n          {\n            key: 'submenu1', text: 'Hospital services', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1',\n          },\n          { key: 'submenu2', text: 'Hospital events' },\n          { key: 'submenu3', text: 'Hospital Accommodations' },\n          { key: 'submenu4', text: 'Hospital Careers' },\n          { key: 'subsubmenu1', text: 'Imaging', id: 'test-item-2' },\n          { key: 'subsubmenu2', text: 'Laboratory' },\n          { key: 'subsubmenu3', text: 'Rehabilitation services' },\n        ]}\n        onChange={this.handleOnChange}\n        selectedMenuKey={this.state.selectedMenuKey}\n        selectedChildKey={this.state.selectedChildKey}\n        ariaLabel=\"Sub Menu List\"\n      />\n    );\n\n    return (\n      <div className={cx('content-wrapper')}>\n        {content}\n      </div>\n    );\n  }\n}\n\nexport default NavigationSideMenuDefault;\n\n")))}h.isMDXComponent=!0;var f=n(201),b=["components"],g={};function v(e){var t=e.components,n=(0,l.A)(e,b);return(0,i.mdx)("wrapper",(0,a.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '../../../test/navigation-side-menu/NavigationSideMenuDocCommon.module';\n\n:local {\n  .content-wrapper {\n    border: 1px solid #d3d3d3;\n    height: 450px;\n    position: relative;\n    max-width: 300px;\n  }\n}\n\n")))}v.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return d.createElement(f.A,{title:t||"Navigation Side Menu Example",description:n,example:d.createElement(c.A,null),exampleCssSrc:d.createElement(v,null),exampleSrc:d.createElement(h,null),isExpanded:a})},C=n(24608),_=["components"],T={};function E(e){var t=e.components,n=(0,l.A)(e,_);return(0,i.mdx)("wrapper",(0,a.A)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NavigationSideMenu, { VARIANTS } from 'terra-navigation-side-menu';\nimport { IconHospital } from 'terra-icon';\n\nimport styles from './NavigationSideMenuExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass DrillInDefault extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.handleOnChange = this.handleOnChange.bind(this);\n\n    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };\n  }\n\n  handleOnChange(event, changeData) {\n    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });\n  }\n\n  render() {\n    const content = (\n      <NavigationSideMenu\n        id=\"test-menu\"\n        menuItems={[\n          {\n            key: 'menu', text: 'Hospital Details', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4', 'submenu5'],\n          },\n          {\n            key: 'submenu1',\n            text: 'Hospital services',\n            childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'],\n            id: 'test-item-1',\n          },\n          { key: 'submenu2', text: 'Hospital events' },\n          {\n            key: 'submenu3', text: 'Hospital Accommodations', isDisabled: true,\n          },\n          { key: 'submenu4', text: 'Hospital Careers' },\n          {\n            key: 'submenu5',\n            text: 'Hospital Info',\n            childKeys: [],\n            customStatusDisplay: <span>No results for Hospital Info</span>,\n          },\n          {\n            key: 'subsubmenu1', text: 'Imaging', id: 'test-item-2',\n          },\n          { key: 'subsubmenu2', text: 'Laboratory' },\n          {\n            key: 'subsubmenu3', text: 'Rehabilitation services', childKeys: ['rehab1', 'rehab2', 'rehab3'], icon: <IconHospital a11yLabel=\"Location\" />,\n          },\n          { key: 'rehab1', text: 'Rehabilitation services 1' },\n          { key: 'rehab2', text: 'Rehabilitation services 2' },\n          { key: 'rehab3', text: 'Rehabilitation services 3', childKeys: [] },\n        ]}\n        onChange={this.handleOnChange}\n        selectedMenuKey={this.state.selectedMenuKey}\n        selectedChildKey={this.state.selectedChildKey}\n        ariaLabel=\"Sub Menu List\"\n        variant={VARIANTS.DRILL_IN}\n        headerLevel={3}\n      />\n    );\n\n    return (\n      <div className={cx('content-wrapper')}>\n        {content}\n      </div>\n    );\n  }\n}\n\nexport default DrillInDefault;\n\n")))}E.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,a=e.isExpanded;return d.createElement(f.A,{title:t||"Drill In Example",description:n,example:d.createElement(C.A,null),exampleCssSrc:d.createElement(v,null),exampleSrc:d.createElement(E,null),isExpanded:a})},D=["components"],M={},w="wrapper";function R(e){var t=e.components,n=(0,l.A)(e,D);return(0,i.mdx)(w,(0,a.A)({},M,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(r.E,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"terra-navigation-side-menu"},"Terra Navigation Side Menu"),(0,i.mdx)("p",null,"A structural component for nesting navigational items within the content section of the terra-menu-layout."),(0,i.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Install with ",(0,i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"npm install terra-navigation-side-menu"))))),(0,i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,i.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,i.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,i.mdx)("h2",{id:"usage"},"Usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import NavigationSideMenu from 'terra-navigation-side-menu';\n")),(0,i.mdx)("h2",{id:"component-features"},"Component Features"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,i.mdx)("h3",{id:"navigation-side-menu-constants"},"Navigation Side Menu Constants"),(0,i.mdx)("p",null,"Enumeration: VARIANTS"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Constant"),(0,i.mdx)("th",{parentName:"tr",align:null},"Type"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"NAVIGATION_SIDE_MENU")),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"Renders Navigation Side Menu View.")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},(0,i.mdx)("strong",{parentName:"td"},"DRILL_IN")),(0,i.mdx)("td",{parentName:"tr",align:null},"string"),(0,i.mdx)("td",{parentName:"tr",align:null},"Renders Drill In View.")))),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)(N,{title:"Navigation Side Menu Example",mdxType:"NavigationSideMenuExample"}),(0,i.mdx)(k,{title:"DrillIn Example",mdxType:"DrillInExample"}),(0,i.mdx)("h2",{id:"navigation-side-menu-props-table"},"Navigation Side Menu Props Table"),(0,i.mdx)(p,{mdxType:"NavigationSideMenuPropsTable"}))}R.isMDXComponent=!0},49264:function(e,t,n){n.d(t,{E:function(){return d}});var a=n(96540),l=n(55713),d=function(e){var t=e.url;return a.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-side-menu",name:"terra-navigation-side-menu",version:"2.59.1",url:t})}},24608:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var d=a(n(17383)),i=a(n(34579)),r=a(n(28452)),s=a(n(63072)),m=a(n(29511)),u=a(n(96540)),o=a(n(67967)),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&{}.hasOwnProperty.call(e,i)){var r=d?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}(n(58758)),c=n(33049),x=a(n(48299));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function h(e,t,n){return t=(0,s.default)(t),(0,r.default)(e,f()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var b=o.default.bind(x.default),g=function(e){function t(e){var n;return(0,d.default)(this,t),(n=h(this,t,[e])).handleOnChange=n.handleOnChange.bind(n),n.state={selectedMenuKey:"menu",selectedChildKey:void 0},n}return(0,m.default)(t,e),(0,i.default)(t,[{key:"handleOnChange",value:function(e,t){this.setState({selectedMenuKey:t.selectedMenuKey,selectedChildKey:t.selectedChildKey})}},{key:"render",value:function(){var e=u.default.createElement(p.default,{id:"test-menu",menuItems:[{key:"menu",text:"Hospital Details",childKeys:["submenu1","submenu2","submenu3","submenu4","submenu5"]},{key:"submenu1",text:"Hospital services",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Hospital events"},{key:"submenu3",text:"Hospital Accommodations",isDisabled:!0},{key:"submenu4",text:"Hospital Careers"},{key:"submenu5",text:"Hospital Info",childKeys:[],customStatusDisplay:u.default.createElement("span",null,"No results for Hospital Info")},{key:"subsubmenu1",text:"Imaging",id:"test-item-2"},{key:"subsubmenu2",text:"Laboratory"},{key:"subsubmenu3",text:"Rehabilitation services",childKeys:["rehab1","rehab2","rehab3"],icon:u.default.createElement(c.IconHospital,{a11yLabel:"Location"})},{key:"rehab1",text:"Rehabilitation services 1"},{key:"rehab2",text:"Rehabilitation services 2"},{key:"rehab3",text:"Rehabilitation services 3",childKeys:[]}],onChange:this.handleOnChange,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey,ariaLabel:"Sub Menu List",variant:p.VARIANTS.DRILL_IN,headerLevel:3});return u.default.createElement("div",{className:b("content-wrapper")},e)}}])}(u.default.Component);t.A=g},45254:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(17383)),d=a(n(34579)),i=a(n(28452)),r=a(n(63072)),s=a(n(29511)),m=a(n(96540)),u=a(n(67967)),o=a(n(58758)),p=a(n(48299));function c(e,t,n){return t=(0,r.default)(t),(0,i.default)(e,x()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}var y=u.default.bind(p.default),h=function(e){function t(e){var n;return(0,l.default)(this,t),(n=c(this,t,[e])).handleOnChange=n.handleOnChange.bind(n),n.state={selectedMenuKey:"menu",selectedChildKey:void 0},n}return(0,s.default)(t,e),(0,d.default)(t,[{key:"handleOnChange",value:function(e,t){this.setState({selectedMenuKey:t.selectedMenuKey,selectedChildKey:t.selectedChildKey})}},{key:"render",value:function(){var e=m.default.createElement(o.default,{id:"test-menu",menuItems:[{key:"menu",text:"Hospital Details",childKeys:["submenu1","submenu2","submenu3","submenu4"]},{key:"submenu1",text:"Hospital services",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Hospital events"},{key:"submenu3",text:"Hospital Accommodations"},{key:"submenu4",text:"Hospital Careers"},{key:"subsubmenu1",text:"Imaging",id:"test-item-2"},{key:"subsubmenu2",text:"Laboratory"},{key:"subsubmenu3",text:"Rehabilitation services"}],onChange:this.handleOnChange,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey,ariaLabel:"Sub Menu List"});return m.default.createElement("div",{className:y("content-wrapper")},e)}}])}(m.default.Component);t.A=h},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},48299:function(e,t,n){n.r(t),t.default={content:"NavigationSideMenuExample-module__content___JgCJO","content-wrapper":"NavigationSideMenuExample-module__content-wrapper___LXOUY",toolbar:"NavigationSideMenuExample-module__toolbar___inOxZ"}}}]);