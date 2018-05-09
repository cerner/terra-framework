import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ResponsiveElement from 'terra-responsive-element/lib/ResponsiveElement';
import ApplicationHeaderLayout from '../../../ApplicationHeaderLayout';
import ExtensionsExample from '../common/ExtensionsExample';
import LogoExample from '../common/LogoExample';
import NavigationExample from '../common/NavigationExample';
import ToggleExample from '../common/ToggleExample';
import UtilitiesExample from '../common/UtilitiesExample';

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
