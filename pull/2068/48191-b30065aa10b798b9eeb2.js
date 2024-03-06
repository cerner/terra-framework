"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[48191],{48191:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(17383)),i=l(n(34579)),o=l(n(28452)),s=l(n(63072)),d=l(n(12475)),u=l(n(29511)),r=l(n(96540)),c=l(n(67967)),f=l(n(81489)),p=l(n(17154));function m(e,t,n){return t=(0,s.default)(t),(0,o.default)(e,_()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}var h=c.default.bind(p.default),b=function(e){function t(e){var n;return(0,a.default)(this,t),(n=m(this,t,[e])).state={panelIsOpen:!1},n.handlePanelToggle=n.handlePanelToggle.bind((0,d.default)(n)),n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen}}))}},{key:"render",value:function(){return r.default.createElement("div",{className:h("content-wrapper-toggle")},r.default.createElement(f.default,{id:"test-slide",mainContent:r.default.createElement("div",{className:h("main-content")},r.default.createElement("button",{type:"button",id:"other-button-1",className:h("button"),onClick:t.handleOtherButton},"Other Button 1"),r.default.createElement("button",{type:"button",id:"test-toggle",className:h("button"),onClick:this.handlePanelToggle},"toggle"),r.default.createElement("button",{type:"button",id:"another-button",className:h("button"),onClick:t.handleOtherButton},"Another Button")),panelContent:r.default.createElement("div",{id:"panel-content",className:h("panel-content")},r.default.createElement("button",{type:"button",id:"other-button-2",className:h("button"),onClick:t.handleOtherButton},"Other Button 2"),r.default.createElement("button",{id:"focus-button",type:"button",className:h("button"),onClick:this.handlePanelToggle},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:this.state.panelIsOpen,fill:!0}))}}],[{key:"handleOtherButton",value:function(){console.log("Other button pressed")}}]),t}(r.default.Component);t.default=b},81489:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=l(n(94634)),i=l(n(91847)),o=l(n(17383)),s=l(n(34579)),d=l(n(28452)),u=l(n(63072)),r=l(n(12475)),c=l(n(29511)),f=l(n(96540)),p=l(n(5556)),m=l(n(46942)),_=l(n(67967)),h=l(n(23695)),b=l(n(16524)),g=n(8604),v=n(68414),P=l(n(79621)),N=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function y(e,t,n){return t=(0,u.default)(t),(0,d.default)(e,C()?Reflect.construct(t,n||[],(0,u.default)(e).constructor):t.apply(e,n))}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}var S=_.default.bind(P.default),k=t.SlidePanelPositions={START:"start",END:"end"},O={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},B={panelBehavior:"overlay",panelPosition:k.END,panelSize:"small"},D=function(e){function t(e){var n;return(0,o.default)(this,t),(n=y(this,t,[e])).setPanelNode=n.setPanelNode.bind((0,r.default)(n)),n.mainNode=f.default.createRef(),n.setLastClicked=n.setLastClicked.bind((0,r.default)(n)),n.setDisclosingNode=n.setDisclosingNode.bind((0,r.default)(n)),n.mainAriaDescribedByID="detail-panel-warning-".concat((0,v.v4)()),n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,n=e.isFullscreen,l=e.isOpen,o=e.fill,s=e.mainAriaLabel,d=e.mainContent,u=e.panelAriaLabel,r=e.panelContent,c=e.panelBehavior,p=e.panelPosition,_=e.panelSize,h=(e.setSlidePanelRef,(0,i.default)(e,N)),g=this.context,v=(0,m.default)(S("slide-panel",{"is-open":l},{"is-fullscreen":n},{fill:o},g.className),h.className),P=f.default.createElement("div",{className:S(["panel"]),key:"panel",tabIndex:"-1","aria-label":u||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":l?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(b.default,{text:u||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),r),y=f.default.createElement("div",{className:S("main"),key:"main",tabIndex:"-1","aria-label":s,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":l&&n?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},f.default.createElement(b.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),d),C=p===k.START?f.default.createElement(f.default.Fragment,null,P,y):f.default.createElement(f.default.Fragment,null,y,P);return f.default.createElement("div",(0,a.default)({},h,{className:v,"data-slide-panel-panel-behavior":c,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":_}),C)}}]),t}(f.default.Component);D.propTypes=O,D.defaultProps=B,D.contextType=h.default;t.default=(0,g.injectIntl)(D)},17154:function(e,t,n){n.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},79621:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);