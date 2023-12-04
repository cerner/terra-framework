import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

const BasicConsumerWithScrolling = () => (
  <div className={cx('consumer-content-wrapper')}>
    <h2>Embedded Content</h2>
    <p>The following is an embedded content within an iframe.</p>
    <EmbeddedContentConsumer
      src="../../../../#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider-with-scrolling"
      className={cx('iframe')}
      title="Basic Consumer with Scrolling"
      options={{
        iframeAttrs: {
          id: 'basic-consumer-with-scrolling',
        },
        resizeConfig: {
          fixedHeight: '100px',
          fixedWidth: '100%',
          scrolling: true,
        },
      }}
    />
  </div>
);

export default BasicConsumerWithScrolling;
