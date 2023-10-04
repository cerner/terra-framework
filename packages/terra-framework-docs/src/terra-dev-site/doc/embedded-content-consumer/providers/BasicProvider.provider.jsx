import React from 'react';
import classNames from 'classnames/bind';
import ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';
import styles from './EmbeddedContentConsumerCommon.module.scss';

const cx = classNames.bind(styles);

const Provider = () => (
  <ProviderTestTemplate>
    {/* eslint-disable-next-line */}
    <div className={cx('content-wrapper')} tabIndex="0" style={{ outline: 'none' }}>
      <h1>Basic Content</h1>
      <p>This example demonstrates that the embedded content consumer will display the providers web content within an iframe.</p>
    </div>
  </ProviderTestTemplate>
);

export default Provider;
