import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

import ApplicationBaseSrc from '!raw-loader!../../../../src/application-base/ApplicationBase.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    propsTables={[
      {
        componentName: 'ApplicationBase Props',
        componentSrc: ApplicationBaseSrc,
      },
    ]}
  />
);

export default DocPage;
