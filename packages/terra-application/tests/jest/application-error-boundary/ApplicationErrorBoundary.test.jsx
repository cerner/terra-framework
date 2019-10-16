import React from 'react';
import ApplicationErrorBoundary from '../../../src/application-error-boundary/ApplicationErrorBoundary';

describe('ApplicationErrorBoundary', () => {
  describe('Snapshots', () => {
    it('should render with minimal props', () => {
      const wrapper = shallow((
        <ApplicationErrorBoundary />
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with children', () => {
      const wrapper = shallow((
        <ApplicationErrorBoundary>
          <div>Test child</div>
        </ApplicationErrorBoundary>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render error view when an error is detected', () => {
      const ErrorComponent = () => <div />;

      const wrapper = shallow((
        <ApplicationErrorBoundary>
          <ErrorComponent />
        </ApplicationErrorBoundary>
      ));

      /**
       * After simulating the error, the error view should be rendered.
       */
      wrapper.find(ErrorComponent).simulateError(new Error('test error'));
      expect(wrapper).toMatchSnapshot();

      /**
       * After rendering the component again, the error view should no longer be rendered.
       */
      wrapper.instance().forceUpdate();
      expect(wrapper).toMatchSnapshot();
    });
  });
});
