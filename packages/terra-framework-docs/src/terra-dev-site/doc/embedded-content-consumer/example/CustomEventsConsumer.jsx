import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';

Consumer.init();

class CustomEventsConsumer extends React.Component {
  constructor(props) {
    super(props);

    this.onMount = this.onMount.bind(this);
    this.handleEventA = this.handleEventA.bind(this);
    this.handleEventB = this.handleEventB.bind(this);
  }

  handleEventA() {
    document.getElementById('CustomEvents').style.border = 'thick dashed #0000FF';
    this.frame.trigger('Event-Reply', { eventReply: 'eventA', borderColor: '#0000FF' });
  }

  handleEventB() {
    document.getElementById('CustomEvents').style.border = 'thick dashed #00FF00';
    this.frame.trigger('Event-Reply', { eventReply: 'eventB', borderColor: '#00FF00' });
  }

  onMount(frame) {
    this.frame = frame;
  }

  render() {
    const eventHandlers = [
      {
        key: 'EventA',
        handler: this.handleEventA,
      },
      {
        key: 'EventB',
        handler: this.handleEventB,
      },
    ];

    return (
      <div id="CustomEvents">
        <EmbeddedContentConsumer
          src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-events-provider"
          title="Custom events example"
          options={{ iframeAttrs: { id: 'custom-events-example', frameborder: '1' } }}
          onMount={this.onMount}
          eventHandlers={eventHandlers}
        />
      </div>
    );
  }
}

export default CustomEventsConsumer;
