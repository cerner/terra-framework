import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import Image from 'terra-image';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Placeholder from 'terra-application-name/lib/terra-dev-site/doc/common/Placeholder';
import ApplicationHeaderName from 'terra-application-name/lib/ApplicationHeaderName';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

const demosize = { height: '50px', width: '100%' };
const demobgcolor = { backgroundColor: 'rgb(140, 161, 177)' };
const ApplicationHeaderNameStandard = () => (
  <ApplicationHeaderLayout
    style={demosize}
    logo={(
      <ApplicationHeaderName
        title="App-Name"
        accessory={<Image variant="rounded" src="https://github.com/cerner/terra-framework/raw/master/terra.png" height="26px" width="26px" isFluid />}
        style={demobgcolor}
      />
    )}
    extensions={<Placeholder text="Extensions" width="100px" />}
    navigation={<Placeholder text="Content" />}
    utilities={<Placeholder text="Utiltities" width="100px" />}
  />
);

export default ApplicationHeaderNameStandard;
