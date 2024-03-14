"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[662],{97787:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RoutingMenu",{enumerable:!0,get:function(){return y.default}}),t.default=t.Utils=void 0;var i=a(n(43693)),o=a(n(17383)),u=a(n(34579)),r=a(n(28452)),l=a(n(63072)),s=a(n(29511)),f=a(n(96540)),c=a(n(5556)),d=a(n(63707)),p=n(35423),m=n(28651),g=a(n(42723)),y=a(n(38734)),h=a(n(12178)),v=a(n(52921)),_=a(n(78655)),C=a(n(62412)),M=a(n(59392));function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t,n){return t=(0,l.default)(t),(0,r.default)(e,b()?Reflect.construct(t,n||[],(0,l.default)(e).constructor):t.apply(e,n))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var k=["default","tiny","small","medium","large","huge"],E={extensions:c.default.element,indexPath:c.default.string.isRequired,nameConfig:_.default.nameConfigPropType,navigationAlignment:_.default.navigationAlignmentPropType,navigationItems:_.default.navigationItemsPropType,routingConfig:c.default.shape({menu:p.routeConfigPropType,content:p.routeConfigPropType}).isRequired,utilityConfig:_.default.utilityConfigPropType},D=function(e){function t(e){var n;return(0,o.default)(this,t),(n=T(this,t,[e])).state={applicationLayoutRoutingConfig:t.buildRoutingConfig(n.props),prevProps:{nameConfig:e.nameConfig,routingConfig:e.routingConfig,utilityConfig:e.utilityConfig,navigationItems:e.navigationItems,indexPath:e.indexPath}},n}return(0,s.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props,t=e.nameConfig,n=e.utilityConfig,a=e.navigationAlignment,i=e.navigationItems,o=e.indexPath,u=e.extensions,r=this.state.applicationLayoutRoutingConfig,l=(i||[]).some((function(e){return e.icon})),s=i?(i||[]).map((function(e,t){return{id:"application-layout-tab-".concat(t),path:e.path,text:e.text,externalLink:e.externalLink,icon:e.icon}})):void 0,c=f.default.createElement(v.default,{nameConfig:t,utilityConfig:n,extensions:u,applicationLinks:{alignment:a,links:s},hasIcons:l});return f.default.createElement(g.default,null,f.default.createElement(d.default,{config:r,header:c,indexPath:o}))}}],[{key:"buildMenuNavigationItems",value:function(e){var t=e.navigationItems,n=e.routingConfig;if(!n.menu)return t;var a=Object.keys(n.menu).map((function(e){return n.menu[e].path}));return t.map((function(e){return{externalLink:e.externalLink,path:e.path,text:e.text,hasSubMenu:a.filter((function(t){return(0,m.matchPath)(e.path,{path:t})})).length>0}}))}},{key:"buildNavigationMenuConfig",value:function(e){var n=t.buildMenuNavigationItems(e),a={componentClass:y.default,props:{menuItems:n},refuseRoutingStackNavigation:0===n.length};return{"/":{path:"/",component:{tiny:a,small:a}}}}},{key:"buildApplicationMenus",value:function(e,t){var n=e.nameConfig,a=e.utilityConfig,i=e.extensions;if(t){var o={};return Object.keys(t).forEach((function(e){var u=O({},t[e]),r=O({},u.component);k.forEach((function(e){if(r[e]){var t=O({},r[e]),o=O({},t.props);o.applicationMenuWrapperProps={contentComponentClass:t.componentClass,nameConfig:n,utilityConfig:a,extensions:i},t.props=o,t.componentClass=h.default,r[e]=t}})),u.component=r,o[e]=u})),o}}},{key:"buildRoutingConfig",value:function(e){var n=e.routingConfig;return O(O({},n),{},{menu:t.buildApplicationMenus(e,O(O({},n.menu),t.buildNavigationMenuConfig(e)))})}},{key:"getDerivedStateFromProps",value:function(e,n){return n.prevProps.nameConfig!==e.nameConfig||n.prevProps.utilityConfig!==e.utilityConfig||n.prevProps.routingConfig!==e.routingConfig||n.prevProps.navigationItems!==e.navigationItems||n.prevProps.indexPath!==e.indexPath?{applicationLayoutRoutingConfig:t.buildRoutingConfig(e)}:null}}]),t}(f.default.Component);D.propTypes=E,D.defaultProps={navigationItems:[]};t.default=D,t.Utils={helpers:C.default,utilityHelpers:M.default,propTypes:_.default}},38734:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(17383)),o=a(n(34579)),u=a(n(28452)),r=a(n(63072)),l=a(n(12475)),s=a(n(29511)),f=a(n(96540)),c=a(n(5556)),d=n(28651),p=a(n(58758)),m=a(n(54986)),g=a(n(78655));function y(e,t,n){return t=(0,r.default)(t),(0,u.default)(e,h()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function h(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(h=function(){return!!e})()}var v={title:c.default.string,menuItems:c.default.arrayOf(c.default.shape({text:c.default.string.isRequired,path:c.default.string.isRequired,hasSubMenu:c.default.bool})),layoutConfig:g.default.layoutConfigPropType.isRequired,routingStackDelegate:m.default.propType.isRequired,location:c.default.shape({pathname:c.default.string}).isRequired},_="routingMenuRootMenuKey",C=function(e){function t(e){var n;return(0,i.default)(this,t),(n=y(this,t,[e])).handleMenuChange=n.handleMenuChange.bind((0,l.default)(n)),n.state={selectedChildKey:t.getSelectedChildKey(e.location.pathname,e.menuItems),prevPropsLocationPathName:e.location.pathname,prevPropsMenuItems:e.menuItems},n}return(0,s.default)(t,e),(0,o.default)(t,[{key:"handleMenuChange",value:function(e,t){var n,a=this.props,i=a.routingStackDelegate,o=a.layoutConfig;return t.metaData.externalLink?n=function(){return window.open(t.metaData.externalLink.path,t.metaData.externalLink.target||"_blank")}:(this.setState({selectedChildKey:t.selectedChildKey}),n=function(){return i.show({path:t.metaData.path})}),!t.metaData.hasSubMenu&&o.toggleMenu?o.toggleMenu().then((function(){n()})):Promise.resolve().then((function(){return n()}))}},{key:"render",value:function(){var e=this.props,n=e.title,a=e.routingStackDelegate,i=e.menuItems,o=this.state.selectedChildKey,u=t.buildSideMenuItems(i);return u.push({key:_,text:n||"",childKeys:u.map((function(e){return e.key})),isRootMenu:!a.showParent&&!n}),f.default.createElement(p.default,{menuItems:u,onChange:this.handleMenuChange,routingStackBack:a.showParent,selectedMenuKey:_,selectedChildKey:o,"data-routing-menu":!0})}}],[{key:"buildSideMenuItems",value:function(e){return e.map((function(e){return{key:e.path,text:e.text,hasSubMenu:!!e.hasSubMenu,metaData:{path:e.path,externalLink:e.externalLink,hasSubMenu:!!e.hasSubMenu}}}))}},{key:"getDerivedStateFromProps",value:function(e,n){return e.location.pathname!==n.prevPropsLocationPathName||e.menuItems!==n.prevPropsMenuItems?{prevPropsLocationPathName:e.location.pathname,prevPropsMenuItems:e.menuItems,selectedChildKey:t.getSelectedChildKey(e.location.pathname,e.menuItems)}:null}},{key:"getSelectedChildKey",value:function(e,t){for(var n=0,a=t.length;n<a;n+=1){var i=t[n];if(i.path&&(0,d.matchPath)(e,{path:i.path}))return i.path}}}]),t}(f.default.Component);C.propTypes=v;t.default=(0,d.withRouter)(C)},77633:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94634)),o=a(n(91847)),u=a(n(17383)),r=a(n(34579)),l=a(n(28452)),s=a(n(63072)),f=a(n(12475)),c=a(n(29511)),d=a(n(96540)),p=a(n(5556)),m=a(n(46942)),g=a(n(67967)),y=a(n(23695)),h=a(n(25108)),v=n(54183),_=a(n(54986)),C=n(60209),M=n(42723),P=n(12643),O=a(n(78655)),T=a(n(62412)),b=a(n(73572)),k=a(n(49451)),E=["disclosureManager","content","extensions","layoutConfig","nameConfig","routingStackDelegate","utilityConfig"];function D(e,t,n){return t=(0,s.default)(t),(0,l.default)(e,S()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}var R=g.default.bind(k.default),N={content:p.default.element,extensions:p.default.element,layoutConfig:O.default.layoutConfigPropType.isRequired,nameConfig:O.default.nameConfigPropType,routingStackDelegate:_.default.propType.isRequired,utilityConfig:O.default.utilityConfigPropType,disclosureManager:P.disclosureManagerShape},x=function(e){function t(e){var n;return(0,u.default)(this,t),(n=D(this,t,[e])).renderHeader=n.renderHeader.bind((0,f.default)(n)),n.renderExtensions=n.renderExtensions.bind((0,f.default)(n)),n.renderFooter=n.renderFooter.bind((0,f.default)(n)),n.handleUtilityDiscloseRequest=n.handleUtilityDiscloseRequest.bind((0,f.default)(n)),n.handleUtilityOnChange=n.handleUtilityOnChange.bind((0,f.default)(n)),n.handleBlur=n.handleBlur.bind((0,f.default)(n)),n}return(0,c.default)(t,e),(0,r.default)(t,[{key:"handleUtilityDiscloseRequest",value:function(e){var t=this.props,n=t.disclosureManager,a=t.layoutConfig;a&&a.toggleMenu&&a.toggleMenu(),n&&e&&n.disclose({preferredType:M.disclosureType,dimensions:{height:"420",width:"320"},content:{component:d.default.createElement(b.default,null,e),key:"application-menu-utility-menu"}})}},{key:"handleBlur",value:function(e){var t=this.props,n=t.utilityConfig,a=t.layoutConfig,i=e.currentTarget,o=e.relatedTarget;i.contains(o)||n.onBlur(e,a)}},{key:"handleUtilityOnChange",value:function(e,t){var n=this.props,a=n.utilityConfig,i=n.disclosureManager;a.onChange(e,t,i&&i.disclose)}},{key:"renderHeader",value:function(e){var t=this.props.nameConfig;return e&&t&&(t.accessory||t.title)?d.default.createElement("div",{className:R("menu-header")},d.default.createElement(v.ApplicationMenuName,{accessory:t.accessory,title:t.title})):null}},{key:"renderExtensions",value:function(e){var t=this.props,n=t.layoutConfig,a=t.extensions;return e&&a?d.default.cloneElement(a,{layoutConfig:n}):null}},{key:"renderFooter",value:function(e){var t=this.props.utilityConfig;return e&&t?d.default.createElement(C.ApplicationMenuUtility,{onChange:this.handleUtilityOnChange,onDisclose:this.handleUtilityDiscloseRequest,title:t.title,accessory:t.accessory,menuItems:t.menuItems,initialSelectedKey:t.initialSelectedKey,"data-application-menu-utility":!0}):null}},{key:"render",value:function(){var e,t=this.props,n=(t.disclosureManager,t.content),a=(t.extensions,t.layoutConfig),u=(t.nameConfig,t.routingStackDelegate),r=t.utilityConfig,l=(0,o.default)(t,E),s=this.context,f=(0,m.default)(R("application-menu",s.className),l.className),c=T.default.isSizeCompact(a.size);return n&&(e=d.default.cloneElement(n,{layoutConfig:a,routingStackDelegate:u})),d.default.createElement("div",(0,i.default)({},l,{className:f,onBlur:r&&r.onBlur?this.handleBlur:void 0}),d.default.createElement(h.default,{header:this.renderHeader(c),extensions:this.renderExtensions(c),content:e,footer:this.renderFooter(c)}))}}]),t}(d.default.Component);x.propTypes=N,x.contextType=y.default;t.default=(0,P.withDisclosureManager)(x)},12178:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(91847)),o=a(n(96540)),u=a(n(5556)),r=a(n(54986)),l=a(n(77633)),s=a(n(78655)),f=["layoutConfig","routingStackDelegate","applicationMenuWrapperProps"],c={navigationItems:s.default.navigationItemsPropType,layoutConfig:s.default.layoutConfigPropType.isRequired,routingStackDelegate:r.default.propType.isRequired,applicationMenuWrapperProps:u.default.shape({contentComponentClass:u.default.func.isRequired,nameConfig:s.default.nameConfigPropType,utilityConfig:s.default.utilityConfigPropType,extensions:u.default.node}).isRequired},d=function(e){var t=e.layoutConfig,n=e.routingStackDelegate,a=e.applicationMenuWrapperProps,u=(0,i.default)(e,f),r=a.contentComponentClass;return o.default.createElement(l.default,{layoutConfig:t,routingStackDelegate:n,nameConfig:a.nameConfig,utilityConfig:a.utilityConfig,extensions:a.extensions,content:o.default.createElement(r,u)})};d.propTypes=c;t.default=d},73572:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(43693)),o=a(n(91847)),u=a(n(96540)),r=a(n(5556)),l=n(12643),s=["disclosureManager","children"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={disclosureManager:l.disclosureManagerShape,children:r.default.node.isRequired},p=function(e){var t=e.disclosureManager,n=e.children,a=(0,o.default)(e,s);return u.default.cloneElement(n,c(c({},a),{},{onRequestClose:t.dismiss,isHeightBounded:!0}))};p.propTypes=d;t.default=(0,l.withDisclosureManager)(p)},8541:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94634)),o=a(n(91847)),u=a(n(96540)),r=a(n(5556)),l=a(n(46942)),s=a(n(67967)),f=a(n(23695)),c=a(n(10417)),d=["userDetail","userName","userPhoto"],p=s.default.bind(c.default),m={userDetail:r.default.string,userName:r.default.string,userPhoto:r.default.element},g=function(e){var t,n=e.userDetail,a=e.userName,r=e.userPhoto,s=(0,o.default)(e,d),c=u.default.useContext(f.default),m=(0,l.default)(p("user-data",c.className),s.className);return(a||n)&&(t=u.default.createElement("div",{className:p("user-info")},!!a&&u.default.createElement("div",{className:p("name")},a),!!n&&u.default.createElement("div",{className:p("detail")},n))),u.default.createElement("div",(0,i.default)({},s,{className:m}),!!r&&u.default.cloneElement(r,{className:p("photo")}),t)};g.propTypes=m;t.default=g},59392:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(96540)),o=n(60209),u=a(n(8541)),r={MENU:"menu",USER_INFORMATION:"user-information",CHANGE_PHOTO:"change-photo",SETTINGS:"settings",APPEARANCE:"appearance",SECURITY:"security",HELP:"help",GETTING_STARTED:"getting-started",ABOUT:"about",TERMS_OF_USE:"terms-of-use",LOG_OUT:"log-out"},l=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.menu"})},s=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.userInformation"})},f=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.changePhoto"})},c=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.settings"})},d=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.appearance"})},p=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.security"})},m=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.help"})},g=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.gettingStarted"})},y=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.about"})},h=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.termsOfUse"})},v=function(e){return e.formatMessage({id:"Terra.applicationLayout.utilityDefaults.logOut"})};t.default={getDefaultUtilityItems:function(e,t,n){var a=i.default.createElement(u.default,{userName:t.name,userDetail:t.detail,userPhoto:t.photo});return function(e,t){return t?(t.forEach((function(t){if(t.parentKey){var n=e.filter((function(e){return e.key===t.parentKey}));if(!n.length)return;var a=n[0];a.childKeys?a.childKeys.indexOf(t.key)<0&&a.childKeys.push(t.key):a.childKeys=[t.key]}})),e.concat(t)):e}([{key:r.MENU,title:l(e),childKeys:[r.USER_INFORMATION,r.SETTINGS,r.HELP,r.LOG_OUT]},{key:r.USER_INFORMATION,title:s(e),content:a,childKeys:[r.CHANGE_PHOTO]},{key:r.SETTINGS,title:c(e),childKeys:[r.APPEARANCE,r.SECURITY]},{key:r.LOG_OUT,contentLocation:o.UtilityUtils.LOCATIONS.FOOTER,title:v(e)},{key:r.HELP,title:m(e),childKeys:[r.GETTING_STARTED,r.ABOUT,r.TERMS_OF_USE]},{key:r.CHANGE_PHOTO,title:f(e)},{key:r.APPEARANCE,title:d(e)},{key:r.SECURITY,title:p(e)},{key:r.GETTING_STARTED,title:g(e)},{key:r.ABOUT,title:y(e)},{key:r.TERMS_OF_USE,title:h(e)}],n)},defaultKeys:r,locations:o.UtilityUtils.LOCATIONS}},25108:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94634)),o=a(n(91847)),u=a(n(96540)),r=a(n(5556)),l=a(n(67967)),s=a(n(56429)),f=["content","extensions","footer","header"],c=l.default.bind(s.default),d={content:r.default.element,extensions:r.default.element,footer:r.default.element,header:r.default.element},p=function(e){var t,n,a,r,l=e.content,s=e.extensions,d=e.footer,p=e.header,m=(0,o.default)(e,f),g=c(["menu","fill",m.className]);return p&&(t=u.default.createElement("div",{className:c(["fit","header"])},p)),l&&(n=u.default.createElement("div",{className:c(["fill","content"])},u.default.createElement("div",{className:c("normalizer")},l))),s&&(a=u.default.createElement("div",{className:c(["fit","widget"])},s)),d&&(r=u.default.createElement("div",{className:c(["fit","footer"])},d)),u.default.createElement("div",(0,i.default)({},m,{className:g}),t,u.default.createElement("div",{className:c(["fill","body"])},a,n),r)};p.propTypes=d;t.default=p},49451:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ApplicationMenu-module__clinical-lowlight-theme___Qf5Kk","orion-fusion-theme":"ApplicationMenu-module__orion-fusion-theme___m9Gez","application-menu":"ApplicationMenu-module__application-menu___Cxvc3","menu-header":"ApplicationMenu-module__menu-header___2auo7"}},10417:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"UserData-module__clinical-lowlight-theme___ZgDMj","orion-fusion-theme":"UserData-module__orion-fusion-theme___9iihZ","user-data":"UserData-module__user-data___4MxMt",photo:"UserData-module__photo___iTfxG","user-info":"UserData-module__user-info___cRHeD",name:"UserData-module__name___zwzs5",detail:"UserData-module__detail___xFGuz"}},56429:function(e,t,n){n.r(t),t.default={fit:"ApplicationMenuLayout-module__fit___fJ-8H",fill:"ApplicationMenuLayout-module__fill___NpC9g",menu:"ApplicationMenuLayout-module__menu___+THcL",header:"ApplicationMenuLayout-module__header___kdgcp",footer:"ApplicationMenuLayout-module__footer___k9Yr3",body:"ApplicationMenuLayout-module__body___6HrKr",widgets:"ApplicationMenuLayout-module__widgets___-YRy1",content:"ApplicationMenuLayout-module__content___T7isC",normalizer:"ApplicationMenuLayout-module__normalizer___uQB7W"}}}]);