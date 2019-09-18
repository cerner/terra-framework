import React, { useState, useContext } from 'react';
import { injectIntl } from 'react-intl';
import { ActiveBreakpointContext } from '../../../breakpoints';
import ApplicationLoadingOverlay from '../../../application-loading-overlay';
import ApplicationBase from '../../../application-base';

const ApplicationContentExample = injectIntl(({ intl }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [throwError, setThrowError] = useState(false);

  const activeBreakpoint = useContext(ActiveBreakpointContext);

  if (throwError) {
    throw new Error("Testing ApplicationBase's error boundary...");
  }

  return (
    <div>
      <p>
        Active Breakpoint:
        {' '}
        {activeBreakpoint}
      </p>
      <p>
        Active Locale:
        {' '}
        {intl.locale}
      </p>
      <p>
        Render Error:
        {' '}
        <button type="button" onClick={() => { setThrowError(true); }}>Throw</button>
      </p>
      <p>
        Show Loading Overlay (3 seconds):
        {' '}
        <button type="button" onClick={() => { setIsLoading(true); setTimeout(() => { setIsLoading(false); }, 3000); }}>Show</button>
      </p>
      <ApplicationLoadingOverlay isOpen={isLoading} message="Testing ApplicationBase's loading overlay" />
    </div>
  );
});

const ApplicationBaseExample = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContentExample />
  </ApplicationBase>
);

export default ApplicationBaseExample;
