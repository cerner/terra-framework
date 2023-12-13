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
  <div className={cx('consumer-content-wrapper')}>
    <h2>Embedded Content</h2>
    <p>The following is an embedded content within an iframe.</p>
    <div id="CustomEvent">
      <EmbeddedContentConsumer
        // Use `../../../../` prefix if there is any changes to the providers file so we can see changes during the PR-preview build.
        // Otherwise, keep the existing `/terra-framework/` prefix so the page will load when viewing the live site under /terra-ui and /terra-framework.
        src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-event-provider"
        className={cx('iframe')}
        eventHandlers={eventHandlers}
        title="Basic Consumer"
        options={{ iframeAttrs: { id: 'custom-event-consumer-frame' } }}
      />
    </div>
  </div>
);

export default CustomEventConsumer;
