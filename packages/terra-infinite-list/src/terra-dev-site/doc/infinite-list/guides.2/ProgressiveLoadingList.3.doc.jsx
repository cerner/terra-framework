import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../../package.json';
import ReadMe from '../../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import ProgressiveLoadingList from '../../guides/ProgressiveLoadingList';
import ProgressiveLoadingListSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/ProgressiveLoadingList.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Sections Header Infinite List',
        example: <ProgressiveLoadingList />,
        source: ProgressiveLoadingListSrc,
      },
    ]}
  />
);

export default DocPage;
