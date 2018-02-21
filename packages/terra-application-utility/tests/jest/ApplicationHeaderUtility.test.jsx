import React from 'react';
import { ApplicationHeaderUtility } from '../../src/ApplicationUtility';

describe('ApplicationUtility', () => {
  const mockAdditionalItemsConfig = [];
  const mockMenuConfig = [];
  const mockOnChange = jest.fn();
  const mockOnDisclose = jest.fn();
  const image = <Image />;
  const name = 'name';
  const defaultRender = (
    <ApplicationHeaderUtility
      additionalItemsconfig={mockAdditionalItemsConfig}
      menuConfig={mockMenuConfig}
      mnChange={mockOnChange}
      onDisclose={mockOnDisclose}
      userName={name}
      userPhoto={image}
    />
  );

  // Snapshot Tests
  it('should render a default component', () => {
    const wrapper = shallow(defaultRender);
    expect(wrapper).toMatchSnapshot();
  });

  // Prop Tests
  // it('should use the default value when no value is given', () => {
  //   const wrapper = shallow(defaultRender);
  //   expect(wrapper.find('.application-utility').text()).toEqual('default');
  // });

  // // Structure Tests
  // it('should have the class application-utility', () => {
  //   const wrapper = shallow(defaultRender);
  //   expect(wrapper.prop('className')).toContain('application-utility');
  // });
});
