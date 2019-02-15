import React from 'react';
import ContentContainer from 'terra-content-container';
import ActionHeader from 'terra-action-header';
import { DisclosureManager } from 'terra-application';

const DisclosureComponent = DisclosureManager.withDisclosureManager(({ disclosureManager, text }) => (
  <ContentContainer
    header={(
      <ActionHeader title={text} onBack={disclosureManager.goBack} onClose={disclosureManager.closeDisclosure} />
    )}
    fill
  >
    <div style={{ padding: '5px' }}>
      {text}
      {' '}
      Content
    </div>
  </ContentContainer>
));

export default DisclosureComponent;
