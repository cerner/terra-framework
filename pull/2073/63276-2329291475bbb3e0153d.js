"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[63276],{63276:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(94634)),o=a(n(91847)),l=a(n(17383)),r=a(n(34579)),s=a(n(28452)),u=a(n(63072)),d=a(n(12475)),c=a(n(29511)),f=a(n(96540)),p=a(n(5556)),h=a(n(31056)),m=a(n(67967)),g=a(n(71312)),v=a(n(19743)),b=a(n(86312)),y=a(n(55656)),_=a(n(55317)),k=a(n(12724)),w=["boundingRef","classNameArrow","classNameContent","classNameOverlay","onRequestClose","isOpen","children","targetRef","isArrowDisplayed","contentWidth","showHeader"];function C(e,t,n){return t=(0,u.default)(t),(0,s.default)(e,E()?Reflect.construct(t,n||[],(0,u.default)(e).constructor):t.apply(e,n))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}var I=m.default.bind(_.default),O={children:p.default.node.isRequired,onRequestClose:p.default.func.isRequired,targetRef:p.default.func.isRequired,boundingRef:p.default.func,classNameArrow:p.default.string,classNameContent:p.default.string,classNameOverlay:p.default.string,isOpen:p.default.bool,contentWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),isArrowDisplayed:p.default.bool,headerTitle:p.default.string,showHeader:p.default.bool},M=function(e){function t(e){var n;return(0,l.default)(this,t),(n=C(this,t,[e])).setPageDimensions=n.setPageDimensions.bind((0,d.default)(n)),n.push=n.push.bind((0,d.default)(n)),n.pop=n.pop.bind((0,d.default)(n)),n.state={stack:[(0,d.default)(n)],pageWidth:void 0},n}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentDidUpdate",value:function(e){(!this.props.isOpen&&e.isOpen||this.props.children.length!==e.children.length)&&this.setState({stack:[this]})}},{key:"setPageDimensions",value:function(e){e?(this.pageHeight=e.clientHeight,"auto"===this.props.contentWidth&&this.setState({pageWidth:e.clientWidth})):(this.pageHeight=void 0,this.setState({pageWidth:void 0}))}},{key:"pop",value:function(){this.state.stack.length>1&&this.setState((function(e){var t=e.stack.slice();return t.pop(),{stack:t}}))}},{key:"push",value:function(e){this.setState((function(t){var n,a=t.stack.slice();return a.length-1&&(n=a[0].props.children.filter((function(e){return e.props.subMenuItems&&!e.props.isDisabled})),n=k.default.findMenuItem(n,e.key)),a.push(n||e),{stack:a}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.boundingRef,a=t.classNameArrow,l=t.classNameContent,r=t.classNameOverlay,s=t.onRequestClose,u=t.isOpen,d=(t.children,t.targetRef),c=t.isArrowDisplayed,p=t.contentWidth,m=t.showHeader,v=(0,o.default)(t,w),b=I(["arrow",{submenu:this.state.stack.length>1},a]),y=this.state.stack.length-1,_=this.state.stack.map((function(t,a){return f.default.createElement(g.default,{key:"MenuPage-".concat(a),title:t.props.text,onRequestNext:e.push,onRequestBack:e.pop,onRequestClose:e.props.onRequestClose,isHidden:a!==y,fixedHeight:e.pageHeight,fixedWidth:e.state.pageWidth,contentWidth:h.default.Opts.widths[p],refCallback:0===y?e.setPageDimensions:null,index:a,boundingRef:n,isFocused:a===y,headerTitle:e.props.headerTitle,showHeader:m},t.props.children||t.props.subMenuItems)}));return f.default.createElement(h.default,(0,i.default)({},v,{boundingRef:n,isArrowDisplayed:c,attachmentBehavior:"flip",contentAttachment:c?"top center":"top right",contentHeight:"auto",contentWidth:this.props.contentWidth,classNameArrow:b,classNameContent:l,classNameOverlay:r,isOpen:u,onRequestClose:s,targetRef:d,isHeaderDisabled:!0,isContentFocusDisabled:!0}),_)}}]),t}(f.default.Component);M.propTypes=O,M.defaultProps={isArrowDisplayed:!1,isOpen:!1,contentWidth:"240",headerTitle:"",showHeader:!0},M.Item=v.default,M.ItemGroup=b.default,M.Divider=y.default,M.Opts={widths:h.default.Opts.widths};t.default=M},55656:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(96540)),o=a(n(67967)),l=a(n(55317)),r=o.default.bind(l.default);t.default=function(){return i.default.createElement("li",{className:r("divider"),role:"presentation"})}},19743:function(e,t,n){var a=n(24994),i=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(94634)),l=a(n(43693)),r=a(n(91847)),s=a(n(17383)),u=a(n(34579)),d=a(n(28452)),c=a(n(63072)),f=a(n(12475)),p=a(n(29511)),h=a(n(96540)),m=n(8604),g=a(n(5556)),v=a(n(39496)),b=a(n(80113)),y=a(n(53665)),_=a(n(88123)),k=a(n(46942)),w=a(n(67967)),C=a(n(23695)),E=a(n(16524)),I=T(n(25966)),O=a(n(31604)),M=T(n(12724)),D=["text","isDisabled","isSelected","isToggled","isInstructionsForUse","isSelectable","isToggleable","ariaDescribedBy","subMenuItems","isActive","icon","isHighlighted","index","totalItems","intl"];function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}function T(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e,t,n){return t=(0,c.default)(t),(0,d.default)(e,S()?Reflect.construct(t,n||[],(0,c.default)(e).constructor):t.apply(e,n))}function S(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(S=function(){return!!e})()}var H=w.default.bind(O.default),K={isGroupItem:g.default.bool,isSelectableMenu:g.default.bool,isToggleableMenu:g.default.bool,shouldReserveSpaceForIcon:g.default.bool},F={text:g.default.string,isDisabled:g.default.bool,isSelected:g.default.bool,isSelectable:g.default.bool,isToggled:g.default.bool,isToggleable:g.default.bool,isInstructionsForUse:g.default.bool,subMenuItems:g.default.arrayOf(g.default.element),onClick:g.default.func,onChange:g.default.func,isActive:g.default.bool,icon:g.default.element,isHighlighted:g.default.bool,index:g.default.number,totalItems:g.default.number,intl:g.default.shape({formatMessage:g.default.func}).isRequired,ariaDescribedBy:g.default.string},P={text:"",isToggled:!1,isInstructionsForUse:!1,isActive:!1,isToggleable:void 0,isDisabled:!1,subMenuItems:[],isHighlighted:!1},B=function(e){function t(e,n){var a;(0,s.default)(this,t);var i=(a=N(this,t,[e,n])).props,o=i.isSelected,l=i.isSelectable,r=i.isToggled,u=i.isToggleable;a.wrapOnClick=a.wrapOnClick.bind((0,f.default)(a)),a.wrapOnKeyDown=a.wrapOnKeyDown.bind((0,f.default)(a)),a.wrapOnKeyUp=a.wrapOnKeyUp.bind((0,f.default)(a)),a.handleToggled=a.handleToggled.bind((0,f.default)(a)),a.setItemNode=a.setItemNode.bind((0,f.default)(a));var d=r||o,c=u||l;return a.state={isToggled:d&&c&&!n.isGroupItem,isActive:!1},a}return(0,p.default)(t,e),(0,u.default)(t,[{key:"componentDidUpdate",value:function(){this.props.isActive&&this.itemNode&&this.itemNode.focus()}},{key:"handleToggled",value:function(e){e.preventDefault();var t=this.props,n=t.isSelectable;!t.isToggleable&&!n||this.context.isGroupItem||this.props.isDisabled||(this.setState((function(e){return{isToggled:!e.isToggled}})),this.props.onChange&&this.props.onChange(e,!this.state.isToggled))}},{key:"setItemNode",value:function(e){e&&(this.itemNode=e)}},{key:"wrapOnClick",value:function(e){e.stopPropagation(),this.props.isDisabled||(this.handleToggled(e),this.props.onClick&&this.props.onClick(e))}},{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode===I.KEY_RETURN||n.nativeEvent.keyCode===I.KEY_SPACE?(t.handleToggled(n),t.props.subMenuItems&&t.props.subMenuItems.length>0||t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)):n.nativeEvent.keyCode===I.KEY_TAB&&t.setState({isActive:!1}),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==I.KEY_RETURN&&n.nativeEvent.keyCode!==I.KEY_SPACE||t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.text,a=t.isDisabled,i=t.isSelected,s=t.isToggled,u=t.isInstructionsForUse,d=t.isSelectable,c=t.isToggleable,f=(t.ariaDescribedBy,t.subMenuItems),p=(t.isActive,t.icon),m=t.isHighlighted,g=t.index,w=t.totalItems,I=t.intl,O=(0,r.default)(t,D),x=this.context,T=x.isGroupItem,N=x.isToggleableMenu,S=x.isSelectableMenu,K=x.shouldReserveSpaceForIcon,F=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},O),P=s||i,B=c||d,A=N||S;delete F.hasChevron,F.onClick=this.wrapOnClick,a||(F.onKeyDown=this.wrapOnKeyDown(F.onKeyDown),F.onKeyUp=this.wrapOnKeyUp(F.Up),F["data-terra-menu-interactive-item"]=!0);var W,j=this.state.isToggled||T&&P&&!a,q=h.default.createElement("div",{className:H("text")},n),U=f.length>0,Y=H(["item",{"is-highlighted":m},{"is-toggled":j},{"is-toggleable":B},{"is-disabled":a},{"is-top-level":U},{active:this.state.isActive},F.className]),G=q,L="polite";this.itemNode&&0===g&&1!==w&&(W=". ".concat(I.formatMessage({id:"Terra.menu.navigateMenuItem"})),M.default.isMac()||"true"===this.itemNode.parentNode.getAttribute("data-submenu")||(W="")),T&&!j&&(L=void 0);var z=h.default.createElement(h.default.Fragment,null,M.default.isMac()&&h.default.createElement(E.default,{text:I.formatMessage({id:"Terra.menu.index"},{index:g+1,totalItems:w})}),(T||B)&&h.default.createElement(E.default,{"aria-live":L,text:j?I.formatMessage({id:"Terra.menu.selected"}):I.formatMessage({id:"Terra.menu.unselected"})}),h.default.createElement(E.default,{text:W}),f.length>0&&h.default.createElement(E.default,{text:I.formatMessage({id:"Terra.menu.itemWithSubmenu"})}),this.itemNode&&"true"===this.itemNode.parentNode.getAttribute("data-submenu")&&0===g&&h.default.createElement(E.default,{text:I.formatMessage({id:"Terra.menu.exitSubmenu"})}));if(U||A||u||p||K){var J=null;u?J=h.default.createElement(_.default,{className:H("start-icon")}):A?J=!B&&p?h.default.cloneElement(p,{className:H([p.props.className,"start-icon"])}):h.default.createElement(b.default,{className:H(["checkmark","start-icon"])}):p?J=h.default.cloneElement(p,{className:H([p.props.className,"start-icon"])}):K&&(J=h.default.createElement(b.default,{className:H(["checkmark","start-icon"])})),G=h.default.createElement(h.default.Fragment,null,h.default.createElement(v.default,{fitStart:J,fill:q,fitEnd:U?h.default.createElement(y.default,{className:H("chevron")}):null,align:"center"}),z)}else G=h.default.createElement(h.default.Fragment,null,q,z);var Q="menuitem",V=M.default.isMac();return T&&V?Q="menuitemradio":B&&V&&(Q="menuitemcheckbox"),h.default.createElement(C.default.Consumer,null,(function(t){return h.default.createElement("li",(0,o.default)({},F,{className:(0,k.default)(Y,H(t.className)),ref:e.setItemNode,role:Q,"aria-selected":V&&B?j:void 0,tabIndex:"0","aria-disabled":a,onFocus:M.stopPropagation}),G)}))}}]),t}(h.default.Component);B.propTypes=F,B.defaultProps=P,B.contextTypes=K;t.default=(0,m.injectIntl)(B)},86312:function(e,t,n){var a=n(24994),i=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(94634)),l=a(n(91847)),r=a(n(17383)),s=a(n(34579)),u=a(n(28452)),d=a(n(63072)),c=a(n(12475)),f=a(n(29511)),p=a(n(96540)),h=a(n(5556)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(80708)),g=["children"];function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function b(e,t,n){return t=(0,d.default)(t),(0,u.default)(e,y()?Reflect.construct(t,n||[],(0,d.default)(e).constructor):t.apply(e,n))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}var _={children:h.default.node.isRequired,onChange:h.default.func},k={isGroupItem:h.default.bool,shouldReserveSpaceForIcon:h.default.bool},w=function(e){for(var t=p.default.Children.toArray(e),n=0;n<t.length;n+=1)if(t[n].props.isSelected||t[n].props.isToggled)return n;return-1},C=function(e){function t(e){var n;return(0,r.default)(this,t),(n=b(this,t,[e])).cloneChildren=n.cloneChildren.bind((0,c.default)(n)),n.handleItemToggled=n.handleItemToggled.bind((0,c.default)(n)),n.state={toggledIndex:w(e.children)},n}return(0,f.default)(t,e),(0,s.default)(t,[{key:"getChildContext",value:function(){return{isGroupItem:!0,shouldReserveSpaceForIcon:!0}}},{key:"handleItemToggled",value:function(e,t){this.state.toggledIndex===t.index||t.isDisabled||(e.preventDefault(),this.setState({toggledIndex:t.index}),this.props.onChange&&this.props.onChange(e,t.index))}},{key:"cloneChildren",value:function(e){var t=this;return p.default.Children.map(e,(function(e,n){var a=!0;return!1===e.props.isToggleable&&!1===e.props.isSelectable&&(a=!1),p.default.cloneElement(e,{isToggleable:a,isToggled:t.state.toggledIndex===n,onClick:m.Utils.wrappedOnClickForItem(e.props.onClick,t.handleItemToggled,{index:n,isDisabled:e.props.isDisabled}),onKeyDown:m.Utils.wrappedOnKeyDownForItem(e.props.onKeyDown,t.handleItemToggled,{index:n,isDisabled:e.props.isDisabled})})}))}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,l.default)(e,g),a=this.cloneChildren(t);return p.default.createElement(m.default,(0,o.default)({},n,{role:"group"}),a)}}]),t}(p.default.Component);C.propTypes=_,C.childContextTypes=k;t.default=C},71312:function(e,t,n){var a=n(24994),i=n(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(91847)),l=a(n(17383)),r=a(n(34579)),s=a(n(28452)),u=a(n(63072)),d=a(n(12475)),c=a(n(29511)),f=a(n(96540)),p=n(8604),h=a(n(5556)),m=a(n(80708)),g=a(n(89115)),v=a(n(54495)),b=a(n(20756)),y=a(n(39496)),_=a(n(67967)),k=x(n(25966)),w=a(n(23695)),C=n(68414),E=x(n(12724)),I=a(n(19743)),O=a(n(55317)),M=["children","isToggleable"];function D(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(D=function(e){return e?n:t})(e)}function x(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=D(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}function T(e,t,n){return t=(0,u.default)(t),(0,s.default)(e,R()?Reflect.construct(t,n||[],(0,u.default)(e).constructor):t.apply(e,n))}function R(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(R=function(){return!!e})()}var N=_.default.bind(O.default),S={intl:h.default.shape({formatMessage:h.default.func}).isRequired,title:h.default.string,onRequestBack:h.default.func,onRequestClose:h.default.func,onRequestNext:h.default.func.isRequired,children:h.default.node.isRequired,index:h.default.number.isRequired,boundingRef:h.default.func,isFocused:h.default.bool,isHeightBounded:h.default.bool,isWidthBounded:h.default.bool,fixedHeight:h.default.number,fixedWidth:h.default.number,contentWidth:h.default.number,isHidden:h.default.bool,refCallback:h.default.func,headerTitle:h.default.string,showHeader:h.default.bool},H={isToggleableMenu:h.default.bool,shouldReserveSpaceForIcon:h.default.bool},K=function(e){function t(e){var n;return(0,l.default)(this,t),(n=T(this,t,[e])).wrapOnClick=n.wrapOnClick.bind((0,d.default)(n)),n.wrapOnKeyDown=n.wrapOnKeyDown.bind((0,d.default)(n)),n.buildHeader=n.buildHeader.bind((0,d.default)(n)),n.isToggleable=n.isToggleable.bind((0,d.default)(n)),n.shouldReserveSpaceForIcon=n.shouldReserveSpaceForIcon.bind((0,d.default)(n)),n.onKeyDown=n.onKeyDown.bind((0,d.default)(n)),n.onKeyDownBackButton=n.onKeyDownBackButton.bind((0,d.default)(n)),n.validateFocus=n.validateFocus.bind((0,d.default)(n)),n.ariaDescribedByHandle=n.ariaDescribedByHandle.bind((0,d.default)(n)),n.needsFocus=e.isFocused,n.handleContainerRef=n.handleContainerRef.bind((0,d.default)(n)),n.getSubmenuHeight=n.getSubmenuHeight.bind((0,d.default)(n)),n.setListNode=n.setListNode.bind((0,d.default)(n)),n.menuHeaderId="terra-menu-headertitle-".concat((0,C.v4)()),n.menuTopHeaderId="terra-menu-headertitle-".concat((0,C.v4)()),n.state={focusIndex:-1},n}return(0,c.default)(t,e),(0,r.default)(t,[{key:"getChildContext",value:function(){return{isToggleableMenu:this.isToggleable(),shouldReserveSpaceForIcon:this.shouldReserveSpaceForIcon()}}},{key:"componentDidMount",value:function(){var e=this.contentNode.querySelectorAll('[data-terra-menu-interactive-item="true"]');e.length&&e[0].focus()}},{key:"componentDidUpdate",value:function(e){this.props.isFocused?this.needsFocus=this.needsFocus||this.props.isFocused!==e.isFocused:this.needsFocus=!1,this.validateFocus(this.contentNode)}},{key:"handleContainerRef",value:function(e){this.props.refCallback&&this.props.refCallback(e),this.contentNode=e,this.validateFocus(e)}},{key:"onKeyDown",value:function(e){e.stopPropagation();var t=this.contentNode.querySelectorAll('li[tabindex="0"]');e.nativeEvent.keyCode!==k.KEY_UP&&e.nativeEvent.keyCode!==k.KEY_END||t[t.length-1].focus(),e.nativeEvent.keyCode!==k.KEY_DOWN&&e.nativeEvent.keyCode!==k.KEY_HOME||t[0].focus()}},{key:"onKeyDownBackButton",value:function(e){e.nativeEvent.keyCode!==k.KEY_RETURN&&e.nativeEvent.keyCode!==k.KEY_SPACE&&e.nativeEvent.keyCode!==k.KEY_LEFT||(e.preventDefault(),this.props.onRequestBack())}},{key:"getSubmenuHeight",value:function(){if(this.props.index>0&&this.listNode){var e="orion-fusion-theme"===(this.context.name||this.context.className)||E.default.isSafari()?20:10,t=this.listNode.clientHeight+this.listNode.parentNode.parentNode.parentNode.firstChild.clientHeight+e;return t>window.innerHeight?window.innerHeight:t}return 0}},{key:"setListNode",value:function(e){e&&(this.listNode=e)}},{key:"validateFocus",value:function(e){this.needsFocus&&e&&(e.focus(),this.needsFocus=document.activeElement!==e,this.props.index>0&&e.querySelector('[role="button"][tabIndex="0"]').focus())}},{key:"isToggleable",value:function(){var e=!1;return f.default.Children.forEach(this.props.children,(function(t){var n=t.props,a=n.children,i=n.isToggleable,l=(0,o.default)(n,M);f.default.Children.forEach(a,(function(t){t.type===I.default&&(e=!0)})),(i||l.isSelectable)&&(e=!0)})),e}},{key:"shouldReserveSpaceForIcon",value:function(){var e=!1;return f.default.Children.forEach(this.props.children,(function(t){var n=t.props,a=n.icon,i=n.isInstructionsForUse;(a||i)&&(e=!0)})),e}},{key:"wrapOnClick",value:function(e){var t=this,n=e.props.onClick;return function(a){a.preventDefault(),-1!==t.state.focusIndex&&t.setState({focusIndex:-1}),e.props.subMenuItems&&e.props.subMenuItems.length>0&&"keydown"!==a.type&&t.props.onRequestNext(e),n&&n(a)}}},{key:"wrapOnKeyDown",value:function(e,t,n){var a=this,i=e.props.onKeyDown;return function(o){var l=o.shiftKey&&o.nativeEvent.keyCode===k.KEY_TAB,r=o.nativeEvent.keyCode===k.KEY_TAB;l||r||o.preventDefault(),n||o.nativeEvent.keyCode!==k.KEY_RETURN&&o.nativeEvent.keyCode!==k.KEY_SPACE?n||o.nativeEvent.keyCode!==k.KEY_RIGHT?n||o.nativeEvent.keyCode!==k.KEY_LEFT?o.nativeEvent.keyCode===k.KEY_UP?a.setState({focusIndex:t-1}):o.nativeEvent.keyCode===k.KEY_DOWN&&a.setState({focusIndex:t+1}):a.props.onRequestBack():e.props.subMenuItems&&e.props.subMenuItems.length>0&&a.props.onRequestNext(e):e.props.subMenuItems&&e.props.subMenuItems.length>0&&(a.props.onRequestNext(e),a.setState({focusIndex:t})),i&&i(o)}}},{key:"buildHeader",value:function(e){var t=this.props.intl,n=t.formatMessage({id:"Terra.menu.back"}),a=t.formatMessage({id:"Terra.menu.close"}),i=f.default.createElement(b.default,null),o=f.default.createElement("div",null);this.props.onRequestClose&&e&&(o=f.default.createElement("button",{type:"button",className:N("header-button"),onClick:this.props.onRequestClose,"aria-label":a},i));var l=f.default.createElement(g.default,null),r=f.default.createElement("div",null);return this.props.index>0?r=f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:N("header-container")},f.default.createElement("div",{className:N("header-button"),role:"button",onClick:this.props.onRequestBack,onKeyDown:this.onKeyDownBackButton,tabIndex:"0","aria-label":n,"aria-describedby":this.menuHeaderId},l),f.default.createElement("h2",{id:this.menuHeaderId,className:N("header-title")},this.props.title))):this.props.headerTitle&&this.props.headerTitle.length>0&&(r=f.default.createElement("h1",{id:this.menuTopHeaderId,className:N(["header-title","main-header-title"])},this.props.headerTitle)),f.default.createElement(y.default,{className:N("header"),fitEnd:o,fill:r,align:"center"})}},{key:"ariaDescribedByHandle",value:function(e,t){if(!E.default.isMac()&&!this.props.index&&this.props.showHeader&&0===t){var n=e.props.ariaDescribedBy?" ".concat(e.props.ariaDescribedBy):"";return"".concat(this.menuTopHeaderId).concat(n)}return e.props.ariaDescribedBy}},{key:"render",value:function(){var e=this,t=-1,n=E.default.totalItems(this.props.children),a=this.props.children?[]:void 0;f.default.Children.map(this.props.children,(function(i){var o=e.wrapOnClick(i),l=i;if(i.props.text){t+=1;var r=e.wrapOnKeyDown(i,t,i.props.isDisabled),s=e.state.focusIndex===t,u=e.ariaDescribedByHandle(i,t);l=f.default.cloneElement(i,{onClick:o,onKeyDown:r,isActive:s,totalItems:n,index:t,intl:e.props.intl,"aria-describedby":u})}else if(i.props.children){var d=i.props.children?[]:void 0;f.default.Children.forEach(i.props.children,(function(a){t+=1;var i=e.ariaDescribedByHandle(a,t),o=f.default.cloneElement(a,{onKeyDown:e.wrapOnKeyDown(a,t,a.props.isDisabled),isActive:t===e.state.focusIndex,totalItems:n,index:t,intl:e.props.intl,"aria-describedby":i});d.push(o)})),l=f.default.cloneElement(i,{},d)}a.push(l)}));var i,o,l=this.props.boundingRef?this.props.boundingRef():void 0,r=E.default.isFullScreen(this.props.isHeightBounded,this.props.isWidthBounded,l,this.props.contentWidth),s=this.context,u=this.props.index>0,d=N("content",{submenu:u},{"hidden-page":this.props.isHidden},{fullscreen:r},s.className);(this.props.showHeader||u)&&(i=this.buildHeader(r)),o=this.props.isHeightBounded?"100%":this.props.boundingRef?this.props.fixedHeight:void 0;var c=!u||this.props.boundingRef||this.props.isHeightBounded?o:this.getSubmenuHeight(),p=this.props.isHeightBounded?"relative":"static",h=this.props.isWidthBounded?void 0:this.props.fixedWidth;return f.default.createElement("div",{ref:this.handleContainerRef,className:d,style:{height:c,width:h,position:p},tabIndex:"-1","aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown,onFocus:E.stopPropagation},f.default.createElement(v.default,{header:i,fill:this.props.isHeightBounded||this.props.index>0},f.default.createElement(m.default,{className:N("list"),role:"menu","data-submenu":u,refCallback:this.setListNode},a)))}}]),t}(f.default.Component);K.propTypes=S,K.defaultProps={isFocused:!1,title:"",isWidthBounded:!1,isHeightBounded:!1,headerTitle:"",isHidden:!1},K.childContextTypes=H,K.contextType=w.default;t.default=(0,p.injectIntl)(K)},12724:function(e,t,n){var a=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.stopPropagation=t.default=void 0;var i=a(n(96540)),o=(t.stopPropagation=function(e){e.stopPropagation()},{isFullScreen:function(e,t,n,a){var i,o=a;return!((i=n&&!t?n.clientWidth:window.innerWidth)<=0)&&(e&&(o>=i||t))},isMac:function(){return-1!==navigator.userAgent.indexOf("Mac")&&-1===navigator.userAgent.indexOf("Win")},totalItems:function(e){var t=0;return i.default.Children.map(e,(function(e){e.props.text?t+=1:e.props.children&&i.default.Children.forEach(e.props.children,(function(){t+=1}))})),t},findMenuItem:function e(t,n){for(var a=0;a<t.length;a+=1){if(t[a].key===n)return t[a];if(t[a].props.subMenuItems)return e(t[a].props.subMenuItems,n)}},isSafari:function(){return-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")}});t.default=o},55317:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Menu-module__clinical-lowlight-theme___hKzLg","orion-fusion-theme":"Menu-module__orion-fusion-theme___4S+kd",submenu:"Menu-module__submenu___pD8uM",arrow:"Menu-module__arrow___qDX5+",divider:"Menu-module__divider___2Yiip",header:"Menu-module__header___UGEhF","header-title":"Menu-module__header-title___TkZxM","main-header-title":"Menu-module__main-header-title___RFIql","header-button":"Menu-module__header-button___VFD6H",fullscreen:"Menu-module__fullscreen___Q66Ry",list:"Menu-module__list___bRMML",content:"Menu-module__content___F0Uw5","hidden-page":"Menu-module__hidden-page___M4G7V","header-container":"Menu-module__header-container___KGuP2"}},31604:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"MenuItem-module__clinical-lowlight-theme___GRWU4","orion-fusion-theme":"MenuItem-module__orion-fusion-theme___OJBfh",item:"MenuItem-module__item___d5cbi","is-disabled":"MenuItem-module__is-disabled___pQC5d","is-highlighted":"MenuItem-module__is-highlighted___2iz9A",chevron:"MenuItem-module__chevron___KG83f",active:"MenuItem-module__active___JF61u",text:"MenuItem-module__text___ax0k2","start-icon":"MenuItem-module__start-icon___IrbDC","is-top-level":"MenuItem-module__is-top-level___TFDcC",checkmark:"MenuItem-module__checkmark___PFCFZ","is-toggled":"MenuItem-module__is-toggled___Kl1vs"}}}]);