"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[43671],{43671:function(e,t,n){var i=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n(10434)),r=i(n(70215)),o=i(n(56690)),l=i(n(89728)),s=i(n(66115)),d=i(n(61655)),c=i(n(94993)),f=i(n(73808)),h=i(n(67294)),m=i(n(45697)),p=i(n(94184)),v=i(n(47166)),M=i(n(47341)),g=i(n(76367)),_=n(25387),T=n(55877),y=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=H(t);if(n&&n.has(e))return n.get(e);var i={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=u?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(i,r,o):i[r]=e[r]}i.default=e,n&&n.set(e,i);return i}(n(51051)),b=i(n(90592)),S=i(n(56636)),I=i(n(46833)),O=i(n(59051)),R=i(n(36654)),F=["a11yLabel","atMaxDate","atMinDate","disabled","inputAttributes","minuteAttributes","hourAttributes","intl","isIncomplete","isInvalid","isInvalidMeridiem","onBlur","onChange","onFocus","name","refCallback","required","secondAttributes","showSeconds","value","variant"];function H(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(H=function(e){return e?n:t})(e)}function E(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,f.default)(e);if(t){var a=(0,f.default)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,c.default)(this,n)}}var k=v.default.bind(S.default),U={a11yLabel:m.default.string,atMaxDate:m.default.bool,atMinDate:m.default.bool,disabled:m.default.bool,inputAttributes:m.default.object,hourAttributes:m.default.object,intl:m.default.shape({formatMessage:m.default.func}).isRequired,isIncomplete:m.default.bool,isInvalid:m.default.bool,isInvalidMeridiem:m.default.bool,minuteAttributes:m.default.object,name:m.default.string.isRequired,onBlur:m.default.func,onChange:m.default.func,onFocus:m.default.func,refCallback:m.default.func,required:m.default.bool,secondAttributes:m.default.object,showSeconds:m.default.bool,value:m.default.string,variant:m.default.oneOf([b.default.FORMAT_12_HOUR,b.default.FORMAT_24_HOUR])},w={atMaxDate:!1,atMinDate:!1,disabled:!1,inputAttributes:{},isIncomplete:!1,isInvalid:!1,isInvalidMeridiem:!1,minuteAttributes:{},hourAttributes:{},onBlur:null,onChange:null,onFocus:void 0,refCallback:void 0,required:!1,secondAttributes:{},showSeconds:!1,value:void 0,variant:b.default.FORMAT_24_HOUR},C=function(e){(0,d.default)(n,e);var t=E(n);function n(e){var i;(0,o.default)(this,n);var a=(i=t.call(this,e)).props.value,u=i.props.showSeconds;a&&!b.default.validateTime(a,u)&&(a=void 0),i.uuid=(0,T.v4)(),i.timeInputContainer=h.default.createRef(),i.handleHourChange=i.handleHourChange.bind((0,s.default)(i)),i.handleMinuteChange=i.handleMinuteChange.bind((0,s.default)(i)),i.handleSecondChange=i.handleSecondChange.bind((0,s.default)(i)),i.handleInputKeyDown=i.handleInputKeyDown.bind((0,s.default)(i)),i.handleHourInputKeyDown=i.handleHourInputKeyDown.bind((0,s.default)(i)),i.handleMinuteInputKeyDown=i.handleMinuteInputKeyDown.bind((0,s.default)(i)),i.handleSecondInputKeyDown=i.handleSecondInputKeyDown.bind((0,s.default)(i)),i.handleFocus=i.handleFocus.bind((0,s.default)(i)),i.handleHourFocus=i.handleHourFocus.bind((0,s.default)(i)),i.handleMinuteFocus=i.handleMinuteFocus.bind((0,s.default)(i)),i.handleSecondFocus=i.handleSecondFocus.bind((0,s.default)(i)),i.handleHourBlur=i.handleHourBlur.bind((0,s.default)(i)),i.handleMinuteBlur=i.handleMinuteBlur.bind((0,s.default)(i)),i.handleSecondBlur=i.handleSecondBlur.bind((0,s.default)(i)),i.handleMeridiemButtonFocus=i.handleMeridiemButtonFocus.bind((0,s.default)(i)),i.handleMeridiemButtonBlur=i.handleMeridiemButtonBlur.bind((0,s.default)(i)),i.handleMeridiemButtonChange=i.handleMeridiemButtonChange.bind((0,s.default)(i)),i.getCurrentTime=i.getCurrentTime.bind((0,s.default)(i)),i.setTime=i.setTime.bind((0,s.default)(i));var r,l=b.default.splitHour(a);if(b.default.getVariantFromLocale(e)===b.default.FORMAT_12_HOUR)if(i.anteMeridiem=i.props.intl.formatMessage({id:"Terra.timeInput.am"}),i.postMeridiem=i.props.intl.formatMessage({id:"Terra.timeInput.pm"}),l){var d=b.default.parseTwelveHourTime(l,i.anteMeridiem,i.postMeridiem);l=d.hourString,r=d.meridiem}else r=i.anteMeridiem;return i.props.variant===b.default.FORMAT_12_HOUR&&b.default.getVariantFromLocale(e)===b.default.FORMAT_24_HOUR&&(i.anteMeridiem="",i.postMeridiem=""),i.state={hour:l,minute:b.default.splitMinute(a),second:b.default.splitSecond(a),isFocused:!1,meridiem:r,hourInitialFocused:!1,minuteInitialFocused:!1,secondInitialFocused:!1},i}return(0,l.default)(n,[{key:"componentDidUpdate",value:function(e){var t=b.default.getVariantFromLocale(this.props);if(this.props.value!==e.value||t!==b.default.getVariantFromLocale(e)){var n=b.default.splitHour(this.props.value),i=this.state.meridiem;if(t===b.default.FORMAT_12_HOUR&&(this.anteMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.am"}),this.postMeridiem=this.props.intl.formatMessage({id:"Terra.timeInput.pm"}),n)){var a=b.default.parseTwelveHourTime(n,this.anteMeridiem,this.postMeridiem);n=a.hourString,i=a.meridiem}this.setState({hour:n,minute:b.default.splitMinute(this.props.value),second:b.default.splitSecond(this.props.value),meridiem:i,atMaxDate:this.props.atMaxDate,atMinDate:this.props.atMinDate})}}},{key:"handleFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e),this.setState({isFocused:!0})}},{key:"handleSecondFocus",value:function(e){this.handleFocus(e),this.setState({secondInitialFocused:!0}),b.default.isConsideredMobileDevice()||this.secondInput.setSelectionRange(0,this.secondInput.value.length)}},{key:"handleMinuteFocus",value:function(e){this.handleFocus(e),this.setState({minuteInitialFocused:!0}),b.default.isConsideredMobileDevice()||this.minuteInput.setSelectionRange(0,this.minuteInput.value.length)}},{key:"handleHourFocus",value:function(e){this.handleFocus(e),this.setState({hourInitialFocused:!0}),b.default.isConsideredMobileDevice()||this.hourInput.setSelectionRange(0,this.hourInput.value.length)}},{key:"handleHourBlur",value:function(e){this.handleBlur(e,b.default.inputType.HOUR),this.setState({hourInitialFocused:!1})}},{key:"handleMinuteBlur",value:function(e){this.handleBlur(e,b.default.inputType.MINUTE),this.setState({minuteInitialFocused:!1})}},{key:"handleSecondBlur",value:function(e){this.handleBlur(e,b.default.inputType.SECOND),this.setState({secondInitialFocused:!1})}},{key:"handleMeridiemButtonBlur",value:function(e){this.handleBlur(e,b.default.inputType.MERIDIEM)}},{key:"handleBlur",value:function(e,t){if(this.setState({isFocused:!1}),t===b.default.inputType.HOUR||t===b.default.inputType.MINUTE||t===b.default.inputType.SECOND){var n=e.target.value;1===n.length&&(n=b.default.getVariantFromLocale(this.props)===b.default.FORMAT_12_HOUR&&t===b.default.inputType.HOUR&&"0"===n?"12":"0".concat(n),this.handleValueChange(e,t,n,this.state.meridiem))}if(this.props.onBlur){var i=e.relatedTarget?e.relatedTarget:document.activeElement;this.timeInputContainer.current.contains(i)||this.props.onBlur(e)}}},{key:"handleHourChange",value:function(e){var t=this;if(b.default.validNumericInput(e.target.value)){var n=e.target.value,i=this.state.hour,a=b.default.getVariantFromLocale(this.props),u=a===b.default.FORMAT_12_HOUR?12:23;if(!(n===i||n.length>2||Number(n)>u)){if(n.length>=i.length){var r=["3","4","5","6","7","8","9"];a===b.default.FORMAT_12_HOUR&&r.push("2"),r.indexOf(n)>-1&&(n="0".concat(n))}"00"===n&&a===b.default.FORMAT_12_HOUR&&(n="12");this.handleValueChange(e,b.default.inputType.HOUR,n,this.state.meridiem,(function(){2===n.length&&t.minuteInput.focus()}))}}}},{key:"handleMinuteChange",value:function(e){var t=this;if(b.default.validNumericInput(e.target.value)){var n=e.target.value,i=this.state.minute;if(!(n===i||n.length>2||Number(n)>59)){if(n.length>=i.length){["6","7","8","9"].indexOf(n)>-1&&(n="0".concat(n))}this.handleValueChange(e,b.default.inputType.MINUTE,n,this.state.meridiem,(function(){2===n.length&&t.props.showSeconds&&t.secondInput.focus()}))}}}},{key:"handleSecondChange",value:function(e){if(b.default.validNumericInput(e.target.value)){var t=e.target.value,n=this.state.second;if(!(t===n||t.length>2||Number(t)>59)){if(t.length>=n.length){["6","7","8","9"].indexOf(t)>-1&&(t="0".concat(t))}this.handleValueChange(e,b.default.inputType.SECOND,t,this.state.meridiem)}}}},{key:"handleMeridiemButtonFocus",value:function(e){this.props.onFocus&&!this.timeInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e)}},{key:"handleInputKeyDown",value:function(e,t){var n=this.state.second,i=this.state,a=i.hour,u=i.minute,r=i.meridiem,o=b.default.getVariantFromLocale(this.props);if("n"!==e.key&&"N"!==e.key)if("-"!==e.key&&"_"!==e.key||this.props.atMinDate)if("="!==e.key&&"+"!==e.key||this.props.atMaxDate){if(("a"===e.key||"A"===e.key)&&o===b.default.FORMAT_12_HOUR){var l=this.formatHour(a,r).concat(":",u).concat(this.props.showSeconds?":".concat(n):"");return r=this.anteMeridiem,void(b.default.validateTime(l,this.props.showSeconds)?this.handleValueChange(e,b.default.inputType.HOUR,a.toString(),r):this.setTime(e,"12","00","00",r))}if(("p"===e.key||"P"===e.key)&&o===b.default.FORMAT_12_HOUR){var s=this.formatHour(a,r).concat(":",u).concat(this.props.showSeconds?":".concat(n):"");return r=this.postMeridiem,void(b.default.validateTime(s,this.props.showSeconds)?this.handleValueChange(e,b.default.inputType.HOUR,a.toString(),r):this.setTime(e,"12","00","00",r))}t===b.default.inputType.HOUR?this.handleHourInputKeyDown(e):t===b.default.inputType.MINUTE?this.handleMinuteInputKeyDown(e):this.handleSecondInputKeyDown(e)}else{var d=this.formatHour(a,r).concat(":",u).concat(this.props.showSeconds?":".concat(n):"");if(b.default.validateTime(d,this.props.showSeconds))"59"===u?(u="00","23"===a?a="00":(o===b.default.FORMAT_12_HOUR&&"11"===a&&(r=r===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),a=b.default.incrementHour(a,o))):u=b.default.incrementMinute(u),this.setTime(e,a,u,n,r);else{var c=this.getCurrentTime(),f=c.hour,h=c.minute,m=c.meridiem;"59"===c.minute?(h="00","23"===f?f="00":(o===b.default.FORMAT_12_HOUR&&"11"===f&&(m=m===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),f=b.default.incrementHour(f,o))):h=b.default.incrementMinute(h),this.setTime(e,f,h,c.second,m)}}else{var p=this.formatHour(a,r).concat(":",u).concat(this.props.showSeconds?":".concat(n):"");if(b.default.validateTime(p,this.props.showSeconds))"0"===u||"00"===u?(u="59","0"===a||"00"===a?a="23":(o===b.default.FORMAT_12_HOUR&&"12"===a&&(r=r===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),a=b.default.decrementHour(a,o))):u=b.default.decrementMinute(u),this.setTime(e,a,u,n,r);else{var v=this.getCurrentTime(),M=v.hour,g=v.minute,_=v.meridiem;"0"===g||"00"===g?(g="59","0"===M||"00"===M?M="23":(o===b.default.FORMAT_12_HOUR&&"12"===M&&(_=_===this.anteMeridiem?this.postMeridiem:this.anteMeridiem),M=b.default.decrementHour(M,o))):g=b.default.decrementMinute(g),this.setTime(e,M,g,v.second,_)}}else{var T=this.getCurrentTime();this.setTime(e,T.hour,T.minute,T.second,T.meridiem)}}},{key:"handleHourInputKeyDown",value:function(e){var t=this.state.hour,n=this.state.meridiem,i=t,a=b.default.getVariantFromLocale(this.props);e.keyCode===y.KEY_UP&&(t=b.default.incrementHour(t,a),a===b.default.FORMAT_12_HOUR&&"12"===t&&(n=n!==this.postMeridiem&&i?this.postMeridiem:this.anteMeridiem)),e.keyCode===y.KEY_DOWN&&(t=b.default.decrementHour(t,a),a===b.default.FORMAT_12_HOUR&&"11"===t&&(n=n===this.postMeridiem?this.anteMeridiem:this.postMeridiem)),t!==i&&this.handleValueChange(e,b.default.inputType.HOUR,t,n),e.keyCode===y.KEY_RIGHT&&this.focusMinuteFromHour(e)}},{key:"handleMinuteInputKeyDown",value:function(e){var t=this.state.minute,n=t;e.keyCode===y.KEY_UP&&(t=b.default.incrementMinute(t)),e.keyCode===y.KEY_DOWN&&(t=b.default.decrementMinute(t)),n!==t&&this.handleValueChange(e,b.default.inputType.MINUTE,t,this.state.meridiem),e.keyCode!==y.KEY_LEFT&&e.keyCode!==y.KEY_DELETE&&e.keyCode!==y.KEY_BACK_SPACE||this.focusHour(e),e.keyCode===y.KEY_RIGHT&&this.props.showSeconds&&this.focusSecondFromMinute(e)}},{key:"handleSecondInputKeyDown",value:function(e){var t=this.state.second,n=t;e.keyCode===y.KEY_UP&&(t=b.default.incrementSecond(t)),e.keyCode===y.KEY_DOWN&&(t=b.default.decrementSecond(t)),n!==t&&this.handleValueChange(e,b.default.inputType.SECOND,t,this.state.meridiem),e.keyCode!==y.KEY_LEFT&&e.keyCode!==y.KEY_DELETE&&e.keyCode!==y.KEY_BACK_SPACE||this.focusMinuteFromSecond(e)}},{key:"handleValueChange",value:function(e,t,n,i,a){if(t===b.default.inputType.HOUR?this.setState({hour:n,meridiem:i,hourInitialFocused:!1},a):t===b.default.inputType.MINUTE?this.setState({minute:n,minuteInitialFocused:!1},a):this.setState({second:n,secondInitialFocused:!1},a),this.props.onChange&&1!==n.length){var u=t===b.default.inputType.HOUR?n:this.state.hour,r=t===b.default.inputType.MINUTE?n:this.state.minute,o=t===b.default.inputType.SECOND?n:this.state.second;""===u&&""===r&&""===o?this.props.onChange(e,""):this.props.onChange(e,this.formatHour(u,i).concat(":",r).concat(this.props.showSeconds?":".concat(o):""))}}},{key:"handleMeridiemButtonChange",value:function(e,t){this.handleValueChange(e,b.default.inputType.HOUR,this.state.hour.toString(),t)}},{key:"a11yLabel",get:function(){var e=this.props,t=e.a11yLabel,n=e.intl;return t||n.formatMessage({id:"Terra.timeInput.a11yLabelDefault"})}},{key:"getCurrentTime",value:function(){var e=new Date,t=(e.getMinutes()<10?"0":"")+e.getMinutes(),n=(e.getSeconds()<10?"0":"")+e.getSeconds(),i=(e.getHours()<10?"0":"")+e.getHours(),a="";if(b.default.getVariantFromLocale(this.props)===b.default.FORMAT_12_HOUR){var u=b.default.parseTwelveHourTime(i,this.anteMeridiem,this.postMeridiem);i=u.hourString,a=u.meridiem}return{minute:t,second:n,hour:i,meridiem:a}}},{key:"setTime",value:function(e,t,n,i,a){this.setState({hour:t,meridiem:a,hourInitialFocused:!1,minute:n,minuteInitialFocused:!1,second:i,secondInitialFocused:!1}),this.props.onChange&&this.props.onChange(e,this.formatHour(t,a).concat(":",n).concat(this.props.showSeconds?":".concat(i):""))}},{key:"focusMinuteFromHour",value:function(e){0!==this.state.hour.length&&this.state.hour.length!==this.hourInput.selectionEnd||(this.minuteInput.focus(),this.minuteInput.setSelectionRange(0,0),e.preventDefault())}},{key:"focusHour",value:function(e){0===this.minuteInput.selectionEnd&&(this.hourInput.focus(),this.state.hour&&(this.hourInput.setSelectionRange(this.state.hour.length,this.state.hour.length),e.preventDefault()))}},{key:"focusSecondFromMinute",value:function(e){0!==this.state.minute.length&&this.state.minute.length!==this.minuteInput.selectionEnd||!this.secondInput||(this.secondInput.focus(),this.state.second&&(this.secondInput.setSelectionRange(0,0),e.preventDefault()))}},{key:"focusMinuteFromSecond",value:function(e){0===this.secondInput.selectionEnd&&(this.minuteInput.focus(),this.state.minute&&(this.minuteInput.setSelectionRange(this.state.minute.length,this.state.minute.length),e.preventDefault()))}},{key:"formatHour",value:function(e,t){if(!e)return e;var n=parseInt(e,10);b.default.getVariantFromLocale(this.props)===b.default.FORMAT_12_HOUR&&(t===this.postMeridiem&&n<12?n+=12:t===this.anteMeridiem&&12===n&&(n=0));var i=n.toString();return i.length<2&&(i="0".concat(i)),i}},{key:"render",value:function(){var e=this,t=this.props,n=(t.a11yLabel,t.atMaxDate,t.atMinDate,t.disabled),i=t.inputAttributes,a=t.minuteAttributes,o=t.hourAttributes,l=t.intl,s=t.isIncomplete,d=t.isInvalid,c=t.isInvalidMeridiem,f=(t.onBlur,t.onChange,t.onFocus,t.name),m=t.refCallback,v=t.required,M=t.secondAttributes,_=t.showSeconds,T=(t.value,t.variant,(0,r.default)(t,F)),y=k(["meridiem-button",{"is-invalid":c&&this.state.meridiem===this.anteMeridiem}]),S=k(["meridiem-button",{"is-invalid":c&&this.state.meridiem===this.postMeridiem}]),H=b.default.getVariantFromLocale(this.props),E="";if(this.state.hour.length>0||this.state.minute.length>0||this.state.second.length>0&&_){var U=parseInt(this.state.hour,10);H===b.default.FORMAT_12_HOUR&&this.state.meridiem===this.postMeridiem&&(U+=12),E="T".concat(U,":",this.state.minute),_&&(E=E.concat(":",this.state.second))}var w=this.context,C=(0,p.default)(k({disabled:n},"time-input",{"is-focused":this.state.isFocused},{"is-invalid":d},{"is-incomplete":s&&v&&!d&&!c}),T.className),N=k(["time-input-hour",{"with-second":_},{"initial-focus":this.state.hourInitialFocused}]),B=k(["time-input-minute",{"with-second":_},{"initial-focus":this.state.minuteInitialFocused}]),D=k(["time-input-second",{"initial-focus":this.state.secondInitialFocused}]);i.isInvalid=d,i.disabled=n,i.required=v;var A=b.default.getA11YTimeValue(this.props,this.state,this.postMeridiem);return h.default.createElement("div",(0,u.default)({},T,{ref:this.timeInputContainer,className:k("time-input-container",w.className)}),h.default.createElement("div",{className:C,role:"group","aria-label":this.a11yLabel},h.default.createElement(R.default,{value:A,readThis:l.formatMessage({id:"Terra.timeInput.labeledTextValue"},{a11yLabel:this.a11yLabel,a11yTimeValue:A})}),h.default.createElement("input",{type:"hidden",name:f,value:E}),h.default.createElement(I.default,(0,u.default)({},i,o,{label:l.formatMessage({id:"Terra.timeInput.hourLabel"},{a11yLabel:this.a11yLabel}),refCallback:function(t){e.hourInput=t,m&&m(t)},className:N,type:"text",value:this.state.hour,name:"terra-time-hour-".concat(f),maxLength:"2",onChange:this.handleHourChange,onKeyDown:function(t){return e.handleInputKeyDown(t,b.default.inputType.HOUR)},onFocus:this.handleHourFocus,onBlur:this.handleHourBlur,size:"2",pattern:"\\d*",description:H===b.default.FORMAT_12_HOUR?l.formatMessage({id:"Terra.timeInput.hourDescriptionTwelve"}):l.formatMessage({id:"Terra.timeInput.hourDescriptionTwentyFour"})})),h.default.createElement(O.default,{className:k("time-spacer")}),h.default.createElement(I.default,(0,u.default)({},i,a,{refCallback:function(t){e.minuteInput=t},label:l.formatMessage({id:"Terra.timeInput.minutes"}),className:B,type:"text",value:this.state.minute,name:"terra-time-minute-".concat(f),maxLength:"2",onChange:this.handleMinuteChange,onKeyDown:function(t){return e.handleInputKeyDown(t,b.default.inputType.MINUTE)},onFocus:this.handleMinuteFocus,onBlur:this.handleMinuteBlur,size:"2",pattern:"\\d*",description:l.formatMessage({id:"Terra.timeInput.descriptionMinute"})})),_&&h.default.createElement(h.default.Fragment,null,h.default.createElement(O.default,{className:k("time-spacer")}),h.default.createElement(I.default,(0,u.default)({},i,M,{refCallback:function(t){e.secondInput=t},label:l.formatMessage({id:"Terra.timeInput.seconds"}),className:D,type:"text",value:this.state.second,name:"terra-time-second-".concat(f),maxLength:"2",onChange:this.handleSecondChange,onKeyDown:function(t){return e.handleInputKeyDown(t,b.default.inputType.SECOND)},onFocus:this.handleSecondFocus,onBlur:this.handleSecondBlur,size:"2",pattern:"\\d*",description:l.formatMessage({id:"Terra.timeInput.descriptionSecond"})})))),H===b.default.FORMAT_12_HOUR&&h.default.createElement(g.default,{selectedKeys:[this.state.meridiem],onChange:this.handleMeridiemButtonChange,className:k("meridiem-button-group")},h.default.createElement(g.default.Button,{key:this.anteMeridiem,className:y,text:this.anteMeridiem,onBlur:this.handleMeridiemButtonBlur,onFocus:this.handleMeridiemButtonFocus,isDisabled:n}),h.default.createElement(g.default.Button,{key:this.postMeridiem,className:S,text:this.postMeridiem,onBlur:this.handleMeridiemButtonBlur,onFocus:this.handleMeridiemButtonFocus,isDisabled:n})),h.default.createElement("div",{"aria-hidden":!0,className:k("format-text")},_?l.formatMessage({id:"Terra.timeInput.maskHourMinuteSecond"}):l.formatMessage({id:"Terra.timeInput.maskHourMinute"})))}}]),n}(h.default.Component);C.propTypes=U,C.defaultProps=w,C.contextType=M.default;var N=(0,_.injectIntl)(C);t.default=N},90592:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(56690)),u=i(n(89728)),r=i(n(76024)),o=i(n(8557)),l=i(n(38245)),s=function(){function e(){(0,a.default)(this,e)}return(0,u.default)(e,null,[{key:"validNumericInput",value:function(e){return 0===e.length||/^\d+$/.test(e)}},{key:"parseTwelveHourTime",value:function(e,t,n){var i={hourString:e},a=parseInt(e,10);return a>=12?(i.meridiem=n,a>12&&(a-=12)):(i.meridiem=t,0===a&&(a=12)),i.hourString=a<10?"0".concat(a.toString()):a.toString(),i}},{key:"incrementHour",value:function(e,t){var n=t===this.FORMAT_12_HOUR?12:23;if(e){var i=Number(e);return i<n?(i+=1)<10?"0".concat(i.toString()):i.toString():t===this.FORMAT_12_HOUR?"01":e}return t===this.FORMAT_12_HOUR?"12":"00"}},{key:"decrementHour",value:function(e,t){var n=t===this.FORMAT_12_HOUR?1:0;if(e){var i=Number(e);return i>n?(i-=1)<10?"0".concat(i.toString()):i.toString():t===this.FORMAT_12_HOUR?"12":e}return t===this.FORMAT_12_HOUR?"12":"00"}},{key:"incrementMinute",value:function(e){if(e){var t=Number(e);return t<59?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"decrementMinute",value:function(e){if(e){var t=Number(e);return t>0?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"incrementSecond",value:function(e){if(e){var t=Number(e);return t<59?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"decrementSecond",value:function(e){if(e){var t=Number(e);return t>0?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return"00"}},{key:"splitHour",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length){var n=Number(t[0]);if(n>=0&&n<24)return 1===t[0].length?"0".concat(t[0]):t[0]}return""}return""}},{key:"splitMinute",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length>1){var n=Number(t[1]);if(n>=0&&n<60)return 1===t[1].length?"0".concat(t[1]):t[1]}return""}return""}},{key:"splitSecond",value:function(e){if("string"==typeof e){var t=e.split(":");if(t.length>2){var n=Number(t[2]);if(n>=0&&n<60)return 1===t[2].length?"0".concat(t[2]):t[2]}return""}return""}},{key:"is12Hour",value:function(t){return e.getVariantFromLocale(t)===e.FORMAT_12_HOUR}},{key:"isPM",value:function(t,n,i){return e.is12Hour(t)&&n.meridiem===i}},{key:"deprecatedAndDangerousKindOfISOValueButNotReally",value:function(t,n,i){var a=n.hour,u=n.minute,r=n.second,o=t.showSeconds,l="";if(a.length>0||u.length>0||r.length>0&&o){var s=parseInt(a,10);e.isPM(t,n,i)&&(s+=12),l="T".concat(s,":",u),o&&(l=l.concat(":",r))}return l}},{key:"getA11YTimeValue",value:function(t,n,i){var a,u=n.meridiem,s=t.intl,d=t.showSeconds,c=e.is12Hour(t);a=e.isPM(t,n,i)?r.default.TWELVE_HOUR_PM:c?r.default.TWELVE_HOUR_AM:r.default.TWENTY_FOUR_HOUR;var f=r.default.fromString(n.hour,a),h=o.default.fromString(n.minute),m=l.default.fromString(n.second);if(!([f,h].includes(void 0)||d&&void 0===m))return c&&d?s.formatMessage({id:"Terra.timeInput.textValueTwelveHourMinuteSecond"},{hour:f.toTwelveHourString(),minute:h,second:m,meridiem:u}):c?s.formatMessage({id:"Terra.timeInput.textValueTwelveHourMinute"},{hour:f.toTwelveHourString(),minute:h,meridiem:u}):d?s.formatMessage({id:"Terra.timeInput.textValueTwentyFourHourMinuteSecond"},{hour:f,minute:h,second:m}):s.formatMessage({id:"Terra.timeInput.textValueTwentyFourHourMinute"},{hour:f,minute:h})}},{key:"validateTime",value:function(e,t){return t?/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/.test(e):/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/.test(e)}},{key:"getVariantFromLocale",value:function(e){var t=e.intl,n=e.variant;return["de","es-ES","es","fi-FI","fr-FR","fr","nl-BE","nl","pt-BR","pt","sv-SE","sv"].includes(t.locale)?this.FORMAT_24_HOUR:n}}]),e}();s.inputType={HOUR:0,MINUTE:1,MERIDIEM:2,SECOND:3},s.isConsideredMobileDevice=function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)},Object.defineProperty(s,"FORMAT_12_HOUR",{value:"12-hour",configurable:!1,enumerable:!0,writable:!1}),Object.defineProperty(s,"FORMAT_24_HOUR",{value:"24-hour",configurable:!1,enumerable:!0,writable:!1});var d=s;t.default=d},46833:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(10434)),u=i(n(70215)),r=i(n(29270)),o=i(n(45697)),l=i(n(67294)),s=i(n(55142)),d=n(55877),c=["value","label","description","disabled","isInvalid","showIsInvalid"],f={value:o.default.string,label:o.default.string,description:o.default.string,disabled:o.default.bool,isInvalid:o.default.bool,showIsInvalid:o.default.bool};function h(e){var t=e.value,n=e.label,i=e.description,o=e.disabled,f=e.isInvalid,h=e.showIsInvalid,m=(0,u.default)(e,c),p=(0,d.v4)(),v="".concat(p,"-label"),M="".concat(p,"-description");return l.default.createElement(l.default.Fragment,null,t&&l.default.createElement(r.default,{text:n,id:v}),l.default.createElement(s.default,(0,a.default)({},m,{value:t,disabled:o,"aria-disabled":o,isInvalid:h&&f,"aria-invalid":f,"aria-labelledby":t?v:void 0,"aria-label":t?void 0:n,"aria-describedby":M})),l.default.createElement(r.default,{id:M,text:i}))}h.propTypes=f,h.defaultProps={isInvalid:!1,showIsInvalid:!1};var m=h;t.default=m},36654:function(e,t,n){var i=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var i={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var o=u?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(i,r,o):i[r]=e[r]}i.default=e,n&&n.set(e,i);return i}(n(67294)),o=i(n(29270)),l=i(n(45697));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d={value:l.default.string,readThis:l.default.string};function c(e){var t=(0,r.useState)(void 0),n=(0,u.default)(t,2),i=n[0],a=n[1],l=(0,r.useState)(void 0),s=(0,u.default)(l,2),d=s[0],c=s[1],f=(0,r.useState)(e.value),h=(0,u.default)(f,2),m=h[0],p=h[1],v=function(){a("status"),c("polite"),p(e.value)};return e.value&&!m||e.value&&m&&e.value!==m?v():!e.value&&m&&(a(void 0),c(void 0),p(void 0)),r.default.createElement(o.default,{"aria-hidden":!e.value,text:e.readThis,"aria-live":d,role:i})}c.propTypes=d;var f=c;t.default=f},76024:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=i(n(861)),r=i(n(56690)),o=i(n(89728)),l=i(n(38416)),s=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.TWENTY_FOUR_HOUR;switch((0,r.default)(this,e),n){case e.TWENTY_FOUR_HOUR:if(!e.NUMBERS.includes(t))throw new Error("Unrecognized number. Must be one of ".concat(e.NUMBERS));this.value=t;break;case e.TWELVE_HOUR_AM:if(!e.NUMBERS_12.includes(t))throw new Error("Unrecognized number. Must be one of ".concat(e.NUMBERS_12));this.value=e.NUMBERS[e.NUMBERS_12.indexOf(t)];break;case e.TWELVE_HOUR_PM:if(!e.NUMBERS_12.includes(t))throw new Error("Unrecognized number. Must be one of ".concat(e.NUMBERS_12));this.value=e.NUMBERS[e.NUMBERS_12.indexOf(t)+12];break;default:throw new Error("Unrecognized mode. Must be one of ".concat(e.MODES))}}return(0,o.default)(e,[{key:"valueOf",value:function(){return this.value}},{key:"twelveHourValueOf",value:function(){return e.NUMBERS_12[this.value%12]}},{key:"toString",value:function(){return String(this.value).padStart(2,0)}},{key:"toTwelveHourString",value:function(){return String(this.twelveHourValueOf()).padStart(2,0)}}],[{key:"fromString",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.TWENTY_FOUR_HOUR;if(e.STRINGS.includes(t))try{return new e(Number(t),n)}catch(e){return}}}]),e}();a=s,(0,l.default)(s,"TWENTY_FOUR_HOUR",0),(0,l.default)(s,"TWELVE_HOUR_AM",1),(0,l.default)(s,"TWELVE_HOUR_PM",2),(0,l.default)(s,"MODES",[a.TWENTY_FOUR_HOUR,a.TWELVE_HOUR_AM,a.TWELVE_HOUR_PM]),(0,l.default)(s,"NUMBERS",(0,u.default)(Array(24).keys())),(0,l.default)(s,"NUMBERS_12",[12].concat((0,u.default)(a.NUMBERS.slice(1,12)))),(0,l.default)(s,"STRINGS",[].concat((0,u.default)(a.NUMBERS.map((function(e){return String(e).padStart(2,0)}))),(0,u.default)(a.NUMBERS.map((function(e){return String(e)})))));var d=s;t.default=d},8557:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=i(n(861)),r=i(n(56690)),o=i(n(89728)),l=i(n(38416)),s=function(){function e(t){if((0,r.default)(this,e),!e.NUMBERS.includes(t))throw new Error("Expected number to be in ".concat(t));this.value=t}return(0,o.default)(e,[{key:"valueOf",value:function(){return this.value}},{key:"toString",value:function(){return String(this.value).padStart(2,0)}}],[{key:"fromString",value:function(t){if(e.STRINGS.includes(t))try{return new e(Number(t))}catch(e){return}}}]),e}();a=s,(0,l.default)(s,"NUMBERS",(0,u.default)(Array(60).keys())),(0,l.default)(s,"STRINGS",[].concat((0,u.default)(a.NUMBERS.map((function(e){return String(e).padStart(2,0)}))),(0,u.default)(a.NUMBERS.map((function(e){return String(e)})))));var d=s;t.default=d},38245:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(8557)).default;t.default=a},59051:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),u=n(25387),r=i(n(47166)),o=i(n(45697)),l=i(n(56636)),s={intl:o.default.shape({formatMessage:o.default.func}).isRequired},d=r.default.bind(l.default);function c(e){var t=e.intl.formatMessage({id:"Terra.timeInput.timeSpacer"});return a.default.createElement("span",{"aria-hidden":!0,className:d("time-spacer")},t)}c.propTypes=s;var f=(0,u.injectIntl)(c);t.default=f},56636:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"TimeInput-module__clinical-lowlight-theme___H8tjT","orion-fusion-theme":"TimeInput-module__orion-fusion-theme___+Ly3n","time-input-container":"TimeInput-module__time-input-container___gKSyw","format-text":"TimeInput-module__format-text___0KWIL","time-input":"TimeInput-module__time-input___1r0Ug","time-input-hour":"TimeInput-module__time-input-hour___NHCBU","time-input-minute":"TimeInput-module__time-input-minute___7qHsa","time-input-second":"TimeInput-module__time-input-second___O94g7","is-focused":"TimeInput-module__is-focused___MS44C",disabled:"TimeInput-module__disabled___SMkbh","is-invalid":"TimeInput-module__is-invalid___rOrM9","initial-focus":"TimeInput-module__initial-focus___fsn0T","with-second":"TimeInput-module__with-second___v43+8","is-incomplete":"TimeInput-module__is-incomplete___XWkeP","time-spacer":"TimeInput-module__time-spacer___E1QSK","meridiem-button-group":"TimeInput-module__meridiem-button-group___pOxch","meridiem-button":"TimeInput-module__meridiem-button___WF2tV"}}}]);