"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[44426],{44426:function(e,l,n){var t=n(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=t(n(17383)),i=t(n(34579)),o=t(n(28452)),d=t(n(63072)),s=t(n(12475)),r=t(n(29511)),u=t(n(96540)),c=t(n(67967)),f=t(n(81489)),p=t(n(17154));function m(e,l,n){return l=(0,d.default)(l),(0,o.default)(e,_()?Reflect.construct(l,n||[],(0,d.default)(e).constructor):l.apply(e,n))}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}var h=c.default.bind(p.default),v=function(e){function l(e){var n;return(0,a.default)(this,l),(n=m(this,l,[e])).state={panelIsOpen:!1},n.handlePanelToggle=n.handlePanelToggle.bind((0,s.default)(n)),n}return(0,r.default)(l,e),(0,i.default)(l,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen}}))}},{key:"render",value:function(){return u.default.createElement("div",{className:h("content-wrapper-toggle")},u.default.createElement(f.default,{id:"test-slide",mainContent:u.default.createElement("div",{className:h("main-content")},u.default.createElement("button",{type:"button",id:"test-toggle",className:h("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:u.default.createElement("div",{id:"panel-content",className:h("panel-content")},u.default.createElement("button",{id:"focus-button",type:"button",className:h("button"),onClick:this.handlePanelToggle},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:this.state.panelIsOpen,fill:!0}))}}]),l}(u.default.Component);l.default=v},81489:function(e,l,n){var t=n(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.SlidePanelPositions=void 0;var a=t(n(94634)),i=t(n(91847)),o=t(n(17383)),d=t(n(34579)),s=t(n(28452)),r=t(n(63072)),u=t(n(12475)),c=t(n(29511)),f=t(n(96540)),p=t(n(5556)),m=t(n(46942)),_=t(n(67967)),h=t(n(23695)),v=t(n(16524)),P=n(8604),g=n(68414),b=t(n(79621)),N=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function S(e,l,n){return l=(0,r.default)(l),(0,s.default)(e,y()?Reflect.construct(l,n||[],(0,r.default)(e).constructor):l.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var C=_.default.bind(b.default),O=l.SlidePanelPositions={START:"start",END:"end"},D={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},k={panelBehavior:"overlay",panelPosition:O.END,panelSize:"small"},B=function(e){function l(e){var n;return(0,o.default)(this,l),(n=S(this,l,[e])).setPanelNode=n.setPanelNode.bind((0,u.default)(n)),n.mainNode=f.default.createRef(),n.setDisclosingNode=n.setDisclosingNode.bind((0,u.default)(n)),n.mainAriaDescribedByID="detail-panel-warning-".concat((0,g.v4)()),n}return(0,c.default)(l,e),(0,d.default)(l,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(document.activeElement),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var l,n;if(null!==(l=this.disclosingNode)&&void 0!==l&&l.focus)return void this.disclosingNode.focus();null!==(n=this.mainNode)&&void 0!==n&&n.current?this.mainNode.current.focus():document.body.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setDisclosingNode",value:function(e){e&&(this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,l=e.intl,n=e.isFullscreen,t=e.isOpen,o=e.fill,d=e.mainAriaLabel,s=e.mainContent,r=e.panelAriaLabel,u=e.panelContent,c=e.panelBehavior,p=e.panelPosition,_=e.panelSize,h=(e.setSlidePanelRef,(0,i.default)(e,N)),P=this.context,g=(0,m.default)(C("slide-panel",{"is-open":t},{"is-fullscreen":n},{fill:o},P.className),h.className),b=f.default.createElement("div",{className:C(["panel"]),key:"panel",tabIndex:"-1","aria-label":r||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":t?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(v.default,{text:r||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),u),S=f.default.createElement("div",{className:C("main"),key:"main",tabIndex:"-1","aria-label":d,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":t&&n?"true":"false",ref:this.mainNode,role:"main"},f.default.createElement(v.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:l.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),s),y=p===O.START?f.default.createElement(f.default.Fragment,null,b,s&&S):f.default.createElement(f.default.Fragment,null,s&&S,b);return f.default.createElement("div",(0,a.default)({},h,{className:g,"data-slide-panel-panel-behavior":c,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":_}),y)}}]),l}(f.default.Component);B.propTypes=D,B.defaultProps=k,B.contextType=h.default;l.default=(0,P.injectIntl)(B)},17154:function(e,l,n){n.r(l),l.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},79621:function(e,l,n){n.r(l),l.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);