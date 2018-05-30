import React from 'react';
import ApplicationMenuLayout from '../../../ApplicationMenuLayout';

const ApplicationMenuDefault = () => (
  <ApplicationMenuLayout
    id="test-menu"
    extensions={<div id="test-extensions">Extensions</div>}
    content={<div style={{ position: 'absolute', top: '50%', transform: 'translate3d(0, -50%, 0)' }} id="test-content">Content</div>}
    header={<div id="test-header">Header</div>}
    footer={<div id="test-footer">Footer</div>}
  />
);

export default ApplicationMenuDefault;
