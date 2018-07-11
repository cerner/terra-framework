import React from 'react';
import DocTemplate from 'terra-doc-template';

import Documentation from '../../../../docs/ValidationComponents.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example File
import DefaultFormValidation from '../example/DefaultFormValidation';
import DefaultFormValidationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultFormValidation';
import FormSubmitRadioField from '../example/FormSubmitRadioField';
import FormSubmitRadioFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FormSubmitRadioField';
import FormSubmitCheckboxField from '../example/FormSubmitCheckboxField';
import FormSubmitCheckboxFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/FormSubmitCheckboxField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
