import React from 'react';
import Button from 'terra-button';
import AppDelegate from 'terra-app-delegate';
import PopupModalContent from './PopupModalContent';

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);

    this.disclose = this.disclose.bind(this);
  }

  disclose() {
    this.props.app.disclose({
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
  app: AppDelegate.propType,
};

export default ModalContainer;
