import React, { useState, useContext } from 'react';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import ApplicationStatusOverlay from 'terra-application/lib/application-status-overlay';
import ApplicationBase from 'terra-application/lib/application-base';
import NavigationPrompt from 'terra-application/lib/navigation-prompt';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import { ThemeContext } from 'terra-application/lib/theme';

const ApplicationContentTest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [throwError, setThrowError] = useState(false);
  const [blockUnload, setBlockUnload] = useState(false);
  const [showStatusOverlay, setShowStatusOverlay] = useState(false);

  const activeBreakpoint = useContext(ActiveBreakpointContext);
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = useContext(ThemeContext);

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
      {applicationIntl.locale}
    </p>
  );

  const themeTest = (
    <p>
      Active Theme:
      {' '}
      {theme.name}
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

  const statusOverlayTest = (
    <>
      <p>
        Show Status View:
        {' '}
        <button id="statusView" type="button" onClick={() => { setShowStatusOverlay(true); }}>Show</button>
      </p>
      {showStatusOverlay && <ApplicationStatusOverlay message="Testing ApplicationBase's status view" variant="no-matching-results" />}
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
      {themeTest}
      {errorBoundaryTest}
      {loadingOverlayTest}
      {statusOverlayTest}
      {navigationPromptTest}
    </div>
  );
};

const ApplicationBaseTest = () => (
  <ApplicationBase>
    <ApplicationContentTest />
  </ApplicationBase>
);

export default ApplicationBaseTest;
