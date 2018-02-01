import React from 'react';
import AppDelegate from 'terra-app-delegate';
import ModalManager from '../../src/ModalManager';

const TestContainer = ({ app }) => (
  <div>Hello World</div>
);

TestContainer.propTypes = {
  app: AppDelegate.propType,
};

describe('ModalManger', () => {
  it('should render the ModalManager with defaults', () => {
    const modalManager = (
      <ModalManager>
        <TestContainer />
      </ModalManager>
    );

    const result = shallow(modalManager);
    expect(result).toMatchSnapshot();
  });
});
