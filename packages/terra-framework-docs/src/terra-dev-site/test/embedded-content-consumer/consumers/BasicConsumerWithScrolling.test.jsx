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
    options={{
      iframeAttrs: {
        id: 'basic-consumer-with-scrolling',
        title: 'Basic Consumer with Scrolling',
      },
      resizeConfig: {
        fixedHeight: '50px',
        fixedWidth: '100%',
      },
    }}
    src="/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-events-provider"
    scrolling
  />
);

export default BasicConsumerWithScrolling;
