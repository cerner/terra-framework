import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import ContentLayoutAsList from '../../src/_ContentLayoutAsList';

describe('Content Layout As List', () => {
  it('shallow renders layout with no items', () => {
    const list = shallowWithIntl(
      <ContentLayoutAsList items={[]} />,
    );

    expect(list).toMatchSnapshot();
  });

  it('shallow renders layout with items', () => {
    const list = shallowWithIntl(
      <ContentLayoutAsList items={['item 1', 'item2']} />,
    );

    expect(list).toMatchSnapshot();
  });
});
