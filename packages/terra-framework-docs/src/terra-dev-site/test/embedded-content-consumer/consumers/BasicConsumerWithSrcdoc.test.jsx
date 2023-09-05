import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

const BasicConsumerWithSrcDoc = () => (
  <EmbeddedContentConsumer
    className={cx('iframe')}
    srcdoc="<h2>Inline HTML with srcdoc</h2><p>Inline HTML content can be used to render the view in the iframe.</p>"
    options={{ iframeAttrs: { id: 'iframe-with-srcdoc', title: 'Inline HTML Content', width: '100%', height: '100px' } }}
  />
);

export default BasicConsumerWithSrcDoc;
