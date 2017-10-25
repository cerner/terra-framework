import React from 'react';
import Layout from '../../src/Layout';
import TestHeader from './TestHeader';
import TestContent from './TestContent';

const LayoutNoMenu = () => (
  <Layout
    header={<TestHeader />}
  >
    <TestContent />
  </Layout>
);

export default LayoutNoMenu;
