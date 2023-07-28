import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';

Consumer.init();

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    title="Basic content example"
    options={{ iframeAttrs: { frameborder: '1' }, resizeConfig: { fixedWidth: '100%', fixedHeight: '120px' } }}
  />
);

export default BasicConsumer;
