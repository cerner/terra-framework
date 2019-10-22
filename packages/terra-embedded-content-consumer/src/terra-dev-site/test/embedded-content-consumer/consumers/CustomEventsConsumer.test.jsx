import React from 'react';
import classNames from 'classnames/bind';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer/lib/EmbeddedContentConsumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

class CustomEventsConsumer extends React.Component {
  constructor(props) {
    super(props);

    this.onMount = this.onMount.bind(this);
    this.handleEventA = this.handleEventA.bind(this);
    this.handleEventB = this.handleEventB.bind(this);
  }

  onMount(frame) {
    this.frame = frame;
  }

  handleEventA() {
    document.getElementById('CustomEvents').style.border = 'thick dashed #0000FF';
    this.frame.trigger('Event-Reply', { eventReply: 'eventA', borderColor: '#0000FF' });
  }

  handleEventB() {
    document.getElementById('CustomEvents').style.border = 'thick dashed #00FF00';
    this.frame.trigger('Event-Reply', { eventReply: 'eventB', borderColor: '#00FF00' });
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
          className={cx('iframe')}
          src="/#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider"
          options={{ iframeAttrs: { title: 'Custom events example' } }}
          onMount={this.onMount}
          eventHandlers={eventHandlers}
        />
      </div>
    );
  }
}

export default CustomEventsConsumer;
