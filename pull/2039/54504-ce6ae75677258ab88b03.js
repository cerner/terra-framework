"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[54504],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var i=a(n(96540)),l=a(n(5556)),r=a(n(67967)),d=a(n(25642)),o=r.default.bind(d.default),m={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},p=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,r=i.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},i.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),i.default.createElement("span",{className:o("badge-version")},"v".concat(l))),d=t?i.default.createElement("a",{className:o("badge"),href:t},i.default.createElement("span",{className:o("badge-name")},"github"),i.default.createElement("span",{className:o("badge-version")},"source")):void 0;return i.default.createElement("div",{className:o("badge-container")},r,d)};p.propTypes=m;t.A=p},54504:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var a=n(58168),i=n(53986),l=(n(96540),n(36665)),r=n(5355),d=["components"],o={},m="wrapper";function p(e){var t=e.components,n=(0,i.A)(e,d);return(0,l.mdx)(m,(0,a.A)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(r.E,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-application-layout"},"Terra Application Layout"),(0,l.mdx)("p",null,"In addition to the ApplicationLayout component, the package exports an ",(0,l.mdx)("inlineCode",{parentName:"p"},"Utils")," object that contains a variety of helper functions and prop type declarations. Included are:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"propTypes")," - An object containing prop type definitions for the configuration objects used by the ApplicationLayout."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"helpers")," - An object containing helper functions to aid in the creation of ApplicationLayout content."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"utilityHelpers")," - An object containing helper functions specifically for the creation of Utility menu configuration.")),(0,l.mdx)("h2",{id:"proptypes"},"propTypes"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"layoutConifgPropType")," - Shape for the ",(0,l.mdx)("inlineCode",{parentName:"li"},"layoutConfig")," prop provided to components within the ApplicationLayout."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"nameConfigPropType")," - Shape for ApplicationLayout's ",(0,l.mdx)("inlineCode",{parentName:"li"},"nameConfig")," prop."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"navigationItemsPropType")," - Shape for ApplicationLayout's ",(0,l.mdx)("inlineCode",{parentName:"li"},"navigationItems")," prop."),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"utilityConfigPropType")," - Shape for ApplicationLayout's ",(0,l.mdx)("inlineCode",{parentName:"li"},"utilityConfig")," prop.")),(0,l.mdx)("h2",{id:"helpers"},"helpers"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"isSizeCompact")," - A function that determines whether or not the given size is considered ",(0,l.mdx)("inlineCode",{parentName:"li"},"compact")," or not. This can be used to synchronize component rendering with responsive changes to the ApplicationLayout.")),(0,l.mdx)("h3",{id:"utilityhelpers"},"utilityHelpers"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"getDefaultUtilityItems"))),(0,l.mdx)("p",null,"A function that generates an array containing the Terra-standard set of utility menu items. This array and its contents match the ",(0,l.mdx)("inlineCode",{parentName:"p"},"menuItems")," prop expected by ",(0,l.mdx)("inlineCode",{parentName:"p"},"terra-utility")," components and can be provided to them directly."),(0,l.mdx)("p",null,"An ",(0,l.mdx)("inlineCode",{parentName:"p"},"intl")," parameter is required to generate the items, as the translated titles for the default configuration must be retrieved from it. Also required is an object containing user information, as the default menu configuration is user-centric. Finally, additional menu configuration items can be provided to be merged with the default items."),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"defaultKeys")," - The set of menu item keys used by the default utility configuration. Values from this object should be used inside custom item configurations as ",(0,l.mdx)("inlineCode",{parentName:"li"},"parentKey")," values to appropriately locate the custom items. When selected, selectable items will trigger the ",(0,l.mdx)("inlineCode",{parentName:"li"},"utilityConfig"),"'s ",(0,l.mdx)("inlineCode",{parentName:"li"},"onChange")," function with their associated item key.")),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Keys"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"MENU")),(0,l.mdx)("td",{parentName:"tr",align:null},"Menu page with ",(0,l.mdx)("inlineCode",{parentName:"td"},"USER_INFORMATION"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"SETTINGS"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"HELP"),", and ",(0,l.mdx)("inlineCode",{parentName:"td"},"LOG_OUT")," as child items.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"USER_INFORMATION")),(0,l.mdx)("td",{parentName:"tr",align:null},"Menu page with a ",(0,l.mdx)("inlineCode",{parentName:"td"},"CHANGE_PHOTO")," child item.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"CHANGE_PHOTO")),(0,l.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"SETTINGS")),(0,l.mdx)("td",{parentName:"tr",align:null},"Menu page with ",(0,l.mdx)("inlineCode",{parentName:"td"},"APPEARANCE")," and ",(0,l.mdx)("inlineCode",{parentName:"td"},"SECURITY")," child items.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"APPEARANCE")),(0,l.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"SECURITY")),(0,l.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"HELP")),(0,l.mdx)("td",{parentName:"tr",align:null},"Menu page with ",(0,l.mdx)("inlineCode",{parentName:"td"},"GETTING_STARTED"),", ",(0,l.mdx)("inlineCode",{parentName:"td"},"ABOUT"),", and ",(0,l.mdx)("inlineCode",{parentName:"td"},"TERMS_OF_USE")," child items.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"GETTING_STARTED")),(0,l.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"ABOUT")),(0,l.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"TERMS_OF_USE")),(0,l.mdx)("td",{parentName:"tr",align:null},"Selectable item.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"LOG_OUT")),(0,l.mdx)("td",{parentName:"tr",align:null},"Selectable item.")))),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { Utils } from 'terra-application-layout';\nimport Avatar from 'terra-avatar';\n\nconst intl = {}; // Intl should be retrieved from context\n\nconst userData = {\n  name: 'Person, Joe',\n  detail: 'Example Person',\n  photo: <Avatar alt=\"Doe, John\"/>,\n};\n\nconst customUtilityItems = [{\n  key: 'additional-1',\n  title: 'Drill-in Item',\n  childKeys: [\n    'additional-sub-1',\n    'additional-sub-2',\n  ],\n  parentKey: Utils.utilityHelpers.defaultKeys.MENU,\n}, {\n  key: 'additional-sub-1',\n  title: 'Addtional Item 1 - Sub 1',\n  parentKey: 'additional-1',\n}, {\n  key: 'additional-sub-2',\n  title: 'Addtional Item 1 - Sub 2',\n  parentKey: 'additional-1',\n}, {\n  key: 'additional-2',\n  title: 'Custom Checkbox Item',\n  isSelectable: true,\n  parentKey: Utils.utilityHelpers.defaultKeys.MENU,\n}, {\n  key: 'additional-3',\n  contentLocation: Utils.utilityHelpers.locations.FOOTER,\n  title: 'Custom Footer',\n  parentKey: Utils.utilityHelpers.defaultKeys.MENU,\n}];\n\nconst menuItems = Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems);\n\nconst utilityConfig = {\n  title: 'Doe, John',\n  accessory: <Avatar alt=\"Doe, John\" />,\n  menuItems: menuItems,\n  initialSelectedKey: 'menu',\n  onChange: (event, itemData, disclose) => {\n    /**\n     * This function will be called when items are selected within the utility menu.\n     * The disclose parameter is provided for convenience, but any presentation method\n     * could be used to handle that menu content selection.\n     */\n  },\n  onBlur: (event, layoutConfig) => {\n    /**\n     * This function will be called when navigation menu get out of focus. `layoutConfig` parameter is\n     * provided to enchance interaction with application-layout\n     */\n  },\n};\n")))}p.isMDXComponent=!0},5355:function(e,t,n){n.d(t,{E:function(){return l}});var a=n(96540),i=n(55713),l=function(e){var t=e.url;return a.createElement(i.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-layout",name:"terra-application-layout",version:"5.80.0",url:t})}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},58168:function(e,t,n){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}n.d(t,{A:function(){return a}})},53986:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}n.d(t,{A:function(){return a}})}}]);