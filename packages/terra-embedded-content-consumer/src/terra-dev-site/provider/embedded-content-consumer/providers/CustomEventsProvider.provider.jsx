import React from 'react';
import { Provider } from 'xfc';
import ProviderTestTemplate from '../../../../EmbeddedContentProviderTestTemplate';

class EmbeddedContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { triggerEventA: true };
    this.addEventListener = this.addEventListener.bind(this);
    this.onClick = this.onClick.bind(this);

    this.addEventListener('Event-Reply');
  }

  componentDidMount() {
    setTimeout(() => { Provider.trigger('EventA'); }, 1000);
    setTimeout(() => { Provider.trigger('EventB'); }, 10000);
  }


  onClick() {
    const event = this.state.triggerEventA ? 'EventA' : 'EventB';
    this.setState(prevState => ({
      triggerEventA: !prevState.triggerEventA,
    }));

    Provider.trigger(event);
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
        <h1>Communicaition Between the Consumer and Embedded Content</h1>
        <p>Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider.</p>
        <p>This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content.</p>
        <ol id="embedded-content-custom-events-communication-explination">
          <li><p>On mount, after a one second delay the provider (i.e. embedded web content) will send the message `EventA`.</p></li>
          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.</p></li>
          <li><p>Then, after another ten second delay, the provider will send the second event message `EventB`.</p></li>
          <li><p>The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider.</p></li>
        </ol>
        <p>Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. </p>
        <button onClick={this.onClick} type="button">Toggle Border Color!</button>
        <div id="embedded-content-consumer-reply">no message as been sent</div>
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
