/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ModalManagerExample from './index-examples/ModalManagerExample';
import ModalManagerExampleSrc from '!raw-loader!./index-examples/ModalManagerExample';
import Example from '../docs/example.md';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={Example}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Header - Wireframe',
        example: <ModalManagerExample />,
        source: ModalManagerExampleSrc,
      },
    ]}
  />
);

export default DocPage;
