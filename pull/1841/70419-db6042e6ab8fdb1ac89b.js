"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[70419],{70419:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434)),r=a(n(70215)),o=a(n(56690)),l=a(n(89728)),s=a(n(66115)),u=a(n(61655)),d=a(n(94993)),c=a(n(73808)),f=a(n(67294)),p=a(n(45697)),h=a(n(92306)),m=a(n(47166)),v=a(n(711)),g=a(n(22442)),b=a(n(28520)),y=a(n(43818)),_=a(n(69346)),k=a(n(35547)),w=["boundingRef","classNameArrow","classNameContent","classNameOverlay","onRequestClose","isOpen","children","targetRef","isArrowDisplayed","contentWidth","showHeader"];function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var E=m.default.bind(_.default),I={children:p.default.node.isRequired,onRequestClose:p.default.func.isRequired,targetRef:p.default.func.isRequired,boundingRef:p.default.func,classNameArrow:p.default.string,classNameContent:p.default.string,classNameOverlay:p.default.string,isOpen:p.default.bool,contentWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),isArrowDisplayed:p.default.bool,headerTitle:p.default.string,showHeader:p.default.bool},O=function(e){(0,u.default)(n,e);var t=C(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).setPageDimensions=a.setPageDimensions.bind((0,s.default)(a)),a.push=a.push.bind((0,s.default)(a)),a.pop=a.pop.bind((0,s.default)(a)),a.state={stack:[(0,s.default)(a)]},a}return(0,l.default)(n,[{key:"componentDidUpdate",value:function(e){(!this.props.isOpen&&e.isOpen||this.props.children.length!==e.children.length)&&this.setState({stack:[this]})}},{key:"setPageDimensions",value:function(e){e?(this.pageHeight=e.clientHeight,"auto"===this.props.contentWidth&&(this.pageWidth=e.clientWidth)):(this.pageHeight=void 0,this.pageWidth=void 0)}},{key:"pop",value:function(){this.state.stack.length>1&&this.setState((function(e){var t=e.stack.slice();return t.pop(),{stack:t}}))}},{key:"push",value:function(e){this.setState((function(t){var n,a=t.stack.slice();return a.length-1&&(n=a[0].props.children.filter((function(e){return e.props.subMenuItems&&!e.props.isDisabled})),n=k.default.findMenuItem(n,e.key)),a.push(n||e),{stack:a}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.boundingRef,a=t.classNameArrow,o=t.classNameContent,l=t.classNameOverlay,s=t.onRequestClose,u=t.isOpen,d=(t.children,t.targetRef),c=t.isArrowDisplayed,p=t.contentWidth,m=t.showHeader,g=(0,r.default)(t,w),b=E(["arrow",{submenu:this.state.stack.length>1},a]),y=this.state.stack.length-1,_=this.state.stack.map((function(t,a){return f.default.createElement(v.default,{key:"MenuPage-".concat(a),title:t.props.text,onRequestNext:e.push,onRequestBack:e.pop,onRequestClose:e.props.onRequestClose,isHidden:a!==y,fixedHeight:e.pageHeight,fixedWidth:e.pageWidth,contentWidth:h.default.Opts.widths[p],refCallback:0===y?e.setPageDimensions:null,index:a,boundingRef:n,isFocused:a===y,headerTitle:e.props.headerTitle,showHeader:m},t.props.children||t.props.subMenuItems)}));return f.default.createElement(h.default,(0,i.default)({},g,{boundingRef:n,isArrowDisplayed:c,attachmentBehavior:"flip",contentAttachment:c?"top center":"top right",contentHeight:"auto",contentWidth:this.props.contentWidth,classNameArrow:b,classNameContent:o,classNameOverlay:l,isOpen:u,onRequestClose:s,targetRef:d,isHeaderDisabled:!0,isContentFocusDisabled:!0}),_)}}]),n}(f.default.Component);O.propTypes=I,O.defaultProps={isArrowDisplayed:!1,isOpen:!1,contentWidth:"240",headerTitle:"",showHeader:!0},O.Item=g.default,O.ItemGroup=b.default,O.Divider=y.default,O.Opts={widths:h.default.Opts.widths};t.default=O},43818:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(67294)),r=a(n(47166)),o=a(n(69346)),l=r.default.bind(o.default);t.default=function(){return i.default.createElement("li",{className:l("divider"),role:"presentation"})}},22442:function(e,t,n){var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(10434)),o=a(n(38416)),l=a(n(70215)),s=a(n(56690)),u=a(n(89728)),d=a(n(66115)),c=a(n(61655)),f=a(n(94993)),p=a(n(73808)),h=a(n(67294)),m=n(25387),v=a(n(45697)),g=a(n(78490)),b=a(n(19983)),y=a(n(23399)),_=a(n(46379)),k=a(n(94184)),w=a(n(47166)),C=a(n(47341)),E=a(n(29270)),I=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=R(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(51051)),O=a(n(45696)),M=a(n(35547)),D=["text","isDisabled","isSelected","isToggled","isInstructionsForUse","isSelectable","isToggleable","ariaDescribedBy","subMenuItems","isActive","icon","isHighlighted","index","totalItems","intl"];function R(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(R=function(e){return e?n:t})(e)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,p.default)(e);if(t){var i=(0,p.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,f.default)(this,n)}}var N=w.default.bind(O.default),K={isGroupItem:v.default.bool,isSelectableMenu:v.default.bool,isToggleableMenu:v.default.bool,shouldReserveSpaceForIcon:v.default.bool},F={text:v.default.string,isDisabled:v.default.bool,isSelected:v.default.bool,isSelectable:v.default.bool,isToggled:v.default.bool,isToggleable:v.default.bool,isInstructionsForUse:v.default.bool,subMenuItems:v.default.arrayOf(v.default.element),onClick:v.default.func,onChange:v.default.func,isActive:v.default.bool,icon:v.default.element,isHighlighted:v.default.bool,index:v.default.number,totalItems:v.default.number,intl:v.default.shape({formatMessage:v.default.func}).isRequired,ariaDescribedBy:v.default.string},H={text:"",isToggled:!1,isInstructionsForUse:!1,isActive:!1,isToggleable:void 0,isDisabled:!1,subMenuItems:[],isHighlighted:!1},S=function(e){(0,c.default)(n,e);var t=T(n);function n(e,a){var i;(0,s.default)(this,n);var r=(i=t.call(this,e,a)).props,o=r.isSelected,l=r.isSelectable,u=r.isToggled,c=r.isToggleable;i.wrapOnClick=i.wrapOnClick.bind((0,d.default)(i)),i.wrapOnKeyDown=i.wrapOnKeyDown.bind((0,d.default)(i)),i.wrapOnKeyUp=i.wrapOnKeyUp.bind((0,d.default)(i)),i.handleToggled=i.handleToggled.bind((0,d.default)(i)),i.setItemNode=i.setItemNode.bind((0,d.default)(i));var f=u||o,p=c||l;return i.state={isToggled:f&&p&&!a.isGroupItem,isActive:!1},i}return(0,u.default)(n,[{key:"componentDidUpdate",value:function(){this.props.isActive&&this.itemNode&&this.itemNode.focus()}},{key:"handleToggled",value:function(e){e.preventDefault();var t=this.props,n=t.isSelectable;!t.isToggleable&&!n||this.context.isGroupItem||this.props.isDisabled||(this.setState((function(e){return{isToggled:!e.isToggled}})),this.props.onChange&&this.props.onChange(e,!this.state.isToggled))}},{key:"setItemNode",value:function(e){e&&(this.itemNode=e)}},{key:"wrapOnClick",value:function(e){e.stopPropagation(),this.props.isDisabled||(this.handleToggled(e),this.props.onClick&&this.props.onClick(e))}},{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode===I.KEY_RETURN||n.nativeEvent.keyCode===I.KEY_SPACE?(t.handleToggled(n),t.props.subMenuItems&&t.props.subMenuItems.length>0||t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)):n.nativeEvent.keyCode===I.KEY_TAB&&t.setState({isActive:!1}),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==I.KEY_RETURN&&n.nativeEvent.keyCode!==I.KEY_SPACE||t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.text,a=t.isDisabled,i=t.isSelected,s=t.isToggled,u=t.isInstructionsForUse,d=t.isSelectable,c=t.isToggleable,f=(t.ariaDescribedBy,t.subMenuItems),p=(t.isActive,t.icon),m=t.isHighlighted,v=t.index,w=t.totalItems,I=t.intl,O=(0,l.default)(t,D),R=this.context,T=R.isGroupItem,K=R.isToggleableMenu,F=R.isSelectableMenu,H=R.shouldReserveSpaceForIcon,S=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},O),P=s||i,B=c||d,j=K||F;delete S.hasChevron,S.onClick=this.wrapOnClick,a||(S.onKeyDown=this.wrapOnKeyDown(S.onKeyDown),S.onKeyUp=this.wrapOnKeyUp(S.Up),S["data-terra-menu-interactive-item"]=!0);var A,W=this.state.isToggled||T&&P&&!a,q=h.default.createElement("div",{className:N("text")},n),U=f.length>0,Y=N(["item",{"is-highlighted":m},{"is-toggled":W},{"is-toggleable":B},{"is-disabled":a},{"is-top-level":U},{active:this.state.isActive},S.className]),G=q,L="polite";this.itemNode&&0===v&&1!==w&&(A=". ".concat(I.formatMessage({id:"Terra.menu.navigateMenuItem"})),M.default.isMac()||"true"===this.itemNode.parentNode.getAttribute("data-submenu")||(A="")),T&&!W&&(L=void 0);var z=h.default.createElement(h.default.Fragment,null,M.default.isMac()&&h.default.createElement(E.default,{text:I.formatMessage({id:"Terra.menu.index"},{index:v+1,totalItems:w})}),(T||B)&&h.default.createElement(E.default,{"aria-live":L,text:W?I.formatMessage({id:"Terra.menu.selected"}):I.formatMessage({id:"Terra.menu.unselected"})}),h.default.createElement(E.default,{text:A}),f.length>0&&h.default.createElement(E.default,{text:I.formatMessage({id:"Terra.menu.itemWithSubmenu"})}),this.itemNode&&"true"===this.itemNode.parentNode.getAttribute("data-submenu")&&0===v&&h.default.createElement(E.default,{text:I.formatMessage({id:"Terra.menu.exitSubmenu"})}));if(U||j||u||p||H){var J=null;u?J=h.default.createElement(_.default,{className:N("start-icon")}):j?J=!B&&p?h.default.cloneElement(p,{className:N([p.props.className,"start-icon"])}):h.default.createElement(b.default,{className:N(["checkmark","start-icon"])}):p?J=h.default.cloneElement(p,{className:N([p.props.className,"start-icon"])}):H&&(J=h.default.createElement(b.default,{className:N(["checkmark","start-icon"])})),G=h.default.createElement(h.default.Fragment,null,h.default.createElement(g.default,{fitStart:J,fill:q,fitEnd:U?h.default.createElement(y.default,{className:N("chevron")}):null,align:"center"}),z)}else G=h.default.createElement(h.default.Fragment,null,q,z);var Q="menuitem",V=M.default.isMac();return T&&V?Q="menuitemradio":B&&V&&(Q="menuitemcheckbox"),h.default.createElement(C.default.Consumer,null,(function(t){return h.default.createElement("li",(0,r.default)({},S,{className:(0,k.default)(Y,N(t.className)),ref:e.setItemNode,role:Q,"aria-selected":V&&B?W:void 0,tabIndex:"0","aria-disabled":a}),G)}))}}]),n}(h.default.Component);S.propTypes=F,S.defaultProps=H,S.contextTypes=K;t.default=(0,m.injectIntl)(S)},28520:function(e,t,n){var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(10434)),o=a(n(70215)),l=a(n(56690)),s=a(n(89728)),u=a(n(66115)),d=a(n(61655)),c=a(n(94993)),f=a(n(73808)),p=a(n(67294)),h=a(n(45697)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(93670)),v=["children"];function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var y={children:h.default.node.isRequired,onChange:h.default.func},_={isGroupItem:h.default.bool,shouldReserveSpaceForIcon:h.default.bool},k=function(e){for(var t=p.default.Children.toArray(e),n=0;n<t.length;n+=1)if(t[n].props.isSelected)return n;return-1},w=function(e){(0,d.default)(n,e);var t=b(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).cloneChildren=a.cloneChildren.bind((0,u.default)(a)),a.handleItemToggled=a.handleItemToggled.bind((0,u.default)(a)),a.state={toggledIndex:k(e.children)},a}return(0,s.default)(n,[{key:"getChildContext",value:function(){return{isGroupItem:!0,shouldReserveSpaceForIcon:!0}}},{key:"handleItemToggled",value:function(e,t){this.state.toggledIndex===t.index||t.isDisabled||(e.preventDefault(),this.setState({toggledIndex:t.index}),this.props.onChange&&this.props.onChange(e,t.index))}},{key:"cloneChildren",value:function(e){var t=this;return p.default.Children.map(e,(function(e,n){var a=!0;return!1===e.props.isToggleable&&!1===e.props.isSelectable&&(a=!1),p.default.cloneElement(e,{isToggleable:a,isToggled:t.state.toggledIndex===n,onClick:m.Utils.wrappedOnClickForItem(e.props.onClick,t.handleItemToggled,{index:n,isDisabled:e.props.isDisabled}),onKeyDown:m.Utils.wrappedOnKeyDownForItem(e.props.onKeyDown,t.handleItemToggled,{index:n,isDisabled:e.props.isDisabled})})}))}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,o.default)(e,v),a=this.cloneChildren(t);return p.default.createElement(m.default,(0,r.default)({},n,{role:"group"}),a)}}]),n}(p.default.Component);w.propTypes=y,w.childContextTypes=_;t.default=w},711:function(e,t,n){var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(70215)),o=a(n(56690)),l=a(n(89728)),s=a(n(66115)),u=a(n(61655)),d=a(n(94993)),c=a(n(73808)),f=a(n(67294)),p=n(25387),h=a(n(45697)),m=a(n(93670)),v=a(n(53386)),g=a(n(10027)),b=a(n(71713)),y=a(n(78490)),_=a(n(47166)),k=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=D(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(51051)),w=a(n(47341)),C=n(55877),E=a(n(35547)),I=a(n(22442)),O=a(n(69346)),M=["children","isToggleable"];function D(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(D=function(e){return e?n:t})(e)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var x=_.default.bind(O.default),T={intl:h.default.shape({formatMessage:h.default.func}).isRequired,title:h.default.string,onRequestBack:h.default.func,onRequestClose:h.default.func,onRequestNext:h.default.func.isRequired,children:h.default.node.isRequired,index:h.default.number.isRequired,boundingRef:h.default.func,isFocused:h.default.bool,isHeightBounded:h.default.bool,isWidthBounded:h.default.bool,fixedHeight:h.default.number,fixedWidth:h.default.number,contentWidth:h.default.number,isHidden:h.default.bool,refCallback:h.default.func,headerTitle:h.default.string,showHeader:h.default.bool},N={isToggleableMenu:h.default.bool,shouldReserveSpaceForIcon:h.default.bool},K=function(e){(0,u.default)(n,e);var t=R(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).wrapOnClick=a.wrapOnClick.bind((0,s.default)(a)),a.wrapOnKeyDown=a.wrapOnKeyDown.bind((0,s.default)(a)),a.buildHeader=a.buildHeader.bind((0,s.default)(a)),a.isToggleable=a.isToggleable.bind((0,s.default)(a)),a.shouldReserveSpaceForIcon=a.shouldReserveSpaceForIcon.bind((0,s.default)(a)),a.onKeyDown=a.onKeyDown.bind((0,s.default)(a)),a.onKeyDownBackButton=a.onKeyDownBackButton.bind((0,s.default)(a)),a.validateFocus=a.validateFocus.bind((0,s.default)(a)),a.ariaDescribedByHandle=a.ariaDescribedByHandle.bind((0,s.default)(a)),a.needsFocus=e.isFocused,a.handleContainerRef=a.handleContainerRef.bind((0,s.default)(a)),a.menuHeaderId="terra-menu-headertitle-".concat((0,C.v4)()),a.menuTopHeaderId="terra-menu-headertitle-".concat((0,C.v4)()),a.state={focusIndex:-1},a}return(0,l.default)(n,[{key:"getChildContext",value:function(){return{isToggleableMenu:this.isToggleable(),shouldReserveSpaceForIcon:this.shouldReserveSpaceForIcon()}}},{key:"componentDidMount",value:function(){var e=this.contentNode.querySelectorAll('[data-terra-menu-interactive-item="true"]');e.length&&e[0].focus()}},{key:"componentDidUpdate",value:function(e){this.props.isFocused?this.needsFocus=this.needsFocus||this.props.isFocused!==e.isFocused:this.needsFocus=!1,this.validateFocus(this.contentNode)}},{key:"handleContainerRef",value:function(e){this.props.refCallback&&this.props.refCallback(e),this.contentNode=e,this.validateFocus(e)}},{key:"onKeyDown",value:function(e){var t=this.contentNode.querySelectorAll('li[tabindex="0"]');e.nativeEvent.keyCode!==k.KEY_UP&&e.nativeEvent.keyCode!==k.KEY_END||t[t.length-1].focus(),e.nativeEvent.keyCode!==k.KEY_DOWN&&e.nativeEvent.keyCode!==k.KEY_HOME||t[0].focus()}},{key:"onKeyDownBackButton",value:function(e){e.nativeEvent.keyCode!==k.KEY_RETURN&&e.nativeEvent.keyCode!==k.KEY_SPACE&&e.nativeEvent.keyCode!==k.KEY_LEFT||(e.preventDefault(),this.props.onRequestBack())}},{key:"validateFocus",value:function(e){this.needsFocus&&e&&(e.focus(),this.needsFocus=document.activeElement!==e,this.props.index>0&&e.querySelector('[role="button"][tabIndex="0"]').focus())}},{key:"isToggleable",value:function(){var e=!1;return f.default.Children.forEach(this.props.children,(function(t){var n=t.props,a=n.children,i=n.isToggleable,o=(0,r.default)(n,M);f.default.Children.forEach(a,(function(t){t.type===I.default&&(e=!0)})),(i||o.isSelectable)&&(e=!0)})),e}},{key:"shouldReserveSpaceForIcon",value:function(){var e=!1;return f.default.Children.forEach(this.props.children,(function(t){var n=t.props,a=n.icon,i=n.isInstructionsForUse;(a||i)&&(e=!0)})),e}},{key:"wrapOnClick",value:function(e){var t=this,n=e.props.onClick;return function(a){a.preventDefault(),-1!==t.state.focusIndex&&t.setState({focusIndex:-1}),e.props.subMenuItems&&e.props.subMenuItems.length>0&&"keydown"!==a.type&&t.props.onRequestNext(e),n&&n(a)}}},{key:"wrapOnKeyDown",value:function(e,t,n){var a=this,i=e.props.onKeyDown;return function(r){var o=r.shiftKey&&r.nativeEvent.keyCode===k.KEY_TAB,l=r.nativeEvent.keyCode===k.KEY_TAB;o||l||r.preventDefault(),n||r.nativeEvent.keyCode!==k.KEY_RETURN&&r.nativeEvent.keyCode!==k.KEY_SPACE?n||r.nativeEvent.keyCode!==k.KEY_RIGHT?n||r.nativeEvent.keyCode!==k.KEY_LEFT?r.nativeEvent.keyCode===k.KEY_UP?a.setState({focusIndex:t-1}):r.nativeEvent.keyCode===k.KEY_DOWN&&a.setState({focusIndex:t+1}):a.props.onRequestBack():e.props.subMenuItems&&e.props.subMenuItems.length>0&&a.props.onRequestNext(e):e.props.subMenuItems&&e.props.subMenuItems.length>0&&(a.props.onRequestNext(e),a.setState({focusIndex:t})),i&&i(r)}}},{key:"buildHeader",value:function(e){var t=this.props.intl,n=t.formatMessage({id:"Terra.menu.back"}),a=t.formatMessage({id:"Terra.menu.close"}),i=f.default.createElement(b.default,null),r=f.default.createElement("div",null);this.props.onRequestClose&&e&&(r=f.default.createElement("button",{type:"button",className:x("header-button"),onClick:this.props.onRequestClose,"aria-label":a},i));var o=f.default.createElement(v.default,null),l=f.default.createElement("div",null);return this.props.index>0?l=f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:x("header-container")},f.default.createElement("div",{className:x("header-button"),role:"button",onClick:this.props.onRequestBack,onKeyDown:this.onKeyDownBackButton,tabIndex:"0","aria-label":n,"aria-describedby":this.menuHeaderId},o),f.default.createElement("h2",{id:this.menuHeaderId,className:x("header-title")},this.props.title))):this.props.headerTitle&&this.props.headerTitle.length>0&&(l=f.default.createElement("h1",{id:this.menuTopHeaderId,className:x(["header-title","main-header-title"])},this.props.headerTitle)),f.default.createElement(y.default,{className:x("header"),fitEnd:r,fill:l,align:"center"})}},{key:"ariaDescribedByHandle",value:function(e,t){var n;return E.default.isMac()&&(n=e.props.ariaDescribedBy),E.default.isMac()||(n=!this.props.index&&this.props.showHeader&&0===t&&e.props.ariaDescribedBy?"".concat(this.menuTopHeaderId," ").concat(e.props.ariaDescribedBy):!this.props.index&&this.props.showHeader&&0===t&&void 0===e.props.ariaDescribedBy?this.menuTopHeaderId:e.props.ariaDescribedBy),n}},{key:"render",value:function(){var e=this,t=-1,n=E.default.totalItems(this.props.children),a=this.props.children?[]:void 0;f.default.Children.map(this.props.children,(function(i){var r=e.wrapOnClick(i),o=i;if(i.props.text){t+=1;var l=e.wrapOnKeyDown(i,t,i.props.isDisabled),s=e.state.focusIndex===t,u=e.ariaDescribedByHandle(i,t);o=f.default.cloneElement(i,{onClick:r,onKeyDown:l,isActive:s,totalItems:n,index:t,intl:e.props.intl,"aria-describedby":u})}else if(i.props.children){var d=i.props.children?[]:void 0;f.default.Children.forEach(i.props.children,(function(a){t+=1;var i=e.ariaDescribedByHandle(a,t),r=f.default.cloneElement(a,{onKeyDown:e.wrapOnKeyDown(a,t,a.props.isDisabled),isActive:t===e.state.focusIndex,totalItems:n,index:t,intl:e.props.intl,"aria-describedby":i});d.push(r)})),o=f.default.cloneElement(i,{},d)}a.push(o)}));var i,r=this.props.boundingRef?this.props.boundingRef():void 0,o=E.default.isFullScreen(this.props.isHeightBounded,this.props.isWidthBounded,r,this.props.contentWidth),l=this.context,s=this.props.index>0,u=x("content",{submenu:s},{"hidden-page":this.props.isHidden},{fullscreen:o},l.className);(this.props.showHeader||s)&&(i=this.buildHeader(o));var d=this.props.isHeightBounded?"100%":this.props.fixedHeight,c=this.props.isHeightBounded?"relative":"static",p=this.props.isWidthBounded?void 0:this.props.fixedWidth;return f.default.createElement("div",{ref:this.handleContainerRef,className:u,style:{height:d,width:p,position:c},tabIndex:"-1","aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown},f.default.createElement(g.default,{header:i,fill:this.props.isHeightBounded||this.props.index>0},f.default.createElement(m.default,{className:x("list"),role:"menu","data-submenu":s},a)))}}]),n}(f.default.Component);K.propTypes=T,K.defaultProps={isFocused:!1,title:"",isWidthBounded:!1,isHeightBounded:!1,headerTitle:"",isHidden:!1},K.childContextTypes=N,K.contextType=w.default;t.default=(0,p.injectIntl)(K)},35547:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(67294)),r={isFullScreen:function(e,t,n,a){var i,r=a;return!((i=n&&!t?n.clientWidth:window.innerWidth)<=0)&&(e&&(r>=i||t))},isMac:function(){return-1!==navigator.userAgent.indexOf("Mac")&&-1===navigator.userAgent.indexOf("Win")},totalItems:function(e){var t=0;return i.default.Children.map(e,(function(e){e.props.text?t+=1:e.props.children&&i.default.Children.forEach(e.props.children,(function(){t+=1}))})),t},findMenuItem:function e(t,n){for(var a=0;a<t.length;a+=1){if(t[a].key===n)return t[a];if(t[a].props.subMenuItems)return e(t[a].props.subMenuItems,n)}}};t.default=r},69346:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Menu-module__clinical-lowlight-theme___hKzLg","orion-fusion-theme":"Menu-module__orion-fusion-theme___4S+kd",submenu:"Menu-module__submenu___pD8uM",arrow:"Menu-module__arrow___qDX5+",divider:"Menu-module__divider___2Yiip",header:"Menu-module__header___UGEhF","header-title":"Menu-module__header-title___TkZxM","main-header-title":"Menu-module__main-header-title___RFIql","header-button":"Menu-module__header-button___VFD6H",fullscreen:"Menu-module__fullscreen___Q66Ry",list:"Menu-module__list___bRMML",content:"Menu-module__content___F0Uw5","hidden-page":"Menu-module__hidden-page___M4G7V","header-container":"Menu-module__header-container___KGuP2"}},45696:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"MenuItem-module__clinical-lowlight-theme___GRWU4","orion-fusion-theme":"MenuItem-module__orion-fusion-theme___OJBfh",item:"MenuItem-module__item___d5cbi","is-disabled":"MenuItem-module__is-disabled___pQC5d","is-highlighted":"MenuItem-module__is-highlighted___2iz9A",chevron:"MenuItem-module__chevron___KG83f",active:"MenuItem-module__active___JF61u",text:"MenuItem-module__text___ax0k2","start-icon":"MenuItem-module__start-icon___IrbDC","is-top-level":"MenuItem-module__is-top-level___TFDcC",checkmark:"MenuItem-module__checkmark___PFCFZ","is-toggled":"MenuItem-module__is-toggled___Kl1vs"}}}]);