import React from 'react';

import BrandFooter from '../../lib/BrandFooter';

export default () =>
  <BrandFooter
    links={[
      { text: 'cerner-same-window', href: 'https://www.cerner.com/' },
      { text: 'cerner-different-window', href: 'https://www.cerner.com/', target: '_blank' },
      { text: 'cerner-random-target', href: 'https://www.cerner.com/', target: 'abcd' },
    ]}
    copyright={<span>Copyright &copy; 2018 Cerner Corporation.  All Rights Reserved.</span>}
  />;
