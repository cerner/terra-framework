/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/DateInputField.md';
import { name } from '../../../../package.json';

// Component Source
import DateInputFieldSrc from '!raw-loader!../../../../src/DateInputField';

// Example Files
import DefaultDateInputField from '../example/DefaultDateInputField';
import DefaultDateInputFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultDateInputField.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default DateInputField',
        example: <DefaultDateInputField />,
        source: DefaultDateInputFieldSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'DateInputField',
        componentSrc: DateInputFieldSrc,
      },
    ]}
  />
);

export default DocPage;
