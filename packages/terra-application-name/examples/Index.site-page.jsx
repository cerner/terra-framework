/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import ApplicationHeaderNameSrc from '!raw-loader!../src/ApplicationHeaderName.jsx';
import ApplicationHeaderNameStandardSrc from '!raw-loader!./index-examples/ApplicationHeaderNameStandard.jsx';
import ApplicationMenuNameStandardSrc from '!raw-loader!./index-examples/ApplicationMenuNameStandard.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import ApplicationHeaderNameStandard from './index-examples/ApplicationHeaderNameStandard';
import ApplicationMenuNameStandard from './index-examples/ApplicationMenuNameStandard';

const ApplicationNameExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>

    <IndexTemplate
      title="Application Header Name"
      example={<ApplicationHeaderNameStandard />}
      exampleSrc={ApplicationHeaderNameStandardSrc}
    />

    <IndexTemplate
      title="Application Menu Name"
      example={<ApplicationMenuNameStandard />}
      exampleSrc={ApplicationMenuNameStandardSrc}
    />

    <PropsTable id="props" src={ApplicationHeaderNameSrc} />
  </div>
);

export default ApplicationNameExamples;
