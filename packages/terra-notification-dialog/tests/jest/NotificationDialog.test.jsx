import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';
import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';
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
  const clickConfirm = () => {
    alert('You clicked confirm'); // eslint-disable-line no-alert
  };
  const modal = mountWithIntl(
    <ThemeContextProvider theme={{ className: 'orion-fusion-theme' }}>
      <NotificationDialog
        variant={NotificationDialogVariants.ALERT}
        isOpen
        title="Make sure that the title relates directly to the choices."
        startMessage="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
        acceptAction={{
          text: 'Confirm',
          // eslint-disable-next-line no-console
          onClick: clickConfirm,
        }}
        rejectAction={{
          text: 'Close',
          // eslint-disable-next-line no-console
          onClick: clickConfirm,
        }}
        buttonOrder="acceptFirst"
        emphasizedAction="accept"
      />
    </ThemeContextProvider>,
  );
  expect(modal).toMatchSnapshot();
});
