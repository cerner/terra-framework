import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';

Consumer.init();

const BasicConsumerWithScrolling = () => (
  <EmbeddedContentConsumer
    src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    title="Basic content example of scrolling is enabled"
    options={{
      resizeConfig: { scrolling: true, fixedWidth: '100%', fixedHeight: '100px' },
    }}
  />
);

export default BasicConsumerWithScrolling;
