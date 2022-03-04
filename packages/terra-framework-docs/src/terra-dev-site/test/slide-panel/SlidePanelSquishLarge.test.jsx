import React from 'react';
import classNames from 'classnames/bind';
import SlidePanel from 'terra-slide-panel';
import styles from './SlidePanelDocCommon.test.module.scss';

const cx = classNames.bind(styles);

const SlidePanelSquishLarge = () => (
  <div className={cx('content-wrapper-large')}>
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
