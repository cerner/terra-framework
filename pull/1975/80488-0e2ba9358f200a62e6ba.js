(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[80488],{76313:function(e,t,r){"use strict";var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r(38416)),l=a(r(10434)),d=a(r(70215)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=s?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(a,l,d):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r(67294)),u=a(r(45697)),o=r(25387),c=a(r(93967)),f=a(r(19845)),j=a(r(47341)),p=r(55877),m=a(r(51331)),b=a(r(29270)),h=a(r(91986)),g=a(r(91417)),_=a(r(40873)),y=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes","refCallback"];function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,s.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=f.default.bind(_.default),I={legend:u.default.string.isRequired,name:u.default.string.isRequired,dayAttributes:u.default.object,disabled:u.default.bool,displayFormat:u.default.string,error:u.default.node,help:u.default.node,hideRequired:u.default.bool,isIncomplete:u.default.bool,isInline:u.default.bool,isInvalid:u.default.bool,isLegendHidden:u.default.bool,intl:u.default.shape({formatMessage:u.default.func}),legendAttributes:u.default.object,monthAttributes:u.default.object,maxWidth:u.default.string,onBlur:u.default.func,onChange:u.default.func,onFocus:u.default.func,required:u.default.bool,showOptional:u.default.bool,value:u.default.string,yearAttributes:u.default.object,refCallback:u.default.func},F={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},z=function(e){var t=e.dayAttributes,r=e.disabled,a=e.displayFormat,n=e.error,s=e.help,u=e.hideRequired,o=e.isIncomplete,f=e.isInline,_=e.isInvalid,v=e.isLegendHidden,k=e.intl,I=e.legend,F=e.legendAttributes,z=e.monthAttributes,D=(e.maxWidth,e.name),E=e.onBlur,q=e.onChange,P=e.onFocus,x=e.required,A=e.showOptional,N=e.value,C=e.yearAttributes,M=e.refCallback,W=(0,d.default)(e,y),L=(0,i.useRef)((0,p.v4)()),R=i.default.useContext(j.default),B=(0,c.default)(w("date-input-field",{"is-inline":f},R.className),W.className),H=(0,c.default)(w("legend",R.className),F.className),S="terra-date-input-field-description-help-".concat(L.current),T="terra-date-input-field-description-error-".concat(L.current),U=S;n&&_&&(U="".concat(T," ").concat(S));var Y=z&&z["aria-describedby"],Q=t&&t["aria-describedby"],V=C&&C["aria-describedby"],Z=Y?"".concat(U," ").concat(Y):U,G=Q?"".concat(U," ").concat(Q):U,J=V?"".concat(U," ").concat(V):U,K=i.default.createElement("legend",{className:w(["legend-group",{"legend-group-hidden":v}])},i.default.createElement("div",(0,l.default)({},F,{className:H}),_&&i.default.createElement("span",{className:w("error-icon")},i.default.createElement(m.default,null)),x&&(_||!u)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:w("required")},"*"),i.default.createElement(b.default,{text:k.formatMessage({id:"Terra.date.input.required"})})),I,x&&!_&&u&&i.default.createElement("span",{className:w("required-hidden")},"*"),A&&!x&&i.default.createElement("span",{className:w("optional")},k.formatMessage({id:"Terra.date.input.optional"})),!_&&i.default.createElement("span",{className:w("error-icon-hidden")}))),X=g.default.getDateFormat({displayFormat:a,intl:k});return i.default.createElement("fieldset",(0,l.default)({},W,{className:B}),K,s&&i.default.createElement(b.default,{text:s}),i.default.createElement(h.default,{a11yLabel:I,dayAttributes:O(O({},t),{"aria-describedby":G}),disabled:r,displayFormat:a,isA11yControlled:!0,isIncomplete:o,isInvalid:_,monthAttributes:O(O({},z),{"aria-describedby":Z}),name:D,onBlur:E,onChange:q,onFocus:P,required:x,useExternalFormatMask:!0,value:N,yearAttributes:O(O({},C),{"aria-describedby":J}),refCallback:M}),_&&n&&i.default.createElement("div",{id:T,className:w("error-text")},n),i.default.createElement("div",{"aria-hidden":!0,className:w("help-text")},s?"(".concat(X,") ").concat(s):"(".concat(X,")")))};z.propTypes=I,z.defaultProps=F;t.default=(0,o.injectIntl)(z)},87542:function(e,t,r){"use strict";var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(r(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=i(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=s?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(a,l,d):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r(67294)),d=a(r(76313));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(i=function(e){return e?r:t})(e)}t.default=function(){var e=(0,l.useState)("1999-03-10"),t=(0,s.default)(e,2),r=t[0],a=t[1],n=(0,l.useState)(!1),i=(0,s.default)(n,2),u=i[0],o=i[1];return l.default.createElement("div",null,l.default.createElement(d.default,{legend:"Legend text",name:"date-input",value:r,onChange:function(e,t){return a(t)},displayFormat:"day-month-year",error:"Error message",help:"Help message",isInvalid:u}),l.default.createElement("p",null,"DateInputField Value: ".concat(r)),l.default.createElement("button",{type:"button",onClick:function(){return o((function(e){return!e}))}},"Toggle isInvalid"))}},40873:function(e,t,r){"use strict";r.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}},46700:function(e,t,r){var a={"./af":42786,"./af.js":42786,"./ar":30867,"./ar-dz":14130,"./ar-dz.js":14130,"./ar-kw":96135,"./ar-kw.js":96135,"./ar-ly":56440,"./ar-ly.js":56440,"./ar-ma":47702,"./ar-ma.js":47702,"./ar-ps":20315,"./ar-ps.js":20315,"./ar-sa":16040,"./ar-sa.js":16040,"./ar-tn":37100,"./ar-tn.js":37100,"./ar.js":30867,"./az":31083,"./az.js":31083,"./be":9808,"./be.js":9808,"./bg":68338,"./bg.js":68338,"./bm":67438,"./bm.js":67438,"./bn":8905,"./bn-bd":76225,"./bn-bd.js":76225,"./bn.js":8905,"./bo":11560,"./bo.js":11560,"./br":1278,"./br.js":1278,"./bs":80622,"./bs.js":80622,"./ca":2468,"./ca.js":2468,"./cs":5822,"./cs.js":5822,"./cv":50877,"./cv.js":50877,"./cy":47373,"./cy.js":47373,"./da":24780,"./da.js":24780,"./de":59740,"./de-at":60217,"./de-at.js":60217,"./de-ch":60894,"./de-ch.js":60894,"./de.js":59740,"./dv":5300,"./dv.js":5300,"./el":50837,"./el.js":50837,"./en-au":78348,"./en-au.js":78348,"./en-ca":77925,"./en-ca.js":77925,"./en-gb":22243,"./en-gb.js":22243,"./en-ie":46436,"./en-ie.js":46436,"./en-il":47207,"./en-il.js":47207,"./en-in":44175,"./en-in.js":44175,"./en-nz":76319,"./en-nz.js":76319,"./en-sg":31662,"./en-sg.js":31662,"./eo":92915,"./eo.js":92915,"./es":55655,"./es-do":55251,"./es-do.js":55251,"./es-mx":96112,"./es-mx.js":96112,"./es-us":71146,"./es-us.js":71146,"./es.js":55655,"./et":5603,"./et.js":5603,"./eu":77763,"./eu.js":77763,"./fa":76959,"./fa.js":76959,"./fi":11897,"./fi.js":11897,"./fil":42549,"./fil.js":42549,"./fo":94694,"./fo.js":94694,"./fr":94470,"./fr-ca":63049,"./fr-ca.js":63049,"./fr-ch":52330,"./fr-ch.js":52330,"./fr.js":94470,"./fy":5044,"./fy.js":5044,"./ga":29295,"./ga.js":29295,"./gd":2101,"./gd.js":2101,"./gl":38794,"./gl.js":38794,"./gom-deva":27884,"./gom-deva.js":27884,"./gom-latn":23168,"./gom-latn.js":23168,"./gu":95349,"./gu.js":95349,"./he":24206,"./he.js":24206,"./hi":30094,"./hi.js":30094,"./hr":30316,"./hr.js":30316,"./hu":22138,"./hu.js":22138,"./hy-am":11423,"./hy-am.js":11423,"./id":29218,"./id.js":29218,"./is":90135,"./is.js":90135,"./it":90626,"./it-ch":10150,"./it-ch.js":10150,"./it.js":90626,"./ja":39183,"./ja.js":39183,"./jv":24286,"./jv.js":24286,"./ka":12105,"./ka.js":12105,"./kk":47772,"./kk.js":47772,"./km":18758,"./km.js":18758,"./kn":79282,"./kn.js":79282,"./ko":33730,"./ko.js":33730,"./ku":1408,"./ku-kmr":90563,"./ku-kmr.js":90563,"./ku.js":1408,"./ky":33291,"./ky.js":33291,"./lb":36841,"./lb.js":36841,"./lo":55466,"./lo.js":55466,"./lt":57010,"./lt.js":57010,"./lv":37595,"./lv.js":37595,"./me":39861,"./me.js":39861,"./mi":35493,"./mi.js":35493,"./mk":95966,"./mk.js":95966,"./ml":87341,"./ml.js":87341,"./mn":5115,"./mn.js":5115,"./mr":10370,"./mr.js":10370,"./ms":9847,"./ms-my":41237,"./ms-my.js":41237,"./ms.js":9847,"./mt":72126,"./mt.js":72126,"./my":56165,"./my.js":56165,"./nb":64924,"./nb.js":64924,"./ne":16744,"./ne.js":16744,"./nl":93901,"./nl-be":59814,"./nl-be.js":59814,"./nl.js":93901,"./nn":83877,"./nn.js":83877,"./oc-lnc":92135,"./oc-lnc.js":92135,"./pa-in":47762,"./pa-in.js":47762,"./pl":64495,"./pl.js":64495,"./pt":89520,"./pt-br":57971,"./pt-br.js":57971,"./pt.js":89520,"./ro":96459,"./ro.js":96459,"./ru":21793,"./ru.js":21793,"./sd":40950,"./sd.js":40950,"./se":10490,"./se.js":10490,"./si":90124,"./si.js":90124,"./sk":64249,"./sk.js":64249,"./sl":14985,"./sl.js":14985,"./sq":51104,"./sq.js":51104,"./sr":49131,"./sr-cyrl":79915,"./sr-cyrl.js":79915,"./sr.js":49131,"./ss":85893,"./ss.js":85893,"./sv":98760,"./sv.js":98760,"./sw":91172,"./sw.js":91172,"./ta":27333,"./ta.js":27333,"./te":23110,"./te.js":23110,"./tet":52095,"./tet.js":52095,"./tg":27321,"./tg.js":27321,"./th":9041,"./th.js":9041,"./tk":19005,"./tk.js":19005,"./tl-ph":75768,"./tl-ph.js":75768,"./tlh":89444,"./tlh.js":89444,"./tr":72397,"./tr.js":72397,"./tzl":28254,"./tzl.js":28254,"./tzm":51106,"./tzm-latn":30699,"./tzm-latn.js":30699,"./tzm.js":51106,"./ug-cn":9288,"./ug-cn.js":9288,"./uk":67691,"./uk.js":67691,"./ur":13795,"./ur.js":13795,"./uz":6791,"./uz-latn":14126,"./uz-latn.js":14126,"./uz.js":6791,"./vi":65666,"./vi.js":65666,"./x-pseudo":14378,"./x-pseudo.js":14378,"./yo":75805,"./yo.js":75805,"./zh-cn":83839,"./zh-cn.js":83839,"./zh-hk":55726,"./zh-hk.js":55726,"./zh-mo":99807,"./zh-mo.js":99807,"./zh-tw":74152,"./zh-tw.js":74152};function n(e){var t=s(e);return r(t)}function s(e){if(!r.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=s,e.exports=n,n.id=46700}}]);