import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  isLabelHidden: PropTypes.bool,
  label: PropTypes.string,
  children: PropTypes.node,
};

const TabContentTemplate = ({ isLabelHidden, label, children }) => (
  <div className={cx('tab-content-template')}>
    {isLabelHidden ? <h3>{label}</h3> : null}
    {children || (
      <div>
        Content for
        <i>{label}</i>
      </div>
    )}
  </div>
);

TabContentTemplate.propTypes = propTypes;
export default TabContentTemplate;
