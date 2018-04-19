import React from 'react';
import Button from 'terra-button';
import Prompt from '../../src/Prompt';

const clickOK = () => {
  alert('You clicked OK');
};

const clickClose = () => {
  alert('You clicked OK');
};

class CompletePrompt extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: true,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Prompt
          title="This is the title"
          message="This is the message"
          actions={[<Button
            text="Ok"
            onClick={clickOK}
          />,
            <Button
              text="Close"
              onClick={clickClose}
            />,
          ]}
        />
        <button text="Trii" />
      </div>
    );
  }
}

export default CompletePrompt;
