import React from 'react';
import { ApplicationHeaderUtility } from '../../src/ApplicationUtility';
import MockConfig from '../../examples/index-examples/MockConfig';

describe('ApplicationUtility', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const image = <Image />;
  const name = 'name';

  it('should render a utility with menu items', () => {
    const wrapper = shallow(
      <ApplicationHeaderUtility
        menuItems={MockConfig()}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        userName={name}
        userPhoto={image}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
