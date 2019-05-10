import React from 'react';
import ApplicationNavigation from '../../src/ApplicationNavigation';

describe('Header', () => {
  it('should render default element', () => {
    const shallowComponent = shallow(
      <ApplicationNavigation />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with prop data at large breakpoint', () => {
    const shallowComponent = shallow(
      <ApplicationNavigation
        activeBreakpoint="large"
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
        extensionItems={[{ text: 'test-text-1', key: 'my-test-key-1', icon: <span>my icon</span> }]}
        utilityItems={[{ text: 'test-text-2', key: 'my-test-key-2', icon: <span>my icon</span> }]}
        notifications={{ 'my-test-key-1': 3 }}
        navigationRenderFunction={jest.fn()}
        onSelectNavigationItem={jest.fn()}
        onSelectExtensionItem={jest.fn()}
        onSelectUtilityItem={jest.fn()}
        onSelectSettings={jest.fn()}
        onSelectHelp={jest.fn()}
        onSelectLogout={jest.fn()}
      >
        <div>test child content</div>
      </ApplicationNavigation>,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render with prop data at medium breakpoint', () => {
    const shallowComponent = shallow(
      <ApplicationNavigation
        activeBreakpoint="medium"
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
        extensionItems={[{ text: 'test-text-1', key: 'my-test-key-1', icon: <span>my icon</span> }]}
        utilityItems={[{ text: 'test-text-2', key: 'my-test-key-2', icon: <span>my icon</span> }]}
        notifications={{ 'my-test-key-1': 3 }}
        navigationRenderFunction={jest.fn()}
        onSelectNavigationItem={jest.fn()}
        onSelectExtensionItem={jest.fn()}
        onSelectUtilityItem={jest.fn()}
        onSelectSettings={jest.fn()}
        onSelectHelp={jest.fn()}
        onSelectLogout={jest.fn()}
      >
        <div>test child content</div>
      </ApplicationNavigation>,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
