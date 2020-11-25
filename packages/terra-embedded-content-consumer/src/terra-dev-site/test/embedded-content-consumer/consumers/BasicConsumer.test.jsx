import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from '../../../../EmbeddedContentConsumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

const BasicConsumer = () => (
  <EmbeddedContentConsumer
    className={cx('iframe')}
    src="/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider"
  />
);

export default BasicConsumer;
