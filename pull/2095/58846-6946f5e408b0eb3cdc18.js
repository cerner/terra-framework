"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[58846],{58846:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(43693)),l=a(n(94634)),o=a(n(17383)),r=a(n(34579)),u=a(n(28452)),s=a(n(63072)),d=a(n(12475)),c=a(n(29511)),f=a(n(96540)),p=a(n(5556)),m=a(n(67967)),h=a(n(54495)),g=a(n(20181)),y=a(n(36080)),v=a(n(88928)),_=n(11841);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){return t=(0,s.default)(t),(0,u.default)(e,S()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}var k=m.default.bind(y.default),T={header:p.default.element,menu:p.default.element,menuText:p.default.string,children:p.default.element},z=function(e){function t(e){var n;return(0,o.default)(this,t),(n=b(this,t,[e])).toggleMenu=n.toggleMenu.bind((0,d.default)(n)),n.togglePin=n.togglePin.bind((0,d.default)(n)),n.updateSize=(0,g.default)(n.updateSize.bind((0,d.default)(n)),100),n.renderHeader=n.renderHeader.bind((0,d.default)(n)),n.renderMenu=n.renderMenu.bind((0,d.default)(n)),n.renderContent=n.renderContent.bind((0,d.default)(n)),n.state=t.stateForProps(e,{size:(0,_.getBreakpointSize)(),prevProps:n.props}),n}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize)}},{key:"updateSize",value:function(){var e=(0,_.getBreakpointSize)();this.state.size!==e&&this.setState(t.stateForProps(this.props,{size:e}))}},{key:"toggleMenu",value:function(){var e=this;return new Promise((function(t){e.setState((function(e){return{menuIsOpen:!e.menuIsOpen}}),t)}))}},{key:"togglePin",value:function(){var e=this;return new Promise((function(t){e.setState((function(e){return{menuIsPinned:!e.menuIsPinned}}),t)}))}},{key:"renderHeader",value:function(){var e=this.props.header,t=this.state,n=t.size,a=t.menuIsOpen,i=t.isToggleMenu,l=t.menuIsPresent;if(!e)return null;var o=i&&l;return f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:o?this.toggleMenu:void 0,menuIsOpen:a}})}},{key:"renderMenu",value:function(){var e=this.props.menu,t=this.state,n=t.size,a=t.menuIsOpen,i=t.menuIsPinned,l=t.isToggleMenu,o=t.menuIsPresent,r=l&&o;return o?f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:r?this.toggleMenu:void 0,menuIsOpen:a,menuIsPinned:i}}):null}},{key:"renderContent",value:function(){var e=this.props.children,t=this.state,n=t.size,a=t.menuIsOpen,i=t.isToggleMenu,l=t.menuIsPresent,o=i&&l;return f.default.createElement(h.default,{fill:!0,header:i&&this.renderHeader(),className:k("content-container")},e?f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:o?this.toggleMenu:void 0,menuIsOpen:a}}):null)}},{key:"render",value:function(){var e=this.props.menuText,t=this.state,n=t.menuIsOpen,a=t.menuIsPinned,i=t.size,o=t.isFixedMenu,r=t.isToggleMenu;return f.default.createElement(h.default,(0,l.default)({fill:!0,header:!r&&this.renderHeader()},(0,_.getCustomProps)(this.props,T)),f.default.createElement(v.default,{panelContent:this.renderMenu(),panelBehavior:a||o?"squish":"overlay",size:i,onToggle:this.toggleMenu,toggleText:e,isOpen:n,isAnimated:!0},this.renderContent()))}}],[{key:"stateForProps",value:function(e,t){var n="tiny"===t.size||"small"===t.size,a=!n,i=!!e.menu;return O(O({},t||{}),{},{isFixedMenu:a,isToggleMenu:n,menuIsPresent:i,menuIsOpen:i&&(t.menuIsOpen||a),menuIsPinned:i&&t.menuIsPinned})}},{key:"getDerivedStateFromProps",value:function(e,n){return e!==n.prevProps?t.stateForProps(e,n):null}}]),t}(f.default.Component);z.propTypes=T;t.default=z},11841:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getCustomProps=t.getBreakpointSize=void 0;var n=768,a=992,i=1216,l=1440;t.getBreakpointSize=function(e){var t=e||window.innerWidth;return t>=l?"huge":t>=i?"large":t>=a?"medium":t>=n?"small":"tiny"},t.getCustomProps=function(e,t){return Object.keys(e).filter((function(e){return!Object.keys(t).includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),{})}},88928:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94634)),l=a(n(91847)),o=a(n(17383)),r=a(n(34579)),u=a(n(28452)),s=a(n(63072)),d=a(n(12475)),c=a(n(29511)),f=a(n(96540)),p=a(n(5556)),m=a(n(46942)),h=a(n(67967)),g=a(n(23695)),y=a(n(3548)),v=a(n(27981)),_=a(n(20220)),P=a(n(36080)),O=["isAnimated","isOpen","isToggleEnabled","children","panelBehavior","panelContent","size","onToggle","toggleText"];function b(e,t,n){return t=(0,s.default)(t),(0,u.default)(e,S()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}var k=h.default.bind(P.default),T={isAnimated:p.default.bool,isOpen:p.default.bool,isToggleEnabled:p.default.bool,children:p.default.element,panelBehavior:p.default.oneOf(["overlay","squish"]),panelContent:p.default.node,size:p.default.string.isRequired,onToggle:p.default.func,toggleText:p.default.string},z=function(e){function t(e){var n;return(0,o.default)(this,t),(n=b(this,t,[e])).setPanelNode=n.setPanelNode.bind((0,d.default)(n)),n.handleTransitionEnd=n.handleTransitionEnd.bind((0,d.default)(n)),n.preparePanelForTransition=n.preparePanelForTransition.bind((0,d.default)(n)),n.isHidden=!e.isOpen,n}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){document.createElement("main"),this.panelNode&&this.panelNode.addEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(){this.lastIsOpen=this.props.isOpen}},{key:"componentWillUnmount",value:function(){this.panelNode&&this.panelNode.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"handleTransitionEnd",value:function(){!this.props.isOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","true"),this.isHidden=!0,document.querySelector("button[data-application-header-toggle]")?document.querySelector("button[data-application-header-toggle]").focus():(0,_.default)(document.querySelector("[data-terra-layout-main]"))[0]&&(0,_.default)(document.querySelector("[data-terra-layout-main]"))[0].focus())}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"preparePanelForTransition",value:function(){this.props.isOpen&&!this.lastIsOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","false"),this.isHidden=!1,(0,_.default)(this.panelNode)[0]&&(0,_.default)(this.panelNode)[0].focus())}},{key:"render",value:function(){var e=this.props,t=e.isAnimated,n=e.isOpen,a=(e.isToggleEnabled,e.children),o=e.panelBehavior,r=e.panelContent,u=e.size,s=e.onToggle,d=(e.toggleText,(0,l.default)(e,O));this.preparePanelForTransition();var c="tiny"===u,p="small"===u,h=c||p,g=!!h||"overlay"===o,_=n&&g,P=h?"dark":"clear",b=this.context,S=(0,m.default)(k("layout-slide-panel",{"is-open":n},{"is-overlay":g},{"is-squish":!g},b.className),d.className),T=k("panel",{"is-tiny":c},{"is-small":p},{"is-animated":t&&g&&!!r});return f.default.createElement("div",(0,i.default)({},d,{className:S}),f.default.createElement("div",{className:T,"aria-hidden":this.isHidden?"true":"false",ref:this.setPanelNode},r),f.default.createElement(v.default,{className:k("content")},f.default.createElement(y.default,{isRelativeToContainer:!0,onRequestClose:s,isOpen:_,backgroundStyle:P,zIndex:"6000"}),f.default.createElement("main",{role:"main","data-terra-layout-main":!0,className:k("main-container")},a)))}}]),t}(f.default.Component);z.propTypes=T,z.defaultProps={isAnimated:!1,isOpen:!1,isToggleEnabled:!1,panelBehavior:"overlay"},z.contextType=g.default;t.default=z},36080:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"LayoutSlidePanel-module__clinical-lowlight-theme___q2naq","orion-fusion-theme":"LayoutSlidePanel-module__orion-fusion-theme___2KWcp","content-container":"LayoutSlidePanel-module__content-container___vB31H","layout-slide-panel":"LayoutSlidePanel-module__layout-slide-panel___6Ra3S",content:"LayoutSlidePanel-module__content___Qa4PX",panel:"LayoutSlidePanel-module__panel___xUrqy","is-animated":"LayoutSlidePanel-module__is-animated___1uvdg","is-open":"LayoutSlidePanel-module__is-open___eTmJC","is-tiny":"LayoutSlidePanel-module__is-tiny___9Oz70","is-small":"LayoutSlidePanel-module__is-small___JXknd","is-overlay":"LayoutSlidePanel-module__is-overlay___s9u4z","is-squish":"LayoutSlidePanel-module__is-squish___c1HSt","main-container":"LayoutSlidePanel-module__main-container___xHsZe"}}}]);