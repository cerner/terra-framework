import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Tab from '../../src/common-tabs/_Tab';

let mockSpyUuid;

beforeAll(() => {
  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');
});

afterAll(() => {
  mockSpyUuid.mockRestore();
});

describe('Tab', () => {
  it('should render a common tab as disabled when indicated', () => {
    const wrapper = shallowWithIntl(<Tab label="Label" isDisabled variant="framework" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a common tab with custom props', () => {
    const wrapper = shallowWithIntl(<Tab label="Default" className="customClass" variant="framework" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a closable tab', () => {
    const wrapper = shallowWithIntl(<Tab label="Default" className="customClass" variant="framework" isClosable />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });
    const wrapper = shallowWithIntl(<Tab label="Default" className="customClass" variant="framework" />).dive();
    expect(wrapper).toMatchSnapshot();
  });
});
