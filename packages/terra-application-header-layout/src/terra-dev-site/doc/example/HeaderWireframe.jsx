import React from 'react';
import classNames from 'classnames/bind';
import ResponsiveElement from 'terra-responsive-element/lib/ResponsiveElement';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import ApplicationHeaderLayout from 'terra-application-header-layout/lib/ApplicationHeaderLayout';
import ExtensionsExample from 'terra-application-header-layout/lib/terra-dev-site/doc/common/ExtensionsExample';
import LogoExample from 'terra-application-header-layout/lib/terra-dev-site/doc/common/LogoExample';
import NavigationExample from 'terra-application-header-layout/lib/terra-dev-site/doc/common/NavigationExample';
import ToggleExample from 'terra-application-header-layout/lib/terra-dev-site/doc/common/ToggleExample';
import UtilitiesExample from 'terra-application-header-layout/lib/terra-dev-site/doc/common/UtilitiesExample';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import styles from './HeaderWireframe.scss';

const cx = classNames.bind(styles);

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

  const mediumHeader = (
    <ApplicationHeaderLayout
      logo={<LogoExample size="small" />}
      utilities={<UtilitiesExample size="small" />}
      extensions={<ExtensionsExample size="small" />}
      navigation={<NavigationExample size="small" />}
      toggle={<ToggleExample size="small" />}
    />
  );

  const largeHeader = (
    <ApplicationHeaderLayout
      logo={<LogoExample size="medium" />}
      utilities={<UtilitiesExample size="medium" />}
      extensions={<ExtensionsExample size="medium" />}
      navigation={<NavigationExample size="medium" />}
      toggle={<ToggleExample size="medium" />}
    />
  );

  return (
    <div className={cx('content-wrapper')}>
      <div className={cx('responsive-element-wrapper')}>
        <ResponsiveElement
          tiny={tinyHeader}
          medium={mediumHeader}
          large={largeHeader}
        />
      </div>
    </div>
  );
};

export default HeaderWireframe;
