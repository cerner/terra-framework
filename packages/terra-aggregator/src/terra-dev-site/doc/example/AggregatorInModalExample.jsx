import React from 'react';
import AppDelegate from 'terra-app-delegate';
import ModalManager from 'terra-modal-manager';

// eslint-disable-next-line import/no-unresolved, import/extensions
import ModalAggregator from 'terra-aggregator/lib/terra-dev-site/doc/common/ModalAggregator';

const ModalButton = ({ app }) => (
  <button
    type="button"
    onClick={() => {
      app.disclose({
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
  app: AppDelegate.propType,
};

const SimpleAggregatorExample = () => (
  <div>
    <ModalManager>
      <ModalButton />
    </ModalManager>
  </div>
);

export default SimpleAggregatorExample;
