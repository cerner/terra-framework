import React from 'react';
import PopupCount from '../../../src/common/_PopupCount';

describe('PopupCount', () => {
  it('should render default element', () => {
    const shallowComponent = enzyme.shallow(
      <PopupCount />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = enzyme.shallow(
      <PopupCount
        value={1}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
