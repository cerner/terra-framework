"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[95892],{33766:function(e,t,l){var n=l(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(56690)),u=n(l(89728)),o=n(l(66115)),i=n(l(61655)),d=n(l(94993)),c=n(l(73808)),r=n(l(67294)),s=n(l(29690)),f=n(l(68559)),m=n(l(75852)),h=n(l(66053)),g=n(l(87491)),b=n(l(94809)),y=n(l(2396)),p=n(l(57927));function k(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;l=Reflect.construct(n,arguments,a)}else l=n.apply(this,arguments);return(0,d.default)(this,l)}}var C=function(e){(0,i.default)(l,e);var t=k(l);function l(e){var n;return(0,a.default)(this,l),(n=t.call(this,e)).handleDisplayTypeChange=n.handleDisplayTypeChange.bind((0,o.default)(n)),n.handleToggleOneOnChange=n.handleToggleOneOnChange.bind((0,o.default)(n)),n.handleToggleTwoOnChange=n.handleToggleTwoOnChange.bind((0,o.default)(n)),n.handleToggleThreeOnChange=n.handleToggleThreeOnChange.bind((0,o.default)(n)),n.handleMenuButtonClick=n.handleMenuButtonClick.bind((0,o.default)(n)),n.state={toggle1Selection:!1,toggle2Selection:!1,toggle3Selection:!1,displayType:"tableView",buttonClickCount:0},n}return(0,u.default)(l,[{key:"handleMenuButtonClick",value:function(){this.setState((function(e){return{buttonClickCount:e.buttonClickCount+1}}))}},{key:"handleToggleOneOnChange",value:function(e,t){this.setState({toggle1Selection:t})}},{key:"handleToggleTwoOnChange",value:function(e,t){this.setState({toggle2Selection:t})}},{key:"handleToggleThreeOnChange",value:function(e,t){this.setState({toggle3Selection:t})}},{key:"handleDisplayTypeChange",value:function(e,t){this.setState({displayType:t})}},{key:"render",value:function(){return r.default.createElement(p.default,{alwaysCollapsedMenuItems:[r.default.createElement(p.default.Toggle,{text:"Toggle Item 1",className:"ToggleItem1",key:"toggle1",shouldCloseOnClick:!1,onChange:this.handleToggleOneOnChange,isSelected:this.state.toggle1Selection,isSelectable:!1}),r.default.createElement(p.default.Toggle,{text:"Toggle Item 2",className:"ToggleItem2",key:"toggle2",shouldCloseOnClick:!1,onChange:this.handleToggleTwoOnChange,isSelected:this.state.toggle2Selection}),r.default.createElement(p.default.Toggle,{text:"Toggle Item 3",className:"ToggleItem3",key:"toggle3",shouldCloseOnClick:!1,onChange:this.handleToggleThreeOnChange,isSelected:this.state.toggle3Selection})]},r.default.createElement(p.default.Item,{text:"Menu Button 1",key:"MenuButton1",className:"MenuButton1",onClick:this.handleMenuButtonClick,shouldCloseOnClick:!1,subMenuItems:[r.default.createElement(p.default.Item,{text:"Default Item 1",key:"defaultItem1"}),r.default.createElement(p.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),r.default.createElement(p.default.Item,{text:"MenuButton 2",key:"MenuButton2",className:"MenuButton2",shouldCloseOnClick:!1,subMenuItems:[r.default.createElement(p.default.Item,{text:"Default Item 1",key:"defaultItem1"}),r.default.createElement(p.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),r.default.createElement(p.default.Item,{text:"MenuButton 3",key:"MenuButton3",className:"MenuButton3",shouldCloseOnClick:!1,subMenuItems:[r.default.createElement(p.default.Item,{text:"Default Item 1",key:"defaultItem1"}),r.default.createElement(p.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),r.default.createElement(p.default.Divider,{key:"Divider2"}),r.default.createElement(p.default.ItemGroup,{key:"ViewTypeSelection",className:"ViewTypeGroup",selectedKeys:[this.state.displayType],onChange:this.handleDisplayTypeChange},r.default.createElement(p.default.Item,{icon:r.default.createElement(s.default,null),text:"Table View",className:"TableView",key:"tableView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"tableView"===this.state.displayType}),r.default.createElement(p.default.Item,{icon:r.default.createElement(f.default,null),text:"Expanded View",className:"ExpandedView",key:"expandedView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"expandedView"===this.state.displayType}),r.default.createElement(p.default.Item,{icon:r.default.createElement(m.default,null),text:"Trending View",className:"TendingView",key:"trendingView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"trendingView"===this.state.displayType})),r.default.createElement(p.default.Divider,{key:"Divider3"}),r.default.createElement(p.default.Item,{icon:r.default.createElement(h.default,null),text:"Send Message",className:"SendMessage",key:"send",isIconOnly:!0}),r.default.createElement(p.default.ItemGroup,{className:"MessageActionGroup",key:"messageActionGroup"},r.default.createElement(p.default.Item,{icon:r.default.createElement(g.default,null),text:"Print Message",className:"Print",key:"print",isIconOnly:!0}),r.default.createElement(p.default.Item,{icon:r.default.createElement(b.default,null),text:"Move Message to Folder...",className:"Move",key:"move",isIconOnly:!0}),r.default.createElement(p.default.Item,{icon:r.default.createElement(y.default,null),text:"Trash Message",key:"trash",className:"Trash",isIconOnly:!0})),r.default.createElement(p.default.Divider,{key:"Divider4"}),r.default.createElement(p.default.Item,{text:"Button 1",className:"Button1",key:"button1"}),r.default.createElement(p.default.Item,{text:"Button 2",className:"Button2",key:"button2"}),r.default.createElement(p.default.Item,{text:"Button 3",className:"Button3",key:"button3"}),r.default.createElement(p.default.Item,{text:"Button 4",className:"Button4",key:"button4"}),r.default.createElement(p.default.Item,{text:"Button 5",className:"Button5",key:"button5"}),r.default.createElement(p.default.Item,{text:"Button 6",className:"Button6",key:"button6"}),r.default.createElement(p.default.Item,{text:"Button 7",className:"Button7",key:"button7"}),r.default.createElement(p.default.Item,{text:"Button 8",className:"Button8",key:"button8"}))}}]),l}(r.default.Component);t.default=C},12472:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},15185:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(l(67294)),u=f(l(45697)),o=f(l(94184)),i=f(l(47166)),d=f(l(47341)),c=f(l(12472)),r=f(l(84538)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},m.apply(this,arguments)}function h(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function g(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var a=l.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function b(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)l=u[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)l=u[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var y=i.default.bind(c.default),p={checked:u.default.bool,defaultChecked:u.default.bool,id:u.default.string,inputAttrs:u.default.object,disabled:u.default.bool,isInline:u.default.bool,isLabelHidden:u.default.bool,labelText:u.default.string.isRequired,labelTextAttrs:u.default.object,name:u.default.string,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,value:u.default.string},k={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},C=function(e){var t=e.checked,l=e.defaultChecked,n=e.inputAttrs,u=e.id,i=e.disabled,c=e.isInline,f=e.isLabelHidden,p=e.labelText,k=e.labelTextAttrs,C=e.name,v=e.onBlur,x=e.onChange,O=e.onFocus,T=e.value,I=b(e,s),_=a.default.useContext(d.default),E=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?h(Object(l),!0).forEach((function(t){g(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):h(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},n);void 0!==t?E.checked=t:E.defaultChecked=l;var w=(0,o.default)(y("checkbox",{"is-inline":c},_.className),I.className),B=y(["label",{"is-disabled":i},{"is-mobile":r.default.isConsideredMobileDevice()},k.className]),S=y(["native-input",n.className]),N=y(["label-text",{"is-hidden":f},{"is-mobile":r.default.isConsideredMobileDevice()}]),M=null;return f?(E["aria-label"]=p,M=a.default.createElement("span",m({},k,{className:N}))):M=a.default.createElement("span",m({},k,{className:N}),p),a.default.createElement("div",m({},I,{className:w}),a.default.createElement("label",{htmlFor:u,className:B},a.default.createElement("input",m({},E,{type:"checkbox",id:u,disabled:i,name:C,value:T,onChange:x,onFocus:O,onBlur:v,className:S})),M))};C.propTypes=p,C.defaultProps=k,C.isCheckbox=!0;t.default=C},84538:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);