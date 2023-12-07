import React from 'react';
import { Consumer } from 'xfc';
import classNames from 'classnames/bind';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import styles from './Consumer.module.scss';

const cx = classNames.bind(styles);

Consumer.init();

const createListItem = (itemName) => {
  const listItem = document.createElement('li');
  listItem.appendChild(document.createTextNode(itemName));

  return listItem;
};

const appendLifeCycleStatuses = (statuses) => {
  const frame = document.getElementById('data-embedded-consumer-data-status');
  if (!frame) {
    return;
  }

  const frameContent = frame.contentWindow.document.getElementById('DataStatus-LifeCycleStatuses');
  if (frameContent) {
    statuses.forEach((status) => { frameContent.appendChild(createListItem(status)); });
  }
};

const options = { secret: 'OAuth Secret', iframeAttrs: { id: 'data-embedded-consumer-data-status' } };

const onMount = () => {
  setTimeout(() => { appendLifeCycleStatuses(['Mounted']); }, 2000);
};

const onLaunch = () => {
  setTimeout(() => { appendLifeCycleStatuses(['Launched']); }, 3000);
};

const onAuthorize = () => {
  setTimeout(() => { appendLifeCycleStatuses(['Authorized']); }, 4000);
};

const DataStatusConsumer = () => (
  <div className={cx('consumer-content-wrapper')}>
    <h2>Embedded Content</h2>
    <p>The following is an embedded content within an iframe.</p>
    <EmbeddedContentConsumer
      src="../../../../#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/data-status-provider"
      className={cx('iframe')}
      onMount={onMount}
      onLaunch={onLaunch}
      onAuthorize={onAuthorize}
      title="Embedded application lifecycle example"
      options={options}
    />
  </div>
);

export default DataStatusConsumer;
