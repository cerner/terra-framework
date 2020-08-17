import React from 'react';
import Menu from 'terra-application-menu-layout';
import Image from 'terra-image';
import classNames from 'classnames';
import ThemeContext from 'terra-theme-context';
import classNamesBind from 'classnames/bind';
import Placeholder from 'terra-application-name/lib/terra-dev-site/doc/common/Placeholder';
import { ApplicationMenuName } from 'terra-application-name';
import demoColors from '../../test/application-name/demoStyles.module.scss';
import styles from './ApplicationMenuNameStandard.module.scss';

const cx = classNamesBind.bind(demoColors);
const cy = classNamesBind.bind(styles);
const ApplicationMenuNameStandard = () => {
  const theme = React.useContext(ThemeContext);
  const demoClassName = classNames(cx(
    'demo-background-color',
    theme.className,
  ));

  return (
    <Menu
      className={cy('demo-size')}
      header={(
        <ApplicationMenuName
          title="App-Name"
          accessory={<Image alt="Terra Logo" variant="rounded" src="https://github.com/cerner/terra-framework/raw/main/terra.png" className={cx('demo-image-container')} isFluid />}
          className={demoClassName}
        />
      )}
      extensions={<Placeholder text="Extensions" type="menu-extensions" />}
      content={<Placeholder text="Content" type="default" />}
      footer={<Placeholder text="Footer" type="footer" />}
    />
  );
};

export default ApplicationMenuNameStandard;
