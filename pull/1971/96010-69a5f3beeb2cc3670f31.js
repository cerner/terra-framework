"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[96010,4767,33377,77883,15441],{98846:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(87462),r=n(44925),o=n(67294),l=n(81254),i=n(7949),d=n(39359),s=["components"],c={};function u(e){var t=e.components,n=(0,r.Z)(e,s);return(0,l.mdx)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nimport Aggregator from 'terra-aggregator';\nimport AggregatorItem from '../common/AggregatorItem';\n\nconst items = Object.freeze([{\n  key: 'SECTION_0',\n  component: <AggregatorItem name=\"Section 0\" />,\n}, {\n  key: 'SECTION_1',\n  component: <AggregatorItem name=\"Section 1\" />,\n}, {\n  key: 'SECTION_2',\n  component: <AggregatorItem name=\"Section 2\" />,\n}, {\n  key: 'SECTION_3',\n  component: <AggregatorItem name=\"Section 3\" />,\n}]);\n\nclass StandaloneAggregatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      flip: false,\n    };\n  }\n\n  render() {\n    const body = (\n      <div>\n        <button type=\"button\" onClick={() => { this.setState(prevState => ({ flip: !prevState.flip })); }}>Flip Section Order</button>\n        <button type=\"button\" onClick={() => { this.forceUpdate(); }}>Force Aggregator Render</button>\n        <Aggregator\n          items={this.state.flip ? Object.assign([], items).reverse() : items}\n        />\n      </div>\n    );\n\n    return body;\n  }\n}\n\nexport default StandaloneAggregatorExample;\n\n")))}u.isMDXComponent=!0;var m=n(49271),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(m.Z,{title:t||"Standalone Aggregator Example",description:n,example:o.createElement(d.Z,null),exampleSrc:o.createElement(u,null),isExpanded:a})},g=n(36857),f=["components"],h={};function x(e){var t=e.components,n=(0,r.Z)(e,f);return(0,l.mdx)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Grid from 'terra-grid';\n\nimport Aggregator from 'terra-aggregator';\nimport AggregatorItem from '../common/AggregatorItem';\n\nconst items = Object.freeze([{\n  key: 'SECTION_0',\n  component: <AggregatorItem name=\"Section 0\" />,\n}, {\n  key: 'SECTION_1',\n  component: <AggregatorItem name=\"Section 1\" />,\n}, {\n  key: 'SECTION_2',\n  component: <AggregatorItem name=\"Section 2\" />,\n}, {\n  key: 'SECTION_3',\n  component: <AggregatorItem name=\"Section 3\" />,\n}]);\n\nconst CustomRenderAggregatorExample = () => (\n  <div>\n    <Aggregator\n      items={items}\n      render={renderData => (\n        <Grid>\n          <Grid.Row>\n            <Grid.Column tiny={6}>\n              {renderData.items[0]}\n            </Grid.Column>\n            <Grid.Column tiny={6}>\n              {renderData.items[1]}\n            </Grid.Column>\n          </Grid.Row>\n          <Grid.Row>\n            <Grid.Column tiny={6}>\n              {renderData.items[2]}\n            </Grid.Column>\n            <Grid.Column tiny={6}>\n              {renderData.items[3]}\n            </Grid.Column>\n          </Grid.Row>\n        </Grid>\n      )}\n    />\n  </div>\n);\n\nexport default CustomRenderAggregatorExample;\n\n")))}x.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(m.Z,{title:t||"Custom Render Aggregator Example",description:n,example:o.createElement(g.Z,null),exampleSrc:o.createElement(x,null),isExpanded:a})},v=n(19806),E=["components"],S={};function b(e){var t=e.components,n=(0,r.Z)(e,E);return(0,l.mdx)("wrapper",(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';\nimport ModalManager from 'terra-modal-manager';\n\nimport ModalAggregator from '../common/ModalAggregator';\n\nconst ModalButton = withDisclosureManager(({ disclosureManager }) => (\n  <button\n    type=\"button\"\n    onClick={() => {\n      disclosureManager.disclose({\n        preferredType: 'modal',\n        size: 'large',\n        content: {\n          key: 'MODAL_EXAMPLE',\n          component: <ModalAggregator identifier=\"MODAL_EXAMPLE\" />,\n        },\n      });\n    }}\n  >\n    Launch Modal\n  </button>\n));\n\nModalButton.propTypes = {\n  disclosureManager: disclosureManagerShape,\n};\n\nconst SimpleAggregatorExample = () => (\n  <div>\n    <ModalManager>\n      <ModalButton />\n    </ModalManager>\n  </div>\n);\n\nexport default SimpleAggregatorExample;\n\n")))}b.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(m.Z,{title:t||"Aggregator In Modal Example",description:n,example:o.createElement(v.Z,null),exampleSrc:o.createElement(b,null),isExpanded:a})},C=n(81137),N=["components"],T={};function D(e){var t=e.components,n=(0,r.Z)(e,N);return(0,l.mdx)("wrapper",(0,a.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ModalManager from 'terra-modal-manager';\nimport SlidePanelManager from 'terra-slide-panel-manager';\nimport { withDisclosureManager } from 'terra-disclosure-manager';\n\nimport Aggregator from 'terra-aggregator';\nimport AggregatorItem from '../common/AggregatorItem';\nimport SimpleAggregatorItem from '../common/SimpleAggregatorItem';\n\nconst items = Object.freeze([{\n  key: 'SECTION_0',\n  component: <AggregatorItem name=\"Slide Panel Section\" disclosureType=\"panel\" discloseOnSelect />,\n}, {\n  key: 'SECTION_1',\n  component: <AggregatorItem name=\"Modal Section\" disclosureType=\"modal\" discloseOnSelect />,\n}, {\n  key: 'SECTION_2',\n  component: <SimpleAggregatorItem name=\"No Disclosure Section\" />,\n}]);\n\nconst Wrapper = withDisclosureManager(({ disclosureManager }) => (\n  <Aggregator\n    items={items}\n    disclose={disclosureManager.disclose}\n  />\n));\n\nconst CombinedDisclosureExample = () => (\n  <div>\n    <ModalManager>\n      <SlidePanelManager>\n        <Wrapper />\n      </SlidePanelManager>\n    </ModalManager>\n  </div>\n);\n\nexport default CombinedDisclosureExample;\n\n")))}D.isMDXComponent=!0;var A=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(m.Z,{title:t||"Combined Disclosure Example",description:n,example:o.createElement(C.Z,null),exampleSrc:o.createElement(D,null),isExpanded:a})},k=n(83030),I=["components"],w={};function O(e){var t=e.components,n=(0,r.Z)(e,I);return(0,l.mdx)("wrapper",(0,a.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ModalManager from 'terra-modal-manager';\nimport SlidePanelManager from 'terra-slide-panel-manager';\n\nimport Aggregator from 'terra-aggregator';\nimport { withDisclosureManager } from 'terra-disclosure-manager';\nimport AggregatorItem from '../common/AggregatorItem';\n\nconst Wrapper = withDisclosureManager(({ items, disclosureManager }) => (\n  <Aggregator\n    items={items}\n    disclose={disclosureManager.disclose}\n  />\n));\n\nconst ModalManagerBypass = withDisclosureManager(({ disclosureManager }) => {\n  const items = Object.freeze([{\n    key: 'SECTION_0',\n    component: <AggregatorItem name=\"Section 0\" disclosureType=\"panel\" key=\"SECTION_0\" customDisclose={disclosureManager.disclose} discloseOnSelect />,\n  }, {\n    key: 'SECTION_1',\n    component: <AggregatorItem name=\"Section 1\" disclosureType=\"panel\" key=\"SECTION_1\" customDisclose={disclosureManager.disclose} discloseOnSelect />,\n  }]);\n\n  return (\n    <SlidePanelManager>\n      <Wrapper items={items} />\n    </SlidePanelManager>\n  );\n});\n\nconst ModalBypassExample = () => (\n  <div>\n    <p>\n      In this example, the Aggregator items are provided with the ModalManager disclosure function directly.\n      Calling that function does not require Aggregator focus and will bypass the Aggregator entirely. This can be\n      useful for simple Modal workflows that should not impact Aggregator state.\n    </p>\n    <ModalManager>\n      <ModalManagerBypass />\n    </ModalManager>\n  </div>\n);\n\nexport default ModalBypassExample;\n\n")))}O.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(m.Z,{title:t||"Disclosure Bypass Example",description:n,example:o.createElement(k.Z,null),exampleSrc:o.createElement(O,null),isExpanded:a})},P=n(78530),j=["components"],R={},F="wrapper";function Z(e){var t=e.components,n=(0,r.Z)(e,j);return(0,l.mdx)(F,(0,a.Z)({},R,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(P.ZP,{mdxType:"PropsTable"},(0,l.mdx)(P.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(P.O,{mdxType:"PropNameCell"},"items"),(0,l.mdx)(P.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    key: {\n      type: 'string',\n      required: true,\n    },\n    component: {\n      type: 'element',\n      required: true,\n    },\n  },\n}],\n"))),(0,l.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,l.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The components that will be managed by the Aggregator. Each component provided will be provided with an 'aggregatorDelegate' prop\ncontaining the Aggregator API. Keys must also be provided to allow the Aggregator to uniquely identify the component.\nImmutable objects are preferred."))),(0,l.mdx)(P.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(P.O,{mdxType:"PropNameCell"},"render"),(0,l.mdx)(P.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A function that will override the Aggregators default render. The function will receive an Object parameter data necessary for the\nrender process."))),(0,l.mdx)(P.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(P.O,{mdxType:"PropNameCell"},"disclose"),(0,l.mdx)(P.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"A function that will be provided to Aggregator items that have received focus. The function must adhere to the standardized\nDisclosureManager disclosure API.")))))}Z.isMDXComponent=!0;var B=["components"],q={},G="wrapper";function L(e){var t=e.components,n=(0,r.Z)(e,B);return(0,l.mdx)(G,(0,a.Z)({},q,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(i.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-aggregator"},"Terra Aggregator"),(0,l.mdx)("p",null,"The Aggregator provides focus-based mechanisms for managing actions across disparate components."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-aggregator"))))),(0,l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("h3",{id:"aggregator-focus"},"Aggregator Focus"),(0,l.mdx)("p",null,"The Aggregator manages interactions across its items using focus. Only one item can have focus at any given time. When an item requests focus, it can provide an Object containing state pertaining to the focus request. This state will be managed by the Aggregator and given to the item as a prop on the next render cycle. What goes inside this Object is up to the item. However, this Object will be destroyed when the item loses focus, so the data included should be scoped to things tied directly to a focused state."),(0,l.mdx)("p",null,"Once an item receives focus, the item will be provided with the 'disclose' function that the Aggregator was provided with. The Aggregator wraps that disclose function and ensures that the disclosure lifecycle is tied to the focus management. If the disclosure is closed, focus will be released from the disclosing component. If the disclosing component loses focus for whatever reason, the Aggregator will ensure that the disclosure is closed. Any DisclosureManager-based disclosure implementation is supported."),(0,l.mdx)("p",null,"The components rendered by the Aggregator are provided with an ",(0,l.mdx)("inlineCode",{parentName:"p"},"aggregatorDelegate")," prop for interacting with Aggregator state."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"aggregatorDelegate")," API:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"hasFocus"),(0,l.mdx)("td",{parentName:"tr",align:null},"A Boolean indicating whether or not the item currently has focus.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"requestFocus"),(0,l.mdx)("td",{parentName:"tr",align:null},"A function that will attempt to give focus to the calling item.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"releaseFocus"),(0,l.mdx)("td",{parentName:"tr",align:null},"A function that will release focus from the calling item. This is only provided if the item currently has focus.")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"itemState"),(0,l.mdx)("td",{parentName:"tr",align:null},"An Object containing state that was given to the Aggregator during the focus request.")))),(0,l.mdx)("h3",{id:"rendering"},"Rendering"),(0,l.mdx)("p",null,"By default, the components will be rendered by the Aggregator in the order given. An optional ",(0,l.mdx)("inlineCode",{parentName:"p"},"render")," prop can be provided that will override the default render logic."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"render")," Argument Object API:"),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Key"),(0,l.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},(0,l.mdx)("inlineCode",{parentName:"td"},"items")),(0,l.mdx)("td",{parentName:"tr",align:null},"An Array of components that were provided to the Aggregator as ",(0,l.mdx)("inlineCode",{parentName:"td"},"items"),", now containing an ",(0,l.mdx)("inlineCode",{parentName:"td"},"aggregatorDelegate")," prop. The order of this array matches that of the ",(0,l.mdx)("inlineCode",{parentName:"td"},"items")," prop value of the Aggregator.")))),(0,l.mdx)("h4",{id:"rendering-example-using-grid"},"Rendering Example (using Grid)"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"<Aggregator\n  items={[{ key: '1', component: <Item1 /> }, { key: '2', component: <Item2 /> }]}\n  render={renderData => (\n    <Grid>\n      <Grid.Row>\n        <Grid.Column col={6}>\n          {renderData.items[0]} // This component is equivalent to: <Item1 key=\"1\" aggregatorDelegate={...} />\n        </Grid.Column>\n        <Grid.Column col={6}>\n          {renderData.items[1]} // This component is equivalent to: <Item2 key=\"2\" aggregatorDelegate={...} />\n        </Grid.Column>\n      </Grid.Row>\n    </Grid>\n  )}\n/>\n")),(0,l.mdx)("h3",{id:"example"},"Example"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Aggregator from 'terra-aggregator';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(p,{title:"Standalone Aggregator",mdxType:"StandaloneAggregatorExample"}),(0,l.mdx)(y,{title:"Custom Render Aggregator",mdxType:"CustomRenderAggregatorExample"}),(0,l.mdx)(A,{title:"Combined Discloure Aggregator",mdxType:"CombinedDisclosureExample"}),(0,l.mdx)(_,{title:"Disclosure Bypass Aggregator",mdxType:"DisclosureBypassExample"}),(0,l.mdx)(M,{title:"Aggregator In Modal",mdxType:"AggregatorInModalExample"}),(0,l.mdx)("h2",{id:"aggregator-props-table"},"Aggregator Props table"),(0,l.mdx)(Z,{mdxType:"AggregatorPropsTable"}))}L.isMDXComponent=!0},7949:function(e,t,n){n.d(t,{C:function(){return o}});var a=n(67294),r=n(22863),o=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-aggregator",name:"terra-aggregator",version:"4.75.0",url:t})}},76790:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(38416)),o=a(n(70215)),l=a(n(56690)),i=a(n(89728)),d=a(n(94993)),s=a(n(73808)),c=a(n(66115)),u=a(n(61655)),m=a(n(67294)),p=a(n(45697)),g=["afterDismiss","dismissDisclosure"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e,t,n){return t=(0,s.default)(t),(0,d.default)(e,x()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}var y={items:p.default.arrayOf(p.default.shape({key:p.default.string.isRequired,component:p.default.element.isRequired})),render:p.default.func,disclose:p.default.func},v=function(e){function t(e){var n;return(0,l.default)(this,t),(n=h(this,t,[e])).requestFocus=n.requestFocus.bind((0,c.default)(n)),n.releaseFocus=n.releaseFocus.bind((0,c.default)(n)),n.setFocusState=n.setFocusState.bind((0,c.default)(n)),n.resetFocusState=n.resetFocusState.bind((0,c.default)(n)),n.renderItems=n.renderItems.bind((0,c.default)(n)),n.state={focusedItemId:void 0,focusedItemState:void 0},n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidUpdate",value:function(e){var t,n=this.props.items,a=this.state.focusedItemId;this.props.items!==e.items&&(n.forEach((function(e){e.key===a&&(t=!0)})),t||this.releaseFocus(void 0,!0))}},{key:"setFocusState",value:function(e,t){this.setState({focusedItemId:e,focusedItemState:t})}},{key:"resetFocusState",value:function(){this.setFocusState()}},{key:"requestFocus",value:function(e,t){var n=this,a=this.props.disclose,l=this.state.focusedItemId;return new Promise((function(i,d){n.releaseFocus(l).then((function(){n.setFocusState(e,Object.freeze(t||{}));var l={};a&&(l.disclose=function(t){return n.state.focusedItemId!==e?Promise.reject():a(t).then((function(e){var t=e.afterDismiss,a=e.dismissDisclosure,l=(0,o.default)(e,g);return n.forceDismissInstance=a,t.then((function(){n.forceDismissInstance=void 0,n.state.focusedItemId&&n.resetFocusState()})),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({afterDismiss:t,dismissDisclosure:a},l)}))}),i(l)})).catch((function(){d()}))}))}},{key:"releaseFocus",value:function(e,t){var n=this;return this.state.focusedItemId?e===this.state.focusedItemId||t?new Promise((function(e,t){n.forceDismissInstance?n.forceDismissInstance().then((function(){n.resetFocusState(),e()})).catch((function(){t()})):(n.resetFocusState(),e())})):Promise.reject():Promise.resolve()}},{key:"renderItems",value:function(){var e=this,t=this.props.items,n=this.state,a=n.focusedItemId,r=n.focusedItemState;return t.map((function(t){var n=a===t.key;return m.default.cloneElement(t.component,{key:t.key,aggregatorDelegate:{hasFocus:n,requestFocus:function(n){return e.requestFocus(t.key,n)},releaseFocus:n?function(){return e.releaseFocus(t.key)}:void 0,itemState:n?r:void 0}})}))}},{key:"render",value:function(){var e=this.renderItems();return this.props.render?this.props.render({items:e}):m.default.createElement("div",null,e)}}]),t}(m.default.Component);v.propTypes=y,v.defaultProps={items:[]};t.default=v},1433:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(10434)),o=a(n(70215)),l=a(n(56690)),i=a(n(89728)),d=a(n(94993)),s=a(n(73808)),c=a(n(66115)),u=a(n(61655)),m=a(n(67294)),p=a(n(45697)),g=a(n(55281)),f=a(n(10027)),h=a(n(78490)),x=a(n(17092)),y=n(56019),v=a(n(19845)),E=a(n(4132)),S=a(n(30767)),b=a(n(32566)),M=a(n(52821)),C=["name","disclosureType","aggregatorDelegate","discloseOnSelect","customDisclose"];function N(e,t,n){return t=(0,s.default)(t),(0,d.default)(e,T()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function T(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(T=function(){return!!e})()}var D=v.default.bind(b.default),A=(0,y.withDisclosureManager)((function(e){var t=e.disclosureManager;return m.default.createElement(f.default,{header:m.default.createElement(x.default,{title:"Info Modal",onClose:t.closeDisclosure,onBack:t.goBack})},m.default.createElement("div",{className:D("readonly-modal-content")},m.default.createElement("p",null,"This modal was not presented through the Aggregator. The Aggregator state was maintained.")))}));A.propTypes={disclosureManager:y.disclosureManagerShape};var k={aggregatorDelegate:p.default.object,name:p.default.string,disclosureType:p.default.string,discloseOnSelect:p.default.bool,customDisclose:p.default.func},I=function(e){function t(e){var n;return(0,l.default)(this,t),(n=N(this,t,[e])).handleSelection=n.handleSelection.bind((0,c.default)(n)),n.launchModal=n.launchModal.bind((0,c.default)(n)),n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"handleSelection",value:function(e,t){var n=this,a=this.props,r=a.aggregatorDelegate,o=a.name,l=a.discloseOnSelect,i={0:"tiny",1:"small",2:"medium",3:"large",4:"huge",5:"fullscreen"};r.hasFocus&&r.itemState.selectedIndex===t?r.releaseFocus().catch((function(){console.log("Section - Focus release failed. Something must be locked.")})):r.requestFocus({selectedIndex:t}).then((function(e){var a=e.disclose;l&&a({preferredType:n.props.disclosureType,size:i[t],content:{key:"Nested ".concat(o),component:m.default.createElement(M.default,{name:"Nested ".concat(o),disclosureType:n.props.disclosureType})}})})).catch((function(e){console.log("Section - Selection denied - ".concat(e))}))}},{key:"launchModal",value:function(){(0,this.props.customDisclose)({preferredType:"modal",size:"small",content:{key:"ModalContent-".concat(Date.now()),component:m.default.createElement(A,null)}})}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.name,l=(n.disclosureType,n.aggregatorDelegate),i=(n.discloseOnSelect,n.customDisclose),d=(0,o.default)(n,C);return l.hasFocus&&l.itemState&&void 0!==l.itemState.selectedIndex&&(e=l.itemState.selectedIndex),m.default.createElement(f.default,(0,r.default)({},d,{header:m.default.createElement(h.default,{className:D("header-arrange"),fitStart:m.default.createElement("div",{className:D("header-arrange-content")},i?m.default.createElement(g.default,{text:"Modal (Without Requesting Focus)",onClick:this.launchModal}):null),fill:m.default.createElement("div",null,a)})}),m.default.createElement(E.default,{isPadded:!0},m.default.createElement(S.default,{isSelected:0===e,onSelect:function(e){return t.handleSelection(e,0)}},m.default.createElement("div",null,"Row 0")),m.default.createElement(S.default,{isSelected:1===e,onSelect:function(e){return t.handleSelection(e,1)}},m.default.createElement("div",null,"Row 1")),m.default.createElement(S.default,{isSelected:2===e,onSelect:function(e){return t.handleSelection(e,2)}},m.default.createElement("div",null,"Row 2")),m.default.createElement(S.default,{isSelected:3===e,onSelect:function(e){return t.handleSelection(e,3)}},m.default.createElement("div",null,"Row 3")),m.default.createElement(S.default,{isSelected:4===e,onSelect:function(e){return t.handleSelection(e,4)}},m.default.createElement("div",null,"Row 4")),m.default.createElement(S.default,{isSelected:5===e,onSelect:function(e){return t.handleSelection(e,5)}},m.default.createElement("div",null,"Row 5"))))}}]),t}(m.default.Component);I.propTypes=k;t.default=I},52821:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(56690)),o=a(n(89728)),l=a(n(94993)),i=a(n(73808)),d=a(n(66115)),s=a(n(61655)),c=a(n(67294)),u=a(n(45697)),m=a(n(19845)),p=a(n(55281)),g=a(n(10027)),f=a(n(55142)),h=a(n(17092)),x=n(56019),y=a(n(80985));function v(e,t,n){return t=(0,i.default)(t),(0,l.default)(e,E()?Reflect.construct(t,n||[],(0,i.default)(e).constructor):t.apply(e,n))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}var S=m.default.bind(y.default),b={name:u.default.string,disclosureType:u.default.string,disclosureManager:x.disclosureManagerShape},M=function(e){function t(e){var n;return(0,r.default)(this,t),(n=v(this,t,[e])).checkLockState=n.checkLockState.bind((0,d.default)(n)),n.state={text:void 0},n}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.disclosureManager;e&&e.registerDismissCheck&&e.registerDismissCheck(this.checkLockState)}},{key:"checkLockState",value:function(){var e=this;return this.state.text&&this.state.text.length?new Promise((function(t,n){confirm("".concat(e.props.name," has unsaved changes that will be lost. Do you wish to continue?"))?t():n()})):Promise.resolve()}},{key:"render",value:function(){var e=this,t=this.props,n=t.disclosureManager,a=t.name,r=t.disclosureType;return c.default.createElement(g.default,{fill:!0,header:c.default.createElement(h.default,{title:"Disclosure - ".concat(a),onClose:n.closeDisclosure,onBack:n.goBack,onMaximize:n.maximize,onMinimize:n.minimize})},c.default.createElement("div",{className:S("content-wrapper")},c.default.createElement("h3",null,a),c.default.createElement("p",null,"The disclosed component can disclose content within the same panel."),c.default.createElement("p",null,"It can also render a header (like above) that implements the various DisclosureManager control functions."),c.default.createElement(p.default,{text:"Dismiss",onClick:function(){n.dismiss().catch((function(){console.log("Dismiss failed. A lock must be in place.")}))}}),c.default.createElement(p.default,{text:"Disclose Again",onClick:function(){n.disclose({preferredType:r,size:"small",content:{key:"Nested ".concat(a),component:c.default.createElement(C,{name:"Nested ".concat(a),disclosureType:r})}})}}),c.default.createElement("br",null),c.default.createElement("br",null),c.default.createElement("p",null,"The disclosed component can register a dismiss check function that can interrupt and prevent dismissal. This component will prompt the user if text is detected in the input field below."),c.default.createElement(f.default,{value:this.state.text||"",onChange:function(t){e.setState({text:t.target.value})}}),this.state.text&&this.state.text.length?c.default.createElement("p",null,"Component has unsaved changes!"):null))}}]),t}(c.default.Component);M.propTypes=b,M.defaultProps={name:"Disclosure Component"};var C=(0,x.withDisclosureManager)(M);t.default=C},5270:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(10027)),l=a(n(17092)),i=n(56019),d=a(n(76790)),s=a(n(1433)),c=a(n(50242)),u=Object.freeze([{key:"SECTION_0",component:r.default.createElement(s.default,{name:"Slide Panel Section",disclosureType:"panel",discloseOnSelect:!0})},{key:"SECTION_1",component:r.default.createElement(s.default,{name:"Modal Section",disclosureType:"modal",discloseOnSelect:!0})},{key:"SECTION_2",component:r.default.createElement(c.default,{name:"No Disclosure Section"})}]),m=function(e){var t=e.disclosureManager;return r.default.createElement(o.default,{fill:!0,header:r.default.createElement(l.default,{onClose:t.closeDisclosure,onBack:t.goBack})},r.default.createElement(d.default,{items:u,disclose:t.disclose}))};m.propTypes={disclosureManager:i.disclosureManagerShape};t.default=(0,i.withDisclosureManager)(m)},50242:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(10434)),o=a(n(70215)),l=a(n(67294)),i=a(n(45697)),d=a(n(10027)),s=a(n(16772)),c=["name","aggregatorDelegate"],u={aggregatorDelegate:i.default.object,name:i.default.string},m=function(e){var t=e.name,n=e.aggregatorDelegate,a=(0,o.default)(e,c);return l.default.createElement(d.default,(0,r.default)({},a,{header:l.default.createElement(s.default,{title:t})}),n.hasFocus?l.default.createElement("button",{type:"button",onClick:function(){n.releaseFocus()}},"Release Focus"):l.default.createElement("button",{type:"button",onClick:function(){n.requestFocus()}},"Get Focus"),n.hasFocus?l.default.createElement("h4",null,"Section has focus!"):null)};m.propTypes=u;t.default=m},4132:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294));n(4440);t.default=function(e){var t=e.children,n=e.isPadded;return r.default.createElement("ul",{"aria-label":"Placeholder List",role:"listbox",className:n?"placeholder-list is-padded":"placeholder-list "},t)}},30767:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(10434)),o=a(n(70215)),l=a(n(67294));n(4440);var i=["children","isSelected","onSelect"];t.default=function(e){var t=e.children,n=e.isSelected,a=e.onSelect,d=(0,o.default)(e,i),s=n?"placeholder-list-item is-selected":"placeholder-list-item ";return l.default.createElement("li",(0,r.default)({},d,{"aria-selected":n,tabIndex:"0",className:s,onClick:a,onKeyDown:function(e){13!==e.nativeEvent.keyCode&&32!==e.nativeEvent.keyCode||(e.preventDefault(),a(e))},role:"option"}),t)}},19806:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=n(56019),l=a(n(22266)),i=a(n(5270)),d=(0,o.withDisclosureManager)((function(e){var t=e.disclosureManager;return r.default.createElement("button",{type:"button",onClick:function(){t.disclose({preferredType:"modal",size:"large",content:{key:"MODAL_EXAMPLE",component:r.default.createElement(i.default,{identifier:"MODAL_EXAMPLE"})}})}},"Launch Modal")}));d.propTypes={disclosureManager:o.disclosureManagerShape};t.Z=function(){return r.default.createElement("div",null,r.default.createElement(l.default,null,r.default.createElement(d,null)))}},81137:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(22266)),l=a(n(34653)),i=n(56019),d=a(n(76790)),s=a(n(1433)),c=a(n(50242)),u=Object.freeze([{key:"SECTION_0",component:r.default.createElement(s.default,{name:"Slide Panel Section",disclosureType:"panel",discloseOnSelect:!0})},{key:"SECTION_1",component:r.default.createElement(s.default,{name:"Modal Section",disclosureType:"modal",discloseOnSelect:!0})},{key:"SECTION_2",component:r.default.createElement(c.default,{name:"No Disclosure Section"})}]),m=(0,i.withDisclosureManager)((function(e){var t=e.disclosureManager;return r.default.createElement(d.default,{items:u,disclose:t.disclose})}));t.Z=function(){return r.default.createElement("div",null,r.default.createElement(o.default,null,r.default.createElement(l.default,null,r.default.createElement(m,null))))}},36857:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(14012)),l=a(n(76790)),i=a(n(1433)),d=Object.freeze([{key:"SECTION_0",component:r.default.createElement(i.default,{name:"Section 0"})},{key:"SECTION_1",component:r.default.createElement(i.default,{name:"Section 1"})},{key:"SECTION_2",component:r.default.createElement(i.default,{name:"Section 2"})},{key:"SECTION_3",component:r.default.createElement(i.default,{name:"Section 3"})}]);t.Z=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{items:d,render:function(e){return r.default.createElement(o.default,null,r.default.createElement(o.default.Row,null,r.default.createElement(o.default.Column,{tiny:6},e.items[0]),r.default.createElement(o.default.Column,{tiny:6},e.items[1])),r.default.createElement(o.default.Row,null,r.default.createElement(o.default.Column,{tiny:6},e.items[2]),r.default.createElement(o.default.Column,{tiny:6},e.items[3])))}}))}},83030:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(22266)),l=a(n(34653)),i=a(n(76790)),d=n(56019),s=a(n(1433)),c=(0,d.withDisclosureManager)((function(e){var t=e.items,n=e.disclosureManager;return r.default.createElement(i.default,{items:t,disclose:n.disclose})})),u=(0,d.withDisclosureManager)((function(e){var t=e.disclosureManager,n=Object.freeze([{key:"SECTION_0",component:r.default.createElement(s.default,{name:"Section 0",disclosureType:"panel",key:"SECTION_0",customDisclose:t.disclose,discloseOnSelect:!0})},{key:"SECTION_1",component:r.default.createElement(s.default,{name:"Section 1",disclosureType:"panel",key:"SECTION_1",customDisclose:t.disclose,discloseOnSelect:!0})}]);return r.default.createElement(l.default,null,r.default.createElement(c,{items:n}))}));t.Z=function(){return r.default.createElement("div",null,r.default.createElement("p",null,"In this example, the Aggregator items are provided with the ModalManager disclosure function directly. Calling that function does not require Aggregator focus and will bypass the Aggregator entirely. This can be useful for simple Modal workflows that should not impact Aggregator state."),r.default.createElement(o.default,null,r.default.createElement(u,null)))}},39359:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(10434)),o=a(n(56690)),l=a(n(89728)),i=a(n(94993)),d=a(n(73808)),s=a(n(61655)),c=a(n(67294)),u=a(n(76790)),m=a(n(1433));function p(e,t,n){return t=(0,d.default)(t),(0,i.default)(e,g()?Reflect.construct(t,n||[],(0,d.default)(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var f=Object.freeze([{key:"SECTION_0",component:c.default.createElement(m.default,{name:"Section 0"})},{key:"SECTION_1",component:c.default.createElement(m.default,{name:"Section 1"})},{key:"SECTION_2",component:c.default.createElement(m.default,{name:"Section 2"})},{key:"SECTION_3",component:c.default.createElement(m.default,{name:"Section 3"})}]),h=function(e){function t(e){var n;return(0,o.default)(this,t),(n=p(this,t,[e])).state={flip:!1},n}return(0,s.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this;return c.default.createElement("div",null,c.default.createElement("button",{type:"button",onClick:function(){e.setState((function(e){return{flip:!e.flip}}))}},"Flip Section Order"),c.default.createElement("button",{type:"button",onClick:function(){e.forceUpdate()}},"Force Aggregator Render"),c.default.createElement(u.default,{items:this.state.flip?(0,r.default)([],f).reverse():f}))}}]),t}(c.default.Component);t.Z=h},32566:function(e,t,n){n.r(t),t.default={"readonly-modal-content":"AggregatorItem-module__readonly-modal-content___4o6Ba","header-arrange":"AggregatorItem-module__header-arrange___Koarx","header-arrange-content":"AggregatorItem-module__header-arrange-content___NvVxA"}},80985:function(e,t,n){n.r(t),t.default={"example-wrapper":"example-styles-module__example-wrapper___3TxXc","content-wrapper":"example-styles-module__content-wrapper___CPbPj"}},4440:function(e,t,n){n.r(t),t.default={}}}]);