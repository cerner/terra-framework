"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[2350],{2350:function(e,t,l){var n=l(24994),a=l(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(l(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=p(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}(l(96540)),r=n(l(67967)),d=n(l(23986)),s=n(l(81489)),u=n(l(84782)),c=n(l(53665)),f=n(l(17154));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(p=function(e){return e?l:t})(e)}var m=r.default.bind(f.default);t.default=function(){var e=(0,o.useState)(!1),t=(0,i.default)(e,2),l=t[0],n=t[1],a=function(){n(!l)};return(0,o.useEffect)((function(){document.getElementById("test-p-click").onclick=a})),o.default.createElement("div",{className:m("content-wrapper-toggle")},o.default.createElement(s.default,{id:"test-slide",mainContent:o.default.createElement("div",{className:m("main-content")},o.default.createElement("button",{type:"button",id:"test-toggle",className:m("button"),onClick:a},"Toggle",o.default.createElement(c.default,null)),o.default.createElement(d.default,{icon:o.default.createElement(u.default,null),text:"Terra Button toggle",onClick:a}),o.default.createElement("p",{id:"test-p-click",className:m("p-clickable")},"Paragraph Toggle"),o.default.createElement("svg",{id:"test-click-svg",width:50,height:50,xmlns:"http://www.w3.org/2000/svg",onClick:a,className:m("circle-svg")},o.default.createElement("circle",{cx:"50",cy:"45",r:"25",stroke:"black",strokeWidth:"3",fill:"#008a00"})),o.default.createElement("p",null,"Circle SVG Toggle")),panelContent:o.default.createElement("div",{id:"panel-content",className:m("panel-content")},o.default.createElement("button",{id:"focus-button",type:"button",className:m("button"),onClick:a},"Close panel")),panelAriaLabel:"Panel content area",mainAriaLabel:"Main content area",panelSize:"small",panelBehavior:"overlay",isOpen:l,fill:!0}))}},81489:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=n(l(94634)),i=n(l(91847)),o=n(l(17383)),r=n(l(34579)),d=n(l(28452)),s=n(l(63072)),u=n(l(29511)),c=n(l(96540)),f=n(l(5556)),p=n(l(46942)),m=n(l(67967)),_=n(l(23695)),g=n(l(16524)),v=l(8604),b=l(68414),h=n(l(79621)),P=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function N(e,t,l){return t=(0,s.default)(t),(0,d.default)(e,y()?Reflect.construct(t,l||[],(0,s.default)(e).constructor):t.apply(e,l))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var S=m.default.bind(h.default),k=t.SlidePanelPositions={START:"start",END:"end"},C={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool,setSlidePanelRef:f.default.func,intl:f.default.shape({formatMessage:f.default.func,locale:f.default.string})},E={panelBehavior:"overlay",panelPosition:k.END,panelSize:"small"},w=function(e){function t(e){var l;return(0,o.default)(this,t),(l=N(this,t,[e])).setPanelNode=l.setPanelNode.bind(l),l.mainNode=c.default.createRef(),l.setDisclosingNode=l.setDisclosingNode.bind(l),l.mainAriaDescribedByID="detail-panel-warning-".concat((0,b.v4)()),l}return(0,u.default)(t,e),(0,r.default)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(document.activeElement),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t,l;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return void this.disclosingNode.focus();null!==(l=this.mainNode)&&void 0!==l&&l.current?this.mainNode.current.focus():document.body.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setDisclosingNode",value:function(e){e&&(this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,l=e.isFullscreen,n=e.isOpen,o=e.fill,r=e.mainAriaLabel,d=e.mainContent,s=e.panelAriaLabel,u=e.panelContent,f=e.panelBehavior,m=e.panelPosition,_=e.panelSize,v=(e.setSlidePanelRef,(0,i.default)(e,P)),b=this.context,h=(0,p.default)(S("slide-panel",{"is-open":n},{"is-fullscreen":l},{fill:o},b.className),v.className),N=c.default.createElement("div",{className:S(["panel"]),key:"panel",tabIndex:"-1","aria-label":s||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":n?"false":"true",role:"region",ref:this.setPanelNode},c.default.createElement(g.default,{text:s||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),u),y=c.default.createElement("div",{className:S("main"),key:"main",tabIndex:"-1","aria-label":r,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":n&&l?"true":"false",ref:this.mainNode,role:"main"},c.default.createElement(g.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),d),C=m===k.START?c.default.createElement(c.default.Fragment,null,N,d&&y):c.default.createElement(c.default.Fragment,null,d&&y,N);return c.default.createElement("div",(0,a.default)({},v,{className:h,"data-slide-panel-panel-behavior":f,"data-slide-panel-panel-position":m,"data-slide-panel-panel-size":_}),C)}}])}(c.default.Component);w.propTypes=C,w.defaultProps=E,w.contextType=_.default;t.default=(0,v.injectIntl)(w)},17154:function(e,t,l){l.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},79621:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);