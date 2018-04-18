import React from 'react';

import BrandFooter from '../../lib/BrandFooter';

export default () =>
  <BrandFooter
    links={[
      { text: 'Cerner Home', href: 'https://www.cerner.com/' },
      { text: 'Cerner Code', href: 'https://code.cerner.com/', target: '_blank' },
    ]}
    contentLeft={
      <a href="http://terra-ui.herokuapp.com/static/#/site/home"
         style={{
           backgroundColor: 'transparent',
           color: '#0065a3',
           textDecoration: 'none',
        }}
      >
        <img
          alt="Cerner Corporation #### ~"
          src="https://github.com/cerner/terra-core/raw/master/terra.png"
          style={{
            border: '0',
            maxWidth: '100%',
            height: '40px',
            verticalAlign: 'top',
          }}
        />
      </a>
    }
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
