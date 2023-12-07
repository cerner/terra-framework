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
      <div className={cx('consumer-content-wrapper')}>
        <h2>Embedded Content</h2>
        <p>The following is an embedded content within an iframe.</p>
        <div id="CustomEvents">
          <EmbeddedContentConsumer
            src="../../../../#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-events-provider"
            className={cx('iframe')}
            title="Custom events example"
            options={{ iframeAttrs: { id: 'custom-events-consumer-frame' }, resizeConfig: { scrolling: true } }}
            onMount={this.onMount}
            eventHandlers={eventHandlers}
          />
        </div>
      </div>
    );
  }
}

export default CustomEventsConsumer;
