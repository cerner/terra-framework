/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import Documentation from '../docs/ValidationEvents.md';


// Example File
import ValidationOnInput from './index-examples/ValidationOnInput';
import ValidationOnInputSrc from '!raw-loader!./index-examples/ValidationOnInput.jsx';
import ValidationOnSubmit from './index-examples/ValidationOnSubmit';
import ValidationOnSubmitSrc from '!raw-loader!./index-examples/ValidationOnSubmit.jsx';
import ValidationDisableSubmit from './index-examples/ValidationDisableSubmit';
import ValidationDisableSubmitSrc from '!raw-loader!./index-examples/ValidationDisableSubmit.jsx';

const FormValidationExamples = () => (
  <div>
    <Markdown id="readme" src={Documentation} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="Validation onInput"
      example={<ValidationOnInput />}
      exampleSrc={ValidationOnInputSrc}
    />
    <IndexTemplate
      title="Validation onSubmit"
      example={<ValidationOnSubmit />}
      exampleSrc={ValidationOnSubmitSrc}
    />
    <IndexTemplate
      title="Validation Disable Submit"
      example={<ValidationDisableSubmit />}
      exampleSrc={ValidationDisableSubmitSrc}
    />
  </div>
);

export default FormValidationExamples;
