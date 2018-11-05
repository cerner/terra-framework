import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import { withDisclosureManager } from 'terra-disclosure-manager';
import PopupModalContent from './PopupModalContent';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
  }

  disclose() {
    this.props.disclosureManager.disclose({
      preferredType: 'modal',
      size: '',
      content: {
        key: 'PopupModalContent',
        component: <PopupModalContent />,
      },
    });
  }

  render() {
    return <Button className="disclose" text="Disclose Modal" onClick={this.disclose} />;
  }
}

ModalContainer.propTypes = {
  disclosureManager: PropTypes.object,
};

export default withDisclosureManager(ModalContainer);
