import React from 'react';
import PropTypes from 'prop-types';
import { withDisclosureManager } from 'terra-disclosure-manager';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';

const propTypes = {
  name: PropTypes.string,
  disclosureManager: PropTypes.object,
};

const ExtensionsDisclosure = ({ name, disclosureManager }) => (
  <ContentContainer
    fill
    header={(
      <ActionHeader
        title={name.charAt(0).toUpperCase() + name.slice(1)}
        onClose={disclosureManager.closeDisclosure}
        onBack={disclosureManager.goBack}
        onMaximize={disclosureManager.maximize}
        onMinimize={disclosureManager.minimize}
      />
   )}
  >
    <div style={{ padding: '10px' }}>
Content for extension:
      {name}
    </div>
  </ContentContainer>
);

ExtensionsDisclosure.propTypes = propTypes;

export default withDisclosureManager(ExtensionsDisclosure);
