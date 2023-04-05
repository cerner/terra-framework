import React, { useState } from 'react';
import ApplicationErrorBoundary from '../../../../lib/application-error-boundary/ApplicationErrorBoundary';

const ErrorComponent = () => {
  const [throwError, setThrowError] = useState(false);
  const [throwDefaultError, setThrowDefaultError] = useState(false);

  if (throwError) {
    throw new Error('ouch');
  }

  if (throwDefaultError) {
    throw new Error();
  }

  return (
    <>
      <button type="button" onClick={() => { setThrowError(true); }}>Throw Error</button>
      <button type="button" id="defaultMessage" onClick={() => { setThrowDefaultError(true); }}>Throw Default Error</button>
    </>
  );
};

const ErrorBoundaryTest = () => (
  <ApplicationErrorBoundary>
    <ErrorComponent />
  </ApplicationErrorBoundary>
);

export default ErrorBoundaryTest;
