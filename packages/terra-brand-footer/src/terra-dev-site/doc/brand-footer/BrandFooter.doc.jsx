import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import BrandFooterSrc from '!raw-loader!../../../../src/BrandFooter';

// Example Files
import DefaultBrandFooter from '../example/DefaultBrandFooter';
import DefaultBrandFooterSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultBrandFooter.jsx';
import VerticalBrandFooter from '../example/VerticalBrandFooter';
import VerticalBrandFooterSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/VerticalBrandFooter.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'BrandFooter - Default',
        example: <DefaultBrandFooter />,
        source: DefaultBrandFooterSrc,
      },
      {
        title: 'BrandFooter - Vertical Navigation Bar',
        example: <VerticalBrandFooter />,
        source: VerticalBrandFooterSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: BrandFooterSrc,
      },
    ]}
  />
);

export default DocPage;
