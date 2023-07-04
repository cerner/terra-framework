"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[76414],{14091:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),o=a(n(70215)),i=a(n(67294)),r=a(n(45697)),u=a(n(27445)),d=["icon","label","customDisplay","children","isDisabled","isIconOnly","isActive","showIcon"],s={icon:r.default.element,label:r.default.string.isRequired,customDisplay:r.default.node,children:r.default.node,isDisabled:r.default.bool,isIconOnly:r.default.bool,isActive:r.default.bool,showIcon:r.default.bool},c=function(e){var t=e.icon,n=e.label,a=e.customDisplay,r=(e.children,e.isDisabled),s=e.isIconOnly,c=e.isActive,f=(e.showIcon,(0,o.default)(e,d));return i.default.createElement(u.default,(0,l.default)({label:n,isSelected:c,customDisplay:a,isIconOnly:s,icon:t,isDisabled:r},f))};c.propTypes=s,c.defaultProps={isDisabled:!1,isIconOnly:!1,isActive:!1,showIcon:!1};var f=c;t.default=f},10424:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={shouldHandleSelection:function(e,t){return t!==e},initialSelectedTabKey:function(e,t){return t||(e.length?e[0].key:e.key)}};t.default=n},76414:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),o=a(n(70215)),i=a(n(56690)),r=a(n(89728)),u=a(n(66115)),d=a(n(61655)),s=a(n(94993)),c=a(n(73808)),f=a(n(67294)),m=a(n(45697)),p=a(n(47341)),_=a(n(37066)),b=a(n(95623)),v=a(n(14091)),h=a(n(10424)),y=["tabFill","fill","onChange","children","activeKey","defaultActiveKey"];function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var l=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,s.default)(this,n)}}var w={tabFill:m.default.bool,fill:m.default.bool,onChange:m.default.func,children:m.default.node.isRequired,activeKey:m.default.string,defaultActiveKey:m.default.string},O=function(e){(0,d.default)(n,e);var t=g(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).getInitialState=a.getInitialState.bind((0,u.default)(a)),a.state={activeKey:a.getInitialState()},a}return(0,r.default)(n,[{key:"getInitialState",value:function(){return this.props.activeKey?null:h.default.initialSelectedTabKey(this.props.children,this.props.defaultActiveKey)}},{key:"render",value:function(){var e=this,t=this.props,n=(t.tabFill,t.fill,t.onChange),a=t.children,i=(t.activeKey,t.defaultActiveKey,(0,o.default)(t,y)),r=[];return f.default.Children.forEach(a,(function(t){var n;t.key===e.state.activeKey&&(n=f.default.Children.map(t.props.children,(function(e){return f.default.cloneElement(e)}))),r.push(f.default.createElement(_.default,{itemKey:t.key,label:t.props.label,icon:t.props.icon,isIconOnly:t.props.isIconOnly,render:function(){return n},isDisabled:t.props.isDisabled}))})),f.default.createElement(b.default,(0,l.default)({id:i.id||"terra-common-tabs",activeItemKey:this.state.activeKey,onRequestActivate:function(t){return e.setState({activeKey:t})},onChange:n,variant:"framework"},i),r)}}]),n}(f.default.Component);O.propTypes=w,O.defaultProps={tabFill:!1,fill:!1},O.Pane=v.default,O.Utils=h.default,O.contextType=p.default;var E=O;t.default=E},37066:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),o=a(n(73935)),i=a(n(45697)),r=a(n(82833)),u={itemKey:i.default.string.isRequired,label:i.default.string.isRequired,metaData:i.default.object,render:i.default.func,id:i.default.string,associatedPanelId:i.default.string,isActive:i.default.bool,portalElement:i.default.instanceOf(HTMLElement),isDisabled:i.default.bool,icon:i.default.element,isIconOnly:i.default.bool,variant:i.default.oneOf(["workspace","framework"])},d=function(e){var t=e.id,n=e.icon,a=e.customDisplay,i=e.associatedPanelId,u=e.label,d=e.render,s=e.portalElement,c=e.isIconOnly,f=e.variant,m=(e.itemKey,e.metaData,e.isDisabled,e.isActive,l.default.useMemo((function(){return{tabId:t,icon:n,customDisplay:a,panelId:i,label:u,isIconOnly:c}}),[i,a,n,t,c,u]));return"framework"===f?l.default.createElement(r.default.Provider,{value:m},d()):o.default.createPortal(l.default.createElement(r.default.Provider,{value:m},d()),s)};d.propTypes=u;var s=d;t.default=s},95623:function(e,t,n){var a=n(64836),l=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(27424)),i=a(n(70215)),r=a(n(67294)),u=a(n(45697)),d=a(n(94184)),s=a(n(47166)),c=a(n(47341)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(56692)),m=a(n(60937)),p=a(n(29091)),_=a(n(28934)),b=["id","activeItemKey","activeSize","children","onRequestActivate","variant","onChange"];function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}var h=s.default.bind(p.default),y=s.default.bind(_.default),g={activeItemKey:u.default.string.isRequired,activeSize:u.default.string,children:u.default.node.isRequired,id:u.default.string.isRequired,onRequestActivate:u.default.func.isRequired,variant:u.default.oneOf(["workspace","framework"]),tabFill:u.default.bool,onChange:u.default.func},w=function(e,t){return"".concat(e,"-").concat(t)},O=function(e,t){return"".concat(w(e,t),"-panel")},E=function(e){var t=e.id,n=e.activeItemKey,a=(e.activeSize,e.children),l=e.onRequestActivate,u=e.variant,s=e.onChange,p=(0,i.default)(e,b),_=r.default.useContext(c.default),v=(0,f.default)(n),g=(0,o.default)(v,2),E=g[0],T=g[1],C=r.default.Children.map(a,(function(e){return{id:w(t,e.props.itemKey),itemKey:e.props.itemKey,associatedPanelId:O(t,e.props.itemKey),label:e.props.label,icon:e.props.icon,isIconOnly:e.props.isIconOnly,customDisplay:e.props.customDisplay,isSelected:e.props.itemKey===n,onSelect:l,metaData:e.props.metaData,isDisabled:e.props.isDisabled}})),k=(0,d.default)(y("structural",_.className),p.className);return r.default.createElement("div",{className:"framework"===u?k:h("workspace"),role:"none"},r.default.createElement("div",{"aria-hidden":!0,className:h("body-shadow-container")},r.default.createElement("div",{className:h("body-shadow")})),r.default.createElement("div",{role:"none",className:h("tab-header")},r.default.createElement(m.default,{variant:u,tabData:C,onChange:s})),r.default.createElement("div",{role:"none",className:h("body"),ref:E},r.default.Children.map(a,(function(e){var a,l=null===(a=T.current[e.props.itemKey])||void 0===a?void 0:a.element;return l||((l=(0,f.getPortalElement)()).setAttribute("role","none"),T.current[e.props.itemKey]={element:l}),r.default.cloneElement(e,{key:e.props.itemKey,id:w(t,e.props.itemKey),associatedPanelId:O(t,e.props.itemKey),isActive:e.props.itemKey===n,portalElement:"framework"===u?null:l,variant:u})}))))};E.propTypes=g;var T=E;t.default=T},72239:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),o=a(n(67294)),i=a(n(45697)),r=a(n(47166)),u=a(n(47341)),d=a(n(19983)),s=n(51051),c=n(67292),f=a(n(69560)),m=r.default.bind(f.default),p={id:i.default.string.isRequired,associatedPanelId:i.default.string.isRequired,index:i.default.number.isRequired,isSelected:i.default.bool,label:i.default.string.isRequired,itemKey:i.default.string.isRequired,metaData:i.default.object,onSelect:i.default.func.isRequired,tabIds:i.default.arrayOf(i.default.string).isRequired,onBlur:i.default.func.isRequired,onFocus:i.default.func.isRequired,onChange:i.default.func},_=function(e){var t=e.id,n=e.associatedPanelId,a=e.index,i=e.isSelected,r=e.label,f=e.itemKey,p=e.metaData,_=e.onBlur,b=e.onFocus,v=e.onSelect,h=e.tabIds,y=e.onChange,g={},w=o.default.useContext(u.default),O=m("hidden",{"is-active":i},w.className),E=function(e){e.preventDefault(),e.stopPropagation(),(0,c.enableFocusStyles)(e),v(f,p),y(e,f)};return g.tabIndex=i?0:-1,g.onClick=function(e){e.preventDefault(),e.stopPropagation(),E(e)},g.onKeyDown=function(e){e.nativeEvent.keyCode===s.KEY_RETURN||e.nativeEvent.keyCode===s.KEY_SPACE?E(e):(0,c.handleArrows)(e,a,h)},g.onBlur=function(e){(0,c.enableFocusStyles)(e),_(e)},g.onFocus=b,g.onMouseDown=c.disableFocusStyles,g["data-focus-styles-enabled"]=!0,g["aria-selected"]=i,o.default.createElement("div",(0,l.default)({},g,{id:t,"aria-controls":n,role:"tab",className:O}),o.default.createElement("div",{className:m("checkbox")},i?o.default.createElement(d.default,null):null),o.default.createElement("div",{className:m("label")},r))};_.propTypes=p,_.defaultProps={isSelected:!1};var b=_;t.default=b},14027:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(67294)),o=a(n(45697)),i=a(n(47166)),r=a(n(47341)),u=a(n(51162)),d=n(25387),s=n(67292),c=a(n(40856)),f=a(n(28934)),m=i.default.bind(c.default),p=i.default.bind(f.default),_={hiddenIndex:o.default.number.isRequired,isActive:o.default.bool,isOpen:o.default.bool,onBlur:o.default.func,onSelect:o.default.func,refCallback:o.default.func,tabIds:o.default.arrayOf(o.default.string).isRequired,zIndex:o.default.number,variant:o.default.oneOf(["workspace","framework"])},b=function(e){e.currentTarget.setAttribute("tabindex","-1"),e.currentTarget.focus()},v=function(e){var t=e.hiddenIndex,n=e.isActive,a=e.isOpen,o=e.onBlur,i=e.onSelect,c=e.refCallback,f=e.tabIds,_=e.zIndex,v=e.variant,h=l.default.useContext(r.default),y="framework"===v?p("tab-menu",h.className):m("tab-menu",{"is-active":a||n},{"is-open":a},h.className);return l.default.createElement("div",{"aria-hidden":!0,role:"button",ref:c,onClick:function(e){b(e),i&&i(e)},onKeyDown:function(e){return(0,s.handleMoreButtonArrows)(e,t,f)},onBlur:function(e){!function(e){e.currentTarget.removeAttribute("tabindex")}(e),o&&o(e)},onMouseDown:function(e){return b(e)},className:y,style:{zIndex:a?"100":_},"data-testid":"workspace-tabs-more-button"},"framework"===v?l.default.createElement(d.FormattedMessage,{id:"Terra.tabs.more"},(function(e){return l.default.createElement("span",null,e)})):null,l.default.createElement("div",{className:m("inner")},l.default.createElement("div",{className:m("icon")},l.default.createElement(u.default,null))))};v.propTypes=_;var h=(0,d.injectIntl)(v);t.default=h},27445:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),o=a(n(67294)),i=a(n(45697)),r=a(n(47166)),u=a(n(47341)),d=n(51051),s=n(67292),c=a(n(40856)),f=a(n(28934)),m=r.default.bind(f.default),p=r.default.bind(c.default),_={id:i.default.string.isRequired,icon:i.default.element,associatedPanelId:i.default.string.isRequired,customDisplay:i.default.node,index:i.default.number.isRequired,isSelected:i.default.bool,label:i.default.string.isRequired,onSelect:i.default.func.isRequired,itemKey:i.default.string,metaData:i.default.object,tabIds:i.default.arrayOf(i.default.string).isRequired,zIndex:i.default.number,isIconOnly:i.default.bool,variant:i.default.oneOf(["workspace","framework"]),isDisabled:i.default.bool,showIcon:i.default.bool,onChange:i.default.func},b=function(e){var t=e.id,n=e.icon,a=e.isIconOnly,i=e.associatedPanelId,c=e.customDisplay,f=e.itemKey,_=e.index,b=e.isSelected,v=e.label,h=e.metaData,y=e.onSelect,g=e.tabIds,w=e.zIndex,O=e.variant,E=e.isDisabled,T=e.onChange,C={},k=o.default.useContext(u.default),D=p("tab",{"is-active":b},{"is-icon-only":a},{"is-text-only":!n},{"is-disabled":E},k.className),R=(0,r.default)(m("tab",{"is-disabled":E},{"is-icon-only":a},{"is-text-only":!n},{"is-active":b},k.className));return a&&(C["aria-label"]=v),C.tabIndex=b?0:-1,C.onClick=function(){E||y(f,h)},C.onKeyDown=function(e){e.nativeEvent.keyCode===d.KEY_RETURN||e.nativeEvent.keyCode===d.KEY_SPACE?(e.preventDefault(),e.stopPropagation(),y(f,h),T(e,f)):(0,s.handleArrows)(e,_,g)},C.onBlur=s.enableFocusStyles,C.onMouseDown=s.disableFocusStyles,C["data-focus-styles-enabled"]=!E,C["aria-selected"]=b,C.style={zIndex:w},o.default.createElement("div",(0,l.default)({},C,{id:t,"aria-controls":i,role:"tab","aria-disabled":E,className:"framework"===O?R:D,title:v,"data-terra-tabs-show-focus-styles":!0}),o.default.createElement("div",{className:p("inner")},c,c?null:n,c||a?null:o.default.createElement("span",{className:"framework"===O?m("label"):p("label")},v)))};b.propTypes=_,b.defaultProps={isSelected:!1,isIconOnly:!1,isDisabled:!1,showIcon:!1};var v=b;t.default=v},82833:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=(0,n(67294).createContext)();t.default=a},25368:function(e,t,n){var a=n(64836),l=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=o?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(a,i,r):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),r=a(n(47166)),u=a(n(47341)),d=a(n(26972)),s=n(51051),c=a(n(13522));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var m=r.default.bind(c.default),p={children:i.default.node,isOpen:i.default.bool,refCallback:i.default.func.isRequired,onRequestClose:i.default.func,disableOnClickOutside:i.default.func,enableOnClickOutside:i.default.func},_=function e(t){var n=t.isOpen,a=t.children,l=t.onRequestClose,i=t.refCallback,r=t.disableOnClickOutside,d=t.enableOnClickOutside,c=(0,o.useRef)(),f=(0,o.useCallback)((function(e){e.keyCode===s.KEY_ESCAPE&&l&&l(e)}),[l]);(0,o.useEffect)((function(){return n?(d(),document.addEventListener("keydown",f)):(r(),document.removeEventListener("keydown",f),c.current.scrollTop=0),function(){r(),document.removeEventListener("keydown",f)}}),[n,d,r,f]),e.handleClickOutside=function(e){return l(e)};var p=o.default.useContext(u.default),_=m("drop-down",{"is-open":n},p.className);return o.default.createElement("div",{ref:function(e){c.current=e,i(e)},role:"none",className:_,onMouseDown:function(e){e.preventDefault()}},a)};_.propTypes=p;var b={handleClickOutside:function(){return _.handleClickOutside}},v=(0,d.default)(_,b);t.default=v},67292:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.previousFocus=t.nextFocus=t.lastFocus=t.handleMoreButtonArrows=t.handleArrows=t.generateKeyDownSelection=t.firstFocus=t.enableFocusStyles=t.disableFocusStyles=void 0;var a=n(51051);t.generateKeyDownSelection=function(e){return e?function(t){t.nativeEvent.keyCode!==a.KEY_RETURN&&t.nativeEvent.keyCode!==a.KEY_SPACE||(t.preventDefault(),e())}:void 0};t.enableFocusStyles=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")};t.disableFocusStyles=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")};var l=function(e,t,n){if(e.preventDefault(),e.stopPropagation(),t<0){var a=document.getElementById(n[0]);a&&a.focus()}else{var l=t+1>=n.length?0:t+1,o=document.getElementById(n[l]);o&&o.focus()}};t.nextFocus=l;var o=function(e,t,n){if(e.preventDefault(),e.stopPropagation(),t<0){var a=document.getElementById(n[n.length-1]);a&&a.focus()}else{var l=t-1<0?n.length-1:t-1,o=document.getElementById(n[l]);o&&o.focus()}};t.previousFocus=o;var i=function(e,t,n){if(e.preventDefault(),e.stopPropagation(),0!==t){var a=document.getElementById(n[0]);a&&a.focus()}};t.firstFocus=i;var r=function(e,t,n){if(e.preventDefault(),e.stopPropagation(),t!==n.length-1){var a=document.getElementById(n[n.length-1]);a&&a.focus()}};t.lastFocus=r;t.handleArrows=function(e,t,n){var u="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),d=u?a.KEY_LEFT:a.KEY_RIGHT,s=u?a.KEY_RIGHT:a.KEY_LEFT;e.nativeEvent.keyCode===d||e.nativeEvent.keyCode===a.KEY_DOWN?l(e,t,n):e.nativeEvent.keyCode===s||e.nativeEvent.keyCode===a.KEY_UP?o(e,t,n):e.nativeEvent.keyCode===a.KEY_HOME?i(e,t,n):e.nativeEvent.keyCode===a.KEY_END&&r(e,t,n)};t.handleMoreButtonArrows=function(e,t,n){var l="rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"),o=l?a.KEY_LEFT:a.KEY_RIGHT,u=l?a.KEY_RIGHT:a.KEY_LEFT;if(e.nativeEvent.keyCode===o||e.nativeEvent.keyCode===a.KEY_DOWN){e.preventDefault(),e.stopPropagation();var d=document.getElementById(n[t]);d&&d.focus()}else e.nativeEvent.keyCode===a.KEY_HOME?i(e,-1,n):e.nativeEvent.keyCode!==u&&e.nativeEvent.keyCode!==a.KEY_UP&&e.nativeEvent.keyCode!==a.KEY_END||r(e,-1,n)}},60937:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(10434)),o=a(n(56690)),i=a(n(89728)),r=a(n(66115)),u=a(n(61655)),d=a(n(94993)),s=a(n(73808)),c=a(n(67294)),f=a(n(45697)),m=a(n(47166)),p=a(n(47341)),_=a(n(32018)),b=a(n(14027)),v=a(n(25368)),h=a(n(27445)),y=a(n(72239)),g=a(n(10893));function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var l=(0,s.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var O=m.default.bind(g.default),E={ariaLabel:f.default.string.isRequired,tabData:f.default.arrayOf(f.default.shape({id:f.default.string.isRequired,associatedPanelId:f.default.string.isRequired,label:f.default.string.isRequired,isSelected:f.default.bool,onSelect:f.default.func,metaData:f.default.object})).isRequired,variant:f.default.oneOf(["workspace","framework"]),onChange:f.default.func},T=function(e){(0,u.default)(n,e);var t=w(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).containerRef=c.default.createRef(),a.dropdownRef=c.default.createRef(),a.moreButtonRef=c.default.createRef(),a.setIsOpen=a.setIsOpen.bind((0,r.default)(a)),a.resetCache=a.resetCache.bind((0,r.default)(a)),a.handleResize=a.handleResize.bind((0,r.default)(a)),a.handleHiddenBlur=a.handleHiddenBlur.bind((0,r.default)(a)),a.handleHiddenFocus=a.handleHiddenFocus.bind((0,r.default)(a)),a.handleMoreButtonBlur=a.handleMoreButtonBlur.bind((0,r.default)(a)),a.handleMoreButtonSelect=a.handleMoreButtonSelect.bind((0,r.default)(a)),a.handleOutsideClick=a.handleOutsideClick.bind((0,r.default)(a)),a.wrapOnSelect=a.wrapOnSelect.bind((0,r.default)(a)),a.wrapOnSelectHidden=a.wrapOnSelectHidden.bind((0,r.default)(a)),a.positionDropDown=a.positionDropDown.bind((0,r.default)(a)),a.resetCache(),a}return(0,i.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new _.default((function(){e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.resizeObserver.observe(this.containerRef.current),this.handleResize()}},{key:"componentDidUpdate",value:function(e){this.isCalculating?(this.isCalculating=!1,this.handleResize(this.contentWidth)):this.props.tabData.length!==e.tabData.length&&(this.resetCache(),this.forceUpdate())}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.containerRef.current)}},{key:"handleResize",value:function(){if(this.moreButtonRef.current&&this.containerRef.current){for(var e=this.containerRef.current.parentNode.getBoundingClientRect().width,t=window.getComputedStyle(this.moreButtonRef.current,null),n=parseInt(t.getPropertyValue("margin-left"),10),a=parseInt(t.getPropertyValue("margin-right"),10),l=e-(this.moreButtonRef.current.getBoundingClientRect().width+n+a),o=this.props.tabData.length,i=o,r=0,u=!1,d=0;d<o;d+=1){var s=this.containerRef.current.children[d],c=window.getComputedStyle(s,null),f=parseFloat(c.getPropertyValue("margin-left")),m=parseFloat(c.getPropertyValue("margin-right"));if((r+=parseFloat(c.getPropertyValue("min-width"))+f+m)>l&&!(d===o-1&&r<=e)){i=d,u=!0;break}}this.showMoreButton===u&&this.hiddenStartIndex===i||(this.showMoreButton=u,this.hiddenStartIndex=i,this.forceUpdate())}}},{key:"handleHiddenFocus",value:function(){this.setIsOpen(!0)}},{key:"handleHiddenBlur",value:function(e){this.dropdownRef.current&&this.dropdownRef.current.contains(document.activeElement)?this.dropdownRef.current===document.activeElement&&e.currentTarget.focus():this.setIsOpen(!1)}},{key:"handleMoreButtonBlur",value:function(e){e.currentTarget!==document.activeElement&&this.handleHiddenBlur(e)}},{key:"handleMoreButtonSelect",value:function(){this.setIsOpen(!0)}},{key:"handleOutsideClick",value:function(e){("mousedown"!==e.type||this.moreButtonRef.current!==e.currentTarget&&!this.moreButtonRef.current.contains(e.currentTarget))&&this.setIsOpen(!1)}},{key:"setIsOpen",value:function(e){this.isOpen=e,this.forceUpdate()}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.showMoreButton=!0,this.isOpen=!1}},{key:"positionDropDown",value:function(){if(this.dropdownRef.current&&this.moreButtonRef.current){var e,t=window.getComputedStyle(this.containerRef.current.parentNode.parentNode,null),n=parseInt(t.getPropertyValue("border-left-width"),10),a=this.moreButtonRef.current.getBoundingClientRect(),l=this.dropdownRef.current.getBoundingClientRect(),o=this.containerRef.current.getBoundingClientRect(),i=this.containerRef.current.parentNode.parentNode.getBoundingClientRect(),r=o.left-i.left,u=a.left-o.left-n;if("rtl"===document.getElementsByTagName("html")[0].getAttribute("dir"))e=r+u;else e=r+u+(a.width-l.width);this.dropdownRef.current.style.left="".concat(e,"px")}}},{key:"wrapOnSelect",value:function(e){var t=this;return function(n,a){t.setIsOpen(!1),e(n,a)}}},{key:"wrapOnSelectHidden",value:function(e){var t=this;return function(n,a){t.isOpen&&e(n,a),t.setIsOpen(!t.isOpen)}}},{key:"render",value:function(){var e,t=this,n=this.props,a=n.tabData,o=n.ariaLabel,i=n.variant,r=n.onChange,u=this.context,d=a.filter((function(e){return!e.isDisabled})).map((function(e){return e.id})),s=[],f=[],m=[],p=!1,_=-1;a.forEach((function(e,n){e.isDisabled||(_+=1),n<t.hiddenStartIndex||t.hiddenStartIndex<0?f.push(c.default.createElement(h.default,(0,l.default)({},e,{key:e.id,index:e.isDisabled?-1:_,tabIds:d,icon:e.icon,customDisplay:e.customDisplay,onSelect:t.wrapOnSelect(e.onSelect),zIndex:e.isSelected?a.length:a.length-n,isIconOnly:e.isIconOnly,variant:i,onChange:r}))):(m.push(c.default.createElement(y.default,(0,l.default)({},e,{key:e.id,index:e.isDisabled?-1:_,tabIds:d,onSelect:t.wrapOnSelectHidden(e.onSelect),onFocus:t.handleHiddenFocus,onBlur:t.handleHiddenBlur,onChange:r}))),s.push(e.id),e.isSelected&&(p=!0))})),this.showMoreButton&&this.dropdownRef.current&&this.positionDropDown(),this.isCalculating&&(e={"data-tab-is-calculating":"true"});var g=O("tab-container",u.className);return c.default.createElement("div",(0,l.default)({},e,{className:g,ref:this.containerRef,role:"tablist","aria-label":o,"aria-orientation":"horizontal","aria-owns":s.join(" ")}),f,this.showMoreButton?c.default.createElement(b.default,{isOpen:this.isOpen,hiddenIndex:this.hiddenStartIndex,isActive:p,zIndex:a.length-this.hiddenStartIndex,onBlur:this.handleMoreButtonBlur,onSelect:this.handleMoreButtonSelect,refCallback:function(e){t.moreButtonRef.current=e},tabIds:d,variant:i}):void 0,c.default.createElement(v.default,{onFocus:this.handleHiddenFocus,onBlur:this.handleHiddenBlur,isOpen:this.isOpen,onRequestClose:this.handleOutsideClick,refCallback:function(e){t.dropdownRef.current=e}},m))}}]),n}(c.default.Component);T.propTypes=E,T.contextType=p.default;var C=T;t.default=C},44892:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.applyScrollData=function(e,t){Object.entries(e).forEach((function(e){var n=(0,l.default)(e,2),a=n[0],o=n[1],i=t.querySelector('[data-persistent-overflow-id="'.concat(a,'"]'));i&&(i.scrollTop=o.scrollTop,i.scrollLeft=o.scrollLeft)}))},t.getOverflowDataForElement=d,t.getPersistentScrollMap=function(e){var t=e.querySelectorAll("[data-application-overflow-container]");return Array.prototype.slice.call(t).reduce((function(e,t){return u(u({},e),d(t))}),{})};var l=a(n(27424)),o=a(n(38416)),i=n(23234);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var t=e.getAttribute("data-persistent-overflow-id");return t||(t=(0,i.v4)(),e.setAttribute("data-persistent-overflow-id",t)),(0,o.default)({},"".concat(t),{scrollTop:e.scrollTop,scrollLeft:e.scrollLeft})}},56692:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.getPortalElement=t.default=void 0;var l=a(n(67294)),o=n(44892);t.getPortalElement=function(){var e=document.createElement("div");return e.style.position="relative",e.style.height="100%",e.style.width="100%",e};var i=function(e,t,n){var a=l.default.useRef(),i=l.default.useRef({}),r=l.default.useRef();return l.default.useLayoutEffect((function(){if(a.current){var l=i.current[e];if(!a.current.contains(null==l?void 0:l.element)){if(r.current){var u=i.current[r.current].element;i.current[r.current].scrollData=(0,o.getPersistentScrollMap)(u),a.current.removeChild(u),n&&n(r.current,u)}null!=l&&l.element?(a.current.appendChild(l.element),l.scrollData&&(0,o.applyScrollData)(l.scrollData,l.element),r.current=e,t&&t(e,l.element)):r.current=void 0}}}),[e,t,n]),[a,i]};t.default=i},29091:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"CommonTabs-module__clinical-lowlight-theme___nHzau","orion-fusion-theme":"CommonTabs-module__orion-fusion-theme___JdeeW","custom-display-content":"CommonTabs-module__custom-display-content___SUNoY","custom-display":"CommonTabs-module__custom-display___DOC+A","workspace-container":"CommonTabs-module__workspace-container___dUDRY","is-overlay":"CommonTabs-module__is-overlay___NTUV1",workspace:"CommonTabs-module__workspace___heC5c",body:"CommonTabs-module__body___BEDaF","button-header":"CommonTabs-module__button-header___w5-jq","fill-element":"CommonTabs-module__fill-element___dvnFU","tab-header":"CommonTabs-module__tab-header___0TP-v","has-dismiss-button":"CommonTabs-module__has-dismiss-button___t-h9S","body-shadow-container":"CommonTabs-module__body-shadow-container___-GyEi","body-shadow":"CommonTabs-module__body-shadow___cSCdC"}},69560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"HiddenTab-module__clinical-lowlight-theme___IOqQv","orion-fusion-theme":"HiddenTab-module__orion-fusion-theme___5o5SM",hidden:"HiddenTab-module__hidden___4tx4e",label:"HiddenTab-module__label___rLqhE","is-active":"HiddenTab-module__is-active___6pZeF",checkbox:"HiddenTab-module__checkbox___jxXMA"}},40856:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Tab-module__clinical-lowlight-theme___Ah8n1","orion-fusion-theme":"Tab-module__orion-fusion-theme___aqjPi",tab:"Tab-module__tab___3igak","tab-menu":"Tab-module__tab-menu___1C557",inner:"Tab-module__inner___C0s9S",label:"Tab-module__label___4TZvS",icon:"Tab-module__icon___ThfZ6","custom-display-content":"Tab-module__custom-display-content___28gqu","is-active":"Tab-module__is-active___Q5fBj","is-disabled":"Tab-module__is-disabled___Vh8yA","is-open":"Tab-module__is-open___0HHSe"}},13522:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"TabDropDown-module__clinical-lowlight-theme___iKjDH","orion-fusion-theme":"TabDropDown-module__orion-fusion-theme___wLqum","drop-down":"TabDropDown-module__drop-down___enX8k","is-open":"TabDropDown-module__is-open___5wOyj"}},28934:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"TerraTabs-module__clinical-lowlight-theme___sHjfb","orion-fusion-theme":"TerraTabs-module__orion-fusion-theme___Muf2+",structural:"TerraTabs-module__structural___evgoS","collapsed-tabs-container":"TerraTabs-module__collapsed-tabs-container___E1HCB",tab:"TerraTabs-module__tab___MNIRt","tab-menu":"TerraTabs-module__tab-menu___NkBGF","is-active":"TerraTabs-module__is-active___g1aUo","collapsible-tabs-container":"TerraTabs-module__collapsible-tabs-container___MheNT","tab-fill":"TerraTabs-module__tab-fill___qfU8T","is-calculating":"TerraTabs-module__is-calculating___4IWg7","is-disabled":"TerraTabs-module__is-disabled___9myH4",label:"TerraTabs-module__label___LZvA5","tabs-container":"TerraTabs-module__tabs-container___Gd83M","is-icon-only":"TerraTabs-module__is-icon-only___Q-FvA","is-text-only":"TerraTabs-module__is-text-only___qh+MX","active-tab-icon":"TerraTabs-module__active-tab-icon___gPxRH","pane-content":"TerraTabs-module__pane-content___ETbJv","fill-parent":"TerraTabs-module__fill-parent___526Q6"}},10893:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_Tabs-module__clinical-lowlight-theme___DMQGw","orion-fusion-theme":"_Tabs-module__orion-fusion-theme___gExtB","tab-container":"_Tabs-module__tab-container___UQhLy"}}}]);