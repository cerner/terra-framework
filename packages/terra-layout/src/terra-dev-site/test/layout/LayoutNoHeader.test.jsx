import React from 'react';
import Layout from '../../../Layout';
import TestMenu from '../common/TestMenu';
import TestContent from '../common/TestContent';

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
