import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import Header from '../../../src/header/_Header';

describe('Header', () => {
  it('should render default element', () => {
    const mountComponent = mountWithIntl(
      <Header />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const mountComponent = mountWithIntl(
      <Header
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
      />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with skip callback', () => {
    const mockCallBack = jest.fn();

    const mountComponent = mountWithIntl(
      <Header
        onSelectSkipToContent={mockCallBack}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
    mountComponent.find('.skip-content-button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
