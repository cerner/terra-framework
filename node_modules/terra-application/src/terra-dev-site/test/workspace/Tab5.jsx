import React from 'react';
import {
  WorkspaceContent,
} from '../../../workspace';

const Tab5 = () => {
  const [isLoading, setIsLoading] = React.useState();

  return (
    <WorkspaceContent
      activityOverlay={isLoading ? <WorkspaceContent.ActivityOverlay variant="loading" /> : undefined}
      statusOverlay={(
        <WorkspaceContent.StatusOverlay variant="error" message="This is an error message.">
          <WorkspaceContent.StatusOverlay.Button
            text="Retry"
            onClick={() => {
              setIsLoading(true);

              setTimeout(() => {
                setIsLoading(false);
              }, 5000);
            }}
          />
        </WorkspaceContent.StatusOverlay>
      )}
    >
      <div>
        <p>Tab 5 Content</p>
      </div>
    </WorkspaceContent>
  );
};

export default Tab5;
