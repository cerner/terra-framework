import React from 'react';
import { WorkspaceContent } from '../../../workspace';

const Tab4 = () => (
  <WorkspaceContent
    statusOverlay={(
      <WorkspaceContent.StatusOverlay variant="no-data" message="This is a message.">
        <WorkspaceContent.StatusOverlay.Button text="Action 1" />
        <WorkspaceContent.StatusOverlay.Button text="Action 2" />
      </WorkspaceContent.StatusOverlay>
    )}
  >
    <div>
      <p>Tab 4 Content</p>
    </div>
  </WorkspaceContent>
);

export default Tab4;
