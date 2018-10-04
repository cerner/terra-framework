# Terra NotificationDialog

`terra-notification-dialog` is a notification dialog component built over the `terra-abstract-modal`. It has the highest z-index of 9001. It is a common component to be used for confirmation/acceptance criteria style dialogs. 

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-notification-dialog`

## Usage

```jsx
import React from 'react';
import Button from 'terra-button';
import NotificationDialog, { NotificationDialogVariants } from '../../src/NotificationDialog';

const clickOK = () => {
  alert('You clicked OK');  // eslint-disable-line no-alert
};

class CompleteNotificationDialog extends React.Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ isOpen: true });
  }

  handleCloseModal() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div>
        <NotificationDialog
          variant={NotificationDialogVariants.ALERT}
          isOpen={this.state.isOpen}
          onRequestClose={this.handleCloseModal}
          title="Make sure that the title relates directly to the choices."
          message="The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim."
          primaryAction={{
            text: 'Ok',
            onClick: clickOK,
          }}
          secondaryAction={{
            text: 'Close',
            onClick: this.handleCloseModal,
          }}
        />
        <Button text="Trigger NotificationDialog" onClick={this.handleOpenModal} />
      </div>
    );
  }
}

export default CompleteNotificationDialog;
```

## ConfirmNotificationDialog

Some workflows may require an synchronously-presented NotificationDialog similar to the native `alert()` and `confirm()` dialogs supported natively by browsers. Achieving this using the NotificationDialog's standard React lifecycle can be difficult, especially if the NotificationDialog has been integrated into a Promise chain. The ConfirmNotificationDialog can be used to replicate tha presentation style while utilizing the look and feel of the standard NotificationDialog.

It is recommonded to use the `mountNotificationDialog()` function to present the ConfirmationNavigationDialog; direct usage of the ConfirmationNavigationDialog component is not recommended. An additional `unmountNotificationDialog()` function is exported from package that would allow for manual dismissal of a ConfirmNotificationDialog; however, its usage should be limited, as the ConfirmNotificationDialog will dismiss itself upon selection of a user action.

The ConfirmationNotificationDialog requires a subset of the props supported by the NotificationDialog. Please review the ConfirmationNotificationDialog prop table below.

```jsx
import React from 'react';
import { injectIntl, intlShape } from 'terra-base';
import Button from 'terra-button';
import { NotificationDialogVariants, mountNotificationDialog } from '../../../ConfirmNotificationDialog';

class ConfirmNotificationDialogExample extends React.Component {
  constructor() {
    super();

    this.renderNotificationDialog = this.renderNotificationDialog.bind(this);

    this.state = {
      actionTaken: undefined,
    };
  }

  renderNotificationDialog() {
    new Promise((resolve, reject) => {
      mountNotificationDialog({
        variant: NotificationDialogVariants.WARNING,
        title: 'ConfirmNotificationDialog',
        message: 'Click an action button to dismiss.',
        primaryAction: {
          text: 'OK',
          onClick: () => {
            resolve();
          },
        },
        secondaryAction: {
          text: 'Cancel',
          onClick: () => {
            reject();
          },
        },
      }, 'confirm-notification-dialog-example-container', this.props.intl.locale);
    }).then(() => {
      this.setState({ actionTaken: 'OK' });
    }, () => {
      this.setState({ actionTaken: 'Cancel' });
    });
  }

  render() {
    const { actionTaken } = this.state;

    return (
      <div>
        <Button text="Trigger ConfirmNotificationDialog" onClick={this.renderNotificationDialog} />
        {actionTaken ? (
          <p>
            Action Taken:
            {' '}
            {actionTaken}
          </p>
        ) : undefined}
      </div>
    );
  }
}

ConfirmNotificationDialogExample.propTypes = {
  intl: intlShape,
};

export default injectIntl(ConfirmNotificationDialogExample);
```

## Component Features


 * [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
 * [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
 * [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)
 * [LTR/RTL Support](https://github.com/cerner/terra-core/wiki/Component-Features#ltr--rtl-support)
 * [Internationalization Support](https://github.com/cerner/terra-core/wiki/Component-Features#internationalization-i18n-support)
 * [Localization Support](https://github.com/cerner/terra-core/wiki/Component-Features#localization-support)
