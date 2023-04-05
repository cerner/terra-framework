import React, {
  useState, useRef, useEffect,
} from 'react';

import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';

const LoadingOverlayPresenter = () => {
  const [showLoadingOverlay, setShowLoadingOverlay] = useState(false);

  const timeoutRef = useRef();

  useEffect(() => () => {
    window.clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div>
      <h3>Loading Overlay Presenter</h3>
      <p>This component uses the ApplicationLoadingOverlay to present a loading overlay over itself. The overlay in this demo is shown for 2 seconds.</p>
      <p>
        <button
          disabled={showLoadingOverlay}
          type="button"
          onClick={() => {
            setShowLoadingOverlay(true);
            timeoutRef.current = setTimeout(() => {
              setShowLoadingOverlay(false);
            }, 2000);
          }}
        >
          Show Loading Overlay
        </button>
      </p>
      <ApplicationLoadingOverlay isOpen={showLoadingOverlay} backgroundStyle="light" />
    </div>
  );
};

export default LoadingOverlayPresenter;
