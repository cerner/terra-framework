import React from 'react';

import CheckpointNotificationDialog from '../../src/_CheckpointNotificationDialog';

describe('CheckpointNotificationDialog', () => {
  describe('render', () => {
    it('should render null when inactive', () => {
      const wrapper = shallow((
        <CheckpointNotificationDialog />
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render NotificationDialog when active', () => {
      const wrapper = shallow((
        <CheckpointNotificationDialog />
      ));

      wrapper.setState({
        dialogProps: {
          title: 'Test Title',
          message: 'Test Message',
          acceptButtonText: 'Accept',
          rejectButtonText: 'Reject',
          onReject: () => {},
          onAccept: () => {},
        },
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('showDialog', () => {
    it('should set given values in state', () => {
      const wrapper = shallow((
        <CheckpointNotificationDialog />
      ));

      const mockProps = { test: 'value' };
      wrapper.instance().showDialog(mockProps);

      expect(wrapper.state().dialogProps).toBe(mockProps);
    });
  });

  describe('hideDialog', () => {
    it('should reset dialog state and execute callback', () => {
      const wrapper = shallow((
        <CheckpointNotificationDialog />
      ));

      const mockProps = { test: 'value' };
      wrapper.instance().showDialog(mockProps);

      expect(wrapper.state().dialogProps).toBe(mockProps);

      const mockCallback = jest.fn();
      wrapper.instance().hideDialog(mockCallback);

      expect(wrapper.state().dialogProps).toBeUndefined();
      expect(mockCallback.mock.calls.length).toEqual(1);
    });
  });
});
