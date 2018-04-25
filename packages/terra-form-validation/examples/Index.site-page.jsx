/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';


// Example Files
import DefaultFormValidation from './index-examples/DefaultFormValidation';
import DefaultFormValidationSrc from '!raw-loader!./index-examples/DefaultFormValidation.jsx';

const FormValidationExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Basic Form Validation Example"
      example={<DefaultFormValidation />}
      exampleSrc={DefaultFormValidationSrc}
    />

  </div>
);

export default FormValidationExamples;
