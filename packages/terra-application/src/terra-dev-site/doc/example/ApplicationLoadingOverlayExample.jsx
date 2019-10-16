import React, { useState } from 'react';
import classNames from 'classnames/bind';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay/ApplicationLoadingOverlay';
import ApplicationLoadingOverlayProvider from 'terra-application/lib/application-loading-overlay/ApplicationLoadingOverlayProvider';

import styles from './ApplicationErrorBoundaryExample.module.scss';

const cx = classNames.bind(styles);

const ApplicationLoadingOverlayExample = () => {
  const [showClearOverlay, setShowClearOverlay] = useState(false);
  const [showLightOverlay, setShowLightOverlay] = useState(false);
  const [showDarkOverlay, setShowDarkOverlay] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setShowClearOverlay(true);
          setTimeout(() => {
            setShowClearOverlay(false);
          }, 3000);
        }}
      >
        Show Clear Loading Overlay
      </button>
      <button
        type="button"
        onClick={() => {
          setShowLightOverlay(true);
          setTimeout(() => {
            setShowLightOverlay(false);
          }, 3000);
        }}
      >
        Show Light Loading Overlay
      </button>
      <button
        type="button"
        onClick={() => {
          setShowDarkOverlay(true);
          setTimeout(() => {
            setShowDarkOverlay(false);
          }, 3000);
        }}
      >
        Show Dark Loading Overlay
      </button>
      <div className={cx('example')}>
        <ApplicationLoadingOverlayProvider>
          <p>For this example, the loading overlays will be active for 3 seconds.</p>
          <ApplicationLoadingOverlay isOpen={showClearOverlay} />
          <ApplicationLoadingOverlay isOpen={showLightOverlay} backgroundStyle="light" />
          <ApplicationLoadingOverlay isOpen={showDarkOverlay} backgroundStyle="dark" />
        </ApplicationLoadingOverlayProvider>
      </div>
    </>
  );
};

export default ApplicationLoadingOverlayExample;
