import React from 'react';
import Layout from '../../../Layout';

import ContentExample from '../common/ContentExample';
import ToolbarExample from '../common/ToolbarExample';

const layout = () => (
  <Layout
    header={<ToolbarExample />}
    style={{ height: '400px', width: '100%' }}
  >
    <ContentExample />
  </Layout>
);

export default layout;
