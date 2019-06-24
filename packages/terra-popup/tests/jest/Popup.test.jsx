import React from 'react';
import PopupDefaultExample from './PopupDefaultExample';

// Snapshot Tests
it('should shallow a default component', () => {
  const popup = shallow(<PopupDefaultExample />);
  expect(popup).toMatchSnapshot();
});

it('should shallow render a component with push attachment behavior', () => {
  const popup = shallow(<PopupDefaultExample attachmentBehavior="push" />);
  expect(popup).toMatchSnapshot();
});

it('should renders with custom arrow class name', () => {
  const popup = shallow(<PopupDefaultExample classNameArrow="terra-test-class-arrow" />);
  expect(popup).toMatchSnapshot();
});

it('should renders with custom content class name', () => {
  const popup = shallow(<PopupDefaultExample classNameContent="terra-test-class-content" />);
  expect(popup).toMatchSnapshot();
});

it('should renders with custom overlay class name', () => {
  const popup = shallow(<PopupDefaultExample classNameOverlay="terra-test-class-overlay" />);
  expect(popup).toMatchSnapshot();
});
