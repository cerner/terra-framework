/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';

import Documentation from '../docs/ValidationFunctions.md';


// Example Files
import ValidationAsynchronous from './index-examples/ValidationAsynchronous';
import ValidationAsynchronousSrc from '!raw-loader!./index-examples/ValidationAsynchronous';
import ValidationParsing from './index-examples/ValidationParsing';
import ValidationParsingSrc from '!raw-loader!./index-examples/ValidationParsing';

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
