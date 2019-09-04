import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/NumericValidation.md';

// Example Files
import NumericValidation from '../example/NumericValidation';
import NumericValidationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/NumericValidation';

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
