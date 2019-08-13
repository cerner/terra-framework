/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-duplicates, import/no-unresolved */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import DateInputSrc from '!raw-loader!../../../../src/DateInput';

// Example Files
import DefaultDateInput from '../example/DefaultDateInput';
import DefaultDateInputSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DefaultDateInput.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default DateInput',
        example: <DefaultDateInput />,
        source: DefaultDateInputSrc,
      },
    ]}
    propsTables={[
        {
          componentName: 'DateInput',
          componentSrc: DateInputSrc,
        },
    ]}
  />
);

export default DocPage;
