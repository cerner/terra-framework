/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ModalManagerExample from '../example/ModalManagerExample';
import ModalManagerExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ModalManagerExample';
import Example from '../../../../docs/example.md';

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
