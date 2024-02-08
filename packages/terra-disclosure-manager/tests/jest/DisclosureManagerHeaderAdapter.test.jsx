import React from 'react';
import { act } from 'react-dom/test-utils';
import DisclosureManagerHeaderAdapter from '../../src/DisclosureManagerHeaderAdapter';

describe('DisclosureManagerHeaderAdapter', () => {
  let defaultUseContext;
  let mockUseContext;

  beforeEach(() => {
    defaultUseContext = React.useContext;
    mockUseContext = jest.fn();

    React.useContext = mockUseContext;
  });

  afterEach(() => {
    React.useContext = defaultUseContext;
  });

  it('renders null', () => {
    expect(shallow(<DisclosureManagerHeaderAdapter title="Test Title" collapsibleMenuView={<div>Test</div>} />)).toMatchSnapshot();
  });

  it('registers the headerData upon mount and upon prop changes', () => {
    const mockRegister = jest.fn();
    mockUseContext.mockReturnValue({
      register: mockRegister,
    });

    const testMenu1 = <div>Test 1</div>;
    let wrapper;
    act(() => {
      wrapper = enzyme.mount(<DisclosureManagerHeaderAdapter title="Test Title" collapsibleMenuView={testMenu1} />);
    });

    expect(wrapper).toMatchSnapshot();
    expect(mockRegister.mock.calls.length).toBe(1);
    expect(mockRegister.mock.calls[0][0].title).toBe('Test Title');
    expect(mockRegister.mock.calls[0][0].collapsibleMenuView).toEqual(testMenu1);

    act(() => {
      wrapper.setProps({ title: 'New Title' });
      wrapper.update();
    });

    expect(wrapper).toMatchSnapshot();
    expect(mockRegister.mock.calls.length).toBe(2);
    expect(mockRegister.mock.calls[1][0].title).toBe('New Title');
    expect(mockRegister.mock.calls[1][0].collapsibleMenuView).toEqual(testMenu1);

    const testMenu2 = <div>Test 2</div>;
    act(() => {
      wrapper.setProps({ collapsibleMenuView: testMenu2 });
      wrapper.update();
    });

    expect(mockRegister.mock.calls.length).toBe(3);
    expect(mockRegister.mock.calls[2][0].title).toBe('New Title');
    expect(mockRegister.mock.calls[2][0].collapsibleMenuView).toEqual(testMenu2);

    /**
     * Test that registration doesn't happen for existing data.
     */
    act(() => {
      wrapper.setProps({ title: 'New Title' });
      wrapper.update();
    });
    expect(mockRegister.mock.calls.length).toBe(3);
  });
});
