import React from 'react';
import { Provider } from 'xfc';
import ProviderTestTemplate from '../../../../EmbeddedContentProviderTestTemplate';

class EmbeddedContent extends React.Component {
  componentDidMount() {
    setTimeout(() => { Provider.trigger('EventA'); }, 1000);
  }

  render() {
    return (
      <div style={{ padding: '1.25rem' }}>
        <h1>Listening to Custom Event</h1>
        <p>A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. </p>
        <p>This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker.</p>
        <ol>
          <li><p>After a one second delay the provider (i.e. embedded web content) will send the message `EventA`.</p></li>
          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content</p></li>
        </ol>
      </div>
    );
  }
}

const CustomEventProvider = () => (
  <ProviderTestTemplate>
    <EmbeddedContent />
  </ProviderTestTemplate>
);

export default CustomEventProvider;
