import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ExampleDoc from '../../../../docs/example.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first,  import/no-unresolved, import/extensions, , import/no-duplicates */
import ExampleApplication from '../example/ExampleApplication';
import ExampleApplicationSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ExampleApplication';
import ExampleApplicationWithNavIcons from '../example/ExampleApplicationWithNavIcons';
import ExampleApplicationWithNavIconsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ExampleApplicationWithNavIcons';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const style = {
  height: '500px',
};

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ExampleDoc}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        example: <div style={style}><ExampleApplication /></div>,
        source: ExampleApplicationSrc,
      },
      {
        example: <div style={style}><ExampleApplicationWithNavIcons /></div>,
        source: ExampleApplicationWithNavIconsSrc,
      },
    ]}
  />
);

export default DocPage;
