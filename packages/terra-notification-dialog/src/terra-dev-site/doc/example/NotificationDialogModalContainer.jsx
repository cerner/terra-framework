import React from 'react';
import PropTypes from 'prop-types';
import Button from 'terra-button';
import { withDisclosureManager } from 'terra-disclosure-manager';
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
  disclosureManager: PropTypes.object,
};

export default withDisclosureManager(NotificationDialogModalContainer);
