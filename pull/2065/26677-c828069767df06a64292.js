"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[26677],{26677:function(e,l,t){var a=t(24994),n=t(73738);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var i=a(t(96540)),u=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var t=o(l);if(t&&t.has(e))return t.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var r=i?Object.getOwnPropertyDescriptor(e,u):null;r&&(r.get||r.set)?Object.defineProperty(a,u,r):a[u]=e[u]}return a.default=e,t&&t.set(e,a),a}(t(81489)),r=a(t(38412)),d=a(t(89183));function o(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(o=function(e){return e?t:l})(e)}l.default=function(){return i.default.createElement(u.default,{mainContent:i.default.createElement(r.default,null),panelContent:i.default.createElement(d.default,null),panelBehavior:"overlay",panelPosition:u.SlidePanelPositions.END,panelSize:"small",isOpen:!0,isFullscreen:!0})}},38412:function(e,l,t){var a=t(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=a(t(96540));l.default=function(){return n.default.createElement("div",null,n.default.createElement("h3",null,"Main Content"),n.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),n.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),n.default.createElement("ul",null,n.default.createElement("li",null,"Item 1"),n.default.createElement("li",null,"Item 2"),n.default.createElement("li",null,"Item 3"),n.default.createElement("li",null,"Item 4"),n.default.createElement("li",null,"Item 5"),n.default.createElement("li",null,"Item 6"),n.default.createElement("li",null,"Item 7"),n.default.createElement("li",null,"Item 8"),n.default.createElement("li",null,"Item 9"),n.default.createElement("li",null,"Item 10"),n.default.createElement("li",null,"Item 11"),n.default.createElement("li",null,"Item 12"),n.default.createElement("li",null,"Item 13"),n.default.createElement("li",null,"Item 14"),n.default.createElement("li",null,"Item 15")))}},89183:function(e,l,t){var a=t(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var n=a(t(96540));l.default=function(){return n.default.createElement("div",null,n.default.createElement("h3",null,"Panel Content"),n.default.createElement("p",null,"Lorem ipsum dolor sit amet, mea te odio ludus adipiscing. Cu oporteat temporibus nam, aperiam adipisci mel et, mei no oportere salutatus. Iudico lucilius ei pri. Eleifend philosophia et ius."),n.default.createElement("p",null,"Id elit congue copiosae eam, elitr laboramus mediocritatem nam in, decore propriae et usu. An vix insolens dignissim, novum gloriatur delicatissimi mei ne, ne ancillae tincidunt nec. Iusto expetenda scriptorem mei cu, ne per prima nihil utinam. Cibo ocurreret no nam, nec euismod vivendum te."),n.default.createElement("ul",null,n.default.createElement("li",null,"Item 1"),n.default.createElement("li",null,"Item 2"),n.default.createElement("li",null,"Item 3"),n.default.createElement("li",null,"Item 4"),n.default.createElement("li",null,"Item 5"),n.default.createElement("li",null,"Item 6"),n.default.createElement("li",null,"Item 7"),n.default.createElement("li",null,"Item 8"),n.default.createElement("li",null,"Item 9"),n.default.createElement("li",null,"Item 10"),n.default.createElement("li",null,"Item 11"),n.default.createElement("li",null,"Item 12"),n.default.createElement("li",null,"Item 13"),n.default.createElement("li",null,"Item 14"),n.default.createElement("li",null,"Item 15")))}},81489:function(e,l,t){var a=t(24994);Object.defineProperty(l,"__esModule",{value:!0}),l.default=l.SlidePanelPositions=void 0;var n=a(t(94634)),i=a(t(91847)),u=a(t(17383)),r=a(t(34579)),d=a(t(28452)),o=a(t(63072)),s=a(t(12475)),f=a(t(29511)),c=a(t(96540)),m=a(t(5556)),p=a(t(46942)),v=a(t(67967)),h=a(t(23695)),E=a(t(16524)),_=t(8604),b=t(68414),P=a(t(2002)),I=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function g(e,l,t){return l=(0,o.default)(l),(0,d.default)(e,y()?Reflect.construct(l,t||[],(0,o.default)(e).constructor):l.apply(e,t))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var N=v.default.bind(P.default),C=l.SlidePanelPositions={START:"start",END:"end"},O={panelAriaLabel:m.default.string,mainAriaLabel:m.default.string,mainContent:m.default.node,panelContent:m.default.node,panelBehavior:m.default.oneOf(["overlay","squish"]),panelPosition:m.default.oneOf(["start","end"]),panelSize:m.default.oneOf(["small","large"]),isFullscreen:m.default.bool,isOpen:m.default.bool,fill:m.default.bool,setSlidePanelRef:m.default.func,intl:m.default.shape({formatMessage:m.default.func,locale:m.default.string})},k={panelBehavior:"overlay",panelPosition:C.END,panelSize:"small"},S=function(e){function l(e){var t;return(0,u.default)(this,l),(t=g(this,l,[e])).setPanelNode=t.setPanelNode.bind((0,s.default)(t)),t.mainNode=c.default.createRef(),t.setLastClicked=t.setLastClicked.bind((0,s.default)(t)),t.setDisclosingNode=t.setDisclosingNode.bind((0,s.default)(t)),t.mainAriaDescribedByID="detail-panel-warning-".concat((0,b.v4)()),t}return(0,f.default)(l,e),(0,r.default)(l,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var l;if(null!==(l=this.disclosingNode)&&void 0!==l&&l.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,l=e.intl,t=e.isFullscreen,a=e.isOpen,u=e.fill,r=e.mainAriaLabel,d=e.mainContent,o=e.panelAriaLabel,s=e.panelContent,f=e.panelBehavior,m=e.panelPosition,v=e.panelSize,h=(e.setSlidePanelRef,(0,i.default)(e,I)),_=this.context,b=(0,p.default)(N("slide-panel",{"is-open":a},{"is-fullscreen":t},{fill:u},_.className),h.className),P=c.default.createElement("div",{className:N(["panel"]),key:"panel",tabIndex:"-1","aria-label":o||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":a?"false":"true",role:"region",ref:this.setPanelNode},c.default.createElement(E.default,{text:o||l.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),s),g=c.default.createElement("div",{className:N("main"),key:"main",tabIndex:"-1","aria-label":r,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":a&&t?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},c.default.createElement(E.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:l.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),d),y=m===C.START?c.default.createElement(c.default.Fragment,null,P,g):c.default.createElement(c.default.Fragment,null,g,P);return c.default.createElement("div",(0,n.default)({},h,{className:b,"data-slide-panel-panel-behavior":f,"data-slide-panel-panel-position":m,"data-slide-panel-panel-size":v}),y)}}]),l}(c.default.Component);S.propTypes=O,S.defaultProps=k,S.contextType=h.default;l.default=(0,_.injectIntl)(S)},2002:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);