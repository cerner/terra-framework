import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';

Consumer.init();

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider"
    options={{ iframeAttrs: { title: 'Basic content example' } }}
  />
);

export default BasicConsumer;
