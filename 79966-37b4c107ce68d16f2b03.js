"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[79966],{51686:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(58168),a=n(53986),i=(n(96540),n(36665)),o=n(50232),l=n(17921),m=["components"],d={},u="wrapper";function s(e){var t=e.components,n=(0,a.A)(e,m);return(0,i.mdx)(u,(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(o.E,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"form-validation"},"Form Validation"),(0,i.mdx)("p",null,"Terra recommends using ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form")," to write form validations for components. This package contains several different hooks and functionality for performing validations at various levels which include:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Validating onChange"),(0,i.mdx)("li",{parentName:"ul"},"Validating onSubmit"),(0,i.mdx)("li",{parentName:"ul"},"Validating Synchronously (Such as for unique user name implementations)"),(0,i.mdx)("li",{parentName:"ul"},"Restricting inputs to a particular format.")),(0,i.mdx)("p",null,"For other functionality that is provided, consult ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form documentation"),"."),(0,i.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Install from ",(0,i.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-validation"))))),(0,i.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,i.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,i.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"final-form"),(0,i.mdx)("td",{parentName:"tr",align:null},"^4.6.0")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,i.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"react-final-form"),(0,i.mdx)("td",{parentName:"tr",align:null},">=5.0.2 <7.0.0")))),(0,i.mdx)("h2",{id:"integration-with-terra"},"Integration with Terra"),(0,i.mdx)("p",null,"To easily integrate react-final-form with Terra form elements, we have created individual Field components inside of terra-form-input (InputField), terra-form-textarea (TextareaField), terra-form-radio (RadioField) and terra-form-checkbox (CheckboxField). For integrating with terra-form-select components, a Select element can be combined with a terra-form-field component. There are future enhancements to add a Field component to terra-form-select."),(0,i.mdx)("p",null,"For all of these field components, the isInvalid and error props of the Fields will be set from the data coming from react-final-form."),(0,i.mdx)("h2",{id:"usage"},"Usage"),(0,i.mdx)("p",null,"react-final-form consists of a wrapping Form element that houses the validation logic, and Field elements that validate individual inputs of a given form."),(0,i.mdx)("p",null,"To start, you need to import the Form component from react-final-form, and set the onSubmit and render props of the Form. onSubmit is a function with a single argument that is an object of the submitted form values, and the render function is essentially a function that returns a native form rendered in react. The render function has several different props provided by react-final-form that can be used for creating your forms (see ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form#formrenderprops"},"form render props")," for all possible options). One thing to note is that inside the render function, handleSubmit needs to be passed into the native form component as well."),(0,i.mdx)("p",null,"When rendering individual fields inside the form, there are a few things that need to be done. The first is to create a Field component using the Field object from react-final-form, and setting the name, initial value, and validate props. Then inside the Field children, render a function with the arguments input and meta. The input prop contains information specific to the event such as value and name, and meta includes information related to field errors, submission state, validity status. You can view more of the provided attributes ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form#fieldrenderprops"},"here"),". For immediate use, make sure that the function returns a form element with the onChange, value, and other input attributes set appropriately."),(0,i.mdx)("p",null,(0,i.mdx)("strong",{parentName:"p"},"NOTE:")," When using ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form")," for validation, we recommend disabling HTML5 form validation by adding the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#attr-novalidate"},(0,i.mdx)("inlineCode",{parentName:"a"},"noValidate")," boolean attribute")," to your form element."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-html"},"<form noValidate>\n")),(0,i.mdx)("p",null,"See links in the sidebar for working with additional validation events and writing custom validations."),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)(l.A,{title:"Basic Form Validation Example",mdxType:"DefaultFormValidation"}))}s.isMDXComponent=!0},17921:function(e,t,n){n.d(t,{A:function(){return p}});var r=n(96540),a=n(49899),i=n(58168),o=n(53986),l=n(36665),m=["components"],d={};function u(e){var t=e.components,n=(0,o.A)(e,m);return(0,l.mdx)("wrapper",(0,i.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n    this.renderForm = this.renderForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              required\n              help=\"TerraUser is not available\"\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n            />\n          )}\n        </Field>\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <TextareaField\n              inputId=\"description-field\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n      </Spacer>\n    );\n  }\n}\n\n")))}u.isMDXComponent=!0;var s=n(201),p=function(e){var t=e.title,n=e.description,i=e.isExpanded;return r.createElement(s.A,{title:t||"Default Form Validation",description:n,example:r.createElement(a.A,null),exampleSrc:r.createElement(u,null),isExpanded:i})}},50232:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(96540),a=n(55713),i=function(e){var t=e.url;return r.createElement(a.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-form-validation",name:"terra-form-validation",version:"1.105.0",url:t})}},49899:function(e,t,n){var r=n(24994);t.A=void 0;var a=r(n(54756)),i=r(n(17383)),o=r(n(34579)),l=r(n(28452)),m=r(n(63072)),d=r(n(29511)),u=r(n(29293)),s=r(n(96540)),p=n(45828),f=r(n(19127)),c=r(n(4825)),h=r(n(23986)),v=r(n(68550));function b(e,t,n){return t=(0,m.default)(t),(0,l.default)(e,x()?Reflect.construct(t,n||[],(0,m.default)(e).constructor):t.apply(e,n))}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}var g=function(){var e=(0,u.default)(a.default.mark((function e(t){var n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){return e("TerraUser"!==t?"":"Name is Unavailable")})),e.next=3,n;case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.A=function(e){function t(e){var n;return(0,i.default)(this,t),(n=b(this,t,[e])).state={},n.submitForm=n.submitForm.bind(n),n.renderForm=n.renderForm.bind(n),n}return(0,d.default)(t,e),(0,o.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return s.default.createElement("form",{noValidate:!0,onSubmit:t},s.default.createElement(p.Field,{name:"user_name",validate:g},(function(e){var t=e.input,n=e.meta;return s.default.createElement(f.default,{inputId:"user-name",label:"User Name",error:n.error,isInvalid:n.submitFailed&&!n.valid,required:!0,help:"TerraUser is not available",inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value})})),s.default.createElement(p.Field,{name:"description"},(function(e){var t=e.input,n=e.meta;return s.default.createElement(c.default,{inputId:"description-field",label:"Description",error:n.error,isInvalid:n.submitFailed&&!n.valid,inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),s.default.createElement(h.default,{text:"Submit",type:h.default.Opts.Types.SUBMIT}),this.state.submittedValues&&s.default.createElement("div",null,s.default.createElement("p",null,"Form Submitted Successfully With"),s.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}},{key:"render",value:function(){return s.default.createElement(v.default,{marginBottom:"small"},s.default.createElement(p.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var t={};return e.description||(t.description="Required"),e.user_name||(t.user_name="Required"),t}}))}}])}(s.default.Component)}}]);