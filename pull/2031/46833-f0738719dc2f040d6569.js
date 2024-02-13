"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[46833],{90592:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(56690)),a=r(n(89728)),i=r(n(38416)),o=r(n(76024)),l=r(n(8557)),d=r(n(38245)),c=function(){function e(){(0,u.default)(this,e)}return(0,a.default)(e,null,[{key:"validNumericInput",value:function(e){return 0===e.length||/^\d+$/.test(e)}},{key:"parseTwelveHourTime",value:function(e,t,n){var r={hourString:e},u=parseInt(e,10);return u>=12?(r.meridiem=n,u>12&&(u-=12)):(r.meridiem=t,0===u&&(u=12)),r.hourString=u<10?"0".concat(u.toString()):u.toString(),r}},{key:"incrementHour",value:function(e,t){var n=t===this.FORMAT_12_HOUR?12:23;if(e){var r=Number(e);return r<n?(r+=1)<10?"0".concat(r.toString()):r.toString():t===this.FORMAT_12_HOUR?"01":e}return t===this.FORMAT_12_HOUR?"12":"00"}},{key:"decrementHour",value:function(e,t){var n=t===this.FORMAT_12_HOUR?1:0;if(e){var r=Number(e);return r>n?(r-=1)<10?"0".concat(r.toString()):r.toString():t===this.FORMAT_12_HOUR?"12":e}return t===this.FORMAT_12_HOUR?"12":"00"}},{key:"incrementMinute",value:function(e){if(e){var t=Number(e);return t<59?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"decrementMinute",value:function(e){if(e){var t=Number(e);return t>0?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"incrementSecond",value:function(e){if(e){var t=Number(e);return t<59?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"decrementSecond",value:function(e){if(e){var t=Number(e);return t>0?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"splitHour",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length){var n=Number(t[0]);if(n>=0&&n<24)return 1===t[0].length?"0".concat(t[0]):t[0]}return""}return""}},{key:"splitMinute",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length>1){var n=Number(t[1]);if(n>=0&&n<60)return 1===t[1].length?"0".concat(t[1]):t[1]}return""}return""}},{key:"splitSecond",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length>2){var n=Number(t[2]);if(n>=0&&n<60)return 1===t[2].length?"0".concat(t[2]):t[2]}return""}return""}},{key:"is12Hour",value:function(t){return e.getVariantFromLocale(t)===e.FORMAT_12_HOUR}},{key:"isPM",value:function(t,n,r){return e.is12Hour(t)&&n.meridiem===r}},{key:"deprecatedAndDangerousKindOfISOValueButNotReally",value:function(t,n,r){var u=n.hour,a=n.minute,i=n.second,o=t.showSeconds,l="";if(u.length>0||a.length>0||i.length>0&&o){var d=parseInt(u,10);e.isPM(t,n,r)&&(d+=12),l="T".concat(d,":",a),o&&(l=l.concat(":",i))}return l}},{key:"getA11YTimeValue",value:function(t,n,r){var u,a=n.meridiem,i=t.intl,c=t.showSeconds,f=e.is12Hour(t);u=e.isPM(t,n,r)?o.default.TWELVE_HOUR_PM:f?o.default.TWELVE_HOUR_AM:o.default.TWENTY_FOUR_HOUR;var s=o.default.fromString(n.hour,u),v=l.default.fromString(n.minute),m=d.default.fromString(n.second);if(!([s,v].includes(void 0)||c&&void 0===m))return f&&c?i.formatMessage({id:"Terra.timeInput.textValueTwelveHourMinuteSecond"},{hour:s.toTwelveHourString(),minute:v,second:m,meridiem:a}):f?i.formatMessage({id:"Terra.timeInput.textValueTwelveHourMinute"},{hour:s.toTwelveHourString(),minute:v,meridiem:a}):c?i.formatMessage({id:"Terra.timeInput.textValueTwentyFourHourMinuteSecond"},{hour:s,minute:v,second:m}):i.formatMessage({id:"Terra.timeInput.textValueTwentyFourHourMinute"},{hour:s,minute:v})}},{key:"validateTime",value:function(e,t){return t?/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(e):/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(e)}},{key:"getVariantFromLocale",value:function(e){var t=e.intl,n=e.variant;return["de","es-ES","es","fi-FI","fr-FR","fr","nl-BE","nl","pt-BR","pt","sv-SE","sv"].includes(t.locale)?this.FORMAT_24_HOUR:n}}]),e}();(0,i.default)(c,"isMac",(function(){return-1!==navigator.userAgent.indexOf("Mac")&&-1===navigator.userAgent.indexOf("Win")})),c.inputType={HOUR:0,MINUTE:1,MERIDIEM:2,SECOND:3},c.LastHour="23",c.LastMinute="59",c.LastSecond="59",c.SingleZeroDigit="0",c.DoubleZeroDigit="00",c.initialValue=["0","00"],c.isConsideredMobileDevice=function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},Object.defineProperty(c,"FORMAT_12_HOUR",{value:"12-hour",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(c,"FORMAT_24_HOUR",{value:"24-hour",configurable:!1,enumerable:!0,writable:!1});t.default=c},46833:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(10434)),a=r(n(70215)),i=r(n(29270)),o=r(n(45697)),l=r(n(67294)),d=r(n(55142)),c=n(55877),f=r(n(90592)),s=["value","label","description","disabled","isInvalid","showIsInvalid","ariaDescribedBy"],v={value:o.default.string,label:o.default.string,description:o.default.string,disabled:o.default.bool,isInvalid:o.default.bool,showIsInvalid:o.default.bool,ariaDescribedBy:o.default.string};function m(e){var t=e.value,n=e.label,r=e.description,o=e.disabled,v=e.isInvalid,m=e.showIsInvalid,S=e.ariaDescribedBy,g=(0,a.default)(e,s),M=(0,c.v4)(),R="".concat(M,"-label"),_="".concat(M,"-description");return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement(i.default,{text:n,id:R}),l.default.createElement(d.default,(0,u.default)({},g,{value:t,disabled:o,"aria-disabled":o,isInvalid:m&&v,"aria-invalid":v,"aria-labelledby":t?R:void 0,"aria-label":t?void 0:n,"aria-describedby":S?"".concat(_," ").concat(S):"".concat(_),type:"number"})),l.default.createElement(i.default,{"aria-live":f.default.isMac()?"polite":"off",id:_,text:r}))}m.propTypes=v,m.defaultProps={isInvalid:!1,showIsInvalid:!1,ariaDescribedBy:null};t.default=m},76024:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a=r(n(861)),i=r(n(56690)),o=r(n(89728)),l=r(n(38416)),d=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.TWENTY_FOUR_HOUR;switch((0,i.default)(this,e),n){case e.TWENTY_FOUR_HOUR:if(!e.NUMBERS.includes(t))throw new Error("Unrecognized number. Must be one of ".concat(e.NUMBERS));this.value=t;break;case e.TWELVE_HOUR_AM:if(!e.NUMBERS_12.includes(t))throw new Error("Unrecognized number. Must be one of ".concat(e.NUMBERS_12));this.value=e.NUMBERS[e.NUMBERS_12.indexOf(t)];break;case e.TWELVE_HOUR_PM:if(!e.NUMBERS_12.includes(t))throw new Error("Unrecognized number. Must be one of ".concat(e.NUMBERS_12));this.value=e.NUMBERS[e.NUMBERS_12.indexOf(t)+12];break;default:throw new Error("Unrecognized mode. Must be one of ".concat(e.MODES))}}return(0,o.default)(e,[{key:"valueOf",value:function(){return this.value}},{key:"twelveHourValueOf",value:function(){return e.NUMBERS_12[this.value%12]}},{key:"toString",value:function(){return String(this.value).padStart(2,0)}},{key:"toTwelveHourString",value:function(){return String(this.twelveHourValueOf()).padStart(2,0)}}],[{key:"fromString",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.TWENTY_FOUR_HOUR;if(e.STRINGS.includes(t))try{return new e(Number(t),n)}catch(e){return}}}]),e}();u=d,(0,l.default)(d,"TWENTY_FOUR_HOUR",0),(0,l.default)(d,"TWELVE_HOUR_AM",1),(0,l.default)(d,"TWELVE_HOUR_PM",2),(0,l.default)(d,"MODES",[u.TWENTY_FOUR_HOUR,u.TWELVE_HOUR_AM,u.TWELVE_HOUR_PM]),(0,l.default)(d,"NUMBERS",(0,a.default)(Array(24).keys())),(0,l.default)(d,"NUMBERS_12",[12].concat((0,a.default)(u.NUMBERS.slice(1,12)))),(0,l.default)(d,"STRINGS",[].concat((0,a.default)(u.NUMBERS.map((function(e){return String(e).padStart(2,0)}))),(0,a.default)(u.NUMBERS.map((function(e){return String(e)})))));t.default=d},8557:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a=r(n(861)),i=r(n(56690)),o=r(n(89728)),l=r(n(38416)),d=function(){function e(t){if((0,i.default)(this,e),!e.NUMBERS.includes(t))throw new Error("Expected number to be in ".concat(t));this.value=t}return(0,o.default)(e,[{key:"valueOf",value:function(){return this.value}},{key:"toString",value:function(){return String(this.value).padStart(2,0)}}],[{key:"fromString",value:function(t){if(e.STRINGS.includes(t))try{return new e(Number(t))}catch(e){return}}}]),e}();u=d,(0,l.default)(d,"NUMBERS",(0,a.default)(Array(60).keys())),(0,l.default)(d,"STRINGS",[].concat((0,a.default)(u.NUMBERS.map((function(e){return String(e).padStart(2,0)}))),(0,a.default)(u.NUMBERS.map((function(e){return String(e)})))));t.default=d},38245:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(8557));t.default=u.default}}]);