"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[44426],{44426:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(17383)),i=l(n(34579)),o=l(n(28452)),d=l(n(63072)),s=l(n(29511)),r=l(n(96540)),u=l(n(67967)),c=l(n(81489)),f=l(n(17154));function p(e,t,n){return t=(0,d.default)(t),(0,o.default)(e,m()?Reflect.construct(t,n||[],(0,d.default)(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}var _=u.default.bind(f.default),b=function(e){function t(e){var n;return(0,a.default)(this,t),(n=p(this,t,[e])).state={panelIsOpen:!1},n.handlePanelToggle=n.handlePanelToggle.bind(n),n}return(0,s.default)(t,e),(0,i.default)(t,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen}}))}},{key:"render",value:function(){return r.default.createElement("div",{className:_("content-wrapper-toggle")},r.default.createElement(c.default,{id:"test-slide",mainContent:r.default.createElement("div",{className:_("main-content")},r.default.createElement("button",{type:"button",id:"test-toggle",className:_("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:r.default.createElement("div",{id:"panel-content",className:_("panel-content")},r.default.createElement("button",{id:"focus-button",type:"button",className:_("button"),onClick:this.handlePanelToggle},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:this.state.panelIsOpen,fill:!0}))}}])}(r.default.Component);t.default=b},81489:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=l(n(94634)),i=l(n(91847)),o=l(n(17383)),d=l(n(34579)),s=l(n(28452)),r=l(n(63072)),u=l(n(29511)),c=l(n(41132)),f=l(n(96540)),p=l(n(5556)),m=l(n(46942)),_=l(n(67967)),b=l(n(23695)),h=l(n(16524)),g=n(8604),v=n(68414),P=l(n(79621)),S=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function y(e,t,n){return t=(0,r.default)(t),(0,s.default)(e,N()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}var C=_.default.bind(P.default),O=t.SlidePanelPositions={START:"start",END:"end"},D={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},x={panelBehavior:"overlay",panelPosition:O.END,panelSize:"small"},E=function(e){function t(e){var n;return(0,o.default)(this,t),(n=y(this,t,[e])).setPanelNode=n.setPanelNode.bind(n),n.mainNode=f.default.createRef(),n.setDisclosingNode=n.setDisclosingNode.bind(n),n.mainAriaDescribedByID="detail-panel-warning-".concat((0,v.v4)()),n}return(0,u.default)(t,e),(0,d.default)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen){var t=function(e){for(var t=(0,c.default)(document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).visibility&&null===e.closest("[inert]")})),n=e;n.parentElement;){if(t.includes(n))return n;n=n.parentElement}}(document.activeElement);return this.setDisclosingNode(t),void this.panelNode.focus()}if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var n,l;if(null!==(n=this.disclosingNode)&&void 0!==n&&n.focus)return void this.disclosingNode.focus();null!==(l=this.mainNode)&&void 0!==l&&l.current?this.mainNode.current.focus():document.body.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setDisclosingNode",value:function(e){e&&(this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.isFullscreen,l=e.isOpen,o=e.fill,d=e.mainAriaLabel,s=e.mainContent,r=e.panelAriaLabel,u=e.panelContent,c=e.panelBehavior,p=e.panelPosition,_=e.panelSize,b=(e.setSlidePanelRef,(0,i.default)(e,S)),g=this.context,v=(0,m.default)(C("slide-panel",{"is-open":l},{"is-fullscreen":n},{fill:o},g.className),b.className),P=f.default.createElement("div",{className:C(["panel"]),key:"panel",tabIndex:"-1","aria-label":r||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":l?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(h.default,{text:r||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),u),y=f.default.createElement("div",{className:C("main"),key:"main",tabIndex:"-1","aria-label":d,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":l&&n?"true":"false",ref:this.mainNode,role:"main"},f.default.createElement(h.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),s),N=p===O.START?f.default.createElement(f.default.Fragment,null,P,s&&y):f.default.createElement(f.default.Fragment,null,s&&y,P);return f.default.createElement("div",(0,a.default)({},b,{className:v,"data-slide-panel-panel-behavior":c,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":_}),N)}}])}(f.default.Component);E.propTypes=D,E.defaultProps=x,E.contextType=b.default;t.default=(0,g.injectIntl)(E)},17154:function(e,t,n){n.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},79621:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);