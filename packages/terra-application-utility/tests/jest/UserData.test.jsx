import React from 'react';
import Image from 'terra-image';
import { UserData } from '../../src/ApplicationUtility';

describe('UserData', () => {
  it('should render a default component', () => {
    const wrapper = shallow(<UserData />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should with provided name', () => {
    const wrapper = shallow(<UserData userName="name" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should with provided user detail', () => {
    const wrapper = shallow(<UserData userDetail="detail" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should with provided photo', () => {
    const wrapper = shallow(<UserData userPhoto={<Image src={'test'} />} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should with provided name, detail, and photo', () => {
    const wrapper = shallow(<UserData userName="name" userDetail="detail" userPhoto={<Image src={'test'} />} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should pass in a custom prop', () => {
    const wrapper = shallow(<UserData id="test" />);
    expect(wrapper).toMatchSnapshot();
  });
});
