import React from 'react';
import DocTemplate from 'terra-doc-template';

import ReadMe from '../../../../docs/MaxLengthInput.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Example Files
import TestFormValidation from '../example/MaxLengthInput';
import TestFormValidationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MaxLengthInput';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
