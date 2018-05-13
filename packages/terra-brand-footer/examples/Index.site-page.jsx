/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from '../docs/README.md';

// Component Source
import BrandFooterSrc from '!raw-loader!../src/BrandFooter';

// Example Files
import DefaultBrandFooter from './index-examples/DefaultBrandFooter.example.jsx';
import DefaultBrandFooterSrc from '!raw-loader!./index-examples/DefaultBrandFooter.example.jsx';

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
    ]}
    propsTables={[
      {
        componentSrc: BrandFooterSrc,
      },
    ]}
  />
);

export default DocPage;
