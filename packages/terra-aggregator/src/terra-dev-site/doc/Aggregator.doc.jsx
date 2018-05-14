/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import React from 'react';
<<<<<<< HEAD:packages/terra-aggregator/src/terra-dev-site/doc/Aggregator.doc.jsx
import PropsTable from 'terra-props-table';
import Markdown from 'terra-markdown';
import ReadMe from '../../../docs/README.md';
import { version } from '../../../package.json';

// Component Source
/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */
import AggregatorSrc from '!raw-loader!../../../src/Aggregator.jsx';
/* eslint-enable import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions */

// Example Files
import StandaloneAggregatorExample from './example/StandaloneAggregatorExample';
import CustomRenderAggregatorExample from './example/CustomRenderAggregatorExample';
import AggregatorInModalExample from './example/AggregatorInModalExample';
import CombinedDisclosureExample from './example/CombinedDisclosureExample';
import DisclosureBypassExample from './example/DisclosureBypassExample';
=======
import DocTemplate from 'terra-doc-template';
import { name } from '../package.json';
import ReadMe from '../docs/README.md';

// Component Source
import AggregatorSrc from '!raw-loader!../src/Aggregator.jsx';

// Example Files
import StandaloneAggregatorExample from './index-examples/StandaloneAggregatorExample';
import StandaloneAggregatorExampleSrc from '!raw-loader!./index-examples/StandaloneAggregatorExample';
import CustomRenderAggregatorExample from './index-examples/CustomRenderAggregatorExample';
import CustomRenderAggregatorExampleSrc from '!raw-loader!./index-examples/CustomRenderAggregatorExample';
import AggregatorInModalExample from './index-examples/AggregatorInModalExample';
import AggregatorInModalExampleSrc from '!raw-loader!./index-examples/AggregatorInModalExample';
import CombinedDisclosureExample from './index-examples/CombinedDisclosureExample';
import CombinedDisclosureExampleSrc from '!raw-loader!./index-examples/CombinedDisclosureExample';
import DisclosureBypassExample from './index-examples/DisclosureBypassExample';
import DisclosureBypassExampleSrc from '!raw-loader!./index-examples/DisclosureBypassExample';
>>>>>>> master:packages/terra-aggregator/examples/Index.site-page.jsx

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
