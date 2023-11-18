import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';
import '../providers/EmbeddedContentConsumerCommon.module.scss';

Consumer.init();
const BasicConsumer = () => (
  <EmbeddedContentConsumer
    // TODO: Fix site doc so that relative paths can be used everywhere.
    // For now, use `../../../` prefix if there is any changes to the providers file so we can see changes during the PR-preview build.
    // Otherwise, keep the existing `/terra-framework/` prefix so the page will load when viewing the live site.
    src="../../../#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    title="Basic content example"
    options={{ resizeConfig: { scrolling: true, fixedHeight: '200px' } }}
  />
);

export default BasicConsumer;
