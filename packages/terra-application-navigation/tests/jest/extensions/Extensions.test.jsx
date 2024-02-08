import React from 'react';
import Extensions from '../../../src/extensions/_Extensions';

describe('Extensions', () => {
  it('should render default element', () => {
    const shallowComponent = enzyme.shallow(
      <Extensions.WrappedComponent intl={enzyme.mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = enzyme.shallow(
      <Extensions.WrappedComponent
        intl={enzyme.mockIntl}
        activeBreakpoint="small"
        extensionItems={[{ text: 'test-text', icon: <span>my icon</span>, key: 'my-test-key' }]}
        notifications={{ myComponent: 3 }}
        onSelect={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
