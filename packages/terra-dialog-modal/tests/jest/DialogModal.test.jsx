import React from 'react';
import DialogModalExample from './DialogModalExample';

it('should shallow an open dialogModal', () => {
  const dialogModal = shallow(<DialogModalExample />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal', () => {
  const dialogModal = mount(<DialogModalExample />);
  expect(dialogModal).toMatchSnapshot();
});

it('should shallow an open dialogModal 320 width', () => {
  const dialogModal = shallow(<DialogModalExample width="320" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal 320 width', () => {
  const dialogModal = mount(<DialogModalExample width="320" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should shallow an open dialogModal 960 width', () => {
  const dialogModal = shallow(<DialogModalExample width="960" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal 960 width', () => {
  const dialogModal = mount(<DialogModalExample width="960" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should shallow an open dialogModal 1280 width', () => {
  const dialogModal = shallow(<DialogModalExample width="1280" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal 1280 width', () => {
  const dialogModal = mount(<DialogModalExample width="1280" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should shallow an open dialogModal 1600 width', () => {
  const dialogModal = shallow(<DialogModalExample width="1600" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal 1600 width', () => {
  const dialogModal = mount(<DialogModalExample width="1600" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal 1600 width', () => {
  const dialogModal = mount(<DialogModalExample width="1600" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal with focus requested', () => {
  const dialogModal = mount(<DialogModalExample isFocused width="1600" />);
  expect(dialogModal).toMatchSnapshot();
});

it('should mount an open dialogModal with focus released', () => {
  const dialogModal = mount(<DialogModalExample isFocused={false} width="1600" />);
  expect(dialogModal).toMatchSnapshot();
});
