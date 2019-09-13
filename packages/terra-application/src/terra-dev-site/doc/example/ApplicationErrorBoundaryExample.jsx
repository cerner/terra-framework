import React, { useState } from 'react';

import ApplicationErrorBoundary from '../../../application-error-boundary/ApplicationErrorBoundary';

const ErrorThrowingComponent = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('whoops');
  }

  return (
    <>
      <p>Press the button below to trigger an error.</p>
      <button type="button" onClick={() => { setThrowError(true); }}>Trigger Error</button>
    </>
  );
};

const ApplicationErrorBoundaryExample = () => (
  <div style={{ height: '30rem', width: '100%' }}>
    <ApplicationErrorBoundary>
      <ErrorThrowingComponent />
    </ApplicationErrorBoundary>
  </div>
);

export default ApplicationErrorBoundaryExample;
