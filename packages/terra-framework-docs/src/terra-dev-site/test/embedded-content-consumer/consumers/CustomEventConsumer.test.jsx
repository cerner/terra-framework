import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

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
      className={cx('iframe')}
      src="/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-event-provider"
      eventHandlers={eventHandlers}
      options={{ iframeAttrs: { title: 'Basic Consumer' } }}
    />
  </div>
);

export default CustomEventConsumer;
