import React, { useState } from 'react';
import ApplicationLoadingOverlay from '../../../../../lib/application-loading-overlay/ApplicationLoadingOverlay';
import ApplicationLoadingOverlayProvider from '../../../../../lib/application-loading-overlay/ApplicationLoadingOverlayProvider';

const ApplicationLoadingOverlayConsumer = () => {
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);

  return (
    <>
      <ApplicationLoadingOverlay isOpen={showLoadingOverlay} message="Loading 1" />
      <ApplicationLoadingOverlay isOpen={showLoadingOverlay} message="Loading 2" />
      <button type="button" onClick={() => { setShowLoadingOverlay(true); }}>Show Loading Overlay</button>
    </>
  );
};

const LoadingOverlayTest = () => (
  <ApplicationLoadingOverlayProvider>
    <ApplicationLoadingOverlayConsumer />
  </ApplicationLoadingOverlayProvider>
);

export default LoadingOverlayTest;
