import React, {
  useState, useRef, useEffect,
} from 'react';

import ApplicationStatusOverlay from 'terra-application/lib/application-status-overlay';

const StatusOverlayPresenter = () => {
  const [showStatusOverlay, setShowStatusOverlay] = useState(false);

  const timeoutRef = useRef();

  useEffect(() => {
    window.clearTimeout(timeoutRef.current);
  }, []);

  return (
    <div>
      <h3>Status View Presenter</h3>
      <p>This component uses the ApplicationStatusOverlay to present a status view over itself. The status view in this demo is shown for 2 seconds.</p>
      <p>
        <button
          disabled={showStatusOverlay}
          type="button"
          onClick={() => {
            setShowStatusOverlay(true);
            timeoutRef.current = setTimeout(() => {
              setShowStatusOverlay(false);
            }, 2000);
          }}
        >
          Show Status View
        </button>
      </p>
      {showStatusOverlay && <ApplicationStatusOverlay message="This is a demo status view" variant="no-data" />}
    </div>
  );
};

export default StatusOverlayPresenter;
