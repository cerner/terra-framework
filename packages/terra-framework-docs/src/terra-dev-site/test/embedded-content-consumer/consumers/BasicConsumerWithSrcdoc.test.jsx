import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

const BasicConsumerWithSrcDoc = () => (
  <div className={cx('consumer-content-wrapper')}>
    <h2>Embedded Content</h2>
    <p>The following is an embedded content within an iframe.</p>
    <EmbeddedContentConsumer
      className={cx('iframe')}
      title="Inline HTML Content"
      options={{
        iframeAttrs: {
          id: 'iframe-with-srcdoc', // unique id of this iframe
          srcdoc: '<h2>Inline HTML with srcdoc</h2><p>Inline HTML content can be used to render the view in the iframe.</p>',
          width: '100%', // fixed width of this iframe (no auto resize logic)
          height: '100px', // fixed height of this iframe (no auto resize logic)
        },
      }}
    />
  </div>
);

export default BasicConsumerWithSrcDoc;
