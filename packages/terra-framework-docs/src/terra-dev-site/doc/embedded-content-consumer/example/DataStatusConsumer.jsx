import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';
import '../providers/EmbeddedContentConsumerCommon.module.scss';

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
  <EmbeddedContentConsumer
    // Use `../../../` prefix if there is any changes to the providers file so we can see changes during the PR-preview build.
    // Otherwise, keep the existing `/terra-framework/` prefix so the page will load when viewing the live site under /terra-ui and /terra-framework.
    src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/data-status-provider"
    onMount={onMount}
    onLaunch={onLaunch}
    onAuthorize={onAuthorize}
    title="Embedded application lifecycle example"
    options={options}
  />
);

export default DataStatusConsumer;
