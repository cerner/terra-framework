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
import InlineDateInputField from '../example/InlineDateInputField';
import InlineDateInputFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/InlineDateInputField.jsx';
import OptionalDateInputField from '../example/OptionalDateInputField';
import OptionalDateInputFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/OptionalDateInputField.jsx';
import RequiredDateInputField from '../example/RequiredDateInputField';
import RequiredDateInputFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/RequiredDateInputField.jsx';
import HideRequiredDateInputField from '../example/HideRequiredDateInputField';
import HideRequiredDateInputFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/HideRequiredDateInputField.jsx';
import DayMonthYearDateInputField from '../example/DayMonthYearDateInputField';
import DayMonthYearDateInputFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DayMonthYearDateInputField.jsx';
import MonthDayYearDateInputField from '../example/MonthDayYearDateInputField';
import MonthDayYearDateInputFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MonthDayYearDateInputField.jsx';
import IncompleteDateInputField from '../example/IncompleteDateInputField';
import IncompleteDateInputFieldSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/IncompleteDateInputField.jsx';

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
      {
        title: 'Required DateInputField',
        example: <RequiredDateInputField />,
        source: RequiredDateInputFieldSrc,
      },
      {
        title: 'Hide Required DateInputField',
        example: <HideRequiredDateInputField />,
        source: HideRequiredDateInputFieldSrc,
      },
      {
        title: 'Inline DateInputField',
        example: <InlineDateInputField />,
        source: InlineDateInputFieldSrc,
      },
      {
        title: 'Optional DateInputField',
        example: <OptionalDateInputField />,
        source: OptionalDateInputFieldSrc,
      },
      {
        title: 'Month Day Year Display Format DateInputField',
        example: <MonthDayYearDateInputField />,
        source: MonthDayYearDateInputFieldSrc,
      },
      {
        title: 'Day Month Year Display Format DateInputField',
        example: <DayMonthYearDateInputField />,
        source: DayMonthYearDateInputFieldSrc,
      },
      {
        title: 'Incomplete DateInputField',
        example: <IncompleteDateInputField />,
        source: IncompleteDateInputFieldSrc,
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
