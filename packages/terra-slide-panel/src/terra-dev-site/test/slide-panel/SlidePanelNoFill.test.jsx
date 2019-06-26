import React from 'react';
import classNames from 'classnames/bind';
import SlidePanel, { SlidePanelPositions } from '../../../SlidePanel';
import SlidePanelMainContent from '../common/SlidePanelMainContent';
import SlidePanelPanelContent from '../common/SlidePanelPanelContent';
import styles from './SlidePanelDocCommon.test.module.scss';

const cx = classNames.bind(styles);

const SlidePanelNoFill = () => (
  <div className={cx('content-wrapper')}>
    <SlidePanel
      mainContent={<SlidePanelMainContent />}
      panelContent={<SlidePanelPanelContent />}
      panelBehavior="squish"
      panelPosition={SlidePanelPositions.END}
      panelSize="small"
      isOpen
    />
  </div>
);

export default SlidePanelNoFill;
