/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../docs/README.md';
import { version } from '../package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import AggregatorSrc from '!raw-loader!../src/Aggregator.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import StandaloneAggregatorExample from './StandaloneAggregatorExample';
import CustomRenderAggregatorExample from './CustomRenderAggregatorExample';
import AggregatorInModalExample from './AggregatorInModalExample';
import CombinedDisclosureExample from './CombinedDisclosureExample';
import DisclosureBypassExample from './DisclosureBypassExample';

const NavigationExamples = () => (
  <div>
    <div id="version">Version: {version}</div>
    <Markdown id="readme" src={ReadMe} />
    <PropsTable id="props-header" src={AggregatorSrc} componentName="Aggregator" />
    <h2 id="aggregator-examples">Examples</h2>
    <StandaloneAggregatorExample />
    <br />
    <br />
    <CustomRenderAggregatorExample />
    <br />
    <br />
    <CombinedDisclosureExample />
    <br />
    <br />
    <DisclosureBypassExample />
    <br />
    <br />
    <AggregatorInModalExample />
    <br />
    <br />
  </div>
);

export default NavigationExamples;
