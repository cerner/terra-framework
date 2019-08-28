import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../../package.json';
import ReadMe from '../../../../../docs/ProgressiveLoadingList.md';

import RefreshProgressive from '../../guides/RefreshProgressive';
import ProgressiveLoadingListSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/ProgressiveLoadingList.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Sections Header Infinite List',
        example: <RefreshProgressive />,
        source: ProgressiveLoadingListSrc,
      },
    ]}
  />
);

export default DocPage;
