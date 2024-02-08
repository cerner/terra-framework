import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import FilterPills from '../../src/FilterPills';
import Pill from '../../src/subcomponents/_Pill';

describe('Rollup Pill', () => {
  let mockSpyUuid;
  beforeAll(() => {
    mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
  });

  afterAll(() => {
    mockSpyUuid.mockRestore();
  });

  it('should render pill with the role list when rendered with pills', () => {
    const wrapper = shallowWithIntl(
      <FilterPills
        ariaLabel="Filter Pills with labels"
      >
        <Pill
          label="asthma"
          labelCategory="Allergies"
          id="1234"
          key="1234"
        />
      </FilterPills>,
    ).dive();
    const groupDiv = wrapper.find('div.pills-group');
    expect(groupDiv.prop('role')).toEqual('list');
    expect(wrapper).toMatchSnapshot();
  });

  it('should render pill with the role group when rendered empty', () => {
    const wrapper = shallowWithIntl(<FilterPills
      ariaLabel="Empty Filter Pills"
    />).dive();
    const groupDiv = wrapper.find('div.pills-group');
    expect(groupDiv.prop('role')).toEqual('group');
    expect(wrapper).toMatchSnapshot();
  });
});
