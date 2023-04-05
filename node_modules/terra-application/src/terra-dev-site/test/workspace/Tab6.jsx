import React from 'react';
import {
  WorkspaceContent,
} from '../../../workspace';

const Tab6 = () => (
  <WorkspaceContent
    activityOverlay={<WorkspaceContent.ActivityOverlay variant="loading" />}
    label="Tab 6 with Jam and Bread"
  >
    <div>
      <p>Tab 6 Content</p>
    </div>
  </WorkspaceContent>
);

export default Tab6;
