import React, { useState, useContext } from 'react';
import { ApplicationIntlContext } from 'terra-application/lib/application-intl';
import { ThemeContext } from 'terra-application/lib/theme';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import ApplicationBase from 'terra-application/lib/application-base';
import NavigationPrompt from 'terra-application/lib/navigation-prompt';

const ApplicationContentExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [throwError, setThrowError] = useState(false);
  const [blockUnload, setBlockUnload] = useState(false);

  const activeBreakpoint = useContext(ActiveBreakpointContext);
  const applicationIntl = useContext(ApplicationIntlContext);

  if (throwError) {
    throw new Error("Testing ApplicationBase's error boundary...");
  }

  const activeBreakpointExample = (
    <p>
      Active Breakpoint:
      {' '}
      {activeBreakpoint}
    </p>
  );

  const intlExample = (
    <p>
      Active Locale:
      {' '}
      {applicationIntl.locale}
    </p>
  );

  const errorBoundaryExample = (
    <p>
      Render Error:
      {' '}
      <button type="button" onClick={() => { setThrowError(true); }}>Throw</button>
    </p>
  );

  const loadingOverlayExample = (
    <>
      <p>
        Show Loading Overlay (3 seconds):
        {' '}
        <button type="button" onClick={() => { setIsLoading(true); setTimeout(() => { setIsLoading(false); }, 3000); }}>Show</button>
      </p>
      <ApplicationLoadingOverlay isOpen={isLoading} message="Testing ApplicationBase's loading overlay" backgroundStyle="light" />
    </>
  );

  const navigationPromptExample = (
    <>
      <p>
        Prompt on window close:
        {' '}
        <input
          type="checkbox"
          name="prompt"
          onChange={() => {
            setBlockUnload(!blockUnload);
          }}
        />
      </p>
      {blockUnload ? <NavigationPrompt description="Testing ApplicationBase's navigation prompt handling" /> : undefined}
    </>
  );

  return (
    <div>
      {activeBreakpointExample}
      {intlExample}
      {errorBoundaryExample}
      {loadingOverlayExample}
      {navigationPromptExample}
    </div>
  );
};

const ApplicationBaseExample = () => {
  const applicationIntl = useContext(ApplicationIntlContext);
  const theme = React.useContext(ThemeContext);

  return (
    <ApplicationBase locale={applicationIntl.locale} themeName={theme.className}>
      <ApplicationContentExample />
    </ApplicationBase>
  );
};

export default ApplicationBaseExample;
