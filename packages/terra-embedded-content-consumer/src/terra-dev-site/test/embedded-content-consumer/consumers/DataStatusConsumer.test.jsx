import React from 'react';
import { Consumer } from 'xfc';
import EmbeddedContentConsumer from '../../../../EmbeddedContentConsumer';

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

const options = { secret: 'OAuth Secret', iframeAttrs: { title: 'Embedded application lifecycle example', id: 'data-embedded-consumer-data-status' } };

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
  <EmbeddedContentConsumer
    src="#/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider"
    onMount={onMount}
    onLaunch={onLaunch}
    onAuthorize={onAuthorize}
    options={options}
  />
);

export default DataStatusConsumer;
