import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';
import '../providers/EmbeddedContentConsumerCommon.module.scss';

Consumer.init();
const BasicConsumer = () => (
  <EmbeddedContentConsumer
    // Use `../../../` prefix if there is any changes to the providers file so we can see changes during the PR-preview build.
    // Otherwise, keep the existing `/terra-framework/` prefix so the page will load when viewing the live site under /terra-ui and /terra-framework.
    src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    title="Basic content example"
    options={{ resizeConfig: { scrolling: true, fixedHeight: '200px' } }}
  />
);

export default BasicConsumer;
