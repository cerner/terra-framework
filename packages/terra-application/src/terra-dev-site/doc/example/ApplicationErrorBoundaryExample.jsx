import React, { useState } from 'react';
import classNames from 'classnames/bind';

import ApplicationErrorBoundary from 'terra-application/lib/application-error-boundary/ApplicationErrorBoundary';
import styles from './ApplicationErrorBoundaryExample.module.scss';

const cx = classNames.bind(styles);

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

const ApplicationErrorBoundaryExample = ({ children }) => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className={cx('example')}>
      <button type="button" onClick={() => { setRefresh(!refresh); }}>Refresh Component</button>
      <ApplicationErrorBoundary>
        {children}      
      </ApplicationErrorBoundary>
    </div>
  );
};

const What = () => (
  <ApplicationErrorBoundaryExample>
    <ErrorThrowingComponent />
  </ApplicationErrorBoundaryExample>
);

export default What;
