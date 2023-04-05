import React from 'react';
import ApplicationStatusOverlay from '../../../../lib/application-status-overlay/ApplicationStatusOverlay';
import ApplicationStatusOverlayProvider from '../../../../lib/application-status-overlay/ApplicationStatusOverlayProvider';

const ApplicationStatusOverlayAllProps = () => {
  const StatusViewButtons = [
    {
      text: 'Action 1',
      key: 1,
    }, {
      text: 'Action 2',
      key: 2,
    },
  ];

  return (
    // eslint-disable-next-line react/forbid-dom-props
    <div style={{ height: '500px' }}>
      <ApplicationStatusOverlayProvider>
        <ApplicationStatusOverlay buttonAttrs={StatusViewButtons} message="Status View with all props" variant="no-data" />
      </ApplicationStatusOverlayProvider>
    </div>
  );
};

export default ApplicationStatusOverlayAllProps;
