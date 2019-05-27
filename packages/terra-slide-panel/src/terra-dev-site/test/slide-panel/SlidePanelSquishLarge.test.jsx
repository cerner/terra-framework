import React from 'react';
import classNames from 'classnames/bind';
import SlidePanel from '../../../SlidePanel';
import styles from './SlidePanelSquishLarge.test.scss';

const cx = classNames.bind(styles);

const SlidePanelSquishLarge = () => (
  <div className={cx('content-wrapper')}>
    <SlidePanel
      mainContent={<div className={cx('main-content')} />}
      panelContent={<div className={cx('panel-content')} />}
      panelBehavior="squish"
      panelSize="large"
      isOpen
      fill
    />
  </div>
);

export default SlidePanelSquishLarge;
