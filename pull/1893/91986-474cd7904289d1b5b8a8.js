"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[91986],{91986:function(e,t,a){var n=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(70215)),i=n(a(10434)),u=n(a(56690)),o=n(a(89728)),d=n(a(66115)),s=n(a(61655)),h=n(a(94993)),p=n(a(73808)),f=n(a(38416)),c=n(a(67294)),y=n(a(45697)),m=n(a(94184)),v=n(a(47166)),b=n(a(47341)),g=a(55877),D=a(25387),M=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var a=F(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=l?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,a&&a.set(e,n),n}(a(51051)),_=n(a(36654)),k=n(a(46833)),C=n(a(91417)),I=n(a(862)),T=["a11yLabel","disabled","displayFormat","dayAttributes","monthAttributes","yearAttributes","intl","isA11yControlled","isInvalid","isIncomplete","onBlur","onChange","onFocus","refCallback","required","name","useExternalFormatMask","value"];function F(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(F=function(e){return e?a:t})(e)}function Y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=(0,p.default)(e);if(t){var r=(0,p.default)(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return(0,h.default)(this,a)}}var E=v.default.bind(I.default),w={a11yLabel:y.default.string,name:y.default.string.isRequired,dayAttributes:y.default.object,disabled:y.default.bool,displayFormat:y.default.oneOf(["month-day-year","day-month-year"]),intl:y.default.shape({formatMessage:y.default.func,locale:y.default.string}),isA11yControlled:y.default.bool,isIncomplete:y.default.bool,isInvalid:y.default.bool,monthAttributes:y.default.object,onBlur:y.default.func,onChange:y.default.func,onFocus:y.default.func,refCallback:y.default.func,required:y.default.bool,useExternalFormatMask:y.default.bool,value:y.default.string,yearAttributes:y.default.object},K={disabled:!1,monthAttributes:{},dayAttributes:{},yearAttributes:{},onBlur:null,onChange:null,onFocus:void 0,refCallback:void 0,value:void 0,useExternalFormatMask:!1,isA11yControlled:!1},P=function(e){(0,s.default)(a,e);var t=Y(a);function a(e){var n;(0,u.default)(this,a),n=t.call(this,e),(0,f.default)((0,d.default)(n),"handlePaste",(function(e){var t=(e.clipboardData||window.clipboardData).getData("text");C.default.validNumericInput(t)||e.preventDefault()})),(0,f.default)((0,d.default)(n),"handleKeyPress",(function(e){var t=e.key;C.default.validNumericInput(t)||e.metaKey||e.preventDefault()}));var r=n.props.value;return r&&!C.default.acceptedDateValue(r)&&(r=void 0),n.uuid=(0,g.v4)(),n.dateInputContainer=c.default.createRef(),n.monthRef=c.default.createRef(),n.handleMonthChange=n.handleMonthChange.bind((0,d.default)(n)),n.handleDayChange=n.handleDayChange.bind((0,d.default)(n)),n.handleYearChange=n.handleYearChange.bind((0,d.default)(n)),n.handleInputKeyDown=n.handleInputKeyDown.bind((0,d.default)(n)),n.handleMonthKeyDown=n.handleMonthKeyDown.bind((0,d.default)(n)),n.handleDayKeyDown=n.handleDayKeyDown.bind((0,d.default)(n)),n.handleYearKeyDown=n.handleYearKeyDown.bind((0,d.default)(n)),n.handleFocus=n.handleFocus.bind((0,d.default)(n)),n.handleMonthFocus=n.handleMonthFocus.bind((0,d.default)(n)),n.handleDayFocus=n.handleDayFocus.bind((0,d.default)(n)),n.handleYearFocus=n.handleYearFocus.bind((0,d.default)(n)),n.focusMonth=n.focusMonth.bind((0,d.default)(n)),n.focusDay=n.focusDay.bind((0,d.default)(n)),n.focusYear=n.focusYear.bind((0,d.default)(n)),n.handleMonthBlur=n.handleMonthBlur.bind((0,d.default)(n)),n.handleDayBlur=n.handleDayBlur.bind((0,d.default)(n)),n.handleYearBlur=n.handleYearBlur.bind((0,d.default)(n)),n.formattedRender=n.formattedRender.bind((0,d.default)(n)),n.monthRender=n.monthRender.bind((0,d.default)(n)),n.dayRender=n.dayRender.bind((0,d.default)(n)),n.yearRender=n.yearRender.bind((0,d.default)(n)),n.handleMonthClick=n.handleMonthClick.bind((0,d.default)(n)),n.handlePaste=n.handlePaste.bind((0,d.default)(n)),n.handleKeyPress=n.handleKeyPress.bind((0,d.default)(n)),n.state={month:C.default.splitMonth(r),day:C.default.splitDay(r),year:C.default.splitYear(r),isFocused:!1,monthIsFocused:!1,dayIsFocused:!1,yearIsFocused:!1,isPlaceholderColored:!0},n}return(0,o.default)(a,[{key:"componentDidUpdate",value:function(e){this.props.value!==e.value&&this.setState({month:C.default.splitMonth(this.props.value),day:C.default.splitDay(this.props.value),year:C.default.splitYear(this.props.value)})}},{key:"handleFocus",value:function(e){this.props.onFocus&&!this.dateInputContainer.current.contains(e.relatedTarget)&&this.props.onFocus(e),this.setState({isFocused:!0})}},{key:"handleMonthFocus",value:function(e){this.handleFocus(e),this.setState({monthIsFocused:!0})}},{key:"handleDayFocus",value:function(e){this.handleFocus(e),this.setState({dayIsFocused:!0})}},{key:"handleYearFocus",value:function(e){this.handleFocus(e),this.setState({yearIsFocused:!0})}},{key:"handleMonthBlur",value:function(e){this.handleBlur(e,C.default.inputType.MONTH),""===this.state.month&&this.setState({isPlaceholderColored:!0}),this.setState({monthIsFocused:!1})}},{key:"handleDayBlur",value:function(e){this.handleBlur(e,C.default.inputType.DAY),this.setState({dayIsFocused:!1})}},{key:"handleYearBlur",value:function(e){this.handleBlur(e,C.default.inputType.YEAR),this.setState({yearIsFocused:!1})}},{key:"handleBlur",value:function(e,t){if(this.setState({isFocused:!1}),t===C.default.inputType.DAY){var a=e.target.value;1===a.length&&(a="0".concat(a),this.handleValueChange(e,t,a))}if(this.props.onBlur){var n=e.relatedTarget?e.relatedTarget:document.activeElement;this.dateInputContainer.current.contains(n)||this.props.onBlur(e)}}},{key:"handleInputKeyDown",value:function(e,t){"t"!==e.key&&"T"!==e.key?"-"!==e.key&&"_"!==e.key?"="!==e.key&&"+"!==e.key?t===C.default.inputType.DAY?this.handleDayKeyDown(e):this.handleYearKeyDown(e):this.setHotKeyDate(e,1):this.setHotKeyDate(e,-1):this.setHotKeyDate(e,0)}},{key:"handleMonthKeyDown",value:function(e){e.keyCode!==M.KEY_BACK_SPACE&&e.keyCode!==M.KEY_DELETE||(this.handleValueChange(e,C.default.inputType.MONTH,""),"day-month-year"===this.computedDisplayFormat()&&""===e.target.value&&this.focusDay(e)),e.keyCode!==M.KEY_SPACE&&e.keyCode!==M.KEY_UP&&e.keyCode!==M.KEY_DOWN||this.setState({isPlaceholderColored:!1})}},{key:"handleDayKeyDown",value:function(e){var t=this.state.day||"",a=t;e.keyCode===M.KEY_UP&&(e.preventDefault(),t=C.default.incrementDay(t)),e.keyCode===M.KEY_DOWN&&(e.preventDefault(),t=C.default.decrementDay(t)),a!==t&&this.handleValueChange(e,C.default.inputType.DAY,t),e.keyCode!==M.KEY_BACK_SPACE&&e.keyCode!==M.KEY_DELETE||"month-day-year"===this.computedDisplayFormat()&&""===e.target.value&&this.focusMonth(e)}},{key:"handleYearKeyDown",value:function(e){var t=this.state.year||"",a=t,n=this.computedDisplayFormat();e.keyCode===M.KEY_UP&&(e.preventDefault(),t=C.default.incrementYear(t)),e.keyCode===M.KEY_DOWN&&(e.preventDefault(),t=C.default.decrementYear(t)),a!==t&&this.handleValueChange(e,C.default.inputType.YEAR,t),e.keyCode!==M.KEY_BACK_SPACE&&e.keyCode!==M.KEY_DELETE||("month-day-year"===n&&""===e.target.value&&this.focusDay(e),"day-month-year"===n&&""===e.target.value&&this.focusMonth(e))}},{key:"handleMonthChange",value:function(e){if(C.default.validNumericInput(e.target.value)){var t=e.target.value;t===this.state.month||Number(t)>12||this.handleValueChange(e,C.default.inputType.MONTH,t)}}},{key:"handleDayChange",value:function(e){if(C.default.validNumericInput(e.target.value)){var t=e.target.value;t===this.state.day||t.length>2||Number(t)>31||!(2!==t.length||t>0)||this.handleValueChange(e,C.default.inputType.DAY,t)}}},{key:"handleYearChange",value:function(e){if(C.default.validNumericInput(e.target.value)){var t=e.target.value;t.length>5||Number(t)>C.default.MaxYearValue||4===t.length&&Number(t)<C.default.MinYearValue||this.handleValueChange(e,C.default.inputType.YEAR,t)}}},{key:"handleMonthClick",value:function(){this.setState({isPlaceholderColored:!1})}},{key:"handleValueChange",value:function(e,t,a){if(t===C.default.inputType.MONTH?this.setState({month:a}):t===C.default.inputType.DAY?this.setState({day:a}):t===C.default.inputType.YEAR&&this.setState({year:a}),this.props.onChange){var n=t===C.default.inputType.MONTH?a:this.state.month,r=t===C.default.inputType.DAY?a:this.state.day,l=t===C.default.inputType.YEAR?a:this.state.year;if(""===n&&""===r&&""===l)this.handleOnChange(e,"");else{var i="".concat(l,"-").concat(n,"-").concat(r);this.handleOnChange(e,i)}}}},{key:"handleOnChange",value:function(e,t){this.props.onChange&&this.props.onChange(e,t)}},{key:"setHotKeyDate",value:function(e,t){var a=this.state,n=a.year,r=a.month,l=a.day;n=Number(n),r=Number(r)-1,l=Number(l);var i,u=new Date(n,r,l),o=n<C.default.MaxYearValue&&n>C.default.MinYearValue&&u.getFullYear()===n,d=u.getMonth()===r,s=u.getDate()===l;(i=0!==t&&o&&s&&d?u:new Date).setDate(i.getDate()+t);var h=i.toISOString().split("T")[0],p=h.split("-");this.setState({year:p[0],month:p[1],day:p[2]}),this.props.onChange&&this.handleOnChange(e,h)}},{key:"computedDisplayFormat",value:function(){return C.default.computedDisplayFormat(this.props.displayFormat,this.props.intl.locale)}},{key:"focusDay",value:function(e){this.dayRef.focus(),e.preventDefault()}},{key:"focusYear",value:function(e){this.yearRef.focus(),e.preventDefault()}},{key:"focusMonth",value:function(e){this.monthRef.current.focus(),e.preventDefault()}},{key:"monthRender",value:function(){var e,t=this.props,a=t.intl,n=t.a11yLabel;e="month-day-year"===this.computedDisplayFormat()?n?a.formatMessage({id:"Terra.date.input.monthSelectLabelWithName"},{a11yLabel:n}):a.formatMessage({id:"Terra.date.input.monthSelectLabelWithDefaultName"}):a.formatMessage({id:"Terra.date.input.monthSelectLabel"},{a11yLabel:n});var r=E(["month-select-wrapper",{focused:this.state.monthIsFocused},{disabled:this.props.disabled},{error:this.props.isInvalid},{incomplete:this.props.isIncomplete&&this.props.required&&!this.props.isInvalid}]),l=E(["month-select",{"is-placeholder":""===this.state.month&&this.state.isPlaceholderColored},{focused:this.state.monthIsFocused},{disabled:this.props.disabled},{error:this.props.isInvalid},{incomplete:this.props.isIncomplete&&this.props.required&&!this.props.isInvalid}]);return c.default.createElement("div",{className:r},c.default.createElement("select",(0,i.default)({},this.props.monthAttributes,{"aria-label":e,ref:this.monthRef,className:l,value:this.state.month,name:"terra-date-month-".concat(this.props.name),onChange:this.handleMonthChange,onKeyDown:this.handleMonthKeyDown,onClick:this.handleMonthClick,onFocus:this.handleMonthFocus,onBlur:this.handleMonthBlur,disabled:this.props.disabled,"aria-disabled":this.props.disabled,"aria-invalid":this.props.isInvalid,"aria-required":this.props.required}),c.default.createElement("option",{value:""},this.props.intl.formatMessage({id:"Terra.date.input.monthPlaceholder"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.january"}),value:"01"},this.props.intl.formatMessage({id:"Terra.date.input.january"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.february"}),value:"02"},this.props.intl.formatMessage({id:"Terra.date.input.february"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.march"}),value:"03"},this.props.intl.formatMessage({id:"Terra.date.input.march"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.april"}),value:"04"},this.props.intl.formatMessage({id:"Terra.date.input.april"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.may"}),value:"05"},this.props.intl.formatMessage({id:"Terra.date.input.may"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.june"}),value:"06"},this.props.intl.formatMessage({id:"Terra.date.input.june"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.july"}),value:"07"},this.props.intl.formatMessage({id:"Terra.date.input.july"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.august"}),value:"08"},this.props.intl.formatMessage({id:"Terra.date.input.august"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.september"}),value:"09"},this.props.intl.formatMessage({id:"Terra.date.input.september"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.october"}),value:"10"},this.props.intl.formatMessage({id:"Terra.date.input.october"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.november"}),value:"11"},this.props.intl.formatMessage({id:"Terra.date.input.november"})),c.default.createElement("option",{key:this.props.intl.formatMessage({id:"Terra.date.input.december"}),value:"12"},this.props.intl.formatMessage({id:"Terra.date.input.december"}))))}},{key:"dayRender",value:function(){var e,t=this,a=this.props,n=a.intl,r=a.a11yLabel;e="day-month-year"===this.computedDisplayFormat()?r?n.formatMessage({id:"Terra.date.input.dayInputLabelWithName"},{a11yLabel:r}):n.formatMessage({id:"Terra.date.input.dayInputLabelWithDefaultName"}):n.formatMessage({id:"Terra.date.input.dayInputLabel"});var l=window.matchMedia("(min--moz-device-pixel-ratio:0)").matches?{type:"text",pattern:"\\d*"}:{type:"number"};return c.default.createElement(k.default,(0,i.default)({},this.props.dayAttributes,l,{refCallback:function(e){t.dayRef=e},label:e,description:n.formatMessage({id:"Terra.date.input.dayDescription"}),className:E("date-input-day",{"is-focused":this.state.dayIsFocused}),value:this.state.day,name:"terra-date-day-".concat(this.props.name),maxLength:"2",onKeyPress:this.handleKeyPress,onChange:this.handleDayChange,onKeyDown:function(e){return t.handleInputKeyDown(e,C.default.inputType.DAY)},onFocus:this.handleDayFocus,onBlur:this.handleDayBlur,onPaste:this.handlePaste,size:"2",autoComplete:"off",disabled:this.props.disabled,isInvalid:this.props.isInvalid,showIsInvalid:!0,isIncomplete:this.props.isIncomplete,required:this.props.required}))}},{key:"yearRender",value:function(){var e=this,t=window.matchMedia("(min--moz-device-pixel-ratio:0)").matches?{type:"text",pattern:"\\d*"}:{type:"number"};return c.default.createElement(k.default,(0,i.default)({},this.props.yearAttributes,t,{refCallback:function(t){e.yearRef=t},label:this.props.intl.formatMessage({id:"Terra.date.input.yearLabel"}),description:this.props.intl.formatMessage({id:"Terra.date.input.yearDescription"}),className:E("date-input-year",{"is-focused":this.state.yearIsFocused}),value:this.state.year,name:"terra-date-year-".concat(this.props.name),maxLength:"4",onChange:this.handleYearChange,onKeyPress:this.handleKeyPress,onKeyDown:function(t){return e.handleInputKeyDown(t,C.default.inputType.YEAR)},onFocus:this.handleYearFocus,onBlur:this.handleYearBlur,onPaste:this.handlePaste,size:"4",autoComplete:"off",disabled:this.props.disabled,isInvalid:this.props.isInvalid,showIsInvalid:!0,isIncomplete:this.props.isIncomplete,required:this.props.required}))}},{key:"formattedRender",value:function(){var e=c.default.createElement(c.default.Fragment,null,this.monthRender(),this.dayRender(),this.yearRender()),t=c.default.createElement(c.default.Fragment,null,this.dayRender(),this.monthRender(),this.yearRender());return"month-day-year"===this.computedDisplayFormat()?e:t}},{key:"render",value:function(){var e,t=this,a=this.props,n=a.a11yLabel,r=a.disabled,u=(a.displayFormat,a.dayAttributes,a.monthAttributes,a.yearAttributes,a.intl,a.isA11yControlled),o=(a.isInvalid,a.isIncomplete,a.onBlur,a.onChange,a.onFocus,a.refCallback),d=(a.required,a.name),s=a.useExternalFormatMask,h=(a.value,(0,l.default)(a,T)),p=this.state,f=p.month,y=p.day,v=p.year,b=this.context,g=(0,m.default)(E({disabled:r},"date-input",{"is-focused":this.state.isFocused},b.className),h.className),D="";(f.length>0||y.length>0||v.length>0)&&(D="".concat(v,"-").concat(f,"-").concat(y)),10===D.length&&(e=D);var M=C.default.getDateFormat(this.props),k=n||this.props.intl.formatMessage({id:"Terra.date.input.labelDefault"});return c.default.createElement("div",(0,i.default)({},h,{className:g,ref:function(e){t.dateInputContainer.current=e,o&&o(e)},role:u?null:"group","aria-label":u?void 0:k}),c.default.createElement(_.default,{value:e,readThis:"".concat(k," ").concat(e)}),c.default.createElement("input",{type:"hidden",name:d,value:D}),this.formattedRender(),!1===s&&c.default.createElement("div",{"aria-hidden":!0,className:E("format-text")},M))}}]),a}(c.default.Component);P.propTypes=w,P.defaultProps=K,P.contextType=b.default;t.default=(0,D.injectIntl)(P)},91417:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(56690)),l=n(a(89728)),i=function(){function e(){(0,r.default)(this,e)}return(0,l.default)(e,null,[{key:"validNumericInput",value:function(e){return 0===e.length||/^\d+$/.test(e)}},{key:"incrementDay",value:function(e){if(""===e)return"01";if(e){var t=Number(e);return 31===t?"01":t<31?(t+=1)<10?"0".concat(t.toString()):t.toString():e}return null}},{key:"decrementDay",value:function(e){if(""===e)return"31";if(e){var t=Number(e);return t<2?"31":t>1?(t-=1)<10?"0".concat(t.toString()):t.toString():e}return null}},{key:"incrementYear",value:function(t){if(""===t)return e.MinYearValue.toString();if(t){var a=Number(t);return a===e.MaxYearValue?e.MinYearValue.toString():a>=e.MinYearValue&&a<e.MaxYearValue?(a+=1).toString():t}return null}},{key:"decrementYear",value:function(t){if(""===t)return e.MaxYearValue.toString();if(t){var a=Number(t);return a===e.MinYearValue?e.MaxYearValue.toString():a>e.MinYearValue?(a-=1).toString():t}return null}},{key:"splitMonth",value:function(e){if("string"==typeof e){var t=e.split("-");if(t[1]&&2===t[1].length){var a=Number(t[1]);if(a>=1&&a<13)return t[1]}return""}return""}},{key:"splitDay",value:function(e){if("string"==typeof e){var t=e.split("-");if(t[2]){var a=Number(t[2]);if(a>=1&&a<32)return t[2];if("0"===t[2])return t[2];if("00"===t[2])return t[2]}return""}return""}},{key:"splitYear",value:function(e){if("string"==typeof e){var t=e.split("-");return t.length&&!Number.isNaN(parseFloat(t[0]))?t[0]:""}return""}},{key:"acceptedDateValue",value:function(e){return/^([0-9][0-9][0-9][0-9])-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/.test(e)}},{key:"computedDisplayFormat",value:function(e,t){return"month-day-year"===e?"month-day-year":"day-month-year"===e?"day-month-year":"en"===t||"en-US"===t?"month-day-year":"day-month-year"}},{key:"getDateFormat",value:function(t){return"month-day-year"===e.computedDisplayFormat(t.displayFormat,t.intl.locale)?t.intl.formatMessage({id:"Terra.date.input.formatMonthDayYear"}):t.intl.formatMessage({id:"Terra.date.input.formatDayMonthYear"})}}]),e}();i.inputType={YEAR:0,MONTH:1,DAY:2},i.MinYearValue=1900,i.MaxYearValue=2100;t.default=i},46833:function(e,t,a){var n=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(10434)),l=n(a(70215)),i=n(a(29270)),u=n(a(45697)),o=n(a(67294)),d=n(a(55142)),s=a(55877),h=["value","label","description","disabled","isInvalid","showIsInvalid"],p={value:u.default.string,label:u.default.string,description:u.default.string,disabled:u.default.bool,isInvalid:u.default.bool,showIsInvalid:u.default.bool};function f(e){var t=e.value,a=e.label,n=e.description,u=e.disabled,p=e.isInvalid,f=e.showIsInvalid,c=(0,l.default)(e,h),y=(0,s.v4)(),m="".concat(y,"-label"),v="".concat(y,"-description");return o.default.createElement(o.default.Fragment,null,t&&o.default.createElement(i.default,{text:a,id:m}),o.default.createElement(d.default,(0,r.default)({},c,{value:t,disabled:u,"aria-disabled":u,isInvalid:f&&p,"aria-invalid":p,"aria-labelledby":t?m:void 0,"aria-label":t?void 0:a,"aria-describedby":v})),o.default.createElement(i.default,{id:v,text:n}))}f.propTypes=p,f.defaultProps={isInvalid:!1,showIsInvalid:!1};t.default=f},36654:function(e,t,a){var n=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var a=d(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=l?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(n,i,u):n[i]=e[i]}return n.default=e,a&&a.set(e,n),n}(a(67294)),u=n(a(29270)),o=n(a(45697));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(d=function(e){return e?a:t})(e)}var s={value:o.default.string,readThis:o.default.string};function h(e){var t=(0,i.useState)(void 0),a=(0,l.default)(t,2),n=a[0],r=a[1],o=(0,i.useState)(void 0),d=(0,l.default)(o,2),s=d[0],h=d[1],p=(0,i.useState)(e.value),f=(0,l.default)(p,2),c=f[0],y=f[1],m=function(){r("status"),h("polite"),y(e.value)};return e.value&&!c||e.value&&c&&e.value!==c?m():!e.value&&c&&(r(void 0),h(void 0),y(void 0)),i.default.createElement(u.default,{"aria-hidden":!e.value,text:e.readThis,"aria-live":s,role:n})}h.propTypes=s;t.default=h},862:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"DateInput-module__orion-fusion-theme___n1pvh","clinical-lowlight-theme":"DateInput-module__clinical-lowlight-theme___dojK4","date-input":"DateInput-module__date-input___RRdJH","month-select-wrapper":"DateInput-module__month-select-wrapper___2C8-S",focused:"DateInput-module__focused___7D8Ko",disabled:"DateInput-module__disabled___Q4Fq+",error:"DateInput-module__error___F1pdO",incomplete:"DateInput-module__incomplete___agVgr","month-select":"DateInput-module__month-select___PRPkf","is-placeholder":"DateInput-module__is-placeholder___yWZp6","date-input-day":"DateInput-module__date-input-day___fxF+e","date-input-year":"DateInput-module__date-input-year___jgdHm","format-text":"DateInput-module__format-text___XHohD"}}}]);