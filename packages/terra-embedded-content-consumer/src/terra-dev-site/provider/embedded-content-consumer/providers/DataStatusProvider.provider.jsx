import React from 'react';
import classNames from 'classnames/bind';
import ProviderTestTemplate from '../../../../EmbeddedContentProviderTestTemplate';
import styles from './EmbeddedContentConsumerCommon.scss';

const cx = classNames.bind(styles);

const DataStatusProvider2 = () => (
  <ProviderTestTemplate>
    <div className={cx('content-wrapper')}>
      <h1>Embedded Application Lifecycle</h1>
      <p>The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame.</p>
      <p>In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):</p>
      <ul id="DataStatus-LifeCycleStatuses" />
    </div>
  </ProviderTestTemplate>
);

export default DataStatusProvider2;
