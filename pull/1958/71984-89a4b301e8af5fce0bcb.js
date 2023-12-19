"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[71984],{74480:function(e,n,t){t.r(n),t.d(n,{default:function(){return B}});var r=t(87462),a=t(44925),i=t(67294),u=t(81254),l=t(8011),o=t(11844),s=["components"],m={},d="wrapper";function c(e){var n=e.components,t=(0,a.Z)(e,s);return(0,u.mdx)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (!name) {\n      return resolve('Required');\n    }\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name-async\"\n              label=\"User Name\"\n              error={meta.error}\n              help=\"TerraUser is unavailable. Use this name to test async\"\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              inputAttrs={input}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          validateOnBlur\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}c.isMDXComponent=!0;var p=t(49271),f=function(e){var n=e.title,t=e.description,r=e.isExpanded;return i.createElement(p.Z,{title:n||"Validation Asynchronous",description:t,example:i.createElement(o.Z,null),exampleSrc:i.createElement(c,null),isExpanded:r})},v=t(37918),h=["components"],b={},y="wrapper";function g(e){var n=e.components,t=(0,a.Z)(e,h);return(0,u.mdx)(y,(0,r.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst numericOnly = (value) => {\n  if (!value) return value;\n  const onlyNums = value.replace(/[^\\d]/g, '');\n  return onlyNums;\n};\n\nconst enforcePhoneNumber = (value) => {\n  if (!value) return value;\n  const onlyNums = value.replace(/[^\\d]/g, '');\n  if (onlyNums.length <= 3) return onlyNums;\n  if (onlyNums.length <= 7) return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;\n\n  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(\n    6,\n    10,\n  )}`;\n};\n\nconst required = value => (value ? undefined : 'Required');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"vacation_days\"\n          validate={required}\n          parse={numericOnly}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"vacation-days\"\n              label=\"Vacation Days Remaining\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"phone_number\"\n          validate={required}\n          parse={enforcePhoneNumber}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"phone-number\"\n              label=\"Phone Number\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}g.isMDXComponent=!0;var x=function(e){var n=e.title,t=e.description,r=e.isExpanded;return i.createElement(p.Z,{title:n||"Validation Parsing",description:t,example:i.createElement(v.Z,null),exampleSrc:i.createElement(g,null),isExpanded:r})},F=t(22938),S=["components"],N={},O="wrapper";function E(e){var n=e.components,t=(0,a.Z)(e,S);return(0,u.mdx)(O,(0,r.Z)({},N,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport FormValidationUtil from '../../../FormValidationUtil';\n\nconst validateNumber = (value) => {\n  if (!FormValidationUtil.isOverMinValue(value, 10)) {\n    return 'Value should not be less than 10.';\n  }\n  if (!FormValidationUtil.isUnderMaxValue(value, 100)) {\n    return 'Value should not be over 100.';\n  }\n  if (!FormValidationUtil.isPrecise(value, 3)) {\n    return 'Value has more than 3 decimal points';\n  }\n\n  return undefined;\n};\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"numExample\"\n          validate={validateNumber}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"numExample\"\n              label=\"Numeric Example\"\n              error={meta.error}\n              isInvalid={meta.error !== undefined}\n              inputAttrs={{\n                type: 'number',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ numExample: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.numExample) {\n              errors.numExample = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}E.isMDXComponent=!0;var V=function(e){var n=e.title,t=e.description,r=e.isExpanded;return i.createElement(p.Z,{title:n||"Numeric Validation",description:t,example:i.createElement(F.Z,null),exampleSrc:i.createElement(E,null),isExpanded:r})},C=t(11858),w=["components"],I={},j="wrapper";function k(e){var n=e.components,t=(0,a.Z)(e,w);return(0,u.mdx)(j,(0,r.Z)({},I,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport FormValidationUtil from '../../../FormValidationUtil';\n\nconst validateLength = (name) => {\n  if (!FormValidationUtil.isUnderMaxLength(name, 8)) {\n    return 'Name needs to be less than 9 characters long';\n  }\n\n  return undefined;\n};\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"example\"\n          validate={validateLength}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"example\"\n              label=\"Example\"\n              error={meta.error}\n              isInvalid={meta.error !== undefined}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ example: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.example) {\n              errors.example = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}k.isMDXComponent=!0;var P=function(e){var n=e.title,t=e.description,r=e.isExpanded;return i.createElement(p.Z,{title:n||"Max Length Input",description:t,example:i.createElement(C.Z,null),exampleSrc:i.createElement(k,null),isExpanded:r})},U=["components"],M={},R="wrapper";function B(e){var n=e.components,t=(0,a.Z)(e,U);return(0,u.mdx)(R,(0,r.Z)({},M,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)(l.C,{mdxType:"Badge"}),(0,u.mdx)("h1",{id:"validation-functions"},"Validation Functions"),(0,u.mdx)("p",null,(0,u.mdx)("em",{parentName:"p"},"react-final-form")," gives you the ability to create your own validation functions. For custom validations, the idea is that a message will be returned if the function finds an error with the form input value, or returns undefined if no errors are detected for the given input value."),(0,u.mdx)("h2",{id:"asynchronous-validations"},"Asynchronous Validations"),(0,u.mdx)("p",null,"There maybe times you need to do remote validations such as Unique Username checks. To best handle this scenario with wide browser support, an OnBlurValidation can be added to a component, where the function takes in two parameters: the value of the input, and a callback setError that sets the error status of the input."),(0,u.mdx)("p",null,(0,u.mdx)("strong",{parentName:"p"},"Note")),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},"If you need to run this in IE11, the ",(0,u.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-plugin-transform-async-to-generator"},"transform-async-to-generator")," plugin needs to be added to your .babelrc file."),(0,u.mdx)("li",{parentName:"ul"},"The promise can be any kind of promise, including calls with axios and other libraries.")),(0,u.mdx)("h1",{id:"parsing"},"Parsing"),(0,u.mdx)("p",null,"Form inputs can be parsed to ensure input values follow specific formats. This could be useful when you want to restrict numeric inputs to only allow users to enter in digits, and force formating of phone numbers."),(0,u.mdx)("p",null,"Consult ",(0,u.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form")," for further functionality that can be used."),(0,u.mdx)("h2",{id:"formvalidationutil-class"},"FormValidationUtil Class"),(0,u.mdx)("p",null,"In order to make creating form validation functions easier, we have a FormValidationUtil class in the ",(0,u.mdx)("inlineCode",{parentName:"p"},"terra-form-validation")," package. It contains the following functions."),(0,u.mdx)("h4",{id:"isundermaxlength"},"isUnderMaxLength"),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isUnderMaxValue(value, maximum)\n")),(0,u.mdx)("p",null,"Checks given value's length against maximum. Returns true if value's length is less than the maximum."),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"maximum")," is a nonnegative whole number.")),(0,u.mdx)("h4",{id:"isoverminlength"},"isOverMinLength"),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isOverMinLength(value, minimum)\n")),(0,u.mdx)("p",null,"Checks given value's length against minimum. Returns true if value's length is greater than the minimum."),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"minimum")," is a nonnegative whole number.")),(0,u.mdx)("h4",{id:"hasnowhitespace"},"hasNoWhitespace"),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.hasNoWhitespace(value)\n")),(0,u.mdx)("p",null,"Checks given value for extraneous whitespace. return true if there is no whitespace."),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"value")," is the value string")),(0,u.mdx)("h4",{id:"containscharacters"},"containsCharacters"),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.containsCharacters(value, chars)\n")),(0,u.mdx)("p",null,"Checks given value for any string in given array. return true if value does not contain any of them."),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"chars")," is an array of strings")),(0,u.mdx)("h4",{id:"isoverminvalue"},"isOverMinValue"),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isOverMinValue(value, minimum)\n")),(0,u.mdx)("p",null,"Checks given value against a minimum value. Returns true if value is greater then or equal to the minimum"),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"minimum")," is the minimum numeric value")),(0,u.mdx)("h4",{id:"isundermaxvalue"},"isUnderMaxValue"),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isUnderMaxValue(value, maximum)\n")),(0,u.mdx)("p",null,"Checks given value against a maximum value. Returns true if value is less then or equal to the maximum"),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"maximum")," is the maximum numeric value")),(0,u.mdx)("h4",{id:"isprecise"},"isPrecise"),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isPrecise(value, precision)\n")),(0,u.mdx)("p",null,"Checks given value for a specific level of precision. Returns true if value has less than or an equal amount of precision"),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"precision")," is a nonnegative whole number")),(0,u.mdx)("h4",{id:"isnonnegative"},"isNonnegative"),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isNonnegative(value)\n")),(0,u.mdx)("p",null,"Checks given value for if it is a negative value. Returns true if it is nonnegative."),(0,u.mdx)("ul",null,(0,u.mdx)("li",{parentName:"ul"},(0,u.mdx)("inlineCode",{parentName:"li"},"value")," is the value string")),(0,u.mdx)("h2",{id:"examples"},"Examples"),(0,u.mdx)(f,{title:"Asynchronous Function",mdxType:"ValidationAsynchronous"}),(0,u.mdx)(x,{title:"Parsing Function",mdxType:"ValidationParsing"}),(0,u.mdx)(V,{title:"Numeric Validations",description:"Making a Numeric Input With Minimum, Maximum, and Precision Validations",mdxType:"NumericValidation"}),(0,u.mdx)(P,{title:"Max Length Input",description:"Making an Input With a Maximum Length",mdxType:"TestFormValidation"}))}B.isMDXComponent=!0},8011:function(e,n,t){t.d(n,{C:function(){return i}});var r=t(67294),a=t(22863),i=function(e){var n=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-form-validation",name:"terra-form-validation",version:"1.92.0",url:n})}},9846:function(e,n,t){var r=t(64836);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(18698)),i=r(t(56690)),u=r(t(89728)),l=function(){function e(){(0,i.default)(this,e)}return(0,u.default)(e,null,[{key:"isUnderMaxLength",value:function(e,n){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof n||!isFinite(n)||n<0||!Number.isInteger(n))&&e.length<=n}},{key:"isOverMinLength",value:function(e,n){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof n||!isFinite(n)||n<0||!Number.isInteger(n))&&e.length>=n}},{key:"hasNoWhitespace",value:function(e){return("string"==typeof e||e instanceof String)&&!/\s/.test(e)}},{key:"containsCharacters",value:function(e,n){if(!("string"==typeof e||e instanceof String)||!n||"object"!==(0,a.default)(n)||n.constructor!==Array)return!1;for(var t=0;t<n.length;t+=1)if(e.includes(n[t]))return!0;return!1}},{key:"isOverMinValue",value:function(e,n){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof n||!isFinite(n))&&e>=n}},{key:"isUnderMaxValue",value:function(e,n){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof n||!isFinite(n))&&e<=n}},{key:"isPrecise",value:function(e,n){if(!("string"==typeof e||e instanceof String)||"number"!=typeof n||!isFinite(n)||n<0||!Number.isInteger(n))return!1;var t=e.split(".");return!(2===t.length&&t[1].length>n)}},{key:"isNonnegative",value:function(e){return("string"==typeof e||e instanceof String)&&parseFloat(e)>=0}}]),e}();n.default=l},11858:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(56690)),i=r(t(89728)),u=r(t(66115)),l=r(t(61655)),o=r(t(94993)),s=r(t(73808)),m=r(t(67294)),d=t(57057),c=r(t(11817)),p=r(t(55281)),f=r(t(7017)),v=r(t(9846));function h(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,s.default)(e);if(n){var a=(0,s.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,o.default)(this,t)}}var b=function(e){if(!v.default.isUnderMaxLength(e,8))return"Name needs to be less than 9 characters long"};n.Z=function(e){(0,l.default)(t,e);var n=h(t);function t(e){var r;return(0,a.default)(this,t),(r=n.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,u.default)(r)),r}return(0,i.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit;return m.default.createElement("form",{noValidate:!0,onSubmit:n},m.default.createElement(d.Field,{name:"example",validate:b},(function(e){var n=e.input,t=e.meta;return m.default.createElement(c.default,{inputId:"example",label:"Example",error:t.error,isInvalid:void 0!==t.error,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),m.default.createElement(p.default,{text:"Submit",type:p.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(f.default,{marginBottom:"small"},m.default.createElement(d.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{example:""},validate:function(e){var n={};return e.example||(n.example="Required"),n}}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),t}(m.default.Component)},22938:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(38416)),i=r(t(56690)),u=r(t(89728)),l=r(t(66115)),o=r(t(61655)),s=r(t(94993)),m=r(t(73808)),d=r(t(67294)),c=t(57057),p=r(t(11817)),f=r(t(55281)),v=r(t(7017)),h=r(t(9846));function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,m.default)(e);if(n){var a=(0,m.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,s.default)(this,t)}}var x=function(e){return h.default.isOverMinValue(e,10)?h.default.isUnderMaxValue(e,100)?h.default.isPrecise(e,3)?void 0:"Value has more than 3 decimal points":"Value should not be over 100.":"Value should not be less than 10."};n.Z=function(e){(0,o.default)(t,e);var n=g(t);function t(e){var r;return(0,i.default)(this,t),(r=n.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit;return d.default.createElement("form",{noValidate:!0,onSubmit:n},d.default.createElement(c.Field,{name:"numExample",validate:x},(function(e){var n=e.input,t=e.meta;return d.default.createElement(p.default,{inputId:"numExample",label:"Numeric Example",error:t.error,isInvalid:void 0!==t.error,inputAttrs:y({type:"number"},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),d.default.createElement(f.default,{text:"Submit",type:f.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return d.default.createElement(v.default,{marginBottom:"small"},d.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{numExample:""},validate:function(e){var n={};return e.numExample||(n.numExample="Required"),n}}),this.state.submittedValues&&d.default.createElement("div",null,d.default.createElement("p",null,"Form Submitted Successfully With"),d.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),t}(d.default.Component)},11844:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(64687)),i=r(t(56690)),u=r(t(89728)),l=r(t(66115)),o=r(t(61655)),s=r(t(94993)),m=r(t(73808)),d=r(t(17156)),c=r(t(67294)),p=t(57057),f=r(t(11817)),v=r(t(55281)),h=r(t(7017));function b(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,m.default)(e);if(n){var a=(0,m.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,s.default)(this,t)}}var y=function(){var e=(0,d.default)(a.default.mark((function e(n){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return e(n?"TerraUser"!==n?"":"Name is Unavailable":"Required")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.Z=function(e){(0,o.default)(t,e);var n=b(t);function t(e){var r;return(0,i.default)(this,t),(r=n.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit;return c.default.createElement("form",{noValidate:!0,onSubmit:n},c.default.createElement(p.Field,{name:"user_name",validate:y},(function(e){var n=e.input,t=e.meta;return c.default.createElement(f.default,{inputId:"user-name-async",label:"User Name",error:t.error,help:"TerraUser is unavailable. Use this name to test async",isInvalid:t.submitFailed&&void 0!==t.error,onChange:function(e){n.onChange(e.target.value)},inputAttrs:n,value:n.value,required:!0})})),c.default.createElement(v.default,{text:"Submit",type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(h.default,{marginBottom:"small"},c.default.createElement(p.Form,{onSubmit:this.submitForm,render:this.renderForm,validateOnBlur:!0}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),t}(c.default.Component)},37918:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(56690)),i=r(t(89728)),u=r(t(66115)),l=r(t(61655)),o=r(t(94993)),s=r(t(73808)),m=r(t(67294)),d=t(57057),c=r(t(11817)),p=r(t(55281)),f=r(t(7017));function v(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,s.default)(e);if(n){var a=(0,s.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,o.default)(this,t)}}var h=function(e){return e?e.replace(/[^\d]/g,""):e},b=function(e){if(!e)return e;var n=e.replace(/[^\d]/g,"");return n.length<=3?n:n.length<=7?"(".concat(n.slice(0,3),") ").concat(n.slice(3)):"(".concat(n.slice(0,3),") ").concat(n.slice(3,6),"-").concat(n.slice(6,10))},y=function(e){return e?void 0:"Required"};n.Z=function(e){(0,l.default)(t,e);var n=v(t);function t(e){var r;return(0,a.default)(this,t),(r=n.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,u.default)(r)),r}return(0,i.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.pristine,r=e.invalid;return m.default.createElement("form",{noValidate:!0,onSubmit:n},m.default.createElement(d.Field,{name:"vacation_days",validate:y,parse:h},(function(e){var n=e.input,t=e.meta;return m.default.createElement(c.default,{inputId:"vacation-days",label:"Vacation Days Remaining",error:t.error,isInvalid:t.submitFailed&&!t.valid,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),m.default.createElement(d.Field,{name:"phone_number",validate:y,parse:b},(function(e){var n=e.input,t=e.meta;return m.default.createElement(c.default,{inputId:"phone-number",label:"Phone Number",error:t.error,isInvalid:t.submitFailed&&!t.valid,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),m.default.createElement(p.default,{text:"Submit",isDisabled:r||t,type:p.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(f.default,{marginBottom:"small"},m.default.createElement(d.Form,{onSubmit:this.submitForm,render:this.renderForm}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),t}(m.default.Component)},68586:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},55142:function(e,n,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=d(t(67294)),i=d(t(45697)),u=d(t(94184)),l=d(t(47166)),o=d(t(47341)),s=d(t(68586)),m=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c.apply(this,arguments)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e,n,t){return(n=b(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function b(e){var n=function(e,n){if("object"!==r(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,n||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===r(n)?n:String(n)}function y(e,n){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},y(e,n)}function g(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=x(e);if(n){var i=x(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return function(e,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,t)}}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var F=l.default.bind(s.default),S={defaultValue:i.default.oneOfType([i.default.string,i.default.number]),disabled:i.default.bool,isIncomplete:i.default.bool,isInvalid:i.default.bool,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,onInput:i.default.func,name:i.default.string,pattern:i.default.string,refCallback:i.default.func,required:i.default.bool,type:i.default.string,value:i.default.oneOfType([i.default.string,i.default.number]),ariaLabel:i.default.string},N={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},O=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&y(e,n)}(l,e);var n,t,r,i=g(l);function l(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),i.apply(this,arguments)}return n=l,t=[{key:"render",value:function(){var e,n=this.props,t=n.defaultValue,r=n.disabled,i=n.isIncomplete,l=n.isInvalid,o=n.onBlur,s=n.onChange,d=n.onFocus,h=n.onInput,b=n.name,y=n.pattern,g=n.refCallback,x=n.required,S=n.type,N=n.ariaLabel,O=n.value,E=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){f(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},v(n,m)),V=this.context,C=(void 0===S||["text","number","password","email","search","tel","url","hidden"].includes(S))&&F("form-input",{"form-error":l},{"form-incomplete":i&&x&&!l},V.className),w=(0,u.default)(C,E.className);return E&&Object.prototype.hasOwnProperty.call(E,"aria-label")?e=N||E["aria-label"]:N&&(e=N),E["aria-label"]=e,x&&(E["aria-required"]="true"),void 0!==O?E.value=O:void 0!==t&&(E.defaultValue=t),E.placeholder&&!E.showMpageFusionPlaceholder&&(E.placeholder=null),delete E.showMpageFusionPlaceholder,a.default.createElement("input",c({},E,{ref:function(e){g&&g(e)},name:b,type:S,pattern:y,onBlur:o,onChange:s,onFocus:d,onInput:h,disabled:r,required:x,className:w}))}}],t&&h(n.prototype,t),r&&h(n,r),Object.defineProperty(n,"prototype",{writable:!1}),l}(a.default.Component);O.propTypes=S,O.defaultProps=N,O.contextType=o.default,O.isInput=!0;n.default=O}}]);