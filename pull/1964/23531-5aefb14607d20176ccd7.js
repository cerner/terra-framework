(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[23531],{23531:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(56690)),l=a(n(89728)),i=a(n(94993)),u=a(n(73808)),r=a(n(66115)),d=a(n(61655)),s=a(n(67294)),c=a(n(19845)),f=a(n(96667)),p=a(n(41643));function m(e,t,n){return t=(0,u.default)(t),(0,i.default)(e,_()?Reflect.construct(t,n||[],(0,u.default)(e).constructor):t.apply(e,n))}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}var h=c.default.bind(p.default),y=function(e){function t(e){var n;return(0,o.default)(this,t),(n=m(this,t,[e])).toggleMenu=n.toggleMenu.bind((0,r.default)(n)),n.state={isOpen:!1},n}return(0,d.default)(t,e),(0,l.default)(t,[{key:"toggleMenu",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){return s.default.createElement("div",{className:h("content-wrapper")},s.default.createElement(f.default,{panelContent:s.default.createElement("div",{className:h("panel-content")},s.default.createElement("button",{type:"button",id:"test-toggle-2",onClick:this.toggleMenu},"toggle")),panelBehavior:"overlay",size:"medium",isOpen:this.state.isOpen,isToggleEnabled:!0,isAnimated:!0,onToggle:function(){},toggleText:"toggle text"},s.default.createElement("div",{className:h("layout-slide-panel-content")},s.default.createElement("button",{type:"button",id:"test-toggle-1",onClick:this.toggleMenu},"toggle"))))}}]),t}(s.default.Component);t.default=y},96667:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(10434)),l=a(n(70215)),i=a(n(56690)),u=a(n(89728)),r=a(n(94993)),d=a(n(73808)),s=a(n(66115)),c=a(n(61655)),f=a(n(67294)),p=a(n(45697)),m=a(n(93967)),_=a(n(19845)),h=a(n(47341)),y=a(n(9220)),g=a(n(40693)),v=a(n(15059)),b=a(n(11686)),T=["isAnimated","isOpen","isToggleEnabled","children","panelBehavior","panelContent","size","onToggle","toggleText"];function E(e,t,n){return t=(0,d.default)(t),(0,r.default)(e,N()?Reflect.construct(t,n||[],(0,d.default)(e).constructor):t.apply(e,n))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}var P=_.default.bind(b.default),S={isAnimated:p.default.bool,isOpen:p.default.bool,isToggleEnabled:p.default.bool,children:p.default.element,panelBehavior:p.default.oneOf(["overlay","squish"]),panelContent:p.default.node,size:p.default.string.isRequired,onToggle:p.default.func,toggleText:p.default.string},O=function(e){function t(e){var n;return(0,i.default)(this,t),(n=E(this,t,[e])).setPanelNode=n.setPanelNode.bind((0,s.default)(n)),n.handleTransitionEnd=n.handleTransitionEnd.bind((0,s.default)(n)),n.preparePanelForTransition=n.preparePanelForTransition.bind((0,s.default)(n)),n.isHidden=!e.isOpen,n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.createElement("main"),this.panelNode&&this.panelNode.addEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(){this.lastIsOpen=this.props.isOpen}},{key:"componentWillUnmount",value:function(){this.panelNode&&this.panelNode.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"handleTransitionEnd",value:function(){!this.props.isOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","true"),this.isHidden=!0,document.querySelector("button[data-application-header-toggle]")?document.querySelector("button[data-application-header-toggle]").focus():(0,v.default)(document.querySelector("[data-terra-layout-main]"))[0]&&(0,v.default)(document.querySelector("[data-terra-layout-main]"))[0].focus())}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"preparePanelForTransition",value:function(){this.props.isOpen&&!this.lastIsOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","false"),this.isHidden=!1,(0,v.default)(this.panelNode)[0]&&(0,v.default)(this.panelNode)[0].focus())}},{key:"render",value:function(){var e=this.props,t=e.isAnimated,n=e.isOpen,a=(e.isToggleEnabled,e.children),i=e.panelBehavior,u=e.panelContent,r=e.size,d=e.onToggle,s=(e.toggleText,(0,l.default)(e,T));this.preparePanelForTransition();var c="tiny"===r,p="small"===r,_=c||p,h=!!_||"overlay"===i,v=n&&h,b=_?"dark":"clear",E=this.context,N=(0,m.default)(P("layout-slide-panel",{"is-open":n},{"is-overlay":h},{"is-squish":!h},E.className),s.className),S=P("panel",{"is-tiny":c},{"is-small":p},{"is-animated":t&&h&&!!u});return f.default.createElement("div",(0,o.default)({},s,{className:N}),f.default.createElement("div",{className:S,"aria-hidden":this.isHidden?"true":"false",ref:this.setPanelNode},u),f.default.createElement(g.default,{className:P("content")},f.default.createElement(y.default,{isRelativeToContainer:!0,onRequestClose:d,isOpen:v,backgroundStyle:b,zIndex:"6000"}),f.default.createElement("main",{role:"main","data-terra-layout-main":!0,className:P("main-container")},a)))}}]),t}(f.default.Component);O.propTypes=S,O.defaultProps={isAnimated:!1,isOpen:!1,isToggleEnabled:!1,panelBehavior:"overlay"},O.contextType=h.default;t.default=O},41643:function(e,t,n){"use strict";n.r(t),t.default={"panel-content":"TestLayoutCommon-module__panel-content___11P0K","layout-slide-panel-content":"TestLayoutCommon-module__layout-slide-panel-content___005M-","content-wrapper":"TestLayoutCommon-module__content-wrapper___rNhg8","layout-test":"TestLayoutCommon-module__layout-test___vmcFP"}},11686:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"LayoutSlidePanel-module__clinical-lowlight-theme___q2naq","orion-fusion-theme":"LayoutSlidePanel-module__orion-fusion-theme___2KWcp","content-container":"LayoutSlidePanel-module__content-container___vB31H","layout-slide-panel":"LayoutSlidePanel-module__layout-slide-panel___6Ra3S",content:"LayoutSlidePanel-module__content___Qa4PX",panel:"LayoutSlidePanel-module__panel___xUrqy","is-animated":"LayoutSlidePanel-module__is-animated___1uvdg","is-open":"LayoutSlidePanel-module__is-open___eTmJC","is-tiny":"LayoutSlidePanel-module__is-tiny___9Oz70","is-small":"LayoutSlidePanel-module__is-small___JXknd","is-overlay":"LayoutSlidePanel-module__is-overlay___s9u4z","is-squish":"LayoutSlidePanel-module__is-squish___c1HSt","main-container":"LayoutSlidePanel-module__main-container___xHsZe"}},15059:function(e){var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=t.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,t){t=t||{};var o,i,u,s=[],c=[],f=e.querySelectorAll(n);for(t.includeContainer&&a.call(e,n)&&(f=Array.prototype.slice.apply(f)).unshift(e),o=0;o<f.length;o++)l(i=f[o])&&(0===(u=r(i))?s.push(i):c.push({documentOrder:o,tabIndex:u,node:i}));return c.sort(d).map((function(e){return e.node})).concat(s)}function l(e){return!(!i(e)||function(e){return function(e){return s(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(t);return!n||n===e}(e)}(e)||r(e)<0)}function i(e){return!(e.disabled||function(e){return s(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}o.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,n)&&l(e)},o.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,u)&&i(e)};var u=t.concat("iframe").join(",");function r(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function s(e){return"INPUT"===e.tagName}e.exports=o}}]);