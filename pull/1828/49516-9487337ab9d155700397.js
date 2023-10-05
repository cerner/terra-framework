"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[49516],{81061:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(70215)),u=l(n(56690)),o=l(n(89728)),r=l(n(66115)),d=l(n(61655)),s=l(n(94993)),c=l(n(73808)),f=l(n(67294)),h=l(n(32018)),p=l(n(45697)),m=l(n(94184)),v=l(n(47166)),b=l(n(47341)),C=n(25387),y=n(34614),g=l(n(18898)),w=l(n(4256)),O=l(n(77992)),_=["children","boundingRef","menuWidth","intl","alwaysCollapsedMenuItems","isStartAligned","useHorizontalIcon","isReversedChildrenOrder"];function M(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var k=v.default.bind(O.default),R={children:p.default.node.isRequired,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),boundingRef:p.default.func,alwaysCollapsedMenuItems:p.default.arrayOf(p.default.element),isStartAligned:p.default.bool,useHorizontalIcon:p.default.bool,isReversedChildrenOrder:p.default.bool,intl:p.default.shape({formatMessage:p.default.func})},I=f.default.createElement(w.default,{key:"prepopulatedBaseDivider"}),x=function(e){(0,d.default)(n,e);var t=M(n);function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).collapsedMenuAlwaysShown=e.alwaysCollapsedMenuItems.length>0,l.setContainer=l.setContainer.bind((0,r.default)(l)),l.setMenuButton=l.setMenuButton.bind((0,r.default)(l)),l.resetCache=l.resetCache.bind((0,r.default)(l)),l.handleResize=l.handleResize.bind((0,r.default)(l)),l.resetCache(),l}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new h.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.handleResize(this.contentWidth),this.resizeObserver.observe(this.container)}},{key:"componentDidUpdate",value:function(){this.isCalculating&&(this.isCalculating=!1,this.handleResize(this.contentWidth))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"handleResize",value:function(e){var t=e-this.menuButton.getBoundingClientRect().width,n=-1,l=0,a=!0;if(this.props.isReversedChildrenOrder)for(var i=f.default.Children.count(this.props.children)-1;i>=0;i-=1){if((l+=this.container.children[i].getBoundingClientRect().width)>t){if(!this.collapsedMenuAlwaysShown&&i===this.props.children.length-1&&l<=e)break;n=f.default.Children.count(this.props.children)>1&&this.props.children[i].type!==w.default?i+1:i,a=!1;break}}else for(var u=0;u<f.default.Children.count(this.props.children);u+=1){if((l+=this.container.children[u].getBoundingClientRect().width)>t){if(!this.collapsedMenuAlwaysShown&&u===this.props.children.length-1&&l<=e)break;n=f.default.Children.count(this.props.children)>1&&this.props.children[u].type===w.default?u-1:u,a=!1;break}}this.menuHidden===a&&this.hiddenStartIndex===n||(this.menuHidden=a,this.hiddenStartIndex=n,this.forceUpdate())}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuButton",value:function(e){null!==e&&(this.menuButton=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.boundingRef,l=e.menuWidth,u=e.intl,o=e.alwaysCollapsedMenuItems,r=e.isStartAligned,d=e.useHorizontalIcon,s=e.isReversedChildrenOrder,c=(0,i.default)(e,_),h=this.context,p=(0,m.default)(k("collapsible-menu-view",{"is-calculating":this.isCalculating},{"collapsible-menu-view-flex-end":!r},{"collapsible-menu-view-flex-start":r},h.className),c.className),v=k("menu-button",{hidden:!this.collapsedMenuAlwaysShown&&this.menuHidden}),b=t,C=o;this.hiddenStartIndex>=0&&(b=f.default.Children.toArray(t),C=this.props.isReversedChildrenOrder?b.splice(0,this.hiddenStartIndex+2).concat(C):this.collapsedMenuAlwaysShown?b.splice(this.hiddenStartIndex).concat(I).concat(C):b.splice(this.hiddenStartIndex).concat(C));var w=(0,m.default)(k({"collapsible-menu-view-icon-vertical":!d},h.className)),O=f.default.createElement("div",{className:v,ref:this.setMenuButton},f.default.createElement(g.default,{"data-collapsible-menu-toggle":!0,icon:f.default.createElement(y.IconEllipses,{className:w}),subMenuItems:C,boundingRef:n,menuWidth:l,isIconOnly:!0,text:u.formatMessage({id:"Terra.collapsibleMenuView.more"}),variant:"utility"}));return s?f.default.createElement("div",(0,a.default)({},c,{className:p,ref:this.setContainer}),O,b):f.default.createElement("div",(0,a.default)({},c,{className:p,ref:this.setContainer}),b,O)}}]),n}(f.default.Component);x.propTypes=R,x.contextType=b.default,x.defaultProps={alwaysCollapsedMenuItems:[],isStartAligned:!1};t.default=(0,C.injectIntl)(x)},4256:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),i=l(n(45697)),u=l(n(47166)),o=l(n(70419)),r=n(34614),d=l(n(47341)),s=l(n(77992)),c=u.default.bind(s.default),f={useChevronRightIcon:i.default.bool},h={isCollapsibleMenuItem:i.default.bool},p=function(e,t){var n=t.isCollapsibleMenuItem,l=e.useChevronRightIcon,i=a.default.useContext(d.default);return l&&n?null:l?a.default.createElement("div",{className:c(["chevron-right","face-up-item",i.className])},a.default.createElement(r.IconChevronRight,null)):n?a.default.createElement(o.default.Divider,null):a.default.createElement("div",{className:c(["divider","face-up-item",i.className])})};p.contextTypes=h,p.propTypes=f;t.default=p},10106:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(70215)),u=l(n(67294)),o=l(n(45697)),r=l(n(47166)),d=l(n(34171)),s=l(n(49665)),c=l(n(77992)),f=["text","title","href","onClick","onBlur","onFocus","onKeyDown","onKeyUp","onMouseDown","variant"],h=r.default.bind(c.default),p={isCollapsibleMenuItem:o.default.bool},m={text:o.default.string,title:o.default.string,href:o.default.string,onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyDown:o.default.func,onKeyUp:o.default.func,onMouseDown:o.default.func,variant:o.default.oneOf(["default","external","image","video","audio","document"])},v={variant:"default"},b=function(e,t){var n=t.isCollapsibleMenuItem,l=e.text,o=e.title,r=e.href,c=e.onClick,p=e.onBlur,m=e.onFocus,v=e.onKeyDown,b=e.onKeyUp,C=e.onMouseDown,y=e.variant,g=(0,i.default)(e,f),w=function(e){r?window.location.href=r:c(e)};return n?u.default.createElement(s.default.Item,(0,a.default)({},g,{text:l,onClick:function(e){return w(e)},onBlur:p,onFocus:m,onKeyDown:v,onKeyUp:b,onMouseDown:C})):u.default.createElement("div",{className:h(["face-up-item"])},u.default.createElement(d.default,{text:l,title:o,href:r,onClick:c,onBlur:p,onFocus:m,onKeyDown:v,onKeyUp:b,onMouseDown:C,variant:y}))};b.propTypes=m,b.defaultProps=v,b.contextTypes=p;t.default=b},18898:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(38416)),u=l(n(70215)),o=l(n(56690)),r=l(n(89728)),d=l(n(66115)),s=l(n(61655)),c=l(n(94993)),f=l(n(73808)),h=l(n(67294)),p=l(n(45697)),m=l(n(47166)),v=l(n(55281)),b=l(n(76367)),C=l(n(49665)),y=l(n(77992)),g=["icon","isIconOnly","isReversed","text","isSelected","isDisabled","subMenuItems","shouldCloseOnClick","boundingRef","menuWidth"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function O(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,c.default)(this,n)}}var _=m.default.bind(y.default),M={text:p.default.string.isRequired,boundingRef:p.default.func,icon:p.default.element,isIconOnly:p.default.bool,isReversed:p.default.bool,isSelected:p.default.bool,isDisabled:p.default.bool,shouldCloseOnClick:p.default.bool,subMenuItems:p.default.arrayOf(p.default.element),onClick:p.default.func,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"])},k={isCollapsibleGroupItem:p.default.bool,isCollapsibleMenuItem:p.default.bool},R=function(e){(0,s.default)(n,e);var t=O(n);function n(e){var l;return(0,o.default)(this,n),(l=t.call(this,e)).setButtonNode=l.setButtonNode.bind((0,d.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,d.default)(l)),l}return(0,r.default)(n,[{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isIconOnly,l=e.isReversed,o=e.text,r=e.isSelected,d=e.isDisabled,s=e.subMenuItems,c=(e.shouldCloseOnClick,e.boundingRef),f=e.menuWidth,p=(0,u.default)(e,g),m=this.context,y=m.isCollapsibleGroupItem,O=m.isCollapsibleMenuItem,M=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p);return O?h.default.createElement(C.default.Item,(0,a.default)({},M,{text:o,isToggled:r&&y,isDisabled:d,subMenuItems:s})):y?h.default.createElement(b.default.Button,(0,a.default)({},M,{icon:t,text:o,isDisabled:d})):s&&s.length>0?h.default.createElement(C.default,{contentWidth:f,boundingRef:c,button:h.default.createElement(v.default,(0,a.default)({},M,{"aria-haspopup":"dialog",icon:t,text:o,isReversed:l,isDisabled:d,isIconOnly:n}))},s):h.default.createElement("div",{className:_("face-up-item")},h.default.createElement(v.default,(0,a.default)({},M,{icon:t,text:o,isReversed:l,isDisabled:d,isIconOnly:n})))}}]),n}(h.default.Component);R.propTypes=M,R.defaultProps={isSelected:!1,isReversed:!1,shouldCloseOnClick:!0,isIconOnly:!1},R.contextTypes=k,R.Opts={widths:C.default.Opts.widths};t.default=R},1509:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(70215)),u=l(n(56690)),o=l(n(89728)),r=l(n(66115)),d=l(n(61655)),s=l(n(94993)),c=l(n(73808)),f=l(n(67294)),h=l(n(45697)),p=l(n(47166)),m=l(n(76367)),v=l(n(49665)),b=l(n(77992)),C=["children","onChange","isMultiSelect","selectedKeys","ariaLabel"];function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var g=p.default.bind(b.default),w={onChange:h.default.func,children:h.default.node.isRequired,isMultiSelect:h.default.bool,selectedKeys:h.default.arrayOf(h.default.string),ariaLabel:h.default.string},O={isCollapsibleGroupItem:h.default.bool},_={isCollapsibleMenuItem:h.default.bool},M=function(e){(0,d.default)(n,e);var t=y(n);function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).handleMenuOnChange=l.handleMenuOnChange.bind((0,r.default)(l)),l}return(0,o.default)(n,[{key:"getChildContext",value:function(){return{isCollapsibleGroupItem:!0}}},{key:"handleMenuOnChange",value:function(e,t){if(this.props.onChange){var n=t;f.default.Children.forEach(this.props.children,(function(e,l){t===l&&(n=e.key)})),this.props.onChange(e,n)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,l=t.onChange,u=t.isMultiSelect,o=t.selectedKeys,r=t.ariaLabel,d=(0,i.default)(t,C);if(this.context.isCollapsibleMenuItem){if(u){var s=[];return f.default.Children.forEach(n,(function(t,n){var l;l=f.default.cloneElement(t,{onChange:function(t){return e.handleMenuOnChange(t,n)},isToggleable:!0,isToggled:t.isToggled}),s.push(l)})),f.default.createElement("li",{role:"none"},f.default.createElement("div",(0,a.default)({},d,{"aria-label":r,role:"group"}),s))}return l?f.default.createElement("li",{role:"none"},f.default.createElement(v.default.ItemGroup,(0,a.default)({},d,{onChange:this.handleMenuOnChange,"aria-label":r}),n)):f.default.createElement("li",{role:"none"},f.default.createElement("div",(0,a.default)({},d,{"aria-label":r,role:"group"}),n))}var c=g(["face-up-item",d.className]);return f.default.createElement(m.default,(0,a.default)({},d,{isMultiSelect:u,onChange:l,className:c,selectedKeys:o,"aria-label":r}),n)}}]),n}(f.default.Component);M.propTypes=w,M.defaultProps={selectedKeys:[],isMultiSelect:!1},M.childContextTypes=O,M.contextTypes=_;t.default=M},43257:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(70215)),u=l(n(56690)),o=l(n(89728)),r=l(n(66115)),d=l(n(61655)),s=l(n(94993)),c=l(n(73808)),f=l(n(67294)),h=l(n(45697)),p=l(n(47166)),m=l(n(15185)),v=l(n(49665)),b=l(n(77992)),C=["text","isSelected","isSelectable","isDisabled","onChange","shouldCloseOnClick"];function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var g=p.default.bind(b.default),w={text:h.default.string.isRequired,isSelected:h.default.bool,onChange:h.default.func,isSelectable:h.default.bool,isDisabled:h.default.bool,shouldCloseOnClick:h.default.bool},O={isCollapsibleMenuItem:h.default.bool},_=function(e){(0,d.default)(n,e);var t=y(n);function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).wrappedOnChange=l.wrappedOnChange.bind((0,r.default)(l)),l}return(0,o.default)(n,[{key:"wrappedOnChange",value:function(e){this.props.onChange&&this.props.onChange(e,e.target.checked)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.isSelected,l=e.isSelectable,u=e.isDisabled,o=e.onChange,r=(e.shouldCloseOnClick,(0,i.default)(e,C)),d=this.context.isCollapsibleMenuItem,s=g(["control",{"is-disabled":u||!l},r.className]);return d?f.default.createElement(v.default.Item,(0,a.default)({},r,{text:t,isSelected:n,isSelectable:l,isDisabled:u||!l,onChange:o})):f.default.createElement("div",{className:g(["face-up-item"])},f.default.createElement(m.default,(0,a.default)({},r,{className:s,labelText:t,defaultChecked:n,onChange:this.wrappedOnChange,disabled:u||!l})))}}]),n}(f.default.Component);_.propTypes=w,_.defaultProps={isSelected:!1,isSelectable:!0,shouldCloseOnClick:!0},_.contextTypes=O;t.default=_},49665:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(70215)),u=l(n(56690)),o=l(n(89728)),r=l(n(66115)),d=l(n(61655)),s=l(n(94993)),c=l(n(73808)),f=l(n(67294)),h=l(n(45697)),p=l(n(47166)),m=l(n(70419)),v=l(n(47341)),b=l(n(77992)),C=["children","button","contentWidth"];function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var g=p.default.bind(b.default),w={children:h.default.node.isRequired,boundingRef:h.default.func,contentWidth:h.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),button:h.default.element.isRequired},O={isCollapsibleMenuItem:h.default.bool},_=function(e){(0,d.default)(n,e);var t=y(n);function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).handleRequestClose=l.handleRequestClose.bind((0,r.default)(l)),l.wrappedOnClick=l.wrappedOnClick.bind((0,r.default)(l)),l.wrapButtonClick=l.wrapButtonClick.bind((0,r.default)(l)),l.wrapChildrenOnClick=l.wrapChildrenOnClick.bind((0,r.default)(l)),l.setButtonNode=l.setButtonNode.bind((0,r.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,r.default)(l)),l.state={isOpen:!1},l}return(0,o.default)(n,[{key:"getChildContext",value:function(){return{isCollapsibleMenuItem:!0}}},{key:"handleRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"wrappedOnClick",value:function(e){var t=this;return function(n){t.handleRequestClose(),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapButtonClick",value:function(e){var t=this;return function(n){t.setState({isOpen:!0}),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapChildrenOnClick",value:function(e){var t=this,n=e?[]:void 0;return f.default.Children.forEach(e,(function(e){var l=e;if(e.props.shouldCloseOnClick)l=f.default.cloneElement(e,{onClick:t.wrappedOnClick(e)});else if(e.props.children){var a=t.wrapChildrenOnClick(e.props.children);l=f.default.cloneElement(e,{children:a})}else if(e.props.subMenuItems){var i=t.wrapChildrenOnClick(e.props.subMenuItems);l=f.default.cloneElement(e,{subMenuItems:i})}n.push(l)})),n}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.button,l=e.contentWidth,u=(0,i.default)(e,C),o=f.default.cloneElement(n,{onClick:this.wrapButtonClick(n)}),r=this.context;return f.default.createElement("div",{className:g("face-up-item",r.className),ref:this.setButtonNode},f.default.createElement(m.default,(0,a.default)({},u,{onRequestClose:this.handleRequestClose,isArrowDisplayed:!0,isOpen:this.state.isOpen,targetRef:this.getButtonNode,contentWidth:l}),this.wrapChildrenOnClick(t)),o)}}]),n}(f.default.Component);_.propTypes=w,_.childContextTypes=O,_.Item=m.default.Item,_.ItemGroup=m.default.ItemGroup,_.Opts={widths:m.default.Opts.widths},_.contextType=v.default;t.default=_},57927:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(81061)),i=l(n(4256)),u=l(n(10106)),o=l(n(18898)),r=l(n(1509)),d=l(n(43257));a.default.Item=o.default,a.default.ItemGroup=r.default,a.default.Toggle=d.default,a.default.Hyperlink=u.default,a.default.Divider=i.default;t.default=a.default},77992:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"CollapsibleMenuView-module__orion-fusion-theme___WQISe","clinical-lowlight-theme":"CollapsibleMenuView-module__clinical-lowlight-theme___84Oox","collapsible-menu-view":"CollapsibleMenuView-module__collapsible-menu-view___QjK06","collapsible-menu-view-flex-end":"CollapsibleMenuView-module__collapsible-menu-view-flex-end___bEvYT","collapsible-menu-view-flex-start":"CollapsibleMenuView-module__collapsible-menu-view-flex-start___rYvyz","collapsible-menu-view-icon-vertical":"CollapsibleMenuView-module__collapsible-menu-view-icon-vertical___PwMTv","menu-button":"CollapsibleMenuView-module__menu-button___mXaFc",hidden:"CollapsibleMenuView-module__hidden___fUTCe","face-up-item":"CollapsibleMenuView-module__face-up-item___yWvV9",control:"CollapsibleMenuView-module__control___cndhd","is-disabled":"CollapsibleMenuView-module__is-disabled___GEw3h",divider:"CollapsibleMenuView-module__divider___v5Mt2","chevron-right":"CollapsibleMenuView-module__chevron-right___MZCWD","is-calculating":"CollapsibleMenuView-module__is-calculating___L9mV5"}}}]);