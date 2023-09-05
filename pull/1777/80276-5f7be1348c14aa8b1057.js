"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[80276,50461,70832,72520,59407],{49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var l=o?Object.getOwnPropertyDescriptor(e,d):null;l&&(l.get||l.set)?Object.defineProperty(r,d,l):r[d]=e[d]}r.default=e,n&&n.set(e,r);return r}(n(67294)),l=r(n(45697)),s=r(n(47166)),i=n(21538),c=r(n(33864)),m=r(n(23399)),u=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=s.default.bind(p.default),v={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},E=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,l=e.description,s=e.isExpanded,p=(0,d.useState)(s),f=(0,o.default)(p,2),v=f[0],y=f[1],g=(0,d.useState)(!1),x=(0,o.default)(g,2),C=x[0],T=x[1],_=d.default.useContext(i.ThemeContext),w=void 0!==r,P=function(){T(!C),v&&y(!v)},k=function(){y(!v),C&&T(!C)},N=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:h("template",_.className)},d.default.createElement("div",{className:h("header")},a&&d.default.createElement("h2",{className:h("title")},a)),d.default.createElement("div",{className:h("content")},l&&d.default.createElement("div",{className:h("description")},l),t),d.default.createElement("div",{className:h("footer")},n?d.default.createElement("div",{className:h("button-container")},w&&d.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":C}),onClick:P,onKeyDown:function(e){return N(e,P)},onBlur:b,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(c.default,{className:h("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(m.default,{className:h("chevron")})),d.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":v}),onClick:k,onKeyDown:function(e){return N(e,k)},onBlur:b,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(c.default,{className:h("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(m.default,{className:h("chevron")}))):null,d.default.createElement("div",null,C&&d.default.createElement("div",{className:h("css")},r),v&&d.default.createElement("div",{className:h("code")},n))))};y.propTypes=v,y.defaultProps={isExpanded:!1};var g=y;t.Z=g},73259:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var r=n(87462),a=n(44925),o=n(67294),d=n(81254),l=n(95753),s=n(78530),i=["components"],c={},m="wrapper";function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,d.mdx)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(s.ZP,{mdxType:"PropsTable"},(0,d.mdx)(s.X2,{key:"ROW1",mdxType:"Row"},(0,d.mdx)(s.O,{mdxType:"PropNameCell"},"children"),(0,d.mdx)(s.Di,{mdxType:"TypeCell"},(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,d.mdx)(s.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,d.mdx)(s.mW,{mdxType:"DefaultValueCell"},(0,d.mdx)("p",null,"none")),(0,d.mdx)(s.Ex,{mdxType:"DescriptionCell"},(0,d.mdx)("p",null,"The content which will be embedded in an iframe by the XFC consumer.")))))}u.isMDXComponent=!0;var p=n(50461),f=["components"],h={};function v(e){var t=e.components,n=(0,a.Z)(e,f);return(0,d.mdx)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Provider = () => (\n  <ProviderTestTemplate>\n    <div className={cx('content-wrapper')}>\n      <h1>Basic Content</h1>\n      <p>This example demonstrates that the embedded content consumer will display the providers web content within an iframe.</p>\n    </div>\n  </ProviderTestTemplate>\n);\n\nexport default Provider;\n\n")))}v.isMDXComponent=!0;var b=n(49271),E=n(28963),y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(b.Z,{title:t||"Basic Provider Provider",description:n,example:o.createElement(p.default,null),exampleCssSrc:o.createElement(E.Z,null),exampleSrc:o.createElement(v,null),isExpanded:r})},g=n(70832),x=["components"],C={};function T(e){var t=e.components,n=(0,a.Z)(e,x);return(0,d.mdx)("wrapper",(0,r.Z)({},C,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Provider } from 'xfc';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass EmbeddedContent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onClick = this.onClick.bind(this);\n  }\n\n  // eslint-disable-next-line\n  onClick() {\n    Provider.trigger('EventA');\n  }\n\n  render() {\n    return (\n      <div className={cx('content-wrapper')}>\n        <h1>Listening to Custom Event</h1>\n        <p>A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. </p>\n        <p>This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker.</p>\n        <ol>\n          <li><p>Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content</p></li>\n        </ol>\n        <button id=\"EventA\" onClick={this.onClick} type=\"button\">Set Border Color!</button>\n      </div>\n    );\n  }\n}\n\nconst CustomEventProvider = () => (\n  <ProviderTestTemplate>\n    <EmbeddedContent />\n  </ProviderTestTemplate>\n);\n\nexport default CustomEventProvider;\n\n")))}T.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(b.Z,{title:t||"Custom Event Provider Provider",description:n,example:o.createElement(g.default,null),exampleCssSrc:o.createElement(E.Z,null),exampleSrc:o.createElement(T,null),isExpanded:r})},w=n(72520),P=["components"],k={};function N(e){var t=e.components,n=(0,a.Z)(e,P);return(0,d.mdx)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Provider } from 'xfc';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass EmbeddedContent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.addEventListener = this.addEventListener.bind(this);\n    this.onClickA = this.onClickA.bind(this);\n    this.onClickB = this.onClickB.bind(this);\n\n    this.addEventListener('Event-Reply');\n  }\n\n  // eslint-disable-next-line\n  onClickA() {\n    Provider.trigger('EventA');\n  }\n\n  // eslint-disable-next-line\n  onClickB() {\n    Provider.trigger('EventB');\n  }\n\n  // eslint-disable-next-line\n  addEventListener(eventName) {\n    Provider.on(eventName, (event) => {\n      document.getElementById('embedded-content-consumer-reply').innerHTML = `embedded-content-consumer reply: ${JSON.stringify(event)}`;\n    });\n  }\n\n  render() {\n    return (\n      <div className={cx('content-wrapper')}>\n        <h1>Communication Between the Consumer and Embedded Content</h1>\n        <p>Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider.</p>\n        <p>This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content.</p>\n        <ol id=\"embedded-content-custom-events-communication-explination\">\n          <li><p>Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.</p></li>\n          <li><p>Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider.</p></li>\n        </ol>\n        <p>Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. </p>\n        <button id=\"EventA\" onClick={this.onClickA} type=\"button\">Trigger Event A!</button>\n        <button id=\"EventB\" onClick={this.onClickB} type=\"button\">Trigger Event B!</button>\n        <div id=\"embedded-content-consumer-reply\">No message has been sent.</div>\n      </div>\n    );\n  }\n}\n\nconst CustomEventsProvider = () => (\n  <ProviderTestTemplate>\n    <EmbeddedContent />\n  </ProviderTestTemplate>\n);\n\nexport default CustomEventsProvider;\n\n")))}N.isMDXComponent=!0;var B=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(b.Z,{title:t||"Custom Events Provider Provider",description:n,example:o.createElement(w.default,null),exampleCssSrc:o.createElement(E.Z,null),exampleSrc:o.createElement(N,null),isExpanded:r})},A=n(59407),S=["components"],D={};function M(e){var t=e.components,n=(0,a.Z)(e,S);return(0,d.mdx)("wrapper",(0,r.Z)({},D,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)("pre",null,(0,d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DataStatusProvider2 = () => (\n  <ProviderTestTemplate>\n    <div className={cx('content-wrapper')}>\n      <h1>Embedded Application Lifecycle</h1>\n      <p>The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame.</p>\n      <p>In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):</p>\n      <ul id=\"DataStatus-LifeCycleStatuses\" />\n    </div>\n  </ProviderTestTemplate>\n);\n\nexport default DataStatusProvider2;\n\n")))}M.isMDXComponent=!0;var R=function(e){var t=e.title,n=e.description,r=e.isExpanded;return o.createElement(b.Z,{title:t||"Data Status Provider Provider",description:n,example:o.createElement(A.default,null),exampleCssSrc:o.createElement(E.Z,null),exampleSrc:o.createElement(M,null),isExpanded:r})},L=["components"],Z={},O="wrapper";function X(e){var t=e.components,n=(0,a.Z)(e,L);return(0,d.mdx)(O,(0,r.Z)({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,d.mdx)(l.C,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"testing-embedded-content"},"Testing Embedded Content"),(0,d.mdx)("p",null,"The Embedded Content Provider Test Template is a test template component which should be used to verify that the provided content does indeed resize and behave as expected when embedded in an terra-embedded-content-consumer XFC Consumer iframe. "),(0,d.mdx)("p",null,"By default, when the embedded-content-consumer provides the iframe with the url of the embedded content, it will resize the iframe's height to be the height of the content supplied in the url. This resize logic, however, does not recognize height 100% and will continoulsy re-trigger resize events until the iframe collapes with a height of zero if the root style sets height to 100%. "),(0,d.mdx)("p",null,"This test template provides the styles needed to correctly set the iframed container's height to the actual height of the provided content when the XFC's default height resizing logic is triggered."),(0,d.mdx)("h2",{id:"examples"},"Examples"),(0,d.mdx)(y,{title:" Provider for the Basic Consumer Example",mdxType:"BasicProvider"}),(0,d.mdx)(R,{title:"Provider Content for the Lifecycle Statuses Consumer Example",mdxType:"DataStatusProvider"}),(0,d.mdx)(_,{title:"Provider Content for the Custom Event Consumer Example",mdxType:"CustomEventProvider"}),(0,d.mdx)(B,{title:"Provider Content for the Seamless Communication Consumer Example",mdxType:"CustomEventsProvider"}),(0,d.mdx)("h2",{id:"embedded-content-provider-test-template-props-table"},"Embedded Content Provider Test Template Props Table"),(0,d.mdx)(u,{mdxType:"EmbeddedContentProviderTestTemplate"}))}X.isMDXComponent=!0},28963:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(87462),a=n(44925),o=(n(67294),n(81254)),d=["components"],l={},s="wrapper";function i(e){var t=e.components,n=(0,a.Z)(e,d);return(0,o.mdx)(s,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    padding: 1.25rem;\n  }\n\n  iframe {\n    border: 0;\n    width: 100%;\n  }\n}\n\n")))}i.isMDXComponent=!0},95753:function(e,t,n){n.d(t,{C:function(){return o}});var r=n(67294),a=n(22863),o=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-embedded-content-consumer",name:"terra-embedded-content-consumer",version:"3.37.0",url:t})}},33317:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(10434)),o=r(n(70215)),d=r(n(56690)),l=r(n(89728)),s=r(n(61655)),i=r(n(94993)),c=r(n(73808)),m=r(n(67294)),u=r(n(45697));n(28633),n(56904);var p=["children"];function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var h={children:u.default.node.isRequired},v=function(e){(0,s.default)(n,e);var t=f(n);function n(){return(0,d.default)(this,n),t.apply(this,arguments)}return(0,l.default)(n,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,o.default)(e,p);return m.default.createElement("div",(0,a.default)({"data-embedded-content-consumer-provider-test-template":!0},n),t)}}]),n}(m.default.Component);v.propTypes=h;var b=v;t.default=b},50461:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),o=r(n(47166)),d=r(n(33317)),l=r(n(15653)),s=o.default.bind(l.default),i=function(){return a.default.createElement(d.default,null,a.default.createElement("div",{className:s("content-wrapper")},a.default.createElement("h1",null,"Basic Content"),a.default.createElement("p",null,"This example demonstrates that the embedded content consumer will display the providers web content within an iframe.")))};t.default=i},70832:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(56690)),o=r(n(89728)),d=r(n(66115)),l=r(n(61655)),s=r(n(94993)),i=r(n(73808)),c=r(n(67294)),m=n(19100),u=r(n(47166)),p=r(n(33317)),f=r(n(15653));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var v=u.default.bind(f.default),b=function(e){(0,l.default)(n,e);var t=h(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).onClick=r.onClick.bind((0,d.default)(r)),r}return(0,o.default)(n,[{key:"onClick",value:function(){m.Provider.trigger("EventA")}},{key:"render",value:function(){return c.default.createElement("div",{className:v("content-wrapper")},c.default.createElement("h1",null,"Listening to Custom Event"),c.default.createElement("p",null,"A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. "),c.default.createElement("p",null,"This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker."),c.default.createElement("ol",null,c.default.createElement("li",null,c.default.createElement("p",null,"Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.")),c.default.createElement("li",null,c.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content"))),c.default.createElement("button",{id:"EventA",onClick:this.onClick,type:"button"},"Set Border Color!"))}}]),n}(c.default.Component),E=function(){return c.default.createElement(p.default,null,c.default.createElement(b,null))};t.default=E},72520:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(56690)),o=r(n(89728)),d=r(n(66115)),l=r(n(61655)),s=r(n(94993)),i=r(n(73808)),c=r(n(67294)),m=n(19100),u=r(n(47166)),p=r(n(33317)),f=r(n(15653));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.default)(e);if(t){var a=(0,i.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var v=u.default.bind(f.default),b=function(e){(0,l.default)(n,e);var t=h(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).addEventListener=r.addEventListener.bind((0,d.default)(r)),r.onClickA=r.onClickA.bind((0,d.default)(r)),r.onClickB=r.onClickB.bind((0,d.default)(r)),r.addEventListener("Event-Reply"),r}return(0,o.default)(n,[{key:"onClickA",value:function(){m.Provider.trigger("EventA")}},{key:"onClickB",value:function(){m.Provider.trigger("EventB")}},{key:"addEventListener",value:function(e){m.Provider.on(e,(function(e){document.getElementById("embedded-content-consumer-reply").innerHTML="embedded-content-consumer reply: ".concat(JSON.stringify(e))}))}},{key:"render",value:function(){return c.default.createElement("div",{className:v("content-wrapper")},c.default.createElement("h1",null,"Communication Between the Consumer and Embedded Content"),c.default.createElement("p",null,"Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider."),c.default.createElement("p",null,"This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content."),c.default.createElement("ol",{id:"embedded-content-custom-events-communication-explination"},c.default.createElement("li",null,c.default.createElement("p",null,"Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.")),c.default.createElement("li",null,c.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.")),c.default.createElement("li",null,c.default.createElement("p",null,"Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.")),c.default.createElement("li",null,c.default.createElement("p",null,"The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider."))),c.default.createElement("p",null,"Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. "),c.default.createElement("button",{id:"EventA",onClick:this.onClickA,type:"button"},"Trigger Event A!"),c.default.createElement("button",{id:"EventB",onClick:this.onClickB,type:"button"},"Trigger Event B!"),c.default.createElement("div",{id:"embedded-content-consumer-reply"},"No message has been sent."))}}]),n}(c.default.Component),E=function(){return c.default.createElement(p.default,null,c.default.createElement(b,null))};t.default=E},59407:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),o=r(n(47166)),d=r(n(33317)),l=r(n(15653)),s=o.default.bind(l.default),i=function(){return a.default.createElement(d.default,null,a.default.createElement("div",{className:s("content-wrapper")},a.default.createElement("h1",null,"Embedded Application Lifecycle"),a.default.createElement("p",null,"The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame."),a.default.createElement("p",null,"In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):"),a.default.createElement("ul",{id:"DataStatus-LifeCycleStatuses"})))};t.default=i},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},28633:function(e,t,n){n.r(t),t.default={}},56904:function(e,t,n){n.r(t),t.default={}},15653:function(e,t,n){n.r(t),t.default={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___UX69F"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var l=function(e){var t=d({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var s=l;t.default=s}}]);