import React from 'react';
import TabCount from '../../../src/tabs/_TabCount';

describe('TabCount', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <TabCount />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <TabCount
        value={1}
        isRollup
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
