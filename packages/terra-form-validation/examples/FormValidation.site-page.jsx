/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../docs/README.md';


// Example Files
import DefaultFormValidation from './index-examples/DefaultFormValidation';
import DefaultFormValidationSrc from '!raw-loader!./index-examples/DefaultFormValidation';

const FormValidationExamples = () => (
  <DocTemplate
    readme={ReadMe}
    examples={[
      {
        title: 'Basic Form Validation Example',
        example: <DefaultFormValidation />,
        source: DefaultFormValidationSrc,
      },
    ]}
  />
);

export default FormValidationExamples;
