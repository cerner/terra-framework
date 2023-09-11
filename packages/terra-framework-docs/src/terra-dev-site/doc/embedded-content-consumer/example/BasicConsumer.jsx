import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';
import '../providers/EmbeddedContentConsumerCommon.module.scss';

Consumer.init();

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    isScrollable
    options={{ iframeAttrs: { title: 'Basic content example' } }}
  />
);

export default BasicConsumer;
