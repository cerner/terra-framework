import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import DefaultFormValidation from '../example/DefaultFormValidation';
import DefaultFormValidationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultFormValidation';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
