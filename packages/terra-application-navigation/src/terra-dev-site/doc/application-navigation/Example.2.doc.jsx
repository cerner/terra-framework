import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ExampleDoc from '../../../../docs/example.md';

import ExampleApplication from '../example/ExampleApplication';
import ExampleApplicationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ExampleApplication';
import ExampleWrapper from '../example/ExampleWrapper';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ExampleDoc}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        example: <ExampleWrapper><ExampleApplication /></ExampleWrapper>,
        source: ExampleApplicationSrc,
      },
    ]}
  />
);

export default DocPage;
