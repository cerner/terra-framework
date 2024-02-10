import React from 'react';
import DrawerMenuTitle from '../../../src/drawer-menu/_DrawerMenuTitle';

describe('DrawerMenuTitle', () => {
  it('should render default element', () => {
    const shallowComponent = enzyme.shallow(
      <DrawerMenuTitle
        titleConfig={{
          title: 'test-title',
        }}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
