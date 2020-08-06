import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { mountWithIntl } from 'terra-enzyme-intl';
import Tabs from '../../../src/tabs/_Tabs';

describe('Tabs', () => {
  it('should render default element', () => {
    const mountComponent = mountWithIntl(
      <Tabs />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const mountComponent = mountWithIntl(
      <Tabs
        activeTabKey="my-test-key"
        navigationItems={[{ text: 'test-text', key: 'my-test-key' }]}
        notifications={{ myComponent: 3 }}
        onTabSelect={jest.fn()}
        navigationRenderFunction={jest.fn()}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
  });

  it('should render with hasCount set to true when notifications are set to 0', () => {
    const mountComponent = mountWithIntl(
      <Tabs
        activeTabKey="notification-test"
        navigationItems={[{ text: 'sample-text', key: 'notification-test' }]}
        notifications={{ myComponent: 0 }}
        navigationRenderFunction={jest.fn()}
      />,
    );

    expect(mountComponent).toMatchSnapshot();
  });
});
