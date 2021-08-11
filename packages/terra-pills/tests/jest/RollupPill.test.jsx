import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { mountWithIntl } from 'terra-enzyme-intl';
import RollupPill from '../../src/private/_RollupPill';

describe('Rollup Pill', () => {
  it('should render with rollup count 4', () => {
    const wrapper = mountWithIntl(<RollupPill isSingleLine rollupCount={4} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render when roll up count is 0', () => {
    const wrapper = mountWithIntl(<RollupPill isSingleLine rollupCount={0} />);
    expect(wrapper).toMatchSnapshot();
  });
});
