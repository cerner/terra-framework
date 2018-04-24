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
      showprompt: false,
    };

    this.handleOpenPrompt = this.handleOpenPrompt.bind(this);
    this.handleClosePrompt = this.handleClosePrompt.bind(this);
  }

  handleOpenPrompt() {
    this.setState({ showprompt: true });
  }

  handleClosePrompt() {
    this.setState({ showprompt: false });
  }

  render() {
    return (
      <div>
        <Prompt
          showprompt={this.state.showprompt}
          onRequestClose={this.handleClosePrompt}
          title="Title goes here"
          message="Click ok to show alert and Close to go back.Click ok to show alert and Close to go back.Click ok to show alert and Close to go back.Click ok to show alert and Close to go back.Click ok to show alert and Close to go back.Click ok to show alert and Close to go back."
          actions={[
            <Button
              id="prompt-ok"
              text="Ok"
              onClick={clickOK}
            />,
            <Button
              id="prompt-close"
              text="Close"
              onClick={this.handleClosePrompt}
            />,
          ]}
        />
        <Button id="trigger-prompt" text="Trigger Prompt" onClick={this.handleOpenPrompt} />
      </div>
    );
  }
}

export default CompletePrompt;
