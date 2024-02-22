"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[63707],{63707:function(t,e,n){var a=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(94634)),r=a(n(91847)),u=a(n(17383)),i=a(n(34579)),c=a(n(28452)),s=a(n(63072)),l=a(n(12475)),f=a(n(29511)),d=a(n(96540)),p=a(n(5556)),h=n(28651),v=a(n(58846)),m=a(n(88434)),g=n(35423),y=n(95664),P=["header","children","menu","menuText","config","indexPath","location","match","history","staticContext"];function b(t,e,n){return e=(0,s.default)(e),(0,c.default)(t,k()?Reflect.construct(e,n||[],(0,s.default)(t).constructor):e.apply(t,n))}function k(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(k=function(){return!!t})()}var R=function(t){var e=t||window.innerWidth;return e>=1440?"huge":e>=1216?"large":e>=992?"medium":e>=768?"small":"tiny"},E={header:p.default.element,menu:p.default.element,children:p.default.element,menuText:p.default.string,config:g.navigationLayoutConfigPropType.isRequired,indexPath:p.default.string,location:p.default.object.isRequired,match:p.default.object.isRequired,history:p.default.object.isRequired,staticContext:p.default.object},j=function(t){function e(t){var n;return(0,u.default)(this,e),(n=b(this,e,[t])).updateSize=n.updateSize.bind((0,l.default)(n)),n.state={size:R(),processedRoutes:e.processRouteConfig(t.config),prevPropsConfig:t.config},n}return(0,f.default)(e,t),(0,i.default)(e,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateSize)}},{key:"updateSize",value:function(){var t=R();this.state.size!==t&&this.setState({size:t})}},{key:"decorateElement",value:function(t,e){if(!t)return null;var n=this.state.size;return d.default.cloneElement(t,{navigationLayoutRoutes:e,navigationLayoutSize:n})}},{key:"render",value:function(){var t=this.props,e=t.header,n=t.children,a=t.menu,u=t.menuText,i=(t.config,t.indexPath),c=t.location,s=(t.match,t.history,t.staticContext,(0,r.default)(t,P)),l=this.state,f=l.size,p=l.processedRoutes,h=e||d.default.createElement(m.default,null),g=n||d.default.createElement(m.default,{redirectPath:i}),b=a;return!b&&(0,y.validateMatchExists)(c.pathname,p[f].menu)&&(b=d.default.createElement(m.default,{stackNavigationIsEnabled:!0})),d.default.createElement(v.default,(0,o.default)({},s,{header:this.decorateElement(h,p[f].header),menu:this.decorateElement(b,p[f].menu),menuText:u}),this.decorateElement(g,p[f].content))}}],[{key:"processRouteConfig",value:function(t){var e={};return g.supportedComponentBreakpoints.forEach((function(n){var a={};a.header=(0,y.reduceRouteConfig)(t.header,n),a.menu=(0,y.reduceRouteConfig)(t.menu,n),a.content=(0,y.reduceRouteConfig)(t.content,n),e[n]=a})),e}},{key:"getDerivedStateFromProps",value:function(t,n){return t.config!==n.prevPropsConfig?{processedRoutes:e.processRouteConfig(t.config)}:null}}]),e}(d.default.Component);j.propTypes=E;e.default=(0,h.withRouter)(j)},88434:function(t,e,n){var a=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(91847)),r=a(n(96540)),u=a(n(5556)),i=n(28651),c=a(n(67967)),s=a(n(41513)),l=n(35423),f=a(n(29071)),d=["navigationLayoutRoutes","redirectPath","stackNavigationIsEnabled"],p=c.default.bind(f.default),h={navigationLayoutRoutes:l.processedRoutesPropType,redirectPath:u.default.string,stackNavigationIsEnabled:u.default.bool},v=function(t){var e=t.navigationLayoutRoutes,n=t.redirectPath,a=t.stackNavigationIsEnabled,u=(0,o.default)(t,d);return r.default.createElement("div",{className:p("content")},r.default.createElement(s.default,{navEnabled:a,routes:e,ancestorProps:u},n&&r.default.createElement(i.Redirect,{to:n})))};v.propTypes=h;e.default=v},41513:function(t,e,n){var a=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(94634)),r=a(n(17383)),u=a(n(34579)),i=a(n(28452)),c=a(n(63072)),s=a(n(12475)),l=a(n(29511)),f=a(n(96540)),d=a(n(5556)),p=n(28651),h=a(n(54986));function v(t,e,n){return e=(0,c.default)(e),(0,i.default)(t,m()?Reflect.construct(e,n||[],(0,c.default)(t).constructor):e.apply(t,n))}function m(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(m=function(){return!!t})()}var g={routes:n(35423).processedRoutesPropType,navEnabled:d.default.bool,location:d.default.object,history:d.default.object,children:d.default.node,ancestorProps:d.default.object},y=function(t){function e(t){var n;return(0,r.default)(this,e),(n=v(this,e,[t])).updateStackLocation=n.updateStackLocation.bind((0,s.default)(n)),n.createRoutes=n.createRoutes.bind((0,s.default)(n)),n.state={stackLocation:void 0},n}return(0,l.default)(e,t),(0,u.default)(e,[{key:"componentDidUpdate",value:function(t){t!==this.props&&this.setState({stackLocation:void 0})}},{key:"updateStackLocation",value:function(t){this.setState({stackLocation:{pathname:t}})}},{key:"createRoutes",value:function(t){var e=this,n=this.props,a=n.navEnabled,r=n.location,u=n.history,i=n.ancestorProps,c=this.state.stackLocation;if(t&&t.length)return t.map((function(t){var n={location:c||r,show:function(t){var n=t.path;(0,p.matchPath)(r.pathname,{path:n})?e.updateStackLocation(n):u.push(n)}};t.parentPaths&&t.parentPaths.length&&(n.parentPaths=t.parentPaths.reduce((function(t,e){var n=(0,p.matchPath)(r.pathname,{path:e});return n&&t.push(n.url),t}),[]),a&&n.parentPaths.length&&(n.showParent=function(){e.updateStackLocation(n.parentPaths[n.parentPaths.length-1])},n.parentPaths.length>1&&(n.showRoot=function(){e.updateStackLocation(n.parentPaths[0])})));var s=t.componentClass;return f.default.createElement(p.Route,{path:t.path,key:t.path,render:function(){return f.default.createElement(p.Route,{location:e.props.location,render:function(){return f.default.createElement(s,(0,o.default)({},i,t.componentProps,{routingStackDelegate:h.default.create(n)}))}})}})}))}},{key:"render",value:function(){var t=this.props,e=t.routes,n=t.location,a=t.children;return f.default.createElement(p.Switch,{location:this.state.stackLocation||n},this.createRoutes(e),a)}}]),e}(f.default.Component);y.propTypes=g;e.default=(0,p.withRouter)(y)},54986:function(t,e,n){var a=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n(5556)),r=["location","parentPaths","showParent","showRoot","show"],u={propType:o.default.shape({location:o.default.shape({pathname:o.default.string}),parentPaths:o.default.arrayOf(o.default.string),showParent:o.default.func,showRoot:o.default.func,show:o.default.func}),create:function(t){var e={};return r.forEach((function(n){t&&t[n]&&(e[n]=t[n])})),Object.freeze(e)},isEqual:function(t,e){return t===e||!(!t||!e)&&!r.some((function(n){return t[n]!==e[n]}))}};e.default=u},95664:function(t,e,n){var a=n(24994);Object.defineProperty(e,"__esModule",{value:!0}),e.validateMatchExists=e.reduceRouteConfig=void 0;var o=a(n(43693)),r=a(n(73738)),u=n(28651);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){(0,o.default)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.reduceRouteConfig=function(t,e){return t?Object.keys(t).reduce((function(n,a){var o,u=t[a];if("object"===(0,r.default)(u.component)){var i=u.component[e];i?o=i:u.component.default&&(o=u.component.default)}return o&&o.componentClass&&n.push({path:u.path,componentClass:o.componentClass,componentProps:o.props,parentPaths:[],refuseRoutingStackNavigation:o.refuseRoutingStackNavigation}),n}),[]).sort((function(t,e){return t.path<e.path?1:t.path>e.path?-1:0})).map((function(t,e,n){if("/"===t.path)return t;for(var a=t.path.split("/"),o=[],r=0,u=a.length;r<u-2;r+=1)a.pop(),o.push(a.join("/"));o.push("/");var i=n.filter((function(t){return-1!==o.indexOf(t.path)&&!t.refuseRoutingStackNavigation})).map((function(t){return t.path}));return c(c({},t),{},{parentPaths:i.reverse()})})):[]},e.validateMatchExists=function(t,e){if(!e||!t)return!1;for(var n=0,a=e.length;n<a;n+=1){var o=e[n];if((0,u.matchPath)(t,{path:o.path}))return!0}return!1}},29071:function(t,e,n){n.r(e),e.default={content:"NavigationLayoutContent-module__content___kZuBj"}}}]);