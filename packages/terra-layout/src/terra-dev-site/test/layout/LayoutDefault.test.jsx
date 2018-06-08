import React from 'react';
import Layout from '../../../Layout';
import TestHeader from '../common/TestHeader';
import TestMenu from '../common/TestMenu';
import TestContent from '../common/TestContent';

const LayoutDefault = () => (
  <Layout
    style={{ height: '768px' }}
    key="layout-default"
    header={<TestHeader />}
    menu={<TestMenu />}
    menuText="Menu Text"
    id="test-root"
  >
    <TestContent />
  </Layout>
);

export default LayoutDefault;
