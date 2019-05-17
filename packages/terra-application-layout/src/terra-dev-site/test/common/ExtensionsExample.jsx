/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import classNames from 'classnames/bind';
import demoStyles from './demoStyles.scss';

const cx = classNames.bind(demoStyles);

const ApplicationHeaderDefault = ({ ...customProps }) => {
  if (customProps.layoutConfig.size !== 'large') {
    return (
      <div className={cx('application-layout-header-default-content')}>
        Test Extensions Small
      </div>
    );
  }

  return (
    <div className={cx(['demo-extensions'])}>
      Test Extensions Large
    </div>
  );
};

export default ApplicationHeaderDefault;
