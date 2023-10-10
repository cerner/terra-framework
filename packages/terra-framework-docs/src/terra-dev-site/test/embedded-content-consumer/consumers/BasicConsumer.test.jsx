import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

const BasicConsumer = () => (
  <div className={cx('consumer-content-wrapper')}>
    <h2>Embedded Content</h2>
    <p>The following is an embedded content within an iframe.</p>
    <EmbeddedContentConsumer
      className={cx('iframe')}
      options={{ iframeAttrs: { id: 'basic-consumer-frame' } }}
      title="Basic Consumer"
      src="/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
    />
  </div>
);

export default BasicConsumer;
