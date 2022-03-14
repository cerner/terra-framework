import React from 'react';
import classNames from 'classnames/bind';
import SlideGroup from 'terra-slide-group';
import styles from '../../doc/slide-group/example/SlideGroupDemo.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <SlideGroup
    className={cx('custom-slide')}
    items={[
      <div className="slide1" key="1">Slide 1</div>,
    ]}
    id="SlideGroup"
  />
);
