import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import Image from 'terra-image';
import ResponsiveElement from 'terra-responsive-element';
import NavigationExample from 'terra-application-header-layout/examples/index-examples/NavigationExample';
import ToggleExample from 'terra-application-header-layout/examples/index-examples/ToggleExample';
import UtilitiesExample from 'terra-application-header-layout/examples/index-examples/UtilitiesExample';
import ExtensionsExample from 'terra-application-header-layout/examples/index-examples/ExtensionsExample';
import ApplicationHeaderName from '../../lib/ApplicationHeaderName';

const ApplicationHeaderNameStandard = () => {
  const Name = (<ApplicationHeaderName
    style={{ backgroundColor: 'green' }}
    title="App-Name"
    accessory={<Image variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" isFluid />}
  />);
  const tinyHeader = (
    <ApplicationHeaderLayout
      logo={Name}
      utilities={<UtilitiesExample size="tiny" />}
      extensions={<ExtensionsExample size="tiny" />}
      navigation={<NavigationExample size="tiny" />}
      toggle={<ToggleExample size="tiny" />}
    />
  );

  const smallHeader = (
    <ApplicationHeaderLayout
      logo={Name}
      utilities={<UtilitiesExample size="small" />}
      extensions={<ExtensionsExample size="small" />}
      navigation={<NavigationExample size="small" />}
      toggle={<ToggleExample size="small" />}
    />
  );

  const mediumHeader = (
    <ApplicationHeaderLayout
      logo={Name}
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
        small={smallHeader}
        medium={mediumHeader}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ApplicationHeaderNameStandard;
