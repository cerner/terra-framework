/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';

import Documentation from '../docs/ValidationComponents.md';

// Example File
import DefaultFormValidation from './index-examples/DefaultFormValidation';
import DefaultFormValidationSrc from '!raw-loader!./index-examples/DefaultFormValidation';
import FormSubmitRadioField from './index-examples/FormSubmitRadioField';
import FormSubmitRadioFieldSrc from '!raw-loader!./index-examples/FormSubmitRadioField';
import FormSubmitCheckboxField from './index-examples/FormSubmitCheckboxField';
import FormSubmitCheckboxFieldSrc from '!raw-loader!./index-examples/FormSubmitCheckboxField';

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
