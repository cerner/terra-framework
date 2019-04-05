import React from 'react';
// eslint-disable-next-line import/no-unresolved
import EmbeddedContentConsumer from 'terra-embedded-content-consumer/lib/EmbeddedContentConsumer';

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider"
    options={{ iframeAttrs: { title: 'Basic content example' } }}
  />
);

export default BasicConsumer;
