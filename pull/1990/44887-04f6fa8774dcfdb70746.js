"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[44887],{44887:function(e,t,a){var i=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(a(10434)),s=i(a(70215)),u=i(a(56690)),o=i(a(89728)),d=i(a(94993)),r=i(a(73808)),f=i(a(66115)),c=i(a(61655)),h=i(a(67294)),m=a(25387),p=i(a(45697)),T=i(a(19845)),D=i(a(47341)),v=i(a(28411)),g=i(a(43671)),C=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=_(t);if(a&&a.has(e))return a.get(e);var i={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var u=l?Object.getOwnPropertyDescriptor(e,s):null;u&&(u.get||u.set)?Object.defineProperty(i,s,u):i[s]=e[s]}return i.default=e,a&&a.set(e,i),i}(a(51051)),b=i(a(47362)),k=i(a(61947)),S=i(a(77947)),y=i(a(42774)),O=["ariaLabel","dateInputAttributes","disabled","excludeDates","filterDate","includeDates","initialTimeZone","isIncomplete","isInvalid","isInvalidMeridiem","onBlur","onChange","onChangeRaw","onClickOutside","onFocus","onRequestClose","onSelect","maxDate","minDate","name","required","showSeconds","timeInputAttributes","value","timeVariant"];function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_=function(e){return e?a:t})(e)}function V(e,t,a){return t=(0,r.default)(t),(0,d.default)(e,B()?Reflect.construct(t,a||[],(0,r.default)(e).constructor):t.apply(e,a))}function B(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(B=function(){return!!e})()}var M=T.default.bind(k.default),w={ariaLabel:p.default.string,dateInputAttributes:p.default.object,disabled:p.default.bool,excludeDates:p.default.arrayOf(p.default.string),filterDate:p.default.func,includeDates:p.default.arrayOf(p.default.string),initialTimeZone:p.default.string,intl:p.default.shape({locale:p.default.string}).isRequired,isIncomplete:p.default.bool,isInvalid:p.default.bool,isInvalidMeridiem:p.default.bool,maxDate:p.default.string,minDate:p.default.string,name:p.default.string.isRequired,onBlur:p.default.func,onChange:p.default.func,onChangeRaw:p.default.func,onClickOutside:p.default.func,onFocus:p.default.func,onRequestClose:p.default.func,onSelect:p.default.func,required:p.default.bool,showSeconds:p.default.bool,timeInputAttributes:p.default.object,value:p.default.string,timeVariant:p.default.oneOf([S.default.FORMAT_12_HOUR,S.default.FORMAT_24_HOUR])},A={dateInputAttributes:void 0,disabled:!1,excludeDates:void 0,filterDate:void 0,includeDates:void 0,isIncomplete:!1,isInvalid:!1,isInvalidMeridiem:!1,maxDate:"2100-12-31",minDate:"1900-01-01",onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,showSeconds:!1,timeInputAttributes:void 0,value:void 0,timeVariant:S.default.FORMAT_24_HOUR,initialTimeZone:S.default.getLocalTimeZone()},R=function(e){function t(e){var a;return(0,u.default)(this,t),(a=V(this,t,[e])).initialTimeZone=S.default.checkIfTimeZoneIsValid(e.initialTimeZone),a.state={dateTime:S.default.createSafeDate(e.value,a.initialTimeZone),isAmbiguousTime:!1,isTimeClarificationOpen:!1,dateFormat:b.default.getFormatByLocale(e.intl.locale)},a.dateValue=b.default.formatMomentDate(a.state.dateTime,a.state.dateFormat)||"",a.timeValue=S.default.hasTime(a.props.value,a.initialTimeZone)?S.default.getTime(a.props.value,a.props.showSeconds,a.initialTimeZone):"",a.isDefaultDateTimeAcceptable=!0,a.wasOffsetButtonClicked=!1,a.handleDateChange=a.handleDateChange.bind((0,f.default)(a)),a.handleDateChangeRaw=a.handleDateChangeRaw.bind((0,f.default)(a)),a.handleTimeChange=a.handleTimeChange.bind((0,f.default)(a)),a.handleOnSelect=a.handleOnSelect.bind((0,f.default)(a)),a.handleOnDateBlur=a.handleOnDateBlur.bind((0,f.default)(a)),a.handleOnTimeBlur=a.handleOnTimeBlur.bind((0,f.default)(a)),a.handleBlur=a.handleBlur.bind((0,f.default)(a)),a.handleDaylightSavingButtonClick=a.handleDaylightSavingButtonClick.bind((0,f.default)(a)),a.handleStandardTimeButtonClick=a.handleStandardTimeButtonClick.bind((0,f.default)(a)),a.handleOnDateInputFocus=a.handleOnDateInputFocus.bind((0,f.default)(a)),a.handleOnTimeInputFocus=a.handleOnTimeInputFocus.bind((0,f.default)(a)),a.handleFocus=a.handleFocus.bind((0,f.default)(a)),a.handleOnCalendarButtonClick=a.handleOnCalendarButtonClick.bind((0,f.default)(a)),a.handleOffsetButtonClick=a.handleOffsetButtonClick.bind((0,f.default)(a)),a.handleOnRequestClose=a.handleOnRequestClose.bind((0,f.default)(a)),a.dateTimePickerContainer=h.default.createRef(),a.containerHasFocus=!1,a.prevDateTime=S.default.createSafeDate(e.value,a.initialTimeZone),a}return(0,c.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){this.isDefaultDateAcceptable=this.validateDefaultDate()}},{key:"componentDidUpdate",value:function(){if(this.state.dateTime&&S.default.isValidTime(this.timeValue,this.props.showSeconds)){var e=S.default.getTime(this.state.dateTime.format(),this.props.showSeconds,this.initialTimeZone);this.timeValue!==e&&(this.timeValue=e,this.forceUpdate())}}},{key:"handleOnSelect",value:function(e,t){this.dateValue=b.default.formatISODate(t,this.state.dateFormat);var a=this.state.dateTime?this.state.dateTime.clone():null,i=S.default.syncDateTime(a,t,this.timeValue,this.props.showSeconds);a&&a.format()===i.format()||this.checkAmbiguousTime(i),this.props.onSelect&&this.props.onSelect(e,i.format())}},{key:"handleOnDateBlur",value:function(e){var t=this,a=e.relatedTarget?e.relatedTarget:document.activeElement;if(!this.dateTimePickerContainer.current.contains(a)){var i=S.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds)?this.state.dateTime:null;this.checkAmbiguousTime(i,(function(){e.persist(),t.state.isAmbiguousTime&&t.state.isTimeClarificationOpen||t.handleBlur(e,t.state.dateTime)}))}}},{key:"handleOnTimeBlur",value:function(e){var t,a=this,i=e.relatedTarget?e.relatedTarget:document.activeElement;this.dateTimePickerContainer.current.contains(i)||(S.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds)&&(t=S.default.updateTime(this.state.dateTime,this.timeValue,this.props.showSeconds)),this.checkAmbiguousTime(t,(function(){e.persist(),a.state.isAmbiguousTime&&a.state.isTimeClarificationOpen||a.handleBlur(e,a.state.dateTime)})))}},{key:"handleBlur",value:function(e,t){if(this.props.onBlur){var a=this.getMetadata(t);this.props.onBlur(e,a)}this.containerHasFocus=!1}},{key:"handleDateChange",value:function(e,t){var a,i=b.default.formatISODate(t,"YYYY-MM-DD"),n=b.default.isValidDate(i,"YYYY-MM-DD"),l=S.default.isValidTime(this.timeValue,this.props.showSeconds);if(n&&(this.dateValue=b.default.formatISODate(t,this.state.dateFormat)),n){var s=this.state.dateTime?this.state.dateTime.clone():S.default.createSafeDate(i,this.initialTimeZone);if(a=S.default.syncDateTime(s,t,this.timeValue,this.props.showSeconds),s.isDST()&&3===s.hours()){var u=!1;a.isDST()||(a.subtract(1,"hours"),u=!0),!s.subtract(1,"days").isDST()&&a.isDST()&&(a.subtract(1,"hours"),u=!0),s&&3===s._a[3]&&u&&(a.add(1,"hours"),u=!1)}this.prevDateTime&&2===this.prevDateTime._a[3]&&3===this.prevDateTime.hours()&&a.subtract(1,"hours"),l&&(this.timeValue=S.default.getTime(a.format(),this.props.showSeconds,this.initialTimeZone))}n&&l||""===this.dateValue&&""===this.timeValue?this.handleChange(e,a):this.setState({dateTime:a})}},{key:"handleDateChangeRaw",value:function(e,t){this.dateValue=t,b.default.isValidDate(this.dateValue,this.state.dateFormat)&&this.isDateTimeAcceptable(S.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone))||(this.prevDateTime=this.state.dateTime?this.state.dateTime:this.prevDateTime,this.setState({dateTime:null})),this.handleChangeRaw(e,t)}},{key:"handleTimeChange",value:function(e,t){this.timeValue=t;var a=b.default.isValidDate(this.dateValue,this.state.dateFormat)&&this.isDateTimeAcceptable(S.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone)),i=S.default.isValidTime(this.timeValue,this.props.showSeconds),n=this.state.dateTime?this.state.dateTime.clone():null,l=!1;if("keydown"===e.type){var s=this.timeValue.split(":");if("n"===e.key||"N"===e.key)n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),l=!0;else if("-"===e.key||"_"===e.key){a||(n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),l=!0),"23"===s[0]&&"59"===s[1]&&(n=n.subtract(1,"d"),l=!0);var u=S.default.updateTime(n,this.timeValue,this.props.showSeconds),o=n.clone().subtract(1,"minute").hours();u.isDST()&&o!==u.hours()&&(s[0]="0".concat(o).slice(-2),this.timeValue=s.join(":")),n.isBefore(b.default.MIN_DATE.concat(" ","00:00:00"))&&(s[0]="00",s[1]="00",this.props.showSeconds&&(s[2]="00"),this.timeValue=s.join(":"),n=S.default.updateTime(b.default.createSafeDate(b.default.MIN_DATE,this.initialTimeZone),this.timeValue,this.props.showSeconds))}else"="===e.key||"+"===e.key?(a||(n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),l=!0),"00"===s[0]&&"00"===s[1]&&(n=n.add(1,"d"),l=!0),n.isAfter(b.default.MAX_DATE.concat(" ","23:59:59"))&&(s[0]="23",s[1]="59",this.props.showSeconds&&(s[2]="59"),this.timeValue=s.join(":"),n=S.default.updateTime(b.default.createSafeDate(b.default.MAX_DATE,this.initialTimeZone),this.timeValue,this.props.showSeconds))):this.props.timeVariant!==S.default.FORMAT_12_HOUR||"a"!==e.key&&"A"!==e.key&&"p"!==e.key&&"P"!==e.key||a||(n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),l=!0)}if(l&&(this.dateValue=b.default.formatISODate(n.format("YYYY-MM-DD"),this.state.dateFormat),a=b.default.isValidDate(this.dateValue,this.state.dateFormat)&&this.isDateTimeAcceptable(S.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone))),a&&i){var d=S.default.updateTime(n,this.timeValue,this.props.showSeconds);e.keyCode===C.KEY_DOWN&&n&&d&&n.format()===d.format()&&d.subtract(1,"hours");var r=this.timeValue;d&&(r=S.default.getTime(d.format(),this.props.showSeconds,this.initialTimeZone)),this.handleChangeRaw(e,r),this.handleChange(e,d)}else if(""===this.dateValue&&""===this.timeValue)this.handleChangeRaw(e,this.timeValue),this.handleChange(e,null);else{if(!a&&i){var f=S.default.updateTime(n,this.timeValue,this.props.showSeconds);this.setState({dateTime:f})}this.handleChangeRaw(e,this.timeValue)}}},{key:"handleChange",value:function(e,t){if(this.setState({dateTime:t}),this.props.onChange&&(this.state.isAmbiguousTime||!S.default.checkAmbiguousTime(t))){var a=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",a)}}},{key:"handleChangeRaw",value:function(e,t){if(this.props.onChangeRaw){var a=this.getMetadata(t);this.props.onChangeRaw(e,t,a)}}},{key:"handleOnDateInputFocus",value:function(e){this.handleOnInputFocus(e)}},{key:"handleOnTimeInputFocus",value:function(e){this.handleOnInputFocus(e)}},{key:"handleOnInputFocus",value:function(e){this.handleFocus(e),this.isDefaultDateAcceptable||(this.dateValue="",this.timeValue="",this.handleChange(e,null),this.isDefaultDateAcceptable=!0)}},{key:"handleFocus",value:function(e){!this.props.onFocus||this.containerHasFocus||this.dateTimePickerContainer.current.contains(e.relatedTarget)||(this.props.onFocus(e),this.containerHasFocus=!0)}},{key:"handleOnCalendarButtonClick",value:function(e){this.isDefaultDateAcceptable||this.validateDefaultDate()?this.isDefaultDateAcceptable=!0:(this.dateValue="",this.timeValue="",this.handleChange(e,null))}},{key:"handleDaylightSavingButtonClick",value:function(e){this.setState({isTimeClarificationOpen:!1});var t=this.state.dateTime.clone();if(t.isDST()){if(this.props.onChange&&!this.wasOffsetButtonClicked){var a=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",a)}}else if(t.subtract(1,"hour"),this.setState({dateTime:t}),this.props.onChange){var i=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",i)}this.wasOffsetButtonClicked||this.handleBlur(e,t),this.wasOffsetButtonClicked=!1}},{key:"handleStandardTimeButtonClick",value:function(e){this.setState({isTimeClarificationOpen:!1});var t=this.state.dateTime.clone();if(t.isDST()){if(t.add(1,"hour"),this.setState({dateTime:t}),this.props.onChange){var a=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",a)}}else if(this.props.onChange&&!this.wasOffsetButtonClicked){var i=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",i)}this.wasOffsetButtonClicked||this.handleBlur(e,t),this.wasOffsetButtonClicked=!1}},{key:"handleOffsetButtonClick",value:function(){this.wasOffsetButtonClicked=!0,this.setState((function(e){return{isTimeClarificationOpen:!e.isTimeClarificationOpen}}))}},{key:"handleOnRequestClose",value:function(){this.setState({isTimeClarificationOpen:!1})}},{key:"getMetadata",value:function(e){var t=e&&S.default.isMomentObject(e)?e.clone():null;if(b.default.isValidDate(this.dateValue,this.state.dateFormat)){var a=S.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone);a&&!a.isSame(t,"day")&&(t=a)}var i="",n=S.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds);n&&t&&(i=t.format());var l=this.timeValue||"";i&&(l=S.default.getTime(i,this.props.showSeconds,this.initialTimeZone));var s=!1,u="".concat(this.dateValue?this.dateValue:""," ").concat(l).trim();(""===u||n&&t&&this.isDateTimeAcceptable(t))&&(s=!0);var o=!1;return n&&t&&(o=S.default.checkAmbiguousTime(t)),{iSO:i,inputValue:u,dateValue:this.dateValue||"",timeValue:l,isAmbiguousHour:o,isCompleteValue:n,isValidValue:s}}},{key:"checkAmbiguousTime",value:function(e,t){if(!this.state.isTimeClarificationOpen){var a=!1,i=this.state.isAmbiguousTime;if(e&&e.isValid()){var n=e.clone();a=S.default.checkAmbiguousTime(n)}this.setState({isAmbiguousTime:a,isTimeClarificationOpen:a&&!i},t)}}},{key:"isDateTimeAcceptable",value:function(e){var t=!0;return b.default.isDateOutOfRange(e,S.default.createSafeDate(b.default.getMinDate(this.props.minDate),this.initialTimeZone),S.default.createSafeDate(b.default.getMaxDate(this.props.maxDate),this.initialTimeZone))&&(t=!1),b.default.isDateExcluded(e,this.props.excludeDates)&&(t=!1),t}},{key:"validateDefaultDate",value:function(){return this.isDateTimeAcceptable(this.state.dateTime)}},{key:"renderTimeClarification",value:function(){return h.default.createElement(y.default,{ambiguousDateTime:this.state.dateTime.format(),disabled:this.props.disabled,isOpen:this.state.isTimeClarificationOpen,isOffsetButtonHidden:!this.state.isAmbiguousTime,onDaylightSavingButtonClick:this.handleDaylightSavingButtonClick,onStandardTimeButtonClick:this.handleStandardTimeButtonClick,onOffsetButtonClick:this.handleOffsetButtonClick,onRequestClose:this.handleOnRequestClose,onBlur:this.handleOnTimeBlur,onFocus:this.handleFocus,initialTimeZone:this.initialTimeZone})}},{key:"render",value:function(){var e=this,t=this.props,a=t.ariaLabel,i=t.dateInputAttributes,n=t.disabled,u=t.excludeDates,o=t.filterDate,d=t.includeDates,r=(t.initialTimeZone,t.isIncomplete),f=t.isInvalid,c=t.isInvalidMeridiem,m=(t.onBlur,t.onChange,t.onChangeRaw,t.onClickOutside),p=(t.onFocus,t.onRequestClose),T=(t.onSelect,t.maxDate),D=t.minDate,C=t.name,k=t.required,y=t.showSeconds,_=t.timeInputAttributes,V=(t.value,t.timeVariant),B=(0,s.default)(t,O),w=this.state.dateTime?this.state.dateTime.clone():null,A=b.default.formatMomentDate(w,"YYYY-MM-DD"),R=this.context,F=!!this.state.dateTime&&w.isAfter(S.default.createSafeDate(b.default.MAX_DATE.concat(" ","23:58:59"),this.initialTimeZone)),Z=!!this.state.dateTime&&w.isBefore(S.default.createSafeDate(b.default.MIN_DATE.concat(" ","00:01:00"),this.initialTimeZone));return h.default.createElement("div",(0,l.default)({},B,{className:M("date-time-picker",R.className),ref:this.dateTimePickerContainer}),h.default.createElement("input",{"data-terra-date-time-input-hidden":!0,type:"hidden",name:C,value:null!=w&&w.isValid()?w.format():""}),h.default.createElement("div",{className:M("date-facade")},h.default.createElement(v.default,{onCalendarButtonClick:this.handleOnCalendarButtonClick,onChange:this.handleDateChange,onChangeRaw:this.handleDateChangeRaw,onSelect:this.handleOnSelect,onClickOutside:m,onRequestClose:p,onBlur:this.handleOnDateBlur,onFocus:this.handleOnDateInputFocus,excludeDates:u,filterDate:o,includeDates:d,inputAttributes:i,maxDate:b.default.getMaxDate(T),minDate:b.default.getMinDate(D),selectedDate:A,value:A,name:"input",disabled:n,disableButtonFocusOnClose:!0,isIncomplete:r,isInvalid:f,required:k,initialTimeZone:this.initialTimeZone,isDefaultDateAcceptable:!0,ariaLabel:a})),h.default.createElement("div",{className:M("time-facade")},h.default.createElement(g.default,{onBlur:this.handleOnTimeBlur,onChange:this.handleTimeChange,onFocus:this.handleOnTimeInputFocus,inputAttributes:_,name:"input",value:this.timeValue,disabled:n,variant:V,refCallback:function(t){e.hourInput=t},showSeconds:y,isIncomplete:r,isInvalid:f,isInvalidMeridiem:c,required:k,atMaxDate:F,atMinDate:Z}),this.state.isAmbiguousTime&&this.state.dateTime?this.renderTimeClarification():null))}}]),t}(h.default.Component);R.propTypes=w,R.defaultProps=A,R.contextType=D.default;t.default=(0,m.injectIntl)(R)},77947:function(e,t,a){var i=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(56690)),l=i(a(89728)),s=i(a(80008)),u=i(a(47362)),o=i(a(90592)),d=function(){function e(){(0,n.default)(this,e)}return(0,l.default)(e,null,[{key:"hasTime",value:function(t,a){if(!e.createSafeDate(t,a))return!1;var i="";return t.indexOf(" ")>0&&(i=t.split(" ")[1]),t.indexOf("T")>0&&(i=t.split("T")[1]),i.length>0}},{key:"syncDateTime",value:function(t,a,i,n){var l=(0,s.default)(a);if(t&&t.isValid()){var u=t.clone();return l.isValid()&&u.year(l.get("year")).month(l.get("month")).date(l.get("date")),i&&(!n&&5===i.length||n&&8===i.length)&&(u=e.updateTime(u,i,n)),u}if(l.isValid()){var o=l.clone();return i&&(!n&&5===i.length||n&&8===i.length)&&(o=e.updateTime(o,i,n)),o}return t}},{key:"updateTime",value:function(t,a,i){if(!t||!t.isValid())return null;var n=t.clone(),l=i?"HH:mm:ss":"HH:mm",u=(0,s.default)(a,l,!0),o=t.tz()||e.getLocalTimeZone();if(u.isValid()){var d=n.format("YYYY-MM-DD").concat(" ").concat(u.format(l));return s.default.tz(d,o)}return t}},{key:"getTime",value:function(t,a,i){var n=a?"HH:mm:ss":"HH:mm",l=e.createSafeDate(t,i);return u.default.formatMomentDate(l,n)}},{key:"isValidDateTime",value:function(t,a,i,n){return u.default.isValidDate(t,i)&&e.isValidTime(a,n)}},{key:"isValidTime",value:function(e,t){var a=t?"HH:mm:ss":"HH:mm";return(0,s.default)(e,a,!0).isValid()}},{key:"checkAmbiguousTime",value:function(e){if(!e||!e.isValid())return!1;var t=s.default.tz(e.format(),e.tz()),a=t.clone(),i=t.clone();a.add(1,"hour"),i.subtract(1,"hour");var n=t.isDST()&&!a.isDST(),l=!t.isDST()&&i.isDST();return n||l}},{key:"getDaylightSavingTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);return i.isValid()?(i.subtract(1,"days"),i.tz(i.tz()).format("z")):""}},{key:"getDaylightSavingExpandedTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);if(!i.isValid())return"";i.subtract(1,"days");var n=i.tz(),l=i.tz(n);return s.default.tz.zone(n).name+l.format(" z Z")}},{key:"getStandardTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);return i.isValid()?(i.add(1,"days"),i.tz(i.tz()).format("z")):""}},{key:"getStandardExpandedTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);if(!i.isValid())return"";i.add(1,"days");var n=i.tz(),l=i.tz(n);return s.default.tz.zone(n).name+l.format(" z Z")}},{key:"convertDateTimeStringToMomentObject",value:function(t,a,i,n,l){var s=e.createSafeDate(u.default.convertToISO8601(t,i),l);return e.updateTime(s,a,n)}},{key:"createSafeDate",value:function(t,a){if(t){var i=a&&s.default.tz.zone(a)?s.default.tz(t,a):s.default.tz(t,e.getLocalTimeZone());return i.isValid()?i:void 0}}},{key:"isMomentObject",value:function(e){return s.default.isMoment(e)}},{key:"getLocalTimeZone",value:function(){return s.default.tz.guess()}},{key:"checkIfTimeZoneIsValid",value:function(t){return s.default.tz.zone(t)?t:e.getLocalTimeZone()}}]),e}();d.FORMAT_12_HOUR=o.default.FORMAT_12_HOUR,d.FORMAT_24_HOUR=o.default.FORMAT_24_HOUR;t.default=d},42774:function(e,t,a){var i=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(56690)),l=i(a(89728)),s=i(a(94993)),u=i(a(73808)),o=i(a(66115)),d=i(a(61655)),r=i(a(67294)),f=i(a(45697)),c=i(a(19845)),h=i(a(31501)),m=i(a(55281)),p=a(25387),T=i(a(77947)),D=i(a(44548));function v(e,t,a){return t=(0,u.default)(t),(0,s.default)(e,g()?Reflect.construct(t,a||[],(0,u.default)(e).constructor):t.apply(e,a))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var C=c.default.bind(D.default),b={ambiguousDateTime:f.default.string,intl:f.default.shape({formatMessage:f.default.func}).isRequired,isOpen:f.default.bool.isRequired,isOffsetButtonHidden:f.default.bool.isRequired,onBlur:f.default.func,onDaylightSavingButtonClick:f.default.func.isRequired,onFocus:f.default.func,onStandardTimeButtonClick:f.default.func.isRequired,onOffsetButtonClick:f.default.func.isRequired,onRequestClose:f.default.func.isRequired,disabled:f.default.bool,initialTimeZone:f.default.string},k=function(e){function t(e){var a;return(0,n.default)(this,t),(a=v(this,t,[e])).state={offsetDisplay:"",offsetLongDisplay:""},a.handleDaylightSavingButtonClick=a.handleDaylightSavingButtonClick.bind((0,o.default)(a)),a.handleStandardTimeButtonClick=a.handleStandardTimeButtonClick.bind((0,o.default)(a)),a}return(0,d.default)(t,e),(0,l.default)(t,[{key:"handleDaylightSavingButtonClick",value:function(e){this.setState({offsetDisplay:T.default.getDaylightSavingTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone),offsetLongDisplay:T.default.getDaylightSavingExpandedTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone)}),this.props.onDaylightSavingButtonClick&&this.props.onDaylightSavingButtonClick(e)}},{key:"handleStandardTimeButtonClick",value:function(e){this.setState({offsetDisplay:T.default.getStandardTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone),offsetLongDisplay:T.default.getStandardExpandedTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone)}),this.props.onStandardTimeButtonClick&&this.props.onStandardTimeButtonClick(e)}},{key:"render",value:function(){this.props.isOffsetButtonHidden&&(this.state.offsetDisplay="");var e=C(["button-offset",{"button-offset-hidden":this.props.isOffsetButtonHidden||!this.state.offsetDisplay}]),t=this.props.intl,a=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.title"}),i=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.message"}),n=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.button.daylightSaving"}),l=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.button.standardTime"});return r.default.createElement(r.default.Fragment,null,r.default.createElement(h.default,{classNameModal:C("time-clarification"),ariaLabel:"Time Clarification",isOpen:this.props.isOpen,onRequestClose:this.props.onRequestClose,closeOnEsc:!1,closeOnOutsideClick:!1,zIndex:"9000"},r.default.createElement("div",null,r.default.createElement("header",{className:C("header")},r.default.createElement("h1",{className:C("title")},a)),r.default.createElement("div",{className:C("body")},r.default.createElement("p",null,i)),r.default.createElement("div",{className:C("buttons")},r.default.createElement(m.default,{text:n,onClick:this.handleDaylightSavingButtonClick,variant:m.default.Opts.Variants.EMPHASIS,className:C("button-daylight")}),r.default.createElement(m.default,{text:l,onClick:this.handleStandardTimeButtonClick,variant:m.default.Opts.Variants.EMPHASIS,className:C("button-standard")})))),r.default.createElement("div",{className:C("offset-button-container")},r.default.createElement(m.default,{title:this.state.offsetLongDisplay,"aria-label":this.state.offsetLongDisplay,className:e,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onClick:this.props.onOffsetButtonClick,text:this.state.offsetDisplay,isCompact:!0,isDisabled:this.props.disabled})))}}]),t}(r.default.Component);k.propTypes=b,k.defaultProps={disabled:!1};t.default=(0,p.injectIntl)(k)},61947:function(e,t,a){a.r(t),t.default={"date-time-picker":"DateTimePicker-module__date-time-picker___eJnBN","date-facade":"DateTimePicker-module__date-facade___AMtXQ","time-facade":"DateTimePicker-module__time-facade___+bEdN"}},44548:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"_TimeClarification-module__clinical-lowlight-theme___0nCYU","orion-fusion-theme":"_TimeClarification-module__orion-fusion-theme___O+Yca","time-clarification":"_TimeClarification-module__time-clarification___qZubd",header:"_TimeClarification-module__header___AYp8S",title:"_TimeClarification-module__title___yBRsr",body:"_TimeClarification-module__body___l5d62",buttons:"_TimeClarification-module__buttons___tJ3zE","button-daylight":"_TimeClarification-module__button-daylight___okKUr","button-standard":"_TimeClarification-module__button-standard___5rzmZ","button-offset":"_TimeClarification-module__button-offset___tB1q1","button-offset-hidden":"_TimeClarification-module__button-offset-hidden___KRFhV","offset-button-container":"_TimeClarification-module__offset-button-container___V6-Sz"}}}]);