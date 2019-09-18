import React, { useState } from 'react';
import classNames from 'classnames/bind';

import ApplicationErrorBoundary from '../../../application-error-boundary/ApplicationErrorBoundary';
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

const ApplicationErrorBoundaryExample = () => (
  <div className={cx('example')}>
    <ApplicationErrorBoundary>
      <ErrorThrowingComponent />
    </ApplicationErrorBoundary>
  </div>
);

export default ApplicationErrorBoundaryExample;
