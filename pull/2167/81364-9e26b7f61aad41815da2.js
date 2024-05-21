"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[81364],{81364:function(e,t,a){var i=a(24994),n=a(73738);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a(94634)),l=i(a(91847)),u=i(a(43693)),o=i(a(17383)),d=i(a(34579)),r=i(a(28452)),f=i(a(63072)),c=i(a(29511)),h=i(a(96540)),m=a(8604),p=i(a(5556)),T=i(a(67967)),D=i(a(23695)),v=i(a(70283)),g=i(a(30963)),C=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=_(t);if(a&&a.has(e))return a.get(e);var i={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var u=s?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(i,l,u):i[l]=e[l]}return i.default=e,a&&a.set(e,i),i}(a(25966)),b=i(a(541)),k=i(a(5405)),y=i(a(19449)),O=i(a(53203)),S=["ariaLabel","dateInputAttributes","disabled","excludeDates","filterDate","includeDates","initialTimeZone","isIncomplete","isInvalid","isInvalidMeridiem","onBlur","onChange","onChangeRaw","onClickOutside","onFocus","onRequestClose","onSelect","maxDate","minDate","name","required","showSeconds","timeInputAttributes","value","timeVariant","errorId"];function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_=function(e){return e?a:t})(e)}function V(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?V(Object(a),!0).forEach((function(t){(0,u.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):V(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function w(e,t,a){return t=(0,f.default)(t),(0,r.default)(e,M()?Reflect.construct(t,a||[],(0,f.default)(e).constructor):t.apply(e,a))}function M(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(M=function(){return!!e})()}var A=T.default.bind(k.default),F={ariaLabel:p.default.string,dateInputAttributes:p.default.object,disabled:p.default.bool,excludeDates:p.default.arrayOf(p.default.string),filterDate:p.default.func,includeDates:p.default.arrayOf(p.default.string),initialTimeZone:p.default.string,intl:p.default.shape({locale:p.default.string}).isRequired,isIncomplete:p.default.bool,isInvalid:p.default.bool,isInvalidMeridiem:p.default.bool,maxDate:p.default.string,minDate:p.default.string,name:p.default.string.isRequired,onBlur:p.default.func,onChange:p.default.func,onChangeRaw:p.default.func,onClickOutside:p.default.func,onFocus:p.default.func,onRequestClose:p.default.func,onSelect:p.default.func,required:p.default.bool,showSeconds:p.default.bool,timeInputAttributes:p.default.object,value:p.default.string,timeVariant:p.default.oneOf([y.default.FORMAT_12_HOUR,y.default.FORMAT_24_HOUR]),errorId:p.default.string},R={dateInputAttributes:void 0,disabled:!1,excludeDates:void 0,filterDate:void 0,includeDates:void 0,isIncomplete:!1,isInvalid:!1,isInvalidMeridiem:!1,maxDate:"2100-12-31",minDate:"1900-01-01",onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,showSeconds:!1,timeInputAttributes:void 0,value:void 0,timeVariant:y.default.FORMAT_24_HOUR,initialTimeZone:y.default.getLocalTimeZone(),errorId:""},I=function(e){function t(e){var a;return(0,o.default)(this,t),(a=w(this,t,[e])).initialTimeZone=y.default.checkIfTimeZoneIsValid(e.initialTimeZone),a.state={dateTime:y.default.createSafeDate(e.value,a.initialTimeZone),isAmbiguousTime:!1,isTimeClarificationOpen:!1,dateFormat:b.default.getFormatByLocale(e.intl.locale)},a.dateValue=b.default.formatMomentDate(a.state.dateTime,a.state.dateFormat)||"",a.timeValue=y.default.hasTime(a.props.value,a.initialTimeZone)?y.default.getTime(a.props.value,a.props.showSeconds,a.initialTimeZone):"",a.isDefaultDateTimeAcceptable=!0,a.wasOffsetButtonClicked=!1,a.handleDateChange=a.handleDateChange.bind(a),a.handleDateChangeRaw=a.handleDateChangeRaw.bind(a),a.handleTimeChange=a.handleTimeChange.bind(a),a.handleOnSelect=a.handleOnSelect.bind(a),a.handleOnDateBlur=a.handleOnDateBlur.bind(a),a.handleOnTimeBlur=a.handleOnTimeBlur.bind(a),a.handleBlur=a.handleBlur.bind(a),a.handleDaylightSavingButtonClick=a.handleDaylightSavingButtonClick.bind(a),a.handleStandardTimeButtonClick=a.handleStandardTimeButtonClick.bind(a),a.handleOnDateInputFocus=a.handleOnDateInputFocus.bind(a),a.handleOnTimeInputFocus=a.handleOnTimeInputFocus.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleOnCalendarButtonClick=a.handleOnCalendarButtonClick.bind(a),a.handleOffsetButtonClick=a.handleOffsetButtonClick.bind(a),a.handleOnRequestClose=a.handleOnRequestClose.bind(a),a.dateTimePickerContainer=h.default.createRef(),a.containerHasFocus=!1,a.prevDateTime=y.default.createSafeDate(e.value,a.initialTimeZone),a}return(0,c.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){this.isDefaultDateAcceptable=this.validateDefaultDate()}},{key:"componentDidUpdate",value:function(){if(this.state.dateTime&&y.default.isValidTime(this.timeValue,this.props.showSeconds)){var e=y.default.getTime(this.state.dateTime.format(),this.props.showSeconds,this.initialTimeZone);this.timeValue!==e&&(this.timeValue=e,this.forceUpdate())}}},{key:"handleOnSelect",value:function(e,t){this.dateValue=b.default.formatISODate(t,this.state.dateFormat);var a=this.state.dateTime?this.state.dateTime.clone():null,i=y.default.syncDateTime(a,t,this.timeValue,this.props.showSeconds);a&&a.format()===i.format()||this.checkAmbiguousTime(i),this.props.onSelect&&this.props.onSelect(e,i.format())}},{key:"handleOnDateBlur",value:function(e){var t=this,a=e.relatedTarget?e.relatedTarget:document.activeElement;if(!this.dateTimePickerContainer.current.contains(a)){var i=y.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds)?this.state.dateTime:null;this.checkAmbiguousTime(i,(function(){e.persist(),t.state.isAmbiguousTime&&t.state.isTimeClarificationOpen||t.handleBlur(e,t.state.dateTime)}))}}},{key:"handleOnTimeBlur",value:function(e){var t,a=this,i=e.relatedTarget?e.relatedTarget:document.activeElement;this.dateTimePickerContainer.current.contains(i)||(y.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds)&&(t=y.default.updateTime(this.state.dateTime,this.timeValue,this.props.showSeconds)),this.checkAmbiguousTime(t,(function(){e.persist(),a.state.isAmbiguousTime&&a.state.isTimeClarificationOpen||a.handleBlur(e,a.state.dateTime)})))}},{key:"handleBlur",value:function(e,t){if(this.props.onBlur){var a=this.getMetadata(t);this.props.onBlur(e,a)}this.containerHasFocus=!1}},{key:"handleDateChange",value:function(e,t){var a,i=b.default.formatISODate(t,"YYYY-MM-DD"),n=b.default.isValidDate(i,"YYYY-MM-DD"),s=y.default.isValidTime(this.timeValue,this.props.showSeconds);if(n&&(this.dateValue=b.default.formatISODate(t,this.state.dateFormat)),n){var l=this.state.dateTime?this.state.dateTime.clone():y.default.createSafeDate(i,this.initialTimeZone);if(a=y.default.syncDateTime(l,t,this.timeValue,this.props.showSeconds),l.isDST()&&3===l.hours()){var u=!1;a.isDST()||(a.subtract(1,"hours"),u=!0),!l.subtract(1,"days").isDST()&&a.isDST()&&(a.subtract(1,"hours"),u=!0),l&&3===l._a[3]&&u&&(a.add(1,"hours"),u=!1)}this.prevDateTime&&2===this.prevDateTime._a[3]&&3===this.prevDateTime.hours()&&a.subtract(1,"hours"),s&&(this.timeValue=y.default.getTime(a.format(),this.props.showSeconds,this.initialTimeZone))}n&&s||""===this.dateValue&&""===this.timeValue?this.handleChange(e,a):this.setState({dateTime:a})}},{key:"handleDateChangeRaw",value:function(e,t){this.dateValue=t,b.default.isValidDate(this.dateValue,this.state.dateFormat)&&this.isDateTimeAcceptable(y.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone))||(this.prevDateTime=this.state.dateTime?this.state.dateTime:this.prevDateTime,this.setState({dateTime:null})),this.handleChangeRaw(e,t)}},{key:"handleTimeChange",value:function(e,t){this.timeValue=t;var a=b.default.isValidDate(this.dateValue,this.state.dateFormat)&&this.isDateTimeAcceptable(y.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone)),i=y.default.isValidTime(this.timeValue,this.props.showSeconds),n=this.state.dateTime?this.state.dateTime.clone():null,s=!1;if("keydown"===e.type){var l=this.timeValue.split(":");if("n"===e.key||"N"===e.key)n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),s=!0;else if("-"===e.key||"_"===e.key){a||(n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),s=!0),"23"===l[0]&&"59"===l[1]&&(n=n.subtract(1,"d"),s=!0);var u=y.default.updateTime(n,this.timeValue,this.props.showSeconds),o=n.clone().subtract(1,"minute").hours();u.isDST()&&o!==u.hours()&&(l[0]="0".concat(o).slice(-2),this.timeValue=l.join(":")),n.isBefore(b.default.MIN_DATE.concat(" ","00:00:00"))&&(l[0]="00",l[1]="00",this.props.showSeconds&&(l[2]="00"),this.timeValue=l.join(":"),n=y.default.updateTime(b.default.createSafeDate(b.default.MIN_DATE,this.initialTimeZone),this.timeValue,this.props.showSeconds))}else"="===e.key||"+"===e.key?(a||(n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),s=!0),"00"===l[0]&&"00"===l[1]&&(n=n.add(1,"d"),s=!0),n.isAfter(b.default.MAX_DATE.concat(" ","23:59:59"))&&(l[0]="23",l[1]="59",this.props.showSeconds&&(l[2]="59"),this.timeValue=l.join(":"),n=y.default.updateTime(b.default.createSafeDate(b.default.MAX_DATE,this.initialTimeZone),this.timeValue,this.props.showSeconds))):this.props.timeVariant!==y.default.FORMAT_12_HOUR||"a"!==e.key&&"A"!==e.key&&"p"!==e.key&&"P"!==e.key||a||(n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),s=!0)}if(s&&(this.dateValue=b.default.formatISODate(n.format("YYYY-MM-DD"),this.state.dateFormat),a=b.default.isValidDate(this.dateValue,this.state.dateFormat)&&this.isDateTimeAcceptable(y.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone))),a&&i){var d=y.default.updateTime(n,this.timeValue,this.props.showSeconds);e.keyCode===C.KEY_DOWN&&n&&d&&n.format()===d.format()&&d.subtract(1,"hours");var r=this.timeValue;d&&(r=y.default.getTime(d.format(),this.props.showSeconds,this.initialTimeZone)),this.handleChangeRaw(e,r),this.handleChange(e,d)}else if(""===this.dateValue&&""===this.timeValue)this.handleChangeRaw(e,this.timeValue),this.handleChange(e,null);else{if(!a&&i){var f=y.default.updateTime(n,this.timeValue,this.props.showSeconds);this.setState({dateTime:f})}this.handleChangeRaw(e,this.timeValue)}}},{key:"handleChange",value:function(e,t){if(this.setState({dateTime:t}),this.props.onChange&&(this.state.isAmbiguousTime||!y.default.checkAmbiguousTime(t))){var a=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",a)}}},{key:"handleChangeRaw",value:function(e,t){if(this.props.onChangeRaw){var a=this.getMetadata(t);this.props.onChangeRaw(e,t,a)}}},{key:"handleOnDateInputFocus",value:function(e){this.handleOnInputFocus(e)}},{key:"handleOnTimeInputFocus",value:function(e){this.handleOnInputFocus(e)}},{key:"handleOnInputFocus",value:function(e){this.handleFocus(e),this.isDefaultDateAcceptable||(this.dateValue="",this.timeValue="",this.handleChange(e,null),this.isDefaultDateAcceptable=!0)}},{key:"handleFocus",value:function(e){!this.props.onFocus||this.containerHasFocus||this.dateTimePickerContainer.current.contains(e.relatedTarget)||(this.props.onFocus(e),this.containerHasFocus=!0)}},{key:"handleOnCalendarButtonClick",value:function(e){this.isDefaultDateAcceptable||this.validateDefaultDate()?this.isDefaultDateAcceptable=!0:(this.dateValue="",this.timeValue="",this.handleChange(e,null))}},{key:"handleDaylightSavingButtonClick",value:function(e){this.setState({isTimeClarificationOpen:!1});var t=this.state.dateTime.clone();if(t.isDST()){if(this.props.onChange&&!this.wasOffsetButtonClicked){var a=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",a)}}else if(t.subtract(1,"hour"),this.setState({dateTime:t}),this.props.onChange){var i=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",i)}this.wasOffsetButtonClicked||this.handleBlur(e,t),this.wasOffsetButtonClicked=!1}},{key:"handleStandardTimeButtonClick",value:function(e){this.setState({isTimeClarificationOpen:!1});var t=this.state.dateTime.clone();if(t.isDST()){if(t.add(1,"hour"),this.setState({dateTime:t}),this.props.onChange){var a=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",a)}}else if(this.props.onChange&&!this.wasOffsetButtonClicked){var i=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",i)}this.wasOffsetButtonClicked||this.handleBlur(e,t),this.wasOffsetButtonClicked=!1}},{key:"handleOffsetButtonClick",value:function(){this.wasOffsetButtonClicked=!0,this.setState((function(e){return{isTimeClarificationOpen:!e.isTimeClarificationOpen}}))}},{key:"handleOnRequestClose",value:function(){this.setState({isTimeClarificationOpen:!1})}},{key:"getMetadata",value:function(e){var t=e&&y.default.isMomentObject(e)?e.clone():null;if(b.default.isValidDate(this.dateValue,this.state.dateFormat)){var a=y.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone);a&&!a.isSame(t,"day")&&(t=a)}var i="",n=y.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds);n&&t&&(i=t.format());var s=this.timeValue||"";i&&(s=y.default.getTime(i,this.props.showSeconds,this.initialTimeZone));var l=!1,o="".concat(this.dateValue?this.dateValue:""," ").concat(s).trim();(""===o||n&&t&&this.isDateTimeAcceptable(t))&&(l=!0);var d=!1;n&&t&&(d=y.default.checkAmbiguousTime(t));var r=this.state.dateFormat.match(/[^a-zA-Z0-9]/)[0],f=this.dateValue.split(r),c=s.split(":"),h=this.state.dateFormat.split(r),m=(0,u.default)((0,u.default)((0,u.default)((0,u.default)((0,u.default)((0,u.default)({},h[0],f[0]),h[1],f[1]),h[2],f[2]),"hour",c[0]),"minutes",c[1]),"seconds",c[2]);return B(B({},{iSO:i,inputValue:o,dateValue:this.dateValue||"",timeValue:s,isAmbiguousHour:d,isCompleteValue:n,isValidValue:l}),m)}},{key:"checkAmbiguousTime",value:function(e,t){if(!this.state.isTimeClarificationOpen){var a=!1,i=this.state.isAmbiguousTime;if(e&&e.isValid()){var n=e.clone();a=y.default.checkAmbiguousTime(n)}this.setState({isAmbiguousTime:a,isTimeClarificationOpen:a&&!i},t)}}},{key:"isDateTimeAcceptable",value:function(e){var t=!0;return b.default.isDateOutOfRange(e,y.default.createSafeDate(b.default.getMinDate(this.props.minDate),this.initialTimeZone),y.default.createSafeDate(b.default.getMaxDate(this.props.maxDate),this.initialTimeZone))&&(t=!1),b.default.isDateExcluded(e,this.props.excludeDates)&&(t=!1),t}},{key:"validateDefaultDate",value:function(){return this.isDateTimeAcceptable(this.state.dateTime)}},{key:"renderTimeClarification",value:function(){return h.default.createElement(O.default,{ambiguousDateTime:this.state.dateTime.format(),disabled:this.props.disabled,isOpen:this.state.isTimeClarificationOpen,isOffsetButtonHidden:!this.state.isAmbiguousTime,onDaylightSavingButtonClick:this.handleDaylightSavingButtonClick,onStandardTimeButtonClick:this.handleStandardTimeButtonClick,onOffsetButtonClick:this.handleOffsetButtonClick,onRequestClose:this.handleOnRequestClose,onBlur:this.handleOnTimeBlur,onFocus:this.handleFocus,initialTimeZone:this.initialTimeZone})}},{key:"render",value:function(){var e=this,t=this.props,a=t.ariaLabel,i=t.dateInputAttributes,n=t.disabled,u=t.excludeDates,o=t.filterDate,d=t.includeDates,r=(t.initialTimeZone,t.isIncomplete),f=t.isInvalid,c=t.isInvalidMeridiem,m=(t.onBlur,t.onChange,t.onChangeRaw,t.onClickOutside),p=(t.onFocus,t.onRequestClose),T=(t.onSelect,t.maxDate),D=t.minDate,C=t.name,k=t.required,O=t.showSeconds,_=t.timeInputAttributes,V=(t.value,t.timeVariant),B=t.errorId,w=(0,l.default)(t,S),M=this.state.dateTime?this.state.dateTime.clone():null,F=b.default.formatMomentDate(M,"YYYY-MM-DD"),R=this.context,I=!!this.state.dateTime&&M.isAfter(y.default.createSafeDate(b.default.MAX_DATE.concat(" ","23:58:59"),this.initialTimeZone)),Z=!!this.state.dateTime&&M.isBefore(y.default.createSafeDate(b.default.MIN_DATE.concat(" ","00:01:00"),this.initialTimeZone));return h.default.createElement("div",(0,s.default)({},w,{className:A("date-time-picker",R.className),ref:this.dateTimePickerContainer,role:"group","aria-label":a}),h.default.createElement("input",{"data-terra-date-time-input-hidden":!0,type:"hidden",name:C,value:null!=M&&M.isValid()?M.format():""}),h.default.createElement("div",{className:A("date-facade")},h.default.createElement(v.default,{onCalendarButtonClick:this.handleOnCalendarButtonClick,onChange:this.handleDateChange,onChangeRaw:this.handleDateChangeRaw,onSelect:this.handleOnSelect,onClickOutside:m,onRequestClose:p,onBlur:this.handleOnDateBlur,onFocus:this.handleOnDateInputFocus,excludeDates:u,filterDate:o,includeDates:d,inputAttributes:i,maxDate:b.default.getMaxDate(T),minDate:b.default.getMinDate(D),selectedDate:F,value:F,name:"input",disabled:n,isIncomplete:r,isInvalid:f,required:k,initialTimeZone:this.initialTimeZone,isDefaultDateAcceptable:!0,errorId:B})),h.default.createElement("div",{className:A("time-facade")},h.default.createElement(g.default,{onBlur:this.handleOnTimeBlur,onChange:this.handleTimeChange,onFocus:this.handleOnTimeInputFocus,inputAttributes:_,name:"input",value:this.timeValue,disabled:n,variant:V,refCallback:function(t){e.hourInput=t},showSeconds:O,isIncomplete:r,isInvalid:f,isInvalidMeridiem:c,required:k,atMaxDate:I,atMinDate:Z,errorId:B}),this.state.isAmbiguousTime&&this.state.dateTime?this.renderTimeClarification():null))}}])}(h.default.Component);I.propTypes=F,I.defaultProps=R,I.contextType=D.default;t.default=(0,m.injectIntl)(I)},19449:function(e,t,a){var i=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(17383)),s=i(a(34579)),l=i(a(84743)),u=i(a(541)),o=i(a(74931)),d=function(){function e(){(0,n.default)(this,e)}return(0,s.default)(e,null,[{key:"hasTime",value:function(t,a){if(!e.createSafeDate(t,a))return!1;var i="";return t.indexOf(" ")>0&&(i=t.split(" ")[1]),t.indexOf("T")>0&&(i=t.split("T")[1]),i.length>0}},{key:"syncDateTime",value:function(t,a,i,n){var s=(0,l.default)(a);if(t&&t.isValid()){var u=t.clone();return s.isValid()&&u.year(s.get("year")).month(s.get("month")).date(s.get("date")),i&&(!n&&5===i.length||n&&8===i.length)&&(u=e.updateTime(u,i,n)),u}if(s.isValid()){var o=s.clone();return i&&(!n&&5===i.length||n&&8===i.length)&&(o=e.updateTime(o,i,n)),o}return t}},{key:"updateTime",value:function(t,a,i){if(!t||!t.isValid())return null;var n=t.clone(),s=i?"HH:mm:ss":"HH:mm",u=(0,l.default)(a,s,!0),o=t.tz()||e.getLocalTimeZone();if(u.isValid()){var d=n.format("YYYY-MM-DD").concat(" ").concat(u.format(s));return l.default.tz(d,o)}return t}},{key:"getTime",value:function(t,a,i){var n=a?"HH:mm:ss":"HH:mm",s=e.createSafeDate(t,i);return u.default.formatMomentDate(s,n)}},{key:"isValidDateTime",value:function(t,a,i,n){return u.default.isValidDate(t,i)&&e.isValidTime(a,n)}},{key:"isValidTime",value:function(e,t){var a=t?"HH:mm:ss":"HH:mm";return(0,l.default)(e,a,!0).isValid()}},{key:"checkAmbiguousTime",value:function(e){if(!e||!e.isValid())return!1;var t=l.default.tz(e.format(),e.tz()),a=t.clone(),i=t.clone();a.add(1,"hour"),i.subtract(1,"hour");var n=t.isDST()&&!a.isDST(),s=!t.isDST()&&i.isDST();return n||s}},{key:"getDaylightSavingTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);return i.isValid()?(i.subtract(1,"days"),i.tz(i.tz()).format("z")):""}},{key:"getDaylightSavingExpandedTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);if(!i.isValid())return"";i.subtract(1,"days");var n=i.tz(),s=i.tz(n);return l.default.tz.zone(n).name+s.format(" z Z")}},{key:"getStandardTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);return i.isValid()?(i.add(1,"days"),i.tz(i.tz()).format("z")):""}},{key:"getStandardExpandedTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);if(!i.isValid())return"";i.add(1,"days");var n=i.tz(),s=i.tz(n);return l.default.tz.zone(n).name+s.format(" z Z")}},{key:"convertDateTimeStringToMomentObject",value:function(t,a,i,n,s){var l=e.createSafeDate(u.default.convertToISO8601(t,i),s);return e.updateTime(l,a,n)}},{key:"createSafeDate",value:function(t,a){if(t){var i=a&&l.default.tz.zone(a)?l.default.tz(t,a):l.default.tz(t,e.getLocalTimeZone());return i.isValid()?i:void 0}}},{key:"isMomentObject",value:function(e){return l.default.isMoment(e)}},{key:"getLocalTimeZone",value:function(){return l.default.tz.guess()}},{key:"checkIfTimeZoneIsValid",value:function(t){return l.default.tz.zone(t)?t:e.getLocalTimeZone()}}])}();d.FORMAT_12_HOUR=o.default.FORMAT_12_HOUR,d.FORMAT_24_HOUR=o.default.FORMAT_24_HOUR;t.default=d},53203:function(e,t,a){var i=a(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(17383)),s=i(a(34579)),l=i(a(28452)),u=i(a(63072)),o=i(a(29511)),d=i(a(96540)),r=i(a(5556)),f=i(a(67967)),c=i(a(20605)),h=i(a(23986)),m=a(8604),p=i(a(19449)),T=i(a(91856));function D(e,t,a){return t=(0,u.default)(t),(0,l.default)(e,v()?Reflect.construct(t,a||[],(0,u.default)(e).constructor):t.apply(e,a))}function v(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(v=function(){return!!e})()}var g=f.default.bind(T.default),C={ambiguousDateTime:r.default.string,intl:r.default.shape({formatMessage:r.default.func}).isRequired,isOpen:r.default.bool.isRequired,isOffsetButtonHidden:r.default.bool.isRequired,onBlur:r.default.func,onDaylightSavingButtonClick:r.default.func.isRequired,onFocus:r.default.func,onStandardTimeButtonClick:r.default.func.isRequired,onOffsetButtonClick:r.default.func.isRequired,onRequestClose:r.default.func.isRequired,disabled:r.default.bool,initialTimeZone:r.default.string},b=function(e){function t(e){var a;return(0,n.default)(this,t),(a=D(this,t,[e])).state={offsetDisplay:"",offsetLongDisplay:""},a.handleDaylightSavingButtonClick=a.handleDaylightSavingButtonClick.bind(a),a.handleStandardTimeButtonClick=a.handleStandardTimeButtonClick.bind(a),a}return(0,o.default)(t,e),(0,s.default)(t,[{key:"handleDaylightSavingButtonClick",value:function(e){this.setState({offsetDisplay:p.default.getDaylightSavingTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone),offsetLongDisplay:p.default.getDaylightSavingExpandedTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone)}),this.props.onDaylightSavingButtonClick&&this.props.onDaylightSavingButtonClick(e)}},{key:"handleStandardTimeButtonClick",value:function(e){this.setState({offsetDisplay:p.default.getStandardTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone),offsetLongDisplay:p.default.getStandardExpandedTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone)}),this.props.onStandardTimeButtonClick&&this.props.onStandardTimeButtonClick(e)}},{key:"render",value:function(){this.props.isOffsetButtonHidden&&(this.state.offsetDisplay="");var e=g(["button-offset",{"button-offset-hidden":this.props.isOffsetButtonHidden||!this.state.offsetDisplay}]),t=this.props.intl,a=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.title"}),i=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.message"}),n=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.button.daylightSaving"}),s=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.button.standardTime"});return d.default.createElement(d.default.Fragment,null,d.default.createElement(c.default,{classNameModal:g("time-clarification"),ariaLabel:"Time Clarification",isOpen:this.props.isOpen,onRequestClose:this.props.onRequestClose,closeOnEsc:!1,closeOnOutsideClick:!1,zIndex:"9000"},d.default.createElement("div",null,d.default.createElement("header",{className:g("header")},d.default.createElement("h1",{className:g("title")},a)),d.default.createElement("div",{className:g("body")},d.default.createElement("p",null,i)),d.default.createElement("div",{className:g("buttons")},d.default.createElement(h.default,{text:n,onClick:this.handleDaylightSavingButtonClick,variant:h.default.Opts.Variants.EMPHASIS,className:g("button-daylight")}),d.default.createElement(h.default,{text:s,onClick:this.handleStandardTimeButtonClick,variant:h.default.Opts.Variants.EMPHASIS,className:g("button-standard")})))),d.default.createElement("div",{className:g("offset-button-container")},d.default.createElement(h.default,{title:this.state.offsetLongDisplay,"aria-label":this.state.offsetLongDisplay,className:e,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onClick:this.props.onOffsetButtonClick,text:this.state.offsetDisplay,isCompact:!0,isDisabled:this.props.disabled})))}}])}(d.default.Component);b.propTypes=C,b.defaultProps={disabled:!1};t.default=(0,m.injectIntl)(b)},5405:function(e,t,a){a.r(t),t.default={"date-time-picker":"DateTimePicker-module__date-time-picker___eJnBN","date-facade":"DateTimePicker-module__date-facade___AMtXQ","time-facade":"DateTimePicker-module__time-facade___+bEdN"}},91856:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"_TimeClarification-module__clinical-lowlight-theme___0nCYU","orion-fusion-theme":"_TimeClarification-module__orion-fusion-theme___O+Yca","time-clarification":"_TimeClarification-module__time-clarification___qZubd",header:"_TimeClarification-module__header___AYp8S",title:"_TimeClarification-module__title___yBRsr",body:"_TimeClarification-module__body___l5d62",buttons:"_TimeClarification-module__buttons___tJ3zE","button-daylight":"_TimeClarification-module__button-daylight___okKUr","button-standard":"_TimeClarification-module__button-standard___5rzmZ","button-offset":"_TimeClarification-module__button-offset___tB1q1","button-offset-hidden":"_TimeClarification-module__button-offset-hidden___KRFhV","offset-button-container":"_TimeClarification-module__offset-button-container___V6-Sz"}}}]);