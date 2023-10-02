import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';
import '../providers/EmbeddedContentConsumerCommon.module.scss';

Consumer.init();
const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="http://localprovider.com:8080/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    // src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    title="Basic content example"
    options={{
      resizeConfig: { scrolling: true, fixedWidth: '100%', fixedHeight: '120px' }
    }}
  />
);

export default BasicConsumer;
