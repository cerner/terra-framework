import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl } from 'terra-enzyme-intl';

import DateInput from '../../src/DateInput';

describe('DateInput', () => {
  const defaultRender = <DateInput name="date-input" />;

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallowWithIntl(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  // it('should use the default value when no value is given', () => {
  //   const wrapper = shallow(defaultRender);
  //   expect(wrapper.find('.date-input').text()).toEqual('default');
  // });

  // Structure Tests
  // it('should have the class date-input', () => {
  //   const wrapper = shallow(defaultRender);
  //   expect(wrapper.prop('className')).toContain('date-input');
  // });
});
