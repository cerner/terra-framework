import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import AbstractModalExample from './AbstractModalExample';

it('should shallow an open modal', () => {
  const modal = shallowWithIntl(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal', () => {
  const modal = mountWithIntl(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 6000 z-index', () => {
  const modal = shallowWithIntl(<AbstractModalExample zIndex="6000" />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 7000 z-index', () => {
  const modal = shallowWithIntl(<AbstractModalExample zIndex="7000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal 7000 z-index', () => {
  const modal = mountWithIntl(<AbstractModalExample zIndex="7000" />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 8000 z-index', () => {
  const modal = shallowWithIntl(<AbstractModalExample zIndex="8000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal 8000 z-index', () => {
  const modal = mountWithIntl(<AbstractModalExample zIndex="8000" />);
  expect(modal).toMatchSnapshot();
});

it('should shallow an open modal 9000 z-index', () => {
  const modal = shallowWithIntl(<AbstractModalExample zIndex="9000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal 9000 z-index', () => {
  const modal = mountWithIntl(<AbstractModalExample zIndex="9000" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal set to fullscreen', () => {
  const modal = mountWithIntl(<AbstractModalExample isFullscreen />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal with overlay class name', () => {
  const modal = mountWithIntl(<AbstractModalExample classNameOverlay="overlay-custom-class" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal with modal class name', () => {
  const modal = mountWithIntl(<AbstractModalExample classNameModal="modal-custom-class" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal with role', () => {
  const modal = mountWithIntl(<AbstractModalExample role="alertdialog" />);
  expect(modal).toMatchSnapshot();
});

it('should mount an open modal with custom props', () => {
  const modal = mountWithIntl(<AbstractModalExample id="custom-props" />);
  expect(modal).toMatchSnapshot();
});

it('should render the correct snapshot for iPhones', () => {
  Object.defineProperty(global.navigator, 'platform', { value: 'iPhone', writable: 'true' });

  const modal = mountWithIntl(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});

it('should render the correct snapshot for iPads', () => {
  Object.defineProperty(global.navigator, 'platform', { value: 'iPad', writable: 'true' });

  const modal = mountWithIntl(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});

it('should render the correct snapshot for iPods', () => {
  Object.defineProperty(global.navigator, 'platform', { value: 'iPod', writable: 'true' });

  const modal = mountWithIntl(<AbstractModalExample />);
  expect(modal).toMatchSnapshot();
  global.navigator.platform = null;
});
