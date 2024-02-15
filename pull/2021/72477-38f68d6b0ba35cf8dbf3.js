"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[72477],{70185:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(17383)),i=l(n(34579)),r=l(n(28452)),o=l(n(63072)),u=l(n(12475)),c=l(n(29511)),d=l(n(96540)),s=n(33049),f=l(n(26714));function b(e,t,n){return t=(0,o.default)(t),(0,r.default)(e,m()?Reflect.construct(t,n||[],(0,o.default)(e).constructor):t.apply(e,n))}function m(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(m=function(){return!!e})()}var g=function(e){function t(e){var n;return(0,a.default)(this,t),(n=b(this,t,[e])).handleDisplayTypeChange=n.handleDisplayTypeChange.bind((0,u.default)(n)),n.handleToggleOneOnChange=n.handleToggleOneOnChange.bind((0,u.default)(n)),n.handleToggleTwoOnChange=n.handleToggleTwoOnChange.bind((0,u.default)(n)),n.handleToggleThreeOnChange=n.handleToggleThreeOnChange.bind((0,u.default)(n)),n.state={toggle1Selection:!1,toggle2Selection:!1,toggle3Selection:!1,selectedKeys:[]},n}return(0,c.default)(t,e),(0,i.default)(t,[{key:"handleToggleOneOnChange",value:function(e,t){this.setState({toggle1Selection:t})}},{key:"handleToggleTwoOnChange",value:function(e,t){this.setState({toggle2Selection:t})}},{key:"handleToggleThreeOnChange",value:function(e,t){this.setState({toggle3Selection:t})}},{key:"handleDisplayTypeChange",value:function(e,t){var n=this.state.selectedKeys;n.includes(t)?n.splice(n.indexOf(t),1):n.push(t),this.setState({selectedKeys:n})}},{key:"render",value:function(){return d.default.createElement(f.default,null,d.default.createElement(f.default.Toggle,{text:"InDesign",key:"toggle1",shouldCloseOnClick:!1,onChange:this.handleToggleOneOnChange,isSelected:this.state.toggle1Selection}),d.default.createElement(f.default.Toggle,{text:"Photoshop",key:"toggle21",shouldCloseOnClick:!1,isSelected:this.state.toggle2Selection}),d.default.createElement(f.default.Toggle,{text:"Illustrator",key:"toggle3",shouldCloseOnClick:!1,onChange:this.handleToggleThreeOnChange,isSelected:this.state.toggle3Selection}),d.default.createElement(f.default.Divider,{key:"Divider1"}),d.default.createElement(f.default.Item,{text:"Browsers",key:"MenuButton1",shouldCloseOnClick:!1,subMenuItems:[d.default.createElement(f.default.Item,{text:"Edge",key:"defaultItem1"}),d.default.createElement(f.default.Item,{text:"Chrome",key:"defaultItem2"})]}),d.default.createElement(f.default.Divider,{key:"Divider2"}),d.default.createElement(f.default.ItemGroup,{key:"ViewTypeSelection",isMultiSelect:!0,selectedKeys:this.state.selectedKeys,onChange:this.handleDisplayTypeChange},d.default.createElement(f.default.Item,{icon:d.default.createElement(s.IconTable,null),text:"Table View",key:"tableView",id:"tableView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:this.state.selectedKeys.includes("tableView")}),d.default.createElement(f.default.Item,{icon:d.default.createElement(s.IconFlowsheet,null),text:"Expanded View",key:"expandedView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:this.state.selectedKeys.includes("expandedView")}),d.default.createElement(f.default.Item,{icon:d.default.createElement(s.IconVisualization,null),text:"Trending View",key:"trendingView",id:"trendingView",isIconOnly:!0,shouldCloseOnClick:!1,isSelected:this.state.selectedKeys.includes("trendingView")})),d.default.createElement(f.default.Divider,{key:"Divider3"}),d.default.createElement(f.default.Item,{icon:d.default.createElement(s.IconSend,null),text:"Send Message",key:"send",isIconOnly:!0}))}}]),t}(d.default.Component);t.default=g},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},4267:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},39496:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=c(n(96540)),i=c(n(5556)),r=c(n(67967)),o=c(n(92420)),u=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t,n){var a;return a=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(a)?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var g=r.default.bind(o.default),h={fitStart:i.default.element,fill:i.default.element.isRequired,fitEnd:i.default.element,align:i.default.oneOf(["center","bottom","stretch"]),alignFitStart:i.default.oneOf(["center","bottom","stretch"]),alignFitEnd:i.default.oneOf(["center","bottom","stretch"]),alignFill:i.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:i.default.object,fillAttributes:i.default.object,fitEndAttributes:i.default.object},p=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,i=e.align,r=e.alignFitStart,o=e.alignFill,c=e.alignFitEnd,s=e.fitStartAttributes,b=e.fillAttributes,h=e.fitEndAttributes,p=m(e,u),y=f({},s),O=f({},b),_=f({},h);return a.default.createElement("span",d({},p,{className:g("arrange",p.className)}),a.default.createElement("span",d({},y,{className:g("fit",i||r,y.className,"fit-block")}),t),a.default.createElement("span",d({},O,{className:g("fill",i||o,O.className,"fill-block")}),n),a.default.createElement("span",d({},_,{className:g("fit",i||c,_.className)}),l))};p.propTypes=h;t.default=p},63639:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(96540)),i=f(n(5556)),r=f(n(46942)),o=f(n(67967)),u=f(n(23695)),c=f(n(4267)),d=f(n(68611)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},b.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function g(e,t,n){var a;return a=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(a)?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(c.default),y={checked:i.default.bool,defaultChecked:i.default.bool,id:i.default.string,inputAttrs:i.default.object,disabled:i.default.bool,isInline:i.default.bool,isLabelHidden:i.default.bool,labelText:i.default.string.isRequired,labelTextAttrs:i.default.object,name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string},O={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},_=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,i=e.id,o=e.disabled,c=e.isInline,f=e.isLabelHidden,y=e.labelText,O=e.labelTextAttrs,_=e.name,v=e.onBlur,C=e.onChange,k=e.onFocus,S=e.value,w=h(e,s),j=a.default.useContext(u.default),T=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?T.checked=t:T.defaultChecked=n;var E=(0,r.default)(p("checkbox",{"is-inline":c},j.className),w.className),x=p(["label",{"is-disabled":o},{"is-mobile":d.default.isConsideredMobileDevice()},O.className]),P=p(["native-input",l.className]),A=p(["label-text",{"is-hidden":f},{"is-mobile":d.default.isConsideredMobileDevice()}]),I=null;return f?(T["aria-label"]=y,I=a.default.createElement("span",b({},O,{className:A}))):I=a.default.createElement("span",b({},O,{className:A}),y),a.default.createElement("div",b({},w,{className:E}),a.default.createElement("label",{htmlFor:i,className:x},a.default.createElement("input",b({},T,{type:"checkbox",id:i,disabled:o,name:_,value:S,onChange:C,onFocus:k,onBlur:v,className:P})),I))};_.propTypes=y,_.defaultProps=O,_.isCheckbox=!0;t.default=_},68611:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);