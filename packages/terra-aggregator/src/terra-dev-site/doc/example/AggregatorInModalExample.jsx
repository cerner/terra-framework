import React from 'react';
import PropTypes from 'prop-types';
import AppDelegate from 'terra-app-delegate';
import ModalManager from 'terra-modal-manager';

import ModalAggregator from '../common/ModalAggregator';

const propTypes = {
  size: PropTypes.string,
};

const ModalButton = ({ app }) => (
  <button
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

class SimpleAggregatorExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      flip: false,
    };
  }

  render() {
    const body = (
      <div>
        <h3>Aggregator inside modal disclosure</h3>
        <ModalManager>
          <ModalButton />
        </ModalManager>
      </div>
    );

    return body;
  }
}

SimpleAggregatorExample.propTypes = propTypes;

export default SimpleAggregatorExample;
