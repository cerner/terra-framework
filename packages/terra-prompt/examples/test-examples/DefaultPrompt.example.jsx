import React from 'react';
import Button from 'terra-button';
import Prompt from '../../src/Prompt';

class DefaultPrompt extends React.Component {
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
          onRequestClose={this.state.showprompt}
        />
        <Button id="trigger-prompt" text="Trigger Prompt" onClick={this.handleOpenPrompt} />
      </div>
    );
  }
}

export default DefaultPrompt;
