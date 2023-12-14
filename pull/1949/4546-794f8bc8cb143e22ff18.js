"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[4546],{4546:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(38416)),l=a(n(10434)),r=a(n(56690)),o=a(n(89728)),u=a(n(66115)),s=a(n(61655)),d=a(n(94993)),c=a(n(73808)),f=a(n(67294)),p=a(n(45697)),m=a(n(47166)),h=a(n(10027)),g=a(n(91296)),y=a(n(11686)),v=a(n(96667)),_=n(28264);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var S=m.default.bind(y.default),k={header:p.default.element,menu:p.default.element,menuText:p.default.string,children:p.default.element},T=function(e){(0,s.default)(n,e);var t=b(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).toggleMenu=a.toggleMenu.bind((0,u.default)(a)),a.togglePin=a.togglePin.bind((0,u.default)(a)),a.updateSize=(0,g.default)(a.updateSize.bind((0,u.default)(a)),100),a.renderHeader=a.renderHeader.bind((0,u.default)(a)),a.renderMenu=a.renderMenu.bind((0,u.default)(a)),a.renderContent=a.renderContent.bind((0,u.default)(a)),a.state=n.stateForProps(e,{size:(0,_.getBreakpointSize)(),prevProps:a.props}),a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize)}},{key:"updateSize",value:function(){var e=(0,_.getBreakpointSize)();this.state.size!==e&&this.setState(n.stateForProps(this.props,{size:e}))}},{key:"toggleMenu",value:function(){var e=this;return new Promise((function(t){e.setState((function(e){return{menuIsOpen:!e.menuIsOpen}}),t)}))}},{key:"togglePin",value:function(){var e=this;return new Promise((function(t){e.setState((function(e){return{menuIsPinned:!e.menuIsPinned}}),t)}))}},{key:"renderHeader",value:function(){var e=this.props.header,t=this.state,n=t.size,a=t.menuIsOpen,i=t.isToggleMenu,l=t.menuIsPresent;if(!e)return null;var r=i&&l;return f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:r?this.toggleMenu:void 0,menuIsOpen:a}})}},{key:"renderMenu",value:function(){var e=this.props.menu,t=this.state,n=t.size,a=t.menuIsOpen,i=t.menuIsPinned,l=t.isToggleMenu,r=t.menuIsPresent,o=l&&r;return r?f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:o?this.toggleMenu:void 0,menuIsOpen:a,menuIsPinned:i}}):null}},{key:"renderContent",value:function(){var e=this.props.children,t=this.state,n=t.size,a=t.menuIsOpen,i=t.isToggleMenu,l=t.menuIsPresent,r=i&&l;return f.default.createElement(h.default,{fill:!0,header:i&&this.renderHeader(),className:S("content-container")},e?f.default.cloneElement(e,{layoutConfig:{size:n,toggleMenu:r?this.toggleMenu:void 0,menuIsOpen:a}}):null)}},{key:"render",value:function(){var e=this.props.menuText,t=this.state,n=t.menuIsOpen,a=t.menuIsPinned,i=t.size,r=t.isFixedMenu,o=t.isToggleMenu;return f.default.createElement(h.default,(0,l.default)({fill:!0,header:!o&&this.renderHeader()},(0,_.getCustomProps)(this.props,k)),f.default.createElement(v.default,{panelContent:this.renderMenu(),panelBehavior:a||r?"squish":"overlay",size:i,onToggle:this.toggleMenu,toggleText:e,isOpen:n,isAnimated:!0},this.renderContent()))}}],[{key:"stateForProps",value:function(e,t){var n="tiny"===t.size||"small"===t.size,a=!n,i=!!e.menu;return O(O({},t||{}),{},{isFixedMenu:a,isToggleMenu:n,menuIsPresent:i,menuIsOpen:i&&(t.menuIsOpen||a),menuIsPinned:i&&t.menuIsPinned})}},{key:"getDerivedStateFromProps",value:function(e,t){return e!==t.prevProps?n.stateForProps(e,t):null}}]),n}(f.default.Component);T.propTypes=k;t.default=T},28264:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getCustomProps=t.getBreakpointSize=void 0;var n=768,a=992,i=1216,l=1440;t.getBreakpointSize=function(e){var t=e||window.innerWidth;return t>=l?"huge":t>=i?"large":t>=a?"medium":t>=n?"small":"tiny"},t.getCustomProps=function(e,t){return Object.keys(e).filter((function(e){return!Object.keys(t).includes(e)})).reduce((function(t,n){return t[n]=e[n],t}),{})}},96667:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434)),l=a(n(70215)),r=a(n(56690)),o=a(n(89728)),u=a(n(66115)),s=a(n(61655)),d=a(n(94993)),c=a(n(73808)),f=a(n(67294)),p=a(n(45697)),m=a(n(94184)),h=a(n(47166)),g=a(n(47341)),y=a(n(9220)),v=a(n(40693)),_=a(n(15059)),P=a(n(11686)),O=["isAnimated","isOpen","isToggleEnabled","children","panelBehavior","panelContent","size","onToggle","toggleText"];function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var S=h.default.bind(P.default),k={isAnimated:p.default.bool,isOpen:p.default.bool,isToggleEnabled:p.default.bool,children:p.default.element,panelBehavior:p.default.oneOf(["overlay","squish"]),panelContent:p.default.node,size:p.default.string.isRequired,onToggle:p.default.func,toggleText:p.default.string},T=function(e){(0,s.default)(n,e);var t=b(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).setPanelNode=a.setPanelNode.bind((0,u.default)(a)),a.handleTransitionEnd=a.handleTransitionEnd.bind((0,u.default)(a)),a.preparePanelForTransition=a.preparePanelForTransition.bind((0,u.default)(a)),a.isHidden=!e.isOpen,a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){document.createElement("main"),this.panelNode&&this.panelNode.addEventListener("transitionend",this.handleTransitionEnd)}},{key:"componentDidUpdate",value:function(){this.lastIsOpen=this.props.isOpen}},{key:"componentWillUnmount",value:function(){this.panelNode&&this.panelNode.removeEventListener("transitionend",this.handleTransitionEnd)}},{key:"handleTransitionEnd",value:function(){!this.props.isOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","true"),this.isHidden=!0,document.querySelector("button[data-application-header-toggle]")?document.querySelector("button[data-application-header-toggle]").focus():(0,_.default)(document.querySelector("[data-terra-layout-main]"))[0]&&(0,_.default)(document.querySelector("[data-terra-layout-main]"))[0].focus())}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"preparePanelForTransition",value:function(){this.props.isOpen&&!this.lastIsOpen&&this.panelNode&&(this.panelNode.setAttribute("aria-hidden","false"),this.isHidden=!1,(0,_.default)(this.panelNode)[0]&&(0,_.default)(this.panelNode)[0].focus())}},{key:"render",value:function(){var e=this.props,t=e.isAnimated,n=e.isOpen,a=(e.isToggleEnabled,e.children),r=e.panelBehavior,o=e.panelContent,u=e.size,s=e.onToggle,d=(e.toggleText,(0,l.default)(e,O));this.preparePanelForTransition();var c="tiny"===u,p="small"===u,h=c||p,g=!!h||"overlay"===r,_=n&&g,P=h?"dark":"clear",b=this.context,k=(0,m.default)(S("layout-slide-panel",{"is-open":n},{"is-overlay":g},{"is-squish":!g},b.className),d.className),T=S("panel",{"is-tiny":c},{"is-small":p},{"is-animated":t&&g&&!!o});return f.default.createElement("div",(0,i.default)({},d,{className:k}),f.default.createElement("div",{className:T,"aria-hidden":this.isHidden?"true":"false",ref:this.setPanelNode},o),f.default.createElement(v.default,{className:S("content")},f.default.createElement(y.default,{isRelativeToContainer:!0,onRequestClose:s,isOpen:_,backgroundStyle:P,zIndex:"6000"}),f.default.createElement("main",{role:"main","data-terra-layout-main":!0,className:S("main-container")},a)))}}]),n}(f.default.Component);T.propTypes=k,T.defaultProps={isAnimated:!1,isOpen:!1,isToggleEnabled:!1,panelBehavior:"overlay"},T.contextType=g.default;t.default=T},11686:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"LayoutSlidePanel-module__clinical-lowlight-theme___q2naq","orion-fusion-theme":"LayoutSlidePanel-module__orion-fusion-theme___2KWcp","content-container":"LayoutSlidePanel-module__content-container___vB31H","layout-slide-panel":"LayoutSlidePanel-module__layout-slide-panel___6Ra3S",content:"LayoutSlidePanel-module__content___Qa4PX",panel:"LayoutSlidePanel-module__panel___xUrqy","is-animated":"LayoutSlidePanel-module__is-animated___1uvdg","is-open":"LayoutSlidePanel-module__is-open___eTmJC","is-tiny":"LayoutSlidePanel-module__is-tiny___9Oz70","is-small":"LayoutSlidePanel-module__is-small___JXknd","is-overlay":"LayoutSlidePanel-module__is-overlay___s9u4z","is-squish":"LayoutSlidePanel-module__is-squish___c1HSt","main-container":"LayoutSlidePanel-module__main-container___xHsZe"}}}]);