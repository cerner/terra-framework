import React from 'react';

import BrandFooter from '../../src/BrandFooter';

export default () =>
  <BrandFooter
    links={[
      { text: 'cerner-same-window', href: 'https://www.cerner.com/' },
      { text: 'cerner-different-window', href: 'https://www.cerner.com/', target: '_blank' },
      { text: 'cerner-random-target', href: 'https://www.cerner.com/', target: 'abcd' },
    ]}
    contentBottom={
      <p style={{ marignTop: '.7142857142857143rem' }} >
        <small>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</small>
      </p>
    }
  />;
