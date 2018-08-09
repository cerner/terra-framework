import React from 'react';
import DocTemplate from 'terra-doc-template';
import { name } from '../../../../package.json';
import ReadMe from '../../../../docs/README.md';

/* eslint-disable import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import AggregatorSrc from '!raw-loader!../../../../src/Aggregator.jsx';

// Example Files
import StandaloneAggregatorExample from '../example/StandaloneAggregatorExample';
import StandaloneAggregatorExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/StandaloneAggregatorExample.jsx';
import CustomRenderAggregatorExample from '../example/CustomRenderAggregatorExample';
import CustomRenderAggregatorExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CustomRenderAggregatorExample.jsx';
import AggregatorInModalExample from '../example/AggregatorInModalExample';
import AggregatorInModalExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/AggregatorInModalExample.jsx';
import CombinedDisclosureExample from '../example/CombinedDisclosureExample';
import CombinedDisclosureExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CombinedDisclosureExample.jsx';
import DisclosureBypassExample from '../example/DisclosureBypassExample';
import DisclosureBypassExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DisclosureBypassExample.jsx';
/* eslint-enabled import/no-webpack-loader-syntax, import/first, import/extensions, import/no-unresolved, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Standalone Aggregator',
        example: <StandaloneAggregatorExample />,
        source: StandaloneAggregatorExampleSrc,
      },
      {
        title: 'Custom Render Aggregator',
        example: <CustomRenderAggregatorExample />,
        source: CustomRenderAggregatorExampleSrc,
      },
      {
        title: 'Combined Discloure Aggregator',
        example: <CombinedDisclosureExample />,
        source: CombinedDisclosureExampleSrc,
      },
      {
        title: 'Disclosure Bypass Aggregator',
        description: 'In this example, the Aggregator items are provided with the ModalManager disclosure function directly. Calling that function does not require Aggregator focus and will bypass the Aggregator entirely. This can be useful for simple Modal workflows that should not impact Aggregator state.',
        example: <DisclosureBypassExample />,
        source: DisclosureBypassExampleSrc,
      },
      {
        title: 'Aggregator In Modal',
        example: <AggregatorInModalExample />,
        source: AggregatorInModalExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentSrc: AggregatorSrc,
      },
    ]}
  />
);

export default DocPage;
