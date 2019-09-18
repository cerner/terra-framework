import React, { useState } from 'react';
import classNames from 'classnames/bind';
import ApplicationLoadingOverlay from '../../../application-loading-overlay/ApplicationLoadingOverlay';
import ApplicationLoadingOverlayProvider from '../../../application-loading-overlay/ApplicationLoadingOverlayProvider';

import styles from './ApplicationErrorBoundaryExample.module.scss';

const cx = classNames.bind(styles);

const ApplicationLoadingOverlayExample = () => {
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);

  return (
    <div className={cx('example')}>
      <ApplicationLoadingOverlayProvider>
        <ApplicationLoadingOverlay message="Loading example..." isOpen={showLoadingOverlay} />
        <p>Press the button below to show the loading overlay for 3 seconds.</p>
        <button
          type="button"
          onClick={() => {
            setShowLoadingOverlay(true);
            setTimeout(() => {
              setShowLoadingOverlay(false);
            }, 3000);
          }}
        >
          Show Loading Overlay
        </button>
      </ApplicationLoadingOverlayProvider>
    </div>
  );
};

export default ApplicationLoadingOverlayExample;
