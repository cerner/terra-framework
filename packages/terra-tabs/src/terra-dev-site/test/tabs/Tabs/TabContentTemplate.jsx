import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './TabContentTemplate.scss';

const cx = classNames.bind(styles);

const propTypes = {
  isLabelHidden: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
};


const TabContentTemplate = ({ isLabelHidden, label, id }) => (
  <div className={cx(['tabContent', 'content-wrapper'])} id={id}>
    {isLabelHidden ? <h3 className="truncationHeader">{label}</h3> : null}
    Content for
    {' '}
    <i>{label}</i>
  </div>
);

TabContentTemplate.propTypes = propTypes;
export default TabContentTemplate;
