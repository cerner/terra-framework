import React from 'react';
import Slide from '../../src/Slide';

it('should render a default Slide', () => {
  const wrapper = enzyme.shallow((
    <Slide>
      <div>Slide Content</div>
    </Slide>
  ));
  expect(wrapper).toMatchSnapshot();
});

it('should render a hidden Slide', () => {
  const wrapper = enzyme.shallow((
    <Slide isHidden>
      <div>Slide Content</div>
    </Slide>
  ));
  expect(wrapper.prop('aria-hidden')).toBe(true);
  expect(wrapper).toMatchSnapshot();
});

it('should render a nested Slide', () => {
  const wrapper = enzyme.shallow((
    <Slide isNested>
      <div>Slide Content</div>
    </Slide>
  ));
  expect(wrapper.find('VisuallyHiddenText').prop('aria-hidden')).toBe(false);
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });
  const wrapper = enzyme.shallow(
    <Slide>
      <div>Slide Content</div>
    </Slide>,
  );
  expect(wrapper).toMatchSnapshot();
});
