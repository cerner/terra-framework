"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[37872],{201:function(e,t,n){var a=n(24994),l=n(73738);t.A=void 0;var i=a(n(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),r=a(n(5556)),s=a(n(67967)),d=n(92912),m=a(n(49558)),c=a(n(53665)),u=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=s.default.bind(p.default),x={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,r=e.description,s=e.isExpanded,p=(0,o.useState)(s),f=(0,i.default)(p,2),x=f[0],v=f[1],b=(0,o.useState)(!1),N=(0,i.default)(b,2),C=N[0],_=N[1],O=o.default.useContext(d.ThemeContext),T=void 0!==a,E=function(){_(!C),x&&v(!x)},S=function(){v(!x),C&&_(!C)},A=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",O.className)},o.default.createElement("div",{className:y("header")},l&&o.default.createElement("h2",{className:y("title")},l)),o.default.createElement("div",{className:y("content")},r&&o.default.createElement("div",{className:y("description")},r),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},T&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":C}),onClick:E,onKeyDown:function(e){return A(e,E)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(m.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":x}),onClick:S,onKeyDown:function(e){return A(e,S)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(m.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:y("chevron")}))):null,o.default.createElement("div",null,C&&o.default.createElement("div",{className:y("css")},a),x&&o.default.createElement("div",{className:y("code")},n))))};v.propTypes=x,v.defaultProps={isExpanded:!1};t.A=v},3903:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var a=n(58168),l=n(53986),i=n(96540),o=n(36665),r=n(92523),s=n(12883),d=["components"],m={},c="wrapper";function u(e){var t=e.components,n=(0,l.A)(e,d);return(0,o.mdx)(c,(0,a.A)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(s.Ay,{mdxType:"PropsTable"},(0,o.mdx)(s.fI,{key:"ROW1",mdxType:"Row"},(0,o.mdx)(s.dt,{mdxType:"PropNameCell"},"menuItems"),(0,o.mdx)(s.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  type: 'custom',\n}],\n"))),(0,o.mdx)(s.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The array containing the menu items to be rendered within the menu."))),(0,o.mdx)(s.fI,{key:"ROW2",mdxType:"Row"},(0,o.mdx)(s.dt,{mdxType:"PropNameCell"},"onChange"),(0,o.mdx)(s.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,o.mdx)(s.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The function to trigger when a menu item is selected.\nReturns ",(0,o.mdx)("inlineCode",{parentName:"p"},"(event, { key: String, metaData: Object})")))),(0,o.mdx)(s.fI,{key:"ROW3",mdxType:"Row"},(0,o.mdx)(s.dt,{mdxType:"PropNameCell"},"onDisclose"),(0,o.mdx)(s.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,o.mdx)(s.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The function that discloses the menu."))),(0,o.mdx)(s.fI,{key:"ROW4",mdxType:"Row"},(0,o.mdx)(s.dt,{mdxType:"PropNameCell"},"initialSelectedKey"),(0,o.mdx)(s.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(s.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,o.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The key of the top level menu page."))),(0,o.mdx)(s.fI,{key:"ROW5",mdxType:"Row"},(0,o.mdx)(s.dt,{mdxType:"PropNameCell"},"title"),(0,o.mdx)(s.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(s.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The text to be displayed."))),(0,o.mdx)(s.fI,{key:"ROW6",mdxType:"Row"},(0,o.mdx)(s.dt,{mdxType:"PropNameCell"},"accessory"),(0,o.mdx)(s.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,o.mdx)(s.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("p",null,"none")),(0,o.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The accessory element to be displayed next to the title."))),(0,o.mdx)(s.fI,{key:"ROW7",mdxType:"Row"},(0,o.mdx)(s.dt,{mdxType:"PropNameCell"},"menuRole"),(0,o.mdx)(s.$d,{mdxType:"TypeCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,o.mdx)(s.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,o.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"'navigation'\n"))),(0,o.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,o.mdx)("p",null,"The role attribute to set on the menu.")))))}u.isMDXComponent=!0;var p=n(63129),f=["components"],y={};function x(e){var t=e.components,n=(0,l.A)(e,f);return(0,o.mdx)("wrapper",(0,a.A)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Image from 'terra-image';\nimport MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';\nimport FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';\nimport { ApplicationHeaderUtility, UtilityUtils } from 'terra-application-utility';\nimport classNames from 'classnames/bind';\nimport styles from './ApplicationHeaderUtilityExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass ApplicationHeaderUtilityExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);\n    this.state = {\n      discloseCount: 0,\n    };\n  }\n\n  onDiscloseUtility() {\n    this.setState(prevState => ({ discloseCount: prevState.discloseCount + 1 }));\n  }\n\n  render() {\n    const accessory = <Image alt=\"Fallback Avatar\" src={FallbackAvatar} />;\n    const title = 'John Doe';\n\n    return (\n      <div className={cx('container')}>\n        <div className={cx('content-wrapper')}>\n          <ApplicationHeaderUtility\n            menuItems={MockConfig(accessory)}\n            onChange={() => { }}\n            onDisclose={this.onDiscloseUtility}\n            initialSelectedKey=\"menu\"\n            title={title}\n            accessory={accessory}\n            variant={UtilityUtils.VARIANTS.HEADER}\n          />\n        </div>\n        <div>{`Disclose count: ${this.state.discloseCount}`}</div>\n      </div>\n    );\n  }\n}\n\nexport default ApplicationHeaderUtilityExample;\n\n")))}x.isMDXComponent=!0;var h=n(201),g=["components"],v={};function b(e){var t=e.components,n=(0,l.A)(e,g);return(0,o.mdx)("wrapper",(0,a.A)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .container {\n    padding-left: 4px;\n  }\n\n  .content-wrapper {\n    background-color: #0079be;\n    height: 60px;\n    position: relative;\n    width: 150px;\n  }\n}\n\n")))}b.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.createElement(h.A,{title:t||"Application Header Utility Example",description:n,example:i.createElement(p.A,null),exampleCssSrc:i.createElement(b,null),exampleSrc:i.createElement(x,null),isExpanded:a})},C=n(85151),_=["components"],O={};function T(e){var t=e.components,n=(0,l.A)(e,_);return(0,o.mdx)("wrapper",(0,a.A)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Image from 'terra-image';\nimport MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';\nimport FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';\nimport { ApplicationMenuUtility, UtilityUtils } from 'terra-application-utility';\nimport classNames from 'classnames/bind';\nimport styles from './ApplicationMenuUtilityExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass ApplicationMenuUtilityExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onDiscloseUtility = this.onDiscloseUtility.bind(this);\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.state = {\n      discloseCount: 0,\n      selectedKey: null,\n    };\n  }\n\n  handleOnChange(event, key) {\n    this.setState({ selectedKey: key });\n  }\n\n  onDiscloseUtility() {\n    this.setState(prevState => ({ discloseCount: prevState.discloseCount + 1 }));\n  }\n\n  render() {\n    const accessory = <Image alt=\"Fallback Avatar\" src={FallbackAvatar} />;\n    const title = 'John Doe';\n\n    return (\n      <div>\n        <div className={cx('content-wrapper')}>\n          <ApplicationMenuUtility\n            menuItems={MockConfig(accessory)}\n            onChange={this.handleOnChange}\n            onDisclose={this.onDiscloseUtility}\n            initialSelectedKey=\"menu\"\n            title={title}\n            accessory={accessory}\n            variant={UtilityUtils.VARIANTS.MENU}\n          />\n        </div>\n        <div>{`Trigger event for: ${this.state.selectedKey}.`}</div>\n        <div>{`Disclose count: ${this.state.discloseCount}.`}</div>\n      </div>\n    );\n  }\n}\n\nexport default ApplicationMenuUtilityExample;\n\n")))}T.isMDXComponent=!0;var E=["components"],S={};function A(e){var t=e.components,n=(0,l.A)(e,E);return(0,o.mdx)("wrapper",(0,a.A)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    height: 60px;\n    padding-left: 4px;\n    width: 300px;\n  }\n}\n\n")))}A.isMDXComponent=!0;var U=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.createElement(h.A,{title:t||"Application Menu Utility Example",description:n,example:i.createElement(C.A,null),exampleCssSrc:i.createElement(A,null),exampleSrc:i.createElement(T,null),isExpanded:a})},w=n(7966),k=["components"],D={};function M(e){var t=e.components,n=(0,l.A)(e,k);return(0,o.mdx)("wrapper",(0,a.A)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Image from 'terra-image';\nimport MockConfig from 'terra-application-utility/lib/terra-dev-site/doc/common/MockConfig';\nimport FallbackAvatar from 'terra-application-utility/lib/terra-dev-site/doc/common/FallbackAvatar.svg';\nimport { UtilityUtils } from 'terra-application-utility';\nimport UtilityMenu from 'terra-application-utility/lib/utility/_UtilityMenu';\nimport classNames from 'classnames/bind';\nimport styles from './MenuUtilityMenuExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass MenuUtilityMenuExample extends React.Component {\n  constructor(props) {\n    super(props);\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.handleOnRequestClose = this.handleOnRequestClose.bind(this);\n    this.state = {\n      selectedKey: null,\n      requestCloseCount: 0,\n    };\n  }\n\n  handleOnChange(event, object) {\n    this.setState({ selectedKey: object.key });\n  }\n\n  handleOnRequestClose() {\n    this.setState(prevState => ({ requestCloseCount: prevState.requestCloseCount + 1 }));\n  }\n\n  render() {\n    const customComponent = <Image alt=\"Fallback Avatar\" src={FallbackAvatar} className={cx('avatar')} />;\n    return (\n      <div>\n        <div className={cx('content-wrapper')}>\n          <UtilityMenu\n            initialSelectedKey=\"menu\"\n            isHeightBounded\n            menuItems={MockConfig(customComponent)}\n            onChange={this.handleOnChange}\n            onRequestClose={this.handleOnRequestClose}\n            variant={UtilityUtils.VARIANTS.MENU}\n          />\n        </div>\n        <div>{`Trigger event for: ${this.state.selectedKey}`}</div>\n        <div>{`Request close count: ${this.state.requestCloseCount}`}</div>\n      </div>\n    );\n  }\n}\n\nexport default MenuUtilityMenuExample;\n\n")))}M.isMDXComponent=!0;var R=["components"],I={};function j(e){var t=e.components,n=(0,l.A)(e,R);return(0,o.mdx)("wrapper",(0,a.A)({},I,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .avatar {\n    height: 1.857rem;\n    width: 1.857rem;\n  }\n  \n  .content-wrapper {\n    height: 300px;\n    width: 300px;\n  }\n}\n\n")))}j.isMDXComponent=!0;var L=function(e){var t=e.title,n=e.description,a=e.isExpanded;return i.createElement(h.A,{title:t||"Menu Utility Menu Example",description:n,example:i.createElement(w.A,null),exampleCssSrc:i.createElement(j,null),exampleSrc:i.createElement(M,null),isExpanded:a})},P=["components"],K={},q="wrapper";function B(e){var t=e.components,n=(0,l.A)(e,P);return(0,o.mdx)(q,(0,a.A)({},K,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(r.E,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-application-utility"},"Terra Application Utility"),(0,o.mdx)("p",null,"The Utility is used to disclose a utility menu. There are two versions - a header version and menu version. These should be used with the corresponding ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application-header-layout")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"terra-application-menu-layout")," components."),(0,o.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Install with ",(0,o.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-utility"))))),(0,o.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,o.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,o.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,o.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,o.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,o.mdx)("h2",{id:"menu-items"},"Menu Items"),(0,o.mdx)("p",null,"The menu items are generated from an array of menu item objects, which can contain up to eight attributes: ",(0,o.mdx)("inlineCode",{parentName:"p"},"childKeys"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"content"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"contentLocation"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"isSelected"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"isSelectable"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"key"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"metaData"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"title"),"."),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"childKeys")," is an optional array of ",(0,o.mdx)("inlineCode",{parentName:"li"},"keys")," (strings). Enables a nested page to be rendered when this menu item is selected. For each menu item within the nested page, store it's ",(0,o.mdx)("inlineCode",{parentName:"li"},"key")," within this ",(0,o.mdx)("inlineCode",{parentName:"li"},"childKeys")," array."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"content")," is an optional object. Enables custom components to be rendered as ",(0,o.mdx)("em",{parentName:"li"},"body")," items. Avoid using ",(0,o.mdx)("inlineCode",{parentName:"li"},"content")," as a footer item - it will always render as a button."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"contentLocation")," is an optional string, one of ",(0,o.mdx)("inlineCode",{parentName:"li"},"UtilityUtils.LOCATIONS.BODY")," or ",(0,o.mdx)("inlineCode",{parentName:"li"},"UtilityUtils.LOCATIONS.FOOTER"),". Indicates if an item will render within the body or footer. Body items will render as list items, while footer items will render as buttons. Items will default to ",(0,o.mdx)("em",{parentName:"li"},"body")," if ",(0,o.mdx)("inlineCode",{parentName:"li"},"contentLocation")," is not provided."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"isReadOnly")," is an optional boolean. It removes interactivity and interactive styling from an item, and prevents menu closure when clicked directly."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"isSelected")," is an optional boolean. Enables a HOC to manage the selected states of each item."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"isSelectable")," is an optional boolean. Indicates if an item is selectable. A checkmark will toggle on item selection."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"key")," is ",(0,o.mdx)("strong",{parentName:"li"},"required"),". Must be a unique value to differentiate itself from other items. ",(0,o.mdx)("inlineCode",{parentName:"li"},"key")," is returned, along with ",(0,o.mdx)("inlineCode",{parentName:"li"},"metaData"),", within the onChange."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"metaData")," is an optional object. Use this to store other data for this menu item, such as its parent ",(0,o.mdx)("inlineCode",{parentName:"li"},"key")," or another function. ",(0,o.mdx)("inlineCode",{parentName:"li"},"metaData")," is returned, along with ",(0,o.mdx)("inlineCode",{parentName:"li"},"key"),", within the onChange."),(0,o.mdx)("li",{parentName:"ol"},(0,o.mdx)("strong",{parentName:"li"},"title")," is an optional string. Sets the text to render for this item. If this menu item contains ",(0,o.mdx)("inlineCode",{parentName:"li"},"childrenKeys"),", ",(0,o.mdx)("inlineCode",{parentName:"li"},"title")," will be used as the header text for the nested page.")),(0,o.mdx)("p",null,"Displayed below is the explicit structure of a menu item:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"PropTypes.shape({\n  /**\n   * Array containing the keys of each child item of this item.\n   */\n  childKeys: PropTypes.arrayOf(PropTypes.string),\n  /**\n   * The component associated with this item.\n   */\n  content: PropTypes.object,\n  /**\n   * The location to place the item. One of UtilityUtils.LOCATIONS.BODY, UtilityUtils.LOCATIONS.FOOTER.\n   */\n  contentLocation: PropTypes.oneOf([LOCATIONS.BODY, LOCATIONS.FOOTER]),\n  /**\n   * Whether the item is read-only.\n   */\n  isReadOnly: PropTypes.bool,\n  /**\n   * Boolean indicating if the item is selected.\n   */\n  isSelected: PropTypes.bool,\n  /**\n   * Boolean indicating if the item is selectable.\n   */\n  isSelectable: PropTypes.bool,\n  /**\n   * The unique key associated with this item.\n   */\n  key: PropTypes.string.isRequired,\n  /**\n   * Optional meta data to be returned along with the item key within the onChange.\n   */\n  metaData: PropTypes.object,\n  /**\n   * The text associated with this item.\n   */\n  title: PropTypes.string,\n});\n")),(0,o.mdx)("p",null,"For reference, checkout the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-application-utility/src/terra-dev-site/doc/common/MockConfig.js"},"sample menu item config")," used for the bottom ",(0,o.mdx)("inlineCode",{parentName:"p"},"Utility Menu")," example."),(0,o.mdx)("h2",{id:"component-features"},"Component Features"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support"),(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://babeljs.io/docs/usage/polyfill"},"babel-pollyfill")," is needed needed to support usage of the Map object in IE."))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(N,{title:"Header: Utility",mdxType:"ApplicationHeaderUtilityExample"}),(0,o.mdx)(U,{title:"Menu: Utility",mdxType:"ApplicationMenuUtilityExample"}),(0,o.mdx)(L,{title:"Utility Menu",mdxType:"MenuUtilityMenuExample"}),(0,o.mdx)("h2",{id:"application-utility-props"},"Application Utility Props"),(0,o.mdx)(u,{mdxType:"ApplicationHeaderUtilityPropsTable"}))}B.isMDXComponent=!0},92523:function(e,t,n){n.d(t,{E:function(){return i}});var a=n(96540),l=n(55713),i=function(e){var t=e.url;return a.createElement(l.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-utility",name:"terra-application-utility",version:"2.60.0",url:t})}},74087:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(60209);t.default=function(e){return[{key:"menu",title:"Menu",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,metaData:{otherInformation:"Other Information"},childKeys:["item-1","item-2","item-3","item-4","item-5","item-6","item-7","item-8"]},{key:"item-1",title:"Name",content:e,contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:["item-1.1"]},{key:"item-2",title:"Profile",isSelected:!1,isSelectable:!1,childKeys:["item-2.1","item-2.2"],id:"test-item-2"},{key:"item-3",title:"Notifications",contentLocation:a.UtilityUtils.LOCATIONS.FOOTER,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4",title:"Projects",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:["item-4.1","item-4.2","item-4.3"]},{key:"item-1.1",title:"John Doe",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,metaData:{otherInformation:"Other Information"},childKeys:[]},{key:"item-2.1",title:"Gender: Male",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-2.2",title:"Location: Germany",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4.1",title:"Project 1",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4.2",title:"Project 2",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-4.3",title:"Project 3",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:[]},{key:"item-5",title:"Skills",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!1,childKeys:["item-5.1","item-5.2"]},{key:"item-5.1",title:"Skill 1",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!0,childKeys:[]},{key:"item-5.2",title:"Skill 2",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!1,isSelectable:!0,childKeys:[]},{key:"item-6",title:"Logout",contentLocation:a.UtilityUtils.LOCATIONS.FOOTER,isSelected:!1,isSelectable:!0,childKeys:[]},{key:"item-7",title:"Drill-down capabilities provide the ability for the end-user to access different levels of information without creating ad hoc queries for each level of information. Instead the user is able to drill down to a detail level, or elevate to the summary level, through pull-down menus or mouse clicks.",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isSelected:!0,isSelectable:!1,childKeys:[],id:"test-item-7"},{key:"item-8",title:"Last logged in: yesterday",contentLocation:a.UtilityUtils.LOCATIONS.BODY,isReadOnly:!0,isSelected:!1,isSelectable:!1,childKeys:[],id:"test-item-8"}]}},63129:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(17383)),i=a(n(34579)),o=a(n(28452)),r=a(n(63072)),s=a(n(29511)),d=a(n(96540)),m=a(n(94480)),c=a(n(74087)),u=a(n(68692)),p=n(60209),f=a(n(67967)),y=a(n(99890));function x(e,t,n){return t=(0,r.default)(t),(0,o.default)(e,h()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var g=f.default.bind(y.default),v=function(e){function t(e){var n;return(0,l.default)(this,t),(n=x(this,t,[e])).onDiscloseUtility=n.onDiscloseUtility.bind(n),n.state={discloseCount:0},n}return(0,s.default)(t,e),(0,i.default)(t,[{key:"onDiscloseUtility",value:function(){this.setState((function(e){return{discloseCount:e.discloseCount+1}}))}},{key:"render",value:function(){var e=d.default.createElement(m.default,{alt:"Fallback Avatar",src:u.default});return d.default.createElement("div",{className:g("container")},d.default.createElement("div",{className:g("content-wrapper")},d.default.createElement(p.ApplicationHeaderUtility,{menuItems:(0,c.default)(e),onChange:function(){},onDisclose:this.onDiscloseUtility,initialSelectedKey:"menu",title:"John Doe",accessory:e,variant:p.UtilityUtils.VARIANTS.HEADER})),d.default.createElement("div",null,"Disclose count: ".concat(this.state.discloseCount)))}}])}(d.default.Component);t.A=v},85151:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(17383)),i=a(n(34579)),o=a(n(28452)),r=a(n(63072)),s=a(n(29511)),d=a(n(96540)),m=a(n(94480)),c=a(n(74087)),u=a(n(68692)),p=n(60209),f=a(n(67967)),y=a(n(59132));function x(e,t,n){return t=(0,r.default)(t),(0,o.default)(e,h()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var g=f.default.bind(y.default),v=function(e){function t(e){var n;return(0,l.default)(this,t),(n=x(this,t,[e])).onDiscloseUtility=n.onDiscloseUtility.bind(n),n.handleOnChange=n.handleOnChange.bind(n),n.state={discloseCount:0,selectedKey:null},n}return(0,s.default)(t,e),(0,i.default)(t,[{key:"handleOnChange",value:function(e,t){this.setState({selectedKey:t})}},{key:"onDiscloseUtility",value:function(){this.setState((function(e){return{discloseCount:e.discloseCount+1}}))}},{key:"render",value:function(){var e=d.default.createElement(m.default,{alt:"Fallback Avatar",src:u.default});return d.default.createElement("div",null,d.default.createElement("div",{className:g("content-wrapper")},d.default.createElement(p.ApplicationMenuUtility,{menuItems:(0,c.default)(e),onChange:this.handleOnChange,onDisclose:this.onDiscloseUtility,initialSelectedKey:"menu",title:"John Doe",accessory:e,variant:p.UtilityUtils.VARIANTS.MENU})),d.default.createElement("div",null,"Trigger event for: ".concat(this.state.selectedKey,".")),d.default.createElement("div",null,"Disclose count: ".concat(this.state.discloseCount,".")))}}])}(d.default.Component);t.A=v},7966:function(e,t,n){var a=n(24994);t.A=void 0;var l=a(n(17383)),i=a(n(34579)),o=a(n(28452)),r=a(n(63072)),s=a(n(29511)),d=a(n(96540)),m=a(n(94480)),c=a(n(74087)),u=a(n(68692)),p=n(60209),f=a(n(79426)),y=a(n(67967)),x=a(n(28811));function h(e,t,n){return t=(0,r.default)(t),(0,o.default)(e,g()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var v=y.default.bind(x.default),b=function(e){function t(e){var n;return(0,l.default)(this,t),(n=h(this,t,[e])).handleOnChange=n.handleOnChange.bind(n),n.handleOnRequestClose=n.handleOnRequestClose.bind(n),n.state={selectedKey:null,requestCloseCount:0},n}return(0,s.default)(t,e),(0,i.default)(t,[{key:"handleOnChange",value:function(e,t){this.setState({selectedKey:t.key})}},{key:"handleOnRequestClose",value:function(){this.setState((function(e){return{requestCloseCount:e.requestCloseCount+1}}))}},{key:"render",value:function(){var e=d.default.createElement(m.default,{alt:"Fallback Avatar",src:u.default,className:v("avatar")});return d.default.createElement("div",null,d.default.createElement("div",{className:v("content-wrapper")},d.default.createElement(f.default,{initialSelectedKey:"menu",isHeightBounded:!0,menuItems:(0,c.default)(e),onChange:this.handleOnChange,onRequestClose:this.handleOnRequestClose,variant:p.UtilityUtils.VARIANTS.MENU})),d.default.createElement("div",null,"Trigger event for: ".concat(this.state.selectedKey)),d.default.createElement("div",null,"Request close count: ".concat(this.state.requestCloseCount)))}}])}(d.default.Component);t.A=b},68692:function(e,t,n){n.r(t),t.default=n.p+"f16872401d9765e4d153141156f6f5f2.svg"},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},99890:function(e,t,n){n.r(t),t.default={container:"ApplicationHeaderUtilityExample-module__container___GkMGI","content-wrapper":"ApplicationHeaderUtilityExample-module__content-wrapper___mmh03"}},59132:function(e,t,n){n.r(t),t.default={"content-wrapper":"ApplicationMenuUtilityExample-module__content-wrapper___gD528"}},28811:function(e,t,n){n.r(t),t.default={avatar:"MenuUtilityMenuExample-module__avatar___lfaZq","content-wrapper":"MenuUtilityMenuExample-module__content-wrapper___HV8sN"}},39496:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var l=d(n(96540)),i=d(n(5556)),o=d(n(67967)),r=d(n(92420)),s=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function d(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){var l;return l=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!=a(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==a(l)?l:l+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var y=o.default.bind(r.default),x={fitStart:i.default.element,fill:i.default.element.isRequired,fitEnd:i.default.element,align:i.default.oneOf(["center","bottom","stretch"]),alignFitStart:i.default.oneOf(["center","bottom","stretch"]),alignFitEnd:i.default.oneOf(["center","bottom","stretch"]),alignFill:i.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:i.default.object,fillAttributes:i.default.object,fitEndAttributes:i.default.object},h=function(e){var t=e.fitStart,n=e.fill,a=e.fitEnd,i=e.align,o=e.alignFitStart,r=e.alignFill,d=e.alignFitEnd,c=e.fitStartAttributes,p=e.fillAttributes,x=e.fitEndAttributes,h=f(e,s),g=u({},c),v=u({},p),b=u({},x);return l.default.createElement("span",m({},h,{className:y("arrange",h.className)}),l.default.createElement("span",m({},g,{className:y("fit",i||o,g.className,"fit-block")}),t),l.default.createElement("span",m({},v,{className:y("fill",i||r,v.className,"fill-block")}),n),l.default.createElement("span",m({},b,{className:y("fit",i||d,b.className)}),a))};h.propTypes=x;t.default=h},40495:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(96540)),l=i(n(25365));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M24 37.7 0 14.2l3.8-3.9L24 30l20.2-19.7 3.8 3.9z"}))};o.displayName="IconChevronDown",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(96540)),l=i(n(25365));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(e){var t=Object.assign({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o}}]);