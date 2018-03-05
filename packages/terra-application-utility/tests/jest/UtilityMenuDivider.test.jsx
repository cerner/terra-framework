import React from 'react';
import Divider from '../../src/utility/_UtilityMenuDivider';

describe('Divider', () => {
  const defaultRender = <Divider />;

  it('should render a default utility menu divider', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should pass in a custom prop', () => {
    const wrapper = shallow(<Divider id="testDivider" />);
    expect(wrapper).toMatchSnapshot();
  });
});
