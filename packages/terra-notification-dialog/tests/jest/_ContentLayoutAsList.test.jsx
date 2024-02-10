import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import ContentLayoutAsList from '../../src/_ContentLayoutAsList';

describe('Content Layout As List', () => {
  it('shallow renders layout with no items', () => {
    const list = enzymeIntl.shallowWithIntl(
      <ContentLayoutAsList items={[]} />,
    );

    expect(list).toMatchSnapshot();
  });

  it('shallow renders layout with items', () => {
    const list = enzymeIntl.shallowWithIntl(
      <ContentLayoutAsList items={['item 1', 'item2']} />,
    );

    expect(list).toMatchSnapshot();
  });
});
