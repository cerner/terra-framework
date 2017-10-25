import React from 'react';
import Layout from '../../src/Layout';
import TestHeader from './TestHeader';
import TestMenu from './TestMenu';
import TestContent from './TestContent';

const LayoutLongText = () => (
  <Layout
    header={<TestHeader />}
    menu={<TestMenu />}
    menuText="Menu Text That Is Really Really Really Really Really Really Really Really Really Really Really Really Really Really Really Really Long"
  >
    <TestContent />
  </Layout>
);

export default LayoutLongText;
