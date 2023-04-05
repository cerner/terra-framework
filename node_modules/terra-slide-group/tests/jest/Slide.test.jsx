import React from 'react';
import Slide from '../../src/Slide';

it('should render a default Slide', () => {
  const wrapper = shallow((
    <Slide>
      <div>Slide Content</div>
    </Slide>
  ));
  expect(wrapper).toMatchSnapshot();
});

it('should render a hidden Slide', () => {
  const wrapper = shallow((
    <Slide isHidden>
      <div>Slide Content</div>
    </Slide>
  ));
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });
  const wrapper = shallow(
    <Slide>
      <div>Slide Content</div>
    </Slide>,
  );
  expect(wrapper).toMatchSnapshot();
});
