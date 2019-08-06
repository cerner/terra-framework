import React from 'react';
import PropTypes from 'prop-types';
import { act } from 'react-dom/test-utils';
import { shouldRenderCompactNavigation, useAnimatedCount } from '../../../src/utils/helpers';

describe('helpers', () => {
  it('shouldRenderCompactNavigation return correct values', () => {
    let result = shouldRenderCompactNavigation('tiny');
    expect(result).toEqual(true);

    result = shouldRenderCompactNavigation('small');
    expect(result).toEqual(true);

    result = shouldRenderCompactNavigation('medium');
    expect(result).toEqual(true);

    result = shouldRenderCompactNavigation('large');
    expect(result).toEqual(false);

    result = shouldRenderCompactNavigation('huge');
    expect(result).toEqual(false);

    result = shouldRenderCompactNavigation('enormous');
    expect(result).toEqual(false);
  });
});

describe('useAnimatedCount', () => {
  const mockRef = {
    current: {
      setAttribute: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    },
  };

  const HookWrapper = ({ value }) => {
    useAnimatedCount(mockRef, value);
    return <div />;
  };

  HookWrapper.propTypes = {
    value: PropTypes.number,
  };

  it('should add attributes and event handlers to ref', () => {
    let wrapper;

    // Rendering with initial value, nothing should get executed
    act(() => {
      wrapper = mount(<HookWrapper value={1} />);
    });

    expect(wrapper.find('div')).toBeDefined();
    expect(mockRef.current.setAttribute.mock.calls.length).toEqual(0);
    expect(mockRef.current.addEventListener.mock.calls.length).toEqual(0);

    // Updating with a greater value, which should update attributes and bind event handlers
    act(() => {
      wrapper.setProps({ value: 2 });
      wrapper.update();
    });

    expect(mockRef.current.setAttribute.mock.calls.length).toBe(1);
    expect(mockRef.current.setAttribute.mock.calls[0][0]).toBe('data-count-pulse');
    expect(mockRef.current.setAttribute.mock.calls[0][1]).toBe('true');

    expect(mockRef.current.addEventListener.mock.calls.length).toBe(1);
    expect(mockRef.current.addEventListener.mock.calls[0][0]).toBe('animationend');
    expect(mockRef.current.addEventListener.mock.calls[0][1]).toBeDefined();

    // Triggering the event handler to simulate event occurrence
    const animationHandler = mockRef.current.addEventListener.mock.calls[0][1];
    animationHandler();

    expect(mockRef.current.setAttribute.mock.calls.length).toBe(2);
    expect(mockRef.current.setAttribute.mock.calls[1][0]).toBe('data-count-pulse');
    expect(mockRef.current.setAttribute.mock.calls[1][1]).toBe('false');

    expect(mockRef.current.removeEventListener.mock.calls.length).toBe(1);
    expect(mockRef.current.removeEventListener.mock.calls[0][0]).toBe('animationend');
    expect(mockRef.current.removeEventListener.mock.calls[0][1]).toEqual(animationHandler);

    // Updating value with a lesser number to ensure animations don't occur when value decreases
    act(() => {
      wrapper.setProps({ value: 0 });
      wrapper.update();
    });

    expect(mockRef.current.setAttribute.mock.calls.length).toBe(2);
    expect(mockRef.current.addEventListener.mock.calls.length).toBe(1);
  });
});
