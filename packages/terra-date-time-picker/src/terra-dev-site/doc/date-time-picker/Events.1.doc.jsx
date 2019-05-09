import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/DateTimePickerEvents.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
import DateTimePickerEvents from '../guides/DateTimePickerEvents';
import DateTimePickerEventsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/guides/DateTimePickerEvents.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Date Picker Event Triggers',
        example: <DateTimePickerEvents />,
        source: DateTimePickerEventsSrc,
      },
    ]}
  />
);

export default DocPage;
