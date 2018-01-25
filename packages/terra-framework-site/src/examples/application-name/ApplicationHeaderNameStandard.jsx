import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import Image from 'terra-image';
import ResponsiveElement from 'terra-responsive-element';
import ApplicationHeaderName from 'terra-application-name/lib/ApplicationHeaderName';

import ExtensionsExample from '../application-header-layout/ExtensionsExample';
import NavigationExample from '../application-header-layout/NavigationExample';
import ToggleExample from '../application-header-layout/ToggleExample';
import UtilitiesExample from '../application-header-layout/UtilitiesExample';

const ApplicationHeaderNameStandard = () => {
  const color = { color: 'grey' };
  const tinyHeader = (
    <ApplicationHeaderLayout
      logo={<ApplicationHeaderName
        styles={color}
        title="App-Name"
        accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
        size="tiny"
      />}
      utilities={<UtilitiesExample size="tiny" />}
      extensions={<ExtensionsExample size="tiny" />}
      navigation={<NavigationExample size="tiny" />}
      toggle={<ToggleExample size="tiny" />}
    />
  );

  const smallHeader = (
    <ApplicationHeaderLayout
      logo={<ApplicationHeaderName
        style={color}
        title="App-Name"
        accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
        size="small"
      />}
      utilities={<UtilitiesExample size="small" />}
      extensions={<ExtensionsExample size="small" />}
      navigation={<NavigationExample size="small" />}
      toggle={<ToggleExample size="small" />}
    />
  );

  const mediumHeader = (
    <ApplicationHeaderLayout
      logo={<ApplicationHeaderName
        style={color}
        title="App-Name"
        accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
        size="medium"
      />}
      utilities={<UtilitiesExample size="medium" />}
      extensions={<ExtensionsExample size="medium" />}
      navigation={<NavigationExample size="medium" />}
      toggle={<ToggleExample size="medium" />}
    />
  );

  return (
    <div style={{ height: '60px', position: 'relative', width: '100%' }}>
      <ResponsiveElement
        defaultElement={tinyHeader}
        tiny={tinyHeader}
        small={smallHeader}
        medium={mediumHeader}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ApplicationHeaderNameStandard;
