import React, { useState } from 'react';
import ApplicationErrorBoundary from '../../../../../lib/application-error-boundary/ApplicationErrorBoundary';

const ErrorComponent = () => {
  const [throwError, setThrowError] = useState(false);

  if (throwError) {
    throw new Error('ouch');
  }

  return (
    <button type="button" onClick={() => { setThrowError(true); }}>Throw Error</button>
  );
};

const ErrorBoundaryTest = () => (
  <ApplicationErrorBoundary>
    <ErrorComponent />
  </ApplicationErrorBoundary>
);

export default ErrorBoundaryTest;
