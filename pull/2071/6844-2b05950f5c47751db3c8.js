"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[6844],{6844:function(e,l,a){var t=a(24994),n=a(73738);Object.defineProperty(l,"__esModule",{value:!0}),l.disclosureType=l.default=void 0;var i=t(a(94634)),s=t(a(91847)),r=t(a(17383)),o=t(a(34579)),d=t(a(28452)),u=t(a(63072)),f=t(a(12475)),c=t(a(29511)),p=t(a(43693)),m=t(a(96540)),h=t(a(5556)),v=t(a(82941)),b=t(a(54495)),P=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=S(l);if(a&&a.has(e))return a.get(e);var t={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var r=i?Object.getOwnPropertyDescriptor(e,s):null;r&&(r.get||r.set)?Object.defineProperty(t,s,r):t[s]=e[s]}return t.default=e,a&&a.set(e,t),t}(a(12643)),_=t(a(11191)),y=t(a(81489)),g=["children","level","disclosureAccessory","withDisclosureContainer","mainAriaLabel","panelAriaLabel"];function S(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,a=new WeakMap;return(S=function(e){return e?a:l})(e)}function C(e,l,a){return l=(0,u.default)(l),(0,d.default)(e,D()?Reflect.construct(l,a||[],(0,u.default)(e).constructor):l.apply(e,a))}function D(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(D=function(){return!!e})()}var N=l.disclosureType="panel",A={children:h.default.node,level:h.default.oneOf([1,2,3,4,5,6]),panelBehavior:h.default.oneOf(["overlay","squish"]),disclosureAccessory:h.default.element,withDisclosureContainer:h.default.func,panelAriaLabel:h.default.string,mainAriaLabel:h.default.string},k=(0,p.default)((0,p.default)((0,p.default)((0,p.default)((0,p.default)({},P.availableDisclosureSizes.TINY,"small"),P.availableDisclosureSizes.SMALL,"small"),P.availableDisclosureSizes.MEDIUM,"large"),P.availableDisclosureSizes.LARGE,"large"),P.availableDisclosureSizes.HUGE,"large"),O=function(e){function l(e){var a;return(0,r.default)(this,l),(a=C(this,l,[e])).renderSlidePanel=a.renderSlidePanel.bind((0,f.default)(a)),a.setSlidePanel=a.setSlidePanel.bind((0,f.default)(a)),a}return(0,c.default)(l,e),(0,o.default)(l,[{key:"setSlidePanel",value:function(e){this.slidePanel=e}},{key:"renderSlidePanel",value:function(e){var l,a,t,n,r=this.props,o=(r.children,r.level),d=r.disclosureAccessory,u=(r.withDisclosureContainer,r.mainAriaLabel),f=r.panelAriaLabel,c=(0,s.default)(r,g);(e.disclosure.size===P.availableDisclosureSizes.FULLSCREEN||e.disclosure.isMaximized)&&(a=!0),t=e.disclosure.dimensions?(n=e.disclosure.dimensions).width>480||n.height>600?"large":"small":k[e.disclosure.size];var p=null!=e&&null!==(l=e.disclosure)&&void 0!==l&&null!==(l=l.typeConfig)&&void 0!==l&&l.panelBehavior?e.disclosure.typeConfig.panelBehavior:c.panelBehavior,h=e.disclosureComponentKeys[e.disclosureComponentKeys.length-1],S=(e.disclosureComponentData[h]||{}).headerAdapterData;return m.default.createElement(y.default,(0,i.default)({},c,{fill:!0,panelBehavior:p,isFullscreen:a,panelSize:t,isOpen:e.disclosure.isOpen,setSlidePanelRef:this.setSlidePanel,panelContent:m.default.createElement(b.default,{fill:!0,header:m.default.createElement(m.default.Fragment,null,S?m.default.createElement(v.default,{text:S.title,onClose:e.closeDisclosure,level:o,onBack:e.disclosureComponentKeys.length>1?e.dismissPresentedComponent:void 0},S.collapsibleMenuView):void 0,d)},m.default.createElement(_.default,{items:e.disclosure.components,isAnimated:!0,focusRef:this.slidePanel,slideAriaLabel:(null==S?void 0:S.title)||f})),panelAriaLabel:(null==S?void 0:S.title)||f,mainAriaLabel:u,mainContent:e.children.components}))}},{key:"render",value:function(){var e=this.props,l=e.withDisclosureContainer,a=e.children;return m.default.createElement(P.default,{withDisclosureContainer:l,supportedDisclosureTypes:[N],render:this.renderSlidePanel},a)}}]),l}(m.default.Component);O.propTypes=A,O.defaultProps={level:2,panelBehavior:"overlay"};l.default=O},81489:function(e,l,a){var t=a(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.SlidePanelPositions=void 0;var n=t(a(94634)),i=t(a(91847)),s=t(a(17383)),r=t(a(34579)),o=t(a(28452)),d=t(a(63072)),u=t(a(12475)),f=t(a(29511)),c=t(a(96540)),p=t(a(5556)),m=t(a(46942)),h=t(a(67967)),v=t(a(23695)),b=t(a(16524)),P=a(8604),_=a(68414),y=t(a(79621)),g=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function S(e,l,a){return l=(0,d.default)(l),(0,o.default)(e,C()?Reflect.construct(l,a||[],(0,d.default)(e).constructor):l.apply(e,a))}function C(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(C=function(){return!!e})()}var D=h.default.bind(y.default),N=l.SlidePanelPositions={START:"start",END:"end"},A={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},k={panelBehavior:"overlay",panelPosition:N.END,panelSize:"small"},O=function(e){function l(e){var a;return(0,s.default)(this,l),(a=S(this,l,[e])).setPanelNode=a.setPanelNode.bind((0,u.default)(a)),a.mainNode=c.default.createRef(),a.setLastClicked=a.setLastClicked.bind((0,u.default)(a)),a.setDisclosingNode=a.setDisclosingNode.bind((0,u.default)(a)),a.mainAriaDescribedByID="detail-panel-warning-".concat((0,_.v4)()),a}return(0,f.default)(l,e),(0,r.default)(l,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var l;if(null!==(l=this.disclosingNode)&&void 0!==l&&l.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,l=e.intl,a=e.isFullscreen,t=e.isOpen,s=e.fill,r=e.mainAriaLabel,o=e.mainContent,d=e.panelAriaLabel,u=e.panelContent,f=e.panelBehavior,p=e.panelPosition,h=e.panelSize,v=(e.setSlidePanelRef,(0,i.default)(e,g)),P=this.context,_=(0,m.default)(D("slide-panel",{"is-open":t},{"is-fullscreen":a},{fill:s},P.className),v.className),y=c.default.createElement("div",{className:D(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":t?"false":"true",role:"region",ref:this.setPanelNode},c.default.createElement(b.default,{text:d||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),u),S=c.default.createElement("div",{className:D("main"),key:"main",tabIndex:"-1","aria-label":r,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":t&&a?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},c.default.createElement(b.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:l.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),o),C=p===N.START?c.default.createElement(c.default.Fragment,null,y,S):c.default.createElement(c.default.Fragment,null,S,y);return c.default.createElement("div",(0,n.default)({},v,{className:_,"data-slide-panel-panel-behavior":f,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":h}),C)}}]),l}(c.default.Component);O.propTypes=A,O.defaultProps=k,O.contextType=v.default;l.default=(0,P.injectIntl)(O)},79621:function(e,l,a){a.r(l),l.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);