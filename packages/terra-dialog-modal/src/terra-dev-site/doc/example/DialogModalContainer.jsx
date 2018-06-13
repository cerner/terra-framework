import React from 'react';
import Button from 'terra-button';
import AppDelegate from 'terra-app-delegate';
import DialogModalWithFocus from './DialogModalWithFocus';


class DialogModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
  }

  disclose() {
    this.props.app.disclose({
      preferredType: 'modal',
      content: {
        key: 'DemoContainer',
        component: <DialogModalWithFocus />,
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

DialogModalContainer.propTypes = {
  app: AppDelegate.propType,
};

export default DialogModalContainer;
