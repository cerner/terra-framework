import React from 'react';
import Layout from '../../src/Layout';
import TestMenu from './test-content//TestMenu';
import TestContent from './test-content//TestContent';

const LayoutNoHeader = () => (
  <Layout
    key="layout-no-header"
    menu={<TestMenu />}
    menuText="Menu Text"
  >
    <TestContent />
  </Layout>
);

export default LayoutNoHeader;
