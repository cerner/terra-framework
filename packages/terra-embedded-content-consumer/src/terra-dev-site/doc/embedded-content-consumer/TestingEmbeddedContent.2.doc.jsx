import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/TestingEmbeddedApplications.md';
import { name } from '../../../../package.json';

/* eslint-disable import/no-webpack-loader-syntax, import/extensions, import/no-unresolved, import/no-duplicates */
// Component Source
import EmbeddedContentProviderTestTemplate from '!raw-loader!../../../../src/EmbeddedContentProviderTestTemplate.jsx';

// Example files
import BasicProvider from '../../provider/embedded-content-consumer/providers/BasicProvider.provider';
import BasicProviderSrc from '!raw-loader!../../../../src/terra-dev-site/provider/embedded-content-consumer/providers/BasicProvider.provider.jsx';
import CustomEventProvider from '../../provider/embedded-content-consumer/providers/CustomEventProvider.provider';
import CustomEventProviderSrc from '!raw-loader!../../../../src/terra-dev-site/provider/embedded-content-consumer/providers/CustomEventProvider.provider';
import CustomEventsProvider from '../../provider/embedded-content-consumer/providers/CustomEventsProvider.provider';
import CustomEventsProviderSrc from '!raw-loader!../../../../src/terra-dev-site/provider/embedded-content-consumer/providers/CustomEventsProvider.provider';
import DataStatusProvider from '../../provider/embedded-content-consumer/providers/DataStatusProvider.provider';
import DataStatusProviderSrc from '!raw-loader!../../../../src/terra-dev-site/provider/embedded-content-consumer/providers/DataStatusProvider.provider';
/* eslint-enable import/no-webpack-loader-syntax, import/extensions, import/no-duplicates */

const DocPage = () => (
  <DocTemplate
    packageName={name}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-framework/tree/master/packages/${name}`}
    examples={[
      {
        title: ' Provider for the Basic Consumer Example',
        example: <BasicProvider />,
        source: BasicProviderSrc,
      },
      {
        title: 'Provider Content for the Lifecycle Statuses Consumer Example',
        example: <DataStatusProvider />,
        source: DataStatusProviderSrc,
      },
      {
        title: 'Provider Content for the Custom Event Consumer Example',
        example: <CustomEventProvider />,
        source: CustomEventProviderSrc,
      },
      {
        title: 'Provider Content for the Seamless Communication Consumer Example',
        example: <CustomEventsProvider />,
        source: CustomEventsProviderSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Embedded Content Provider Test Template',
        componentSrc: EmbeddedContentProviderTestTemplate,
      },
    ]}
  />
);

export default DocPage;
