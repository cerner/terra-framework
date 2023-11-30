import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from 'xfc';
import '../providers/EmbeddedContentConsumerCommon.module.scss';

Consumer.init();

const eventHandlers = [{
  key: 'EventA',
  handler: () => {
    document.getElementById('CustomEvent').style.border = 'thick dashed #0000FF';
  },
}];

const CustomEventConsumer = () => (
  <div id="CustomEvent">
    <EmbeddedContentConsumer
      // TODO: Fix site doc so that relative paths can be used everywhere.
      // For now, use `../../../` prefix if there is any changes to the providers file so we can see changes during the PR-preview build.
      // Otherwise, keep the existing `/terra-framework/` prefix so the page will load when viewing the live site.
      src="../../../#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-event-provider"
      title="Custom Event Example"
      eventHandlers={eventHandlers}
    />
  </div>
);

export default CustomEventConsumer;
