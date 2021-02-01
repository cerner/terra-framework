import React from 'react';
import { withDisclosureManager } from '../../src/DisclosureManager';

describe('withDisclosureManager', () => {
  // Snapshot Tests
  it('should render using the provided render function', () => {
    const TestComponent = withDisclosureManager(() => <div>I am a test component</div>);

    const wrapper = mount(<TestComponent />);
    expect(wrapper).toMatchSnapshot();
  });
});
