import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import Image from 'terra-image';
import Placeholder from '../common/Placeholder';
import ApplicationHeaderName from '../../../ApplicationHeaderName';

const size = { height: '50px', width: '100%' };
const ApplicationHeaderNameStandard = () => (
  <ApplicationHeaderLayout
    style={size}
    logo={(
      <div style={{ backgroundColor: 'green' }}>
        <ApplicationHeaderName
          title="App-Name"
          accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
        />
      </div>
    )}
    extensions={<Placeholder text="Extensions" width="100px" />}
    navigation={<Placeholder text="Content" />}
    utilities={<Placeholder text="Utiltities" width="100px" />}
  />
);

export default ApplicationHeaderNameStandard;
