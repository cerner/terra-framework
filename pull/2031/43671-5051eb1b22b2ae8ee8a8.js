"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[43671],{43671:function(e,t,i){var a=i(64836),n=i(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(i(10434)),l=a(i(70215)),s=a(i(27424)),o=a(i(56690)),d=a(i(89728)),r=a(i(94993)),h=a(i(73808)),c=a(i(66115)),f=a(i(61655)),m=a(i(38416)),p=a(i(67294)),g=a(i(45697)),v=a(i(93967)),M=a(i(19845)),_=a(i(47341)),y=a(i(76367)),T=i(25387),I=i(55877),C=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var i=D(t);if(i&&i.has(e))return i.get(e);var a={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var s=u?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(a,l,s):a[l]=e[l]}return a.default=e,i&&i.set(e,a),a}(i(51051)),b=a(i(29270)),F=a(i(90592)),H=a(i(56636)),S=a(i(46833)),k=a(i(59051)),O=["ariaLabel","a11yLabel","atMaxDate","atMinDate","disabled","inputAttributes","minuteAttributes","hourAttributes","intl","isIncomplete","isInvalid","isInvalidMeridiem","onBlur","onChange","onFocus","name","refCallback","required","secondAttributes","showSeconds","value","variant"];function D(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(D=function(e){return e?i:t})(e)}function E(e,t,i){return t=(0,h.default)(t),(0,r.default)(e,w()?Reflect.construct(t,i||[],(0,h.default)(e).constructor):t.apply(e,i))}function w(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(w=function(){return!!e})()}var R=M.default.bind(H.default),B={ariaLabel:g.default.string,a11yLabel:g.default.string,atMaxDate:g.default.bool,atMinDate:g.default.bool,disabled:g.default.bool,inputAttributes:g.default.object,hourAttributes:g.default.object,intl:g.default.shape({formatMessage:g.default.func}).isRequired,isIncomplete:g.default.bool,isInvalid:g.default.bool,isInvalidMeridiem:g.default.bool,minuteAttributes:g.default.object,name:g.default.string.isRequired,onBlur:g.default.func,onChange:g.default.func,onFocus:g.default.func,refCallback:g.default.func,required:g.default.bool,secondAttributes:g.default.object,showSeconds:g.default.bool,value:g.default.string,variant:g.default.oneOf([F.default.FORMAT_12_HOUR,F.default.FORMAT_24_HOUR])},L={atMaxDate:!1,atMinDate:!1,disabled:!1,inputAttributes:{},isIncomplete:!1,isInvalid:!1,isInvalidMeridiem:!1,minuteAttributes:{},hourAttributes:{},onBlur:null,onChange:null,onFocus:void 0,refCallback:void 0,required:!1,secondAttributes:{},showSeconds:!1,value:void 0,variant:F.default.FORMAT_24_HOUR},A=function(e){function t(e){var i;(0,o.default)(this,t),i=E(this,t,[e]),(0,m.default)((0,c.default)(i),"handleInvalidInputChange",(function(){i.visuallyHiddenComponent&&(i.visuallyHiddenComponent.innerText=i.props.intl.formatMessage({id:"Terra.timeInput.invalidTime"}))})),(0,m.default)((0,c.default)(i),"setVisuallyHiddenComponent",(function(e){i.visuallyHiddenComponent=e}));var a=i.props.value,n=i.props.showSeconds;a&&!F.default.validateTime(a,n)&&(a=void 0),i.uuid=(0,I.v4)(),i.timeInputContainer=p.default.createRef(),i.handleHourChange=i.handleHourChange.bind((0,c.default)(i)),i.handleMinuteChange=i.handleMinuteChange.bind((0,c.default)(i)),i.handleSecondChange=i.handleSecondChange.bind((0,c.default)(i)),i.handleInputKeyDown=i.handleInputKeyDown.bind((0,c.default)(i)),i.handleHourInputKeyDown=i.handleHourInputKeyDown.bind((0,c.default)(i)),i.handleMinuteInputKeyDown=i.handleMinuteInputKeyDown.bind((0,c.default)(i)),i.handleSecondInputKeyDown=i.handleSecondInputKeyDown.bind((0,c.default)(i)),i.handleFocus=i.handleFocus.bind((0,c.default)(i)),i.handleHourFocus=i.handleHourFocus.bind((0,c.default)(i)),i.handleMinuteFocus=i.handleMinuteFocus.bind((0,c.default)(i)),i.handleSecondFocus=i.handleSecondFocus.bind((0,c.default)(i)),i.handleHourBlur=i.handleHourBlur.bind((0,c.default)(i)),i.handleMinuteBlur=i.handleMinuteBlur.bind((0,c.default)(i)),i.handleSecondBlur=i.handleSecondBlur.bind((0,c.default)(i)),i.handleMeridiemButtonFocus=i.handleMeridiemButtonFocus.bind((0,c.default)(i)),i.handleMeridiemButtonBlur=i.handleMeridiemButtonBlur.bind((0,c.default)(i)),i.handleMeridiemButtonChange=i.handleMeridiemButtonChange.bind((0,c.default)(i)),i.getCurrentTime=i.getCurrentTime.bind((0,c.default)(i)),i.setTime=i.setTime.bind((0,c.default)(i)),i.visuallyHiddenComponent=null,i.handleInvalidInputChange=i.handleInvalidInputChange.bind((0,c.default)(i)),i.setVisuallyHiddenComponent=i.setVisuallyHiddenComponent.bind((0,c.default)(i)),i.handleMinusChange=i.handleMinusChange.bind((0,c.default)(i)),i.handlePlusChange=i.handlePlusChange.bind((0,c.default)(i));var u,l=F.default.splitHour(a);if(F.default.getVariantFromLocale(e)===F.default.FORMAT_12_HOUR)if(i.anteMeridiem=i.props.intl.formatMessage({id:"Terra.timeInput.am"}),i.postMeridiem=i.props.intl.formatMessage({id:"Terra.timeInput.pm"}),l){var s=F.default.parseTwelveHourTime(l,i.anteMeridiem,i.postMeridiem);l=s.hourString,u=s.meridiem}else u=i.anteMeridiem;return i.props.variant===F.default.FORMAT_12_HOUR&&F.default.getVariantFromLocale(e)===F.default.FORMAT_24_HOUR&&(i.anteMeridiem="",i.postMeridiem=""),i.state={hour:l,minute:F.default.splitMinute(a),second:F.default.splitSecond(a),isFocused:!1,meridiem:u,hourInitialFocused:!1,minuteInitialFocused:!1,secondInitialFocused:!1},i}return(0,f.default)(t,e),(0,d.default)(t,[{key:"componentDidUpdate",value:function(e){var t=F.default.getVariantFromLocale(this.props);if(this.props.value!==e.value||t!==F.default.getVariantFromLocale(e)){var i=F.default.splitHour(this.props.value),a=this.state.meridiem;if(t===F.default.FORMAT_12_HOUR&&(this.anteMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.am"}),this.postMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.pm"}),i)){var n=F.default.parseTwelveHourTime(i,this.anteMeridiem,this.postMeridiem);i=n.hourString,a=n.meridiem}this.setState({hour:i,minute:F.default.splitMinute(this.props.value),second:F.default.splitSecond(this.props.value),meridiem:a,atMaxDate:this.props.atMaxDate,atMinDate:this.props.atMinDate})}}},{key:"handleFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e),this.setState({isFocused:!0})}},{key:"handleSecondFocus",value:function(e){this.handleFocus(e),this.setState({secondInitialFocused:!0})}},{key:"handleMinuteFocus",value:function(e){this.handleFocus(e),this.setState({minuteInitialFocused:!0})}},{key:"handleHourFocus",value:function(e){this.handleFocus(e),this.setState({hourInitialFocused:!0})}},{key:"handleHourBlur",value:function(e){this.handleBlur(e,F.default.inputType.HOUR),this.setState({hourInitialFocused:!1})}},{key:"handleMinuteBlur",value:function(e){this.handleBlur(e,F.default.inputType.MINUTE),this.setState({minuteInitialFocused:!1})}},{key:"handleSecondBlur",value:function(e){this.handleBlur(e,F.default.inputType.SECOND),this.setState({secondInitialFocused:!1})}},{key:"handleMeridiemButtonBlur",value:function(e){this.handleBlur(e,F.default.inputType.MERIDIEM)}},{key:"handleBlur",value:function(e,t){if(this.setState({isFocused:!1}),t===F.default.inputType.HOUR||t===F.default.inputType.MINUTE||t===F.default.inputType.SECOND){var i=e.target.value;1===i.length&&(i=F.default.getVariantFromLocale(this.props)===F.default.FORMAT_12_HOUR&&t===F.default.inputType.HOUR&&"0"===i?"12":"0".concat(i),this.handleValueChange(e,t,i,this.state.meridiem))}if(this.props.onBlur){var a=e.relatedTarget?e.relatedTarget:document.activeElement,n=this.state,u={hour:n.hour,minute:n.minute,second:n.second,meridiem:n.meridiem};this.timeInputContainer.current.contains(a)||this.props.onBlur(e,u)}}},{key:"handleHourChange",value:function(e){var t=this;if(F.default.validNumericInput(e.target.value)){var i=e.target.value,a=this.state.hour,n=F.default.getVariantFromLocale(this.props),u=n===F.default.FORMAT_12_HOUR?12:23;if(!(i===a||i.length>2||Number(i)>u)){if(i.length>=a.length){var l=["3","4","5","6","7","8","9"];n===F.default.FORMAT_12_HOUR&&l.push("2"),l.indexOf(i)>-1&&(i="0".concat(i))}"00"===i&&n===F.default.FORMAT_12_HOUR&&(i="12");this.handleValueChange(e,F.default.inputType.HOUR,i,this.state.meridiem,(function(){2===i.length&&t.minuteInput.focus()}))}}else this.handleInvalidInputChange()}},{key:"handleMinuteChange",value:function(e){var t=this;if(F.default.validNumericInput(e.target.value)){var i=e.target.value,a=this.state.minute;if(!(i===a||i.length>2||Number(i)>59)){if(i.length>=a.length){["6","7","8","9"].indexOf(i)>-1&&(i="0".concat(i))}this.handleValueChange(e,F.default.inputType.MINUTE,i,this.state.meridiem,(function(){2===i.length&&t.props.showSeconds&&t.secondInput.focus()}))}}else this.handleInvalidInputChange()}},{key:"handleSecondChange",value:function(e){if(F.default.validNumericInput(e.target.value)){var t=e.target.value,i=this.state.second;if(!(t===i||t.length>2||Number(t)>59)){if(t.length>=i.length){["6","7","8","9"].indexOf(t)>-1&&(t="0".concat(t))}this.handleValueChange(e,F.default.inputType.SECOND,t,this.state.meridiem)}}else this.handleInvalidInputChange()}},{key:"handleMeridiemButtonFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e)}},{key:"handleInputKeyDown",value:function(e,t){var i=this.state,a=i.hour,n=i.minute,u=i.second,l=i.meridiem,o=F.default.getVariantFromLocale(this.props);if(2===e.currentTarget.value.length&&e.key.match(/^[0-9]/g)&&(e.currentTarget.value=""),e.key.match(/^[0-9]/g)||e.keyCode===C.KEY_BACK_SPACE||e.keyCode===C.KEY_DELETE||e.keyCode===C.KEY_TAB||e.keyCode===C.KEY_RIGHT||e.keyCode===C.KEY_LEFT||e.preventDefault(),"n"!==e.key&&"N"!==e.key)if("-"!==e.key&&"_"!==e.key&&e.keyCode!==C.KEY_DOWN||this.props.atMinDate)if("="!==e.key&&"+"!==e.key&&e.keyCode!==C.KEY_UP||this.props.atMaxDate){if(("a"===e.key||"A"===e.key)&&o===F.default.FORMAT_12_HOUR){var d=this.formatHour(a,l).concat(":",n).concat(this.props.showSeconds?":".concat(u):"");return l=this.anteMeridiem,void(F.default.validateTime(d,this.props.showSeconds)?this.handleValueChange(e,F.default.inputType.HOUR,a.toString(),l):this.setTime(e,"12","00","00",l))}if(("p"===e.key||"P"===e.key)&&o===F.default.FORMAT_12_HOUR){var r=this.formatHour(a,l).concat(":",n).concat(this.props.showSeconds?":".concat(u):"");return l=this.postMeridiem,void(F.default.validateTime(r,this.props.showSeconds)?this.handleValueChange(e,F.default.inputType.HOUR,a.toString(),l):this.setTime(e,"12","00","00",l))}t===F.default.inputType.HOUR?this.handleHourInputKeyDown(e):t===F.default.inputType.MINUTE?this.handleMinuteInputKeyDown(e):this.handleSecondInputKeyDown(e)}else{var h=this.formatHour(a,l).concat(":",n).concat(this.props.showSeconds?":".concat(u):"");if(F.default.validateTime(h,this.props.showSeconds)){if(3===t&&this.props.showSeconds)if(u===F.default.LastSecond)if(u=F.default.DoubleZeroDigit,n===F.default.LastMinute){n=F.default.DoubleZeroDigit;var c=this.handlePlusChange(a,o,l),f=(0,s.default)(c,2);a=f[0],l=f[1]}else n=F.default.incrementMinute(n);else u=F.default.incrementSecond(u);else if(1===t)if(n===F.default.LastMinute){n=F.default.DoubleZeroDigit;var m=this.handlePlusChange(a,o,l),p=(0,s.default)(m,2);a=p[0],l=p[1]}else n=F.default.incrementMinute(n);else if(0===t){var g=this.handlePlusChange(a,o,l),v=(0,s.default)(g,2);a=v[0],l=v[1]}this.setTime(e,a,n,u,l)}else{var M=this.getCurrentTime(),_=M.hour,y=M.minute,T=M.meridiem;if(1===t)if(M.minute===F.default.LastMinute){y=F.default.DoubleZeroDigit;var I=this.handlePlusChange(_,o,T),b=(0,s.default)(I,2);_=b[0],T=b[1]}else y=F.default.incrementMinute(y);else if(0===t){var H=this.handlePlusChange(_,o,T),S=(0,s.default)(H,2);_=S[0],T=S[1]}this.setTime(e,_,y,M.second,T)}}else{var k=this.formatHour(a,l).concat(":",n).concat(this.props.showSeconds?":".concat(u):"");if(F.default.validateTime(k,this.props.showSeconds)){if(3===t&&this.props.showSeconds)if(F.default.initialValue.includes(u))if(u=F.default.LastSecond,F.default.initialValue.includes(n)){n=F.default.LastMinute;var O=this.handleMinusChange(a,o,l),D=(0,s.default)(O,2);a=D[0],l=D[1]}else n=F.default.decrementMinute(n);else u=F.default.decrementSecond(u);else if(1===t)if(F.default.initialValue.includes(n)){n=F.default.LastMinute;var E=this.handleMinusChange(a,o,l),w=(0,s.default)(E,2);a=w[0],l=w[1]}else n=F.default.decrementMinute(n);else if(0===t){var R=this.handleMinusChange(a,o,l),B=(0,s.default)(R,2);a=B[0],l=B[1]}this.setTime(e,a,n,u,l)}else{var L=this.getCurrentTime(),A=L.hour,K=L.minute,U=L.meridiem;if(1===t)if(F.default.initialValue.includes(K)){K=F.default.LastMinute;var N=this.handleMinusChange(A,o,U),V=(0,s.default)(N,2);A=V[0],U=V[1]}else K=F.default.decrementMinute(K);else if(0===t){var x=this.handleMinusChange(A,o,U),P=(0,s.default)(x,2);A=P[0],U=P[1]}this.setTime(e,A,K,L.second,U)}}else{e.preventDefault();var Y=this.getCurrentTime();this.setTime(e,Y.hour,Y.minute,Y.second,Y.meridiem)}}},{key:"handleMinusChange",value:function(e,t,i){var a=e,n=i;return e===F.default.SingleZeroDigit||e===F.default.DoubleZeroDigit?a=F.default.LastHour:(t===F.default.FORMAT_12_HOUR&&"12"===e&&(n=i===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),a=F.default.decrementHour(a,t)),[a,n]}},{key:"handlePlusChange",value:function(e,t,i){var a=e,n=i;return e===F.default.LastHour?a=F.default.DoubleZeroDigit:(t===F.default.FORMAT_12_HOUR&&"11"===e&&(n=i===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),a=F.default.incrementHour(a,t)),[a,n]}},{key:"handleHourInputKeyDown",value:function(e){var t=this.state.hour,i=this.state.meridiem;t!==t&&this.handleValueChange(e,F.default.inputType.HOUR,t,i),e.keyCode===C.KEY_RIGHT&&this.focusMinuteFromHour(e)}},{key:"handleMinuteInputKeyDown",value:function(e){var t=this.state.minute;t!==t&&this.handleValueChange(e,F.default.inputType.MINUTE,t,this.state.meridiem),e.keyCode!==C.KEY_LEFT&&e.keyCode!==C.KEY_DELETE&&e.keyCode!==C.KEY_BACK_SPACE||this.focusHour(e),e.keyCode===C.KEY_RIGHT&&this.props.showSeconds&&this.focusSecondFromMinute(e)}},{key:"handleSecondInputKeyDown",value:function(e){var t=this.state.second;t!==t&&this.handleValueChange(e,F.default.inputType.SECOND,t,this.state.meridiem),e.keyCode!==C.KEY_LEFT&&e.keyCode!==C.KEY_DELETE&&e.keyCode!==C.KEY_BACK_SPACE||this.focusMinuteFromSecond(e)}},{key:"handleValueChange",value:function(e,t,i,a,n){if(t===F.default.inputType.HOUR?this.setState({hour:i,meridiem:a,hourInitialFocused:!1},n):t===F.default.inputType.MINUTE?this.setState({minute:i,minuteInitialFocused:!1},n):this.setState({second:i,secondInitialFocused:!1},n),this.props.onChange&&1!==i.length){var u=t===F.default.inputType.HOUR?i:this.state.hour,l=t===F.default.inputType.MINUTE?i:this.state.minute,s=t===F.default.inputType.SECOND?i:this.state.second;""===u&&""===l&&""===s?this.props.onChange(e,""):this.props.onChange(e,this.formatHour(u,a).concat(":",l).concat(this.props.showSeconds?":".concat(s):""),a)}}},{key:"handleMeridiemButtonChange",value:function(e,t){this.handleValueChange(e,F.default.inputType.HOUR,this.state.hour.toString(),t)}},{key:"a11yLabel",get:function(){var e=this.props,t=e.a11yLabel,i=e.intl;return t||i.formatMessage({id:"Terra.timeInput.a11yLabelDefault"})}},{key:"getCurrentTime",value:function(){var e=new Date,t=(e.getMinutes()<10?"0":"")+e.getMinutes(),i=(e.getSeconds()<10?"0":"")+e.getSeconds(),a=(e.getHours()<10?"0":"")+e.getHours(),n="";if(F.default.getVariantFromLocale(this.props)===F.default.FORMAT_12_HOUR){var u=F.default.parseTwelveHourTime(a,this.anteMeridiem,this.postMeridiem);a=u.hourString,n=u.meridiem}return{minute:t,second:i,hour:a,meridiem:n}}},{key:"setTime",value:function(e,t,i,a,n){this.setState({hour:t,meridiem:n,hourInitialFocused:!1,minute:i,minuteInitialFocused:!1,second:a,secondInitialFocused:!1}),this.props.onChange&&this.props.onChange(e,this.formatHour(t,n).concat(":",i).concat(this.props.showSeconds?":".concat(a):""),n)}},{key:"focusMinuteFromHour",value:function(e){0===this.state.hour.length&&(this.minuteInput.focus(),e.preventDefault())}},{key:"focusHour",value:function(){0===this.state.minute.length&&this.hourInput.focus()}},{key:"focusSecondFromMinute",value:function(){0!==this.state.minute.length&&this.state.minute.length!==this.minuteInput.selectionEnd||!this.secondInput||this.secondInput.focus()}},{key:"focusMinuteFromSecond",value:function(){0===this.state.second.length&&this.minuteInput.focus()}},{key:"formatHour",value:function(e,t){if(!e)return e;var i=parseInt(e,10);F.default.getVariantFromLocale(this.props)===F.default.FORMAT_12_HOUR&&(t===this.postMeridiem&&i<12?i+=12:t===this.anteMeridiem&&12===i&&(i=0));var a=i.toString();return a.length<2&&(a="0".concat(a)),a}},{key:"render",value:function(){var e=this,t=this.props,i=t.ariaLabel,a=(t.a11yLabel,t.atMaxDate,t.atMinDate,t.disabled),n=t.inputAttributes,s=t.minuteAttributes,o=t.hourAttributes,d=t.intl,r=t.isIncomplete,h=t.isInvalid,c=t.isInvalidMeridiem,f=(t.onBlur,t.onChange,t.onFocus,t.name),m=t.refCallback,g=t.required,M=t.secondAttributes,_=t.showSeconds,T=(t.value,t.variant,(0,l.default)(t,O)),I=R(["meridiem-button",{"is-invalid":c&&this.state.meridiem===this.anteMeridiem}]),C=R(["meridiem-button",{"is-invalid":c&&this.state.meridiem===this.postMeridiem}]),H=F.default.getVariantFromLocale(this.props),D="";if(this.state.hour.length>0||this.state.minute.length>0||this.state.second.length>0&&_){var E=parseInt(this.state.hour,10);H===F.default.FORMAT_12_HOUR&&this.state.meridiem===this.postMeridiem&&(E+=12),D="T".concat(E,":",this.state.minute),_&&(D=D.concat(":",this.state.second))}var w=this.context,B=(0,v.default)(R({disabled:a},"time-input",{"is-focused":this.state.isFocused},{"is-invalid":h},{"is-incomplete":r&&g&&!h&&!c}),T.className),L=R(["time-input-hour",{"with-second":_},{"initial-focus":this.state.hourInitialFocused}]),A=R(["time-input-minute",{"with-second":_},{"initial-focus":this.state.minuteInitialFocused}]),K=R(["time-input-second",{"initial-focus":this.state.secondInitialFocused}]);n.isInvalid=h,n.disabled=a,n.required=g;var U=F.default.getA11YTimeValue(this.props,this.state,this.postMeridiem),N=d.formatMessage({id:"Terra.timePicker.hotKey"}),V=d.formatMessage({id:"Terra.timeInput.descriptionMinute"}),x=d.formatMessage({id:"Terra.timeInput.descriptionSecond"});return p.default.createElement("div",(0,u.default)({},T,{ref:this.timeInputContainer,className:R("time-input-container",w.className)}),p.default.createElement("div",{className:B,role:"group"},p.default.createElement(b.default,{text:d.formatMessage({id:"Terra.timeInput.labeledTextValue"},{a11yLabel:this.a11yLabel,a11yTimeValue:U}),"aria-live":"polite"}),p.default.createElement("input",{type:"hidden",name:f,value:D}),p.default.createElement(S.default,(0,u.default)({},n,o,{ariaLabel:i,label:d.formatMessage({id:"Terra.timeInput.hourLabel"},{a11yLabel:this.a11yLabel}),refCallback:function(t){e.hourInput=t,m&&m(t)},className:L,type:"text",value:this.state.hour,name:"terra-time-hour-".concat(f),maxLength:"2",onChange:this.handleHourChange,onKeyDown:function(t){return e.handleInputKeyDown(t,F.default.inputType.HOUR)},onFocus:this.handleHourFocus,onBlur:this.handleHourBlur,size:"2",pattern:"\\d*",description:"".concat(H===F.default.FORMAT_12_HOUR?d.formatMessage({id:"Terra.timeInput.hourDescriptionTwelve"}):d.formatMessage({id:"Terra.timeInput.hourDescriptionTwentyFour"}),", ").concat(N)})),p.default.createElement(k.default,{className:R("time-spacer")}),p.default.createElement(S.default,(0,u.default)({},n,s,{ariaLabel:i,refCallback:function(t){e.minuteInput=t},label:d.formatMessage({id:"Terra.timeInput.minutes"}),className:A,type:"text",value:this.state.minute,name:"terra-time-minute-".concat(f),maxLength:"2",onChange:this.handleMinuteChange,onKeyDown:function(t){return e.handleInputKeyDown(t,F.default.inputType.MINUTE)},onFocus:this.handleMinuteFocus,onBlur:this.handleMinuteBlur,size:"2",pattern:"\\d*",description:"".concat(V,", ").concat(N)})),_&&p.default.createElement(p.default.Fragment,null,p.default.createElement(k.default,{className:R("time-spacer")}),p.default.createElement(S.default,(0,u.default)({},n,M,{ariaLabel:i,refCallback:function(t){e.secondInput=t},label:d.formatMessage({id:"Terra.timeInput.seconds"}),className:K,type:"text",value:this.state.second,name:"terra-time-second-".concat(f),maxLength:"2",onChange:this.handleSecondChange,onKeyDown:function(t){return e.handleInputKeyDown(t,F.default.inputType.SECOND)},onFocus:this.handleSecondFocus,onBlur:this.handleSecondBlur,size:"2",pattern:"\\d*",description:"".concat(x,", ").concat(N)})))),H===F.default.FORMAT_12_HOUR&&p.default.createElement(y.default,{selectedKeys:[this.state.meridiem],onChange:this.handleMeridiemButtonChange,className:R("meridiem-button-group")},p.default.createElement(y.default.Button,{key:this.anteMeridiem,className:I,text:this.anteMeridiem,onBlur:this.handleMeridiemButtonBlur,onFocus:this.handleMeridiemButtonFocus,isDisabled:a}),p.default.createElement(y.default.Button,{key:this.postMeridiem,className:C,text:this.postMeridiem,onBlur:this.handleMeridiemButtonBlur,onFocus:this.handleMeridiemButtonFocus,isDisabled:a})),p.default.createElement("div",{"aria-hidden":!0,className:R("format-text")},_?d.formatMessage({id:"Terra.timeInput.maskHourMinuteSecond"}):d.formatMessage({id:"Terra.timeInput.maskHourMinute"})),p.default.createElement(b.default,{"aria-atomic":"true","aria-relevant":"all","aria-live":"assertive",refCallback:this.setVisuallyHiddenComponent}))}}]),t}(p.default.Component);A.propTypes=B,A.defaultProps=L,A.contextType=_.default;t.default=(0,T.injectIntl)(A)},59051:function(e,t,i){var a=i(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i(67294)),u=i(25387),l=a(i(19845)),s=a(i(45697)),o=a(i(56636)),d={intl:s.default.shape({formatMessage:s.default.func}).isRequired},r=l.default.bind(o.default);function h(e){var t=e.intl.formatMessage({id:"Terra.timeInput.timeSpacer"});return n.default.createElement("span",{"aria-hidden":!0,className:r("time-spacer")},t)}h.propTypes=d;t.default=(0,u.injectIntl)(h)},56636:function(e,t,i){i.r(t),t.default={"clinical-lowlight-theme":"TimeInput-module__clinical-lowlight-theme___H8tjT","orion-fusion-theme":"TimeInput-module__orion-fusion-theme___+Ly3n","time-input-container":"TimeInput-module__time-input-container___gKSyw","format-text":"TimeInput-module__format-text___0KWIL","time-input":"TimeInput-module__time-input___1r0Ug","time-input-hour":"TimeInput-module__time-input-hour___NHCBU","time-input-minute":"TimeInput-module__time-input-minute___7qHsa","time-input-second":"TimeInput-module__time-input-second___O94g7","is-focused":"TimeInput-module__is-focused___MS44C",disabled:"TimeInput-module__disabled___SMkbh","is-invalid":"TimeInput-module__is-invalid___rOrM9","initial-focus":"TimeInput-module__initial-focus___fsn0T","with-second":"TimeInput-module__with-second___v43+8","is-incomplete":"TimeInput-module__is-incomplete___XWkeP","time-spacer":"TimeInput-module__time-spacer___E1QSK","meridiem-button-group":"TimeInput-module__meridiem-button-group___pOxch","meridiem-button":"TimeInput-module__meridiem-button___WF2tV"}}}]);