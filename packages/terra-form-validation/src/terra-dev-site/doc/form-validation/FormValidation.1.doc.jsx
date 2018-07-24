/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/README.md';


// Example Files
import DefaultFormValidation from '../example/DefaultFormValidation';
import DefaultFormValidationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultFormValidation';

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
