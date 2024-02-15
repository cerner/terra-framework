"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[28512],{84612:function(e,t,l){var n=l(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(l(94064)),o=n(l(66024)),u=n(l(96284)),r=n(l(63532)),i=n(l(71559)),c=n(l(54216)),d=n(l(11504)),s=n(l(22264)),f=n(l(51524)),m=n(l(72520)),b=n(l(32500)),g=n(l(86064)),h=n(l(78616)),y=n(l(83668)),p=n(l(80328));function O(e,t,l){return t=(0,r.default)(t),(0,u.default)(e,v()?Reflect.construct(t,l||[],(0,r.default)(e).constructor):t.apply(e,l))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var _=function(e){function t(e){var l;return(0,a.default)(this,t),(l=O(this,t,[e])).handleDisplayTypeChange=l.handleDisplayTypeChange.bind((0,i.default)(l)),l.handleToggleOneOnChange=l.handleToggleOneOnChange.bind((0,i.default)(l)),l.handleToggleTwoOnChange=l.handleToggleTwoOnChange.bind((0,i.default)(l)),l.handleToggleThreeOnChange=l.handleToggleThreeOnChange.bind((0,i.default)(l)),l.handleMenuButtonClick=l.handleMenuButtonClick.bind((0,i.default)(l)),l.state={toggle1Selection:!1,toggle2Selection:!1,toggle3Selection:!1,displayType:"tableView",buttonClickCount:0},l}return(0,c.default)(t,e),(0,o.default)(t,[{key:"handleMenuButtonClick",value:function(){this.setState((function(e){return{buttonClickCount:e.buttonClickCount+1}}))}},{key:"handleToggleOneOnChange",value:function(e,t){this.setState({toggle1Selection:t})}},{key:"handleToggleTwoOnChange",value:function(e,t){this.setState({toggle2Selection:t})}},{key:"handleToggleThreeOnChange",value:function(e,t){this.setState({toggle3Selection:t})}},{key:"handleDisplayTypeChange",value:function(e,t){this.setState({displayType:t})}},{key:"render",value:function(){return d.default.createElement(p.default,null,d.default.createElement(p.default.Toggle,{text:"Toggle Item 1",className:"ToggleItem1",key:"toggle1",shouldCloseOnClick:!1,onChange:this.handleToggleOneOnChange,isSelected:this.state.toggle1Selection}),d.default.createElement(p.default.Toggle,{text:"Toggle Item 2",className:"ToggleItem2",key:"toggle2",shouldCloseOnClick:!1,onChange:this.handleToggleTwoOnChange,isSelected:this.state.toggle2Selection}),d.default.createElement(p.default.Toggle,{text:"Toggle Item 3",className:"ToggleItem3",key:"toggle3",shouldCloseOnClick:!1,onChange:this.handleToggleThreeOnChange,isSelected:this.state.toggle3Selection}),d.default.createElement(p.default.Divider,{key:"Divider1"}),d.default.createElement(p.default.Item,{text:"Menu Button 1",key:"MenuButton1",className:"MenuButton1",onClick:this.handleMenuButtonClick,shouldCloseOnClick:!1,subMenuItems:[d.default.createElement(p.default.Item,{text:"Default Item 1",key:"defaultItem1"}),d.default.createElement(p.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),d.default.createElement(p.default.Item,{text:"MenuButton 2",key:"MenuButton2",className:"MenuButton2",shouldCloseOnClick:!1,subMenuItems:[d.default.createElement(p.default.Item,{text:"Default Item 1",key:"defaultItem1"}),d.default.createElement(p.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),d.default.createElement(p.default.Item,{text:"MenuButton 3",key:"MenuButton3",className:"MenuButton3",shouldCloseOnClick:!1,subMenuItems:[d.default.createElement(p.default.Item,{text:"Default Item 1",key:"defaultItem1"}),d.default.createElement(p.default.Item,{text:"Default Item 2",key:"defaultItem2"})]}),d.default.createElement(p.default.Divider,{key:"Divider2"}),d.default.createElement(p.default.ItemGroup,{key:"ViewTypeSelection",className:"ViewTypeGroup",selectedKeys:[this.state.displayType],onChange:this.handleDisplayTypeChange},d.default.createElement(p.default.Item,{icon:d.default.createElement(s.default,null),text:"Table View",className:"TableView",key:"tableView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"tableView"===this.state.displayType}),d.default.createElement(p.default.Item,{icon:d.default.createElement(f.default,null),text:"Expanded View",className:"ExpandedView",key:"expandedView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"expandedView"===this.state.displayType}),d.default.createElement(p.default.Item,{icon:d.default.createElement(m.default,null),text:"Trending View",className:"TendingView",key:"trendingView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:"trendingView"===this.state.displayType})),d.default.createElement(p.default.Divider,{key:"Divider3"}),d.default.createElement(p.default.Item,{icon:d.default.createElement(b.default,null),text:"Send Message",className:"SendMessage",key:"send",isIconOnly:!0}),d.default.createElement(p.default.ItemGroup,{className:"MessageActionGroup",key:"messageActionGroup"},d.default.createElement(p.default.Item,{icon:d.default.createElement(g.default,null),text:"Print Message",className:"Print",key:"print",isIconOnly:!0}),d.default.createElement(p.default.Item,{icon:d.default.createElement(h.default,null),text:"Move Message to Folder...",className:"Move",key:"move",isIconOnly:!0}),d.default.createElement(p.default.Item,{icon:d.default.createElement(y.default,null),text:"Trash Message",key:"trash",className:"Trash",isIconOnly:!0})),d.default.createElement(p.default.Divider,{key:"Divider4"}),d.default.createElement(p.default.Item,{text:"Button 1",className:"Button1",key:"button1"}),d.default.createElement(p.default.Item,{text:"Button 2",className:"Button2",key:"button2"}),d.default.createElement(p.default.Item,{text:"Button 3",className:"Button3",key:"button3"}),d.default.createElement(p.default.Item,{text:"Button 4",className:"Button4",key:"button4"}),d.default.createElement(p.default.Item,{text:"Button 5",className:"Button5",key:"button5"}),d.default.createElement(p.default.Item,{text:"Button 6",className:"Button6",key:"button6"}),d.default.createElement(p.default.Item,{text:"Button 7",className:"Button7",key:"button7"}),d.default.createElement(p.default.Item,{text:"Button 8",className:"Button8",key:"button8"}))}}]),t}(d.default.Component);t.default=_},28300:function(e,t,l){l.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},20120:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},94515:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=c(l(11504)),o=c(l(3268)),u=c(l(74824)),r=c(l(28300)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},d.apply(this,arguments)}function s(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function f(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?s(Object(l),!0).forEach((function(t){m(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):s(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function m(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var a=l.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function b(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var g=u.default.bind(r.default),h={fitStart:o.default.element,fill:o.default.element.isRequired,fitEnd:o.default.element,align:o.default.oneOf(["center","bottom","stretch"]),alignFitStart:o.default.oneOf(["center","bottom","stretch"]),alignFitEnd:o.default.oneOf(["center","bottom","stretch"]),alignFill:o.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:o.default.object,fillAttributes:o.default.object,fitEndAttributes:o.default.object},y=function(e){var t=e.fitStart,l=e.fill,n=e.fitEnd,o=e.align,u=e.alignFitStart,r=e.alignFill,c=e.alignFitEnd,s=e.fitStartAttributes,m=e.fillAttributes,h=e.fitEndAttributes,y=b(e,i),p=f({},s),O=f({},m),v=f({},h);return a.default.createElement("span",d({},y,{className:g("arrange",y.className)}),a.default.createElement("span",d({},p,{className:g("fit",o||u,p.className,"fit-block")}),t),a.default.createElement("span",d({},O,{className:g("fill",o||r,O.className,"fill-block")}),l),a.default.createElement("span",d({},v,{className:g("fit",o||c,v.className)}),n))};y.propTypes=h;t.default=y},65928:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(l(11504)),o=f(l(3268)),u=f(l(82084)),r=f(l(74824)),i=f(l(7804)),c=f(l(20120)),d=f(l(41672)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},m.apply(this,arguments)}function b(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function g(e,t,l){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var a=l.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function h(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var y=r.default.bind(c.default),p={checked:o.default.bool,defaultChecked:o.default.bool,id:o.default.string,inputAttrs:o.default.object,disabled:o.default.bool,isInline:o.default.bool,isLabelHidden:o.default.bool,labelText:o.default.string.isRequired,labelTextAttrs:o.default.object,name:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,value:o.default.string},O={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},v=function(e){var t=e.checked,l=e.defaultChecked,n=e.inputAttrs,o=e.id,r=e.disabled,c=e.isInline,f=e.isLabelHidden,p=e.labelText,O=e.labelTextAttrs,v=e.name,_=e.onBlur,k=e.onChange,C=e.onFocus,E=e.value,T=h(e,s),x=a.default.useContext(i.default),I=function(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?b(Object(l),!0).forEach((function(t){g(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):b(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}({},n);void 0!==t?I.checked=t:I.defaultChecked=l;var S=(0,u.default)(y("checkbox",{"is-inline":c},x.className),T.className),w=y(["label",{"is-disabled":r},{"is-mobile":d.default.isConsideredMobileDevice()},O.className]),j=y(["native-input",n.className]),N=y(["label-text",{"is-hidden":f},{"is-mobile":d.default.isConsideredMobileDevice()}]),B=null;return f?(I["aria-label"]=p,B=a.default.createElement("span",m({},O,{className:N}))):B=a.default.createElement("span",m({},O,{className:N}),p),a.default.createElement("div",m({},T,{className:S}),a.default.createElement("label",{htmlFor:o,className:w},a.default.createElement("input",m({},I,{type:"checkbox",id:o,disabled:r,name:v,value:E,onChange:k,onFocus:C,onBlur:_,className:j})),B))};v.propTypes=p,v.defaultProps=O,v.isCheckbox=!0;t.default=v},41672:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);