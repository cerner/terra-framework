import React from 'react';
import PropTypes from 'prop-types';
import { DisclosureManager } from 'terra-application';
import ActionHeader from 'terra-action-header';
import ContentContainer from 'terra-content-container';

const propTypes = {
  /**
   * Child content to be rendered within the extension disclosure.
   */
  children: PropTypes.node,
  /**
   * The currently active breakpoint.
   */
  disclosureManager: DisclosureManager.disclosureManagerShape,
  /**
   * Function callback for closing the drawer.
   */
  onRequestClose: PropTypes.func,
};

const ContentWrapper = ({
  children,
  disclosureManager,
  onRequestClose,
}) => {
  if (disclosureManager && disclosureManager.dismiss) {
    return (
      <ContentContainer
        header={<ActionHeader onClose={disclosureManager.dismiss} />}
        fill
      >
        {React.Children.map(children, child => React.cloneElement(child, { onRequestClose: disclosureManager.dismiss }))}
      </ContentContainer>
    );
  }

  return (
    React.Children.map(children, child => React.cloneElement(child, { onRequestClose }))
  );
};

ContentWrapper.propTypes = propTypes;

export default DisclosureManager.withDisclosureManager(ContentWrapper);
