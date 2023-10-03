import React from 'react';
import EmbeddedContentConsumer from 'terra-embedded-content-consumer';
import { Consumer } from '../../../../../../../../xfc/src';

Consumer.init();

class VisualFocusIndicator extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="FocusIndicator">
        <EmbeddedContentConsumer
          src="http://localprovider.com:8080/terra-framework/#/raw/provider/cerner-terra-framework-docs/embedded-content-consumer/providers/basic-provider"
          options={{
            iframeAttrs: { title: 'Custom events example', id: 'basic-consumer-frame' },
            resizeConfig: { scrolling: true, fixedWidth: '100%', fixedHeight: '100px' }
          }}
        />
      </div>
    );
  }
}

export default VisualFocusIndicator;
