import React from 'react';
import Button from 'terra-button';

import Prompt from '../../lib/Prompt';

const buttons = [<Button text="Ok" />];
const CompletePrompt = () => (
  <div>
    <Prompt
      title="Prompt"
      message="This is a prompt"
      actions={buttons}
    />
  </div>
);

export default CompletePrompt;
