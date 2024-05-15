"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[58758],{58758:function(e,t,n){var a=n(24994),i=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"VARIANTS",{enumerable:!0,get:function(){return C.default}}),t.default=void 0;var l=a(n(94634)),u=a(n(91847)),o=a(n(17383)),s=a(n(34579)),d=a(n(28452)),r=a(n(63072)),c=a(n(29511)),f=a(n(43693)),h=D(n(96540)),m=a(n(5556)),_=n(8604),v=a(n(67967)),p=a(n(54495)),y=a(n(16524)),k=D(n(25966)),b=a(n(23695)),I=a(n(95881)),M=a(n(46575)),C=a(n(9343)),g=a(n(44395)),K=["menuItems","onChange","routingStackBack","selectedChildKey","selectedMenuKey","toolbar","variant"];function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}function D(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}return a.default=e,n&&n.set(e,a),a}function N(e,t,n){return t=(0,r.default)(t),(0,d.default)(e,R()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function R(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(R=function(){return!!e})()}var S=v.default.bind(g.default),B={intl:m.default.shape({formatMessage:m.default.func}).isRequired,ariaLabel:m.default.string,menuItems:m.default.arrayOf(m.default.shape({childKeys:m.default.arrayOf(m.default.string),hasSubMenu:m.default.bool,isRootMenu:m.default.bool,id:m.default.string,metaData:m.default.object,key:m.default.string.isRequired,text:m.default.string.isRequired,isDisabled:m.default.bool,icon:m.default.element})),onChange:m.default.func.isRequired,routingStackBack:m.default.func,selectedChildKey:m.default.string,selectedMenuKey:m.default.string.isRequired,toolbar:m.default.element,variant:m.default.oneOf([C.default.NAVIGATION_SIDE_MENU,C.default.DRILL_IN])},w={menuItems:[],variant:C.default.NAVIGATION_SIDE_MENU},x=function(e,t){var n={},a={};return e.forEach((function(e){var i;e.childKeys&&(i=0===e.childKeys.length&&t===C.default.DRILL_IN?["empty-child-key"]:e.childKeys),n[e.key]={id:e.id,text:e.text,childKeys:i,metaData:e.metaData,hasSubMenu:e.hasSubMenu,isRootMenu:e.isRootMenu,icon:e.icon,isDisabled:e.isDisabled},e.childKeys&&e.childKeys.forEach((function(t){a[t]=e.key}))})),{items:n,parents:a}},L=function(e){function t(e){var n;(0,o.default)(this,t),n=N(this,t,[e]),(0,f.default)(n,"handleMenuListRef",(function(e){if(n.menuContainer=e,e&&n.focusKey){var t=e.querySelectorAll('[data-menu-item="'.concat(n.focusKey,'"]'));t&&t.length&&t[0].focus()}})),(0,f.default)(n,"handleEvents",(function(e,t,a){var i=n.menuContainer&&n.menuContainer.querySelectorAll("[data-menu-item]"),l=Array.from(i).indexOf(e.target),u=i.length-1;if(e.nativeEvent.keyCode!==k.KEY_SPACE&&e.nativeEvent.keyCode!==k.KEY_RETURN||(e.preventDefault(),t.isDisabled||n.handleItemClick(e,a)),e.nativeEvent.keyCode===k.KEY_DOWN){var o=l<u?l+1:0;l===u&&n.onBack?n.backButtonContainer&&n.backButtonContainer.focus():i&&i[o]&&(n.setTabIndex(i[l],"-1"),n.setTabIndex(i[o],"0"),i[o].focus()),e.preventDefault()}if(e.nativeEvent.keyCode===k.KEY_UP){var s=l>0?l-1:u;0===l&&n.onBack?n.backButtonContainer&&n.backButtonContainer.focus():i&&i[s]&&(n.setTabIndex(i[l],"-1"),n.setTabIndex(i[s],"0"),i[s].focus()),e.preventDefault()}e.nativeEvent.keyCode===k.KEY_RIGHT&&(t.hasSubMenu||t.childKeys&&t.childKeys.length>0)&&(n.handleRightMove(e,a),e.preventDefault()),e.nativeEvent.keyCode===k.KEY_LEFT&&(n.handleLeftMove(e,a),e.preventDefault())})),(0,f.default)(n,"setTabIndex",(function(e,t){e&&e.setAttribute("tabIndex",t)})),(0,f.default)(n,"backButtonRef",(function(e){n.backButtonContainer=e,e&&n.setHeaderFocus&&n.backButtonContainer&&n.backButtonContainer.focus()})),n.handleBackClick=n.handleBackClick.bind(n),n.handleBackKeydown=n.handleBackKeydown.bind(n),n.handleEvents=n.handleEvents.bind(n),n.setTabIndex=n.setTabIndex.bind(n),n.handleItemClick=n.handleItemClick.bind(n),n.updateAriaLiveContent=n.updateAriaLiveContent.bind(n),n.setVisuallyHiddenComponent=n.setVisuallyHiddenComponent.bind(n);var a=x(e.menuItems,e.variant),i=a.items,l=a.parents;return n.state={items:i,parents:l,prevPropsMenuItem:e.menuItems},n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"handleBackClick",value:function(e){var t=this.state.parents[this.props.selectedMenuKey];this.focusKey=this.props.selectedMenuKey,t&&this.props.onChange(e,{selectedMenuKey:t,selectedChildKey:this.props.selectedMenuKey,metaData:this.state.items[t].metaData}),this.setHeaderFocus=!1,e.preventDefault()}},{key:"handleBackKeydown",value:function(e){switch(e.nativeEvent.keyCode){case k.KEY_SPACE:case k.KEY_RETURN:case k.KEY_LEFT:case k.KEY_ESCAPE:this.state.parents[this.props.selectedMenuKey]?this.handleBackClick(e):this.props.routingStackBack&&this.props.routingStackBack();break;case k.KEY_DOWN:case k.KEY_UP:var t=this.menuContainer&&this.menuContainer.querySelectorAll("[data-menu-item]");t&&t.length&&(e.nativeEvent.keyCode===k.KEY_DOWN?t[0].focus():t[t.length-1].focus()),e.preventDefault()}}},{key:"handleItemClick",value:function(e,t){var n=this.state.items[t];this.state.items[t]&&this.state.items[t].text&&this.updateAriaLiveContent(this.state.items[t].text),n.childKeys&&n.childKeys.length?this.props.onChange(e,{selectedMenuKey:t,selectedChildKey:void 0,metaData:n.metaData}):this.props.onChange(e,{selectedMenuKey:this.props.selectedMenuKey,selectedChildKey:t,metaData:n.metaData}),this.focusKey=t,n&&n.childKeys&&n.childKeys.length?this.setHeaderFocus=!0:this.setHeaderFocus=!1}},{key:"handleRightMove",value:function(e,t){this.handleItemClick(e,t)}},{key:"handleLeftMove",value:function(e){this.handleBackClick(e)}},{key:"setVisuallyHiddenComponent",value:function(e){this.visuallyHiddenComponent=e}},{key:"buildListItem",value:function(e,t){var n=this,a=this.state.items[e],i=Array.from(t).indexOf(e);return"empty-child-key"===e?this.props.variant===C.default.DRILL_IN?h.default.createElement(I.default,{variant:"no-data"}):null:h.default.createElement(M.default,{id:a.id,hasChevron:a.hasSubMenu||a.childKeys&&a.childKeys.length>0,isSelected:e===this.props.selectedChildKey,isDisabled:a.isDisabled,text:a.text,key:e,onClick:a.isDisabled?void 0:function(t){return n.handleItemClick(t,e)},onKeyDown:function(t){n.handleEvents(t,a,e)},"data-menu-item":e,tabIndex:0!==i||this.onBack?"-1":"0",icon:a.icon,variant:this.props.variant})}},{key:"buildListContent",value:function(e){var t=this;return e&&e.childKeys&&e.childKeys.length?e.childKeys.map((function(n){return t.buildListItem(n,e.childKeys)})):null}},{key:"updateAriaLiveContent",value:function(e){var t=this.props.intl.formatMessage({id:"Terra.navigation.side.menu.selected"});this.visuallyHiddenComponent&&(this.visuallyHiddenComponent.innerText=e?"".concat(e," ").concat(t):"")}},{key:"render",value:function(){var e=this,t=this.props,n=(t.menuItems,t.onChange,t.routingStackBack),a=(t.selectedChildKey,t.selectedMenuKey),i=t.toolbar,o=t.variant,s=(0,u.default)(t,K),d=this.state.items[a],r=this.context,c=S(["side-menu-content-container",r.className]),f=this.state.parents[a];this.onBack=f?this.handleBackClick:n;var m,_=S([{"header-style":o===C.default.DRILL_IN},r.className]);return this.onBack||d&&!d.isRootMenu?m=h.default.createElement("li",{className:_,role:"none"},h.default.createElement("div",{className:S("side-navigation-menu"),role:"menuitem",ref:function(t){return e.backButtonRef(t)},type:"button",tabIndex:this.onBack?"0":"-1",onKeyDown:this.handleBackKeydown,onClick:this.onBack,"data-navigation-side-menu":!0},this.onBack?h.default.createElement("span",{className:S(["header-icon","back"])}):null,h.default.createElement("h1",{className:S("title")},d?d.text:null)),i):c=S(["side-menu-content-container","is-root"]),h.default.createElement(h.Fragment,null,h.default.createElement(y.default,{"aria-atomic":"true","aria-live":"assertive","aria-relevant":"additions text",refCallback:this.setVisuallyHiddenComponent}),h.default.createElement(p.default,(0,l.default)({},s,{className:c}),h.default.createElement("nav",{role:"navigation","aria-label":this.props.ariaLabel},h.default.createElement("ul",{role:"menu",ref:function(t){return e.handleMenuListRef(t)},className:S(["side-menu-list"])},m,this.buildListContent(d,m)))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.menuItems!==t.prevPropsMenuItem?x(e.menuItems,e.variant):null}}])}(h.Component);L.propTypes=B,L.defaultProps=w,L.contextType=b.default,L.Opts={},L.Opts.Variants=C.default;t.default=(0,_.injectIntl)(L)},46575:function(e,t,n){var a=n(24994),i=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(94634)),u=a(n(91847)),o=a(n(17383)),s=a(n(34579)),d=a(n(28452)),r=a(n(63072)),c=a(n(29511)),f=E(n(96540)),h=a(n(5556)),m=n(8604),_=a(n(46942)),v=a(n(67967)),p=a(n(23695)),y=E(n(25966)),k=a(n(53665)),b=a(n(16524)),I=n(33049),M=a(n(9343)),C=a(n(37357)),g=["hasChevron","intl","isSelected","isDisabled","text","icon","variant"];function K(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(K=function(e){return e?n:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=K(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}return a.default=e,n&&n.set(e,a),a}function D(e,t,n){return t=(0,r.default)(t),(0,d.default)(e,N()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function N(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(N=function(){return!!e})()}var R=v.default.bind(C.default),S={hasChevron:h.default.bool,intl:h.default.shape({formatMessage:h.default.func}).isRequired,isSelected:h.default.bool,onKeyDown:h.default.func,onKeyUp:h.default.func,text:h.default.string,tabIndex:h.default.string,icon:h.default.element,showIcon:h.default.bool,variant:h.default.oneOf([M.default.NAVIGATION_SIDE_MENU,M.default.DRILL_IN]),isDisabled:h.default.bool},B=function(e){function t(e){var n;return(0,o.default)(this,t),(n=D(this,t,[e])).state={active:!1},n.handleKeyDown=n.handleKeyDown.bind(n),n.textRender=n.textRender.bind(n),n.handleMenuItemRef=n.handleMenuItemRef.bind(n),n}return(0,c.default)(t,e),(0,s.default)(t,[{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode!==y.KEY_SPACE&&e.nativeEvent.keyCode!==y.KEY_RETURN||(this.setState({active:!0}),this.props.onKeyDown(e)),e&&e.nativeEvent&&this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleMenuItemRef",value:function(e){this.contentNode=e}},{key:"textRender",value:function(){var e=this.props,t=e.intl,n=e.isSelected,a=e.text,i=t.formatMessage({id:"Terra.navigation.side.menu.selected"});return n?f.default.createElement(f.Fragment,null,a,f.default.createElement(b.default,{text:i})):a}},{key:"render",value:function(){var e=this.props,t=e.hasChevron,n=(e.intl,e.isSelected),a=e.isDisabled,i=(e.text,e.icon),o=e.variant,s=(0,u.default)(e,g),d=this.context,r=t&&!i?f.default.createElement(I.IconFolder,null):i||f.default.createElement(I.IconDocuments,null),c=(0,_.default)(R("menu-item",{"is-selected":n&&!t},{"is-active":this.state.active},{"is-drill-in":o===M.default.DRILL_IN},d.className),s.className),h=R("list-item",{"has-border":o===M.default.DRILL_IN},{"is-disabled":a});return f.default.createElement("li",{className:h,role:"none"},f.default.createElement("div",(0,l.default)({role:"menuitem",ref:this.handleMenuItemRef},s,{tabIndex:this.props.tabIndex,className:c,onKeyDown:this.handleKeyDown,"aria-haspopup":t}),o===M.default.DRILL_IN&&r&&f.default.createElement("span",{className:R("icon")},r),f.default.createElement("div",{className:R("title")},this.textRender()),t&&f.default.createElement("span",{className:R("chevron")},f.default.createElement(k.default,null))))}}])}(f.default.Component);B.propTypes=S,B.contextType=p.default;t.default=(0,m.injectIntl)(B)},9343:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={NAVIGATION_SIDE_MENU:"navigation-side-menu",DRILL_IN:"drill-in"}},37357:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"MenuItem-module__clinical-lowlight-theme___WejfL","orion-fusion-theme":"MenuItem-module__orion-fusion-theme___Dd4c1","list-item":"MenuItem-module__list-item___Pg+tM","has-border":"MenuItem-module__has-border___zZdID","is-disabled":"MenuItem-module__is-disabled___zSjdX","menu-item":"MenuItem-module__menu-item___PGkUQ","is-hovered":"MenuItem-module__is-hovered___Gt2R8",chevron:"MenuItem-module__chevron___wpMIy","is-focused":"MenuItem-module__is-focused___UheNC","is-selected":"MenuItem-module__is-selected___nZvDz","is-active":"MenuItem-module__is-active___ZqiaG",title:"MenuItem-module__title___cKrPN",icon:"MenuItem-module__icon___M7PKU","is-drill-in":"MenuItem-module__is-drill-in___ZRgBa"}},44395:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"NavigationSideMenu-module__clinical-lowlight-theme___21td8","orion-fusion-theme":"NavigationSideMenu-module__orion-fusion-theme___sArMM","side-menu-content-container":"NavigationSideMenu-module__side-menu-content-container___zBCiE","is-root":"NavigationSideMenu-module__is-root___Q49aQ","header-style":"NavigationSideMenu-module__header-style___60kSd","side-menu-list":"NavigationSideMenu-module__side-menu-list___UXvjw","side-navigation-menu":"NavigationSideMenu-module__side-navigation-menu___gUtW3","header-icon":"NavigationSideMenu-module__header-icon___2wVIp",back:"NavigationSideMenu-module__back___8g53E",title:"NavigationSideMenu-module__title___XBUmb"}}}]);