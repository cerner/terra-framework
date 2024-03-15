"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[19967],{21784:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(94634)),u=n(l(91847)),i=n(l(17383)),o=n(l(34579)),d=n(l(28452)),s=n(l(63072)),r=n(l(12475)),c=n(l(29511)),f=n(l(96540)),p=n(l(7829)),h=n(l(5556)),m=n(l(46942)),b=n(l(67967)),v=n(l(23695)),C=l(8604),y=l(33049),g=n(l(22979)),w=n(l(44543)),O=n(l(75105)),_=["children","boundingRef","menuWidth","intl","alwaysCollapsedMenuItems","isStartAligned","useHorizontalIcon","isReversedChildrenOrder","menuIconText"];function M(e,t,l){return t=(0,s.default)(t),(0,d.default)(e,k()?Reflect.construct(t,l||[],(0,s.default)(e).constructor):t.apply(e,l))}function k(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(k=function(){return!!e})()}var I=b.default.bind(O.default),x={children:h.default.node.isRequired,menuWidth:h.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),boundingRef:h.default.func,alwaysCollapsedMenuItems:h.default.arrayOf(h.default.element),isStartAligned:h.default.bool,useHorizontalIcon:h.default.bool,isReversedChildrenOrder:h.default.bool,menuIconText:h.default.string,intl:h.default.shape({formatMessage:h.default.func})},R=f.default.createElement(w.default,{key:"prepopulatedBaseDivider"}),B=function(e){function t(e){var l;return(0,i.default)(this,t),(l=M(this,t,[e])).collapsedMenuAlwaysShown=e.alwaysCollapsedMenuItems.length>0,l.setContainer=l.setContainer.bind((0,r.default)(l)),l.setMenuButton=l.setMenuButton.bind((0,r.default)(l)),l.resetCache=l.resetCache.bind((0,r.default)(l)),l.handleResize=l.handleResize.bind((0,r.default)(l)),l.resetCache(),l}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new p.default((function(){e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.forceUpdate()})))})),this.resizeObserver.observe(this.container),this.handleResize()}},{key:"componentDidUpdate",value:function(){this.isCalculating?(this.isCalculating=!1,this.handleResize()):this.resetCache()}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"handleResize",value:function(){if(this.container){var e=this.container.getBoundingClientRect().width,t=f.default.Children.toArray(this.props.children),l=e-(t.length>1?this.menuButton.getBoundingClientRect().width:0),n=-1,a=0,u=!0;if(this.props.isReversedChildrenOrder)for(var i=t.length-1;i>=0;i-=1){var o=this.container.children[i];if((a+=o?o.getBoundingClientRect().width:0)>l){if(!this.collapsedMenuAlwaysShown&&i===t.length-1&&a<=l)break;n=t.length>1&&t[i].type!==w.default?i+1:i,u=!1;break}}else for(var d=0;d<t.length;d+=1){var s=this.container.children[d];if((a+=s?s.getBoundingClientRect().width:0)>l){if(!this.collapsedMenuAlwaysShown&&d===t.length-1&&a<=l)break;n=t.length>1&&t[d].type===w.default?d-1:d,u=!1;break}}this.menuHidden===u&&this.hiddenStartIndex===n||(this.menuHidden=u,this.hiddenStartIndex=n,this.forceUpdate())}}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuButton",value:function(e){null!==e&&(this.menuButton=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"render",value:function(){var e=this.props,t=e.children,l=e.boundingRef,n=e.menuWidth,i=e.intl,o=e.alwaysCollapsedMenuItems,d=e.isStartAligned,s=e.useHorizontalIcon,r=e.isReversedChildrenOrder,c=e.menuIconText,p=(0,u.default)(e,_),h=this.context,b=(0,m.default)(I("collapsible-menu-view",{"is-calculating":this.isCalculating},{"collapsible-menu-view-flex-end":!d},{"collapsible-menu-view-flex-start":d},h.className),p.className),v=I("menu-button",{hidden:!this.collapsedMenuAlwaysShown&&this.menuHidden}),C=t,w=o;this.hiddenStartIndex>=0&&(C=f.default.Children.toArray(t),w=this.props.isReversedChildrenOrder?C.splice(0,this.hiddenStartIndex+2).concat(w):this.collapsedMenuAlwaysShown?C.splice(this.hiddenStartIndex).concat(R).concat(w):C.splice(this.hiddenStartIndex).concat(w));var O=(0,m.default)(I({"collapsible-menu-view-icon-vertical":!s},h.className)),M=f.default.createElement("div",{className:v,ref:this.setMenuButton},f.default.createElement(g.default,{"data-collapsible-menu-toggle":!0,icon:f.default.createElement(y.IconEllipses,{className:O}),subMenuItems:w,boundingRef:l,menuWidth:n,isIconOnly:!0,text:c||i.formatMessage({id:"Terra.collapsibleMenuView.more"}),variant:"utility"}));return r?f.default.createElement("div",(0,a.default)({},p,{className:b,ref:this.setContainer}),M,C):f.default.createElement("div",(0,a.default)({},p,{className:b,ref:this.setContainer}),C,M)}}]),t}(f.default.Component);B.propTypes=x,B.contextType=v.default,B.defaultProps={alwaysCollapsedMenuItems:[],isStartAligned:!1};t.default=(0,C.injectIntl)(B)},44543:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(96540)),u=n(l(5556)),i=n(l(67967)),o=n(l(63276)),d=l(33049),s=n(l(23695)),r=n(l(75105)),c=i.default.bind(r.default),f={useChevronRightIcon:u.default.bool},p={isCollapsibleMenuItem:u.default.bool},h=function(e,t){var l=t.isCollapsibleMenuItem,n=e.useChevronRightIcon,u=a.default.useContext(s.default);return n&&l?null:n?a.default.createElement("div",{className:c(["chevron-right","face-up-item",u.className])},a.default.createElement(d.IconChevronRight,null)):l?a.default.createElement(o.default.Divider,null):a.default.createElement("div",{className:c(["divider","face-up-item",u.className])})};h.contextTypes=p,h.propTypes=f;t.default=h},53384:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(94634)),u=n(l(91847)),i=n(l(96540)),o=n(l(5556)),d=n(l(67967)),s=n(l(19992)),r=n(l(20208)),c=n(l(75105)),f=["text","title","href","onClick","onBlur","onFocus","onKeyDown","onKeyUp","onMouseDown","variant"],p=d.default.bind(c.default),h={isCollapsibleMenuItem:o.default.bool},m={text:o.default.string,title:o.default.string,href:o.default.string,onClick:o.default.func,onBlur:o.default.func,onFocus:o.default.func,onKeyDown:o.default.func,onKeyUp:o.default.func,onMouseDown:o.default.func,variant:o.default.oneOf(["default","external","image","video","audio","document"])},b={variant:"default"},v=function(e,t){var l=e.text,n=e.title,o=e.href,d=e.onClick,c=e.onBlur,h=e.onFocus,m=e.onKeyDown,b=e.onKeyUp,v=e.onMouseDown,C=e.variant,y=(0,u.default)(e,f),g=t.isCollapsibleMenuItem,w=function(e){o?window.location.href=o:d(e)};return g?i.default.createElement(r.default.Item,(0,a.default)({},y,{text:l,onClick:function(e){return w(e)},onBlur:c,onFocus:h,onKeyDown:m,onKeyUp:b,onMouseDown:v})):i.default.createElement("div",{className:p(["face-up-item"])},i.default.createElement(s.default,(0,a.default)({},y,{text:l,title:n,href:o,onClick:d,onBlur:c,onFocus:h,onKeyDown:m,onKeyUp:b,onMouseDown:v,variant:C})))};v.propTypes=m,v.defaultProps=b,v.contextTypes=h;t.default=v},22979:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(94634)),u=n(l(43693)),i=n(l(91847)),o=n(l(17383)),d=n(l(34579)),s=n(l(28452)),r=n(l(63072)),c=n(l(12475)),f=n(l(29511)),p=n(l(96540)),h=n(l(5556)),m=n(l(67967)),b=n(l(23986)),v=n(l(15853)),C=n(l(20208)),y=n(l(75105)),g=["icon","isIconOnly","isReversed","text","isSelected","isDisabled","subMenuItems","shouldCloseOnClick","boundingRef","menuWidth","isTextOnly"];function w(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function O(e,t,l){return t=(0,r.default)(t),(0,s.default)(e,_()?Reflect.construct(t,l||[],(0,r.default)(e).constructor):t.apply(e,l))}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}var M=m.default.bind(y.default),k={text:h.default.string.isRequired,boundingRef:h.default.func,icon:h.default.element,isIconOnly:h.default.bool,isReversed:h.default.bool,isSelected:h.default.bool,isDisabled:h.default.bool,shouldCloseOnClick:h.default.bool,subMenuItems:h.default.arrayOf(h.default.element),onClick:h.default.func,menuWidth:h.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),isTextOnly:h.default.bool},I={isCollapsibleGroupItem:h.default.bool,isCollapsibleMenuItem:h.default.bool},x=function(e){function t(e){var l;return(0,o.default)(this,t),(l=O(this,t,[e])).setButtonNode=l.setButtonNode.bind((0,c.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,c.default)(l)),l}return(0,f.default)(t,e),(0,d.default)(t,[{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var e=this.props,t=e.icon,l=e.isIconOnly,n=e.isReversed,o=e.text,d=e.isSelected,s=e.isDisabled,r=e.subMenuItems,c=(e.shouldCloseOnClick,e.boundingRef),f=e.menuWidth,h=e.isTextOnly,m=(0,i.default)(e,g),y=this.context,O=y.isCollapsibleGroupItem,_=y.isCollapsibleMenuItem,k=m.isSelectable,I=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?w(Object(l),!0).forEach((function(t){(0,u.default)(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):w(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},m);return _?p.default.createElement(C.default.Item,(0,a.default)({},I,{text:o,isToggled:d&&O,isDisabled:s,subMenuItems:r})):O?p.default.createElement(v.default.Button,(0,a.default)({},I,{icon:t,text:o,isDisabled:s})):r&&r.length>0?p.default.createElement(C.default,{contentWidth:f,boundingRef:c,button:p.default.createElement(b.default,(0,a.default)({},I,{"aria-haspopup":"dialog",icon:t,text:o,isReversed:n,isDisabled:s,isIconOnly:l}))},r):h?p.default.createElement("div",{className:M("face-up-item")},o):p.default.createElement("div",{className:M("face-up-item")},p.default.createElement(b.default,(0,a.default)({},I,{icon:t,text:o,isReversed:n,isDisabled:s,isIconOnly:l,isSelectable:k,isSelected:d})))}}]),t}(p.default.Component);x.propTypes=k,x.defaultProps={isSelected:!1,isReversed:!1,shouldCloseOnClick:!0,isIconOnly:!1,isTextOnly:!1},x.contextTypes=I,x.Opts={widths:C.default.Opts.widths};t.default=x},44972:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(94634)),u=n(l(91847)),i=n(l(17383)),o=n(l(34579)),d=n(l(28452)),s=n(l(63072)),r=n(l(12475)),c=n(l(29511)),f=n(l(96540)),p=n(l(5556)),h=n(l(67967)),m=n(l(15853)),b=n(l(20208)),v=n(l(75105)),C=["children","onChange","isMultiSelect","selectedKeys","ariaLabel","groupId"];function y(e,t,l){return t=(0,s.default)(t),(0,d.default)(e,g()?Reflect.construct(t,l||[],(0,s.default)(e).constructor):t.apply(e,l))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var w=h.default.bind(v.default),O={onChange:p.default.func,children:p.default.node.isRequired,isMultiSelect:p.default.bool,selectedKeys:p.default.arrayOf(p.default.string),ariaLabel:p.default.string,groupId:p.default.string},_={isCollapsibleGroupItem:p.default.bool},M={isCollapsibleMenuItem:p.default.bool},k=function(e){function t(e){var l;return(0,i.default)(this,t),(l=y(this,t,[e])).handleMenuOnChange=l.handleMenuOnChange.bind((0,r.default)(l)),l}return(0,c.default)(t,e),(0,o.default)(t,[{key:"getChildContext",value:function(){return{isCollapsibleGroupItem:!0}}},{key:"handleMenuOnChange",value:function(e,t){if(this.props.onChange){var l=t;f.default.Children.forEach(this.props.children,(function(e,n){t===n&&(l=e.key)})),this.props.onChange(e,l)}}},{key:"render",value:function(){var e=this,t=this.props,l=t.children,n=t.onChange,i=t.isMultiSelect,o=t.selectedKeys,d=t.ariaLabel,s=t.groupId,r=(0,u.default)(t,C);if(this.context.isCollapsibleMenuItem){if(i){var c=[];return f.default.Children.forEach(l,(function(t,l){var n;n=f.default.cloneElement(t,{onChange:function(t){return e.handleMenuOnChange(t,l)},isToggleable:!0,isToggled:t.isToggled}),c.push(n)})),f.default.createElement("li",{role:"none"},f.default.createElement("div",(0,a.default)({},r,{role:"group",id:s,"aria-label":d}),c))}return n?f.default.createElement("li",{role:"none"},f.default.createElement(b.default.ItemGroup,(0,a.default)({},r,{onChange:this.handleMenuOnChange,id:s,"aria-label":d}),l)):f.default.createElement("li",{role:"none"},f.default.createElement("div",(0,a.default)({},r,{role:"group"}),l))}var p=w(["face-up-item",r.className]);return f.default.createElement(m.default,(0,a.default)({},r,{isMultiSelect:i,onChange:n,className:p,selectedKeys:o,"aria-label":d}),l)}}]),t}(f.default.Component);k.propTypes=O,k.defaultProps={selectedKeys:[],isMultiSelect:!1},k.childContextTypes=_,k.contextTypes=M;t.default=k},51044:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(94634)),u=n(l(91847)),i=n(l(17383)),o=n(l(34579)),d=n(l(28452)),s=n(l(63072)),r=n(l(12475)),c=n(l(29511)),f=n(l(96540)),p=n(l(5556)),h=n(l(67967)),m=n(l(63639)),b=n(l(20208)),v=n(l(75105)),C=["text","isSelected","isSelectable","isDisabled","onChange","shouldCloseOnClick"];function y(e,t,l){return t=(0,s.default)(t),(0,d.default)(e,g()?Reflect.construct(t,l||[],(0,s.default)(e).constructor):t.apply(e,l))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var w=h.default.bind(v.default),O={text:p.default.string.isRequired,isSelected:p.default.bool,onChange:p.default.func,isSelectable:p.default.bool,isDisabled:p.default.bool,shouldCloseOnClick:p.default.bool},_={isCollapsibleMenuItem:p.default.bool},M=function(e){function t(e){var l;return(0,i.default)(this,t),(l=y(this,t,[e])).wrappedOnChange=l.wrappedOnChange.bind((0,r.default)(l)),l}return(0,c.default)(t,e),(0,o.default)(t,[{key:"wrappedOnChange",value:function(e){this.props.onChange&&this.props.onChange(e,e.target.checked)}},{key:"render",value:function(){var e=this.props,t=e.text,l=e.isSelected,n=e.isSelectable,i=e.isDisabled,o=e.onChange,d=(e.shouldCloseOnClick,(0,u.default)(e,C)),s=this.context.isCollapsibleMenuItem,r=w(["control",{"is-disabled":i||!n},d.className]);return s?f.default.createElement(b.default.Item,(0,a.default)({},d,{text:t,isSelected:l,isSelectable:n,isDisabled:i||!n,onChange:o})):f.default.createElement("div",{className:w(["face-up-item"])},f.default.createElement(m.default,(0,a.default)({},d,{className:r,labelText:t,defaultChecked:l,onChange:this.wrappedOnChange,disabled:i||!n})))}}]),t}(f.default.Component);M.propTypes=O,M.defaultProps={isSelected:!1,isSelectable:!0,shouldCloseOnClick:!0},M.contextTypes=_;t.default=M},20208:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(94634)),u=n(l(91847)),i=n(l(17383)),o=n(l(34579)),d=n(l(28452)),s=n(l(63072)),r=n(l(12475)),c=n(l(29511)),f=n(l(96540)),p=n(l(5556)),h=n(l(67967)),m=n(l(63276)),b=n(l(23695)),v=n(l(75105)),C=["children","button","contentWidth"];function y(e,t,l){return t=(0,s.default)(t),(0,d.default)(e,g()?Reflect.construct(t,l||[],(0,s.default)(e).constructor):t.apply(e,l))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var w=h.default.bind(v.default),O={children:p.default.node.isRequired,boundingRef:p.default.func,contentWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),button:p.default.element.isRequired},_={isCollapsibleMenuItem:p.default.bool},M=function(e){function t(e){var l;return(0,i.default)(this,t),(l=y(this,t,[e])).handleRequestClose=l.handleRequestClose.bind((0,r.default)(l)),l.wrappedOnClick=l.wrappedOnClick.bind((0,r.default)(l)),l.wrapButtonClick=l.wrapButtonClick.bind((0,r.default)(l)),l.wrapChildrenOnClick=l.wrapChildrenOnClick.bind((0,r.default)(l)),l.setButtonNode=l.setButtonNode.bind((0,r.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,r.default)(l)),l.state={isOpen:!1},l}return(0,c.default)(t,e),(0,o.default)(t,[{key:"getChildContext",value:function(){return{isCollapsibleMenuItem:!0}}},{key:"handleRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"wrappedOnClick",value:function(e){var t=this;return function(l){t.handleRequestClose(),e.props.onClick&&e.props.onClick(l)}}},{key:"wrapButtonClick",value:function(e){var t=this;return function(l){t.setState({isOpen:!0}),e.props.onClick&&e.props.onClick(l)}}},{key:"wrapChildrenOnClick",value:function(e){var t=this,l=e?[]:void 0;return f.default.Children.forEach(e,(function(e){var n=e;if(e.props.shouldCloseOnClick)n=f.default.cloneElement(e,{onClick:t.wrappedOnClick(e)});else if(e.props.children){var a=t.wrapChildrenOnClick(e.props.children);n=f.default.cloneElement(e,{children:a})}else if(e.props.subMenuItems){var u=t.wrapChildrenOnClick(e.props.subMenuItems);n=f.default.cloneElement(e,{subMenuItems:u})}l.push(n)})),l}},{key:"render",value:function(){var e=this.props,t=e.children,l=e.button,n=e.contentWidth,i=(0,u.default)(e,C),o=f.default.cloneElement(l,{onClick:this.wrapButtonClick(l)}),d=this.context;return f.default.createElement("div",{className:w("face-up-item",d.className),ref:this.setButtonNode},f.default.createElement(m.default,(0,a.default)({},i,{onRequestClose:this.handleRequestClose,isArrowDisplayed:!0,isOpen:this.state.isOpen,targetRef:this.getButtonNode,contentWidth:n}),this.wrapChildrenOnClick(t)),o)}}]),t}(f.default.Component);M.propTypes=O,M.childContextTypes=_,M.Item=m.default.Item,M.ItemGroup=m.default.ItemGroup,M.Opts={widths:m.default.Opts.widths},M.contextType=b.default;t.default=M},26714:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(21784)),u=n(l(44543)),i=n(l(53384)),o=n(l(22979)),d=n(l(44972)),s=n(l(51044));a.default.Item=o.default,a.default.ItemGroup=d.default,a.default.Toggle=s.default,a.default.Hyperlink=i.default,a.default.Divider=u.default;t.default=a.default},75105:function(e,t,l){l.r(t),t.default={"orion-fusion-theme":"CollapsibleMenuView-module__orion-fusion-theme___WQISe","clinical-lowlight-theme":"CollapsibleMenuView-module__clinical-lowlight-theme___84Oox","collapsible-menu-view":"CollapsibleMenuView-module__collapsible-menu-view___QjK06","collapsible-menu-view-flex-end":"CollapsibleMenuView-module__collapsible-menu-view-flex-end___bEvYT","collapsible-menu-view-flex-start":"CollapsibleMenuView-module__collapsible-menu-view-flex-start___rYvyz","collapsible-menu-view-icon-vertical":"CollapsibleMenuView-module__collapsible-menu-view-icon-vertical___PwMTv","menu-button":"CollapsibleMenuView-module__menu-button___mXaFc",hidden:"CollapsibleMenuView-module__hidden___fUTCe","face-up-item":"CollapsibleMenuView-module__face-up-item___yWvV9",control:"CollapsibleMenuView-module__control___cndhd","is-disabled":"CollapsibleMenuView-module__is-disabled___GEw3h",divider:"CollapsibleMenuView-module__divider___v5Mt2","chevron-right":"CollapsibleMenuView-module__chevron-right___MZCWD","is-calculating":"CollapsibleMenuView-module__is-calculating___L9mV5"}}}]);