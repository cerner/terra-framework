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

    this.frame.iframe.contentWindow.addEventListener('focus', () => {
      this.frame.iframe.style['outline'] = "2px dashed blue";
    }, true);

    this.frame.iframe.contentWindow.addEventListener('blur', () => {
      this.frame.iframe.style['outline'] = "0px";
    }, true);
  }

  render() {
    return (
      <div id="FocusIndicator">
        <EmbeddedContentConsumer
          src="/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
          options={{ iframeAttrs: { title: 'Custom events example', id: 'basic-consumer-frame' }, }}
          onMount={this.onMount}
          // resizeConfig: { scrolling: true, fixedWidth: '100%', fixedHeight: '100px' }
        />
      </div>
    );
  }
}

export default VisualFocusIndicator;
