"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[19081],{19081:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(67294)),s=l(a(47166)),n=l(a(14091)),i=l(a(81186)),r=s.default.bind(i.default),u=function(){return o.default.createElement("div",{role:"tablist",className:r("content-wrapper")},o.default.createElement(n.default,{label:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eros quis erat tincidunt, id scelerisque magna ultricies. Vivamus pellentesque.",id:"longText"}))};t.default=u},14091:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=l(a(10434)),s=l(a(38416)),n=l(a(70215)),i=l(a(67294)),r=l(a(45697)),u=l(a(94184)),c=l(a(47166)),_=l(a(47341)),d=l(a(52525)),b=["icon","label","customDisplay","children","isDisabled","isIconOnly","isActive","showIcon"];function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}var m=c.default.bind(d.default),p={icon:r.default.element,label:r.default.string.isRequired,customDisplay:r.default.node,children:r.default.node,isDisabled:r.default.bool,isIconOnly:r.default.bool,isActive:r.default.bool,showIcon:r.default.bool},y=function(e){var t=e.icon,a=e.label,l=e.customDisplay,r=(e.children,e.isDisabled),c=e.isIconOnly,d=e.isActive,p=(e.showIcon,(0,n.default)(e,b)),y=i.default.useRef(null),v=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){(0,s.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},p),w=i.default.useContext(_.default),T=(0,u.default)(m("tab",{"is-disabled":r},{"is-icon-only":c},{"is-text-only":!t},w.className),v.className);return c&&(v["aria-label"]=a),v["aria-selected"]=d,v.tabIndex=d?0:-1,v.onKeyDown=function(){y.current.setAttribute("data-terra-tabs-show-focus-styles","true")},v.onMouseDown=function(e){y.current.setAttribute("data-terra-tabs-show-focus-styles","false"),r&&e.preventDefault()},v.onBlur=function(){y.current.setAttribute("data-terra-tabs-show-focus-styles","".concat(!r))},i.default.createElement("div",(0,o.default)({},v,{ref:y,"data-terra-tabs-show-focus-styles":!r,"data-terra-tab-pane":!0,role:"tab",className:T}),l,l?null:t,l||c?null:i.default.createElement("span",{className:m("label")},a))};y.propTypes=p,y.defaultProps={isDisabled:!1,isIconOnly:!1,isActive:!1,showIcon:!1};var v=y;t.default=v},81186:function(e,t,a){a.r(t),t.default={"content-wrapper":"TabPane-test-module__content-wrapper___o3y1w","custom-display-content":"TabPane-test-module__custom-display-content___KPU3P"}},52525:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Tabs-module__clinical-lowlight-theme___fmesT","orion-fusion-theme":"Tabs-module__orion-fusion-theme___mf0Jd","modular-centered":"Tabs-module__modular-centered___1O+uC","collapsible-tabs-container":"Tabs-module__collapsible-tabs-container___uOMb-","modular-left-aligned":"Tabs-module__modular-left-aligned___IoIA+","collapsed-tabs-container":"Tabs-module__collapsed-tabs-container___F-ha3","tab-menu":"Tabs-module__tab-menu___6Ye-4","is-active":"Tabs-module__is-active___KRywx","tab-fill":"Tabs-module__tab-fill___LZaZ5","is-calculating":"Tabs-module__is-calculating___sKTN4",tab:"Tabs-module__tab___qJ0Xv","is-disabled":"Tabs-module__is-disabled___rhSKE","selection-bar":"Tabs-module__selection-bar___estcK",structural:"Tabs-module__structural___7DxLB",label:"Tabs-module__label___t06Y+","tabs-container":"Tabs-module__tabs-container___vAd9J","is-icon-only":"Tabs-module__is-icon-only___SmNLF","is-text-only":"Tabs-module__is-text-only___EZyyW","active-tab-icon":"Tabs-module__active-tab-icon___zXM7K","pane-content":"Tabs-module__pane-content___cYs3n","fill-parent":"Tabs-module__fill-parent___Ny3IB"}}}]);