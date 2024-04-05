"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[43713],{43713:function(e,t,l){var n=l(24994),a=l(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(l(85715)),o=c(l(96540)),r=c(l(81489)),u=n(l(67967)),d=n(l(70642));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(s=function(e){return e?l:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var l=s(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&{}.hasOwnProperty.call(e,o)){var r=i?Object.getOwnPropertyDescriptor(e,o):null;r&&(r.get||r.set)?Object.defineProperty(n,o,r):n[o]=e[o]}return n.default=e,l&&l.set(e,n),n}var f=u.default.bind(d.default),m=function(e){return o.default.createElement("div",null,o.default.createElement("header",{className:f("header-content")},o.default.createElement("h3",{className:f("heading")},"Panel Content"),o.default.createElement("button",{id:"panelToggleBtn",type:"button",onClick:e,className:f("extension-button")},"Toggle Panel")),o.default.createElement("div",{className:f("content-wrapper")},o.default.createElement("p",null,"This is the panel content area of the slide panel."),o.default.createElement("p",null,"Focus is moved to the toggle button in the main container when the panel is closed via the componentDidUpdate lifecycle hook in ",o.default.createElement("a",{href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx"},"the example code"),"."),o.default.createElement("ul",null,o.default.createElement("li",null,"Item 1"),o.default.createElement("li",null,"Item 2"),o.default.createElement("li",null,"Item 3"),o.default.createElement("li",null,"Item 4"),o.default.createElement("li",null,"Item 5"),o.default.createElement("li",null,"Item 6"),o.default.createElement("li",null,"Item 7"),o.default.createElement("li",null,"Item 8"),o.default.createElement("li",null,"Item 9"),o.default.createElement("li",null,"Item 10"),o.default.createElement("li",null,"Item 11"),o.default.createElement("li",null,"Item 12"),o.default.createElement("li",null,"Item 13"),o.default.createElement("li",null,"Item 14"),o.default.createElement("li",null,"Item 15"))))};t.default=function(){var e,t=(0,o.useState)(!1),l=(0,i.default)(t,2),n=l[0],a=l[1],u=function(){a(!n)};return o.default.createElement("div",{className:f("example-container")},(e=u,o.default.createElement("div",null,o.default.createElement("header",{className:f("header-content")},o.default.createElement("h3",null,"Main Content"),o.default.createElement("button",{id:"mainToggleBtn",type:"button",onClick:e,className:f("custom-button")},"Toggle Panel 1"),o.default.createElement("button",{id:"mainToggleBtnWithWrongRole",type:"button",role:"presentation",onClick:e,className:f("extension-button")},"Toggle Panel 2"),o.default.createElement("p",{id:"mainToggleParagraph",onClick:e,className:f("extension-button")},"Toggle Panel 3")),o.default.createElement("div",{className:f("content-wrapper")},o.default.createElement("p",null,"This is the main content area of the slide panel. The overall height of the SlidePanel is determined by the intrinsic height of the content in this container."),o.default.createElement("p",null,"Focus is moved to the toggle button in the panel container when the panel is opened via the componentDidUpdate lifecycle hook in ",o.default.createElement("a",{href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-slide-panel/src/terra-dev-site/doc/example/DefaultSlidePanel.jsx"},"the example code"),"."),o.default.createElement("ul",null,o.default.createElement("li",null,"Item 1"),o.default.createElement("li",null,"Item 2"),o.default.createElement("li",null,"Item 3"),o.default.createElement("li",null,"Item 4"),o.default.createElement("li",null,"Item 5"),o.default.createElement("li",null,"Item 6"),o.default.createElement("li",null,"Item 7"),o.default.createElement("li",null,"Item 8"))))),o.default.createElement("div",{className:n?f("panel-container"):null},o.default.createElement(r.default,{id:"test-slide",panelContent:m(u),panelAriaLabel:"Panel content area",panelSize:"small",panelBehavior:"overlay",panelPosition:r.SlidePanelPositions.END,isOpen:n})))}},81489:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var a=n(l(94634)),i=n(l(91847)),o=n(l(17383)),r=n(l(34579)),u=n(l(28452)),d=n(l(63072)),s=n(l(29511)),c=n(l(96540)),f=n(l(5556)),m=n(l(46942)),p=n(l(67967)),h=n(l(23695)),_=n(l(16524)),b=l(8604),v=l(68414),E=n(l(79621)),P=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function g(e,t,l){return t=(0,d.default)(t),(0,u.default)(e,N()?Reflect.construct(t,l||[],(0,d.default)(e).constructor):t.apply(e,l))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}var y=p.default.bind(E.default),S=t.SlidePanelPositions={START:"start",END:"end"},I={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool,setSlidePanelRef:f.default.func,intl:f.default.shape({formatMessage:f.default.func,locale:f.default.string})},k={panelBehavior:"overlay",panelPosition:S.END,panelSize:"small"},O=function(e){function t(e){var l;return(0,o.default)(this,t),(l=g(this,t,[e])).setPanelNode=l.setPanelNode.bind(l),l.mainNode=c.default.createRef(),l.setDisclosingNode=l.setDisclosingNode.bind(l),l.mainAriaDescribedByID="detail-panel-warning-".concat((0,v.v4)()),l}return(0,s.default)(t,e),(0,r.default)(t,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(document.activeElement),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t,l;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return void this.disclosingNode.focus();null!==(l=this.mainNode)&&void 0!==l&&l.current?this.mainNode.current.focus():document.body.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setDisclosingNode",value:function(e){e&&(this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,l=e.isFullscreen,n=e.isOpen,o=e.fill,r=e.mainAriaLabel,u=e.mainContent,d=e.panelAriaLabel,s=e.panelContent,f=e.panelBehavior,p=e.panelPosition,h=e.panelSize,b=(e.setSlidePanelRef,(0,i.default)(e,P)),v=this.context,E=(0,m.default)(y("slide-panel",{"is-open":n},{"is-fullscreen":l},{fill:o},v.className),b.className),g=c.default.createElement("div",{className:y(["panel"]),key:"panel",tabIndex:"-1","aria-label":d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":n?"false":"true",role:"region",ref:this.setPanelNode},c.default.createElement(_.default,{text:d||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),s),N=c.default.createElement("div",{className:y("main"),key:"main",tabIndex:"-1","aria-label":r,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":n&&l?"true":"false",ref:this.mainNode,role:"main"},c.default.createElement(_.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),u),I=p===S.START?c.default.createElement(c.default.Fragment,null,g,u&&N):c.default.createElement(c.default.Fragment,null,u&&N,g);return c.default.createElement("div",(0,a.default)({},b,{className:E,"data-slide-panel-panel-behavior":f,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":h}),I)}}])}(c.default.Component);O.propTypes=I,O.defaultProps=k,O.contextType=h.default;t.default=(0,b.injectIntl)(O)},70642:function(e,t,l){l.r(t),t.default={"example-container":"SlidePanelNoMainContent-test-module__example-container___F67kJ","panel-container":"SlidePanelNoMainContent-test-module__panel-container___xe7-3","header-content":"SlidePanelNoMainContent-test-module__header-content___+nF+f","content-wrapper":"SlidePanelNoMainContent-test-module__content-wrapper___6Zj4c","custom-button":"SlidePanelNoMainContent-test-module__custom-button___wmmnr"}},79621:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___NdNQF","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___aBPYu","slide-panel":"SlidePanel-module__slide-panel___5vKEK",main:"SlidePanel-module__main___Jq40y",panel:"SlidePanel-module__panel___N9gHx","is-open":"SlidePanel-module__is-open___SU3q3","is-fullscreen":"SlidePanel-module__is-fullscreen___0BQTN",fill:"SlidePanel-module__fill___vHC0f"}}}]);