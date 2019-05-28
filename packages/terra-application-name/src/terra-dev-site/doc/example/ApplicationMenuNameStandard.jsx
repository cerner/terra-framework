import React from 'react';
import Menu from 'terra-application-menu-layout';
import Image from 'terra-image';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Placeholder from 'terra-application-name/lib/terra-dev-site/doc/common/Placeholder';
import ApplicationMenuName from 'terra-application-name/lib/ApplicationMenuName';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import demoColors from '../../test/application-name/demoStyles.scss';
import styles from './ApplicationMenuNameStandard.scss';

const cx = classNames.bind(demoColors);
const cy = classNames.bind(styles);
const ApplicationMenuNameStandard = () => (
  <Menu
    className={cy('demo-size')}
    header={(
      <ApplicationMenuName
        title="App-Name"
        accessory={<Image alt="Terra Logo" variant="rounded" src="https://github.com/cerner/terra-framework/raw/master/terra.png" className={cx('demo-image-container')} isFluid />}
        className={cx(['demo-background-color'])}
      />
    )}
    extensions={<Placeholder text="Extensions" type="menu-extensions" />}
    content={<Placeholder text="Content" type="default" />}
    footer={<Placeholder text="Footer" type="footer" />}
  />
);


export default ApplicationMenuNameStandard;
