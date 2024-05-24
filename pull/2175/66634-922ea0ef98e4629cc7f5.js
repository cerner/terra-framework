"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[66634,23609,93844,47425,38453],{201:function(e,t,n){var a=n(24994),r=n(73738);t.A=void 0;var o=a(n(85715)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&{}.hasOwnProperty.call(e,d)){var l=o?Object.getOwnPropertyDescriptor(e,d):null;l&&(l.get||l.set)?Object.defineProperty(a,d,l):a[d]=e[d]}return a.default=e,n&&n.set(e,a),a}(n(96540)),l=a(n(5556)),s=a(n(67967)),i=n(92912),c=a(n(49558)),m=a(n(53665)),u=n(25966),p=a(n(89986));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=s.default.bind(p.default),v={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},E=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,l=e.description,s=e.isExpanded,p=(0,d.useState)(s),f=(0,o.default)(p,2),v=f[0],g=f[1],x=(0,d.useState)(!1),y=(0,o.default)(x,2),C=y[0],T=y[1],_=d.default.useContext(i.ThemeContext),w=void 0!==a,P=function(){T(!C),v&&g(!v)},k=function(){g(!v),C&&T(!C)},A=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:h("template",_.className)},d.default.createElement("div",{className:h("header")},r&&d.default.createElement("h2",{className:h("title")},r)),d.default.createElement("div",{className:h("content")},l&&d.default.createElement("div",{className:h("description")},l),t),d.default.createElement("div",{className:h("footer")},n?d.default.createElement("div",{className:h("button-container")},w&&d.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":C}),onClick:P,onKeyDown:function(e){return A(e,P)},onBlur:b,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(c.default,{className:h("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(m.default,{className:h("chevron")})),d.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":v}),onClick:k,onKeyDown:function(e){return A(e,k)},onBlur:b,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(c.default,{className:h("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(m.default,{className:h("chevron")}))):null,d.default.createElement("div",null,C&&d.default.createElement("div",{className:h("css")},a),v&&d.default.createElement("div",{className:h("code")},n))))};g.propTypes=v,g.defaultProps={isExpanded:!1};t.A=g},63818:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(58168),r=n(53986),o=n(96540),d=n(36665),l=n(22633),s=n(12883),i=["components"],c={},m="wrapper";function u(e){var t=e.components,n=(0,r.A)(e,i);return(0,d.mdx)(m,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(s.Ay,{mdxType:"PropsTable"},(0,d.mdx)(s.fI,{key:"ROW1",mdxType:"Row"},(0,d.mdx)(s.dt,{mdxType:"PropNameCell"},"children"),(0,d.mdx)(s.$d,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,d.mdx)(s.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(s.NZ,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.Hd,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The content which will be embedded in an iframe by the XFC consumer.")))))}u.isMDXComponent=!0;var p=n(23609),f=["components"],h={};function v(e){var t=e.components,n=(0,r.A)(e,f);return(0,d.mdx)("wrapper",(0,a.A)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst BasicProvider = () => (\n  <ProviderTestTemplate>\n    <div className={cx('content-wrapper')}>\n      <h1>Basic Content</h1>\n      <p>This example demonstrates that the embedded content consumer will display the providers web content within an iframe.</p>\n    </div>\n  </ProviderTestTemplate>\n);\n\nexport default BasicProvider;\n\n")))}v.isMDXComponent=!0;var b=n(201),E=n(66780),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(b.A,{title:t||"Basic Provider Provider",description:n,example:o.createElement(p.default,null),exampleCssSrc:o.createElement(E.A,null),exampleSrc:o.createElement(v,null),isExpanded:a})},x=n(93844),y=["components"],C={};function T(e){var t=e.components,n=(0,r.A)(e,y);return(0,d.mdx)("wrapper",(0,a.A)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Provider } from 'xfc';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass EmbeddedContent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onClick = this.onClick.bind(this);\n  }\n\n  // eslint-disable-next-line\n  onClick() {\n    Provider.trigger('EventA');\n  }\n\n  render() {\n    return (\n      <div className={cx('content-wrapper')}>\n        <h1>Listening to Custom Event</h1>\n        <p>A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. </p>\n        <p>This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker.</p>\n        <ol>\n          <li><p>Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content</p></li>\n        </ol>\n        <button id=\"EventA\" onClick={this.onClick} type=\"button\">Set Border Color!</button>\n      </div>\n    );\n  }\n}\n\nconst CustomEventProvider = () => (\n  <ProviderTestTemplate>\n    <EmbeddedContent />\n  </ProviderTestTemplate>\n);\n\nexport default CustomEventProvider;\n\n")))}T.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(b.A,{title:t||"Custom Event Provider Provider",description:n,example:o.createElement(x.default,null),exampleCssSrc:o.createElement(E.A,null),exampleSrc:o.createElement(T,null),isExpanded:a})},w=n(47425),P=["components"],k={};function A(e){var t=e.components,n=(0,r.A)(e,P);return(0,d.mdx)("wrapper",(0,a.A)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Provider } from 'xfc';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass EmbeddedContent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.addEventListener = this.addEventListener.bind(this);\n    this.onClickA = this.onClickA.bind(this);\n    this.onClickB = this.onClickB.bind(this);\n\n    this.addEventListener('Event-Reply');\n  }\n\n  // eslint-disable-next-line\n  onClickA() {\n    Provider.trigger('EventA');\n  }\n\n  // eslint-disable-next-line\n  onClickB() {\n    Provider.trigger('EventB');\n  }\n\n  // eslint-disable-next-line\n  addEventListener(eventName) {\n    Provider.on(eventName, (event) => {\n      document.getElementById('embedded-content-consumer-reply').innerHTML = `embedded-content-consumer reply: ${JSON.stringify(event)}`;\n    });\n  }\n\n  render() {\n    return (\n      <div className={cx('content-wrapper')}>\n        <h1>Communication Between the Consumer and Embedded Content</h1>\n        <p>Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider.</p>\n        <p>This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content.</p>\n        <ol id=\"embedded-content-custom-events-communication-explination\">\n          <li><p>Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.</p></li>\n          <li><p>Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider.</p></li>\n        </ol>\n        <p>Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. </p>\n        <button id=\"EventA\" onClick={this.onClickA} type=\"button\">Trigger Event A!</button>\n        <button id=\"EventB\" onClick={this.onClickB} type=\"button\">Trigger Event B!</button>\n        <div id=\"embedded-content-consumer-reply\">No message has been sent.</div>\n      </div>\n    );\n  }\n}\n\nconst CustomEventsProvider = () => (\n  <ProviderTestTemplate>\n    <EmbeddedContent />\n  </ProviderTestTemplate>\n);\n\nexport default CustomEventsProvider;\n\n")))}A.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(b.A,{title:t||"Custom Events Provider Provider",description:n,example:o.createElement(w.default,null),exampleCssSrc:o.createElement(E.A,null),exampleSrc:o.createElement(A,null),isExpanded:a})},B=n(38453),M=["components"],S={};function D(e){var t=e.components,n=(0,r.A)(e,M);return(0,d.mdx)("wrapper",(0,a.A)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DataStatusProvider2 = () => (\n  <ProviderTestTemplate>\n    <div className={cx('content-wrapper')}>\n      <h1>Embedded Application Lifecycle</h1>\n      <p>The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame.</p>\n      <p>In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):</p>\n      <ul id=\"DataStatus-LifeCycleStatuses\" />\n    </div>\n  </ProviderTestTemplate>\n);\n\nexport default DataStatusProvider2;\n\n")))}D.isMDXComponent=!0;var L=function(e){var t=e.title,n=e.description,a=e.isExpanded;return o.createElement(b.A,{title:t||"Data Status Provider Provider",description:n,example:o.createElement(B.default,null),exampleCssSrc:o.createElement(E.A,null),exampleSrc:o.createElement(D,null),isExpanded:a})},R=["components"],X={},O="wrapper";function j(e){var t=e.components,n=(0,r.A)(e,R);return(0,d.mdx)(O,(0,a.A)({},X,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(l.E,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"testing-embedded-content"},"Testing Embedded Content"),(0,d.mdx)("p",null,"The Embedded Content Provider Test Template is a test template component which should be used to verify that the provided content does indeed resize and behave as expected when embedded in an terra-embedded-content-consumer XFC Consumer iframe."),(0,d.mdx)("p",null,"By default, when the embedded-content-consumer provides the iframe with the url of the embedded content, it will resize the iframe's height to be the height of the content supplied in the url. This resize logic, however, does not recognize height 100% and will continoulsy re-trigger resize events until the iframe collapes with a height of zero if the root style sets height to 100%."),(0,d.mdx)("p",null,"This test template provides the styles needed to correctly set the iframed container's height to the actual height of the provided content when the XFC's default height resizing logic is triggered."),(0,d.mdx)("h2",{id:"examples"},"Examples"),(0,d.mdx)(g,{title:"Provider for the Basic Consumer Example",mdxType:"BasicProvider"}),(0,d.mdx)(L,{title:"Provider Content for the Lifecycle Statuses Consumer Example",mdxType:"DataStatusProvider"}),(0,d.mdx)(_,{title:"Provider Content for the Custom Event Consumer Example",mdxType:"CustomEventProvider"}),(0,d.mdx)(N,{title:"Provider Content for the Seamless Communication Consumer Example",mdxType:"CustomEventsProvider"}),(0,d.mdx)("h2",{id:"embedded-content-provider-test-template-props-table"},"Embedded Content Provider Test Template Props Table"),(0,d.mdx)(u,{mdxType:"EmbeddedContentProviderTestTemplate"}))}j.isMDXComponent=!0},66780:function(e,t,n){n.d(t,{A:function(){return i}});var a=n(58168),r=n(53986),o=(n(96540),n(36665)),d=["components"],l={},s="wrapper";function i(e){var t=e.components,n=(0,r.A)(e,d);return(0,o.mdx)(s,(0,a.A)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    padding: 1.25rem;\n  }\n\n  iframe {\n    border: 0;\n    width: 100%;\n  }\n}\n\n")))}i.isMDXComponent=!0},22633:function(e,t,n){n.d(t,{E:function(){return o}});var a=n(96540),r=n(55713),o=function(e){var t=e.url;return a.createElement(r.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-embedded-content-consumer",name:"terra-embedded-content-consumer",version:"3.45.1",url:t})}},74077:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(94634)),o=a(n(91847)),d=a(n(17383)),l=a(n(34579)),s=a(n(28452)),i=a(n(63072)),c=a(n(29511)),m=a(n(96540)),u=a(n(5556));n(6145),n(43335);var p=["children"];function f(e,t,n){return t=(0,i.default)(t),(0,s.default)(e,h()?Reflect.construct(t,n||[],(0,i.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var v={children:u.default.node.isRequired},b=function(e){function t(){return(0,d.default)(this,t),f(this,t,arguments)}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,o.default)(e,p);return m.default.createElement("div",(0,r.default)({"data-embedded-content-consumer-provider-test-template":!0},n),t)}}])}(m.default.Component);b.propTypes=v;t.default=b},23609:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(96540)),o=a(n(67967)),d=a(n(74077)),l=a(n(79798)),s=o.default.bind(l.default);t.default=function(){return r.default.createElement(d.default,null,r.default.createElement("div",{className:s("content-wrapper")},r.default.createElement("h1",null,"Basic Content"),r.default.createElement("p",null,"This example demonstrates that the embedded content consumer will display the providers web content within an iframe.")))}},93844:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(17383)),o=a(n(34579)),d=a(n(28452)),l=a(n(63072)),s=a(n(29511)),i=a(n(96540)),c=n(27980),m=a(n(67967)),u=a(n(74077)),p=a(n(79798));function f(e,t,n){return t=(0,l.default)(t),(0,d.default)(e,h()?Reflect.construct(t,n||[],(0,l.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var v=m.default.bind(p.default),b=function(e){function t(e){var n;return(0,r.default)(this,t),(n=f(this,t,[e])).onClick=n.onClick.bind(n),n}return(0,s.default)(t,e),(0,o.default)(t,[{key:"onClick",value:function(){c.Provider.trigger("EventA")}},{key:"render",value:function(){return i.default.createElement("div",{className:v("content-wrapper")},i.default.createElement("h1",null,"Listening to Custom Event"),i.default.createElement("p",null,"A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. "),i.default.createElement("p",null,"This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker."),i.default.createElement("ol",null,i.default.createElement("li",null,i.default.createElement("p",null,"Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.")),i.default.createElement("li",null,i.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content"))),i.default.createElement("button",{id:"EventA",onClick:this.onClick,type:"button"},"Set Border Color!"))}}])}(i.default.Component);t.default=function(){return i.default.createElement(u.default,null,i.default.createElement(b,null))}},47425:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(17383)),o=a(n(34579)),d=a(n(28452)),l=a(n(63072)),s=a(n(29511)),i=a(n(96540)),c=n(27980),m=a(n(67967)),u=a(n(74077)),p=a(n(79798));function f(e,t,n){return t=(0,l.default)(t),(0,d.default)(e,h()?Reflect.construct(t,n||[],(0,l.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var v=m.default.bind(p.default),b=function(e){function t(e){var n;return(0,r.default)(this,t),(n=f(this,t,[e])).addEventListener=n.addEventListener.bind(n),n.onClickA=n.onClickA.bind(n),n.onClickB=n.onClickB.bind(n),n.addEventListener("Event-Reply"),n}return(0,s.default)(t,e),(0,o.default)(t,[{key:"onClickA",value:function(){c.Provider.trigger("EventA")}},{key:"onClickB",value:function(){c.Provider.trigger("EventB")}},{key:"addEventListener",value:function(e){c.Provider.on(e,(function(e){document.getElementById("embedded-content-consumer-reply").innerHTML="embedded-content-consumer reply: ".concat(JSON.stringify(e))}))}},{key:"render",value:function(){return i.default.createElement("div",{className:v("content-wrapper")},i.default.createElement("h1",null,"Communication Between the Consumer and Embedded Content"),i.default.createElement("p",null,"Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider."),i.default.createElement("p",null,"This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content."),i.default.createElement("ol",{id:"embedded-content-custom-events-communication-explination"},i.default.createElement("li",null,i.default.createElement("p",null,"Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.")),i.default.createElement("li",null,i.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.")),i.default.createElement("li",null,i.default.createElement("p",null,"Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.")),i.default.createElement("li",null,i.default.createElement("p",null,"The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider."))),i.default.createElement("p",null,"Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. "),i.default.createElement("button",{id:"EventA",onClick:this.onClickA,type:"button"},"Trigger Event A!"),i.default.createElement("button",{id:"EventB",onClick:this.onClickB,type:"button"},"Trigger Event B!"),i.default.createElement("div",{id:"embedded-content-consumer-reply"},"No message has been sent."))}}])}(i.default.Component);t.default=function(){return i.default.createElement(u.default,null,i.default.createElement(b,null))}},38453:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(96540)),o=a(n(67967)),d=a(n(74077)),l=a(n(79798)),s=o.default.bind(l.default);t.default=function(){return r.default.createElement(d.default,null,r.default.createElement("div",{className:s("content-wrapper")},r.default.createElement("h1",null,"Embedded Application Lifecycle"),r.default.createElement("p",null,"The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame."),r.default.createElement("p",null,"In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):"),r.default.createElement("ul",{id:"DataStatus-LifeCycleStatuses"})))}},89986:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},6145:function(e,t,n){n.r(t),t.default={}},43335:function(e,t,n){n.r(t),t.default={}},79798:function(e,t,n){n.r(t),t.default={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___UX69F"}},49558:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(96540)),r=o(n(25365));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=Object.assign({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d}}]);