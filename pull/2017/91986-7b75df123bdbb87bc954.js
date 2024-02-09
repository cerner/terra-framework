(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[91986],{91986:function(e,t,a){"use strict";var n=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(13012)),l=n(a(10434)),u=n(a(70215)),o=n(a(56690)),s=n(a(89728)),d=n(a(94993)),h=n(a(73808)),p=n(a(66115)),f=n(a(61655)),c=n(a(38416)),y=n(a(67294)),m=n(a(45697)),v=n(a(93967)),b=n(a(19845)),g=n(a(47341)),D=a(55877),M=a(25387),_=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var a=N(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}(a(51051)),k=n(a(80008)),C=n(a(36654)),T=n(a(46833)),Y=n(a(29270)),I=n(a(91417)),F=n(a(862)),E=["intl","a11yLabel"],K=["intl","a11yLabel"],w=["a11yLabel","disabled","displayFormat","dayAttributes","monthAttributes","yearAttributes","intl","isA11yControlled","isInvalid","isIncomplete","onBlur","onChange","onFocus","refCallback","required","name","useExternalFormatMask","value"];function N(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(N=function(e){return e?a:t})(e)}function A(e,t,a){return t=(0,h.default)(t),(0,d.default)(e,P()?Reflect.construct(t,a||[],(0,h.default)(e).constructor):t.apply(e,a))}function P(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(P=function(){return!!e})()}var R=b.default.bind(F.default),S={a11yLabel:m.default.string,name:m.default.string.isRequired,dayAttributes:m.default.object,disabled:m.default.bool,displayFormat:m.default.oneOf(["month-day-year","day-month-year"]),intl:m.default.shape({formatMessage:m.default.func,locale:m.default.string}),isA11yControlled:m.default.bool,isIncomplete:m.default.bool,isInvalid:m.default.bool,monthAttributes:m.default.object,onBlur:m.default.func,onChange:m.default.func,onFocus:m.default.func,refCallback:m.default.func,required:m.default.bool,useExternalFormatMask:m.default.bool,value:m.default.string,yearAttributes:m.default.object},O={disabled:!1,monthAttributes:{},dayAttributes:{},yearAttributes:{},onBlur:null,onChange:null,onFocus:void 0,refCallback:void 0,value:void 0,useExternalFormatMask:!1,isA11yControlled:!1},B=function(e){function t(e){var a;(0,o.default)(this,t),a=A(this,t,[e]),(0,c.default)((0,p.default)(a),"handlePaste",(function(e){var t=(e.clipboardData||window.clipboardData).getData("text");I.default.validNumericInput(t)||e.preventDefault()})),(0,c.default)((0,p.default)(a),"handleKeyPress",(function(e){var t=e.key;I.default.validNumericInput(t)||e.metaKey||e.preventDefault()}));var n=a.props.value;return n&&!I.default.acceptedDateValue(n)&&(n=void 0),a.uuid=(0,D.v4)(),a.hotKeyInstructionId="".concat(a.uuid,"-hotkeyinstruction"),a.dateInputContainer=y.default.createRef(),a.monthRef=y.default.createRef(),a.handleMonthChange=a.handleMonthChange.bind((0,p.default)(a)),a.handleDayChange=a.handleDayChange.bind((0,p.default)(a)),a.handleYearChange=a.handleYearChange.bind((0,p.default)(a)),a.handleInputKeyDown=a.handleInputKeyDown.bind((0,p.default)(a)),a.handleMonthKeyDown=a.handleMonthKeyDown.bind((0,p.default)(a)),a.handleDayKeyDown=a.handleDayKeyDown.bind((0,p.default)(a)),a.handleYearKeyDown=a.handleYearKeyDown.bind((0,p.default)(a)),a.handleFocus=a.handleFocus.bind((0,p.default)(a)),a.handleMonthFocus=a.handleMonthFocus.bind((0,p.default)(a)),a.handleDayFocus=a.handleDayFocus.bind((0,p.default)(a)),a.handleYearFocus=a.handleYearFocus.bind((0,p.default)(a)),a.focusMonth=a.focusMonth.bind((0,p.default)(a)),a.focusDay=a.focusDay.bind((0,p.default)(a)),a.focusYear=a.focusYear.bind((0,p.default)(a)),a.handleMonthBlur=a.handleMonthBlur.bind((0,p.default)(a)),a.handleDayBlur=a.handleDayBlur.bind((0,p.default)(a)),a.handleYearBlur=a.handleYearBlur.bind((0,p.default)(a)),a.formattedRender=a.formattedRender.bind((0,p.default)(a)),a.monthRender=a.monthRender.bind((0,p.default)(a)),a.dayRender=a.dayRender.bind((0,p.default)(a)),a.yearRender=a.yearRender.bind((0,p.default)(a)),a.handleMonthClick=a.handleMonthClick.bind((0,p.default)(a)),a.handlePaste=a.handlePaste.bind((0,p.default)(a)),a.handleKeyPress=a.handleKeyPress.bind((0,p.default)(a)),a.state={month:I.default.splitMonth(n),day:I.default.splitDay(n),year:I.default.splitYear(n),dateString:"",isFocused:!1,monthIsFocused:!1,dayIsFocused:!1,yearIsFocused:!1,isPlaceholderColored:!0},a}return(0,f.default)(t,e),(0,s.default)(t,[{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&this.setState({month:I.default.splitMonth(this.props.value),day:I.default.splitDay(this.props.value),year:I.default.splitYear(this.props.value)})}},{key:"handleFocus",value:function(e){this.props.onFocus&&!this.dateInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e),this.setState({isFocused:!0})}},{key:"handleMonthFocus",value:function(e){this.handleFocus(e),this.setState({monthIsFocused:!0})}},{key:"handleDayFocus",value:function(e){this.handleFocus(e),this.setState({dayIsFocused:!0})}},{key:"handleYearFocus",value:function(e){this.handleFocus(e),this.setState({yearIsFocused:!0})}},{key:"handleMonthBlur",value:function(e){this.handleBlur(e,I.default.inputType.MONTH),""===this.state.month&&this.setState({isPlaceholderColored:!0}),this.setState({monthIsFocused:!1})}},{key:"handleDayBlur",value:function(e){this.handleBlur(e,I.default.inputType.DAY),this.setState({dayIsFocused:!1})}},{key:"handleYearBlur",value:function(e){this.handleBlur(e,I.default.inputType.YEAR),this.setState({yearIsFocused:!1})}},{key:"handleBlur",value:function(e,t){if(this.setState({isFocused:!1}),t===I.default.inputType.DAY){var a=e.target.value;1===a.length&&(a="0".concat(a),this.handleValueChange(e,t,a))}if(this.props.onBlur){var n=e.relatedTarget?e.relatedTarget:document.activeElement;this.dateInputContainer.current.contains(n)||this.props.onBlur(e)}}},{key:"handleInputKeyDown",value:function(e,t){"t"!==e.key&&"T"!==e.key?"-"!==e.key&&"_"!==e.key?"="!==e.key&&"+"!==e.key?t===I.default.inputType.DAY?this.handleDayKeyDown(e):t===I.default.inputType.YEAR?this.handleYearKeyDown(e):t===I.default.inputType.MONTH&&this.handleMonthKeyDown(e):this.setHotKeyDate(e,1):this.setHotKeyDate(e,-1):this.setHotKeyDate(e,0)}},{key:"handleMonthKeyDown",value:function(e){e.keyCode!==_.KEY_BACK_SPACE&&e.keyCode!==_.KEY_DELETE||(this.handleValueChange(e,I.default.inputType.MONTH,""),"day-month-year"===this.computedDisplayFormat()&&""===e.target.value&&this.focusDay(e)),e.keyCode!==_.KEY_SPACE&&e.keyCode!==_.KEY_UP&&e.keyCode!==_.KEY_DOWN||this.setState({isPlaceholderColored:!1})}},{key:"handleDayKeyDown",value:function(e){var t=this.state.day||"",a=t;e.keyCode===_.KEY_UP&&(e.preventDefault(),t=I.default.incrementDay(t)),e.keyCode===_.KEY_DOWN&&(e.preventDefault(),t=I.default.decrementDay(t)),a!==t&&this.handleValueChange(e,I.default.inputType.DAY,t),e.keyCode!==_.KEY_BACK_SPACE&&e.keyCode!==_.KEY_DELETE||"month-day-year"===this.computedDisplayFormat()&&""===e.target.value&&this.focusMonth(e)}},{key:"handleYearKeyDown",value:function(e){var t=this.state.year||"",a=t,n=this.computedDisplayFormat();e.keyCode===_.KEY_UP&&(e.preventDefault(),t=I.default.incrementYear(t)),e.keyCode===_.KEY_DOWN&&(e.preventDefault(),t=I.default.decrementYear(t)),a!==t&&this.handleValueChange(e,I.default.inputType.YEAR,t),e.keyCode!==_.KEY_BACK_SPACE&&e.keyCode!==_.KEY_DELETE||("month-day-year"===n&&""===e.target.value&&this.focusDay(e),"day-month-year"===n&&""===e.target.value&&this.focusMonth(e))}},{key:"handleMonthChange",value:function(e){if(I.default.validNumericInput(e.target.value)){var t=e.target.value;t===this.state.month||Number(t)>12||(this.handleValueChange(e,I.default.inputType.MONTH,t),""===t&&(this.setState({year:"",day:""}),this.handleOnChange(e,"")))}}},{key:"handleDayChange",value:function(e){if(I.default.validNumericInput(e.target.value)){var t=e.target.value;t===this.state.day||t.length>2||Number(t)>31||!(2!==t.length||t>0)||this.handleValueChange(e,I.default.inputType.DAY,t)}}},{key:"handleYearChange",value:function(e){if(I.default.validNumericInput(e.target.value)){var t=e.target.value;t.length>5||Number(t)>I.default.MaxYearValue||4===t.length&&Number(t)<I.default.MinYearValue||this.handleValueChange(e,I.default.inputType.YEAR,t)}}},{key:"handleMonthClick",value:function(){this.setState({isPlaceholderColored:!1})}},{key:"handleValueChange",value:function(e,t,a){if(t===I.default.inputType.MONTH?this.setState({month:a}):t===I.default.inputType.DAY?this.setState({day:a}):t===I.default.inputType.YEAR&&this.setState({year:a}),this.props.onChange){var n=t===I.default.inputType.MONTH?a:this.state.month,r=t===I.default.inputType.DAY?a:this.state.day,i=t===I.default.inputType.YEAR?a:this.state.year;if(""===n&&""===r&&""===i)this.handleOnChange(e,"");else{var l="".concat(i,"-").concat(n,"-").concat(r);this.handleOnChange(e,l)}}}},{key:"handleOnChange",value:function(e,t){this.props.onChange&&this.props.onChange(e,t)}},{key:"setHotKeyDate",value:function(e,t){var a=this.state,n=a.year,r=a.month,i=a.day;n=Number(n),r=Number(r)-1,i=Number(i);var l,u=new Date(n,r,i),o=n<I.default.MaxYearValue&&n>I.default.MinYearValue&&u.getFullYear()===n,s=u.getMonth()===r,d=u.getDate()===i;(l=0!==t&&o&&d&&s?u:new Date).setDate(l.getDate()+t);var h=(0,k.default)(l).format("YYYY-MM-DD"),p=h.split("-");this.setState({year:p[0],month:p[1],day:p[2],dateString:h}),this.props.onChange&&this.handleOnChange(e,h),e.preventDefault()}},{key:"computedDisplayFormat",value:function(){return I.default.computedDisplayFormat(this.props.displayFormat,this.props.intl.locale)}},{key:"focusDay",value:function(e){this.dayRef.focus(),e.preventDefault()}},{key:"focusYear",value:function(e){this.yearRef.focus(),e.preventDefault()}},{key:"focusMonth",value:function(e){this.monthRef.current.focus(),e.preventDefault()}},{key:"monthRender",value:function(){var e,t=this,a=this.props,n=a.intl,r=a.a11yLabel,i=(0,u.default)(a,E);e="month-day-year"===this.computedDisplayFormat()?r?n.formatMessage({id:"Terra.date.input.monthSelectLabelWithName"},{a11yLabel:r}):n.formatMessage({id:"Terra.date.input.monthSelectLabelWithDefaultName"}):n.formatMessage({id:"Terra.date.input.monthSelectLabel"},{a11yLabel:r});var o=R(["month-select-wrapper",{focused:this.state.monthIsFocused},{disabled:this.props.disabled},{error:this.props.isInvalid},{incomplete:this.props.isIncomplete&&this.props.required&&!this.props.isInvalid}]),s=R(["month-select",{"is-placeholder":""===this.state.month&&this.state.isPlaceholderColored},{focused:this.state.monthIsFocused},{disabled:this.props.disabled},{error:this.props.isInvalid},{incomplete:this.props.isIncomplete&&this.props.required&&!this.props.isInvalid}]);return y.default.createElement("div",{className:o},y.default.createElement("select",(0,l.default)({},this.props.monthAttributes,{"aria-label":e,ref:this.monthRef,className:s,value:this.state.month,name:"terra-date-month-".concat(this.props.name),onChange:this.handleMonthChange,onKeyDown:function(e){return t.handleInputKeyDown(e,I.default.inputType.MONTH)},onClick:this.handleMonthClick,onFocus:this.handleMonthFocus,onBlur:this.handleMonthBlur,disabled:this.props.disabled,"aria-disabled":this.props.disabled,"aria-invalid":this.props.isInvalid,"aria-required":this.props.required,"aria-describedby":i["aria-describedby"]?"".concat(this.hotKeyInstructionId," ").concat(i["aria-describedby"]):this.hotKeyInstructionId}),y.default.createElement("option",{value:""},this.props.intl.formatMessage({id:"Terra.date.input.monthPlaceholder"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.january"}),value:"01"},this.props.intl.formatMessage({id:"Terra.date.input.january"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.february"}),value:"02"},this.props.intl.formatMessage({id:"Terra.date.input.february"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.march"}),value:"03"},this.props.intl.formatMessage({id:"Terra.date.input.march"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.april"}),value:"04"},this.props.intl.formatMessage({id:"Terra.date.input.april"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.may"}),value:"05"},this.props.intl.formatMessage({id:"Terra.date.input.may"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.june"}),value:"06"},this.props.intl.formatMessage({id:"Terra.date.input.june"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.july"}),value:"07"},this.props.intl.formatMessage({id:"Terra.date.input.july"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.august"}),value:"08"},this.props.intl.formatMessage({id:"Terra.date.input.august"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.september"}),value:"09"},this.props.intl.formatMessage({id:"Terra.date.input.september"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.october"}),value:"10"},this.props.intl.formatMessage({id:"Terra.date.input.october"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.november"}),value:"11"},this.props.intl.formatMessage({id:"Terra.date.input.november"})),y.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.december"}),value:"12"},this.props.intl.formatMessage({id:"Terra.date.input.december"}))),y.default.createElement(Y.default,{id:this.hotKeyInstructionId,text:n.formatMessage({id:"Terra.date.input.hotKey"})}))}},{key:"dayRender",value:function(){var e,t=this,a=this.props,n=a.intl,r=a.a11yLabel,i=(0,u.default)(a,K);e="day-month-year"===this.computedDisplayFormat()?r?n.formatMessage({id:"Terra.date.input.dayInputLabelWithName"},{a11yLabel:r}):n.formatMessage({id:"Terra.date.input.dayInputLabelWithDefaultName"}):n.formatMessage({id:"Terra.date.input.dayInputLabel"});var o=window.matchMedia("(min--moz-device-pixel-ratio:0)").matches?{type:"text",pattern:"\\d*"}:{type:"number"};return y.default.createElement(T.default,(0,l.default)({},this.props.dayAttributes,o,{refCallback:function(e){t.dayRef=e},label:e,description:"".concat(n.formatMessage({id:"Terra.date.input.dayDescription"}),", ").concat(n.formatMessage({id:"Terra.date.input.hotKey"})),className:R("date-input-day",{"is-focused":this.state.dayIsFocused}),value:this.state.day,name:"terra-date-day-".concat(this.props.name),maxLength:"2",onKeyPress:this.handleKeyPress,onChange:this.handleDayChange,onKeyDown:function(e){return t.handleInputKeyDown(e,I.default.inputType.DAY)},onFocus:this.handleDayFocus,onBlur:this.handleDayBlur,onPaste:this.handlePaste,size:"2",autoComplete:"off",disabled:this.props.disabled,isInvalid:this.props.isInvalid,showIsInvalid:!0,isIncomplete:this.props.isIncomplete,required:this.props.required,ariaDescribedBy:i["aria-describedby"]}))}},{key:"yearRender",value:function(){var e=this,t=(0,l.default)({},((0,i.default)(this.props),this.props)),a=window.matchMedia("(min--moz-device-pixel-ratio:0)").matches?{type:"text",pattern:"\\d*"}:{type:"number"};return y.default.createElement(T.default,(0,l.default)({},this.props.yearAttributes,a,{refCallback:function(t){e.yearRef=t},label:this.props.intl.formatMessage({id:"Terra.date.input.yearLabel"}),description:"".concat(this.props.intl.formatMessage({id:"Terra.date.input.yearDescription"}),", ").concat(this.props.intl.formatMessage({id:"Terra.date.input.hotKey"})),className:R("date-input-year",{"is-focused":this.state.yearIsFocused}),value:this.state.year,name:"terra-date-year-".concat(this.props.name),maxLength:"4",onChange:this.handleYearChange,onKeyPress:this.handleKeyPress,onKeyDown:function(t){return e.handleInputKeyDown(t,I.default.inputType.YEAR)},onFocus:this.handleYearFocus,onBlur:this.handleYearBlur,onPaste:this.handlePaste,size:"4",autoComplete:"off",disabled:this.props.disabled,isInvalid:this.props.isInvalid,showIsInvalid:!0,isIncomplete:this.props.isIncomplete,required:this.props.required,ariaDescribedBy:t["aria-describedby"]}))}},{key:"formattedRender",value:function(){var e=y.default.createElement(y.default.Fragment,null,this.monthRender(),this.dayRender(),this.yearRender()),t=y.default.createElement(y.default.Fragment,null,this.dayRender(),this.monthRender(),this.yearRender());return"month-day-year"===this.computedDisplayFormat()?e:t}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.a11yLabel,r=a.disabled,i=(a.displayFormat,a.dayAttributes,a.monthAttributes,a.yearAttributes,a.intl),o=a.isA11yControlled,s=(a.isInvalid,a.isIncomplete,a.onBlur,a.onChange,a.onFocus,a.refCallback),d=(a.required,a.name),h=a.useExternalFormatMask,p=(a.value,(0,u.default)(a,w)),f=this.state,c=f.month,m=f.day,b=f.year,g=this.context,D=(0,v.default)(R({disabled:r},"date-input",{"is-focused":this.state.isFocused},g.className),p.className),M="";(c.length>0||m.length>0||b.length>0)&&(M="".concat(b,"-").concat(c,"-").concat(m)),10===M.length&&(e=M);var _=I.default.getDateFormat(this.props),T=n||this.props.intl.formatMessage({id:"Terra.date.input.labelDefault"}),Y=this.props.intl.formatMessage({id:"Terra.date.input.dateFormatLabel"}),F=(0,k.default)(this.state.dateString).format("dddd MMMM D YYYY");return y.default.createElement("div",(0,l.default)({},p,{className:D,ref:function(e){t.dateInputContainer.current=e,s&&s(e)},role:o?null:"group","aria-label":o?void 0:T}),y.default.createElement("div",{"aria-live":"polite"},y.default.createElement(C.default,{value:e,readThis:"".concat(Y," ").concat(_,". ").concat(F,", ").concat(i.formatMessage({id:"Terra.date.input.hotKey"}))})),y.default.createElement("input",{type:"hidden",name:d,value:M}),this.formattedRender(),!1===h&&y.default.createElement("div",{"aria-hidden":!0,className:R("format-text")},"(".concat(_,")")))}}]),t}(y.default.Component);B.propTypes=S,B.defaultProps=O,B.contextType=g.default;t.default=(0,M.injectIntl)(B)},91417:function(e,t,a){"use strict";var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(56690)),i=n(a(89728)),l=function(){function e(){(0,r.default)(this,e)}return(0,i.default)(e,null,[{key:"validNumericInput",value:function(e){return 0===e.length||/^\d+$/.test(e)}},{key:"incrementDay",value:function(e){if(""===e)return"01";if(e){var t=Number(e);return 31===t?"01":t<31?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return null}},{key:"decrementDay",value:function(e){if(""===e)return"31";if(e){var t=Number(e);return t<2?"31":t>1?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return null}},{key:"incrementYear",value:function(t){if(""===t)return e.MinYearValue.toString();if(t){var a=Number(t);return a===e.MaxYearValue?e.MinYearValue.toString():a>=e.MinYearValue&&a<e.MaxYearValue?(a+=1).toString():t}return null}},{key:"decrementYear",value:function(t){if(""===t)return e.MaxYearValue.toString();if(t){var a=Number(t);return a===e.MinYearValue?e.MaxYearValue.toString():a>e.MinYearValue?(a-=1).toString():t}return null}},{key:"splitMonth",value:function(e){if("string"==typeof e){var t=e.split("-");if(t[1]&&2===t[1].length){var a=Number(t[1]);if(a>=1&&a<13)return t[1]}return""}return""}},{key:"splitDay",value:function(e){if("string"==typeof e){var t=e.split("-");if(t[2]){var a=Number(t[2]);if(a>=1&&a<32)return t[2];if("0"===t[2])return t[2];if("00"===t[2])return t[2]}return""}return""}},{key:"splitYear",value:function(e){if("string"==typeof e){var t=e.split("-");return t.length&&!Number.isNaN(parseFloat(t[0]))?t[0]:""}return""}},{key:"acceptedDateValue",value:function(e){return/^([0-9][0-9][0-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/.test(e)}},{key:"computedDisplayFormat",value:function(e,t){return"month-day-year"===e?"month-day-year":"day-month-year"===e?"day-month-year":"en"===t||"en-US"===t?"month-day-year":"day-month-year"}},{key:"getDateFormat",value:function(t){return"month-day-year"===e.computedDisplayFormat(t.displayFormat,t.intl.locale)?t.intl.formatMessage({id:"Terra.date.input.formatMonthDayYear"}):t.intl.formatMessage({id:"Terra.date.input.formatDayMonthYear"})}}]),e}();l.inputType={YEAR:0,MONTH:1,DAY:2},l.MinYearValue=1900,l.MaxYearValue=2100;t.default=l},36654:function(e,t,a){"use strict";var n=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var a=s(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(n,l,u):n[l]=e[l]}return n.default=e,a&&a.set(e,n),n}(a(67294)),u=n(a(29270)),o=n(a(45697));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(s=function(e){return e?a:t})(e)}var d={value:o.default.string,readThis:o.default.string};function h(e){var t=(0,l.useState)(void 0),a=(0,i.default)(t,2),n=a[0],r=a[1],o=(0,l.useState)(void 0),s=(0,i.default)(o,2),d=s[0],h=s[1],p=(0,l.useState)(e.value),f=(0,i.default)(p,2),c=f[0],y=f[1],m=function(){r("status"),h("polite"),y(e.value)};return e.value&&!c||e.value&&c&&e.value!==c?m():!e.value&&c&&(r(void 0),h(void 0),y(void 0)),l.default.createElement(u.default,{"aria-hidden":!e.value,text:e.readThis,"aria-live":d,role:n})}h.propTypes=d;t.default=h},862:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"DateInput-module__orion-fusion-theme___n1pvh","clinical-lowlight-theme":"DateInput-module__clinical-lowlight-theme___dojK4","date-input":"DateInput-module__date-input___RRdJH","month-select-wrapper":"DateInput-module__month-select-wrapper___2C8-S",focused:"DateInput-module__focused___7D8Ko",disabled:"DateInput-module__disabled___Q4Fq+",error:"DateInput-module__error___F1pdO",incomplete:"DateInput-module__incomplete___agVgr","month-select":"DateInput-module__month-select___PRPkf","is-placeholder":"DateInput-module__is-placeholder___yWZp6","date-input-day":"DateInput-module__date-input-day___fxF+e","is-focused":"DateInput-module__is-focused___uWj16","date-input-year":"DateInput-module__date-input-year___jgdHm","format-text":"DateInput-module__format-text___XHohD"}},13012:function(e){e.exports=function(e){if(null==e)throw new TypeError("Cannot destructure "+e)},e.exports.__esModule=!0,e.exports.default=e.exports}}]);