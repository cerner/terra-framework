import React from 'react';
import Layout from '../../src/Layout';
import TestHeader from './TestHeader';
import TestMenu from './TestMenu';
import TestContent from './TestContent';

const LayoutDefault = () => (
  <Layout
    header={<TestHeader />}
    menu={<TestMenu />}
    menuText="Menu Text"
  >
    <TestContent />
  </Layout>
);

export default LayoutDefault;
