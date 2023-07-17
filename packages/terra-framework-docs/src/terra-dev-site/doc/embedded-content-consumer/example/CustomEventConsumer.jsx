import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';

Consumer.init();

const eventHandlers = [{
  key: 'EventA',
  handler: () => {
    document.getElementById('CustomEvent').style.border = 'thick dashed #0000FF';
  },
}];

const CustomEventConsumer = () => (
  <div id="CustomEvent">
    <EmbeddedContentConsumer
      src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-event-provider"
      options={{ iframeAttrs: { title: 'Custom Event Example', width: '100%', frameborder: '0' } }}
      eventHandlers={eventHandlers}
    />
  </div>
);

export default CustomEventConsumer;
