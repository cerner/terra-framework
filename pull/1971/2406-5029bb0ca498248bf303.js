"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[2406],{42947:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(10434)),l=n(a(70215)),o=n(a(67294)),u=n(a(45697)),r=n(a(93967)),d=n(a(19845)),s=n(a(47341)),p=a(25387),c=n(a(56583)),f=["extensions","logo","navigation","intl","toggle","utilities"],m=d.default.bind(c.default),_={extensions:u.default.element,logo:u.default.element,intl:u.default.shape({formatMessage:u.default.func}).isRequired,navigation:u.default.element,toggle:u.default.element,utilities:u.default.element},y=function(e){var t,a,n,u,d,p=e.extensions,c=e.logo,_=e.navigation,y=e.intl,g=e.toggle,h=e.utilities,v=(0,l.default)(e,f),b=o.default.useContext(s.default),C=(0,r.default)(m("header","fill",b.className),v.className);c&&(t=o.default.createElement("div",{className:m("fit","start","logo")},c)),_&&(a=o.default.createElement("nav",{role:"navigation",className:m("fill")},_)),p&&(n=o.default.createElement("div",{className:m("fit","end","extensions")},p)),h&&(u=o.default.createElement("div",{className:m("fit","end","utilities")},h)),g&&(d=o.default.createElement("div",{className:m("fit")},g));var N,A=o.default.createElement("div",{className:m("fill","header-inner")},a,n),P=o.default.createElement("button",{type:"button",onClick:function(){var e=document.querySelector(["[data-terra-layout-main]"]);e&&(e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex"))},className:m("skip-content")},y.formatMessage({id:"Terra.ApplicationHeaderLayout.SkipToContent"}));return(A||t||u)&&(N=o.default.createElement("div",{className:m("fill","header-body")},t,A,u)),o.default.createElement("div",(0,i.default)({},v,{className:C}),P,d,N)};y.propTypes=_;t.default=(0,p.injectIntl)(y)},2406:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(10434)),l=n(a(70215)),o=n(a(56690)),u=n(a(89728)),r=n(a(94993)),d=n(a(73808)),s=n(a(66115)),p=n(a(61655)),c=n(a(67294)),f=n(a(45697)),m=n(a(93967)),_=n(a(19845)),y=n(a(47341)),g=a(25387),h=a(56019),v=n(a(42947)),b=a(67413),C=a(73965),N=a(57287),A=n(a(38215)),P=n(a(92306)),T=a(37714),k=n(a(9071)),E=n(a(19786)),L=n(a(61997)),R=["disclosureManager","applicationLinks","extensions","layoutConfig","nameConfig","utilityConfig","navigationLayoutRoutes","navigationLayoutSize","intl","hasIcons"];function H(e,t,a){return t=(0,d.default)(t),(0,r.default)(e,M()?Reflect.construct(t,a||[],(0,d.default)(e).constructor):t.apply(e,a))}function M(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(M=function(){return!!e})()}var O=_.default.bind(L.default),U={applicationLinks:N.ApplicationLinksPropType,extensions:f.default.element,layoutConfig:k.default.layoutConfigPropType,navigationLayoutRoutes:f.default.arrayOf(T.processedRoutesPropType),navigationLayoutSize:f.default.string,nameConfig:k.default.nameConfigPropType,utilityConfig:k.default.utilityConfigPropType,intl:f.default.shape({formatMessage:f.default.func}),disclosureManager:h.disclosureManagerShape,hasIcons:f.default.bool},q=function(e){function t(e){var a;return(0,o.default)(this,t),(a=H(this,t,[e])).handleUtilityDiscloseRequest=a.handleUtilityDiscloseRequest.bind((0,s.default)(a)),a.handleUtilityPopupCloseRequest=a.handleUtilityPopupCloseRequest.bind((0,s.default)(a)),a.handleUtilityOnChange=a.handleUtilityOnChange.bind((0,s.default)(a)),a.getTargetRef=a.getTargetRef.bind((0,s.default)(a)),a.setContentNode=a.setContentNode.bind((0,s.default)(a)),a.renderToggle=a.renderToggle.bind((0,s.default)(a)),a.renderAppName=a.renderAppName.bind((0,s.default)(a)),a.renderExtensions=a.renderExtensions.bind((0,s.default)(a)),a.renderNavigation=a.renderNavigation.bind((0,s.default)(a)),a.renderUtilities=a.renderUtilities.bind((0,s.default)(a)),a.renderUtilitiesPopup=a.renderUtilitiesPopup.bind((0,s.default)(a)),a.state={utilityComponent:void 0},a}return(0,p.default)(t,e),(0,u.default)(t,[{key:"handleUtilityDiscloseRequest",value:function(e){this.setState({utilityComponent:c.default.cloneElement(e,{onRequestClose:this.handleUtilityPopupCloseRequest})})}},{key:"handleUtilityPopupCloseRequest",value:function(){this.state.utilityComponent&&this.setState({utilityComponent:void 0})}},{key:"handleUtilityOnChange",value:function(e,t){var a=this.props,n=a.utilityConfig,i=a.disclosureManager;n.onChange(e,t,i&&i.disclose)}},{key:"setContentNode",value:function(e){this.contentNode=e}},{key:"getTargetRef",value:function(){if(this.contentNode)return this.contentNode.querySelector("[data-application-header-utility]")}},{key:"renderToggle",value:function(){var e=this.props,t=e.layoutConfig,a=e.intl;return t.toggleMenu?c.default.createElement("div",{className:O("navbar-toggle")},c.default.createElement("button",{type:"button",className:O("toggle-button"),"aria-label":a.formatMessage({id:"Terra.applicationLayout.applicationHeader.menuToggleLabel"}),onClick:t.toggleMenu,"data-application-header-toggle":!0},c.default.createElement(A.default,null))):null}},{key:"renderAppName",value:function(){var e=this.props.nameConfig;return e&&(e.accessory||e.title)?c.default.createElement(C.ApplicationHeaderName,{accessory:e.accessory,title:e.title}):null}},{key:"renderNavigation",value:function(e){var t=this.props.applicationLinks;return e?this.renderAppName():t.links&&t.links.length?c.default.createElement(N.ApplicationTabs,t):null}},{key:"renderExtensions",value:function(e){var t=this.props,a=t.layoutConfig,n=t.extensions;return!e&&n?c.default.cloneElement(n,{layoutConfig:a}):null}},{key:"renderUtilities",value:function(e){var t=this.props.utilityConfig;return!e&&t?c.default.createElement(b.ApplicationHeaderUtility,{onChange:this.handleUtilityOnChange,onDisclose:this.handleUtilityDiscloseRequest,title:t.title,accessory:t.accessory,menuItems:t.menuItems,initialSelectedKey:t.initialSelectedKey,"data-application-header-utility":!0}):null}},{key:"renderUtilitiesPopup",value:function(){var e=this.state.utilityComponent;return e?c.default.createElement(P.default,{attachmentBehavior:"push",contentAttachment:"top center",contentHeight:"auto",contentWidth:"240",isArrowDisplayed:!0,isHeaderDisabled:!0,isOpen:!0,onRequestClose:this.handleUtilityPopupCloseRequest,targetRef:this.getTargetRef},e):null}},{key:"render",value:function(){var e=this.props,t=(e.disclosureManager,e.applicationLinks,e.extensions,e.layoutConfig),a=(e.nameConfig,e.utilityConfig,e.navigationLayoutRoutes,e.navigationLayoutSize,e.intl,e.hasIcons),n=(0,l.default)(e,R),o=this.context,u=(0,m.default)(O("application-navbar",{"application-navbar-with-icons":a},o.className),n.className),r=E.default.isSizeCompact(t.size);return c.default.createElement("header",(0,i.default)({role:"banner"},n,{className:u,ref:this.setContentNode}),c.default.createElement(v.default,{toggle:this.renderToggle(),logo:r?null:this.renderAppName(),navigation:this.renderNavigation(r),extensions:this.renderExtensions(r),utilities:this.renderUtilities(r)}),this.renderUtilitiesPopup())}}]),t}(c.default.Component);q.propTypes=U,q.defaultProps={applicationLinks:{},hasIcons:!1},q.contextType=y.default;t.default=(0,g.injectIntl)((0,h.withDisclosureManager)(q))},19786:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={isSizeCompact:function(e){return"tiny"===e||"small"===e}}},9071:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(45697)),l=a(67413),o=i.default.shape({size:i.default.string,toggleMenu:i.default.func,menuIsOpen:i.default.bool,togglePin:i.default.bool,menuIsPinned:i.default.bool}),u=i.default.shape({accessory:i.default.element,title:i.default.string}),r=i.default.oneOf(["start","center","end"]),d=i.default.arrayOf(i.default.shape({path:i.default.string.isRequired,text:i.default.string.isRequired,hasSubMenu:i.default.bool,icon:i.default.node})),s=i.default.shape({title:i.default.string,accessory:i.default.element,onChange:i.default.func.isRequired,onBlur:i.default.func,menuItems:i.default.arrayOf(l.UtilityUtils.itemShape).isRequired,initialSelectedKey:i.default.string.isRequired}),p=l.UtilityUtils.itemShape;t.default={utilityConfigPropType:s,utilityMenuItemPropType:p,layoutConfigPropType:o,nameConfigPropType:u,navigationAlignmentPropType:r,navigationItemsPropType:d}},57287:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.ApplicationLinksPropType=void 0,Object.defineProperty(t,"ApplicationTabs",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var i=n(a(45697)),l=n(a(67456)),o=t.ApplicationLinksPropType=i.default.shape({alignment:i.default.oneOf(["start","center","end"]),links:i.default.arrayOf(i.default.shape({id:i.default.string,path:i.default.string.isRequired,text:i.default.string.isRequired,icon:i.default.node}))}),u={ApplicationTabs:l.default,ApplicationLinksPropType:o};t.default=u},57920:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(10434)),l=n(a(70215)),o=n(a(67294)),u=n(a(45697)),r=n(a(93967)),d=n(a(19845)),s=n(a(47341)),p=n(a(54029)),c=["accessory","title"],f=d.default.bind(p.default),m={accessory:u.default.element,title:u.default.node},_=function(e){var t=e.accessory,a=e.title,n=(0,l.default)(e,c),u=o.default.useContext(s.default),d=(0,r.default)(f("application-header-name",u.className),n.className);return o.default.createElement("div",(0,i.default)({},n,{className:d}),t&&o.default.createElement("div",{className:f("accessory")},t),a&&o.default.createElement("div",{className:f("title")},a))};_.propTypes=m;t.default=_},13917:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(10434)),l=n(a(70215)),o=n(a(67294)),u=n(a(45697)),r=n(a(93967)),d=n(a(19845)),s=n(a(47341)),p=n(a(85808)),c=["accessory","title"],f=d.default.bind(p.default),m={accessory:u.default.element,title:u.default.node},_=function(e){var t=e.accessory,a=e.title,n=(0,l.default)(e,c),u=o.default.useContext(s.default),d=(0,r.default)(f("application-menu-name",u.className),n.className);return o.default.createElement("div",(0,i.default)({},n,{className:d}),t&&o.default.createElement("div",{className:f("accessory")},t),a&&o.default.createElement("div",{className:f("title")},a))};_.propTypes=m;t.default=_},73965:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ApplicationHeaderName",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"ApplicationMenuName",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var i=n(a(57920)),l=n(a(13917)),o={ApplicationHeaderName:i.default,ApplicationMenuName:l.default};t.default=o},37714:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.supportedComponentBreakpoints=t.routePropType=t.routeConfigPropType=t.processedRoutesPropType=t.navigationLayoutConfigPropType=t.componentConfigPropType=void 0;var i=n(a(18698)),l=n(a(45697)),o=t.supportedComponentBreakpoints=["tiny","small","medium","large","huge"],u=t.componentConfigPropType=l.default.objectOf((function(e,t,a,n,l){if(!("default"===t||o.indexOf(t)>=0))return new Error("Invalid prop '".concat(l,"' supplied to '").concat(a,"'. Validation failed."));var u=e[t],r=!0;return null!==u&&("object"!==(0,i.default)(u)||!u.componentClass||"object"!==(0,i.default)(u.props)&&null!==u.props&&void 0!==u.props)&&(r=!1),!!r||new Error("Invalid prop '".concat(l,"' supplied to '").concat(a,"'. Validation failed."))})),r=t.routePropType=l.default.shape({path:function(e,t,a){return!!/\/.*/.test(e[t])||new Error("Invalid prop `".concat(t,"` supplied to")+" `".concat(a,"`. Validation failed. ").concat(t," must start with a forward slash (/)."))},component:u.isRequired}),d=t.routeConfigPropType=l.default.objectOf(r);t.navigationLayoutConfigPropType=l.default.shape({header:d,menu:d,content:d}),t.processedRoutesPropType=l.default.arrayOf(l.default.shape({path:l.default.string,componentClass:l.default.func,componentProps:l.default.object}))},56583:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderLayout-module__clinical-lowlight-theme___-1bgb","orion-fusion-theme":"ApplicationHeaderLayout-module__orion-fusion-theme___ENqi+",fit:"ApplicationHeaderLayout-module__fit___KL7Uq",fill:"ApplicationHeaderLayout-module__fill___PAPf7",start:"ApplicationHeaderLayout-module__start___MX918",end:"ApplicationHeaderLayout-module__end___BgrVv","header-inner":"ApplicationHeaderLayout-module__header-inner___hLyff",logo:"ApplicationHeaderLayout-module__logo___Wzf7u",utilities:"ApplicationHeaderLayout-module__utilities___bkZso",extensions:"ApplicationHeaderLayout-module__extensions___85n-7","header-body":"ApplicationHeaderLayout-module__header-body___HLbvX","skip-content":"ApplicationHeaderLayout-module__skip-content___8eF4z"}},61997:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeader-module__clinical-lowlight-theme___K6I7Q","orion-fusion-theme":"ApplicationHeader-module__orion-fusion-theme___yZ4yp","application-navbar":"ApplicationHeader-module__application-navbar___G88LK","application-navbar-with-icons":"ApplicationHeader-module__application-navbar-with-icons___gRpjX","navbar-toggle":"ApplicationHeader-module__navbar-toggle___S19D7","toggle-button":"ApplicationHeader-module__toggle-button___nVeta"}},54029:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ApplicationHeaderName-module__clinical-lowlight-theme___cDdoY","orion-fusion-theme":"ApplicationHeaderName-module__orion-fusion-theme___JSra+","application-header-name":"ApplicationHeaderName-module__application-header-name___zlk-U",accessory:"ApplicationHeaderName-module__accessory___-89IO",title:"ApplicationHeaderName-module__title___tfg+E"}},85808:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ApplicationMenuName-module__clinical-lowlight-theme___9oXBZ","orion-fusion-theme":"ApplicationMenuName-module__orion-fusion-theme___zvqtZ","application-menu-name":"ApplicationMenuName-module__application-menu-name___v1tX4",accessory:"ApplicationMenuName-module__accessory___8KRdw",title:"ApplicationMenuName-module__title___oWESV"}}}]);