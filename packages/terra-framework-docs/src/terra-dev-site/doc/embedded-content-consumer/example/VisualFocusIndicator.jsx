import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from '../../../../../../../../xfc/src';

Consumer.init();

class VisualFocusIndicator extends React.Component {
  constructor(props) {
    super(props);

    this.onMount = this.onMount.bind(this);
  }

  onMount(frame) {
    this.frame = frame;

    window.addEventListener('focus', () => {

      console.log('set focus');
      // this.frame.iframe.style = "outline: 2px dashed blue;";
      this.frame.iframe.style.setProperty("outline", "2px dashed blue;");

    }, true);

    window.addEventListener('blur', () => {
      console.log('set blur');
      this.frame.iframe.style.setProperty("outline", "0px;");
      this.frame.iframe.style = "outline: 0px;";

    }, true);
  }

  render() {

    return (
      <div id="FocusIndicator">
        <EmbeddedContentConsumer
          src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/custom-events-provider"
          options={{ iframeAttrs: { title: 'Custom events example' } }}
          onMount={this.onMount}
        />
      </div>
    );
  }
}

export default VisualFocusIndicator;
