import React from 'react';
import ApplicationHeaderLayout from 'terra-application-header-layout';
import Image from 'terra-image';
import classNames from 'classnames/bind';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import Placeholder from 'terra-application-name/lib/terra-dev-site/doc/common/Placeholder';
import ApplicationHeaderName from 'terra-application-name/lib/ApplicationHeaderName';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import demoColors from '../../test/application-name/demoStyles.scss';

const cx = classNames.bind(demoColors);
const demosize = { height: '50px', width: '100%' };
const ApplicationHeaderNameStandard = () => (
  <ApplicationHeaderLayout
    style={demosize}
    logo={(
      <ApplicationHeaderName
        title="App-Name"
        accessory={<Image alt="Terra Logo" variant="rounded" src="https://github.com/cerner/terra-framework/raw/master/terra.png" height="26px" width="26px" isFluid />}
        className={cx(['demo-background-color'])}
      />
    )}
    extensions={<Placeholder text="Extensions" width="100px" />}
    navigation={<Placeholder text="Content" />}
    utilities={<Placeholder text="Utilities" width="100px" />}
  />
);

export default ApplicationHeaderNameStandard;
