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
  const wrapper = shallow(slideGroup);
  expect(wrapper).toMatchSnapshot();
});

it('should render a SlideGroup with animation enabled', () => {
  const wrapper = shallow(React.cloneElement(slideGroup, { isAnimated: true }));
  expect(wrapper).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const tabs = mount(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      {slideGroup}
    </ThemeContextProvider>,
  );
  expect(tabs).toMatchSnapshot();
});
