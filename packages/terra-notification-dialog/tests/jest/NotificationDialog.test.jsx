import React from 'react';
import intlContexts from './intl-context-setup';
import CompleteNotificationDialog from '../../examples/test-examples/CompleteNotificationDialog.example';
import CompleteNotificationDialogWithLongMessage from '../../examples/test-examples/CompleteNotificationDialogWithLongMessage.example';
import NoVariantNotificationDialog from '../../examples/test-examples/NoVariantNotificationDialog.example';

it('should shallow a complete notification-dialog', () => {
  const modal = shallow(<CompleteNotificationDialog />, intlContexts.shallowContext);
  expect(modal).toMatchSnapshot();
});

it('should mount a complete notification-dialog', () => {
  const modal = mount(<CompleteNotificationDialog />, intlContexts.mountContext);
  expect(modal).toMatchSnapshot();
});

it('should shallow a complete notification-dialog with long message', () => {
  const modal = shallow(<CompleteNotificationDialogWithLongMessage />, intlContexts.shallowContext);
  expect(modal).toMatchSnapshot();
});

it('should mount a complete notification-dialog with long message', () => {
  const modal = mount(<CompleteNotificationDialogWithLongMessage />, intlContexts.mountContext);
  expect(modal).toMatchSnapshot();
});

it('should shallow a notification-dialog with no variant', () => {
  const modal = shallow(<NoVariantNotificationDialog />, intlContexts.shallowContext);
  expect(modal).toMatchSnapshot();
});

it('should mount a notification-dialog with no variant', () => {
  const modal = mount(<NoVariantNotificationDialog />, intlContexts.mountContext);
  expect(modal).toMatchSnapshot();
});
