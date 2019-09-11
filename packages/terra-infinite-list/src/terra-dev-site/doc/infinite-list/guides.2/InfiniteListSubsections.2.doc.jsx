import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../../package.json';
import ReadMe from '../../../../../docs/InfiniteListSubsection.md';

import InfiniteListSubsection from '../../guides/InfiniteListSubsection';
import InfiniteListSubsectionSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/InfiniteListSubsection.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Sections Header Infinite List',
        example: <InfiniteListSubsection />,
        source: InfiniteListSubsectionSrc,
      },
    ]}
  />
);

export default DocPage;
