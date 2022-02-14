import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountWithIntl } from 'terra-enzyme-intl';
import RollupPill from '../../src/private/_RollupPill';

describe('Rollup Pill', () => {
  it('should render rollup pill with label show more', () => {
    const wrapper = mountWithIntl(<RollupPill isCollapsed rollupCount={4} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render rollup pill with label show less when isCollapsed is false', () => {
    const wrapper = mountWithIntl(<RollupPill isCollapsed={false} rollupCount={3} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render rollup pill with label show less when isCollapsed is true and rollupCount is 0', () => {
    const wrapper = mountWithIntl(<RollupPill isCollapsed rollupCount={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
