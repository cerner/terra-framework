import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';
import '../providers/EmbeddedContentConsumerCommon.module.scss';

Consumer.init();
const BasicConsumer = () => (
  <EmbeddedContentConsumer
    src="../../../#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    title="Basic content example"
    options={{ resizeConfig: { scrolling: true, fixedHeight: '200px' } }}
  />
);

export default BasicConsumer;
