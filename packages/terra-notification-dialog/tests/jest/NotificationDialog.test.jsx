import React from 'react';
import CompleteNotificationDialog from '../../examples/test-examples/CompleteNotificationDialog.example';
import CompleteNotificationDialogWithLongMessage from '../../examples/test-examples/CompleteNotificationDialogWithLongMessage.example';
import NoVariantNotificationDialog from '../../examples/test-examples/NoVariantNotificationDialog.example';

it('should shallow a complete notification-dialog', () => {
  const modal = shallow(<CompleteNotificationDialog />);
  expect(modal).toMatchSnapshot();
});

it('should mount a complete notification-dialog', () => {
  const modal = mount(<CompleteNotificationDialog />);
  expect(modal).toMatchSnapshot();
});

it('should shallow a complete notification-dialog with long message', () => {
  const modal = shallow(<CompleteNotificationDialogWithLongMessage />);
  expect(modal).toMatchSnapshot();
});

it('should mount a complete notification-dialog with long message', () => {
  const modal = mount(<CompleteNotificationDialogWithLongMessage />);
  expect(modal).toMatchSnapshot();
});

it('should shallow a notification-dialog with no variant', () => {
  const modal = shallow(<NoVariantNotificationDialog />);
  expect(modal).toMatchSnapshot();
});

it('should mount a notification-dialog with no variant', () => {
  const modal = mount(<NoVariantNotificationDialog />);
  expect(modal).toMatchSnapshot();
});
