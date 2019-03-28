import React from 'react';
import { Provider } from 'xfc';
import ProviderTestTemplate from '../../../../EmbeddedContentProviderTestTemplate';

class EmbeddedContent extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  // eslint-disable-next-line
  onClick() {
    Provider.trigger('EventA');
  }

  render() {
    return (
      <div style={{ padding: '1.25rem' }}>
        <h1>Listening to Custom Event</h1>
        <p>A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. </p>
        <p>This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker.</p>
        <ol>
          <li><p>Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.</p></li>
          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content</p></li>
        </ol>
        <button id="EventA" onClick={this.onClick} type="button">Set Border Color!</button>
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
