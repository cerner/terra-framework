import React from 'react';
import Button from 'terra-button';
import AppDelegate from 'terra-app-delegate';
import NotificationDialogWithFocus from './NotificationDialogWithFocus';

class NotificationDialogModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
  }

  disclose() {
    this.props.app.disclose({
      preferredType: 'modal',
      content: {
        key: 'DemoContainer',
        component: <NotificationDialogWithFocus />,
      },
    });
  }

  render() {
    /* eslint-disable no-unused-vars */
    const {
      app,
    } = this.props;
    /* eslint-enable no-unused-vars */

    return (
      <Button text="Disclose" onClick={this.disclose} />
    );
  }
}

NotificationDialogModalContainer.propTypes = {
  app: AppDelegate.propType,
};

export default NotificationDialogModalContainer;
