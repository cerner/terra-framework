import React from 'react';
import classNames from 'classnames/bind';
import SlideGroup from '../../../SlideGroup';
import styles from './DefaultOneItemSlideGroup.test.scss';

const cx = classNames.bind(styles);

export default () => (
  <SlideGroup
    className={cx('content-wrapper')}
    items={[
      <div className="slide1" key="1">Slide 1</div>,
    ]}
    id="SlideGroup"
  />
);
