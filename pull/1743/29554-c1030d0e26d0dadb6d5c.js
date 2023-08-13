"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[29554],{19838:function(e,a,t){var l=t(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(67294)),o=l(t(47166)),i=l(t(50826)),s=l(t(14091)),r=l(t(81186)),d=o.default.bind(r.default),u=function(){return n.default.createElement("div",{role:"tablist",className:d("content-wrapper")},n.default.createElement(s.default,{label:"Icon and Text",id:"iconAndText",icon:n.default.createElement(i.default,null)}))};a.default=u},14091:function(e,a,t){var l=t(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(10434)),o=l(t(70215)),i=l(t(67294)),s=l(t(45697)),r=l(t(27445)),d=["icon","label","customDisplay","children","isDisabled","isIconOnly","isActive","showIcon"],u={icon:s.default.element,label:s.default.string.isRequired,customDisplay:s.default.node,children:s.default.node,isDisabled:s.default.bool,isIconOnly:s.default.bool,isActive:s.default.bool,showIcon:s.default.bool},c=function(e){var a=e.icon,t=e.label,l=e.customDisplay,s=(e.children,e.isDisabled),u=e.isIconOnly,c=e.isActive,_=e.showIcon,f=(0,o.default)(e,d);return i.default.createElement(r.default,(0,n.default)({label:t,isSelected:c,customDisplay:l,isIconOnly:u,icon:a,isDisabled:s,showIcon:_},f))};c.propTypes=u,c.defaultProps={isDisabled:!1,isIconOnly:!1,isActive:!1,showIcon:!1};var _=c;a.default=_},27445:function(e,a,t){var l=t(64836);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(10434)),o=l(t(67294)),i=l(t(45697)),s=l(t(47166)),r=l(t(47341)),d=t(51051),u=t(23605),c=l(t(66272)),_=l(t(20855)),f=t(55877),b=t(25387),m=t(67292),v=l(t(40856)),y=l(t(28934)),T=s.default.bind(y.default),g=s.default.bind(v.default),E={id:i.default.string.isRequired,icon:i.default.element,associatedPanelId:i.default.string.isRequired,customDisplay:i.default.node,index:i.default.number.isRequired,isSelected:i.default.bool,label:i.default.string.isRequired,onSelect:i.default.func.isRequired,itemKey:i.default.string,metaData:i.default.object,tabIds:i.default.arrayOf(i.default.string).isRequired,zIndex:i.default.number,isIconOnly:i.default.bool,variant:i.default.oneOf(["workspace","framework"]),isDisabled:i.default.bool,showIcon:i.default.bool,onChange:i.default.func,isDraggable:i.default.bool,intl:i.default.shape({formatMessage:i.default.func}).isRequired},p=function(e){var a=e.id,t=e.icon,l=e.isIconOnly,i=e.associatedPanelId,b=e.customDisplay,v=e.itemKey,y=e.index,E=e.isSelected,p=e.label,h=e.metaData,I=e.onSelect,w=e.tabIds,D=e.zIndex,k=e.variant,C=e.isDisabled,K=e.onChange,P=e.isDraggable,A=e.intl,S={},Y=o.default.useContext(r.default),F=g("tab",{"is-active":E},{"is-icon-only":l},{"is-text-only":!t},{"is-disabled":C},Y.className),N=(0,s.default)(T("tab",{"is-disabled":C},{"is-icon-only":l},{"is-text-only":!t},{"is-active":E},Y.className));l&&(S["aria-label"]=p),S.onClick=function(e){C||(I(v,h),K&&K(e,v))},S.onKeyDown=function(e){if(e.nativeEvent.keyCode===d.KEY_RETURN||e.nativeEvent.keyCode===d.KEY_SPACE&&!P)e.preventDefault(),e.stopPropagation(),I(v,h),K(e,v);else{var a=!document.querySelectorAll('[data-terra-drag-focus="true"]').length&&P;(0,m.handleArrows)(e,y,w,a)}},S.onBlur=m.enableFocusStyles,S.onMouseDown=m.disableFocusStyles,S["data-focus-styles-enabled"]=!C,S["aria-selected"]=E,S.style={zIndex:D};var R=A.formatMessage({id:"Terra.tabs.focus"}),x="terra-tab-pane-response=".concat((0,f.v4)());return P?o.default.createElement(u.Draggable,{key:a,draggableId:a,index:y},(function(e){return o.default.createElement("div",(0,n.default)({},S,{ref:e.innerRef},e.draggableProps,e.dragHandleProps,{id:a,"aria-controls":i,role:"tab",className:"framework"===k?N:F,title:p,"aria-describedby":x,tabIndex:E?0:-1,"data-terra-tabs-show-focus-styles":!0,"data-terra-tab-draggable":!0}),o.default.createElement("div",{className:"framework"===k?T("inner","draggable-inner"):g("inner")},o.default.createElement(c.default,null),o.default.createElement(_.default,{"aria-hidden":!0,id:x,text:R}),b||t,!b&&!l&&o.default.createElement("span",{className:"framework"===k?T("label"):g("label")},p)))})):o.default.createElement("div",(0,n.default)({},S,{id:a,"aria-controls":i,role:"tab","aria-disabled":C,className:"framework"===k?N:F,title:p,tabIndex:E?0:-1,"data-terra-tabs-show-focus-styles":!0}),o.default.createElement("div",{className:"framework"===k?T("inner"):g("inner")},b||t,!b&&!l&&o.default.createElement("span",{className:"framework"===k?T("label"):g("label")},p)))};p.propTypes=E,p.defaultProps={isSelected:!1,isIconOnly:!1,isDisabled:!1,showIcon:!1,isDraggable:!1};var h=(0,b.injectIntl)(p);a.default=h},67292:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.previousFocus=a.nextFocus=a.lastFocus=a.handleMoreButtonArrows=a.handleArrows=a.generateKeyDownSelection=a.firstFocus=a.enableFocusStyles=a.disableFocusStyles=void 0;var l=t(51051);a.generateKeyDownSelection=function(e){return e?function(a){a.nativeEvent.keyCode!==l.KEY_RETURN&&a.nativeEvent.keyCode!==l.KEY_SPACE||(a.preventDefault(),e())}:void 0};a.enableFocusStyles=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")};a.disableFocusStyles=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")};var n=function(e,a,t,l){if(e.preventDefault(),e.stopPropagation(),a<0){var n=document.getElementById(t[0]);n&&n.focus()}else{var o=a+1>=t.length?0:a+1,i=l?document.getElementById(t[a]):document.getElementById(t[o]);i&&i.focus()}};a.nextFocus=n;var o=function(e,a,t,l){if(e.preventDefault(),e.stopPropagation(),a<0){var n=document.getElementById(t[t.length-1]);n&&n.focus()}else{var o=a-1<0?t.length-1:a-1,i=l?document.getElementById(t[a]):document.getElementById(t[o]);i&&i.focus()}};a.previousFocus=o;var i=function(e,a,t){if(e.preventDefault(),e.stopPropagation(),0!==a){var l=document.getElementById(t[0]);l&&l.focus()}};a.firstFocus=i;var s=function(e,a,t){if(e.preventDefault(),e.stopPropagation(),a!==t.length-1){var l=document.getElementById(t[t.length-1]);l&&l.focus()}};a.lastFocus=s;a.handleArrows=function(e,a,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],d="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),u=d?l.KEY_LEFT:l.KEY_RIGHT,c=d?l.KEY_RIGHT:l.KEY_LEFT;e.nativeEvent.keyCode===u||e.nativeEvent.keyCode===l.KEY_DOWN?n(e,a,t,r):e.nativeEvent.keyCode===c||e.nativeEvent.keyCode===l.KEY_UP?o(e,a,t,r):e.nativeEvent.keyCode===l.KEY_HOME?i(e,a,t):e.nativeEvent.keyCode===l.KEY_END&&s(e,a,t)};a.handleMoreButtonArrows=function(e,a,t){var n="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),o=n?l.KEY_LEFT:l.KEY_RIGHT,r=n?l.KEY_RIGHT:l.KEY_LEFT;if(e.nativeEvent.keyCode===o||e.nativeEvent.keyCode===l.KEY_DOWN){e.preventDefault(),e.stopPropagation();var d=document.getElementById(t[a]);d&&d.focus()}else e.nativeEvent.keyCode===l.KEY_HOME?i(e,-1,t):e.nativeEvent.keyCode!==r&&e.nativeEvent.keyCode!==l.KEY_UP&&e.nativeEvent.keyCode!==l.KEY_END||s(e,-1,t)}},81186:function(e,a,t){t.r(a),a.default={"content-wrapper":"TabPane-test-module__content-wrapper___o3y1w","custom-display-content":"TabPane-test-module__custom-display-content___KPU3P"}},40856:function(e,a,t){t.r(a),a.default={"clinical-lowlight-theme":"Tab-module__clinical-lowlight-theme___Ah8n1","orion-fusion-theme":"Tab-module__orion-fusion-theme___aqjPi",tab:"Tab-module__tab___3igak","tab-menu":"Tab-module__tab-menu___1C557",inner:"Tab-module__inner___C0s9S",label:"Tab-module__label___4TZvS",icon:"Tab-module__icon___ThfZ6","custom-display-content":"Tab-module__custom-display-content___28gqu","is-active":"Tab-module__is-active___Q5fBj","is-disabled":"Tab-module__is-disabled___Vh8yA","is-open":"Tab-module__is-open___0HHSe"}},28934:function(e,a,t){t.r(a),a.default={"clinical-lowlight-theme":"TerraTabs-module__clinical-lowlight-theme___sHjfb","orion-fusion-theme":"TerraTabs-module__orion-fusion-theme___Muf2+",structural:"TerraTabs-module__structural___evgoS","collapsed-tabs-container":"TerraTabs-module__collapsed-tabs-container___E1HCB",tab:"TerraTabs-module__tab___MNIRt","tab-menu":"TerraTabs-module__tab-menu___NkBGF","is-active":"TerraTabs-module__is-active___g1aUo","collapsible-tabs-container":"TerraTabs-module__collapsible-tabs-container___MheNT","tab-fill":"TerraTabs-module__tab-fill___qfU8T","is-calculating":"TerraTabs-module__is-calculating___4IWg7","is-disabled":"TerraTabs-module__is-disabled___9myH4",label:"TerraTabs-module__label___LZvA5","tabs-container":"TerraTabs-module__tabs-container___Gd83M","is-icon-only":"TerraTabs-module__is-icon-only___Q-FvA","is-text-only":"TerraTabs-module__is-text-only___qh+MX","active-tab-icon":"TerraTabs-module__active-tab-icon___gPxRH","pane-content":"TerraTabs-module__pane-content___ETbJv","fill-parent":"TerraTabs-module__fill-parent___526Q6",inner:"TerraTabs-module__inner___qYylU","draggable-inner":"TerraTabs-module__draggable-inner___RO18j"}}}]);