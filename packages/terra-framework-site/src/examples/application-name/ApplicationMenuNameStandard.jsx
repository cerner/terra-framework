import React from 'react';
import Menu from 'terra-application-menu-layout';
import Image from 'terra-image';
import Placeholder from '../../app/common/Placeholder';
import ApplicationMenuName from 'terra-application-name/lib/ApplicationMenuName';

const color = { color: 'grey' };
const size = { height: '450px', width: '300px' };
const ApplicationMenuNameStandard = () => (
  <Menu
    style={size}
    header={(
      <ApplicationMenuName
        style={color}
        title="App-Name"
        subtitle="Subtitle"
        accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
        size={'small'}
      />
    )}
    extensions={<Placeholder text="Extensions" height="50px" />}
    content={<Placeholder text="Content" />}
    footer={<Placeholder text="Footer" height="50px" />}
  />
);


export default ApplicationMenuNameStandard;
