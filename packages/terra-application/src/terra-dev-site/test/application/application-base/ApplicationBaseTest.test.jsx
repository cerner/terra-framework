import React, { useState, useContext } from 'react';
import { injectIntl } from 'react-intl';
import { ActiveBreakpointContext } from '../../../../breakpoints';
import ApplicationLoadingOverlay from '../../../../application-loading-overlay';
import ApplicationBase from '../../../../application-base';
import NavigationPrompt from '../../../../navigation-prompt';

const ApplicationContentTest = injectIntl(({ intl }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [throwError, setThrowError] = useState(false);
  const [blockUnload, setBlockUnload] = useState(false);

  const activeBreakpoint = useContext(ActiveBreakpointContext);

  if (throwError) {
    throw new Error("Testing ApplicationBase's error boundary...");
  }

  const activeBreakpointTest = (
    <p>
      Active Breakpoint:
      {' '}
      {activeBreakpoint}
    </p>
  );

  const intlTest = (
    <p>
      Active Locale:
      {' '}
      {intl.locale}
    </p>
  );

  const errorBoundaryTest = (
    <p>
      Render Error:
      {' '}
      <button id="error" type="button" onClick={() => { setThrowError(true); }}>Throw</button>
    </p>
  );

  const loadingOverlayTest = (
    <>
      <p>
        Show Loading Overlay:
        {' '}
        <button id="overlay" type="button" onClick={() => { setIsLoading(true); }}>Show</button>
      </p>
      <ApplicationLoadingOverlay isOpen={isLoading} message="Testing ApplicationBase's loading overlay" />
    </>
  );

  const navigationPromptTest = (
    <>
      <p>
        Prompt on window close:
        {' '}
        <button
          id="prompt"
          type="button"
          onClick={() => {
            setBlockUnload(!blockUnload);
          }}
        >
          Enable navigation prompt
        </button>
      </p>
      {blockUnload ? <NavigationPrompt description="Testing ApplicationBase's navigation prompt handling" /> : undefined}
    </>
  );

  return (
    <div>
      {activeBreakpointTest}
      {intlTest}
      {errorBoundaryTest}
      {loadingOverlayTest}
      {navigationPromptTest}
    </div>
  );
});

const ApplicationBaseTest = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContentTest />
  </ApplicationBase>
);

export default ApplicationBaseTest;
