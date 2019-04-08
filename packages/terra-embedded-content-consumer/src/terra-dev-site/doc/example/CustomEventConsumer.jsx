import React from 'react';
// eslint-disable-next-line import/no-unresolved
import EmbeddedContentConsumer from 'terra-embedded-content-consumer/lib/EmbeddedContentConsumer';

const eventHandlers = [{
  key: 'EventA',
  handler: () => {
    document.getElementById('CustomEvent').style.border = 'thick dashed #0000FF';
  },
}];

const CustomEventConsumer = () => (
  <div id="CustomEvent">
    <EmbeddedContentConsumer
      src="#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider"
      options={{ iframeAttrs: { title: 'Custom Event Example' } }}
      eventHandlers={eventHandlers}
    />
  </div>
);

export default CustomEventConsumer;
