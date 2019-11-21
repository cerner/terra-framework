import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import CompactHeader from '../../../src/header/_CompactHeader';

describe('CompactHeader', () => {
  it('should render default element', () => {
    const mountComponent = mountWithIntl(
      <CompactHeader />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render title element', () => {
    const mountComponent = mountWithIntl(
      <CompactHeader
        titleConfig={{
          title: 'test-title',
          element: <img alt="test" id="test-image" />,
        }}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with function callbacks', () => {
    const mountComponent = mountWithIntl(
      <CompactHeader
        titleConfig={{
          title: 'test-title',
        }}
        userConfig={{
          name: 'user-name',
          detail: 'user-detail',
          initials: 'user-initials',
          imageSrc: 'user-src',
        }}
        navigationItems={[{ text: 'test-text', key: 'my-test-key' }]}
        extensionItems={[{ text: 'test-text-1', key: 'my-test-key-1', icon: <span>my icon</span> }]}
        notifications={{ 'my-test-key-1': 3 }}
        onSelectExtensionItem={jest.fn()}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with skip callback', () => {
    const mockCallBack = jest.fn();

    const mountComponent = mountWithIntl(
      <CompactHeader
        onSelectSkipToContent={mockCallBack}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
    mountComponent.find('.skip-content-button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it('should render with menu callback', () => {
    const mockCallBack = jest.fn();

    const mountComponent = mountWithIntl(
      <CompactHeader
        titleConfig={{
          title: 'test-title',
        }}
        onSelectMenuButton={mockCallBack}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
    mountComponent.find('.menu-button').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
