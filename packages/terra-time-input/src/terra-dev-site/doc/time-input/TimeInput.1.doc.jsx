import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

// Component Source
import TimeInputSrc from '!raw-loader!../../../../src/TimeInput';

// Example Files
import TimeInputDefaultTime from '../example/TimeInputDefaultTime';
import TimeInputDefaultTimeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputDefaultTime';
import TimeInputDefaultTwelveHour from '../example/TimeInputDefaultTwelveHour';
import TimeInputDefaultTwelveHourSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputDefaultTwelveHour';
import TimeInputNoDefaultTime from '../example/TimeInputNoDefaultTime';
import TimeInputNoDefaultTimeSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputNoDefaultTime';
import TimeInputNoDefaultTwelveHour from '../example/TimeInputNoDefaultTwelveHour';
import TimeInputNoDefaultTwelveHourSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputNoDefaultTwelveHour';
import TimeInputSeconds from '../example/TimeInputSeconds';
import TimeInputSecondsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputSeconds';
import TimeInputSecondsWithDefault from '../example/TimeInputSecondsWithDefault';
import TimeInputSecondsWithDefaultSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputSecondsWithDefault';
import TimeInputSecondsTwelveHour from '../example/TimeInputSecondsTwelveHour';
import TimeInputSecondsTwelveHourSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputSecondsTwelveHour';
import TimeInputSecondsInvalid from '../example/TimeInputSecondsInvalid';
import TimeInputSecondsInvalidSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputSecondsInvalid';
import TimeInputSecondsIncomplete from '../example/TimeInputSecondsIncomplete';
import TimeInputSecondsIncompleteSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/TimeInputSecondsIncomplete';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Without Default Time',
        example: <TimeInputNoDefaultTime />,
        source: TimeInputNoDefaultTimeSrc,
      },
      {
        title: 'With Default Time',
        example: <TimeInputDefaultTime />,
        source: TimeInputDefaultTimeSrc,
      },
      {
        title: 'Without Default Time - 12 Hour',
        example: <TimeInputNoDefaultTwelveHour />,
        source: TimeInputNoDefaultTwelveHourSrc,
      },
      {
        title: 'With Default Time - 12 Hour',
        example: <TimeInputDefaultTwelveHour />,
        source: TimeInputDefaultTwelveHourSrc,
      },
      {
        title: 'Seconds Displayed Without Default Time',
        example: <TimeInputSeconds />,
        source: TimeInputSecondsSrc,
      },
      {
        title: 'Seconds Displayed With Default Time',
        example: <TimeInputSecondsWithDefault />,
        source: TimeInputSecondsWithDefaultSrc,
      },
      {
        title: 'Seconds Displayed Without Default Time - 12 Hour',
        example: <TimeInputSecondsTwelveHour />,
        source: TimeInputSecondsTwelveHourSrc,
      },
      {
        title: 'Invalid Time',
        example: <TimeInputSecondsInvalid />,
        source: TimeInputSecondsInvalidSrc,
      },
      {
        title: 'Incomplete Time',
        description: 'Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***',
        example: <TimeInputSecondsIncomplete />,
        source: TimeInputSecondsIncompleteSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Time Input',
        componentSrc: TimeInputSrc,
      },
    ]}
  />
);

export default DocPage;
