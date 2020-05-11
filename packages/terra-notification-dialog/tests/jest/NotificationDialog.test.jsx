import React from 'react';
/* eslint-disable import/no-extraneous-dependencies */
import { mountWithIntl, shallowWithIntl } from 'terra-enzyme-intl';
import { KEY_ESCAPE } from 'keycode-js';
import NotificationDialog from '../../src/NotificationDialog';

describe('Notification Dialog', () => {
  const acceptOnClick = jest.fn();
  const rejectOnClick = jest.fn();

  it('shallow renders an alert notification-dialog', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="alert"
        isOpen
        title="Test"
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

  it('shallow renders an error notification-dialog', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="error"
        isOpen
        title="Test"
        startMessage="This text is used to provide more details."
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
      />,
    );

    expect(dialog).toMatchSnapshot();
  });

  it('shallow renders an warning notification-dialog', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="warning"
        isOpen
        title="Test"
        startMessage="This text is used to provide more details."
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
      />,
    );

    expect(dialog).toMatchSnapshot();
  });

  it('shallow renders an info notification-dialog', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="info"
        isOpen
        title="Test"
        startMessage="This text is used to provide more details."
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
      />,
    );

    expect(dialog).toMatchSnapshot();
  });

  it('shallow renders an custom notification-dialog', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="custom"
        isOpen
        title="Test"
        startMessage="This text is used to provide more details."
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
        custom={{ signalWord: 'Custom', iconClassName: 'custom-icon' }}
      />,
    );

    expect(dialog).toMatchSnapshot();
  });

  it('shallow renders dialog with startMessage, content, and endMessage', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="alert"
        isOpen
        title="Test"
        startMessage="This text is used to provide more details."
        content={<div>Middle content</div>}
        endContent="end content before buttons"
        acceptAction={{ text: 'accept', onClick: () => {} }}
        rejectAction={{ text: 'reject', onClick: () => {} }}
      />,
    );

    expect(dialog).toMatchSnapshot();
  });

  it('shallow renders dialog with reject button first', () => {
    const dialog = shallowWithIntl(
      <NotificationDialog
        variant="alert"
        isOpen
        title="Test"
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
        variant="alert"
        isOpen
        startMessage="This text is used to provide more details."
        rejectAction={{ text: 'reject', onClick: rejectOnClick }}
      />,
    );

    expect(dialog).toMatchSnapshot();
  });

  it('throws error if variant is missing', () => {
    expect(() => shallowWithIntl(
      <NotificationDialog
        isOpen
        acceptAction={{ text: 'accept', onClick: acceptOnClick }}
      />,
    )).toThrowErrorMatchingSnapshot();
  });

  it('throws error if variant is missing', () => {
    expect(() => shallowWithIntl(
      <NotificationDialog
        isOpen
        variant="error"
      />,
    )).toThrowErrorMatchingSnapshot();
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
          <NotificationDialog
            variant="alert"
            isOpen={isOpen}
            title="Test"
            startMessage="This text is used to provide more details."
            acceptAction={{ text: 'accept', onClick: acceptOnClick.mockImplementation(() => { setIsOpen(false); }) }}
            rejectAction={{ text: 'reject', onClick: rejectOnClick.mockImplementation(() => { setIsOpen(false); }) }}
          />
          <button type="button" data-test-button onClick={() => setIsOpen(true)}>Open Dialog</button>
        </div>
      );
    };
    dialogExample = mountWithIntl(<Example />);
  });

  it('should open the dialog', () => {
    expect(dialogExample).toMatchSnapshot();
    expect(dialogExample.find('NotificationDialog').props()).toHaveProperty('isOpen', false);
    expect(dialogExample.find('button[data-test-button]').length).toBe(1);
    dialogExample.find('button[data-test-button]').simulate('click');
    expect(dialogExample.find('NotificationDialog').props()).toHaveProperty('isOpen', true);
    expect(dialogExample.find('Button[data-terra-notification-dialog-button]').length).toBe(2);
  });

  it('should close the dialog when clicking reject button', () => {
    dialogExample.find('Button[data-terra-notification-dialog-button="reject"]').simulate('click');
    expect(rejectOnClick).toHaveBeenCalled();
    expect(dialogExample.find('NotificationDialog').props()).toHaveProperty('isOpen', false);
  });

  it('should close the dialog when clicking accept button', () => {
    // re-open
    dialogExample.find('button[data-test-button]').simulate('click');
    expect(dialogExample.find('NotificationDialog').props()).toHaveProperty('isOpen', true);

    dialogExample.find('Button[data-terra-notification-dialog-button="accept"]').simulate('click');
    expect(acceptOnClick).toHaveBeenCalled();
    expect(dialogExample.find('NotificationDialog').props()).toHaveProperty('isOpen', false);
  });

  it('should not close the dialog when pressing escape key', () => {
    // re-open
    dialogExample.find('button[data-test-button]').simulate('click');
    expect(dialogExample.find('NotificationDialog').props()).toHaveProperty('isOpen', true);

    dialogExample.find('Button[data-terra-notification-dialog-button="accept"]').simulate('keydown', { keycode: KEY_ESCAPE });
    expect(dialogExample.find('NotificationDialog').props()).toHaveProperty('isOpen', true);
  });
});
