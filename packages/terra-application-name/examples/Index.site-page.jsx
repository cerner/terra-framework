/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from '../docs/README.md';

// Component Source
import ApplicationHeaderNameSrc from '!raw-loader!../src/ApplicationHeaderName.jsx';
import ApplicationHeaderNameStandardSrc from '!raw-loader!./index-examples/ApplicationHeaderNameStandard.jsx';
import ApplicationMenuNameStandardSrc from '!raw-loader!./index-examples/ApplicationMenuNameStandard.jsx';

// Example Files
import ApplicationHeaderNameStandard from './index-examples/ApplicationHeaderNameStandard';
import ApplicationMenuNameStandard from './index-examples/ApplicationMenuNameStandard';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Application Header Name',
        example: <ApplicationHeaderNameStandard />,
        source: ApplicationHeaderNameStandardSrc,
      },
      {
        title: 'Application Menu Name',
        example: <ApplicationMenuNameStandard />,
        source: ApplicationMenuNameStandardSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: ApplicationHeaderNameSrc,
      },
    ]}
  />
);

export default DocPage;
