import React from 'react';

import BrandFooter from '../../../BrandFooter';

export default () => (
  <BrandFooter
    isVertical
    sections={[
      {
        headerText: 'Links',
        links: [
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homea' },
          { text: 'Cerner', href: 'https://www.cerner.com/a', target: '_blank' },
          { text: 'Cerner', href: 'https://www.cerner.com/b', target: '_blank' },
          { text: 'Cerner', href: 'https://www.cerner.com/c', target: '_blank' },
          { text: 'Cerner', href: 'https://www.cerner.com/d', target: '_blank' },
        ],
      },
      {
        headerText: 'More Links',
        links: [
          { text: 'Cerner Engineering', href: 'https://engineering.cerner.com/a' },
          { text: 'Cerner Engineering', href: 'https://engineering.cerner.com/b' },
          { text: 'Cerner Engineering', href: 'https://engineering.cerner.com/c' },
          { text: 'Cerner Engineering', href: 'https://engineering.cerner.com/d' },
          { text: 'Cerner Engineering', href: 'https://engineering.cerner.com/e' },
        ],
      },
      {
        headerText: 'Extra Links',
        links: [
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homeb' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homec' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homed' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homee' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homef' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homeg' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homeh' },
        ],
      },
      {
        links: [
          { text: 'No Header', href: 'http://terra-ui.com/static/#/site/homea' },
          { text: 'No Header', href: 'http://terra-ui.com/static/#/site/homeb' },
          { text: 'No Header', href: 'http://terra-ui.com/static/#/site/homec' },
          { text: 'No Header', href: 'http://terra-ui.com/static/#/site/homed' },
        ],
      },
      {
        links: [
          { text: 'No Header', href: 'http://terra-ui.com/static/#/site/homea' },
          { text: 'No Header', href: 'http://terra-ui.com/static/#/site/homeb' },
          { text: 'No Header', href: 'http://terra-ui.com/static/#/site/homec' },
          { text: 'No Header', href: 'http://terra-ui.com/static/#/site/homed' },
        ],
      },
      {
        headerText: 'Extra Links',
        links: [
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homeb' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homec' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homed' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homee' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homef' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homeg' },
          { text: 'Terra UI', href: 'http://terra-ui.com/static/#/site/homeh' },
        ],
      },
    ]}
  />
);
