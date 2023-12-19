"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[98234],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),d=a(n(45697)),r=a(n(47166)),u=a(n(17422)),i=r.default.bind(u.default),m={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},o=function(e){var t=e.src,n=e.name,a=e.url,d=e.version,r=l.default.createElement("a",{className:i("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(d)},l.default.createElement("span",{className:i("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(d))),u=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},r,u)};o.propTypes=m;var s=o;t.Z=s},49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var d=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var a={},d=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var u=d?Object.getOwnPropertyDescriptor(e,r):null;u&&(u.get||u.set)?Object.defineProperty(a,r,u):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),u=a(n(45697)),i=a(n(47166)),m=n(21538),o=a(n(33864)),s=a(n(23399)),c=n(51051),p=a(n(53560));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}var f=i.default.bind(p.default),h={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,u=e.description,i=e.isExpanded,p=(0,r.useState)(i),x=(0,d.default)(p,2),h=x[0],b=x[1],v=(0,r.useState)(!1),_=(0,d.default)(v,2),N=_[0],C=_[1],k=r.default.useContext(m.ThemeContext),T=void 0!==a,E=function(){C(!N),h&&b(!h)},M=function(){b(!h),N&&C(!N)},S=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:f("template",k.className)},r.default.createElement("div",{className:f("header")},l&&r.default.createElement("h2",{className:f("title")},l)),r.default.createElement("div",{className:f("content")},u&&r.default.createElement("div",{className:f("description")},u),t),r.default.createElement("div",{className:f("footer")},n?r.default.createElement("div",{className:f("button-container")},T&&r.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":N}),onClick:E,onKeyDown:function(e){return S(e,E)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(o.default,{className:f("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(s.default,{className:f("chevron")})),r.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":h}),onClick:M,onKeyDown:function(e){return S(e,M)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(o.default,{className:f("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(s.default,{className:f("chevron")}))):null,r.default.createElement("div",null,N&&r.default.createElement("div",{className:f("css")},a),h&&r.default.createElement("div",{className:f("code")},n))))};b.propTypes=h,b.defaultProps={isExpanded:!1};var v=b;t.Z=v},6340:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(87462),l=n(44925),d=n(67294),r=n(81254),u=n(81720),i=n(78530),m=["components"],o={},s="wrapper";function c(e){var t=e.components,n=(0,l.Z)(e,m);return(0,r.mdx)(s,(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.ZP,{mdxType:"PropsTable"},(0,r.mdx)(i.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"menuItems"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    childKeys: {\n      arrayOf: [{\n        type: 'string',\n      }],\n    },\n    hasSubMenu: {\n      type: 'bool',\n      description: 'Used to match visual style of a menuItem with children on an item without children.',\n    },\n    isRootMenu: {\n      type: 'bool',\n      description: 'Whether or not the menu is the primary navigation links in small form factor.',\n    },\n    id: {\n      type: 'string',\n      description: 'ID to be applied to the menu item div.',\n    },\n    metaData: {\n      type: 'object',\n      description: 'Optional meta data to be returned along with the item key within the onChange.',\n    },\n    key: {\n      type: 'string',\n      required: true,\n      description: 'Unique identifier that will be returned in the onChange callback when an endpoint is reached.',\n    },\n    text: {\n      type: 'string',\n      required: true,\n      description: 'Text for the menu row and header title when selected.',\n    },\n  },\n}],\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An array of configuration for each menu item."))),(0,r.mdx)(i.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function when a menu endpoint is reached.\nreturns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})"))),(0,r.mdx)(i.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"routingStackBack"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Delegate prop showParent function that is provided by the terra-navigation-layout."))),(0,r.mdx)(i.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"selectedChildKey"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Key of the currently selected child item on the selected menu page.\nThis is used when traveling back up the menu stack or when the child is an end point."))),(0,r.mdx)(i.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"selectedMenuKey"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Key of the currently selected menu page."))),(0,r.mdx)(i.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"toolbar"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An optional toolbar to display below the side menu action header")))))}c.isMDXComponent=!0;var p=n(90518),x=["components"],f={},h="wrapper";function y(e){var t=e.components,n=(0,l.Z)(e,x);return(0,r.mdx)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NavigationSideMenu from 'terra-navigation-side-menu';\n\nimport styles from './NavigationSideMenuExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass NavigationSideMenuDefault extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.resetMenuState = this.resetMenuState.bind(this);\n    this.fakeRoutingBack = this.fakeRoutingBack.bind(this);\n\n    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };\n  }\n\n  handleOnChange(event, changeData) {\n    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });\n  }\n\n  resetMenuState() {\n    this.setState({ selectedMenuKey: 'menu', selectedChildKey: undefined });\n  }\n\n  fakeRoutingBack() {\n    this.setState({ selectedMenuKey: 'fake-parent', selectedChildKey: undefined });\n  }\n\n  render() {\n    let content;\n    if (this.state.selectedMenuKey === 'fake-parent') {\n      content = (\n        <div className={cx('content')}>\n          <button type=\"button\" onClick={this.resetMenuState}>\n            Child Route\n          </button>\n          <p>Parent Route</p>\n        </div>\n      );\n    } else {\n      content = (\n        <NavigationSideMenu\n          id=\"test-menu\"\n          menuItems={[\n            { key: 'menu', text: 'Menu', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },\n            {\n              key: 'submenu1', text: 'Sub Menu 1', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1',\n            },\n            { key: 'submenu2', text: 'Sub Menu 2' },\n            { key: 'submenu3', text: 'Sub Menu 3' },\n            { key: 'submenu4', text: 'Sub Menu 4' },\n            { key: 'subsubmenu1', text: 'Sub-Sub Menu 1', id: 'test-item-2' },\n            { key: 'subsubmenu2', text: 'Sub-Sub Menu 2' },\n            { key: 'subsubmenu3', text: 'Sub-Sub Menu 3' },\n          ]}\n          onChange={this.handleOnChange}\n          routingStackBack={this.fakeRoutingBack}\n          selectedMenuKey={this.state.selectedMenuKey}\n          selectedChildKey={this.state.selectedChildKey}\n        />\n      );\n    }\n\n    return (\n      <div className={cx('content-wrapper')}>\n        {content}\n      </div>\n    );\n  }\n}\n\nexport default NavigationSideMenuDefault;\n\n")))}y.isMDXComponent=!0;var g=n(49271),b=["components"],v={},_="wrapper";function N(e){var t=e.components,n=(0,l.Z)(e,b);return(0,r.mdx)(_,(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '../../../test/navigation-side-menu/NavigationSideMenuDocCommon.module';\n\n:local {\n  .content-wrapper {\n    border: 1px solid #d3d3d3;\n    height: 450px;\n    position: relative;\n    width: 300px;\n  }\n}\n\n")))}N.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,a=e.isExpanded;return d.createElement(g.Z,{title:t||"Navigation Side Menu Example",description:n,example:d.createElement(p.Z,null),exampleCssSrc:d.createElement(N,null),exampleSrc:d.createElement(y,null),isExpanded:a})},k=["components"],T={},E="wrapper";function M(e){var t=e.components,n=(0,l.Z)(e,k);return(0,r.mdx)(E,(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(u.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-navigation-side-menu"},"Terra Navigation Side Menu"),(0,r.mdx)("p",null,"A structural component for nesting navigational items within the content section of the terra-menu-layout."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-navigation-side-menu"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import NavigationSideMenu from 'terra-navigation-side-menu';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(C,{title:"Navigation Side Menu Example",mdxType:"NavigationSideMenuExample"}),(0,r.mdx)("h2",{id:"navigation-side-menu-props-table"},"Navigation Side Menu Props Table"),(0,r.mdx)(c,{mdxType:"NavigationSideMenuPropsTable"}))}M.isMDXComponent=!0},81720:function(e,t,n){n.d(t,{C:function(){return d}});var a=n(67294),l=n(22863),d=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-side-menu",name:"terra-navigation-side-menu",version:"2.49.0",url:t})}},90518:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(56690)),d=a(n(89728)),r=a(n(66115)),u=a(n(61655)),i=a(n(94993)),m=a(n(73808)),o=a(n(67294)),s=a(n(47166)),c=a(n(40338)),p=a(n(85983));function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,m.default)(e);if(t){var l=(0,m.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,i.default)(this,n)}}var f=s.default.bind(p.default),h=function(e){(0,u.default)(n,e);var t=x(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).handleOnChange=a.handleOnChange.bind((0,r.default)(a)),a.resetMenuState=a.resetMenuState.bind((0,r.default)(a)),a.fakeRoutingBack=a.fakeRoutingBack.bind((0,r.default)(a)),a.state={selectedMenuKey:"menu",selectedChildKey:void 0},a}return(0,d.default)(n,[{key:"handleOnChange",value:function(e,t){this.setState({selectedMenuKey:t.selectedMenuKey,selectedChildKey:t.selectedChildKey})}},{key:"resetMenuState",value:function(){this.setState({selectedMenuKey:"menu",selectedChildKey:void 0})}},{key:"fakeRoutingBack",value:function(){this.setState({selectedMenuKey:"fake-parent",selectedChildKey:void 0})}},{key:"render",value:function(){var e;return e="fake-parent"===this.state.selectedMenuKey?o.default.createElement("div",{className:f("content")},o.default.createElement("button",{type:"button",onClick:this.resetMenuState},"Child Route"),o.default.createElement("p",null,"Parent Route")):o.default.createElement(c.default,{id:"test-menu",menuItems:[{key:"menu",text:"Menu",childKeys:["submenu1","submenu2","submenu3","submenu4"]},{key:"submenu1",text:"Sub Menu 1",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Sub Menu 2"},{key:"submenu3",text:"Sub Menu 3"},{key:"submenu4",text:"Sub Menu 4"},{key:"subsubmenu1",text:"Sub-Sub Menu 1",id:"test-item-2"},{key:"subsubmenu2",text:"Sub-Sub Menu 2"},{key:"subsubmenu3",text:"Sub-Sub Menu 3"}],onChange:this.handleOnChange,routingStackBack:this.fakeRoutingBack,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey}),o.default.createElement("div",{className:f("content-wrapper")},e)}}]),n}(o.default.Component);t.Z=h},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},85983:function(e,t,n){n.r(t),t.default={content:"NavigationSideMenuExample-module__content___JgCJO","content-wrapper":"NavigationSideMenuExample-module__content-wrapper___LXOUY",toolbar:"NavigationSideMenuExample-module__toolbar___inOxZ"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),l=d(n(99139));function d(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}var u=function(e){var t=r({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);