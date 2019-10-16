import React, { useState, useContext } from 'react';
import { injectIntl } from 'react-intl';
import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';
import ApplicationLoadingOverlay from 'terra-application/lib/application-loading-overlay';
import ApplicationBase from 'terra-application/lib/application-base';
import NavigationPrompt from 'terra-application/lib/navigation-prompt';

const ApplicationContentExample = injectIntl(({ intl }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [throwError, setThrowError] = useState(false);
  const [blockUnload, setBlockUnload] = useState(false);

  const activeBreakpoint = useContext(ActiveBreakpointContext);

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
      {intl.locale}
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
      <ApplicationLoadingOverlay isOpen={isLoading} message="Testing ApplicationBase's loading overlay" />
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
});

const ApplicationBaseExample = () => (
  <ApplicationBase locale="en-US">
    <ApplicationContentExample />
  </ApplicationBase>
);

export default ApplicationBaseExample;
