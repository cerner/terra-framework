import React from 'react';
import classNames from 'classnames/bind';
import SlideGroup from 'terra-slide-group';
import styles from '../../doc/slide-group/example/SlideGroupDemo.module.scss';

const cx = classNames.bind(styles);

export default () => (
  <div>
    <p>A slide group will display the last item supplied. Checking the DOM, one can see two items are present.</p>
    <SlideGroup
      className={cx('custom-slide')}
      items={[
        <div className="slide1" key="1">Slide 1</div>,
        <div className="slide2" key="2">Slide 2</div>,
      ]}
      id="SlideGroup"
    />
  </div>
);
