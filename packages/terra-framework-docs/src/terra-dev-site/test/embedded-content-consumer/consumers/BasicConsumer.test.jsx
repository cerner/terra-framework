import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    className={cx('iframe')}
    options={{ iframeAttrs: { title: 'Basic Consumer' } }}
    src="/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
  />
);

export default BasicConsumer;
