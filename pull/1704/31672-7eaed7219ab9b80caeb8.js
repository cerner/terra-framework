"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[31672],{66484:function(e,n,r){r.r(n),r.d(n,{default:function(){return x}});var t=r(87462),s=r(44925),a=(r(67294),r(81254)),o=r(557),i=r(78530),d=["components"],l={},m="wrapper";function p(e){var n=e.components,r=(0,s.Z)(e,d);return(0,a.mdx)(m,(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(i.ZP,{mdxType:"PropsTable"},(0,a.mdx)(i.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(i.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(i.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The child components that will be provided the disclosure functionality."))),(0,a.mdx)(i.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(i.O,{mdxType:"PropNameCell"},"render"),(0,a.mdx)(i.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A function used to provide rendering capabilities to the DisclosureManager."))),(0,a.mdx)(i.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(i.O,{mdxType:"PropNameCell"},"supportedDisclosureTypes"),(0,a.mdx)(i.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"array\n"))),(0,a.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"An array of disclosure types that the DisclosureManager should support. If an unsupported disclosure request occurs, the DisclosureManager will\nutilize its 'disclosureManager' prop and forward the request instead of handling the request itself."))),(0,a.mdx)(i.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(i.O,{mdxType:"PropNameCell"},"trapNestedDisclosureRequests"),(0,a.mdx)(i.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A boolean indicating whether or not the DisclosureManager should handle all nested disclosure requests. When enabled, the DisclosureManager will handle all\ndisclose requests coming from disclosed components, regardless of the preferred disclosure type.")))))}p.isMDXComponent=!0;var c=["components"],u={},h="wrapper";function x(e){var n=e.components,r=(0,s.Z)(e,c);return(0,a.mdx)(h,(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(o.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-disclosure-manager"},"Terra Disclosure Manager"),(0,a.mdx)("p",null,"The DisclosureManager is a stateful component used to manage disclosure presentation. It provides consumers with access to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"DisclosureManager")," component, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerContext"),", and the context wrapper ",(0,a.mdx)("inlineCode",{parentName:"p"},"withDisclosureManager"),". Additionally, it provides the ",(0,a.mdx)("inlineCode",{parentName:"p"},"DisclosureManagerHeaderAdapter")," to allow disclosed content to register header information with the disclosing container."),(0,a.mdx)("p",null,"For the purpose of clarity, the concepts explained can be broken down into:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Disclosure Manager"),(0,a.mdx)("li",{parentName:"ul"},"Disclosure Manager Children - content rendered as children of the DisclosureManager"),(0,a.mdx)("li",{parentName:"ul"},"Disclosed Content - content that will be disclosed by a DisclosureManager child")),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-disclosure-manager"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("p",null,"This package uses React's Context for inter-component communication. A single instance of this package must be installed to ensure that communication occurs between all Context Providers and Consumers. To help ensure a single instance is installed, this package should be defined as a peer dependency in packages that are reusable libraries or otherwise consumed by other packages."),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import DisclosureManager from 'terra-disclosure-manager';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"disclosure-manager-props"},"Disclosure Manager Props"),(0,a.mdx)(p,{mdxType:"DisclosureManagerPropsTable"}),(0,a.mdx)("h3",{id:"requirements-of-the-render-prop"},"Requirements of the Render Prop"),(0,a.mdx)("p",null,"The DisclosureManager does not implement a traditional render function. Instead, it uses the ",(0,a.mdx)("inlineCode",{parentName:"p"},"render")," prop provided to the DisclosureManager to allow the implementing component to managed how disclsoures should be presented. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"render")," function should define the following parameters that will reflect the the DisclosureManager's state."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const render = ({\n  children,\n  closeDisclosure,\n  disclosureComponentKeys,\n  disclosureComponentData,\n  disclosure,\n  dismissPresentedComponent,\n  maximizeDisclosure,\n  minimizeDisclosure,\n}) => {\n  // render stuff\n};\n")),(0,a.mdx)("details",null,(0,a.mdx)("summary",null,"Render Arguments in Detail"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"const render = ({\n  /* The children components provided to the DisclosureManager. */\n  children: {\n    /* Array of React components to render as content. */\n    components: PropsTypes.arrayOf(PropsTypes.node),\n  },\n\n  /* Closes the disclosure and removes all components from the disclosure stack. */\n  closeDisclosure: PropsTypes.func,\n\n  /* The components in the disclosure stack. */\n  disclose: {\n    /* The React components to render in a disclosure mechanism. */\n    components: PropTypes.arrayOf(PropsTypes.node),\n        \n    /* Indicate the current display state of the DisclosureManager. */\n    isOpen: PropTypes.bool,\n        \n    /**\n     * Indicate the current focus state of the DisclosureManager.\n     *  > Note: The `isFocused` value has little relevance now that Terra's AbstractModal and other\n     *    components directly manage their own focus state. `isFocused` will be removed from their\n     *    DisclosureManager API in a future major release.\n     */\n    isFocused: PropTypes.bool,\n        \n    /* Indicate the current maximize state of the DisclosureManager. */\n    isMaximized: PropTypes.bool,\n    \n    /* The String size of the disclosure. */\n    size: PropTypes.string,\n  },\n  \n  /* Array of keys representing the components in the disclosure stack. */\n  disclosureComponentKeys: PropsTypes.arrayOf(PropsTypes.string),\n\n  /* Contains components and associated data representing the state of disclosure stack */\n  disclosureComponentData: {\n    \n    /* Component that has been wrapped with the DisclosureManager-provided contexts */\n    component: PropsTypes.node,\n\n    /** \n     * Contains the header data for the associated component. This will be provided if the \n     * component's title is provided title on disclose or the DisclosureHeaderAdapter is rendered\n     * by the disclosed component.\n     */\n    headerAdapterData: {\n      /* The disclosed component's title that can be rendered within the header. */\n      title: PropsTypes.string,\n\n      /* A CollapsibleMenuView component that can render within the header. */\n      collapsibleMenuView: PropType.node,\n    },\n  },\n\n  /* Pops the currently disclosed component off the disclosure stack. */\n  dismissPresentedComponent: PropsTypes.func,\n\n  /**\n   * Maximizes the disclosure size. If the disclosure cannot be maximized, or if it is already\n   * maximized, the function is not provided.\n   */\n  maximizeDisclosure: PropsTypes.func,\n\n  /**\n   * Minimizes the disclosure size. If the disclosure cannot be minimized, or if it is already\n   * minimized, the function is not provided.\n   */\n  minimizeDisclosure: PropsTypes.func,\n}) => {\n  // render stuff\n};\n"))))}x.isMDXComponent=!0},557:function(e,n,r){r.d(n,{C:function(){return a}});var t=r(67294),s=r(22863),a=function(e){var n=e.url;return t.createElement(s.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-disclosure-manager",name:"terra-disclosure-manager",version:"4.42.0",url:n})}}}]);