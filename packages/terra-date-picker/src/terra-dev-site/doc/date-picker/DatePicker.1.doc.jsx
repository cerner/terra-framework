import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import DatePickerSrc from '!raw-loader!../../../../src/DatePicker';

// Example Files
import DatePickerDefault from '../example/DatePickerDefault';
import DatePickerDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerDefault';
import DatePickerExcludeDates from '../example/DatePickerExcludeDates';
import DatePickerExcludeDatesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerExcludeDates';
import DatePickerIncludeDates from '../example/DatePickerIncludeDates';
import DatePickerIncludeDatesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerIncludeDates';
import DatePickerFilterDates from '../example/DatePickerFilterDates';
import DatePickerFilterDatesSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerFilterDates';
import DatePickerMinMax from '../example/DatePickerMinMax';
import DatePickerMinMaxSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerMinMax';
import DatePickerDefaultDate from '../example/DatePickerDefaultDate';
import DatePickerDefaultDateSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerDefaultDate';
import DatePickerControlled from '../example/DatePickerControlled';
import DatePickerControlledSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerControlled';
import DatePickerInvalid from '../example/DatePickerInvalid';
import DatePickerInvalidSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerInvalid';
import DatePickerIncomplete from '../example/DatePickerIncomplete';
import DatePickerIncompletetSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DatePickerIncomplete';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Default',
        example: <DatePickerDefault />,
        source: DatePickerDefaultSrc,
      },
      {
        title: 'Exclude Dates',
        example: <DatePickerExcludeDates />,
        source: DatePickerExcludeDatesSrc,
      },
      {
        title: 'Filter Dates',
        example: <DatePickerFilterDates />,
        source: DatePickerFilterDatesSrc,
      },
      {
        title: 'Include Dates',
        example: <DatePickerIncludeDates />,
        source: DatePickerIncludeDatesSrc,
      },
      {
        title: 'Min Max Selection Options',
        example: <DatePickerMinMax />,
        source: DatePickerMinMaxSrc,
      },
      {
        title: 'Default Date',
        example: <DatePickerDefaultDate />,
        source: DatePickerDefaultDateSrc,
      },
      {
        title: 'Controlled Component',
        example: <DatePickerControlled />,
        source: DatePickerControlledSrc,
      },
      {
        title: 'Invalid',
        example: <DatePickerInvalid />,
        source: DatePickerInvalidSrc,
      },
      {
        title: 'Incomplete',
        example: <DatePickerIncomplete />,
        source: DatePickerIncompletetSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Date Picker',
        componentSrc: DatePickerSrc,
      },
    ]}
  />
);

export default DocPage;
