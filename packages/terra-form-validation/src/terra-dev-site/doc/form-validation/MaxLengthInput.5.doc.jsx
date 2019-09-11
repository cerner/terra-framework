import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/MaxLengthInput.md';

// Example Files
import TestFormValidation from '../example/MaxLengthInput';
import TestFormValidationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MaxLengthInput';

const FormValidationExamples = () => (
  <DocTemplate
    readme={ReadMe}
    examples={[
      {
        title: 'Max Length Input',
        example: <TestFormValidation />,
        source: TestFormValidationSrc,
      },
    ]}
  />
);

export default FormValidationExamples;
