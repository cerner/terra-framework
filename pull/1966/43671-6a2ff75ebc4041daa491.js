"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[43671],{43671:function(e,t,i){var n=i(64836),a=i(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(i(10434)),s=n(i(70215)),o=n(i(56690)),d=n(i(89728)),l=n(i(94993)),r=n(i(73808)),h=n(i(66115)),c=n(i(61655)),m=n(i(38416)),p=n(i(67294)),f=n(i(45697)),M=n(i(93967)),v=n(i(19845)),_=n(i(47341)),g=n(i(76367)),y=i(25387),T=i(55877),I=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var i=k(t);if(i&&i.has(e))return i.get(e);var n={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var o=u?Object.getOwnPropertyDescriptor(e,s):null;o&&(o.get||o.set)?Object.defineProperty(n,s,o):n[s]=e[s]}return n.default=e,i&&i.set(e,n),n}(i(51051)),b=n(i(29270)),F=n(i(90592)),C=n(i(56636)),H=n(i(46833)),O=n(i(59051)),S=n(i(36654)),R=["a11yLabel","atMaxDate","atMinDate","disabled","inputAttributes","minuteAttributes","hourAttributes","intl","isIncomplete","isInvalid","isInvalidMeridiem","onBlur","onChange","onFocus","name","refCallback","required","secondAttributes","showSeconds","value","variant"];function k(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,i=new WeakMap;return(k=function(e){return e?i:t})(e)}function w(e,t,i){return t=(0,r.default)(t),(0,l.default)(e,D()?Reflect.construct(t,i||[],(0,r.default)(e).constructor):t.apply(e,i))}function D(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(D=function(){return!!e})()}var E=v.default.bind(C.default),B={a11yLabel:f.default.string,atMaxDate:f.default.bool,atMinDate:f.default.bool,disabled:f.default.bool,inputAttributes:f.default.object,hourAttributes:f.default.object,intl:f.default.shape({formatMessage:f.default.func}).isRequired,isIncomplete:f.default.bool,isInvalid:f.default.bool,isInvalidMeridiem:f.default.bool,minuteAttributes:f.default.object,name:f.default.string.isRequired,onBlur:f.default.func,onChange:f.default.func,onFocus:f.default.func,refCallback:f.default.func,required:f.default.bool,secondAttributes:f.default.object,showSeconds:f.default.bool,value:f.default.string,variant:f.default.oneOf([F.default.FORMAT_12_HOUR,F.default.FORMAT_24_HOUR])},U={atMaxDate:!1,atMinDate:!1,disabled:!1,inputAttributes:{},isIncomplete:!1,isInvalid:!1,isInvalidMeridiem:!1,minuteAttributes:{},hourAttributes:{},onBlur:null,onChange:null,onFocus:void 0,refCallback:void 0,required:!1,secondAttributes:{},showSeconds:!1,value:void 0,variant:F.default.FORMAT_24_HOUR},A=function(e){function t(e){var i;(0,o.default)(this,t),i=w(this,t,[e]),(0,m.default)((0,h.default)(i),"handleInvalidInputChange",(function(){i.visuallyHiddenComponent&&(i.visuallyHiddenComponent.innerText=i.props.intl.formatMessage({id:"Terra.timeInput.invalidTime"}))})),(0,m.default)((0,h.default)(i),"setVisuallyHiddenComponent",(function(e){i.visuallyHiddenComponent=e}));var n=i.props.value,a=i.props.showSeconds;n&&!F.default.validateTime(n,a)&&(n=void 0),i.uuid=(0,T.v4)(),i.timeInputContainer=p.default.createRef(),i.handleHourChange=i.handleHourChange.bind((0,h.default)(i)),i.handleMinuteChange=i.handleMinuteChange.bind((0,h.default)(i)),i.handleSecondChange=i.handleSecondChange.bind((0,h.default)(i)),i.handleInputKeyDown=i.handleInputKeyDown.bind((0,h.default)(i)),i.handleHourInputKeyDown=i.handleHourInputKeyDown.bind((0,h.default)(i)),i.handleMinuteInputKeyDown=i.handleMinuteInputKeyDown.bind((0,h.default)(i)),i.handleSecondInputKeyDown=i.handleSecondInputKeyDown.bind((0,h.default)(i)),i.handleFocus=i.handleFocus.bind((0,h.default)(i)),i.handleHourFocus=i.handleHourFocus.bind((0,h.default)(i)),i.handleMinuteFocus=i.handleMinuteFocus.bind((0,h.default)(i)),i.handleSecondFocus=i.handleSecondFocus.bind((0,h.default)(i)),i.handleHourBlur=i.handleHourBlur.bind((0,h.default)(i)),i.handleMinuteBlur=i.handleMinuteBlur.bind((0,h.default)(i)),i.handleSecondBlur=i.handleSecondBlur.bind((0,h.default)(i)),i.handleMeridiemButtonFocus=i.handleMeridiemButtonFocus.bind((0,h.default)(i)),i.handleMeridiemButtonBlur=i.handleMeridiemButtonBlur.bind((0,h.default)(i)),i.handleMeridiemButtonChange=i.handleMeridiemButtonChange.bind((0,h.default)(i)),i.getCurrentTime=i.getCurrentTime.bind((0,h.default)(i)),i.setTime=i.setTime.bind((0,h.default)(i)),i.visuallyHiddenComponent=null,i.handleInvalidInputChange=i.handleInvalidInputChange.bind((0,h.default)(i)),i.setVisuallyHiddenComponent=i.setVisuallyHiddenComponent.bind((0,h.default)(i));var u,s=F.default.splitHour(n);if(F.default.getVariantFromLocale(e)===F.default.FORMAT_12_HOUR)if(i.anteMeridiem=i.props.intl.formatMessage({id:"Terra.timeInput.am"}),i.postMeridiem=i.props.intl.formatMessage({id:"Terra.timeInput.pm"}),s){var d=F.default.parseTwelveHourTime(s,i.anteMeridiem,i.postMeridiem);s=d.hourString,u=d.meridiem}else u=i.anteMeridiem;return i.props.variant===F.default.FORMAT_12_HOUR&&F.default.getVariantFromLocale(e)===F.default.FORMAT_24_HOUR&&(i.anteMeridiem="",i.postMeridiem=""),i.state={hour:s,minute:F.default.splitMinute(n),second:F.default.splitSecond(n),isFocused:!1,meridiem:u,hourInitialFocused:!1,minuteInitialFocused:!1,secondInitialFocused:!1},i}return(0,c.default)(t,e),(0,d.default)(t,[{key:"componentDidUpdate",value:function(e){var t=F.default.getVariantFromLocale(this.props);if(this.props.value!==e.value||t!==F.default.getVariantFromLocale(e)){var i=F.default.splitHour(this.props.value),n=this.state.meridiem;if(t===F.default.FORMAT_12_HOUR&&(this.anteMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.am"}),this.postMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.pm"}),i)){var a=F.default.parseTwelveHourTime(i,this.anteMeridiem,this.postMeridiem);i=a.hourString,n=a.meridiem}this.setState({hour:i,minute:F.default.splitMinute(this.props.value),second:F.default.splitSecond(this.props.value),meridiem:n,atMaxDate:this.props.atMaxDate,atMinDate:this.props.atMinDate})}}},{key:"handleFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e),this.setState({isFocused:!0})}},{key:"handleSecondFocus",value:function(e){this.handleFocus(e),this.setState({secondInitialFocused:!0}),F.default.isConsideredMobileDevice()||this.secondInput.setSelectionRange(0,this.secondInput.value.length)}},{key:"handleMinuteFocus",value:function(e){this.handleFocus(e),this.setState({minuteInitialFocused:!0}),F.default.isConsideredMobileDevice()||this.minuteInput.setSelectionRange(0,this.minuteInput.value.length)}},{key:"handleHourFocus",value:function(e){this.handleFocus(e),this.setState({hourInitialFocused:!0}),F.default.isConsideredMobileDevice()||this.hourInput.setSelectionRange(0,this.hourInput.value.length)}},{key:"handleHourBlur",value:function(e){this.handleBlur(e,F.default.inputType.HOUR),this.setState({hourInitialFocused:!1})}},{key:"handleMinuteBlur",value:function(e){this.handleBlur(e,F.default.inputType.MINUTE),this.setState({minuteInitialFocused:!1})}},{key:"handleSecondBlur",value:function(e){this.handleBlur(e,F.default.inputType.SECOND),this.setState({secondInitialFocused:!1})}},{key:"handleMeridiemButtonBlur",value:function(e){this.handleBlur(e,F.default.inputType.MERIDIEM)}},{key:"handleBlur",value:function(e,t){if(this.setState({isFocused:!1}),t===F.default.inputType.HOUR||t===F.default.inputType.MINUTE||t===F.default.inputType.SECOND){var i=e.target.value;1===i.length&&(i=F.default.getVariantFromLocale(this.props)===F.default.FORMAT_12_HOUR&&t===F.default.inputType.HOUR&&"0"===i?"12":"0".concat(i),this.handleValueChange(e,t,i,this.state.meridiem))}if(this.props.onBlur){var n=e.relatedTarget?e.relatedTarget:document.activeElement;this.timeInputContainer.current.contains(n)||this.props.onBlur(e)}}},{key:"handleHourChange",value:function(e){var t=this;if(F.default.validNumericInput(e.target.value)){var i=e.target.value,n=this.state.hour,a=F.default.getVariantFromLocale(this.props),u=a===F.default.FORMAT_12_HOUR?12:23;if(!(i===n||i.length>2||Number(i)>u)){if(i.length>=n.length){var s=["3","4","5","6","7","8","9"];a===F.default.FORMAT_12_HOUR&&s.push("2"),s.indexOf(i)>-1&&(i="0".concat(i))}"00"===i&&a===F.default.FORMAT_12_HOUR&&(i="12");this.handleValueChange(e,F.default.inputType.HOUR,i,this.state.meridiem,(function(){2===i.length&&t.minuteInput.focus()}))}}else this.handleInvalidInputChange()}},{key:"handleMinuteChange",value:function(e){var t=this;if(F.default.validNumericInput(e.target.value)){var i=e.target.value,n=this.state.minute;if(!(i===n||i.length>2||Number(i)>59)){if(i.length>=n.length){["6","7","8","9"].indexOf(i)>-1&&(i="0".concat(i))}this.handleValueChange(e,F.default.inputType.MINUTE,i,this.state.meridiem,(function(){2===i.length&&t.props.showSeconds&&t.secondInput.focus()}))}}else this.handleInvalidInputChange()}},{key:"handleSecondChange",value:function(e){if(F.default.validNumericInput(e.target.value)){var t=e.target.value,i=this.state.second;if(!(t===i||t.length>2||Number(t)>59)){if(t.length>=i.length){["6","7","8","9"].indexOf(t)>-1&&(t="0".concat(t))}this.handleValueChange(e,F.default.inputType.SECOND,t,this.state.meridiem)}}else this.handleInvalidInputChange()}},{key:"handleMeridiemButtonFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e)}},{key:"handleInputKeyDown",value:function(e,t){var i=this.state,n=i.hour,a=i.minute,u=i.second,s=i.meridiem,o=F.default.getVariantFromLocale(this.props);if("n"!==e.key&&"N"!==e.key)if("-"!==e.key&&"_"!==e.key||this.props.atMinDate)if("="!==e.key&&"+"!==e.key||this.props.atMaxDate){if(("a"===e.key||"A"===e.key)&&o===F.default.FORMAT_12_HOUR){var d=this.formatHour(n,s).concat(":",a).concat(this.props.showSeconds?":".concat(u):"");return s=this.anteMeridiem,void(F.default.validateTime(d,this.props.showSeconds)?this.handleValueChange(e,F.default.inputType.HOUR,n.toString(),s):this.setTime(e,"12","00","00",s))}if(("p"===e.key||"P"===e.key)&&o===F.default.FORMAT_12_HOUR){var l=this.formatHour(n,s).concat(":",a).concat(this.props.showSeconds?":".concat(u):"");return s=this.postMeridiem,void(F.default.validateTime(l,this.props.showSeconds)?this.handleValueChange(e,F.default.inputType.HOUR,n.toString(),s):this.setTime(e,"12","00","00",s))}t===F.default.inputType.HOUR?this.handleHourInputKeyDown(e):t===F.default.inputType.MINUTE?this.handleMinuteInputKeyDown(e):this.handleSecondInputKeyDown(e)}else{var r=this.formatHour(n,s).concat(":",a).concat(this.props.showSeconds?":".concat(u):"");if(F.default.validateTime(r,this.props.showSeconds))this.props.showSeconds?"59"===u?(u="00","59"===a?(a="00","23"===n?n="00":(o===F.default.FORMAT_12_HOUR&&"11"===n&&(s=s===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),n=F.default.incrementHour(n,o))):a=F.default.incrementMinute(a)):u=F.default.incrementSecond(u):this.props.showSeconds||("59"===a?(a="00","23"===n?n="00":(o===F.default.FORMAT_12_HOUR&&"11"===n&&(s=s===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),n=F.default.incrementHour(n,o))):a=F.default.incrementMinute(a)),this.setTime(e,n,a,u,s);else{var h=this.getCurrentTime(),c=h.hour,m=h.minute,p=h.meridiem;"59"===h.minute?(m="00","23"===c?c="00":(o===F.default.FORMAT_12_HOUR&&"11"===c&&(p=p===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),c=F.default.incrementHour(c,o))):m=F.default.incrementMinute(m),this.setTime(e,c,m,h.second,p)}}else{var f=this.formatHour(n,s).concat(":",a).concat(this.props.showSeconds?":".concat(u):"");if(F.default.validateTime(f,this.props.showSeconds))this.props.showSeconds?"0"===u||"00"===u?(u="59","0"===a||"00"===a?(a="59","0"===n||"00"===n?n="23":(o===F.default.FORMAT_12_HOUR&&"12"===n&&(s=s===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),n=F.default.decrementHour(n,o))):a=F.default.decrementMinute(a)):u=F.default.decrementSecond(u):this.props.showSeconds||("0"===a||"00"===a?(a="59","0"===n||"00"===n?n="23":(o===F.default.FORMAT_12_HOUR&&"12"===n&&(s=s===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),n=F.default.decrementHour(n,o))):a=F.default.decrementMinute(a)),this.setTime(e,n,a,u,s);else{var M=this.getCurrentTime(),v=M.hour,_=M.minute,g=M.meridiem;"0"===_||"00"===_?(_="59","0"===v||"00"===v?v="23":(o===F.default.FORMAT_12_HOUR&&"12"===v&&(g=g===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),v=F.default.decrementHour(v,o))):_=F.default.decrementMinute(_),this.setTime(e,v,_,M.second,g)}}else{var y=this.getCurrentTime();this.setTime(e,y.hour,y.minute,y.second,y.meridiem)}}},{key:"handleHourInputKeyDown",value:function(e){var t=this.state.hour,i=this.state.meridiem,n=t,a=F.default.getVariantFromLocale(this.props);e.keyCode===I.KEY_UP&&(t=F.default.incrementHour(t,a),a===F.default.FORMAT_12_HOUR&&"12"===t&&(i=i!==this.postMeridiem&&n?this.postMeridiem:this.anteMeridiem)),e.keyCode===I.KEY_DOWN&&(t=F.default.decrementHour(t,a),a===F.default.FORMAT_12_HOUR&&"11"===t&&(i=i===this.postMeridiem?this.anteMeridiem:this.postMeridiem)),t!==n&&this.handleValueChange(e,F.default.inputType.HOUR,t,i),e.keyCode===I.KEY_RIGHT&&this.focusMinuteFromHour(e)}},{key:"handleMinuteInputKeyDown",value:function(e){var t=this.state.minute,i=t;e.keyCode===I.KEY_UP&&(t=F.default.incrementMinute(t)),e.keyCode===I.KEY_DOWN&&(t=F.default.decrementMinute(t)),i!==t&&this.handleValueChange(e,F.default.inputType.MINUTE,t,this.state.meridiem),e.keyCode!==I.KEY_LEFT&&e.keyCode!==I.KEY_DELETE&&e.keyCode!==I.KEY_BACK_SPACE||this.focusHour(e),e.keyCode===I.KEY_RIGHT&&this.props.showSeconds&&this.focusSecondFromMinute(e)}},{key:"handleSecondInputKeyDown",value:function(e){var t=this.state.second,i=t;e.keyCode===I.KEY_UP&&(t=F.default.incrementSecond(t)),e.keyCode===I.KEY_DOWN&&(t=F.default.decrementSecond(t)),i!==t&&this.handleValueChange(e,F.default.inputType.SECOND,t,this.state.meridiem),e.keyCode!==I.KEY_LEFT&&e.keyCode!==I.KEY_DELETE&&e.keyCode!==I.KEY_BACK_SPACE||this.focusMinuteFromSecond(e)}},{key:"handleValueChange",value:function(e,t,i,n,a){if(t===F.default.inputType.HOUR?this.setState({hour:i,meridiem:n,hourInitialFocused:!1},a):t===F.default.inputType.MINUTE?this.setState({minute:i,minuteInitialFocused:!1},a):this.setState({second:i,secondInitialFocused:!1},a),this.props.onChange&&1!==i.length){var u=t===F.default.inputType.HOUR?i:this.state.hour,s=t===F.default.inputType.MINUTE?i:this.state.minute,o=t===F.default.inputType.SECOND?i:this.state.second;""===u&&""===s&&""===o?this.props.onChange(e,""):this.props.onChange(e,this.formatHour(u,n).concat(":",s).concat(this.props.showSeconds?":".concat(o):""),n)}}},{key:"handleMeridiemButtonChange",value:function(e,t){this.handleValueChange(e,F.default.inputType.HOUR,this.state.hour.toString(),t)}},{key:"a11yLabel",get:function(){var e=this.props,t=e.a11yLabel,i=e.intl;return t||i.formatMessage({id:"Terra.timeInput.a11yLabelDefault"})}},{key:"getCurrentTime",value:function(){var e=new Date,t=(e.getMinutes()<10?"0":"")+e.getMinutes(),i=(e.getSeconds()<10?"0":"")+e.getSeconds(),n=(e.getHours()<10?"0":"")+e.getHours(),a="";if(F.default.getVariantFromLocale(this.props)===F.default.FORMAT_12_HOUR){var u=F.default.parseTwelveHourTime(n,this.anteMeridiem,this.postMeridiem);n=u.hourString,a=u.meridiem}return{minute:t,second:i,hour:n,meridiem:a}}},{key:"setTime",value:function(e,t,i,n,a){this.setState({hour:t,meridiem:a,hourInitialFocused:!1,minute:i,minuteInitialFocused:!1,second:n,secondInitialFocused:!1}),this.props.onChange&&this.props.onChange(e,this.formatHour(t,a).concat(":",i).concat(this.props.showSeconds?":".concat(n):""),a)}},{key:"focusMinuteFromHour",value:function(e){0!==this.state.hour.length&&this.state.hour.length!==this.hourInput.selectionEnd||(this.minuteInput.focus(),this.minuteInput.setSelectionRange(0,0),e.preventDefault())}},{key:"focusHour",value:function(e){0===this.minuteInput.selectionEnd&&(this.hourInput.focus(),this.state.hour&&(this.hourInput.setSelectionRange(this.state.hour.length,this.state.hour.length),e.preventDefault()))}},{key:"focusSecondFromMinute",value:function(e){0!==this.state.minute.length&&this.state.minute.length!==this.minuteInput.selectionEnd||!this.secondInput||(this.secondInput.focus(),this.state.second&&(this.secondInput.setSelectionRange(0,0),e.preventDefault()))}},{key:"focusMinuteFromSecond",value:function(e){0===this.secondInput.selectionEnd&&(this.minuteInput.focus(),this.state.minute&&(this.minuteInput.setSelectionRange(this.state.minute.length,this.state.minute.length),e.preventDefault()))}},{key:"formatHour",value:function(e,t){if(!e)return e;var i=parseInt(e,10);F.default.getVariantFromLocale(this.props)===F.default.FORMAT_12_HOUR&&(t===this.postMeridiem&&i<12?i+=12:t===this.anteMeridiem&&12===i&&(i=0));var n=i.toString();return n.length<2&&(n="0".concat(n)),n}},{key:"render",value:function(){var e=this,t=this.props,i=(t.a11yLabel,t.atMaxDate,t.atMinDate,t.disabled),n=t.inputAttributes,a=t.minuteAttributes,o=t.hourAttributes,d=t.intl,l=t.isIncomplete,r=t.isInvalid,h=t.isInvalidMeridiem,c=(t.onBlur,t.onChange,t.onFocus,t.name),m=t.refCallback,f=t.required,v=t.secondAttributes,_=t.showSeconds,y=(t.value,t.variant,(0,s.default)(t,R)),T=E(["meridiem-button",{"is-invalid":h&&this.state.meridiem===this.anteMeridiem}]),I=E(["meridiem-button",{"is-invalid":h&&this.state.meridiem===this.postMeridiem}]),C=F.default.getVariantFromLocale(this.props),k="";if(this.state.hour.length>0||this.state.minute.length>0||this.state.second.length>0&&_){var w=parseInt(this.state.hour,10);C===F.default.FORMAT_12_HOUR&&this.state.meridiem===this.postMeridiem&&(w+=12),k="T".concat(w,":",this.state.minute),_&&(k=k.concat(":",this.state.second))}var D=this.context,B=(0,M.default)(E({disabled:i},"time-input",{"is-focused":this.state.isFocused},{"is-invalid":r},{"is-incomplete":l&&f&&!r&&!h}),y.className),U=E(["time-input-hour",{"with-second":_},{"initial-focus":this.state.hourInitialFocused}]),A=E(["time-input-minute",{"with-second":_},{"initial-focus":this.state.minuteInitialFocused}]),K=E(["time-input-second",{"initial-focus":this.state.secondInitialFocused}]);n.isInvalid=r,n.disabled=i,n.required=f;var N=F.default.getA11YTimeValue(this.props,this.state,this.postMeridiem),L=d.formatMessage({id:"Terra.timePicker.hotKey"}),V=d.formatMessage({id:"Terra.timeInput.descriptionMinute"}),x=d.formatMessage({id:"Terra.timeInput.descriptionSecond"});return p.default.createElement("div",(0,u.default)({},y,{ref:this.timeInputContainer,className:E("time-input-container",D.className)}),p.default.createElement("div",{className:B,role:"group","aria-label":this.a11yLabel},p.default.createElement(S.default,{value:N,readThis:d.formatMessage({id:"Terra.timeInput.labeledTextValue"},{a11yLabel:this.a11yLabel,a11yTimeValue:N})}),p.default.createElement("input",{type:"hidden",name:c,value:k}),p.default.createElement(H.default,(0,u.default)({},n,o,{label:d.formatMessage({id:"Terra.timeInput.hourLabel"},{a11yLabel:this.a11yLabel}),refCallback:function(t){e.hourInput=t,m&&m(t)},className:U,type:"text",value:this.state.hour,name:"terra-time-hour-".concat(c),maxLength:"2",onChange:this.handleHourChange,onKeyDown:function(t){return e.handleInputKeyDown(t,F.default.inputType.HOUR)},onFocus:this.handleHourFocus,onBlur:this.handleHourBlur,size:"2",pattern:"\\d*",description:"".concat(C===F.default.FORMAT_12_HOUR?d.formatMessage({id:"Terra.timeInput.hourDescriptionTwelve"}):d.formatMessage({id:"Terra.timeInput.hourDescriptionTwentyFour"}),", ").concat(L)})),p.default.createElement(O.default,{className:E("time-spacer")}),p.default.createElement(H.default,(0,u.default)({},n,a,{refCallback:function(t){e.minuteInput=t},label:d.formatMessage({id:"Terra.timeInput.minutes"}),className:A,type:"text",value:this.state.minute,name:"terra-time-minute-".concat(c),maxLength:"2",onChange:this.handleMinuteChange,onKeyDown:function(t){return e.handleInputKeyDown(t,F.default.inputType.MINUTE)},onFocus:this.handleMinuteFocus,onBlur:this.handleMinuteBlur,size:"2",pattern:"\\d*",description:"".concat(V,", ").concat(L)})),_&&p.default.createElement(p.default.Fragment,null,p.default.createElement(O.default,{className:E("time-spacer")}),p.default.createElement(H.default,(0,u.default)({},n,v,{refCallback:function(t){e.secondInput=t},label:d.formatMessage({id:"Terra.timeInput.seconds"}),className:K,type:"text",value:this.state.second,name:"terra-time-second-".concat(c),maxLength:"2",onChange:this.handleSecondChange,onKeyDown:function(t){return e.handleInputKeyDown(t,F.default.inputType.SECOND)},onFocus:this.handleSecondFocus,onBlur:this.handleSecondBlur,size:"2",pattern:"\\d*",description:"".concat(x,", ").concat(L)})))),C===F.default.FORMAT_12_HOUR&&p.default.createElement(g.default,{selectedKeys:[this.state.meridiem],onChange:this.handleMeridiemButtonChange,className:E("meridiem-button-group")},p.default.createElement(g.default.Button,{key:this.anteMeridiem,className:T,text:this.anteMeridiem,onBlur:this.handleMeridiemButtonBlur,onFocus:this.handleMeridiemButtonFocus,isDisabled:i}),p.default.createElement(g.default.Button,{key:this.postMeridiem,className:I,text:this.postMeridiem,onBlur:this.handleMeridiemButtonBlur,onFocus:this.handleMeridiemButtonFocus,isDisabled:i})),p.default.createElement("div",{"aria-hidden":!0,className:E("format-text")},_?d.formatMessage({id:"Terra.timeInput.maskHourMinuteSecond"}):d.formatMessage({id:"Terra.timeInput.maskHourMinute"})),p.default.createElement(b.default,{"aria-atomic":"true","aria-relevant":"all","aria-live":"assertive",refCallback:this.setVisuallyHiddenComponent}))}}]),t}(p.default.Component);A.propTypes=B,A.defaultProps=U,A.contextType=_.default;t.default=(0,y.injectIntl)(A)},59051:function(e,t,i){var n=i(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i(67294)),u=i(25387),s=n(i(19845)),o=n(i(45697)),d=n(i(56636)),l={intl:o.default.shape({formatMessage:o.default.func}).isRequired},r=s.default.bind(d.default);function h(e){var t=e.intl.formatMessage({id:"Terra.timeInput.timeSpacer"});return a.default.createElement("span",{"aria-hidden":!0,className:r("time-spacer")},t)}h.propTypes=l;t.default=(0,u.injectIntl)(h)},56636:function(e,t,i){i.r(t),t.default={"clinical-lowlight-theme":"TimeInput-module__clinical-lowlight-theme___H8tjT","orion-fusion-theme":"TimeInput-module__orion-fusion-theme___+Ly3n","time-input-container":"TimeInput-module__time-input-container___gKSyw","format-text":"TimeInput-module__format-text___0KWIL","time-input":"TimeInput-module__time-input___1r0Ug","time-input-hour":"TimeInput-module__time-input-hour___NHCBU","time-input-minute":"TimeInput-module__time-input-minute___7qHsa","time-input-second":"TimeInput-module__time-input-second___O94g7","is-focused":"TimeInput-module__is-focused___MS44C",disabled:"TimeInput-module__disabled___SMkbh","is-invalid":"TimeInput-module__is-invalid___rOrM9","initial-focus":"TimeInput-module__initial-focus___fsn0T","with-second":"TimeInput-module__with-second___v43+8","is-incomplete":"TimeInput-module__is-incomplete___XWkeP","time-spacer":"TimeInput-module__time-spacer___E1QSK","meridiem-button-group":"TimeInput-module__meridiem-button-group___pOxch","meridiem-button":"TimeInput-module__meridiem-button___WF2tV"}}}]);