import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
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
