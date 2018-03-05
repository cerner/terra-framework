import React from 'react';
import Layout from '../../lib/Layout';
import TestMenu from './test-content/TestMenu';
import TestContent from './test-content/TestContent';

const LayoutNoHeader = () => (
  <Layout
    style={{ height: '768px' }}
    key="layout-no-header"
    menu={<TestMenu />}
    menuText="Menu Text"
    id="test-root"
  >
    <TestContent />
  </Layout>
);

export default LayoutNoHeader;
