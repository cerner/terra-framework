"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[69973],{69973:function(e,t,l){var n=l(24994),a=l(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(l(96540)),o=n(l(67967)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=c(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}(l(81489)),r=n(l(38412)),d=n(l(89183)),s=n(l(17154));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(c=function(e){return e?l:t})(e)}var m=o.default.bind(s.default);t.default=function(){return i.default.createElement("div",{className:m("content-wrapper")},i.default.createElement(u.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(d.default,null),panelBehavior:"squish",panelPosition:u.SlidePanelPositions.END,panelSize:"small",isOpen:!0,fill:!0}))}},38412:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(96540));t.default=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Main Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))}},89183:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(96540));t.default=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Panel Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))}},81489:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=n(l(94634)),i=n(l(91847)),o=n(l(17383)),u=n(l(34579)),r=n(l(28452)),d=n(l(63072)),s=n(l(29511)),c=n(l(41132)),m=n(l(96540)),f=n(l(5556)),p=n(l(46942)),_=n(l(67967)),b=n(l(23695)),v=n(l(16524)),h=l(8604),E=l(68414),P=n(l(79621)),g=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function I(e,t,l){return t=(0,d.default)(t),(0,r.default)(e,y()?Reflect.construct(t,l||[],(0,d.default)(e).constructor):t.apply(e,l))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var S=_.default.bind(P.default),N=t.SlidePanelPositions={START:"start",END:"end"},C={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool,setSlidePanelRef:f.default.func,intl:f.default.shape({formatMessage:f.default.func,locale:f.default.string})},O={panelBehavior:"overlay",panelPosition:N.END,panelSize:"small"},x=function(e){function t(e){var l;return(0,o.default)(this,t),(l=I(this,t,[e])).setPanelNode=l.setPanelNode.bind(l),l.mainNode=m.default.createRef(),l.setDisclosingNode=l.setDisclosingNode.bind(l),l.mainAriaDescribedByID="detail-panel-warning-".concat((0,E.v4)()),l}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen){var t=function(e){for(var t=(0,c.default)(document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")&&!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)&&"hidden"!==window.getComputedStyle(e).visibility&&null===e.closest("[inert]")})),l=e;l.parentElement;){if(t.includes(l))return l;l=l.parentElement}}(document.activeElement);return this.setDisclosingNode(t),void this.panelNode.focus()}if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var l,n;if(null!==(l=this.disclosingNode)&&void 0!==l&&l.focus)return void this.disclosingNode.focus();null!==(n=this.mainNode)&&void 0!==n&&n.current?this.mainNode.current.focus():document.body.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setDisclosingNode",value:function(e){e&&(this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,l=e.isFullscreen,n=e.isOpen,o=e.fill,u=e.mainAriaLabel,r=e.mainContent,d=e.panelAriaLabel,s=e.panelContent,c=e.panelBehavior,f=e.panelPosition,_=e.panelSize,b=(e.setSlidePanelRef,(0,i.default)(e,g)),h=this.context,E=(0,p.default)(S("slide-panel",{"is-open":n},{"is-fullscreen":l},{fill:o},h.className),b.className),P=m.default.createElement("div",{className:S(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":n?"false":"true",role:"region",ref:this.setPanelNode},m.default.createElement(v.default,{text:d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),s),I=m.default.createElement("div",{className:S("main"),key:"main",tabIndex:"-1","aria-label":u,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":n&&l?"true":"false",ref:this.mainNode,role:"main"},m.default.createElement(v.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),r),y=f===N.START?m.default.createElement(m.default.Fragment,null,P,r&&I):m.default.createElement(m.default.Fragment,null,r&&I,P);return m.default.createElement("div",(0,a.default)({},b,{className:E,"data-slide-panel-panel-behavior":c,"data-slide-panel-panel-position":f,"data-slide-panel-panel-size":_}),y)}}])}(m.default.Component);x.propTypes=C,x.defaultProps=O,x.contextType=b.default;t.default=(0,h.injectIntl)(x)},17154:function(e,t,l){l.r(t),t.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___+5Bqw","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___4O5B9","main-content":"SlidePanelDocCommon-test-module__main-content___KgtfP","panel-content":"SlidePanelDocCommon-test-module__panel-content___mRK+i","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___eOcKz",button:"SlidePanelDocCommon-test-module__button___hxSzl","circle-svg":"SlidePanelDocCommon-test-module__circle-svg___BFboR","p-clickable":"SlidePanelDocCommon-test-module__p-clickable___yicz1"}},79621:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);