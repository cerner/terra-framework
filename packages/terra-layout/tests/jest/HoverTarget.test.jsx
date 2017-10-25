import React from 'react';

import HoverTarget from '../../src/_HoverTarget';

describe('HoverTarget', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <HoverTarget />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided hover props', () => {
    const result = shallow((
      <HoverTarget
        hoverIsEnabled
        onClick={() => {}}
        onHoverOff={() => {}}
        onHoverOn={() => {}}
        text="MENU TEXT"
      >
        <div>Child</div>
      </HoverTarget>
    ));

    expect(result).toMatchSnapshot();
  });

  it('should render with provided open props', () => {
    const result = shallow((
      <HoverTarget
        hoverIsEnabled
        isOpen
        onClick={() => {}}
        onHoverOff={() => {}}
        onHoverOn={() => {}}
        text="MENU TEXT"
      >
        <div>Child</div>
      </HoverTarget>
    ));

    expect(result).toMatchSnapshot();
  });
});
