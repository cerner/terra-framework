import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../../package.json';
import ReadMe from '../../../../../docs/InfiniteListSection.md';

import InfiniteListSection from '../../guides/InfiniteListSection';
import InfiniteListSectionSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/InfiniteListSection.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Sections Header Infinite List',
        example: <InfiniteListSection />,
        source: InfiniteListSectionSrc,
      },
    ]}
  />
);

export default DocPage;
