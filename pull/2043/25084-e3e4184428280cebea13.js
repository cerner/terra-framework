(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[25084],{4136:function(e,t,a){"use strict";var n=a(22411),l=a(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(2676)),d=n(a(82048)),u=n(a(97676)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=_(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var u=r?Object.getOwnPropertyDescriptor(e,d):null;u&&(u.get||u.set)?Object.defineProperty(n,d,u):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(11504)),s=n(a(3268)),o=a(93627),f=n(a(82084)),c=n(a(74824)),p=n(a(7804)),m=a(65300),j=n(a(91280)),b=n(a(56728)),h=n(a(23448)),g=n(a(93724)),v=n(a(77556)),y=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes","refCallback"];function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_=function(e){return e?a:t})(e)}function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function I(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){(0,r.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var k=c.default.bind(v.default),w={legend:s.default.string.isRequired,name:s.default.string.isRequired,dayAttributes:s.default.object,disabled:s.default.bool,displayFormat:s.default.string,error:s.default.node,help:s.default.node,hideRequired:s.default.bool,isIncomplete:s.default.bool,isInline:s.default.bool,isInvalid:s.default.bool,isLegendHidden:s.default.bool,intl:s.default.shape({formatMessage:s.default.func}),legendAttributes:s.default.object,monthAttributes:s.default.object,maxWidth:s.default.string,onBlur:s.default.func,onChange:s.default.func,onFocus:s.default.func,required:s.default.bool,showOptional:s.default.bool,value:s.default.string,yearAttributes:s.default.object,refCallback:s.default.func},q={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},E=function(e){var t=e.dayAttributes,a=e.disabled,n=e.displayFormat,l=e.error,r=e.help,s=e.hideRequired,o=e.isIncomplete,c=e.isInline,v=e.isInvalid,_=e.isLegendHidden,O=e.intl,w=e.legend,q=e.legendAttributes,E=e.monthAttributes,C=(e.maxWidth,e.name),x=e.onBlur,F=e.onChange,A=e.onFocus,P=e.required,z=e.showOptional,D=e.value,M=e.yearAttributes,T=e.refCallback,L=(0,u.default)(e,y),N=(0,i.useRef)((0,m.v4)()),R=i.default.useContext(p.default),S=(0,f.default)(k("date-input-field",{"is-inline":c},R.className),L.className),W=(0,f.default)(k("legend",R.className),q.className),H="terra-date-input-field-description-help-".concat(N.current),B="terra-date-input-field-description-error-".concat(N.current),U=H;l&&v&&(U="".concat(B," ").concat(H));var V=E&&E["aria-describedby"],Y=t&&t["aria-describedby"],Q=M&&M["aria-describedby"],Z=V?"".concat(U," ").concat(V):U,G=Y?"".concat(U," ").concat(Y):U,J=Q?"".concat(U," ").concat(Q):U,K=i.default.createElement("legend",{className:k(["legend-group",{"legend-group-hidden":_}])},i.default.createElement("div",(0,d.default)({},q,{className:W}),v&&i.default.createElement("span",{className:k("error-icon")},i.default.createElement(j.default,null)),P&&(v||!s)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:k("required")},"*"),i.default.createElement(b.default,{text:O.formatMessage({id:"Terra.date.input.required"})})),w,P&&!v&&s&&i.default.createElement("span",{className:k("required-hidden")},"*"),z&&!P&&i.default.createElement("span",{className:k("optional")},O.formatMessage({id:"Terra.date.input.optional"})),!v&&i.default.createElement("span",{className:k("error-icon-hidden")}))),X=g.default.getDateFormat({displayFormat:n,intl:O});return i.default.createElement("fieldset",(0,d.default)({},L,{className:S}),K,r&&i.default.createElement(b.default,{text:r}),i.default.createElement(h.default,{a11yLabel:w,dayAttributes:I(I({},t),{"aria-describedby":G}),disabled:a,displayFormat:n,isA11yControlled:!0,isIncomplete:o,isInvalid:v,monthAttributes:I(I({},E),{"aria-describedby":Z}),name:C,onBlur:x,onChange:F,onFocus:A,required:P,useExternalFormatMask:!0,value:D,yearAttributes:I(I({},M),{"aria-describedby":J}),refCallback:T,error:l,"aria-describedby":B}),v&&l&&i.default.createElement("div",{id:B,className:k("error-text")},l),i.default.createElement("div",{"aria-hidden":!0,className:k("help-text")},r?"(".concat(X,") ").concat(r):"(".concat(X,")")))};E.propTypes=w,E.defaultProps=q;t.default=(0,o.injectIntl)(E)},9028:function(e,t,a){"use strict";var n=a(22411),l=a(59848);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(97936)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=c(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var u=r?Object.getOwnPropertyDescriptor(e,d):null;u&&(u.get||u.set)?Object.defineProperty(n,d,u):n[d]=e[d]}return n.default=e,a&&a.set(e,n),n}(a(11504)),u=n(a(4136)),i=n(a(65928)),s=n(a(26059)),o=n(a(59560)),f=n(a(13848));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(c=function(e){return e?a:t})(e)}t.default=function(){var e=(0,d.useState)(""),t=(0,r.default)(e,2),a=t[0],n=t[1],l=(0,d.useState)(!1),c=(0,r.default)(l,2),p=c[0],m=c[1],j=(0,d.useState)(!1),b=(0,r.default)(j,2),h=b[0],g=b[1],v=(0,d.useState)(!1),y=(0,r.default)(v,2),_=y[0],O=y[1],I=(0,d.useState)("optional"),k=(0,r.default)(I,2),w=k[0],q=k[1],E=(0,d.useState)("month-day-year"),C=(0,r.default)(E,2),x=C[0],F=C[1],A=(0,d.useState)("Helpful text."),P=(0,r.default)(A,2),z=P[0],D=P[1],M=(0,d.useState)("Something went wrong."),T=(0,r.default)(M,2),L=T[0],N=T[1],R=(0,d.useState)("Date of birth"),S=(0,r.default)(R,2),W=S[0],H=S[1];return d.default.createElement(d.default.Fragment,null,d.default.createElement("h1",null,"Component Under Test"),d.default.createElement(u.default,{id:"componentUnderTest",legend:W,name:"date-of-birth-field",value:a,onChange:function(e,t){return n(t)},error:L,help:z,isInvalid:h,isLegendHidden:_,disabled:p,displayFormat:x,isIncomplete:w.includes("incomplete"),required:w.includes("required"),showOptional:w.includes("showOptional"),hideRequired:w.includes("hideRequired")}),d.default.createElement("div",null,d.default.createElement("h1",null,"Test Settings"),d.default.createElement(o.default,{legend:"Props"},d.default.createElement(i.default,{id:"disabled",labelText:"disabled",onChange:function(){return m((function(e){return!e}))}}),d.default.createElement(i.default,{id:"isInvalid",labelText:"isInvalid",onChange:function(){return g((function(e){return!e}))}}),d.default.createElement(i.default,{id:"isLegendHidden",labelText:"isLegendHidden",onChange:function(){return O((function(e){return!e}))}})),d.default.createElement(s.default,{type:"text",label:"Legend:",inputId:"legend",value:W,onChange:function(e){return H(e.currentTarget.value)}}),d.default.createElement(s.default,{type:"text",label:"Error Message:",inputId:"error",value:L,placeholder:"Message to show when invalid",onChange:function(e){return N(e.currentTarget.value)}}),d.default.createElement(s.default,{type:"text",label:"Help Message:",inputId:"help",value:z,placeholder:"Message to provide more detailed help",onChange:function(e){return D(e.currentTarget.value)}}),d.default.createElement(f.default,{fieldLegend:"Mutually Exclusive",name:"mutex",options:["optional","optional-showOptional","required","required-hideRequired","required-incomplete","required-incomplete-hideRequired"],onChange:function(e){return q(e.currentTarget.value)}}),d.default.createElement(f.default,{fieldLegend:"Format",name:"format",options:["month-day-year","day-month-year"],onChange:function(e){return F(e.currentTarget.value)}})))}},13848:function(e,t,a){"use strict";var n=a(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(11504)),r=n(a(3288)),d=n(a(75032)),u=n(a(3268)),i={fieldLegend:u.default.string,name:u.default.string,options:u.default.array,onChange:u.default.func};function s(e){return l.default.createElement(d.default,{legend:e.fieldLegend},e.options.map((function(t,a){return l.default.createElement(r.default,{key:t,name:e.name,id:t,defaultChecked:0===a,labelText:t,value:t,onChange:e.onChange})})))}s.propTypes=i;t.default=s},77556:function(e,t,a){"use strict";a.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}},92348:function(e,t,a){var n={"./af":36024,"./af.js":36024,"./ar":27544,"./ar-dz":11736,"./ar-dz.js":11736,"./ar-kw":47888,"./ar-kw.js":47888,"./ar-ly":22892,"./ar-ly.js":22892,"./ar-ma":89688,"./ar-ma.js":89688,"./ar-ps":65280,"./ar-ps.js":65280,"./ar-sa":44948,"./ar-sa.js":44948,"./ar-tn":61992,"./ar-tn.js":61992,"./ar.js":27544,"./az":95777,"./az.js":95777,"./be":69940,"./be.js":69940,"./bg":86107,"./bg.js":86107,"./bm":63544,"./bm.js":63544,"./bn":94952,"./bn-bd":92876,"./bn-bd.js":92876,"./bn.js":94952,"./bo":56576,"./bo.js":56576,"./br":7392,"./br.js":7392,"./bs":43584,"./bs.js":43584,"./ca":17396,"./ca.js":17396,"./cs":36560,"./cs.js":36560,"./cv":67716,"./cv.js":67716,"./cy":70956,"./cy.js":70956,"./da":15188,"./da.js":15188,"./de":78960,"./de-at":52131,"./de-at.js":52131,"./de-ch":46128,"./de-ch.js":46128,"./de.js":78960,"./dv":43284,"./dv.js":43284,"./el":32972,"./el.js":32972,"./en-au":64356,"./en-au.js":64356,"./en-ca":28440,"./en-ca.js":28440,"./en-gb":2448,"./en-gb.js":2448,"./en-ie":16320,"./en-ie.js":16320,"./en-il":74360,"./en-il.js":74360,"./en-in":80632,"./en-in.js":80632,"./en-nz":81140,"./en-nz.js":81140,"./en-sg":63004,"./en-sg.js":63004,"./eo":65620,"./eo.js":65620,"./es":32348,"./es-do":76528,"./es-do.js":76528,"./es-mx":98544,"./es-mx.js":98544,"./es-us":71208,"./es-us.js":71208,"./es.js":32348,"./et":20373,"./et.js":20373,"./eu":69912,"./eu.js":69912,"./fa":74984,"./fa.js":74984,"./fi":52819,"./fi.js":52819,"./fil":72512,"./fil.js":72512,"./fo":18571,"./fo.js":18571,"./fr":8405,"./fr-ca":93220,"./fr-ca.js":93220,"./fr-ch":45720,"./fr-ch.js":45720,"./fr.js":8405,"./fy":58116,"./fy.js":58116,"./ga":9916,"./ga.js":9916,"./gd":86908,"./gd.js":86908,"./gl":54088,"./gl.js":54088,"./gom-deva":15064,"./gom-deva.js":15064,"./gom-latn":96300,"./gom-latn.js":96300,"./gu":51208,"./gu.js":51208,"./he":55910,"./he.js":55910,"./hi":648,"./hi.js":648,"./hr":38864,"./hr.js":38864,"./hu":28164,"./hu.js":28164,"./hy-am":62528,"./hy-am.js":62528,"./id":63400,"./id.js":63400,"./is":23912,"./is.js":23912,"./it":77088,"./it-ch":77988,"./it-ch.js":77988,"./it.js":77088,"./ja":52501,"./ja.js":52501,"./jv":40376,"./jv.js":40376,"./ka":67048,"./ka.js":67048,"./kk":56416,"./kk.js":56416,"./km":58288,"./km.js":58288,"./kn":84833,"./kn.js":84833,"./ko":10972,"./ko.js":10972,"./ku":76376,"./ku-kmr":5192,"./ku-kmr.js":5192,"./ku.js":76376,"./ky":92832,"./ky.js":92832,"./lb":61448,"./lb.js":61448,"./lo":34116,"./lo.js":34116,"./lt":20296,"./lt.js":20296,"./lv":76136,"./lv.js":76136,"./me":28019,"./me.js":28019,"./mi":41320,"./mi.js":41320,"./mk":47720,"./mk.js":47720,"./ml":81228,"./ml.js":81228,"./mn":49564,"./mn.js":49564,"./mr":78496,"./mr.js":78496,"./ms":88512,"./ms-my":69676,"./ms-my.js":69676,"./ms.js":88512,"./mt":29824,"./mt.js":29824,"./my":82792,"./my.js":82792,"./nb":23444,"./nb.js":23444,"./ne":77860,"./ne.js":77860,"./nl":39940,"./nl-be":63760,"./nl-be.js":63760,"./nl.js":39940,"./nn":28888,"./nn.js":28888,"./oc-lnc":18096,"./oc-lnc.js":18096,"./pa-in":78837,"./pa-in.js":78837,"./pl":35904,"./pl.js":35904,"./pt":96840,"./pt-br":11048,"./pt-br.js":11048,"./pt.js":96840,"./ro":88296,"./ro.js":88296,"./ru":3156,"./ru.js":3156,"./sd":96595,"./sd.js":96595,"./se":94560,"./se.js":94560,"./si":38668,"./si.js":38668,"./sk":69500,"./sk.js":69500,"./sl":90024,"./sl.js":90024,"./sq":84192,"./sq.js":84192,"./sr":56832,"./sr-cyrl":58728,"./sr-cyrl.js":58728,"./sr.js":56832,"./ss":28692,"./ss.js":28692,"./sv":63252,"./sv.js":63252,"./sw":98904,"./sw.js":98904,"./ta":71120,"./ta.js":71120,"./te":46688,"./te.js":46688,"./tet":59556,"./tet.js":59556,"./tg":69248,"./tg.js":69248,"./th":27172,"./th.js":27172,"./tk":30208,"./tk.js":30208,"./tl-ph":91744,"./tl-ph.js":91744,"./tlh":331,"./tlh.js":331,"./tr":43920,"./tr.js":43920,"./tzl":84360,"./tzl.js":84360,"./tzm":97524,"./tzm-latn":81732,"./tzm-latn.js":81732,"./tzm.js":97524,"./ug-cn":71124,"./ug-cn.js":71124,"./uk":69328,"./uk.js":69328,"./ur":88968,"./ur.js":88968,"./uz":51516,"./uz-latn":19388,"./uz-latn.js":19388,"./uz.js":51516,"./vi":59664,"./vi.js":59664,"./x-pseudo":68616,"./x-pseudo.js":68616,"./yo":85436,"./yo.js":85436,"./zh-cn":3820,"./zh-cn.js":3820,"./zh-hk":60112,"./zh-hk.js":60112,"./zh-mo":99504,"./zh-mo.js":99504,"./zh-tw":15660,"./zh-tw.js":15660};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=92348},26059:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=s(a(11504)),l=s(a(3268)),r=s(a(57775)),d=s(a(91280)),u=s(a(41404)),i=["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","onInput","refCallback","required","showOptional","type","value"];function s(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}function f(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c={inputId:l.default.string.isRequired,label:l.default.string.isRequired,defaultValue:l.default.oneOfType([l.default.string,l.default.number]),disabled:l.default.bool,error:l.default.node,errorIcon:l.default.element,help:l.default.node,hideRequired:l.default.bool,inputAttrs:l.default.object,isIncomplete:l.default.bool,isInline:l.default.bool,isInvalid:l.default.bool,isLabelHidden:l.default.bool,labelAttrs:l.default.object,maxWidth:l.default.string,onChange:l.default.func,onInput:l.default.func,refCallback:l.default.func,required:l.default.bool,showOptional:l.default.bool,type:l.default.string,value:l.default.oneOfType([l.default.string,l.default.number])},p={defaultValue:void 0,disabled:!1,error:null,errorIcon:n.default.createElement(d.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,onInput:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},m=function(e){var t,a=e.defaultValue,l=e.disabled,d=e.error,s=e.errorIcon,c=e.help,p=e.hideRequired,m=e.inputAttrs,j=e.inputId,b=e.isIncomplete,h=e.isInline,g=e.isInvalid,v=e.isLabelHidden,y=e.label,_=e.labelAttrs,O=e.maxWidth,I=e.onChange,k=e.onInput,w=e.refCallback,q=e.required,E=e.showOptional,C=e.type,x=e.value,F=f(e,i);c&&d&&g?t="".concat(j,"-error ").concat(j,"-help"):(c&&(t="".concat(j,"-help")),d&&g&&(t="".concat(j,"-error")));var A=C||m.type;return F.placeholder&&(F.placeholder=null),n.default.createElement(r.default,o({label:y,labelAttrs:_,error:d,errorIcon:s,help:c,hideRequired:p,required:q,showOptional:E,isInvalid:g,isInline:h,isLabelHidden:v,htmlFor:j,maxWidth:O},F),n.default.createElement(u.default,o({},m,{disabled:m.disabled||l,id:j,isIncomplete:b,type:A,onChange:I,onInput:k,value:x,defaultValue:a,refCallback:w,"aria-describedby":t})))};m.propTypes=c,m.defaultProps=p;t.default=m}}]);