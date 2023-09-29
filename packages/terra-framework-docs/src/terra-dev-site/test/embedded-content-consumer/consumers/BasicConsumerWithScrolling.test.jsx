import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

const BasicConsumerWithScrolling = () => (
  <EmbeddedContentConsumer
    className={cx('iframe')}
    src="/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-events-provider"
    title="Basic Consumer with Scrolling"
    options={{
      iframeAttrs: {
        id: 'basic-consumer-with-scrolling',
      },
      resizeConfig: {
        fixedHeight: '50px',
        fixedWidth: '100%',
        scrolling: true,
      },
    }}
  />
);

export default BasicConsumerWithScrolling;
