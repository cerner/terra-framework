"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[69238],{82457:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(67294)),o=l(n(45697)),r=n(25387),a=l(n(57927)),u={items:o.default.arrayOf(o.default.shape({key:o.default.string,text:o.default.string,title:o.default.string,href:o.default.string,onClick:o.default.func})),intl:o.default.shape({formatMessage:o.default.func}).isRequired},c=function(e){var t=e.items,n=e.intl,l=t.slice(0,t.length-1),o=t[t.length-1];return i.default.createElement(a.default,{isReversedChildrenOrder:!0,useHorizontalIcon:!0,isStartAligned:!0,menuIconText:n.formatMessage({id:"Terra.file-path.icon.text"})},l.map((function(e){return[i.default.createElement(a.default.Hyperlink,{key:e.key,text:e.text,title:e.title,href:e.href,onClick:e.onClick}),i.default.createElement(a.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(e.key)})]})).flat(),i.default.createElement(a.default.Item,{isTextOnly:!0,text:o.text,key:o.key}))};c.propTypes=u;t.default=(0,r.injectIntl)(c)},20910:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=l(n(67294)),o=l(n(82457)),r=[{key:"link-0",text:"Link 0",href:"https://oracle.com"},{key:"link-1",text:"Link 1",href:"https://oracle.com"},{key:"link-2",text:"Link 2",href:"https://oracle.com"},{key:"link-3",text:"Link 3",href:"https://oracle.com"},{key:"link-4",text:"Link 4",href:"https://oracle.com"},{key:"link-5",text:"Link 5",href:"https://oracle.com"},{key:"link-6",text:"Link 6",href:"https://oracle.com"},{key:"link-7",text:"Link 7",href:"https://oracle.com"},{key:"link-8",text:"Link 8",href:"https://oracle.com"},{key:"link-9",text:"Link 9",href:"https://oracle.com"},{key:"link-10",text:"Link 10",href:"https://oracle.com"},{key:"link-11",text:"Link 11",href:"https://oracle.com"},{key:"link-12",text:"Link 12",href:"https://oracle.com"}];t.default=function(){return i.default.createElement(o.default,{items:r})}},12472:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},15185:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=f(n(67294)),o=f(n(45697)),r=f(n(94184)),a=f(n(47166)),u=f(n(47341)),c=f(n(12472)),d=f(n(84538)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},b.apply(this,arguments)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function m(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==l(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function k(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.default.bind(c.default),y={checked:o.default.bool,defaultChecked:o.default.bool,id:o.default.string,inputAttrs:o.default.object,disabled:o.default.bool,isInline:o.default.bool,isLabelHidden:o.default.bool,labelText:o.default.string.isRequired,labelTextAttrs:o.default.object,name:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,value:o.default.string},v={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},_=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,o=e.id,a=e.disabled,c=e.isInline,f=e.isLabelHidden,y=e.labelText,v=e.labelTextAttrs,_=e.name,x=e.onBlur,g=e.onChange,O=e.onFocus,C=e.value,j=k(e,s),w=i.default.useContext(u.default),P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?P.checked=t:P.defaultChecked=n;var L=(0,r.default)(p("checkbox",{"is-inline":c},w.className),j.className),T=p(["label",{"is-disabled":a},{"is-mobile":d.default.isConsideredMobileDevice()},v.className]),E=p(["native-input",l.className]),S=p(["label-text",{"is-hidden":f},{"is-mobile":d.default.isConsideredMobileDevice()}]),A=null;return f?(P["aria-label"]=y,A=i.default.createElement("span",b({},v,{className:S}))):A=i.default.createElement("span",b({},v,{className:S}),y),i.default.createElement("div",b({},j,{className:L}),i.default.createElement("label",{htmlFor:o,className:T},i.default.createElement("input",b({},P,{type:"checkbox",id:o,disabled:a,name:_,value:C,onChange:g,onFocus:O,onBlur:x,className:E})),A))};_.propTypes=y,_.defaultProps=v,_.isCheckbox=!0;t.default=_},84538:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);