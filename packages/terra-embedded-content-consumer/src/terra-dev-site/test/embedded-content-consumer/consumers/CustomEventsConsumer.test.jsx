import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../../EmbeddedContentConsumer';

Consumer.init();

const eventHandlers = [
  {
    key: 'EventA',
    handler: (consumer) => {
      document.getElementById('CustomEvents').style.border = 'thick dashed #0000FF';
      consumer.trigger('Event-Reply', { eventReply: 'eventA', borderColor: '#0000FF' });
    },
  },
  {
    key: 'EventB',
    handler: (consumer) => {
      document.getElementById('CustomEvents').style.border = 'thick dashed #00FF00';
      consumer.trigger('Event-Reply', { eventReply: 'eventB', borderColor: '#00FF00' });
    },
  },
];

const CustomEventsConsumer = () => (
  <div id="CustomEvents">
    <EmbeddedContentConsumer
      src="#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"
      eventHandlers={eventHandlers}
    />
  </div>
);

export default CustomEventsConsumer;
