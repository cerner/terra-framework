import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import DialogModalWithFocus from './DialogModalWithFocus';

class DialogModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
  }

  disclose() {
    this.props.disclosureManager.disclose({
      preferredType: 'modal',
      content: {
        key: 'DemoContainer',
        component: <DialogModalWithFocus />,
      },
    });
  }

  render() {
    return (
      <Button text="Disclose" onClick={this.disclose} />
    );
  }
}

DialogModalContainer.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(DialogModalContainer);
