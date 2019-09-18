import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

import ApplicationBaseSrc from '!raw-loader!../../../../src/application-base/ApplicationBase.jsx';
import ApplicationBaseExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ApplicationBaseExample.jsx';
import ApplicationBaseExample from '../example/ApplicationBaseExample';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'ApplicationBase',
        componentSrc: ApplicationBaseSrc,
      },
    ]}
    examples={[
      {
        title: 'ApplicationBase Interface Example',
        example: <ApplicationBaseExample />,
        source: ApplicationBaseExampleSrc,
      },
    ]}
  />
);

export default DocPage;
