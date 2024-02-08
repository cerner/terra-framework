import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import RollupPill from '../../src/subcomponents/_RollupPill';

describe('Rollup Pill', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

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
