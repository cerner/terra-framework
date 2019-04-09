import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../../EmbeddedContentConsumer';

Consumer.init();

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider"
  />
);

export default BasicConsumer;
