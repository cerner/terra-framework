/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';

import Documentation from '../../../../docs/ValidationComponents.md';

// Example File
import DefaultFormValidation from './example/DefaultFormValidation';
import DefaultFormValidationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/form-validation/example/DefaultFormValidation';
import FormSubmitRadioField from './example/FormSubmitRadioField';
import FormSubmitRadioFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/form-validation/example/FormSubmitRadioField';
import FormSubmitCheckboxField from './example/FormSubmitCheckboxField';
import FormSubmitCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/form-validation/example/FormSubmitCheckboxField';

const FormValidationExamples = () => (
  <DocTemplate
    readme={Documentation}
    examples={[
      {
        title: 'Input/TextareaField Validation',
        example: <DefaultFormValidation />,
        source: DefaultFormValidationSrc,
      },
      {
        title: 'RadioField Validation',
        example: <FormSubmitRadioField />,
        source: FormSubmitRadioFieldSrc,
      },
      {
        title: 'CheckboxField Validation',
        example: <FormSubmitCheckboxField />,
        source: FormSubmitCheckboxFieldSrc,
      },
    ]}
  />
);

export default FormValidationExamples;
