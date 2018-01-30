/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-site/src/IndexPageTemplate';

import ReadMe from 'terra-application-name/docs/README.md';
import { version } from 'terra-application-name/package.json';

// Component Source
import ApplicationNameSrc from '!raw-loader!../src/ApplicationName.jsx';

// Example Files
import ApplicationHeaderNameStandard from './index-examples/ApplicationHeaderNameStandard';
import ApplicationHeaderNameStandardSrc from '!raw-loader!./index-examples/ApplicationHeaderNameStandard.jsx';
import ApplicationMenuNameStandard from './index-examples/ApplicationMenuNameStandard';
import ApplicationMenuNameStandardSrc from '!raw-loader!./index-examples/ApplicationMenuNameStandard.jsx';

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

    <PropsTable id="props" src={ApplicationNameSrc} />
  </div>
);

export default ApplicationNameExamples;
