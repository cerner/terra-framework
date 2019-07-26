import React from 'react';
import ToggleCount from '../../../src/header/_ToggleCount';

describe('ToggleCount', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <ToggleCount />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <ToggleCount
        value={1}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
