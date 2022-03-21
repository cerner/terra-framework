import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountWithIntl } from 'terra-enzyme-intl';
import RollupPill from '../../src/subcomponents/_RollupPill';

jest.mock('uuid/v4', () => () => '00000000-0000-0000-0000-000000000000');

describe('Rollup Pill', () => {
  it('should render rollup pill with the label "4 more"', () => {
    const wrapper = mountWithIntl(<RollupPill isCollapsed rollupCount={4} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render rollup pill with the label "show less" when isCollapsed is false', () => {
    const wrapper = mountWithIntl(<RollupPill isCollapsed={false} rollupCount={3} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render rollup pill with the label "show less" when isCollapsed is true and rollupCount is 0', () => {
    const wrapper = mountWithIntl(<RollupPill isCollapsed rollupCount={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
