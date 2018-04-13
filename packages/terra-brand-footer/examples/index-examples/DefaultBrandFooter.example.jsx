import React from 'react';

import BrandFooter from '../../lib/BrandFooter';

export default () =>
  <BrandFooter
    links={[
      { text: 'Cerner Home', href: 'https://www.cerner.com/' },
      { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
    ]}
    contentRight={
      <div style={{ float: 'right' }}>
        <div>
          <p><small>Powered by</small></p>
          <p><b>React.js</b></p>
        </div>
      </div>
    }
    contentBottom={
      <p style={{ marignTop: '.7142857142857143rem' }} >
        <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
      </p>
    }
  />;
