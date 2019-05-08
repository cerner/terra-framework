import React from 'react';
import Extensions from '../../../src/extensions/_Extensions';

describe('ExtensionCount', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <Extensions />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <Extensions
        activeBreakpoint="small"
        extensionItems={[{ text: 'test-text', icon: <span>my icon</span>, key: 'my-test-key' }]}
        notifications={{ myComponent: 3 }}
        onSelect={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
