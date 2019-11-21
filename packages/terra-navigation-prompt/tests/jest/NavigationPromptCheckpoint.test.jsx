import React from 'react';

import NavigationPromptCheckpointHOC from '../../src/NavigationPromptCheckpoint';
import withPromptRegistration from '../../src/_withPromptRegistration';

const NavigationPromptCheckpoint = NavigationPromptCheckpointHOC.WrappedComponent;

const promptRegistrationDefault = {
  registerPrompt: () => {},
  unregisterPrompt: () => {},
};

// We need a class component here to be able to get access to the
// component instance and its associated props.
// eslint-disable-next-line react/prefer-stateless-function
class MockPromptBase extends React.Component {
  render() {
    return <div id="mock-prompt">I am a mock component.</div>;
  }
}

const MockPrompt = withPromptRegistration(MockPromptBase);

describe('NavigationPrompt', () => {
  describe('Snapshots', () => {
    it('should render with minimal props', () => {
      const wrapper = shallow((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        />
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with children', () => {
      const wrapper = shallow((
        <NavigationPromptCheckpoint
          onPromptChange={() => {}}
          promptRegistration={promptRegistrationDefault}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render the NotificationDialog when state is present', () => {
      const wrapper = shallow((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        />
      ));

      wrapper.setState({
        notificationDialogProps: {
          title: 'Test Title',
          startMessage: 'Test Message',
          acceptButtonText: 'Accept',
          rejectButtonText: 'Reject',
          buttonOrder: 'acceptFirst',
          onAccept: () => {},
          onReject: () => {},
        },
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('should render the NotificationDialog with accept as the primary action', () => {
      const wrapper = shallow((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        />
      ));

      wrapper.setState({
        notificationDialogProps: {
          title: 'Test Title',
          startMessage: 'Test Message',
          acceptButtonText: 'Accept',
          rejectButtonText: 'Reject',
          emphasizedAction: 'accept',
          buttonOrder: 'acceptFirst',
          onAccept: () => {},
          onReject: () => {},
        },
      });

      expect(wrapper).toMatchSnapshot();
    });

    it('should render the NotificationDialog with reject as the primary action', () => {
      const wrapper = shallow((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        />
      ));

      wrapper.setState({
        notificationDialogProps: {
          title: 'Test Title',
          startMessage: 'Test Message',
          acceptButtonText: 'Accept',
          rejectButtonText: 'Reject',
          emphasizedAction: 'reject',
          buttonOrder: 'rejectFirst',
          onAccept: () => {},
          onReject: () => {},
        },
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('componentWillUnmount', () => {
    it('should call onPromptChange during unmount', () => {
      const mockOnPromptChange = jest.fn();

      const wrapper = shallow((
        <NavigationPromptCheckpoint
          onPromptChange={mockOnPromptChange}
          promptRegistration={promptRegistrationDefault}
        />
      ));

      wrapper.unmount();

      expect(mockOnPromptChange.mock.calls.length).toEqual(1);
      expect(mockOnPromptChange.mock.calls[0][0]).toEqual([]);
    });

    it('should not throw if onPromptChange is not present', () => {
      const wrapper = shallow((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        />
      ));

      wrapper.unmount();

      expect(wrapper.instance()).toBe(null);
    });
  });

  describe('registerPrompt', () => {
    it('should return if no id is provided', () => {
      const mockRegister = jest.fn();
      const mockunregister = jest.fn();
      const mockOnPromptChange = jest.fn();

      const wrapper = mount((
        <NavigationPromptCheckpoint
          onPromptChange={mockOnPromptChange}
          promptRegistration={{
            registerPrompt: mockRegister,
            unregisterPrompt: mockunregister,
          }}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);

      expect(mockPromptWrapper.props().promptRegistration).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.registerPrompt).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.unregisterPrompt).toBeDefined();

      const promptMetaData = { test: 'value' };
      mockPromptWrapper.props().promptRegistration.registerPrompt(undefined, 'mock_description', promptMetaData);

      expect(mockOnPromptChange.mock.calls.length).toEqual(0);
      expect(mockRegister.mock.calls.length).toEqual(0);
    });

    it('should notify ancestors when prompts are registered', () => {
      const mockRegister = jest.fn();
      const mockunregister = jest.fn();
      const mockOnPromptChange = jest.fn();

      const wrapper = mount((
        <NavigationPromptCheckpoint
          onPromptChange={mockOnPromptChange}
          promptRegistration={{
            registerPrompt: mockRegister,
            unregisterPrompt: mockunregister,
          }}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);

      expect(mockPromptWrapper.props().promptRegistration).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.registerPrompt).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.unregisterPrompt).toBeDefined();

      const promptMetaData = { test: 'value' };
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id', 'mock_description', promptMetaData);

      expect(mockOnPromptChange.mock.calls.length).toEqual(1);
      expect(mockOnPromptChange.mock.calls[0][0][0].description).toEqual('mock_description');
      expect(mockOnPromptChange.mock.calls[0][0][0].metaData).toBe(promptMetaData);

      expect(mockRegister.mock.calls.length).toEqual(1);
      expect(mockRegister.mock.calls[0][0]).toEqual('mock_id');
      expect(mockRegister.mock.calls[0][1]).toEqual('mock_description');
      expect(mockRegister.mock.calls[0][2]).toBe(promptMetaData);

      expect(wrapper.instance().registeredPrompts.mock_id).toBeDefined();
    });
  });

  describe('unregisterPrompt', () => {
    it('should return if no matching id is found', () => {
      const mockRegister = jest.fn();
      const mockunregister = jest.fn();
      const mockOnPromptChange = jest.fn();

      const wrapper = mount((
        <NavigationPromptCheckpoint
          onPromptChange={mockOnPromptChange}
          promptRegistration={{
            registerPrompt: mockRegister,
            unregisterPrompt: mockunregister,
          }}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);

      expect(mockPromptWrapper.props().promptRegistration).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.registerPrompt).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.unregisterPrompt).toBeDefined();

      const promptMetaData = { test: 'value' };
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id', 'mock_description', promptMetaData);
      mockPromptWrapper.props().promptRegistration.unregisterPrompt('different_mock_id');

      expect(mockOnPromptChange.mock.calls.length).toEqual(1);
      expect(mockunregister.mock.calls.length).toEqual(0);
      expect(wrapper.instance().registeredPrompts.mock_id).toBeDefined();
    });

    it('should notify ancestors when prompts are unregistered', () => {
      const mockRegister = jest.fn();
      const mockunregister = jest.fn();
      const mockOnPromptChange = jest.fn();

      const wrapper = mount((
        <NavigationPromptCheckpoint
          onPromptChange={mockOnPromptChange}
          promptRegistration={{
            registerPrompt: mockRegister,
            unregisterPrompt: mockunregister,
          }}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);

      expect(mockPromptWrapper.props().promptRegistration).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.registerPrompt).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.unregisterPrompt).toBeDefined();

      const promptMetaData = { test: 'value' };
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id', 'mock_description', promptMetaData);
      mockPromptWrapper.props().promptRegistration.unregisterPrompt('mock_id');

      expect(mockOnPromptChange.mock.calls.length).toEqual(2);
      expect(mockOnPromptChange.mock.calls[1][0]).toEqual([]);

      expect(mockunregister.mock.calls.length).toEqual(1);
      expect(mockunregister.mock.calls[0][0]).toEqual('mock_id');

      expect(wrapper.instance().registeredPrompts.mock_id).toBeUndefined();
    });
  });

  describe('resolvePrompts', () => {
    it('should show checkpoint notification dialog when resolvePrompts is executed and resolve on acceptance', async () => {
      expect.assertions(9);

      const wrapper = mount((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id', 'mock_description', { test: 'value' });

      const mockSetState = jest.fn();
      mockSetState.mockImplementation((newState) => {
        expect(newState.notificationDialogProps.title).toEqual('Test Title');
        expect(newState.notificationDialogProps.startMessage).toEqual('Test Message');
        expect(newState.notificationDialogProps.acceptButtonText).toEqual('Accept');
        expect(newState.notificationDialogProps.rejectButtonText).toEqual('Reject');
        expect(newState.notificationDialogProps.emphasizedAction).toEqual('reject');
        expect(newState.notificationDialogProps.buttonOrder).toEqual('rejectFirst');
        expect(newState.notificationDialogProps.onAccept).toBeDefined();
        expect(newState.notificationDialogProps.onReject).toBeDefined();

        // We resolve the promise to simulate a accept button click
        // and resolve the Promise.
        return newState.notificationDialogProps.onAccept();
      });

      wrapper.instance().setState = mockSetState;

      await expect(wrapper.instance().resolvePrompts({
        title: 'Test Title',
        startMessage: 'Test Message',
        acceptButtonText: 'Accept',
        rejectButtonText: 'Reject',
        emphasizedAction: 'reject',
        buttonOrder: 'rejectFirst',
      })).resolves.toEqual(undefined);
    });

    it('should show checkpoint notification dialog with function-provided values when resolvePrompts is executed and resolve on acceptance', async () => {
      expect.assertions(9);

      const wrapper = mount((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id', 'mock_description', { test: 'value' });
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id2', 'mock_description2', { test: 'value2' });

      const mockSetState = jest.fn();
      mockSetState.mockImplementation((newState) => {
        expect(newState.notificationDialogProps.title).toEqual('Title: mock_description-value, mock_description2-value2');
        expect(newState.notificationDialogProps.startMessage).toEqual('Message: mock_description-value, mock_description2-value2');
        expect(newState.notificationDialogProps.acceptButtonText).toEqual('Accept: mock_description-value, mock_description2-value2');
        expect(newState.notificationDialogProps.rejectButtonText).toEqual('Reject: mock_description-value, mock_description2-value2');
        expect(newState.notificationDialogProps.emphasizedAction).toEqual('reject');
        expect(newState.notificationDialogProps.buttonOrder).toEqual('rejectFirst');
        expect(newState.notificationDialogProps.onAccept).toBeDefined();
        expect(newState.notificationDialogProps.onReject).toBeDefined();

        // We resolve the promise to simulate a accept button click
        // and resolve the Promise.
        return newState.notificationDialogProps.onAccept();
      });

      wrapper.instance().setState = mockSetState;

      await expect(wrapper.instance().resolvePrompts(prompts => ({
        title: `Title: ${prompts.map(prompt => `${prompt.description}-${prompt.metaData.test}`).join(', ')}`,
        startMessage: `Message: ${prompts.map(prompt => `${prompt.description}-${prompt.metaData.test}`).join(', ')}`,
        acceptButtonText: `Accept: ${prompts.map(prompt => `${prompt.description}-${prompt.metaData.test}`).join(', ')}`,
        rejectButtonText: `Reject: ${prompts.map(prompt => `${prompt.description}-${prompt.metaData.test}`).join(', ')}`,
        emphasizedAction: 'reject',
        buttonOrder: 'rejectFirst',
      }))).resolves.toEqual(undefined);
    });

    it('should show checkpoint notification dialog when resolvePrompts is executed and reject on cancelation', async () => {
      expect.assertions(8);

      const wrapper = mount((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id', 'mock_description', { test: 'value' });

      const mockSetState = jest.fn();
      mockSetState.mockImplementation((newState) => {
        expect(newState.notificationDialogProps.title).toEqual('Test Title');
        expect(newState.notificationDialogProps.startMessage).toEqual('Test Message');
        expect(newState.notificationDialogProps.acceptButtonText).toEqual('Accept');
        expect(newState.notificationDialogProps.rejectButtonText).toEqual('Reject');
        expect(newState.notificationDialogProps.buttonOrder).toEqual('acceptFirst');
        expect(newState.notificationDialogProps.onAccept).toBeDefined();
        expect(newState.notificationDialogProps.onReject).toBeDefined();

        // We resolve the promise to simulate a reject button click
        // and reject the Promise.
        return newState.notificationDialogProps.onReject();
      });

      wrapper.instance().setState = mockSetState;

      await expect(wrapper.instance().resolvePrompts({
        title: 'Test Title',
        startMessage: 'Test Message',
        acceptButtonText: 'Accept',
        rejectButtonText: 'Reject',
        buttonOrder: 'acceptFirst',
      })).rejects.toEqual(undefined);
    });

    it('should not show checkpoint notification dialog when no prompts are registered', async () => {
      expect.assertions(2);

      const wrapper = mount((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        />
      ));

      const mockSetState = jest.fn();

      wrapper.instance().setState = mockSetState;

      await expect(wrapper.instance().resolvePrompts({
        title: 'Test Title',
        startMessage: 'Test Message',
        acceptButtonText: 'Accept',
        rejectButtonText: 'Reject',
        buttonOrder: 'acceptFirst',
      })).resolves.toEqual(undefined);

      expect(mockSetState.mock.calls.length).toEqual(0);
    });
  });
});
