import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import ResponsiveElement from 'terra-responsive-element';
import ExtensionsExample from './ExtensionsExample';
import LogoExample from './LogoExample';
import NavigationExample from './NavigationExample';
import ToggleExample from './ToggleExample';
import UtilitiesExample from './UtilitiesExample';

const HeaderWireframe = () => {
  const defaultHeader = (
    <ApplicationHeaderLayout
      layoutConfig={{ size: 'tiny', toggleMenu: () => {} }}
      logo={<LogoExample />}
      utilities={<UtilitiesExample />}
      extensions={<ExtensionsExample />}
      navigation={<NavigationExample />}
      toggle={<ToggleExample />}
    />
  );

  const tinyHeader = (
    <ApplicationHeaderLayout
      layoutConfig={{ size: 'tiny', toggleMenu: () => {} }}
      logo={<LogoExample />}
      utilities={<UtilitiesExample />}
      extensions={<ExtensionsExample />}
      navigation={<NavigationExample />}
      toggle={<ToggleExample />}
    />
  );

  const smallHeader = (
    <ApplicationHeaderLayout
      layoutConfig={{ size: 'small', toggleMenu: () => {} }}
      logo={<LogoExample />}
      utilities={<UtilitiesExample />}
      extensions={<ExtensionsExample />}
      navigation={<NavigationExample />}
      toggle={<ToggleExample />}
    />
  );

  const mediumHeader = (
    <ApplicationHeaderLayout
      layoutConfig={{ size: 'medium', toggleMenu: () => {} }}
      logo={<LogoExample />}
      utilities={<UtilitiesExample />}
      extensions={<ExtensionsExample />}
      navigation={<NavigationExample />}
      toggle={<ToggleExample />}
    />
  );

  return (
    <div style={{ height: '60px', position: 'relative', width: '100%' }}>
      <ResponsiveElement
        defaultElement={defaultHeader}
        tiny={tinyHeader}
        small={smallHeader}
        medium={mediumHeader}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default HeaderWireframe;
