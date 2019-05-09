import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Tabs from '../../../src/tabs/_Tabs';

describe('Tabs', () => {
  it('should render default element', () => {
    const shallowComponent = shallowWithIntl(
      <Tabs />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });

  it('should render prop data', () => {
    const shallowComponent = shallowWithIntl(
      <Tabs
        activeTabKey="my-test-key"
        navigationItems={[{ text: 'test-text', key: 'my-test-key' }]}
        notifications={{ myComponent: 3 }}
        onTabSelect={jest.fn()}
        navigationRenderFunction={jest.fn()}
      />,
    );

    expect(shallowComponent).toMatchSnapshot();
  });
});
