"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[26677],{26677:function(e,l,t){var a=t(24994),n=t(73738);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=a(t(96540)),u=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var t=d(l);if(t&&t.has(e))return t.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var r=i?Object.getOwnPropertyDescriptor(e,u):null;r&&(r.get||r.set)?Object.defineProperty(a,u,r):a[u]=e[u]}return a.default=e,t&&t.set(e,a),a}(t(81489)),r=a(t(38412)),o=a(t(89183));function d(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:l})(e)}l.default=function(){return i.default.createElement(u.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(o.default,null),panelBehavior:"overlay",panelPosition:u.SlidePanelPositions.END,panelSize:"small",isOpen:!0,isFullscreen:!0})}},38412:function(e,l,t){var a=t(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=a(t(96540));l.default=function(){return n.default.createElement("div",null,n.default.createElement("h3",null,"Main Content"),n.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),n.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),n.default.createElement("ul",null,n.default.createElement("li",null,"Item 1"),n.default.createElement("li",null,"Item 2"),n.default.createElement("li",null,"Item 3"),n.default.createElement("li",null,"Item 4"),n.default.createElement("li",null,"Item 5"),n.default.createElement("li",null,"Item 6"),n.default.createElement("li",null,"Item 7"),n.default.createElement("li",null,"Item 8"),n.default.createElement("li",null,"Item 9"),n.default.createElement("li",null,"Item 10"),n.default.createElement("li",null,"Item 11"),n.default.createElement("li",null,"Item 12"),n.default.createElement("li",null,"Item 13"),n.default.createElement("li",null,"Item 14"),n.default.createElement("li",null,"Item 15")))}},89183:function(e,l,t){var a=t(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=a(t(96540));l.default=function(){return n.default.createElement("div",null,n.default.createElement("h3",null,"Panel Content"),n.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),n.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),n.default.createElement("ul",null,n.default.createElement("li",null,"Item 1"),n.default.createElement("li",null,"Item 2"),n.default.createElement("li",null,"Item 3"),n.default.createElement("li",null,"Item 4"),n.default.createElement("li",null,"Item 5"),n.default.createElement("li",null,"Item 6"),n.default.createElement("li",null,"Item 7"),n.default.createElement("li",null,"Item 8"),n.default.createElement("li",null,"Item 9"),n.default.createElement("li",null,"Item 10"),n.default.createElement("li",null,"Item 11"),n.default.createElement("li",null,"Item 12"),n.default.createElement("li",null,"Item 13"),n.default.createElement("li",null,"Item 14"),n.default.createElement("li",null,"Item 15")))}},81489:function(e,l,t){var a=t(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.SlidePanelPositions=void 0;var n=a(t(94634)),i=a(t(91847)),u=a(t(17383)),r=a(t(34579)),o=a(t(28452)),d=a(t(63072)),s=a(t(12475)),f=a(t(29511)),m=a(t(96540)),c=a(t(5556)),p=a(t(46942)),v=a(t(67967)),E=a(t(23695)),_=a(t(16524)),h=t(8604),b=t(68414),P=a(t(79621)),I=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function g(e,l,t){return l=(0,d.default)(l),(0,o.default)(e,y()?Reflect.construct(l,t||[],(0,d.default)(e).constructor):l.apply(e,t))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var N=v.default.bind(P.default),O=l.SlidePanelPositions={START:"start",END:"end"},S={panelAriaLabel:c.default.string,mainAriaLabel:c.default.string,mainContent:c.default.node,panelContent:c.default.node,panelBehavior:c.default.oneOf(["overlay","squish"]),panelPosition:c.default.oneOf(["start","end"]),panelSize:c.default.oneOf(["small","large"]),isFullscreen:c.default.bool,isOpen:c.default.bool,fill:c.default.bool,setSlidePanelRef:c.default.func,intl:c.default.shape({formatMessage:c.default.func,locale:c.default.string})},C={panelBehavior:"overlay",panelPosition:O.END,panelSize:"small"},D=function(e){function l(e){var t;return(0,u.default)(this,l),(t=g(this,l,[e])).setPanelNode=t.setPanelNode.bind((0,s.default)(t)),t.mainNode=m.default.createRef(),t.setDisclosingNode=t.setDisclosingNode.bind((0,s.default)(t)),t.mainAriaDescribedByID="detail-panel-warning-".concat((0,b.v4)()),t}return(0,f.default)(l,e),(0,r.default)(l,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(document.activeElement),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var l,t;if(null!==(l=this.disclosingNode)&&void 0!==l&&l.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();null!==(t=this.mainNode)&&void 0!==t&&t.current?this.mainNode.current.focus():document.body.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,l=e.intl,t=e.isFullscreen,a=e.isOpen,u=e.fill,r=e.mainAriaLabel,o=e.mainContent,d=e.panelAriaLabel,s=e.panelContent,f=e.panelBehavior,c=e.panelPosition,v=e.panelSize,E=(e.setSlidePanelRef,(0,i.default)(e,I)),h=this.context,b=(0,p.default)(N("slide-panel",{"is-open":a},{"is-fullscreen":t},{fill:u},h.className),E.className),P=m.default.createElement("div",{className:N(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":a?"false":"true",role:"region",ref:this.setPanelNode},m.default.createElement(_.default,{text:d||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),s),g=m.default.createElement("div",{className:N("main"),key:"main",tabIndex:"-1","aria-label":r,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":a&&t?"true":"false",ref:this.mainNode,role:"main"},m.default.createElement(_.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:l.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),o),y=c===O.START?m.default.createElement(m.default.Fragment,null,P,o&&g):m.default.createElement(m.default.Fragment,null,o&&g,P);return m.default.createElement("div",(0,n.default)({},E,{className:b,"data-slide-panel-panel-behavior":f,"data-slide-panel-panel-position":c,"data-slide-panel-panel-size":v}),y)}}]),l}(m.default.Component);D.propTypes=S,D.defaultProps=C,D.contextType=E.default;l.default=(0,h.injectIntl)(D)},79621:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);