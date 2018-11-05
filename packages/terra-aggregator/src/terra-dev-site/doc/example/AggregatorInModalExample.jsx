import React from 'react';
import PropTypes from 'prop-types';
import { withDisclosureManager } from 'terra-disclosure-manager';
import ModalManager from 'terra-modal-manager';

// eslint-disable-next-line import/no-unresolved, import/extensions
import ModalAggregator from 'terra-aggregator/lib/terra-dev-site/doc/common/ModalAggregator';

const ModalButton = ({ disclosureManager }) => (
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
);

ModalButton.propTypes = {
  disclosureManager: PropTypes.object,
};

const SimpleAggregatorExample = () => (
  <div>
    <ModalManager>
      <ModalButton />
    </ModalManager>
  </div>
);

export default withDisclosureManager(SimpleAggregatorExample);
