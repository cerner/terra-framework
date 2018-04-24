import React from 'react';
import Button from 'terra-button';
import Prompt from '../../src/Prompt';

const clickOK = () => {
  alert('You clicked OK');
};

class CompletePromptWithLongMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      showprompt: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showprompt: true });
  }

  handleCloseModal() {
    this.setState({ showprompt: false });
  }

  render() {
    return (
      <div>
        <Prompt
          showprompt={this.state.showprompt}
          onRequestClose={this.handleCloseModal}
          title="This is the title"
          message="This is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the messageThis is the message"
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

export default CompletePromptWithLongMessage;
