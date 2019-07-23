import React from 'react';
import PopupCount from '../../../src/common/_PopupCount';

describe('PopupCount', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <PopupCount />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallow(
      <PopupCount
        value={1}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
