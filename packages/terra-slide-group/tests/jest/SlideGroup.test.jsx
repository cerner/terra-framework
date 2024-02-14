import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import SlideGroup from '../../src/SlideGroup';

const slideGroup = (
  <SlideGroup
    items={[
      <div key="1">First</div>,
      <div key="2">Second</div>,
      <div key="3">Third</div>,
    ]}
  />
);

it('should render a default SlideGroup', () => {
  const wrapper = enzyme.shallow(slideGroup);

  const cssTransitions = wrapper.find('CSSTransition');
  expect(cssTransitions.at(0).key()).toBe('1');
  expect(cssTransitions.at(1).key()).toBe('2');
  expect(cssTransitions.at(2).key()).toBe('3');

  expect(cssTransitions.at(0).prop('enter')).toBe(false);
  expect(cssTransitions.at(1).prop('enter')).toBe(false);
  expect(cssTransitions.at(2).prop('enter')).toBe(false);

  expect(cssTransitions.at(0).prop('exit')).toBe(false);
  expect(cssTransitions.at(1).prop('exit')).toBe(false);
  expect(cssTransitions.at(2).prop('exit')).toBe(false);

  expect(cssTransitions.at(0).find('Slide').prop('isHidden')).toBe(true);
  expect(cssTransitions.at(1).find('Slide').prop('isHidden')).toBe(true);
  expect(cssTransitions.at(2).find('Slide').prop('isHidden')).toBe(false);

  expect(cssTransitions.at(0).find('Slide').prop('isNested')).toBe(false);
  expect(cssTransitions.at(1).find('Slide').prop('isNested')).toBe(true);
  expect(cssTransitions.at(2).find('Slide').prop('isNested')).toBe(true);

  expect(wrapper).toMatchSnapshot();
});

it('should render a SlideGroup with animation enabled', () => {
  const wrapper = enzyme.shallow(React.cloneElement(slideGroup, { isAnimated: true }));

  const cssTransitions = wrapper.find('CSSTransition');
  expect(cssTransitions.at(0).prop('enter')).toBe(true);
  expect(cssTransitions.at(1).prop('enter')).toBe(true);
  expect(cssTransitions.at(2).prop('enter')).toBe(true);

  expect(cssTransitions.at(0).prop('exit')).toBe(true);
  expect(cssTransitions.at(1).prop('exit')).toBe(true);
  expect(cssTransitions.at(2).prop('exit')).toBe(true);

  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const tabs = enzyme.mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      {slideGroup}
    </ThemeContextProvider>,
  );
  expect(tabs).toMatchSnapshot();
});
