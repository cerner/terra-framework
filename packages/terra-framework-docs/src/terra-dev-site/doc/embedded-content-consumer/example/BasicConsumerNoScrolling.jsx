import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';

Consumer.init();

const BasicConsumerNoScrolling = () => (
  <EmbeddedContentConsumer
    src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    scrolling={false}
    options={{ iframeAttrs: { title: 'Basic content example' } }}
  />
);

export default BasicConsumerNoScrolling;
