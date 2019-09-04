import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/DateTimePickerEvents.md';

import DateTimePickerEvents from '../guides/DateTimePickerEvents';
import DateTimePickerEventsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/guides/DateTimePickerEvents.jsx';

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
