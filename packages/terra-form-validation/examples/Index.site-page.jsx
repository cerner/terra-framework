/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';


// Example Files
import DefaultFormValidation from './index-examples/DefaultFormValidationExample';
import DefaultFormValidationSrc from '!raw-loader!./index-examples/DefaultFormValidationExample.jsx';

const FormValidationExamples = () => (
  <div>
    <Markdown id="readme" src={ReadMe} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="FormValidation - Default"
      example={<DefaultFormValidation />}
      exampleSrc={DefaultFormValidationSrc}
    />

  </div>
);

export default FormValidationExamples;
