import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';

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

const options = { secret: 'OAuth Secret', iframeAttrs: { id: 'data-embedded-consumer-data-status', frameborder: '1' } };

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
    src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/data-status-provider"
    title="Embedded application lifecycle example"
    onMount={onMount}
    onLaunch={onLaunch}
    onAuthorize={onAuthorize}
    options={options}
  />
);

export default DataStatusConsumer;
