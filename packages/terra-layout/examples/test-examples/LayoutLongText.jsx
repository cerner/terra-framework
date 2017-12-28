import React from 'react';
import Layout from '../../src/Layout';
import TestHeader from './test-content//TestHeader';
import TestMenu from './test-content//TestMenu';
import TestContent from './test-content//TestContent';

const LayoutLongText = () => (
  <Layout
    key="layout-long-text"
    header={<TestHeader />}
    menu={<TestMenu />}
    menuText="Menu Text That Is Really Really Really Really Really Really Really Really Really Really Really Really Really Really Really Really Long"
  >
    <TestContent />
  </Layout>
);

export default LayoutLongText;
