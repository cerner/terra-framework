import React from 'react';
import { Provider } from 'xfc';
import ProviderTestTemplate from '../../../../EmbeddedContentProviderTestTemplate';

class EmbeddedContent extends React.Component {
  constructor(props) {
    super(props);
    this.addEventListener = this.addEventListener.bind(this);
    this.onClickA = this.onClickA.bind(this);
    this.onClickB = this.onClickB.bind(this);

    this.addEventListener('Event-Reply');
  }

  // eslint-disable-next-line
  onClickA() {
    Provider.trigger('EventA');
  }

  // eslint-disable-next-line
  onClickB() {
    Provider.trigger('EventB');
  }

  // eslint-disable-next-line
  addEventListener(eventName) {
    Provider.on(eventName, (event) => {
      document.getElementById('embedded-content-consumer-reply').innerHTML = `embedded-content-consumer reply: ${JSON.stringify(event)}`;
    });
  }

  render() {
    return (
      <div style={{ padding: '1.25rem' }}>
        <h1>Communication Between the Consumer and Embedded Content</h1>
        <p>Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider.</p>
        <p>This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content.</p>
        <ol id="embedded-content-custom-events-communication-explination">
          <li><p>Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.</p></li>
          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.</p></li>
          <li><p>Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.</p></li>
          <li><p>The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider.</p></li>
        </ol>
        <p>Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. </p>
        <button id="EventA" onClick={this.onClickA} type="button">Trigger Event A!</button>
        <button id="EventB" onClick={this.onClickB} type="button">Trigger Event B!</button>
        <div id="embedded-content-consumer-reply">No message has been sent.</div>
      </div>
    );
  }
}

const CustomEventsProvider = () => (
  <ProviderTestTemplate>
    <EmbeddedContent />
  </ProviderTestTemplate>
);

export default CustomEventsProvider;
