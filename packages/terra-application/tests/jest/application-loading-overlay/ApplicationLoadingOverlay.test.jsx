import React from 'react';
import uuidv4 from 'uuid/v4';

import ApplicationLoadingOverlay from '../../../src/application-loading-overlay/ApplicationLoadingOverlay';
import ApplicationLoadingOverlayContext from '../../../src/application-loading-overlay/ApplicationLoadingOverlayContext';

jest.mock('uuid/v4');

describe('ApplicationLoadingOverlay', () => {
  let reactUseContext;
  let loadingOverlayContextValue;

  beforeAll(() => {
    uuidv4.mockReturnValue('test-id');

    /**
     * Until Enzyme is updated with full support for hooks, we need to
     * mock out the useContext implementation.
     */
    reactUseContext = React.useContext;
    React.useContext = (contextValue) => {
      if (ApplicationLoadingOverlayContext === contextValue) {
        return loadingOverlayContextValue;
      }
      return reactUseContext(contextValue);
    };
  });

  afterAll(() => {
    React.useContext = reactUseContext;
  });

  it('should render loading overlay as closed', () => {
    loadingOverlayContextValue = {
      show: jest.fn(),
      hide: jest.fn(),
    };

    const wrapper = mount(
      <ApplicationLoadingOverlay />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(0);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(1);

    wrapper.unmount();
    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(0);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(2);
  });

  it('should render loading overlay as open', () => {
    loadingOverlayContextValue = {
      show: jest.fn(),
      hide: jest.fn(),
    };

    const wrapper = mount(
      <ApplicationLoadingOverlay isOpen />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.show.mock.calls[0][0]).toBe('test-id');
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.unmount();
    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.hide.mock.calls[0][0]).toBe('test-id');
  });

  it('should transition from open to closed', () => {
    loadingOverlayContextValue = {
      show: jest.fn(),
      hide: jest.fn(),
    };

    const wrapper = mount(
      <ApplicationLoadingOverlay isOpen />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.show.mock.calls[0][0]).toBe('test-id');
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.setProps({ isOpen: false });

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(2);
    expect(loadingOverlayContextValue.hide.mock.calls[0][0]).toBe('test-id');
  });

  it('should redisplay loading overlay with new props', () => {
    loadingOverlayContextValue = {
      show: jest.fn(),
      hide: jest.fn(),
    };

    const wrapper = mount(
      <ApplicationLoadingOverlay isOpen />,
    );

    expect(wrapper).toMatchSnapshot();

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.show.mock.calls[0][0]).toBe('test-id');
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(0);

    wrapper.setProps({ backgroundStyle: 'dark' });

    expect(loadingOverlayContextValue.show.mock.calls.length).toBe(2);
    expect(loadingOverlayContextValue.show.mock.calls[1][0]).toBe('test-id');
    expect(loadingOverlayContextValue.hide.mock.calls.length).toBe(1);
    expect(loadingOverlayContextValue.hide.mock.calls[0][0]).toBe('test-id');
  });

  it('should honor backgroundStyle prop', () => {
    loadingOverlayContextValue = {
      show: jest.fn(),
      hide: jest.fn(),
    };

    const wrapper = mount(
      <ApplicationLoadingOverlay isOpen backgroundStyle="clear" />,
    );

    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ backgroundStyle: 'light' });
    expect(wrapper).toMatchSnapshot();

    wrapper.setProps({ backgroundStyle: 'dark' });
    expect(wrapper).toMatchSnapshot();
  });
});
