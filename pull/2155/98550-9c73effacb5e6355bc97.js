(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[98550],{98550:function(e,t,n){"use strict";var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(17383)),l=a(n(34579)),i=a(n(28452)),u=a(n(63072)),r=a(n(29511)),d=a(n(96540)),s=a(n(67967)),c=a(n(88928)),f=a(n(99047));function p(e,t,n){return t=(0,u.default)(t),(0,i.default)(e,m()?Reflect.construct(t,n||[],(0,u.default)(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}var _=s.default.bind(f.default),h=function(e){function t(e){var n;return(0,o.default)(this,t),(n=p(this,t,[e])).toggleMenu=n.toggleMenu.bind(n),n.state={isOpen:!1},n}return(0,r.default)(t,e),(0,l.default)(t,[{key:"toggleMenu",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){return d.default.createElement("div",{className:_("content-wrapper")},d.default.createElement(c.default,{panelContent:d.default.createElement("div",{className:_("panel-content")},d.default.createElement("button",{type:"button",id:"test-toggle-2",onClick:this.toggleMenu},"toggle")),panelBehavior:"overlay",size:"medium",isOpen:this.state.isOpen,isToggleEnabled:!0,isAnimated:!0,onToggle:function(){},toggleText:"toggle text"},d.default.createElement("div",{className:_("layout-slide-panel-content")},d.default.createElement("button",{type:"button",id:"test-toggle-1",onClick:this.toggleMenu},"toggle"))))}}])}(d.default.Component);t.default=h},88928:function(e,t,n){"use strict";var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(94634)),l=a(n(91847)),i=a(n(17383)),u=a(n(34579)),r=a(n(28452)),d=a(n(63072)),s=a(n(29511)),c=a(n(96540)),f=a(n(5556)),p=a(n(46942)),m=a(n(67967)),_=a(n(23695)),h=a(n(3548)),y=a(n(27981)),g=a(n(20220)),v=a(n(36080)),b=["isAnimated","isOpen","isToggleEnabled","children","panelBehavior","panelContent","size","onToggle","toggleText"];function T(e,t,n){return t=(0,d.default)(t),(0,r.default)(e,E()?Reflect.construct(t,n||[],(0,d.default)(e).constructor):t.apply(e,n))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}var N=m.default.bind(v.default),P={isAnimated:f.default.bool,isOpen:f.default.bool,isToggleEnabled:f.default.bool,children:f.default.element,panelBehavior:f.default.oneOf(["overlay","squish"]),panelContent:f.default.node,size:f.default.string.isRequired,onToggle:f.default.func,toggleText:f.default.string},S=function(e){function t(e){var n;return(0,i.default)(this,t),(n=T(this,t,[e])).setPanelNode=n.setPanelNode.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.preparePanelForTransition=n.preparePanelForTransition.bind(n),n.isHidden=!e.isOpen,n}return(0,s.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){document.createElement("main"),this.panelNode&&this.panelNode.addEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(){this.lastIsOpen=this.props.isOpen}},{key:"componentWillUnmount",value:function(){this.panelNode&&this.panelNode.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"handleTransitionEnd",value:function(){!this.props.isOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","true"),this.isHidden=!0,document.querySelector("button[data-application-header-toggle]")?document.querySelector("button[data-application-header-toggle]").focus():(0,g.default)(document.querySelector("[data-terra-layout-main]"))[0]&&(0,g.default)(document.querySelector("[data-terra-layout-main]"))[0].focus())}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"preparePanelForTransition",value:function(){this.props.isOpen&&!this.lastIsOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","false"),this.isHidden=!1,(0,g.default)(this.panelNode)[0]&&(0,g.default)(this.panelNode)[0].focus())}},{key:"render",value:function(){var e=this.props,t=e.isAnimated,n=e.isOpen,a=(e.isToggleEnabled,e.children),i=e.panelBehavior,u=e.panelContent,r=e.size,d=e.onToggle,s=(e.toggleText,(0,l.default)(e,b));this.preparePanelForTransition();var f="tiny"===r,m="small"===r,_=f||m,g=!!_||"overlay"===i,v=n&&g,T=_?"dark":"clear",E=this.context,P=(0,p.default)(N("layout-slide-panel",{"is-open":n},{"is-overlay":g},{"is-squish":!g},E.className),s.className),S=N("panel",{"is-tiny":f},{"is-small":m},{"is-animated":t&&g&&!!u});return c.default.createElement("div",(0,o.default)({},s,{className:P}),c.default.createElement("div",{className:S,"aria-hidden":this.isHidden?"true":"false",ref:this.setPanelNode},u),c.default.createElement(y.default,{className:N("content")},c.default.createElement(h.default,{isRelativeToContainer:!0,onRequestClose:d,isOpen:v,backgroundStyle:T,zIndex:"6000"}),c.default.createElement("main",{role:"main",tabIndex:"-1","data-terra-layout-main":!0,className:N("main-container")},a)))}}])}(c.default.Component);S.propTypes=P,S.defaultProps={isAnimated:!1,isOpen:!1,isToggleEnabled:!1,panelBehavior:"overlay"},S.contextType=_.default;t.default=S},99047:function(e,t,n){"use strict";n.r(t),t.default={"panel-content":"TestLayoutCommon-module__panel-content___11P0K","layout-slide-panel-content":"TestLayoutCommon-module__layout-slide-panel-content___005M-","content-wrapper":"TestLayoutCommon-module__content-wrapper___rNhg8","layout-test":"TestLayoutCommon-module__layout-test___vmcFP"}},36080:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"LayoutSlidePanel-module__clinical-lowlight-theme___q2naq","orion-fusion-theme":"LayoutSlidePanel-module__orion-fusion-theme___2KWcp","content-container":"LayoutSlidePanel-module__content-container___vB31H","layout-slide-panel":"LayoutSlidePanel-module__layout-slide-panel___6Ra3S",content:"LayoutSlidePanel-module__content___Qa4PX",panel:"LayoutSlidePanel-module__panel___xUrqy","is-animated":"LayoutSlidePanel-module__is-animated___1uvdg","is-open":"LayoutSlidePanel-module__is-open___eTmJC","is-tiny":"LayoutSlidePanel-module__is-tiny___9Oz70","is-small":"LayoutSlidePanel-module__is-small___JXknd","is-overlay":"LayoutSlidePanel-module__is-overlay___s9u4z","is-squish":"LayoutSlidePanel-module__is-squish___c1HSt","main-container":"LayoutSlidePanel-module__main-container___xHsZe"}},20220:function(e){var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=t.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,t){t=t||{};var o,i,u,s=[],c=[],f=e.querySelectorAll(n);for(t.includeContainer&&a.call(e,n)&&(f=Array.prototype.slice.apply(f)).unshift(e),o=0;o<f.length;o++)l(i=f[o])&&(0===(u=r(i))?s.push(i):c.push({documentOrder:o,tabIndex:u,node:i}));return c.sort(d).map((function(e){return e.node})).concat(s)}function l(e){return!(!i(e)||function(e){return function(e){return s(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(t);return!n||n===e}(e)}(e)||r(e)<0)}function i(e){return!(e.disabled||function(e){return s(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}o.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,n)&&l(e)},o.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,u)&&i(e)};var u=t.concat("iframe").join(",");function r(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function s(e){return"INPUT"===e.tagName}e.exports=o}}]);