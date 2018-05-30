import React from 'react';
import Layout from '../../../Layout';
import TestHeader from '../common/TestHeader';
import TestContent from '../common/TestContent';

const LayoutNoMenu = () => (
  <Layout
    style={{ height: '768px' }}
    key="layout-no-menu"
    header={<TestHeader />}
    id="test-root"
  >
    <TestContent />
  </Layout>
);

export default LayoutNoMenu;
