import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import ResponsiveElement from 'terra-responsive-element';
import ExtensionsExample from './ExtensionsExample';
import LogoExample from './LogoExample';
import NavigationExample from './NavigationExample';
import ToggleExample from './ToggleExample';
import UtilitiesExample from './UtilitiesExample';

const HeaderWireframe = () => {
  const tinyHeader = (
    <ApplicationHeaderLayout
      logo={<LogoExample size="tiny" />}
      utilities={<UtilitiesExample size="tiny" />}
      extensions={<ExtensionsExample size="tiny" />}
      navigation={<NavigationExample size="tiny" />}
      toggle={<ToggleExample size="tiny" />}
    />
  );

  const smallHeader = (
    <ApplicationHeaderLayout
      logo={<LogoExample size="small" />}
      utilities={<UtilitiesExample size="small" />}
      extensions={<ExtensionsExample size="small" />}
      navigation={<NavigationExample size="small" />}
      toggle={<ToggleExample size="small" />}
    />
  );

  const mediumHeader = (
    <ApplicationHeaderLayout
      logo={<LogoExample size="medium" />}
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

export default HeaderWireframe;
