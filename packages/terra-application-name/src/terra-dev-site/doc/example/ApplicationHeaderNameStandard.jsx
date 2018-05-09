import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import Image from 'terra-image';
import Placeholder from '../common/Placeholder';
import ApplicationHeaderName from '../../../ApplicationHeaderName';

const size = { height: '450px', width: '3000px' };
const ApplicationHeaderNameStandard = () => (
  <ApplicationHeaderLayout
    style={size}
    header={(
      <div style={{ backgroundColor: 'green' }}>
        <ApplicationHeaderName
          title="App-Name"
          accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
        />
      </div>
    )}
    extensions={<Placeholder text="Extensions" width="80px" />}
    navigation={<Placeholder text="Content" />}
    utilities={<Placeholder text="Utiltities" height="80px" />}
  />
);

export default ApplicationHeaderNameStandard;
