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
