import React from 'react';
import { ApplicationMenuUtility } from '../../src/ApplicationUtility';
import MockConfig from '../../examples/index-examples/MockConfig';

describe('ApplicationMenuUtility', () => {
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const mockOnRequestClose = jest.fn();
  const image = <Image />;
  const name = 'name';

  it('should render a menu utility with default props', () => {
    const wrapper = shallow(
      <ApplicationMenuUtility
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a menu utility with a username', () => {
    const wrapper = shallow(
      <ApplicationMenuUtility
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        userName={name}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a menu utility with a user photo', () => {
    const wrapper = shallow(
      <ApplicationMenuUtility
        menuItems={[]}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
        userPhoto={image}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a menu utility with menu items', () => {
    const wrapper = shallow(
      <ApplicationMenuUtility
        menuItems={MockConfig()}
        onChange={mockOnChange}
        onDisclose={mockOnDisclose}
        onRequestClose={mockOnRequestClose}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
