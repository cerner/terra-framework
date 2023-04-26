"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[94580],{41521:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(87462),a=n(44925),i=(n(67294),n(81254)),o=n(8011),l=n(30715),u=["components"],d={},m="wrapper";function s(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.mdx)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(o.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"form-validation"},"Form Validation"),(0,i.mdx)("p",null,"Terra recommends using ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form")," to write form validations for components. This package contains several different hooks and functionality for performing validations at various levels which include:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Validating onChange"),(0,i.mdx)("li",{parentName:"ul"},"Validating onSubmit"),(0,i.mdx)("li",{parentName:"ul"},"Validating Synchronously (Such as for unique user name implementations)"),(0,i.mdx)("li",{parentName:"ul"},"Restricting inputs to a particular format.")),(0,i.mdx)("p",null,"For other functionality that is provided, consult ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form documentation"),"."),(0,i.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Install from ",(0,i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-validation"))))),(0,i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,i.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"final-form"),(0,i.mdx)("td",{parentName:"tr",align:null},"^4.6.0")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-final-form"),(0,i.mdx)("td",{parentName:"tr",align:null},">=5.0.2 <7.0.0")))),(0,i.mdx)("h2",{id:"integration-with-terra"},"Integration with Terra"),(0,i.mdx)("p",null,"To easily integrate react-final-form with Terra form elements, we have created individual Field components inside of terra-form-input (InputField), terra-form-textarea (TextareaField), terra-form-radio (RadioField) and terra-form-checkbox (CheckboxField). For integrating with terra-form-select components, a Select element can be combined with a terra-form-field component. There are future enhancements to add a Field component to terra-form-select."),(0,i.mdx)("p",null,"For all of these field components, the isInvalid and error props of the Fields will be set from the data coming from react-final-form."),(0,i.mdx)("h2",{id:"usage"},"Usage"),(0,i.mdx)("p",null,"react-final-form consists of a wrapping Form element that houses the validation logic, and Field elements that validate individual inputs of a given form."),(0,i.mdx)("p",null,"To start, you need to import the Form component from react-final-form, and set the onSubmit and render props of the Form. onSubmit is a function with a single argument that is an object of the submitted form values, and the render function is essentially a function that returns a native form rendered in react. The render function has several different props provided by react-final-form that can be used for creating your forms (see ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form#formrenderprops"},"form render props")," for all possible options). One thing to note is that inside the render function, handleSubmit needs to be passed into the native form component as well."),(0,i.mdx)("p",null,"When rendering individual fields inside the form, there are a few things that need to be done. The first is to create a Field component using the Field object from react-final-form, and setting the name, initial value, and validate props. Then inside the Field children, render a function with the arguments input and meta. The input prop contains information specific to the event such as value and name, and meta includes information related to field errors, submission state, validity status. You can view more of the provided attributes ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form#fieldrenderprops"},"here"),". For immediate use, make sure that the function returns a form element with the onChange, value, and other input attributes set appropriately."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"NOTE:")," When using ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form")," for validation, we recommend disabling HTML5 form validation by adding the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate"},(0,i.mdx)("inlineCode",{parentName:"a"},"noValidate")," boolean attribute")," to your form element."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},"<form noValidate>\n")),(0,i.mdx)("p",null,"See links in the sidebar for working with additional validation events and writing custom validations."),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)(l.Z,{title:"Basic Form Validation Example",mdxType:"DefaultFormValidation"}))}s.isMDXComponent=!0},30715:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(67294),a=n(99906),i=n(87462),o=n(44925),l=n(81254),u=["components"],d={};function m(e){var t=e.components,n=(0,o.Z)(e,u);return(0,l.mdx)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n    this.renderForm = this.renderForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              required\n              help=\"TerraUser is not available\"\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n            />\n          )}\n        </Field>\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <TextareaField\n              inputId=\"description-field\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n      </Spacer>\n    );\n  }\n}\n\n")))}m.isMDXComponent=!0;var s=n(49271),f=function(e){var t=e.title,n=e.description,i=e.isExpanded;return r.createElement(s.Z,{title:t||"Default Form Validation",description:n,example:r.createElement(a.Z,null),exampleSrc:r.createElement(m,null),isExpanded:i})}},8011:function(e,t,n){n.d(t,{C:function(){return i}});var r=n(67294),a=n(22863),i=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-form-validation",name:"terra-form-validation",version:"1.75.0",url:t})}},99906:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(64687)),i=r(n(56690)),o=r(n(89728)),l=r(n(66115)),u=r(n(61655)),d=r(n(94993)),m=r(n(73808)),s=r(n(17156)),f=r(n(67294)),c=n(57057),p=r(n(11817)),h=r(n(76493)),b=r(n(55281)),v=r(n(36973));function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,m.default)(e);if(t){var a=(0,m.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var g=function(){var e=(0,s.default)(a.default.mark((function e(t){var n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){return e("TerraUser"!==t?"":"Name is Unavailable")})),e.next=3,n;case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){(0,u.default)(n,e);var t=y(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r.renderForm=r.renderForm.bind((0,l.default)(r)),r}return(0,o.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return f.default.createElement("form",{noValidate:!0,onSubmit:t},f.default.createElement(c.Field,{name:"user_name",validate:g},(function(e){var t=e.input,n=e.meta;return f.default.createElement(p.default,{inputId:"user-name",label:"User Name",error:n.error,isInvalid:n.submitFailed&&!n.valid,required:!0,help:"TerraUser is not available",inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value})})),f.default.createElement(c.Field,{name:"description"},(function(e){var t=e.input,n=e.meta;return f.default.createElement(h.default,{inputId:"description-field",label:"Description",error:n.error,isInvalid:n.submitFailed&&!n.valid,inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),f.default.createElement(b.default,{text:"Submit",type:b.default.Opts.Types.SUBMIT}),this.state.submittedValues&&f.default.createElement("div",null,f.default.createElement("p",null,"Form Submitted Successfully With"),f.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}},{key:"render",value:function(){return f.default.createElement(v.default,{marginBottom:"small"},f.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var t={};return e.description||(t.description="Required"),e.user_name||(t.user_name="Required"),t}}))}}]),n}(f.default.Component);t.Z=x},68586:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},55142:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),i=s(n(45697)),o=s(n(94184)),l=s(n(47166)),u=s(n(47341)),d=s(n(68586)),m=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function s(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return(t=v(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,v(r.key),r)}}function v(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=x(e);if(t){var i=x(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var F=l.default.bind(d.default),w={defaultValue:i.default.oneOfType([i.default.string,i.default.number]),disabled:i.default.bool,isIncomplete:i.default.bool,isInvalid:i.default.bool,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,onInput:i.default.func,name:i.default.string,pattern:i.default.string,refCallback:i.default.func,required:i.default.bool,type:i.default.string,value:i.default.oneOfType([i.default.string,i.default.number]),ariaLabel:i.default.string},O={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(l,e);var t,n,r,i=g(l);function l(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),i.apply(this,arguments)}return t=l,n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,i=t.isIncomplete,l=t.isInvalid,u=t.onBlur,d=t.onChange,s=t.onFocus,b=t.onInput,v=t.name,y=t.pattern,g=t.refCallback,x=t.required,w=t.type,O=t.ariaLabel,N=t.value,S=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},h(t,m)),_=this.context,j=(void 0===w||["text","number","password","email","search","tel","url","hidden"].includes(w))&&F("form-input",{"form-error":l},{"form-incomplete":i&&x&&!l},_.className),T=(0,o.default)(j,S.className);return S&&Object.prototype.hasOwnProperty.call(S,"aria-label")?e=O||S["aria-label"]:O&&(e=O),S["aria-label"]=e,x&&(S["aria-required"]="true"),void 0!==N?S.value=N:void 0!==n&&(S.defaultValue=n),S.placeholder&&(S.placeholder=null),a.default.createElement("input",f({},S,{ref:function(e){g&&g(e)},name:v,type:w,pattern:y,onBlur:u,onChange:d,onFocus:s,onInput:b,disabled:r,required:x,className:T}))}}],n&&b(t.prototype,n),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),l}(a.default.Component);N.propTypes=w,N.defaultProps=O,N.contextType=u.default,N.isInput=!0;var S=N;t.default=S}}]);