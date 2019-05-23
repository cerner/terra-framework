import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/NumericValidation.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import NumericValidation from '../example/NumericValidation';
import NumericValidationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NumericValidation';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const FormValidationExamples = () => (
  <DocTemplate
    readme={ReadMe}
    examples={[
      {
        title: 'Numeric Validations',
        example: <NumericValidation />,
        source: NumericValidationSrc,
      },
    ]}
  />
);

export default FormValidationExamples;
