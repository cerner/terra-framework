import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mockIntl } from 'terra-enzyme-intl';
import DrawerMenu from '../../../src/drawer-menu/_DrawerMenu';

describe('DrawerMenu', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <DrawerMenu.WrappedComponent intl={mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const shallowComponent = shallow(
      <DrawerMenu.WrappedComponent
        intl={mockIntl}
        titleConfig={{
          title: 'test-title',
        }}
        activeNavigationItemKey="test-text"
        hero={<div>my test hero</div>}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        navigationItems={[{ text: 'test-text', key: 'my-test-key' }]}
        utilityItems={[{ text: 'test-text-2', key: 'my-test-key-2', icon: <span>my icon</span> }]}
        notifications={{ 'my-test-key-1': 3 }}
        onSelectNavigationItem={jest.fn()}
        onSelectUtilityItem={jest.fn()}
        onSelectSettings={jest.fn()}
        onSelectHelp={jest.fn()}
        onSelectLogout={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
