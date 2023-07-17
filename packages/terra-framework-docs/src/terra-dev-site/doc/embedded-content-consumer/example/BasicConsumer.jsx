import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';

Consumer.init();

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    options={{ iframeAttrs: { title: 'Basic content example', width: '100%', frameborder: '0' } }}
  />
);

export default BasicConsumer;
