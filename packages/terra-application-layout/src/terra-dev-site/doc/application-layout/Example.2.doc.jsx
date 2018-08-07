import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ExampleDoc from '../../../../docs/example.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first,  import/no-unresolved, import/extensions, , import/no-duplicates */
import ExampleApplication from '../example/ExampleApplication';
import ExampleApplicationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ExampleApplication';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

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
