"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[44426],{44426:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(17383)),i=l(n(34579)),o=l(n(28452)),s=l(n(63072)),d=l(n(29511)),r=l(n(96540)),u=l(n(67967)),c=l(n(81489)),f=l(n(17154));function p(e,t,n){return t=(0,s.default)(t),(0,o.default)(e,m()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}var _=u.default.bind(f.default),h=function(e){function t(e){var n;return(0,a.default)(this,t),(n=p(this,t,[e])).state={panelIsOpen:!1},n.handlePanelToggle=n.handlePanelToggle.bind(n),n}return(0,d.default)(t,e),(0,i.default)(t,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen}}))}},{key:"render",value:function(){return r.default.createElement("div",{className:_("content-wrapper-toggle")},r.default.createElement(c.default,{id:"test-slide",mainContent:r.default.createElement("div",{className:_("main-content")},r.default.createElement("button",{type:"button",id:"test-toggle",className:_("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:r.default.createElement("div",{id:"panel-content",className:_("panel-content")},r.default.createElement("button",{id:"focus-button",type:"button",className:_("button"),onClick:this.handlePanelToggle},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:this.state.panelIsOpen,fill:!0}))}}])}(r.default.Component);t.default=h},81489:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=l(n(94634)),i=l(n(91847)),o=l(n(17383)),s=l(n(34579)),d=l(n(28452)),r=l(n(63072)),u=l(n(29511)),c=l(n(96540)),f=l(n(5556)),p=l(n(46942)),m=l(n(67967)),_=l(n(23695)),h=l(n(16524)),g=n(8604),v=n(68414),P=l(n(79621)),b=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function N(e,t,n){return t=(0,r.default)(t),(0,d.default)(e,S()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}var y=m.default.bind(P.default),C=t.SlidePanelPositions={START:"start",END:"end"},O={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool,setSlidePanelRef:f.default.func,intl:f.default.shape({formatMessage:f.default.func,locale:f.default.string})},D={panelBehavior:"overlay",panelPosition:C.END,panelSize:"small"},k=function(e){function t(e){var n;return(0,o.default)(this,t),(n=N(this,t,[e])).setPanelNode=n.setPanelNode.bind(n),n.mainNode=c.default.createRef(),n.setDisclosingNode=n.setDisclosingNode.bind(n),n.mainAriaDescribedByID="detail-panel-warning-".concat((0,v.v4)()),n}return(0,u.default)(t,e),(0,s.default)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(document.activeElement),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t,n;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();null!==(n=this.mainNode)&&void 0!==n&&n.current?this.mainNode.current.focus():document.body.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.isFullscreen,l=e.isOpen,o=e.fill,s=e.mainAriaLabel,d=e.mainContent,r=e.panelAriaLabel,u=e.panelContent,f=e.panelBehavior,m=e.panelPosition,_=e.panelSize,g=(e.setSlidePanelRef,(0,i.default)(e,b)),v=this.context,P=(0,p.default)(y("slide-panel",{"is-open":l},{"is-fullscreen":n},{fill:o},v.className),g.className),N=c.default.createElement("div",{className:y(["panel"]),key:"panel",tabIndex:"-1","aria-label":r||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":l?"false":"true",role:"region",ref:this.setPanelNode},c.default.createElement(h.default,{text:r||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),u),S=c.default.createElement("div",{className:y("main"),key:"main",tabIndex:"-1","aria-label":s,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":l&&n?"true":"false",ref:this.mainNode,role:"main"},c.default.createElement(h.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),d),O=m===C.START?c.default.createElement(c.default.Fragment,null,N,d&&S):c.default.createElement(c.default.Fragment,null,d&&S,N);return c.default.createElement("div",(0,a.default)({},g,{className:P,"data-slide-panel-panel-behavior":f,"data-slide-panel-panel-position":m,"data-slide-panel-panel-size":_}),O)}}])}(c.default.Component);k.propTypes=O,k.defaultProps=D,k.contextType=_.default;t.default=(0,g.injectIntl)(k)},17154:function(e,t,n){n.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},79621:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);