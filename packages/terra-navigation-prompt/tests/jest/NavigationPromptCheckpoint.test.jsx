import React from 'react';

import NavigationPromptCheckpointHOC from '../../src/NavigationPromptCheckpoint';
import withPromptRegistration from '../../src/_withPromptRegistration';

const NavigationPromptCheckpoint = NavigationPromptCheckpointHOC.WrappedComponent;

const promptRegistrationDefault = {
  registerPrompt: () => {},
  deregisterPrompt: () => {},
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
      const mockDeregister = jest.fn();
      const mockOnPromptChange = jest.fn();

      const wrapper = mount((
        <NavigationPromptCheckpoint
          onPromptChange={mockOnPromptChange}
          promptRegistration={{
            registerPrompt: mockRegister,
            deregisterPrompt: mockDeregister,
          }}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);

      expect(mockPromptWrapper.props().promptRegistration).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.registerPrompt).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.deregisterPrompt).toBeDefined();

      const promptMetaData = { test: 'value' };
      mockPromptWrapper.props().promptRegistration.registerPrompt(undefined, 'mock_description', promptMetaData);

      expect(mockOnPromptChange.mock.calls.length).toEqual(0);
      expect(mockRegister.mock.calls.length).toEqual(0);
    });

    it('should notify ancestors when prompts are registered', () => {
      const mockRegister = jest.fn();
      const mockDeregister = jest.fn();
      const mockOnPromptChange = jest.fn();

      const wrapper = mount((
        <NavigationPromptCheckpoint
          onPromptChange={mockOnPromptChange}
          promptRegistration={{
            registerPrompt: mockRegister,
            deregisterPrompt: mockDeregister,
          }}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);

      expect(mockPromptWrapper.props().promptRegistration).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.registerPrompt).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.deregisterPrompt).toBeDefined();

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

  describe('deregisterPrompt', () => {
    it('should return if no matching id is found', () => {
      const mockRegister = jest.fn();
      const mockDeregister = jest.fn();
      const mockOnPromptChange = jest.fn();

      const wrapper = mount((
        <NavigationPromptCheckpoint
          onPromptChange={mockOnPromptChange}
          promptRegistration={{
            registerPrompt: mockRegister,
            deregisterPrompt: mockDeregister,
          }}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);

      expect(mockPromptWrapper.props().promptRegistration).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.registerPrompt).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.deregisterPrompt).toBeDefined();

      const promptMetaData = { test: 'value' };
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id', 'mock_description', promptMetaData);
      mockPromptWrapper.props().promptRegistration.deregisterPrompt('different_mock_id');

      expect(mockOnPromptChange.mock.calls.length).toEqual(1);
      expect(mockDeregister.mock.calls.length).toEqual(0);
      expect(wrapper.instance().registeredPrompts.mock_id).toBeDefined();
    });

    it('should notify ancestors when prompts are deregistered', () => {
      const mockRegister = jest.fn();
      const mockDeregister = jest.fn();
      const mockOnPromptChange = jest.fn();

      const wrapper = mount((
        <NavigationPromptCheckpoint
          onPromptChange={mockOnPromptChange}
          promptRegistration={{
            registerPrompt: mockRegister,
            deregisterPrompt: mockDeregister,
          }}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);

      expect(mockPromptWrapper.props().promptRegistration).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.registerPrompt).toBeDefined();
      expect(mockPromptWrapper.props().promptRegistration.deregisterPrompt).toBeDefined();

      const promptMetaData = { test: 'value' };
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id', 'mock_description', promptMetaData);
      mockPromptWrapper.props().promptRegistration.deregisterPrompt('mock_id');

      expect(mockOnPromptChange.mock.calls.length).toEqual(2);
      expect(mockOnPromptChange.mock.calls[1][0]).toEqual([]);

      expect(mockDeregister.mock.calls.length).toEqual(1);
      expect(mockDeregister.mock.calls[0][0]).toEqual('mock_id');

      expect(wrapper.instance().registeredPrompts.mock_id).toBeUndefined();
    });
  });

  describe('resolvePrompts', () => {
    it('should show checkpoint notification dialog when resolvePrompts is executed and resolve on acceptance', async () => {
      expect.assertions(7);

      const wrapper = mount((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id', 'mock_description', { test: 'value' });

      wrapper.instance().checkpointNotificationDialogRef = {
        current: {
          showDialog: (options) => {
            expect(options.title).toEqual('Test Title');
            expect(options.message).toEqual('Test Message');
            expect(options.acceptButtonText).toEqual('Accept');
            expect(options.rejectButtonText).toEqual('Reject');
            expect(options.onAccept).toBeDefined();
            expect(options.onReject).toBeDefined();

            // We resolve the promise to simulate a accept button click
            // and resolve the Promise.
            return options.onAccept();
          },
        },
      };

      await expect(wrapper.instance().resolvePrompts({
        title: 'Test Title',
        message: 'Test Message',
        acceptButtonText: 'Accept',
        rejectButtonText: 'Reject',
      })).resolves.toEqual(undefined);
    });

    it('should show checkpoint notification dialog with function-provided values when resolvePrompts is executed and resolve on acceptance', async () => {
      expect.assertions(7);

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

      wrapper.instance().checkpointNotificationDialogRef = {
        current: {
          showDialog: (options) => {
            expect(options.title).toEqual('Title: mock_description-value, mock_description2-value2');
            expect(options.message).toEqual('Message: mock_description-value, mock_description2-value2');
            expect(options.acceptButtonText).toEqual('Accept: mock_description-value, mock_description2-value2');
            expect(options.rejectButtonText).toEqual('Reject: mock_description-value, mock_description2-value2');
            expect(options.onAccept).toBeDefined();
            expect(options.onReject).toBeDefined();

            // We resolve the promise to simulate a accept button click
            // and resolve the Promise.
            return options.onAccept();
          },
        },
      };

      await expect(wrapper.instance().resolvePrompts({
        title: prompts => (
          `Title: ${prompts.map(prompt => `${prompt.description}-${prompt.metaData.test}`).join(', ')}`
        ),
        message: prompts => (
          `Message: ${prompts.map(prompt => `${prompt.description}-${prompt.metaData.test}`).join(', ')}`
        ),
        acceptButtonText: prompts => (
          `Accept: ${prompts.map(prompt => `${prompt.description}-${prompt.metaData.test}`).join(', ')}`
        ),
        rejectButtonText: prompts => (
          `Reject: ${prompts.map(prompt => `${prompt.description}-${prompt.metaData.test}`).join(', ')}`
        ),
      })).resolves.toEqual(undefined);
    });

    it('should show checkpoint notification dialog when resolvePrompts is executed and reject on cancelation', async () => {
      expect.assertions(7);

      const wrapper = mount((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        >
          <MockPrompt />
        </NavigationPromptCheckpoint>
      ));

      const mockPromptWrapper = wrapper.find(MockPromptBase);
      mockPromptWrapper.props().promptRegistration.registerPrompt('mock_id', 'mock_description', { test: 'value' });

      wrapper.instance().checkpointNotificationDialogRef = {
        current: {
          showDialog: (options) => {
            expect(options.title).toEqual('Test Title');
            expect(options.message).toEqual('Test Message');
            expect(options.acceptButtonText).toEqual('Accept');
            expect(options.rejectButtonText).toEqual('Reject');
            expect(options.onAccept).toBeDefined();
            expect(options.onReject).toBeDefined();

            // We resolve the promise to simulate a reject button click
            // and reject the Promise.
            return options.onReject();
          },
        },
      };

      await expect(wrapper.instance().resolvePrompts({
        title: 'Test Title',
        message: 'Test Message',
        acceptButtonText: 'Accept',
        rejectButtonText: 'Reject',
      })).rejects.toEqual(undefined);
    });

    it('should not show checkpoint notification dialog when no prompts are registered', async () => {
      expect.assertions(2);

      const wrapper = mount((
        <NavigationPromptCheckpoint
          promptRegistration={promptRegistrationDefault}
        />
      ));

      const mockShowDialog = jest.fn();

      wrapper.instance().checkpointNotificationDialogRef = {
        current: {
          showDialog: mockShowDialog,
        },
      };

      await expect(wrapper.instance().resolvePrompts({
        title: 'Test Title',
        message: 'Test Message',
        acceptButtonText: 'Accept',
        rejectButtonText: 'Reject',
      })).resolves.toEqual(undefined);

      expect(mockShowDialog.mock.calls.length).toEqual(0);
    });
  });
});
