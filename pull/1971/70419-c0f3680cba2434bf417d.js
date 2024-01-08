"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[70419],{70419:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(10434)),o=i(n(70215)),r=i(n(56690)),l=i(n(89728)),s=i(n(66115)),u=i(n(61655)),d=i(n(94993)),c=i(n(73808)),f=i(n(67294)),p=i(n(45697)),h=i(n(92306)),m=i(n(47166)),v=i(n(711)),g=i(n(22442)),b=i(n(28520)),y=i(n(43818)),_=i(n(69346)),k=i(n(35547)),w=["boundingRef","classNameArrow","classNameContent","classNameOverlay","onRequestClose","isOpen","children","targetRef","isArrowDisplayed","contentWidth","showHeader"];function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,d.default)(this,n)}}var E=m.default.bind(_.default),I={children:p.default.node.isRequired,onRequestClose:p.default.func.isRequired,targetRef:p.default.func.isRequired,boundingRef:p.default.func,classNameArrow:p.default.string,classNameContent:p.default.string,classNameOverlay:p.default.string,isOpen:p.default.bool,contentWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),isArrowDisplayed:p.default.bool,headerTitle:p.default.string,showHeader:p.default.bool},O=function(e){(0,u.default)(n,e);var t=C(n);function n(e){var i;return(0,r.default)(this,n),(i=t.call(this,e)).setPageDimensions=i.setPageDimensions.bind((0,s.default)(i)),i.push=i.push.bind((0,s.default)(i)),i.pop=i.pop.bind((0,s.default)(i)),i.state={stack:[(0,s.default)(i)],pageWidth:void 0},i}return(0,l.default)(n,[{key:"componentDidUpdate",value:function(e){(!this.props.isOpen&&e.isOpen||this.props.children.length!==e.children.length)&&this.setState({stack:[this]})}},{key:"setPageDimensions",value:function(e){e?(this.pageHeight=e.clientHeight,"auto"===this.props.contentWidth&&this.setState({pageWidth:e.clientWidth})):(this.pageHeight=void 0,this.setState({pageWidth:void 0}))}},{key:"pop",value:function(){this.state.stack.length>1&&this.setState((function(e){var t=e.stack.slice();return t.pop(),{stack:t}}))}},{key:"push",value:function(e){this.setState((function(t){var n,i=t.stack.slice();return i.length-1&&(n=i[0].props.children.filter((function(e){return e.props.subMenuItems&&!e.props.isDisabled})),n=k.default.findMenuItem(n,e.key)),i.push(n||e),{stack:i}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.boundingRef,i=t.classNameArrow,r=t.classNameContent,l=t.classNameOverlay,s=t.onRequestClose,u=t.isOpen,d=(t.children,t.targetRef),c=t.isArrowDisplayed,p=t.contentWidth,m=t.showHeader,g=(0,o.default)(t,w),b=E(["arrow",{submenu:this.state.stack.length>1},i]),y=this.state.stack.length-1,_=this.state.stack.map((function(t,i){return f.default.createElement(v.default,{key:"MenuPage-".concat(i),title:t.props.text,onRequestNext:e.push,onRequestBack:e.pop,onRequestClose:e.props.onRequestClose,isHidden:i!==y,fixedHeight:e.pageHeight,fixedWidth:e.state.pageWidth,contentWidth:h.default.Opts.widths[p],refCallback:0===y?e.setPageDimensions:null,index:i,boundingRef:n,isFocused:i===y,headerTitle:e.props.headerTitle,showHeader:m},t.props.children||t.props.subMenuItems)}));return f.default.createElement(h.default,(0,a.default)({},g,{boundingRef:n,isArrowDisplayed:c,attachmentBehavior:"flip",contentAttachment:c?"top center":"top right",contentHeight:"auto",contentWidth:this.props.contentWidth,classNameArrow:b,classNameContent:r,classNameOverlay:l,isOpen:u,onRequestClose:s,targetRef:d,isHeaderDisabled:!0,isContentFocusDisabled:!0}),_)}}]),n}(f.default.Component);O.propTypes=I,O.defaultProps={isArrowDisplayed:!1,isOpen:!1,contentWidth:"240",headerTitle:"",showHeader:!0},O.Item=g.default,O.ItemGroup=b.default,O.Divider=y.default,O.Opts={widths:h.default.Opts.widths};t.default=O},43818:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),o=i(n(47166)),r=i(n(69346)),l=o.default.bind(r.default);t.default=function(){return a.default.createElement("li",{className:l("divider"),role:"presentation"})}},22442:function(e,t,n){var i=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(10434)),r=i(n(38416)),l=i(n(70215)),s=i(n(56690)),u=i(n(89728)),d=i(n(66115)),c=i(n(61655)),f=i(n(94993)),p=i(n(73808)),h=i(n(67294)),m=n(25387),v=i(n(45697)),g=i(n(78490)),b=i(n(19983)),y=i(n(23399)),_=i(n(46379)),k=i(n(94184)),w=i(n(47166)),C=i(n(47341)),E=i(n(29270)),I=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=R(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(i,r,l):i[r]=e[r]}return i.default=e,n&&n.set(e,i),i}(n(51051)),O=i(n(45696)),M=i(n(35547)),D=["text","isDisabled","isSelected","isToggled","isInstructionsForUse","isSelectable","isToggleable","ariaDescribedBy","subMenuItems","isActive","icon","isHighlighted","index","totalItems","intl"];function R(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(R=function(e){return e?n:t})(e)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,p.default)(e);if(t){var a=(0,p.default)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,f.default)(this,n)}}var N=w.default.bind(O.default),S={isGroupItem:v.default.bool,isSelectableMenu:v.default.bool,isToggleableMenu:v.default.bool,shouldReserveSpaceForIcon:v.default.bool},H={text:v.default.string,isDisabled:v.default.bool,isSelected:v.default.bool,isSelectable:v.default.bool,isToggled:v.default.bool,isToggleable:v.default.bool,isInstructionsForUse:v.default.bool,subMenuItems:v.default.arrayOf(v.default.element),onClick:v.default.func,onChange:v.default.func,isActive:v.default.bool,icon:v.default.element,isHighlighted:v.default.bool,index:v.default.number,totalItems:v.default.number,intl:v.default.shape({formatMessage:v.default.func}).isRequired,ariaDescribedBy:v.default.string},K={text:"",isToggled:!1,isInstructionsForUse:!1,isActive:!1,isToggleable:void 0,isDisabled:!1,subMenuItems:[],isHighlighted:!1},F=function(e){(0,c.default)(n,e);var t=T(n);function n(e,i){var a;(0,s.default)(this,n);var o=(a=t.call(this,e,i)).props,r=o.isSelected,l=o.isSelectable,u=o.isToggled,c=o.isToggleable;a.wrapOnClick=a.wrapOnClick.bind((0,d.default)(a)),a.wrapOnKeyDown=a.wrapOnKeyDown.bind((0,d.default)(a)),a.wrapOnKeyUp=a.wrapOnKeyUp.bind((0,d.default)(a)),a.handleToggled=a.handleToggled.bind((0,d.default)(a)),a.setItemNode=a.setItemNode.bind((0,d.default)(a));var f=u||r,p=c||l;return a.state={isToggled:f&&p&&!i.isGroupItem,isActive:!1},a}return(0,u.default)(n,[{key:"componentDidUpdate",value:function(){this.props.isActive&&this.itemNode&&this.itemNode.focus()}},{key:"handleToggled",value:function(e){e.preventDefault();var t=this.props,n=t.isSelectable;!t.isToggleable&&!n||this.context.isGroupItem||this.props.isDisabled||(this.setState((function(e){return{isToggled:!e.isToggled}})),this.props.onChange&&this.props.onChange(e,!this.state.isToggled))}},{key:"setItemNode",value:function(e){e&&(this.itemNode=e)}},{key:"wrapOnClick",value:function(e){e.stopPropagation(),this.props.isDisabled||(this.handleToggled(e),this.props.onClick&&this.props.onClick(e))}},{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode===I.KEY_RETURN||n.nativeEvent.keyCode===I.KEY_SPACE?(t.handleToggled(n),t.props.subMenuItems&&t.props.subMenuItems.length>0||t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)):n.nativeEvent.keyCode===I.KEY_TAB&&t.setState({isActive:!1}),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==I.KEY_RETURN&&n.nativeEvent.keyCode!==I.KEY_SPACE||t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.text,i=t.isDisabled,a=t.isSelected,s=t.isToggled,u=t.isInstructionsForUse,d=t.isSelectable,c=t.isToggleable,f=(t.ariaDescribedBy,t.subMenuItems),p=(t.isActive,t.icon),m=t.isHighlighted,v=t.index,w=t.totalItems,I=t.intl,O=(0,l.default)(t,D),R=this.context,T=R.isGroupItem,S=R.isToggleableMenu,H=R.isSelectableMenu,K=R.shouldReserveSpaceForIcon,F=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},O),P=s||a,B=c||d,A=S||H;delete F.hasChevron,F.onClick=this.wrapOnClick,i||(F.onKeyDown=this.wrapOnKeyDown(F.onKeyDown),F.onKeyUp=this.wrapOnKeyUp(F.Up),F["data-terra-menu-interactive-item"]=!0);var W,j=this.state.isToggled||T&&P&&!i,q=h.default.createElement("div",{className:N("text")},n),U=f.length>0,Y=N(["item",{"is-highlighted":m},{"is-toggled":j},{"is-toggleable":B},{"is-disabled":i},{"is-top-level":U},{active:this.state.isActive},F.className]),G=q,L="polite";this.itemNode&&0===v&&1!==w&&(W=". ".concat(I.formatMessage({id:"Terra.menu.navigateMenuItem"})),M.default.isMac()||"true"===this.itemNode.parentNode.getAttribute("data-submenu")||(W="")),T&&!j&&(L=void 0);var z=h.default.createElement(h.default.Fragment,null,M.default.isMac()&&h.default.createElement(E.default,{text:I.formatMessage({id:"Terra.menu.index"},{index:v+1,totalItems:w})}),(T||B)&&h.default.createElement(E.default,{"aria-live":L,text:j?I.formatMessage({id:"Terra.menu.selected"}):I.formatMessage({id:"Terra.menu.unselected"})}),h.default.createElement(E.default,{text:W}),f.length>0&&h.default.createElement(E.default,{text:I.formatMessage({id:"Terra.menu.itemWithSubmenu"})}),this.itemNode&&"true"===this.itemNode.parentNode.getAttribute("data-submenu")&&0===v&&h.default.createElement(E.default,{text:I.formatMessage({id:"Terra.menu.exitSubmenu"})}));if(U||A||u||p||K){var J=null;u?J=h.default.createElement(_.default,{className:N("start-icon")}):A?J=!B&&p?h.default.cloneElement(p,{className:N([p.props.className,"start-icon"])}):h.default.createElement(b.default,{className:N(["checkmark","start-icon"])}):p?J=h.default.cloneElement(p,{className:N([p.props.className,"start-icon"])}):K&&(J=h.default.createElement(b.default,{className:N(["checkmark","start-icon"])})),G=h.default.createElement(h.default.Fragment,null,h.default.createElement(g.default,{fitStart:J,fill:q,fitEnd:U?h.default.createElement(y.default,{className:N("chevron")}):null,align:"center"}),z)}else G=h.default.createElement(h.default.Fragment,null,q,z);var Q="menuitem",V=M.default.isMac();return T&&V?Q="menuitemradio":B&&V&&(Q="menuitemcheckbox"),h.default.createElement(C.default.Consumer,null,(function(t){return h.default.createElement("li",(0,o.default)({},F,{className:(0,k.default)(Y,N(t.className)),ref:e.setItemNode,role:Q,"aria-selected":V&&B?j:void 0,tabIndex:"0","aria-disabled":i}),G)}))}}]),n}(h.default.Component);F.propTypes=H,F.defaultProps=K,F.contextTypes=S;t.default=(0,m.injectIntl)(F)},28520:function(e,t,n){var i=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(10434)),r=i(n(70215)),l=i(n(56690)),s=i(n(89728)),u=i(n(66115)),d=i(n(61655)),c=i(n(94993)),f=i(n(73808)),p=i(n(67294)),h=i(n(45697)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(i,r,l):i[r]=e[r]}return i.default=e,n&&n.set(e,i),i}(n(93670)),v=["children"];function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,c.default)(this,n)}}var y={children:h.default.node.isRequired,onChange:h.default.func},_={isGroupItem:h.default.bool,shouldReserveSpaceForIcon:h.default.bool},k=function(e){for(var t=p.default.Children.toArray(e),n=0;n<t.length;n+=1)if(t[n].props.isSelected)return n;return-1},w=function(e){(0,d.default)(n,e);var t=b(n);function n(e){var i;return(0,l.default)(this,n),(i=t.call(this,e)).cloneChildren=i.cloneChildren.bind((0,u.default)(i)),i.handleItemToggled=i.handleItemToggled.bind((0,u.default)(i)),i.state={toggledIndex:k(e.children)},i}return(0,s.default)(n,[{key:"getChildContext",value:function(){return{isGroupItem:!0,shouldReserveSpaceForIcon:!0}}},{key:"handleItemToggled",value:function(e,t){this.state.toggledIndex===t.index||t.isDisabled||(e.preventDefault(),this.setState({toggledIndex:t.index}),this.props.onChange&&this.props.onChange(e,t.index))}},{key:"cloneChildren",value:function(e){var t=this;return p.default.Children.map(e,(function(e,n){var i=!0;return!1===e.props.isToggleable&&!1===e.props.isSelectable&&(i=!1),p.default.cloneElement(e,{isToggleable:i,isToggled:t.state.toggledIndex===n,onClick:m.Utils.wrappedOnClickForItem(e.props.onClick,t.handleItemToggled,{index:n,isDisabled:e.props.isDisabled}),onKeyDown:m.Utils.wrappedOnKeyDownForItem(e.props.onKeyDown,t.handleItemToggled,{index:n,isDisabled:e.props.isDisabled})})}))}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,r.default)(e,v),i=this.cloneChildren(t);return p.default.createElement(m.default,(0,o.default)({},n,{role:"group"}),i)}}]),n}(p.default.Component);w.propTypes=y,w.childContextTypes=_;t.default=w},711:function(e,t,n){var i=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(70215)),r=i(n(56690)),l=i(n(89728)),s=i(n(66115)),u=i(n(61655)),d=i(n(94993)),c=i(n(73808)),f=i(n(67294)),p=n(25387),h=i(n(45697)),m=i(n(93670)),v=i(n(53386)),g=i(n(10027)),b=i(n(71713)),y=i(n(78490)),_=i(n(47166)),k=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=D(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var l=o?Object.getOwnPropertyDescriptor(e,r):null;l&&(l.get||l.set)?Object.defineProperty(i,r,l):i[r]=e[r]}return i.default=e,n&&n.set(e,i),i}(n(51051)),w=i(n(47341)),C=n(55877),E=i(n(35547)),I=i(n(22442)),O=i(n(69346)),M=["children","isToggleable"];function D(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(D=function(e){return e?n:t})(e)}function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,d.default)(this,n)}}var x=_.default.bind(O.default),T={intl:h.default.shape({formatMessage:h.default.func}).isRequired,title:h.default.string,onRequestBack:h.default.func,onRequestClose:h.default.func,onRequestNext:h.default.func.isRequired,children:h.default.node.isRequired,index:h.default.number.isRequired,boundingRef:h.default.func,isFocused:h.default.bool,isHeightBounded:h.default.bool,isWidthBounded:h.default.bool,fixedHeight:h.default.number,fixedWidth:h.default.number,contentWidth:h.default.number,isHidden:h.default.bool,refCallback:h.default.func,headerTitle:h.default.string,showHeader:h.default.bool},N={isToggleableMenu:h.default.bool,shouldReserveSpaceForIcon:h.default.bool},S=function(e){(0,u.default)(n,e);var t=R(n);function n(e){var i;return(0,r.default)(this,n),(i=t.call(this,e)).wrapOnClick=i.wrapOnClick.bind((0,s.default)(i)),i.wrapOnKeyDown=i.wrapOnKeyDown.bind((0,s.default)(i)),i.buildHeader=i.buildHeader.bind((0,s.default)(i)),i.isToggleable=i.isToggleable.bind((0,s.default)(i)),i.shouldReserveSpaceForIcon=i.shouldReserveSpaceForIcon.bind((0,s.default)(i)),i.onKeyDown=i.onKeyDown.bind((0,s.default)(i)),i.onKeyDownBackButton=i.onKeyDownBackButton.bind((0,s.default)(i)),i.validateFocus=i.validateFocus.bind((0,s.default)(i)),i.ariaDescribedByHandle=i.ariaDescribedByHandle.bind((0,s.default)(i)),i.needsFocus=e.isFocused,i.handleContainerRef=i.handleContainerRef.bind((0,s.default)(i)),i.getSubmenuHeight=i.getSubmenuHeight.bind((0,s.default)(i)),i.setListNode=i.setListNode.bind((0,s.default)(i)),i.menuHeaderId="terra-menu-headertitle-".concat((0,C.v4)()),i.menuTopHeaderId="terra-menu-headertitle-".concat((0,C.v4)()),i.state={focusIndex:-1},i}return(0,l.default)(n,[{key:"getChildContext",value:function(){return{isToggleableMenu:this.isToggleable(),shouldReserveSpaceForIcon:this.shouldReserveSpaceForIcon()}}},{key:"componentDidMount",value:function(){var e=this.contentNode.querySelectorAll('[data-terra-menu-interactive-item="true"]');e.length&&e[0].focus()}},{key:"componentDidUpdate",value:function(e){this.props.isFocused?this.needsFocus=this.needsFocus||this.props.isFocused!==e.isFocused:this.needsFocus=!1,this.validateFocus(this.contentNode)}},{key:"handleContainerRef",value:function(e){this.props.refCallback&&this.props.refCallback(e),this.contentNode=e,this.validateFocus(e)}},{key:"onKeyDown",value:function(e){var t=this.contentNode.querySelectorAll('li[tabindex="0"]');e.nativeEvent.keyCode!==k.KEY_UP&&e.nativeEvent.keyCode!==k.KEY_END||t[t.length-1].focus(),e.nativeEvent.keyCode!==k.KEY_DOWN&&e.nativeEvent.keyCode!==k.KEY_HOME||t[0].focus()}},{key:"onKeyDownBackButton",value:function(e){e.nativeEvent.keyCode!==k.KEY_RETURN&&e.nativeEvent.keyCode!==k.KEY_SPACE&&e.nativeEvent.keyCode!==k.KEY_LEFT||(e.preventDefault(),this.props.onRequestBack())}},{key:"getSubmenuHeight",value:function(){if(this.props.index>0&&this.listNode){var e="orion-fusion-theme"===(this.context.name||this.context.className)||E.default.isSafari()?20:10,t=this.listNode.clientHeight+this.listNode.parentNode.parentNode.parentNode.firstChild.clientHeight+e;return t>window.innerHeight?this.props.fixedHeight:t}return 0}},{key:"setListNode",value:function(e){e&&(this.listNode=e)}},{key:"validateFocus",value:function(e){this.needsFocus&&e&&(e.focus(),this.needsFocus=document.activeElement!==e,this.props.index>0&&e.querySelector('[role="button"][tabIndex="0"]').focus())}},{key:"isToggleable",value:function(){var e=!1;return f.default.Children.forEach(this.props.children,(function(t){var n=t.props,i=n.children,a=n.isToggleable,r=(0,o.default)(n,M);f.default.Children.forEach(i,(function(t){t.type===I.default&&(e=!0)})),(a||r.isSelectable)&&(e=!0)})),e}},{key:"shouldReserveSpaceForIcon",value:function(){var e=!1;return f.default.Children.forEach(this.props.children,(function(t){var n=t.props,i=n.icon,a=n.isInstructionsForUse;(i||a)&&(e=!0)})),e}},{key:"wrapOnClick",value:function(e){var t=this,n=e.props.onClick;return function(i){i.preventDefault(),-1!==t.state.focusIndex&&t.setState({focusIndex:-1}),e.props.subMenuItems&&e.props.subMenuItems.length>0&&"keydown"!==i.type&&t.props.onRequestNext(e),n&&n(i)}}},{key:"wrapOnKeyDown",value:function(e,t,n){var i=this,a=e.props.onKeyDown;return function(o){var r=o.shiftKey&&o.nativeEvent.keyCode===k.KEY_TAB,l=o.nativeEvent.keyCode===k.KEY_TAB;r||l||o.preventDefault(),n||o.nativeEvent.keyCode!==k.KEY_RETURN&&o.nativeEvent.keyCode!==k.KEY_SPACE?n||o.nativeEvent.keyCode!==k.KEY_RIGHT?n||o.nativeEvent.keyCode!==k.KEY_LEFT?o.nativeEvent.keyCode===k.KEY_UP?i.setState({focusIndex:t-1}):o.nativeEvent.keyCode===k.KEY_DOWN&&i.setState({focusIndex:t+1}):i.props.onRequestBack():e.props.subMenuItems&&e.props.subMenuItems.length>0&&i.props.onRequestNext(e):e.props.subMenuItems&&e.props.subMenuItems.length>0&&(i.props.onRequestNext(e),i.setState({focusIndex:t})),a&&a(o)}}},{key:"buildHeader",value:function(e){var t=this.props.intl,n=t.formatMessage({id:"Terra.menu.back"}),i=t.formatMessage({id:"Terra.menu.close"}),a=f.default.createElement(b.default,null),o=f.default.createElement("div",null);this.props.onRequestClose&&e&&(o=f.default.createElement("button",{type:"button",className:x("header-button"),onClick:this.props.onRequestClose,"aria-label":i},a));var r=f.default.createElement(v.default,null),l=f.default.createElement("div",null);return this.props.index>0?l=f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:x("header-container")},f.default.createElement("div",{className:x("header-button"),role:"button",onClick:this.props.onRequestBack,onKeyDown:this.onKeyDownBackButton,tabIndex:"0","aria-label":n,"aria-describedby":this.menuHeaderId},r),f.default.createElement("h2",{id:this.menuHeaderId,className:x("header-title")},this.props.title))):this.props.headerTitle&&this.props.headerTitle.length>0&&(l=f.default.createElement("h1",{id:this.menuTopHeaderId,className:x(["header-title","main-header-title"])},this.props.headerTitle)),f.default.createElement(y.default,{className:x("header"),fitEnd:o,fill:l,align:"center"})}},{key:"ariaDescribedByHandle",value:function(e,t){if(!E.default.isMac()&&!this.props.index&&this.props.showHeader&&0===t){var n=e.props.ariaDescribedBy?" ".concat(e.props.ariaDescribedBy):"";return"".concat(this.menuTopHeaderId).concat(n)}return e.props.ariaDescribedBy}},{key:"render",value:function(){var e=this,t=-1,n=E.default.totalItems(this.props.children),i=this.props.children?[]:void 0;f.default.Children.map(this.props.children,(function(a){var o=e.wrapOnClick(a),r=a;if(a.props.text){t+=1;var l=e.wrapOnKeyDown(a,t,a.props.isDisabled),s=e.state.focusIndex===t,u=e.ariaDescribedByHandle(a,t);r=f.default.cloneElement(a,{onClick:o,onKeyDown:l,isActive:s,totalItems:n,index:t,intl:e.props.intl,"aria-describedby":u})}else if(a.props.children){var d=a.props.children?[]:void 0;f.default.Children.forEach(a.props.children,(function(i){t+=1;var a=e.ariaDescribedByHandle(i,t),o=f.default.cloneElement(i,{onKeyDown:e.wrapOnKeyDown(i,t,i.props.isDisabled),isActive:t===e.state.focusIndex,totalItems:n,index:t,intl:e.props.intl,"aria-describedby":a});d.push(o)})),r=f.default.cloneElement(a,{},d)}i.push(r)}));var a,o,r=this.props.boundingRef?this.props.boundingRef():void 0,l=E.default.isFullScreen(this.props.isHeightBounded,this.props.isWidthBounded,r,this.props.contentWidth),s=this.context,u=this.props.index>0,d=x("content",{submenu:u},{"hidden-page":this.props.isHidden},{fullscreen:l},s.className);(this.props.showHeader||u)&&(a=this.buildHeader(l)),o=this.props.isHeightBounded?"100%":this.props.boundingRef?this.props.fixedHeight:void 0;var c=!u||this.props.boundingRef||this.props.isHeightBounded?o:this.getSubmenuHeight(),p=this.props.isHeightBounded?"relative":"static",h=this.props.isWidthBounded?void 0:this.props.fixedWidth;return f.default.createElement("div",{ref:this.handleContainerRef,className:d,style:{height:c,width:h,position:p},tabIndex:"-1","aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown},f.default.createElement(g.default,{header:a,fill:this.props.isHeightBounded||this.props.index>0},f.default.createElement(m.default,{className:x("list"),role:"menu","data-submenu":u,refCallback:this.setListNode},i)))}}]),n}(f.default.Component);S.propTypes=T,S.defaultProps={isFocused:!1,title:"",isWidthBounded:!1,isHeightBounded:!1,headerTitle:"",isHidden:!1},S.childContextTypes=N,S.contextType=w.default;t.default=(0,p.injectIntl)(S)},35547:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),o={isFullScreen:function(e,t,n,i){var a,o=i;return!((a=n&&!t?n.clientWidth:window.innerWidth)<=0)&&(e&&(o>=a||t))},isMac:function(){return-1!==navigator.userAgent.indexOf("Mac")&&-1===navigator.userAgent.indexOf("Win")},totalItems:function(e){var t=0;return a.default.Children.map(e,(function(e){e.props.text?t+=1:e.props.children&&a.default.Children.forEach(e.props.children,(function(){t+=1}))})),t},findMenuItem:function e(t,n){for(var i=0;i<t.length;i+=1){if(t[i].key===n)return t[i];if(t[i].props.subMenuItems)return e(t[i].props.subMenuItems,n)}},isSafari:function(){return-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")}};t.default=o},69346:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Menu-module__clinical-lowlight-theme___hKzLg","orion-fusion-theme":"Menu-module__orion-fusion-theme___4S+kd",submenu:"Menu-module__submenu___pD8uM",arrow:"Menu-module__arrow___qDX5+",divider:"Menu-module__divider___2Yiip",header:"Menu-module__header___UGEhF","header-title":"Menu-module__header-title___TkZxM","main-header-title":"Menu-module__main-header-title___RFIql","header-button":"Menu-module__header-button___VFD6H",fullscreen:"Menu-module__fullscreen___Q66Ry",list:"Menu-module__list___bRMML",content:"Menu-module__content___F0Uw5","hidden-page":"Menu-module__hidden-page___M4G7V","header-container":"Menu-module__header-container___KGuP2"}},45696:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"MenuItem-module__clinical-lowlight-theme___GRWU4","orion-fusion-theme":"MenuItem-module__orion-fusion-theme___OJBfh",item:"MenuItem-module__item___d5cbi","is-disabled":"MenuItem-module__is-disabled___pQC5d","is-highlighted":"MenuItem-module__is-highlighted___2iz9A",chevron:"MenuItem-module__chevron___KG83f",active:"MenuItem-module__active___JF61u",text:"MenuItem-module__text___ax0k2","start-icon":"MenuItem-module__start-icon___IrbDC","is-top-level":"MenuItem-module__is-top-level___TFDcC",checkmark:"MenuItem-module__checkmark___PFCFZ","is-toggled":"MenuItem-module__is-toggled___Kl1vs"}}}]);