/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';

import Documentation from '../docs/ValidationEvents.md';

// Example File
import ValidationOnInput from './index-examples/ValidationOnInput';
import ValidationOnInputSrc from '!raw-loader!./index-examples/ValidationOnInput';
import ValidationOnSubmit from './index-examples/ValidationOnSubmit';
import ValidationOnSubmitSrc from '!raw-loader!./index-examples/ValidationOnSubmit';
import ValidationDisableSubmit from './index-examples/ValidationDisableSubmit';
import ValidationDisableSubmitSrc from '!raw-loader!./index-examples/ValidationDisableSubmit';

const FormValidationExamples = () => (
  <DocTemplate
    readme={Documentation}
    examples={[
      {
        title: 'Validation onInput',
        example: <ValidationOnInput />,
        source: ValidationOnInputSrc,
      },
      {
        title: 'Validation onSubmit',
        example: <ValidationOnSubmit />,
        source: ValidationOnSubmitSrc,
      },
      {
        title: 'Validation Disable Submit',
        example: <ValidationDisableSubmit />,
        source: ValidationDisableSubmitSrc,
      },
    ]}
  />
);

export default FormValidationExamples;
