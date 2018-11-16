import React from 'react';
import Button from 'terra-button';
import { withDisclosureManager, disclosureManagerShape } from 'terra-disclosure-manager';
import NotificationDialogWithFocus from './NotificationDialogWithFocus';

class NotificationDialogModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
  }

  disclose() {
    this.props.disclosureManager.disclose({
      preferredType: 'modal',
      content: {
        key: 'DemoContainer',
        component: <NotificationDialogWithFocus />,
      },
    });
  }

  render() {
    return (
      <Button text="Disclose" onClick={this.disclose} />
    );
  }
}

NotificationDialogModalContainer.propTypes = {
  disclosureManager: disclosureManagerShape,
};

export default withDisclosureManager(NotificationDialogModalContainer);
