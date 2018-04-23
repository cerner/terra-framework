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

    this.handleOpenPrompt = this.handleOpenPrompt.bind(this);
    this.handleClosePrompt = this.handleClosePrompt.bind(this);
  }

  handleOpenPrompt() {
    this.setState({ isOpen: true });
  }

  handleClosePrompt() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <Prompt
          showprompt={this.state.isOpen}
          onRequestClose={this.handleClosePrompt}
          title="This is the title"
          message="This is the message"
          actions={[
            <Button
              text="Ok"
              onClick={clickOK}
            />,
            <Button
              text="Close"
              onClick={this.handleClosePrompt}
            />,
          ]}
        />
        <Button text="Trigger Prompt" onClick={this.handleOpenPrompt} />
      </div>
    );
  }
}

export default CompletePrompt;
