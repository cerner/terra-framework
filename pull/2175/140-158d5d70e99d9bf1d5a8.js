"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[140],{140:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r=t(58168),a=t(53986),i=t(96540),l=t(36665),u=t(50232),o=t(70065),d=["components"],s={};function m(e){var n=e.components,t=(0,a.A)(e,d);return(0,l.mdx)("wrapper",(0,r.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name.length < 3) {\n      return resolve('Not long enough');\n    }\n    if (name === 'TerraUser') {\n      return resolve('Name is Unavailable');\n    }\n    return resolve('');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"profile-description\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={!meta.valid}\n              inputAttrs={{\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name, requires at least 3 characters\"\n              error={meta.error}\n              isInvalid={meta.error === 'Name is Unavailable'}\n              isIncomplete={meta.error === 'Not long enough' || meta.error === 'Required'}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}m.isMDXComponent=!0;var c=t(201),p=function(e){var n=e.title,t=e.description,r=e.isExpanded;return i.createElement(c.A,{title:n||"Validation On Input",description:t,example:i.createElement(o.A,null),exampleSrc:i.createElement(m,null),isExpanded:r})},f=t(10373),v=["components"],h={};function b(e){var n=e.components,t=(0,a.A)(e,v);return(0,l.mdx)("wrapper",(0,r.A)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'/* eslint-disable class-methods-use-this */\n\nimport React from \'react\';\nimport { Form, Field } from \'react-final-form\';\nimport InputField from \'terra-form-input/lib/InputField\';\nimport Checkbox from \'terra-form-checkbox\';\nimport CheckboxField from \'terra-form-checkbox/lib/CheckboxField\';\nimport TerraField from \'terra-form-field\';\nimport Radio from \'terra-form-radio\';\nimport RadioField from \'terra-form-radio/lib/RadioField\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport Select from \'terra-form-select\';\n\nconst required = value => (value && value.length > 0 ? undefined : \'Required\');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, errors, submitFailed }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name="description"\n          validate={required}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId="description"\n              label="Description"\n              error={meta.error}\n              isInvalid={meta.submitFailed}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <div>\n          <RadioField\n            legend="Which kind of meal would you like?"\n            isInvalid={submitFailed && errors.meal !== undefined}\n            error={errors.meal}\n          >\n            <Field\n              name="meal"\n              type="radio"\n              value="chicken"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Chicken"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="vegetarian"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Vegetarian"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="fish"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Fish"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </RadioField>\n        </div>\n        <Field\n          name="travel"\n          type="select"\n          validate={required}\n          component={({ input, meta }) => (\n            <TerraField\n              htmlFor="airliner"\n              label="Which Airliner are you traveling on?"\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              error={meta.error}\n            >\n              <Select\n                id="airliner"\n                name={input.name}\n                onChange={(value) => { input.onChange(value); }}\n                defaultValue={input.value}\n                placeholder="Select an Airline"\n              >\n                <Select.Option value="southwest" display="Southwest" key="southwest" />\n                <Select.Option value="alaska" display="Alaska" key="alaska" />\n                <Select.Option value="hawaii" display="Hawaii" key="hawaii" />\n              </Select>\n            </TerraField>\n          )}\n        />\n        <div>\n          <CheckboxField\n            legend="What are all the conference tracks you plan on attending?"\n            error={errors.tracks}\n            isInvalid={submitFailed && errors.tracks !== undefined}\n          >\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="developer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Developer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="designer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Designer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="soft_skills"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Soft skills"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </CheckboxField>\n        </div>\n        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom="small">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: \'\' }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n')))}b.isMDXComponent=!0;var y=function(e){var n=e.title,t=e.description,r=e.isExpanded;return i.createElement(c.A,{title:n||"Validation On Submit",description:t,example:i.createElement(f.A,null),exampleSrc:i.createElement(b,null),isExpanded:r})},F=t(2066),g=["components"],k={};function x(e){var n=e.components,t=(0,a.A)(e,g);return(0,l.mdx)("wrapper",(0,r.A)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"description-input\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name-disabled\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              inputAttrs={input}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}x.isMDXComponent=!0;var S=function(e){var n=e.title,t=e.description,r=e.isExpanded;return i.createElement(c.A,{title:n||"Validation Disable Submit",description:t,example:i.createElement(F.A,null),exampleSrc:i.createElement(x,null),isExpanded:r})},E=["components"],C={},O="wrapper";function w(e){var n=e.components,t=(0,a.A)(e,E);return(0,l.mdx)(O,(0,r.A)({},C,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(u.E,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"validation-events"},"Validation Events"),(0,l.mdx)("h2",{id:"dynamic-validation"},"Dynamic Validation"),(0,l.mdx)("p",null,"The default behavior of ",(0,l.mdx)("em",{parentName:"p"},"react-final-form")," is to dynamically validate, meaning it validates the content while the user is interacting with the form, and when a form loads. To use this behavior, simply use the error key of the meta data passed to an individual form component, and pass it to the error prop of the Terra Field component (TextareaField, InputField, ...), like in the example below."),(0,l.mdx)("h2",{id:"display-validation-onsubmit"},"Display Validation onSubmit"),(0,l.mdx)("p",null,"Forms written with react-final-form are always validated dynamically, but you can delay showing the validation errors until the form is submitted. The meta argument contains an attribute submitFailed that indicates the last submit was a failure. To display errors on validation, set the isInvalid prop equal to meta.submitFailed like in the example below."),(0,l.mdx)("h2",{id:"disable-form-submission-for-an-invalid-form"},"Disable form submission for an invalid form"),(0,l.mdx)("p",null,"The form render function contains attributes such as invalid (the form has errors on it) and pristine (the form has not been touched yet by the user) that allow for you to enable and disable the submission button. All you need to do is pass in the attribute you wish to check in order to see if the button should be enabled or not."),(0,l.mdx)("p",null,"Consult ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form")," for further functionality that can be used."),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(p,{title:"Validation onInput",mdxType:"ValidationOnInput"}),(0,l.mdx)(y,{title:"Validation onSubmit",mdxType:"ValidationOnSubmit"}),(0,l.mdx)(S,{title:"Validation Disable Submit",mdxType:"ValidationDisableSubmit"}))}w.isMDXComponent=!0},50232:function(e,n,t){t.d(n,{E:function(){return i}});var r=t(96540),a=t(55713),i=function(e){var n=e.url;return r.createElement(a.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-form-validation",name:"terra-form-validation",version:"1.113.1",url:n})}},2066:function(e,n,t){var r=t(24994);n.A=void 0;var a=r(t(54756)),i=r(t(17383)),l=r(t(34579)),u=r(t(28452)),o=r(t(63072)),d=r(t(29511)),s=r(t(29293)),m=r(t(96540)),c=t(45828),p=r(t(19127)),f=r(t(23986)),v=r(t(68550));function h(e,n,t){return n=(0,o.default)(n),(0,u.default)(e,b()?Reflect.construct(n,t||[],(0,o.default)(e).constructor):n.apply(e,t))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}var y=function(){var e=(0,s.default)(a.default.mark((function e(n){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return e("TerraUser"!==n?"":"Name is Unavailable")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.A=function(e){function n(e){var t;return(0,i.default)(this,n),(t=h(this,n,[e])).state={},t.submitForm=t.submitForm.bind(t),t}return(0,d.default)(n,e),(0,l.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.pristine,r=e.invalid;return m.default.createElement("form",{noValidate:!0,onSubmit:n},m.default.createElement(c.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return m.default.createElement(p.default,{inputId:"description-input",label:"Description",error:t.error,isInvalid:t.submitFailed&&void 0!==t.error,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),m.default.createElement(c.Field,{name:"user_name",validate:y},(function(e){var n=e.input,t=e.meta;return m.default.createElement(p.default,{inputId:"user-name-disabled",label:"User Name",error:t.error,isInvalid:t.submitFailed&&void 0!==t.error,onChange:function(e){n.onChange(e.target.value)},inputAttrs:n,value:n.value,required:!0})})),m.default.createElement(f.default,{text:"Submit",isDisabled:r||t,type:f.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(v.default,{marginBottom:"small"},m.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}])}(m.default.Component)},70065:function(e,n,t){var r=t(24994);n.A=void 0;var a=r(t(54756)),i=r(t(43693)),l=r(t(17383)),u=r(t(34579)),o=r(t(28452)),d=r(t(63072)),s=r(t(29511)),m=r(t(29293)),c=r(t(96540)),p=t(45828),f=r(t(19127)),v=r(t(23986)),h=r(t(68550));function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function y(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e,n,t){return n=(0,d.default)(n),(0,o.default)(e,g()?Reflect.construct(n,t||[],(0,d.default)(e).constructor):n.apply(e,t))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var k=function(){var e=(0,m.default)(a.default.mark((function e(n){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return n.length<3?e("Not long enough"):e("TerraUser"===n?"Name is Unavailable":"")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.A=function(e){function n(e){var t;return(0,l.default)(this,n),(t=F(this,n,[e])).state={},t.submitForm=t.submitForm.bind(t),t}return(0,s.default)(n,e),(0,u.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit;return c.default.createElement("form",{noValidate:!0,onSubmit:n},c.default.createElement(p.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return c.default.createElement(f.default,{inputId:"profile-description",label:"Description",error:t.error,isInvalid:!t.valid,inputAttrs:y({},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),c.default.createElement(p.Field,{name:"user_name",validate:k},(function(e){var n=e.input,t=e.meta;return c.default.createElement(f.default,{inputId:"user-name",label:"User Name, requires at least 3 characters",error:t.error,isInvalid:"Name is Unavailable"===t.error,isIncomplete:"Not long enough"===t.error||"Required"===t.error,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),c.default.createElement(v.default,{text:"Submit",type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(h.default,{marginBottom:"small"},c.default.createElement(p.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}])}(c.default.Component)},10373:function(e,n,t){var r=t(24994);n.A=void 0;var a=r(t(43693)),i=r(t(17383)),l=r(t(34579)),u=r(t(28452)),o=r(t(63072)),d=r(t(29511)),s=r(t(96540)),m=t(45828),c=r(t(19127)),p=r(t(42112)),f=r(t(88019)),v=r(t(32527)),h=r(t(20404)),b=r(t(22315)),y=r(t(23986)),F=r(t(68550)),g=r(t(49737));function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e,n,t){return n=(0,o.default)(n),(0,u.default)(e,E()?Reflect.construct(n,t||[],(0,o.default)(e).constructor):n.apply(e,t))}function E(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(E=function(){return!!e})()}var C=function(e){return e&&e.length>0?void 0:"Required"};n.A=function(e){function n(e){var t;return(0,i.default)(this,n),(t=S(this,n,[e])).state={},t.submitForm=t.submitForm.bind(t),t}return(0,d.default)(n,e),(0,l.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.errors,r=e.submitFailed;return s.default.createElement("form",{noValidate:!0,onSubmit:n},s.default.createElement(m.Field,{name:"description",validate:C},(function(e){var n=e.input,t=e.meta;return s.default.createElement(c.default,{inputId:"description",label:"Description",error:t.error,isInvalid:t.submitFailed,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),s.default.createElement("div",null,s.default.createElement(b.default,{legend:"Which kind of meal would you like?",isInvalid:r&&void 0!==t.meal,error:t.meal},s.default.createElement(m.Field,{name:"meal",type:"radio",value:"chicken",validate:C,component:function(e){var n=e.input;return s.default.createElement(h.default,{inputAttrs:x({},n),labelText:"Chicken",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),s.default.createElement(m.Field,{name:"meal",type:"radio",value:"vegetarian",validate:C,component:function(e){var n=e.input;return s.default.createElement(h.default,{inputAttrs:x({},n),labelText:"Vegetarian",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),s.default.createElement(m.Field,{name:"meal",type:"radio",value:"fish",validate:C,component:function(e){var n=e.input;return s.default.createElement(h.default,{inputAttrs:x({},n),labelText:"Fish",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}))),s.default.createElement(m.Field,{name:"travel",type:"select",validate:C,component:function(e){var n=e.input,t=e.meta;return s.default.createElement(v.default,{htmlFor:"airliner",label:"Which Airliner are you traveling on?",isInvalid:t.submitFailed&&void 0!==t.error,error:t.error},s.default.createElement(g.default,{id:"airliner",name:n.name,onChange:function(e){n.onChange(e)},defaultValue:n.value,placeholder:"Select an Airline"},s.default.createElement(g.default.Option,{value:"southwest",display:"Southwest",key:"southwest"}),s.default.createElement(g.default.Option,{value:"alaska",display:"Alaska",key:"alaska"}),s.default.createElement(g.default.Option,{value:"hawaii",display:"Hawaii",key:"hawaii"})))}}),s.default.createElement("div",null,s.default.createElement(f.default,{legend:"What are all the conference tracks you plan on attending?",error:t.tracks,isInvalid:r&&void 0!==t.tracks},s.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"developer",validate:C,component:function(e){var n=e.input;return s.default.createElement(p.default,{inputAttrs:x({},n),labelText:"Developer",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),s.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"designer",validate:C,component:function(e){var n=e.input;return s.default.createElement(p.default,{inputAttrs:x({},n),labelText:"Designer",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),s.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"soft_skills",validate:C,component:function(e){var n=e.input;return s.default.createElement(p.default,{inputAttrs:x({},n),labelText:"Soft skills",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}))),s.default.createElement(y.default,{text:"Submit",type:y.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return s.default.createElement(F.default,{marginBottom:"small"},s.default.createElement(m.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""}}),this.state.submittedValues&&s.default.createElement("div",null,s.default.createElement("p",null,"Form Submitted Successfully With"),s.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}])}(s.default.Component)}}]);