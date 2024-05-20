import React from 'react';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
import PopupDefaultExample from './PopupDefaultExample';

// Snapshot Tests
it('should shallow a default component', () => {
  const popup = enzyme.shallow(<PopupDefaultExample />);
  expect(popup).toMatchSnapshot();
});

it('should shallow render a component with push attachment behavior', () => {
  const popup = enzyme.shallow(<PopupDefaultExample attachmentBehavior="push" />);
  expect(popup).toMatchSnapshot();
});

it('should renders with custom arrow class name', () => {
  const popup = enzyme.shallow(<PopupDefaultExample classNameArrow="terra-test-class-arrow" />);
  expect(popup).toMatchSnapshot();
});

it('should renders with custom content class name', () => {
  const popup = enzyme.shallow(<PopupDefaultExample classNameContent="terra-test-class-content" />);
  expect(popup).toMatchSnapshot();
});

it('should renders with custom overlay class name', () => {
  const popup = enzyme.shallow(<PopupDefaultExample classNameOverlay="terra-test-class-overlay" />);
  expect(popup).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  const result = enzymeIntl.mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <PopupDefaultExample classNameArrow="terra-test-class-arrow" />
    </ThemeContextProvider>,
  );
  expect(result).toMatchSnapshot();
});
