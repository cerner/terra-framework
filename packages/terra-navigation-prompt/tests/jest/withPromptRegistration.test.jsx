import React from 'react';
import withPromptRegistration from '../../src/_withPromptRegistration';

describe('withPromptRegistration', () => {
  // Snapshot Tests
  it('should wrap and render the provided component', () => {
    const TestComponent = () => <div>I am a test component</div>;
    TestComponent.displayName = 'TestComponent';

    const WrappedComponent = withPromptRegistration(TestComponent);

    const wrapper = mount(<WrappedComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
