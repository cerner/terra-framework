"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[99847],{31572:function(e,t,r){var a=r(64836),n=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=a(r(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=u?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}return a.default=e,r&&r.set(e,a),a}(r(67294)),o=a(r(55281)),i=a(r(34653)),c=r(56019),f=a(r(47166)),s=a(r(76790)),d=a(r(39489)),m=a(r(36757));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}var p=f.default.bind(d.default),_=Object.freeze([{key:"SECTION_0",component:l.default.createElement(m.default,{name:"Section 0",targetId:"section0"})},{key:"SECTION_1",component:l.default.createElement(m.default,{name:"Section 1",targetId:"section1"})}]),O=Object.freeze([{key:"SECTION_2",component:l.default.createElement(m.default,{name:"Section 2",targetId:"section2"})},{key:"SECTION_3",component:l.default.createElement(m.default,{name:"Section 3",targetId:"section3"})}]),k=(0,c.withDisclosureManager)((function(e){var t=e.itemsList,r=e.disclosureManager;return l.default.createElement(s.default,{items:t,disclose:r.disclose})}));t.default=function(){var e=(0,l.useState)(!1),t=(0,u.default)(e,2),r=t[0],a=t[1];return l.default.createElement("div",{id:"test-aggregator",role:"main",className:p("aggregator-with-disclosure-test")},l.default.createElement(o.default,{id:"flip-button",text:"Flip Items",onClick:function(){return a(!r)}}),l.default.createElement(i.default,null,l.default.createElement(k,{itemsList:r?O:_})))}},39489:function(e,t,r){r.r(t),t.default={"aggregator-with-disclosure-test":"AggregatorWithDisclosure-test-module__aggregator-with-disclosure-test___SCzIs"}}}]);