import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';
import '../providers/EmbeddedContentConsumerCommon.module.scss';

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
          // Use `../../../` prefix if there is any changes to the providers file so we can see changes during the PR-preview build.
          // Otherwise, keep the existing `/terra-framework/` prefix so the page will load when viewing the live site under /terra-ui and /terra-framework.
          src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-events-provider"
          title="Custom events example"
          options={{ iframeAttrs: { id: 'custom-events-consumer-frame' } }}
          onMount={this.onMount}
          eventHandlers={eventHandlers}
        />
      </div>
    );
  }
}

export default CustomEventsConsumer;
