import React from 'react';

import NavigationPromptHOC from '../../src/NavigationPrompt';

const NavigationPrompt = NavigationPromptHOC.WrappedComponent;

describe('NavigationPrompt', () => {
  describe('render', () => {
    it('should render null', () => {
      const wrapper = shallow((
        <NavigationPrompt
          promptRegistration={{
            registerPrompt: () => {},
            deregisterPrompt: () => {},
          }}
        />
      ));

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('componentDidMount', () => {
    it('should register itself on mount', () => {
      const mockRegister = jest.fn();

      const testMetaData = {
        test: 'value',
      };

      const wrapper = shallow((
        <NavigationPrompt
          description="TEST PROMPT"
          metaData={testMetaData}
          promptRegistration={{
            registerPrompt: mockRegister,
            deregisterPrompt: () => {},
          }}
        />
      ));

      expect(mockRegister.mock.calls.length).toEqual(1);
      expect(mockRegister.mock.calls[0][0]).toEqual(wrapper.instance().uuid);
      expect(mockRegister.mock.calls[0][1]).toEqual('TEST PROMPT');
      expect(mockRegister.mock.calls[0][2]).toBe(testMetaData);
    });
  });

  describe('componentDidUpdate', () => {
    it('should re-register itself on update if props have changed', () => {
      const mockRegister = jest.fn();
      const mockDeregister = jest.fn();

      const testMetaData = {
        test: 'value',
      };
      const testMetaData2 = {
        test: 'differentValue',
      };

      const wrapper = shallow((
        <NavigationPrompt
          description="TEST PROMPT"
          metaData={testMetaData}
          promptRegistration={{
            registerPrompt: mockRegister,
            deregisterPrompt: mockDeregister,
          }}
        />
      ));

      expect(mockDeregister.mock.calls.length).toEqual(0);
      expect(mockRegister.mock.calls.length).toEqual(1);
      expect(mockRegister.mock.calls[0][0]).toEqual(wrapper.instance().uuid);
      expect(mockRegister.mock.calls[0][1]).toEqual('TEST PROMPT');
      expect(mockRegister.mock.calls[0][2]).toBe(testMetaData);

      wrapper.setProps({ description: 'A DIFFERENT DESCRIPTION' });
      wrapper.update();

      expect(mockDeregister.mock.calls.length).toEqual(0);
      expect(mockRegister.mock.calls.length).toEqual(2);
      expect(mockRegister.mock.calls[1][0]).toEqual(wrapper.instance().uuid);
      expect(mockRegister.mock.calls[1][1]).toEqual('A DIFFERENT DESCRIPTION');
      expect(mockRegister.mock.calls[1][2]).toBe(testMetaData);

      wrapper.setProps({ metaData: testMetaData2 });
      wrapper.update();

      expect(mockDeregister.mock.calls.length).toEqual(0);
      expect(mockRegister.mock.calls.length).toEqual(3);
      expect(mockRegister.mock.calls[2][0]).toEqual(wrapper.instance().uuid);
      expect(mockRegister.mock.calls[2][1]).toEqual('A DIFFERENT DESCRIPTION');
      expect(mockRegister.mock.calls[2][2]).toBe(testMetaData2);
    });
  });

  describe('componentWillUnmount', () => {
    it('should deregister itself on unmount', () => {
      const mockRegister = jest.fn();
      const mockDeregister = jest.fn();

      const wrapper = shallow((
        <NavigationPrompt
          description="TEST PROMPT"
          promptRegistration={{
            registerPrompt: mockRegister,
            deregisterPrompt: mockDeregister,
          }}
        />
      ));

      expect(mockDeregister.mock.calls.length).toEqual(0);
      expect(mockRegister.mock.calls.length).toEqual(1);

      const componentUuid = wrapper.instance().uuid;

      wrapper.unmount();

      expect(mockDeregister.mock.calls.length).toEqual(1);
      expect(mockDeregister.mock.calls[0][0]).toEqual(componentUuid);
    });
  });
});
