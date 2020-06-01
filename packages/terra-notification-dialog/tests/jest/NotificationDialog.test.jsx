import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import NotificationDialog, { NotificationDialogVariants } from 'terra-notification-dialog';
import CompleteNotificationDialog from '../../src/terra-dev-site/test/notification-dialog/CompleteNotificationDialog.test';
import CompleteNotificationDialogWithLongMessage from '../../src/terra-dev-site/test/notification-dialog/CompleteNotificationDialogWithLongMessage.test';
import NoVariantNotificationDialog from '../../src/terra-dev-site/test/notification-dialog/NoVariantNotificationDialog.test';

it('should shallow a complete notification-dialog', () => {
  const modal = shallowWithIntl(<CompleteNotificationDialog />);
  expect(modal).toMatchSnapshot();
});

it('should mount a complete notification-dialog', () => {
  const modal = mountWithIntl(<CompleteNotificationDialog />);
  expect(modal).toMatchSnapshot();
});

it('should shallow a complete notification-dialog with long message', () => {
  const modal = shallowWithIntl(<CompleteNotificationDialogWithLongMessage />);
  expect(modal).toMatchSnapshot();
});

it('should mount a complete notification-dialog with long message', () => {
  const modal = mountWithIntl(<CompleteNotificationDialogWithLongMessage />);
  expect(modal).toMatchSnapshot();
});

it('should shallow a notification-dialog with no variant', () => {
  const modal = shallowWithIntl(<NoVariantNotificationDialog />);
  expect(modal).toMatchSnapshot();
});

it('should mount a notification-dialog with no variant', () => {
  const modal = mountWithIntl(<NoVariantNotificationDialog />);
  expect(modal).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });
  const wrapper = shallowWithIntl(<NotificationDialog
    variant={NotificationDialogVariants.ALERT}
    isOpen
    title="Make sure that the title relates directly to the choices."
    startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
    acceptAction={{
      text: 'Confirm',
      onClick: jest.fn(),
    }}
    rejectAction={{
      text: 'Close',
      onClick: jest.fn(),
    }}
    buttonOrder="acceptFirst"
    emphasizedAction="accept"
  />);
  expect(wrapper).toMatchSnapshot();
});
