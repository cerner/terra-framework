import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
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
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(ModalContainer);
