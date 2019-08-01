import React from 'react';
import DrawerMenuUser from '../../../src/drawer-menu/_DrawerMenuUser';

describe('DrawerMenuUser', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <DrawerMenuUser
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with small variant', () => {
    const shallowComponent = shallow(
      <DrawerMenuUser
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        variant="small"
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with large variant', () => {
    const shallowComponent = shallow(
      <DrawerMenuUser
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        variant="large"
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
