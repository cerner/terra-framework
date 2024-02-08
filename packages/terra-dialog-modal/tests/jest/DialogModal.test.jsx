import React from 'react';
import DialogModalExample from './DialogModalExample';

it('should shallow an open dialogModal', () => {
  const dialogModal = shallow(<DialogModalExample />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal', () => {
  const dialogModal = enzyme.mount(<DialogModalExample />);
  expect(dialogModal).toMatchSnapshot();
});

it('should shallow an open dialogModal 320 width', () => {
  const dialogModal = shallow(<DialogModalExample width="320" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal 320 width', () => {
  const dialogModal = enzyme.mount(<DialogModalExample width="320" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should shallow an open dialogModal 960 width', () => {
  const dialogModal = shallow(<DialogModalExample width="960" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal 960 width', () => {
  const dialogModal = enzyme.mount(<DialogModalExample width="960" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should shallow an open dialogModal 1280 width', () => {
  const dialogModal = shallow(<DialogModalExample width="1280" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal 1280 width', () => {
  const dialogModal = enzyme.mount(<DialogModalExample width="1280" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should shallow an open dialogModal 1600 width', () => {
  const dialogModal = shallow(<DialogModalExample width="1600" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal 1600 width', () => {
  const dialogModal = enzyme.mount(<DialogModalExample width="1600" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal 1600 width', () => {
  const dialogModal = enzyme.mount(<DialogModalExample width="1600" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should set the rootSelector', () => {
  const dialogModal = enzyme.mount(<DialogModalExample rootSelector="#myroot" />);
  expect(dialogModal).toMatchSnapshot();
});

it('correctly applies the theme context className', () => {
  jest.spyOn(React, 'useContext')
    .mockReturnValue({
      className: 'orion-fusion-theme',
    });
  const wrapper = enzyme.mount(<DialogModalExample />);
  expect(wrapper).toMatchSnapshot();
});
