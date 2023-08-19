"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[54545],{14091:function(e,a,t){var l=t(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(10434)),o=l(t(70215)),i=l(t(67294)),r=l(t(45697)),s=l(t(27445)),d=["icon","label","customDisplay","children","isDisabled","isIconOnly","isActive","showIcon"],u={icon:r.default.element,label:r.default.string.isRequired,customDisplay:r.default.node,children:r.default.node,isDisabled:r.default.bool,isIconOnly:r.default.bool,isActive:r.default.bool,showIcon:r.default.bool},c=function(e){var a=e.icon,t=e.label,l=e.customDisplay,r=(e.children,e.isDisabled),u=e.isIconOnly,c=e.isActive,_=e.showIcon,b=(0,o.default)(e,d);return i.default.createElement(s.default,(0,n.default)({label:t,isSelected:c,customDisplay:l,isIconOnly:u,icon:a,isDisabled:r,showIcon:_},b))};c.propTypes=u,c.defaultProps={isDisabled:!1,isIconOnly:!1,isActive:!1,showIcon:!1};var _=c;a.default=_},27445:function(e,a,t){var l=t(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(10434)),o=l(t(67294)),i=l(t(45697)),r=l(t(47166)),s=l(t(47341)),d=l(t(71713)),u=t(51051),c=t(25387),_=l(t(20855)),b=t(55877),f=t(23605),m=l(t(66272)),v=l(t(28934)),g=l(t(40856)),E=t(67292),y=r.default.bind(v.default),T=r.default.bind(g.default),p={id:i.default.string.isRequired,icon:i.default.element,associatedPanelId:i.default.string.isRequired,customDisplay:i.default.node,index:i.default.number.isRequired,isSelected:i.default.bool,label:i.default.string.isRequired,onSelect:i.default.func.isRequired,itemKey:i.default.string,metaData:i.default.object,tabIds:i.default.arrayOf(i.default.string).isRequired,zIndex:i.default.number,isIconOnly:i.default.bool,variant:i.default.oneOf(["workspace","framework"]),isDisabled:i.default.bool,showIcon:i.default.bool,onChange:i.default.func,isClosable:i.default.bool,intl:i.default.shape({formatMessage:i.default.func}).isRequired,isDraggable:i.default.bool,onClosingTab:i.default.func},h=function(e){var a=e.id,t=e.icon,l=e.isIconOnly,i=e.associatedPanelId,c=e.customDisplay,v=e.itemKey,g=e.index,p=e.isSelected,h=e.label,I=e.metaData,k=e.onSelect,C=e.tabIds,D=e.zIndex,w=e.variant,K=e.isDisabled,A=e.onChange,P=e.isClosable,Y=e.onClosingTab,N=e.intl,S=e.isDraggable,B=N.formatMessage({id:"Terra.tabs.hint.removable"}),F={},R=o.default.useContext(s.default),x=T("tab",{"is-active":p},{"is-icon-only":l},{"is-text-only":!t},{"is-disabled":K},R.className),O=(0,r.default)(y("tab",{"is-disabled":K},{"is-icon-only":l},{"is-text-only":!t},{"is-active":p},R.className));function M(e){if(!K){e.stopPropagation(),Y(v,I,e);var a=N.formatMessage({id:"Terra.tabs.hint.currentTabClosed"}),t=document.getElementById(C[g-1]);0===g&&(t=document.getElementById(C[g+1]));var l=h?"".concat(h," ").concat(a):"";t&&(t.setAttribute("aria-label",l),t.focus(),t.addEventListener("blur",(function(){t.removeAttribute("aria-label")})))}}l&&(F["aria-label"]=h,P&&h&&(F["aria-label"]="".concat(h," . ").concat(B))),F.tabIndex=p?0:-1,F.onClick=function(e){K||(k(v,I),A&&A(e,v))},F.onKeyDown=function(e){if((e.nativeEvent.keyCode===u.KEY_RETURN||e.nativeEvent.keyCode===u.KEY_SPACE&&!S)&&(e.preventDefault(),e.stopPropagation(),k&&k(v,I),A&&A(e,v)),e.nativeEvent.keyCode===u.KEY_DELETE||e.nativeEvent.keyCode===u.KEY_BACK_SPACE)e.preventDefault(),e.stopPropagation(),M(e);else{var a=!document.querySelectorAll('[data-terra-drag-focus="true"]').length&&S;(0,E.handleArrows)(e,g,C,a)}},F.onBlur=E.enableFocusStyles,F.onMouseDown=E.disableFocusStyles,F["data-focus-styles-enabled"]=!K,F["aria-selected"]=p,F.style={zIndex:D};var q=N.formatMessage({id:"Terra.tabs.focus"}),H="terra-tab-pane-response=".concat((0,b.v4)());return S?o.default.createElement(f.Draggable,{key:a,draggableId:a,index:g},(function(e){return o.default.createElement("div",(0,n.default)({},F,{ref:e.innerRef},e.draggableProps,e.dragHandleProps,{id:a,"aria-controls":i,role:"tab",className:"framework"===w?O:x,title:h,"aria-describedby":H,tabIndex:p?0:-1,"data-terra-tabs-show-focus-styles":!0,"data-terra-tab-draggable":!0}),o.default.createElement("div",{className:"framework"===w?y("inner","draggable-inner"):T("inner")},o.default.createElement(m.default,null),o.default.createElement(_.default,{"aria-hidden":!0,id:H,text:q}),o.default.createElement("div",{className:y("draggable-icon")},c||t),!c&&!l&&o.default.createElement("span",{className:"framework"===w?y("label"):T("label")},h)),P&&o.default.createElement("div",{className:T("tabs-remove-button"),type:"button","aria-label":". ".concat(B),onClick:M},o.default.createElement(d.default,null)))})):o.default.createElement("div",(0,n.default)({},F,{id:a,"aria-controls":i,role:"tab","aria-disabled":K,className:"framework"===w?O:x,title:h,tabIndex:p?0:-1,"data-terra-tabs-show-focus-styles":!0}),o.default.createElement("div",{className:"framework"===w?y("inner"):T("inner")},c||t,!c&&!l&&o.default.createElement("span",{className:"framework"===w?y("label"):T("label")},h)),P&&o.default.createElement("div",{className:T("tabs-remove-button"),type:"button","aria-label":". ".concat(B),onClick:M},o.default.createElement(d.default,null)))};h.propTypes=p,h.defaultProps={isSelected:!1,isIconOnly:!1,isDisabled:!1,showIcon:!1,isDraggable:!1};var I=(0,c.injectIntl)(h);a.default=I},67292:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.previousFocus=a.nextFocus=a.lastFocus=a.handleMoreButtonArrows=a.handleArrows=a.generateKeyDownSelection=a.firstFocus=a.enableFocusStyles=a.disableFocusStyles=void 0;var l=t(51051);a.generateKeyDownSelection=function(e){return e?function(a){a.nativeEvent.keyCode!==l.KEY_RETURN&&a.nativeEvent.keyCode!==l.KEY_SPACE||(a.preventDefault(),e())}:void 0};a.enableFocusStyles=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")};a.disableFocusStyles=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")};var n=function(e,a,t,l){if(e.preventDefault(),e.stopPropagation(),a<0){var n=document.getElementById(t[0]);n&&n.focus()}else{var o=a+1>=t.length?0:a+1,i=l?document.getElementById(t[a]):document.getElementById(t[o]);i&&i.focus()}};a.nextFocus=n;var o=function(e,a,t,l){if(e.preventDefault(),e.stopPropagation(),a<0){var n=document.getElementById(t[t.length-1]);n&&n.focus()}else{var o=a-1<0?t.length-1:a-1,i=l?document.getElementById(t[a]):document.getElementById(t[o]);i&&i.focus()}};a.previousFocus=o;var i=function(e,a,t){if(e.preventDefault(),e.stopPropagation(),0!==a){var l=document.getElementById(t[0]);l&&l.focus()}};a.firstFocus=i;var r=function(e,a,t){if(e.preventDefault(),e.stopPropagation(),a!==t.length-1){var l=document.getElementById(t[t.length-1]);l&&l.focus()}};a.lastFocus=r;a.handleArrows=function(e,a,t){var s=arguments.length>3&&void 0!==arguments[3]&&arguments[3],d="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),u=d?l.KEY_LEFT:l.KEY_RIGHT,c=d?l.KEY_RIGHT:l.KEY_LEFT;e.nativeEvent.keyCode===u||e.nativeEvent.keyCode===l.KEY_DOWN?n(e,a,t,s):e.nativeEvent.keyCode===c||e.nativeEvent.keyCode===l.KEY_UP?o(e,a,t,s):e.nativeEvent.keyCode===l.KEY_HOME?i(e,a,t):e.nativeEvent.keyCode===l.KEY_END&&r(e,a,t)};a.handleMoreButtonArrows=function(e,a,t){var n="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),o=n?l.KEY_LEFT:l.KEY_RIGHT,s=n?l.KEY_RIGHT:l.KEY_LEFT;if(e.nativeEvent.keyCode===o||e.nativeEvent.keyCode===l.KEY_DOWN){e.preventDefault(),e.stopPropagation();var d=document.getElementById(t[a]);d&&d.focus()}else e.nativeEvent.keyCode===l.KEY_HOME?i(e,-1,t):e.nativeEvent.keyCode!==s&&e.nativeEvent.keyCode!==l.KEY_UP&&e.nativeEvent.keyCode!==l.KEY_END||r(e,-1,t)}},40856:function(e,a,t){t.r(a),a.default={"clinical-lowlight-theme":"Tab-module__clinical-lowlight-theme___Ah8n1","orion-fusion-theme":"Tab-module__orion-fusion-theme___aqjPi",tab:"Tab-module__tab___3igak","tab-menu":"Tab-module__tab-menu___1C557",inner:"Tab-module__inner___C0s9S",label:"Tab-module__label___4TZvS",icon:"Tab-module__icon___ThfZ6","custom-display-content":"Tab-module__custom-display-content___28gqu","is-active":"Tab-module__is-active___Q5fBj","is-disabled":"Tab-module__is-disabled___Vh8yA",button:"Tab-module__button___7FgIB","is-open":"Tab-module__is-open___0HHSe","tabs-remove-button":"Tab-module__tabs-remove-button___IgztL"}},28934:function(e,a,t){t.r(a),a.default={"clinical-lowlight-theme":"TerraTabs-module__clinical-lowlight-theme___sHjfb","orion-fusion-theme":"TerraTabs-module__orion-fusion-theme___Muf2+",structural:"TerraTabs-module__structural___evgoS","collapsed-tabs-container":"TerraTabs-module__collapsed-tabs-container___E1HCB",tab:"TerraTabs-module__tab___MNIRt","tab-menu":"TerraTabs-module__tab-menu___NkBGF","is-active":"TerraTabs-module__is-active___g1aUo","collapsible-tabs-container":"TerraTabs-module__collapsible-tabs-container___MheNT","tab-fill":"TerraTabs-module__tab-fill___qfU8T","is-calculating":"TerraTabs-module__is-calculating___4IWg7","is-disabled":"TerraTabs-module__is-disabled___9myH4",label:"TerraTabs-module__label___LZvA5","tabs-container":"TerraTabs-module__tabs-container___Gd83M","is-icon-only":"TerraTabs-module__is-icon-only___Q-FvA","is-text-only":"TerraTabs-module__is-text-only___qh+MX","active-tab-icon":"TerraTabs-module__active-tab-icon___gPxRH","pane-content":"TerraTabs-module__pane-content___ETbJv","fill-parent":"TerraTabs-module__fill-parent___526Q6",inner:"TerraTabs-module__inner___qYylU","tabs-remove-button":"TerraTabs-module__tabs-remove-button___9nPXX","draggable-inner":"TerraTabs-module__draggable-inner___RO18j","draggable-icon":"TerraTabs-module__draggable-icon___YhrAv"}}}]);