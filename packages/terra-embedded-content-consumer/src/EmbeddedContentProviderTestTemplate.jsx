import React from 'react';
import PropTypes from 'prop-types';

import './ProviderIframe.module.scss';
import './ProviderTestTemplate.scss';

const propTypes = {
  /**
   * The content which will be embedded in an iframe by the XFC consumer.
   */
  children: PropTypes.node.isRequired,
};

class EmbeddedContentProviderTestTemplate extends React.Component {
  componentDidMount() {
    document.body.classList.toggle('embedded-content-provider-test-template-body');
  }

  componentWillUnmount() {
    document.body.classList.toggle('embedded-content-provider-test-template-body');
  }

  render() {
    const {
      children,
      ...customProps
    } = this.props;

    return (
      <div data-embedded-content-consumer-provider-test-template {...customProps}>
        {children}
      </div>
    );
  }
}

EmbeddedContentProviderTestTemplate.propTypes = propTypes;

export default EmbeddedContentProviderTestTemplate;
