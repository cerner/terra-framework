"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[52147],{52147:function(e,l,t){var n=t(24994),a=t(73738);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=n(t(96540)),u=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var t=d(l);if(t&&t.has(e))return t.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var r=i?Object.getOwnPropertyDescriptor(e,u):null;r&&(r.get||r.set)?Object.defineProperty(n,u,r):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(t(81489)),r=n(t(38412)),o=n(t(89183));function d(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:l})(e)}l.default=function(){return i.default.createElement("div",null,i.default.createElement(u.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(o.default,null),panelBehavior:"overlay",panelPosition:u.SlidePanelPositions.START,panelSize:"small",isOpen:!0}),i.default.createElement(u.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(o.default,null),panelBehavior:"overlay",panelPosition:u.SlidePanelPositions.END,panelSize:"small",isOpen:!0}))}},38412:function(e,l,t){var n=t(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(96540));l.default=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Main Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))}},89183:function(e,l,t){var n=t(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=n(t(96540));l.default=function(){return a.default.createElement("div",null,a.default.createElement("h3",null,"Panel Content"),a.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),a.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),a.default.createElement("ul",null,a.default.createElement("li",null,"Item 1"),a.default.createElement("li",null,"Item 2"),a.default.createElement("li",null,"Item 3"),a.default.createElement("li",null,"Item 4"),a.default.createElement("li",null,"Item 5"),a.default.createElement("li",null,"Item 6"),a.default.createElement("li",null,"Item 7"),a.default.createElement("li",null,"Item 8"),a.default.createElement("li",null,"Item 9"),a.default.createElement("li",null,"Item 10"),a.default.createElement("li",null,"Item 11"),a.default.createElement("li",null,"Item 12"),a.default.createElement("li",null,"Item 13"),a.default.createElement("li",null,"Item 14"),a.default.createElement("li",null,"Item 15")))}},81489:function(e,l,t){var n=t(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.SlidePanelPositions=void 0;var a=n(t(94634)),i=n(t(91847)),u=n(t(17383)),r=n(t(34579)),o=n(t(28452)),d=n(t(63072)),s=n(t(29511)),f=n(t(96540)),m=n(t(5556)),c=n(t(46942)),p=n(t(67967)),v=n(t(23695)),E=n(t(16524)),_=t(8604),h=t(68414),P=n(t(79621)),b=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function I(e,l,t){return l=(0,d.default)(l),(0,o.default)(e,g()?Reflect.construct(l,t||[],(0,d.default)(e).constructor):l.apply(e,t))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var y=p.default.bind(P.default),N=l.SlidePanelPositions={START:"start",END:"end"},S={panelAriaLabel:m.default.string,mainAriaLabel:m.default.string,mainContent:m.default.node,panelContent:m.default.node,panelBehavior:m.default.oneOf(["overlay","squish"]),panelPosition:m.default.oneOf(["start","end"]),panelSize:m.default.oneOf(["small","large"]),isFullscreen:m.default.bool,isOpen:m.default.bool,fill:m.default.bool,setSlidePanelRef:m.default.func,intl:m.default.shape({formatMessage:m.default.func,locale:m.default.string})},O={panelBehavior:"overlay",panelPosition:N.END,panelSize:"small"},C=function(e){function l(e){var t;return(0,u.default)(this,l),(t=I(this,l,[e])).setPanelNode=t.setPanelNode.bind(t),t.mainNode=f.default.createRef(),t.setDisclosingNode=t.setDisclosingNode.bind(t),t.mainAriaDescribedByID="detail-panel-warning-".concat((0,h.v4)()),t}return(0,s.default)(l,e),(0,r.default)(l,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(document.activeElement),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var l,t;if(null!==(l=this.disclosingNode)&&void 0!==l&&l.focus)return void this.disclosingNode.focus();null!==(t=this.mainNode)&&void 0!==t&&t.current?this.mainNode.current.focus():document.body.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setDisclosingNode",value:function(e){e&&(this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,l=e.intl,t=e.isFullscreen,n=e.isOpen,u=e.fill,r=e.mainAriaLabel,o=e.mainContent,d=e.panelAriaLabel,s=e.panelContent,m=e.panelBehavior,p=e.panelPosition,v=e.panelSize,_=(e.setSlidePanelRef,(0,i.default)(e,b)),h=this.context,P=(0,c.default)(y("slide-panel",{"is-open":n},{"is-fullscreen":t},{fill:u},h.className),_.className),I=f.default.createElement("div",{className:y(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":n?"false":"true",role:"region",ref:this.setPanelNode},f.default.createElement(E.default,{text:d||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),s),g=f.default.createElement("div",{className:y("main"),key:"main",tabIndex:"-1","aria-label":r,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":n&&t?"true":"false",ref:this.mainNode,role:"main"},f.default.createElement(E.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:l.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),o),S=p===N.START?f.default.createElement(f.default.Fragment,null,I,o&&g):f.default.createElement(f.default.Fragment,null,o&&g,I);return f.default.createElement("div",(0,a.default)({},_,{className:P,"data-slide-panel-panel-behavior":m,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":v}),S)}}])}(f.default.Component);C.propTypes=S,C.defaultProps=O,C.contextType=v.default;l.default=(0,_.injectIntl)(C)},79621:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);