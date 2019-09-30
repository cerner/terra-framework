import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

// Component Source
import ApplicationHeaderNameSrc from '!raw-loader!../../../../src/ApplicationHeaderName.jsx';
import ApplicationHeaderNameStandardSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationHeaderNameStandard.jsx';
import ApplicationMenuNameStandardSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationMenuNameStandard.jsx';

// Example Files
import ApplicationHeaderNameStandard from '../example/ApplicationHeaderNameStandard';
import ApplicationMenuNameStandard from '../example/ApplicationMenuNameStandard';

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
