"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[58758],{58758:function(e,t,n){var a=n(24994),i=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(94634)),l=a(n(91847)),o=a(n(17383)),r=a(n(34579)),s=a(n(28452)),d=a(n(63072)),c=a(n(29511)),f=a(n(43693)),h=E(n(96540)),m=a(n(5556)),v=n(8604),y=a(n(67967)),p=a(n(54495)),_=a(n(16524)),k=E(n(25966)),g=a(n(23695)),C=a(n(46575)),K=a(n(44395)),M=["menuItems","onChange","routingStackBack","selectedChildKey","selectedMenuKey","toolbar"];function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}function I(e,t,n){return t=(0,d.default)(t),(0,s.default)(e,R()?Reflect.construct(t,n||[],(0,d.default)(e).constructor):t.apply(e,n))}function R(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(R=function(){return!!e})()}var x=y.default.bind(K.default),S={intl:m.default.shape({formatMessage:m.default.func}).isRequired,ariaLabel:m.default.string,menuItems:m.default.arrayOf(m.default.shape({childKeys:m.default.arrayOf(m.default.string),hasSubMenu:m.default.bool,isRootMenu:m.default.bool,id:m.default.string,metaData:m.default.object,key:m.default.string.isRequired,text:m.default.string.isRequired})),onChange:m.default.func.isRequired,routingStackBack:m.default.func,selectedChildKey:m.default.string,selectedMenuKey:m.default.string.isRequired,toolbar:m.default.element},w=function(e){var t={},n={};return e.forEach((function(e){t[e.key]={id:e.id,text:e.text,childKeys:e.childKeys,metaData:e.metaData,hasSubMenu:e.hasSubMenu,isRootMenu:e.isRootMenu},e.childKeys&&e.childKeys.forEach((function(t){n[t]=e.key}))})),{items:t,parents:n}},D=function(e){function t(e){var n;(0,o.default)(this,t),n=I(this,t,[e]),(0,f.default)(n,"handleMenuListRef",(function(e){if(n.menuContainer=e,e&&n.needsFocus){var t=e.querySelectorAll("[data-menu-item]");t&&t.length&&t[0].focus()}})),(0,f.default)(n,"getMenuContainerRef",(function(){return n.menuContainer})),(0,f.default)(n,"backButtonRef",(function(e){n.backButtonContainer=e})),n.handleBackClick=n.handleBackClick.bind(n),n.handleItemClick=n.handleItemClick.bind(n),n.updateAriaLiveContent=n.updateAriaLiveContent.bind(n),n.setVisuallyHiddenComponent=n.setVisuallyHiddenComponent.bind(n);var a=w(e.menuItems),i=a.items,u=a.parents;return n.state={items:i,parents:u,prevPropsMenuItem:e.menuItems,selectedKey:e.selectedMenuKey,navigatedKey:e.selectedMenuKey},n}return(0,c.default)(t,e),(0,r.default)(t,[{key:"handleBackClick",value:function(e){var t=this,n=this.state.parents[this.state.navigatedKey],a=this.state.navigatedKey;n&&this.setState({navigatedKey:n},(function(){var e=t.menuContainer.querySelectorAll('[data-menu-item="'.concat(a,'"]'));e&&e.length&&e[0].focus()})),e.preventDefault()}},{key:"handleHeaderBackClick",value:function(e){e.nativeEvent.keyCode!==k.KEY_SPACE&&e.nativeEvent.keyCode!==k.KEY_RETURN||this.handleBackClick(e)}},{key:"handleRightMove",value:function(e,t){var n=this;this.setState({navigatedKey:t},(function(){n.backButtonContainer&&n.backButtonContainer.focus()}))}},{key:"handleItemClick",value:function(e,t){var n=this,a=this.state.items[t];a&&a.childKeys&&a.childKeys.length?this.setState({navigatedKey:t},(function(){n.backButtonContainer&&n.backButtonContainer.focus()})):(this.state.items[t]&&this.state.items[t].text&&this.updateAriaLiveContent(this.state.items[t].text),a.childKeys&&a.childKeys.length?(this.needsFocus=!0,this.props.onChange(e,{selectedMenuKey:t,selectedChildKey:void 0,metaData:a.metaData})):(this.needsFocus=!1,this.props.onChange(e,{selectedMenuKey:this.props.selectedMenuKey,selectedChildKey:t,metaData:a.metaData})))}},{key:"setVisuallyHiddenComponent",value:function(e){this.visuallyHiddenComponent=e}},{key:"buildListItem",value:function(e,t){var n=this,a=this.state.items[e],i=Array.from(t).indexOf(e);return h.default.createElement(C.default,{id:a.id,tabIndex:0===i?"0":"-1",hasChevron:a.hasSubMenu||a.childKeys&&a.childKeys.length>0,isSelected:e===this.props.selectedChildKey,text:a.text,key:e,onClick:function(t){n.handleItemClick(t,e)},onKeyDown:function(t){t.nativeEvent.keyCode!==k.KEY_SPACE&&t.nativeEvent.keyCode!==k.KEY_RETURN||(t.preventDefault(),n.handleItemClick(t,e)),t.nativeEvent.keyCode===k.KEY_RIGHT&&(a.hasSubMenu||a.childKeys&&a.childKeys.length>0)&&n.handleRightMove(t,e),t.nativeEvent.keyCode===k.KEY_LEFT&&n.handleBackClick(t,e)},getMenuContainerRef:this.getMenuContainerRef,"data-menu-item":e})}},{key:"buildListContent",value:function(e){var t=this;return e&&e.childKeys&&e.childKeys.length?h.default.createElement("nav",{role:"navigation","aria-label":this.props.ariaLabel},h.default.createElement("ul",{role:"menu",ref:function(e){return t.handleMenuListRef(e)},className:x(["side-menu-list"])},e.childKeys.map((function(n){return t.buildListItem(n,e.childKeys)})))):null}},{key:"updateAriaLiveContent",value:function(e){var t=this.props.intl.formatMessage({id:"Terra.navigation.side.menu.selected"});this.visuallyHiddenComponent&&(this.visuallyHiddenComponent.innerText=e?"".concat(e," ").concat(t):"")}},{key:"render",value:function(){var e,t,n=this,a=this.props,i=(a.menuItems,a.onChange,a.routingStackBack),o=(a.selectedChildKey,a.selectedMenuKey,a.toolbar),r=(0,l.default)(a,M),s=this.state.items[this.state.navigatedKey],d=this.context,c=x(["side-menu-content-container",d.className]);return(e=this.state.parents[this.state.navigatedKey]?this.handleHeaderBackClick:i)||!s.isRootMenu?t=h.default.createElement(h.Fragment,null,h.default.createElement("div",{className:x("side-navigation-menu"),role:"none",ref:function(e){return n.backButtonRef(e)},type:"button",tabIndex:e?"0":"-1",onKeyDown:function(e){return n.handleHeaderBackClick(e)},onClick:function(e){return n.handleBackClick(e)}},e?h.default.createElement("span",{className:x(["header-icon","back"])}):null,h.default.createElement("h1",{className:x("title")},s?s.text:null)),o):c=x(["side-menu-content-container","is-root"]),h.default.createElement(h.Fragment,null,h.default.createElement(_.default,{"aria-atomic":"true","aria-live":"assertive","aria-relevant":"additions text"}),h.default.createElement(p.default,(0,u.default)({},r,{header:t,fill:!0,className:c}),this.buildListContent(s)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.menuItems!==t.prevPropsMenuItem?w(e.menuItems):e.selectedMenuKey!==t.selectedKey?{navigatedKey:e.selectedMenuKey}:null}}])}(h.Component);D.propTypes=S,D.defaultProps={menuItems:[]},D.contextType=g.default;t.default=(0,v.injectIntl)(D)},46575:function(e,t,n){var a=n(24994),i=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(n(94634)),l=a(n(91847)),o=a(n(17383)),r=a(n(34579)),s=a(n(28452)),d=a(n(63072)),c=a(n(29511)),f=a(n(43693)),h=E(n(96540)),m=a(n(5556)),v=n(8604),y=a(n(46942)),p=a(n(67967)),_=a(n(23695)),k=E(n(25966)),g=a(n(53665)),C=a(n(16524)),K=a(n(37357)),M=["hasChevron","intl","isSelected","text"];function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}function I(e,t,n){return t=(0,d.default)(t),(0,s.default)(e,R()?Reflect.construct(t,n||[],(0,d.default)(e).constructor):t.apply(e,n))}function R(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(R=function(){return!!e})()}var x=p.default.bind(K.default),S={hasChevron:m.default.bool,intl:m.default.shape({formatMessage:m.default.func}).isRequired,isSelected:m.default.bool,onKeyDown:m.default.func,onKeyUp:m.default.func,text:m.default.string,tabIndex:m.default.string,getMenuContainerRef:m.default.func},w=function(e){function t(e){var n;return(0,o.default)(this,t),n=I(this,t,[e]),(0,f.default)(n,"setTabIndex",(function(e,t){e&&e.setAttribute("tabIndex",t)})),n.state={active:!1},n.handleKeyDown=n.handleKeyDown.bind(n),n.textRender=n.textRender.bind(n),n.handleMenuItemRef=n.handleMenuItemRef.bind(n),n.setTabIndex=n.setTabIndex.bind(n),n}return(0,c.default)(t,e),(0,r.default)(t,[{key:"handleKeyDown",value:function(e){var t=this.props.getMenuContainerRef(),n=t&&t.querySelectorAll("[data-menu-item]"),a=Array.from(n).indexOf(e.target),i=n.length-1;if(e.nativeEvent.keyCode===k.KEY_DOWN){var u=a<i?a+1:0;n&&n[u]&&(this.setTabIndex(n[a],"-1"),this.setTabIndex(n[u],"0"),n[u].focus()),this.props.onKeyDown&&this.props.onKeyDown(e),e.preventDefault()}if(e.nativeEvent.keyCode!==k.KEY_SPACE&&e.nativeEvent.keyCode!==k.KEY_RETURN||(this.setState({active:!0}),this.props.onKeyDown(e)),e.nativeEvent.keyCode===k.KEY_UP){e.nativeEvent.keyCode===k.KEY_SPACE&&this.setState({active:!1});var l=a>0?a-1:i;n&&n[l]&&(this.setTabIndex(n[a],"-1"),this.setTabIndex(n[l],"0"),n[l].focus()),this.props.onKeyUp&&this.props.onKeyUp(e),e.preventDefault()}e.nativeEvent.keyCode===k.KEY_RIGHT&&this.props.hasChevron&&(this.props.onKeyDown(e),e.preventDefault()),e.nativeEvent.keyCode===k.KEY_LEFT&&(this.props.onKeyDown(e),e.preventDefault())}},{key:"handleMenuItemRef",value:function(e){this.contentNode=e}},{key:"textRender",value:function(){var e=this.props,t=e.intl,n=e.isSelected,a=e.text,i=t.formatMessage({id:"Terra.navigation.side.menu.selected"});return n?h.default.createElement(h.Fragment,null,a,h.default.createElement(C.default,{text:i})):a}},{key:"render",value:function(){var e=this.props,t=e.hasChevron,n=(e.intl,e.isSelected),a=(e.text,(0,l.default)(e,M)),i=this.context,o=(0,y.default)(x("menu-item",{"is-selected":n},{"is-active":this.state.active},i.className),a.className);return h.default.createElement("li",{className:x("list-item"),role:"none"},h.default.createElement("div",(0,u.default)({role:"menuitem",ref:this.handleMenuItemRef},a,{tabIndex:this.props.tabIndex,className:o,onKeyDown:this.handleKeyDown,"aria-haspopup":t}),h.default.createElement("div",{className:x("title")},this.textRender()),t&&h.default.createElement("span",{className:x("chevron")},h.default.createElement(g.default,null))))}}])}(h.default.Component);w.propTypes=S,w.contextType=_.default;t.default=(0,v.injectIntl)(w)},37357:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"MenuItem-module__clinical-lowlight-theme___WejfL","orion-fusion-theme":"MenuItem-module__orion-fusion-theme___Dd4c1","list-item":"MenuItem-module__list-item___Pg+tM","menu-item":"MenuItem-module__menu-item___PGkUQ","is-hovered":"MenuItem-module__is-hovered___Gt2R8",chevron:"MenuItem-module__chevron___wpMIy","is-focused":"MenuItem-module__is-focused___UheNC","is-selected":"MenuItem-module__is-selected___nZvDz","is-active":"MenuItem-module__is-active___ZqiaG",title:"MenuItem-module__title___cKrPN"}},44395:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"NavigationSideMenu-module__clinical-lowlight-theme___21td8","orion-fusion-theme":"NavigationSideMenu-module__orion-fusion-theme___sArMM","side-menu-content-container":"NavigationSideMenu-module__side-menu-content-container___zBCiE","is-root":"NavigationSideMenu-module__is-root___Q49aQ","side-menu-list":"NavigationSideMenu-module__side-menu-list___UXvjw","side-navigation-menu":"NavigationSideMenu-module__side-navigation-menu___gUtW3","header-icon":"NavigationSideMenu-module__header-icon___2wVIp",back:"NavigationSideMenu-module__back___8g53E",title:"NavigationSideMenu-module__title___XBUmb"}}}]);