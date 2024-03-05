"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[26876],{201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var d=a(n(85715)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=d?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(a,r,i):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(96540)),i=a(n(5556)),u=a(n(67967)),o=n(92912),m=a(n(49558)),s=a(n(53665)),p=n(25966),c=a(n(89986));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}var f=u.default.bind(c.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,u=e.isExpanded,c=(0,r.useState)(u),x=(0,d.default)(c,2),y=x[0],b=x[1],v=(0,r.useState)(!1),_=(0,d.default)(v,2),N=_[0],C=_[1],T=r.default.useContext(o.ThemeContext),k=void 0!==a,E=function(){C(!N),y&&b(!y)},M=function(){b(!y),N&&C(!N)},w=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:f("template",T.className)},r.default.createElement("div",{className:f("header")},l&&r.default.createElement("h2",{className:f("title")},l)),r.default.createElement("div",{className:f("content")},i&&r.default.createElement("div",{className:f("description")},i),t),r.default.createElement("div",{className:f("footer")},n?r.default.createElement("div",{className:f("button-container")},k&&r.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":N}),onClick:E,onKeyDown:function(e){return w(e,E)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(m.default,{className:f("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(s.default,{className:f("chevron")})),r.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:M,onKeyDown:function(e){return w(e,M)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(m.default,{className:f("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(s.default,{className:f("chevron")}))):null,r.default.createElement("div",null,N&&r.default.createElement("div",{className:f("css")},a),y&&r.default.createElement("div",{className:f("code")},n))))};b.propTypes=y,b.defaultProps={isExpanded:!1};t.A=b},23226:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(58168),l=n(53986),d=n(96540),r=n(36665),i=n(49264),u=n(12883),o=["components"],m={},s="wrapper";function p(e){var t=e.components,n=(0,l.A)(e,o);return(0,r.mdx)(s,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(u.Ay,{mdxType:"PropsTable"},(0,r.mdx)(u.fI,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(u.dt,{mdxType:"PropNameCell"},"ariaLabel"),(0,r.mdx)(u.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that labels the navigation menu for screen readers."))),(0,r.mdx)(u.fI,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(u.dt,{mdxType:"PropNameCell"},"menuItems"),(0,r.mdx)(u.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    childKeys: {\n      arrayOf: [{\n        type: 'string',\n      }],\n    },\n    hasSubMenu: {\n      type: 'bool',\n      description: 'Used to match visual style of a menuItem with children on an item without children.',\n    },\n    isRootMenu: {\n      type: 'bool',\n      description: 'Whether or not the menu is the primary navigation links in small form factor.',\n    },\n    id: {\n      type: 'string',\n      description: 'ID to be applied to the menu item div.',\n    },\n    metaData: {\n      type: 'object',\n      description: 'Optional meta data to be returned along with the item key within the onChange.',\n    },\n    key: {\n      type: 'string',\n      required: true,\n      description: 'Unique identifier that will be returned in the onChange callback when an endpoint is reached.',\n    },\n    text: {\n      type: 'string',\n      required: true,\n      description: 'Text for the menu row and header title when selected.',\n    },\n  },\n}],\n"))),(0,r.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,r.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An array of configuration for each menu item."))),(0,r.mdx)(u.fI,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(u.dt,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(u.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(u.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function when a menu endpoint is reached.\nreturns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})"))),(0,r.mdx)(u.fI,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(u.dt,{mdxType:"PropNameCell"},"routingStackBack"),(0,r.mdx)(u.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Delegate prop showParent function that is provided by the terra-navigation-layout."))),(0,r.mdx)(u.fI,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(u.dt,{mdxType:"PropNameCell"},"selectedChildKey"),(0,r.mdx)(u.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Key of the currently selected child item on the selected menu page.\nThis is used when traveling back up the menu stack or when the child is an end point."))),(0,r.mdx)(u.fI,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(u.dt,{mdxType:"PropNameCell"},"selectedMenuKey"),(0,r.mdx)(u.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(u.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Key of the currently selected menu page."))),(0,r.mdx)(u.fI,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(u.dt,{mdxType:"PropNameCell"},"toolbar"),(0,r.mdx)(u.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(u.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(u.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(u.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An optional toolbar to display below the side menu action header")))))}p.isMDXComponent=!0;var c=n(45254),x=["components"],f={};function y(e){var t=e.components,n=(0,l.A)(e,x);return(0,r.mdx)("wrapper",(0,a.A)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NavigationSideMenu from 'terra-navigation-side-menu';\n\nimport styles from './NavigationSideMenuExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass NavigationSideMenuDefault extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.resetMenuState = this.resetMenuState.bind(this);\n    this.fakeRoutingBack = this.fakeRoutingBack.bind(this);\n\n    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };\n  }\n\n  handleOnChange(event, changeData) {\n    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });\n  }\n\n  resetMenuState() {\n    this.setState({ selectedMenuKey: 'menu', selectedChildKey: undefined }, () => {\n      const backButtonRef = document.querySelectorAll('[role=\"menuitem\"]');\n      if (backButtonRef && backButtonRef.length) {\n        backButtonRef[0].focus();\n      }\n    });\n  }\n\n  fakeRoutingBack() {\n    this.setState({ selectedMenuKey: 'fake-parent', selectedChildKey: undefined });\n  }\n\n  render() {\n    let content;\n    if (this.state.selectedMenuKey === 'fake-parent') {\n      content = (\n        <div className={cx('content')}>\n          <button type=\"button\" onClick={this.resetMenuState}>\n            Child Route\n          </button>\n          <p>Parent Route</p>\n        </div>\n      );\n    } else {\n      content = (\n        <NavigationSideMenu\n          id=\"test-menu\"\n          menuItems={[\n            { key: 'menu', text: 'Hospital Details', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },\n            {\n              key: 'submenu1', text: 'Hospital services', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1',\n            },\n            { key: 'submenu2', text: 'Hospital events' },\n            { key: 'submenu3', text: 'Hospital Accommodations' },\n            { key: 'submenu4', text: 'Hospital Careers' },\n            { key: 'subsubmenu1', text: 'Imaging', id: 'test-item-2' },\n            { key: 'subsubmenu2', text: 'Laboratory' },\n            { key: 'subsubmenu3', text: 'Rehabilitation services' },\n          ]}\n          onChange={this.handleOnChange}\n          routingStackBack={this.fakeRoutingBack}\n          selectedMenuKey={this.state.selectedMenuKey}\n          selectedChildKey={this.state.selectedChildKey}\n          ariaLabel=\"Sub Menu List\"\n        />\n      );\n    }\n\n    return (\n      <div className={cx('content-wrapper')}>\n        {content}\n      </div>\n    );\n  }\n}\n\nexport default NavigationSideMenuDefault;\n\n")))}y.isMDXComponent=!0;var h=n(201),g=["components"],b={};function v(e){var t=e.components,n=(0,l.A)(e,g);return(0,r.mdx)("wrapper",(0,a.A)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '../../../test/navigation-side-menu/NavigationSideMenuDocCommon.module';\n\n:local {\n  .content-wrapper {\n    border: 1px solid #d3d3d3;\n    height: 450px;\n    position: relative;\n    width: 300px;\n  }\n}\n\n")))}v.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,a=e.isExpanded;return d.createElement(h.A,{title:t||"Navigation Side Menu Example",description:n,example:d.createElement(c.A,null),exampleCssSrc:d.createElement(v,null),exampleSrc:d.createElement(y,null),isExpanded:a})},N=["components"],C={},T="wrapper";function k(e){var t=e.components,n=(0,l.A)(e,N);return(0,r.mdx)(T,(0,a.A)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.E,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-navigation-side-menu"},"Terra Navigation Side Menu"),(0,r.mdx)("p",null,"A structural component for nesting navigational items within the content section of the terra-menu-layout."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-navigation-side-menu"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import NavigationSideMenu from 'terra-navigation-side-menu';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(_,{title:"Navigation Side Menu Example",mdxType:"NavigationSideMenuExample"}),(0,r.mdx)("h2",{id:"navigation-side-menu-props-table"},"Navigation Side Menu Props Table"),(0,r.mdx)(p,{mdxType:"NavigationSideMenuPropsTable"}))}k.isMDXComponent=!0},49264:function(e,t,n){n.d(t,{E:function(){return d}});var a=n(96540),l=n(55713),d=function(e){var t=e.url;return a.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-side-menu",name:"terra-navigation-side-menu",version:"2.50.0",url:t})}},45254:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(17383)),d=a(n(34579)),r=a(n(28452)),i=a(n(63072)),u=a(n(12475)),o=a(n(29511)),m=a(n(96540)),s=a(n(67967)),p=a(n(58758)),c=a(n(48299));function x(e,t,n){return t=(0,i.default)(t),(0,r.default)(e,f()?Reflect.construct(t,n||[],(0,i.default)(e).constructor):t.apply(e,n))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}var y=s.default.bind(c.default),h=function(e){function t(e){var n;return(0,l.default)(this,t),(n=x(this,t,[e])).handleOnChange=n.handleOnChange.bind((0,u.default)(n)),n.resetMenuState=n.resetMenuState.bind((0,u.default)(n)),n.fakeRoutingBack=n.fakeRoutingBack.bind((0,u.default)(n)),n.state={selectedMenuKey:"menu",selectedChildKey:void 0},n}return(0,o.default)(t,e),(0,d.default)(t,[{key:"handleOnChange",value:function(e,t){this.setState({selectedMenuKey:t.selectedMenuKey,selectedChildKey:t.selectedChildKey})}},{key:"resetMenuState",value:function(){this.setState({selectedMenuKey:"menu",selectedChildKey:void 0},(function(){var e=document.querySelectorAll('[role="menuitem"]');e&&e.length&&e[0].focus()}))}},{key:"fakeRoutingBack",value:function(){this.setState({selectedMenuKey:"fake-parent",selectedChildKey:void 0})}},{key:"render",value:function(){var e;return e="fake-parent"===this.state.selectedMenuKey?m.default.createElement("div",{className:y("content")},m.default.createElement("button",{type:"button",onClick:this.resetMenuState},"Child Route"),m.default.createElement("p",null,"Parent Route")):m.default.createElement(p.default,{id:"test-menu",menuItems:[{key:"menu",text:"Hospital Details",childKeys:["submenu1","submenu2","submenu3","submenu4"]},{key:"submenu1",text:"Hospital services",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Hospital events"},{key:"submenu3",text:"Hospital Accommodations"},{key:"submenu4",text:"Hospital Careers"},{key:"subsubmenu1",text:"Imaging",id:"test-item-2"},{key:"subsubmenu2",text:"Laboratory"},{key:"subsubmenu3",text:"Rehabilitation services"}],onChange:this.handleOnChange,routingStackBack:this.fakeRoutingBack,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey,ariaLabel:"Sub Menu List"}),m.default.createElement("div",{className:y("content-wrapper")},e)}}]),t}(m.default.Component);t.A=h},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},48299:function(e,t,n){n.r(t),t.default={content:"NavigationSideMenuExample-module__content___JgCJO","content-wrapper":"NavigationSideMenuExample-module__content-wrapper___LXOUY",toolbar:"NavigationSideMenuExample-module__toolbar___inOxZ"}},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(96540)),l=d(n(25365));function d(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var i=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);