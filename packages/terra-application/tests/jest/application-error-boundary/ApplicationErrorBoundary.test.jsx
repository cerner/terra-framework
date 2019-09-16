import React from 'react';
import { mockIntl, shallowWithIntl } from 'terra-enzyme-intl';
import ApplicationErrorBoundary from '../../../src/application-error-boundary/ApplicationErrorBoundary';

describe('ApplicationErrorBoundary', () => {
  describe('Snapshots', () => {
    it('should render with minimal props', () => {
      const wrapper = shallowWithIntl((
        <ApplicationErrorBoundary />
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render with children', () => {
      const wrapper = shallowWithIntl((
        <ApplicationErrorBoundary>
          <div>Test child</div>
        </ApplicationErrorBoundary>
      ));

      expect(wrapper).toMatchSnapshot();
    });

    it('should render error view when an error is detected', () => {
      const wrapper = shallow((
        <ApplicationErrorBoundary.WrappedComponent
          intl={mockIntl}
        >
          <div>Test child</div>
        </ApplicationErrorBoundary.WrappedComponent>
      ));

      wrapper.setState({ hasError: true });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
