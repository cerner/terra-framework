import React from 'react';
import CompletePrompt from '../../examples/test-examples/CompletePrompt.example';
import CompletePromptWithLongMessage from '../../examples/test-examples/CompletePromptWithLongMessage.example';

it('should shallow a complete prompt', () => {
  const modal = shallow(<CompletePrompt />);
  expect(modal).toMatchSnapshot();
});

it('should mount an complete prompt', () => {
  const modal = mount(<CompletePrompt />);
  expect(modal).toMatchSnapshot();
});

it('should shallow a complete prompt with long message', () => {
  const modal = shallow(<CompletePromptWithLongMessage />);
  expect(modal).toMatchSnapshot();
});

it('should mount an complete prompt with long message', () => {
  const modal = mount(<CompletePromptWithLongMessage />);
  expect(modal).toMatchSnapshot();
});
