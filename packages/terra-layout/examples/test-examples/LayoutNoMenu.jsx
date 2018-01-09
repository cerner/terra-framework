import React from 'react';
import Layout from '../../lib/Layout';
import TestHeader from './test-content/TestHeader';
import TestContent from './test-content/TestContent';

const LayoutNoMenu = () => (
  <Layout
    key="layout-no-menu"
    header={<TestHeader />}
    id="test-root"
  >
    <TestContent />
  </Layout>
);

export default LayoutNoMenu;
