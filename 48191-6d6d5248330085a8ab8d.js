"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[48191],{48191:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(17383)),o=l(n(34579)),i=l(n(28452)),d=l(n(63072)),s=l(n(29511)),u=l(n(96540)),r=l(n(67967)),c=l(n(81489)),f=l(n(17154));function p(e,t,n){return t=(0,d.default)(t),(0,i.default)(e,m()?Reflect.construct(t,n||[],(0,d.default)(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}var _=r.default.bind(f.default),h=function(e){function t(e){var n;return(0,a.default)(this,t),(n=p(this,t,[e])).state={panelIsOpen:!1},n.handlePanelToggle=n.handlePanelToggle.bind(n),n}return(0,s.default)(t,e),(0,o.default)(t,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen}}))}},{key:"render",value:function(){return u.default.createElement("div",{className:_("content-wrapper-toggle")},u.default.createElement(c.default,{id:"test-slide",mainContent:u.default.createElement("div",{className:_("main-content")},u.default.createElement("button",{type:"button",id:"other-button-1",className:_("button"),onClick:t.handleOtherButton},"Other Button 1"),u.default.createElement("button",{type:"button",id:"test-toggle",className:_("button"),onClick:this.handlePanelToggle},"toggle"),u.default.createElement("button",{type:"button",id:"another-button",className:_("button"),onClick:t.handleOtherButton},"Another Button")),panelContent:u.default.createElement("div",{id:"panel-content",className:_("panel-content")},u.default.createElement("button",{type:"button",id:"other-button-2",className:_("button"),onClick:t.handleOtherButton},"Other Button 2"),u.default.createElement("button",{id:"focus-button",type:"button",className:_("button"),onClick:this.handlePanelToggle},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:this.state.panelIsOpen,fill:!0}))}}],[{key:"handleOtherButton",value:function(){console.log("Other button pressed")}}])}(u.default.Component);t.default=h},81489:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=l(n(94634)),o=l(n(91847)),i=l(n(17383)),d=l(n(34579)),s=l(n(28452)),u=l(n(63072)),r=l(n(29511)),c=l(n(96540)),f=l(n(5556)),p=l(n(46942)),m=l(n(67967)),_=l(n(23695)),h=l(n(16524)),b=n(8604),g=n(68414),v=l(n(79621)),P=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function N(e,t,n){return t=(0,u.default)(t),(0,s.default)(e,y()?Reflect.construct(t,n||[],(0,u.default)(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var S=m.default.bind(v.default),O=t.SlidePanelPositions={START:"start",END:"end"},C={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool,setSlidePanelRef:f.default.func,intl:f.default.shape({formatMessage:f.default.func,locale:f.default.string})},B={panelBehavior:"overlay",panelPosition:O.END,panelSize:"small"},k=function(e){function t(e){var n;return(0,i.default)(this,t),(n=N(this,t,[e])).setPanelNode=n.setPanelNode.bind(n),n.mainNode=c.default.createRef(),n.setDisclosingNode=n.setDisclosingNode.bind(n),n.mainAriaDescribedByID="detail-panel-warning-".concat((0,g.v4)()),n}return(0,r.default)(t,e),(0,d.default)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(document.activeElement),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t,n;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();null!==(n=this.mainNode)&&void 0!==n&&n.current?this.mainNode.current.focus():document.body.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.isFullscreen,l=e.isOpen,i=e.fill,d=e.mainAriaLabel,s=e.mainContent,u=e.panelAriaLabel,r=e.panelContent,f=e.panelBehavior,m=e.panelPosition,_=e.panelSize,b=(e.setSlidePanelRef,(0,o.default)(e,P)),g=this.context,v=(0,p.default)(S("slide-panel",{"is-open":l},{"is-fullscreen":n},{fill:i},g.className),b.className),N=c.default.createElement("div",{className:S(["panel"]),key:"panel",tabIndex:"-1","aria-label":u||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":l?"false":"true",role:"region",ref:this.setPanelNode},c.default.createElement(h.default,{text:u||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),r),y=c.default.createElement("div",{className:S("main"),key:"main",tabIndex:"-1","aria-label":d,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":l&&n?"true":"false",ref:this.mainNode,role:"main"},c.default.createElement(h.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),s),C=m===O.START?c.default.createElement(c.default.Fragment,null,N,s&&y):c.default.createElement(c.default.Fragment,null,s&&y,N);return c.default.createElement("div",(0,a.default)({},b,{className:v,"data-slide-panel-panel-behavior":f,"data-slide-panel-panel-position":m,"data-slide-panel-panel-size":_}),C)}}])}(c.default.Component);k.propTypes=C,k.defaultProps=B,k.contextType=_.default;t.default=(0,b.injectIntl)(k)},17154:function(e,t,n){n.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},79621:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);