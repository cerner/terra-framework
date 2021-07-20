import React from 'react';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import ModalManager from 'terra-modal-manager';

import ModalAggregator from '../common/ModalAggregator';

const ModalButton = withDisclosureManager(({ disclosureManager }) => (
  <button
    type="button"
    onClick={() => {
      disclosureManager.disclose({
        preferredType: 'modal',
        size: 'large',
        content: {
          key: 'MODAL_EXAMPLE',
          component: <ModalAggregator identifier="MODAL_EXAMPLE" />,
        },
      });
    }}
  >
    Launch Modal
  </button>
));

ModalButton.propTypes = {
  disclosureManager: disclosureManagerShape,
};

const SimpleAggregatorExample = () => (
  <div>
    <ModalManager>
      <ModalButton />
    </ModalManager>
  </div>
);

export default SimpleAggregatorExample;
