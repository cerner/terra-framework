"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[89926],{89926:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(56690)),i=n(l(89728)),o=n(l(66115)),s=n(l(61655)),r=n(l(94993)),d=n(l(73808)),u=n(l(67294)),c=n(l(47166)),f=n(l(27662)),p=n(l(69967));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return(0,r.default)(this,l)}}var _=c.default.bind(p.default),h=function(e){(0,s.default)(l,e);var t=m(l);function l(e){var n;return(0,a.default)(this,l),(n=t.call(this,e)).state={panelIsOpen:!1},n.handlePanelToggle=n.handlePanelToggle.bind((0,o.default)(n)),n}return(0,i.default)(l,[{key:"handlePanelToggle",value:function(){this.setState((function(e){return{panelIsOpen:!e.panelIsOpen}}))}},{key:"render",value:function(){return u.default.createElement("div",{className:_("content-wrapper-toggle")},u.default.createElement(f.default,{id:"test-slide",mainContent:u.default.createElement("div",{className:_("main-content")},u.default.createElement("button",{type:"button",id:"test-toggle",className:_("button"),onClick:this.handlePanelToggle},"toggle")),panelContent:u.default.createElement("div",{id:"panel-content",className:_("panel-content")},u.default.createElement("button",{id:"focus-button",type:"button",className:_("button"),onClick:this.handlePanelToggle},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:this.state.panelIsOpen,fill:!0}))}}]),l}(u.default.Component);t.default=h},27662:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=n(l(10434)),i=n(l(70215)),o=n(l(56690)),s=n(l(89728)),r=n(l(66115)),d=n(l(61655)),u=n(l(94993)),c=n(l(73808)),f=n(l(67294)),p=n(l(45697)),m=n(l(94184)),_=n(l(47166)),h=n(l(47341)),v=n(l(29270)),P=l(25387),g=l(55877),b=n(l(1034)),y=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return(0,u.default)(this,l)}}var S=_.default.bind(b.default),C={START:"start",END:"end"};t.SlidePanelPositions=C;var k={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},O={panelBehavior:"overlay",panelPosition:C.END,panelSize:"small"},D=function(e){(0,d.default)(l,e);var t=N(l);function l(e){var n;return(0,o.default)(this,l),(n=t.call(this,e)).setPanelNode=n.setPanelNode.bind((0,r.default)(n)),n.mainNode=f.default.createRef(),n.setLastClicked=n.setLastClicked.bind((0,r.default)(n)),n.setDisclosingNode=n.setDisclosingNode.bind((0,r.default)(n)),n.mainAriaDescribedByID="detail-panel-warning-".concat((0,g.v4)()),n}return(0,s.default)(l,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,l=e.isFullscreen,n=e.isOpen,o=e.fill,s=e.mainAriaLabel,r=e.mainContent,d=e.panelAriaLabel,u=e.panelContent,c=e.panelBehavior,p=e.panelPosition,_=e.panelSize,h=(e.setSlidePanelRef,(0,i.default)(e,y)),P=this.context,g=(0,m.default)(S("slide-panel",{"is-open":n},{"is-fullscreen":l},{fill:o},P.className),h.className),b=f.default.createElement("div",{className:S(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":n?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(v.default,{text:d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),u),N=f.default.createElement("div",{className:S("main"),key:"main",tabIndex:"-1","aria-label":s,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":n&&l?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},f.default.createElement(v.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),r),k=p===C.START?f.default.createElement(f.default.Fragment,null,b,N):f.default.createElement(f.default.Fragment,null,N,b);return f.default.createElement("div",(0,a.default)({},h,{className:g,"data-slide-panel-panel-behavior":c,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":_}),k)}}]),l}(f.default.Component);D.propTypes=k,D.defaultProps=O,D.contextType=h.default;var R=(0,P.injectIntl)(D);t.default=R},69967:function(e,t,l){l.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},1034:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);