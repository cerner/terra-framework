import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../../package.json';
import ReadMe from '../../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import InfiniteListSection from '../../guides/InfiniteListSection';
import InfiniteListSectionSrc from '!raw-loader!../../../../../src/terra-dev-site/doc/guides/InfiniteListSection.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
