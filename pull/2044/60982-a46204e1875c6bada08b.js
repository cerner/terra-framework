"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[60982],{55713:function(e,n,t){var a=t(24994);n.A=void 0;var i=a(t(96540)),r=a(t(5556)),o=a(t(67967)),l=a(t(25642)),d=o.default.bind(l.default),m={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},p=function(e){var n=e.src,t=e.name,a=e.url,r=e.version,o=i.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(r)},i.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),i.default.createElement("span",{className:d("badge-version")},"v".concat(r))),l=n?i.default.createElement("a",{className:d("badge"),href:n},i.default.createElement("span",{className:d("badge-name")},"github"),i.default.createElement("span",{className:d("badge-version")},"source")):void 0;return i.default.createElement("div",{className:d("badge-container")},o,l)};p.propTypes=m;n.A=p},60982:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(58168),i=t(53986),r=(t(96540),t(36665)),o=t(5355),l=["components"],d={},m="wrapper";function p(e){var n=e.components,t=(0,i.A)(e,l);return(0,r.mdx)(m,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(o.E,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-application-layout"},"Terra Application Layout"),(0,r.mdx)("p",null,"The Terra Application Layout is a responsive, themeable layout for building applications."),(0,r.mdx)("p",null,"The Terra Application Layout provides:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"A themeable, responsive application header, capable of rendering application-specific branding (provided by ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-application-name"),"), tabular navigation (provided by ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-application-links"),"), and user-centric utility controls (provided by ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-utility"),")"),(0,r.mdx)("li",{parentName:"ul"},"Responsive menu and content areas (provided by ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-layout"),")"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"react-router"),"-based navigation and configuration (provided by ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-navigation-layout"),")")),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-application-layout"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"terra-disclosure-manager"),(0,r.mdx)("td",{parentName:"tr",align:null},"^4.9.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support"))),(0,r.mdx)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Like all Terra components, the ApplicationLayout requires the presence of a ",(0,r.mdx)("inlineCode",{parentName:"li"},"Base")," component (provided by ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-base"),") in its parent hierarchy."),(0,r.mdx)("li",{parentName:"ul"},"Additionally, the ApplicationLayout requires the presence of any ",(0,r.mdx)("inlineCode",{parentName:"li"},"Router")," component (provided by ",(0,r.mdx)("inlineCode",{parentName:"li"},"react-router-dom"),") in its parent hierarchy.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { HashRouter } from 'react-router-dom'; // BrowserRouter (with additional server configuration) or MemoryRouter could also be used\nimport Base from 'terra-base';\nimport ApplicationLayout from 'terra-application-layout';\n\n")),(0,r.mdx)("h2",{id:"props"},"Props"),(0,r.mdx)("h3",{id:"extensions"},"extensions"),(0,r.mdx)("h4",{id:"is-required-false"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensions")," prop allows consumers to render an element within the ApplicationLayout's extensions region. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensions")," content will be rendered in various ways depending on the current breakpoint. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensions")," element will receive ",(0,r.mdx)("inlineCode",{parentName:"p"},"app")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"layoutConfig")," props from the ApplicationLayout, allowing it to interact with and respond to changes within the ApplicationLayout."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ApplicationLayout, { Utils } from 'terra-application-layout';\n\nconst MyExtensions = ({ app, layoutConfig }) => {\n  if (Utils.helpers.isSizeCompact(layoutConfig.size)) {\n    return (\n      <div>Extensions for ApplicationLayout menu!</div>\n    );\n  } else {\n    return (\n      <div>Extensions for ApplicationLayout header!</div>\n    );\n  }\n};\n")),(0,r.mdx)("h3",{id:"indexpath"},"indexPath"),(0,r.mdx)("h4",{id:"is-required-true"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"true")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"indexPath")," prop allows consumers to set the default path of the ApplicationLayout. The ApplicationLayout will redirect to this path should users of the consuming application attempt to route to a component not detailed in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"routingConfig")," prop. Accordingly, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"indexPath")," value must have an associated entry within the ",(0,r.mdx)("inlineCode",{parentName:"p"},"routingConfig")," specification."),(0,r.mdx)("h3",{id:"nameconfig"},"nameConfig"),(0,r.mdx)("h4",{id:"is-required-false-1"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"nameConfig")," prop allows consuming applications to add their own branding to the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"accessory")),(0,r.mdx)("td",{parentName:"tr",align:null},"Element"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"A React element that will be presented beside the title. This is typically some sort of icon or visual branding.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"title")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"The title of the application. This text will be styled by the ApplicationLayout.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const myNameConfig = {\n  accessory: <MyApplicationLogo />,\n  title: 'My Application',\n}\n")),(0,r.mdx)("h3",{id:"navigationitems"},"navigationItems"),(0,r.mdx)("h4",{id:"is-required-false-2"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"navigationItems")," prop allows consumers to render high-level, primary navigation controls directly within the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint. If ",(0,r.mdx)("inlineCode",{parentName:"p"},"navigationItems")," are omitted, no primary navigation controls will be rendered."),(0,r.mdx)("p",null,"Each navigation item provided must be associated to a path that is present within the ",(0,r.mdx)("inlineCode",{parentName:"p"},"routingConfig")," specification. The navigation item, as rendered by the ApplicationLayout, will route to that path upon selection."),(0,r.mdx)("p",null,"The value provided for ",(0,r.mdx)("inlineCode",{parentName:"p"},"navigationItems")," should be an array of objects with the following API:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"text")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"A string rendered within the navigation item control.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"path")),(0,r.mdx)("td",{parentName:"tr",align:null},"Element"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"A string path to route to upon navigation item selection. This path should be present within the ",(0,r.mdx)("inlineCode",{parentName:"td"},"routingConfig")," as well.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const navigationItems = [{\n  path: '/page_1',\n  text: 'Page 1',\n}, {\n  path: '/page_2',\n  text: 'Page 2',\n}];\n")),(0,r.mdx)("h3",{id:"routingconfig"},"routingConfig"),(0,r.mdx)("h4",{id:"is-required-true-1"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"true")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"routingConfig")," prop allows consuming applications to render components within the ApplicationLayout's ",(0,r.mdx)("inlineCode",{parentName:"p"},"content")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"menu")," regions based upon the router location."),(0,r.mdx)("p",null,"The ApplicationLayout directly implements the ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavigationLayout")," from ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-navigation-layout"),". However, while the ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavigationLayout")," allows for the customization of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"header")," region of the layout, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ApplicationLayout")," does not. Any ",(0,r.mdx)("inlineCode",{parentName:"p"},"header")," entries provided with the ",(0,r.mdx)("inlineCode",{parentName:"p"},"routingConfig")," prop will be ignored. Please review the ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavigationLayout")," documentation for more information regarding its usage."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note: Usage of the path ",(0,r.mdx)("inlineCode",{parentName:"p"},"'/'")," is restricted for ",(0,r.mdx)("inlineCode",{parentName:"p"},"menu")," components. The ApplicationLayout will dynamically inject configuration for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"'/'")," path when necessary to properly render navigationItems at ",(0,r.mdx)("inlineCode",{parentName:"p"},"compact")," breakpoints.")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"const routingConfig = {\n  /**\n   * Components defined under `content` will render within the ApplicationLayout's body.\n   */\n  content: {\n    /**\n     * Each entry must be keyed; typically, this key matches the path for the component.\n     */\n    '/page_1' : {\n      /**\n       * The `path` value will be validated against the router location with each location change. When the location\n       * matches this path, the component specified by the sibling `component` value will be rendered. If more than\n       * one component matches the current location, only the component with the closest match will be rendered.\n       */\n      path: '/page_1',\n      /**\n       * The `component` value specifies what component will be rendered. The value is an Object with support for the\n       * following keys: default, tiny, small, medium, large, and huge. These keys correspond to the responsive breakpoint\n       * of the ApplicationLayout. When the ApplicationLayout is small, the component under the small key will be rendered.\n       * When the application is large, the component under the large key will be rendered, and so on.\n       *\n       * The default key is different in that its component will render for all breakpoints unless that specific breakpoint is\n       * also defined. For example, if a component is defined for default and small, and the current responsive breakpoint is small,\n       * then the small component will be rendered. However, if the responsive breakpoint were to be huge, then the default component\n       * would be rendered (rather than no component at all).\n       */\n      component: {\n        default: {\n          /**\n           * The component specification for a given breakpoint must include a componentClass value. This is a React component\n           * function or class. It should not be an instantiated React element. For example, given a component named Page1Content,\n           * the componentClass value should be Page1Content, not `<Page1Content />`.\n           */\n          componentClass: Page1Content,\n          /**\n           * Props can also be defined for the component. These will be applied when the React element is created by the\n           * ApplicationLayout. If no props are desired, the `props` key can be omitted.\n           */\n          props: {\n            propFromConfig: 'Value from config',\n          }\n        },\n        small: {\n          /**\n           * The same component can be defined for multiple breakpoints. Here, the prop values just are changing for this specific\n           * size.\n           */\n          componentClass: Page1Content,\n          propFromConfig: 'My value is different only when small',\n        }\n        large: {\n          /**\n           * Or, a different component can be loaded altogether.\n           */\n          componentClass: LargePage1Content,\n        }\n      },\n    },\n    '/page_2' : {\n      path: '/page_2',\n      component: {\n        default: {\n          componentClass: Page2Content,\n        },\n      },\n    },\n  },\n  /**\n   * Components defined under `menu` will render within the ApplicationLayout's menu sidebar. All other aspects of the API\n   * match that of the content region described above.\n   *\n   * A content entry does not need to have an associated menu entry. In this example, because there is no menu defined for\n   * the path '/page_2', the ApplicationLayout will hide the menu sidebar when the '/page_2' content is rendered.\n   */\n  menu: {\n    'Page 1' : {\n      path: '/page_1',\n      component: {\n        default: {\n          componentClass: Page1Menu,\n        },\n      },\n    },\n  },\n};\n")),(0,r.mdx)("h3",{id:"utilityconfig"},"utilityConfig"),(0,r.mdx)("h4",{id:"is-required-false-3"},"Is Required: ",(0,r.mdx)("inlineCode",{parentName:"h4"},"false")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"utilityConfig")," prop allows consuming applications to present an application-level menu directly from the ApplicationLayout. The ApplicationLayout will render this content in different ways based on the active responsive breakpoint."),(0,r.mdx)("p",null,"The API for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"utilityConfig")," matches that of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ApplicationHeaderUtility")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"ApplicationMenuUtility")," components from ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-application-utility"),". Please see their respective documentation for more information regarding their full capabilities."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"title")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"A string rendered within the utility menu's presentation target.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"accessory")),(0,r.mdx)("td",{parentName:"tr",align:null},"Element"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"A React element rendered next to the title.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"menuItems")),(0,r.mdx)("td",{parentName:"tr",align:null},"Array"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"An array of objects specifying the utility menu options to present.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"initialSelectedKey")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"The string key of the initial menu item to present.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"onChange")),(0,r.mdx)("td",{parentName:"tr",align:null},"Function"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"A function that will be called upon selection of a terminal utility item.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"onBlur")),(0,r.mdx)("td",{parentName:"tr",align:null},"Function"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"A function that will be called when navigation menu get out of focus.")))),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Avatar from 'terra-avatar';\nimport ApplicationLayout, { Utils } from 'terra-application-layout';\n\nconst myUtilityConfig = {\n  title: 'Doe, John',\n  accessory: <Avatar variant=\"user\" ariaLabel=\"Doe, John\" initials=\"JD\"/>,\n  menuItems: [{\n    key: 'menu',\n    title: 'Menu',\n    childKeys: ['item-1', 'item-2', 'item-3', 'item-4'],\n  }, {\n    key: 'item-1',\n    title: 'Item 1',\n  }, {\n    key: 'item-2',\n    title: 'Toggle Item - Checked',\n    isSelectable: true,\n    isSelected: true,\n  },  {\n    key: 'item-3',\n    title: 'Toggle Item - Not Checked',\n    isSelectable: true,\n    isSelected: false,\n  }, {\n    key: 'item-4',\n    contentLocation: Utils.utilityHelpers.locations.FOOTER,\n    title: 'Footer Item',\n  }],\n  initialSelectedKey: 'menu',\n  onChange: (event, itemData, disclose) => {\n    /**\n     * This function will be called when items are selected within the utility menu.\n     * The disclose parameter is provided for convenience, but any presentation method\n     * could be used to handle that menu content selection.\n     */\n  },\n  onBlur: (event, layoutConfig) => {\n    /**\n     * This function will be called when navigation menu get out of focus. `layoutConfig` parameter is\n     * provided to enchance interaction with application-layout\n     */\n  },\n};\n")),(0,r.mdx)("h2",{id:"responsive-design"},"Responsive Design"),(0,r.mdx)("p",null,"The ApplicationLayout has two rendering modes: ",(0,r.mdx)("inlineCode",{parentName:"p"},"standard")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"compact"),"."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"standard")," rendering occurs at ",(0,r.mdx)("inlineCode",{parentName:"li"},"medium"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"large"),", and ",(0,r.mdx)("inlineCode",{parentName:"li"},"huge")," breakpoints."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"compact")," rendering occurs at ",(0,r.mdx)("inlineCode",{parentName:"li"},"tiny")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"small")," breakpoints.")),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Prop"),(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"th"},"standard")," Rendering"),(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"th"},"compact")," Rendering"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"nameConfig")),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within ApplicationLayout's header."),(0,r.mdx)("td",{parentName:"tr",align:null},"Same as ",(0,r.mdx)("inlineCode",{parentName:"td"},"standard"),".")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"utilityConfig")),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within the ApplicationLayout's header. The utility menu is presented using a popup (as provided by ",(0,r.mdx)("inlineCode",{parentName:"td"},"terra-popup"),")."),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within the ApplicationMenuWrapper that wraps all menu content at ",(0,r.mdx)("inlineCode",{parentName:"td"},"compact")," breakpoints. The utility menu is presented modally (using the ApplicationLayout's included ModalManager).")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"navigationItems")),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within the ApplicationLayout's header as tabs (as provided by ",(0,r.mdx)("inlineCode",{parentName:"td"},"terra-application-links"),")."),(0,r.mdx)("td",{parentName:"tr",align:null},"Content is rendered within a custom menu generated by the ApplicationLayout. This menu is injected into the ",(0,r.mdx)("inlineCode",{parentName:"td"},"routingConfig")," for the ",(0,r.mdx)("inlineCode",{parentName:"td"},"'/'")," path so that it will preceed any other defined routes. Other menu components are able to navigate to the default navigation menu by calling their ",(0,r.mdx)("inlineCode",{parentName:"td"},"routingStackDelegate"),"'s ",(0,r.mdx)("inlineCode",{parentName:"td"},"showParent")," function.")))),(0,r.mdx)("h2",{id:"menucontent-component-configuration"},"Menu/Content Component Configuration"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"routingConfig")," prop specifies which components will be rendered in the ApplicationLayout's ",(0,r.mdx)("inlineCode",{parentName:"p"},"content")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"menu")," regions. These components receive a set of props from the ApplicationLayout that they must utilize; otherwise, these components can be completely defined by the consuming application."),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note: Because the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ApplicationLayout")," utilizes client-side routing provided by ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-router-dom"),", the usage of ",(0,r.mdx)("inlineCode",{parentName:"p"},"<a href=>")," links and page anchors is restricted. Usage of links and page anchors may negatively impact navigation within an application. ",(0,r.mdx)("inlineCode",{parentName:"p"},"<Link />")," components provided by ",(0,r.mdx)("inlineCode",{parentName:"p"},"react-router-dom")," or custom events can and should be used instead.")),(0,r.mdx)("p",null,"The components rendered in these regions are guaranteed to receive the following props from the ApplicationLayout:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Prop Name"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"layoutConfig")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"layoutConfig")," contains properties describing the ApplicationLayout's state and functions that allow for the manipulation of that state.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"routingStackDelegate")),(0,r.mdx)("td",{parentName:"tr",align:null},"The ",(0,r.mdx)("inlineCode",{parentName:"td"},"routingStackDelegate")," contains APIs that allow for virtual navigation within a set of matched component paths.")))),(0,r.mdx)("p",null,"Each component specified in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"routingConfig")," needs to be able to accept these props and render appropriately. If a component does not appropriately handle them (i.e. it renders unknown props, like ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-button")," and many other generic Terra components), warnings and/or errors may be thrown."),(0,r.mdx)("h2",{id:"routingmenu---a-default-menu-implementation"},(0,r.mdx)("inlineCode",{parentName:"h2"},"RoutingMenu")," - A default menu implementation"),(0,r.mdx)("p",null,"The ApplicationLayout also provides the ",(0,r.mdx)("inlineCode",{parentName:"p"},"RoutingMenu"),", a menu component for applications desiring route-based navigation within their menu region. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"RoutingMenu")," can be specified directly within the ",(0,r.mdx)("inlineCode",{parentName:"p"},"routingConfig")," or wrapped by another component for more custom implementations."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"th"},"RoutingMenu")," Props"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"layoutConfig")),(0,r.mdx)("td",{parentName:"tr",align:null},"Object"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"menuItems")),(0,r.mdx)("td",{parentName:"tr",align:null},"Array"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"routingStackDelegate")),(0,r.mdx)("td",{parentName:"tr",align:null},"Object"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"title")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional")))),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"th"},"menuItems")," Object Keys"),(0,r.mdx)("th",{parentName:"tr",align:null},"Type"),(0,r.mdx)("th",{parentName:"tr",align:null},"Is Required"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"text")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"The text string that will be rendered for the menu item.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"path")),(0,r.mdx)("td",{parentName:"tr",align:null},"String"),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"required")),(0,r.mdx)("td",{parentName:"tr",align:null},"The text path that will routed to upon item selection.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"hasSubMenu")),(0,r.mdx)("td",{parentName:"tr",align:null},"Boolean"),(0,r.mdx)("td",{parentName:"tr",align:null},"optional"),(0,r.mdx)("td",{parentName:"tr",align:null},"Indicates whether or not the item has subsequent menus. If true, a chevron will be rendered on the item.")))),(0,r.mdx)("h2",{id:"summary"},"Summary"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"The ApplicationLayout requires a ",(0,r.mdx)("inlineCode",{parentName:"li"},"Base")," component (from ",(0,r.mdx)("inlineCode",{parentName:"li"},"terra-base"),") and any ",(0,r.mdx)("inlineCode",{parentName:"li"},"Router")," component (from ",(0,r.mdx)("inlineCode",{parentName:"li"},"react-router-dom"),") in its parent hierarchy."),(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"nameConfig")," prop customizes the ApplicationLayout's branding."),(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"utilityConfig")," prop generates an utilities menu and presentation controls within the layout. A default set of options can be generated by a helper."),(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"routingConfig")," prop determines which components get rendered in the ApplicationLayout's ",(0,r.mdx)("inlineCode",{parentName:"li"},"menu")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"content")," regions based on the router location. Usage of the path ",(0,r.mdx)("inlineCode",{parentName:"li"},"'/'")," is restricted for ",(0,r.mdx)("inlineCode",{parentName:"li"},"menu")," components inside the ",(0,r.mdx)("inlineCode",{parentName:"li"},"routingConfig"),"."),(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"navigationItems")," prop generates primary navigation controls within the layout. The provided navigation items should have associated content in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"routingConfig"),"."),(0,r.mdx)("li",{parentName:"ol"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},"indexPath")," prop determines the default redirect location for the layout. The provided path should have associated content in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"routingConfig"),"."),(0,r.mdx)("li",{parentName:"ol"},"Menu and content components rendered within the ApplicationLayout receive an ",(0,r.mdx)("inlineCode",{parentName:"li"},"app")," prop with default support for modal disclosures."),(0,r.mdx)("li",{parentName:"ol"},"Menu and content components rendered within the ApplicationLayout also receive a ",(0,r.mdx)("inlineCode",{parentName:"li"},"layoutConfig")," prop for layout state manipulation."),(0,r.mdx)("li",{parentName:"ol"},"Menu and content components rendered within the ApplicationLayout also receive an ",(0,r.mdx)("inlineCode",{parentName:"li"},"routingStackDelegate")," prop. The ",(0,r.mdx)("inlineCode",{parentName:"li"},"show")," and ",(0,r.mdx)("inlineCode",{parentName:"li"},"showParent")," functions of the ",(0,r.mdx)("inlineCode",{parentName:"li"},"routingStackDelegate")," should be used for virtual navigation within configuration regions."),(0,r.mdx)("li",{parentName:"ol"},"The RoutingMenu component can be used directly for an off-the-shelf route-based navigation menu implementation.")))}p.isMDXComponent=!0},5355:function(e,n,t){t.d(n,{E:function(){return r}});var a=t(96540),i=t(55713),r=function(e){var n=e.url;return a.createElement(i.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-application-layout",name:"terra-application-layout",version:"5.82.0",url:n})}},25642:function(e,n,t){t.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},58168:function(e,n,t){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},a.apply(this,arguments)}t.d(n,{A:function(){return a}})},53986:function(e,n,t){function a(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}t.d(n,{A:function(){return a}})}}]);