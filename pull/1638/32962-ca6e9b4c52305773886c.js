"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[32962],{32962:function(e,t,l){var n=l(64836),a=l(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(l(67294)),u=n(l(47166)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var l=c(t);if(l&&l.has(e))return l.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=i?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(n,u,o):n[u]=e[u]}n.default=e,l&&l.set(e,n);return n}(l(27662)),r=n(l(22199)),d=n(l(46868)),s=n(l(69967));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(c=function(e){return e?l:t})(e)}var m=u.default.bind(s.default),f=function(){return i.default.createElement("div",{className:m("content-wrapper")},i.default.createElement(o.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(d.default,null),panelBehavior:"squish",panelPosition:o.SlidePanelPositions.END,panelSize:"small",isOpen:!0,fill:!0}))};t.default=f},22199:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Main Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};t.default=i},46868:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(67294)),i=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Panel Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))};t.default=i},27662:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=n(l(10434)),i=n(l(70215)),u=n(l(56690)),o=n(l(89728)),r=n(l(66115)),d=n(l(61655)),s=n(l(94993)),c=n(l(73808)),m=n(l(67294)),f=n(l(45697)),p=n(l(94184)),_=n(l(47166)),v=n(l(47341)),h=n(l(1034)),E=["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"];function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return(0,s.default)(this,l)}}var b=_.default.bind(h.default),I={START:"start",END:"end"};t.SlidePanelPositions=I;var g={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool},C={panelBehavior:"overlay",panelPosition:I.END,panelSize:"small"},y=function(e){(0,d.default)(l,e);var t=P(l);function l(e){var n;return(0,u.default)(this,l),(n=t.call(this,e)).setPanelNode=n.setPanelNode.bind((0,r.default)(n)),n.mainNode=m.default.createRef(),n.setLastClicked=n.setLastClicked.bind((0,r.default)(n)),n.setDisclosingNode=n.setDisclosingNode.bind((0,r.default)(n)),n}return(0,o.default)(l,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){if(this.disclosingNode)return void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){this.disclosingNode=e}},{key:"render",value:function(){var e=this.props,t=e.panelAriaLabel,l=e.mainAriaLabel,n=e.mainContent,u=e.panelContent,o=e.panelBehavior,r=e.panelPosition,d=e.panelSize,s=e.isFullscreen,c=e.isOpen,f=e.fill,_=(0,i.default)(e,E),v=this.context,h=(0,p.default)(b("slide-panel",{"is-open":c},{"is-fullscreen":s},{fill:f},v.className),_.className),P=m.default.createElement("div",{className:b(["panel"]),key:"panel",tabIndex:"-1","aria-label":t,"aria-hidden":c?"false":"true",ref:this.setPanelNode},u),g=m.default.createElement("div",{className:b("main"),key:"main",tabIndex:"-1","aria-label":l,"aria-hidden":c&&s?"true":"false",ref:this.mainNode,onClick:this.setLastClicked,onKeyUp:this.setLastClicked},n),C=r===I.START?m.default.createElement(m.default.Fragment,null,P,g):m.default.createElement(m.default.Fragment,null,g,P);return m.default.createElement("div",(0,a.default)({},_,{className:h,"data-slide-panel-panel-behavior":o,"data-slide-panel-panel-position":r,"data-slide-panel-panel-size":d}),C)}}]),l}(m.default.Component);y.propTypes=g,y.defaultProps=C,y.contextType=v.default;var N=y;t.default=N},69967:function(e,t,l){l.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl"}},1034:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);