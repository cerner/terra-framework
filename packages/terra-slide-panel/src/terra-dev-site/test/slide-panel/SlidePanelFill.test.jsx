import React from 'react';
import classNames from 'classnames/bind';
import SlidePanel from '../../../SlidePanel';
import SlidePanelMainContent from '../common/SlidePanelMainContent';
import SlidePanelPanelContent from '../common/SlidePanelPanelContent';
import styles from './SlidePanelFillCommon.test.scss';

const cx = classNames.bind(styles);

const SlidePanelFill = () => (
  <div className={cx('content-wrapper')}>
    <SlidePanel
      mainContent={<SlidePanelMainContent />}
      panelContent={<SlidePanelPanelContent />}
      panelBehavior="squish"
      panelPosition="end"
      panelSize="small"
      isOpen
      fill
    />
  </div>
);

export default SlidePanelFill;
