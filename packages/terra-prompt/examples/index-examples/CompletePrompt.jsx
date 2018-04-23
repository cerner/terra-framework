import React from 'react';
import Button from 'terra-button';
import Prompt from '../../src/Prompt';

const clickOK = () => {
  alert('You clicked OK');
};

class CompletePrompt extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
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
          showprompt={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          title="This is the title"
          message="This is the message"
          actions={[
            <Button
              text="Ok"
              onClick={clickOK}
            />,
            <Button
              text="Close"
              onClick={this.handleCloseModal}
            />,
          ]}
        />
        <Button text="Trigger Prompt" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default CompletePrompt;
