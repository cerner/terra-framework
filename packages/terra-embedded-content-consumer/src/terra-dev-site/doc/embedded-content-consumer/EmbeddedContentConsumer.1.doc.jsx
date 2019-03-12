import React from 'react';
import DocTemplate from 'terra-doc-template';
import { Consumer } from 'xfc';
import ReadMe from '../../../../docs/README.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import EmbeddedContentConsumerSrc from '!raw-loader!../../../../src/EmbeddedContentConsumer.jsx';

// Example files
import BasicConsumer from '../example/BasicConsumer';
import BasicConsumerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/BasicConsumer';
import CustomEventConsumer from '../example/CustomEventConsumer';
import CustomEventConsumerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CustomEventConsumer';
import CustomEventsConsumer from '../example/CustomEventsConsumer';
import CustomEventsConsumerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/CustomEventsConsumer';
import DataStatusConsumer from '../example/DataStatusConsumer';
import DataStatusConsumerSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/DataStatusConsumer';
/* eslint-enable import/no-webpack-loader-syntax, import/extensions, import/no-duplicates */

Consumer.init();

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Basic Embedded Content Consumer',
        example: <BasicConsumer />,
        source: BasicConsumerSrc,
      },
      {
        title: 'Embedded Content Consumer Lifecycle Statuses',
        example: <DataStatusConsumer />,
        source: DataStatusConsumerSrc,
      },
      {
        title: 'Embedded Content Consumer that Listens for a Custom Event',
        example: <CustomEventConsumer />,
        source: CustomEventConsumerSrc,
      },
      {
        title: 'Embedded Content Consumer with Seamless Communication',
        example: <CustomEventsConsumer />,
        source: CustomEventsConsumerSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Embedded Content Consumer',
        componentSrc: EmbeddedContentConsumerSrc,
      },
    ]}
  />
);

export default DocPage;
