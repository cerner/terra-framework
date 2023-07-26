"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72859],{72859:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(67294)),o=l(a(47166)),i=l(a(14091)),s=l(a(81186)),r=o.default.bind(s.default),d=function(){return n.default.createElement("div",{role:"tablist",className:r("content-wrapper")},n.default.createElement(i.default,{label:"Text only tab pane",id:"textOnly"}))};t.default=d},14091:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(10434)),o=l(a(70215)),i=l(a(67294)),s=l(a(45697)),r=l(a(27445)),d=["icon","label","customDisplay","children","isDisabled","isIconOnly","isActive","showIcon"],u={icon:s.default.element,label:s.default.string.isRequired,customDisplay:s.default.node,children:s.default.node,isDisabled:s.default.bool,isIconOnly:s.default.bool,isActive:s.default.bool,showIcon:s.default.bool},c=function(e){var t=e.icon,a=e.label,l=e.customDisplay,s=(e.children,e.isDisabled),u=e.isIconOnly,c=e.isActive,_=e.showIcon,f=(0,o.default)(e,d);return i.default.createElement(r.default,(0,n.default)({label:a,isSelected:c,customDisplay:l,isIconOnly:u,icon:t,isDisabled:s,showIcon:_},f))};c.propTypes=u,c.defaultProps={isDisabled:!1,isIconOnly:!1,isActive:!1,showIcon:!1};var _=c;t.default=_},27445:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(10434)),o=l(a(67294)),i=l(a(45697)),s=l(a(47166)),r=l(a(47341)),d=a(51051),u=a(23605),c=a(67292),_=l(a(40856)),f=l(a(28934)),b=s.default.bind(f.default),m=s.default.bind(_.default),v={id:i.default.string.isRequired,icon:i.default.element,associatedPanelId:i.default.string.isRequired,customDisplay:i.default.node,index:i.default.number.isRequired,isSelected:i.default.bool,label:i.default.string.isRequired,onSelect:i.default.func.isRequired,itemKey:i.default.string,metaData:i.default.object,tabIds:i.default.arrayOf(i.default.string).isRequired,zIndex:i.default.number,isIconOnly:i.default.bool,variant:i.default.oneOf(["workspace","framework"]),isDisabled:i.default.bool,showIcon:i.default.bool,onChange:i.default.func,isDraggable:i.default.bool},y=function(e){var t=e.id,a=e.icon,l=e.isIconOnly,i=e.associatedPanelId,_=e.customDisplay,f=e.itemKey,v=e.index,y=e.isSelected,T=e.label,E=e.metaData,p=e.onSelect,g=e.tabIds,h=e.zIndex,I=e.variant,w=e.isDisabled,D=e.onChange,k=e.isDraggable,C={},K=o.default.useContext(r.default),P=m("tab",{"is-active":y},{"is-icon-only":l},{"is-text-only":!a},{"is-disabled":w},K.className),Y=(0,s.default)(b("tab",{"is-disabled":w},{"is-icon-only":l},{"is-text-only":!a},{"is-active":y},K.className));return l&&(C["aria-label"]=T),C.tabIndex=y?0:-1,C.onClick=function(e){w||(p(f,E),D&&D(e,f))},C.onKeyDown=function(e){e.nativeEvent.keyCode===d.KEY_RETURN||e.nativeEvent.keyCode===d.KEY_SPACE?(e.preventDefault(),e.stopPropagation(),p(f,E),D(e,f)):(0,c.handleArrows)(e,v,g)},C.onBlur=c.enableFocusStyles,C.onMouseDown=c.disableFocusStyles,C["data-focus-styles-enabled"]=!w,C["aria-selected"]=y,C.style={zIndex:h},k?o.default.createElement(u.Draggable,{key:t,draggableId:t,index:v},(function(e){return o.default.createElement("div",(0,n.default)({},C,{ref:e.innerRef},e.draggableProps,e.dragHandleProps,{id:t,"aria-controls":i,role:"tab",className:"framework"===I?Y:P,title:T,"data-terra-tabs-show-focus-styles":!0}),o.default.createElement("div",{className:m("inner")},_,_?null:a,_||l?null:o.default.createElement("span",{className:m("label")},T)))})):o.default.createElement("div",(0,n.default)({},C,{id:t,"aria-controls":i,role:"tab","aria-disabled":w,className:"framework"===I?Y:P,title:T,"data-terra-tabs-show-focus-styles":!0}),o.default.createElement("div",{className:"framework"===I?b("inner"):m("inner")},_,_?null:a,_||l?null:o.default.createElement("span",{className:"framework"===I?b("label"):m("label")},T)))};y.propTypes=v,y.defaultProps={isSelected:!1,isIconOnly:!1,isDisabled:!1,showIcon:!1,isDraggable:!1};var T=y;t.default=T},67292:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.previousFocus=t.nextFocus=t.lastFocus=t.handleMoreButtonArrows=t.handleArrows=t.generateKeyDownSelection=t.firstFocus=t.enableFocusStyles=t.disableFocusStyles=void 0;var l=a(51051);t.generateKeyDownSelection=function(e){return e?function(t){t.nativeEvent.keyCode!==l.KEY_RETURN&&t.nativeEvent.keyCode!==l.KEY_SPACE||(t.preventDefault(),e())}:void 0};t.enableFocusStyles=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")};t.disableFocusStyles=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")};var n=function(e,t,a){if(e.preventDefault(),e.stopPropagation(),t<0){var l=document.getElementById(a[0]);l&&l.focus()}else{var n=t+1>=a.length?0:t+1,o=document.getElementById(a[n]);o&&o.focus()}};t.nextFocus=n;var o=function(e,t,a){if(e.preventDefault(),e.stopPropagation(),t<0){var l=document.getElementById(a[a.length-1]);l&&l.focus()}else{var n=t-1<0?a.length-1:t-1,o=document.getElementById(a[n]);o&&o.focus()}};t.previousFocus=o;var i=function(e,t,a){if(e.preventDefault(),e.stopPropagation(),0!==t){var l=document.getElementById(a[0]);l&&l.focus()}};t.firstFocus=i;var s=function(e,t,a){if(e.preventDefault(),e.stopPropagation(),t!==a.length-1){var l=document.getElementById(a[a.length-1]);l&&l.focus()}};t.lastFocus=s;t.handleArrows=function(e,t,a){var r="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),d=r?l.KEY_LEFT:l.KEY_RIGHT,u=r?l.KEY_RIGHT:l.KEY_LEFT;e.nativeEvent.keyCode===d||e.nativeEvent.keyCode===l.KEY_DOWN?n(e,t,a):e.nativeEvent.keyCode===u||e.nativeEvent.keyCode===l.KEY_UP?o(e,t,a):e.nativeEvent.keyCode===l.KEY_HOME?i(e,t,a):e.nativeEvent.keyCode===l.KEY_END&&s(e,t,a)};t.handleMoreButtonArrows=function(e,t,a){var n="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),o=n?l.KEY_LEFT:l.KEY_RIGHT,r=n?l.KEY_RIGHT:l.KEY_LEFT;if(e.nativeEvent.keyCode===o||e.nativeEvent.keyCode===l.KEY_DOWN){e.preventDefault(),e.stopPropagation();var d=document.getElementById(a[t]);d&&d.focus()}else e.nativeEvent.keyCode===l.KEY_HOME?i(e,-1,a):e.nativeEvent.keyCode!==r&&e.nativeEvent.keyCode!==l.KEY_UP&&e.nativeEvent.keyCode!==l.KEY_END||s(e,-1,a)}},81186:function(e,t,a){a.r(t),t.default={"content-wrapper":"TabPane-test-module__content-wrapper___o3y1w","custom-display-content":"TabPane-test-module__custom-display-content___KPU3P"}},40856:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Tab-module__clinical-lowlight-theme___Ah8n1","orion-fusion-theme":"Tab-module__orion-fusion-theme___aqjPi",tab:"Tab-module__tab___3igak","tab-menu":"Tab-module__tab-menu___1C557",inner:"Tab-module__inner___C0s9S",label:"Tab-module__label___4TZvS",icon:"Tab-module__icon___ThfZ6","custom-display-content":"Tab-module__custom-display-content___28gqu","is-active":"Tab-module__is-active___Q5fBj","is-disabled":"Tab-module__is-disabled___Vh8yA","is-open":"Tab-module__is-open___0HHSe"}},28934:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"TerraTabs-module__clinical-lowlight-theme___sHjfb","orion-fusion-theme":"TerraTabs-module__orion-fusion-theme___Muf2+",structural:"TerraTabs-module__structural___evgoS","collapsed-tabs-container":"TerraTabs-module__collapsed-tabs-container___E1HCB",tab:"TerraTabs-module__tab___MNIRt","tab-menu":"TerraTabs-module__tab-menu___NkBGF","is-active":"TerraTabs-module__is-active___g1aUo","collapsible-tabs-container":"TerraTabs-module__collapsible-tabs-container___MheNT","tab-fill":"TerraTabs-module__tab-fill___qfU8T","is-calculating":"TerraTabs-module__is-calculating___4IWg7","is-disabled":"TerraTabs-module__is-disabled___9myH4",label:"TerraTabs-module__label___LZvA5","tabs-container":"TerraTabs-module__tabs-container___Gd83M","is-icon-only":"TerraTabs-module__is-icon-only___Q-FvA","is-text-only":"TerraTabs-module__is-text-only___qh+MX","active-tab-icon":"TerraTabs-module__active-tab-icon___gPxRH","pane-content":"TerraTabs-module__pane-content___ETbJv","fill-parent":"TerraTabs-module__fill-parent___526Q6",inner:"TerraTabs-module__inner___qYylU"}}}]);