import React from 'react';
import AbstractModalExample from './AbstractModalExample';

it('should shallow an open modal', () => {
  const modal = enzymeIntl.shallowWithIntl(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 6000 z-index', () => {
  const modal = enzymeIntl.shallowWithIntl(<AbstractModalExample zIndex="6000" />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 7000 z-index', () => {
  const modal = enzymeIntl.shallowWithIntl(<AbstractModalExample zIndex="7000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal 7000 z-index', () => {
  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample zIndex="7000" />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 8000 z-index', () => {
  const modal = enzymeIntl.shallowWithIntl(<AbstractModalExample zIndex="8000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal 8000 z-index', () => {
  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample zIndex="8000" />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 9000 z-index', () => {
  const modal = enzymeIntl.shallowWithIntl(<AbstractModalExample zIndex="9000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal 9000 z-index', () => {
  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample zIndex="9000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal set to fullscreen', () => {
  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample isFullscreen />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal with overlay class name', () => {
  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample classNameOverlay="overlay-custom-class" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal with modal class name', () => {
  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample classNameModal="modal-custom-class" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal with role', () => {
  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample role="alertdialog" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal with custom props', () => {
  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample id="custom-props" />);
  expect(modal).toMatchSnapshot();
});

it('should render the correct snapshot for iPhones', () => {
  Object.defineProperty(global.navigator, 'platform', { value: 'iPhone', writable: 'true' });

  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});

it('should render the correct snapshot for iPads', () => {
  Object.defineProperty(global.navigator, 'platform', { value: 'iPad', writable: 'true' });

  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});

it('should render the correct snapshot for iPods', () => {
  Object.defineProperty(global.navigator, 'platform', { value: 'iPod', writable: 'true' });

  const modal = enzymeIntl.mountWithIntl(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });
  const wrapper = enzymeIntl.mountWithIntl(<AbstractModalExample />);
  expect(wrapper).toMatchSnapshot();
});
