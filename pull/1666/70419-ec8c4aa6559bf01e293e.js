"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[70419],{70419:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(10434)),o=a(n(70215)),l=a(n(56690)),r=a(n(89728)),s=a(n(66115)),u=a(n(61655)),d=a(n(94993)),c=a(n(73808)),f=a(n(67294)),p=a(n(45697)),h=a(n(92306)),m=a(n(47166)),v=a(n(711)),g=a(n(22442)),b=a(n(28520)),y=a(n(43818)),_=a(n(69346)),k=["boundingRef","classNameArrow","classNameContent","classNameOverlay","onRequestClose","isOpen","children","targetRef","isArrowDisplayed","contentWidth","showHeader"];function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var C=m.default.bind(_.default),E={children:p.default.node.isRequired,onRequestClose:p.default.func.isRequired,targetRef:p.default.func.isRequired,boundingRef:p.default.func,classNameArrow:p.default.string,classNameContent:p.default.string,classNameOverlay:p.default.string,isOpen:p.default.bool,contentWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),isArrowDisplayed:p.default.bool,headerTitle:p.default.string,showHeader:p.default.bool},O=function(e){(0,u.default)(n,e);var t=w(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).setPageDimensions=a.setPageDimensions.bind((0,s.default)(a)),a.push=a.push.bind((0,s.default)(a)),a.pop=a.pop.bind((0,s.default)(a)),a.state={stack:[(0,s.default)(a)]},a}return(0,r.default)(n,[{key:"componentDidUpdate",value:function(e){(!this.props.isOpen&&e.isOpen||this.props.children.length!==e.children.length)&&this.setState({stack:[this]})}},{key:"setPageDimensions",value:function(e){e?(this.pageHeight=e.clientHeight,"auto"===this.props.contentWidth&&(this.pageWidth=e.clientWidth)):(this.pageHeight=void 0,this.pageWidth=void 0)}},{key:"pop",value:function(){this.state.stack.length>1&&this.setState((function(e){var t=e.stack.slice();return t.pop(),{stack:t}}))}},{key:"push",value:function(e){this.setState((function(t){var n=t.stack.slice();return n.push(e),{stack:n}}))}},{key:"render",value:function(){var e=this,t=this.props,n=t.boundingRef,a=t.classNameArrow,l=t.classNameContent,r=t.classNameOverlay,s=t.onRequestClose,u=t.isOpen,d=(t.children,t.targetRef),c=t.isArrowDisplayed,p=t.contentWidth,m=t.showHeader,g=(0,o.default)(t,k),b=C(["arrow",{submenu:this.state.stack.length>1},a]),y=this.state.stack.length-1,_=this.state.stack.map((function(t,a){return f.default.createElement(v.default,{key:"MenuPage-".concat(a),title:t.props.text,onRequestNext:e.push,onRequestBack:e.pop,onRequestClose:e.props.onRequestClose,isHidden:a!==y,fixedHeight:e.pageHeight,fixedWidth:e.pageWidth,contentWidth:h.default.Opts.widths[p],refCallback:0===y?e.setPageDimensions:null,index:a,boundingRef:n,isFocused:a===y,headerTitle:e.props.headerTitle,showHeader:m},t.props.children||t.props.subMenuItems)}));return f.default.createElement(h.default,(0,i.default)({},g,{boundingRef:n,isArrowDisplayed:c,attachmentBehavior:"flip",contentAttachment:c?"top center":"top right",contentHeight:"auto",contentWidth:this.props.contentWidth,classNameArrow:b,classNameContent:l,classNameOverlay:r,isOpen:u,onRequestClose:s,targetRef:d,isHeaderDisabled:!0,isContentFocusDisabled:!0}),_)}}]),n}(f.default.Component);O.propTypes=E,O.defaultProps={isArrowDisplayed:!1,isOpen:!1,contentWidth:"240",headerTitle:"",showHeader:!0},O.Item=g.default,O.ItemGroup=b.default,O.Divider=y.default,O.Opts={widths:h.default.Opts.widths};var I=O;t.default=I},43818:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(67294)),o=a(n(47166)),l=a(n(69346)),r=o.default.bind(l.default),s=function(){return i.default.createElement("li",{className:r("divider"),role:"presentation"})};t.default=s},22442:function(e,t,n){var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(10434)),l=a(n(38416)),r=a(n(70215)),s=a(n(56690)),u=a(n(89728)),d=a(n(66115)),c=a(n(61655)),f=a(n(94993)),p=a(n(73808)),h=a(n(67294)),m=n(25387),v=a(n(45697)),g=a(n(78490)),b=a(n(19983)),y=a(n(23399)),_=a(n(46379)),k=a(n(94184)),w=a(n(47166)),C=a(n(47341)),E=a(n(37645)),O=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(51051)),I=a(n(45696)),R=a(n(35547)),M=["text","isDisabled","isSelected","isToggled","isInstructionsForUse","isSelectable","isToggleable","subMenuItems","isActive","icon","isHighlighted","index","totalItems","intl"];function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function T(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,p.default)(e);if(t){var i=(0,p.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,f.default)(this,n)}}var N=w.default.bind(I.default),K={isGroupItem:v.default.bool,isSelectableMenu:v.default.bool,isToggleableMenu:v.default.bool,shouldReserveSpaceForIcon:v.default.bool},F={text:v.default.string,isDisabled:v.default.bool,isSelected:v.default.bool,isSelectable:v.default.bool,isToggled:v.default.bool,isToggleable:v.default.bool,isInstructionsForUse:v.default.bool,subMenuItems:v.default.arrayOf(v.default.element),onClick:v.default.func,onChange:v.default.func,isActive:v.default.bool,icon:v.default.element,isHighlighted:v.default.bool,index:v.default.number,totalItems:v.default.number,intl:v.default.shape({formatMessage:v.default.func}).isRequired},S={text:"",isToggled:!1,isInstructionsForUse:!1,isActive:!1,isToggleable:void 0,isDisabled:!1,subMenuItems:[],isHighlighted:!1},P=function(e){(0,c.default)(n,e);var t=T(n);function n(e,a){var i;(0,s.default)(this,n);var o=(i=t.call(this,e,a)).props,l=o.isSelected,r=o.isSelectable,u=o.isToggled,c=o.isToggleable;i.wrapOnClick=i.wrapOnClick.bind((0,d.default)(i)),i.wrapOnKeyDown=i.wrapOnKeyDown.bind((0,d.default)(i)),i.wrapOnKeyUp=i.wrapOnKeyUp.bind((0,d.default)(i)),i.handleToggled=i.handleToggled.bind((0,d.default)(i)),i.setItemNode=i.setItemNode.bind((0,d.default)(i));var f=u||l,p=c||r;return i.state={isToggled:f&&p&&!a.isGroupItem,isActive:!1},i}return(0,u.default)(n,[{key:"componentDidUpdate",value:function(){this.props.isActive&&this.itemNode&&this.itemNode.focus()}},{key:"handleToggled",value:function(e){e.preventDefault();var t=this.props,n=t.isSelectable;!t.isToggleable&&!n||this.context.isGroupItem||this.props.isDisabled||(this.setState((function(e){return{isToggled:!e.isToggled}})),this.props.onChange&&this.props.onChange(e,!this.state.isToggled))}},{key:"setItemNode",value:function(e){e&&(this.itemNode=e)}},{key:"wrapOnClick",value:function(e){this.handleToggled(e),this.props.onClick&&this.props.onClick(e)}},{key:"wrapOnKeyDown",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode===O.KEY_RETURN||n.nativeEvent.keyCode===O.KEY_SPACE?(t.handleToggled(n),t.props.subMenuItems&&t.props.subMenuItems.length>0||t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(n)):n.nativeEvent.keyCode===O.KEY_TAB&&t.setState({isActive:!1}),e&&e(n)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==O.KEY_RETURN&&n.nativeEvent.keyCode!==O.KEY_SPACE||t.setState({isActive:!1}),e&&e(n)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.text,a=t.isDisabled,i=t.isSelected,s=t.isToggled,u=t.isInstructionsForUse,d=t.isSelectable,c=t.isToggleable,f=t.subMenuItems,p=(t.isActive,t.icon),m=t.isHighlighted,v=t.index,w=t.totalItems,O=t.intl,I=(0,r.default)(t,M),x=this.context,T=x.isGroupItem,K=x.isToggleableMenu,F=x.isSelectableMenu,S=x.shouldReserveSpaceForIcon,P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},I),H=s||i,j=c||d,W=K||F;delete P.hasChevron,a?delete P.onClick:(P.onClick=this.wrapOnClick,P.onKeyDown=this.wrapOnKeyDown(P.onKeyDown),P.onKeyUp=this.wrapOnKeyUp(P.Up),P["data-terra-menu-interactive-item"]=!0);var A=this.state.isToggled||T&&H&&!a,B=h.default.createElement("div",{className:N("text")},n),q=f.length>0,U=N(["item",{"is-highlighted":m},{"is-toggled":A},{"is-toggleable":j},{"is-disabled":a},{"is-top-level":q},{active:this.state.isActive},P.className]),Y=B,G=h.default.createElement(h.default.Fragment,null,R.default.isMac()&&h.default.createElement(E.default,{text:O.formatMessage({id:"Terra.menu.index"},{index:v+1,totalItems:w})}),R.default.isMac()&&(T||j)&&h.default.createElement(E.default,{text:A?O.formatMessage({id:"Terra.menu.selected"}):O.formatMessage({id:"Terra.menu.unselected"})}),f.length>0&&h.default.createElement(E.default,{text:O.formatMessage({id:"Terra.menu.itemWithSubmenu"})}),this.itemNode&&"true"===this.itemNode.parentNode.getAttribute("data-submenu")&&0===v&&h.default.createElement(E.default,{text:O.formatMessage({id:"Terra.menu.exitSubmenu"})}));if(q||W||u||p||S){var L=null;u?L=h.default.createElement(_.default,{className:N("start-icon")}):W?L=!j&&p?h.default.cloneElement(p,{className:N([p.props.className,"start-icon"])}):h.default.createElement(b.default,{className:N(["checkmark","start-icon"])}):p?L=h.default.cloneElement(p,{className:N([p.props.className,"start-icon"])}):S&&(L=h.default.createElement(b.default,{className:N(["checkmark","start-icon"])})),Y=h.default.createElement(h.default.Fragment,null,h.default.createElement(g.default,{fitStart:L,fill:B,fitEnd:q?h.default.createElement(y.default,{className:N("chevron")}):null,align:"center"}),G)}else Y=h.default.createElement(h.default.Fragment,null,B,G);var z="menuitem";return T?z="menuitemradio":j&&(z="menuitemcheckbox"),h.default.createElement(C.default.Consumer,null,(function(t){return h.default.createElement("li",(0,o.default)({},P,{className:(0,k.default)(U,N(t.className)),ref:e.setItemNode,role:z,"aria-checked":A,tabIndex:"0","aria-disabled":a}),Y)}))}}]),n}(h.default.Component);P.propTypes=F,P.defaultProps=S,P.contextTypes=K;var H=(0,m.injectIntl)(P);t.default=H},28520:function(e,t,n){var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(10434)),l=a(n(70215)),r=a(n(56690)),s=a(n(89728)),u=a(n(66115)),d=a(n(61655)),c=a(n(94993)),f=a(n(73808)),p=a(n(67294)),h=a(n(45697)),m=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(93670)),v=["children"];function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var y={children:h.default.node.isRequired,onChange:h.default.func},_={isGroupItem:h.default.bool,shouldReserveSpaceForIcon:h.default.bool},k=function(e){for(var t=p.default.Children.toArray(e),n=0;n<t.length;n+=1)if(t[n].props.isSelected)return n;return-1},w=function(e){(0,d.default)(n,e);var t=b(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).cloneChildren=a.cloneChildren.bind((0,u.default)(a)),a.handleItemToggled=a.handleItemToggled.bind((0,u.default)(a)),a.state={toggledIndex:k(e.children)},a}return(0,s.default)(n,[{key:"getChildContext",value:function(){return{isGroupItem:!0,shouldReserveSpaceForIcon:!0}}},{key:"handleItemToggled",value:function(e,t){this.state.toggledIndex===t.index||t.isDisabled||(e.preventDefault(),this.setState({toggledIndex:t.index}),this.props.onChange&&this.props.onChange(e,t.index))}},{key:"cloneChildren",value:function(e){var t=this;return p.default.Children.map(e,(function(e,n){var a=!0;return!1===e.props.isToggleable&&!1===e.props.isSelectable&&(a=!1),p.default.cloneElement(e,{isToggleable:a,isToggled:t.state.toggledIndex===n,onClick:m.Utils.wrappedOnClickForItem(e.props.onClick,t.handleItemToggled,{index:n,isDisabled:e.props.isDisabled}),onKeyDown:m.Utils.wrappedOnKeyDownForItem(e.props.onKeyDown,t.handleItemToggled,{index:n,isDisabled:e.props.isDisabled})})}))}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,l.default)(e,v),a=this.cloneChildren(t);return p.default.createElement(m.default,(0,o.default)({},n,{role:"group"}),a)}}]),n}(p.default.Component);w.propTypes=y,w.childContextTypes=_;var C=w;t.default=C},711:function(e,t,n){var a=n(64836),i=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(70215)),l=a(n(56690)),r=a(n(89728)),s=a(n(66115)),u=a(n(61655)),d=a(n(94993)),c=a(n(73808)),f=a(n(67294)),p=n(25387),h=a(n(45697)),m=a(n(93670)),v=a(n(53386)),g=a(n(10027)),b=a(n(71713)),y=a(n(78490)),_=a(n(47166)),k=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==i(e)&&"function"!=typeof e)return{default:e};var n=M(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var r=o?Object.getOwnPropertyDescriptor(e,l):null;r&&(r.get||r.set)?Object.defineProperty(a,l,r):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(51051)),w=a(n(47341)),C=a(n(71171)),E=a(n(35547)),O=a(n(22442)),I=a(n(69346)),R=["children","isToggleable"];function M(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(M=function(e){return e?n:t})(e)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var D=_.default.bind(I.default),T="terra-menu-headertitle-".concat((0,C.default)()),N="terra-menu-headertitle-".concat((0,C.default)()),K={intl:h.default.shape({formatMessage:h.default.func}).isRequired,title:h.default.string,onRequestBack:h.default.func,onRequestClose:h.default.func,onRequestNext:h.default.func.isRequired,children:h.default.node.isRequired,index:h.default.number.isRequired,boundingRef:h.default.func,isFocused:h.default.bool,isHeightBounded:h.default.bool,isWidthBounded:h.default.bool,fixedHeight:h.default.number,fixedWidth:h.default.number,contentWidth:h.default.number,isHidden:h.default.bool,refCallback:h.default.func,headerTitle:h.default.string,showHeader:h.default.bool},F={isToggleableMenu:h.default.bool,shouldReserveSpaceForIcon:h.default.bool},S=function(e){(0,u.default)(n,e);var t=x(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).wrapOnClick=a.wrapOnClick.bind((0,s.default)(a)),a.wrapOnKeyDown=a.wrapOnKeyDown.bind((0,s.default)(a)),a.buildHeader=a.buildHeader.bind((0,s.default)(a)),a.isToggleable=a.isToggleable.bind((0,s.default)(a)),a.shouldReserveSpaceForIcon=a.shouldReserveSpaceForIcon.bind((0,s.default)(a)),a.onKeyDown=a.onKeyDown.bind((0,s.default)(a)),a.onKeyDownBackButton=a.onKeyDownBackButton.bind((0,s.default)(a)),a.validateFocus=a.validateFocus.bind((0,s.default)(a)),a.needsFocus=e.isFocused,a.handleContainerRef=a.handleContainerRef.bind((0,s.default)(a)),a.state={focusIndex:-1},a}return(0,r.default)(n,[{key:"getChildContext",value:function(){return{isToggleableMenu:this.isToggleable(),shouldReserveSpaceForIcon:this.shouldReserveSpaceForIcon()}}},{key:"componentDidMount",value:function(){var e=this.contentNode.querySelectorAll('[data-terra-menu-interactive-item="true"]');e.length&&e[0].focus()}},{key:"componentDidUpdate",value:function(e){this.props.isFocused?this.needsFocus=this.needsFocus||this.props.isFocused!==e.isFocused:this.needsFocus=!1,this.validateFocus(this.contentNode)}},{key:"handleContainerRef",value:function(e){this.props.refCallback&&this.props.refCallback(e),this.contentNode=e,this.validateFocus(e)}},{key:"onKeyDown",value:function(e){var t=this.contentNode.querySelectorAll('li[tabindex="0"]');e.nativeEvent.keyCode!==k.KEY_UP&&e.nativeEvent.keyCode!==k.KEY_END||t[t.length-1].focus(),e.nativeEvent.keyCode!==k.KEY_DOWN&&e.nativeEvent.keyCode!==k.KEY_HOME||t[0].focus()}},{key:"onKeyDownBackButton",value:function(e){e.nativeEvent.keyCode!==k.KEY_RETURN&&e.nativeEvent.keyCode!==k.KEY_SPACE&&e.nativeEvent.keyCode!==k.KEY_LEFT||(e.preventDefault(),this.props.onRequestBack())}},{key:"validateFocus",value:function(e){this.needsFocus&&e&&(e.focus(),this.needsFocus=document.activeElement!==e,this.props.index>0&&e.querySelector('[role="button"][tabIndex="0"]').focus())}},{key:"isToggleable",value:function(){var e=!1;return f.default.Children.forEach(this.props.children,(function(t){var n=t.props,a=n.children,i=n.isToggleable,l=(0,o.default)(n,R);f.default.Children.forEach(a,(function(t){t.type===O.default&&(e=!0)})),(i||l.isSelectable)&&(e=!0)})),e}},{key:"shouldReserveSpaceForIcon",value:function(){var e=!1;return f.default.Children.forEach(this.props.children,(function(t){var n=t.props,a=n.icon,i=n.isInstructionsForUse;(a||i)&&(e=!0)})),e}},{key:"wrapOnClick",value:function(e){var t=this,n=e.props.onClick;return function(a){a.preventDefault(),-1!==t.state.focusIndex&&t.setState({focusIndex:-1}),e.props.subMenuItems&&e.props.subMenuItems.length>0&&"keydown"!==a.type&&t.props.onRequestNext(e),n&&n(a)}}},{key:"wrapOnKeyDown",value:function(e,t,n){var a=this,i=e.props.onKeyDown;return function(o){var l=o.shiftKey&&o.nativeEvent.keyCode===k.KEY_TAB,r=o.nativeEvent.keyCode===k.KEY_TAB;l||r||o.preventDefault(),n||o.nativeEvent.keyCode!==k.KEY_RETURN&&o.nativeEvent.keyCode!==k.KEY_SPACE?n||o.nativeEvent.keyCode!==k.KEY_RIGHT?n||o.nativeEvent.keyCode!==k.KEY_LEFT?o.nativeEvent.keyCode===k.KEY_UP?a.setState({focusIndex:t-1}):o.nativeEvent.keyCode===k.KEY_DOWN&&a.setState({focusIndex:t+1}):a.props.onRequestBack():e.props.subMenuItems&&e.props.subMenuItems.length>0&&a.props.onRequestNext(e):e.props.subMenuItems&&e.props.subMenuItems.length>0&&(a.props.onRequestNext(e),a.setState({focusIndex:t})),i&&i(o)}}},{key:"buildHeader",value:function(e){var t=this.props.intl,n=t.formatMessage({id:"Terra.menu.back"}),a=t.formatMessage({id:"Terra.menu.close"}),i=f.default.createElement(b.default,null),o=f.default.createElement("div",null);this.props.onRequestClose&&e&&(o=f.default.createElement("button",{type:"button",className:D("header-button"),onClick:this.props.onRequestClose,"aria-label":a},i));var l=f.default.createElement(v.default,null),r=f.default.createElement("div",null);return this.props.index>0?r=f.default.createElement(f.default.Fragment,null,f.default.createElement("div",{className:D("header-container")},f.default.createElement("div",{className:D("header-button"),role:"button",onClick:this.props.onRequestBack,onKeyDown:this.onKeyDownBackButton,tabIndex:"0","aria-label":n,"aria-describedby":T},l),f.default.createElement("h2",{id:T,className:D("header-title")},this.props.title))):this.props.headerTitle&&this.props.headerTitle.length>0&&(r=f.default.createElement("h1",{id:N,className:D(["header-title","main-header-title"])},this.props.headerTitle)),f.default.createElement(y.default,{className:D("header"),fitEnd:o,fill:r,align:"center"})}},{key:"render",value:function(){var e=this,t=-1,n=E.default.totalItems(this.props.children),a=this.props.children?[]:void 0;f.default.Children.map(this.props.children,(function(i){var o=e.wrapOnClick(i),l=i;if(i.props.text){t+=1;var r=e.wrapOnKeyDown(i,t,i.props.isDisabled),s=e.state.focusIndex===t;l=f.default.cloneElement(i,{onClick:o,onKeyDown:r,isActive:s,totalItems:n,index:t,intl:e.props.intl,"aria-describedby":E.default.isMac()||e.props.index||!e.props.showHeader||0!==t?void 0:N})}else if(i.props.children){var u=i.props.children?[]:void 0;f.default.Children.forEach(i.props.children,(function(a){t+=1;var i=f.default.cloneElement(a,{onKeyDown:e.wrapOnKeyDown(a,t,a.props.isDisabled),isActive:t===e.state.focusIndex,totalItems:n,index:t,intl:e.props.intl,"aria-describedby":E.default.isMac()||e.props.index||!e.props.showHeader||0!==t?void 0:N});u.push(i)})),l=f.default.cloneElement(i,{},u)}a.push(l)}));var i,o=this.props.boundingRef?this.props.boundingRef():void 0,l=E.default.isFullScreen(this.props.isHeightBounded,this.props.isWidthBounded,o,this.props.contentWidth),r=this.context,s=this.props.index>0,u=D("content",{submenu:s},{"hidden-page":this.props.isHidden},{fullscreen:l},r.className);(this.props.showHeader||s)&&(i=this.buildHeader(l));var d=this.props.isHeightBounded?"100%":this.props.fixedHeight,c=this.props.isHeightBounded?"relative":"static",p=this.props.isWidthBounded?void 0:this.props.fixedWidth;return f.default.createElement("div",{ref:this.handleContainerRef,className:u,style:{height:d,width:p,position:c},tabIndex:"-1","aria-modal":"true",role:"dialog",onKeyDown:this.onKeyDown},f.default.createElement(g.default,{header:i,fill:this.props.isHeightBounded||this.props.index>0},f.default.createElement(m.default,{className:D("list"),role:"menu","data-submenu":s},a)))}}]),n}(f.default.Component);S.propTypes=K,S.defaultProps={isFocused:!1,title:"",isWidthBounded:!1,isHeightBounded:!1,headerTitle:"",isHidden:!1},S.childContextTypes=F,S.contextType=w.default;var P=(0,p.injectIntl)(S);t.default=P},35547:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(67294)),o={isFullScreen:function(e,t,n,a){var i,o=a;return!((i=n&&!t?n.clientWidth:window.innerWidth)<=0)&&(e&&(o>=i||t))},isMac:function(){return-1!==navigator.userAgent.indexOf("Mac")&&-1===navigator.userAgent.indexOf("Win")},totalItems:function(e){var t=0;return i.default.Children.map(e,(function(e){e.props.text?t+=1:e.props.children&&i.default.Children.forEach(e.props.children,(function(){t+=1}))})),t}};t.default=o},69346:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Menu-module__clinical-lowlight-theme___hKzLg","orion-fusion-theme":"Menu-module__orion-fusion-theme___4S+kd",submenu:"Menu-module__submenu___pD8uM",arrow:"Menu-module__arrow___qDX5+",divider:"Menu-module__divider___2Yiip",header:"Menu-module__header___UGEhF","header-title":"Menu-module__header-title___TkZxM","main-header-title":"Menu-module__main-header-title___RFIql","header-button":"Menu-module__header-button___VFD6H",fullscreen:"Menu-module__fullscreen___Q66Ry",list:"Menu-module__list___bRMML",content:"Menu-module__content___F0Uw5","hidden-page":"Menu-module__hidden-page___M4G7V","header-container":"Menu-module__header-container___KGuP2"}},45696:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"MenuItem-module__clinical-lowlight-theme___GRWU4","orion-fusion-theme":"MenuItem-module__orion-fusion-theme___OJBfh",item:"MenuItem-module__item___d5cbi","is-disabled":"MenuItem-module__is-disabled___pQC5d","is-highlighted":"MenuItem-module__is-highlighted___2iz9A",chevron:"MenuItem-module__chevron___KG83f",active:"MenuItem-module__active___JF61u",text:"MenuItem-module__text___ax0k2","start-icon":"MenuItem-module__start-icon___IrbDC","is-top-level":"MenuItem-module__is-top-level___TFDcC",checkmark:"MenuItem-module__checkmark___PFCFZ","is-toggled":"MenuItem-module__is-toggled___Kl1vs"}}}]);