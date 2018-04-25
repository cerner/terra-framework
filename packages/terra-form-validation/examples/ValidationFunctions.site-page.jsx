/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import Documentation from '../docs/ValidationFunctions.md';


// Example Files
import ValidationAsynchronous from './index-examples/ValidationAsynchronous';
import ValidationAsynchronousSrc from '!raw-loader!./index-examples/ValidationAsynchronous.jsx';
import ValidationParsing from './index-examples/ValidationParsing';
import ValidationParsingSrc from '!raw-loader!./index-examples/ValidationParsing.jsx';

const FormValidationExamples = () => (
  <div>
    <Markdown id="readme" src={Documentation} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Asynchronous Function"
      example={<ValidationAsynchronous />}
      exampleSrc={ValidationAsynchronousSrc}
    />
    <IndexTemplate
      title="Parsing Function"
      example={<ValidationParsing />}
      exampleSrc={ValidationParsingSrc}
    />
  </div>
);

export default FormValidationExamples;
