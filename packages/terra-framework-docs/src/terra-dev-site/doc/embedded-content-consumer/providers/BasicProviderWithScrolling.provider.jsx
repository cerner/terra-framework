import React from 'react';
import classNames from 'classnames/bind';
import ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';
import styles from './EmbeddedContentConsumerCommon.module.scss';

const cx = classNames.bind(styles);

const Provider = () => (
  <ProviderTestTemplate>
    <div className={cx('content-wrapper')}>
      <h1>Basic Content With Scrolling</h1>
      <p>This example demonstrates that the embedded content consumer can be scrolled within an iframe when the content is not fully visible.</p>
    </div>
  </ProviderTestTemplate>
);

export default Provider;
