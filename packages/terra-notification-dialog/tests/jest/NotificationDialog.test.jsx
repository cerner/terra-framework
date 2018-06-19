import React from 'react';
import intlContexts from './intl-context-setup';
import CompleteNotificationDialog from '../../src/terra-dev-site/test/notification-dialog/CompleteNotificationDialog.test';
import CompleteNotificationDialogWithLongMessage from '../../src/terra-dev-site/test/notification-dialog/CompleteNotificationDialogWithLongMessage.test';
import NoVariantNotificationDialog from '../../src/terra-dev-site/test/notification-dialog/NoVariantNotificationDialog.test';

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
