import React from 'react';
import Button from 'terra-button';

import Prompt from '../../src/Prompt';

const CompletePrompt = () => (
  <Prompt title="Hello" message="Welcome to Prompt">
    <Button text="Ok" />
  </Prompt>
);

export default CompletePrompt;
