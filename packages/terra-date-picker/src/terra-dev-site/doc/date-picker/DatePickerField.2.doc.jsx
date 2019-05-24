import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/DatePickerField.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import DatePickerFieldSrc from '!raw-loader!../../../../src/DatePickerField';

// Example Files
import DatePickerFieldExample from '../example/DatePickerField';
import DatePickerFieldExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerField';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Date Picker Field',
        example: <DatePickerFieldExample />,
        source: DatePickerFieldExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Date Picker Field',
        componentSrc: DatePickerFieldSrc,
      },
    ]}
  />
);

export default DocPage;
