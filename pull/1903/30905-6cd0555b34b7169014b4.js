"use strict";(self.webpackChunkterra_framework=self.webpackChunkterra_framework||[]).push([[30905],{30287:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(87462),a=t(44925),i=t(67294),u=t(81254),l=t(8011),o=t(83137),s=["components"],d={};function c(e){var n=e.components,t=(0,a.Z)(e,s);return(0,u.mdx)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name.length < 3) {\n      return resolve('Not long enough');\n    }\n    if (name === 'TerraUser') {\n      return resolve('Name is Unavailable');\n    }\n    return resolve('');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"profile-description\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={!meta.valid}\n              inputAttrs={{\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name, requires at least 3 characters\"\n              error={meta.error}\n              isInvalid={meta.error === 'Name is Unavailable'}\n              isIncomplete={meta.error === 'Not long enough' || meta.error === 'Required'}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}c.isMDXComponent=!0;var m=t(49271),p=function(e){var n=e.title,t=e.description,r=e.isExpanded;return i.createElement(m.Z,{title:n||"Validation On Input",description:t,example:i.createElement(o.Z,null),exampleSrc:i.createElement(c,null),isExpanded:r})},f=t(22624),v=["components"],h={};function b(e){var n=e.components,t=(0,a.Z)(e,v);return(0,u.mdx)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},'/* eslint-disable class-methods-use-this */\n\nimport React from \'react\';\nimport { Form, Field } from \'react-final-form\';\nimport InputField from \'terra-form-input/lib/InputField\';\nimport Checkbox from \'terra-form-checkbox\';\nimport CheckboxField from \'terra-form-checkbox/lib/CheckboxField\';\nimport TerraField from \'terra-form-field\';\nimport Radio from \'terra-form-radio\';\nimport RadioField from \'terra-form-radio/lib/RadioField\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport Select from \'terra-form-select\';\n\nconst required = value => (value && value.length > 0 ? undefined : \'Required\');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, errors, submitFailed }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name="description"\n          validate={required}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId="description"\n              label="Description"\n              error={meta.error}\n              isInvalid={meta.submitFailed}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <div>\n          <RadioField\n            legend="Which kind of meal would you like?"\n            isInvalid={submitFailed && errors.meal !== undefined}\n            error={errors.meal}\n          >\n            <Field\n              name="meal"\n              type="radio"\n              value="chicken"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Chicken"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="vegetarian"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Vegetarian"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="fish"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Fish"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </RadioField>\n        </div>\n        <Field\n          name="travel"\n          type="select"\n          validate={required}\n          component={({ input, meta }) => (\n            <TerraField\n              htmlFor="airliner"\n              label="Which Airliner are you traveling on?"\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              error={meta.error}\n            >\n              <Select\n                id="airliner"\n                name={input.name}\n                onChange={(value) => { input.onChange(value); }}\n                defaultValue={input.value}\n                placeholder="Select an Airline"\n              >\n                <Select.Option value="southwest" display="Southwest" key="southwest" />\n                <Select.Option value="alaska" display="Alaska" key="alaska" />\n                <Select.Option value="hawaii" display="Hawaii" key="hawaii" />\n              </Select>\n            </TerraField>\n          )}\n        />\n        <div>\n          <CheckboxField\n            legend="What are all the conference tracks you plan on attending?"\n            error={errors.tracks}\n            isInvalid={submitFailed && errors.tracks !== undefined}\n          >\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="developer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Developer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="designer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Designer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="soft_skills"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Soft skills"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </CheckboxField>\n        </div>\n        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom="small">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: \'\' }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n')))}b.isMDXComponent=!0;var y=function(e){var n=e.title,t=e.description,r=e.isExpanded;return i.createElement(m.Z,{title:n||"Validation On Submit",description:t,example:i.createElement(f.Z,null),exampleSrc:i.createElement(b,null),isExpanded:r})},g=t(80999),F=["components"],k={};function O(e){var n=e.components,t=(0,a.Z)(e,F);return(0,u.mdx)("wrapper",(0,r.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)("pre",null,(0,u.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"description-input\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name-disabled\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              inputAttrs={input}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}O.isMDXComponent=!0;var x=function(e){var n=e.title,t=e.description,r=e.isExpanded;return i.createElement(m.Z,{title:n||"Validation Disable Submit",description:t,example:i.createElement(g.Z,null),exampleSrc:i.createElement(O,null),isExpanded:r})},S=["components"],w={},E="wrapper";function C(e){var n=e.components,t=(0,a.Z)(e,S);return(0,u.mdx)(E,(0,r.Z)({},w,t,{components:n,mdxType:"MDXLayout"}),(0,u.mdx)(l.C,{mdxType:"Badge"}),(0,u.mdx)("h1",{id:"validation-events"},"Validation Events"),(0,u.mdx)("h2",{id:"dynamic-validation"},"Dynamic Validation"),(0,u.mdx)("p",null,"The default behavior of ",(0,u.mdx)("em",{parentName:"p"},"react-final-form")," is to dynamically validate, meaning it validates the content while the user is interacting with the form, and when a form loads. To use this behavior, simply use the error key of the meta data passed to an individual form component, and pass it to the error prop of the Terra Field component (TextareaField, InputField, ...), like in the example below."),(0,u.mdx)("h2",{id:"display-validation-onsubmit"},"Display Validation onSubmit"),(0,u.mdx)("p",null,"Forms written with react-final-form are always validated dynamically, but you can delay showing the validation errors until the form is submitted. The meta argument contains an attribute submitFailed that indicates the last submit was a failure. To display errors on validation, set the isInvalid prop equal to meta.submitFailed like in the example below."),(0,u.mdx)("h2",{id:"disable-form-submission-for-an-invalid-form"},"Disable form submission for an invalid form"),(0,u.mdx)("p",null,"The form render function contains attributes such as invalid (the form has errors on it) and pristine (the form has not been touched yet by the user) that allow for you to enable and disable the submission button. All you need to do is pass in the attribute you wish to check in order to see if the button should be enabled or not."),(0,u.mdx)("p",null,"Consult ",(0,u.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form")," for further functionality that can be used."),(0,u.mdx)("h2",{id:"examples"},"Examples"),(0,u.mdx)(p,{title:"Validation onInput",mdxType:"ValidationOnInput"}),(0,u.mdx)(y,{title:"Validation onSubmit",mdxType:"ValidationOnSubmit"}),(0,u.mdx)(x,{title:"Validation Disable Submit",mdxType:"ValidationDisableSubmit"}))}C.isMDXComponent=!0},8011:function(e,n,t){t.d(n,{C:function(){return i}});var r=t(67294),a=t(22863),i=function(e){var n=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-form-validation",name:"terra-form-validation",version:"1.90.0",url:n})}},80999:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(64687)),i=r(t(56690)),u=r(t(89728)),l=r(t(66115)),o=r(t(61655)),s=r(t(94993)),d=r(t(73808)),c=r(t(17156)),m=r(t(67294)),p=t(57057),f=r(t(11817)),v=r(t(55281)),h=r(t(7017));function b(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,d.default)(e);if(n){var a=(0,d.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,s.default)(this,t)}}var y=function(){var e=(0,c.default)(a.default.mark((function e(n){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return e("TerraUser"!==n?"":"Name is Unavailable")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.Z=function(e){(0,o.default)(t,e);var n=b(t);function t(e){var r;return(0,i.default)(this,t),(r=n.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.pristine,r=e.invalid;return m.default.createElement("form",{noValidate:!0,onSubmit:n},m.default.createElement(p.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return m.default.createElement(f.default,{inputId:"description-input",label:"Description",error:t.error,isInvalid:t.submitFailed&&void 0!==t.error,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),m.default.createElement(p.Field,{name:"user_name",validate:y},(function(e){var n=e.input,t=e.meta;return m.default.createElement(f.default,{inputId:"user-name-disabled",label:"User Name",error:t.error,isInvalid:t.submitFailed&&void 0!==t.error,onChange:function(e){n.onChange(e.target.value)},inputAttrs:n,value:n.value,required:!0})})),m.default.createElement(v.default,{text:"Submit",isDisabled:r||t,type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(h.default,{marginBottom:"small"},m.default.createElement(p.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),t}(m.default.Component)},83137:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(64687)),i=r(t(38416)),u=r(t(56690)),l=r(t(89728)),o=r(t(66115)),s=r(t(61655)),d=r(t(94993)),c=r(t(73808)),m=r(t(17156)),p=r(t(67294)),f=t(57057),v=r(t(11817)),h=r(t(55281)),b=r(t(7017));function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,i.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,c.default)(e);if(n){var a=(0,c.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,d.default)(this,t)}}var k=function(){var e=(0,m.default)(a.default.mark((function e(n){var t;return a.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return n.length<3?e("Not long enough"):e("TerraUser"===n?"Name is Unavailable":"")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();n.Z=function(e){(0,s.default)(t,e);var n=F(t);function t(e){var r;return(0,u.default)(this,t),(r=n.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,o.default)(r)),r}return(0,l.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit;return p.default.createElement("form",{noValidate:!0,onSubmit:n},p.default.createElement(f.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return p.default.createElement(v.default,{inputId:"profile-description",label:"Description",error:t.error,isInvalid:!t.valid,inputAttrs:g({},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),p.default.createElement(f.Field,{name:"user_name",validate:k},(function(e){var n=e.input,t=e.meta;return p.default.createElement(v.default,{inputId:"user-name",label:"User Name, requires at least 3 characters",error:t.error,isInvalid:"Name is Unavailable"===t.error,isIncomplete:"Not long enough"===t.error||"Required"===t.error,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),p.default.createElement(h.default,{text:"Submit",type:h.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return p.default.createElement(b.default,{marginBottom:"small"},p.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}),this.state.submittedValues&&p.default.createElement("div",null,p.default.createElement("p",null,"Form Submitted Successfully With"),p.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),t}(p.default.Component)},22624:function(e,n,t){var r=t(64836);n.Z=void 0;var a=r(t(38416)),i=r(t(56690)),u=r(t(89728)),l=r(t(66115)),o=r(t(61655)),s=r(t(94993)),d=r(t(73808)),c=r(t(67294)),m=t(57057),p=r(t(11817)),f=r(t(15185)),v=r(t(58312)),h=r(t(47717)),b=r(t(79029)),y=r(t(56931)),g=r(t(55281)),F=r(t(7017)),k=r(t(92577));function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function S(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,d.default)(e);if(n){var a=(0,d.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,s.default)(this,t)}}var w=function(e){return e&&e.length>0?void 0:"Required"};n.Z=function(e){(0,o.default)(t,e);var n=S(t);function t(e){var r;return(0,i.default)(this,t),(r=n.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.errors,r=e.submitFailed;return c.default.createElement("form",{noValidate:!0,onSubmit:n},c.default.createElement(m.Field,{name:"description",validate:w},(function(e){var n=e.input,t=e.meta;return c.default.createElement(p.default,{inputId:"description",label:"Description",error:t.error,isInvalid:t.submitFailed,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),c.default.createElement("div",null,c.default.createElement(y.default,{legend:"Which kind of meal would you like?",isInvalid:r&&void 0!==t.meal,error:t.meal},c.default.createElement(m.Field,{name:"meal",type:"radio",value:"chicken",validate:w,component:function(e){var n=e.input;return c.default.createElement(b.default,{inputAttrs:x({},n),labelText:"Chicken",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),c.default.createElement(m.Field,{name:"meal",type:"radio",value:"vegetarian",validate:w,component:function(e){var n=e.input;return c.default.createElement(b.default,{inputAttrs:x({},n),labelText:"Vegetarian",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),c.default.createElement(m.Field,{name:"meal",type:"radio",value:"fish",validate:w,component:function(e){var n=e.input;return c.default.createElement(b.default,{inputAttrs:x({},n),labelText:"Fish",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}))),c.default.createElement(m.Field,{name:"travel",type:"select",validate:w,component:function(e){var n=e.input,t=e.meta;return c.default.createElement(h.default,{htmlFor:"airliner",label:"Which Airliner are you traveling on?",isInvalid:t.submitFailed&&void 0!==t.error,error:t.error},c.default.createElement(k.default,{id:"airliner",name:n.name,onChange:function(e){n.onChange(e)},defaultValue:n.value,placeholder:"Select an Airline"},c.default.createElement(k.default.Option,{value:"southwest",display:"Southwest",key:"southwest"}),c.default.createElement(k.default.Option,{value:"alaska",display:"Alaska",key:"alaska"}),c.default.createElement(k.default.Option,{value:"hawaii",display:"Hawaii",key:"hawaii"})))}}),c.default.createElement("div",null,c.default.createElement(v.default,{legend:"What are all the conference tracks you plan on attending?",error:t.tracks,isInvalid:r&&void 0!==t.tracks},c.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"developer",validate:w,component:function(e){var n=e.input;return c.default.createElement(f.default,{inputAttrs:x({},n),labelText:"Developer",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),c.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"designer",validate:w,component:function(e){var n=e.input;return c.default.createElement(f.default,{inputAttrs:x({},n),labelText:"Designer",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),c.default.createElement(m.Field,{name:"tracks[]",type:"checkbox",value:"soft_skills",validate:w,component:function(e){var n=e.input;return c.default.createElement(f.default,{inputAttrs:x({},n),labelText:"Soft skills",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}))),c.default.createElement(g.default,{text:"Submit",type:g.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(F.default,{marginBottom:"small"},c.default.createElement(m.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""}}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),t}(c.default.Component)},68586:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},55142:function(e,n,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=c(t(67294)),i=c(t(45697)),u=c(t(94184)),l=c(t(47166)),o=c(t(47341)),s=c(t(68586)),d=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function f(e,n,t){return(n=b(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}function h(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function b(e){var n=function(e,n){if("object"!==r(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var a=t.call(e,n||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===r(n)?n:String(n)}function y(e,n){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},y(e,n)}function g(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,a=F(e);if(n){var i=F(this).constructor;t=Reflect.construct(a,arguments,i)}else t=a.apply(this,arguments);return function(e,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,t)}}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var k=l.default.bind(s.default),O={defaultValue:i.default.oneOfType([i.default.string,i.default.number]),disabled:i.default.bool,isIncomplete:i.default.bool,isInvalid:i.default.bool,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,onInput:i.default.func,name:i.default.string,pattern:i.default.string,refCallback:i.default.func,required:i.default.bool,type:i.default.string,value:i.default.oneOfType([i.default.string,i.default.number]),ariaLabel:i.default.string},x={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},S=function(e){!function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&y(e,n)}(l,e);var n,t,r,i=g(l);function l(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,l),i.apply(this,arguments)}return n=l,t=[{key:"render",value:function(){var e,n=this.props,t=n.defaultValue,r=n.disabled,i=n.isIncomplete,l=n.isInvalid,o=n.onBlur,s=n.onChange,c=n.onFocus,h=n.onInput,b=n.name,y=n.pattern,g=n.refCallback,F=n.required,O=n.type,x=n.ariaLabel,S=n.value,w=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){f(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},v(n,d)),E=this.context,C=(void 0===O||["text","number","password","email","search","tel","url","hidden"].includes(O))&&k("form-input",{"form-error":l},{"form-incomplete":i&&F&&!l},E.className),I=(0,u.default)(C,w.className);return w&&Object.prototype.hasOwnProperty.call(w,"aria-label")?e=x||w["aria-label"]:x&&(e=x),w["aria-label"]=e,F&&(w["aria-required"]="true"),void 0!==S?w.value=S:void 0!==t&&(w.defaultValue=t),w.placeholder&&!w.showMpageFusionPlaceholder&&(w.placeholder=null),delete w.showMpageFusionPlaceholder,a.default.createElement("input",m({},w,{ref:function(e){g&&g(e)},name:b,type:O,pattern:y,onBlur:o,onChange:s,onFocus:c,onInput:h,disabled:r,required:F,className:I}))}}],t&&h(n.prototype,t),r&&h(n,r),Object.defineProperty(n,"prototype",{writable:!1}),l}(a.default.Component);S.propTypes=O,S.defaultProps=x,S.contextType=o.default,S.isInput=!0;n.default=S}}]);