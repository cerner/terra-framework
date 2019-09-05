import React from 'react';
import DocTemplate from 'terra-doc-template';

import Documentation from '../../../../docs/ValidationFunctions.md';

// Example Files
import ValidationAsynchronous from '../example/ValidationAsynchronous';
import ValidationAsynchronousSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ValidationAsynchronous';
import ValidationParsing from '../example/ValidationParsing';
import ValidationParsingSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ValidationParsing';

const FormValidationExamples = () => (
  <DocTemplate
    readme={Documentation}
    examples={[
      {
        title: 'Asynchronous Function',
        example: <ValidationAsynchronous />,
        source: ValidationAsynchronousSrc,
      },
      {
        title: 'Parsing Function',
        example: <ValidationParsing />,
        source: ValidationParsingSrc,
      },
    ]}
  />
);

export default FormValidationExamples;
