import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import SlidePanel from 'terra-slide-panel';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import styles from './SlidePanelDocCommon.test.module.scss';

const cx = classNames.bind(styles);

function SlidePanelSVG() {
  const [panelIsOpen, setPanelIsOpen] = useState(false);

  const handlePanelToggle = () => {
    setPanelIsOpen(!panelIsOpen);
  };

  useEffect(() => {
    document.getElementById('test-p-click').onclick = handlePanelToggle;
  });

  return (
    <div className={cx('content-wrapper-toggle')}>
      <SlidePanel
        id="test-slide"
        mainContent={(
          <div className={cx('main-content')}>
            <button
              type="button"
              id="test-toggle"
              className={cx('button')}
              onClick={handlePanelToggle}
            >
              Toggle
              <IconChevronRight />
            </button>
            <Button icon={<IconAlert />} text="Terra Button toggle" onClick={handlePanelToggle} />
            <p id="test-p-click" className={cx('p-clickable')}>Paragraph Toggle</p>
            <svg id="test-click-svg" width={50} height={50} xmlns="http://www.w3.org/2000/svg" onClick={handlePanelToggle} className={cx('circle-svg')}>
              <circle
                cx="50"
                cy="45"
                r="25"
                stroke="black"
                strokeWidth="3"
                fill="#008a00"
              />
            </svg>
            <p>Circle SVG Toggle</p>
          </div>
        )}
        panelContent={(
          <div id="panel-content" className={cx('panel-content')}>
            <button
              id="focus-button"
              type="button"
              className={cx('button')}
              onClick={handlePanelToggle}
            >
              Close panel
            </button>
          </div>
        )}
        panelAriaLabel="Panel content area"
        mainAriaLabel="Main content area"
        panelSize="small"
        panelBehavior="overlay"
        isOpen={panelIsOpen}
        fill
      />
    </div>
  );
}

export default SlidePanelSVG;
