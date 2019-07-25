import React from 'react';
import ExtensionCount from '../../../src/extensions/_ExtensionCount';

describe('ExtensionCount', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <ExtensionCount />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <ExtensionCount
        value={1}
        isRollup
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
