"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[65115],{65115:function(e,t,n){var a=n(24994),l=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(17383)),o=a(n(34579)),r=a(n(28452)),s=a(n(63072)),d=a(n(12475)),u=a(n(29511)),c=a(n(85715)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(a,o,r):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(96540)),p=a(n(67967)),m=a(n(81489)),_=a(n(17154));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function P(e,t,n){return t=(0,s.default)(t),(0,r.default)(e,b()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var v=p.default.bind(_.default),g=function(){var e=(0,f.useState)(0),t=(0,c.default)(e,2),n=t[0],a=t[1];return f.default.createElement("div",{id:"panel-content",className:v("panel-content")},f.default.createElement("button",{id:"focus-button",type:"button",className:v("button"),onClick:function(){a(n+1)}},"Increase Count "),n)},y=function(e){function t(e){var n;return(0,i.default)(this,t),(n=P(this,t,[e])).state={panelHasStartPostion:!1},n.handlePanelToggle=n.handlePanelToggle.bind((0,d.default)(n)),n}return(0,u.default)(t,e),(0,o.default)(t,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelHasStartPostion:!e.panelHasStartPostion}}))}},{key:"render",value:function(){return f.default.createElement("div",{className:v("content-wrapper-toggle")},f.default.createElement(m.default,{id:"test-slide",mainContent:f.default.createElement("div",{className:v("main-content")},f.default.createElement("button",{type:"button",id:"test-toggle",className:v("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:f.default.createElement(g,null),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"squish",panelPosition:this.state.panelHasStartPostion?"start":"end",isOpen:!0,fill:!0}))}}]),t}(f.default.Component);t.default=y},81489:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var l=a(n(94634)),i=a(n(91847)),o=a(n(17383)),r=a(n(34579)),s=a(n(28452)),d=a(n(63072)),u=a(n(12475)),c=a(n(29511)),f=a(n(96540)),p=a(n(5556)),m=a(n(46942)),_=a(n(67967)),h=a(n(23695)),P=a(n(16524)),b=n(8604),v=n(68414),g=a(n(79621)),y=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function S(e,t,n){return t=(0,d.default)(t),(0,s.default)(e,N()?Reflect.construct(t,n||[],(0,d.default)(e).constructor):t.apply(e,n))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}var C=_.default.bind(g.default),k=t.SlidePanelPositions={START:"start",END:"end"},O={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},D={panelBehavior:"overlay",panelPosition:k.END,panelSize:"small"},w=function(e){function t(e){var n;return(0,o.default)(this,t),(n=S(this,t,[e])).setPanelNode=n.setPanelNode.bind((0,u.default)(n)),n.mainNode=f.default.createRef(),n.setLastClicked=n.setLastClicked.bind((0,u.default)(n)),n.setDisclosingNode=n.setDisclosingNode.bind((0,u.default)(n)),n.mainAriaDescribedByID="detail-panel-warning-".concat((0,v.v4)()),n}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.isFullscreen,a=e.isOpen,o=e.fill,r=e.mainAriaLabel,s=e.mainContent,d=e.panelAriaLabel,u=e.panelContent,c=e.panelBehavior,p=e.panelPosition,_=e.panelSize,h=(e.setSlidePanelRef,(0,i.default)(e,y)),b=this.context,v=(0,m.default)(C("slide-panel",{"is-open":a},{"is-fullscreen":n},{fill:o},b.className),h.className),g=f.default.createElement("div",{className:C(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":a?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(P.default,{text:d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),u),S=f.default.createElement("div",{className:C("main"),key:"main",tabIndex:"-1","aria-label":r,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":a&&n?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},f.default.createElement(P.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),s),N=p===k.START?f.default.createElement(f.default.Fragment,null,g,S):f.default.createElement(f.default.Fragment,null,S,g);return f.default.createElement("div",(0,l.default)({},h,{className:v,"data-slide-panel-panel-behavior":c,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":_}),N)}}]),t}(f.default.Component);w.propTypes=O,w.defaultProps=D,w.contextType=h.default;t.default=(0,b.injectIntl)(w)},17154:function(e,t,n){n.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},79621:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);