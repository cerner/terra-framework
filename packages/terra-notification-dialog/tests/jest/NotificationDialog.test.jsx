import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { shallowWithIntl, mountWithIntl, mockIntl } from '@cerner/terra-enzyme-intl';
import { KEY_ESCAPE } from 'keycode-js';
import NotificationDialog from '../../src/NotificationDialog';

describe('Notification Dialog', () => {
  const acceptOnClick = jest.fn();
  const rejectOnClick = jest.fn();

  it('shallow renders an hazard-high notification-dialog', () => {
    const dialog = mountWithIntl(
      <NotificationDialog
        variant="hazard-high"
        dialogTitle="Test"
        startMessage="This text is used to provide more details."
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
      />,
    );

    expect(dialog).toMatchSnapshot();
    const actions = dialog.find('.actions');
    expect(actions.children().length).toBe(2);
    expect(actions.children().at(0).props()).toHaveProperty('data-terra-notification-dialog-button', 'accept');
    expect(actions.children().at(1).props()).toHaveProperty('data-terra-notification-dialog-button', 'reject');
  });

  it('shallow renders an hazard-medium notification-dialog', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="hazard-medium"
        dialogTitle="Test"
        startMessage="This text is used to provide more details."
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
      />,
    ).dive();

    expect(dialog.dive()).toMatchSnapshot();
  });

  it('shallow renders an hazard-low notification-dialog', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="hazard-low"
        dialogTitle="Test"
        startMessage="This text is used to provide more details."
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
      />,
    ).dive();

    expect(dialog.dive()).toMatchSnapshot();
  });

  it('shallow renders an error notification-dialog', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="error"
        dialogTitle="Test"
        startMessage="This text is used to provide more details."
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
      />,
    ).dive();

    expect(dialog.dive()).toMatchSnapshot();
  });

  it('shallow renders an custom notification-dialog', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="custom"
        dialogTitle="Test"
        startMessage="This text is used to provide more details."
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
        custom={{ signalWord: 'Custom', iconClassName: 'custom-icon' }}
      />,
    ).dive();

    expect(dialog.dive()).toMatchSnapshot();
  });

  it('shallow renders dialog with startMessage, content, and endMessage', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="hazard-high"
        dialogTitle="Test"
        startMessage="This text is used to provide more details."
        content={<div>Middle content</div>}
        endContent="end content before buttons"
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
      />,
    ).dive();

    expect(dialog.dive()).toMatchSnapshot();
  });

  it('shallow renders dialog with reject button first', () => {
    const dialog = mountWithIntl(
      <NotificationDialog
        variant="hazard-high"
        dialogTitle="Test"
        startMessage="This text is used to provide more details."
        buttonOrder="rejectFirst"
        acceptAction={{ text: 'accept', onClick: acceptOnClick }}
        rejectAction={{ text: 'reject', onClick: rejectOnClick }}
      />,
    );

    expect(dialog).toMatchSnapshot();
    const actions = dialog.find('.actions');
    expect(actions.children().length).toBe(2);
    expect(actions.children().at(0).props()).toHaveProperty('data-terra-notification-dialog-button', 'reject');
    expect(actions.children().at(1).props()).toHaveProperty('data-terra-notification-dialog-button', 'accept');
  });

  it('correctly applies the theme context className', () => {
    jest.spyOn(React, 'useContext')
      .mockReturnValue({
        className: 'orion-fusion-theme',
      });

    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="hazard-high"
        startMessage="This text is used to provide more details."
        rejectAction={{ text: 'reject', onClick: rejectOnClick }}
      />,
    ).dive();

    expect(dialog.dive()).toMatchSnapshot();
  });
});

describe('Notification Dialog functions as expected', () => {
  const acceptOnClick = jest.fn();
  const rejectOnClick = jest.fn();
  let dialogExample;
  beforeAll(() => {
    const Example = () => {
      const [isOpen, setIsOpen] = React.useState(false);
      return (
        <div>
          {isOpen && (
            <NotificationDialog.WrappedComponent
              intl={mockIntl}
              variant="hazard-high"
              dialogTitle="Test"
              startMessage="This text is used to provide more details."
              acceptAction={{ text: 'accept', onClick: acceptOnClick.mockImplementation(() => { setIsOpen(false); }) }}
              rejectAction={{ text: 'reject', onClick: rejectOnClick.mockImplementation(() => { setIsOpen(false); }) }}
            />
          )}
          <button type="button" data-test-button onClick={() => setIsOpen(true)}>Open Dialog</button>
        </div>
      );
    };
    dialogExample = shallowWithIntl(<Example />);
  });

  it('should open the dialog', () => {
    expect(dialogExample).toMatchSnapshot();
    expect(dialogExample.find('NotificationDialog').length).toBe(0);
    expect(dialogExample.find('button[data-test-button]').length).toBe(1);
    dialogExample.find('button[data-test-button]').simulate('click');
    expect(dialogExample).toMatchSnapshot();
    expect(dialogExample.find('NotificationDialog').length).toBe(1);
    expect(dialogExample.find('NotificationDialog').dive().find('Button[data-terra-notification-dialog-button]').length).toBe(2);
  });

  it('should close the dialog when clicking reject button', () => {
    dialogExample.find('NotificationDialog').dive().find('Button[data-terra-notification-dialog-button="reject"]').simulate('click');
    expect(rejectOnClick).toHaveBeenCalled();
    expect(dialogExample.find('NotificationDialog').length).toBe(0);
  });

  it('should close the dialog when clicking accept button', () => {
    // re-open
    dialogExample.find('button[data-test-button]').simulate('click');
    expect(dialogExample.find('NotificationDialog').length).toBe(1);

    dialogExample.find('NotificationDialog').dive().find('Button[data-terra-notification-dialog-button="accept"]').simulate('click');
    expect(acceptOnClick).toHaveBeenCalled();
    expect(dialogExample.find('NotificationDialog').length).toBe(0);
  });

  it('should not close the dialog when pressing escape key', () => {
    // re-open
    dialogExample.find('button[data-test-button]').simulate('click');
    expect(dialogExample.find('NotificationDialog').length).toBe(1);

    dialogExample.find('NotificationDialog').dive().find('Button[data-terra-notification-dialog-button="accept"]').simulate('keydown', { keycode: KEY_ESCAPE });
    expect(dialogExample.find('NotificationDialog').length).toBe(1);
  });
});
