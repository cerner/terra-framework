import React from 'react';

import MenuHeader from '../../src/_MenuHeader';

describe('MenuHeader', () => {
  it('should render without optional props', () => {
    const result = shallow((
      <MenuHeader />
    ));
    expect(result).toMatchSnapshot();
  });

  it('should render with provided props', () => {
    const result = shallow((
      <MenuHeader
        text="TEST TEXT"
        togglePin={() => {}}
        isPinned
      >
        <div>Child</div>
      </MenuHeader>
    ));

    expect(result).toMatchSnapshot();
  });

  it('should render when not pinned', () => {
    const result = shallow((
      <MenuHeader
        text="TEST TEXT"
        togglePin={() => {}}
      >
        <div>Child</div>
      </MenuHeader>
    ));

    expect(result).toMatchSnapshot();
  });
});
