"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[20297],{20297:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var r=n(87462),a=n(44925),i=n(67294),u=n(81254),l=n(8011),o=n(30715),d=n(84475),s=["components"],m={};function c(e){var t=e.components,n=(0,a.Z)(e,s);return(0,u.mdx)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},'/* eslint-disable class-methods-use-this */\n\nimport React from \'react\';\nimport { Form, Field } from \'react-final-form\';\nimport Radio from \'terra-form-radio\';\nimport RadioField from \'terra-form-radio/lib/RadioField\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\n\nconst required = value => (value && value.length > 0 ? undefined : \'Required\');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, errors, submitFailed }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <RadioField\n          legend="Which kind of meal would you like?"\n          isInvalid={submitFailed && errors.meal !== undefined}\n          error={errors.meal}\n          required\n        >\n          <Field\n            name="meal"\n            type="radio"\n            value="chicken"\n            validate={required}\n            component={({ input }) => (\n              <Radio\n                inputAttrs={{ ...input }}\n                labelText="Chicken"\n                id={input.id}\n                name={input.name}\n                checked={!!input.checked}\n                onChange={input.onChange}\n                value={input.value}\n              />\n            )}\n          />\n          <Field\n            name="meal"\n            type="radio"\n            value="vegetarian"\n            validate={required}\n            component={({ input }) => (\n              <Radio\n                inputAttrs={{ ...input }}\n                labelText="Vegetarian"\n                id={input.id}\n                name={input.name}\n                checked={!!input.checked}\n                onChange={input.onChange}\n                value={input.value}\n              />\n            )}\n          />\n          <Field\n            name="meal"\n            type="radio"\n            value="fish"\n            validate={required}\n            component={({ input }) => (\n              <Radio\n                inputAttrs={{ ...input }}\n                labelText="Fish"\n                id={input.id}\n                name={input.name}\n                checked={!!input.checked}\n                onChange={input.onChange}\n                value={input.value}\n              />\n            )}\n          />\n        </RadioField>\n        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom="small">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n')))}c.isMDXComponent=!0;var p=n(49271),f=function(e){var t=e.title,n=e.description,r=e.isExpanded;return i.createElement(p.Z,{title:t||"Form Submit Radio Field",description:n,example:i.createElement(d.Z,null),exampleSrc:i.createElement(c,null),isExpanded:r})},h=n(30390),b=["components"],v={};function F(e){var t=e.components,n=(0,a.Z)(e,b);return(0,u.mdx)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},'/* eslint-disable class-methods-use-this */\n\nimport React from \'react\';\nimport { Form, Field } from \'react-final-form\';\nimport Checkbox from \'terra-form-checkbox\';\nimport CheckboxField from \'terra-form-checkbox/lib/CheckboxField\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\n\nconst required = value => (value && value.length > 0 ? undefined : \'Required\');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, errors, submitFailed }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <CheckboxField\n          legend="What are all the conference tracks you plan on attending?"\n          error={errors.tracks}\n          isInvalid={submitFailed && errors.tracks !== undefined}\n          required\n        >\n          <Field\n            name="tracks[]"\n            type="checkbox"\n            value="developer"\n            validate={required}\n            component={({ input }) => (\n              <Checkbox\n                inputAttrs={{ ...input }}\n                labelText="Developer"\n                id={input.id}\n                name={input.name}\n                checked={!!input.checked}\n                onChange={input.onChange}\n                value={input.value}\n              />\n            )}\n          />\n          <Field\n            name="tracks[]"\n            type="checkbox"\n            value="designer"\n            validate={required}\n            component={({ input }) => (\n              <Checkbox\n                inputAttrs={{ ...input }}\n                labelText="Designer"\n                id={input.id}\n                name={input.name}\n                checked={!!input.checked}\n                onChange={input.onChange}\n                value={input.value}\n              />\n            )}\n          />\n          <Field\n            name="tracks[]"\n            type="checkbox"\n            value="soft_skills"\n            validate={required}\n            component={({ input }) => (\n              <Checkbox\n                inputAttrs={{ ...input }}\n                labelText="Soft skills"\n                id={input.id}\n                name={input.name}\n                checked={!!input.checked}\n                onChange={input.onChange}\n                value={input.value}\n              />\n            )}\n          />\n        </CheckboxField>\n        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom="small">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n')))}F.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return i.createElement(p.Z,{title:t||"Form Submit Checkbox Field",description:n,example:i.createElement(h.Z,null),exampleSrc:i.createElement(F,null),isExpanded:r})},g=n(91137),x=["components"],S={};function E(e){var t=e.components,n=(0,a.Z)(e,x);return(0,u.mdx)("wrapper",(0,r.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport DatePicker from 'terra-date-picker';\nimport TerraField from 'terra-form-field';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateDate = (value) => {\n  if (!value) {\n    return 'Required';\n  }\n  if (value.search(/[0-1][0-9]\\/([0-2][0-9]|3[0-1])\\/[0-9]{4}/i) <= -1) {\n    return 'Date is Invalid';\n  }\n\n  return undefined;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_date\"\n          validate={validateDate}\n        >\n          {({ input, meta }) => (\n            <TerraField\n              label=\"Enter your planned start date\"\n              htmlFor=\"default\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              required\n            >\n              <DatePicker\n                name=\"user_date\"\n                id=\"default\"\n                onChangeRaw={(event, date) => { input.onChange(date); }}\n              />\n            </TerraField>\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}E.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,r=e.isExpanded;return i.createElement(p.Z,{title:t||"Form Submit Date Picker",description:n,example:i.createElement(g.Z,null),exampleSrc:i.createElement(E,null),isExpanded:r})},_=n(46389),C=["components"],O={};function D(e){var t=e.components,n=(0,a.Z)(e,C);return(0,u.mdx)("wrapper",(0,r.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport DateInputField from 'terra-date-input/lib/DateInputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\n/**\n * Ensures the passed in value is an accepted date value\n * @param {string} value The date to validate\n */\nconst isAcceptedDate = (value) => {\n  if (value && value.length === 10) {\n    const splitValue = value.split('-');\n    const formattedDay = Number(splitValue[2]);\n    const formattedMonth = Number(splitValue[1]) - 1; // Account for 0-indexed month\n    const formattedYear = Number(splitValue[0]);\n\n    const date = new Date(formattedYear, formattedMonth, formattedDay);\n\n    const yearMatches = date.getUTCFullYear() === formattedYear;\n    const monthMatches = date.getUTCMonth() === formattedMonth;\n    const dayMatches = date.getUTCDate() === formattedDay;\n\n    return yearMatches && monthMatches && dayMatches;\n  }\n  return false;\n};\n\nconst validateDate = (value) => {\n  if (!value) {\n    return 'Required';\n  }\n\n  if (!isAcceptedDate(value)) {\n    return 'Date is Invalid';\n  }\n\n  const splitValue = value.split('-');\n  if (splitValue[0] < 2021) {\n    return 'Year must be after the year 2020';\n  }\n\n  return undefined;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_date\"\n          validate={validateDate}\n        >\n          {({ input, meta }) => (\n            <DateInputField\n              name=\"user_date\"\n              legend=\"Enter your birthday\"\n              value={input.value}\n              onChange={(event, date) => { input.onChange(date); }}\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n        />\n        {this.state.submittedValues\n          && (\n            <div>\n              <p>Form Submitted Successfully With</p>\n              <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n            </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}D.isMDXComponent=!0;var I=function(e){var t=e.title,n=e.description,r=e.isExpanded;return i.createElement(p.Z,{title:t||"Form Submit Date Input",description:n,example:i.createElement(_.Z,null),exampleSrc:i.createElement(D,null),isExpanded:r})},R=["components"],T={},w="wrapper";function V(e){var t=e.components,n=(0,a.Z)(e,R);return(0,u.mdx)(w,(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,u.mdx)(l.C,{mdxType:"Badge"}),(0,u.mdx)("h1",{id:"component-setup"},"Component Setup"),(0,u.mdx)("h2",{id:"inputfields-and-textareafields"},"InputFields and TextareaFields"),(0,u.mdx)("p",null,"Setting up InputFields and TextareaFields is very simple. Encapsulate the desired field inside of a react-final-form Field component like down below. Ensure that the render function contains input and meta in it's props hash, and that the appropriate elements from the meta prop is passed into error and isInvalid."),(0,u.mdx)("h2",{id:"checkboxfield-and-radiofields"},"CheckboxField and RadioFields"),(0,u.mdx)("p",null,"For CheckboxField and RadioField, it's recommended to use the field component provided by terra-form-checkbox and terra-form-radio. They contain props for rendering the error message in a consistent manner."),(0,u.mdx)("p",null,"In the Form render function, ensure that you have the errors prop set in the prop hash. Then set the error and isInvalid states based on the information from that hash."),(0,u.mdx)("p",null,"For each individual Radio or Checkbox, encapsulate that component inside of a react-final-form Field element, using the same name and validate function for each control you wish for the field to contain.\n",(0,u.mdx)("strong",{parentName:"p"},"Note:")," For having checkboxes that have multiple values, be sure to attach the [] to the name of the Field."),(0,u.mdx)("h2",{id:"datepicker"},"DatePicker"),(0,u.mdx)("p",null,"The DatePicker can be used as well with react-final-form. One thing to note is that the onChange function for a DatePicker doesn't store the value on the event object, as that isn't a native input. For your onChange function, be sure that you use both event and value arguments that are returned, and that the onChange function for react-final-form uses the value argument. Finally, a field is not provided with the DatePicker, so it's recommended to combine terra-date-picker with terra-form-field."),(0,u.mdx)("h2",{id:"examples"},"Examples"),(0,u.mdx)(o.Z,{title:"Input/TextareaField Validation",mdxType:"DefaultFormValidation"}),(0,u.mdx)(f,{title:"RadioField Validation",mdxType:"FormSubmitRadioField"}),(0,u.mdx)(y,{title:"CheckboxField Validation",mdxType:"FormSubmitCheckboxField"}),(0,u.mdx)(k,{title:"DatePicker Validation",mdxType:"FormSubmitDatePicker"}),(0,u.mdx)(I,{title:"DateInput Validation",mdxType:"FormSubmitDateInput"}))}V.isMDXComponent=!0},30715:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(99906),i=n(87462),u=n(44925),l=n(81254),o=["components"],d={};function s(e){var t=e.components,n=(0,u.Z)(e,o);return(0,l.mdx)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n    this.renderForm = this.renderForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              required\n              help=\"TerraUser is not available\"\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n            />\n          )}\n        </Field>\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <TextareaField\n              inputId=\"description-field\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n      </Spacer>\n    );\n  }\n}\n\n")))}s.isMDXComponent=!0;var m=n(49271),c=function(e){var t=e.title,n=e.description,i=e.isExpanded;return r.createElement(m.Z,{title:t||"Default Form Validation",description:n,example:r.createElement(a.Z,null),exampleSrc:r.createElement(s,null),isExpanded:i})}},8011:function(e,t,n){n.d(t,{C:function(){return i}});var r=n(67294),a=n(22863),i=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-form-validation",name:"terra-form-validation",version:"1.93.0",url:t})}},76313:function(e,t,n){var r=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(38416)),u=r(n(10434)),l=r(n(70215)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var l=i?Object.getOwnPropertyDescriptor(e,u):null;l&&(l.get||l.set)?Object.defineProperty(r,u,l):r[u]=e[u]}return r.default=e,n&&n.set(e,r),r}(n(67294)),d=r(n(45697)),s=n(25387),m=r(n(94184)),c=r(n(47166)),p=r(n(47341)),f=n(55877),h=r(n(51331)),b=r(n(29270)),v=r(n(91986)),F=r(n(91417)),y=r(n(40873)),g=["dayAttributes","disabled","displayFormat","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLegendHidden","intl","legend","legendAttributes","monthAttributes","maxWidth","name","onBlur","onChange","onFocus","required","showOptional","value","yearAttributes"];function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=c.default.bind(y.default),_={legend:d.default.string.isRequired,name:d.default.string.isRequired,dayAttributes:d.default.object,disabled:d.default.bool,displayFormat:d.default.string,error:d.default.node,help:d.default.node,hideRequired:d.default.bool,isIncomplete:d.default.bool,isInline:d.default.bool,isInvalid:d.default.bool,isLegendHidden:d.default.bool,intl:d.default.shape({formatMessage:d.default.func}),legendAttributes:d.default.object,monthAttributes:d.default.object,maxWidth:d.default.string,onBlur:d.default.func,onChange:d.default.func,onFocus:d.default.func,required:d.default.bool,showOptional:d.default.bool,value:d.default.string,yearAttributes:d.default.object},C={dayAttributes:{},disabled:!1,displayFormat:void 0,error:null,help:null,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttributes:{},monthAttributes:{},maxWidth:void 0,onBlur:void 0,onChange:void 0,onFocus:void 0,required:!1,showOptional:!1,value:"",yearAttributes:{}},O=function(e){var t=e.dayAttributes,n=e.disabled,r=e.displayFormat,a=e.error,i=e.help,d=e.hideRequired,s=e.isIncomplete,c=e.isInline,y=e.isInvalid,x=e.isLegendHidden,S=e.intl,_=e.legend,C=e.legendAttributes,O=e.monthAttributes,D=(e.maxWidth,e.name),I=e.onBlur,R=e.onChange,T=e.onFocus,w=e.required,V=e.showOptional,q=e.value,j=e.yearAttributes,B=(0,l.default)(e,g),N=(0,o.useRef)((0,f.v4)()),P=o.default.useContext(p.default),M=(0,m.default)(k("date-input-field",{"is-inline":c},P.className),B.className),A=(0,m.default)(k("legend",P.className),C.className),Z="terra-date-input-field-description-help-".concat(N.current),U="terra-date-input-field-description-error-".concat(N.current),W=Z;a&&y&&(W="".concat(U," ").concat(Z));var X=O&&O["aria-describedby"],J=t&&t["aria-describedby"],L=j&&j["aria-describedby"],Y=X?"".concat(W," ").concat(X):W,H=J?"".concat(W," ").concat(J):W,z=L?"".concat(W," ").concat(L):W,Q=o.default.createElement("legend",{className:k(["legend-group",{"legend-group-hidden":x}])},o.default.createElement("div",(0,u.default)({},C,{className:A}),y&&o.default.createElement("span",{className:k("error-icon")},o.default.createElement(h.default,null)),w&&(y||!d)&&o.default.createElement(o.default.Fragment,null,o.default.createElement("div",{"aria-hidden":"true",className:k("required")},"*"),o.default.createElement(b.default,{text:S.formatMessage({id:"Terra.date.input.required"})})),_,w&&!y&&d&&o.default.createElement("span",{className:k("required-hidden")},"*"),V&&!w&&o.default.createElement("span",{className:k("optional")},S.formatMessage({id:"Terra.date.input.optional"})),!y&&o.default.createElement("span",{className:k("error-icon-hidden")}))),G=F.default.getDateFormat({displayFormat:r,intl:S});return o.default.createElement("fieldset",(0,u.default)({},B,{className:M}),Q,i&&o.default.createElement(b.default,{text:i}),o.default.createElement(v.default,{a11yLabel:_,dayAttributes:E(E({},t),{"aria-describedby":H}),disabled:n,displayFormat:r,isA11yControlled:!0,isIncomplete:s,isInvalid:y,monthAttributes:E(E({},O),{"aria-describedby":Y}),name:D,onBlur:I,onChange:R,onFocus:T,required:w,useExternalFormatMask:!0,value:q,yearAttributes:E(E({},j),{"aria-describedby":z})}),y&&a&&o.default.createElement("div",{id:U,className:k("error-text")},a),o.default.createElement("div",{"aria-hidden":!0,className:k("help-text")},i?"".concat(G," ").concat(i):G))};O.propTypes=_,O.defaultProps=C;t.default=(0,s.injectIntl)(O)},99906:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(64687)),i=r(n(56690)),u=r(n(89728)),l=r(n(66115)),o=r(n(61655)),d=r(n(94993)),s=r(n(73808)),m=r(n(17156)),c=r(n(67294)),p=n(57057),f=r(n(11817)),h=r(n(76493)),b=r(n(55281)),v=r(n(7017));function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var y=function(){var e=(0,m.default)(a.default.mark((function e(t){var n;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){return e("TerraUser"!==t?"":"Name is Unavailable")})),e.next=3,n;case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.Z=function(e){(0,o.default)(n,e);var t=F(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r.renderForm=r.renderForm.bind((0,l.default)(r)),r}return(0,u.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return c.default.createElement("form",{noValidate:!0,onSubmit:t},c.default.createElement(p.Field,{name:"user_name",validate:y},(function(e){var t=e.input,n=e.meta;return c.default.createElement(f.default,{inputId:"user-name",label:"User Name",error:n.error,isInvalid:n.submitFailed&&!n.valid,required:!0,help:"TerraUser is not available",inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value})})),c.default.createElement(p.Field,{name:"description"},(function(e){var t=e.input,n=e.meta;return c.default.createElement(h.default,{inputId:"description-field",label:"Description",error:n.error,isInvalid:n.submitFailed&&!n.valid,inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),c.default.createElement(b.default,{text:"Submit",type:b.default.Opts.Types.SUBMIT}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}},{key:"render",value:function(){return c.default.createElement(v.default,{marginBottom:"small"},c.default.createElement(p.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var t={};return e.description||(t.description="Required"),e.user_name||(t.user_name="Required"),t}}))}}]),n}(c.default.Component)},30390:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(38416)),i=r(n(56690)),u=r(n(89728)),l=r(n(66115)),o=r(n(61655)),d=r(n(94993)),s=r(n(73808)),m=r(n(67294)),c=n(57057),p=r(n(15185)),f=r(n(58312)),h=r(n(55281)),b=r(n(7017));function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var g=function(e){return e&&e.length>0?void 0:"Required"};t.Z=function(e){(0,o.default)(n,e);var t=y(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit,n=e.errors,r=e.submitFailed;return m.default.createElement("form",{noValidate:!0,onSubmit:t},m.default.createElement(f.default,{legend:"What are all the conference tracks you plan on attending?",error:n.tracks,isInvalid:r&&void 0!==n.tracks,required:!0},m.default.createElement(c.Field,{name:"tracks[]",type:"checkbox",value:"developer",validate:g,component:function(e){var t=e.input;return m.default.createElement(p.default,{inputAttrs:F({},t),labelText:"Developer",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}}),m.default.createElement(c.Field,{name:"tracks[]",type:"checkbox",value:"designer",validate:g,component:function(e){var t=e.input;return m.default.createElement(p.default,{inputAttrs:F({},t),labelText:"Designer",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}}),m.default.createElement(c.Field,{name:"tracks[]",type:"checkbox",value:"soft_skills",validate:g,component:function(e){var t=e.input;return m.default.createElement(p.default,{inputAttrs:F({},t),labelText:"Soft skills",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}})),m.default.createElement(h.default,{text:"Submit",type:h.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(b.default,{marginBottom:"small"},m.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(m.default.Component)},46389:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(56690)),i=r(n(89728)),u=r(n(66115)),l=r(n(61655)),o=r(n(94993)),d=r(n(73808)),s=r(n(67294)),m=n(57057),c=r(n(76313)),p=r(n(55281)),f=r(n(7017));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.default)(this,n)}}var b=function(e){return e?function(e){if(e&&10===e.length){var t=e.split("-"),n=Number(t[2]),r=Number(t[1])-1,a=Number(t[0]),i=new Date(a,r,n),u=i.getUTCFullYear()===a,l=i.getUTCMonth()===r,o=i.getUTCDate()===n;return u&&l&&o}return!1}(e)?e.split("-")[0]<2021?"Year must be after the year 2020":void 0:"Date is Invalid":"Required"};t.Z=function(e){(0,l.default)(n,e);var t=h(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,u.default)(r)),r}return(0,i.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return s.default.createElement("form",{noValidate:!0,onSubmit:t},s.default.createElement(m.Field,{name:"user_date",validate:b},(function(e){var t=e.input,n=e.meta;return s.default.createElement(c.default,{name:"user_date",legend:"Enter your birthday",value:t.value,onChange:function(e,n){t.onChange(n)},error:n.error,isInvalid:n.submitFailed&&void 0!==n.error,required:!0})})),s.default.createElement(p.default,{text:"Submit",type:p.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return s.default.createElement(f.default,{marginBottom:"small"},s.default.createElement(m.Form,{onSubmit:this.submitForm,render:this.renderForm}),this.state.submittedValues&&s.default.createElement("div",null,s.default.createElement("p",null,"Form Submitted Successfully With"),s.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(s.default.Component)},91137:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(56690)),i=r(n(89728)),u=r(n(66115)),l=r(n(61655)),o=r(n(94993)),d=r(n(73808)),s=r(n(67294)),m=n(57057),c=r(n(28411)),p=r(n(47717)),f=r(n(55281)),h=r(n(7017));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,o.default)(this,n)}}var v=function(e){return e?e.search(/[0-1][0-9]\/([0-2][0-9]|3[0-1])\/[0-9]{4}/i)<=-1?"Date is Invalid":void 0:"Required"};t.Z=function(e){(0,l.default)(n,e);var t=b(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,u.default)(r)),r}return(0,i.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return s.default.createElement("form",{noValidate:!0,onSubmit:t},s.default.createElement(m.Field,{name:"user_date",validate:v},(function(e){var t=e.input,n=e.meta;return s.default.createElement(p.default,{label:"Enter your planned start date",htmlFor:"default",error:n.error,isInvalid:n.submitFailed&&void 0!==n.error,required:!0},s.default.createElement(c.default,{name:"user_date",id:"default",onChangeRaw:function(e,n){t.onChange(n)}}))})),s.default.createElement(f.default,{text:"Submit",type:f.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return s.default.createElement(h.default,{marginBottom:"small"},s.default.createElement(m.Form,{onSubmit:this.submitForm,render:this.renderForm}),this.state.submittedValues&&s.default.createElement("div",null,s.default.createElement("p",null,"Form Submitted Successfully With"),s.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(s.default.Component)},84475:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(38416)),i=r(n(56690)),u=r(n(89728)),l=r(n(66115)),o=r(n(61655)),d=r(n(94993)),s=r(n(73808)),m=r(n(67294)),c=n(57057),p=r(n(79029)),f=r(n(56931)),h=r(n(55281)),b=r(n(7017));function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){(0,a.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,d.default)(this,n)}}var g=function(e){return e&&e.length>0?void 0:"Required"};t.Z=function(e){(0,o.default)(n,e);var t=y(n);function n(e){var r;return(0,i.default)(this,n),(r=t.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit,n=e.errors,r=e.submitFailed;return m.default.createElement("form",{noValidate:!0,onSubmit:t},m.default.createElement(f.default,{legend:"Which kind of meal would you like?",isInvalid:r&&void 0!==n.meal,error:n.meal,required:!0},m.default.createElement(c.Field,{name:"meal",type:"radio",value:"chicken",validate:g,component:function(e){var t=e.input;return m.default.createElement(p.default,{inputAttrs:F({},t),labelText:"Chicken",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}}),m.default.createElement(c.Field,{name:"meal",type:"radio",value:"vegetarian",validate:g,component:function(e){var t=e.input;return m.default.createElement(p.default,{inputAttrs:F({},t),labelText:"Vegetarian",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}}),m.default.createElement(c.Field,{name:"meal",type:"radio",value:"fish",validate:g,component:function(e){var t=e.input;return m.default.createElement(p.default,{inputAttrs:F({},t),labelText:"Fish",id:t.id,name:t.name,checked:!!t.checked,onChange:t.onChange,value:t.value})}})),m.default.createElement(h.default,{text:"Submit",type:h.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(b.default,{marginBottom:"small"},m.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(m.default.Component)},40873:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"DateInputField-module__orion-fusion-theme___6WeUI","clinical-lowlight-theme":"DateInputField-module__clinical-lowlight-theme___ZPdZB","date-input-field":"DateInputField-module__date-input-field___y3E0d","is-inline":"DateInputField-module__is-inline___Y5zYN","legend-group":"DateInputField-module__legend-group___Y8qQh","legend-group-hidden":"DateInputField-module__legend-group-hidden___NubE+",legend:"DateInputField-module__legend___8v6Uw","error-icon":"DateInputField-module__error-icon___9jalk","error-icon-hidden":"DateInputField-module__error-icon-hidden___7yXqb",required:"DateInputField-module__required___c+zgG","required-hidden":"DateInputField-module__required-hidden___udcsO",optional:"DateInputField-module__optional___Jtg7S","help-text":"DateInputField-module__help-text___zQnVy","error-text":"DateInputField-module__error-text___D5gK6"}}}]);