"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[61657],{81061:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(70215)),u=l(n(56690)),o=l(n(89728)),d=l(n(66115)),r=l(n(61655)),s=l(n(94993)),c=l(n(73808)),f=l(n(67294)),h=l(n(32018)),p=l(n(45697)),m=l(n(94184)),b=l(n(47166)),v=l(n(47341)),C=n(25387),y=l(n(18898)),O=l(n(1509)),g=l(n(43257)),w=l(n(4256)),_=l(n(77992)),k=["children","boundingRef","menuWidth","intl","alwaysCollapsedMenuItems","isStartAligned"];function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var M=b.default.bind(_.default),I={children:p.default.node.isRequired,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),boundingRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func}),alwaysCollapsedMenuItems:p.default.arrayOf(p.default.element),isStartAligned:p.default.bool},x=f.default.createElement(w.default,{key:"prepopulatedBaseDivider"}),B=function(e){(0,r.default)(n,e);var t=R(n);function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).collapsedMenuAlwaysShown=e.alwaysCollapsedMenuItems.length>0,l.setContainer=l.setContainer.bind((0,d.default)(l)),l.setMenuButton=l.setMenuButton.bind((0,d.default)(l)),l.resetCache=l.resetCache.bind((0,d.default)(l)),l.handleResize=l.handleResize.bind((0,d.default)(l)),l.resetCache(),l}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new h.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.handleResize(this.contentWidth),this.resizeObserver.observe(this.container)}},{key:"componentDidUpdate",value:function(){this.isCalculating&&(this.isCalculating=!1,this.handleResize(this.contentWidth))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"handleResize",value:function(e){for(var t=e-this.menuButton.getBoundingClientRect().width,n=-1,l=0,a=!0,i=0;i<f.default.Children.count(this.props.children);i+=1){if((l+=this.container.children[i].getBoundingClientRect().width)>t){if(!this.collapsedMenuAlwaysShown&&i===this.props.children.length-1&&l<=e)break;n=f.default.Children.count(this.props.children)>1&&this.props.children[i].type===w.default?i-1:i,a=!1;break}}this.menuHidden===a&&this.hiddenStartIndex===n||(this.menuHidden=a,this.hiddenStartIndex=n,this.forceUpdate())}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuButton",value:function(e){null!==e&&(this.menuButton=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.boundingRef,l=e.menuWidth,u=e.intl,o=e.alwaysCollapsedMenuItems,d=e.isStartAligned,r=(0,i.default)(e,k),s=this.context,c=(0,m.default)(M("collapsible-menu-view",{"is-calculating":this.isCalculating},{"collapsible-menu-view-flex-end":!d},{"collapsible-menu-view-flex-start":d},s.className),r.className),h=M("menu-button",{hidden:!this.collapsedMenuAlwaysShown&&this.menuHidden}),p=t,b=o;return this.hiddenStartIndex>=0&&(p=f.default.Children.toArray(t),b=this.collapsedMenuAlwaysShown?p.splice(this.hiddenStartIndex).concat(x).concat(b):p.splice(this.hiddenStartIndex).concat(b)),f.default.createElement("div",(0,a.default)({},r,{className:c,ref:this.setContainer}),p,f.default.createElement("div",{className:h,ref:this.setMenuButton},f.default.createElement(y.default,{"data-collapsible-menu-toggle":!0,icon:f.default.createElement("span",{className:M("menu-button-icon")}),subMenuItems:b,boundingRef:n,menuWidth:l,isIconOnly:!0,text:u.formatMessage({id:"Terra.collapsibleMenuView.more"}),variant:"utility"})))}}]),n}(f.default.Component);B.Item=y.default,B.ItemGroup=O.default,B.Toggle=g.default,B.Divider=w.default,B.propTypes=I,B.contextType=v.default,B.defaultProps={alwaysCollapsedMenuItems:[],isStartAligned:!1};var S=(0,C.injectIntl)(B);t.default=S},4256:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),i=l(n(45697)),u=l(n(47166)),o=l(n(70419)),d=l(n(47341)),r=l(n(77992)),s=u.default.bind(r.default),c={isCollapsibleMenuItem:i.default.bool},f=function(e,t){var n=t.isCollapsibleMenuItem,l=a.default.useContext(d.default);return n?a.default.createElement(o.default.Divider,null):a.default.createElement("div",{className:s(["divider","face-up-item",l.className])})};f.contextTypes=c;var h=f;t.default=h},18898:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(38416)),u=l(n(70215)),o=l(n(56690)),d=l(n(89728)),r=l(n(66115)),s=l(n(61655)),c=l(n(94993)),f=l(n(73808)),h=l(n(67294)),p=l(n(45697)),m=l(n(47166)),b=l(n(55281)),v=l(n(76367)),C=l(n(49665)),y=l(n(77992)),O=["icon","isIconOnly","isReversed","text","isSelected","isDisabled","subMenuItems","shouldCloseOnClick","boundingRef","menuWidth"];function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,c.default)(this,n)}}var _=m.default.bind(y.default),k={text:p.default.string.isRequired,boundingRef:p.default.func,icon:p.default.element,isIconOnly:p.default.bool,isReversed:p.default.bool,isSelected:p.default.bool,isDisabled:p.default.bool,shouldCloseOnClick:p.default.bool,subMenuItems:p.default.arrayOf(p.default.element),onClick:p.default.func,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"])},R={isCollapsibleGroupItem:p.default.bool,isCollapsibleMenuItem:p.default.bool},M=function(e){(0,s.default)(n,e);var t=w(n);function n(e){var l;return(0,o.default)(this,n),(l=t.call(this,e)).setButtonNode=l.setButtonNode.bind((0,r.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,r.default)(l)),l}return(0,d.default)(n,[{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isIconOnly,l=e.isReversed,o=e.text,d=e.isSelected,r=e.isDisabled,s=e.subMenuItems,c=(e.shouldCloseOnClick,e.boundingRef),f=e.menuWidth,p=(0,u.default)(e,O),m=this.context,y=m.isCollapsibleGroupItem,w=m.isCollapsibleMenuItem,k=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},p);return w?h.default.createElement(C.default.Item,(0,a.default)({},k,{text:o,isSelected:d&&y,isDisabled:r,subMenuItems:s})):y?h.default.createElement(v.default.Button,(0,a.default)({},k,{icon:t,text:o,isDisabled:r})):s&&s.length>0?h.default.createElement(C.default,{contentWidth:f,boundingRef:c,button:h.default.createElement(b.default,(0,a.default)({},k,{icon:t,text:o,isReversed:l,isDisabled:r,isIconOnly:n}))},s):h.default.createElement("div",{className:_("face-up-item")},h.default.createElement(b.default,(0,a.default)({},k,{icon:t,text:o,isReversed:l,isDisabled:r,isIconOnly:n})))}}]),n}(h.default.Component);M.propTypes=k,M.defaultProps={isSelected:!1,isReversed:!1,shouldCloseOnClick:!0,isIconOnly:!1},M.contextTypes=R,M.Opts={widths:C.default.Opts.widths};var I=M;t.default=I},1509:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(70215)),u=l(n(56690)),o=l(n(89728)),d=l(n(66115)),r=l(n(61655)),s=l(n(94993)),c=l(n(73808)),f=l(n(67294)),h=l(n(45697)),p=l(n(47166)),m=l(n(76367)),b=l(n(49665)),v=l(n(77992)),C=["children","onChange","selectedKeys"];function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var O=p.default.bind(v.default),g={onChange:h.default.func,children:h.default.node.isRequired,selectedKeys:h.default.arrayOf(h.default.string)},w={isCollapsibleGroupItem:h.default.bool},_={isCollapsibleMenuItem:h.default.bool},k=function(e){(0,r.default)(n,e);var t=y(n);function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).handleOnChange=l.handleOnChange.bind((0,d.default)(l)),l}return(0,o.default)(n,[{key:"getChildContext",value:function(){return{isCollapsibleGroupItem:!0}}},{key:"handleOnChange",value:function(e,t){if(this.props.onChange){var n=t;f.default.Children.forEach(this.props.children,(function(e,l){t===l&&(n=e.key)})),this.props.onChange(e,n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.onChange,l=e.selectedKeys,u=(0,i.default)(e,C),o=this.context.isCollapsibleMenuItem;if(o&&l.length)return f.default.createElement("li",{role:"none"},f.default.createElement(b.default.ItemGroup,(0,a.default)({},u,{onChange:this.handleOnChange}),t));if(o)return f.default.createElement("div",u,t);var d=O(["face-up-item",u.className]);return f.default.createElement(m.default,(0,a.default)({},u,{onChange:n,className:d,selectedKeys:l}),t)}}]),n}(f.default.Component);k.propTypes=g,k.defaultProps={selectedKeys:[]},k.childContextTypes=w,k.contextTypes=_;var R=k;t.default=R},43257:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(70215)),u=l(n(56690)),o=l(n(89728)),d=l(n(66115)),r=l(n(61655)),s=l(n(94993)),c=l(n(73808)),f=l(n(67294)),h=l(n(45697)),p=l(n(47166)),m=l(n(15185)),b=l(n(49665)),v=l(n(77992)),C=["text","isSelected","isSelectable","isDisabled","onChange","shouldCloseOnClick"];function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var O=p.default.bind(v.default),g={text:h.default.string.isRequired,isSelected:h.default.bool,onChange:h.default.func,isSelectable:h.default.bool,isDisabled:h.default.bool,shouldCloseOnClick:h.default.bool},w={isCollapsibleMenuItem:h.default.bool},_=function(e){(0,r.default)(n,e);var t=y(n);function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).wrappedOnChange=l.wrappedOnChange.bind((0,d.default)(l)),l}return(0,o.default)(n,[{key:"wrappedOnChange",value:function(e){this.props.onChange&&this.props.onChange(e,e.target.checked)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.isSelected,l=e.isSelectable,u=e.isDisabled,o=e.onChange,d=(e.shouldCloseOnClick,(0,i.default)(e,C)),r=this.context.isCollapsibleMenuItem,s=O(["control",{"is-disabled":u||!l},d.className]);return r?f.default.createElement(b.default.Item,(0,a.default)({},d,{text:t,isSelected:n,isSelectable:l,isDisabled:u||!l,onChange:o})):f.default.createElement("div",{className:O(["face-up-item"])},f.default.createElement(m.default,(0,a.default)({},d,{className:s,labelText:t,defaultChecked:n,onChange:this.wrappedOnChange,disabled:u||!l})))}}]),n}(f.default.Component);_.propTypes=g,_.defaultProps={isSelected:!1,isSelectable:!0,shouldCloseOnClick:!0},_.contextTypes=w;var k=_;t.default=k},49665:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(10434)),i=l(n(70215)),u=l(n(56690)),o=l(n(89728)),d=l(n(66115)),r=l(n(61655)),s=l(n(94993)),c=l(n(73808)),f=l(n(67294)),h=l(n(45697)),p=l(n(47166)),m=l(n(70419)),b=l(n(47341)),v=l(n(77992)),C=["children","button","contentWidth"];function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return(0,s.default)(this,n)}}var O=p.default.bind(v.default),g={children:h.default.node.isRequired,boundingRef:h.default.func,contentWidth:h.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),button:h.default.element.isRequired},w={isCollapsibleMenuItem:h.default.bool},_=function(e){(0,r.default)(n,e);var t=y(n);function n(e){var l;return(0,u.default)(this,n),(l=t.call(this,e)).handleRequestClose=l.handleRequestClose.bind((0,d.default)(l)),l.wrappedOnClick=l.wrappedOnClick.bind((0,d.default)(l)),l.wrapButtonClick=l.wrapButtonClick.bind((0,d.default)(l)),l.wrapChildrenOnClick=l.wrapChildrenOnClick.bind((0,d.default)(l)),l.setButtonNode=l.setButtonNode.bind((0,d.default)(l)),l.getButtonNode=l.getButtonNode.bind((0,d.default)(l)),l.state={isOpen:!1},l}return(0,o.default)(n,[{key:"getChildContext",value:function(){return{isCollapsibleMenuItem:!0}}},{key:"handleRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"wrappedOnClick",value:function(e){var t=this;return function(n){t.handleRequestClose(),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapButtonClick",value:function(e){var t=this;return function(n){t.setState({isOpen:!0}),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapChildrenOnClick",value:function(e){var t=this,n=e?[]:void 0;return f.default.Children.forEach(e,(function(e){var l=e;if(e.props.shouldCloseOnClick)l=f.default.cloneElement(e,{onClick:t.wrappedOnClick(e)});else if(e.props.children){var a=t.wrapChildrenOnClick(e.props.children);l=f.default.cloneElement(e,{children:a})}else if(e.props.subMenuItems){var i=t.wrapChildrenOnClick(e.props.subMenuItems);l=f.default.cloneElement(e,{subMenuItems:i})}n.push(l)})),n}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.button,l=e.contentWidth,u=(0,i.default)(e,C),o=f.default.cloneElement(n,{onClick:this.wrapButtonClick(n)}),d=this.context;return f.default.createElement("div",{className:O("face-up-item",d.className),ref:this.setButtonNode},f.default.createElement(m.default,(0,a.default)({},u,{onRequestClose:this.handleRequestClose,isArrowDisplayed:!0,isOpen:this.state.isOpen,targetRef:this.getButtonNode,contentWidth:l}),this.wrapChildrenOnClick(t)),o)}}]),n}(f.default.Component);_.propTypes=g,_.childContextTypes=w,_.Item=m.default.Item,_.ItemGroup=m.default.ItemGroup,_.Opts={widths:m.default.Opts.widths},_.contextType=b.default;var k=_;t.default=k},77992:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"CollapsibleMenuView-module__orion-fusion-theme___WQISe","clinical-lowlight-theme":"CollapsibleMenuView-module__clinical-lowlight-theme___84Oox","collapsible-menu-view":"CollapsibleMenuView-module__collapsible-menu-view___QjK06","collapsible-menu-view-flex-end":"CollapsibleMenuView-module__collapsible-menu-view-flex-end___bEvYT","collapsible-menu-view-flex-start":"CollapsibleMenuView-module__collapsible-menu-view-flex-start___rYvyz","menu-button":"CollapsibleMenuView-module__menu-button___mXaFc",hidden:"CollapsibleMenuView-module__hidden___fUTCe","menu-button-icon":"CollapsibleMenuView-module__menu-button-icon___4V0dA","face-up-item":"CollapsibleMenuView-module__face-up-item___yWvV9",control:"CollapsibleMenuView-module__control___cndhd","is-disabled":"CollapsibleMenuView-module__is-disabled___GEw3h",divider:"CollapsibleMenuView-module__divider___v5Mt2","is-calculating":"CollapsibleMenuView-module__is-calculating___L9mV5"}}}]);