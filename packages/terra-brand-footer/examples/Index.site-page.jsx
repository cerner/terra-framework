/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import IndexTemplate from 'terra-dev-site/src/IndexPageTemplate';

import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
import BrandFooterSrc from '!raw-loader!../src/BrandFooter';

// Example Files
import DefaultBrandFooter from './index-examples/DefaultBrandFooter.example.jsx';
import DefaultBrandFooterSrc from '!raw-loader!./index-examples/DefaultBrandFooter.example.jsx';

const BrandFooterExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />

    <h1 style={{ paddingBottom: '0.3em', borderBottom: '1px solid #eaecef' }}>Examples</h1>
    <IndexTemplate
      title="BrandFooter - Default"
      example={<DefaultBrandFooter />}
      exampleSrc={DefaultBrandFooterSrc}
    />

    <PropsTable id="props" src={BrandFooterSrc} />
  </div>
);

export default BrandFooterExamples;
