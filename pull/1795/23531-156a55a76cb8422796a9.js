(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[23531],{23531:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(56690)),l=a(n(89728)),i=a(n(66115)),r=a(n(61655)),u=a(n(94993)),d=a(n(73808)),s=a(n(67294)),c=a(n(47166)),f=a(n(96667)),p=a(n(41643));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var o=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var _=c.default.bind(p.default),h=function(e){(0,r.default)(n,e);var t=m(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).toggleMenu=a.toggleMenu.bind((0,i.default)(a)),a.state={isOpen:!1},a}return(0,l.default)(n,[{key:"toggleMenu",value:function(){this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){return s.default.createElement("div",{className:_("content-wrapper")},s.default.createElement(f.default,{panelContent:s.default.createElement("div",{className:_("panel-content")},s.default.createElement("button",{type:"button",id:"test-toggle-2",onClick:this.toggleMenu},"toggle")),panelBehavior:"overlay",size:"medium",isOpen:this.state.isOpen,isToggleEnabled:!0,isAnimated:!0,onToggle:function(){},toggleText:"toggle text"},s.default.createElement("div",{className:_("layout-slide-panel-content")},s.default.createElement("button",{type:"button",id:"test-toggle-1",onClick:this.toggleMenu},"toggle"))))}}]),n}(s.default.Component);t.default=h},96667:function(e,t,n){"use strict";var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(10434)),l=a(n(70215)),i=a(n(56690)),r=a(n(89728)),u=a(n(66115)),d=a(n(61655)),s=a(n(94993)),c=a(n(73808)),f=a(n(67294)),p=a(n(45697)),m=a(n(94184)),_=a(n(47166)),h=a(n(47341)),y=a(n(9220)),v=a(n(40693)),g=a(n(15059)),b=a(n(11686)),T=["isAnimated","isOpen","isToggleEnabled","children","panelBehavior","panelContent","size","onToggle","toggleText"];function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var o=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return(0,s.default)(this,n)}}var N=_.default.bind(b.default),P={isAnimated:p.default.bool,isOpen:p.default.bool,isToggleEnabled:p.default.bool,children:p.default.element,panelBehavior:p.default.oneOf(["overlay","squish"]),panelContent:p.default.node,size:p.default.string.isRequired,onToggle:p.default.func,toggleText:p.default.string},S=function(e){(0,d.default)(n,e);var t=E(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,u.default)(a)),a.handleTransitionEnd=a.handleTransitionEnd.bind((0,u.default)(a)),a.preparePanelForTransition=a.preparePanelForTransition.bind((0,u.default)(a)),a.isHidden=!e.isOpen,a}return(0,r.default)(n,[{key:"componentDidMount",value:function(){document.createElement("main"),this.panelNode&&this.panelNode.addEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(){this.lastIsOpen=this.props.isOpen}},{key:"componentWillUnmount",value:function(){this.panelNode&&this.panelNode.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"handleTransitionEnd",value:function(){!this.props.isOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","true"),this.isHidden=!0,document.querySelector("button[data-application-header-toggle]")?document.querySelector("button[data-application-header-toggle]").focus():(0,g.default)(document.querySelector("[data-terra-layout-main]"))[0]&&(0,g.default)(document.querySelector("[data-terra-layout-main]"))[0].focus())}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"preparePanelForTransition",value:function(){this.props.isOpen&&!this.lastIsOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","false"),this.isHidden=!1,(0,g.default)(this.panelNode)[0]&&(0,g.default)(this.panelNode)[0].focus())}},{key:"render",value:function(){var e=this.props,t=e.isAnimated,n=e.isOpen,a=(e.isToggleEnabled,e.children),i=e.panelBehavior,r=e.panelContent,u=e.size,d=e.onToggle,s=(e.toggleText,(0,l.default)(e,T));this.preparePanelForTransition();var c="tiny"===u,p="small"===u,_=c||p,h=!!_||"overlay"===i,g=n&&h,b=_?"dark":"clear",E=this.context,P=(0,m.default)(N("layout-slide-panel",{"is-open":n},{"is-overlay":h},{"is-squish":!h},E.className),s.className),S=N("panel",{"is-tiny":c},{"is-small":p},{"is-animated":t&&h&&!!r});return f.default.createElement("div",(0,o.default)({},s,{className:P}),f.default.createElement("div",{className:S,"aria-hidden":this.isHidden?"true":"false",ref:this.setPanelNode},r),f.default.createElement(v.default,{className:N("content")},f.default.createElement(y.default,{isRelativeToContainer:!0,onRequestClose:d,isOpen:g,backgroundStyle:b,zIndex:"6000"}),f.default.createElement("main",{role:"main","data-terra-layout-main":!0,className:N("main-container")},a)))}}]),n}(f.default.Component);S.propTypes=P,S.defaultProps={isAnimated:!1,isOpen:!1,isToggleEnabled:!1,panelBehavior:"overlay"},S.contextType=h.default;var O=S;t.default=O},41643:function(e,t,n){"use strict";n.r(t),t.default={"panel-content":"TestLayoutCommon-module__panel-content___11P0K","layout-slide-panel-content":"TestLayoutCommon-module__layout-slide-panel-content___005M-","content-wrapper":"TestLayoutCommon-module__content-wrapper___rNhg8","layout-test":"TestLayoutCommon-module__layout-test___vmcFP"}},11686:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"LayoutSlidePanel-module__clinical-lowlight-theme___q2naq","orion-fusion-theme":"LayoutSlidePanel-module__orion-fusion-theme___2KWcp","content-container":"LayoutSlidePanel-module__content-container___vB31H","layout-slide-panel":"LayoutSlidePanel-module__layout-slide-panel___6Ra3S",content:"LayoutSlidePanel-module__content___Qa4PX",panel:"LayoutSlidePanel-module__panel___xUrqy","is-animated":"LayoutSlidePanel-module__is-animated___1uvdg","is-open":"LayoutSlidePanel-module__is-open___eTmJC","is-tiny":"LayoutSlidePanel-module__is-tiny___9Oz70","is-small":"LayoutSlidePanel-module__is-small___JXknd","is-overlay":"LayoutSlidePanel-module__is-overlay___s9u4z","is-squish":"LayoutSlidePanel-module__is-squish___c1HSt","main-container":"LayoutSlidePanel-module__main-container___xHsZe"}},15059:function(e){var t=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'],n=t.join(","),a="undefined"==typeof Element?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector;function o(e,t){t=t||{};var o,i,r,s=[],c=[],f=e.querySelectorAll(n);for(t.includeContainer&&a.call(e,n)&&(f=Array.prototype.slice.apply(f)).unshift(e),o=0;o<f.length;o++)l(i=f[o])&&(0===(r=u(i))?s.push(i):c.push({documentOrder:o,tabIndex:r,node:i}));return c.sort(d).map((function(e){return e.node})).concat(s)}function l(e){return!(!i(e)||function(e){return function(e){return s(e)&&"radio"===e.type}(e)&&!function(e){if(!e.name)return!0;var t=e.ownerDocument.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=function(e){for(var t=0;t<e.length;t++)if(e[t].checked)return e[t]}(t);return!n||n===e}(e)}(e)||u(e)<0)}function i(e){return!(e.disabled||function(e){return s(e)&&"hidden"===e.type}(e)||function(e){return null===e.offsetParent||"hidden"===getComputedStyle(e).visibility}(e))}o.isTabbable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,n)&&l(e)},o.isFocusable=function(e){if(!e)throw new Error("No node provided");return!1!==a.call(e,r)&&i(e)};var r=t.concat("iframe").join(",");function u(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?function(e){return"true"===e.contentEditable}(e)?0:e.tabIndex:t}function d(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex}function s(e){return"INPUT"===e.tagName}e.exports=o}}]);