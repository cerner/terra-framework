import React from 'react';
import ApplicationLoadingOverlayProvider from '../../../src/application-loading-overlay/ApplicationLoadingOverlayProvider';

describe('ApplicationLoadingOverlayProvider', () => {
  describe('Snapshots', () => {
    it('should render with minimal props', () => {
      const wrapper = shallow((
        <ApplicationLoadingOverlayProvider />
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with optional props', () => {
      const scrollRefCallback = jest.fn();
      const wrapper = shallow((
        <ApplicationLoadingOverlayProvider
          scrollRefCallback={scrollRefCallback}
        >
          <div>Test child</div>
        </ApplicationLoadingOverlayProvider>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render the loading overlay based on current state', () => {
      const reactUseState = React.useState;
      const mockSetState = jest.fn();
      React.useState = () => ([{
        1: { backgroundStyle: 'clear' },
        2: { backgroundStyle: 'clear' },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationLoadingOverlayProvider>
          <div>Test child</div>
        </ApplicationLoadingOverlayProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });

    it('should give render dark overlays when requested', () => {
      const reactUseState = React.useState;
      const mockSetState = jest.fn();
      React.useState = () => ([{
        1: { backgroundStyle: 'dark' },
        2: { backgroundStyle: 'light' },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationLoadingOverlayProvider>
          <div>Test child</div>
        </ApplicationLoadingOverlayProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });

    it('should give render light overlays when requested', () => {
      const reactUseState = React.useState;
      const mockSetState = jest.fn();
      React.useState = () => ([{
        1: { backgroundStyle: 'light' },
        2: { backgroundStyle: 'clear' },
      }, mockSetState]);

      const wrapper = shallow((
        <ApplicationLoadingOverlayProvider>
          <div>Test child</div>
        </ApplicationLoadingOverlayProvider>
      ));

      expect(wrapper).toMatchSnapshot();

      React.useState = reactUseState;
    });
  });
});
