import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import Image from 'terra-image';
import classNames from 'classnames/bind';
import Placeholder from 'terra-application-name/lib/terra-dev-site/doc/common/Placeholder';
import ApplicationHeaderName from 'terra-application-name/lib/ApplicationHeaderName';
import demoColors from '../../test/application-name/demoStyles.module.scss';
import styles from './ApplicationHeaderNameStandard.module.scss';

const cx = classNames.bind(demoColors);
const cy = classNames.bind(styles);
const ApplicationHeaderNameStandard = () => (
  <ApplicationHeaderLayout
    className={cy('demo-size')}
    logo={(
      <ApplicationHeaderName
        title="App-Name"
        accessory={<Image alt="Terra Logo" variant="rounded" src="https://github.com/cerner/terra-framework/raw/master/terra.png" className={cx('demo-image-container')} isFluid />}
        className={cx(['demo-background-color'])}
      />
    )}
    extensions={<Placeholder text="Extensions" type="header-extensions" />}
    navigation={<Placeholder text="Content" type="default" />}
    utilities={<Placeholder text="Utiltities" type="utiltities" />}
  />
);

export default ApplicationHeaderNameStandard;
