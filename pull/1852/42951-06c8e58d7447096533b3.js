"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[42951],{49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}l.default=e,n&&n.set(e,l);return l}(n(67294)),i=l(n(45697)),c=l(n(47166)),u=n(21538),d=l(n(33864)),s=l(n(23399)),f=n(51051),m=l(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var v=c.default.bind(m.default),_={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,i=e.description,c=e.isExpanded,m=(0,r.useState)(c),p=(0,o.default)(m,2),_=p[0],y=p[1],k=(0,r.useState)(!1),x=(0,o.default)(k,2),C=x[0],g=x[1],O=r.default.useContext(u.ThemeContext),E=void 0!==l,L=function(){g(!C),_&&y(!_)},j=function(){y(!_),C&&g(!C)},T=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:v("template",O.className)},r.default.createElement("div",{className:v("header")},a&&r.default.createElement("h2",{className:v("title")},a)),r.default.createElement("div",{className:v("content")},i&&r.default.createElement("div",{className:v("description")},i),t),r.default.createElement("div",{className:v("footer")},n?r.default.createElement("div",{className:v("button-container")},E&&r.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":C}),onClick:L,onKeyDown:function(e){return T(e,L)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:v("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(s.default,{className:v("chevron")})),r.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":_}),onClick:j,onKeyDown:function(e){return T(e,j)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:v("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(s.default,{className:v("chevron")}))):null,r.default.createElement("div",null,C&&r.default.createElement("div",{className:v("css")},l),_&&r.default.createElement("div",{className:v("code")},n))))};y.propTypes=_,y.defaultProps={isExpanded:!1};var k=y;t.Z=k},26366:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var l=n(87462),a=n(44925),o=(n(67294),n(81254)),r=n(70775),i=["components"],c={},u="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.mdx)(u,(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(r.Z,{mdxType:"OnClickFilePath"}))}d.isMDXComponent=!0},70775:function(e,t,n){n.d(t,{Z:function(){return f}});var l=n(67294),a=n(29344),o=n(87462),r=n(44925),i=n(81254),c=["components"],u={};function d(e){var t=e.components,n=(0,r.Z)(e,c);return(0,i.mdx)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable react/forbid-dom-props */\nimport React, { useState } from 'react';\nimport FilePath from 'terra-file-path';\n\nconst DefaultFilePath = () => {\n  const [displayText, setDisplayText] = useState('Nothing');\n\n  const handleOnClick = (text) => () => {\n    setDisplayText(text);\n  };\n\n  const items = [\n    {\n      key: 'home',\n      text: 'Home',\n      onClick: handleOnClick('Home'),\n    },\n    {\n      key: 'level-1',\n      text: 'Level 1',\n      onClick: handleOnClick('Level 1'),\n    },\n    {\n      key: 'level-2',\n      text: 'Level 2',\n      onClick: handleOnClick('Level 2'),\n    },\n    {\n      key: 'level-3',\n      text: 'Level 3',\n      onClick: handleOnClick('Level 3'),\n    },\n    {\n      key: 'level-4',\n      text: 'Level 4',\n      onClick: handleOnClick('Level 4'),\n    },\n    {\n      key: 'level-5',\n      text: 'Level 5',\n      onClick: handleOnClick('Level 5'),\n    },\n    {\n      key: 'level-6',\n      text: 'Level 6',\n      onClick: handleOnClick('Level 6'),\n    },\n    {\n      key: 'level-7',\n      text: 'Level 7',\n      onClick: handleOnClick('Level 7'),\n    },\n    {\n      key: 'level-8',\n      text: 'Level 8',\n      onClick: handleOnClick('Level 8'),\n    },\n    {\n      key: 'level-9',\n      text: 'Level 9',\n      onClick: handleOnClick('Level 9'),\n    },\n    {\n      key: 'level-10',\n      text: 'Level 10',\n      onClick: handleOnClick('Level 10'),\n    },\n    {\n      key: 'level-11',\n      text: 'Level 11',\n      onClick: handleOnClick('Level 11'),\n    },\n    {\n      key: 'level-12',\n      text: 'Level 12',\n      onClick: handleOnClick('Level 12'),\n    },\n  ];\n\n  return (\n    <>\n      <FilePath items={items} />\n      <h1 style={{ textAlign: 'right' }}>{`${displayText} clicked!`}</h1>\n    </>\n  );\n};\n\nexport default DefaultFilePath;\n\n")))}d.isMDXComponent=!0;var s=n(49271),f=function(e){var t=e.title,n=e.description,o=e.isExpanded;return l.createElement(s.Z,{title:t||"On Click File Path",description:n,example:l.createElement(a.Z,null),exampleSrc:l.createElement(d,null),isExpanded:o})}},82457:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),o=l(n(45697)),r=n(25387),i=l(n(57927)),c={items:o.default.arrayOf(o.default.shape({key:o.default.string,text:o.default.string,title:o.default.string,href:o.default.string,onClick:o.default.func})),intl:o.default.shape({formatMessage:o.default.func}).isRequired},u=function(e){var t=e.items,n=e.intl,l=t.slice(0,t.length-1),o=t[t.length-1];return a.default.createElement(i.default,{isReversedChildrenOrder:!0,useHorizontalIcon:!0,isStartAligned:!0,iconText:n.formatMessage({id:"Terra.file-path.icon.text"})},l.map((function(e){return[a.default.createElement(i.default.Hyperlink,{key:e.key,text:e.text,title:e.title,href:e.href,onClick:e.onClick}),a.default.createElement(i.default.Divider,{useChevronRightIcon:!0,key:"divider-".concat(e.key)})]})).flat(),a.default.createElement(i.default.Item,{isTextOnly:!0,text:o.text,key:o.key}))};u.propTypes=c;t.default=(0,r.injectIntl)(u)},29344:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=l(n(82457));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}t.Z=function(){var e=(0,r.useState)("Nothing"),t=(0,o.default)(e,2),n=t[0],l=t[1],a=function(e){return function(){l(e)}},c=[{key:"home",text:"Home",onClick:a("Home")},{key:"level-1",text:"Level 1",onClick:a("Level 1")},{key:"level-2",text:"Level 2",onClick:a("Level 2")},{key:"level-3",text:"Level 3",onClick:a("Level 3")},{key:"level-4",text:"Level 4",onClick:a("Level 4")},{key:"level-5",text:"Level 5",onClick:a("Level 5")},{key:"level-6",text:"Level 6",onClick:a("Level 6")},{key:"level-7",text:"Level 7",onClick:a("Level 7")},{key:"level-8",text:"Level 8",onClick:a("Level 8")},{key:"level-9",text:"Level 9",onClick:a("Level 9")},{key:"level-10",text:"Level 10",onClick:a("Level 10")},{key:"level-11",text:"Level 11",onClick:a("Level 11")},{key:"level-12",text:"Level 12",onClick:a("Level 12")}];return r.default.createElement(r.default.Fragment,null,r.default.createElement(i.default,{items:c}),r.default.createElement("h1",{style:{textAlign:"right"}},"".concat(n," clicked!")))}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},12472:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},15185:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(67294)),o=f(n(45697)),r=f(n(94184)),i=f(n(47166)),c=f(n(47341)),u=f(n(12472)),d=f(n(84538)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function v(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=i.default.bind(u.default),h={checked:o.default.bool,defaultChecked:o.default.bool,id:o.default.string,inputAttrs:o.default.object,disabled:o.default.bool,isInline:o.default.bool,isLabelHidden:o.default.bool,labelText:o.default.string.isRequired,labelTextAttrs:o.default.object,name:o.default.string,onBlur:o.default.func,onChange:o.default.func,onFocus:o.default.func,value:o.default.string},y={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},k=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,o=e.id,i=e.disabled,u=e.isInline,f=e.isLabelHidden,h=e.labelText,y=e.labelTextAttrs,k=e.name,x=e.onBlur,C=e.onChange,g=e.onFocus,O=e.value,E=_(e,s),L=a.default.useContext(c.default),j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){v(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?j.checked=t:j.defaultChecked=n;var T=(0,r.default)(b("checkbox",{"is-inline":u},L.className),E.className),w=b(["label",{"is-disabled":i},{"is-mobile":d.default.isConsideredMobileDevice()},y.className]),P=b(["native-input",l.className]),N=b(["label-text",{"is-hidden":f},{"is-mobile":d.default.isConsideredMobileDevice()}]),D=null;return f?(j["aria-label"]=h,D=a.default.createElement("span",m({},y,{className:N}))):D=a.default.createElement("span",m({},y,{className:N}),h),a.default.createElement("div",m({},E,{className:T}),a.default.createElement("label",{htmlFor:o,className:w},a.default.createElement("input",m({},j,{type:"checkbox",id:o,disabled:i,name:k,value:O,onChange:C,onFocus:g,onBlur:x,className:P})),D))};k.propTypes=h,k.defaultProps=y,k.isCheckbox=!0;var x=k;t.default=x},84538:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t},87462:function(e,t,n){function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},l.apply(this,arguments)}n.d(t,{Z:function(){return l}})},44925:function(e,t,n){function l(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,{Z:function(){return l}})}}]);