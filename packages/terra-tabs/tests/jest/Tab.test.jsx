import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';
import Tab from '../../src/common-tabs/_Tab';

describe('Tab', () => {
  it('should render a common tab as disabled when indicated', () => {
    const wrapper = shallowWithIntl(<Tab label="Label" isDisabled variant="framework" />).dive();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a common tab with custom props', () => {
    const wrapper = shallowWithIntl(<Tab label="Default" className="customClass" variant="framework" />).dive();
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
