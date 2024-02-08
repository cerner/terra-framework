import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import DrawerMenu from '../../../src/drawer-menu/_DrawerMenu';

describe('DrawerMenu', () => {
  it('should render default element', () => {
    const shallowComponent = enzyme.shallow(
      <DrawerMenu.WrappedComponent intl={enzyme.mockIntl} />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const shallowComponent = enzyme.shallow(
      <DrawerMenu.WrappedComponent
        intl={enzyme.mockIntl}
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

  it('should render with navigation and utility item ids', () => {
    const shallowComponent = enzyme.shallow(
      <DrawerMenu.WrappedComponent
        intl={enzyme.mockIntl}
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
        id="test-application"
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

  it('should render Help utility item when it is the only utility item present', () => {
    const shallowComponent = enzyme.shallow(
      <DrawerMenu.WrappedComponent
        intl={enzyme.mockIntl}
        titleConfig={{
          title: 'test-title',
        }}
        activeNavigationItemKey="test-text"
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        notifications={{}}
        navigationItems={[{ text: 'test-text', key: 'my-test-key' }]}
        onSelectNavigationItem={jest.fn()}
        onSelectHelp={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
