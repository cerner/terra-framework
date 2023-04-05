import React, { useState } from 'react';
import ApplicationLoadingOverlay from '../../../../lib/application-loading-overlay/ApplicationLoadingOverlay';
import ApplicationLoadingOverlayProvider from '../../../../lib/application-loading-overlay/ApplicationLoadingOverlayProvider';

const ApplicationLoadingOverlayTest = () => {
  const [showClearOverlay, setShowClearOverlay] = useState(false);
  const [showLightOverlay, setShowLightOverlay] = useState(false);
  const [showDarkOverlay, setShowDarkOverlay] = useState(false);

  return (
    <>
      <button
        id="reset-button"
        type="button"
        onClick={() => {
          setShowClearOverlay(false);
          setShowLightOverlay(false);
          setShowDarkOverlay(false);
        }}
      >
        Reset
      </button>
      <button
        id="clear-button"
        type="button"
        onClick={() => {
          setShowClearOverlay(true);
        }}
      >
        Show Clear Loading Overlay
      </button>
      <button
        id="light-button"
        type="button"
        onClick={() => {
          setShowLightOverlay(true);
        }}
      >
        Show Light Loading Overlay
      </button>
      <button
        id="dark-button"
        type="button"
        onClick={() => {
          setShowDarkOverlay(true);
        }}
      >
        Show Dark Loading Overlay
      </button>
      <ApplicationLoadingOverlayProvider>
        <ApplicationLoadingOverlay isOpen={showClearOverlay} />
        <ApplicationLoadingOverlay isOpen={showLightOverlay} backgroundStyle="light" />
        <ApplicationLoadingOverlay isOpen={showDarkOverlay} backgroundStyle="dark" />
      </ApplicationLoadingOverlayProvider>
    </>
  );
};

export default ApplicationLoadingOverlayTest;
