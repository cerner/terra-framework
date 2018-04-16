import React from 'react';
import Button from 'terra-button';

import Prompt from '../../lib/Prompt';

const prompt = () => (<Prompt title={'prompt'} message={'Text message'} actions={[<Button text="Ok" />]} />);

export default prompt;
