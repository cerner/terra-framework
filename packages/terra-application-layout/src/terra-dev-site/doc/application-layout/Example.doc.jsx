/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ExampleDoc from '../../../../docs/example.md';
import ExampleApplication from '../example/ExampleApplication';
import ExampleApplicationSrc from '!raw-loader!../example/ExampleApplication.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ExampleDoc}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        example: <div style={{ height: '500px' }}><ExampleApplication /></div>,
        source: ExampleApplicationSrc,
      },
    ]}
  />
);

export default DocPage;
