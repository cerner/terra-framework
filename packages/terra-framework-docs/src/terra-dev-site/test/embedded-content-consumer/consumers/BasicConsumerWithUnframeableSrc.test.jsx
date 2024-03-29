import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

const BasicConsumerWithUnframeableSrc = () => (
  <EmbeddedContentConsumer
    className={cx('iframe')}
    title="Basic Consumer With Unframeable Src"
    src="https://www.google.com"
  />
);

export default BasicConsumerWithUnframeableSrc;
