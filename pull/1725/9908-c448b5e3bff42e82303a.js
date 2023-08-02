"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[9908],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var i=a(n(67294)),r=a(n(45697)),l=a(n(47166)),d=a(n(17422)),o=l.default.bind(d.default),m={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},p=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,l=i.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},i.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),i.default.createElement("span",{className:o("badge-version")},"v".concat(r))),d=t?i.default.createElement("a",{className:o("badge"),href:t},i.default.createElement("span",{className:o("badge-name")},"github"),i.default.createElement("span",{className:o("badge-version")},"source")):void 0;return i.default.createElement("div",{className:o("badge-container")},l,d)};p.propTypes=m;var s=p;t.Z=s},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(67294)),i=m(n(45697)),r=m(n(47166)),l=m(n(47341)),d=m(n(66983)),o=["children"];function m(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.default.bind(d.default),c=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},N={children:i.default.string},g=function(e){var t=e.children,n=s(e,o),i=a.default.useContext(l.default),d=(0,r.default)(u(["button",i.className]),n.className);return a.default.createElement("button",p({},n,{type:"button",className:d,onBlur:c,onMouseDown:x,"data-focus-styles-enabled":!0}),t)};g.propTypes=N;var h=g;t.default=h},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),i=o(n(45697)),r=o(n(47166)),l=o(n(47341)),d=o(n(30866));function o(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(d.default),p={ariaLevel:i.default.oneOf(["2","3","4","5","6"]),children:i.default.node,variant:i.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,i=e.children,r=a.default.useContext(l.default);return a.default.createElement("div",{className:m("notice",n,r.className)},a.default.createElement("div",{className:m("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:m("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:m("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:m("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:m("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:m("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(i,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=p,s.defaultProps={ariaLevel:"2",variant:"important"};var u=s;t.default=u},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(67294)),i=p(n(45697)),r=p(n(94184)),l=p(n(47166)),d=p(n(47341)),o=p(n(42620)),m=["title"];function p(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=l.default.bind(o.default),x={title:i.default.string},N=function(e){var t=e.title,n=u(e,m),i=a.default.useContext(d.default),l=(0,r.default)(c(["placeholder",i.className]),n.className),o=c(["inner"]);return a.default.createElement("div",s({},n,{className:l}),a.default.createElement("div",{className:o},a.default.createElement("p",{className:c("title")},t)))};N.propTypes=x,N.defaultProps={title:""};var g=N;t.default=g},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return i.default}});var a=l(n(59278)),i=l(n(47306)),r=l(n(40996));function l(e){return e&&e.__esModule?e:{default:e}}},9908:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(87462),i=n(44925),r=(n(67294),n(81254)),l=n(41225),d=n(34261),o=["components"],m={},p="wrapper";function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.mdx)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-application-navigation"},"Terra Application Navigation"),(0,r.mdx)(d.Notice,{variant:"maintenance",mdxType:"Notice"},(0,r.mdx)("p",null,"This component has been moved to ",(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/application/terra-application/components/application-navigation"},"terra-application")," and should be imported from that package. While this is the final major version of this component we will release, this component will continue to receive minor updates until terra adopts react 17."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"- import ApplicationNavigation from 'terra-application-navigation';\n+ import ApplicationNavigation from 'terra-application/lib/application-navigation';\n"))),(0,r.mdx)("p",null,"The Terra Application Navigation is a responsive, themeable layout for building applications."),(0,r.mdx)("p",null,"The Terra Application Navigation provides:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A themeable, responsive application header, capable of rendering application-specific branding, tabular navigation, and user-centric utility controls"),(0,r.mdx)("li",{parentName:"ul"},"Responsive menu and content areas")),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-navigation"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.4.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"terra-application"),(0,r.mdx)("td",{parentName:"tr",align:null},"^1.0.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support"))),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ApplicationNavigation requires the presence of a ",(0,r.mdx)("inlineCode",{parentName:"li"},"Application")," component (provided by ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-application"),") in its parent hierarchy. This provides essential utilities around i18n, context, and breakpoints.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Application from 'terra-application';\nimport ApplicationNavigation from 'terra-application-navigation';\n\nconst MyApp = () => (\n  <Application locale=\"en-US\">\n    <ApplicationNavigation\n      titleConfig={titleConfig}\n      utilityItems={utilityItems}\n      navigationItems={navigationItems}\n      extensionItems={extensionItems}\n      activeNavigationItemKey={activeKey}\n    >\n      {myContent}\n    </ApplicationNavigation>\n  </Application>\n);\n")),(0,r.mdx)("h2",{id:"props"},"Props"),(0,r.mdx)("h3",{id:"extensionitems"},"extensionItems"),(0,r.mdx)("h4",{id:"is-required-false"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensionItems")," prop allows consumers to render icons with an assocaited selection callback within the ApplicationNavigation's extensions region. The expectations for ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensionItems")," is that they are to provide click actions and disclosures for the application level context. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensionItems")," will rollup in various counts depending on the current breakpoint. If ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensionItems")," are passed as props the associated ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectExtensionItem")," function callback should be passed as well."),(0,r.mdx)("p",null,"The value provided for ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensionItems")," should be an array of objects with the following API:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"key")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"A key rendered to be used as a unique react key as well as returned with the onSelectExtensionItem.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"icon")),(0,r.mdx)("td",{parentName:"tr",align:null},"Element"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"A React element representing the themable icon for the extension.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"text")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"The text to either be set as an aria-label or display text.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"metaData")),(0,r.mdx)("td",{parentName:"tr",align:null},"Object"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"An object containing whatever additional identifying information to be returned with the onSelectExtensionItem.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const extensionItems = [{\n  key: 'extension_1',\n  icon: <Icon1 >,\n  text: 'Extension 1',\n  metaData: { myValue: value1 }\n}, {\n  key: 'extension_2',\n  icon: <Icon2 >,\n  text: 'Extension 2',\n  metaData: { myValue: value2 }\n}];\n")),(0,r.mdx)("h3",{id:"onselectextensionitem"},"onSelectExtensionItem"),(0,r.mdx)("h4",{id:"is-required-false-1"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectExtensionItem")," prop allows consumers to retrieve the information related to the extension that was clicked. The function callback will return the information in the format of ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectExtensionItem(key, metaData)"),"."),(0,r.mdx)("h3",{id:"navigationitems"},"navigationItems"),(0,r.mdx)("h4",{id:"is-required-false-2"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"navigationItems")," prop allows consumers to render high-level, primary navigation controls directly within the ApplicationNavigation. The expectation of ",(0,r.mdx)("inlineCode",{parentName:"p"},"navigationItems")," is that items will not be added/removed, as this would be detrimental to the user experience. Once selected, a navigational item is no longer actionable and cannot be reselected. Navigation items at the application level should have equivalent context levels. Navigation from one tab to another should not be influenced by content, as each navigational item should be a sandboxed concept."),(0,r.mdx)("p",null,"The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint. If ",(0,r.mdx)("inlineCode",{parentName:"p"},"navigationItems")," are passed as props the associated ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectNavigationItem")," function callback should be passed as well."),(0,r.mdx)("p",null,"The value provided for ",(0,r.mdx)("inlineCode",{parentName:"p"},"navigationItems")," should be an array of objects with the following API:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"key")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"A key rendered to be used as a unique react key as well as returned with the onSelectNavigationItem.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"text")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"The text to either be set as an aria-label or display text.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"metaData")),(0,r.mdx)("td",{parentName:"tr",align:null},"Object"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"An object containing whatever additional identifying information to be returned with the onSelectNavigationItem.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const navigationItems = [{\n  key: 'page_1',\n  text: 'Page 1',\n  metaData: { myValue: value1 }\n}, {\n  key: 'page_2',\n  text: 'Page 2',\n  metaData: { myValue: value2 }\n}];\n")),(0,r.mdx)("h3",{id:"onselectnavigationitem"},"onSelectNavigationItem"),(0,r.mdx)("h4",{id:"is-required-false-3"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectNavigationItem")," prop allows consumers to retrieve the information related to the navigation item that was clicked. The function callback will return the information in the format of ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectNavigationItem(key, metaData)"),"."),(0,r.mdx)("h3",{id:"activenavigationitemkey"},"activeNavigationItemKey"),(0,r.mdx)("h4",{id:"is-required-false-4"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"activeNavigationItemKey")," prop allows consumers to set the currently selected navigation item. Accordingly, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"activeNavigationItemKey")," value must have an associated entry within the ",(0,r.mdx)("inlineCode",{parentName:"p"},"navigationItems")," specification."),(0,r.mdx)("h3",{id:"utilityitems"},"utilityItems"),(0,r.mdx)("h4",{id:"is-required-false-5"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"utilityItems")," prop allows consuming applications to present an application-level custom utility items directly from the ApplicationNavigation. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint. If ",(0,r.mdx)("inlineCode",{parentName:"p"},"utilityItems")," are passed as props the associated ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectUtilityItem")," function callback should be passed as well."),(0,r.mdx)("p",null,"The value provided for ",(0,r.mdx)("inlineCode",{parentName:"p"},"utilityItems")," should be an array of objects with the following API:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"key")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"A key rendered to be used as a unique react key as well as returned with the onSelectUtilityItem.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"icon")),(0,r.mdx)("td",{parentName:"tr",align:null},"Element"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"A React element representing the themable icon for the utility item.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"text")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"The text to either be set as an aria-label or display text.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"metaData")),(0,r.mdx)("td",{parentName:"tr",align:null},"Object"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"An object containing whatever additional identifying information to be returned with the onSelectUtilityItem.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const utilityItems = [{\n  key: 'utility_1',\n  icon: <Icon1 >,\n  text: 'Utility 1',\n  metaData: { myValue: value1 }\n}, {\n  key: 'utility_2',\n  icon: <Icon2 >,\n  text: 'Utility 2',\n  metaData: { myValue: value2 }\n}];\n")),(0,r.mdx)("h3",{id:"onselectutilityitem"},"onSelectUtilityItem"),(0,r.mdx)("h4",{id:"is-required-false-6"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectUtilityItem")," prop allows consumers to retrieve the information related to the navigation item that was clicked. The function callback will return the information in the format of ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectUtilityItem(key, metaData)"),"."),(0,r.mdx)("h3",{id:"onselectsettings"},"onSelectSettings"),(0,r.mdx)("h4",{id:"is-required-false-7"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectSettings")," prop allows consumers have first class support for a settings utility item. If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectSettings")," prop is not set a settings utility item will not be displayed."),(0,r.mdx)("h3",{id:"onselecthelp"},"onSelectHelp"),(0,r.mdx)("h4",{id:"is-required-false-8"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectHelp")," prop allows consumers have first class support for a help utility item. If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectHelp")," prop is not set a settings utility item will not be displayed."),(0,r.mdx)("h3",{id:"onselectlogout"},"onSelectLogout"),(0,r.mdx)("h4",{id:"is-required-false-9"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectLogout")," prop allows consumers have first class support for a logout utility button. If the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelectLogout")," prop is not set a settings utility item will not be displayed."),(0,r.mdx)("h3",{id:"titleconfig"},"titleConfig"),(0,r.mdx)("h4",{id:"is-required-false-10"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"titleConfig")," prop allows consuming applications to add their own branding to the ApplicationNavigation. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"title")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"Title to be displayed or set as the aria-label if a title element is passed.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"headline")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"Super text to be display above the main title text.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"subline")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"Sub text to be display below the main title text.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"element")),(0,r.mdx)("td",{parentName:"tr",align:null},"Element"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"Element to use in place of title text. Typically a logo for branding.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"hideTitleWithinDrawerMenu")),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"Whether or not the title should be hidden when at the compact breakpoint.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const myTitleConfig = {\n  title: 'My Application',\n  subline: 'My Subline',\n  hideTitleWithinDrawerMenu: false,\n}\n")),(0,r.mdx)("h3",{id:"userconfig"},"userConfig"),(0,r.mdx)("h4",{id:"is-required-false-11"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"userConfig")," prop allows consumers to set a user associated to the current application context. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint."),(0,r.mdx)(d.Notice,{ariaLevel:"5",mdxType:"Notice"},(0,r.mdx)("p",null,"It is recommended that ",(0,r.mdx)("inlineCode",{parentName:"p"},"initials")," prop be provided for all cases if ",(0,r.mdx)("inlineCode",{parentName:"p"},"userConfig")," is used. It will be updated to ",(0,r.mdx)("strong",{parentName:"p"},"Required")," with the next major version of application navigation, provided via terra-application v2."),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Note: If both ",(0,r.mdx)("inlineCode",{parentName:"em"},"initials")," and ",(0,r.mdx)("inlineCode",{parentName:"em"},"imageSrc")," are not provided, the avatar will fall back to the generic user avatar. If ",(0,r.mdx)("inlineCode",{parentName:"em"},"initials")," are not provided, but ",(0,r.mdx)("inlineCode",{parentName:"em"},"imageSrc")," is provided and fails, the avatar will fall back to use first two letters of the provided ",(0,r.mdx)("inlineCode",{parentName:"em"},"name")," (not preferred) in place of showing the ",(0,r.mdx)("inlineCode",{parentName:"em"},"initials")," (preferred)."))),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"name")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"User name to be displayed for the user button and within utilities.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"detail")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"Additional user details string.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"initials")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"User initials to be displayed within the avatar if no image is present.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"imageSrc")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"Src to provide to the avatar component.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const myUserConfig = {\n  name: 'Name, User',\n  detail: 'Is a User',\n  initials: 'UN',\n  imageSrc: 'imageSrc',\n}\n")),(0,r.mdx)("h3",{id:"id"},"id"),(0,r.mdx)("h3",{id:"is-required-false-12"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h3"},"false")),(0,r.mdx)("p",null,"If the 'id' prop is defined it allows consumers to generate unique ids for all of the sub navigation, extension, and utility items"),(0,r.mdx)("p",null,"The ids will follow this format ","[id]","-","[item type]","-","[item key]"),(0,r.mdx)("p",null,"For example, if the 'id' prop is 'main-navigation' and has an extension item with the key of 'meds' the generated id for the extension item will be 'main-navigation-ExtensionItem-meds'"),(0,r.mdx)("h3",{id:"hero"},"hero"),(0,r.mdx)("h4",{id:"is-required-false-13"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"hero")," prop allows consumers to add a hero element within the utility popup and/or navigation drawer. The ApplicationNavigation will render this content in different ways based on the active responsive breakpoint."),(0,r.mdx)("h3",{id:"notifications"},"notifications"),(0,r.mdx)("h4",{id:"is-required-false-14"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"notifications")," prop allows consumers to display notification counts associated to navigationItems and extensionsItems. The props is made up of key/value pairs; the key is the associated entry within the ",(0,r.mdx)("inlineCode",{parentName:"p"},"navigationItems")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensionItems")," specification, and a numerical value. Depending on locations within the navigational structure and breakpoint the number of digits displayed may be limited."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const myNotifications = {\n  key1: 3,\n  extension2: 10,\n}\n")),(0,r.mdx)("h3",{id:"ondrawermenustatechange"},"onDrawerMenuStateChange"),(0,r.mdx)("h4",{id:"is-required-false-15"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"onDrawerMenuStateChange")," callback allows the consumer to know state changes in Drawer Menu."),(0,r.mdx)("h2",{id:"responsive-design"},"Responsive Design"),(0,r.mdx)("p",null,"The ApplicationNavigation has two rendering modes: ",(0,r.mdx)("inlineCode",{parentName:"p"},"standard")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"compact"),"."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"standard")," rendering occurs at ",(0,r.mdx)("inlineCode",{parentName:"li"},"large"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"huge"),", and ",(0,r.mdx)("inlineCode",{parentName:"li"},"enormous")," breakpoints."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"compact")," rendering occurs at ",(0,r.mdx)("inlineCode",{parentName:"li"},"tiny"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"small"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"medium")," breakpoints.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Prop"),(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"th"},"standard")," Rendering"),(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"th"},"compact")," Rendering"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"userConfig")),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationNavigation's header."),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationNavigation's navigation drawer.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"titleConfig")),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationNavigation's header."),(0,r.mdx)("td",{parentName:"tr",align:null},"Same as ",(0,r.mdx)("inlineCode",{parentName:"td"},"standard"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"hero")),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationNavigation's utility popup (as provided by ",(0,r.mdx)("inlineCode",{parentName:"td"},"terra-popup"),")."),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationNavigation's navigation drawer.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"utilityItems")),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationNavigation's utility popup (as provided by ",(0,r.mdx)("inlineCode",{parentName:"td"},"terra-popup"),")."),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationNavigation's navigation drawer.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"navigationItems")),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within the ApplicationNavigation's header as tabs."),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationNavigation's navigation drawer.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"extensionItems")),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationNavigation's header."),(0,r.mdx)("td",{parentName:"tr",align:null},"Same as ",(0,r.mdx)("inlineCode",{parentName:"td"},"standard"),".")))))}s.isMDXComponent=!0},41225:function(e,t,n){n.d(t,{C:function(){return r}});var a=n(67294),i=n(22863),r=function(e){var t=e.url;return a.createElement(i.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-navigation",name:"terra-application-navigation",version:"1.70.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},87462:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{Z:function(){return a}})},44925:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{Z:function(){return a}})}}]);