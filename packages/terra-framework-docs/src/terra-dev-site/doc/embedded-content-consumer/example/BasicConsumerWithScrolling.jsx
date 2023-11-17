import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';
import '../providers/EmbeddedContentConsumerCommon.module.scss';

Consumer.init();

const BasicConsumerWithScrolling = () => (
  <EmbeddedContentConsumer
    src="/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider-with-scrolling"
    title="Basic content example of scrolling is enabled"
    options={{
      resizeConfig: { scrolling: true, fixedWidth: '100%', fixedHeight: '120px' },
    }}
  />
);

export default BasicConsumerWithScrolling;
