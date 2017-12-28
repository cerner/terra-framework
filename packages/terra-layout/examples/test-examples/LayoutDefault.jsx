import React from 'react';
import Layout from '../../src/Layout';
import TestHeader from './test-content//TestHeader';
import TestMenu from './test-content//TestMenu';
import TestContent from './test-content//TestContent';

const LayoutDefault = () => (
  <Layout
    key="layout-default"
    header={<TestHeader />}
    menu={<TestMenu />}
    menuText="Menu Text"
  >
    <TestContent />
  </Layout>
);

export default LayoutDefault;
